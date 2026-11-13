## tattva/atoms/FrameScrubber.tsx

```tsx
import { useRef, useState } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { formatMediaTime, speakMediaTime } from "./Waveform";

export interface FrameScrubberProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Length of the clip in seconds. 0 or less shows a disabled, empty track (length not known yet). */
  duration: number;
  /** Playhead in seconds. The parent owns it. */
  value: number;
  /** Called with the new time after a drag, a tap or a key press. */
  onChange: (seconds: number) => void;
  /** Name of the slider, such as "Seek, take 3". */
  label: string;
  /** Frames per second. Turns on frame steps (comma and period, or Shift with an arrow, while the scrubber has focus) and snaps every move to a whole frame. */
  fps?: number;
  /** Seconds moved by an arrow key. */
  step?: number;
  /** Still images spread evenly over the clip. The nearest one shows above the playhead while dragging or pointing. */
  thumbnails?: string[];
  /** Draws the preview above the playhead for a time, when there are no image thumbnails (for example a drawn frame). */
  renderThumbnail?: (seconds: number) => ReactNode;
  /** Called when a drag starts and ends, so a player can pause while scrubbing. */
  onScrubbingChange?: (scrubbing: boolean) => void;
  /** Blocks seeking. The slider stays focusable and says it is unavailable. */
  disabled?: boolean;
  className?: string;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** "3.2 seconds" under a minute, where tenths matter; "1 minute 12 seconds" past it. */
export function speakClipTime(seconds: number): string {
  const t = Math.max(0, seconds || 0);
  if (t >= 60) return speakMediaTime(t);
  const r = Math.round(t * 10) / 10;
  return `${Number.isInteger(r) ? r : r.toFixed(1)} second${r === 1 ? "" : "s"}`;
}

/** The frame number counted from 1, as people say it. */
export const frameAt = (seconds: number, fps: number) => Math.floor(Math.max(0, seconds) * fps + 1e-6) + 1;

/**
 * The seek slider for a video clip. A thin track with a 44px hit area, the played part in ink (never the AI colour),
 * value text in words, and frame steps on comma and period that work only while the scrubber itself has focus.
 */
export function FrameScrubber({
  duration, value, onChange, label, fps, step = 1, thumbnails, renderThumbnail, onScrubbingChange, disabled = false, className, ...rest
}: FrameScrubberProps) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<number | null>(null);
  const [dragAt, setDragAt] = useState<number | null>(null);
  const [hoverAt, setHoverAt] = useState<number | null>(null);

  const dur = Math.max(0, duration || 0);
  const live = !disabled && dur > 0;
  const frame = fps ? 1 / fps : 0;
  const snap = (t: number) => clamp(frame ? Math.round(t / frame) * frame : t, 0, dur);
  const pos = clamp(dragAt ?? value, 0, dur);
  const pct = (s: number) => `${dur ? (clamp(s, 0, dur) / dur) * 100 : 0}%`;
  const totalFrames = fps ? Math.max(1, Math.round(dur * fps)) : 0;

  const timeAt = (clientX: number) => {
    const r = track.current?.getBoundingClientRect();
    return r && r.width ? snap(clamp((clientX - r.left) / r.width, 0, 1) * dur) : 0;
  };
  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if (!live || (ev.pointerType === "mouse" && ev.button !== 0)) return;
    ev.currentTarget.setPointerCapture(ev.pointerId);
    ev.currentTarget.focus();
    drag.current = ev.pointerId;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onScrubbingChange?.(true);
    onChange(t);
  };
  const move = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current === ev.pointerId) { const t = timeAt(ev.clientX); setDragAt(t); onChange(t); }
    else if (live && ev.pointerType === "mouse") setHoverAt(timeAt(ev.clientX));
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    drag.current = null;
    setDragAt(null);
    onScrubbingChange?.(false);
  };
  const key = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!live || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const k = ev.key;
    const one = frame || 0.1;
    let to: number;
    // Frame steps: comma and period, or Shift with an arrow. They only reach here while this slider has focus.
    if (k === "," || (ev.shiftKey && (k === "ArrowLeft" || k === "ArrowDown"))) to = value - one;
    else if (k === "." || (ev.shiftKey && (k === "ArrowRight" || k === "ArrowUp"))) to = value + one;
    else if (k === "ArrowRight" || k === "ArrowUp") to = value + step;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = value - step;
    else if (k === "PageUp") to = value + step * 10;
    else if (k === "PageDown") to = value - step * 10;
    else if (k === "Home") to = 0;
    else if (k === "End") to = dur;
    else return;
    ev.preventDefault();
    ev.stopPropagation();
    onChange(snap(to));
  };

  const valueText = dur > 0
    ? `${speakClipTime(value)} of ${speakClipTime(dur)}${fps ? `, frame ${Math.min(frameAt(value, fps), totalFrames)} of ${totalFrames}` : ""}`
    : "Length not known yet";

  const peekAt = dragAt ?? hoverAt;
  const thumbFor = (t: number) => {
    if (thumbnails?.length) {
      const i = clamp(Math.round((t / (dur || 1)) * (thumbnails.length - 1)), 0, thumbnails.length - 1);
      return <img src={thumbnails[i]} alt="" className="size-full object-cover" />;
    }
    return renderThumbnail?.(t);
  };
  const hasThumbs = !!thumbnails?.length || !!renderThumbnail;

  return (
    <div className={cn("relative min-w-0", className)} {...rest}>
      <div ref={track} role="slider" tabIndex={0} aria-label={label}
        aria-valuemin={0} aria-valuemax={Math.round(dur * 10) / 10} aria-valuenow={Math.round(clamp(value, 0, dur) * 10) / 10}
        aria-valuetext={valueText} aria-orientation="horizontal" aria-disabled={!live || undefined}
        onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={() => setHoverAt(null)}
        className={cn("group relative flex min-h-11 touch-none items-center rounded-sm select-none", live ? "cursor-pointer" : "cursor-default")}>
        {/* The drawn track is 4px; the slider box around it is the 44px hit area. */}
        <span aria-hidden className="relative block h-1 w-full rounded-full bg-line-strong forced-colors:bg-[GrayText]">
          <span className="absolute inset-y-0 left-0 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ width: pct(pos) }} />
        </span>
        {live && (
          <span aria-hidden className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-fg shadow-sm transition-transform duration-(--dur-fast) group-hover:scale-110 group-focus-visible:scale-110 forced-colors:bg-[CanvasText] motion-reduce:transition-none"
            style={{ left: pct(pos) }} />
        )}
      </div>
      {live && peekAt !== null && (
        <span aria-hidden className="pointer-events-none absolute bottom-full z-10 mb-1 flex -translate-x-1/2 flex-col items-center gap-1"
          style={{ left: `clamp(var(--spacing) * 10, ${pct(peekAt)}, 100% - var(--spacing) * 10)` }}>
          {hasThumbs && <span className="block h-11 w-20 overflow-hidden rounded-sm border border-line bg-sunken shadow-md">{thumbFor(peekAt)}</span>}
          <span className="rounded-control bg-inverse px-1.5 py-0.5 text-small text-inverse-fg tabular-nums shadow-sm">
            {formatMediaTime(peekAt)}{fps ? ` · frame ${frameAt(peekAt, fps)}` : ""}
          </span>
        </span>
      )}
    </div>
  );
}
```

## tattva/atoms/GhostText.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { XIcon } from "../lib/icons";
import { Kbd } from "./Kbd";

export interface GhostTextProps {
  /** The suggested continuation, shown dimmed. */
  children: string;
  /** Text the person already typed. Rendered in normal ink before the suggestion. */
  typed?: ReactNode;
  /** Id for the visually hidden description. Point the field's aria-describedby at it. */
  id?: string;
  /** Key that accepts the whole suggestion. Shown in the hint. */
  acceptKey?: string;
  /** Key that dismisses the suggestion. Announced to assistive tech. */
  dismissKey?: string;
  /** Text for a partial accept path, for example "Ctrl + Right accepts one word". Omit when partial accept is not offered. */
  partialHint?: string;
  /** Override the text read by assistive tech. The default names the suggestion, the accept key and the dismiss key. */
  description?: string;
  /** Called when the hint is activated. The consumer wires the real key (usually Tab) to the same handler. */
  onAccept?: () => void;
  /** Called when the dismiss control is activated. The consumer wires Escape to the same handler. */
  onDismiss?: () => void;
  /** Accessible names for the two controls. */
  acceptLabel?: string;
  dismissLabel?: string;
  className?: string;
}

/**
 * Dimmed inline suggestion shown after typed text. The visible suggestion is hidden from the accessibility tree and
 * a visually hidden description carries the same text, so it is read as a pending suggestion and not as typed text.
 * It never uses aria-live. The consumer owns key handling.
 */
export function GhostText({
  children, typed, id, acceptKey = "Tab", dismissKey = "Esc", partialHint, description,
  onAccept, onDismiss, acceptLabel = "Accept suggestion", dismissLabel = "Dismiss suggestion", className,
}: GhostTextProps) {
  const hint = <Kbd>{acceptKey}</Kbd>;
  return (
    <span className={cn("inline", className)}>
      {typed}
      <span id={id} className="sr-only">
        {description ?? `Suggestion available: ${children}. Press ${acceptKey} to accept, ${dismissKey} to dismiss.${partialHint ? ` ${partialHint}.` : ""}`}
      </span>
      <span aria-hidden="true" data-ghost className="rounded-sm bg-sunken text-fg-subtle underline decoration-line-strong decoration-dotted underline-offset-4">{children}</span>
      <span className="ml-1.5 inline-flex items-center gap-1 align-middle">
        {onAccept
          ? <button type="button" aria-label={`${acceptLabel}, ${acceptKey}`} onClick={onAccept} className="cursor-pointer rounded-md">{hint}</button>
          : <span aria-hidden="true">{hint}</span>}
        {partialHint && <span aria-hidden="true" className="text-micro text-fg-subtle">{partialHint}</span>}
        {onDismiss && (
          <button type="button" aria-label={dismissLabel} title={dismissLabel} onClick={onDismiss}
            className="inline-flex size-5 cursor-pointer items-center justify-center rounded-control text-fg-subtle hover:bg-hover hover:text-fg">
            <XIcon width={12} height={12} />
          </button>
        )}
      </span>
    </span>
  );
}
```

## tattva/atoms/Grid.tsx

```tsx
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { spaceValue, type Space } from "./Stack";

export type Cols = 1 | 2 | 3 | 4 | 6 | 8 | 12;

const base: Record<Cols, string> = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 6: "grid-cols-6", 8: "grid-cols-8", 12: "grid-cols-12" };
const md: Record<Cols, string> = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 6: "md:grid-cols-6", 8: "md:grid-cols-8", 12: "md:grid-cols-12" };
const lg: Record<Cols, string> = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 6: "lg:grid-cols-6", 8: "lg:grid-cols-8", 12: "lg:grid-cols-12" };

export interface GridCols {
  /** Columns below md. Default 4. */
  base?: Cols;
  /** Columns from md (840px). Default 8. */
  md?: Cols;
  /** Columns from lg (1200px). Default 12. */
  lg?: Cols;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Column counts per window class. Defaults follow the 4, 8, 12 column system. */
  cols?: GridCols;
  /** Minimum item width as a CSS length such as "16rem". When set, the grid auto-fits and `cols` is ignored. */
  min?: string;
  /** Gap step from 1 to 8, scaled by --density. Omit to use the --gutter token. */
  gap?: Space;
  children?: ReactNode;
}

/** Responsive grid. Items span columns with Tailwind col-span utilities. */
export function Grid({ cols, min, gap, className, style, children, ...rest }: GridProps) {
  const c = { base: 4 as Cols, md: 8 as Cols, lg: 12 as Cols, ...cols };
  const s: CSSProperties = {
    gap: gap ? spaceValue(gap) : "var(--gutter)",
    ...(min ? { gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}), 1fr))` } : null),
    ...style,
  };
  return <div {...rest} className={cn("grid", !min && [base[c.base], md[c.md], lg[c.lg]].join(" "), className)} style={s}>{children}</div>;
}
```

## tattva/atoms/HeroHeading.tsx

```tsx
import { useEffect, useState } from "react";

/** Serif headline that types itself in once. Static for reduced-motion users and screen readers. */
export function HeroHeading({ text, type = true }: { text: string; type?: boolean }) {
  const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(type && !reduce ? 0 : text.length);
  useEffect(() => {
    if (!type || reduce) return;
    setN(0);
    const t = window.setInterval(() => setN((v) => { if (v >= text.length) { window.clearInterval(t); return v; } return v + 1; }), 28);
    return () => window.clearInterval(t);
  }, [text, type, reduce]);
  return (
    <h2 aria-label={text} className="text-balance text-center text-title-md leading-9 tracking-snug text-fg sm:text-head-sm sm:leading-headline">
      <span aria-hidden>{text.slice(0, n)}</span>
    </h2>
  );
}
```
