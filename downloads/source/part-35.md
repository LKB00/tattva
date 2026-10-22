## tattva/molecules/MessageActions.tsx

```tsx
import { useState } from "react";
import { CheckIcon, CopyIcon, RefreshIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";

export function MessageActions({ text, onRegenerate }: { text: string; onRegenerate?: () => void }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="-ml-1.5 flex items-center gap-0.5">
      <IconButton size="sm" label={copied ? "Copied" : "Copy response"} onClick={async () => {
        try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* noop */ }
      }}>{copied ? <CheckIcon /> : <CopyIcon />}</IconButton>
      {onRegenerate && <IconButton size="sm" label="Regenerate response" onClick={onRegenerate}><RefreshIcon /></IconButton>}
    </div>
  );
}
```

## tattva/molecules/ModelPicker.tsx

```tsx
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, ChevronIcon, InfoIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Popover } from "../atoms/Popover";
import { SegmentedControl, type SegmentOption } from "../atoms/SegmentedControl";

export interface ModelOption {
  id: string;
  name: string;
  /** One line describing when to use it. */
  description?: string;
  /** Short badge text such as "Auto". */
  badge?: string;
  /** Marks the option that routes to another model by itself. Pair with `routedId` on the picker. */
  auto?: boolean;
  disabled?: boolean;
}

export interface ModelLimit {
  /** Reason line shown above the list, for example "Weekly limit reached. Resets Friday." */
  reason: string;
  /** Options that cannot be chosen until the limit resets. */
  limitedIds: string[];
  /** Option the conversation continues on. Its name appears in the fallback line. */
  fallbackId: string;
}

export interface ModelPickerProps {
  models: ModelOption[];
  /** Selected model id. Omit for uncontrolled use. */
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** Accessible name for the list and the panel. */
  label?: string;
  /** Model that actually answered when an auto option is selected. Shown in the panel and on the trigger. */
  routedId?: string;
  /** Builds the line that names the answering model. */
  routedText?: (modelName: string) => string;
  /** Reasoning effort choices, for example Standard and Extended. Omit to hide the control. */
  effortOptions?: SegmentOption<string>[];
  effortValue?: string;
  defaultEffort?: string;
  onEffortChange?: (value: string) => void;
  effortLabel?: string;
  /** Puts the picker in its limit-reached state. */
  limit?: ModelLimit;
  /** Builds the line that names the fallback model. */
  fallbackText?: (modelName: string) => string;
  align?: "start" | "end";
  side?: "bottom" | "top";
  /** Replaces the trigger chip's trailing content. */
  triggerExtra?: ReactNode;
}

/** Chip plus popover for choosing a model or mode. Options form a labelled radio list with arrow-key movement, and an optional effort control sits below. */
export function ModelPicker({
  models, value, defaultValue, onChange, label = "Model", routedId, routedText = (n) => `Answered by ${n}`,
  effortOptions, effortValue, defaultEffort, onEffortChange, effortLabel = "Thinking time",
  limit, fallbackText = (n) => `Continuing on ${n}.`, align = "start", side = "bottom", triggerExtra,
}: ModelPickerProps) {
  const [innerValue, setInnerValue] = useState(defaultValue ?? models[0]?.id ?? "");
  const [innerEffort, setInnerEffort] = useState(defaultEffort ?? effortOptions?.[0]?.value ?? "");
  const current = value ?? innerValue;
  const effort = effortValue ?? innerEffort;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const isOff = (m: ModelOption) => m.disabled || !!limit?.limitedIds.includes(m.id);
  const selected = models.find((m) => m.id === current);
  const routed = selected?.auto && routedId ? models.find((m) => m.id === routedId) : undefined;
  const fallback = limit ? models.find((m) => m.id === limit.fallbackId) : undefined;

  const pick = (id: string) => { if (value === undefined) setInnerValue(id); onChange?.(id); };
  const setEffort = (v: string) => { if (effortValue === undefined) setInnerEffort(v); onEffortChange?.(v); };

  const move = (i: number, e: KeyboardEvent) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    const edge = e.key === "Home" ? 0 : e.key === "End" ? models.length - 1 : -1;
    if (!dir && edge < 0) return;
    e.preventDefault();
    const n = models.length;
    let next = i;
    if (edge >= 0) { next = edge; let guard = 0; while (isOff(models[next]) && guard++ < n) next = (next + (edge === 0 ? 1 : -1) + n) % n; }
    else { let guard = 0; do { next = (next + dir + n) % n; } while (isOff(models[next]) && guard++ < n); }
    if (isOff(models[next])) return;
    pick(models[next].id);
    refs.current[next]?.focus();
  };

  // Roving tab stop: the checked enabled option, else the first enabled one.
  const stopId = selected && !isOff(selected) ? selected.id : models.find((m) => !isOff(m))?.id;

  return (
    <Popover phoneSheet label={label} align={align} side={side} panelClassName="w-80 max-w-[calc(100vw-2rem)]"
      trigger={({ toggle, triggerProps }) => (
        <button type="button" onClick={toggle} {...triggerProps}
          className="inline-flex h-8 max-w-full cursor-pointer items-center gap-1.5 rounded-control border border-line bg-surface pl-3 pr-2 text-small leading-4 font-medium text-fg transition-colors hover:bg-hover">
          <span className="sr-only">{label}: </span>
          <span className="truncate">{selected?.name ?? label}</span>
          {routed && <span className="truncate font-normal text-fg-muted">via {routed.name}</span>}
          {triggerExtra}
          <ChevronIcon width={14} height={14} className="shrink-0 rotate-90 text-fg-subtle" />
        </button>
      )}>
      {({ close }) => (
        <div>
          {limit && (
            <p className="mx-1 mb-1 flex gap-2 rounded-xl bg-sunken px-3 py-2 text-small leading-4 text-fg-muted">
              <InfoIcon width={14} height={14} className="mt-0.5 shrink-0" />
              <span>{limit.reason}{fallback ? ` ${fallbackText(fallback.name)}` : ""}</span>
            </p>
          )}
          <div role="radiogroup" aria-label={label}>
            {models.map((m, i) => {
              const on = m.id === current;
              const off = isOff(m);
              return (
                <button key={m.id} ref={(el) => { refs.current[i] = el; }} type="button" role="radio" aria-checked={on} aria-disabled={off || undefined}
                  tabIndex={m.id === stopId ? 0 : -1}
                  onClick={() => { if (off) return; pick(m.id); close(); }} onKeyDown={(e) => move(i, e)}
                  className={cn("flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition-colors", off ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer hover:bg-hover", on && "bg-selected")}>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-compact font-medium text-fg">
                      <span className="truncate">{m.name}</span>
                      {m.badge && <Badge>{m.badge}</Badge>}
                    </span>
                    {m.description && <span className="block text-small leading-4 text-fg-muted">{m.description}</span>}
                  </span>
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-fg">{on && <CheckIcon width={16} height={16} />}</span>
                </button>
              );
            })}
          </div>
          {routed && (
            <p className="mx-1 mt-1 rounded-xl bg-sunken px-3 py-2 text-small leading-4 text-fg-muted">{routedText(routed.name)}</p>
          )}
          {effortOptions && (
            <div className="mt-1 flex items-center justify-between gap-3 border-t border-line px-3 pt-2.5 pb-1.5">
              <span className="text-small leading-4 text-fg-muted">{effortLabel}</span>
              <SegmentedControl size="sm" label={effortLabel} options={effortOptions} value={effort} onChange={setEffort} />
            </div>
          )}
        </div>
      )}
    </Popover>
  );
}
```

## tattva/molecules/PermissionModeSwitcher.tsx

```tsx
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, ChevronIcon, InfoIcon, ShieldIcon } from "../lib/icons";
import { Popover } from "../atoms/Popover";
import { Kbd } from "../atoms/Kbd";

export type ModeRisk = "low" | "medium" | "high";

export interface PermissionMode {
  id: string;
  /** Short name shown on the trigger, such as "Manual". */
  label: string;
  /** Plain description of what the agent may do without asking. */
  description: string;
  risk: ModeRisk;
  /** Warning line shown under the description. Use it on the riskiest mode. */
  warning?: string;
  /** When set, the mode cannot be chosen and this reason is shown, for example an admin policy. */
  lockedReason?: string;
}

export const defaultPermissionModes: PermissionMode[] = [
  { id: "manual", label: "Manual", description: "Asks before every edit and command. Read-only commands run without asking.", risk: "low" },
  { id: "plan", label: "Plan (read-only)", description: "Reads and explores, then proposes a plan. Nothing is edited until you approve it.", risk: "low" },
  { id: "accept-edits", label: "Accept edits", description: "Edits files without asking. Commands still ask.", risk: "medium" },
  { id: "auto", label: "Auto", description: "A classifier reviews each action instead of you.", risk: "medium" },
  { id: "bypass", label: "Bypass", description: "Skips all permission prompts, including protected paths.", risk: "high", warning: "Use only in an isolated environment." },
];

const riskText: Record<ModeRisk, string> = { low: "Low risk", medium: "Medium risk", high: "High risk" };
const RiskIcon = { low: ShieldIcon, medium: InfoIcon, high: AlertIcon } as const;

export interface PermissionModeSwitcherProps {
  /** Modes in display order. Defaults to Manual, Plan, Accept edits, Auto and Bypass. */
  modes?: PermissionMode[];
  /** Selected mode id (controlled). */
  value?: string;
  /** Initial mode id when uncontrolled. Defaults to the first mode. */
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** Accessible name for the mode list and the popover. */
  label?: string;
  /** Keyboard shortcut shown at the foot of the panel, such as "Shift+Tab". Only show it if the app binds it. */
  shortcut?: string;
  /** Text beside the shortcut. */
  shortcutLabel?: string;
  /** Text used in the live announcement, followed by the mode name. */
  announcePrefix?: string;
  className?: string;
}

/**
 * Always-visible trigger that names the current autonomy mode, with a popover to change it.
 * Each mode carries a risk label written out and shown with its own icon shape.
 */
export function PermissionModeSwitcher({
  modes = defaultPermissionModes, value, defaultValue, onChange, label = "Permission mode",
  shortcut, shortcutLabel = "to cycle modes", announcePrefix = "Mode changed to", className,
}: PermissionModeSwitcherProps) {
  const [inner, setInner] = useState(defaultValue ?? modes[0]?.id);
  const [announce, setAnnounce] = useState("");
  const current = value ?? inner;
  const active = modes.find((m) => m.id === current) ?? modes[0];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const listId = useId();

  const choose = (m: PermissionMode, close: () => void) => {
    if (m.lockedReason) return;
    if (value === undefined) setInner(m.id);
    onChange?.(m.id);
    setAnnounce(`${announcePrefix} ${m.label}`);
    close();
  };
  const move = (i: number, e: KeyboardEvent) => {
    const n = modes.length;
    const dir = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    refs.current[(i + dir + n) % n]?.focus();
  };

  if (!active) return null;
  const ActiveIcon = RiskIcon[active.risk];

  return (
    <div className={cn("inline-block", className)}>
      <Popover phoneSheet label={label} align="start" side="top" panelClassName="w-80 max-w-[calc(100vw-2rem)]"
        trigger={({ toggle, triggerProps }) => (
          <button type="button" onClick={toggle} {...triggerProps}
            className="inline-flex h-8 cursor-pointer items-center gap-2 rounded-control border border-line bg-surface px-3 text-small leading-4 font-medium text-fg hover:border-line-strong">
            <ActiveIcon width={14} height={14} className="text-fg-muted" />
            <span className="text-fg-subtle">{label}:</span>
            <span>{active.label}</span>
            <span className="sr-only">, {riskText[active.risk]}</span>
            <ChevronIcon width={12} height={12} className="rotate-90 text-fg-subtle" />
          </button>
        )}>
        {({ close }) => (
          <div>
            <ul role="radiogroup" aria-label={label} id={listId} className="space-y-0.5">
              {modes.map((m, i) => {
                const on = m.id === active.id;
                const locked = !!m.lockedReason;
                const Icon = RiskIcon[m.risk];
                return (
                  <li key={m.id} role="presentation">
                    <button ref={(el) => { refs.current[i] = el; }} type="button" role="radio" aria-checked={on} aria-disabled={locked || undefined}
                      tabIndex={on ? 0 : -1} onKeyDown={(e) => move(i, e)} onClick={() => choose(m, close)}
                      className={cn("flex w-full items-start gap-2.5 rounded-xl p-2.5 text-left transition-colors",
                        locked ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer hover:bg-hover", on && "bg-selected")}>
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-fg">{on && <CheckIcon width={14} height={14} />}</span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2 text-compact font-medium text-fg">
                          {m.label}
                          <span className={cn("inline-flex items-center gap-1 text-micro font-normal", m.risk === "high" ? "text-danger-fg" : "text-fg-muted")}>
                            <Icon width={12} height={12} />{riskText[m.risk]}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-small leading-4 text-fg-muted">{m.description}</span>
                        {m.warning && (
                          <span className="mt-1 flex items-start gap-1 text-small leading-4 font-medium text-danger-fg">
                            <AlertIcon width={12} height={12} className="mt-0.5 shrink-0" />{m.warning}
                          </span>
                        )}
                        {locked && <span className="mt-1 block text-small leading-4 text-fg-subtle">Locked: {m.lockedReason}</span>}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {shortcut && (
              <p className="mt-1 border-t border-line px-2.5 pt-2 pb-1 text-micro text-fg-subtle">
                <Kbd>{shortcut}</Kbd> {shortcutLabel}
              </p>
            )}
          </div>
        )}
      </Popover>
      <span role="status" aria-live="polite" className="sr-only">{announce}</span>
    </div>
  );
}
```
