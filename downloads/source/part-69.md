## tattva/organisms/LiveCaptions.tsx

```tsx
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { AIMark } from "../atoms/AIMark";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { Button } from "../atoms/Button";
import { JumpToLatest } from "../molecules/JumpToLatest";

export type CaptionStatus = "interim" | "final" | "interrupted" | "redacted";
export type CaptionSize = "sm" | "md" | "lg" | "xl";

export interface CaptionLine {
  /** Stable id. An interim line keeps its id when it becomes final, so it settles in place. */
  id: string;
  /** "person", "assistant", or any other speaker key for calls and rooms. */
  speaker: "person" | "assistant" | (string & {});
  /** For redacted lines, write `[hidden]` where the secret was; never pass the secret itself. */
  text: string;
  status: CaptionStatus;
  /** Interrupted lines: how many characters were actually played before the person cut in. */
  spokenUpTo?: number;
  /** Already formatted time or offset, such as "00:42". */
  at?: string;
  /** Redacted lines: what the hidden part was, shown in brackets. Defaults to "number hidden". */
  hiddenLabel?: string;
}

export interface LiveCaptionsProps {
  /** Every line so far, oldest first. Update an interim line by id until it is final. */
  lines: CaptionLine[];
  /** Captions on or off. Keep this setting for the person across sessions. */
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  /** Caption text size. Defaults to lg on a narrow screen and md elsewhere. Store the person's choice. */
  size?: CaptionSize;
  onSizeChange?: (size: CaptionSize) => void;
  /** Keep the newest line in view. Scrolling up turns it off until the person returns to the bottom. */
  follow?: boolean;
  onFollowChange?: (follow: boolean) => void;
  /** Make each line a button that jumps the audio to it (for recordings, not live calls). */
  onSeek?: (id: string) => void;
  /** Names to show for each speaker key. */
  speakerLabels?: Record<string, string>;
  /** Speaker keys that are AI. Their labels carry the AI mark. */
  aiSpeakers?: string[];
  /** Interrupted lines: show the unspoken rest struck through, or leave it out. */
  unspoken?: "show" | "hide";
  /** Read each finished AI line aloud to screen readers, for people who mute the audio. Off by default. */
  announceFinal?: boolean;
  /** Accessible name of the caption log, also shown as its heading. */
  label?: string;
  /** Shown when there are no lines yet. */
  emptyText?: ReactNode;
  /** Show the size control and the Hide button in the header. */
  controls?: boolean;
  /** Tallest the log grows before it scrolls: spacing steps (64 is 16rem) or a CSS length. */
  maxHeight?: number | string;
  className?: string;
}

const NEAR = 4;
const sizeText: Record<CaptionSize, string> = {
  sm: "text-compact",
  md: "text-body-lg",
  lg: "text-subhead",
  xl: "text-title-sm",
};
const sizeOptions: { value: CaptionSize; label: string; description: string }[] = [
  { value: "sm", label: "S", description: "Small captions" },
  { value: "md", label: "M", description: "Medium captions" },
  { value: "lg", label: "L", description: "Large captions" },
  { value: "xl", label: "XL", description: "Extra large captions" },
];
const narrow = () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(max-width: 37.5rem)").matches;

/** Interim text has no end punctuation, so it never looks finished. */
const unfinished = (t: string) => t.replace(/[.!?。]+\s*$/, "");

function Redacted({ text, hiddenLabel = "number hidden" }: { text: string; hiddenLabel?: string }) {
  const chip = (k: number) => (
    <span key={k} className="inline-block rounded-control bg-sunken px-1.5 text-fg-muted">[{hiddenLabel}]</span>
  );
  const parts = text.split("[hidden]");
  if (parts.length === 1) return <>{text} {chip(0)}</>;
  return <>{parts.flatMap((p, i) => (i === 0 ? [p] : [chip(i), p]))}</>;
}

/**
 * A streaming, two-sided caption log for voice. Interim words are lighter with no full stop and settle in place.
 * When the person cuts the assistant off, the words it never said are struck through and named "Not spoken".
 * It follows the newest line until the person scrolls up, then offers Jump to latest. It is a log that people
 * read on demand; it does not read every word aloud.
 */
export function LiveCaptions({
  lines, visible, onVisibleChange, size, onSizeChange, follow = true, onFollowChange, onSeek,
  speakerLabels, aiSpeakers = ["assistant"], unspoken = "show", announceFinal = false, label = "Captions",
  emptyText = "Captions appear here as you talk.", controls = true, maxHeight = 64, className,
}: LiveCaptionsProps) {
  const reduced = useReducedMotion();
  const headId = useId();
  const scroller = useRef<HTMLDivElement>(null);
  const names: Record<string, string> = { person: "You", assistant: "Assistant", ...speakerLabels };
  const isAI = (s: string) => aiSpeakers.includes(s);

  // visible and size work with or without the parent controlling them.
  const [ownVisible, setOwnVisible] = useState(visible ?? true);
  const on = visible ?? ownVisible;
  const setVisible = (v: boolean) => { setOwnVisible(v); onVisibleChange?.(v); };
  const [ownSize, setOwnSize] = useState<CaptionSize>(() => size ?? (narrow() ? "lg" : "md"));
  const textSize = size ?? ownSize;
  const setSize = (s: CaptionSize) => { setOwnSize(s); onSizeChange?.(s); };

  const [following, setFollowing] = useState(follow);
  const [prevFollow, setPrevFollow] = useState(follow);
  const [stopAt, setStopAt] = useState<number | null>(null);
  if (prevFollow !== follow) { setPrevFollow(follow); setFollowing(follow); setStopAt(follow ? null : lines.length); }
  const unseen = following || stopAt === null ? 0 : Math.max(0, lines.length - stopAt);
  const setFollow = (v: boolean) => {
    if (v === following) return;
    setFollowing(v);
    setStopAt(v ? null : lines.length);
    onFollowChange?.(v);
  };

  // Only lines that arrive after the first render fade in. An interim line becoming final keeps its id, so it never re-animates.
  const seen = useRef<Set<string> | null>(null);
  if (seen.current === null) seen.current = new Set(lines.map((l) => l.id));
  const fresh = new Set<string>();
  for (const l of lines) if (!seen.current.has(l.id)) fresh.add(l.id);
  useEffect(() => { for (const id of fresh) seen.current?.add(id); });

  const lastText = lines.length ? lines[lines.length - 1].text : "";
  useLayoutEffect(() => {
    const el = scroller.current;
    if (el && following) el.scrollTop = el.scrollHeight;
  }, [lines.length, lastText, following, textSize, on]);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (following && dist > NEAR) setFollow(false);
    else if (!following && dist <= NEAR) setFollow(true);
  };
  const toLatest = () => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
    setFollow(true);
  };

  // announceFinal: read each AI line once, when it is final or interrupted (only the part that was spoken).
  const [said, setSaid] = useState("");
  const announced = useRef<Set<string> | null>(null);
  if (announced.current === null) announced.current = new Set(lines.filter((l) => l.status !== "interim").map((l) => l.id));
  useEffect(() => {
    if (!announceFinal) return;
    for (const l of lines) {
      if (!isAI(l.speaker) || l.status === "interim" || announced.current?.has(l.id)) continue;
      announced.current?.add(l.id);
      const text = l.status === "interrupted" && l.spokenUpTo != null ? l.text.slice(0, l.spokenUpTo) : l.text.split("[hidden]").join(l.hiddenLabel ?? "number hidden");
      setSaid(`${names[l.speaker] ?? l.speaker}: ${text}`);
    }
  });

  const height: CSSProperties = { maxHeight: typeof maxHeight === "number" ? `calc(var(--spacing) * ${maxHeight})` : maxHeight };

  const body = (l: CaptionLine) => {
    if (l.status === "redacted") return <Redacted text={l.text} hiddenLabel={l.hiddenLabel} />;
    if (l.status === "interim") return <>{unfinished(l.text)}</>;
    if (l.status === "interrupted") {
      const cut = Math.max(0, Math.min(l.text.length, l.spokenUpTo ?? l.text.length));
      const said = l.text.slice(0, cut).trimEnd();
      const rest = l.text.slice(cut).trim();
      return (
        <>
          {said}
          {rest && unspoken === "show" && (
            <> <span className="text-fg-subtle line-through decoration-fg-subtle"><span className="sr-only">Not spoken: </span>{rest}</span></>
          )}
        </>
      );
    }
    return <>{l.text}</>;
  };

  const tag = (l: CaptionLine) =>
    l.status === "interim" ? "Still changing"
    : l.status === "interrupted" ? "Interrupted"
    : l.status === "redacted" ? "Part hidden"
    : "";

  return (
    <section aria-labelledby={headId} className={cn("flex min-w-0 flex-col overflow-hidden rounded-card border border-line bg-surface", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-line px-4 py-2">
        <p id={headId} className="mr-auto text-small font-medium text-fg-muted">{label}</p>
        {controls && on && <SegmentedControl size="sm" label="Caption size" options={sizeOptions} value={textSize} onChange={setSize} />}
        {controls && (
          <Button size="sm" variant="ghost" aria-label={on ? "Hide captions" : "Show captions"} onClick={() => setVisible(!on)} className="tap">
            {on ? "Hide" : "Show"}
          </Button>
        )}
      </div>

      {on ? (
        <div className="relative min-h-0">
          <div ref={scroller} role="log" aria-live="off" aria-labelledby={headId} tabIndex={0} onScroll={onScroll} style={height}
            className="overflow-y-auto overscroll-contain px-4 py-3 focus-visible:[outline-offset:-2px]">
            {lines.length === 0 ? (
              <p className="text-compact text-fg-muted">{emptyText}</p>
            ) : (
              <ol className={cn("flex flex-col gap-3", sizeText[textSize])}>
                {lines.map((l) => {
                  const ai = isAI(l.speaker);
                  const who = names[l.speaker] ?? l.speaker;
                  const t = tag(l);
                  const content = (
                    <>
                      <span className="flex items-center gap-2 text-small leading-5">
                        {ai ? (
                          <span className="inline-flex items-center gap-1 rounded-control bg-lime-soft px-1.5 font-medium text-fg">
                            <AIMark size={16} />{who}
                          </span>
                        ) : (
                          <span className="font-medium text-fg-muted">{who}</span>
                        )}
                        {l.at && <span className="font-mono text-fg-subtle tabular-nums">{l.at}</span>}
                        {t && <span className="text-fg-subtle">{t}</span>}
                      </span>
                      <span className={cn("block break-words", l.status === "interim" ? "text-fg-muted" : "text-fg")}>
                        {body(l)}
                      </span>
                    </>
                  );
                  return (
                    <li key={l.id} className={cn("min-w-0", fresh.has(l.id) && !reduced && "animate-fade")}>
                      {onSeek ? (
                        <button type="button" onClick={() => onSeek(l.id)}
                          className="-mx-2 flex w-[calc(100%+var(--spacing)*4)] cursor-pointer flex-col gap-0.5 rounded-control px-2 py-1 text-left hover:bg-hover">
                          {content}
                        </button>
                      ) : (
                        <div className="flex flex-col gap-0.5">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
          <JumpToLatest visible={!following && lines.length > 0} count={unseen} newLabel="New captions" onClick={toLatest} />
        </div>
      ) : (
        <p className="px-4 py-3 text-compact text-fg-muted">Captions are off.</p>
      )}
      <p role="status" className="sr-only">{announceFinal ? said : ""}</p>
    </section>
  );
}
```
