## tattva/molecules/PrivateChatBanner.tsx

```tsx
import type { ReactNode } from "react";
import { XIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { cn } from "../lib/cn";

/** Private inline glyph: a ghost, 24px grid, 1.5 stroke. */
function GhostIcon({ className }: { className?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 21V11a7 7 0 0 1 14 0v10l-3.5-2.5L12 21l-3.5-2.5L5 21z" /><path d="M9.5 11h.01M14.5 11h.01" />
    </svg>
  );
}

export interface PrivateChatBannerProps {
  /** "banner" is a full-width strip with retention copy. "compact" is a pill for headers. */
  variant?: "banner" | "compact";
  /** Name of the mode. */
  label?: string;
  /** Plain retention copy. State the real retention period for your product. */
  description?: ReactNode;
  /** Leaves the private chat. */
  onExit?: () => void;
  exitLabel?: string;
  className?: string;
}

/** Persistent indicator that the current chat is private. Neutral on purpose, because nothing needs fixing. */
export function PrivateChatBanner({ variant = "banner", label = "Private chat", description = "Not saved to your history or memory and not used for training. A copy may be kept for 30 days.", onExit, exitLabel = "Exit", className }: PrivateChatBannerProps) {
  if (variant === "compact") {
    return (
      <div className={cn("inline-flex items-center gap-1.5 rounded-control border border-line-strong bg-sunken py-0.5 pr-0.5 pl-2.5 text-small leading-4 font-medium text-fg", className)}>
        <GhostIcon className="text-fg-muted" />
        <span>{label}</span>
        {onExit ? <IconButton size="sm" label={`Exit ${label.toLowerCase()}`} onClick={onExit}><XIcon /></IconButton> : <span className="w-2" />}
      </div>
    );
  }
  return (
    <section aria-label={label} className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 rounded-card border border-line-strong bg-sunken px-4 py-3", className)}>
      <GhostIcon className="shrink-0 text-fg-muted" />
      <div className="min-w-0 flex-1 basis-56">
        <p className="text-body leading-5 font-medium text-fg">{label}</p>
        <p className="text-small leading-4 text-fg-muted">{description}</p>
      </div>
      {onExit && <Button size="sm" variant="secondary" onClick={onExit}>{exitLabel}</Button>}
    </section>
  );
}
```

## tattva/molecules/ProvenancePopover.tsx

```tsx
import { SparkleIcon, ChevronIcon } from "../lib/icons";
import { Popover } from "../atoms/Popover";

export interface ProvenancePopoverProps {
  /** Text of the AI label. It is the accessible name of the trigger. */
  label?: string;
  /** Tool or model that produced the content. */
  madeWith?: string;
  /** When it was made, as display text. */
  date?: string;
  /** What the AI did, one short phrase each. */
  actions?: string[];
  /** Whether a person changed the content after it was generated. Omit to leave the row out. */
  editedByPerson?: boolean;
  /** One short line answering "why am I seeing this". */
  why?: string;
  /** Link to a fuller record. */
  detailsHref?: string;
  detailsLabel?: string;
  /** Heading inside the panel. */
  title?: string;
  /** Row labels, so product copy can be localised. */
  rowLabels?: { madeWith: string; date: string; actions: string; edited: string; yes: string; no: string };
  /** Controlled mode. Omit both to let it manage itself. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "end";
  side?: "bottom" | "top";
}

const defaultRows = { madeWith: "Made with", date: "Date", actions: "What AI did", edited: "Edited by a person", yes: "Yes", no: "No" };

/**
 * AI label that opens an explanation on demand. The label is always visible text, the details sit one click away.
 * Built on Popover, so it opens with Enter, Space or a tap, closes on Escape and returns focus to the label.
 */
export function ProvenancePopover({
  label = "AI-generated", madeWith, date, actions, editedByPerson, why, detailsHref, detailsLabel = "View full details",
  title = "About this content", rowLabels = defaultRows, open, onOpenChange, align = "start", side = "bottom",
}: ProvenancePopoverProps) {
  const r = { ...defaultRows, ...rowLabels };
  const rows: [string, string][] = [];
  if (madeWith) rows.push([r.madeWith, madeWith]);
  if (date) rows.push([r.date, date]);
  if (editedByPerson !== undefined) rows.push([r.edited, editedByPerson ? r.yes : r.no]);
  return (
    <Popover phoneSheet label={title} open={open} onOpenChange={onOpenChange} align={align} side={side} panelClassName="w-72 max-w-[calc(100vw-2rem)] p-3.5"
      trigger={({ open: isOpen, toggle, triggerProps }) => (
        <button type="button" onClick={toggle} {...triggerProps}
          className="inline-flex cursor-pointer items-center gap-1 rounded-control border border-transparent bg-lime-soft px-2 py-0.5 text-micro leading-4 font-medium text-fg transition-colors hover:bg-lime-soft-hover">
          <SparkleIcon width={10} height={10} />{label}
          <ChevronIcon width={10} height={10} className={isOpen ? "-rotate-90" : "rotate-90"} />
        </button>
      )}>
      <div className="space-y-3 text-compact">
        <h4 className="font-sans! text-body leading-5 font-medium text-fg">{title}</h4>
        {rows.length > 0 && (
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
            {rows.map(([k, v]) => (<div key={k} className="contents"><dt className="text-fg-muted">{k}</dt><dd className="text-fg">{v}</dd></div>))}
          </dl>
        )}
        {actions && actions.length > 0 && (
          <div>
            <p className="text-fg-muted">{r.actions}</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-fg">{actions.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        )}
        {why && <p className="rounded-xl bg-sunken px-3 py-2 text-small leading-4 text-fg-muted">{why}</p>}
        {detailsHref && <a href={detailsHref} className="inline-block text-small leading-4 font-medium text-fg underline underline-offset-2">{detailsLabel}</a>}
      </div>
    </Popover>
  );
}
```

## tattva/molecules/RadioGroup.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface RadioOption {
  value: string;
  label: ReactNode;
  /** Visible hint under the label. */
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  /** Name of the group, shown as the legend. */
  label: string;
  /** Hides the legend visually. Screen readers still hear it. */
  hideLabel?: boolean;
  orientation?: "vertical" | "horizontal";
  /** Marks every radio as having an error (red border, aria-invalid). Show the error text yourself. */
  invalid?: boolean;
  disabled?: boolean;
  /** Shared by all radios, which is what gives the browser its arrow-key behaviour. Defaults to a generated one. */
  name?: string;
  className?: string;
}

/** Controlled group of native radios in a fieldset. The browser handles Tab and the arrow keys. */
export function RadioGroup({ options, value, onChange, label, hideLabel, orientation = "vertical", invalid, disabled, name, className }: RadioGroupProps) {
  const auto = useId();
  const groupName = name ?? auto;
  return (
    <fieldset disabled={disabled} className={cn("min-w-0 border-0 p-0 m-0", className)}>
      <legend className={cn("mb-2 p-0 text-body leading-5 font-medium text-fg", hideLabel && "sr-only")}>{label}</legend>
      <div className={cn("flex gap-x-6 gap-y-2", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap")}>
        {options.map((o) => <Radio key={o.value} name={groupName} option={o} checked={o.value === value} invalid={invalid} onSelect={onChange} />)}
      </div>
    </fieldset>
  );
}

function Radio({ name, option, checked, invalid, onSelect }: { name: string; option: RadioOption; checked: boolean; invalid?: boolean; onSelect: (v: string) => void }) {
  const labelId = useId();
  const descId = useId();
  return (
    <label className={cn("inline-flex items-start gap-3 text-body leading-5 text-fg pointer-coarse:min-h-11 pointer-coarse:items-center", option.disabled ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer")}>
      <span className="relative mt-0.5 inline-grid size-5 shrink-0 place-items-center pointer-coarse:mt-0">
        <input type="radio" name={name} value={option.value} checked={checked} disabled={option.disabled}
          aria-invalid={invalid || undefined} aria-labelledby={labelId} aria-describedby={option.description ? descId : undefined}
          onChange={() => onSelect(option.value)}
          className={cn("peer size-5 shrink-0 appearance-none rounded-full border bg-surface transition-colors duration-[var(--dur-fast)] checked:border-accent forced-colors:border-[ButtonText] forced-colors:checked:border-[Highlight]",
            invalid ? "border-danger" : "border-line-strong", option.disabled ? "cursor-not-allowed" : "cursor-pointer")} />
        <span aria-hidden className="pointer-events-none absolute size-2.5 scale-0 rounded-full bg-accent transition-transform duration-[var(--dur-fast)] peer-checked:scale-100 forced-colors:bg-[Highlight]" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span id={labelId}>{option.label}</span>
        {option.description && <span id={descId} className="text-fg-muted">{option.description}</span>}
      </span>
    </label>
  );
}
```

## tattva/molecules/RateLimitNotice.tsx

```tsx
import { Button } from "../atoms/Button";
import { Callout } from "./Callout";


export function RateLimitNotice({ resetsIn, onUpgrade }: { resetsIn: string; onUpgrade?: () => void }) {
  return <Callout tone="warning" title="You've reached the usage limit" action={onUpgrade && <Button size="sm" onClick={onUpgrade}>Upgrade</Button>}>Limits reset in {resetsIn}.</Callout>;
}
```

## tattva/molecules/Receipt.tsx

```tsx
import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, ChevronIcon } from "../lib/icons";

export interface ReceiptProps {
  /** What was settled, such as "Confirmed the facts". */
  title: string;
  /** Right side of the row, such as a date or an amount. */
  meta?: ReactNode;
  /** Replaces the default check. Decorative. */
  icon?: ReactNode;
  /** The full card, shown when opened. */
  children: ReactNode;
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Mount the children even while closed (hidden), for example to keep form state. */
  keepMounted?: boolean;
  className?: string;
}

/**
 * A settled card folded into one line so the thread stays short. Every decision card in a thread becomes a
 * Receipt once the person has acted. Opening it shows the original card in place; nothing traps focus.
 */
export function Receipt({ title, meta, icon, children, defaultOpen = false, open, onOpenChange, keepMounted, className }: ReceiptProps) {
  const uid = useId();
  const [inner, setInner] = useState(defaultOpen);
  const isOpen = open ?? inner;
  const toggle = () => { const v = !isOpen; if (open === undefined) setInner(v); onOpenChange?.(v); };
  return (
    <div className={cn("rounded-card border border-line bg-surface", className)}>
      <button type="button" id={`${uid}-b`} aria-expanded={isOpen} aria-controls={`${uid}-r`} onClick={toggle}
        className="flex min-h-10 w-full cursor-pointer items-center gap-3 rounded-card px-4 py-2 text-left text-body leading-5 hover:bg-hover pointer-coarse:min-h-11">
        <span aria-hidden className="flex shrink-0 text-success-fg">{icon ?? <CheckIcon width={16} height={16} />}</span>
        <span className="min-w-0 flex-1 break-words font-medium">{title}</span>
        {meta && <span className="shrink-0 text-small leading-4 text-fg-muted">{meta}</span>}
        <ChevronIcon aria-hidden className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)]", isOpen && "rotate-90")} />
      </button>
      <div id={`${uid}-r`} role="region" aria-labelledby={`${uid}-b`} hidden={!isOpen} className="border-t border-line p-3">
        {(isOpen || keepMounted) && children}
      </div>
    </div>
  );
}
```

## tattva/molecules/RefusalNotice.tsx

```tsx
import type { ReactNode } from "react";
import { Callout } from "./Callout";

/** Refusals are not errors: neutral tone, explain the boundary, offer an alternative. */
export function RefusalNotice({ reason, alternative }: { reason: string; alternative?: ReactNode }) {
  return (
    <Callout tone="info" title="I can't help with that">
      <p>{reason}</p>
      {alternative && <p className="mt-1">{alternative}</p>}
    </Callout>
  );
}
```

## tattva/molecules/RevertToggle.tsx

```tsx
import { useState, type ReactNode } from "react";
import { Button } from "../atoms/Button";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { cn } from "../lib/cn";

export type RevertVersion = "ai" | "user";

export interface RevertToggleProps {
  /** The original AI suggestion. */
  aiValue: ReactNode;
  /** The person's edited version. When absent, only the AI value shows and the controls are hidden. */
  userValue?: ReactNode;
  /** Controlled active version. Omit to let the toggle manage itself. */
  value?: RevertVersion;
  /** Starting version in uncontrolled mode. Defaults to "user" when an edit exists. */
  defaultValue?: RevertVersion;
  onChange?: (value: RevertVersion) => void;
  /** Called when the person chooses Revert to original. The app should drop the edit. */
  onRevert?: () => void;
  aiLabel?: string;
  userLabel?: string;
  revertLabel?: string;
  /** Accessible name for the version switch. */
  label?: string;
  className?: string;
}

/** Switches a value between the AI suggestion and the person's edit, with a way back to the original. */
export function RevertToggle({ aiValue, userValue, value, defaultValue, onChange, onRevert, aiLabel = "AI suggestion", userLabel = "Your edit", revertLabel = "Revert to original", label = "Version", className }: RevertToggleProps) {
  const hasEdit = userValue !== undefined && userValue !== null;
  const [inner, setInner] = useState<RevertVersion>(defaultValue ?? (hasEdit ? "user" : "ai"));
  const [message, setMessage] = useState("");
  const active: RevertVersion = hasEdit ? (value ?? inner) : "ai";
  const names = { ai: aiLabel, user: userLabel };
  const set = (v: RevertVersion) => { if (value === undefined) setInner(v); onChange?.(v); setMessage(`Showing ${names[v]}`); };
  return (
    <div className={cn("space-y-3", className)}>
      {hasEdit && (
        <div className="flex flex-wrap items-center gap-2">
          <SegmentedControl size="sm" label={label} value={active} onChange={set} options={[{ value: "ai", label: aiLabel }, { value: "user", label: userLabel }]} />
          <Button size="sm" variant="ghost" onClick={() => { set("ai"); onRevert?.(); }}>{revertLabel}</Button>
        </div>
      )}
      <div className="rounded-card border border-line bg-surface px-4 py-3 text-body leading-5 text-fg">{active === "ai" ? aiValue : userValue}</div>
      <span role="status" className="sr-only">{message}</span>
    </div>
  );
}
```
