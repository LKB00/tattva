## tattva/atoms/GhostText.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { XIcon } from "../lib/icons";
import { KeyHint } from "./KeyHint";

export interface GhostTextProps {
  /** The suggested continuation, shown dimmed. */
  children: string;
  /** Text the person already typed. Rendered in normal ink before the suggestion. */
  typed?: ReactNode;
  /** Id for the visually hidden description. Point the field's aria-describedby at it. */
  id?: string;
  /** Key that accepts the whole suggestion. Shown in the hint. */
  acceptKey?: string;
  /** Key that dismisses the suggestion. Announced to assistive tech. */
  dismissKey?: string;
  /** Text for a partial accept path, for example "Ctrl + Right accepts one word". Omit when partial accept is not offered. */
  partialHint?: string;
  /** Override the text read by assistive tech. The default names the suggestion, the accept key and the dismiss key. */
  description?: string;
  /** Called when the hint is activated. The consumer wires the real key (usually Tab) to the same handler. */
  onAccept?: () => void;
  /** Called when the dismiss control is activated. The consumer wires Escape to the same handler. */
  onDismiss?: () => void;
  /** Accessible names for the two controls. */
  acceptLabel?: string;
  dismissLabel?: string;
  className?: string;
}

/**
 * Dimmed inline suggestion shown after typed text. The visible suggestion is hidden from the accessibility tree and
 * a visually hidden description carries the same text, so it is read as a pending suggestion and not as typed text.
 * It never uses aria-live. The consumer owns key handling.
 */
export function GhostText({
  children, typed, id, acceptKey = "Tab", dismissKey = "Esc", partialHint, description,
  onAccept, onDismiss, acceptLabel = "Accept suggestion", dismissLabel = "Dismiss suggestion", className,
}: GhostTextProps) {
  const hint = <KeyHint>{acceptKey}</KeyHint>;
  return (
    <span className={cn("inline", className)}>
      {typed}
      <span id={id} className="sr-only">
        {description ?? `Suggestion available: ${children}. Press ${acceptKey} to accept, ${dismissKey} to dismiss.${partialHint ? ` ${partialHint}.` : ""}`}
      </span>
      <span aria-hidden="true" data-ghost className="rounded-sm bg-sunken text-fg-subtle underline decoration-line-strong decoration-dotted underline-offset-4">{children}</span>
      <span className="ml-1.5 inline-flex items-center gap-1 align-middle">
        {onAccept
          ? <button type="button" aria-label={`${acceptLabel}, ${acceptKey}`} onClick={onAccept} className="cursor-pointer rounded-md">{hint}</button>
          : <span aria-hidden="true">{hint}</span>}
        {partialHint && <span aria-hidden="true" className="text-micro text-fg-subtle">{partialHint}</span>}
        {onDismiss && (
          <button type="button" aria-label={dismissLabel} title={dismissLabel} onClick={onDismiss}
            className="inline-flex size-5 cursor-pointer items-center justify-center rounded-control text-fg-subtle hover:bg-hover hover:text-fg">
            <XIcon width={12} height={12} />
          </button>
        )}
      </span>
    </span>
  );
}
```

## tattva/atoms/Grid.tsx

```tsx
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { spaceValue, type Space } from "./Stack";

export type Cols = 1 | 2 | 3 | 4 | 6 | 8 | 12;

const base: Record<Cols, string> = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 6: "grid-cols-6", 8: "grid-cols-8", 12: "grid-cols-12" };
const md: Record<Cols, string> = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 6: "md:grid-cols-6", 8: "md:grid-cols-8", 12: "md:grid-cols-12" };
const lg: Record<Cols, string> = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 6: "lg:grid-cols-6", 8: "lg:grid-cols-8", 12: "lg:grid-cols-12" };

export interface GridCols {
  /** Columns below md. Default 4. */
  base?: Cols;
  /** Columns from md (840px). Default 8. */
  md?: Cols;
  /** Columns from lg (1200px). Default 12. */
  lg?: Cols;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Column counts per window class. Defaults follow the 4, 8, 12 column system. */
  cols?: GridCols;
  /** Minimum item width as a CSS length such as "16rem". When set, the grid auto-fits and `cols` is ignored. */
  min?: string;
  /** Gap step from 1 to 8, scaled by --density. Omit to use the --gutter token. */
  gap?: Space;
  children?: ReactNode;
}

/** Responsive grid. Items span columns with Tailwind col-span utilities. */
export function Grid({ cols, min, gap, className, style, children, ...rest }: GridProps) {
  const c = { base: 4 as Cols, md: 8 as Cols, lg: 12 as Cols, ...cols };
  const s: CSSProperties = {
    gap: gap ? spaceValue(gap) : "var(--gutter)",
    ...(min ? { gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}), 1fr))` } : null),
    ...style,
  };
  return <div {...rest} className={cn("grid", !min && [base[c.base], md[c.md], lg[c.lg]].join(" "), className)} style={s}>{children}</div>;
}
```

## tattva/atoms/HeroHeading.tsx

```tsx
import { useEffect, useState } from "react";

/** Serif headline that types itself in once. Static for reduced-motion users and screen readers. */
export function HeroHeading({ text, type = true }: { text: string; type?: boolean }) {
  const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(type && !reduce ? 0 : text.length);
  useEffect(() => {
    if (!type || reduce) return;
    setN(0);
    const t = window.setInterval(() => setN((v) => { if (v >= text.length) { window.clearInterval(t); return v; } return v + 1; }), 28);
    return () => window.clearInterval(t);
  }, [text, type, reduce]);
  return (
    <h2 aria-label={text} className="text-balance text-center text-title-md leading-9 tracking-snug text-fg sm:text-head-sm sm:leading-headline">
      <span aria-hidden>{text.slice(0, n)}</span>
    </h2>
  );
}
```

## tattva/atoms/Illustration.tsx

```tsx
import type { ReactNode } from "react";

/** Names of the spot illustrations. Each one shows a single concept. */
export type IllustrationName =
  | "empty-chat"
  | "no-results"
  | "error"
  | "permission"
  | "offline"
  | "rate-limit"
  | "success"
  | "upload"
  | "first-run";

export type IllustrationSize = 64 | 96 | 160;

/** Gallery data: every name with a short plain description of what is drawn. */
export const spotIllustrations: { name: IllustrationName; label: string }[] = [
  { name: "empty-chat", label: "Two empty speech bubbles" },
  { name: "no-results", label: "A magnifier over a sheet of lines" },
  { name: "error", label: "A sheet with an exclamation badge" },
  { name: "permission", label: "A closed lock" },
  { name: "offline", label: "A plug apart from its socket" },
  { name: "rate-limit", label: "An hourglass" },
  { name: "success", label: "A sheet with a check badge" },
  { name: "upload", label: "A tray with a sheet and an up arrow" },
  { name: "first-run", label: "A dotted path leading to a flag" },
];

export interface IllustrationProps {
  /** Which spot illustration to draw. */
  name: IllustrationName;
  /** Rendered size in px. Stroke weight follows it: 64 is 1.5px, 96 is 2px, 160 is 2.5px. */
  size?: IllustrationSize;
  /** Accessible name. Leave it out for decorative art, which is hidden from assistive tech. */
  title?: string;
  className?: string;
}

const strokeFor: Record<IllustrationSize, number> = { 64: 1.5, 96: 2, 160: 2.5 };

/* Art is drawn on a 160 unit grid. Ink is stroke-fg, paper is fill-surface, sand is fill-sunken,
   and each piece uses at most one lime fill. No detail is smaller than 4 units. */
const art: Record<IllustrationName, ReactNode> = {
  "empty-chat": (
    <>
      <path className="fill-sunken" d="M36 30H86a12 12 0 0 1 12 12V68a12 12 0 0 1-12 12H52L40 92V80H36a12 12 0 0 1-12-12V42a12 12 0 0 1 12-12Z" />
      <path className="fill-surface" d="M70 62H124a12 12 0 0 1 12 12V104a12 12 0 0 1-12 12H116V132L100 116H70a12 12 0 0 1-12-12V74a12 12 0 0 1 12-12Z" />
      <path d="M74 78H120M74 90H106" />
      <rect className="fill-lime" x="74" y="99" width="18" height="6" rx="3" />
    </>
  ),
  "no-results": (
    <>
      <rect className="fill-surface" x="30" y="26" width="64" height="86" rx="8" />
      <path d="M44 46H80M44 58H80M44 70H64" />
      <circle className="fill-sunken" cx="94" cy="90" r="26" />
      <path d="M82 84a14 14 0 0 1 10-10" />
      <rect className="fill-lime" x="0" y="0" width="28" height="10" rx="5" transform="translate(113 109) rotate(45)" />
    </>
  ),
  error: (
    <>
      <path className="fill-surface" d="M42 24H98L120 46V132H42Z" />
      <path d="M98 24V46H120M56 62H90M56 74H80M56 86H70" />
      <circle className="fill-lime" cx="110" cy="112" r="20" />
      <path d="M110 102V114M110 121V122" />
    </>
  ),
  permission: (
    <>
      <path d="M58 70V52a22 22 0 0 1 44 0V70" />
      <rect className="fill-surface" x="42" y="70" width="76" height="60" rx="12" />
      <circle className="fill-lime" cx="80" cy="97" r="8" />
      <path d="M80 105V115" />
    </>
  ),
  offline: (
    <>
      <path d="M22 82C8 82 8 108 28 120" />
      <rect className="fill-lime" x="22" y="64" width="42" height="36" rx="10" />
      <rect className="fill-sunken" x="64" y="70" width="14" height="6" rx="3" />
      <rect className="fill-sunken" x="64" y="88" width="14" height="6" rx="3" />
      <rect className="fill-surface" x="104" y="56" width="40" height="52" rx="10" />
      <path d="M114 72H126M114 92H126" />
      <path d="M12 134H148" />
    </>
  ),
  "rate-limit": (
    <>
      <path className="fill-surface" d="M52 32V46C52 64 80 66 80 80C80 94 52 96 52 114V128H108V114C108 96 80 94 80 80C80 66 108 64 108 46V32Z" />
      <path className="fill-sunken" d="M64 46H96C96 54 88 58 80 62C72 58 64 54 64 46Z" />
      <path className="fill-lime" d="M64 122H96C96 112 88 106 80 102C72 106 64 112 64 122Z" />
      <rect className="fill-surface" x="42" y="22" width="76" height="10" rx="5" />
      <rect className="fill-surface" x="42" y="128" width="76" height="10" rx="5" />
    </>
  ),
  success: (
    <>
      <rect className="fill-surface" x="36" y="26" width="64" height="88" rx="8" />
      <path d="M50 46H86M50 58H86M50 70H72" />
      <circle className="fill-lime" cx="104" cy="104" r="28" />
      <path d="M92 104L101 113L117 93" />
    </>
  ),
  upload: (
    <>
      <rect className="fill-surface" x="48" y="26" width="64" height="80" rx="8" />
      <rect className="fill-lime" x="62" y="38" width="36" height="6" rx="3" />
      <path d="M80 82V56M68 66L80 54L92 66" />
      <path className="fill-sunken" d="M22 98H52L58 110H102L108 98H138V122A10 10 0 0 1 128 132H32A10 10 0 0 1 22 122Z" />
    </>
  ),
  "first-run": (
    <>
      <path d="M26 122C54 122 50 98 76 102C96 105 98 118 112 106" strokeDasharray="0.1 10" />
      <circle className="fill-surface" cx="26" cy="122" r="6" />
      <ellipse className="fill-sunken" cx="116" cy="108" rx="20" ry="5" />
      <path d="M116 28V108" />
      <path className="fill-lime" d="M116 28H146L134 42L146 56H116Z" />
    </>
  ),
};

/**
 * Spot illustration for empty, error and success states. One concept, monochrome ink on paper,
 * at most one lime accent, drawn only with theme tokens so it follows light and dark mode.
 * Decorative by default. Pass `title` when the art carries meaning that the page text does not.
 */
export function Illustration({ name, size = 96, title, className }: IllustrationProps) {
  const units = (strokeFor[size] * 160) / size;
  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g className="fill-none stroke-fg" strokeWidth={units} strokeLinecap="round" strokeLinejoin="round">{art[name]}</g>
    </svg>
  );
}
```

## tattva/atoms/KeyHint.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

/** Keyboard hint pill such as Tab or Esc. Pair it with the action it triggers, and keep the action reachable without the key. */
export function KeyHint({ children, className }: { children: ReactNode; className?: string }) {
  return <kbd className={cn("inline-flex h-5 min-w-5 items-center justify-center rounded-md border border-line-strong bg-surface px-1.5 font-mono text-nano text-fg-muted", className)}>{children}</kbd>;
}
```

## tattva/atoms/MeterBar.tsx

```tsx
import { cn } from "../lib/cn";

export interface MeterBarProps {
  value: number;
  max?: number;
  /** Accessible name, e.g. "Context used". */
  label: string;
  /** Switch to the attention color at or above this fraction of max (0 to 1). Use only when the person should act. */
  warnAt?: number;
  /** Text read out with the value, e.g. "68% of context". */
  valueText?: string;
  className?: string;
}

/** Thin progress bar exposed as a meter. Ink by default, amber past the warn threshold. */
export function MeterBar({ value, max = 100, label, warnAt, valueText, className }: MeterBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const warn = warnAt !== undefined && value / max >= warnAt;
  return (
    <div role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} aria-valuetext={valueText}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-line", className)}>
      <div className={cn("h-full origin-left animate-grow-x rounded-full transition-[width] duration-[var(--dur-base)]", warn ? "bg-attention" : "bg-fg")} style={{ width: `${pct}%` }} />
    </div>
  );
}
```
