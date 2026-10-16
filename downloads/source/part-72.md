## tattva/organisms/MemoryList.tsx

```tsx
import { useRef, useState, type ReactNode } from "react";
import { useAnnounceChange, useFocusReturn } from "../lib/focus";
import { Badge } from "../atoms/Badge";
import { Button, IconButton } from "../atoms/Button";
import { Switch } from "../atoms/Switch";
import { cn } from "../lib/cn";

export interface MemoryEntry {
  id: string;
  /** Short topic heading, for example "Work". */
  topic?: string;
  /** What is remembered. */
  text: string;
  /** Where it applies, for example "All chats" or "This project". */
  scope: string;
}

export interface MemoryListProps {
  entries: MemoryEntry[];
  /** Called with the entry id and new text when an edit is saved. */
  onEdit?: (id: string, text: string) => void;
  /** Called with the entry id when delete is chosen. */
  onDelete?: (id: string) => void;
  /** Whether new memories are paused. Controlled when set. */
  paused?: boolean;
  defaultPaused?: boolean;
  onPausedChange?: (paused: boolean) => void;
  /** Whether past chats can be searched for context. Controlled when set. */
  searchChats?: boolean;
  defaultSearchChats?: boolean;
  onSearchChatsChange?: (on: boolean) => void;
  /** Replaces the empty state. */
  emptyState?: ReactNode;
  pauseLabel?: string;
  pauseDescription?: string;
  searchLabel?: string;
  searchDescription?: string;
  /** What screen readers hear after a memory is deleted. */
  deletedMessage?: string;
  className?: string;
}

/** Private inline glyphs, 24px grid, 1.5 stroke. */
const svg = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
const PencilIcon = () => <svg {...svg}><path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4" /></svg>;
const TrashIcon = () => <svg {...svg}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>;

function useFlag(controlled: boolean | undefined, initial: boolean, notify?: (v: boolean) => void) {
  const [inner, setInner] = useState(initial);
  return [controlled ?? inner, (v: boolean) => { if (controlled === undefined) setInner(v); notify?.(v); }] as const;
}

/** Memory manager. Two controls on top, then one row per remembered topic with scope, edit and delete. */
export function MemoryList({ entries, onEdit, onDelete, paused, defaultPaused = false, onPausedChange, searchChats, defaultSearchChats = true, onSearchChatsChange, emptyState, pauseLabel = "Pause memory", pauseDescription = "Stop saving new memories. Existing ones stay.", searchLabel = "Search past chats", searchDescription = "Let replies draw on earlier conversations.", deletedMessage = "Memory deleted.", className }: MemoryListProps) {
  const [isPaused, setPaused] = useFlag(paused, defaultPaused, onPausedChange);
  const [isSearch, setSearch] = useFlag(searchChats, defaultSearchChats, onSearchChatsChange);
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  // Focus never falls to the page: after Save or Cancel it returns to that memory's Edit button; after a delete it
  // goes to the next memory (or the previous one, or the empty message).
  const root = useRef<HTMLDivElement>(null);
  const empty = useRef<HTMLDivElement>(null);
  const editButtons = useRef(new Map<string, HTMLButtonElement>());
  const lastEdited = useRef<string | null>(null);
  const afterDelete = useRef<string | null>(null);
  useFocusReturn(editing, root, () => (lastEdited.current ? editButtons.current.get(lastEdited.current) : null));
  const ids = entries.map((e) => e.id).join("|");
  useFocusReturn(ids, root, () => (afterDelete.current ? editButtons.current.get(afterDelete.current) : null) ?? empty.current);
  const said = useAnnounceChange(entries.length, (now, before) => (now < before ? deletedMessage : ""));
  const remove = (id: string) => {
    const i = entries.findIndex((e) => e.id === id);
    afterDelete.current = (entries[i + 1] ?? entries[i - 1])?.id ?? null;
    onDelete?.(id);
  };

  return (
    <div ref={root} className={cn("space-y-4", className)}>
      <p role="status" aria-live="polite" className="sr-only">{said}</p>
      <div className="divide-y divide-line rounded-card border border-line bg-surface">
        {[{ l: pauseLabel, d: pauseDescription, v: isPaused, s: setPaused }, { l: searchLabel, d: searchDescription, v: isSearch, s: setSearch }].map((r) => (
          <div key={r.l} className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="min-w-0"><p className="text-body leading-5 font-medium text-fg">{r.l}</p><p className="text-small leading-4 text-fg-muted">{r.d}</p></div>
            <Switch checked={r.v} onChange={r.s} label={r.l} />
          </div>
        ))}
      </div>

      {entries.length === 0 ? (
        <div ref={empty} tabIndex={-1} className="rounded-card border border-dashed border-line-strong px-4 py-8 text-center text-body leading-5 text-fg-muted">{emptyState ?? "Nothing is remembered yet. Memories you save will appear here."}</div>
      ) : (
        <ul className="divide-y divide-line rounded-card border border-line bg-surface">
          {entries.map((e) => (
            <li key={e.id} className="px-4 py-3">
              {editing === e.id ? (
                <form className="space-y-2" onSubmit={(ev) => { ev.preventDefault(); onEdit?.(e.id, draft.trim()); lastEdited.current = e.id; setEditing(null); }}>
                  <label className="block text-small leading-4 font-medium text-fg-muted" htmlFor={`mem-${e.id}`}>{e.topic ?? "Memory"}</label>
                  <textarea id={`mem-${e.id}`} autoFocus value={draft} onChange={(ev) => setDraft(ev.target.value)} rows={2}
                    className="w-full resize-none rounded-field border border-line-strong bg-surface px-3 py-2 text-body leading-5 text-fg" />
                  <div className="flex gap-2">
                    <Button size="sm" type="submit" disabled={!draft.trim()}>Save</Button>
                    <Button size="sm" variant="ghost" onClick={() => { lastEdited.current = e.id; setEditing(null); }}>Cancel</Button>
                  </div>
                </form>
              ) : (
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex flex-wrap items-center gap-2">
                      {e.topic && <span className="text-small leading-4 font-medium text-fg-muted">{e.topic}</span>}
                      <Badge>{e.scope}</Badge>
                    </div>
                    <p className="text-body leading-5 text-fg">{e.text}</p>
                  </div>
                  <div className="flex shrink-0 gap-0.5">
                    <IconButton size="sm" ref={(n) => { if (n) editButtons.current.set(e.id, n); else editButtons.current.delete(e.id); }} label={`Edit memory: ${e.topic ?? e.text}`} onClick={() => { setDraft(e.text); setEditing(e.id); }}><PencilIcon /></IconButton>
                    <IconButton size="sm" label={`Delete memory: ${e.topic ?? e.text}`} onClick={() => remove(e.id)}><TrashIcon /></IconButton>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## tattva/organisms/MessageList.tsx

```tsx
import type { ReactNode } from "react";

/**
 * Labelled log for a thread. New messages are announced politely. A streaming Message opts its own text out
 * of announcements and says "Response complete" once when it finishes.
 */
export function MessageList({ children, label = "Conversation" }: { children: ReactNode; label?: string }) {
  return <div role="log" aria-label={label} aria-live="polite" aria-relevant="additions" className="mx-auto flex w-full max-w-3xl flex-col gap-6">{children}</div>;
}
```

## tattva/organisms/MessageQueue.tsx

```tsx
import { useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { ChevronIcon, XIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button, IconButton } from "../atoms/Button";
import { KeyHint } from "../atoms/KeyHint";

export interface QueuedMessage {
  id: string;
  text: string;
}

export interface MessageQueueProps {
  items: QueuedMessage[];
  /** Sends this message now instead of waiting for its turn. */
  onSendNow?: (id: string) => void;
  /** Moves a message one place earlier or later. The parent reorders `items`. */
  onMove?: (id: string, direction: "up" | "down") => void;
  onDelete?: (id: string) => void;
  title?: string;
  /** Explains queueing against steering. Replace it with your own product wording. */
  description?: ReactNode;
  emptyText?: string;
  /** Shortcut shown beside Send now on the first item, for example "Ctrl Enter". Omit to hide. */
  sendNowShortcut?: string;
  className?: string;
}

/** Messages the person sent while the assistant was working. They show in a pending style, and can be sent now, reordered or removed. */
export function MessageQueue({
  items, onSendNow, onMove, onDelete, title = "Queued", sendNowShortcut, className, emptyText = "Nothing queued. Messages you send while the assistant works will wait here.",
  description = "Queued messages send in order when the assistant finishes this step. To change what it is doing now, steer it instead.",
}: MessageQueueProps) {
  const [note, setNote] = useState("");
  const move = (id: string, i: number, dir: "up" | "down") => {
    setNote(`Message moved to position ${dir === "up" ? i : i + 2} of ${items.length}`);
    onMove?.(id, dir);
  };
  return (
    <section aria-label={title} className={cn("rounded-card border border-line bg-surface p-4", className)}>
      <header className="flex items-center gap-2">
        <h3 className="font-sans! text-compact font-medium text-fg">{title}</h3>
        <Badge>{items.length}</Badge>
      </header>
      <p className="mt-1 text-small leading-4 text-fg-muted">{description}</p>
      {items.length === 0 ? (
        <p className="mt-3 rounded-card bg-sunken px-3 py-4 text-center text-small leading-4 text-fg-muted">{emptyText}</p>
      ) : (
        <ol className="mt-3 space-y-2">
          {items.map((m, i) => (
            <li key={m.id} className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-card border border-dashed border-line-strong bg-sunken py-1.5 pr-1.5 pl-3">
              <span className="w-4 shrink-0 text-small leading-4 text-fg-subtle tabular-nums">{i + 1}</span>
              <span className="min-w-32 flex-1 truncate text-compact text-fg-muted" title={m.text}>{m.text}</span>
              <span className="ml-auto flex flex-wrap items-center justify-end gap-1">
              <Button size="sm" variant="secondary" onClick={() => onSendNow?.(m.id)} aria-label={`Send now: ${m.text}`}>
                Send now{i === 0 && sendNowShortcut && <KeyHint>{sendNowShortcut}</KeyHint>}
              </Button>
              <IconButton size="sm" label={`Move message ${i + 1} up`} disabled={i === 0} onClick={() => move(m.id, i, "up")}><ChevronIcon width={14} height={14} className="-rotate-90" /></IconButton>
              <IconButton size="sm" label={`Move message ${i + 1} down`} disabled={i === items.length - 1} onClick={() => move(m.id, i, "down")}><ChevronIcon width={14} height={14} className="rotate-90" /></IconButton>
              <IconButton size="sm" label={`Delete message ${i + 1}`} onClick={() => onDelete?.(m.id)}><XIcon width={14} height={14} /></IconButton>
              </span>
            </li>
          ))}
        </ol>
      )}
      <p role="status" className="sr-only">{note}</p>
    </section>
  );
}
```
