## tattva/organisms/ActivityTrace.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, ChevronIcon, XIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";

export type TraceActor = "ai" | "rule" | "calculated" | "check" | "you";
export type TraceStatus = "pending" | "running" | "done" | "failed";

export interface TraceStep {
  id: string;
  actor: TraceActor;
  title: string;
  detail?: ReactNode;
  /** Default "done". */
  status?: TraceStatus;
}

export interface ActivityTraceProps {
  steps: TraceStep[];
  /** True while steps are still arriving. The list stays open and each new row is announced. */
  streaming?: boolean;
  /** The one line shown when folded, such as "Read your message · 8 steps". */
  summary: string;
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Rename the tags, for another language or wording. */
  actorLabels?: Partial<Record<TraceActor, string>>;
  className?: string;
}

const defaultLabels: Record<TraceActor, string> = { ai: "AI", rule: "Rule sheet", calculated: "Calculated", check: "Safety check", you: "You" };
const statusWords: Record<TraceStatus, string> = { pending: "Waiting", running: "Running", done: "Done", failed: "Failed" };

function StatusIcon({ status }: { status: TraceStatus }) {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
      {status === "running" ? (
        <svg aria-hidden width={16} height={16} viewBox="0 0 24 24" className="text-fg-muted motion-safe:animate-spin">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
          <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ) : status === "done" ? <CheckIcon aria-hidden width={16} height={16} className="text-success-fg" />
        : status === "failed" ? <XIcon aria-hidden width={16} height={16} className="text-danger-fg" />
        : <span aria-hidden className="size-2.5 rounded-full border border-line-strong forced-colors:border-[CanvasText]" />}
      <span className="sr-only">{statusWords[status]}</span>
    </span>
  );
}

/**
 * The agent's work shown step by step, then folded into one line. Each step carries a tag that says who did it:
 * AI (a judgment that can be wrong), Rule sheet (looked up and checked), Calculated (done by code), Safety check
 * (a guardrail), or You. While streaming the list is open; when the work is done the parent sets streaming to false and the person can fold it.
 */
export function ActivityTrace({ steps, streaming, summary, defaultOpen = false, open, onOpenChange, actorLabels, className }: ActivityTraceProps) {
  const uid = useId();
  const [inner, setInner] = useState(defaultOpen);
  const isOpen = streaming || (open ?? inner);
  const labels = { ...defaultLabels, ...actorLabels };
  const toggle = () => { if (streaming) return; const v = !isOpen; if (open === undefined) setInner(v); onOpenChange?.(v); };

  // Announce each new step once. The first render is not announced, so a trace that mounts full stays quiet.
  const seen = useRef(steps.length);
  const [said, setSaid] = useState("");
  useEffect(() => {
    if (steps.length > seen.current && streaming) { const s = steps[steps.length - 1]; setSaid(`${labels[s.actor]}: ${s.title}`); }
    seen.current = steps.length;
    // labels is rebuilt each render; steps.length is the real trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps.length, streaming]);

  return (
    <div className={cn("rounded-card border border-line bg-surface", className)}>
      <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-list`} aria-disabled={streaming || undefined} onClick={toggle}
        className={cn("flex min-h-10 w-full items-center gap-2 rounded-card px-4 py-2 text-left text-body leading-5 text-fg-muted pointer-coarse:min-h-11", streaming ? "cursor-default" : "cursor-pointer hover:bg-hover hover:text-fg")}>
        <ChevronIcon aria-hidden className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)]", isOpen && "rotate-90")} />
        <span className="min-w-0 flex-1 break-words">{summary}</span>
      </button>
      {isOpen && (
        <ol id={`${uid}-list`} className="m-0 list-none space-y-3 border-t border-line px-4 py-3">
          {steps.map((s) => {
            const status = s.status ?? "done";
            return (
              <li key={s.id} className={cn("flex gap-3", streaming && "motion-safe:animate-rise")}>
                <StatusIcon status={status} />
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body leading-5">
                    <span className={cn("font-medium break-words", status === "pending" && "text-fg-muted", status === "failed" && "text-danger-fg")}>{s.title}</span>
                    <Badge tone={s.actor === "ai" ? "accent" : "neutral"}>{labels[s.actor]}</Badge>
                    {status === "failed" && <span className="text-small leading-4 text-danger-fg">Failed</span>}
                  </p>
                  {s.detail && <div className="mt-0.5 text-small leading-4 text-fg-muted break-words">{s.detail}</div>}
                </div>
              </li>
            );
          })}
        </ol>
      )}
      <p role="status" aria-live="polite" className="sr-only">{said}</p>
    </div>
  );
}
```

## tattva/organisms/AgentQuestionCard.tsx

```tsx
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { cn } from "../lib/cn";
import { useFocusAfter } from "../lib/useFocusAfter";
import { CheckIcon, LockIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export type QuestionReason = "approach" | "information" | "sign-in" | "risky-step";
export type QuestionAnswerKind = "option" | "text" | "agent-decides" | "skipped";

export interface QuestionOption {
  id: string;
  label: string;
  /** One short line that tells the options apart. */
  description?: string;
}

export interface QuestionAnswer {
  kind: QuestionAnswerKind;
  /** Option id for "option", the typed text for "text", empty otherwise. */
  value: string;
  /** What the summary shows, such as the option label. */
  label: string;
}

export interface AgentQuestionCardLabels {
  reasons?: Partial<Record<QuestionReason, string>>;
  textLabel?: string;
  textPlaceholder?: string;
  send?: string;
  letAgentDecide?: string;
  skip?: string;
  signInHint?: string;
  answeredHeading?: string;
  agentDecided?: string;
  skipped?: string;
  change?: string;
}

export interface AgentQuestionCardProps {
  question: string;
  reason: QuestionReason;
  /** Two to four choices. More are cut to four. */
  options?: QuestionOption[];
  /** Show the free-text answer. Default true, except for sign-in questions, which never ask for a secret in text. */
  allowText?: boolean;
  /** Answer (controlled). Omit while open. */
  answer?: QuestionAnswer | null;
  onAnswer?: (answer: QuestionAnswer) => void;
  /** Called when the person chooses Change on the summary. */
  onReopen?: () => void;
  /** Name of the run that asked. */
  runName?: string;
  labels?: AgentQuestionCardLabels;
  className?: string;
}

const reasonDefaults: Record<QuestionReason, string> = {
  approach: "Choose an approach", information: "Needs information", "sign-in": "Needs a sign-in or secret", "risky-step": "Confirm a risky step",
};

/**
 * The agent asks a question in the middle of a task. A reason chip says why it is asking, option
 * buttons give quick answers, and a text box allows any other answer. "Let the agent decide" and
 * "Skip" are always there. After an answer the card shrinks to a one-line summary. This is a place where
 * amber is allowed, because the agent is waiting for a person.
 */
export function AgentQuestionCard({ question, reason, options = [], allowText, answer, onAnswer, onReopen, runName, labels, className }: AgentQuestionCardProps) {
  const l = {
    textLabel: "Or type your own answer", textPlaceholder: "Type an answer", send: "Send", letAgentDecide: "Let the agent decide", skip: "Skip",
    signInHint: "Never type a password or code here. Sign in in the window the agent opened, then choose an option.",
    answeredHeading: "You answered", agentDecided: "You let the agent decide", skipped: "You skipped this question", change: "Change", ...labels,
  };
  const reasonText = { ...reasonDefaults, ...labels?.reasons }[reason];
  const [inner, setInner] = useState<QuestionAnswer | null>(null);
  const [text, setText] = useState("");
  const uid = useId();
  const current = answer !== undefined ? answer : inner;
  const showText = allowText ?? reason !== "sign-in";
  const shown = options.slice(0, 4);

  const box = useRef<HTMLElement>(null);
  const byUs = useRef(false);
  // The buttons pressed here are replaced (answer becomes a summary, Change brings the question back), so focus moves to the card.
  const arm = useFocusAfter(current, () => box.current);
  useEffect(() => { if (!current) byUs.current = false; }, [current]);
  const give = (a: QuestionAnswer) => { byUs.current = true; arm(); if (answer === undefined) setInner(a); onAnswer?.(a); };
  const reopen = () => { arm(); if (answer === undefined) setInner(null); onReopen?.(); };
  const submit = (e: FormEvent) => { e.preventDefault(); const t = text.trim(); if (t) give({ kind: "text", value: t, label: t }); };

  const summary = !current ? "" : current.kind === "agent-decides" ? l.agentDecided : current.kind === "skipped" ? l.skipped : `${l.answeredHeading}: ${current.label}`;
  // One live region that stays mounted, so an answer given elsewhere is announced. An answer given here is not
  // announced twice: focus moves to the summary instead.
  const live = <p role="status" aria-live="polite" className="sr-only">{current && !byUs.current ? summary : ""}</p>;

  if (current) {
    return (
      <>
        <section ref={box} tabIndex={-1} aria-label={`${question}: ${summary}`} className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 rounded-card border border-line bg-surface px-4 py-3", className)}>
          <CheckIcon className="shrink-0 text-success" />
          <div className="min-w-0 flex-1 basis-48">
            <p className="truncate text-small leading-4 text-fg-muted">{question}</p>
            <p className="text-body leading-5 font-medium break-words">{summary}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={reopen}>{l.change}</Button>
        </section>
        {live}
      </>
    );
  }

  return (
    <>
    <section ref={box} tabIndex={-1} aria-labelledby={`${uid}-q`} className={cn("rounded-card border border-attention bg-surface p-4", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="warning">{reason === "sign-in" && <LockIcon width={11} height={11} />}{reasonText}</Badge>
        {runName && <span className="text-small leading-4 text-fg-muted">{runName}</span>}
      </div>
      <p id={`${uid}-q`} className="mt-2 text-body leading-5 font-medium break-words">{question}</p>
      {reason === "sign-in" && <p className="mt-1 text-small leading-4 text-fg-muted">{l.signInHint}</p>}

      {shown.length > 0 && (
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {shown.map((o) => (
            <li key={o.id}>
              <button type="button" onClick={() => give({ kind: "option", value: o.id, label: o.label })}
                className="h-full w-full cursor-pointer rounded-card border border-line bg-surface px-3 py-2 text-left hover:border-line-strong hover:bg-bg">
                <span className="block text-body leading-5 font-medium">{o.label}</span>
                {o.description && <span className="mt-0.5 block text-small leading-4 text-fg-muted">{o.description}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showText && (
        <form onSubmit={submit} className="mt-3 flex flex-wrap items-center gap-2">
          <label htmlFor={`${uid}-t`} className="w-full text-small leading-4 font-medium text-fg-muted">{l.textLabel}</label>
          <input id={`${uid}-t`} value={text} onChange={(e) => setText(e.target.value)} placeholder={l.textPlaceholder}
            className="h-9 min-w-0 flex-1 basis-40 rounded-field border border-line bg-surface px-4 text-body leading-5 placeholder:text-fg-subtle" />
          <Button type="submit" disabled={!text.trim()}>{l.send}</Button>
        </form>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <Button variant="ghost" size="sm" onClick={() => give({ kind: "agent-decides", value: "", label: l.letAgentDecide })}>{l.letAgentDecide}</Button>
        <Button variant="ghost" size="sm" onClick={() => give({ kind: "skipped", value: "", label: l.skip })}>{l.skip}</Button>
      </div>
    </section>
    {live}
    </>
  );
}
```
