## tattva/atoms/Button.tsx

```tsx
import type { ButtonHTMLAttributes, MouseEvent, ReactNode, Ref } from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "lime" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover disabled:bg-disabled disabled:text-disabled-fg",
  lime: "bg-lime text-on-lime hover:bg-lime-hover disabled:bg-disabled disabled:text-disabled-fg",
  secondary: "bg-surface text-fg border border-line hover:bg-bg hover:border-line-strong active:bg-pressed disabled:bg-disabled disabled:text-disabled-fg disabled:border-disabled-line",
  ghost: "text-fg-muted hover:bg-hover hover:text-fg active:bg-pressed disabled:bg-transparent disabled:text-disabled-fg",
  danger: "bg-danger text-on-danger hover:opacity-90 disabled:bg-disabled disabled:text-disabled-fg disabled:opacity-100",
};
const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-small leading-4 gap-1.5",
  md: "h-9 px-4 text-compact gap-2",
  lg: "h-11 px-6 text-body leading-5 gap-2",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The button element, for moving focus to it. */
  ref?: Ref<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leading?: ReactNode;
  trailing?: ReactNode;
  /** Work is running after a press. The label gives way to a spinner without changing the width, presses are ignored, and the button keeps focus and stays in the Tab order. */
  busy?: boolean;
  /** Read by screen readers while busy, for example "Saving". Defaults to "Working". */
  busyLabel?: string;
}

/** Press feedback shared by every button: a quick sink on press and a slower release. Off under reduced motion. */
export const pressable = "transition-[color,background-color,border-color,opacity,scale] duration-(--dur-fast) ease-(--ease-out) motion-safe:active:scale-(--press-scale) motion-safe:active:duration-(--dur-instant)";

function BusyMark() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 animate-spin">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Button({ variant = "primary", size = "md", leading, trailing, busy = false, busyLabel = "Working", className, children, type = "button", onClick, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      aria-busy={busy || undefined}
      onClick={(e: MouseEvent<HTMLButtonElement>) => { if (busy) { e.preventDefault(); return; } onClick?.(e); }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-control font-medium whitespace-nowrap select-none cursor-pointer",
        pressable, "disabled:pointer-events-none",
        busy && "cursor-progress motion-safe:active:scale-100",
        variants[variant], sizes[size], className,
      )}
      {...rest}
    >
      <span className={cn("inline-flex items-center justify-center gap-[inherit] transition-opacity duration-(--dur-fast)", busy && "opacity-0")}>{leading}{children}{trailing}</span>
      {busy && <span className="absolute inset-0 flex items-center justify-center motion-safe:animate-fade"><BusyMark /><span className="sr-only">{busyLabel}</span></span>}
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The button element, for moving focus to it. */
  ref?: Ref<HTMLButtonElement>;
  /** Required: icon-only controls must have an accessible name. */
  label: string;
  variant?: "ghost" | "secondary" | "primary" | "lime";
  size?: "sm" | "md";
  active?: boolean;
}

export function IconButton({ label, variant = "ghost", size = "md", active, className, children, type = "button", ...rest }: IconButtonProps) {
  const v = { ghost: "text-fg-subtle hover:bg-hover hover:text-fg active:bg-pressed disabled:bg-transparent disabled:text-disabled-fg", secondary: "border border-line bg-surface text-fg-muted hover:bg-bg hover:text-fg active:bg-pressed disabled:bg-disabled disabled:text-disabled-fg disabled:border-disabled-line", primary: "bg-accent text-on-accent hover:bg-accent-hover disabled:bg-disabled disabled:text-disabled-fg", lime: "bg-lime text-on-lime hover:bg-lime-hover disabled:bg-disabled disabled:text-disabled-fg" }[variant];
  return (
    <button
      type={type}
      data-slot="icon-button"
      data-variant={variant}
      data-size={size}
      data-active={active || undefined}
      aria-label={label}
      title={label}
      aria-pressed={active}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-control cursor-pointer disabled:pointer-events-none", pressable,
        size === "sm" ? "size-7" : "size-9", v, active && "bg-accent-soft text-accent-fg", className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
```

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
