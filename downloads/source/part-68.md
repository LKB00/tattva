## tattva/organisms/GlancePanel.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { SectionLabel } from "../atoms/SectionLabel";
import { Sheet } from "./Sheet";

export interface GlanceFact { label: string; value: ReactNode; edited?: boolean }
export interface GlanceRule { title: string; cite?: string; href?: string }
export interface GlanceStep { id: string; label: string; state: "done" | "now" | "next"; detail?: string }

export interface GlancePanelProps {
  /** Names the panel (the landmark) and shows at the top. */
  title?: string;
  /** Set when the panel scrolls, so the keyboard can reach its content. */
  scrollable?: boolean;
  /** The first and biggest thing, usually a Countdown. */
  headline?: ReactNode;
  /** Facts under "What I know". A fact with `edited` gets an Edited tag. */
  facts?: GlanceFact[];
  /** The rule the case rests on. */
  rule?: GlanceRule;
  /** The whole journey, in order, under "Where it's at". */
  steps?: GlanceStep[];
  /** Rename the section headings. */
  headings?: { facts?: string; rule?: string; steps?: string };
  /** Hides the visible title but keeps it as the landmark name. GlanceSheet uses this because the sheet already shows the title. */
  hideTitle?: boolean;
  /** Heading level of the section headings. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}

const stateWord = { done: "Done", now: "Now", next: "Next" } as const;
const HEADING_TAG = { 2: "h2", 3: "h3", 4: "h4" } as const;

function Section({ heading, level, children }: { heading: string; level: 2 | 3 | 4; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-2 border-t border-line pt-4">
      <SectionLabel as={HEADING_TAG[level]}>{heading}</SectionLabel>
      {children}
    </section>
  );
}

/** The things a worried person keeps coming back to, kept in view beside a chat: the deadline, the facts, the rule and the steps. It has no frame of its own. */
export function GlancePanel({ title = "Case file", headline, facts, rule, steps, headings, hideTitle, headingLevel = 2, scrollable, className }: GlancePanelProps) {
  return (
    <aside aria-label={title} tabIndex={scrollable ? 0 : undefined} className={cn("flex min-w-0 flex-col gap-4 text-body leading-5 text-fg", className)}>
      {!hideTitle && <p className="px-1 text-lead leading-6 font-semibold">{title}</p>}
      {headline}
      {facts && facts.length > 0 && (
        <Section heading={headings?.facts ?? "What I know"} level={headingLevel}>
          <dl className="flex flex-col divide-y divide-line">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 px-1 py-2 first:pt-0 last:pb-0">
                <dt className="text-fg-muted">{f.label}</dt>
                <dd className="flex min-w-0 items-center gap-2 text-right font-medium [overflow-wrap:anywhere]">
                  {f.edited && <Badge>Edited</Badge>}
                  <span>{f.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}
      {rule && (
        <Section heading={headings?.rule ?? "The rule"} level={headingLevel}>
          <div className="px-1">
            <p className="font-medium">{rule.href ? <a href={rule.href} className="underline underline-offset-2 hover:no-underline">{rule.title}</a> : rule.title}</p>
            {rule.cite && <p className="mt-0.5 text-small leading-5 text-fg-muted">{rule.cite}</p>}
          </div>
        </Section>
      )}
      {steps && steps.length > 0 && (
        <Section heading={headings?.steps ?? "Where it's at"} level={headingLevel}>
          <ol className="flex flex-col">
            {steps.map((s, i) => (
              <li key={s.id} aria-current={s.state === "now" ? "step" : undefined} className="relative flex gap-3 px-1 pb-4 last:pb-0">
                {i < steps.length - 1 && <span aria-hidden className={cn("absolute top-7 bottom-1 left-3.75 w-px", s.state === "done" ? "bg-success" : "bg-line")} />}
                <span aria-hidden className={cn("relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border text-small leading-4 forced-colors:border-[CanvasText]",
                  s.state === "done" && "border-success bg-success-soft text-success-fg",
                  s.state === "now" && "border-accent bg-surface font-medium text-fg",
                  s.state === "next" && "border-line-strong bg-surface text-fg-subtle")}>
                  {s.state === "done" ? <CheckIcon width={12} height={12} /> : i + 1}
                  {s.state === "now" && <span className="absolute -inset-1 rounded-full border border-accent motion-safe:animate-pulse-dot" />}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className={cn("leading-5", s.state === "now" ? "font-medium" : s.state === "next" && "text-fg-muted")}>
                    {s.label}<span className="sr-only">, {stateWord[s.state]}</span>
                  </p>
                  {s.detail && <p className="text-small leading-5 text-fg-muted">{s.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}
    </aside>
  );
}

export interface GlanceSheetProps extends GlancePanelProps {
  open: boolean;
  /** Called when the sheet asks to close. Set `open` to false in response. */
  onClose: () => void;
}

/** The phone version: a bottom Sheet around a GlancePanel. Open it from a button in the page's header. */
export function GlanceSheet({ open, onClose, title = "Case file", className, ...panel }: GlanceSheetProps) {
  return (
    <Sheet open={open} onClose={onClose} title={title} size="lg">
      <GlancePanel {...panel} title={title} hideTitle className={cn("pb-4", className)} />
    </Sheet>
  );
}
```

## tattva/organisms/Heatmap.tsx

```tsx
import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import type { DataTableProps } from "../molecules/DataTable";
import { formatNumber } from "../molecules/ChartFrame";

export interface HeatmapProps {
  /** Row labels, top to bottom. */
  rows: string[];
  /** Column labels, left to right. */
  cols: string[];
  /** One array per row, one value per column. Use null for a cell with no data. */
  values: (number | null)[][];
  /** "direction" colours around zero (up or down, stronger for bigger moves). "sequential" uses one hue from low to high. */
  scale?: "direction" | "sequential";
  /** Formats the number in a cell. With the direction scale it gets the size of the move and the sign is added for you. */
  formatValue?: (n: number) => string;
  /** Word read after each value by screen readers, for example "percent". */
  unit?: string;
  /** Print the number in every cell, so colour is never the only channel. */
  showValues?: boolean;
  /** Name for the grid, for example "Sector moves this week". */
  ariaLabel: string;
  /** Show a small scale bar with the lowest, zero and highest values. */
  legend?: boolean;
  /** Smallest cell width and height in px. */
  cellSize?: number;
  className?: string;
}

const BUCKETS = 5;

function dirWord(v: number): "up" | "down" | "flat" {
  return v > 0 ? "up" : v < 0 ? "down" : "flat";
}

/** Signed text for the direction scale. */
function signed(v: number, f: (n: number) => string): string {
  return `${v > 0 ? "+" : v < 0 ? "−" : ""}${f(Math.abs(v))}`;
}

/**
 * A grid of coloured cells. Colour shows size, the number printed in each cell and the words in the cell label give the same facts.
 * The grid is one tab stop. Arrow keys move between cells, Home and End go to the row ends, PageUp and PageDown go to the column ends.
 */
export function Heatmap({ rows, cols, values, scale = "direction", formatValue = formatNumber, unit = "", showValues = true, ariaLabel, legend, cellSize = 44, className }: HeatmapProps) {
  const refs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [cur, setCur] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const nr = rows.length;
  const nc = cols.length;

  const nums = values.flat().filter((v): v is number => typeof v === "number");
  const absMax = nums.length ? Math.max(...nums.map(Math.abs)) || 1 : 1;
  const vMin = nums.length ? Math.min(...nums) : 0;
  const vMax = nums.length ? Math.max(...nums) : 1;

  /** Share of the up or down colour mixed into the surface. Capped so the printed number keeps its contrast. */
  const mix = (v: number) => 14 + 46 * (Math.abs(v) / absMax);
  const dirBg = (v: number) => (v === 0 ? "var(--surface-sunken)" : `color-mix(in srgb, var(${v > 0 ? "--up" : "--down"}) ${mix(v).toFixed(0)}%, var(--surface))`);
  const bucket = (v: number) => Math.min(BUCKETS, Math.max(1, 1 + Math.floor(((v - vMin) / (vMax - vMin || 1)) * BUCKETS - 1e-9)));
  const seqBg = (v: number) => `var(--chart-seq-${bucket(v)})`;

  const text = (v: number) => (scale === "direction" ? signed(v, formatValue) : formatValue(v));
  const label = (r: number, c: number) => {
    const v = values[r]?.[c];
    if (v === null || v === undefined) return `${rows[r]}, ${cols[c]}: No data`;
    const u = unit ? ` ${unit}` : "";
    return scale === "direction"
      ? `${rows[r]}, ${cols[c]}: ${dirWord(v)}${v === 0 ? "" : ` ${formatValue(Math.abs(v))}`}${u}`
      : `${rows[r]}, ${cols[c]}: ${formatValue(v)}${u}`;
  };

  const go = (r: number, c: number) => {
    setCur({ r, c });
    refs.current.get(`${r}:${c}`)?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>, r: number, c: number) => {
    if (!nr || !nc) return;
    if (e.key === "ArrowRight") go(r, Math.min(nc - 1, c + 1));
    else if (e.key === "ArrowLeft") go(r, Math.max(0, c - 1));
    else if (e.key === "ArrowDown") go(Math.min(nr - 1, r + 1), c);
    else if (e.key === "ArrowUp") go(Math.max(0, r - 1), c);
    else if (e.key === "Home") go(e.ctrlKey ? 0 : r, 0);
    else if (e.key === "End") go(e.ctrlKey ? nr - 1 : r, nc - 1);
    else if (e.key === "PageUp") go(0, c);
    else if (e.key === "PageDown") go(nr - 1, c);
    else return;
    e.preventDefault();
  };

  const cell = Math.max(32, cellSize);
  const grid: CSSProperties = { gridTemplateColumns: `minmax(64px, max-content) repeat(${nc}, minmax(${cell}px, 1fr))` };
  const sample = (k: number) => (scale === "direction" ? dirBg(absMax * k) : "");

  return (
    <div className={cn("min-w-0", className)}>
      <div className="overflow-x-auto">
        <div role="grid" aria-label={ariaLabel} aria-rowcount={nr + 1} aria-colcount={nc + 1} className="grid gap-px text-small leading-4" style={grid}>
          <div role="row" className="contents">
            <div role="presentation" aria-hidden />
            {cols.map((c, ci) => (
              <div key={c + ci} role="columnheader" className="truncate px-1 pb-1 text-center text-fg-muted">{c}</div>
            ))}
          </div>
          {rows.map((rl, r) => (
            <div key={rl + r} role="row" className="contents">
              <div role="rowheader" className="flex items-center pr-2 text-fg-muted" style={{ minHeight: cell }}>{rl}</div>
              {cols.map((cl, c) => {
                const v = values[r]?.[c];
                const empty = v === null || v === undefined;
                return (
                  <div key={cl + c} role="gridcell" aria-label={label(r, c)} tabIndex={cur.r === r && cur.c === c ? 0 : -1}
                    ref={(el) => { if (el) refs.current.set(`${r}:${c}`, el); else refs.current.delete(`${r}:${c}`); }}
                    onKeyDown={(e) => onKey(e, r, c)} onFocus={() => setCur({ r, c })} onPointerDown={() => setCur({ r, c })}
                    className={cn("flex items-center justify-center rounded-sm border border-transparent px-1 text-center [font-variant-numeric:tabular-nums] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--focus-ring)] forced-colors:border-[CanvasText]",
                      empty && "border-dashed border-line bg-sunken text-fg-subtle")}
                    style={{ minHeight: cell, background: empty ? undefined : scale === "direction" ? dirBg(v) : seqBg(v) }}>
                    {empty ? (
                      <span aria-hidden>{"–"}</span>
                    ) : showValues ? (
                      scale === "direction"
                        ? <span aria-hidden className="rounded-sm bg-surface px-1 text-fg">{text(v)}</span>
                        : <span aria-hidden className="rounded-sm bg-surface px-1 text-fg">{text(v)}</span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {legend && nums.length > 0 && (
        <div className="mt-3 max-w-xs text-micro text-fg-muted" aria-hidden>
          {scale === "direction" ? (
            <>
              <div className="h-2 rounded-sm border border-line" style={{ background: `linear-gradient(to right, ${sample(-1)}, var(--surface), ${sample(1)})` }} />
              <div className="mt-1 flex justify-between [font-variant-numeric:tabular-nums]">
                <span>Down {formatValue(absMax)}</span><span>0</span><span>Up {formatValue(absMax)}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex h-2 overflow-hidden rounded-sm border border-line">
                {Array.from({ length: BUCKETS }, (_, i) => <span key={i} className="flex-1" style={{ background: `var(--chart-seq-${i + 1})` }} />)}
              </div>
              <div className="mt-1 flex justify-between [font-variant-numeric:tabular-nums]">
                <span>Low {formatValue(vMin)}</span><span>High {formatValue(vMax)}</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** Table data for ChartFrame's table view: one row per heatmap row, one column per heatmap column. */
export function heatmapTable(opts: { rows: string[]; cols: string[]; values: (number | null)[][]; scale?: "direction" | "sequential"; formatValue?: (n: number) => string; unit?: string; rowHeader?: string; caption: string }): DataTableProps {
  const f = opts.formatValue ?? formatNumber;
  const dir = (opts.scale ?? "direction") === "direction";
  const u = opts.unit ? ` ${opts.unit}` : "";
  return {
    caption: opts.caption,
    columns: [
      { key: "row", header: opts.rowHeader ?? "Row" },
      ...opts.cols.map((c, i) => ({ key: `c${i}`, header: c, numeric: true, direction: dir ? (r: Record<string, unknown>) => { const t = String(r[`c${i}`]); return t.startsWith("+") ? "up" as const : t.startsWith("−") ? "down" as const : undefined; } : undefined })),
    ],
    rows: opts.rows.map((rl, r) => {
      const row: Record<string, string> = { row: rl };
      opts.cols.forEach((_, c) => {
        const v = opts.values[r]?.[c];
        row[`c${c}`] = v === null || v === undefined ? "No data" : `${dir ? signed(v, f) : f(v)}${u}`;
      });
      return row;
    }),
  };
}
```
