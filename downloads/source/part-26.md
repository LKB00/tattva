## tattva/molecules/DataTable.tsx

```tsx
import { useId, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export type DataRow = Record<string, ReactNode>;
export type SortDirection = "asc" | "desc";
export interface SortState { key: string; direction: SortDirection }
export type Direction = "up" | "down" | "flat";

export interface DataTableColumn {
  /** Key into each row object. */
  key: string;
  /** Visible column header. Include the unit, for example "p95 latency (ms)". */
  header: string;
  /** Right-align and use tabular figures. Set on every numeric column. */
  numeric?: boolean;
  /** Lets people sort by this column. The cell text is used unless sortValue is given. */
  sortable?: boolean;
  /** The raw number or text to sort by, for cells that show formatted text such as "₹1,200" or "+2.1%". */
  sortValue?: (row: DataRow) => number | string;
  /** Colours the cell as up or down and puts an arrow before it. Return undefined for no marker. The text must still carry its own sign. */
  direction?: (row: DataRow) => Direction | undefined;
}

export interface DataTableProps {
  /** Column definitions in display order. The first column is the row header. */
  columns: DataTableColumn[];
  /** One object per row, keyed by column key. Values are already formatted. */
  rows: DataRow[];
  /** Names the table for assistive technology and states what it holds. */
  caption: string;
  /** Keep the header row visible while the body scrolls. Pair with maxHeight. */
  stickyHeader?: boolean;
  /** Maximum body height in px before the table scrolls vertically. */
  maxHeight?: number;
  /** Row spacing. Dense fits more rows, for screens people scan all day. */
  density?: "comfortable" | "dense";
  /** Current sort, when your code keeps it. */
  sort?: SortState | null;
  /** Starting sort, when the table keeps it. */
  defaultSort?: SortState | null;
  /** Called when a sortable heading is pressed. Needed when you pass sort. */
  onSortChange?: (sort: SortState | null) => void;
  /** Called when a row is chosen. The row name becomes a button, so it works with the keyboard. */
  onRowClick?: (row: DataRow, index: number) => void;
  /** Key of the row to mark as the current one. Use with rowKey. */
  activeRowKey?: string;
  /** Gives each row a stable key. Defaults to the row's id value, then its position. */
  rowKey?: (row: DataRow, index: number) => string;
  /** What a narrow container does with the table. "scroll" keeps the columns and scrolls sideways. "stack" turns each row into a card, with the column name before each value, so nothing scrolls. */
  responsive?: "scroll" | "stack";
  /** Shown instead of the body when there are no rows. */
  emptyText?: string;
  className?: string;
}

const text = (v: ReactNode) => (typeof v === "string" || typeof v === "number" ? v : "");

function compare(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
}

function Arrow({ dir }: { dir: Direction }) {
  if (dir === "flat") return <span aria-hidden className="inline-block w-[0.7em] text-center">–</span>;
  return (
    <svg aria-hidden viewBox="0 0 10 10" className={cn("inline-block size-[0.7em] fill-current", dir === "down" && "rotate-180")}>
      <path d="M5 1.5 9 8.5H1Z" />
    </svg>
  );
}

function SortMark({ state }: { state: "none" | SortDirection }) {
  return (
    <svg aria-hidden viewBox="0 0 10 14" className="size-3 shrink-0">
      <path d="M5 1 8.5 5.5h-7Z" className={state === "asc" ? "fill-fg" : "fill-fg-subtle opacity-50"} />
      <path d="M5 13 1.5 8.5h7Z" className={state === "desc" ? "fill-fg" : "fill-fg-subtle opacity-50"} />
    </svg>
  );
}

/**
 * Semantic table counterpart to a chart, and a working data grid for screens of numbers. Numbers are right-aligned with
 * tabular figures, headings can sort, cells can carry an up or down marker, and the table scrolls horizontally in its own
 * region on narrow screens.
 */
export function DataTable({
  columns, rows, caption, stickyHeader, maxHeight, density = "comfortable", sort, defaultSort = null, onSortChange,
  onRowClick, activeRowKey, rowKey, responsive = "scroll", emptyText, className,
}: DataTableProps) {
  const [inner, setInner] = useState<SortState | null>(defaultSort);
  const controlled = sort !== undefined;
  const current = controlled ? sort : inner;
  const live = useId();

  const keyOf = (r: DataRow, i: number) => rowKey?.(r, i) ?? (typeof r.id === "string" || typeof r.id === "number" ? String(r.id) : String(i));

  const shown = useMemo(() => {
    if (!current) return rows.map((r, i) => ({ r, i }));
    const col = columns.find((c) => c.key === current.key);
    if (!col) return rows.map((r, i) => ({ r, i }));
    const val = (r: DataRow) => (col.sortValue ? col.sortValue(r) : (text(r[col.key]) as number | string));
    const dir = current.direction === "asc" ? 1 : -1;
    return rows.map((r, i) => ({ r, i })).sort((x, y) => dir * compare(val(x.r), val(y.r)) || x.i - y.i);
  }, [rows, columns, current]);

  const press = (key: string) => {
    // none -> ascending -> descending -> none
    const next: SortState | null = current?.key !== key ? { key, direction: "asc" } : current.direction === "asc" ? { key, direction: "desc" } : null;
    if (!controlled) setInner(next);
    onSortChange?.(next);
  };

  const pad = density === "dense" ? "px-3 py-1" : "px-3 py-2";
  const stack = responsive === "stack";
  const sortedCol = current ? columns.find((c) => c.key === current.key) : undefined;

  return (
    <div role="region" aria-label={caption} tabIndex={0}
      className={cn(stack && "@container", "relative overflow-auto rounded-card border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]", className)}
      style={maxHeight ? { maxHeight } : undefined}>
      <table role={stack ? "table" : undefined} className={cn("w-full border-collapse text-left text-compact leading-5", stack && "@max-md:block")}>
        <caption className="sr-only">{caption}</caption>
        <thead role={stack ? "rowgroup" : undefined} className={cn(stack && "@max-md:sr-only")}>
          <tr role={stack ? "row" : undefined}>
            {columns.map((c) => {
              const state = current?.key === c.key ? current.direction : "none";
              return (
                <th key={c.key} scope="col" role={stack ? "columnheader" : undefined} aria-sort={c.sortable ? (state === "asc" ? "ascending" : state === "desc" ? "descending" : "none") : undefined}
                  className={cn("bg-sunken text-micro font-medium whitespace-nowrap text-fg-muted", c.sortable ? "p-0" : pad, c.numeric && "text-right", stickyHeader && "sticky top-0 z-10")}>
                  {c.sortable ? (
                    <button type="button" onClick={() => press(c.key)}
                      className={cn("flex w-full items-center gap-1.5 px-3 py-2 text-micro font-medium text-fg-muted hover:bg-hover hover:text-fg pointer-coarse:min-h-11", c.numeric ? "justify-end" : "justify-start", density === "dense" && "py-1")}>
                      <span>{c.header}</span>
                      <SortMark state={state} />
                    </button>
                  ) : c.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody role={stack ? "rowgroup" : undefined} className={cn(stack && "@max-md:block")}>
          {shown.length === 0 && (
            <tr><td colSpan={columns.length} className="px-3 py-6 text-center text-fg-muted">{emptyText ?? "No rows."}</td></tr>
          )}
          {shown.map(({ r, i }) => {
            const k = keyOf(r, i);
            const active = activeRowKey !== undefined && activeRowKey === k;
            return (
              <tr key={k} role={stack ? "row" : undefined} aria-current={active ? "true" : undefined} onClick={onRowClick ? () => onRowClick(r, i) : undefined}
                className={cn("border-t border-line", stack && "@max-md:block @max-md:px-3 @max-md:py-2", onRowClick && "cursor-pointer hover:bg-hover", active && "bg-selected")}>
                {columns.map((c, j) => {
                  const dir = c.direction?.(r);
                  const content = dir ? (
                    <span className={cn("inline-flex items-center gap-1", dir === "up" && "text-up-fg", dir === "down" && "text-down-fg")}>
                      <Arrow dir={dir} /><span className="sr-only">{dir === "up" ? "Up " : dir === "down" ? "Down " : "Unchanged "}</span>{r[c.key]}
                    </span>
                  ) : r[c.key];
                  return j === 0 ? (
                    <th key={c.key} scope="row" role={stack ? "rowheader" : undefined} className={cn(pad, "font-medium whitespace-nowrap text-fg", c.numeric && "text-right [font-variant-numeric:tabular-nums]", stack && "@max-md:block @max-md:px-0 @max-md:text-left @max-md:text-body")}>
                      {onRowClick ? (
                        <button type="button" onClick={(e) => { e.stopPropagation(); onRowClick(r, i); }}
                          className="-mx-1 rounded px-1 text-left font-medium text-fg underline-offset-4 hover:underline pointer-coarse:min-h-11">{content}</button>
                      ) : content}
                    </th>
                  ) : (
                    <td key={c.key} role={stack ? "cell" : undefined} data-label={stack ? c.header : undefined} className={cn(pad, "whitespace-nowrap text-fg-muted", c.numeric && "text-right [font-variant-numeric:tabular-nums]", stack && "@max-md:flex @max-md:justify-between @max-md:gap-4 @max-md:px-0 @max-md:text-right @max-md:before:text-left @max-md:before:text-small @max-md:before:text-fg-muted @max-md:before:content-[attr(data-label)]")}>{content}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p id={live} role="status" aria-live="polite" className="sr-only">
        {current && sortedCol ? `Sorted by ${sortedCol.header}, ${current.direction === "asc" ? "ascending" : "descending"}.` : ""}
      </p>
    </div>
  );
}
```
