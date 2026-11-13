## tattva/molecules/SelectionToolbar.tsx

```tsx
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { SendIcon, SparkleIcon } from "../lib/icons";
import { Popover } from "../atoms/Popover";
import { IconButton } from "../atoms/Button";

export interface SelectionAction { id: string; label: string; icon?: ReactNode }

export interface SelectionToolbarProps {
  /** Preset chips shown in the bar. */
  presets?: SelectionAction[];
  /** Items in the overflow menu. Pass an empty array to hide the menu. */
  moreActions?: SelectionAction[];
  /** Called with the action id for a preset or overflow item. */
  onAction?: (id: string) => void;
  /** Called with the instruction typed in the free-text field. */
  onAsk?: (instruction: string) => void;
  /** Called on Escape. Hide the bar and return focus to the editor. */
  onClose?: () => void;
  /** Accessible name for the toolbar. */
  label?: string;
  moreLabel?: string;
  askLabel?: string;
  askPlaceholder?: string;
  sendLabel?: string;
  className?: string;
}

const defaultPresets: SelectionAction[] = [{ id: "rephrase", label: "Rephrase" }, { id: "shorten", label: "Shorten" }, { id: "tone", label: "Change tone" }];
const defaultMore: SelectionAction[] = [
  { id: "elaborate", label: "Elaborate" }, { id: "formal", label: "More formal" }, { id: "casual", label: "More casual" },
  { id: "bullets", label: "Bulletize" }, { id: "summarize", label: "Summarize" },
];

const chip = "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-control border border-line bg-surface px-3 text-small leading-4 font-medium text-fg transition-colors hover:bg-hover";

/**
 * Floating action bar for highlighted text. It renders inline and does no measuring, so the consumer positions it.
 * It is a toolbar with one tab stop: arrow keys, Home and End move between controls, Escape calls onClose.
 * Real apps should also offer the same actions from a context menu and a keyboard shortcut.
 */
export function SelectionToolbar({
  presets = defaultPresets, moreActions = defaultMore, onAction, onAsk, onClose, label = "Edit selected text",
  moreLabel = "More options", askLabel = "Ask AI to edit", askPlaceholder = "Ask AI to edit", sendLabel = "Send instruction", className,
}: SelectionToolbarProps) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [moreOpen, setMoreOpen] = useState(false);
  const [text, setText] = useState("");
  const focusFirstItem = useRef(false);
  const items = () => Array.from(root.current?.querySelectorAll<HTMLElement>("[data-roving]") ?? []);
  const tab = (i: number) => (i === active ? 0 : -1);

  useEffect(() => {
    if (moreOpen && focusFirstItem.current) { root.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus(); }
    focusFirstItem.current = false;
  }, [moreOpen]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") { if (!moreOpen) onClose?.(); return; }
    const list = items();
    const i = list.indexOf(document.activeElement as HTMLElement);
    if (i < 0) return;
    const el = list[i];
    if (el instanceof HTMLInputElement) {
      const atStart = el.selectionStart === 0 && el.selectionEnd === 0;
      const atEnd = el.selectionStart === el.value.length && el.selectionEnd === el.value.length;
      if ((e.key === "ArrowLeft" && !atStart) || (e.key === "ArrowRight" && !atEnd) || e.key === "Home" || e.key === "End") return;
    }
    let next = i;
    if (e.key === "ArrowRight") next = Math.min(i + 1, list.length - 1);
    else if (e.key === "ArrowLeft") next = Math.max(i - 1, 0);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = list.length - 1;
    else return;
    e.preventDefault();
    list[next].focus();
  };

  const onMenuKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const m = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    const i = m.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") m[(i + 1) % m.length]?.focus();
    else if (e.key === "ArrowUp") m[(i - 1 + m.length) % m.length]?.focus();
    else return;
    e.preventDefault();
    e.stopPropagation();
  };

  const submit = () => { const t = text.trim(); if (!t) return; onAsk?.(t); setText(""); };

  return (
    <div ref={root} role="toolbar" aria-label={label} aria-orientation="horizontal" onKeyDown={onKeyDown}
      className={cn("inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-overlay border border-line bg-raised p-1.5 shadow-md", className)}>
      {presets.map((p, i) => (
        <button key={p.id} type="button" data-roving tabIndex={tab(i)} onFocus={() => setActive(i)} onClick={() => onAction?.(p.id)} className={chip}>{p.icon}{p.label}</button>
      ))}
      {moreActions.length > 0 && (
        <Popover role="menu" label={moreLabel} open={moreOpen} onOpenChange={setMoreOpen} panelClassName="min-w-44"
          trigger={({ toggle, triggerProps }) => (
            <button type="button" data-roving tabIndex={tab(presets.length)} onFocus={() => setActive(presets.length)} {...triggerProps}
              onClick={toggle} aria-label={moreLabel} title={moreLabel}
              onKeyDown={(e) => { if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); e.stopPropagation(); focusFirstItem.current = true; setMoreOpen(true); } }}
              className={cn(chip, "px-2.5")}>
              <span aria-hidden="true" className="tracking-widest">...</span>
            </button>
          )}>
          {({ close }) => (
            <div onKeyDown={onMenuKey} className="flex flex-col">
              {moreActions.map((a) => (
                <button key={a.id} type="button" role="menuitem" tabIndex={-1}
                  onClick={() => { onAction?.(a.id); close(); }}
                  className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-left text-compact text-fg hover:bg-hover">{a.icon}{a.label}</button>
              ))}
            </div>
          )}
        </Popover>
      )}
      <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="flex min-w-48 flex-1 items-center gap-1 rounded-field border border-line bg-sunken pl-3 pr-0.5 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[var(--focus-ring)]">
        <SparkleIcon width={12} height={12} className="shrink-0 text-fg-subtle" />
        <input data-roving tabIndex={tab(presets.length + (moreActions.length > 0 ? 1 : 0))}
          onFocus={() => setActive(presets.length + (moreActions.length > 0 ? 1 : 0))}
          value={text} onChange={(e) => setText(e.target.value)} aria-label={askLabel} placeholder={askPlaceholder}
          className="h-8 min-w-0 flex-1 bg-transparent text-small leading-4 text-fg placeholder:text-fg-subtle focus:outline-none focus-visible:outline-none" />
        <IconButton type="submit" size="sm" label={sendLabel} variant="primary" disabled={!text.trim()}><SendIcon width={13} height={13} /></IconButton>
      </form>
    </div>
  );
}
```

## tattva/molecules/SensitiveDataGuard.tsx

```tsx
import { useId } from "react";
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { LockIcon } from "../lib/icons";
import type { SensitiveFinding, SensitiveKind } from "../lib/sensitive";
import { Button } from "../atoms/Button";

export interface SensitiveDataGuardLabels {
  /** Receives how many details were found. */
  heading?: (n: number) => string;
  body?: string;
  kinds?: Partial<Record<SensitiveKind, string>>;
  remove?: string;
  removeAll?: string;
  sendAnyway?: string;
}

export interface SensitiveDataGuardProps {
  /** What was found, from findSensitive(text). Nothing shows when the list is empty. */
  findings: SensitiveFinding[];
  /** Takes one detail out of the message. */
  onRemove: (id: string) => void;
  /** Takes every detail out. */
  onRemoveAll: () => void;
  /** Sends the message as it is. */
  onSendAnyway: () => void;
  labels?: SensitiveDataGuardLabels;
  /** Level of the part's heading, so it fits the page outline. Default 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const KIND: Record<SensitiveKind, string> = { card: "Card number", key: "API key", password: "Password", email: "Email address", phone: "Phone number" };

/**
 * Sits just above the message box when a message about to be sent holds a private detail: a card number, an API key,
 * a password, an email address or a phone number. It names each one with a safe preview, offers to take it out, and
 * still lets the person send as it is. Taking it out is the main action. Use findSensitive() to fill it.
 */
export function SensitiveDataGuard({ findings, onRemove, onRemoveAll, onSendAnyway, labels, headingLevel = 3, className }: SensitiveDataGuardProps) {
  const l = {
    heading: (n: number) => (n === 1 ? "This message has a private detail" : `This message has ${n} private details`),
    body: "The assistant does not need these to help. Take them out, or send as it is.",
    remove: "Take out", removeAll: "Take them out", sendAnyway: "Send anyway", ...labels,
    kinds: { ...KIND, ...labels?.kinds },
  };
  const uid = useId();
  const H = headingTag(headingLevel);
  if (!findings.length) return null;
  return (
    <section role="status" aria-labelledby={`${uid}-h`} className={cn("rounded-card border border-attention-line bg-attention-soft p-4", className)}>
      <div className="flex items-start gap-2.5">
        <LockIcon aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-attention-fg" />
        <div className="min-w-0 flex-1">
          <H id={`${uid}-h`} className="m-0 text-body leading-5 font-semibold text-fg">{l.heading(findings.length)}</H>
          <p className="m-0 mt-1 text-small leading-5 text-fg-muted">{l.body}</p>
          <ul className="mt-3 space-y-1.5">
            {findings.map((f) => (
              <li key={f.id} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-small leading-5 text-fg">{l.kinds[f.kind]}</span>
                <span className="font-mono text-small leading-5 text-fg-muted">{f.preview}</span>
                {findings.length > 1 && <Button size="sm" variant="ghost" onClick={() => onRemove(f.id)} aria-label={`${l.remove}: ${l.kinds[f.kind]} ${f.preview}`}>{l.remove}</Button>}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button size="sm" onClick={findings.length > 1 ? onRemoveAll : () => onRemove(findings[0].id)}>{findings.length > 1 ? l.removeAll : l.remove}</Button>
            <Button size="sm" variant="ghost" onClick={onSendAnyway}>{l.sendAnyway}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## tattva/molecules/ShareBar.tsx

```tsx
import { cn } from "../lib/cn";
import { Skeleton } from "../atoms/Skeleton";

export interface ShareDatum {
  label: string;
  value: number;
}

export interface ShareBarProps {
  /** The parts of the whole, largest first reads best. Past five, the smallest fold into "Other". */
  data: ShareDatum[];
  /** Name of the whole, for example "Spend by model, October". Read before the shares. */
  ariaLabel: string;
  /** Formats each value in the list, for example as money. Percentages are always shown too. */
  formatValue?: (n: number) => string;
  /** Label of the one part to emphasise; the others draw in the neutral colour. */
  highlight?: string;
  /** Label for the folded parts. */
  otherLabel?: string;
  /** Shows placeholders while the numbers arrive. */
  loading?: boolean;
  /** Said when every value is zero or there is no data. */
  emptyText?: string;
  className?: string;
}

const MAX = 5;
const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

/** Rounds shares to whole percentages that add up to exactly 100, largest remainder first. */
export function sharePercents(values: number[]): number[] {
  const total = values.reduce((a, b) => a + b, 0);
  if (total <= 0) return values.map(() => 0);
  const raw = values.map((v) => (v / total) * 100);
  const out = raw.map(Math.floor);
  let left = 100 - out.reduce((a, b) => a + b, 0);
  for (const i of raw.map((r, i) => [r - Math.floor(r), i] as const).sort((a, b) => b[0] - a[0]).map(([, i]) => i)) {
    if (left <= 0) break;
    out[i] += 1; left -= 1;
  }
  return out;
}

/**
 * Shares of one whole as a single bar: one segment per part, in the chart colours, and a list under it that gives
 * each part's value and percentage. Reads better than a pie, and the numbers are always written out, so nothing
 * depends on colour.
 */
export function ShareBar({ data, ariaLabel, formatValue = (n) => n.toLocaleString(), highlight, otherLabel = "Other", loading = false, emptyText = "Nothing to show yet.", className }: ShareBarProps) {
  if (loading) {
    return (
      <div aria-busy="true" aria-label={ariaLabel} className={cn("grid gap-3", className)}>
        <Skeleton className="h-3 w-full" />
        <div className="flex flex-wrap gap-4"><Skeleton className="h-4 w-24" /><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-16" /></div>
      </div>
    );
  }
  const clean = data.filter((d) => d.value > 0);
  const parts = clean.length > MAX
    ? [...clean.slice(0, MAX - 1), { label: otherLabel, value: clean.slice(MAX - 1).reduce((a, d) => a + d.value, 0) }]
    : clean;
  if (parts.length === 0) return <p className={cn("m-0 text-body leading-5 text-fg-muted", className)}>{emptyText}</p>;
  const pct = sharePercents(parts.map((p) => p.value));
  const total = parts.reduce((a, p) => a + p.value, 0);
  const colorOf = (i: number, label: string) => highlight ? (label === highlight ? COLORS[0] : "var(--chart-neutral)") : COLORS[i];
  return (
    <figure className={cn("m-0 grid min-w-0 gap-3", className)}>
      <figcaption className="sr-only">{ariaLabel}</figcaption>
      <div aria-hidden className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full forced-colors:border forced-colors:border-[CanvasText]">
        {parts.map((p, i) => (
          <span key={p.label} className="h-full min-w-1 shrink first:rounded-l-full last:rounded-r-full" style={{ width: `${(p.value / total) * 100}%`, background: colorOf(i, p.label) }} />
        ))}
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0">
        {parts.map((p, i) => (
          <li key={p.label} className={cn("flex min-w-0 items-baseline gap-1.5 text-compact leading-5", highlight && p.label !== highlight ? "text-fg-muted" : "text-fg")}>
            <span aria-hidden className="size-2.5 shrink-0 translate-y-px self-center rounded-xs" style={{ background: colorOf(i, p.label) }} />
            <span className="min-w-0">{p.label}</span>
            <span className="font-medium tabular-nums">{pct[i]}%</span>
            <span className="text-fg-muted tabular-nums">{formatValue(p.value)}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
```
