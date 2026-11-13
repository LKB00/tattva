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

## tattva/organisms/OrderTicket.tsx

```tsx
import { useId } from "react";
import type { FormEvent, ReactNode } from "react";
import { Button } from "../atoms/Button";
import { NumberField } from "../atoms/NumberField";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { Spinner } from "../atoms/Spinner";
import { Field } from "../molecules/Field";
import { cn } from "../lib/cn";
import { AlertIcon, LockIcon } from "../lib/icons";

export interface OrderTicketValue {
  side: "buy" | "sell";
  quantity: number | null;
  orderType: "market" | "limit" | "stop";
  limitPrice: number | null;
  product: "intraday" | "delivery";
  stop: number | null;
  target: number | null;
}

export interface OrderTicketProps {
  symbol: string;
  /** Last traded price, shown at the top. Formatting only; this part does no money maths. */
  price?: number;
  value: OrderTicketValue;
  onChange: (value: OrderTicketValue) => void;
  /** Size of one lot. Quantity then moves in lots and must be a multiple of it. */
  lotSize?: number;
  /** Smallest price step for the price fields. */
  tickSize?: number;
  /** What the order will cost or risk, worked out by the app. Shown as given. */
  summary?: { label: string; value: ReactNode; hint?: string }[];
  /** Messages in words, one per field. */
  errors?: Partial<Record<keyof OrderTicketValue, string>>;
  /** Called when the person presses the submit button. This part never places an order itself. */
  onSubmit: () => void;
  /** Button text. Defaults to the side and symbol, such as "Buy RELIANCE". */
  submitLabel?: string;
  /** Shows a spinner in the button and blocks a second press. */
  submitting?: boolean;
  /** Locks every field and the button. */
  disabled?: boolean;
  /** Why it is locked, in words, next to the button. */
  disabledReason?: string;
  className?: string;
}

const fmt = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** A small labelled group for choices that are buttons, with the error in words under it. */
function Group({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-body leading-5 font-medium text-fg">{label}</span>
      {children}
      <div aria-live="polite" className="empty:hidden">
        {error && <p className="flex items-start gap-1.5 text-small leading-4 text-danger-fg"><AlertIcon className="mt-px shrink-0" width={14} height={14} />{error}</p>}
      </div>
    </div>
  );
}

/**
 * A controlled order form. It collects the choices and hands them back; it never sends anything.
 * The submit button calls onSubmit and the app decides what happens next.
 */
export function OrderTicket({ symbol, price, value, onChange, lotSize, tickSize = 0.05, summary, errors = {}, onSubmit, submitLabel, submitting, disabled, disabledReason, className }: OrderTicketProps) {
  const uid = useId();
  const reasonId = `${uid}-reason`;
  const set = (patch: Partial<OrderTicketValue>) => onChange({ ...value, ...patch });
  const priced = value.orderType !== "market";
  const lotError = lotSize && value.quantity != null && value.quantity % lotSize !== 0 ? `Quantity must be a multiple of ${lotSize}.` : undefined;
  const label = submitLabel ?? `${value.side === "buy" ? "Buy" : "Sell"} ${symbol}`;
  const locked = !!disabled || !!submitting;
  const submit = (e: FormEvent) => { e.preventDefault(); if (!locked) onSubmit(); };

  return (
    <form onSubmit={submit} aria-label={`Order ticket for ${symbol}`} className={cn("flex w-full max-w-phone flex-col gap-4 rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lead leading-6 font-semibold text-fg">{symbol}</h3>
        {price != null && <p className="text-body leading-5 text-fg-muted">Last price <span className="font-medium text-fg tabular-nums">{fmt(price)}</span></p>}
      </div>
      <fieldset disabled={disabled} className="m-0 flex min-w-0 flex-col gap-4 border-0 p-0">
        <legend className="sr-only">Order details</legend>
        <Group label="Side" error={errors.side}>
          <SegmentedControl label="Side" value={value.side} onChange={(side) => set({ side })} options={[{ value: "buy", label: "Buy" }, { value: "sell", label: "Sell" }]} />
        </Group>
        <Field label="Quantity" error={errors.quantity ?? lotError} hint={lotSize ? `1 lot = ${lotSize}` : undefined}>
          {(a) => <NumberField {...a} label="Quantity" value={value.quantity} onChange={(quantity) => set({ quantity })} min={lotSize ?? 1} step={lotSize ?? 1} precision={0} />}
        </Field>
        <Group label="Order type" error={errors.orderType}>
          <SegmentedControl label="Order type" value={value.orderType} onChange={(orderType) => set({ orderType })} options={[{ value: "market", label: "Market" }, { value: "limit", label: "Limit" }, { value: "stop", label: "Stop" }]} />
        </Group>
        {priced && (
          <Field label={value.orderType === "stop" ? "Trigger price" : "Limit price"} error={errors.limitPrice}>
            {(a) => <NumberField {...a} label={value.orderType === "stop" ? "Trigger price" : "Limit price"} value={value.limitPrice} onChange={(limitPrice) => set({ limitPrice })} min={0} step={tickSize} precision={2} />}
          </Field>
        )}
        <Group label="Product" error={errors.product}>
          <SegmentedControl label="Product" value={value.product} onChange={(product) => set({ product })} options={[{ value: "intraday", label: "Intraday" }, { value: "delivery", label: "Delivery" }]} />
        </Group>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Stop" optional error={errors.stop}>
            {(a) => <NumberField {...a} label="Stop" value={value.stop} onChange={(stop) => set({ stop })} min={0} step={tickSize} precision={2} />}
          </Field>
          <Field label="Target" optional error={errors.target}>
            {(a) => <NumberField {...a} label="Target" value={value.target} onChange={(target) => set({ target })} min={0} step={tickSize} precision={2} />}
          </Field>
        </div>
      </fieldset>
      {summary && summary.length > 0 && (
        <dl className="m-0 flex flex-col gap-2 rounded-card bg-sunken p-3 text-body leading-5">
          {summary.map((r) => (
            // A description group holds its term and details directly, as the HTML list rules require.
            <div key={r.label} className="flex flex-wrap items-baseline justify-between gap-x-3">
              <dt className="text-fg-muted">{r.label}</dt>
              <dd className="m-0 font-medium text-fg tabular-nums">{r.value}</dd>
              {r.hint && <dd className="m-0 w-full text-small leading-4 text-fg-muted">{r.hint}</dd>}
            </div>
          ))}
        </dl>
      )}
      <div className="flex flex-col gap-2">
        <Button type="submit" size="lg" className="w-full pointer-coarse:h-12" disabled={locked} aria-busy={submitting || undefined} aria-describedby={disabled && disabledReason ? reasonId : undefined}
          leading={submitting ? <Spinner size={16} label="Submitting" /> : undefined}>
          {label}
        </Button>
        {disabled && disabledReason && (
          <p id={reasonId} className="flex items-start gap-1.5 text-body leading-5 text-fg-muted"><LockIcon className="mt-0.5 shrink-0" width={14} height={14} />{disabledReason}</p>
        )}
      </div>
    </form>
  );
}
```
