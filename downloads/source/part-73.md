## tattva/organisms/NeedsYouInbox.tsx

```tsx
import { useId, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, NeedsReviewIcon, ShieldIcon } from "../lib/icons";
import { AgentStatusIcon } from "../atoms/AgentStatusIcon";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { EmptyState } from "../molecules/EmptyState";

export type InboxKind = "question" | "approval" | "failure" | "review";
export type InboxUrgency = "now" | "soon" | "later";

export interface InboxItem {
  id: string;
  /** Name of the run that is waiting. */
  run: string;
  kind: InboxKind;
  urgency: InboxUrgency;
  /** What is needed, in plain words, such as "Pick a hotel". */
  need: string;
  /** How long it has waited, such as "12 min". */
  waited: string;
  /** Label of the action button, such as "Answer". */
  actionLabel: string;
}

export interface NeedsYouInboxLabels {
  title?: string;
  groups?: Partial<Record<InboxUrgency, string>>;
  kinds?: Partial<Record<InboxKind, string>>;
  waiting?: (time: string) => string;
  emptyTitle?: string;
  emptyBody?: string;
}

export interface NeedsYouInboxProps {
  items: InboxItem[];
  /** Called with the item when its action button is pressed. */
  onAction?: (item: InboxItem) => void;
  labels?: NeedsYouInboxLabels;
  /** Heading level. Default 2. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}

const groupOrder: InboxUrgency[] = ["now", "soon", "later"];
const groupDefaults: Record<InboxUrgency, string> = { now: "Needs you now", soon: "Needs you soon", later: "When you have time" };
const kindDefaults: Record<InboxKind, string> = { question: "Question", approval: "Approval", failure: "Failed", review: "Ready for review" };
const kindIcon: Record<InboxKind, ReactNode> = {
  question: <AgentStatusIcon status="needs-input" size={14} />,
  approval: <ShieldIcon width={14} height={14} />,
  failure: <AlertIcon width={14} height={14} />,
  review: <NeedsReviewIcon width={14} height={14} />,
};

/**
 * One list of everything that is waiting on a person, across all runs. Items are grouped by how
 * urgent they are, and each row says which run, what is needed, how long it has waited and has one
 * action. Rows wrap on a narrow screen. Amber marks only the "now" group, where a person must act.
 */
export function NeedsYouInbox({ items, onAction, labels, headingLevel = 2, className }: NeedsYouInboxProps) {
  const l = {
    title: "Waiting for you", emptyTitle: "Nothing is waiting for you", emptyBody: "When a run needs an answer, an approval or a look, it will show up here.",
    waiting: (t: string) => `Waiting ${t}`, ...labels,
  };
  const groups = { ...groupDefaults, ...labels?.groups };
  const kinds = { ...kindDefaults, ...labels?.kinds };
  const uid = useId();
  const H = `h${headingLevel}` as "h2";
  const H2 = `h${Math.min(headingLevel + 1, 6)}` as "h3";
  const total = items.length;
  return (
    <section aria-labelledby={`${uid}-title`} className={cn("rounded-card border border-line bg-surface p-4 sm:p-5", className)}>
      <div className="flex items-center gap-2">
        <H id={`${uid}-title`} className="text-body leading-5 font-medium">{l.title}</H>
        {total > 0 && <Badge tone="warning" aria-label={`${total} items`}>{total}</Badge>}
      </div>
      {total === 0 ? (
        <div className="mt-3"><EmptyState variant="cleared" title={l.emptyTitle} compact layout="start" headingLevel={Math.min(headingLevel + 1, 4) as 3 | 4}>{l.emptyBody}</EmptyState></div>
      ) : (
        <div className="mt-3 space-y-4">
          {groupOrder.map((g) => {
            const rows = items.filter((i) => i.urgency === g);
            if (!rows.length) return null;
            return (
              <div key={g}>
                <H2 className="mb-1.5 flex items-center gap-2 text-small leading-4 font-medium text-fg-muted">
                  {g === "now" && <AlertIcon width={12} height={12} className="text-attention" />}{groups[g]}<span className="text-fg-subtle">{rows.length}</span>
                </H2>
                <ul className="space-y-1.5">
                  {rows.map((it) => (
                    <li key={it.id} className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 rounded-card border px-3 py-2.5", g === "now" ? "border-attention" : "border-line")}>
                      <div className="min-w-0 flex-1 basis-52">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="truncate text-body leading-5 font-medium">{it.run}</span>
                          <Badge tone={it.kind === "failure" ? "danger" : "neutral"}>{kindIcon[it.kind]}{kinds[it.kind]}</Badge>
                        </div>
                        <p className="mt-0.5 text-body leading-5 break-words text-fg-muted">{it.need}</p>
                        <p className="mt-0.5 text-small leading-4 text-fg-subtle">{l.waiting(it.waited)}</p>
                      </div>
                      <div className="ml-auto flex flex-wrap justify-end gap-2">
                        <Button variant={g === "now" ? "primary" : "secondary"} size="sm" onClick={() => onAction?.(it)}
                          aria-label={`${it.actionLabel}: ${it.run}, ${it.need}`}>{it.actionLabel}</Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
```

## tattva/organisms/OptionChain.tsx

```tsx
import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "../lib/cn";

export interface ChainSide {
  ltp: number | null;
  oi?: number | null;
  oiChange?: number | null;
  iv?: number | null;
  delta?: number | null;
}
export type ChainColumn = "oi" | "oiChange" | "iv" | "delta" | "ltp";
export interface ChainRow { strike: number; call: ChainSide; put: ChainSide }
export interface ChainPick { side: "call" | "put"; strike: number; ltp: number }

export interface OptionChainProps {
  rows: ChainRow[];
  /** Current price of the underlying. The row with the nearest strike is marked. */
  spot: number;
  /** Columns on each side. Calls show them in this order; puts mirror it so Price is next to the strike on both sides. */
  columns?: ChainColumn[];
  /** Called when a price cell is pressed. When left out, prices are plain text. */
  onPick?: (pick: ChainPick) => void;
  selected?: { side: "call" | "put"; strike: number };
  /** Shown above the table, such as "Expiry 30 Oct". */
  expiryLabel?: string;
  /** Accessible name of the scrolling region. */
  ariaLabel: string;
  /** CSS height limit for the scrolling region, such as 420 or "60vh". The header stays in view. */
  maxHeight?: number | string;
  className?: string;
}

const COLS: Record<ChainColumn, string> = { oi: "OI", oiChange: "OI change", iv: "IV", delta: "Delta", ltp: "Price" };
const NONE = "—";

/** Lakh and crore for large counts, so 1,23,456 reads as 1.23 L. */
function compact(n: number): string {
  const a = Math.abs(n);
  if (a >= 1e7) return `${(n / 1e7).toFixed(2)} Cr`;
  if (a >= 1e5) return `${(n / 1e5).toFixed(2)} L`;
  return n.toLocaleString("en-IN");
}
function show(col: ChainColumn, v: number | null | undefined): string {
  if (v == null) return NONE;
  if (col === "oi") return compact(v);
  if (col === "oiChange") return `${v > 0 ? "+" : ""}${compact(v)}`;
  if (col === "iv") return `${v.toFixed(1)}%`;
  if (col === "delta") return v.toFixed(2);
  return v.toFixed(2);
}
const strikeText = (n: number) => n.toLocaleString("en-IN");

/**
 * Calls on the left, puts on the right, strike in the middle. A real table inside its own scroll region.
 * In-the-money cells get a quiet grey tint and a small diamond. Gain and loss colours are not used.
 */
export function OptionChain({ rows, spot, columns = ["oi", "iv", "ltp"], onPick, selected, expiryLabel, ariaLabel, maxHeight, className }: OptionChainProps) {
  const root = useRef<HTMLDivElement>(null);
  const cols = columns.length ? columns : (["ltp"] as ChainColumn[]);
  const putCols = [...cols].reverse();
  const atm = rows.reduce<number | null>((best, r) => (best === null || Math.abs(r.strike - spot) < Math.abs(best - spot) ? r.strike : best), null);

  // Up and down move between rows in the same column. Left, right and Tab keep their native behaviour.
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, side: "call" | "put") => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const all = Array.from(root.current?.querySelectorAll<HTMLButtonElement>(`button[data-pick="${side}"]`) ?? []);
    const i = all.indexOf(e.currentTarget);
    const next = all[i + (e.key === "ArrowDown" ? 1 : -1)];
    if (next) { e.preventDefault(); next.focus(); }
  };

  const th = "sticky z-20 border-b border-line bg-sunken px-2 text-small leading-4 font-medium text-fg-muted whitespace-nowrap";
  const cell = (row: ChainRow, side: "call" | "put", col: ChainColumn, edge: boolean) => {
    const data = side === "call" ? row.call : row.put;
    const itm = side === "call" ? row.strike < spot : row.strike > spot;
    const isAtm = row.strike === atm;
    const v = data[col];
    const on = selected?.side === side && selected.strike === row.strike;
    return (
      <td key={`${side}-${col}`} className={cn("px-2 py-1.5 text-right text-small leading-4 text-fg tabular-nums whitespace-nowrap", isAtm ? "border-y border-fg" : "border-b border-line", itm && "bg-sunken")}>
        {itm && edge && (
          <>
            <span aria-hidden className="mr-1.5 inline-block size-1.5 rotate-45 border border-fg-muted align-middle forced-colors:border-[CanvasText]" />
            <span className="sr-only">In the money. </span>
          </>
        )}
        {col === "ltp" && onPick && v != null ? (
          <button type="button" data-pick={side} aria-pressed={on} aria-label={`${side === "call" ? "Call" : "Put"} ${strikeText(row.strike)}, price ${v.toFixed(2)}`}
            onClick={() => onPick({ side, strike: row.strike, ltp: v })} onKeyDown={(e) => onKey(e, side)}
            className={cn("-my-1 -mx-1 min-w-12 cursor-pointer rounded-md px-1.5 py-1 text-right text-small leading-4 tabular-nums transition-colors duration-[var(--dur-fast)] pointer-coarse:min-h-11 pointer-coarse:min-w-11",
              on ? "bg-accent font-medium text-on-accent" : "hover:bg-hover")}>
            {show(col, v)}
          </button>
        ) : show(col, v)}
      </td>
    );
  };

  return (
    <div className={cn("w-full min-w-0", className)}>
      <p className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 text-body leading-5 text-fg-muted">
          <span>{expiryLabel}</span>
          <span>Spot <span className="font-medium text-fg tabular-nums">{spot.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></span>
      </p>
      <div ref={root} role="region" aria-label={ariaLabel} tabIndex={0} style={{ maxHeight }} className="relative overflow-auto rounded-card border border-line bg-surface">
        <table className="w-full min-w-max border-separate border-spacing-0">
          <caption className="sr-only">{`${ariaLabel}. Calls on the left, puts on the right, strike in the middle.${expiryLabel ? ` ${expiryLabel}.` : ""}`}</caption>
          <thead>
            <tr>
              <th scope="colgroup" colSpan={cols.length} className={cn(th, "top-0 h-8 text-center")}>Calls</th>
              <th scope="col" rowSpan={2} className={cn(th, "top-0 left-0 right-0 z-30 border-x border-line text-center")}>Strike</th>
              <th scope="colgroup" colSpan={cols.length} className={cn(th, "top-0 h-8 text-center")}>Puts</th>
            </tr>
            <tr>
              {cols.map((c) => <th key={`c-${c}`} scope="col" className={cn(th, "top-8 py-1 text-right")}>{COLS[c]}</th>)}
              {putCols.map((c) => <th key={`p-${c}`} scope="col" className={cn(th, "top-8 py-1 text-right")}>{COLS[c]}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const isAtm = r.strike === atm;
              return (
                <tr key={r.strike}>
                  {cols.map((c, i) => cell(r, "call", c, i === cols.length - 1))}
                  <th scope="row" className={cn("sticky left-0 right-0 z-10 border-x border-line px-3 py-1.5 text-center text-small leading-4 font-semibold text-fg tabular-nums whitespace-nowrap", isAtm ? "border-y border-y-fg bg-sunken" : "border-b bg-surface")}>
                    {strikeText(r.strike)}
                    {isAtm && (
                      <>
                        <span aria-hidden className="ml-1.5 rounded-control border border-fg px-1.5 text-nano font-medium">ATM</span>
                        <span className="sr-only"> At the money</span>
                      </>
                    )}
                  </th>
                  {putCols.map((c, i) => cell(r, "put", c, i === 0))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```
