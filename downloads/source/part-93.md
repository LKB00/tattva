## tattva/organisms/TakeGrid.tsx

```tsx
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { type HeadingLevel, headingTag } from "../lib/useFocusAfter";
import { Illustration } from "../atoms/Illustration";
import { Reveal } from "../atoms/Reveal";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { EmptyState } from "../molecules/EmptyState";
import { TakeCard, takeRatioClass, type TakeCardProps, type TakeRatio, type TakeStatus } from "../molecules/TakeCard";

export interface TakeGridItem extends Omit<TakeCardProps, "ratio" | "selectMode" | "selected" | "onSelect" | "announce" | "headingLevel" | "tabIndex" | "onKeyDown" | "ref" | "describedBy" | "compact"> {
  /** The prompt or request this take belongs to. Used as the group heading when groupBy is "request". */
  request?: string;
}

export type TakeGridDensity = "comfortable" | "compact";

export interface TakeGridProps {
  takes: TakeGridItem[];
  /** pick: choose one take. select: choose several, for example to download or delete. */
  mode?: "pick" | "select";
  /** Selected take ids. */
  value: string[];
  onChange: (ids: string[]) => void;
  /** One ratio for every tile, so rows stay even. */
  ratio?: TakeRatio;
  /** A heading per request, using each take's `request`. */
  groupBy?: "request" | "none";
  /** Tile size. Controlled when onDensityChange is passed. */
  density?: TakeGridDensity;
  onDensityChange?: (d: TakeGridDensity) => void;
  /** Shows the Comfortable and Compact control above the grid. */
  showDensityControl?: boolean;
  /** Called with the take id when Enter is pressed on a finished take, or its poster is pressed. */
  onOpen?: (id: string) => void;
  /** Takes requested but not yet known to the grid. Draws this many still placeholders. */
  loadingCount?: number;
  /** Replaces the default empty state. */
  empty?: ReactNode;
  /** Accessible name of the grid. */
  label?: string;
  /** The = and - keys change tile size while focus is in the grid. Set false to turn them off. */
  shortcuts?: boolean;
  /** Heading level of group headings. Each take's name is one level below. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/**
 * The one sentence the grid speaks. It only changes when a status changes, never with a percentage, so a screen reader
 * hears "2 of 4 takes ready" once instead of every card speaking on its own.
 */
export function takeGridSummary(takes: { status: TakeStatus; charge?: TakeGridItem["charge"] }[]) {
  if (!takes.length) return "";
  const n = (s: TakeStatus) => takes.filter((t) => t.status === s).length;
  const parts = [`${n("done")} of ${plural(takes.length, "take")} ready`];
  const working = n("queued") + n("generating") + n("finalising");
  if (working) parts.push(`${working} still working`);
  const blocked = takes.filter((t) => t.status === "blocked");
  if (blocked.length) {
    const free = blocked.every((t) => t.charge && (t.charge.state === "notCharged" || t.charge.state === "refunded"));
    parts.push(`${plural(blocked.length, "take")} blocked${free ? ", not charged" : ""}`);
  }
  if (n("failed")) parts.push(`${n("failed")} failed`);
  if (n("cancelled")) parts.push(`${n("cancelled")} cancelled`);
  if (n("rateLimited")) parts.push(`${n("rateLimited")} paused by the rate limit`);
  return parts.join(", ") + ".";
}

// Columns follow the grid's own width, so the grid works in a side panel as well as a full page.
const COLS: Record<"wide" | "tall", Record<TakeGridDensity, string>> = {
  wide: { comfortable: "grid-cols-1 @lg:grid-cols-2 @4xl:grid-cols-3", compact: "grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4" },
  tall: { comfortable: "grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4", compact: "grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 @4xl:grid-cols-6" },
};

const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

/**
 * A set of video takes where running and finished takes sit together. Arrow keys move between takes, Enter opens a
 * finished take, Space selects. One polite live region speaks for the whole grid.
 */
export function TakeGrid({
  takes, mode = "select", value, onChange, ratio = "16:9", groupBy = "none", density: densityProp, onDensityChange,
  showDensityControl = false, onOpen, loadingCount = 0, empty, label = "Takes", shortcuts = true, headingLevel = 3, className,
}: TakeGridProps) {
  const root = useRef<HTMLDivElement>(null);
  const keysId = useId();
  const [innerDensity, setInnerDensity] = useState<TakeGridDensity>("comfortable");
  const density = densityProp ?? innerDensity;
  const setDensity = (d: TakeGridDensity) => { if (densityProp === undefined) setInnerDensity(d); onDensityChange?.(d); };
  const [focusId, setFocusId] = useState<string | undefined>(undefined);
  const GroupH = headingTag(headingLevel);
  const cardLevel = (groupBy === "request" ? Math.min(headingLevel + 1, 6) : headingLevel) as HeadingLevel;

  const canSelect = (t: TakeGridItem) => mode === "select" || t.status === "done";
  const toggle = (t: TakeGridItem) => {
    if (!canSelect(t)) return;
    if (mode === "pick") onChange(value.includes(t.id) ? [] : [t.id]);
    else onChange(value.includes(t.id) ? value.filter((x) => x !== t.id) : [...value, t.id]);
  };

  // The tab stop: the take last focused, else the first selected, else the first take.
  const stopId = takes.some((t) => t.id === focusId) ? focusId : (takes.find((t) => value.includes(t.id)) ?? takes[0])?.id;

  const tiles = () => Array.from(root.current?.querySelectorAll<HTMLElement>("article[data-take-id]") ?? []);

  const onTileKey = (t: TakeGridItem) => (e: KeyboardEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget || e.altKey || e.ctrlKey || e.metaKey) return;
    const all = tiles();
    const from = all.indexOf(e.currentTarget);
    let to = -1;
    if (e.key === "ArrowRight") to = Math.min(from + 1, all.length - 1);
    else if (e.key === "ArrowLeft") to = Math.max(from - 1, 0);
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = all.length - 1;
    else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      // Same column in the next or previous row: the nearest tile by left edge among the closest row.
      const r = e.currentTarget.getBoundingClientRect();
      const down = e.key === "ArrowDown";
      const rows = all.map((el, i) => ({ i, b: el.getBoundingClientRect() })).filter(({ b }) => (down ? b.top > r.top + 1 : b.top < r.top - 1));
      if (rows.length) {
        const rowTop = down ? Math.min(...rows.map((x) => x.b.top)) : Math.max(...rows.map((x) => x.b.top));
        const row = rows.filter((x) => Math.abs(x.b.top - rowTop) < 2);
        to = row.reduce((best, x) => (Math.abs(x.b.left - r.left) < Math.abs(best.b.left - r.left) ? x : best)).i;
      } else to = from;
    } else if (e.key === "Enter") {
      if (t.status === "done") { e.preventDefault(); (onOpen ? onOpen(t.id) : t.onOpen?.()); }
      return;
    } else if (e.key === " ") {
      e.preventDefault();
      toggle(t);
      return;
    } else return;
    e.preventDefault();
    all[to]?.focus();
  };

  const onGridKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!shortcuts || e.altKey || e.ctrlKey || e.metaKey || isTyping(e.target)) return;
    if (e.key === "=" || e.key === "+") { e.preventDefault(); setDensity("comfortable"); }
    else if (e.key === "-") { e.preventDefault(); setDensity("compact"); }
  };

  const summary = takeGridSummary(takes);
  const cols = COLS[ratio === "9:16" ? "tall" : "wide"][density];

  if (!takes.length && !loadingCount) {
    return <>{empty ?? <EmptyState variant="first-use" art={<Illustration name="first-run" />} title="No takes yet" className={className}>Write a prompt and generate. Each take appears here while it is made.</EmptyState>}</>;
  }

  const groups: { key: string; title?: string; items: TakeGridItem[] }[] = [];
  if (groupBy === "request") {
    for (const t of takes) {
      const key = t.request ?? "";
      const g = groups.find((x) => x.key === key);
      if (g) g.items.push(t); else groups.push({ key, title: t.request, items: [t] });
    }
  } else groups.push({ key: "all", items: takes });

  let index = 0;
  const selectedCount = value.filter((id) => takes.some((t) => t.id === id)).length;

  return (
    <div ref={root} role="group" aria-label={label} onKeyDown={onGridKey}
      onFocus={(e) => { const id = (e.target as HTMLElement).closest<HTMLElement>("article[data-take-id]")?.dataset.takeId; if (id) setFocusId(id); }}
      className={cn("@container min-w-0", className)}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-small leading-4 text-fg-muted">
          <span role="status" aria-live="polite">{summary}</span>
          {selectedCount > 0 && <span> {mode === "pick" ? "1 picked." : `${selectedCount} selected.`}</span>}
        </p>
        {showDensityControl && (
          <SegmentedControl size="sm" label="Tile size" value={density} onChange={setDensity}
            options={[{ value: "comfortable", label: "Large" }, { value: "compact", label: "Small" }]} />
        )}
      </div>
      <p id={keysId} className="sr-only">Arrow keys move between takes. Enter opens a finished take. Space {mode === "pick" ? "picks" : "selects"} it.</p>
      <div className="space-y-5">
        {groups.map((g) => (
          <section key={g.key} aria-label={g.title}>
            {g.title && <GroupH className="mb-2 line-clamp-2 text-small font-medium text-fg">{g.title}</GroupH>}
            <ul className={cn("m-0 grid list-none gap-3 p-0", cols)}>
              {g.items.map((t) => {
                const i = index++;
                const { request: _r, ...card } = t;
                void _r;
                return (
                  <Reveal as="li" key={t.id} index={i} className="min-w-0">
                    <TakeCard {...card} ratio={ratio} announce={false} headingLevel={cardLevel}
                      tabIndex={t.id === stopId ? 0 : -1} onKeyDown={onTileKey(t)}
                      describedBy={keysId} compact={density === "compact"}
                      onOpen={t.status === "done" && (onOpen || t.onOpen) ? () => (onOpen ? onOpen(t.id) : t.onOpen?.()) : undefined}
                      selectMode={canSelect(t) ? (mode === "pick" ? "single" : "multi") : undefined}
                      selected={value.includes(t.id)} onSelect={() => toggle(t)} />
                  </Reveal>
                );
              })}
            </ul>
          </section>
        ))}
        {loadingCount > 0 && (
          <ul aria-label="Takes on the way" className={cn("m-0 grid list-none gap-3 p-0", cols)}>
            {Array.from({ length: loadingCount }, (_, i) => (
              <li key={i} className="min-w-0 overflow-hidden rounded-card border border-line bg-surface">
                <div aria-hidden className={cn("w-full bg-sunken", takeRatioClass(ratio))} />
                <div aria-hidden className="space-y-2 p-3"><div className="h-3 w-1/3 rounded-control bg-sunken" /><div className="h-3 w-2/3 rounded-control bg-sunken" /></div>
              </li>
            ))}
            <li className="sr-only">Loading {plural(loadingCount, "take")}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
```
