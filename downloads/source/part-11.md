## tattva/atoms/Skeleton.tsx

```tsx
import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Skeleton({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn("rounded-md bg-[linear-gradient(90deg,var(--surface-sunken)_25%,var(--border)_50%,var(--surface-sunken)_75%)] bg-[length:200%_100%] animate-shimmer", className)}
      {...rest}
    />
  );
}
```

## tattva/atoms/Slider.tsx

```tsx
import { useId } from "react";
import type { CSSProperties } from "react";
import { cn } from "../lib/cn";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Accessible name. */
  label: string;
  /** Shows the current value as text to the right. */
  showValue?: boolean;
  /** Turns the number into text, for example "40%". Used for the visible value and for aria-valuetext. */
  formatValue?: (value: number) => string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

// Class strings are written out in full so Tailwind can see them. Both engines get the same drawing:
// the track paints the filled part up to --fill, and the thumb is a 20px ring.
const webkit = "[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:border-0 [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,var(--color-accent)_var(--fill),var(--color-line-strong)_var(--fill))] [&::-webkit-slider-runnable-track]:forced-colors:bg-none [&::-webkit-slider-runnable-track]:forced-colors:bg-[ButtonText] [&::-webkit-slider-thumb]:-mt-1.75 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-accent [&::-webkit-slider-thumb]:bg-surface [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:forced-colors:border-[ButtonText] [&::-webkit-slider-thumb]:forced-colors:bg-[Canvas]";
const moz = "[&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border-0 [&::-moz-range-track]:bg-[linear-gradient(to_right,var(--color-accent)_var(--fill),var(--color-line-strong)_var(--fill))] [&::-moz-range-track]:forced-colors:bg-none [&::-moz-range-track]:forced-colors:bg-[ButtonText] [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-accent [&::-moz-range-thumb]:bg-surface [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:forced-colors:border-[ButtonText] [&::-moz-range-thumb]:forced-colors:bg-[Canvas]";

/** Controlled single-thumb slider on a native range input. Arrow keys, Home, End and Page keys come from the browser. */
export function Slider({ value, onChange, min = 0, max = 100, step = 1, label, showValue, formatValue, disabled, id, className }: SliderProps) {
  const auto = useId();
  const inputId = id ?? auto;
  const text = formatValue ? formatValue(value) : String(value);
  const fill = max > min ? Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100)) : 0;
  return (
    <div className={cn("flex items-center gap-3", disabled && "opacity-(--disabled-opacity)", className)}>
      <input id={inputId} type="range" min={min} max={max} step={step} value={value} disabled={disabled}
        aria-label={label} aria-valuetext={formatValue ? text : undefined}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${fill}%` } as CSSProperties}
        className={cn("m-0 h-5 min-w-0 flex-1 cursor-pointer appearance-none bg-transparent pointer-coarse:h-11 disabled:cursor-not-allowed",
          webkit, moz)} />
      {showValue && <output htmlFor={inputId} className="min-w-[3ch] text-right text-body leading-5 text-fg-muted tabular-nums">{text}</output>}
    </div>
  );
}
```

## tattva/atoms/Spinner.tsx

```tsx
export function Spinner({ size = 16, label = "Loading" }: { size?: number; label?: string }) {
  return (
    <svg role="status" aria-label={label} width={size} height={size} viewBox="0 0 24 24" className="animate-spin text-fg-muted">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
```

## tattva/atoms/Stack.tsx

```tsx
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

/** Step on the 4px grid. 1 is 4px, 8 is 32px. Multiplied by --density. */
export type Space = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type StackTag = "div" | "section" | "article" | "ul" | "ol" | "nav" | "header" | "footer" | "main" | "aside";

/** CSS length for a space step, scaled by the density token. */
export const spaceValue = (n: Space) => `calc(var(--density) * ${n * 4}px)`;

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Gap step from 1 to 8 on the 4px grid, scaled by --density. */
  gap?: Space;
  /** Element to render. Use ul or ol with li children for lists. */
  as?: StackTag;
  children?: ReactNode;
}

/** Vertical flow with one gap between children. Prefer it over margins between siblings. */
export function Stack({ gap = 4, as = "div", className, style, children, ...rest }: StackProps) {
  const s: CSSProperties = { gap: spaceValue(gap), ...style };
  // Safari stops calling a list a list once its markers are removed, so say it is one.
  const isList = as === "ul" || as === "ol";
  return createElement(as, { ...(isList ? { role: "list" } : {}), ...rest, className: cn("flex flex-col", isList ? "list-none p-0 m-0" : "", className), style: s }, children);
}
```

## tattva/atoms/StatusLine.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface StatusLineProps {
  /** The pieces of the line, in order. A middle dot is drawn between them. */
  items: ReactNode[];
  /** Index of the item that is the current state. It keeps the normal ink and turns medium weight. The others are muted. */
  current?: number;
  /** Accessible name of the group. */
  label?: string;
  className?: string;
}

/** One quiet line for the top of a screen, such as "Case · Flipkart · ₹2,340 · Waiting". It truncates instead of wrapping. */
export function StatusLine({ items, current, label = "Status", className }: StatusLineProps) {
  return (
    <div role="group" aria-label={label} className={cn("min-w-0 truncate text-body leading-6 text-fg", className)}>
      <span className="sr-only">Status: </span>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span aria-hidden className="mx-1.5 text-fg-subtle">{"·"}</span>}
          <span aria-current={i === current ? "true" : undefined} className={current === undefined ? undefined : i === current ? "font-medium text-fg" : "text-fg-muted"}>{item}</span>
        </span>
      ))}
    </div>
  );
}
```

## tattva/atoms/StatusTicker.tsx

```tsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ShimmerText } from "./ShimmerText";

export interface StatusTickerProps {
  /** The step the AI run is on right now, such as "Reading 3 files". The app passes the real step; when done, pass the final line, such as "Done in 12s". */
  current: string;
  /** Every step text the run may show. Used only to reserve the width of the widest one, so the box never grows. */
  steps?: string[];
  /** The run has finished. The line stops shimmering, aria-busy is removed and the line is announced at once. */
  done?: boolean;
  /** Accessible name of the line, such as "Assistant status". */
  label?: string;
  /** A text whose width the box keeps from the start, such as the longest step you expect. */
  reserve?: string;
  className?: string;
}

/** Screen readers hear a new step at most this often. The latest step wins. */
const ANNOUNCE_GAP = 2000;

/** One line that shows the real current step of an AI run. It keeps the width of the widest text it has shown, so nothing beside it moves. */
export function StatusTicker({ current, steps, done = false, label = "AI status", reserve, className }: StatusTickerProps) {
  const reduced = useReducedMotion();
  const [prev, setPrev] = useState<{ text: string; key: number } | null>(null);
  const [shown, setShown] = useState({ text: current, key: 0 });
  const [minWidth, setMinWidth] = useState(0);
  const [spoken, setSpoken] = useState(current);
  const textRef = useRef<HTMLSpanElement>(null);
  const lastSpoke = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Swap the line during render so the old text and the new one are drawn in the same frame.
  if (current !== shown.text) {
    setPrev(reduced ? null : { text: shown.text, key: shown.key });
    setShown({ text: current, key: shown.key + 1 });
  }

  // Remember the widest text shown so far; the box never shrinks below it.
  useLayoutEffect(() => {
    const w = textRef.current?.getBoundingClientRect().width ?? 0;
    setMinWidth((m) => (w > m ? w : m));
  }, [shown.key]);

  // Throttle the live region: speak at once if the last announcement was long enough ago, else speak the latest step when the gap ends.
  useEffect(() => {
    clearTimeout(timer.current);
    const speak = () => { lastSpoke.current = Date.now(); setSpoken(current); };
    const wait = ANNOUNCE_GAP - (Date.now() - lastSpoke.current);
    if (done || wait <= 0) speak();
    else timer.current = setTimeout(speak, wait);
    return () => clearTimeout(timer.current);
  }, [current, done]);

  const ghosts = [reserve, ...(steps ?? [])].filter((s): s is string => !!s);
  const working = !done && !reduced;

  return (
    <span className={cn("inline-flex max-w-full min-w-0 align-middle", className)}>
      <span role="group" aria-label={label} aria-busy={!done} style={{ minWidth: `min(${minWidth}px, 100%)` }} className="relative inline-grid min-w-0 max-w-full text-body leading-6 text-fg-muted">
        {ghosts.map((g, i) => (
          <span key={i} aria-hidden className="invisible col-start-1 row-start-1 truncate">{g}</span>
        ))}
        {prev && (
          <span key={`p${prev.key}`} aria-hidden onAnimationEnd={() => setPrev(null)}
            className="pointer-events-none absolute inset-0 truncate animate-fade-out">{prev.text}</span>
        )}
        <span key={shown.key} ref={textRef} className={cn("col-start-1 row-start-1 w-fit max-w-full truncate", !reduced && shown.key > 0 && "animate-blur-in", done && "text-fg")}>
          {working ? <ShimmerText className="leading-6">{shown.text}</ShimmerText> : shown.text}
        </span>
      </span>
      <span role="status" aria-live="polite" className="sr-only">{spoken}</span>
    </span>
  );
}
```

## tattva/atoms/Switch.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SwitchProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  /** Accessible name. Used as aria-label only when there are no children. */
  label: string;
  /** Visible label beside the switch. Clicking it toggles the switch, and it becomes the accessible name. */
  children?: ReactNode;
  /** Which side of the switch the children sit on. */
  labelPosition?: "start" | "end";
  /** Blocks toggling and dims the switch. */
  disabled?: boolean;
  /** Extra context announced after the name through aria-describedby. Rendered as screen reader text. */
  description?: string;
  id?: string;
  className?: string;
}

/** Controlled on/off toggle. The track is 20px tall. The button around it is at least 24px tall, and 44px on coarse pointers. */
export function Switch({ checked, onChange, label, children, labelPosition = "end", disabled, description, id, className }: SwitchProps) {
  const descId = useId();
  const textId = useId();
  const hasText = children != null && children !== false && children !== "";
  const control = (
    <button type="button" role="switch" id={id} aria-checked={checked} aria-label={hasText ? undefined : label} aria-labelledby={hasText ? textId : undefined} disabled={disabled}
      aria-describedby={description ? descId : undefined} onClick={() => { if (!disabled) onChange(!checked); }}
      className={cn("inline-flex min-h-6 min-w-9 shrink-0 cursor-pointer items-center justify-center rounded-full disabled:cursor-not-allowed pointer-coarse:min-h-11 pointer-coarse:min-w-11", !hasText && className)}>
      <span aria-hidden className={cn("relative block h-5 w-9 rounded-full border border-transparent forced-colors:border-[CanvasText] transition-colors duration-[var(--dur-fast)]", disabled ? "bg-line" : checked ? "bg-accent" : "bg-line-strong")}>
        <span className={cn("absolute top-px left-px size-4 rounded-full bg-thumb shadow-sm forced-colors:bg-[CanvasText] transition-transform duration-[var(--dur-fast)]", checked && "translate-x-4")} />
      </span>
      {description && <span id={descId} className="sr-only">{description}</span>}
    </button>
  );
  if (!hasText) return control;
  const text = <span id={textId} className={cn("text-body leading-5", disabled ? "text-disabled-fg" : "text-fg")}>{children}</span>;
  return (
    <label className={cn("inline-flex items-center gap-3", disabled ? "cursor-not-allowed" : "cursor-pointer", className)}>
      {labelPosition === "start" && text}
      {control}
      {labelPosition === "end" && text}
    </label>
  );
}
```
