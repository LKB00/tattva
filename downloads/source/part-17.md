## tattva/molecules/AudioPlayer.tsx

```tsx
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, DownloadIcon, RetryIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Select } from "../atoms/Select";
import { Spinner } from "../atoms/Spinner";
import { Waveform, formatMediaTime } from "../atoms/Waveform";
import type { WaveformMarker, WaveformRegion } from "../atoms/Waveform";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { AILabel } from "./AILabel";

/**
 * loading: getting the file. streaming: playable while the end is still being made. ready: loaded, not started.
 * playing, paused, buffering (waiting for data), ended, error (could not load), unavailable (the app will not play it, with a reason).
 */
export type PlayerState = "loading" | "streaming" | "ready" | "playing" | "paused" | "buffering" | "ended" | "error" | "unavailable";

export interface AudioPlayerProps {
  /** Title of the clip. Also names the player region. */
  title: string;
  /** A second line, such as "Support call, 3 October, 14:02". */
  subtitle?: string;
  /** A real audio file. Leave out to simulate playback from `duration` (for previews, tests and docs). */
  src?: string;
  /** Length in seconds. Needed without `src`; with `src` it is read from the file when left out. */
  duration?: number;
  /** Loudness per slice, each 0 to 1, worked out ahead of time. `null` shows the waveform still drawing. Leave out for a plain bar. */
  peaks?: number[] | null;
  /** Forces a state the player cannot find out on its own: loading, streaming, buffering, error or unavailable. Ready, playing, paused and ended are always tracked by the player. */
  state?: PlayerState;
  /** Position in seconds, when the parent keeps it (for example to sync a transcript). A change of more than a quarter second seeks. */
  current?: number;
  /** Called as the position moves, from playback or a seek. */
  onTimeChange?: (seconds: number) => void;
  /** Called when playback starts or stops. */
  onPlayingChange?: (playing: boolean) => void;
  /** Moments on the timeline, such as tool calls or interruptions. Use tone `review` only for one a person must check. */
  markers?: WaveformMarker[];
  /** Marked stretches, such as an AI-made section. */
  regions?: WaveformRegion[];
  /** In the streaming state, the seconds made so far. The rest of the track is drawn dashed. */
  madeUpTo?: number;
  /** Speeds offered. The first time it plays at 1. */
  speeds?: number[];
  /** The clip was made by AI (a generated voice, song or effect). Adds an AI label; the player itself stays neutral. */
  aiGenerated?: boolean;
  /** What the AI label explains, such as the model and voice used. */
  aiNote?: ReactNode;
  /** Shows a Download button. */
  onDownload?: () => void;
  /** Short note beside Download, such as "2 downloads left this month". */
  downloadNote?: string;
  /** Why it cannot be played, shown in the unavailable state, such as "Recordings are kept for 30 days." */
  unavailableReason?: string;
  /** Message in the error state. */
  errorText?: string;
  /** Shows Try again in the error state. */
  onRetry?: () => void;
  /** Lock-screen details while playing (Media Session). */
  mediaSession?: { artist?: string; artwork?: string };
  /** One row, 56px tall, for lists. No waveform, speed or download. */
  compact?: boolean;
  className?: string;
}

const STATE_WORD: Record<PlayerState, string> = {
  loading: "Loading", streaming: "Still making the end", ready: "Ready", playing: "Playing", paused: "Paused",
  buffering: "Buffering", ended: "Ended", error: "Could not play", unavailable: "Not available",
};
const PLAY_EVENT = "tattva-audio-play";

const PlayGlyph = () => <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>;
const PauseGlyph = () => <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor"><rect x="6.5" y="5" width="4" height="14" rx="1" /><rect x="13.5" y="5" width="4" height="14" rx="1" /></svg>;
const ReplayGlyph = () => <RetryIcon width={20} height={20} aria-hidden />;

const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

/**
 * Plays one clip: a call recording, a generated voice or a song. Play and pause, a waveform you can seek, time, speed and download.
 * It works without a file by simulating playback from `duration`, and plays a real file when `src` is set.
 * Nothing plays until the person presses Play, and starting one player pauses any other on the page.
 */
export function AudioPlayer({
  title, subtitle, src, duration, peaks, state: forced, current, onTimeChange, onPlayingChange, markers, regions, madeUpTo,
  speeds = [0.75, 1, 1.25, 1.5, 2], aiGenerated, aiNote, onDownload, downloadNote, unavailableReason, errorText = "This audio could not be loaded.",
  onRetry, mediaSession, compact = false, className,
}: AudioPlayerProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const reduced = useReducedMotion();
  const audio = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(current ?? 0);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [rate, setRate] = useState(1);
  const [fileDur, setFileDur] = useState<number | null>(null);
  const [fileState, setFileState] = useState<"loading" | "ok" | "buffering" | "error">(src ? "loading" : "ok");
  const [slowBuffer, setSlowBuffer] = useState(false);
  const timeRef = useRef(time);
  timeRef.current = time;

  const dur = duration ?? fileDur ?? 0;
  const blocked = forced === "loading" || forced === "error" || forced === "unavailable";
  const derived: PlayerState = src && fileState === "loading" ? "loading" : src && fileState === "error" ? "error"
    : playing && (forced === "buffering" || fileState === "buffering") ? "buffering"
    : playing ? "playing" : ended ? "ended" : time > 0 ? "paused" : "ready";
  // The app can force the states the player cannot see for itself. The rest are tracked here.
  const state: PlayerState = blocked || forced === "buffering" ? forced! : forced === "streaming" && !playing && !ended ? "streaming" : derived;
  const canPlay = state !== "loading" && state !== "error" && state !== "unavailable" && dur > 0;

  const report = useCallback((t: number) => { setTime(t); onTimeChange?.(t); }, [onTimeChange]);

  const setPlay = useCallback((on: boolean) => {
    setPlaying(on);
    onPlayingChange?.(on);
    if (on) window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
  }, [id, onPlayingChange]);

  const seek = useCallback((t: number) => {
    const to = Math.min(Math.max(0, t), dur || 0);
    if (audio.current) audio.current.currentTime = to;
    setEnded(false);
    report(to);
  }, [dur, report]);

  // The parent moved the position (for example a transcript line was pressed).
  useEffect(() => {
    if (current !== undefined && Math.abs(current - timeRef.current) > 0.25) seek(current);
  }, [current, seek]);

  // Only one player plays at a time.
  useEffect(() => {
    const other = (e: Event) => { if ((e as CustomEvent).detail !== id) { setPlaying(false); audio.current?.pause(); } };
    window.addEventListener(PLAY_EVENT, other);
    return () => window.removeEventListener(PLAY_EVENT, other);
  }, [id]);

  // A real file plays through the audio element.
  useEffect(() => {
    const a = audio.current;
    if (!a || !src) return;
    a.playbackRate = rate;
    if (playing && !blocked) a.play().catch(() => { setPlay(false); });
    else a.pause();
  }, [playing, rate, src, blocked, setPlay]);

  // Without a file, a clock moves the position. It ticks less often with reduced motion.
  useEffect(() => {
    if (src || !playing || blocked || forced === "buffering") return;
    const step = reduced ? 250 : 100;
    let last = performance.now();
    const t = window.setInterval(() => {
      const now = performance.now();
      const next = timeRef.current + ((now - last) / 1000) * rate;
      last = now;
      if (next >= dur) { report(dur); setPlay(false); setEnded(true); } else report(next);
    }, step);
    return () => window.clearInterval(t);
  }, [src, playing, blocked, forced, reduced, rate, dur, report, setPlay]);

  // Buffering shows a spinner only after 300ms, so short waits do not flicker.
  const buffering = state === "buffering";
  useEffect(() => {
    if (!buffering) { setSlowBuffer(false); return; }
    const t = window.setTimeout(() => setSlowBuffer(true), 300);
    return () => window.clearTimeout(t);
  }, [buffering]);

  // Lock-screen controls while this clip plays.
  useEffect(() => {
    const ms = typeof navigator !== "undefined" ? navigator.mediaSession : undefined;
    if (!ms || !playing || typeof MediaMetadata === "undefined") return;
    ms.metadata = new MediaMetadata({ title, artist: mediaSession?.artist, artwork: mediaSession?.artwork ? [{ src: mediaSession.artwork }] : undefined });
    ms.setActionHandler("play", () => setPlay(true));
    ms.setActionHandler("pause", () => setPlay(false));
    ms.setActionHandler("seekto", (d) => { if (d.seekTime !== undefined) seek(d.seekTime); });
    return () => { ms.setActionHandler("play", null); ms.setActionHandler("pause", null); ms.setActionHandler("seekto", null); };
  }, [playing, title, mediaSession?.artist, mediaSession?.artwork, setPlay, seek]);

  const toggle = () => {
    if (!canPlay) return;
    if (playing) { setPlay(false); return; }
    if (ended || time >= dur) { seek(0); }
    setEnded(false);
    setPlay(true);
  };

  // Space and K play or pause while focus is in the player, but never while typing or on a control that uses Space itself.
  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey || isTyping(e.target)) return;
    const onButton = e.target instanceof HTMLElement && e.target.tagName === "BUTTON";
    if ((e.key === " " && !onButton) || e.key === "k" || e.key === "K") { e.preventDefault(); toggle(); }
  };

  const glyph = playing ? <PauseGlyph /> : state === "ended" ? <ReplayGlyph /> : <PlayGlyph />;
  const notice = state === "error" || state === "unavailable" || state === "buffering" || state === "ended" || state === "streaming";
  const timeText = <span className="tabular-nums">{formatMediaTime(time)} / {dur ? formatMediaTime(dur) : "–:––"}</span>;

  const playButton = (
    <button type="button" onClick={toggle} aria-label="Play" aria-pressed={playing} aria-disabled={!canPlay || undefined}
      className={cn("relative inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-on-accent transition-colors duration-(--dur-instant) hover:bg-accent-hover",
        !canPlay && "cursor-default bg-sunken text-fg-subtle hover:bg-sunken")}>
      {state === "loading" ? <Spinner size={18} label="Loading" /> : glyph}
      {slowBuffer && <span className="absolute -right-1 -bottom-1 rounded-full bg-surface p-0.5"><Spinner size={14} label="Buffering" /></span>}
    </button>
  );

  const heading = (
    <div className="min-w-0 flex-1">
      <div className="flex min-w-0 items-center gap-2">
        <span id={titleId} className="truncate text-compact font-medium text-fg">{title}</span>
        {aiGenerated && <AILabel level="message" size={16} text="AI" overview={aiNote ?? "This audio was made by an AI voice or music model."} popoverLabel={`About the AI in ${title}`} />}
      </div>
      <p className="truncate text-small text-fg-muted">
        {compact ? <>{timeText} · {STATE_WORD[state]}</> : subtitle ?? STATE_WORD[state]}
      </p>
    </div>
  );

  return (
    <section aria-labelledby={titleId} onKeyDown={onKey}
      className={cn("min-w-0 rounded-card border border-line bg-surface", compact ? "flex min-h-14 items-center gap-3 px-3 py-1.5" : "flex flex-col gap-2 p-3 sm:p-4", className)}>
      {src && (
        <audio ref={audio} src={src} preload="metadata" className="hidden"
          onLoadedMetadata={(e) => { setFileDur(e.currentTarget.duration); setFileState("ok"); }}
          onCanPlay={() => setFileState("ok")} onWaiting={() => setFileState("buffering")} onPlaying={() => setFileState("ok")}
          onError={() => { setFileState("error"); setPlay(false); }}
          onTimeUpdate={(e) => report(e.currentTarget.currentTime)}
          onEnded={() => { setPlay(false); setEnded(true); }} />
      )}
      {compact ? (<>{playButton}{heading}</>) : (
        <>
          <div className="flex items-center gap-3">
            {playButton}
            {heading}
          </div>
          {state === "error" ? (
            <div className="flex flex-wrap items-center gap-2 rounded-field bg-sunken px-3 py-2 text-compact text-fg">
              <AlertIcon width={16} height={16} aria-hidden className="shrink-0 text-danger-fg" />
              <span className="min-w-40 flex-1">{errorText}</span>
              {onRetry && <Button size="sm" variant="secondary" onClick={onRetry} leading={<RetryIcon width={14} height={14} />} className="pointer-coarse:h-11">Try again</Button>}
            </div>
          ) : (
            <Waveform peaks={peaks === undefined ? (state === "loading" ? null : []) : state === "loading" ? null : peaks}
              simple={peaks === undefined} duration={dur} position={time} onSeek={canPlay ? seek : undefined}
              label={`Seek, ${title}`} markers={markers} regions={regions} height={48}
              pendingFrom={forced === "streaming" ? (madeUpTo ?? dur) : undefined} />
          )}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-small text-fg-muted">
            {timeText}
            <span className="flex-1" />
            {speeds.length > 1 && (
              <span className="w-24 shrink-0"><Select size="sm" aria-label="Playback speed" value={String(rate)} disabled={!canPlay}
                onChange={(e) => setRate(Number(e.target.value))}
                options={speeds.map((s) => ({ value: String(s), label: `${s}×` }))} /></span>
            )}
            {state === "unavailable" ? (
              <span className="text-fg-muted">{unavailableReason ?? "This audio cannot be played or downloaded."}</span>
            ) : onDownload && (
              <span className="flex items-center gap-2">
                {downloadNote && <span>{downloadNote}</span>}
                <Button size="sm" variant="secondary" onClick={onDownload} leading={<DownloadIcon width={14} height={14} />} className="pointer-coarse:h-11">Download</Button>
              </span>
            )}
          </div>
        </>
      )}
      {/* State changes worth hearing; not the clock, and not play or pause, which the button already says. */}
      <span role="status" className="sr-only">{notice ? `${title}: ${STATE_WORD[state]}.${state === "error" ? ` ${errorText}` : ""}${state === "unavailable" && unavailableReason ? ` ${unavailableReason}` : ""}` : ""}</span>
    </section>
  );
}
```
