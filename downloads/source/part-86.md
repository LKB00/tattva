## tattva/organisms/ReviewTable.tsx

```tsx
import { useMemo, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { AlertIcon } from "../lib/icons";

export type ReviewCellType = "text" | "number" | "date" | "choice" | "link";

export interface ReviewColumn {
  key: string;
  /** Column heading, also the name each cell is read with: "Amount". */
  label: string;
  type?: ReviewCellType;
  /** The choices for a "choice" column. */
  options?: string[];
  /** The cell may not be left empty. */
  required?: boolean;
  /** Shown read-only; the person cannot change it. */
  readOnly?: boolean;
}

export type ReviewValue = string | number;

export interface ReviewRow {
  id: string;
  values: Record<string, ReviewValue>;
}

export interface ReviewTableProps {
  /** What the rows are, read before the table: "Expenses the assistant found in your receipts". */
  label: string;
  columns: ReviewColumn[];
  /** The rows as the assistant drafted them. The table keeps the person's edits until they save or start over. */
  rows: ReviewRow[];
  /** Called with every row, edited, when the person saves. Nothing is saved before. */
  onSave: (rows: ReviewRow[]) => void;
  /** Called when the person throws the draft away. Without it there is no Discard button. */
  onDiscard?: () => void;
  /** Lets the person take a row out before saving. */
  allowRemove?: boolean;
  /** Says what saving does, in the button: "Save expenses". Default "Save". The line beside it counts the edits. */
  saveLabel?: string;
  /** Turns editing off and the button into a busy state while the rows are being saved. */
  saving?: boolean;
  /** Placeholder rows while the assistant is still drafting. */
  loading?: boolean;
  /** A message when saving failed. The edits stay, so the person can try again. */
  error?: ReactNode;
  className?: string;
}

const cellInput = "w-full min-w-28 rounded-field border border-transparent bg-transparent px-2 py-1.5 text-compact leading-5 text-fg transition-colors duration-[var(--dur-fast)] hover:border-line focus-visible:border-line-strong focus-visible:bg-surface focus-visible:outline-(length:--focus-width) focus-visible:outline-solid focus-visible:outline-offset-1 focus-visible:outline-[color:var(--focus-ring)] pointer-coarse:min-h-11 disabled:cursor-not-allowed";

/**
 * Rows the assistant drafted, for a person to check and fix before anything is saved. Every cell is a real field,
 * named by its column and row; changed cells are marked, required ones are checked, and one button saves them all,
 * with a line saying how many edits are waiting. Nothing is written until the person presses it.
 */
export function ReviewTable({ label, columns, rows, onSave, onDiscard, allowRemove = false, saveLabel = "Save", saving = false, loading = false, error, className }: ReviewTableProps) {
  const [edits, setEdits] = useState<Record<string, Record<string, ReviewValue>>>({});
  const [removed, setRemoved] = useState<string[]>([]);
  const [tried, setTried] = useState(false);
  const current = useMemo(() => rows.filter((r) => !removed.includes(r.id)).map((r) => ({ id: r.id, values: { ...r.values, ...edits[r.id] } })), [rows, edits, removed]);
  const original = (id: string, key: string) => rows.find((r) => r.id === id)?.values[key];
  const changed = (id: string, key: string) => edits[id] && key in edits[id] && String(edits[id][key]) !== String(original(id, key) ?? "");
  const editCount = current.reduce((n, r) => n + columns.filter((c) => changed(r.id, c.key)).length, 0) + removed.length;
  const missing = (r: ReviewRow, c: ReviewColumn) => !!c.required && String(r.values[c.key] ?? "").trim() === "";
  const problems = current.reduce((n, r) => n + columns.filter((c) => missing(r, c)).length, 0);
  const rowName = (r: ReviewRow, i: number) => String(r.values[columns[0]?.key] ?? "") || `row ${i + 1}`;
  const set = (id: string, key: string, v: ReviewValue) => setEdits((e) => ({ ...e, [id]: { ...e[id], [key]: v } }));
  const save = () => { setTried(true); if (problems === 0) onSave(current); };
  const reset = () => { setEdits({}); setRemoved([]); setTried(false); };

  if (loading) {
    return (
      <div aria-busy="true" aria-label={label} className={cn("grid gap-2 rounded-card border border-line bg-surface p-4", className)}>
        {Array.from({ length: 3 }, (_, i) => <div key={i} className="flex gap-3">{columns.map((c) => <Skeleton key={c.key} className="h-5 flex-1" />)}</div>)}
      </div>
    );
  }
  return (
    <section aria-label={label} className={cn("min-w-0 rounded-card border border-line bg-surface", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-compact leading-5">
          <caption className="sr-only">{label}. Every cell can be changed before saving.</caption>
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key} scope="col" className={cn("px-3 pt-3 pb-1.5 font-medium whitespace-nowrap text-fg-muted", c.type === "number" && "text-right")}>
                  {c.label}{c.required && <span aria-hidden> *</span>}
                </th>
              ))}
              {allowRemove && <th scope="col" className="w-0 px-3 pt-3 pb-1.5"><span className="sr-only">Remove</span></th>}
            </tr>
          </thead>
          <tbody>
            {current.length === 0 && (
              <tr><td colSpan={columns.length + (allowRemove ? 1 : 0)} className="px-3 py-6 text-center text-fg-muted">No rows left. Start over to bring them back.</td></tr>
            )}
            {current.map((r, i) => (
              <tr key={r.id}>
                {columns.map((c) => {
                  const v = r.values[c.key] ?? "";
                  const name = `${c.label}, ${rowName(r, i)}`;
                  const bad = tried && missing(r, c);
                  const edited = changed(r.id, c.key);
                  const common = { "aria-label": name, "aria-invalid": bad || undefined, disabled: saving, className: cn(cellInput, c.type === "number" && "text-right tabular-nums", bad && "border-danger") };
                  return (
                    <td key={c.key} className="relative px-1 py-0.5 align-top">
                      {c.readOnly ? <span className="block px-2 py-1.5 text-fg-muted">{String(v)}</span>
                        : c.type === "choice" ? (
                          <select {...common} value={String(v)} onChange={(e) => set(r.id, c.key, e.target.value)}>
                            {!c.options?.includes(String(v)) && <option value={String(v)}>{String(v) || "Choose"}</option>}
                            {c.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        ) : (
                          <input {...common} type={c.type === "number" ? "number" : c.type === "date" ? "date" : c.type === "link" ? "url" : "text"}
                            inputMode={c.type === "number" ? "decimal" : undefined} value={String(v)}
                            onChange={(e) => set(r.id, c.key, c.type === "number" && e.target.value !== "" ? Number(e.target.value) : e.target.value)} />
                        )}
                      {edited && <span className="pointer-events-none absolute top-1.5 right-1 size-1.5 rounded-full bg-accent"><span className="sr-only"> (edited)</span></span>}
                      {bad && <span className="block px-2 pb-1 text-small leading-4 text-danger-fg">Needed</span>}
                    </td>
                  );
                })}
                {allowRemove && (
                  <td className="px-2 py-0.5 align-top">
                    <Button variant="ghost" size="sm" disabled={saving} onClick={() => setRemoved((x) => [...x, r.id])} aria-label={`Remove ${rowName(r, i)}`}>Remove</Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line px-3 py-3">
        <p className="m-0 mr-auto text-compact leading-5 text-fg-muted" aria-live="polite">
          {tried && problems > 0 ? <span className="inline-flex items-center gap-1.5 text-danger-fg"><AlertIcon aria-hidden className="size-4" />{problems === 1 ? "One cell needs a value." : `${problems} cells need a value.`}</span>
            : editCount === 0 ? "Drafted by the assistant. Check each row, then save." : `${editCount === 1 ? "One change" : `${editCount} changes`}, not saved yet.`}
        </p>
        {editCount > 0 && <Button variant="ghost" size="sm" onClick={reset} disabled={saving}>Start over</Button>}
        {onDiscard && <Button variant="secondary" size="sm" onClick={onDiscard} disabled={saving}>Discard</Button>}
        <Button size="sm" onClick={save} busy={saving} busyLabel="Saving" disabled={current.length === 0}>{saveLabel}</Button>
      </div>
      {error && <p role="alert" className="m-0 flex items-start gap-1.5 px-3 pb-3 text-compact leading-5 text-danger-fg"><AlertIcon aria-hidden className="mt-0.5 size-4 shrink-0" />{error}</p>}
    </section>
  );
}
```

## tattva/organisms/RiskLimits.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Meter } from "../atoms/Meter";
import { cn } from "../lib/cn";
import { useFocusAfter } from "../lib/useFocusAfter";
import { InfoIcon, LockIcon, StopIcon } from "../lib/icons";

export interface RiskLimit {
  id: string;
  label: string;
  used: number;
  max: number;
  /** Text after the numbers, such as "trades". */
  unit?: string;
  /** Formats a number for display, such as a money format. The app owns money formatting. */
  format?: (n: number) => string;
}

export interface RiskLimitsProps {
  limits: RiskLimit[];
  /** True when trading is stopped. Every limit then says "Paused". */
  paused?: boolean;
  /** Why it is paused, in words. */
  pausedReason?: string;
  /** The kill switch. It asks once, in place, before calling this. Not shown while paused. */
  onKill?: () => void;
  killLabel?: string;
  /** A line of reassurance under the limits, such as "Exits are never blocked." */
  note?: ReactNode;
  className?: string;
}

const plain = (n: number) => n.toLocaleString("en-IN");

/** The limits that protect the person, each with a meter in words and numbers, and a kill switch that asks in place. */
export function RiskLimits({ limits, paused, pausedReason, onKill, killLabel = "Stop all trading", note, className }: RiskLimitsProps) {
  const uid = useId();
  const headId = `${uid}-head`, askId = `${uid}-ask`;
  const [asking, setAsking] = useState(false);
  // Button takes no ref, so focus is found through these wrappers.
  const killWrap = useRef<HTMLDivElement>(null);
  const keepWrap = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const back = useRef(false);
  const arm = useFocusAfter(paused, () => heading.current);

  useEffect(() => { if (asking) keepWrap.current?.querySelector<HTMLButtonElement>("button")?.focus(); }, [asking]);
  useEffect(() => { if (!asking && back.current) { back.current = false; killWrap.current?.querySelector<HTMLButtonElement>("button")?.focus(); } }, [asking]);

  const close = () => { back.current = true; setAsking(false); };
  const stop = () => { arm(); setAsking(false); onKill?.(); };
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); close(); } };

  return (
    <section aria-labelledby={headId} className={cn("flex w-full max-w-phone flex-col gap-4 rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <h3 id={headId} ref={heading} tabIndex={-1} className="text-lead leading-6 font-semibold text-fg">Risk limits</h3>
        {paused && <Badge tone="unsure"><LockIcon aria-hidden width={12} height={12} />Paused</Badge>}
      </div>
      {paused && pausedReason && <p className="text-body leading-5 text-fg-muted">{pausedReason}</p>}
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {limits.map((l) => {
          const fmt = l.format ?? plain;
          const ratio = l.max > 0 ? l.used / l.max : 0;
          const reached = ratio >= 1, near = !reached && ratio >= 0.8;
          const text = `${fmt(l.used)} of ${fmt(l.max)}${l.unit ? ` ${l.unit}` : ""}`;
          return (
            <li key={l.id} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3 text-body leading-5">
                <span className="font-medium text-fg">{l.label}</span>
                <span className="text-fg-muted tabular-nums">{text}</span>
              </div>
              <Meter value={Math.min(l.used, l.max)} max={l.max} label={l.label} valueText={text} />
              <div className="flex flex-wrap gap-1.5 empty:hidden">
                {reached && <Badge tone="unsure"><LockIcon aria-hidden width={12} height={12} />Limit reached</Badge>}
                {near && <Badge tone="unsure"><InfoIcon aria-hidden width={12} height={12} />Near the limit</Badge>}
                {paused && <Badge tone="neutral"><LockIcon aria-hidden width={12} height={12} />Paused</Badge>}
              </div>
            </li>
          );
        })}
      </ul>
      {note && <p className="text-body leading-5 text-fg-muted">{note}</p>}
      {onKill && !paused && (asking ? (
        <div role="group" aria-labelledby={askId} onKeyDown={onKey} className="flex flex-col gap-3 rounded-card border border-line-strong bg-sunken p-3">
          <p id={askId} className="text-body leading-5 text-fg">{killLabel}? This pauses new orders. Exits stay open.</p>
          <div className="flex gap-2">
            <Button variant="secondary" size="lg" className="flex-1 pointer-coarse:h-12" onClick={stop}>Stop trading</Button>
            <div ref={keepWrap} className="flex flex-1"><Button variant="secondary" size="lg" className="w-full pointer-coarse:h-12" onClick={close}>Keep trading</Button></div>
          </div>
        </div>
      ) : (
        <div ref={killWrap} className="flex"><Button variant="secondary" size="lg" className="w-full pointer-coarse:h-12" leading={<StopIcon aria-hidden width={14} height={14} />} onClick={() => setAsking(true)}>{killLabel}</Button></div>
      ))}
      <p role="status" aria-live="polite" className="sr-only">{paused ? `Trading is paused.${pausedReason ? ` ${pausedReason}` : ""}` : ""}</p>
    </section>
  );
}
```
