## tattva/organisms/CatchUpSummary.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { ChevronIcon, CheckIcon, HistoryIcon } from "../lib/icons";
import { AttentionDot } from "../atoms/AttentionDot";
import { Button } from "../atoms/Button";

export interface RecapNeed {
  id: string;
  /** What needs the person, in plain words. */
  text: string;
  actionLabel: string;
  onAction?: () => void;
}

export interface RecapChange {
  label: string;
  count: number;
}

export interface CatchUpSummaryLabels {
  heading?: string;
  /** Receives the time away, such as "2 hours". */
  away?: (time: string) => string;
  finished?: string;
  needsYou?: string;
  changed?: string;
  nothingFinished?: string;
  nothingNeeded?: string;
  showLog?: string;
}

export interface CatchUpSummaryProps {
  /** How long the person was away, such as "2 hours". */
  awayFor: string;
  /** Things that finished while the person was away. */
  finished?: string[];
  /** Things that now wait on the person. */
  needsYou?: RecapNeed[];
  /** What changed, as counts: "Files edited 4". */
  changes?: RecapChange[];
  /** Opens the full log. The button is hidden when omitted. */
  onShowLog?: () => void;
  defaultOpen?: boolean;
  labels?: CatchUpSummaryLabels;
  /** Level of the part's own heading, so it fits the page outline. Default 3; the inner group headings are one level below. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * "While you were away" card shown when a person comes back to a run. It lists what finished, what
 * needs the person (with actions), what changed as counts, and a way to open the full log. The
 * whole card folds down to its header.
 */
export function CatchUpSummary({ awayFor, finished = [], needsYou = [], changes = [], onShowLog, defaultOpen = true, labels, headingLevel = 3, className }: CatchUpSummaryProps) {
  const l = {
    heading: "While you were away", away: (t: string) => `You were away for ${t}`, finished: "Finished", needsYou: "Needs you", changed: "What changed",
    nothingFinished: "Nothing has finished yet.", nothingNeeded: "Nothing needs you.", showLog: "Show full log", ...labels,
  };
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const Section = ({ title, children }: { title: string; children: ReactNode }) => (
    <div><H2 className="mb-1.5 text-small leading-4 font-medium text-fg-muted">{title}</H2>{children}</div>
  );
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("rounded-card border border-line bg-surface", className)}>
      <H id={`${uid}-h`} className="m-0">
        <button type="button" aria-expanded={open} aria-controls={`${uid}-body`} onClick={() => setOpen(!open)}
          className="flex w-full cursor-pointer items-center gap-2.5 rounded-card px-4 py-3 text-left">
          <HistoryIcon className="shrink-0 text-fg-muted" />
          <span className="min-w-0 flex-1">
            <span className="block text-body leading-5 font-medium">{l.heading}</span>
            <span className="block text-small leading-4 font-normal text-fg-muted">{l.away(awayFor)}</span>
          </span>
          <ChevronIcon className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)] motion-reduce:transition-none", open && "rotate-90")} />
        </button>
      </H>
      <div id={`${uid}-body`} hidden={!open} className="space-y-4 border-t border-line px-4 py-3">
        <Section title={l.finished}>
          {finished.length ? (
            <ul className="space-y-1">{finished.map((f) => (
              <li key={f} className="flex items-start gap-2 text-body leading-5"><CheckIcon className="mt-0.5 shrink-0 text-success" /><span className="min-w-0 break-words">{f}</span></li>
            ))}</ul>
          ) : <p className="text-body leading-5 text-fg-muted">{l.nothingFinished}</p>}
        </Section>
        <Section title={l.needsYou}>
          {needsYou.length ? (
            <ul className="space-y-1.5">{needsYou.map((n) => (
              <li key={n.id} className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-card border border-attention px-3 py-2">
                <span className="flex min-w-0 flex-1 basis-48 items-start gap-2 text-body leading-5"><span className="mt-1.5"><AttentionDot /></span><span className="min-w-0 break-words">{n.text}</span></span>
                <div className="ml-auto flex flex-wrap justify-end gap-2"><Button size="sm" onClick={n.onAction}>{n.actionLabel}</Button></div>
              </li>
            ))}</ul>
          ) : <p className="text-body leading-5 text-fg-muted">{l.nothingNeeded}</p>}
        </Section>
        {changes.length > 0 && (
          <Section title={l.changed}>
            <ul className="flex flex-wrap gap-2">{changes.map((c) => (
              <li key={c.label} className="rounded-card bg-sunken px-3 py-1.5 text-small leading-4 text-fg-muted"><span className="text-body leading-5 font-medium tabular-nums text-fg">{c.count}</span> {c.label}</li>
            ))}</ul>
          </Section>
        )}
        {onShowLog && <Button variant="ghost" size="sm" onClick={onShowLog}>{l.showLog}</Button>}
      </div>
    </section>
  );
}

/** @deprecated Renamed to CatchUpSummary in 0.29.0, to match the name other design systems use. The old name goes in 0.31.0. */
export const ReEntryRecap = CatchUpSummary;
/** @deprecated Renamed to CatchUpSummaryProps in 0.29.0. */
export type ReEntryRecapProps = CatchUpSummaryProps;
```

## tattva/organisms/ChartLegend.tsx

```tsx
import { cn } from "../lib/cn";

export type MarkerShape = "circle" | "square" | "triangle" | "diamond";

export interface SeriesStyle {
  /** CSS color value, a chart token such as var(--chart-1). */
  color: string;
  /** Marker drawn at line ends and in the legend. */
  shape: MarkerShape;
  /** SVG stroke-dasharray for lines. Undefined means solid. */
  dash?: string;
}

/**
 * Fixed series order. Colors are assigned by position and never cycled. From the third series on, a dash pattern
 * and a marker shape repeat the color so identity never rests on hue alone. Dotted lines are kept for projections.
 */
export const SERIES_STYLES: SeriesStyle[] = [
  { color: "var(--chart-1)", shape: "circle" },
  { color: "var(--chart-2)", shape: "circle" },
  { color: "var(--chart-3)", shape: "square", dash: "9 4" },
  { color: "var(--chart-4)", shape: "triangle", dash: "9 4 2 4" },
  { color: "var(--chart-5)", shape: "diamond", dash: "14 4" },
];
/** Color used for "Other" and context series. */
export const NEUTRAL_STYLE: SeriesStyle = { color: "var(--chart-neutral)", shape: "circle" };

/** Style for series at index i. Index 5 and beyond is not defined: fold the tail into Other. */
export function seriesStyle(i: number): SeriesStyle {
  return SERIES_STYLES[Math.min(i, SERIES_STYLES.length - 1)];
}

/** Path for a marker of the given shape centred on cx, cy. r is the half size (use 4 or more for an 8px marker). */
export function markerPath(shape: MarkerShape, cx: number, cy: number, r: number): string {
  switch (shape) {
    case "square": return `M${cx - r} ${cy - r}h${2 * r}v${2 * r}h${-2 * r}z`;
    case "triangle": return `M${cx} ${cy - r * 1.15}L${cx + r * 1.1} ${cy + r * 0.85}L${cx - r * 1.1} ${cy + r * 0.85}z`;
    case "diamond": return `M${cx} ${cy - r * 1.25}L${cx + r * 1.25} ${cy}L${cx} ${cy + r * 1.25}L${cx - r * 1.25} ${cy}z`;
    default: return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0z`;
  }
}

export interface SeriesMarkProps {
  shape: MarkerShape;
  cx: number;
  cy: number;
  color: string;
  /** Half size in px. Default 4.5, which gives a 9px marker. */
  r?: number;
  /** Hollow marker: surface fill with a colored outline. Used for provisional values. */
  hollow?: boolean;
}

/** Marker with a 2px surface ring so it stays legible where it crosses a line. Use inside an svg. */
export function SeriesMark({ shape, cx, cy, color, r = 4.5, hollow }: SeriesMarkProps) {
  const d = markerPath(shape, cx, cy, r);
  if (hollow) {
    return (<g><path d={d} fill="var(--surface)" stroke="var(--surface)" strokeWidth={5} strokeLinejoin="round" /><path d={d} fill="var(--surface)" stroke={color} strokeWidth={2} strokeLinejoin="round" /></g>);
  }
  return <path d={d} fill={color} stroke="var(--surface)" strokeWidth={2} paintOrder="stroke" strokeLinejoin="round" />;
}

export interface LegendItem {
  id: string;
  label: string;
  /** Overrides the style taken from the item's position. */
  style?: SeriesStyle;
}

export interface ChartLegendProps {
  /** Items in the same order as the chart's series or stack. */
  items: LegendItem[];
  /** "line" shows the dash and marker. "bar" shows a rounded swatch. */
  kind?: "line" | "bar";
  /** Ids currently hidden. Only used when onToggle is set. */
  hidden?: string[];
  /** Makes items toggle buttons. Pressed means the series is shown. */
  onToggle?: (id: string) => void;
  /** Accessible name for the group. */
  label?: string;
  className?: string;
}

function Key({ style, kind }: { style: SeriesStyle; kind: "line" | "bar" }) {
  if (kind === "bar") return <span aria-hidden className="inline-block h-2.5 w-4 shrink-0 rounded-xs" style={{ background: style.color }} />;
  return (
    <svg aria-hidden width={26} height={12} viewBox="0 0 26 12" className="shrink-0">
      <line x1={1} y1={6} x2={25} y2={6} stroke={style.color} strokeWidth={2} strokeDasharray={style.dash} strokeLinecap="butt" />
      <SeriesMark shape={style.shape} cx={13} cy={6} color={style.color} r={4} />
    </svg>
  );
}

/**
 * Legend that defines every visual property: color, dash and marker for lines, color for bars. Order matches the
 * chart. Items become toggle buttons (aria-pressed) when onToggle is given. Render it for two or more series only.
 */
export function ChartLegend({ items, kind = "line", hidden = [], onToggle, label = "Legend", className }: ChartLegendProps) {
  return (
    <ul aria-label={label} className={cn("m-0 mb-2 flex list-none flex-wrap gap-x-4 gap-y-1 p-0", className)}>
      {items.map((it, i) => {
        const st = it.style ?? seriesStyle(i);
        const off = hidden.includes(it.id);
        const inner = (<><Key style={st} kind={kind} /><span className={cn("text-small leading-5", off ? "text-fg-subtle line-through" : "text-fg-muted")}>{it.label}</span></>);
        return (
          <li key={it.id}>
            {onToggle ? (
              <button type="button" aria-pressed={!off} onClick={() => onToggle(it.id)}
                className={cn("inline-flex min-h-6 cursor-pointer items-center gap-1.5 rounded-control px-1.5 hover:bg-hover tap", off && "opacity-70")}>
                {inner}<span className="sr-only">{off ? "hidden" : "shown"}</span>
              </button>
            ) : (
              <span className="inline-flex min-h-6 items-center gap-1.5">{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
```

## tattva/organisms/Checklist.tsx

```tsx
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";
import { type ChecklistItem, ChecklistRow } from "../molecules/ChecklistRow";

export type { ChecklistItem };

/** Hairline-ruled progress list for a running task. Open items first, finished work folded into one line. */
export function Checklist({ items, doneSummary, className }: { items: ChecklistItem[]; doneSummary?: string; className?: string }) {
  return (
    <ul className={cn("border-t border-line", className)}>
      {items.map((i) => <ChecklistRow key={i.id} item={i} />)}
      {doneSummary && (
        <li className="flex items-center gap-2.5 border-b border-line px-1 py-3 text-body leading-5 text-fg-muted">
          <span className="flex size-4 items-center justify-center rounded-full border border-line-strong"><CheckIcon width={10} height={10} /></span>{doneSummary}
        </li>
      )}
    </ul>
  );
}
```
