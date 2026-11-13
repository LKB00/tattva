## tattva/molecules/ChartRangeBrush.tsx

```tsx
import { useId, useRef } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent } from "react";
import { cn } from "../lib/cn";
import { RefreshIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { useElementWidth } from "./ChartFrame";

export interface ChartRangeBrushProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** The overview series, one value per position. Drawn as a small line. */
  values: number[];
  /** One label per value, for example dates. Used in the range text and read out by the handles. */
  labels?: string[];
  /** Start and end index, both inclusive. The parent owns it. */
  range: [number, number];
  /** Called with the new start and end index after a drag, a key press or Reset. */
  onRangeChange: (range: [number, number]) => void;
  /** The fewest points the window may hold. */
  minSpan?: number;
  /** Name of the control, for example "Date range". */
  label: string;
  /** Turns an index into the text shown and read out. Defaults to labels[index], or the position counted from 1. */
  formatLabel?: (index: number) => string;
  /** Turns the number of points in the window into words, for example (n) => `${n} days`. */
  formatCount?: (count: number) => string;
  className?: string;
}

type Part = "start" | "end" | "window";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const STRIP_H = 48;

/**
 * A strip under a long chart that narrows it to a range. Two slider handles and a draggable window sit on a small overview line.
 * Fully controlled: it never holds the range itself. Drags move instantly, with no easing, because they are direct manipulation.
 */
export function ChartRangeBrush({ values, labels, range, onRangeChange, minSpan = 2, label, formatLabel, formatCount, className, ...rest }: ChartRangeBrushProps) {
  const labelId = useId();
  const [stripRef, measured] = useElementWidth<HTMLDivElement>();
  const startRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<{ part: Part; s0: number; e0: number; f0: number; id: number } | null>(null);

  const n = values.length;
  const last = Math.max(0, n - 1);
  // gap is the smallest allowed end minus start; minSpan counts points, so it is one less.
  const gap = clamp(Math.round(minSpan) - 1, 0, last);
  let s = clamp(Math.round(range[0]), 0, last);
  let e = clamp(Math.round(range[1]), 0, last);
  if (s > e) [s, e] = [e, s];
  if (e - s < gap) { e = Math.min(last, s + gap); s = Math.max(0, e - gap); }
  const latest = useRef<[number, number]>([s, e]);
  latest.current = [s, e];

  const name = (i: number) => (formatLabel ? formatLabel(i) : labels?.[i] ?? String(i + 1));
  const count = e - s + 1;
  const countText = formatCount ? formatCount(count) : `${count} ${count === 1 ? "point" : "points"}`;
  const pageStep = Math.max(1, Math.round(last * 0.1));
  const full = s === 0 && e === last;

  const emit = (ns: number, ne: number) => {
    const [cs, ce] = latest.current;
    if (ns !== cs || ne !== ce) onRangeChange([ns, ne]);
  };
  const moveStart = (i: number) => emit(clamp(i, 0, e - gap), e);
  const moveEnd = (i: number) => emit(s, clamp(i, s + gap, last));
  const moveWindow = (i: number) => { const ns = clamp(i, 0, last - (e - s)); emit(ns, ns + (e - s)); };

  const onKey = (part: Part) => (ev: KeyboardEvent<HTMLDivElement>) => {
    const cur = part === "end" ? e : s;
    const k = ev.key;
    let to: number;
    if (k === "ArrowRight" || k === "ArrowUp") to = cur + 1;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = cur - 1;
    else if (k === "PageUp") to = cur + pageStep;
    else if (k === "PageDown") to = cur - pageStep;
    else if (k === "Home") to = 0;
    else if (k === "End") to = last;
    else return;
    ev.preventDefault();
    if (part === "start") moveStart(to);
    else if (part === "end") moveEnd(to);
    else moveWindow(to);
  };

  const fracAt = (clientX: number) => {
    const r = stripRef.current?.getBoundingClientRect();
    return r && r.width ? clamp((clientX - r.left) / r.width, 0, 1) : 0;
  };

  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if ((ev.pointerType === "mouse" && ev.button !== 0) || last < 1) return;
    const hit = (ev.target as Element).closest("[data-part]")?.getAttribute("data-part") as Part | null;
    let part: Part;
    let [s0, e0] = [s, e];
    if (hit) part = hit;
    else {
      // A press on the bare track brings the nearer handle to that point and keeps dragging it.
      const i = Math.round(fracAt(ev.clientX) * last);
      part = Math.abs(i - s) <= Math.abs(i - e) ? "start" : "end";
      if (part === "start") s0 = clamp(i, 0, e - gap); else e0 = clamp(i, s + gap, last);
      emit(s0, e0);
      (part === "start" ? startRef : endRef).current?.focus();
    }
    ev.currentTarget.setPointerCapture(ev.pointerId);
    drag.current = { part, s0, e0, f0: fracAt(ev.clientX), id: ev.pointerId };
  };

  const move = (ev: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== ev.pointerId) return;
    const f = fracAt(ev.clientX);
    const i = Math.round(f * last);
    if (d.part === "start") emit(clamp(i, 0, d.e0 - gap), d.e0);
    else if (d.part === "end") emit(d.s0, clamp(i, d.s0 + gap, last));
    else {
      const span = d.e0 - d.s0;
      const ns = clamp(d.s0 + Math.round((f - d.f0) * last), 0, last - span);
      emit(ns, ns + span);
    }
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => { if (drag.current?.id === ev.pointerId) drag.current = null; };

  // Overview drawing, sized to the measured strip like LineChart.
  const w = measured || 320;
  const lo = n ? Math.min(...values) : 0;
  const hi = n ? Math.max(...values) : 1;
  const px = (i: number) => (last ? (i / last) * w : w / 2);
  const py = (v: number) => STRIP_H - 6 - ((v - lo) / (hi - lo || 1)) * (STRIP_H - 12);
  const d = values.map((v, i) => `${i ? "L" : "M"}${px(i).toFixed(1)} ${py(v).toFixed(1)}`).join("");
  const pct = (i: number) => `${last ? (i / last) * 100 : 0}%`;

  const handle = (part: "start" | "end") => {
    const isStart = part === "start";
    const i = isStart ? s : e;
    const word = isStart ? "Start" : "End";
    return (
      <div ref={isStart ? startRef : endRef} data-part={part} role="slider" tabIndex={0}
        aria-label={`${label}, ${word.toLowerCase()}`}
        aria-valuemin={isStart ? 0 : s + gap} aria-valuemax={isStart ? e - gap : last} aria-valuenow={i}
        aria-valuetext={`${word}, ${name(i)}`} aria-orientation="horizontal" onKeyDown={onKey(part)}
        // Each hit box sits mostly outside the window, so the two handles never cover each other.
        className={cn("group absolute inset-y-0 z-10 w-6 cursor-ew-resize rounded-sm pointer-coarse:w-11", isStart ? "ml-1.5 -translate-x-full" : "-ml-1.5")}
        style={{ left: pct(i) }}>
        <span aria-hidden className={cn("absolute inset-y-0 w-0.5 bg-fg forced-colors:bg-[CanvasText]", isStart ? "right-1.5 translate-x-1/2" : "left-1.5 -translate-x-1/2")} />
        <span aria-hidden className={cn("absolute top-1/2 h-5 w-2.5 -translate-y-1/2 rounded-full border border-line-strong bg-surface shadow-sm transition-colors duration-[var(--dur-fast)] group-hover:border-fg forced-colors:border-[CanvasText]", isStart ? "right-1.5 translate-x-1/2" : "left-1.5 -translate-x-1/2")} />
      </div>
    );
  };

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)} {...rest}>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <p className="min-w-0 text-small">
          <span id={labelId} className="block font-medium text-fg">{label}</span>
          <span className="block text-fg-muted tabular-nums">{name(s)} to {name(e)}, {countText}</span>
        </p>
        <Button variant="secondary" size="sm" aria-disabled={full} leading={<RefreshIcon width={14} height={14} />}
          onClick={() => { if (!full) emit(0, last); }}
          className={cn("pointer-coarse:h-11", full && "cursor-default opacity-50")}>
          Reset
        </Button>
      </div>
      <div className="px-4.5 pointer-coarse:px-9.5">
        <div ref={stripRef} role="group" aria-labelledby={labelId} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
          className="relative h-12 touch-none select-none">
          <div aria-hidden className="absolute inset-0 overflow-hidden rounded-md bg-sunken ring-1 ring-line forced-colors:outline forced-colors:outline-1">
            <svg width={w} height={STRIP_H} viewBox={`0 0 ${w} ${STRIP_H}`} className="block max-w-full" focusable="false">
              <path d={d} fill="none" stroke="var(--chart-1)" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
              {/* Outside the window the line stays visible but is washed back with the strip colour. */}
              <rect x={0} y={0} width={px(s)} height={STRIP_H} fill="var(--surface-sunken)" fillOpacity={0.72} />
              <rect x={px(e)} y={0} width={Math.max(0, w - px(e))} height={STRIP_H} fill="var(--surface-sunken)" fillOpacity={0.72} />
            </svg>
          </div>
          {handle("start")}
          <div data-part="window" role="slider" tabIndex={0} aria-label={`${label}, whole window`}
            aria-valuemin={0} aria-valuemax={last - (e - s)} aria-valuenow={s} aria-valuetext={`${name(s)} to ${name(e)}`} aria-orientation="horizontal"
            onKeyDown={onKey("window")}
            className="absolute inset-y-0 cursor-grab border-y-2 border-chart-1 active:cursor-grabbing forced-colors:border-[Highlight]"
            style={{ left: pct(s), width: `calc(${pct(e)} - ${pct(s)})`, backgroundColor: "color-mix(in oklab, var(--chart-1) 12%, transparent)" }} />
          {handle("end")}
        </div>
      </div>
    </div>
  );
}
```

## tattva/molecules/ChecklistRow.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AttentionDot } from "../atoms/AttentionDot";

export interface ChecklistItem {
  id: string;
  title: ReactNode;
  badge?: ReactNode;
  status?: string;
  /** Needs a person: amber dot, status in the foreground colour. */
  attention?: boolean;
}

export function ChecklistRow({ item: i }: { item: ChecklistItem }) {
  return (
    <li className="flex items-center gap-3 border-b border-line px-1 py-3 text-body-lg">
      <span className="flex min-w-0 flex-1 items-center gap-2.5">{i.title}{i.badge}</span>
      {i.status && (
        <span className={cn("flex items-center gap-1.5 text-small leading-4", i.attention ? "text-fg" : "text-fg-subtle")}>
          {i.attention && <AttentionDot />}{i.status}
        </span>
      )}
    </li>
  );
}
```

## tattva/molecules/ChoiceChips.tsx

```tsx
import { useId } from "react";
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";

export interface ChoiceChipOption {
  value: string;
  label: string;
}

export interface ChoiceChipsProps {
  /** The question, shown above the chips: "Which nights?" */
  label: string;
  options: ChoiceChipOption[];
  /** The picked value, or values when `multiple`. */
  value: string | string[];
  onChange: (value: string | string[]) => void;
  /** Several chips may be picked. Each is then a checkbox; otherwise the chips are one radio group. */
  multiple?: boolean;
  /** Value of the option the assistant suggests. It is listed first and says "Suggested". */
  recommended?: string;
  /** Hides the question visually; it is still read by screen readers. */
  hideLabel?: boolean;
  /** Turns every chip off, for example after the answer was sent. */
  disabled?: boolean;
  className?: string;
}

/**
 * A short question with its answers as small chips, for one pick or several. Lighter than QuestionSet: one question,
 * inside a message or a form. Built on real radio buttons or checkboxes, so arrow keys, Space and screen readers work
 * as they do for any form; the picked chip shows a tick as well as its colour.
 */
export function ChoiceChips({ label, options, value, onChange, multiple = false, recommended, hideLabel = false, disabled = false, className }: ChoiceChipsProps) {
  const name = useId();
  const picked = Array.isArray(value) ? value : value ? [value] : [];
  const shown = [...options].sort((a, b) => Number(b.value === recommended) - Number(a.value === recommended));
  const toggle = (v: string, on: boolean) => {
    if (!multiple) { onChange(v); return; }
    onChange(on ? [...picked.filter((x) => x !== v), v] : picked.filter((x) => x !== v));
  };
  return (
    <fieldset disabled={disabled} className={cn("m-0 min-w-0 border-0 p-0", className)}>
      <legend className={cn("mb-2 p-0 text-body leading-5 font-medium text-fg", hideLabel && "sr-only")}>
        {label}{multiple && <span className="font-normal text-fg-muted"> (pick any)</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {shown.map((o) => {
          const on = picked.includes(o.value);
          return (
            <label key={o.value}
              className={cn(
                "relative inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-control border px-3 text-compact leading-5 transition-colors duration-[var(--dur-fast)] pointer-coarse:min-h-11",
                "has-[input:focus-visible]:outline-(length:--focus-width) has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[color:var(--focus-ring)]",
                on ? "border-accent bg-accent-soft font-medium text-fg" : "border-line bg-surface text-fg-muted hover:border-line-strong hover:text-fg",
                disabled && "cursor-not-allowed opacity-(--disabled-opacity) hover:border-line hover:text-fg-muted",
                "forced-colors:border-[CanvasText]",
              )}>
              <input type={multiple ? "checkbox" : "radio"} name={name} value={o.value} checked={on} disabled={disabled}
                onChange={(e) => toggle(o.value, e.target.checked)} className="sr-only" />
              {on && <CheckIcon aria-hidden className="size-3.5 shrink-0" strokeWidth={2.5} />}
              <span>{o.label}</span>
              {o.value === recommended && <span className="text-small leading-4 text-fg-muted">Suggested</span>}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
```
