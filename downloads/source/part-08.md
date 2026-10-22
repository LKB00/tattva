## tattva/atoms/NumberField.tsx

```tsx
import { useState } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { PlusIcon } from "../lib/icons";

export interface NumberFieldProps {
  value: number | null;
  onChange: (value: number | null) => void;
  /** Accessible name. The buttons are named from it too. */
  label: string;
  min?: number;
  max?: number;
  /** Amount for the buttons and Arrow keys. */
  step?: number;
  /** Decimals shown and kept. Defaults to the decimals in step. */
  precision?: number;
  /** Text after the number, such as "lots". */
  unit?: string;
  invalid?: boolean;
  disabled?: boolean;
  /** md is 40px tall, sm is 32px. Both are 44px on coarse pointers. */
  size?: "sm" | "md";
  id?: string;
  "aria-describedby"?: string;
  /** Also marks the field invalid. Field passes this when it has an error. */
  "aria-invalid"?: boolean;
  required?: boolean;
  className?: string;
}

const decimals = (n: number) => (String(n).split(".")[1] ?? "").length;

/** A number input with minus and plus buttons. Typing is free; the value is checked on blur and Enter. */
export function NumberField({ value, onChange, label, min, max, step = 1, precision, unit, invalid, disabled, size = "md", id, required, className, "aria-invalid": ariaInvalid, ...rest }: NumberFieldProps) {
  const bad = invalid || ariaInvalid;
  const places = precision ?? decimals(step);
  const [draft, setDraft] = useState<string | null>(null);
  const clamp = (n: number) => Number(Math.min(max ?? Infinity, Math.max(min ?? -Infinity, n)).toFixed(places));
  const parse = (t: string): number | null | undefined => {
    const s = t.trim().replace(/,/g, "");
    if (s === "") return null;
    const n = Number(s);
    return Number.isFinite(n) ? clamp(n) : undefined; // undefined: not a number, keep the old value
  };
  const commit = () => {
    if (draft === null) return;
    const next = parse(draft);
    setDraft(null);
    if (next !== undefined && next !== value) onChange(next);
  };
  const current = draft !== null ? (parse(draft) ?? value) : value;
  const move = (dir: 1 | -1, mult = 1) => {
    setDraft(null);
    const next = current == null ? clamp(min ?? 0) : clamp(current + dir * step * mult);
    if (next !== value) onChange(next);
  };
  const jump = (n: number) => { setDraft(null); if (n !== value) onChange(clamp(n)); };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const big = e.shiftKey ? 10 : 1;
    if (e.key === "ArrowUp") move(1, big);
    else if (e.key === "ArrowDown") move(-1, big);
    else if (e.key === "PageUp") move(1, 10);
    else if (e.key === "PageDown") move(-1, 10);
    else if (e.key === "Home" && min !== undefined) jump(min);
    else if (e.key === "End" && max !== undefined) jump(max);
    else if (e.key === "Enter") commit();
    else return;
    if (e.key !== "Enter") e.preventDefault();
  };
  const shown = draft ?? (value === null ? "" : value.toFixed(places));
  const atMin = current != null && min !== undefined && current <= min;
  const atMax = current != null && max !== undefined && current >= max;
  const btn = cn(
    "flex shrink-0 cursor-pointer items-center justify-center self-stretch rounded-lg px-2 text-fg-muted transition-colors duration-[var(--dur-fast)] hover:bg-hover hover:text-fg",
    "disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent pointer-coarse:min-w-11",
  );
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-field border px-1 text-body leading-5 text-fg transition-colors duration-[var(--dur-fast)]",
      size === "sm" ? "min-h-8" : "min-h-10", "pointer-coarse:min-h-11",
      "has-[input:focus-visible]:outline-(length:--focus-width) has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[color:var(--focus-ring)]",
      bad ? "border-danger" : "border-line hover:border-line-strong",
      disabled ? "cursor-not-allowed border-disabled-line bg-disabled text-disabled-fg [&_input]:text-disabled-fg" : "bg-surface",
      className,
    )}>
      <button type="button" tabIndex={-1} aria-label={`Decrease ${label}`} disabled={disabled || atMin} onClick={() => move(-1)} className={btn}>
        <svg aria-hidden viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><path d="M5 12h14" /></svg>
      </button>
      <input {...rest} id={id} type="text" inputMode={min !== undefined && min >= 0 ? "decimal" : "text"} role="spinbutton" autoComplete="off" aria-label={label}
        aria-valuenow={current ?? undefined} aria-valuemin={min} aria-valuemax={max}
        aria-valuetext={current == null ? undefined : `${current.toFixed(places)}${unit ? ` ${unit}` : ""}`}
        aria-invalid={bad || undefined} required={required} disabled={disabled} value={shown}
        onChange={(e) => setDraft(e.target.value)} onBlur={commit} onKeyDown={onKeyDown}
        className="w-16 min-w-0 flex-1 bg-transparent py-1 text-center tabular-nums outline-none focus-visible:outline-none disabled:cursor-not-allowed" />
      {unit && <span className="shrink-0 text-fg-muted">{unit}</span>}
      <button type="button" tabIndex={-1} aria-label={`Increase ${label}`} disabled={disabled || atMax} onClick={() => move(1)} className={btn}>
        <PlusIcon />
      </button>
    </span>
  );
}
```

## tattva/atoms/Pictogram.tsx

```tsx
import type { ReactNode } from "react";

export type PictogramName =
  | "chat" | "agent" | "document" | "image" | "code" | "data"
  | "search" | "shield" | "memory" | "voice" | "plan" | "tools";

export type PictogramSize = 32 | 48 | 64;

/** Gallery data: every pictogram name. */
export const pictogramNames: PictogramName[] = [
  "chat", "agent", "document", "image", "code", "data", "search", "shield", "memory", "voice", "plan", "tools",
];

export interface PictogramProps {
  name: PictogramName;
  /** Rendered size in px. */
  size?: PictogramSize;
  /** Accessible name. Leave it out for decorative use. */
  title?: string;
  className?: string;
}

/**
 * Drawn on a 32 x 32 grid with 1px of padding, so art stays inside 30 x 30.
 * Every shape is a stroke, never a filled outline. Color is currentColor.
 */
const art: Record<PictogramName, ReactNode> = {
  chat: <><path d="M5 5H27a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H15L9 28V22H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /><path d="M9 11H23M9 16H18" /></>,
  agent: <><circle cx="8" cy="8" r="4" /><rect x="20" y="20" width="8" height="8" rx="2" /><path d="M12 8H20a4 4 0 0 1 4 4V20" /></>,
  document: <><path d="M7 3H19L25 9V29H7Z" /><path d="M19 3V9H25M11 16H21M11 21H21M11 26H16" /></>,
  image: <><rect x="3" y="5" width="26" height="22" rx="3" /><circle cx="11" cy="12" r="3" /><path d="M3 23L11 17L17 22L22 18L29 24" /></>,
  code: <><path d="M10 9L3 16L10 23M22 9L29 16L22 23M18 6L14 26" /></>,
  data: <><path d="M3 28H29" /><rect x="5" y="16" width="5" height="12" rx="1" /><rect x="13" y="9" width="5" height="19" rx="1" /><rect x="21" y="4" width="5" height="24" rx="1" /></>,
  search: <><circle cx="14" cy="14" r="10" /><path d="M21 21L29 29" /></>,
  shield: <><path d="M16 3L27 7V15C27 22 22 27 16 29C10 27 5 22 5 15V7Z" /><path d="M11 16L15 20L22 12" /></>,
  memory: <><path d="M3 10L16 4L29 10L16 16Z" /><path d="M3 16L16 22L29 16M3 22L16 28L29 22" /></>,
  voice: <><rect x="11" y="3" width="10" height="16" rx="5" /><path d="M6 15a10 10 0 0 0 20 0M16 25V29M11 29H21" /></>,
  plan: <><path d="M4 8L7 11L12 5M4 17L7 20L12 14" /><path d="M17 8H28M17 17H28M17 26H25" /><circle cx="8" cy="26" r="3" /></>,
  tools: <><path d="M20 4a7 7 0 0 0-6 10L4 24a2.8 2.8 0 0 0 4 4L18 18a7 7 0 0 0 10-6L23 17L19 16L18 12L23 8Z" /></>,
};

/**
 * Single-color pictogram for headings, feature lists and small empty areas. It is a stroke drawing on a 32 grid
 * and takes its color from the surrounding text color.
 *
 * Stroke rule: the stroke is 1.5 units in the 32 unit artwork and scales with the artwork, so it renders
 * 1.5px at 32, 2.25px at 48 and 3px at 64. Proportions stay the same at every size.
 * Decorative by default. Pass `title` to give it an accessible name.
 */
export function Pictogram({ name, size = 32, title, className }: PictogramProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {art[name]}
    </svg>
  );
}
```
