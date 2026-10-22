## tattva/organisms/ConversationList.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { EditIcon, MoreIcon, PlusIcon, XIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Menu } from "../molecules/Menu";

export interface ConversationItem { id: string; title: string; group?: string }

export interface ConversationListProps {
  items: ConversationItem[];
  activeId?: string;
  onSelect: (id: string) => void;
  onNew: () => void;
  /** When given, each row gets a "More" menu with Rename. Your code asks for the new name. */
  onRename?: (id: string) => void;
  /** When given, each row gets Delete in its menu. Pressing it asks once, in place, with Keep as easy to press as Delete. */
  onDelete?: (id: string) => void;
  /** Words for the in-place confirmation. */
  labels?: { delete?: string; keep?: string; confirm?: (title: string) => string };
}

/** The history of past chats for a side bar, with an optional row menu and an in-place delete confirmation. */
export function ConversationList({ items, activeId, onSelect, onNew, onRename, onDelete, labels }: ConversationListProps) {
  const groups = [...new Set(items.map((i) => i.group ?? "Recent"))];
  const [asking, setAsking] = useState<string | null>(null);
  const keep = useRef<HTMLButtonElement>(null);
  const L = { delete: labels?.delete ?? "Delete", keep: labels?.keep ?? "Keep it", confirm: labels?.confirm ?? ((t: string) => `Delete “${t}”?`) };
  // Focus lands on the safe choice, so a stray Enter keeps the chat.
  useEffect(() => { if (asking) keep.current?.focus(); }, [asking]);
  const rowMenu = (i: ConversationItem) => {
    const menu = [
      ...(onRename ? [{ id: "rename", label: "Rename", icon: <EditIcon aria-hidden width={14} height={14} />, onSelect: () => onRename(i.id) }] : []),
      ...(onDelete ? [{ id: "delete", label: L.delete, icon: <XIcon aria-hidden width={14} height={14} />, danger: true, onSelect: () => setAsking(i.id) }] : []),
    ];
    if (!menu.length) return null;
    return <Menu portal align="end" triggerLabel={`More for ${i.title}`} trigger={<MoreIcon aria-hidden width={16} height={16} />} items={menu}
      className="shrink-0 [&>button]:size-8 [&>button]:rounded-control [&>button]:text-fg-subtle [&>button]:hover:bg-hover [&>button]:hover:text-fg pointer-coarse:[&>button]:size-11" />;
  };
  return (
    <nav aria-label="Conversations" className="flex flex-col gap-4">
      <Button variant="secondary" leading={<PlusIcon />} onClick={onNew} className="w-full justify-start">New chat</Button>
      {groups.map((g) => (
        <div key={g}>
          <p className="px-2 pb-1 text-nano font-medium uppercase tracking-caps text-fg-subtle">{g}</p>
          <ul>
            {items.filter((i) => (i.group ?? "Recent") === g).map((i) => (
              <li key={i.id}>
                {asking === i.id ? (
                  <div role="group" aria-label={L.confirm(i.title)} onKeyDown={(e) => { if (e.key === "Escape") { e.stopPropagation(); setAsking(null); } }}
                    className="rounded-card border border-line-strong bg-sunken p-2.5">
                    <p className="px-1 pb-2 text-small leading-4 [overflow-wrap:anywhere] text-fg">{L.confirm(i.title)}</p>
                    <div className="flex gap-2">
                      <Button ref={keep} variant="secondary" size="sm" className="flex-1" onClick={() => setAsking(null)}>{L.keep}</Button>
                      <Button variant="secondary" size="sm" className="flex-1" onClick={() => { setAsking(null); onDelete?.(i.id); }}>{L.delete}</Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <button type="button" aria-current={i.id === activeId ? "page" : undefined} onClick={() => onSelect(i.id)}
                      className={cn("min-w-0 flex-1 rounded-control [overflow-wrap:anywhere] px-3 py-1.5 text-left text-small leading-4 hover:bg-hover", i.id === activeId ? "bg-hover text-fg" : "text-fg-muted")}>
                      {i.title}
                    </button>
                    {rowMenu(i)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
```
