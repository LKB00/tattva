## tattva/organisms/CheckpointList.tsx

```tsx
import { useRef, useState, type ReactNode } from "react";
import { useFocusReturn } from "../lib/focus";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { cn } from "../lib/cn";

export type RestoreMode = "everything" | "conversation" | "work";

export interface Checkpoint {
  id: string;
  /** The prompt that created this checkpoint. */
  prompt: string;
  /** Relative time, for example "12 min ago". */
  time: string;
  /** Number of files changed since the previous checkpoint. */
  files: number;
}

export interface CheckpointListProps {
  /** Newest first or oldest first, rendered in the order given. */
  checkpoints: Checkpoint[];
  /** Id of the checkpoint the work is at now. It is marked and has no actions. */
  currentId?: string;
  /** Called after the person confirms a restore. */
  onRestore?: (id: string, mode: RestoreMode) => void;
  /** Called when Summarize from here is chosen. It runs without a confirm step. */
  onSummarize?: (id: string) => void;
  /** Slot for what the checkpoints do not cover, such as untracked changes. */
  limitations?: ReactNode;
  /** Overrides for any visible label. */
  labels?: Partial<Record<RestoreMode | "summarize" | "confirm" | "cancel" | "current" | "rewind", string>>;
  /** Words for the change count, for example `(n) => `${n} edits``. Defaults to a file count. */
  changeLabel?: (count: number) => string;
  className?: string;
}

const defaults = { everything: "Restore everything", conversation: "Restore conversation only", work: "Restore work only", summarize: "Summarize from here", confirm: "Confirm restore", cancel: "Cancel", current: "Current", rewind: "Rewind" };
const warnings: Record<RestoreMode, string> = {
  everything: "This replaces your work and the conversation with how they were at this point. Later changes are removed.",
  conversation: "This removes the messages after this point. Your work stays as it is.",
  work: "This replaces your work with how it was at this point. The conversation stays as it is.",
};

/** Rewind list with one row per earlier prompt. A destructive restore needs an inline confirm. */
export function CheckpointList({ checkpoints, currentId, onRestore, onSummarize, limitations, labels, changeLabel, className }: CheckpointListProps) {
  const t = { ...defaults, ...labels };
  const [open, setOpen] = useState<string | null>(null);
  const [pending, setPending] = useState<RestoreMode | null>(null);
  const close = () => { setOpen(null); setPending(null); };
  const modes: RestoreMode[] = ["everything", "conversation", "work"];
  // Focus follows the choices: into the confirm step when a restore is picked, back to that choice on Cancel, and
  // back to the row's Rewind button (or the row, if it became the current one) after a restore or a summary.
  const root = useRef<HTMLDivElement>(null);
  const rows = useRef(new Map<string, HTMLLIElement>());
  const last = useRef<{ id: string; mode: RestoreMode | null } | null>(null);
  useFocusReturn(`${open}|${pending}|${currentId}`, root, () => {
    const at = last.current; if (!at) return null;
    const row = rows.current.get(at.id);
    if (open === at.id && pending) return row?.querySelector<HTMLElement>('[role="group"]');
    if (open === at.id && at.mode) return row?.querySelector<HTMLElement>(`[data-mode="${at.mode}"]`);
    return row?.querySelector<HTMLElement>("button[aria-expanded]") ?? row;
  });

  return (
    <div ref={root} className={cn("space-y-3", className)}>
      <ol className="divide-y divide-line rounded-card border border-line bg-surface">
        {checkpoints.map((c) => {
          const current = c.id === currentId;
          const expanded = open === c.id;
          return (
            <li key={c.id} ref={(n) => { if (n) rows.current.set(c.id, n); else rows.current.delete(c.id); }} tabIndex={-1} className="px-4 py-3 outline-offset-[-2px]" aria-current={current ? "step" : undefined}>
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <p title={typeof c.prompt === "string" ? c.prompt : undefined} className="truncate text-body leading-5 text-fg">{c.prompt}</p>
                  <p className="mt-0.5 text-small leading-4 text-fg-muted">{c.time} · {changeLabel ? changeLabel(c.files) : c.files === 1 ? "1 file changed" : `${c.files} files changed`}</p>
                </div>
                {current ? <Badge tone="accent">{t.current}</Badge> : (
                  <Button size="sm" variant="secondary" aria-expanded={expanded} onClick={() => (expanded ? close() : (setOpen(c.id), setPending(null)))}>{t.rewind}</Button>
                )}
              </div>
              {expanded && !current && (
                <div className="mt-3 space-y-3 rounded-card bg-sunken p-3">
                  {pending === null ? (
                    <div className="flex flex-wrap gap-2">
                      {modes.map((m) => (
                        <Button key={m} size="sm" variant="secondary" data-mode={m} disabled={m === "work" && c.files === 0} onClick={() => { last.current = { id: c.id, mode: m }; setPending(m); }}>{t[m]}</Button>
                      ))}
                      <Button size="sm" variant="ghost" onClick={() => { last.current = { id: c.id, mode: null }; onSummarize?.(c.id); close(); }}>{t.summarize}</Button>
                    </div>
                  ) : (
                    <div role="group" tabIndex={-1} aria-label={t[pending]} className="space-y-2 outline-offset-4">
                      <p className="text-body leading-5 text-fg">{t[pending]}? <span className="text-fg-muted">{warnings[pending]}</span></p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="danger" onClick={() => { last.current = { id: c.id, mode: null }; onRestore?.(c.id, pending); close(); }}>{t.confirm}</Button>
                        <Button size="sm" variant="ghost" onClick={() => setPending(null)}>{t.cancel}</Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {limitations && <div className="text-small leading-4 text-fg-muted">{limitations}</div>}
    </div>
  );
}
```

## tattva/organisms/CommandPalette.tsx

```tsx
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { SearchIcon } from "../lib/icons";
import { Kbd } from "../atoms/Kbd";

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
        <Kbd className="shrink-0 max-sm:hidden"><span aria-hidden>Esc</span></Kbd>
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
              {c.shortcut && <Kbd className="shrink-0 max-sm:hidden">{c.shortcut}</Kbd>}
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
