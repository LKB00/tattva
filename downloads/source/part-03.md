## tattva/atoms/AgentStatusIcon.tsx

```tsx
import { cn } from "../lib/cn";

export type AgentStatus = "working" | "needs-input" | "idle" | "completed" | "failed" | "stopped";

const defaultLabels: Record<AgentStatus, string> = {
  working: "Working",
  "needs-input": "Needs input",
  idle: "Idle",
  completed: "Completed",
  failed: "Failed",
  stopped: "Stopped",
};

const tone: Record<AgentStatus, string> = {
  working: "text-fg-muted",
  "needs-input": "text-attention",
  idle: "text-fg-subtle",
  completed: "text-success",
  failed: "text-danger",
  stopped: "text-fg-subtle",
};

export interface AgentStatusIconProps {
  status: AgentStatus;
  /** Glyph size in px. */
  size?: number;
  /** Override the accessible text for this status, for example for another language. */
  label?: string;
  /** Show the label as visible text beside the glyph. The glyph is then hidden from assistive tech so the text is read once. */
  showLabel?: boolean;
  className?: string;
}

/**
 * Status glyph for an agent session. Each status has its own shape (working arc, question mark,
 * dash, check, cross, square), so it reads without color. Needs input uses the attention color
 * because a person must act. The working arc spins and is static under prefers-reduced-motion.
 */
export function AgentStatusIcon({ status, size = 16, label, showLabel = false, className }: AgentStatusIconProps) {
  const text = label ?? defaultLabels[status];
  const svg = (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden={showLabel ? true : undefined} role={showLabel ? undefined : "img"} aria-label={showLabel ? undefined : text}
      className={cn("shrink-0", tone[status], status === "working" && "animate-spin", !showLabel && className)}>
      {status === "working" && (<><circle cx="12" cy="12" r="9" strokeOpacity="0.25" /><path d="M21 12a9 9 0 0 0-9-9" /></>)}
      {status === "needs-input" && (<><circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" /><path d="M9.8 9.6a2.3 2.3 0 1 1 3.3 2.1c-.7.4-1.1.8-1.1 1.6M12 16.6h.01" stroke="var(--surface)" strokeWidth={2} /></>)}
      {status === "idle" && (<><circle cx="12" cy="12" r="9" /><path d="M8.5 12h7" /></>)}
      {status === "completed" && (<><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>)}
      {status === "failed" && (<><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></>)}
      {status === "stopped" && <rect x="5" y="5" width="14" height="14" rx="3" />}
    </svg>
  );
  if (!showLabel) return svg;
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-small leading-4 font-medium text-fg", className)}>
      {svg}
      {text}
    </span>
  );
}
```

## tattva/atoms/ApprovedByMark.tsx

```tsx
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { ApproveIcon, BookmarkIcon, LoopIcon, ShieldIcon } from "../lib/icons";

export type ApprovedBy = "you" | "check" | "rule" | "none";

export interface ApprovedByMarkProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Who said yes: the person, an automatic safety check, a saved rule, or nobody (auto mode). */
  by: ApprovedBy;
  /** Replace the words for one kind. */
  labels?: Partial<Record<ApprovedBy, string>>;
  /** Extra plain detail, such as the name of the saved rule. Added to the tooltip and the screen reader text. */
  detail?: string;
}

const defaults: Record<ApprovedBy, string> = {
  you: "You approved",
  check: "Automatic check approved",
  rule: "Allowed by a saved rule",
  none: "Nobody asked (auto mode)",
};
const icons: Record<ApprovedBy, ReactNode> = {
  you: <ApproveIcon width={13} height={13} />,
  check: <ShieldIcon width={13} height={13} />,
  rule: <BookmarkIcon width={13} height={13} />,
  none: <LoopIcon width={13} height={13} />,
};

/** Small mark that says who approved an action. Always an icon plus words, never color alone. */
export function ApprovedByMark({ by, labels, detail, className, title, ...rest }: ApprovedByMarkProps) {
  const text = labels?.[by] ?? defaults[by];
  return (
    <span title={title ?? detail} className={cn("inline-flex min-w-0 items-center gap-1 text-small leading-4 text-fg-muted", className)} {...rest}>
      <span className="shrink-0">{icons[by]}</span>
      <span>{text}</span>
      {detail && <span className="sr-only">. {detail}</span>}
    </span>
  );
}
```

## tattva/atoms/AttentionDot.tsx

```tsx
/** Amber dot. The only signal that something needs a person; it always travels with text. */
export function AttentionDot({ label = "Needs attention" }: { label?: string }) {
  return <span role="img" aria-label={label} className="size-1.5 shrink-0 rounded-full bg-attention" />;
}
```

## tattva/atoms/Avatar.tsx

```tsx
import { cn } from "../lib/cn";
import { SparkleIcon } from "../lib/icons";

export interface AvatarProps {
  kind: "user" | "ai";
  name?: string;
  size?: "sm" | "md";
  className?: string;
}

/** The assistant is an ink disc with a lime spark: recognisable at 24px, and the only place lime fills a circle. */
export function Avatar({ kind, name = "You", size = "md", className }: AvatarProps) {
  const dims = size === "sm" ? "size-6 text-nano" : "size-8 text-small leading-4";
  return (
    <span
      role="img"
      aria-label={kind === "ai" ? "Assistant" : name}
      className={cn("inline-flex shrink-0 items-center justify-center rounded-full",
        kind === "ai" ? "bg-code text-lime border border-line-strong" : "border border-line bg-sunken font-serif text-fg-muted", dims, className)}
    >
      {kind === "ai" ? <SparkleIcon width={size === "sm" ? 11 : 14} height={size === "sm" ? 11 : 14} /> : name.slice(0, 1).toUpperCase()}
    </span>
  );
}
```

## tattva/atoms/Badge.tsx

```tsx
import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type Tone = "neutral" | "accent" | "lime" | "success" | "warning" | "danger" | "info" | "unsure" | "celebrate";

const tones: Record<Tone, string> = {
  neutral: "bg-sunken text-fg-muted border-line",
  accent: "bg-lime-soft text-fg border-transparent",
  /** Opaque lime for use over images and other busy backgrounds. */
  lime: "bg-lime text-on-lime border-transparent",
  success: "bg-success-soft text-success-fg border-transparent",
  warning: "bg-warning-soft text-warning-fg border-transparent",
  danger: "bg-danger-soft text-danger-fg border-transparent",
  info: "bg-info-soft text-info-fg border-transparent",
  /** Not fully sure, or partly done. Calm, not a warning. */
  unsure: "bg-unsure-soft text-unsure-fg border-transparent",
  /** A goal fully reached. Reserved: one place per product. */
  celebrate: "bg-celebrate-soft text-celebrate-fg border-transparent",
};

export function Badge({ tone = "neutral", className, ...rest }: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return <span data-slot="badge" data-tone={tone} className={cn("inline-flex items-center gap-1 rounded-control border px-2 py-0.5 text-micro leading-4 font-medium", tones[tone], className)} {...rest} />;
}
```

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
