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

## tattva/molecules/CitationHoverCard.tsx

```tsx
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { GlobeIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";

export interface CitationHoverCardProps {
  /** Citation number shown in the marker. */
  n: number;
  title: string;
  domain: string;
  /** Where "Open source" goes. */
  url: string;
  snippet?: string;
  /** Trust label as text, for example "Government" or "Academic". */
  trust?: string;
  /** Favicon or any small mark. Falls back to the first letter of the domain. */
  favicon?: ReactNode;
  openLabel?: string;
  className?: string;
}

/**
 * Numbered citation that opens a source card on hover, on keyboard focus and on click or tap.
 * Click pins the card so it stays open on touch. Escape closes it and returns focus to the marker.
 */
export function CitationHoverCard({ n, title, domain, url, snippet, trust, favicon, openLabel = "Open source", className }: CitationHoverCardProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const root = useRef<HTMLSpanElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const id = useId();
  const close = () => { setOpen(false); setPinned(false); };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) close(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { close(); btn.current?.focus(); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <span ref={root} className={`relative mx-0.5 inline-block align-baseline ${className ?? ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { if (!pinned) setOpen(false); }}
      onFocus={() => setOpen(true)}
      onBlur={(e) => { if (!root.current?.contains(e.relatedTarget as Node)) close(); }}>
      <button ref={btn} type="button" aria-label={`Source ${n}: ${domain}`} aria-expanded={open} aria-controls={id}
        onClick={() => { if (open && pinned) close(); else { setOpen(true); setPinned(true); } }}
        className="inline-flex h-4 min-w-4 -translate-y-0.5 cursor-pointer items-center justify-center rounded bg-accent-soft px-1 text-nano font-semibold text-accent-fg hover:bg-accent hover:text-on-accent">
        {n}
      </button>
      {open && (
        <span id={id} role="group" aria-label={`Source ${n}: ${title}`} className="absolute bottom-full left-1/2 z-30 block w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 pb-2 max-sm:fixed max-sm:inset-x-4 max-sm:bottom-[max(1rem,var(--safe-bottom))] max-sm:left-4 max-sm:w-auto max-sm:max-w-none max-sm:translate-x-0 max-sm:pb-0">
          <span className="block animate-rise rounded-overlay border border-line bg-raised p-3 text-left text-body leading-5 font-normal shadow-lg">
            <span className="flex items-center gap-2 text-small leading-4 text-fg-subtle">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sunken text-nano font-semibold text-fg-muted" aria-hidden="true">
                {favicon ?? (domain ? domain.charAt(0).toUpperCase() : <GlobeIcon width={11} height={11} />)}
              </span>
              <span className="min-w-0 flex-1 truncate">{domain}</span>
              {trust && <Badge>{trust}</Badge>}
            </span>
            <span className="mt-2 block font-medium text-fg">{title}</span>
            {snippet && <span className="mt-1 line-clamp-3 block text-small leading-4 text-fg-muted">{snippet}</span>}
            <a href={url} target="_blank" rel="noreferrer noopener" className="mt-2.5 inline-block text-small leading-4 font-medium text-fg underline underline-offset-2">{openLabel}</a>
          </span>
        </span>
      )}
    </span>
  );
}
```
