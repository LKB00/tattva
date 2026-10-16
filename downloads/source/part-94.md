## tattva/organisms/TakePicker.tsx

```tsx
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, RegenerateIcon, RetryIcon } from "../lib/icons";
import { type HeadingLevel, headingTag } from "../lib/useFocusAfter";
import { AIBadge } from "../atoms/AIBadge";
import { AIMark } from "../atoms/AIMark";
import { Button } from "../atoms/Button";
import { KeyHint } from "../atoms/KeyHint";
import { Skeleton } from "../atoms/Skeleton";
import { Waveform, formatMediaTime } from "../atoms/Waveform";
import type { WaveformRegion } from "../atoms/Waveform";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** pending: a slot kept open while the take is made. streaming: playable while the end is still being made. ready: finished. failed: could not be made. */
export type AudioTakeStatus = "pending" | "streaming" | "ready" | "failed";

export interface AudioTake {
  id: string;
  /** Short name, such as "Take 2". Used in every button name, so keep it unique. */
  label: string;
  status: AudioTakeStatus;
  /** A real audio file. Leave out to simulate playback from `duration`. */
  src?: string;
  /** Loudness per slice, each 0 to 1. Leave out for a plain bar. */
  peaks?: number[];
  /** Length in seconds. */
  duration?: number;
  /** In the streaming state, the seconds made so far. The rest is drawn dashed. */
  madeUpTo?: number;
  /** What sets this take apart from the others, in a few words each, such as "Slower, 84 BPM" or "Piano lead". */
  differs?: string[];
  /** Why it failed, in plain words, such as "The model stopped early. You were not charged." */
  error?: string;
}

export interface TakePickerProps {
  takes: AudioTake[];
  /** Ids of the kept takes. */
  kept: string[];
  onKeptChange: (ids: string[]) => void;
  /** Lets the person keep more than one take. Off: Keep works like a radio choice. */
  multiple?: boolean;
  /** Shows the make-more button. */
  onMore?: () => void;
  /** Text of the make-more button. */
  moreLabel?: string;
  /** Cost shown beside the make-more button, such as "about 10 credits". */
  moreCost?: string;
  /** The takes replace one section of a longer song. Play then runs from `context` seconds before the section to `context` after it, so the seams can be heard, and the section is marked on each waveform. */
  section?: { start: number; end: number; label: string };
  /** Seconds of the surrounding song played before and after the section. */
  context?: number;
  /** Shows Try again on a failed take. */
  onRetryTake?: (id: string) => void;
  /** Heading of the picker. */
  title?: string;
  /** The request the takes were made from, shown under the heading. */
  prompt?: string;
  /** Line by the make-more button. */
  note?: string;
  /** Once every take has finished and none is kept, says in amber that a person must pick one. */
  requirePick?: boolean;
  headingLevel?: HeadingLevel;
  className?: string;
}

const PLAY_EVENT = "tattva-audio-play";
const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

const PlayGlyph = () => <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>;
const PauseGlyph = () => <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor"><rect x="6.5" y="5" width="4" height="14" rx="1" /><rect x="13.5" y="5" width="4" height="14" rx="1" /></svg>;

/** The one sentence the picker speaks. It changes only when a take's status changes, never with the clock. */
export function takePickerSummary(takes: AudioTake[], keptCount = 0): string {
  if (!takes.length) return "";
  const n = (s: AudioTakeStatus) => takes.filter((t) => t.status === s).length;
  const ready = n("ready");
  const making = n("pending") + n("streaming");
  const failed = n("failed");
  let text = making && !ready ? `Making ${plural(takes.length, "take")}.`
    : making ? `${ready} of ${plural(takes.length, "take")} ready, ${making} still being made.`
    : `${plural(n("ready"), "take")} ready.`;
  if (failed) text += ` ${failed} failed.`;
  if (!making && n("ready") && !keptCount) text += " Pick one to keep.";
  return text;
}

/**
 * Compare a few AI-made takes of the same request and keep one (or several).
 * Rows are a list, not a radio group: each has Play, a waveform you can seek, the length, what is different, and Keep.
 * One shared playhead runs across every take, so moving from one take to the next plays from the same moment: the A/B comparison.
 * Nothing plays by itself, and starting a take pauses any other player on the page.
 */
export function TakePicker({
  takes, kept, onKeptChange, multiple = false, onMore, moreLabel = "Make 2 more", moreCost, section, context = 3, onRetryTake,
  title = "Takes", prompt, note = "Takes you don't keep stay in history.", requirePick = true, headingLevel = 3, className,
}: TakePickerProps) {
  const id = useId();
  const H = headingTag(headingLevel);
  const reduced = useReducedMotion();
  const audio = useRef<HTMLAudioElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [pos, setPos] = useState(section ? Math.max(0, section.start - context) : 0);
  const posRef = useRef(pos);
  posRef.current = pos;

  const playing = takes.find((t) => t.id === playingId) ?? null;
  const playable = (t: AudioTake) => (t.status === "ready" || t.status === "streaming") && (t.duration ?? 0) > 0;
  // The stretch a take is played over: the whole take, or the section with a little of the song around it.
  const windowOf = useCallback((t: AudioTake): [number, number] => {
    const dur = t.duration ?? 0;
    const made = t.status === "streaming" ? Math.min(dur, t.madeUpTo ?? dur) : dur;
    return section ? [clamp(section.start - context, 0, made), clamp(section.end + context, 0, made)] : [0, made];
  }, [section, context]);

  const stop = useCallback(() => { setPlayingId(null); audio.current?.pause(); }, []);

  const play = (t: AudioTake) => {
    if (!playable(t)) return;
    if (playingId === t.id) { stop(); return; }
    // Same position as the take that was playing, so the switch is an instant A/B. From the start when nothing was.
    const [from, to] = windowOf(t);
    const at = posRef.current;
    const start = at >= from && at < to - 0.25 ? at : from;
    setPos(start);
    setPlayingId(t.id);
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
  };

  // Only one player on the page plays at a time.
  useEffect(() => {
    const other = (e: Event) => { if ((e as CustomEvent).detail !== id) stop(); };
    window.addEventListener(PLAY_EVENT, other);
    return () => window.removeEventListener(PLAY_EVENT, other);
  }, [id, stop]);

  // A take that stops being playable (retried, removed) stops playing.
  useEffect(() => { if (playingId && (!playing || !playable(playing))) stop(); });

  // A real file plays through one audio element, starting at the shared position.
  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    if (!playing?.src) { a.pause(); return; }
    const begin = () => { a.currentTime = posRef.current; a.play().catch(() => setPlayingId(null)); };
    if (a.getAttribute("src") !== playing.src) { a.src = playing.src; a.addEventListener("loadedmetadata", begin, { once: true }); }
    else begin();
  }, [playing?.id, playing?.src]); // eslint-disable-line react-hooks/exhaustive-deps

  // Without a file a clock moves the shared position. It ticks less often with reduced motion.
  useEffect(() => {
    if (!playing || playing.src) return;
    const [, to] = windowOf(playing);
    let last = performance.now();
    const t = window.setInterval(() => {
      const now = performance.now();
      const next = posRef.current + (now - last) / 1000;
      last = now;
      if (next >= to) { stop(); setPos(section ? windowOf(playing)[0] : to); } else setPos(next);
    }, reduced ? 250 : 100);
    return () => window.clearInterval(t);
  }, [playing, reduced, windowOf, stop, section]);

  const onTime = () => {
    const a = audio.current;
    if (!a || !playing) return;
    const [from, to] = windowOf(playing);
    if (a.currentTime >= to) { stop(); setPos(section ? from : to); } else setPos(a.currentTime);
  };

  const seek = (t: number) => {
    setPos(t);
    if (audio.current && playing?.src) audio.current.currentTime = t;
  };

  const toggleKeep = (t: AudioTake) => {
    const on = kept.includes(t.id);
    onKeptChange(on ? kept.filter((k) => k !== t.id) : multiple ? [...kept, t.id] : [t.id]);
  };

  // 1 to 9 play that take while focus is in the list. Never while typing, and never with a modifier key.
  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey || isTyping(e.target)) return;
    const n = Number(e.key);
    if (!Number.isInteger(n) || n < 1 || n > takes.length) return;
    const t = takes[n - 1];
    if (!playable(t)) return;
    e.preventDefault();
    play(t);
  };

  const making = takes.some((t) => t.status === "pending" || t.status === "streaming");
  const readyCount = takes.filter((t) => t.status === "ready").length;
  const allFailed = takes.length > 0 && takes.every((t) => t.status === "failed");
  const needsPick = requirePick && !making && readyCount > 0 && kept.length === 0;
  const playableCount = takes.filter(playable).length;
  const summary = takePickerSummary(takes, kept.length);
  const regions: WaveformRegion[] | undefined = section ? [{ start: section.start, end: section.end, kind: "ai" }] : undefined;
  const listId = `${id}-list`;

  return (
    <section aria-labelledby={`${id}-h`} className={cn("@container flex min-w-0 flex-col gap-3 rounded-card border border-line bg-surface p-3 sm:p-4", className)}>
      {takes.some((t) => t.src) ? (
        <audio ref={audio} preload="metadata" className="hidden" onTimeUpdate={onTime} onEnded={() => stop()} onError={() => stop()} />
      ) : null}

      <header className="flex flex-wrap items-start gap-x-3 gap-y-1">
        <div className="min-w-0 flex-1">
          <H id={`${id}-h`} className="text-body leading-5 font-semibold text-fg">{title}</H>
          {prompt && <p className="mt-0.5 text-small text-fg-muted">{prompt}</p>}
        </div>
        <AIBadge label="Made by AI" />
      </header>

      {section && (
        <p className="text-small text-fg-muted">
          Each take replaces {section.label}. Play runs from {context} seconds before it to {context} seconds after it, so you hear the joins.
        </p>
      )}

      {needsPick && (
        <p className="flex items-center gap-2 rounded-field bg-attention-soft px-3 py-2 text-compact text-attention-fg">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-attention" />
          <span><span className="font-medium">Pick a take to keep.</span> Listen to each, then press Keep.</span>
        </p>
      )}

      {allFailed ? (
        <div className="flex items-start gap-2 rounded-field bg-sunken px-3 py-3 text-compact text-fg">
          <AlertIcon width={16} height={16} aria-hidden className="mt-0.5 shrink-0 text-danger-fg" />
          <span>None of the takes could be made. {takes[0]?.error ?? "Try again, or change the request."}</span>
        </div>
      ) : (
        <ul id={listId} aria-label={title} onKeyDown={onKey} className="flex flex-col gap-2">
          {takes.map((t, i) => {
            const isKept = kept.includes(t.id);
            const isPlaying = playingId === t.id;
            const dur = t.duration ?? 0;
            const canPlay = playable(t);
            const showPos = clamp(pos, 0, dur);
            if (t.status === "pending") {
              return (
                <li key={t.id} className="flex min-h-22 items-center gap-3 rounded-card border border-dashed border-line-strong px-3 py-2">
                  <span aria-hidden className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-sunken">
                    <span className="size-2 rounded-full bg-lime ring-1 ring-fg-muted motion-safe:animate-pulse-dot" />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="text-compact text-fg">Making {t.label.toLowerCase().startsWith("take") ? t.label.toLowerCase() : t.label}</span>
                    <Skeleton className="h-6 w-full motion-reduce:animate-none" />
                  </div>
                </li>
              );
            }
            if (t.status === "failed") {
              return (
                <li key={t.id} className="flex min-h-22 flex-wrap items-center gap-3 rounded-card border border-line bg-sunken px-3 py-2">
                  <AlertIcon width={20} height={20} aria-hidden className="ml-3 shrink-0 text-danger-fg" />
                  <div className="min-w-40 flex-1">
                    <p className="text-compact font-medium text-fg">{t.label} could not be made</p>
                    <p className="text-small text-fg-muted">{t.error ?? "Something went wrong while making it."}</p>
                  </div>
                  {onRetryTake && (
                    <Button size="sm" variant="secondary" onClick={() => onRetryTake(t.id)} leading={<RetryIcon width={14} height={14} />}
                      aria-label={`Try ${t.label} again`} className="pointer-coarse:h-11">Try again</Button>
                  )}
                </li>
              );
            }
            return (
              <li key={t.id}
                className={cn("flex min-h-22 items-start gap-3 rounded-card border px-3 py-2 transition-colors duration-(--dur-fast) motion-safe:animate-rise",
                  isKept ? "border-fg bg-surface forced-colors:border-[Highlight]" : "border-line bg-surface")}>
                <button type="button" onClick={() => play(t)} aria-label={`Play ${t.label}`} aria-pressed={isPlaying}
                  className="mt-1 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-on-accent transition-colors duration-(--dur-instant) hover:bg-accent-hover">
                  {isPlaying ? <PauseGlyph /> : <PlayGlyph />}
                </button>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                    <span aria-hidden className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} className="size-3" /></span>
                    <span className="text-compact font-medium text-fg">{t.label}</span>
                    {playableCount > 1 && i < 9 && <span aria-hidden className="pointer-coarse:hidden"><KeyHint>{i + 1}</KeyHint></span>}
                    {isKept && <span className="inline-flex items-center gap-1 text-small font-medium text-fg"><CheckIcon width={14} height={14} aria-hidden />Kept</span>}
                    <span className="text-small text-fg-muted tabular-nums">
                      {isPlaying ? <>{formatMediaTime(showPos)} / </> : null}{formatMediaTime(dur)}
                      {t.status === "streaming" && <> · Still making the end</>}
                      {isPlaying && <span className="sr-only"> playing</span>}
                    </span>
                  </div>
                  {t.differs && t.differs.length > 0 && (
                    <p className="flex flex-wrap gap-1 text-small text-fg-muted">
                      <span className="sr-only">Different: </span>
                      {t.differs.map((d, k) => (
                        <span key={k} className="rounded-control border border-line bg-sunken px-1.5 text-micro leading-5 text-fg-muted">{d}{k < t.differs!.length - 1 && <span className="sr-only">,</span>}</span>
                      ))}
                    </p>
                  )}
                  <Waveform peaks={t.peaks ?? []} simple={!t.peaks} duration={dur} position={showPos} onSeek={canPlay ? seek : undefined}
                    label={`Seek, ${t.label}`} height={32} regions={regions}
                    pendingFrom={t.status === "streaming" ? (t.madeUpTo ?? dur) : undefined} />
                </div>
                <Button size="sm" variant={isKept ? "primary" : "secondary"} onClick={() => toggleKeep(t)} aria-pressed={isKept}
                  aria-label={`Keep ${t.label}`} disabled={t.status !== "ready"} title={t.status !== "ready" ? "You can keep it once it has finished" : undefined}
                  leading={isKept ? <CheckIcon width={14} height={14} /> : undefined}
                  className="mt-1.5 shrink-0 pointer-coarse:h-11 pointer-coarse:min-w-11">
                  Keep
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      {playableCount > 1 && (
        <p className="flex flex-wrap items-center gap-1.5 text-small text-fg-muted pointer-coarse:hidden">
          <KeyHint>1</KeyHint>to<KeyHint>{Math.min(9, takes.length)}</KeyHint>play a take while you are in the list. Switching takes keeps your place.
        </p>
      )}

      {(onMore || note) && (
        <footer className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-3">
          {note && <p className="min-w-40 flex-1 text-small text-fg-muted">{note}</p>}
          {onMore && (
            <span className="flex flex-wrap items-center gap-2">
              {moreCost && <span className="text-small text-fg-muted">{moreCost}</span>}
              <Button size="sm" variant="lime" onClick={onMore} busy={making} busyLabel="Still making takes"
                leading={<RegenerateIcon width={14} height={14} />} className="pointer-coarse:h-11">{moreLabel}</Button>
            </span>
          )}
        </footer>
      )}

      {/* Status changes only: never the clock, never each take on its own. */}
      <span role="status" className="sr-only">{summary}</span>
    </section>
  );
}
```
