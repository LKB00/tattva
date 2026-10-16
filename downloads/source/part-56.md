## tattva/organisms/CommandPalette.tsx

```tsx
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { SearchIcon } from "../lib/icons";
import { KeyHint } from "../atoms/KeyHint";

export interface PaletteCommand {
  id: string;
  label: string;
  /** Heading the command is listed under. Commands without one sit above the headings. */
  group?: string;
  /** Short helper text under the label. */
  hint?: string;
  icon?: ReactNode;
  /** Shown as a key hint. Display only: your app wires the real shortcut. */
  shortcut?: string;
  /** Extra words that should find this command. */
  keywords?: string[];
  disabled?: boolean;
  onSelect: () => void;
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  commands: PaletteCommand[];
  placeholder?: string;
  /** Shown when nothing matches. */
  emptyText?: string;
  /** Required. Accessible name for the dialog and the search field. */
  label: string;
  className?: string;
}

/** Lower is better. -1 means no match. Subsequence: the letters appear in order, not necessarily next to each other. */
function rank(c: PaletteCommand, q: string): number {
  const label = c.label.toLowerCase();
  if (label.startsWith(q)) return 0;
  if (label.includes(q)) return 1;
  const sub = (s: string) => { let i = 0; for (const ch of s) if (ch === q[i]) i += 1; return i === q.length; };
  if (sub(label)) return 2;
  const rest = [c.group ?? "", ...(c.keywords ?? [])].join(" ").toLowerCase();
  if (rest.includes(q)) return 3;
  return sub(`${label} ${rest}`) ? 4 : -1;
}

function filter(commands: PaletteCommand[], raw: string): PaletteCommand[] {
  const q = raw.trim().toLowerCase();
  if (!q) return commands;
  return commands.map((c, i) => ({ c, i, r: rank(c, q) })).filter((x) => x.r >= 0).sort((a, b) => a.r - b.r || a.i - b.i).map((x) => x.c);
}

/** Groups in order of first appearance. Commands with no group come first, without a heading. */
function groupUp(list: PaletteCommand[]): { name: string; items: PaletteCommand[] }[] {
  const m = new Map<string, PaletteCommand[]>();
  for (const c of list) m.set(c.group ?? "", [...(m.get(c.group ?? "") ?? []), c]);
  return [...m].map(([name, items]) => ({ name, items })).sort((a, b) => Number(a.name !== "") - Number(b.name !== ""));
}

/**
 * Searchable list of actions in a modal window (native <dialog>). The search field is a combobox and focus stays
 * in it while the arrow keys move through the options. It adds no keyboard shortcut of its own: your app decides how it opens.
 */
export function CommandPalette({ open, onClose, commands, placeholder = "Type a command…", emptyText = "No matching commands", label, className }: CommandPaletteProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const d = ref.current;
    if (!d || !open) return;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!d.open) d.showModal();
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    d.querySelector<HTMLElement>('[role="combobox"]')?.focus({ preventScroll: true });
    return () => {
      root.style.overflow = prevOverflow;
      if (d.open) d.close();
      const back = opener.current;
      if (back && back.isConnected) back.focus({ preventScroll: true });
      opener.current = null;
    };
  }, [open]);

  return (
    <dialog ref={ref} aria-label={label}
      onCancel={(e) => { e.preventDefault(); onClose(); }}
      onClose={() => { if (openRef.current) onClose(); }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none items-start justify-center bg-transparent p-0 text-fg backdrop:bg-(--scrim) open:flex">
      {/* Mounted only while open, so the search text and the active option start fresh each time. */}
      {open && <Body commands={commands} placeholder={placeholder} emptyText={emptyText} label={label} onClose={onClose} className={className} />}
    </dialog>
  );
}

function Body({ commands, placeholder, emptyText, label, onClose, className }: Required<Pick<CommandPaletteProps, "commands" | "placeholder" | "emptyText" | "label" | "onClose">> & { className?: string }) {
  const [q, setQ] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const uid = useId();
  const list = useRef<HTMLDivElement>(null);
  const flatGroups = useMemo(() => groupUp(filter(commands, q)), [commands, q]);
  const flat = useMemo(() => flatGroups.flatMap((g) => g.items), [flatGroups]);
  const enabled = flat.filter((c) => !c.disabled);
  const active = enabled.find((c) => c.id === activeId) ?? enabled[0];
  const optId = (c: PaletteCommand) => `${uid}-o${flat.indexOf(c)}`;

  useEffect(() => {
    // Scroll the list itself rather than calling scrollIntoView, which can also scroll the page.
    const box = list.current;
    const el = active ? box?.querySelector<HTMLElement>(`[id="${optId(active)}"]`) : null;
    if (!box || !el) return;
    if (el.offsetTop - 32 < box.scrollTop) box.scrollTop = Math.max(0, el.offsetTop - 32);
    else if (el.offsetTop + el.offsetHeight > box.scrollTop + box.clientHeight) box.scrollTop = el.offsetTop + el.offsetHeight - box.clientHeight + 8;
  });

  const run = (c: PaletteCommand) => { if (c.disabled) return; onClose(); c.onSelect(); };
  const move = (to: "next" | "prev" | "first" | "last") => {
    if (!enabled.length) return;
    const i = active ? enabled.indexOf(active) : 0;
    const n = to === "first" ? 0 : to === "last" ? enabled.length - 1 : to === "next" ? (i + 1) % enabled.length : (i - 1 + enabled.length) % enabled.length;
    setActiveId(enabled[n].id);
  };
  const onKey = (e: React.KeyboardEvent) => {
    const map: Record<string, "next" | "prev" | "first" | "last"> = { ArrowDown: "next", ArrowUp: "prev", Home: "first", End: "last" };
    if (map[e.key]) { e.preventDefault(); move(map[e.key]); }
    else if (e.key === "Enter" && active) { e.preventDefault(); run(active); }
  };

  const count = flat.length;
  return (
    <div className={cn("mx-3 mt-3 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-xl flex-col overflow-hidden rounded-overlay border border-line bg-raised shadow-lg motion-safe:animate-rise sm:mt-[10dvh] sm:max-h-[min(30rem,80dvh)] forced-colors:border-[CanvasText]", className)}>
      <div className="flex items-center gap-3 border-b border-line px-4">
        <SearchIcon aria-hidden width={16} height={16} className="shrink-0 text-fg-subtle" />
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey} placeholder={placeholder} aria-label={label}
          role="combobox" aria-expanded={count > 0} aria-controls={`${uid}-list`} aria-autocomplete="list" aria-activedescendant={active ? optId(active) : undefined}
          autoComplete="off" spellCheck={false}
          className="h-14 min-w-0 flex-1 bg-transparent text-lead leading-6 text-fg placeholder:text-fg-subtle focus-visible:outline-none" />
        <KeyHint className="shrink-0 max-sm:hidden"><span aria-hidden>Esc</span></KeyHint>
      </div>
      <p role="status" aria-live="polite" className="sr-only">{q.trim() ? `${count} result${count === 1 ? "" : "s"}` : ""}</p>
      <div ref={list} id={`${uid}-list`} role="listbox" aria-label={label} className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain p-2">
        {count === 0 && <p className="px-3 py-8 text-center text-body leading-5 text-fg-muted">{emptyText}</p>}
        {flatGroups.map((g, gi) => {
          const options = g.items.map((c) => (
            <div key={c.id} id={optId(c)} role="option" aria-selected={c === active} aria-disabled={c.disabled || undefined}
              onMouseDown={(e) => e.preventDefault()}
              onMouseMove={() => { if (!c.disabled && c !== active) setActiveId(c.id); }}
              onClick={() => run(c)}
              className={cn("flex min-h-9 cursor-pointer items-center gap-3 rounded-lg px-3 py-1.5 text-body leading-5 pointer-coarse:min-h-11 forced-colors:border forced-colors:border-transparent",
                c === active && "bg-hover forced-colors:border-[Highlight]", c.disabled && "cursor-not-allowed opacity-(--disabled-opacity)")}>
              {c.icon && <span aria-hidden className="shrink-0 text-fg-subtle">{c.icon}</span>}
              <span className="min-w-0 flex-1">
                <span className="block truncate">{c.label}</span>
                {c.hint && <span className="block truncate text-small leading-4 text-fg-muted">{c.hint}</span>}
              </span>
              {c.shortcut && <KeyHint className="shrink-0 max-sm:hidden">{c.shortcut}</KeyHint>}
            </div>
          ));
          if (!g.name) return <div key="__none" className={cn(gi > 0 && "mt-1")}>{options}</div>;
          return (
            <div key={g.name} role="group" aria-labelledby={`${uid}-g${gi}`} className={cn(gi > 0 && "mt-1")}>
              <p id={`${uid}-g${gi}`} className="px-3 pt-2 pb-1 text-small leading-4 font-medium text-fg-muted">{g.name}</p>
              {options}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

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
