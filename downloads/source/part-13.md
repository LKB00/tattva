## tattva/atoms/Waveform.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** What a stretch of the clip is. `ai` = made or changed by AI, `person` = made by a person, `stale` = needs a person to regenerate or check, `selected` = the person's selection, `highlight` = a neutral mark such as the line being read. */
export type WaveformRegionKind = "ai" | "person" | "stale" | "selected" | "highlight";

export interface WaveformRegion {
  /** Start, in seconds. */
  start: number;
  /** End, in seconds. */
  end: number;
  kind: WaveformRegionKind;
  /** Short words for the stretch, such as "Chorus rewritten by AI". Shown under the waveform and read out. */
  label?: string;
}

export interface WaveformMarker {
  /** Where it sits, in seconds. */
  at: number;
  /** What happened, such as "Tool call: look up order". */
  label: string;
  /** `review` is drawn as an amber diamond and only for a moment a person must check. */
  tone?: "neutral" | "review";
}

export type WaveformState = "drawing" | "ready" | "error";

export interface WaveformProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Loudness per slice, each 0 to 1. `null` while the peaks are still being worked out (the drawing state). In live mode, the newest level is last. */
  peaks: number[] | null;
  /** Length of the clip in seconds. In live mode, the seconds the visible window covers. */
  duration: number;
  /** Playhead, in seconds. Everything before it is drawn as played. */
  position?: number;
  /** Makes it a seek control (one slider). Leave out for a drawing only, which is hidden from screen readers. */
  onSeek?: (seconds: number) => void;
  /** Name of the seek slider, such as "Seek, call with Maya Okafor". Required with onSeek. */
  label?: string;
  /** Marked stretches: AI-made, person-made, stale, selected or highlighted. */
  regions?: WaveformRegion[];
  /** Moments on the timeline, such as a tool call or an interruption. */
  markers?: WaveformMarker[];
  /** From this second to the end the clip is still being made. Drawn as a dashed track. */
  pendingFrom?: number;
  /** `static` draws a whole clip. `live` draws the most recent levels from a microphone or a stream, newest on the right, with no playhead or seeking. */
  mode?: "static" | "live";
  /** In live mode, how many bars to show. */
  liveBars?: number;
  /** Shows a flat line and this message instead of the peaks. Seeking still works on the plain bar. */
  error?: string;
  /** Draws a plain progress bar instead of peaks. It also switches to this when the waveform is narrower than 256px. */
  simple?: boolean;
  /** Height of the drawing. The hit area is at least 44px tall when it is a seek control. */
  height?: 32 | 48 | 72;
  /** Clock text for the time bubble shown while dragging. Defaults to formatMediaTime. */
  formatTime?: (seconds: number) => string;
  className?: string;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** "1:12", or "1:02:05" past an hour. Use it for visible times. */
export function formatMediaTime(seconds: number): string {
  const t = Math.max(0, Math.floor(seconds || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = String(t % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

/** "1 minute 12 seconds", in words for screen readers. */
export function speakMediaTime(seconds: number): string {
  const t = Math.max(0, Math.round(seconds || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const unit = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
  const parts = [h && unit(h, "hour"), m && unit(m, "minute"), (s || (!h && !m)) && unit(s, "second")].filter(Boolean);
  return parts.join(" ");
}

const HEIGHT = { 32: "h-8", 48: "h-12", 72: "h-18" } as const;
const KIND_WORD: Record<WaveformRegionKind, string> = { ai: "Made by AI", person: "Made by a person", stale: "Needs regenerating", selected: "Selected", highlight: "Marked" };

/** Keeps the shown value from changing more than once per `ms` when `on` is true. */
function useThrottled<T>(value: T, ms: number, on: boolean): T {
  const [shown, setShown] = useState(value);
  const last = useRef(0);
  useEffect(() => {
    if (!on) return;
    const wait = Math.max(0, last.current + ms - Date.now());
    const t = window.setTimeout(() => { last.current = Date.now(); setShown(value); }, wait);
    return () => window.clearTimeout(t);
  }, [value, ms, on]);
  return on ? shown : value;
}

/**
 * Draws the loudness of one clip as bars, with the played part filled. With onSeek it is also the seek slider.
 * It never uses the AI colour for playback: played bars are ink, the rest are the strong line colour.
 * Only an `ai` region gets a faint AI wash, and it also has a dotted top edge and words, so colour is never the only signal.
 */
export function Waveform({
  peaks, duration, position = 0, onSeek, label, regions = [], markers = [], pendingFrom, mode = "static", liveBars = 64,
  error, simple = false, height = 48, formatTime = formatMediaTime, className, ...rest
}: WaveformProps) {
  const reduced = useReducedMotion();
  const descId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<number | null>(null);
  const [dragAt, setDragAt] = useState<number | null>(null);

  const live = mode === "live";
  const dur = Math.max(0, duration || 0);
  const state: WaveformState = error ? "error" : peaks === null ? "drawing" : "ready";
  const seekable = !!onSeek && !live && dur > 0;
  // With reduced motion the playhead moves at most four times a second.
  const shownPos = useThrottled(clamp(position, 0, dur), 250, reduced && !live && dragAt === null);
  const pos = dragAt ?? shownPos;
  const pct = (s: number) => `${dur ? (clamp(s, 0, dur) / dur) * 100 : 0}%`;

  // With reduced motion a live drawing changes at most once a second, so it reads as a still level, not a moving wave.
  const livePeaks = useThrottled(peaks, 1000, reduced && live);
  const bars = live ? (livePeaks ?? []).slice(-liveBars) : peaks ?? [];
  const n = live ? liveBars : bars.length;
  const offset = live ? liveBars - bars.length : 0;
  const playedBars = !live && dur ? (pos / dur) * n : 0;

  const timeAt = (clientX: number) => {
    const r = trackRef.current?.getBoundingClientRect();
    return r && r.width ? clamp((clientX - r.left) / r.width, 0, 1) * dur : 0;
  };
  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if (!seekable || (ev.pointerType === "mouse" && ev.button !== 0)) return;
    ev.currentTarget.setPointerCapture(ev.pointerId);
    ev.currentTarget.focus();
    drag.current = ev.pointerId;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onSeek?.(t);
  };
  const move = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onSeek?.(t);
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    drag.current = null;
    setDragAt(null);
  };
  const key = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!seekable) return;
    const big = ev.shiftKey ? 15 : 5;
    const k = ev.key;
    let to: number;
    if (k === "ArrowRight" || k === "ArrowUp") to = position + big;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = position - big;
    else if (k === "PageUp") to = position + 30;
    else if (k === "PageDown") to = position - 30;
    else if (k === "Home") to = 0;
    else if (k === "End") to = dur;
    else return;
    ev.preventDefault();
    onSeek?.(clamp(to, 0, dur));
  };

  const labelled = regions.filter((r) => r.label);
  const description = [
    state === "drawing" ? "Waveform still drawing." : state === "error" ? error : "",
    pendingFrom !== undefined && pendingFrom < dur ? `Still being made after ${speakMediaTime(pendingFrom)}.` : "",
    ...regions.map((r) => `${r.label ?? KIND_WORD[r.kind]}, ${speakMediaTime(r.start)} to ${speakMediaTime(r.end)}.`),
    ...markers.map((m) => `${m.tone === "review" ? "Needs review: " : ""}${m.label} at ${speakMediaTime(m.at)}.`),
  ].filter(Boolean).join(" ");

  const showBars = state === "ready" && !simple;
  const drawing = (
    <div aria-hidden className={cn("relative w-full", HEIGHT[height])}>
      {/* Regions sit behind the bars. */}
      {regions.map((r, i) => (
        <span key={i} className={cn("absolute inset-y-0",
          r.kind === "ai" && "border-t-2 border-dotted border-fg-muted bg-lime-soft forced-colors:border-[CanvasText]",
          r.kind === "person" && "border-t-2 border-fg-subtle",
          r.kind === "stale" && "border-t-2 border-dashed border-attention",
          r.kind === "selected" && "rounded-sm bg-selected ring-1 ring-fg forced-colors:outline forced-colors:outline-1",
          r.kind === "highlight" && "rounded-sm bg-hover",
        )}
          style={{
            left: pct(r.start), width: `calc(${pct(r.end)} - ${pct(r.start)})`,
            backgroundImage: r.kind === "stale" ? "repeating-linear-gradient(135deg, color-mix(in oklab, var(--attention) 28%, transparent) 0 calc(var(--spacing) * 0.5), transparent 0 calc(var(--spacing) * 1.75))" : undefined,
          }} />
      ))}
      {showBars ? (
        <svg viewBox={`0 0 ${Math.max(1, n)} 100`} preserveAspectRatio="none" focusable="false"
          className={cn("absolute inset-0 size-full", !live && "motion-safe:animate-fade")}>
          {bars.map((p, i) => {
            const h = Math.max(4, clamp(p, 0, 1) * 96);
            const x = i + offset;
            const played = !live && x + 0.5 <= playedBars;
            const pending = pendingFrom !== undefined && dur && (x / n) * dur >= pendingFrom;
            return (
              <rect key={i} x={x + 0.18} width={0.64} y={50 - h / 2} height={h}
                fill={live ? "var(--fg-muted)" : played ? "var(--fg)" : "var(--border-strong)"}
                fillOpacity={pending ? 0.45 : 1} />
            );
          })}
        </svg>
      ) : (
        // Plain bar: drawing, error, simple, or a narrow space.
        <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-line-strong forced-colors:bg-[GrayText]">
          {!live && state !== "drawing" && <span className="absolute inset-y-0 left-0 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ width: pct(pos) }} />}
        </span>
      )}
      {/* Narrow containers swap the bars for the plain bar. */}
      {showBars && !live && (
        <span className="absolute inset-0 hidden bg-surface @max-3xs:block">
          <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-line-strong">
            {!live && <span className="absolute inset-y-0 left-0 rounded-full bg-fg" style={{ width: pct(pos) }} />}
          </span>
        </span>
      )}
      {pendingFrom !== undefined && pendingFrom < dur && (
        <span className="absolute inset-y-0 right-0 border-l border-dashed border-fg-subtle" style={{ left: pct(pendingFrom) }} />
      )}
      {markers.map((m, i) => (
        <span key={i} title={m.label} className="absolute inset-y-0 w-0" style={{ left: pct(m.at) }}>
          <span className={cn("absolute inset-y-0 left-0 w-px -translate-x-1/2", m.tone === "review" ? "bg-attention" : "bg-fg-subtle")} />
          <span className={cn("absolute -top-1 left-0 size-2 -translate-x-1/2", m.tone === "review" ? "rotate-45 bg-attention" : "rounded-full bg-fg-subtle")} />
        </span>
      ))}
      {!live && state === "ready" && (
        <span className="absolute -inset-y-1 w-0.5 -translate-x-1/2 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ left: pct(pos) }} />
      )}
      {state === "drawing" && <span className="absolute inset-0 flex items-center justify-center"><span className="bg-surface px-2 text-small text-fg-muted">Drawing waveform</span></span>}
    </div>
  );

  return (
    <div className={cn("@container min-w-0", className)} {...rest}>
      {seekable ? (
        <div ref={trackRef} role="slider" tabIndex={0} aria-label={label ?? "Seek"}
          aria-valuemin={0} aria-valuemax={Math.round(dur)} aria-valuenow={Math.round(position)}
          aria-valuetext={`${speakMediaTime(position)} of ${speakMediaTime(dur)}`} aria-orientation="horizontal"
          aria-describedby={description ? descId : undefined}
          onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
          className="relative flex min-h-11 cursor-pointer touch-none items-center rounded-sm select-none">
          {drawing}
          {dragAt !== null && (
            <span aria-hidden className="pointer-events-none absolute -top-7 -translate-x-1/2 rounded-control bg-inverse px-1.5 py-0.5 text-small text-inverse-fg tabular-nums shadow-sm" style={{ left: pct(dragAt) }}>
              {formatTime(dragAt)}
            </span>
          )}
        </div>
      ) : (
        <div ref={trackRef} aria-hidden className="relative">{drawing}</div>
      )}
      {description && seekable && <span id={descId} hidden>{description}</span>}
      {state === "error" && <p className="mt-1 text-small text-fg-muted">{error}</p>}
      {labelled.length > 0 && (
        <ul aria-hidden={seekable || undefined} className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-small text-fg-muted">
          {labelled.map((r, i) => (
            <li key={i} className="flex min-w-0 items-center gap-1.5">
              <span className={cn("inline-block size-2 shrink-0",
                r.kind === "ai" && "rounded-full bg-lime ring-1 ring-fg-muted",
                r.kind === "stale" && "rotate-45 bg-attention",
                r.kind === "person" && "rounded-full bg-fg-subtle",
                (r.kind === "selected" || r.kind === "highlight") && "rounded-sm ring-1 ring-fg")} />
              <span className="min-w-0">{r.label}, <span className="tabular-nums">{formatTime(r.start)} to {formatTime(r.end)}</span></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```
