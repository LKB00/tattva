## tattva/organisms/ActionDraft.tsx

```tsx
import { useId, useRef } from "react";
import type { ReactNode } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Spinner } from "../atoms/Spinner";
import { InlineEdit } from "../molecules/InlineEdit";
import { cn } from "../lib/cn";
import { useFocusAfter } from "../lib/useFocusAfter";
import { AlertIcon, CheckIcon, RefreshIcon, XIcon } from "../lib/icons";

export interface ActionDraftField {
  id: string;
  label: string;
  value: string;
  kind?: "text" | "number";
  editable?: boolean;
  /** Shown after the value, such as "shares". */
  unit?: string;
  /** A message in words. While any field has one, Confirm is disabled. */
  error?: string;
}
export interface ActionDraftStep {
  id: string;
  label: string;
  state: "pending" | "running" | "done" | "failed";
  detail?: string;
}
export type ActionDraftStatus = "draft" | "confirming" | "working" | "done" | "failed";

export interface ActionDraftProps {
  status: ActionDraftStatus;
  /** What will happen, in one line, such as "Buy 10 RELIANCE at market". */
  title: string;
  summary?: string;
  fields: ActionDraftField[];
  onFieldChange: (id: string, value: string) => void;
  /** Facts the app worked out, such as margin and charges. Read only. */
  rows?: { label: string; value: ReactNode }[];
  /** Progress once confirmed. */
  steps?: ActionDraftStep[];
  /** Shown when status is done. */
  result?: ReactNode;
  /** Shown in words when status is failed. */
  error?: string;
  onConfirm: () => void;
  onDiscard: () => void;
  confirmLabel?: string;
  discardLabel?: string;
  className?: string;
}

const STATUS: Record<ActionDraftStatus, { text: string; tone: "neutral" | "unsure" | "success" | "danger" }> = {
  draft: { text: "Draft", tone: "neutral" },
  confirming: { text: "Confirming", tone: "unsure" },
  working: { text: "In progress", tone: "unsure" },
  done: { text: "Done", tone: "success" },
  failed: { text: "Failed", tone: "danger" },
};

function StepIcon({ state }: { state: ActionDraftStep["state"] }) {
  const words = { pending: "Waiting", running: "In progress", done: "Done", failed: "Failed" }[state];
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center" >
      {state === "pending" && <span aria-hidden className="size-3.5 rounded-full border border-line-strong forced-colors:border-[CanvasText]" />}
      {state === "running" && <RefreshIcon aria-hidden width={16} height={16} className="text-fg-muted motion-safe:animate-spin" />}
      {state === "done" && <CheckIcon aria-hidden width={16} height={16} className="text-success-fg" />}
      {state === "failed" && <XIcon aria-hidden width={16} height={16} className="text-danger-fg" />}
      <span className="sr-only">{words}. </span>
    </span>
  );
}

/**
 * The draft an AI proposes. The person reads it, edits what is wrong in place and confirms. The same card then shows
 * progress and the result. Nothing runs until Confirm is pressed, and this part never confirms by itself.
 */
export function ActionDraft({ status, title, summary, fields, onFieldChange, rows, steps, result, error, onConfirm, onDiscard, confirmLabel = "Confirm", discardLabel = "Not now", className }: ActionDraftProps) {
  const uid = useId();
  const titleId = `${uid}-title`, noteId = `${uid}-note`;
  const heading = useRef<HTMLHeadingElement>(null);
  const originals = useRef<Record<string, string>>({});
  for (const f of fields) if (!(f.id in originals.current)) originals.current[f.id] = f.value;
  const arm = useFocusAfter(status, () => heading.current);

  const isDraft = status === "draft";
  const blocked = fields.some((f) => !!f.error);
  const s = STATUS[status];
  const running = steps?.find((x) => x.state === "running");
  const live = status === "working" ? `In progress${running ? `: ${running.label}` : ""}.` : status === "done" ? "Done." : status === "confirming" ? "Confirming." : "";

  return (
    <section aria-labelledby={titleId} className={cn("flex w-full max-w-phone flex-col gap-3 rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <h3 id={titleId} ref={heading} tabIndex={-1} className="text-lead leading-6 font-semibold text-fg">{title}</h3>
        <Badge tone={s.tone} className="shrink-0">
          {status === "done" && <CheckIcon aria-hidden width={12} height={12} />}
          {status === "failed" && <XIcon aria-hidden width={12} height={12} />}
          {(status === "working" || status === "confirming") && <RefreshIcon aria-hidden width={12} height={12} className="motion-safe:animate-spin" />}
          {s.text}
        </Badge>
      </div>
      {summary && <p className="text-body leading-5 text-fg-muted">{summary}</p>}

      <div>
        {fields.map((f) => {
          const shown = f.unit ? `${f.value} ${f.unit}` : f.value;
          const edited = f.value !== originals.current[f.id];
          return (
            <div key={f.id} className="border-b border-line last:border-b-0">
              {isDraft && f.editable ? (
                <InlineEdit label={f.label} value={f.value} display={shown} originalValue={originals.current[f.id]} inputMode={f.kind === "number" ? "decimal" : "text"}
                  onChange={(v) => onFieldChange(f.id, v)} className="border-b-0" />
              ) : (
                <div className="py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-small leading-4 text-fg-muted">{f.label}</span>
                    {edited && <span className="rounded-control bg-sunken px-2 py-0.5 text-small leading-4 font-medium text-fg-muted forced-colors:border forced-colors:border-[CanvasText]">Edited</span>}
                  </div>
                  <p className="mt-0.5 text-lead leading-6 font-medium text-fg">{shown || <span className="font-normal text-fg-muted">Not set</span>}</p>
                </div>
              )}
              {f.error && <p className="-mt-1 pb-3 flex items-start gap-1.5 text-small leading-4 text-danger-fg"><AlertIcon className="mt-px shrink-0" width={14} height={14} />{f.error}</p>}
            </div>
          );
        })}
      </div>

      {rows && rows.length > 0 && (
        <dl className="m-0 flex flex-col gap-1.5 rounded-card bg-sunken p-3 text-body leading-5">
          {rows.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-3">
              <dt className="text-fg-muted">{r.label}</dt>
              <dd className="m-0 font-medium text-fg tabular-nums">{r.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {!isDraft && steps && steps.length > 0 && (
        <ol className="m-0 flex list-none flex-col gap-2 p-0">
          {steps.map((x) => (
            <li key={x.id} className="flex items-start gap-2.5 text-body leading-5">
              <StepIcon state={x.state} />
              <span className="flex min-w-0 flex-col">
                <span className={cn("text-fg", x.state === "pending" && "text-fg-muted")}>{x.label}</span>
                {x.detail && <span className="text-small leading-4 text-fg-muted">{x.detail}</span>}
              </span>
            </li>
          ))}
        </ol>
      )}

      {status === "done" && result != null && (
        <div className="flex items-start gap-2 rounded-card bg-success-soft p-3 text-body leading-5 text-success-fg">
          <CheckIcon aria-hidden className="mt-0.5 shrink-0" width={16} height={16} />
          <div className="min-w-0">{result}</div>
        </div>
      )}
      {status === "failed" && (
        <div role="alert" className="flex items-start gap-2 rounded-card bg-danger-soft p-3 text-body leading-5 text-danger-fg">
          <AlertIcon aria-hidden className="mt-0.5 shrink-0" width={16} height={16} />
          <p className="min-w-0">{error ?? "Something went wrong."}</p>
        </div>
      )}

      {(isDraft || status === "confirming") && (
        <div className="flex flex-col gap-2">
          <p id={noteId} className="text-body leading-5 text-fg-muted">
            {status === "confirming" ? "Confirming. Please wait." : blocked ? "Fix the fields marked above to continue." : "Nothing happens until you confirm."}
          </p>
          <div className="flex gap-2">
            <Button size="lg" className="flex-1 pointer-coarse:h-12" aria-describedby={noteId} disabled={!isDraft || blocked}
              leading={status === "confirming" ? <Spinner size={16} label="Confirming" /> : undefined} onClick={() => { arm(); onConfirm(); }}>
              {confirmLabel}
            </Button>
            <Button size="lg" variant="secondary" className="flex-1 pointer-coarse:h-12" disabled={!isDraft} onClick={() => { arm(); onDiscard(); }}>
              {discardLabel}
            </Button>
          </div>
        </div>
      )}
      <p role="status" aria-live="polite" className="sr-only">{live}</p>
    </section>
  );
}
```

## tattva/organisms/ActionLog.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, HistoryIcon, UndoIcon, XIcon } from "../lib/icons";
import { ApprovedByMark, type ApprovedBy } from "../atoms/ApprovedByMark";
import { Badge, type Tone } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { SegmentedControl } from "../atoms/SegmentedControl";

export type ActionStatus = "done" | "failed" | "undone" | "waiting";

export interface ActionLogItem {
  id: string;
  /** What was done, in plain words, such as "Moved 12 files to Archive". */
  action: string;
  /** Who did it, such as "Travel helper". */
  actor: string;
  status: ActionStatus;
  /** When, as text, such as "10:42" or "2 minutes ago". */
  time: string;
  approvedBy?: ApprovedBy;
  /** Minutes left to undo. Omit when it was never undoable and give notUndoableReason instead. 0 means the time is over. */
  undoMinutes?: number;
  /** Why this cannot be undone, such as "The email was already sent." */
  notUndoableReason?: string;
}

export interface ActionLogLabels {
  filter?: string;
  all?: string;
  done?: string;
  failed?: string;
  undone?: string;
  waiting?: string;
  undo?: string;
  empty?: string;
  cannotUndo?: string;
  undoEnded?: string;
  /** Receives the minutes left. */
  undoFor?: (minutes: number) => string;
}

export interface ActionLogProps {
  items: ActionLogItem[];
  /** Called when the person presses Undo. The row then shows Undone. */
  onUndo?: (id: string) => void;
  /** Starting filter. */
  defaultFilter?: ActionStatus | "all";
  labels?: ActionLogLabels;
  className?: string;
}

const tone: Record<ActionStatus, Tone> = { done: "success", failed: "danger", undone: "neutral", waiting: "info" };
const statusIcon: Record<ActionStatus, ReactNode> = {
  done: <CheckIcon width={11} height={11} />, failed: <XIcon width={11} height={11} />,
  undone: <UndoIcon width={11} height={11} />, waiting: <HistoryIcon width={11} height={11} />,
};
const statuses: ActionStatus[] = ["done", "failed", "undone", "waiting"];

/** Lasting record of what an agent did. Each row shows who did it, how it ended, who approved it, and Undo while time remains. */
export function ActionLog({ items, onUndo, defaultFilter = "all", labels, className }: ActionLogProps) {
  const l = {
    filter: "Show actions", all: "All", done: "Done", failed: "Failed", undone: "Undone", waiting: "Waiting", undo: "Undo",
    empty: "No actions match this filter.", cannotUndo: "Can't be undone", undoEnded: "Undo time is over",
    undoFor: (m: number) => `Undo for ${m} more ${m === 1 ? "minute" : "minutes"}`, ...labels,
  };
  const [filter, setFilter] = useState<ActionStatus | "all">(defaultFilter);
  const [undoneIds, setUndoneIds] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const uid = useId();
  const rows = items.map((i) => (undoneIds.includes(i.id) ? { ...i, status: "undone" as const } : i));
  const count = (s: ActionStatus) => rows.filter((r) => r.status === s).length;
  const shown = filter === "all" ? rows : rows.filter((r) => r.status === filter);
  const summary = `${rows.length} ${rows.length === 1 ? "action" : "actions"}: ${statuses.filter((s) => count(s) > 0).map((s) => `${count(s)} ${l[s].toLowerCase()}`).join(", ") || "none yet"}`;
  const name = (s: ActionStatus) => l[s];

  const undo = (r: ActionLogItem) => {
    setUndoneIds((x) => [...x, r.id]);
    setMessage(`Undone: ${r.action}`);
    onUndo?.(r.id);
  };
  const choose = (v: ActionStatus | "all") => {
    setFilter(v);
    const n = v === "all" ? rows.length : rows.filter((r) => r.status === v).length;
    setMessage(`${n} ${n === 1 ? "action" : "actions"} shown`);
  };

  return (
    <section aria-label="Action log" className={cn("rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="min-w-0 text-body leading-5 font-medium">{summary}</p>
        <div className="max-w-full overflow-x-auto">
          <SegmentedControl size="sm" label={l.filter} value={filter} onChange={choose}
            options={[{ value: "all", label: `${l.all} ${rows.length}` }, ...statuses.map((s) => ({ value: s, label: `${l[s]} ${count(s)}` }))]} />
        </div>
      </div>
      {shown.length === 0 ? (
        <p className="mt-3 text-body leading-5 text-fg-muted">{l.empty}</p>
      ) : (
        <ul className="mt-3 space-y-1.5">
          {shown.map((r) => (
            <li key={r.id} className="flex flex-wrap items-start gap-x-3 gap-y-2 rounded-card border border-line px-3 py-2.5">
              <div className="min-w-0 flex-1 basis-48">
                <p className="text-body leading-5 break-words">{r.action}</p>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-small leading-4 text-fg-muted">
                  <span>{r.actor}</span><span aria-hidden>·</span><span>{r.time}</span>
                </p>
                {r.approvedBy && <ApprovedByMark by={r.approvedBy} className="mt-1" />}
              </div>
              <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
                <Badge tone={tone[r.status]}>{statusIcon[r.status]}{name(r.status)}</Badge>
                {r.status === "done" && (
                  r.notUndoableReason ? (
                    <p id={`${uid}-${r.id}`} className="flex max-w-56 items-start gap-1 text-small leading-4 text-fg-muted">
                      <AlertIcon width={13} height={13} className="mt-0.5 shrink-0" /><span><span className="font-medium text-fg">{l.cannotUndo}.</span> {r.notUndoableReason}</span>
                    </p>
                  ) : r.undoMinutes && r.undoMinutes > 0 ? (
                    <Button size="sm" variant="secondary" leading={<UndoIcon width={13} height={13} />} onClick={() => undo(r)} aria-label={`${l.undo}: ${r.action}. ${l.undoFor(r.undoMinutes)}`}>{l.undoFor(r.undoMinutes)}</Button>
                  ) : r.undoMinutes === 0 ? (
                    <span className="text-small leading-4 text-fg-muted">{l.undoEnded}</span>
                  ) : null
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <p role="status" aria-live="polite" className="sr-only">{message}</p>
    </section>
  );
}
```
