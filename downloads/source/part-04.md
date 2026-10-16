## tattva/atoms/Checkbox.tsx

```tsx
import { useEffect, useId, useRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "onChange" | "size" | "children"> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Visible label. Clicking it toggles the box. Also the accessible name. */
  label?: ReactNode;
  /** Visible hint under the label. Linked with aria-describedby. */
  description?: string;
  /** Shows a dash instead of a check, for a group that is partly selected. Pressing it still calls onChange. */
  indeterminate?: boolean;
  /** Marks the box as having an error (red border, aria-invalid). Show the error text yourself. */
  invalid?: boolean;
  /** Accessible name when there is no visible label. */
  ariaLabel?: string;
  className?: string;
}

/** Controlled checkbox. A native input, redrawn as a 20px box. The whole row is the click target, and at least 44px tall on coarse pointers. */
export function Checkbox({ checked, onChange, label, description, indeterminate, invalid, disabled, ariaLabel, id, className, ...rest }: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const labelId = useId();
  const descId = useId();
  // `indeterminate` is a DOM property only; there is no attribute for it.
  useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate; }, [indeterminate]);
  return (
    <label className={cn("group/cb inline-flex items-start gap-3 text-body leading-5 text-fg pointer-coarse:min-h-11 pointer-coarse:items-center", disabled ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer", className)}>
      <span className="relative mt-0.5 inline-grid size-5 shrink-0 place-items-center pointer-coarse:mt-0">
        <input {...rest} ref={ref} type="checkbox" id={id} checked={checked} disabled={disabled}
          aria-checked={indeterminate ? "mixed" : checked}
          aria-invalid={invalid || undefined}
          aria-label={label ? undefined : ariaLabel}
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={description ? descId : undefined}
          onChange={(e) => onChange(e.target.checked)}
          className={cn("peer size-5 shrink-0 appearance-none rounded-md border bg-surface transition-colors duration-[var(--dur-fast)] checked:border-accent checked:bg-accent indeterminate:border-accent indeterminate:bg-accent forced-colors:border-[ButtonText] forced-colors:checked:border-[Highlight] forced-colors:checked:bg-[Highlight] forced-colors:indeterminate:border-[Highlight] forced-colors:indeterminate:bg-[Highlight]",
            invalid ? "border-danger" : "border-line-strong", disabled ? "cursor-not-allowed" : "cursor-pointer")} />
        <CheckIcon aria-hidden className="pointer-events-none absolute size-3.5 text-on-accent opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-0 forced-colors:text-[HighlightText]" strokeWidth={3} />
        <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute size-3.5 text-on-accent opacity-0 peer-indeterminate:opacity-100 forced-colors:text-[HighlightText]" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
          <path d="M6 12h12" />
        </svg>
      </span>
      {(label || description) && (
        <span className="flex min-w-0 flex-col">
          {label && <span id={labelId}>{label}</span>}
          {description && <span id={descId} className="text-fg-muted">{description}</span>}
        </span>
      )}
    </label>
  );
}
```

## tattva/atoms/CitationMarker.tsx

```tsx

/** Inline numbered marker, e.g. "…grew 12%[1]". Links to the source and is keyboard reachable. */
export function CitationMarker({ n, href, title }: { n: number; href?: string; title?: string }) {
  return (
    <a href={href ?? `#source-${n}`} title={title} aria-label={`Source ${n}${title ? `: ${title}` : ""}`}
      className="mx-0.5 inline-flex animate-pop h-4 min-w-4 -translate-y-0.5 items-center justify-center rounded bg-accent-soft px-1 text-nano font-semibold text-accent-fg no-underline hover:bg-accent hover:text-on-accent">
      {n}
    </a>
  );
}
```

## tattva/atoms/Cluster.tsx

```tsx
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { spaceValue, type Space } from "./Stack";

const align = { start: "items-start", center: "items-center", end: "items-end", baseline: "items-baseline" } as const;
const justify = { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" } as const;

export interface ClusterProps extends HTMLAttributes<HTMLElement> {
  /** Gap step from 1 to 8 on the 4px grid, scaled by --density. */
  gap?: Space;
  /** Cross-axis alignment. */
  align?: keyof typeof align;
  /** Main-axis distribution. */
  justify?: keyof typeof justify;
  as?: "div" | "ul" | "ol" | "nav" | "section" | "header" | "footer";
  children?: ReactNode;
}

/** Wrapping horizontal group for chips, actions and metadata. Items drop to the next line instead of overflowing. */
export function Cluster({ gap = 2, align: a = "center", justify: j = "start", as = "div", className, style, children, ...rest }: ClusterProps) {
  const s: CSSProperties = { gap: spaceValue(gap), ...style };
  // Safari stops calling a list a list once its markers are removed, so say it is one.
  const isList = as === "ul" || as === "ol";
  return createElement(as, { ...(isList ? { role: "list" } : {}), ...rest, className: cn("flex flex-wrap", align[a], justify[j], isList ? "list-none p-0 m-0" : "", className), style: s }, children);
}
```

## tattva/atoms/Container.tsx

```tsx
import { createElement, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

const widths = {
  chat: "max-w-[var(--w-chat)]",
  home: "max-w-[var(--w-home)]",
  page: "max-w-[var(--w-page)]",
  full: "max-w-none",
} as const;

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Max-width preset. chat 768px, home 680px, page 1120px (proposed), full has no cap. */
  size?: keyof typeof widths;
  /** Remove the side margins, for content that bleeds to the edge. */
  flush?: boolean;
  as?: "div" | "main" | "section" | "article" | "header" | "footer" | "nav";
  children?: ReactNode;
}

/** Centered column with a width preset and side margins from --margin (16, 24 and 32px by window class). */
export function Container({ size = "page", flush, as = "div", className, children, ...rest }: ContainerProps) {
  return createElement(as, { ...rest, className: cn("mx-auto w-full", widths[size], !flush && "px-[var(--margin)]", className) }, children);
}
```

## tattva/atoms/DataFreshness.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";

export type FreshnessStatus = "live" | "delayed" | "stale" | "simulated" | "closed";

export interface DataFreshnessProps {
  /** If left out, it is worked out from asOf and now. Delayed, simulated and closed are only used when passed. */
  status?: FreshnessStatus;
  /** When the data was last updated. ISO time. */
  asOf?: string;
  /** The current time, ISO. For docs and tests. By default the real time, refreshed every second. */
  now?: string;
  /** Shown in the delayed label, such as "Delayed 15 min". */
  delayMinutes?: number;
  /** Seconds after which data counts as stale. */
  staleAfter?: number;
  className?: string;
}

const LIVE_WITHIN = 10;

function ago(seconds: number): string {
  if (seconds < 60) return `${Math.max(0, Math.floor(seconds))} sec ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return `${Math.floor(seconds / 86400)} d ago`;
}

function Icon({ status }: { status: FreshnessStatus }) {
  const common = { "aria-hidden": true, viewBox: "0 0 16 16", className: "size-3.5 shrink-0", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  if (status === "delayed" || status === "stale") return <svg {...common}><circle cx="8" cy="8" r="6" /><path d="M8 4.5V8l2.2 1.4" /></svg>;
  if (status === "simulated") return <svg {...common}><path d="M2 11l3-4 3 2 3-5 3 3" /><path d="M2 14h12" strokeDasharray="2 2" /></svg>;
  return <svg {...common}><circle cx="8" cy="8" r="6" /><path d="M5.5 8h5" /></svg>;
}

/** Says how fresh the numbers are, in words and an icon. Calm tones only: a late feed is not an error. */
export function DataFreshness({ status, asOf, now, delayMinutes = 15, staleAfter = 60, className }: DataFreshnessProps) {
  const computed = status === undefined;
  const [tickNow, setTickNow] = useState(() => Date.now());
  // Only a computed status with no fixed `now` needs a clock.
  useEffect(() => {
    if (!computed || now !== undefined || !asOf) return;
    const id = setInterval(() => setTickNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [computed, now, asOf]);

  const nowMs = now !== undefined ? Date.parse(now) : tickNow;
  const asOfMs = asOf !== undefined ? Date.parse(asOf) : NaN;
  const seconds = Number.isFinite(nowMs) && Number.isFinite(asOfMs) ? Math.max(0, (nowMs - asOfMs) / 1000) : NaN;

  let resolved: FreshnessStatus;
  if (status) resolved = status;
  else if (!Number.isFinite(seconds)) resolved = "stale";
  else resolved = seconds < LIVE_WITHIN ? "live" : seconds > staleAfter ? "stale" : "live";

  // A short gap between 10s and staleAfter still counts as live, so the label does not flicker.
  const label =
    resolved === "live" ? "Live"
    : resolved === "delayed" ? `Delayed ${delayMinutes} min`
    : resolved === "simulated" ? "Simulated data"
    : resolved === "closed" ? "Market closed"
    : Number.isFinite(seconds) ? `Stale: last update ${ago(seconds)}` : "Stale";

  // Announce once, only on the change into stale.
  const prevStatus = useRef(resolved);
  const [alert, setAlert] = useState("");
  useEffect(() => {
    if (prevStatus.current !== "stale" && resolved === "stale") setAlert("Data is stale");
    else if (resolved !== "stale") setAlert("");
    prevStatus.current = resolved;
  }, [resolved]);

  const tone = resolved === "delayed" || resolved === "stale" ? "bg-unsure-soft text-unsure-fg border-transparent" : "bg-sunken text-fg-muted border-line";
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-control border px-2 py-0.5 text-micro leading-4 font-medium whitespace-nowrap forced-colors:border-[CanvasText]", tone, className)}>
      {resolved === "live" ? <span aria-hidden className="size-2 shrink-0 rounded-full bg-up motion-safe:animate-pulse-dot forced-colors:bg-[CanvasText]" /> : <Icon status={resolved} />}
      <span>{label}</span>
      <span aria-live="polite" className="sr-only">{alert}</span>
    </span>
  );
}
```
