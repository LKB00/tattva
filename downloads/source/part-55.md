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

## tattva/organisms/CheckpointList.tsx

```tsx
import { useRef, useState, type ReactNode } from "react";
import { useFocusReturn } from "../lib/focus";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { cn } from "../lib/cn";

export type RestoreMode = "everything" | "conversation" | "work";

export interface Checkpoint {
  id: string;
  /** The prompt that created this checkpoint. */
  prompt: string;
  /** Relative time, for example "12 min ago". */
  time: string;
  /** Number of files changed since the previous checkpoint. */
  files: number;
}

export interface CheckpointListProps {
  /** Newest first or oldest first, rendered in the order given. */
  checkpoints: Checkpoint[];
  /** Id of the checkpoint the work is at now. It is marked and has no actions. */
  currentId?: string;
  /** Called after the person confirms a restore. */
  onRestore?: (id: string, mode: RestoreMode) => void;
  /** Called when Summarize from here is chosen. It runs without a confirm step. */
  onSummarize?: (id: string) => void;
  /** Slot for what the checkpoints do not cover, such as untracked changes. */
  limitations?: ReactNode;
  /** Overrides for any visible label. */
  labels?: Partial<Record<RestoreMode | "summarize" | "confirm" | "cancel" | "current" | "rewind", string>>;
  /** Words for the change count, for example `(n) => `${n} edits``. Defaults to a file count. */
  changeLabel?: (count: number) => string;
  className?: string;
}

const defaults = { everything: "Restore everything", conversation: "Restore conversation only", work: "Restore work only", summarize: "Summarize from here", confirm: "Confirm restore", cancel: "Cancel", current: "Current", rewind: "Rewind" };
const warnings: Record<RestoreMode, string> = {
  everything: "This replaces your work and the conversation with how they were at this point. Later changes are removed.",
  conversation: "This removes the messages after this point. Your work stays as it is.",
  work: "This replaces your work with how it was at this point. The conversation stays as it is.",
};

/** Rewind list with one row per earlier prompt. A destructive restore needs an inline confirm. */
export function CheckpointList({ checkpoints, currentId, onRestore, onSummarize, limitations, labels, changeLabel, className }: CheckpointListProps) {
  const t = { ...defaults, ...labels };
  const [open, setOpen] = useState<string | null>(null);
  const [pending, setPending] = useState<RestoreMode | null>(null);
  const close = () => { setOpen(null); setPending(null); };
  const modes: RestoreMode[] = ["everything", "conversation", "work"];
  // Focus follows the choices: into the confirm step when a restore is picked, back to that choice on Cancel, and
  // back to the row's Rewind button (or the row, if it became the current one) after a restore or a summary.
  const root = useRef<HTMLDivElement>(null);
  const rows = useRef(new Map<string, HTMLLIElement>());
  const last = useRef<{ id: string; mode: RestoreMode | null } | null>(null);
  useFocusReturn(`${open}|${pending}|${currentId}`, root, () => {
    const at = last.current; if (!at) return null;
    const row = rows.current.get(at.id);
    if (open === at.id && pending) return row?.querySelector<HTMLElement>('[role="group"]');
    if (open === at.id && at.mode) return row?.querySelector<HTMLElement>(`[data-mode="${at.mode}"]`);
    return row?.querySelector<HTMLElement>("button[aria-expanded]") ?? row;
  });

  return (
    <div ref={root} className={cn("space-y-3", className)}>
      <ol className="divide-y divide-line rounded-card border border-line bg-surface">
        {checkpoints.map((c) => {
          const current = c.id === currentId;
          const expanded = open === c.id;
          return (
            <li key={c.id} ref={(n) => { if (n) rows.current.set(c.id, n); else rows.current.delete(c.id); }} tabIndex={-1} className="px-4 py-3 outline-offset-[-2px]" aria-current={current ? "step" : undefined}>
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <p title={typeof c.prompt === "string" ? c.prompt : undefined} className="truncate text-body leading-5 text-fg">{c.prompt}</p>
                  <p className="mt-0.5 text-small leading-4 text-fg-muted">{c.time} · {changeLabel ? changeLabel(c.files) : c.files === 1 ? "1 file changed" : `${c.files} files changed`}</p>
                </div>
                {current ? <Badge tone="accent">{t.current}</Badge> : (
                  <Button size="sm" variant="secondary" aria-expanded={expanded} onClick={() => (expanded ? close() : (setOpen(c.id), setPending(null)))}>{t.rewind}</Button>
                )}
              </div>
              {expanded && !current && (
                <div className="mt-3 space-y-3 rounded-card bg-sunken p-3">
                  {pending === null ? (
                    <div className="flex flex-wrap gap-2">
                      {modes.map((m) => (
                        <Button key={m} size="sm" variant="secondary" data-mode={m} disabled={m === "work" && c.files === 0} onClick={() => { last.current = { id: c.id, mode: m }; setPending(m); }}>{t[m]}</Button>
                      ))}
                      <Button size="sm" variant="ghost" onClick={() => { last.current = { id: c.id, mode: null }; onSummarize?.(c.id); close(); }}>{t.summarize}</Button>
                    </div>
                  ) : (
                    <div role="group" tabIndex={-1} aria-label={t[pending]} className="space-y-2 outline-offset-4">
                      <p className="text-body leading-5 text-fg">{t[pending]}? <span className="text-fg-muted">{warnings[pending]}</span></p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="danger" onClick={() => { last.current = { id: c.id, mode: null }; onRestore?.(c.id, pending); close(); }}>{t.confirm}</Button>
                        <Button size="sm" variant="ghost" onClick={() => setPending(null)}>{t.cancel}</Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {limitations && <div className="text-small leading-4 text-fg-muted">{limitations}</div>}
    </div>
  );
}
```
