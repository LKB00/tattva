## tattva/atoms/PriceChange.tsx

```tsx
import { cn } from "../lib/cn";

export interface PriceChangeProps {
  /** The change as an absolute amount, such as 32.5. The sign sets the direction. */
  change: number;
  /** The change as a percent, such as 1.14. */
  percent?: number;
  currency?: string;
  locale?: string;
  decimals?: number;
  /** What to show: the amount and the percent, only the percent, or only the amount. */
  format?: "both" | "percent" | "amount";
  /** Shown instead of the numbers when both are zero. */
  flatLabel?: string;
  className?: string;
}

type Dir = "up" | "down" | "flat";

function direction(change: number, percent?: number): Dir {
  const n = change !== 0 && Number.isFinite(change) ? change : percent ?? 0;
  return n > 0 ? "up" : n < 0 ? "down" : "flat";
}

function num(abs: number, locale: string, decimals: number, style: "currency" | "percent" | "decimal", currency: string): string {
  try {
    if (style === "percent") return `${new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(abs)}%`;
    return new Intl.NumberFormat(locale, { style: "currency", currency, minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(abs);
  } catch {
    return abs.toFixed(decimals);
  }
}

/** A signed change with an arrow. Direction is shown by the arrow and the sign, never by colour alone. */
export function PriceChange({ change, percent, currency = "INR", locale = "en-IN", decimals = 2, format = "both", flatLabel, className }: PriceChangeProps) {
  const amountOk = Number.isFinite(change);
  const percentOk = percent !== undefined && Number.isFinite(percent);
  const wantAmount = format !== "percent";
  const wantPercent = format !== "amount";
  const usable = (wantAmount && amountOk) || (wantPercent && percentOk);
  if (!usable) return <span className={cn("font-mono tabular-nums whitespace-nowrap", className)}>{"—"}</span>;

  const dir = direction(amountOk ? change : 0, percentOk ? percent : undefined);
  const sign = dir === "up" ? "+" : dir === "down" ? "−" : "";
  const parts: string[] = [];
  if (wantAmount && amountOk) parts.push(`${sign}${num(Math.abs(change), locale, decimals, "currency", currency)}`);
  if (wantPercent && percentOk) parts.push(`${sign}${num(Math.abs(percent), locale, decimals, "percent", currency)}`);
  const text = parts.length === 2 ? `${parts[0]} (${parts[1]})` : parts[0];
  const showFlat = dir === "flat" && flatLabel;

  return (
    <span className={cn("inline-flex items-center gap-1 whitespace-nowrap font-mono tabular-nums", dir === "up" && "text-up-fg", dir === "down" && "text-down-fg", dir === "flat" && "text-fg-muted", className)}>
      <span className="sr-only">{dir === "up" ? "Up " : dir === "down" ? "Down " : "Unchanged "}</span>
      <svg aria-hidden viewBox="0 0 10 10" className="size-[0.6em] shrink-0" fill={dir === "flat" ? "none" : "currentColor"} stroke={dir === "flat" ? "currentColor" : "none"} strokeWidth={1.5} strokeLinecap="round">
        {dir === "up" && <path d="M5 1l4 7H1z" />}
        {dir === "down" && <path d="M5 9L1 2h8z" />}
        {dir === "flat" && <path d="M1.5 5h7" />}
      </svg>
      <span>{showFlat ? flatLabel : text}</span>
    </span>
  );
}
```

## tattva/atoms/Reveal.tsx

```tsx
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** Stagger step in ms. Proposal. */
export const REVEAL_STEP = 40;
/** Items beyond this index share the last delay, so the whole group settles inside 400ms. Proposal. */
export const REVEAL_CAP = 5;

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  /** rise moves 6px up while fading in (220ms). fade is opacity only (150ms). */
  variant?: "rise" | "fade";
  /** Position in a group. Delay is index x 40ms, held at the cap so the group stays under 400ms. */
  index?: number;
  as?: "div" | "li" | "section" | "article" | "span" | "p";
  children?: ReactNode;
}

/**
 * Enter animation wrapper using animate-rise or animate-fade.
 * Under reduced motion it renders its children with no animation.
 * Stagger numbers (40ms step, 5 items) are proposals.
 */
export function Reveal({ variant = "rise", index = 0, as = "div", className, style, children, ...rest }: RevealProps) {
  const reduced = useReducedMotion();
  const delay = Math.min(Math.max(index, 0), REVEAL_CAP - 1) * REVEAL_STEP;
  const s: CSSProperties | undefined = reduced ? style : { animationDelay: `${delay}ms`, ...style };
  return createElement(as, { ...rest, className: cn(!reduced && (variant === "rise" ? "animate-rise" : "animate-fade"), className), style: s }, children);
}
```

## tattva/atoms/ScrollEdge.tsx

```tsx
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/cn";

export interface ScrollEdgeProps {
  /** Which edge softens. */
  edge?: "top" | "bottom" | "both";
  /** Height of the fade zone, in px. */
  size?: number;
  /** The content that scrolls. */
  children?: ReactNode;
  /** Accessible name of the scrolling region. */
  label?: string;
  /** Classes for the outer box. Give it a height, or place it in a flex or grid cell that has one. */
  className?: string;
  /** Classes for the element that scrolls. */
  contentClassName?: string;
}

// Stops run from 0% (the content side) to 100% (the screen edge) because --se-dir points towards the edge.
// Each blur layer owns an overlapping slice, so the strength ramps up instead of showing as a band.
// Blur doubles: 0.75, 1.5, 3, 6, 12px.
const LAYERS = [
  "[backdrop-filter:blur(0.75px)] [-webkit-backdrop-filter:blur(0.75px)] [mask-image:linear-gradient(var(--se-dir),transparent_0%,black_20%,black_40%,transparent_60%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_0%,black_20%,black_40%,transparent_60%)]",
  "[backdrop-filter:blur(1.5px)] [-webkit-backdrop-filter:blur(1.5px)] [mask-image:linear-gradient(var(--se-dir),transparent_20%,black_40%,black_60%,transparent_80%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_20%,black_40%,black_60%,transparent_80%)]",
  "[backdrop-filter:blur(3px)] [-webkit-backdrop-filter:blur(3px)] [mask-image:linear-gradient(var(--se-dir),transparent_40%,black_60%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_40%,black_60%,black_80%,transparent_100%)]",
  "[backdrop-filter:blur(6px)] [-webkit-backdrop-filter:blur(6px)] [mask-image:linear-gradient(var(--se-dir),transparent_60%,black_80%,black_100%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_60%,black_80%,black_100%)]",
  "[backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] [mask-image:linear-gradient(var(--se-dir),transparent_80%,black_100%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_80%,black_100%)]",
];

const TINT = "[background-image:linear-gradient(var(--se-dir),transparent_0%,color-mix(in_srgb,var(--bg)_35%,transparent)_55%,color-mix(in_srgb,var(--bg)_90%,transparent)_100%)]";
const SOLID = "[background-image:linear-gradient(var(--se-dir),transparent_0%,var(--bg)_100%)]";

function Edge({ side, size }: { side: "top" | "bottom"; size: number }) {
  const style = { height: size, "--se-dir": side === "top" ? "to top" : "to bottom" } as CSSProperties;
  return (
    <div aria-hidden style={style} className={cn("pointer-events-none absolute inset-x-0", side === "top" ? "top-0" : "bottom-0")}>
      {/* Plain gradient: where backdrop-filter is missing. */}
      <div className={cn("absolute inset-0 supports-[backdrop-filter]:hidden", SOLID)} />
      {/* Plain gradient: when the person asked for less transparency. */}
      <div className={cn("absolute inset-0 hidden [@media(prefers-reduced-transparency:reduce)]:block", SOLID)} />
      <div className="absolute inset-0 hidden supports-[backdrop-filter]:block">
        <div className="absolute inset-0 [@media(prefers-reduced-transparency:reduce)]:hidden">
          {LAYERS.map((l, i) => <div key={i} className={cn("pointer-events-none absolute inset-0", l)} />)}
          <div className={cn("absolute inset-0", TINT)} />
        </div>
      </div>
    </div>
  );
}

/**
 * A scrolling area whose top and/or bottom edge softens progressively, so content passing under it fades out
 * instead of meeting a hard panel line. The edge layers are decorative, ignore the pointer and never take focus.
 * The scroller is a focusable region, so keyboard people can scroll it with the arrow keys.
 */
export function ScrollEdge({ edge = "both", size = 48, children, label = "Scrollable content", className, contentClassName }: ScrollEdgeProps) {
  return (
    <div className={cn("relative min-h-0 overflow-hidden", className)}>
      <div role="region" aria-label={label} tabIndex={0}
        className={cn("h-full overflow-y-auto overscroll-contain focus-visible:[outline-offset:-2px]", contentClassName)}>
        {children}
      </div>
      {(edge === "top" || edge === "both") && <Edge side="top" size={size} />}
      {(edge === "bottom" || edge === "both") && <Edge side="bottom" size={size} />}
    </div>
  );
}
```

## tattva/atoms/SectionLabel.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SectionLabelProps {
  children: ReactNode;
  action?: ReactNode;
  /** Element to render. A label is plain text by default. Use a heading level only when it should appear in the page outline. */
  as?: "p" | "h2" | "h3" | "h4";
  className?: string;
}

/** Small uppercase section label, used in trays, rails and lists. */
export function SectionLabel({ children, action, as: Tag = "p", className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center justify-between gap-2 px-1", className)}>
      <Tag className="font-sans! text-nano font-normal uppercase tracking-caps text-fg-muted">{children}</Tag>
      {action && <span className="text-small leading-4 text-fg-muted">{action}</span>}
    </div>
  );
}
```

## tattva/atoms/SegmentedControl.tsx

```tsx
import { useRef, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { useIndicator } from "../hooks/useIndicator";

export interface SegmentOption<T extends string> { value: T; label: string; description?: string }

export interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Accessible name for the group. */
  label: string;
  size?: "sm" | "md";
  className?: string;
}

/** Single-choice pill group. Arrow keys move and select, Home and End jump, and only the selected option is a tab stop. */
export function SegmentedControl<T extends string>({ options, value, onChange, label, size = "md", className }: SegmentedControlProps<T>) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = useRef<HTMLDivElement>(null);
  const mark = useIndicator(group, '[role="radio"][aria-checked="true"]', value);
  // If value matches nothing, keep the first option reachable so the group is never skipped by Tab.
  const hasMatch = options.some((o) => o.value === value);
  const move = (i: number, e: KeyboardEvent) => {
    const n = options.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    onChange(options[next].value);
    refs.current[next]?.focus();
  };
  return (
    <div ref={group} role="radiogroup" aria-label={label} className={cn("relative inline-flex max-w-full overflow-x-auto rounded-control border border-line bg-sunken p-0.5 [scrollbar-width:none]", className)}>
      {mark && <span aria-hidden style={mark} className="pointer-events-none rounded-control bg-surface shadow-sm forced-colors:hidden" />}
      {options.map((o, i) => {
        const on = o.value === value;
        return (
          <button key={o.value} ref={(el) => { refs.current[i] = el; }} type="button" role="radio" aria-checked={on} title={o.description}
            tabIndex={on || (!hasMatch && i === 0) ? 0 : -1} onClick={() => onChange(o.value)} onKeyDown={(e) => move(i, e)}
            className={cn("relative cursor-pointer rounded-control font-medium whitespace-nowrap transition-colors duration-(--dur-fast)", size === "sm" ? "px-2.5 py-1 text-micro" : "px-3.5 py-1.5 text-small leading-4",
              on ? cn(!mark && "bg-surface shadow-sm", "text-fg forced-colors:border forced-colors:border-[Highlight]") : "text-fg-muted hover:text-fg")}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
```

## tattva/atoms/Select.tsx

```tsx
import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<ComponentProps<"select">, "size"> {
  /** The choices. Use this or pass <option> elements as children. */
  options?: SelectOption[];
  /** Shown while value is empty. It is a disabled first option, so it cannot be picked again. */
  placeholder?: string;
  invalid?: boolean;
  /** md is 40px tall, sm is 32px. Both are 44px on coarse pointers. */
  size?: "sm" | "md";
  /** Classes for the wrapper around the select. */
  className?: string;
}

/** A native select with a drawn chevron. The menu stays the browser's own, so it works with every screen reader and phone. */
export function Select({ options, placeholder, invalid, size = "md", className, children, value, defaultValue, ...rest }: SelectProps) {
  const empty = value === "" || (value === undefined && (defaultValue === undefined || defaultValue === ""));
  return (
    <span className={cn("relative block w-full", className)}>
      <select {...rest} value={value} defaultValue={value === undefined ? (defaultValue ?? (placeholder ? "" : undefined)) : undefined}
        aria-invalid={invalid || rest["aria-invalid"] || undefined}
        className={cn(
          "w-full appearance-none rounded-field border bg-surface pr-9 pl-3 text-body leading-5 transition-colors duration-[var(--dur-fast)] cursor-pointer",
          size === "sm" ? "h-8" : "h-10", "pointer-coarse:h-11",
          empty && placeholder ? "text-fg-subtle" : "text-fg",
          invalid || rest["aria-invalid"] ? "border-danger" : "border-line hover:border-line-strong",
          "disabled:cursor-not-allowed disabled:border-disabled-line disabled:bg-disabled disabled:text-disabled-fg",
        )}>
        {placeholder && <option value="" disabled hidden>{placeholder}</option>}
        {options?.map((o) => <option key={o.value} value={o.value} disabled={o.disabled} className="text-fg">{o.label}</option>)}
        {children}
      </select>
      <svg aria-hidden viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-fg-muted"><path d="M6 9l6 6 6-6" /></svg>
    </span>
  );
}
```

## tattva/atoms/ShimmerText.tsx

```tsx
import { cn } from "../lib/cn";

/** Shimmering status text such as "Searching the web…". */
export function ShimmerText({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("bg-[linear-gradient(90deg,var(--fg-subtle)_40%,var(--fg)_50%,var(--fg-subtle)_60%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer text-body leading-5", className)}>
      {children}
    </span>
  );
}
```
