## tattva/molecules/InlineEdit.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Button } from "../atoms/Button";
import { TextField } from "../atoms/TextField";
import { cn } from "../lib/cn";
import { AlertIcon, EditIcon } from "../lib/icons";

export interface InlineEditProps {
  /** Visible label, small and muted. Also the accessible name of the input. */
  label: string;
  value: string;
  /** Called with the new text when the edit is saved. */
  onChange: (value: string) => void;
  /** How to show the value when not editing, such as a Money. Defaults to the text. */
  display?: ReactNode;
  /** Forces the "Edited" tag on or off. When left out, the part compares value with originalValue. */
  edited?: boolean;
  /** The value before anyone changed it. Defaults to the value this part first received. */
  originalValue?: string;
  inputMode?: "text" | "numeric" | "decimal" | "tel" | "email" | "url" | "search";
  /** Returns an error message, or null when the value is fine. On an error the edit stays open. */
  validate?: (value: string) => string | null;
  /** Accessible name of the Edit button. */
  editLabel?: string;
  className?: string;
}

/**
 * "Verify, don't fill in". A value reads as plain text with a visible Edit button. Pressing it turns the value into an
 * input in place. Enter or Done saves, Escape cancels, and a saved change gets an "Edited" tag.
 */
export function InlineEdit({ label, value, onChange, display, edited, originalValue, inputMode, validate, editLabel, className }: InlineEditProps) {
  const uid = useId();
  const labelId = `${uid}-label`, errorId = `${uid}-error`;
  const first = useRef(value);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState("");
  const editBtn = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const back = useRef(false);

  useEffect(() => { if (editing) { input.current?.focus(); input.current?.select(); } }, [editing]);
  // The input is gone after save or cancel, so focus goes back to the Edit button that opened it.
  useEffect(() => { if (!editing && back.current) { back.current = false; editBtn.current?.focus(); } }, [editing]);

  const isEdited = edited ?? value !== (originalValue ?? first.current);

  const start = () => { setDraft(value); setError(null); setSaved(""); setEditing(true); };
  const cancel = () => { back.current = true; setError(null); setEditing(false); };
  const save = () => {
    const err = validate?.(draft) ?? null;
    if (err) { setError(err); input.current?.focus(); return; }
    if (draft !== value) { onChange(draft); setSaved("Saved"); }
    back.current = true;
    setEditing(false);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); save(); }
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); cancel(); }
  };

  return (
    <div className={cn("border-b border-line py-3 last:border-b-0", className)}>
      <div className="flex items-center gap-2">
        <span id={labelId} className="text-small leading-4 text-fg-muted">{label}</span>
        {isEdited && <span className="rounded-control bg-sunken px-2 py-0.5 text-small leading-4 font-medium text-fg-muted forced-colors:border forced-colors:border-[CanvasText]">Edited</span>}
      </div>
      {editing ? (
        <div className="mt-1.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <TextField ref={input} className="flex-1" aria-labelledby={labelId} aria-describedby={error ? errorId : undefined} invalid={!!error} inputMode={inputMode} value={draft}
              onChange={(e) => { setDraft(e.target.value); if (error) setError(null); }} onKeyDown={onKeyDown} />
            <Button size="sm" className="pointer-coarse:h-11" onClick={save}>Done</Button>
            <Button size="sm" variant="ghost" className="pointer-coarse:h-11" onClick={cancel}>Cancel</Button>
          </div>
          <div id={errorId} aria-live="polite" className="empty:hidden">
            {error && <p className="flex items-start gap-1.5 text-small leading-4 text-danger-fg"><AlertIcon className="mt-px shrink-0" width={14} height={14} />{error}</p>}
          </div>
        </div>
      ) : (
        <div className="mt-0.5 flex items-center justify-between gap-3">
          <div className="min-w-0 text-lead leading-6 font-medium text-fg">{display ?? (value || <span className="font-normal text-fg-muted">Not set</span>)}</div>
          <button ref={editBtn} type="button" aria-label={editLabel ?? `Edit ${label}`} onClick={start}
            className="inline-flex min-h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-control px-3 text-body leading-5 font-medium text-fg underline underline-offset-4 transition-colors duration-[var(--dur-fast)] hover:bg-hover tap">
            <EditIcon width={14} height={14} />Edit
          </button>
        </div>
      )}
      <p role="status" aria-live="polite" className="sr-only">{saved}</p>
    </div>
  );
}
```

## tattva/molecules/JsonView.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { Button } from "../atoms/Button";
import { cn } from "../lib/cn";
import { CheckIcon, ChevronIcon, CopyIcon } from "../lib/icons";

export interface JsonViewProps {
  /** The value to show, for example a tool call's input or output. */
  value: unknown;
  /** Accessible name of the tree. Also shown as the heading of the box. */
  label: string;
  /** How many levels start open. 1 opens the top level only, 0 starts fully closed. */
  defaultExpandDepth?: number;
  /** Strings longer than this are cut short with a "Show all" choice. */
  maxStringLength?: number;
  /** Replaces the built-in clipboard copy. Gets the value as indented JSON. Throw or reject to report a failure. */
  onCopy?: (text: string) => void | Promise<void>;
  className?: string;
}

type Kind = "object" | "array" | "string" | "number" | "boolean" | "null" | "other";

interface Row {
  id: string;
  parent: string | null;
  depth: number;
  name: string | number | null;
  value: unknown;
  kind: Kind;
  /** Number of children, 0 for leaves and empty containers. */
  count: number;
  pos: number;
  size: number;
  circular: boolean;
}

const kindOf = (v: unknown): Kind => {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  const t = typeof v;
  if (t === "object") return "object";
  if (t === "string" || t === "boolean") return t;
  if (t === "number" || t === "bigint") return "number";
  return "other";
};

const childrenOf = (v: unknown, kind: Kind): [string | number, unknown][] =>
  kind === "array" ? (v as unknown[]).map((x, i) => [i, x]) : kind === "object" ? Object.entries(v as object) : [];

const parentOf = (id: string) => (id === "$" ? null : id.slice(0, id.lastIndexOf("/")));

const typeWord: Record<Kind, string> = { object: "object", array: "array", string: "string", number: "number", boolean: "boolean", null: "null", other: "value" };
const tint: Record<Kind, string> = {
  string: "text-success-fg",
  number: "text-info-fg",
  boolean: "text-accent-fg",
  null: "text-fg-subtle italic",
  other: "text-fg-subtle italic",
  object: "text-fg-muted",
  array: "text-fg-muted",
};

const plural = (n: number, one: string) => `${n} ${one}${n === 1 ? "" : "s"}`;

/** Shows a JSON value as a tree that opens level by level, following the WAI-ARIA tree view pattern. */
export function JsonView({ value, label, defaultExpandDepth = 1, maxStringLength = 160, onCopy, className }: JsonViewProps) {
  const labelId = useId();
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const [full, setFull] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState("$");
  const [status, setStatus] = useState<"" | "copied" | "failed">("");
  const items = useRef(new Map<string, HTMLDivElement>());
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const isOpen = (id: string, depth: number) => toggled[id] ?? depth < defaultExpandDepth;

  // Only open branches are walked, so a large or self-referencing value costs nothing until someone opens it.
  const rows: Row[] = [];
  const visit = (v: unknown, id: string, parent: string | null, depth: number, name: string | number | null, pos: number, size: number, seen: unknown[]) => {
    const circular = typeof v === "object" && v !== null && seen.includes(v);
    const kind = circular ? "other" : kindOf(v);
    const kids = childrenOf(v, kind);
    rows.push({ id, parent, depth, name, value: v, kind, count: kids.length, pos, size, circular });
    if (kids.length && isOpen(id, depth)) {
      kids.forEach(([k, c], i) => visit(c, `${id}/${encodeURIComponent(String(k))}`, id, depth + 1, k, i + 1, kids.length, [...seen, v]));
    }
  };
  visit(value, "$", null, 0, null, 1, 1, []);

  const ids = new Set(rows.map((r) => r.id));
  let current: string | null = active;
  while (current && !ids.has(current)) current = parentOf(current);
  const activeId = current ?? "$";

  const isLong = (r: Row) => r.kind === "string" && (r.value as string).length > maxStringLength;
  const toggle = (r: Row) => setToggled((t) => ({ ...t, [r.id]: !isOpen(r.id, r.depth) }));
  const flipFull = (id: string) => setFull((f) => ({ ...f, [id]: !f[id] }));
  const move = (id: string) => { setActive(id); items.current.get(id)?.focus(); };

  const activate = (r: Row) => {
    if (r.count) toggle(r);
    else if (isLong(r)) flipFull(r.id);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = rows.findIndex((r) => r.id === activeId);
    const r = rows[i];
    if (!r) return;
    const open = r.count > 0 && isOpen(r.id, r.depth);
    let next: string | undefined;
    switch (e.key) {
      case "ArrowDown": next = rows[i + 1]?.id; break;
      case "ArrowUp": next = rows[i - 1]?.id; break;
      case "Home": next = rows[0].id; break;
      case "End": next = rows[rows.length - 1].id; break;
      case "ArrowRight": if (r.count) { if (open) next = rows[i + 1]?.id; else toggle(r); } break;
      case "ArrowLeft": if (open) toggle(r); else if (r.parent) next = r.parent; break;
      case "Enter": case " ": activate(r); break;
      default: return;
    }
    e.preventDefault();
    if (next) move(next);
  };

  const copy = async () => {
    clearTimeout(resetTimer.current);
    try {
      const text = JSON.stringify(value, null, 2) ?? String(value);
      if (onCopy) await onCopy(text);
      else await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      // The failure is shown and announced instead of being dropped.
      setStatus("failed");
    }
    resetTimer.current = setTimeout(() => setStatus(""), 2000);
  };

  const describe = (r: Row) => {
    const v = r.value;
    if (r.circular) return { text: "[circular]", spoken: "circular reference" };
    if (r.kind === "object") return r.count ? { text: `{ ${plural(r.count, "key")} }`, spoken: plural(r.count, "key") } : { text: "{ }", spoken: "empty" };
    if (r.kind === "array") return r.count ? { text: `[ ${plural(r.count, "item")} ]`, spoken: plural(r.count, "item") } : { text: "[ ]", spoken: "empty" };
    if (r.kind === "string") {
      const s = v as string;
      const cut = isLong(r) && !full[r.id];
      const shown = cut ? s.slice(0, maxStringLength) : s;
      return { text: JSON.stringify(shown).slice(0, -1) + (cut ? "…\"" : "\""), spoken: shown + (cut ? ", shortened, press Enter to show all" : isLong(r) ? ", press Enter to shorten" : "") };
    }
    const t = String(v);
    return { text: t, spoken: t };
  };

  return (
    <div className={cn("overflow-hidden rounded-card border border-line bg-sunken", className)}>
      <div className="flex items-center gap-2 border-b border-line py-1 ps-3 pe-1">
        <span id={labelId} className="min-w-0 flex-1 truncate text-small font-medium text-fg-muted">{label}</span>
        <span role="status" aria-live="polite" className={cn("text-small", status === "failed" ? "text-danger-fg" : "text-fg-muted")}>
          {status === "copied" ? "Copied" : status === "failed" ? "Could not copy" : ""}
        </span>
        <Button variant="ghost" size="sm" onClick={copy} leading={status === "copied" ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />} className="pointer-coarse:min-h-11">
          Copy
        </Button>
      </div>
      <div role="region" aria-labelledby={labelId} className="overflow-x-auto p-1 font-mono text-compact leading-5">
        <div role="tree" aria-labelledby={labelId} onKeyDown={onKeyDown} className="min-w-full">
          {rows.map((r) => {
            const open = r.count > 0 && isOpen(r.id, r.depth);
            const d = describe(r);
            const name = r.name === null ? "" : `${r.name}, `;
            return (
              <div
                key={r.id}
                ref={(el) => { if (el) items.current.set(r.id, el); else items.current.delete(r.id); }}
                role="treeitem"
                aria-level={r.depth + 1}
                aria-posinset={r.pos}
                aria-setsize={r.size}
                aria-expanded={r.count ? open : undefined}
                aria-label={`${name}${typeWord[r.kind]}, ${d.spoken}`}
                tabIndex={r.id === activeId ? 0 : -1}
                onFocus={() => setActive(r.id)}
                onClick={() => { move(r.id); activate(r); }}
                style={{ "--depth": r.depth } as CSSProperties}
                className={cn(
                  "flex items-start gap-1 rounded-md py-0.5 pe-2 hover:bg-hover pointer-coarse:min-h-11 pointer-coarse:items-center motion-safe:animate-fade",
                  "ps-[calc(var(--depth)*var(--spacing)*2.5+var(--spacing))] sm:ps-[calc(var(--depth)*var(--spacing)*4+var(--spacing))]",
                  (r.count > 0 || isLong(r)) && "cursor-pointer",
                )}
              >
                <span aria-hidden className="flex h-5 w-4 shrink-0 items-center justify-center text-fg-subtle">
                  {r.count > 0 && <ChevronIcon width={12} height={12} className={cn("motion-safe:transition-transform motion-safe:duration-[var(--dur-fast)]", open && "rotate-90")} />}
                </span>
                <span aria-hidden className="min-w-32 flex-1 wrap-anywhere">
                  {r.name !== null && (
                    <><span className={typeof r.name === "number" ? "text-fg-subtle" : "text-fg"}>{r.name}</span><span className="text-fg-subtle">: </span></>
                  )}
                  <span className={tint[r.kind]}>{d.text}</span>
                  {isLong(r) && <span className="ms-2 font-sans text-small text-accent-fg underline underline-offset-2">{full[r.id] ? "Show less" : "Show all"}</span>}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```
