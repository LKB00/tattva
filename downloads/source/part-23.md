## tattva/molecules/ClipRangeSelector.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Button } from "../atoms/Button";
import { NumberField } from "../atoms/NumberField";
import { formatMediaTime } from "../atoms/Waveform";
import { speakClipTime } from "../atoms/FrameScrubber";

/** editing: the person can move the range. processing: the AI is working on it, so it is locked. applied: done, shown with a note. */
export type ClipRangeStatus = "editing" | "processing" | "applied";

export interface ClipRangeSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Length of the clip in seconds. */
  durationSec: number;
  /** Start and end, in seconds. The parent owns it. */
  range: [number, number];
  /** Called with the new start and end after a drag, a key press, a typed number or a playhead button. */
  onRangeChange: (range: [number, number]) => void;
  /** Name of the control, such as "Part to extend from". Also names the two handles. */
  label: string;
  /** Frames per second. Handles snap to whole frames and the arrow keys move one frame. */
  fps?: number;
  /** The longest range allowed, such as 10. The window cannot be stretched past it. */
  maxSpanSec?: number;
  /** The shortest range allowed. */
  minSpanSec?: number;
  /** Still images spread evenly over the clip, drawn as a filmstrip. */
  thumbnails?: string[];
  /** Draws one filmstrip tile for a time, when there are no image thumbnails. */
  renderThumbnail?: (seconds: number) => ReactNode;
  /** The player's position. Shows a playhead line and the "Set start here" and "Set end here" buttons. */
  playhead?: number;
  /** editing (default), processing (locked while the AI works) or applied. */
  status?: ClipRangeStatus;
  /** Words for the processing or applied status, such as "Extending from this part" or "Applied. Saved as version 3". */
  statusNote?: string;
  className?: string;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const TILES = 8;
type Part = "start" | "end" | "window";

/**
 * Picks the part of a clip to edit, extend from, loop or keep. Two named slider handles over a filmstrip, with the
 * longest allowed length built in: the window cannot pass it, so the person never meets a "too long" error later.
 * Number fields and "Set at playhead" buttons give a way to set it without dragging.
 */
export function ClipRangeSelector({
  durationSec, range, onRangeChange, label, fps, maxSpanSec, minSpanSec = 1, thumbnails, renderThumbnail, playhead, status = "editing",
  statusNote, className, ...rest
}: ClipRangeSelectorProps) {
  const labelId = useId();
  const strip = useRef<HTMLDivElement>(null);
  const drag = useRef<{ part: Part; s0: number; e0: number; t0: number; id: number } | null>(null);
  const [announce, setAnnounce] = useState("");
  const keyTimer = useRef<number | undefined>(undefined);

  const dur = Math.max(0, durationSec || 0);
  const unit = fps ? 1 / fps : 0.1;
  const snap = (t: number) => Math.round(t / unit) * unit;
  const maxSpan = Math.min(dur, maxSpanSec ?? dur);
  const minSpan = clamp(minSpanSec, 0, maxSpan);
  const locked = status === "processing";

  // Normalise what the parent passed. A range longer than the maximum keeps its start and snaps the end back.
  let s = clamp(Math.min(range[0], range[1]), 0, dur);
  let e = clamp(Math.max(range[0], range[1]), 0, dur);
  const rawSpan = e - s;
  const snapped = rawSpan > maxSpan + 1e-6;
  if (snapped) e = s + maxSpan;
  if (e - s < minSpan) { e = Math.min(dur, s + minSpan); s = Math.max(0, e - minSpan); }
  if (e > dur) { e = dur; s = Math.max(0, dur - (e - s)); }
  const span = e - s;
  const atMax = maxSpanSec !== undefined && span >= maxSpan - unit / 2;
  const latest = useRef<[number, number]>([s, e]);
  latest.current = [s, e];

  const spanWords = (a: number, b: number) => `${speakClipTime(a)} to ${speakClipTime(b)}, ${speakClipTime(b - a)} long`;
  const say = () => {
    const [a, b] = latest.current;
    setAnnounce(`${label}: ${spanWords(a, b)}${maxSpanSec !== undefined && b - a >= maxSpan - unit / 2 ? ", the most allowed" : ""}.`);
  };
  useEffect(() => () => window.clearTimeout(keyTimer.current), []);

  const emit = (ns: number, ne: number) => {
    const [cs, ce] = latest.current;
    const a = Number(snap(ns).toFixed(4));
    const b = Number(snap(ne).toFixed(4));
    if (Math.abs(a - cs) > 1e-6 || Math.abs(b - ce) > 1e-6) { latest.current = [a, b]; onRangeChange([a, b]); }
  };
  // Each handle stays within the min and max length of the other; it stops rather than pushing the other handle.
  const moveStart = (t: number, end = latest.current[1]) => emit(clamp(t, Math.max(0, end - maxSpan), end - minSpan), end);
  const moveEnd = (t: number, start = latest.current[0]) => emit(start, clamp(t, start + minSpan, Math.min(dur, start + maxSpan)));
  const moveWindow = (t: number, len = latest.current[1] - latest.current[0]) => { const ns = clamp(t, 0, dur - len); emit(ns, ns + len); };

  const onKey = (part: Part) => (ev: KeyboardEvent<HTMLDivElement>) => {
    if (locked || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const [cs, ce] = latest.current;
    const cur = part === "end" ? ce : cs;
    const big = ev.shiftKey ? 1 : unit;
    const k = ev.key;
    let to: number;
    if (k === "ArrowRight" || k === "ArrowUp") to = cur + big;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = cur - big;
    else if (k === "PageUp") to = cur + 1;
    else if (k === "PageDown") to = cur - 1;
    else if (k === "Home") to = 0;
    else if (k === "End") to = dur;
    else return;
    ev.preventDefault();
    if (part === "start") moveStart(to);
    else if (part === "end") moveEnd(to);
    else moveWindow(to);
    // The length is said once the keys stop, not on every step.
    window.clearTimeout(keyTimer.current);
    keyTimer.current = window.setTimeout(say, 700);
  };

  const timeAt = (clientX: number) => {
    const r = strip.current?.getBoundingClientRect();
    return r && r.width ? clamp((clientX - r.left) / r.width, 0, 1) * dur : 0;
  };
  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if (locked || dur <= 0 || (ev.pointerType === "mouse" && ev.button !== 0)) return;
    const hit = (ev.target as Element).closest("[data-part]")?.getAttribute("data-part") as Part | null;
    const t = timeAt(ev.clientX);
    const part: Part = hit ?? (Math.abs(t - s) <= Math.abs(t - e) ? "start" : "end");
    if (!hit) {
      if (part === "start") moveStart(t); else moveEnd(t);
      (ev.currentTarget.querySelector(`[data-part="${part}"]`) as HTMLElement | null)?.focus();
    }
    ev.currentTarget.setPointerCapture(ev.pointerId);
    drag.current = { part, s0: latest.current[0], e0: latest.current[1], t0: t, id: ev.pointerId };
  };
  const move = (ev: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== ev.pointerId) return;
    const t = timeAt(ev.clientX);
    if (d.part === "start") moveStart(t, d.e0);
    else if (d.part === "end") moveEnd(t, d.s0);
    else moveWindow(d.s0 + (t - d.t0), d.e0 - d.s0);
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current?.id !== ev.pointerId) return;
    drag.current = null;
    say();
  };

  const pct = (t: number) => `${dur ? (clamp(t, 0, dur) / dur) * 100 : 0}%`;
  // "0:04.5": the clock with tenths, because generated clips are short.
  const fmt = (t: number) => { const r = Math.round(t * 10) / 10; return `${formatMediaTime(Math.floor(r))}.${Math.round((r - Math.floor(r)) * 10)}`; };

  const tile = (i: number) => {
    const t = ((i + 0.5) / TILES) * dur;
    if (thumbnails?.length) {
      const j = clamp(Math.round((i / (TILES - 1)) * (thumbnails.length - 1)), 0, thumbnails.length - 1);
      return <img src={thumbnails[j]} alt="" className="size-full object-cover" />;
    }
    return renderThumbnail?.(t);
  };

  const handle = (part: "start" | "end") => {
    const isStart = part === "start";
    const t = isStart ? s : e;
    const word = isStart ? "start" : "end";
    const lo = isStart ? Math.max(0, e - maxSpan) : s + minSpan;
    const hi = isStart ? e - minSpan : Math.min(dur, s + maxSpan);
    return (
      <div data-part={part} role="slider" tabIndex={0} aria-label={`${label}, ${word}`}
        aria-valuemin={Math.round(lo * 10) / 10} aria-valuemax={Math.round(hi * 10) / 10} aria-valuenow={Math.round(t * 10) / 10}
        aria-valuetext={`${isStart ? "Starts" : "Ends"} at ${speakClipTime(t)}`} aria-orientation="horizontal" aria-disabled={locked || undefined}
        onKeyDown={onKey(part)}
        // The hit box sits outside the window, so it reaches past the clip edge and never covers the other handle.
        className={cn("group absolute -inset-y-1 z-10 w-6 rounded-sm pointer-coarse:w-11", isStart ? "-translate-x-full" : "", locked ? "cursor-default" : "cursor-ew-resize")}
        style={{ left: pct(t) }}>
        <span aria-hidden className={cn("absolute inset-y-0 flex w-3 items-center justify-center bg-fg forced-colors:bg-[CanvasText]",
          isStart ? "right-0 rounded-l-sm" : "left-0 rounded-r-sm")}>
          <span className="h-4 w-0.5 rounded-full bg-bg" />
        </span>
      </div>
    );
  };

  const showPlayhead = playhead !== undefined && dur > 0;
  return (
    <div className={cn("flex min-w-0 flex-col gap-3", className)} {...rest}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span id={labelId} className="text-small font-medium text-fg">{label}</span>
        <span className="text-small text-fg-muted tabular-nums">
          {fmt(s)} to {fmt(e)} · {span.toFixed(1)}{maxSpanSec !== undefined ? ` of ${maxSpan} s max` : " s"}
          {atMax && <span className="ml-1.5 rounded-control border border-line px-1.5 text-micro text-fg">At the limit</span>}
        </span>
      </div>

      <div className="px-6 pointer-coarse:px-11">
        <div ref={strip} role="group" aria-labelledby={labelId} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
          className={cn("relative h-14 touch-none select-none", locked && "opacity-(--disabled-opacity)")}>
          <div aria-hidden className="absolute inset-0 flex overflow-hidden rounded-sm bg-sunken ring-1 ring-line forced-colors:outline forced-colors:outline-1">
            {(thumbnails?.length || renderThumbnail) && Array.from({ length: TILES }, (_, i) => (
              <span key={i} className="h-full min-w-0 flex-1 overflow-hidden border-r border-glass last:border-r-0">{tile(i)}</span>
            ))}
            {/* Outside the window is washed back, so the chosen part reads at a glance. */}
            <span className="absolute inset-y-0 left-0 bg-glass" style={{ width: pct(s) }} />
            <span className="absolute inset-y-0 right-0 bg-glass" style={{ left: pct(e) }} />
          </div>
          {handle("start")}
          <div data-part="window" role="slider" tabIndex={0} aria-label={`${label}, whole part`}
            aria-valuemin={0} aria-valuemax={Math.round((dur - span) * 10) / 10} aria-valuenow={Math.round(s * 10) / 10}
            aria-valuetext={spanWords(s, e)} aria-orientation="horizontal" aria-disabled={locked || undefined}
            onKeyDown={onKey("window")}
            className={cn("absolute inset-y-0 border-y-2 border-fg forced-colors:border-[Highlight]", locked ? "cursor-default" : "cursor-grab active:cursor-grabbing")}
            style={{ left: pct(s), width: `calc(${pct(e)} - ${pct(s)})` }} />
          {handle("end")}
          {showPlayhead && (
            <span aria-hidden className="pointer-events-none absolute -inset-y-1.5 z-20 w-0.5 -translate-x-1/2 rounded-full bg-fg-muted ring-1 ring-surface" style={{ left: pct(playhead!) }} />
          )}
        </div>
      </div>

      {status !== "editing" ? (
        <p className="flex items-center gap-2 text-small text-fg">
          <span aria-hidden className={cn("inline-block size-2 shrink-0 rounded-full", status === "processing" ? "bg-lime ring-1 ring-fg-muted motion-safe:animate-pulse" : "bg-success")} />
          {status === "processing" ? (statusNote ?? "Working on this part. The range is locked until it finishes.") : (statusNote ?? "Applied.")}
        </p>
      ) : snapped ? (
        <p className="text-small text-fg-muted">That was longer than {maxSpan} seconds, so the end was moved to {fmt(e)}.</p>
      ) : null}

      <div className="flex flex-wrap items-end gap-3">
        <div className="flex min-w-32 flex-1 flex-col gap-1 text-small text-fg-muted">
          <span aria-hidden>Start, seconds</span>
          <NumberField size="sm" label={`${label}, start in seconds`} value={Number(s.toFixed(1))} step={0.1} precision={1}
            min={0} max={Number((e - minSpan).toFixed(1))} disabled={locked}
            onChange={(v) => { if (v !== null) { moveStart(v); say(); } }} />
        </div>
        <div className="flex min-w-32 flex-1 flex-col gap-1 text-small text-fg-muted">
          <span aria-hidden>End, seconds</span>
          <NumberField size="sm" label={`${label}, end in seconds`} value={Number(e.toFixed(1))} step={0.1} precision={1}
            min={Number((s + minSpan).toFixed(1))} max={Number(Math.min(dur, s + maxSpan).toFixed(1))} disabled={locked}
            onChange={(v) => { if (v !== null) { moveEnd(v); say(); } }} />
        </div>
        {showPlayhead && (
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" disabled={locked} className="pointer-coarse:h-11"
              onClick={() => { const [, ce] = latest.current; if (playhead! < ce) moveStart(playhead!); else moveWindow(playhead!); say(); }}>
              Set start at {formatMediaTime(playhead!)}
            </Button>
            <Button size="sm" variant="secondary" disabled={locked} className="pointer-coarse:h-11"
              onClick={() => { const [cs, ce] = latest.current; if (playhead! > cs) moveEnd(playhead!); else moveWindow(playhead! - (ce - cs)); say(); }}>
              Set end at {formatMediaTime(playhead!)}
            </Button>
          </div>
        )}
      </div>

      <span role="status" className="sr-only">{announce}</span>
    </div>
  );
}
```

## tattva/molecules/CodeBlock.tsx

```tsx
import { useState } from "react";
import { CheckIcon, CopyIcon } from "../lib/icons";

export function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard unavailable */ }
  };
  return (
    <figure className="overflow-hidden rounded-card border border-line bg-code text-code-fg">
      <figcaption className="flex items-center justify-between border-b border-code-line px-3 py-1.5 text-small leading-4 text-code-muted">
        <span className="font-mono">{language}</span>
        <button type="button" onClick={copy} className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 hover:text-code-fg">
          {copied ? <CheckIcon width={12} height={12} /> : <CopyIcon width={12} height={12} />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </figcaption>
      <pre tabIndex={0} className="overflow-x-auto p-3 font-mono text-compact leading-6"><code>{code}</code></pre>
    </figure>
  );
}
```
