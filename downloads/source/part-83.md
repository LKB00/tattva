## tattva/organisms/ReEntryRecap.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { ChevronIcon, CheckIcon, HistoryIcon } from "../lib/icons";
import { AttentionDot } from "../atoms/AttentionDot";
import { Button } from "../atoms/Button";

export interface RecapNeed {
  id: string;
  /** What needs the person, in plain words. */
  text: string;
  actionLabel: string;
  onAction?: () => void;
}

export interface RecapChange {
  label: string;
  count: number;
}

export interface ReEntryRecapLabels {
  heading?: string;
  /** Receives the time away, such as "2 hours". */
  away?: (time: string) => string;
  finished?: string;
  needsYou?: string;
  changed?: string;
  nothingFinished?: string;
  nothingNeeded?: string;
  showLog?: string;
}

export interface ReEntryRecapProps {
  /** How long the person was away, such as "2 hours". */
  awayFor: string;
  /** Things that finished while the person was away. */
  finished?: string[];
  /** Things that now wait on the person. */
  needsYou?: RecapNeed[];
  /** What changed, as counts: "Files edited 4". */
  changes?: RecapChange[];
  /** Opens the full log. The button is hidden when omitted. */
  onShowLog?: () => void;
  defaultOpen?: boolean;
  labels?: ReEntryRecapLabels;
  /** Level of the part's own heading, so it fits the page outline. Default 3; the inner group headings are one level below. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * "While you were away" card shown when a person comes back to a run. It lists what finished, what
 * needs the person (with actions), what changed as counts, and a way to open the full log. The
 * whole card folds down to its header.
 */
export function ReEntryRecap({ awayFor, finished = [], needsYou = [], changes = [], onShowLog, defaultOpen = true, labels, headingLevel = 3, className }: ReEntryRecapProps) {
  const l = {
    heading: "While you were away", away: (t: string) => `You were away for ${t}`, finished: "Finished", needsYou: "Needs you", changed: "What changed",
    nothingFinished: "Nothing has finished yet.", nothingNeeded: "Nothing needs you.", showLog: "Show full log", ...labels,
  };
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const Section = ({ title, children }: { title: string; children: ReactNode }) => (
    <div><H2 className="mb-1.5 text-small leading-4 font-medium text-fg-muted">{title}</H2>{children}</div>
  );
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("rounded-card border border-line bg-surface", className)}>
      <H id={`${uid}-h`} className="m-0">
        <button type="button" aria-expanded={open} aria-controls={`${uid}-body`} onClick={() => setOpen(!open)}
          className="flex w-full cursor-pointer items-center gap-2.5 rounded-card px-4 py-3 text-left">
          <HistoryIcon className="shrink-0 text-fg-muted" />
          <span className="min-w-0 flex-1">
            <span className="block text-body leading-5 font-medium">{l.heading}</span>
            <span className="block text-small leading-4 font-normal text-fg-muted">{l.away(awayFor)}</span>
          </span>
          <ChevronIcon className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)] motion-reduce:transition-none", open && "rotate-90")} />
        </button>
      </H>
      <div id={`${uid}-body`} hidden={!open} className="space-y-4 border-t border-line px-4 py-3">
        <Section title={l.finished}>
          {finished.length ? (
            <ul className="space-y-1">{finished.map((f) => (
              <li key={f} className="flex items-start gap-2 text-body leading-5"><CheckIcon className="mt-0.5 shrink-0 text-success" /><span className="min-w-0 break-words">{f}</span></li>
            ))}</ul>
          ) : <p className="text-body leading-5 text-fg-muted">{l.nothingFinished}</p>}
        </Section>
        <Section title={l.needsYou}>
          {needsYou.length ? (
            <ul className="space-y-1.5">{needsYou.map((n) => (
              <li key={n.id} className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-card border border-attention px-3 py-2">
                <span className="flex min-w-0 flex-1 basis-48 items-start gap-2 text-body leading-5"><span className="mt-1.5"><AttentionDot /></span><span className="min-w-0 break-words">{n.text}</span></span>
                <div className="ml-auto flex flex-wrap justify-end gap-2"><Button size="sm" onClick={n.onAction}>{n.actionLabel}</Button></div>
              </li>
            ))}</ul>
          ) : <p className="text-body leading-5 text-fg-muted">{l.nothingNeeded}</p>}
        </Section>
        {changes.length > 0 && (
          <Section title={l.changed}>
            <ul className="flex flex-wrap gap-2">{changes.map((c) => (
              <li key={c.label} className="rounded-card bg-sunken px-3 py-1.5 text-small leading-4 text-fg-muted"><span className="text-body leading-5 font-medium tabular-nums text-fg">{c.count}</span> {c.label}</li>
            ))}</ul>
          </Section>
        )}
        {onShowLog && <Button variant="ghost" size="sm" onClick={onShowLog}>{l.showLog}</Button>}
      </div>
    </section>
  );
}
```

## tattva/organisms/ResearchRun.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { AlertIcon, CheckIcon, SearchIcon } from "../lib/icons";
import { Button } from "../atoms/Button";

export interface ResearchPhase {
  id: string;
  /** What happens in this phase, such as "Searching the web". */
  label: string;
  state: "done" | "active" | "waiting";
}

export interface ResearchRunLabels {
  heading?: string;
  /** Receives the number of sources read. */
  sources?: (n: number) => string;
  /** Receives the time so far, such as "4 min". */
  elapsed?: (t: string) => string;
  stop?: string;
  open?: string;
  /** Receives sources read and the time taken. */
  doneSummary?: (n: number, t: string) => string;
  stopped?: string;
  failed?: string;
  retry?: string;
  phaseNow?: (label: string) => string;
}

export interface ResearchRunProps {
  /** What is being researched, in the person's words. */
  question: string;
  status: "running" | "done" | "stopped" | "failed";
  phases: ResearchPhase[];
  /** Sources read so far. */
  sourcesRead: number;
  /** Time so far, already in words: "4 min". */
  elapsed: string;
  /** What it is doing this moment, such as "Reading reuters.com". Shown while running. */
  activity?: string;
  onStop?: () => void;
  /** Opens the finished report. */
  onOpenReport?: () => void;
  onRetry?: () => void;
  labels?: ResearchRunLabels;
  /** Level of the part's heading, so it fits the page outline. Default 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * A deep research run, which can take many minutes. While it runs it shows the phases (done, now, next), how many
 * sources it has read and for how long, and what it is reading this moment; Stop is always there. Screen readers
 * hear each new phase, not every source. When it finishes, the card says what it did in one line and opens the report.
 */
export function ResearchRun({ question, status, phases, sourcesRead, elapsed, activity, onStop, onOpenReport, onRetry, labels, headingLevel = 3, className }: ResearchRunProps) {
  const l = {
    heading: "Research", sources: (n: number) => (n === 1 ? "1 source read" : `${n} sources read`), elapsed: (t: string) => t, stop: "Stop", open: "Open report",
    doneSummary: (n: number, t: string) => `Read ${n} sources in ${t}.`, stopped: "Stopped. The report covers what was read so far.", failed: "The research stopped because of an error.",
    retry: "Try again", phaseNow: (p: string) => `Now: ${p}`, ...labels,
  };
  const uid = useId();
  const H = headingTag(headingLevel);
  const active = phases.find((p) => p.state === "active");
  // Announce each new phase once, not each source.
  const [said, setSaid] = useState("");
  const last = useRef<string | undefined>(undefined);
  useEffect(() => { if (status === "running" && active && active.id !== last.current) { last.current = active.id; setSaid(l.phaseNow(active.label)); } }, [status, active]);
  const running = status === "running";
  return (
    <section aria-labelledby={`${uid}-h`} aria-busy={running || undefined} className={cn("rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-start gap-2.5">
        <SearchIcon aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-fg-muted" />
        <div className="min-w-0 flex-1">
          <H id={`${uid}-h`} className="m-0 text-small leading-4 font-medium text-fg-muted">{l.heading}</H>
          <p className="m-0 mt-1 text-body leading-6 font-medium text-fg">{question}</p>
        </div>
      </div>

      <ol className="mt-4 space-y-2">
        {phases.map((p) => (
          <li key={p.id} className="flex items-center gap-2.5" aria-current={p.state === "active" ? "step" : undefined}>
            <span aria-hidden className={cn("grid size-5 shrink-0 place-items-center rounded-full",
              p.state === "done" ? "bg-success-soft text-success-fg" : p.state === "active" ? "border-2 border-lime" : "border border-line-strong")}>
              {p.state === "done" && <CheckIcon width={12} height={12} />}
              {p.state === "active" && <span className={cn("size-2 rounded-full bg-lime", running && "motion-safe:animate-pulse")} />}
            </span>
            <span className={cn("text-body leading-5", p.state === "waiting" ? "text-fg-muted" : "text-fg", p.state === "active" && "font-medium")}>{p.label}</span>
            <span className="sr-only">{p.state === "done" ? "(done)" : p.state === "active" ? "(now)" : "(next)"}</span>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="m-0 text-small leading-5 text-fg-muted tabular-nums">{l.sources(sourcesRead)} · {l.elapsed(elapsed)}</p>
        {running && activity && <p className="m-0 min-w-0 flex-1 truncate text-small leading-5 text-fg-muted" title={activity}>{activity}</p>}
      </div>

      {status === "done" && <p className="m-0 mt-3 text-body leading-6 text-fg">{l.doneSummary(sourcesRead, elapsed)}</p>}
      {status === "stopped" && <p className="m-0 mt-3 text-body leading-6 text-fg">{l.stopped}</p>}
      {status === "failed" && <p className="m-0 mt-3 inline-flex items-center gap-1.5 text-body leading-6 text-danger-fg"><AlertIcon aria-hidden width={15} height={15} />{l.failed}</p>}

      <div className="mt-4 flex flex-wrap gap-2">
        {running && onStop && <Button size="sm" variant="secondary" onClick={onStop}>{l.stop}</Button>}
        {(status === "done" || status === "stopped") && onOpenReport && <Button size="sm" onClick={onOpenReport}>{l.open}</Button>}
        {status === "failed" && onRetry && <Button size="sm" variant="secondary" onClick={onRetry}>{l.retry}</Button>}
      </div>
      <p role="status" className="sr-only">{status === "done" ? l.doneSummary(sourcesRead, elapsed) : status === "stopped" ? l.stopped : status === "failed" ? l.failed : said}</p>
    </section>
  );
}
```

## tattva/organisms/ResponseCompare.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { CheckIcon } from "../lib/icons";
import { Button } from "../atoms/Button";

export interface CompareReply {
  id: string;
  /** Short name for the reply, such as "Reply A". */
  label: string;
  content: ReactNode;
}

export interface ResponseCompareLabels {
  heading?: string;
  hint?: string;
  choose?: string;
  same?: string;
  chosen?: string;
  /** Read out after a choice. Receives the chosen reply's label, or null for "about the same". */
  thanks?: (label: string | null) => string;
}

export interface ResponseCompareProps {
  /** Exactly two replies to the same question. */
  replies: [CompareReply, CompareReply];
  /** Called with the chosen reply's id, or "same". */
  onChoose: (id: string | "same") => void;
  /** The chosen reply's id, or "same". Leave it out to let the part keep its own choice. */
  chosen?: string | "same" | null;
  /** Offer an "About the same" choice. On by default. */
  allowSame?: boolean;
  labels?: ResponseCompareLabels;
  /** Level of the part's heading, so it fits the page outline. Default 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * Two replies to the same question, side by side, and the person picks the better one. The choice is a plain button
 * under each reply, so it works the same with a mouse, a finger, a keyboard or a screen reader. After a choice, the
 * kept reply says so in words and the other steps back; nothing moves.
 */
export function ResponseCompare({ replies, onChoose, chosen: chosenProp, allowSame = true, labels, headingLevel = 3, className }: ResponseCompareProps) {
  const l = {
    heading: "Which reply is better?", hint: "Your choice helps the assistant learn what you prefer.", choose: "Choose this reply", same: "About the same",
    chosen: "You chose this", thanks: (label: string | null) => (label ? `Thanks. You chose ${label}.` : "Thanks. You said they are about the same."), ...labels,
  };
  const [own, setOwn] = useState<string | "same" | null>(null);
  const chosen = chosenProp !== undefined ? chosenProp : own;
  const uid = useId();
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const pick = (id: string | "same") => { setOwn(id); onChoose(id); };
  const label = chosen && chosen !== "same" ? replies.find((r) => r.id === chosen)?.label ?? null : null;
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("rounded-card border border-line bg-surface p-4 sm:p-5", className)}>
      <H id={`${uid}-h`} className="m-0 text-body leading-5 font-semibold text-fg">{l.heading}</H>
      <p className="mt-1 text-small leading-5 text-fg-muted">{l.hint}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {replies.map((r) => {
          const isChosen = chosen === r.id;
          const faded = !!chosen && chosen !== "same" && !isChosen;
          return (
            <article key={r.id} aria-labelledby={`${uid}-${r.id}`}
              className={cn("flex min-w-0 flex-col rounded-control border p-4 transition-colors duration-(--dur-fast) motion-reduce:transition-none",
                isChosen ? "border-selected-line bg-selected" : "border-line bg-bg", faded && "opacity-70")}>
              <H2 id={`${uid}-${r.id}`} className="m-0 text-small leading-4 font-medium text-fg-muted">{r.label}</H2>
              <div className="mt-2 min-w-0 flex-1 space-y-3 text-body leading-6 text-fg">{r.content}</div>
              <div className="mt-4">
                {isChosen
                  ? <p className="m-0 inline-flex items-center gap-1.5 text-small leading-5 font-medium text-fg"><CheckIcon aria-hidden width={14} height={14} />{l.chosen}</p>
                  : <Button size="sm" variant="secondary" onClick={() => pick(r.id)} aria-describedby={`${uid}-${r.id}`}>{l.choose}</Button>}
              </div>
            </article>
          );
        })}
      </div>
      {allowSame && chosen !== "same" && (
        <div className="mt-3"><Button size="sm" variant="ghost" onClick={() => pick("same")}>{l.same}</Button></div>
      )}
      <p role="status" className={cn("text-small leading-5 text-fg-muted", chosen ? "mt-3" : "sr-only")}>{chosen ? l.thanks(label) : ""}</p>
    </section>
  );
}
```
