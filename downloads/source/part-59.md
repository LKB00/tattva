## tattva/organisms/ComparisonTable.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Badge } from "../atoms/Badge";

export interface ComparisonItem {
  id: string;
  name: string;
  /** Short line under the name. */
  subtitle?: string;
  /** Marks this item with a visible text badge and a lime fill. */
  badge?: string;
}

export interface ComparisonRow {
  id: string;
  /** Attribute name. */
  label: string;
  /** One value per item, in the same order as `items`. */
  values: ReactNode[];
}

export interface ComparisonTableProps {
  /** Two to five items. Extras are ignored. */
  items: ComparisonItem[];
  rows: ComparisonRow[];
  /** Names the table. Visible to screen readers on the table and used as the heading of the stacked cards. */
  caption: string;
  /** Header text of the attribute column. */
  attributeLabel?: string;
  className?: string;
}

/**
 * Semantic comparison table for 2 to 5 items. Column headers are th scope=col, row headers are th scope=row.
 * Below the sm breakpoint (600px) it switches to one stacked card per item. Only one form is exposed at a time.
 */
export function ComparisonTable({ items, rows, caption, attributeLabel = "Attribute", className }: ComparisonTableProps) {
  const list = items.slice(0, 5);
  return (
    <div className={className}>
      <div tabIndex={0} className="hidden overflow-x-auto rounded-card border border-line bg-surface sm:block">
        <table className="w-full min-w-120 border-collapse text-left text-compact">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-sunken">
              <th scope="col" className="px-4 py-3 text-nano font-normal uppercase tracking-caps text-fg-muted">{attributeLabel}</th>
              {list.map((it) => (
                <th key={it.id} scope="col" className={cn("px-4 py-3 align-bottom font-medium text-fg", it.badge && "bg-lime-faint")}>
                  <span className="block">{it.name}</span>
                  {it.subtitle && <span className="block text-small font-normal text-fg-muted">{it.subtitle}</span>}
                  {it.badge && <Badge tone="accent" className="mt-1">{it.badge}</Badge>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-line align-top">
                <th scope="row" className="px-4 py-3 font-medium text-fg">{r.label}</th>
                {list.map((it, i) => <td key={it.id} className={cn("px-4 py-3 leading-5 text-fg-muted", it.badge && "bg-lime-faint")}>{r.values[i]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden">
        <h3 className="font-sans! mb-2 text-compact font-bold">{caption}</h3>
        <ul className="m-0 list-none space-y-3 p-0">
          {list.map((it, i) => (
            <li key={it.id} className="rounded-card border border-line bg-surface p-4">
              <p className="flex flex-wrap items-center gap-2 text-body font-medium">{it.name}{it.badge && <Badge tone="accent">{it.badge}</Badge>}</p>
              {it.subtitle && <p className="text-small text-fg-muted">{it.subtitle}</p>}
              <dl className="mt-3 space-y-2 text-compact">
                {rows.map((r) => (
                  <div key={r.id} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 border-t border-line pt-2">
                    <dt className="text-fg-subtle">{r.label}</dt>
                    <dd className="m-0 text-fg-muted">{r.values[i]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

## tattva/organisms/Composer.tsx

```tsx
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { PaperclipIcon, SendIcon, StopIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface ComposerProps {
  onSend: (text: string) => void;
  /** While true the send button becomes Stop and calls onStop. */
  generating?: boolean;
  onStop?: () => void;
  placeholder?: string;
  /** Example messages that take turns as the placeholder while the box is empty. With reduced motion the first one stays. Overrides placeholder. */
  placeholders?: string[];
  /** Milliseconds each example stays. Default 4000. */
  placeholderInterval?: number;
  maxLength?: number;
  /** Called when Attach file is pressed. The attach button renders only when this is provided. */
  onAttach?: () => void;
  /** Extra controls (model picker, tools toggle) rendered left of the send button. */
  tools?: ReactNode;
  disabled?: boolean;
}

export function Composer({ onSend, generating, onStop, onAttach, placeholder = "Message the assistant…", placeholders, placeholderInterval = 4000, maxLength = 4000, tools, disabled }: ComposerProps) {
  const [value, setValue] = useState("");
  const [turn, setTurn] = useState(0);
  const reduced = useReducedMotion();
  const rotating = !!placeholders && placeholders.length > 1 && !reduced && value === "";
  useEffect(() => {
    if (!rotating) return;
    const t = window.setInterval(() => setTurn((n) => n + 1), placeholderInterval);
    return () => window.clearInterval(t);
  }, [rotating, placeholderInterval]);
  const shownPlaceholder = placeholders?.length ? placeholders[(rotating ? turn : 0) % placeholders.length] : placeholder;
  const ref = useRef<HTMLTextAreaElement>(null);
  const inputId = useId();
  const canSend = value.trim().length > 0 && !disabled;

  const submit = () => {
    if (!canSend || generating) return;
    onSend(value.trim());
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };
  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends, Shift+Enter newline. Never send mid IME composition.
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); submit(); }
  };
  const grow = (el: HTMLTextAreaElement) => { el.style.height = "auto"; el.style.height = `${Math.min(el.scrollHeight, 200)}px`; };
  const nearLimit = value.length > maxLength * 0.9;

  return (
    <div className={cn("rounded-field border border-line-strong bg-surface shadow-sm transition-shadow focus-within:border-fg-subtle focus-within:shadow-md has-[textarea:focus-visible]:outline-2 has-[textarea:focus-visible]:outline-offset-2 has-[textarea:focus-visible]:outline-[var(--focus-ring)]", disabled && "opacity-(--disabled-opacity)")}>
      <label htmlFor={inputId} className="sr-only">Message</label>
      <textarea enterKeyHint="send"
        id={inputId} ref={ref} rows={1} value={value} maxLength={maxLength} disabled={disabled}
        placeholder={shownPlaceholder}
        onChange={(e) => { setValue(e.target.value); grow(e.target); }}
        onKeyDown={onKey}
        className="block w-full resize-none bg-transparent px-5 pt-4 pb-1 text-body-lg leading-relaxed outline-none [field-sizing:content] placeholder:text-fg-subtle"
      />
      <div className="flex flex-wrap items-center gap-1.5 px-2.5 pb-2.5">
        {onAttach && <IconButton label="Attach file" size="sm" variant="secondary" onClick={onAttach}><PaperclipIcon /></IconButton>}
        {tools}
        <span className="ml-auto flex items-center gap-1.5">
        {nearLimit && <span className="mr-2 text-small leading-4 text-warning-fg" aria-live="polite">{value.length}/{maxLength}</span>}
        {generating
          ? <IconButton label="Stop generating" variant="secondary" onClick={onStop}><StopIcon /></IconButton>
          : <IconButton label="Send message" variant="lime" disabled={!canSend} onClick={submit}><SendIcon /></IconButton>}
        </span>
      </div>
    </div>
  );
}
```

## tattva/organisms/ContextPanel.tsx

```tsx
import { useId, useRef } from "react";
import { cn } from "../lib/cn";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { ContextIcon, FileIcon, GlobeIcon, MemoryIcon, NotebookIcon, PlusIcon, ToolIcon, XIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { Meter } from "../atoms/Meter";

export type ContextKind = "file" | "app" | "memory" | "page" | "instruction";

export interface ContextItem {
  id: string;
  kind: ContextKind;
  /** Its name, such as "Q3 report.pdf" or "Gmail". */
  label: string;
  /** One short line, such as "12 pages" or "Read only". */
  detail?: string;
  /** Items that cannot be taken out here (an app's own instructions). */
  fixed?: boolean;
}

export interface ContextPanelLabels {
  heading?: string;
  /** Receives how many items there are. */
  count?: (n: number) => string;
  groups?: Partial<Record<ContextKind, string>>;
  /** Receives the item's name. */
  remove?: (label: string) => string;
  /** Read out after an item is taken out. Receives its name. */
  removed?: (label: string) => string;
  add?: string;
  empty?: string;
  /** Receives used and total, already formatted. */
  room?: (used: string, total: string) => string;
  /** Name of the bar for screen readers. */
  roomLabel?: string;
}

export interface ContextPanelProps {
  items: ContextItem[];
  /** Takes an item out of what the assistant can see. */
  onRemove: (id: string) => void;
  /** Opens a way to add files or apps. The button is hidden when omitted. */
  onAdd?: () => void;
  /** How much of the assistant's working memory the items fill, as words or tokens. */
  room?: { used: number; total: number };
  labels?: ContextPanelLabels;
  /** Level of the part's heading, so it fits the page outline. Default 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const ORDER: ContextKind[] = ["instruction", "page", "file", "app", "memory"];
const ICON: Record<ContextKind, typeof FileIcon> = { file: FileIcon, app: ToolIcon, memory: MemoryIcon, page: GlobeIcon, instruction: NotebookIcon };
const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * Everything the assistant can see right now, in one place: instructions, the open page, files, connected apps and
 * memories, grouped by kind. Each can be taken out with one press, and focus moves to the next item so a keyboard user
 * never lands on nothing. An optional bar shows how full the assistant's working memory is.
 */
export function ContextPanel({ items, onRemove, onAdd, room, labels, headingLevel = 3, className }: ContextPanelProps) {
  const l = {
    heading: "What the assistant can see", count: (n: number) => (n === 1 ? "1 item" : `${n} items`), remove: (x: string) => `Take out ${x}`,
    removed: (x: string) => `${x} taken out.`, add: "Add", empty: "Nothing is shared yet. The assistant only sees this chat.",
    room: (u: string, t: string) => `Uses ${u} of ${t} tokens`, roomLabel: "Working memory used", ...labels,
    groups: { instruction: "Instructions", page: "Open page", file: "Files", app: "Connected apps", memory: "Memories", ...labels?.groups },
  };
  const uid = useId();
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const list = useRef<HTMLDivElement>(null);
  const said = useRef<HTMLParagraphElement>(null);
  const take = (item: ContextItem) => {
    // Move focus to the next remove button (or the heading) before the row goes, then say what happened.
    const buttons = [...(list.current?.querySelectorAll<HTMLButtonElement>("[data-remove]") ?? [])];
    const at = buttons.findIndex((b) => b.dataset.remove === item.id);
    const next = buttons[at + 1] ?? buttons[at - 1];
    onRemove(item.id);
    if (said.current) said.current.textContent = l.removed(item.label);
    requestAnimationFrame(() => (next && next.isConnected ? next : document.getElementById(`${uid}-h`))?.focus());
  };
  const groups = ORDER.map((k) => ({ kind: k, items: items.filter((i) => i.kind === k) })).filter((g) => g.items.length);
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-center gap-2.5">
        <ContextIcon aria-hidden width={18} height={18} className="shrink-0 text-fg-muted" />
        <H id={`${uid}-h`} tabIndex={-1} className="m-0 min-w-0 flex-1 text-body leading-5 font-semibold text-fg outline-none">{l.heading}</H>
        <span className="text-small leading-5 text-fg-muted">{l.count(items.length)}</span>
      </div>
      <div ref={list} className="mt-3 space-y-4">
        {groups.length === 0 && <p className="m-0 text-small leading-5 text-fg-muted">{l.empty}</p>}
        {groups.map((g) => {
          const Icon = ICON[g.kind];
          return (
            <div key={g.kind}>
              <H2 className="m-0 text-small leading-4 font-medium text-fg-muted">{l.groups[g.kind]}</H2>
              <ul className="mt-1.5 space-y-1">
                {g.items.map((i) => (
                  <li key={i.id} className="flex min-h-10 items-center gap-2.5 rounded-control px-2 py-1 hover:bg-hover">
                    <Icon aria-hidden width={16} height={16} className="shrink-0 text-fg-muted" />
                    <span className="min-w-0 flex-1">
                      <span className="line-clamp-2 block text-body leading-5 text-fg">{i.label}</span>
                      {i.detail && <span className="block truncate text-small leading-4 text-fg-muted">{i.detail}</span>}
                    </span>
                    {!i.fixed && (
                      <IconButton size="sm" label={l.remove(i.label)} data-remove={i.id} onClick={() => take(i)}><XIcon width={14} height={14} /></IconButton>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {(room || onAdd) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          {room && (
            <div className="min-w-0 flex-1 basis-48">
              <p className="m-0 mb-1.5 text-small leading-4 text-fg-muted">{l.room(fmt(room.used), fmt(room.total))}</p>
              <Meter value={room.used} max={room.total} warnAt={0.9} label={l.roomLabel} valueText={l.room(fmt(room.used), fmt(room.total))} />
            </div>
          )}
          {onAdd && <Button size="sm" variant="secondary" leading={<PlusIcon aria-hidden width={14} height={14} />} onClick={onAdd}>{l.add}</Button>}
        </div>
      )}
      <p ref={said} role="status" className="sr-only" />
    </section>
  );
}
```
