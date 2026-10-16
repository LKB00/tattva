## tattva/molecules/DatePicker.tsx

```tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Button } from "../atoms/Button";
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";

export interface DatePickerProps {
  /** The chosen day as an ISO date (yyyy-mm-dd), or null when nothing is chosen. */
  value: string | null;
  onChange: (value: string) => void;
  /** Earliest day that can be picked (ISO). Earlier days are shown but disabled. */
  min?: string;
  /** Latest day that can be picked (ISO). Later days are shown but disabled. Defaults to today. */
  max?: string;
  /** Today as an ISO date. Set it for tests and docs. Defaults to the real date on this device. */
  today?: string;
  /** Accessible name of the calendar grid, such as "Date it happened". */
  label: string;
  /** BCP 47 locale for month, weekday and day names. */
  locale?: string;
  className?: string;
}

// All date maths is in UTC on yyyy-mm-dd strings, so a day never shifts with the time zone.
const DAY = 86_400_000;
const toUTC = (iso: string) => { const [y, m, d] = iso.split("-").map(Number); return Date.UTC(y, m - 1, d); };
const toISO = (t: number) => new Date(t).toISOString().slice(0, 10);
const addDays = (iso: string, n: number) => toISO(toUTC(iso) + n * DAY);
const daysIn = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
const monthKey = (iso: string) => iso.slice(0, 7);
// Clamps the day so 31 Jan plus one month is 28 or 29 Feb, not 3 March.
function addMonths(iso: string, n: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1 + n, 1));
  return toISO(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), Math.min(d, daysIn(t.getUTCFullYear(), t.getUTCMonth()))));
}
const localToday = () => { const n = new Date(); return toISO(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())); };
const weekdayIndex = (iso: string) => (new Date(toUTC(iso)).getUTCDay() + 6) % 7; // Monday is 0

function monthCells(y: number, m: number): (string | null)[] {
  const first = toISO(Date.UTC(y, m, 1));
  const cells: (string | null)[] = Array(weekdayIndex(first)).fill(null);
  for (let d = 1; d <= daysIn(y, m); d++) cells.push(toISO(Date.UTC(y, m, d)));
  while (cells.length % 7) cells.push(null);
  return cells;
}

/** "Sat, 20 Sep 2026 · 6 days ago". Today and yesterday get their own words. */
function describe(iso: string, today: string, fmt: (iso: string, o: Intl.DateTimeFormatOptions) => string) {
  const label = `${fmt(iso, { weekday: "short" })}, ${fmt(iso, { day: "numeric" })} ${fmt(iso, { month: "short" })} ${fmt(iso, { year: "numeric" })}`;
  const ago = Math.round((toUTC(today) - toUTC(iso)) / DAY);
  const when = ago === 0 ? "Today" : ago === 1 ? "Yesterday" : ago > 1 ? `${ago} days ago` : ago === -1 ? "Tomorrow" : `in ${-ago} days`;
  return `${label} · ${when}`;
}

/**
 * An inline month calendar for dates that are almost always recent. It is not a pop-up. Days outside min and max are shown
 * but cannot be picked. It follows the WAI-ARIA date picker grid: one tab stop, arrow keys, Home, End and Page keys.
 */
export function DatePicker({ value, onChange, min, max, today: todayProp, label, locale = "en-IN", className }: DatePickerProps) {
  const today = todayProp ?? localToday();
  const latest = max ?? today;
  const start = value ?? today;
  const [view, setView] = useState(() => ({ y: Number(start.slice(0, 4)), m: Number(start.slice(5, 7)) - 1 }));
  const [focus, setFocus] = useState(start);
  const grid = useRef<HTMLDivElement>(null);
  const moved = useRef(false);

  const fmt = useMemo(() => {
    const cache = new Map<string, Intl.DateTimeFormat>();
    return (iso: string, o: Intl.DateTimeFormatOptions) => {
      const k = JSON.stringify(o);
      let f = cache.get(k);
      if (!f) { f = new Intl.DateTimeFormat(locale, { ...o, timeZone: "UTC" }); cache.set(k, f); }
      return f.format(toUTC(iso));
    };
  }, [locale]);

  const allowed = (iso: string) => iso <= latest && (!min || iso >= min);
  const cells = useMemo(() => monthCells(view.y, view.m), [view]);
  const rows = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
  const viewKey = `${view.y}-${String(view.m + 1).padStart(2, "0")}`;
  const firstOfView = `${viewKey}-01`;
  const prevDisabled = !!min && addDays(firstOfView, -1) < min;
  const nextDisabled = addMonths(firstOfView, 1) > latest;
  // The one day in the tab order: where focus was, else the chosen day, else the first allowed day of the month.
  const tabDay = [focus, value].find((d) => d && monthKey(d) === viewKey && allowed(d)) ?? cells.find((c) => c && allowed(c)) ?? null;

  // After a key press moves focus to a day (possibly in another month), focus its button once it has rendered.
  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    grid.current?.querySelector<HTMLElement>(`[data-day="${focus}"]`)?.focus();
  }, [focus, view]);

  // Follow a value changed from outside, such as the parent's own shortcut buttons.
  useEffect(() => {
    if (!value) return;
    setFocus(value);
    setView({ y: Number(value.slice(0, 4)), m: Number(value.slice(5, 7)) - 1 });
  }, [value]);

  const show = (iso: string) => setView({ y: Number(iso.slice(0, 4)), m: Number(iso.slice(5, 7)) - 1 });
  const shiftMonth = (by: number) => { const n = addMonths(firstOfView, by); show(n); };
  const pick = (iso: string) => { if (!allowed(iso)) return; setFocus(iso); onChange(iso); };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const from = (e.target as HTMLElement).closest<HTMLElement>("[data-day]")?.dataset.day;
    if (!from) return;
    let next: string;
    switch (e.key) {
      case "ArrowLeft": next = addDays(from, -1); break;
      case "ArrowRight": next = addDays(from, 1); break;
      case "ArrowUp": next = addDays(from, -7); break;
      case "ArrowDown": next = addDays(from, 7); break;
      case "Home": next = addDays(from, -weekdayIndex(from)); break;
      case "End": next = addDays(from, 6 - weekdayIndex(from)); break;
      case "PageUp": next = addMonths(from, e.shiftKey ? -12 : -1); break;
      case "PageDown": next = addMonths(from, e.shiftKey ? 12 : 1); break;
      default: return;
    }
    e.preventDefault();
    // A day outside the range is skipped to the nearest allowed day. If that is where we already are, nothing moves.
    if (min && next < min) next = min;
    if (next > latest) next = latest;
    if (next === from) return;
    moved.current = true;
    setFocus(next);
    show(next);
  };

  const quick = [{ text: "Today", iso: today }, { text: "Yesterday", iso: addDays(today, -1) }].filter((q) => allowed(q.iso));
  const heads = Array.from({ length: 7 }, (_, i) => {
    const iso = addDays("2024-01-01", i); // a Monday
    return { short: fmt(iso, { weekday: "narrow" }), long: fmt(iso, { weekday: "long" }) };
  });

  return (
    <div className={cn("w-fit max-w-full rounded-card border border-line bg-surface p-3", className)}>
      {quick.length > 0 && (
        <div className="flex gap-2 pb-3">
          {quick.map((q) => <Button key={q.text} variant="secondary" size="sm" className="pointer-coarse:h-11" onClick={() => pick(q.iso)}>{q.text}</Button>)}
        </div>
      )}
      <div className="flex items-center justify-between gap-2 pb-2">
        <p aria-live="polite" className="px-1 text-body leading-5 font-semibold text-fg">{fmt(firstOfView, { month: "long", year: "numeric" })}</p>
        <div className="flex gap-1">
          {([["Previous month", -1, prevDisabled], ["Next month", 1, nextDisabled]] as const).map(([name, by, off]) => (
            <button key={name} type="button" aria-label={name} disabled={off} onClick={() => shiftMonth(by)}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-control text-fg transition-colors duration-[var(--dur-fast)] hover:bg-hover disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent pointer-coarse:size-11">
              <ChevronIcon className={by < 0 ? "rotate-180" : undefined} />
            </button>
          ))}
        </div>
      </div>
      <div ref={grid} role="grid" aria-label={label} onKeyDown={onKey}>
        <div role="row" className="grid grid-cols-7">
          {heads.map((h) => (
            <div key={h.long} role="columnheader" className="flex h-8 items-center justify-center text-small leading-4 font-medium text-fg-muted">
              <abbr title={h.long} aria-hidden className="no-underline">{h.short}</abbr>
              <span className="sr-only">{h.long}</span>
            </div>
          ))}
        </div>
        {rows.map((row, r) => (
          <div key={r} role="row" className="grid grid-cols-7">
            {row.map((iso, c) => {
              if (!iso) return <div key={c} role="gridcell" aria-hidden className="size-10 pointer-coarse:size-11" />;
              const ok = allowed(iso), chosen = iso === value, isToday = iso === today;
              return (
                <div key={iso} role="gridcell" aria-selected={chosen} className="flex items-center justify-center">
                  <button type="button" data-day={iso} tabIndex={iso === tabDay ? 0 : -1} aria-disabled={!ok || undefined} aria-current={isToday ? "date" : undefined}
                    aria-label={`${fmt(iso, { weekday: "long" })}, ${fmt(iso, { day: "numeric" })} ${fmt(iso, { month: "long" })} ${fmt(iso, { year: "numeric" })}`}
                    onClick={() => pick(iso)}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border-2 text-body leading-5 tabular-nums transition-colors duration-[var(--dur-fast)] pointer-coarse:size-11",
                      isToday ? "border-fg" : "border-transparent",
                      chosen ? "bg-accent font-semibold text-on-accent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]"
                        : ok ? "cursor-pointer text-fg hover:bg-hover" : "cursor-not-allowed text-fg-subtle opacity-50",
                    )}>
                    {Number(iso.slice(8))}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p aria-live="polite" className={cn("px-1 pt-3 text-body leading-5", value ? "font-medium text-fg" : "text-fg-muted")}>
        {value ? describe(value, today, fmt) : "Pick a date"}
      </p>
    </div>
  );
}
```

## tattva/molecules/DiagramFigure.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { Button } from "../atoms/Button";
import { CodeBlock } from "./CodeBlock";

export interface DiagramFigureProps {
  /** Short alt. Names the diagram and says where the long description is. Becomes the figure's aria-label. */
  label: string;
  /** Visible caption. */
  caption: string;
  /** Long description, shown on the page for everyone. */
  description?: ReactNode;
  /** Text alternative shown under the diagram, such as an ordered list of steps. */
  alternative?: ReactNode;
  /** Textual definition of the diagram. Enables the view-source toggle. */
  source?: string;
  /** Language label for the source block. */
  sourceLanguage?: string;
  /** The diagram itself. */
  children: ReactNode;
}

/**
 * Accessible wrapper for a complex image. It renders a figure with a short aria-label, a caption,
 * a visible long description, an optional text alternative and a view-source toggle with copy.
 */
export function DiagramFigure({ label, caption, description, alternative, source, sourceLanguage = "text", children }: DiagramFigureProps) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const desc = `${uid}-desc`;
  const src = `${uid}-src`;
  return (
    <figure aria-label={label} className="m-0 min-w-0 rounded-card border border-line bg-surface p-4 sm:p-5">
      <div tabIndex={0} className="overflow-x-auto">{children}</div>
      <figcaption className="mt-4 border-t border-line pt-4">
        <p className="text-compact font-medium text-fg">{caption}</p>
        {description && <div id={desc} className="mt-1 max-w-[68ch] text-compact leading-6 text-fg-muted">{description}</div>}
      </figcaption>
      {alternative && <div className="mt-3 text-compact leading-6 text-fg-muted">{alternative}</div>}
      {source && (
        <div className="mt-3">
          <Button variant="secondary" size="sm" aria-expanded={open} aria-controls={src} onClick={() => setOpen((o) => !o)}>{open ? "Hide source" : "View source"}</Button>
          {open && <div id={src} className="mt-3"><CodeBlock code={source} language={sourceLanguage} /></div>}
        </div>
      )}
    </figure>
  );
}
```
