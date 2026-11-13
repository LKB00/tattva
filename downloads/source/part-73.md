## tattva/organisms/LiveLog.tsx

```tsx
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, XIcon } from "../lib/icons";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { JumpToLatest } from "../molecules/JumpToLatest";

export type LiveLogLevel = "info" | "warn" | "error";

export interface LiveLogLine {
  id: string;
  text: string;
  /** Already formatted, e.g. "10:42:03". */
  time?: string;
  /** info lines carry no marker. warn and error lines show an icon and a word. */
  level?: LiveLogLevel;
}

export interface LiveLogProps {
  /** Every line so far, oldest first. Append only: new lines go on the end. */
  lines: LiveLogLine[];
  /** Keep the newest line in view. Scrolling up turns it off; scrolling back to the bottom turns it on. */
  follow?: boolean;
  onFollowChange?: (follow: boolean) => void;
  /** Hold new lines back. They wait behind an "N new lines" button. */
  paused?: boolean;
  onPauseChange?: (paused: boolean) => void;
  /** Tallest the log grows before it scrolls: a number of spacing steps (64 is 16rem) or a CSS length such as "var(--container-phone)". */
  maxHeight?: number | string;
  /** Accessible name of the log, also shown as its heading. */
  label: string;
  /** Wrap long lines instead of scrolling sideways. */
  wrap?: boolean;
  className?: string;
}

/** At most one spoken update per this many ms, so a burst of lines is read as one summary. */
const SPEAK_GAP = 2000;
/** Lines in a burst after this many arrive together with the last staggered one. */
const STAGGER_CAP = 4;
/** Pixels from the bottom that still count as "at the newest line". */
const NEAR = 4;

const levelMark: Record<Exclude<LiveLogLevel, "info">, { word: string; cls: string; Icon: typeof AlertIcon }> = {
  // Warnings use plain text, not amber: amber is kept for "a person must act".
  warn: { word: "Warning", cls: "text-fg font-medium", Icon: AlertIcon },
  error: { word: "Error", cls: "text-danger-fg font-medium", Icon: XIcon },
};

const spoken = (l: LiveLogLine) => `${l.level && l.level !== "info" ? `${levelMark[l.level].word}: ` : ""}${l.text}`;

/**
 * A streaming, monospaced log of what an agent is doing. It follows the newest line until the person scrolls up,
 * then offers "Jump to latest". Pausing holds new lines back. Screen readers hear single lines as they come and a
 * short summary, at most every 2 seconds, when many arrive at once; nothing is spoken while paused or scrolled up.
 */
export function LiveLog({ lines, follow = true, onFollowChange, paused = false, onPauseChange, maxHeight = 64, label, wrap = false, className }: LiveLogProps) {
  const reduced = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);

  const headId = useId();
  // How many lines were showing when the pause began. Lines past that are held.
  const [frozenAt, setFrozenAt] = useState<number | null>(paused ? lines.length : null);
  // How many lines were showing when following stopped, for the Jump to latest count.
  const [stopAt, setStopAt] = useState<number | null>(follow ? null : lines.length);

  // follow and paused work with or without the parent controlling them.
  const [following, setFollowing] = useState(follow);
  const [prevFollow, setPrevFollow] = useState(follow);
  if (prevFollow !== follow) { setPrevFollow(follow); setFollowing(follow); setStopAt(follow ? null : lines.length); }
  const [isPaused, setIsPaused] = useState(paused);
  const [prevPaused, setPrevPaused] = useState(paused);
  if (prevPaused !== paused) { setPrevPaused(paused); setIsPaused(paused); setFrozenAt(paused ? lines.length : null); }

  const shownCount = isPaused ? Math.min(frozenAt ?? lines.length, lines.length) : lines.length;
  const shown = lines.slice(0, shownCount);
  const held = lines.length - shownCount;
  const unseen = following || stopAt === null ? 0 : Math.max(0, shownCount - stopAt);

  const setFollow = (v: boolean) => {
    if (v === following) return;
    setFollowing(v);
    setStopAt(v ? null : shownCount);
    onFollowChange?.(v);
  };
  const setPause = (v: boolean) => {
    setIsPaused(v);
    setFrozenAt(v ? lines.length : null);
    onPauseChange?.(v);
  };

  // Arrival motion: lines present on first render do not animate. Each later line keeps the delay it got when it
  // first appeared, so a re-render mid-animation does not restart or cut it.
  const delays = useRef<Map<string, number> | null>(null);
  if (delays.current === null) delays.current = new Map(lines.map((l) => [l.id, -1]));
  let burst = 0;
  for (const l of shown) if (!delays.current.has(l.id)) delays.current.set(l.id, Math.min(burst++, STAGGER_CAP));

  useLayoutEffect(() => {
    const el = scroller.current;
    if (el && following) el.scrollTop = el.scrollHeight;
  }, [shownCount, following, wrap]);

  // Announcements. The log itself is polite while following and not paused, so a lone line is read. During a
  // burst it goes quiet and a status line reads a count instead, no more than once per SPEAK_GAP.
  const live = following && !isPaused;
  const [summary, setSummary] = useState("");
  const lastSpoke = useRef(0);
  const pending = useRef(0);
  const timer = useRef<number | null>(null);
  const prevCount = useRef(shownCount);
  const latest = useRef<LiveLogLine | undefined>(undefined);
  latest.current = shown[shown.length - 1];

  useLayoutEffect(() => {
    const el = scroller.current;
    const delta = shownCount - prevCount.current;
    prevCount.current = shownCount;
    if (!el) return;
    if (!live) {
      el.setAttribute("aria-live", "off");
      pending.current = 0;
      if (timer.current !== null) { window.clearTimeout(timer.current); timer.current = null; }
      return;
    }
    if (delta <= 0) { if (timer.current === null) el.setAttribute("aria-live", "polite"); return; }
    const now = Date.now();
    if (delta === 1 && timer.current === null && now - lastSpoke.current >= SPEAK_GAP) {
      el.setAttribute("aria-live", "polite");
      lastSpoke.current = now;
      return;
    }
    el.setAttribute("aria-live", "off");
    pending.current += delta;
    if (timer.current !== null) return;
    timer.current = window.setTimeout(() => {
      timer.current = null;
      const n = pending.current;
      pending.current = 0;
      lastSpoke.current = Date.now();
      const last = latest.current;
      if (n > 0 && last) setSummary(`${n} new ${n === 1 ? "line" : "lines"}. Latest: ${spoken(last)}`);
      scroller.current?.setAttribute("aria-live", "polite");
    }, Math.max(0, lastSpoke.current + SPEAK_GAP - now));
  }, [shownCount, live]);

  useEffect(() => () => { if (timer.current !== null) window.clearTimeout(timer.current); }, []);

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

  const height: CSSProperties = { maxHeight: typeof maxHeight === "number" ? `calc(var(--spacing) * ${maxHeight})` : maxHeight };
  return (
    <div className={cn("flex min-w-0 flex-col overflow-hidden rounded-card border border-line bg-sunken", className)}>
      <div className="flex items-center gap-3 border-b border-line px-3 py-1.5">
        <p id={headId} className="min-w-0 flex-1 truncate text-small font-medium text-fg-muted">{label}</p>
        {isPaused && <span className="text-small text-fg-muted">Paused</span>}
        <button type="button" aria-label={`${isPaused ? "Resume" : "Pause"} ${label}`} onClick={() => setPause(!isPaused)}
          className="inline-flex h-7 cursor-pointer items-center rounded-control px-3 text-small text-fg hover:bg-hover tap">
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
      <div className="relative min-h-0">
        {/* aria-live is set by the effect above, so React never fights it. */}
        <div ref={scroller} role="log" aria-labelledby={headId} tabIndex={0} onScroll={onScroll} style={height}
          className={cn("overflow-auto overscroll-contain px-3 py-2 font-mono text-small text-fg tabular-nums")}>
          {shown.length === 0 ? (
            <p className="text-fg-muted">Nothing yet.</p>
          ) : (
            <ol className="flex flex-col gap-0.5">
              {shown.map((l) => {
                const d = delays.current?.get(l.id) ?? -1;
                const mark = l.level && l.level !== "info" ? levelMark[l.level] : null;
                return (
                  <li key={l.id} style={!reduced && d >= 0 ? { animationDelay: `calc(var(--stagger) * ${d})` } : undefined}
                    className={cn("flex gap-3 leading-5", !reduced && d >= 0 && "animate-blur-in")}>
                    {l.time && <span className="shrink-0 text-fg-subtle">{l.time}</span>}
                    {mark && (
                      <span className={cn("inline-flex shrink-0 items-center gap-1", mark.cls)}>
                        <mark.Icon width={12} height={12} />{mark.word}
                      </span>
                    )}
                    <span className={cn("min-w-0", wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre")}>{l.text}</span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
        {isPaused && held > 0 ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center">
            <button type="button" onClick={() => { setPause(false); toLatest(); }}
              className="pointer-events-auto inline-flex h-9 cursor-pointer items-center gap-2 rounded-control border border-line-strong bg-raised px-4 text-compact text-fg shadow-md hover:bg-hover tap">
              <span className="tabular-nums">{held}</span> new {held === 1 ? "line" : "lines"}
            </button>
          </div>
        ) : (
          <JumpToLatest visible={!following && shown.length > 0} count={unseen} newLabel="New lines" onClick={toLatest} />
        )}
      </div>
      <p role="status" className="sr-only">{live ? summary : ""}</p>
    </div>
  );
}
```
