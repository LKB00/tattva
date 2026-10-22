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
