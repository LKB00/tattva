## tattva/molecules/Collapsible.tsx

```tsx
import { useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";
import { usePresence } from "../hooks/usePresence";

export interface CollapsibleProps {
  header: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * A header that shows and hides what is under it. The content grows open in --dur-base and closes faster in --dur-fast.
 * Closed content is hidden from everyone, not just from sight. Under reduced motion it simply appears.
 */
export function Collapsible({ header, children, defaultOpen = false, className }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const { present } = usePresence(open);
  // `shown` turns on one frame after the content mounts, so the height has a closed state to grow from.
  const [shown, setShown] = useState(defaultOpen);
  // Clipping is only needed while the height moves; once open, focus rings inside are not cut off.
  const [settled, setSettled] = useState(defaultOpen);
  useEffect(() => {
    setSettled(false);
    if (!open) { setShown(false); return; }
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, [open]);
  return (
    <div className={className}>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 text-left">
        <ChevronIcon className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)]", open && "rotate-90")} />
        {header}
      </button>
      <div id={id} hidden={!present} onTransitionEnd={(e) => { if (e.target === e.currentTarget && open) setSettled(true); }}
        className={cn("grid transition-[grid-template-rows,opacity] ease-(--ease-arrive)", shown ? "grid-rows-[1fr] opacity-100 duration-(--dur-base)" : "grid-rows-[0fr] opacity-0 duration-(--dur-fast)")}>
        <div className={cn("min-h-0", !(shown && settled) && "overflow-hidden")}>{children}</div>
      </div>
    </div>
  );
}
```

## tattva/molecules/Combobox.tsx

```tsx
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { TextField } from "../atoms/TextField";
import { cn } from "../lib/cn";
import { SearchIcon } from "../lib/icons";

export interface ComboboxOption {
  value: string;
  label: string;
  /** Small text on the right of the row, such as a category. */
  hint?: string;
}

export interface ComboboxProps {
  /** The text in the box. Always the text, never an id. */
  value: string;
  /** Called on every keystroke, and with the option's label when a suggestion is picked. */
  onChange: (value: string) => void;
  options: ComboboxOption[];
  /** Labels shown before typing. A label that matches an option uses that option's value. */
  popular?: string[];
  /** Called when a suggestion is picked ("option") or the typed text is accepted ("typed"). */
  onSelect?: (value: string, how: "option" | "typed") => void;
  /** Accessible name of the box. */
  label: string;
  placeholder?: string;
  /** Text of the last row while typing, which keeps exactly what was typed. */
  useTypedLabel?: (typed: string) => string;
  /** Line under the popular names, saying any name can be typed. */
  emptyHint?: string;
  invalid?: boolean;
  disabled?: boolean;
  /** Set by Field. */
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  required?: boolean;
  className?: string;
}

type Row = { key: string; value: string; label: string; hint?: string; how: "option" | "typed" };
const MAX = 6;

/**
 * A search box with suggestions that is never a closed list. Whatever is typed can be used. WAI-ARIA combobox with list
 * autocomplete: focus stays in the input and the active option is named with aria-activedescendant.
 */
export function Combobox({ value, onChange, options, popular, onSelect, label, placeholder, useTypedLabel, emptyHint = "Not here? Type its name above.", invalid, disabled, id, className, ...aria }: ComboboxProps) {
  const uid = useId();
  const listId = `${uid}-list`;
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [active, setActive] = useState(-1);
  const list = useRef<HTMLUListElement>(null);

  const typed = value.trim();
  const q = typed.toLowerCase();
  const rows = useMemo<Row[]>(() => {
    if (!typed) {
      return (popular ?? []).map((p) => {
        const o = options.find((x) => x.label.toLowerCase() === p.toLowerCase());
        return { key: `p-${p}`, value: o?.value ?? p, label: o?.label ?? p, hint: o?.hint, how: "option" as const };
      });
    }
    const starts = options.filter((o) => o.label.toLowerCase().startsWith(q));
    const contains = options.filter((o) => !o.label.toLowerCase().startsWith(q) && o.label.toLowerCase().includes(q));
    const found: Row[] = [...starts, ...contains].slice(0, MAX).map((o) => ({ key: `o-${o.value}`, value: o.value, label: o.label, hint: o.hint, how: "option" as const }));
    // An exact match is already in the list, so a second row saying the same thing would only confuse.
    if (!found.some((r) => r.label.toLowerCase() === q)) found.push({ key: "typed", value: typed, label: useTypedLabel ? useTypedLabel(typed) : `Use “${typed}”`, how: "typed" });
    return found;
  }, [typed, q, options, popular, useTypedLabel]);

  const open = focused && !dismissed && !disabled && (typed ? true : rows.length > 0);
  const suggestions = rows.filter((r) => r.how === "option");

  useEffect(() => {
    if (active >= 0) list.current?.children[active]?.scrollIntoView?.({ block: "nearest" });
  }, [active]);

  const pick = (r: Row) => {
    if (r.how === "option") { onChange(r.label); onSelect?.(r.value, "option"); }
    else { if (r.value !== value) onChange(r.value); onSelect?.(r.value, "typed"); }
    setDismissed(true);
    setActive(-1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!rows.length) return;
      e.preventDefault();
      if (!open) { setDismissed(false); setActive(-1); return; }
      const n = rows.length;
      setActive(e.key === "ArrowDown" ? (active + 1) % n : active <= 0 ? n - 1 : active - 1);
    } else if (e.key === "Enter") {
      if (!typed) return;
      e.preventDefault();
      const top = suggestions[0];
      if (open && active >= 0) pick(rows[active]);
      // "ama" then Enter means Amazon: a typed prefix of the top suggestion picks it.
      else if (top && top.label.toLowerCase().startsWith(q)) pick(top);
      else pick({ key: "typed", value: typed, label: typed, how: "typed" });
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      e.stopPropagation();
      setDismissed(true);
      setActive(-1);
    }
  };

  const status = !open ? "" : typed ? (suggestions.length ? `${suggestions.length} ${suggestions.length === 1 ? "suggestion" : "suggestions"}. Use the arrow keys, or press Enter to use what you typed.` : "No suggestions. Press Enter to use what you typed.") : `${rows.length} popular. Or type any name.`;

  return (
    <div className={cn("relative w-full", className)}>
      <TextField
        {...aria} id={id} type="text" role="combobox" autoComplete="off" aria-label={label} aria-expanded={open} aria-controls={listId} aria-autocomplete="list"
        aria-activedescendant={open && active >= 0 ? `${uid}-o${active}` : undefined}
        leading={<SearchIcon />} placeholder={placeholder} value={value} invalid={invalid} disabled={disabled}
        onChange={(e) => { onChange(e.target.value); setDismissed(false); setActive(-1); }}
        onFocus={() => setFocused(true)} onBlur={() => { setFocused(false); setDismissed(false); setActive(-1); }} onKeyDown={onKeyDown} />
      <div className={cn("absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-overlay border border-line bg-raised py-1 shadow-md", !open && "hidden")}>
        <ul ref={list} id={listId} role="listbox" aria-label={`${label} suggestions`} className="m-0 list-none p-0">
          {open && rows.map((r, i) => (
            // mousedown is stopped so the input keeps focus and the list does not close before the click lands.
            <li key={r.key} id={`${uid}-o${i}`} role="option" aria-selected={i === active} onMouseDown={(e) => e.preventDefault()} onClick={() => pick(r)}
              className={cn(
                "flex min-h-9 cursor-pointer items-center justify-between gap-3 px-3 py-1.5 text-body leading-5 text-fg pointer-coarse:min-h-11",
                r.how === "typed" && suggestions.length > 0 && "mt-1 border-t border-line pt-2",
                i === active ? "bg-hover shadow-[inset_3px_0_0_var(--fg)] forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]" : "hover:bg-hover",
              )}>
              <span className={r.how === "typed" ? "font-medium" : undefined}>{r.label}</span>
              {r.hint && <span className="shrink-0 text-small leading-4 text-fg-muted">{r.hint}</span>}
            </li>
          ))}
        </ul>
        {open && !typed && <p className="px-3 pt-1.5 pb-1 text-small leading-4 text-fg-muted">{emptyHint}</p>}
      </div>
      <p role="status" aria-live="polite" className="sr-only">{status}</p>
    </div>
  );
}
```

## tattva/molecules/ConfidenceIndicator.tsx

```tsx
import { cn } from "../lib/cn";
import { Badge } from "../atoms/Badge";

export type ConfidenceLevel = "low" | "medium" | "high";
/** Amber marks low confidence because a person should verify. Medium is neutral: it asks for nothing. */
const map: Record<ConfidenceLevel, { tone: "neutral" | "warning" | "success"; text: string; bars: number }> = {
  low: { tone: "warning", text: "Low confidence. Verify before relying on this.", bars: 1 },
  medium: { tone: "neutral", text: "Moderate confidence. Spot-check key facts.", bars: 2 },
  high: { tone: "success", text: "High confidence, supported by multiple sources.", bars: 3 },
};

/** Never convey confidence by colour alone: bars + text label are always present. */
export function ConfidenceIndicator({ level, showText = true }: { level: ConfidenceLevel; showText?: boolean }) {
  const m = map[level];
  return (
    <span className="inline-flex items-center gap-2" title={m.text}>
      <span className="flex items-end gap-0.5" aria-hidden>
        {[1, 2, 3].map((b) => (
          <span key={b} className={cn("w-1 origin-bottom animate-grow-y rounded-sm", b <= m.bars ? { low: "bg-attention", medium: "bg-fg-subtle", high: "bg-success" }[level] : "bg-line-strong")} style={{ height: 6 + b * 3, animationDelay: `${b * 60}ms` }} />
        ))}
      </span>
      <Badge tone={m.tone}>{level[0].toUpperCase() + level.slice(1)} confidence</Badge>
      {showText && <span className="sr-only">{m.text}</span>}
    </span>
  );
}
```
