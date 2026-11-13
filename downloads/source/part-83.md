## tattva/organisms/PromptIndex.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from "react";
import { cn } from "../lib/cn";
import { Sheet } from "./Sheet";

export interface PromptIndexItem {
  id: string;
  /** The person's message. Shown on one line; the full text stays in the button for screen readers. */
  text: string;
  /** When it was sent, already formatted, e.g. "10:42". */
  time?: string;
}

export interface PromptIndexProps {
  /** The person's own messages in this thread, oldest first. */
  items: PromptIndexItem[];
  /** The message in view. Marked with aria-current and a longer mark. */
  currentId?: string;
  /** Called with the id of the message to scroll to. Your code scrolls and moves focus to that message. */
  onJump: (id: string) => void;
  /** Name of the navigation, and the heading of the list. */
  label?: string;
  /** list: a plain list for a side panel or sheet. rail: thin marks on the right edge of a thread that open on hover, focus or tap. */
  variant?: "list" | "rail";
  className?: string;
}

const rowsIn = (root: HTMLElement | null) => Array.from(root?.querySelectorAll<HTMLButtonElement>("[data-pi-item]") ?? []);

/** Arrow keys, Home and End move focus between the items. Enter and Space press the focused one natively. */
function moveFocus(e: ReactKeyboardEvent<HTMLElement>) {
  const rows = rowsIn(e.currentTarget);
  const at = rows.indexOf(document.activeElement as HTMLButtonElement);
  if (at < 0) return;
  const next = { ArrowDown: at + 1, ArrowUp: at - 1, Home: 0, End: rows.length - 1 }[e.key];
  if (next === undefined) return;
  e.preventDefault();
  rows[Math.max(0, Math.min(rows.length - 1, next))]?.focus();
}

interface ListProps {
  items: PromptIndexItem[];
  currentId?: string;
  onPick: (id: string) => void;
  /** Hidden when a sheet title already names the list. */
  heading?: string;
  label: string;
  /** Move focus to the current item once mounted (inside the sheet). */
  focusCurrent?: boolean;
}

function IndexList({ items, currentId, onPick, heading, label, focusCurrent }: ListProps) {
  const headId = useId();
  const ref = useRef<HTMLElement>(null);
  const tabbable = items.some((i) => i.id === currentId) ? currentId : items[0]?.id;
  useEffect(() => {
    if (!focusCurrent) return;
    // One frame later, so this runs after the sheet has put focus on its first control.
    const f = requestAnimationFrame(() => ref.current?.querySelector<HTMLElement>('[data-pi-item][tabindex="0"]')?.focus());
    return () => cancelAnimationFrame(f);
  }, [focusCurrent]);
  return (
    <nav ref={ref} aria-label={heading ? undefined : label} aria-labelledby={heading ? headId : undefined} onKeyDown={moveFocus} className="flex min-w-0 flex-col gap-1">
      {heading && <p id={headId} className="px-2 text-small font-medium text-fg-muted">{heading}</p>}
      {items.length === 0 ? (
        <p className="px-2 py-2 text-compact text-fg-muted">No questions yet.</p>
      ) : (
        <ol className="flex flex-col">
          {items.map((it) => {
            const current = it.id === currentId;
            return (
              <li key={it.id}>
                <button type="button" data-pi-item tabIndex={it.id === tabbable ? 0 : -1} aria-current={current ? "location" : undefined} title={it.text} onClick={() => onPick(it.id)}
                  className={cn("group flex min-h-9 w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-left text-compact hover:bg-hover pointer-coarse:min-h-11",
                    current ? "font-medium text-fg" : "text-fg-muted hover:text-fg")}>
                  <span aria-hidden className={cn("h-4 w-0.5 shrink-0 rounded-full motion-safe:transition-colors motion-safe:duration-[var(--dur-fast)] forced-colors:bg-[CanvasText]", current ? "bg-fg" : "bg-line-strong")} />
                  <span className="min-w-0 flex-1 truncate group-focus-visible:whitespace-normal">{it.text}</span>
                  {it.time && <span className="shrink-0 text-small text-fg-subtle tabular-nums"><span className="sr-only">, </span>{it.time}</span>}
                </button>
              </li>
            );
          })}
        </ol>
      )}
    </nav>
  );
}

/**
 * An index of the person's own messages in a long thread, so they can jump back to one.
 * The list variant is a plain list. The rail variant is a column of short marks that opens into a list on hover, on
 * keyboard focus or on a tap; below the sm breakpoint it is replaced by a "Questions" button that opens a bottom sheet.
 */
export function PromptIndex({ items, currentId, onJump, label = "Your questions", variant = "list", className }: PromptIndexProps) {
  if (variant === "list") {
    return (
      <div className={className}>
        <IndexList items={items} currentId={currentId} onPick={onJump} heading={label} label={label} />
      </div>
    );
  }
  return (
    <div className={className}>
      <Rail items={items} currentId={currentId} onJump={onJump} label={label} />
      <PhoneTrigger items={items} currentId={currentId} onJump={onJump} label={label} />
    </div>
  );
}

function Rail({ items, currentId, onJump, label }: { items: PromptIndexItem[]; currentId?: string; onJump: (id: string) => void; label: string }) {
  const ref = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);
  const [focusIn, setFocusIn] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [held, setHeld] = useState(false); // Escape closes the rail until the pointer or focus leaves
  // A tap on a closed rail only opens it; the click that follows that tap must not jump.
  const swallow = useRef(false);
  const open = (hover || focusIn || tapped) && !held;
  const tabbable = items.some((i) => i.id === currentId) ? currentId : items[0]?.id;

  useEffect(() => {
    if (!tapped) return;
    const away = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setTapped(false); };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [tapped]);

  if (items.length === 0) return null;
  const onPointerDown = (e: ReactPointerEvent) => {
    swallow.current = e.pointerType === "touch" && !open;
    if (swallow.current) setTapped(true);
  };
  return (
    <nav ref={ref} aria-label={label}
      onPointerEnter={(e) => { if (e.pointerType !== "touch") setHover(true); }}
      onPointerLeave={(e) => { if (e.pointerType !== "touch") { setHover(false); setHeld(false); } }}
      onPointerDown={onPointerDown}
      // Only keyboard focus opens the rail; a mouse click also focuses the button but should not hold it open.
      onFocus={(e) => setFocusIn(e.target.matches(":focus-visible"))}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) { setFocusIn(false); setHeld(false); } }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) { e.stopPropagation(); setHeld(true); setTapped(false); return; }
        moveFocus(e);
      }}
      tabIndex={0}
      className={cn("ml-auto flex max-h-full flex-col overflow-y-auto overscroll-contain rounded-overlay border max-sm:hidden",
        "motion-safe:transition-colors motion-safe:duration-[var(--dur-fast)]",
        open ? "w-72 border-line bg-raised p-1 shadow-lg" : "border-transparent p-1")}>
      <ol className="flex flex-col">
        {items.map((it) => {
          const current = it.id === currentId;
          return (
            <li key={it.id}>
              <button type="button" data-pi-item tabIndex={it.id === tabbable ? 0 : -1} aria-current={current ? "location" : undefined} title={open ? it.text : undefined}
                onClick={() => { if (swallow.current) { swallow.current = false; return; } onJump(it.id); setTapped(false); }}
                className={cn("group flex min-h-6 w-full cursor-pointer items-center justify-end gap-3 rounded-lg text-left text-compact pointer-coarse:min-h-11",
                  open ? "px-2 py-1 hover:bg-hover" : "px-1", current ? "font-medium text-fg" : "text-fg-muted hover:text-fg")}>
                <span className={cn(open ? "min-w-0 flex-1 truncate group-focus-visible:whitespace-normal" : "sr-only")}>{it.text}</span>
                {it.time && <span className={cn(open ? "shrink-0 text-small text-fg-subtle tabular-nums" : "sr-only")}><span className="sr-only">, </span>{it.time}</span>}
                <span aria-hidden className={cn("h-0.5 shrink-0 rounded-full forced-colors:bg-[CanvasText]",
                  "motion-safe:transition-[width,background-color] motion-safe:duration-[var(--dur-fast)] motion-safe:ease-[var(--ease-out)]",
                  current ? "w-5 bg-fg" : "w-3 bg-line-strong")} />
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function PhoneTrigger({ items, currentId, onJump, label }: { items: PromptIndexItem[]; currentId?: string; onJump: (id: string) => void; label: string }) {
  const [open, setOpen] = useState(false);
  // The sheet hands focus back to this button when it has gone. The jump waits for that, so the app's own
  // focus move to the message is not undone by the sheet closing.
  const pending = useRef<string | null>(null);
  if (items.length === 0) return null;
  return (
    <div className="sm:hidden">
      <button type="button" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}
        onFocus={() => { const id = pending.current; pending.current = null; if (id) onJump(id); }}
        className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-control border border-line bg-surface px-4 text-compact text-fg hover:bg-hover tap">
        Questions
        <span className="text-small text-fg-subtle tabular-nums"><span className="sr-only">, </span>{items.length}</span>
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title={label} side="bottom">
        <IndexList items={items} currentId={currentId} label={label} focusCurrent onPick={(id) => { pending.current = id; setOpen(false); }} />
      </Sheet>
    </div>
  );
}
```
