## tattva/molecules/AutonomyLevel.tsx

```tsx
import { useId, useState } from "react";
import { cn } from "../lib/cn";
import { SegmentedControl } from "../atoms/SegmentedControl";

export type Altitude = "summary" | "steps" | "everything";

export interface AutonomyLevelProps {
  /** Selected view (controlled). */
  value?: Altitude;
  /** Starting view when uncontrolled. */
  defaultValue?: Altitude;
  onChange?: (value: Altitude) => void;
  /** Replace the names of the views. */
  labels?: Partial<Record<Altitude, string>>;
  /** Replace the line that explains each view. */
  hints?: Partial<Record<Altitude, string>>;
  /** Accessible name for the group. */
  label?: string;
  className?: string;
}

const defaultLabels: Record<Altitude, string> = { summary: "Summary", steps: "Steps", everything: "Everything" };
const defaultHints: Record<Altitude, string> = {
  summary: "A short account of the result and anything that needs you.",
  steps: "Each thing the assistant did, one line at a time.",
  everything: "Every detail, including what it read and tried.",
};
const order: Altitude[] = ["summary", "steps", "everything"];

/** Switch between three levels of detail about what an agent did. Arrow keys move and select. */
export function AutonomyLevel({ value, defaultValue = "summary", onChange, labels, hints, label = "How much detail", className }: AutonomyLevelProps) {
  const [inner, setInner] = useState<Altitude>(defaultValue);
  const current = value ?? inner;
  const uid = useId();
  const l = { ...defaultLabels, ...labels };
  const h = { ...defaultHints, ...hints };
  return (
    <div className={cn("min-w-0", className)}>
      <div className="max-w-full overflow-x-auto">
        <SegmentedControl label={label} value={current} options={order.map((k) => ({ value: k, label: l[k] }))}
          onChange={(v) => { if (value === undefined) setInner(v); onChange?.(v); }} />
      </div>
      <p id={`${uid}-hint`} className="mt-1.5 text-small leading-4 text-fg-muted">{h[current]}</p>
    </div>
  );
}

/** @deprecated Renamed to AutonomyLevel in 0.29.0, to match the name other design systems use. The old name goes in 0.31.0. */
export const AltitudeToggle = AutonomyLevel;
/** @deprecated Renamed to AutonomyLevelProps in 0.29.0. */
export type AltitudeToggleProps = AutonomyLevelProps;
```

## tattva/molecules/AvatarStack.tsx

```tsx
import { cn } from "../lib/cn";
import { PlusIcon } from "../lib/icons";
import { Avatar } from "../atoms/Avatar";

export interface AvatarStackPerson {
  name: string;
  kind?: "user" | "ai";
}

export interface AvatarStackProps {
  /** People to show, most relevant first. Only the first `max` are drawn. */
  people: AvatarStackPerson[];
  /** Everyone counted, including the ones drawn. The number shown is the rest: `total - drawn`. Defaults to `people.length`. */
  total?: number;
  /** How many avatars to draw before the plus and the number. */
  max?: number;
  /** Word after the number, e.g. "others" or "more viewers". */
  label?: string;
  size?: "sm" | "md";
  /** Show large numbers short, e.g. 1.2k instead of 1,248. */
  compact?: boolean;
  className?: string;
}

/**
 * A few overlapping avatars, a plus, then how many more people there are.
 * The picture is decoration; screen readers hear one plain sentence with the names and the count.
 */
export function AvatarStack({ people, total = people.length, max = 3, label = "others", size = "md", compact = false, className }: AvatarStackProps) {
  const shown = people.slice(0, Math.max(0, max));
  const rest = Math.max(0, total - shown.length);
  const fmt = new Intl.NumberFormat(undefined, compact ? { notation: "compact", maximumFractionDigits: 1 } : undefined);
  const names = shown.map((p) => (p.kind === "ai" ? "Assistant" : p.name));
  const sentence = names.length === 0
    ? `${fmt.format(rest)} ${label}`
    : rest > 0 ? `${names.join(", ")} and ${fmt.format(rest)} ${label}` : names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
  const ring = "ring-2 ring-[var(--bg)]";
  const disc = size === "sm" ? "size-6" : "size-8";
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span aria-hidden className="flex items-center">
        {shown.map((p, i) => (
          <Avatar key={`${p.name}-${i}`} kind={p.kind ?? "user"} name={p.name} size={size} className={cn(ring, i > 0 && (size === "sm" ? "-ml-1.5" : "-ml-2.5"))} />
        ))}
        {rest > 0 && (
          <span className={cn("inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-surface text-fg-muted", disc, ring, shown.length > 0 && (size === "sm" ? "-ml-1.5" : "-ml-2.5"))}>
            <PlusIcon width={size === "sm" ? 11 : 14} height={size === "sm" ? 11 : 14} />
          </span>
        )}
      </span>
      {rest > 0 && (
        <span aria-hidden className={cn("tabular-nums text-fg", size === "sm" ? "text-small leading-4" : "text-body leading-5")}>
          <span className="font-semibold">{fmt.format(rest)}</span> <span className="text-fg-muted">{label}</span>
        </span>
      )}
      <span className="sr-only">{sentence}</span>
    </span>
  );
}
```

## tattva/molecules/BackgroundRunChip.tsx

```tsx
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { AgentStatusIcon, type AgentStatus } from "../atoms/AgentStatusIcon";

export interface BackgroundRunChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Name of the run, such as "Trip plan". */
  name: string;
  status: AgentStatus;
  /** Short plain status, such as "Booking hotels". Defaults to the status name. */
  statusText?: string;
  /** How long the run has been going, such as "4 min". */
  elapsed?: string;
  /** Pass true while the details panel this chip opens is showing. */
  expanded?: boolean;
}

const defaults: Record<AgentStatus, string> = {
  working: "Working", "needs-input": "Needs you", idle: "Waiting", completed: "Done", failed: "Failed", stopped: "Stopped",
};

/**
 * Compact chip for a run in the background. It is a button that opens details or a peek. A run that
 * needs a person gets the amber style; every other state stays neutral. The state icon, the words and
 * the time are read together as the button name.
 */
export function BackgroundRunChip({ name, status, statusText, elapsed, expanded, className, type = "button", ...rest }: BackgroundRunChipProps) {
  const needs = status === "needs-input";
  return (
    <button type={type} aria-expanded={expanded} {...rest}
      className={cn("inline-flex max-w-full min-w-0 cursor-pointer items-center gap-2 rounded-control border px-3 py-1.5 text-left text-small leading-4 transition-colors duration-[var(--dur-fast)]",
        needs ? "border-transparent bg-attention-soft text-attention-fg hover:opacity-90" : "border-line bg-surface text-fg hover:border-line-strong hover:bg-bg", className)}>
      <AgentStatusIcon status={status} size={14} className={needs ? "text-attention-fg" : undefined} />
      <span className="truncate font-medium">{name}</span>
      <span className={cn("truncate", needs ? "" : "text-fg-muted")}>{statusText ?? defaults[status]}</span>
      {elapsed && <span className={cn("shrink-0 tabular-nums", needs ? "" : "text-fg-subtle")}>{elapsed}</span>}
    </button>
  );
}
```

## tattva/molecules/Callout.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, InfoIcon } from "../lib/icons";
import type { Tone } from "../atoms/Badge";

const calloutTones: Record<Exclude<Tone, "neutral" | "accent" | "lime" | "unsure" | "celebrate">, string> = {
  info: "bg-info-soft text-info-fg",
  success: "bg-success-soft text-success-fg",
  warning: "bg-warning-soft text-warning-fg",
  danger: "bg-danger-soft text-danger-fg",
};

export function Callout({ tone = "info", title, children, action }: { tone?: keyof typeof calloutTones; title?: string; children?: ReactNode; action?: ReactNode }) {
  const Icon = tone === "info" || tone === "success" ? InfoIcon : AlertIcon;
  return (
    <div role={tone === "danger" ? "alert" : "status"} className={cn("flex gap-3 rounded-card p-4 text-body leading-5 max-sm:flex-wrap", calloutTones[tone])}>
      <Icon className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        {title && <p className="font-medium">{title}</p>}
        {children && <div className={cn(title && "mt-0.5")}>{children}</div>}
      </div>
      {action && <div className="shrink-0 max-sm:basis-full max-sm:pl-8">{action}</div>}
    </div>
  );
}
```
