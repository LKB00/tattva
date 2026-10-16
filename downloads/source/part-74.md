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
