## tattva/molecules/ConnectorPermission.tsx

```tsx
import { useId, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { AlertIcon, EditIcon, EyeIcon, SendIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { InlineConfirm } from "./InlineConfirm";

export type AccessLevel = "read" | "write" | "send" | "delete";

export interface ConnectorAccess {
  id: string;
  /** What it can do, in plain words: "Read your email". */
  label: string;
  level: AccessLevel;
}

export interface ConnectorPermissionLabels {
  status?: Partial<Record<"connected" | "off" | "expired", string>>;
  canHeading?: string;
  levels?: Partial<Record<AccessLevel, string>>;
  connect?: string;
  reconnect?: string;
  disconnect?: string;
  /** Receives the app name. */
  disconnectQuestion?: (app: string) => string;
  keep?: string;
  /** Receives when it was last used. */
  lastUsed?: (when: string) => string;
}

export interface ConnectorPermissionProps {
  /** The app's name, such as Gmail. */
  app: string;
  /** The app's logo, about 24px. */
  icon?: ReactNode;
  /** Which account it is connected to. */
  account?: string;
  status: "connected" | "off" | "expired";
  /** What the assistant can do with it, one line each. */
  access: ConnectorAccess[];
  /** When the assistant last used it, such as "2 hours ago". */
  lastUsed?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  labels?: ConnectorPermissionLabels;
  /** Level of the part's heading, so it fits the page outline. Default 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const LEVEL_ICON: Record<AccessLevel, typeof EyeIcon> = { read: EyeIcon, write: EditIcon, send: SendIcon, delete: AlertIcon };

/**
 * One connected app, and exactly what the assistant can do with it. Each line says the action in plain words with a
 * mark for how far it reaches (see, change, send, delete); deleting stands out. Disconnecting asks once, in place.
 * An expired connection says so and offers to reconnect, instead of failing quietly.
 */
export function ConnectorPermission({ app, icon, account, status, access, lastUsed, onConnect, onDisconnect, labels, headingLevel = 3, className }: ConnectorPermissionProps) {
  const l = {
    canHeading: "The assistant can", connect: "Connect", reconnect: "Reconnect", disconnect: "Disconnect", keep: "Keep it",
    disconnectQuestion: (a: string) => `Disconnect ${a}?`, lastUsed: (w: string) => `Last used ${w}`, ...labels,
    status: { connected: "Connected", off: "Not connected", expired: "Needs you to sign in again", ...labels?.status },
    levels: { read: "See", write: "Change", send: "Send", delete: "Delete", ...labels?.levels },
  };
  const uid = useId();
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const tone = status === "connected" ? "success" : status === "expired" ? "warning" : "neutral";
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {icon && <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-control border border-line bg-bg">{icon}</span>}
        <div className="min-w-0 flex-1">
          <H id={`${uid}-h`} className="m-0 text-body leading-5 font-semibold text-fg">{app}</H>
          {account && <p className="m-0 truncate text-small leading-5 text-fg-muted">{account}</p>}
        </div>
        <Badge tone={tone}>{l.status[status]}</Badge>
      </div>
      {status !== "off" && access.length > 0 && (
        <div className="mt-4">
          <H2 className="m-0 text-small leading-4 font-medium text-fg-muted">{l.canHeading}</H2>
          <ul className="mt-2 space-y-2">
            {access.map((a) => {
              const Icon = LEVEL_ICON[a.level];
              return (
                <li key={a.id} className="flex items-start gap-2.5">
                  <Icon aria-hidden width={16} height={16} className={cn("mt-0.5 shrink-0", a.level === "delete" ? "text-danger-fg" : "text-fg-muted")} />
                  <span className="min-w-0 flex-1 text-body leading-6 text-fg">{a.label}</span>
                  <span className={cn("shrink-0 text-small leading-6", a.level === "delete" ? "font-medium text-danger-fg" : "text-fg-muted")}>{l.levels[a.level]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {lastUsed && status === "connected" && <p className="m-0 mt-4 text-small leading-5 text-fg-muted">{l.lastUsed(lastUsed)}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        {status === "connected" && onDisconnect && (
          <InlineConfirm onConfirm={onDisconnect} confirmLabel={l.disconnect} cancelLabel={l.keep} question={l.disconnectQuestion(app)} tone="danger">{l.disconnect}</InlineConfirm>
        )}
        {status !== "connected" && onConnect && <Button size="sm" onClick={onConnect}>{status === "expired" ? l.reconnect : l.connect}</Button>}
      </div>
    </section>
  );
}
```

## tattva/molecules/ContextChip.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { keepFocus } from "../lib/focus";
import { ChevronIcon, XIcon } from "../lib/icons";

/**
 * Scope control that lives inside the composer: "what is this chat about?"
 * With onClick it opens a picker (shows a chevron). With onClear it is a removable label; after clearing, focus moves
 * to what is left of the pill, else the next control, else the message box (or to `focusAfterClear`).
 */
export function ContextChip({ icon, children, onClick, onClear, clearLabel = "Clear context", focusAfterClear, className }: { icon?: ReactNode; children: ReactNode; onClick?: () => void; onClear?: () => void; clearLabel?: string; focusAfterClear?: () => HTMLElement | null; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const body = (
    <>
      {icon && <span className="text-fg-subtle">{icon}</span>}
      <span>{children}</span>
      {onClick && <ChevronIcon className="size-3 rotate-90 text-fg-subtle" />}
    </>
  );
  const base = cn("inline-flex h-7 items-center gap-1.5 rounded-control border border-line bg-surface px-3 text-small leading-4 font-medium text-fg", className);
  return (
    <span ref={ref} className={cn("inline-flex items-center", onClear && "rounded-control bg-hover pr-1")}>
      {onClick
        ? <button type="button" onClick={onClick} className={cn(base, "cursor-pointer hover:bg-bg")}>{body}</button>
        : <span className={cn(base, onClear && "border-transparent bg-transparent pr-1")}>{body}</span>}
      {onClear && <button type="button" aria-label={clearLabel} onClick={() => { onClear(); keepFocus(ref.current, focusAfterClear); }} className="flex size-5 items-center justify-center rounded-control text-fg-subtle hover:bg-line cursor-pointer"><XIcon width={12} height={12} /></button>}
    </span>
  );
}

/** @deprecated Renamed to ContextChip in 0.29.0, to match the name other design systems use. The old name goes in 0.31.0. */
export const ContextPill = ContextChip;
```

## tattva/molecules/ContextMeter.tsx

```tsx
import { CheckIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Meter } from "../atoms/Meter";
import { cn } from "../lib/cn";

export interface ContextMeterProps {
  /** Share of the context window in use, 0 to 100. */
  percent: number;
  /** Text beside the bar. Defaults to "68% of context". */
  valueText?: string;
  /** At or above this percent the bar turns amber and Summarize appears. */
  summarizeAt?: number;
  /** Called when the person chooses Summarize. The action stays hidden when omitted. */
  onSummarize?: () => void;
  /** Disables Summarize while a summary is being made. */
  summarizing?: boolean;
  /** Shows a compaction marker with this text, for example "Earlier messages summarized". */
  compactionNote?: string;
  /** Reason shown beside the Summarize action. */
  warnText?: string;
  summarizeLabel?: string;
  /** Accessible name for the meter. */
  label?: string;
  className?: string;
}

/** Context-window usage. Stays neutral until the limit is near, then says why and offers to summarize. */
export function ContextMeter({ percent, valueText, summarizeAt = 85, onSummarize, summarizing, compactionNote, warnText = "Close to the limit.", summarizeLabel = "Summarize", label = "Context used", className }: ContextMeterProps) {
  const pct = Math.round(Math.max(0, Math.min(100, percent)));
  const text = valueText ?? `${pct}% of context`;
  const near = pct >= summarizeAt;
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-3 text-small leading-4">
        <span className="text-fg-muted">{text}</span>
        {near && <span className="text-attention-fg">{warnText}</span>}
      </div>
      <Meter label={label} value={pct} warnAt={summarizeAt / 100} valueText={text} />
      {(near && onSummarize) && (
        <Button size="sm" variant="secondary" disabled={summarizing} onClick={onSummarize}>{summarizing ? "Summarizing" : summarizeLabel}</Button>
      )}
      {compactionNote && (
        <p className="flex items-center gap-1.5 border-t border-line pt-2 text-small leading-4 text-fg-muted"><CheckIcon width={12} height={12} />{compactionNote}</p>
      )}
    </div>
  );
}
```

## tattva/molecules/ContinueNotice.tsx

```tsx
import { cn } from "../lib/cn";
import { InfoIcon, AlertIcon } from "../lib/icons";
import { Button } from "../atoms/Button";

export interface ContinueNoticeLabels {
  length?: string;
  stopped?: string;
  lost?: string;
  continue?: string;
  retry?: string;
}

export interface ContinueNoticeProps {
  /** Why the reply ended early: it hit the length limit, the person pressed Stop, or the connection dropped. */
  reason: "length" | "stopped" | "lost";
  /** Picks up where the reply ended (or, after a lost connection, tries again). */
  onContinue: () => void;
  /** True while the continuation is starting. The button keeps its place and ignores presses. */
  busy?: boolean;
  labels?: ContinueNoticeLabels;
  className?: string;
}

/**
 * One quiet line under a reply that ended early, saying why in plain words and offering to carry on. A reply cut
 * off by the length limit otherwise just stops mid-sentence, and people cannot tell whether it finished.
 */
export function ContinueNotice({ reason, onContinue, busy, labels, className }: ContinueNoticeProps) {
  const l = {
    length: "The reply stopped at the length limit.", stopped: "You stopped this reply.", lost: "The connection dropped before the reply finished.",
    continue: "Continue", retry: "Try again", ...labels,
  };
  const Icon = reason === "lost" ? AlertIcon : InfoIcon;
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      <p className="m-0 inline-flex items-center gap-1.5 text-small leading-5 text-fg-muted">
        <Icon aria-hidden width={14} height={14} className="shrink-0" />{l[reason]}
      </p>
      <Button size="sm" variant="secondary" busy={busy} busyLabel={reason === "lost" ? l.retry : l.continue} onClick={onContinue}>{reason === "lost" ? l.retry : l.continue}</Button>
    </div>
  );
}
```

## tattva/molecules/Countdown.tsx

```tsx
import { cn } from "../lib/cn";
import { AlertIcon } from "../lib/icons";
import { Meter } from "../atoms/Meter";

export interface CountdownProps {
  /** ISO date, such as 2026-10-27. Only the calendar day is used. */
  deadline: string;
  /** ISO date to count from. Defaults to today on this device. Pass it in docs and tests. */
  today?: string;
  /** What the date is, such as "They must reply by". */
  label: string;
  /** ISO date the clock started. Turns on the time bar. */
  start?: string;
  /** Only days for now. */
  unit?: "days";
  /** Shown with an icon once the deadline has passed. */
  missedLabel?: string;
  /** Turns an ISO date into the large text. Defaults to a long en-IN date. */
  formatDate?: (iso: string) => string;
  /** Amber treatment for a deadline that is due or missed and needs a person to act. Never on by default. */
  needsAction?: boolean;
  /** Text of the amber chip. */
  actionText?: string;
  className?: string;
}

const DAY = 86_400_000;

/** Whole days since 1970 for the calendar day in an ISO string. Plain UTC maths, so time zones and daylight saving cannot shift it. */
function dayNumber(iso: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return NaN;
  return Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY);
}

function localToday(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

const longDate = (iso: string) => {
  const n = dayNumber(iso);
  return Number.isNaN(n) ? "—" : new Date(n * DAY).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
};

const plural = (n: number) => `${n} ${n === 1 ? "day" : "days"}`;

/** The deadline, first and biggest: the date in large text, the days left in words, and an optional bar of time used. */
export function Countdown({ deadline, today, label, start, missedLabel = "Deadline passed", formatDate = longDate, needsAction, actionText = "Needs action", className }: CountdownProps) {
  const end = dayNumber(deadline);
  const now = dayNumber(today ?? localToday());
  const left = end - now;
  const valid = !Number.isNaN(left);
  const missed = valid && left < 0;
  const begin = start ? dayNumber(start) : NaN;
  const total = end - begin;
  const showBar = valid && total > 0;
  const used = showBar ? Math.max(0, Math.min(total, now - begin)) : 0;
  const attention = needsAction && valid && left <= 0;
  const words = !valid ? "" : missed ? `${plural(-left)} past` : left === 0 ? "Due today" : `${plural(left)} left`;
  return (
    <div role="group" aria-label={label} className={cn("min-w-0 rounded-card border bg-surface p-4", attention ? "border-attention" : "border-line", className)}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-small leading-5 text-fg-muted">{label}</p>
        {needsAction && <span className="inline-flex shrink-0 items-center gap-1 rounded-control bg-attention-soft px-2 py-0.5 text-micro leading-4 font-medium text-attention-fg"><AlertIcon width={12} height={12} />{actionText}</span>}
      </div>
      <p className="mt-1 text-title-lg leading-9 font-semibold tracking-snug tabular-nums text-fg [overflow-wrap:anywhere]">
        {valid ? <time dateTime={deadline.slice(0, 10)}>{formatDate(deadline.slice(0, 10))}</time> : "—"}
      </p>
      {valid && (
        <p className="mt-1 flex flex-wrap items-center gap-x-2 text-body leading-6 text-fg">
          {missed && <span className="inline-flex items-center gap-1 font-medium"><AlertIcon aria-hidden width={14} height={14} className="shrink-0" />{missedLabel}</span>}
          <span className={cn("tabular-nums", missed ? "text-fg-muted" : "font-medium")}>{missed && <span aria-hidden>{"· "}</span>}{words}</span>
        </p>
      )}
      {showBar && (
        <Meter className="mt-3" label="Time used" value={used} max={total} warnAt={attention ? 0 : undefined}
          valueText={`${used} of ${total} days used`} />
      )}
    </div>
  );
}
```
