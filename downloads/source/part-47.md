## tattva/molecules/UsageMeter.tsx

```tsx
import type { ReactNode } from "react";
import { Meter } from "../atoms/Meter";
import { cn } from "../lib/cn";

export interface UsageMeterProps {
  /** Credits or quota left. */
  remaining: number;
  /** Full allowance for the period. */
  total: number;
  /** Plural unit name. */
  unit?: string;
  /** Cost of the action about to run, in the same unit. Shows "This will use about N credits". */
  estimate?: number;
  /** Reset time, for example "Resets Nov 1". */
  resetText?: string;
  /** Fraction of the allowance used at which the meter warns, 0 to 1. */
  warnAt?: number;
  /** Slot for an upgrade action. Shown only in the warn state. */
  upgrade?: ReactNode;
  /** Reason shown in the warn state. */
  warnText?: string;
  /** Accessible name for the meter. */
  label?: string;
  className?: string;
}

/** Remaining credits or quota with an optional cost estimate. Warns only when the person may need to act. */
export function UsageMeter({ remaining, total, unit = "credits", estimate, resetText, warnAt = 0.8, upgrade, warnText, label = "Usage", className }: UsageMeterProps) {
  const used = Math.max(0, total - remaining);
  const short = estimate !== undefined && estimate > remaining;
  const low = total > 0 && used / total >= warnAt;
  const warn = low || short;
  const reason = warnText ?? (short ? `Not enough ${unit} left for this.` : `Running low on ${unit}.`);
  const text = `${remaining} of ${total} ${unit} left`;
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-3 text-small leading-4">
        <span className="font-medium text-fg">{text}</span>
        {resetText && <span className="text-fg-subtle">{resetText}</span>}
      </div>
      <Meter label={label} value={used} max={total} warnAt={warnAt} valueText={text} className={short && !low ? "[&>div]:bg-attention" : undefined} />
      {estimate !== undefined && <p className="text-small leading-4 text-fg-muted">This will use about {estimate} {unit}.</p>}
      {warn && (
        <div className="flex flex-wrap items-center gap-2 text-small leading-4">
          <span className="text-attention-fg">{reason}</span>
          {upgrade}
        </div>
      )}
    </div>
  );
}
```

## tattva/molecules/VariantTile.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";
import { AIBadge } from "../atoms/AIBadge";

export interface Variant { id: string; node: ReactNode; label: string }

/** One generated option. Selection shows a check mark, not only a colour change. Arrow key movement between tiles comes from VariantGrid. */
export function VariantTile({ variant: v, selected, onSelect, tabIndex }: {
  variant: Variant; selected: boolean; onSelect: (id: string) => void;
  /** Set to -1 on tiles that are not the tab stop of a roving group. VariantGrid does this for you. Leave unset for a standalone tile. */
  tabIndex?: number;
}) {
  return (
    <button type="button" role="radio" aria-checked={selected} aria-label={v.label} tabIndex={tabIndex} onClick={() => onSelect(v.id)}
      className={cn("group relative aspect-square cursor-pointer overflow-hidden rounded-card border-2 text-left transition-all animate-rise", selected ? "border-fg shadow-md" : "border-line hover:border-line-strong")}>
      {v.node}
      <span className="absolute top-2 left-2"><AIBadge label="AI" solid /></span>
      {selected && <span className="absolute right-2 bottom-2 flex size-5 items-center justify-center rounded-full bg-inverse text-inverse-fg"><CheckIcon width={12} height={12} /></span>}
    </button>
  );
}
```

## tattva/molecules/VariationActions.tsx

```tsx
import { useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Button } from "../atoms/Button";
import { SegmentedControl, type SegmentOption } from "../atoms/SegmentedControl";

export interface VariationAction {
  id: string;
  label: string;
  /** Cost hint shown beside the action, such as "About 4 credits". */
  cost?: ReactNode;
  /** Set false for actions with no strength choice. Default true. */
  strength?: boolean;
}

export const DEFAULT_VARIATION_ACTIONS: VariationAction[] = [
  { id: "vary", label: "Vary" },
  { id: "upscale", label: "Upscale" },
  { id: "remix", label: "Remix" },
  { id: "extend", label: "Extend", strength: false },
];

export interface VariationActionsProps {
  /** Actions in display order. Defaults to Vary, Upscale, Remix and Extend. */
  actions?: VariationAction[];
  /** Called with the action id and the chosen strength value. */
  onAction: (actionId: string, strength: string) => void;
  /** Strength choices shared by every action that has one. */
  strengths?: SegmentOption<string>[];
  /** Strength selected at first for each action. Defaults to the first strength. */
  defaultStrength?: string;
  /** Lineage line, for example "Made from Variant B". */
  lineage?: ReactNode;
  disabled?: boolean;
  className?: string;
}

const STRENGTHS: SegmentOption<string>[] = [{ value: "subtle", label: "Subtle" }, { value: "strong", label: "Strong" }];

/** Action row for one generated item. Each action keeps its own strength choice and can show what it costs. */
export function VariationActions({ actions = DEFAULT_VARIATION_ACTIONS, onAction, strengths = STRENGTHS, defaultStrength, lineage, disabled, className }: VariationActionsProps) {
  const first = defaultStrength ?? strengths[0]?.value ?? "";
  const [chosen, setChosen] = useState<Record<string, string>>({});
  return (
    <div className={cn("space-y-2", className)}>
      {lineage && <p className="text-small leading-4 text-fg-muted">{lineage}</p>}
      <ul className="space-y-1.5">
        {actions.map((a) => {
          const s = chosen[a.id] ?? first;
          const hasStrength = a.strength !== false;
          return (
            <li key={a.id} className="flex flex-wrap items-center gap-2">
              <Button variant="secondary" size="sm" disabled={disabled} onClick={() => onAction(a.id, hasStrength ? s : "")}>{a.label}</Button>
              {hasStrength && <SegmentedControl size="sm" label={`${a.label} strength`} options={strengths} value={s} onChange={(v) => setChosen((c) => ({ ...c, [a.id]: v }))} />}
              {a.cost && <span className="text-small leading-4 text-fg-subtle">{a.cost}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

## tattva/molecules/VersionPager.tsx

```tsx
import { useState, type ReactNode } from "react";
import { ChevronIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";
import { cn } from "../lib/cn";

export interface VersionPagerProps {
  /** Number of sibling versions, from edits and regenerations. */
  total: number;
  /** Controlled current version, 1-based. Omit to let the pager manage itself. */
  current?: number;
  /** Starting version in uncontrolled mode. Defaults to the last version. */
  defaultCurrent?: number;
  /** Called with the new 1-based version when the person steps. */
  onChange?: (version: number) => void;
  /** Shows a small "edited" label when the current version came from an edit. */
  edited?: boolean;
  /** Text for the edited label. */
  editedLabel?: string;
  /** Slot for an action such as a "Branch from here" button. */
  branchAction?: ReactNode;
  /** Builds the polite announcement. Defaults to "Version 2 of 3". */
  announce?: (current: number, total: number) => string;
  /** Accessible name for the group. */
  label?: string;
  className?: string;
}

/** Pager for sibling versions of one message. Announces each change through a separate polite status region. */
export function VersionPager({ total, current, defaultCurrent, onChange, edited, editedLabel = "Edited", branchAction, announce = (c, t) => `Version ${c} of ${t}`, label = "Message versions", className }: VersionPagerProps) {
  const [inner, setInner] = useState(defaultCurrent ?? total);
  const [message, setMessage] = useState("");
  const value = Math.min(Math.max(current ?? inner, 1), Math.max(total, 1));
  const go = (next: number) => {
    if (next < 1 || next > total) return;
    if (current === undefined) setInner(next);
    onChange?.(next);
    setMessage(announce(next, total));
  };
  return (
    <div role="group" aria-label={label} className={cn("inline-flex max-w-full flex-wrap items-center gap-1.5 text-small leading-4 text-fg-muted", className)}>
      <IconButton size="sm" label="Previous version" disabled={value <= 1} onClick={() => go(value - 1)}><ChevronIcon className="rotate-180" /></IconButton>
      <span className="min-w-8 text-center tabular-nums" aria-hidden="true">{value}/{total}</span>
      <IconButton size="sm" label="Next version" disabled={value >= total} onClick={() => go(value + 1)}><ChevronIcon /></IconButton>
      {edited && <span className="rounded-control border border-line bg-sunken px-2 py-0.5 text-micro leading-4">{editedLabel}</span>}
      {branchAction}
      <span role="status" className="sr-only">{message}</span>
    </div>
  );
}
```
