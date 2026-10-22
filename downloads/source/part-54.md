## tattva/organisms/CallRecord.tsx

```tsx
import { useId, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, XIcon } from "../lib/icons";
import { AIBadge } from "../atoms/AIBadge";
import { Badge, type Tone } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Money } from "../atoms/Money";
import { SegmentedControl } from "../atoms/SegmentedControl";

export type CallStatus = "live" | "completed" | "failed" | "voicemail" | "transferred";
export type CallVerdict = "success" | "failure" | "unknown";

export interface CallCostItem {
  /** "Speech to text", "Model", "Voice", "Platform", "Phone line", or your own. */
  label: string;
  /** Amount in the record's currency. */
  amount: number;
  /** What was used, for example "4 min 12 s" or "3,180 tokens". */
  quantity?: string;
}

export interface CallTranscriptLine {
  id: string;
  speaker: "agent" | "caller";
  text: string;
  /** Offset into the call, for example "01:12". */
  time?: string;
}

export interface CallRecordProps {
  status: CallStatus;
  /** Why the call ended, in plain words: "Caller hung up", "Transferred to Priya". */
  endedReason: string;
  duration: string;
  startedAt: string;
  /** Heading, for example the caller or the call id. */
  title?: string;
  /** The AI's judgement of the call. Shown with an AI label and its reason. */
  outcome?: { verdict: CallVerdict; rationale: string; evidenceLineIds?: string[] };
  /** What the call cost. Amounts are numbers in `currency`. */
  cost?: { total: number; items: CallCostItem[] };
  /** ISO 4217 code for every amount. */
  currency?: string;
  locale?: string;
  /** Did the agent say it is an AI? false shows an amber notice: someone must fix the agent. */
  disclosureGiven?: boolean;
  /** Was recording consent captured? false shows an amber notice. */
  consentRecorded?: boolean;
  /** Fields the agent took from the call, for example order number. */
  data?: Record<string, string>;
  /** A simple transcript. Evidence lines are marked and Show in transcript jumps to them. */
  transcript?: CallTranscriptLine[];
  /** Names for the two speakers. */
  speakerLabels?: { agent: string; caller: string };
  /** Called by Show in transcript, for example to seek your audio player. The built-in transcript also scrolls. */
  onShowEvidence?: (lineIds: string[]) => void;
  /** Extra actions in the header, for example Open recording. */
  actions?: ReactNode;
  className?: string;
}

const STATUS: Record<CallStatus, { label: string; tone: Tone }> = {
  live: { label: "Live", tone: "danger" },
  completed: { label: "Completed", tone: "neutral" },
  failed: { label: "Failed", tone: "danger" },
  voicemail: { label: "Went to voicemail", tone: "neutral" },
  transferred: { label: "Transferred to a person", tone: "info" },
};

const VERDICT: Record<CallVerdict, { label: string; tone: Tone; icon: ReactNode }> = {
  success: { label: "Goal met", tone: "success", icon: <CheckIcon width={12} height={12} /> },
  failure: { label: "Goal not met", tone: "danger", icon: <XIcon width={12} height={12} /> },
  unknown: { label: "Not sure", tone: "neutral", icon: <span aria-hidden>?</span> },
};

function Section({ title, children, aside }: { title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="space-y-2 border-t border-line pt-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-small leading-4 font-semibold text-fg">{title}</h4>
        {aside}
      </div>
      {children}
    </section>
  );
}

/**
 * One call at a glance, for the people who run a voice agent: status, why it ended, the AI's verdict with its
 * reason and evidence, the cost, and what to check. A missing AI disclosure or recording consent is amber, because
 * a person must fix the agent. An unknown verdict is neutral.
 */
export function CallRecord({
  status, endedReason, duration, startedAt, title = "Call", outcome, cost, currency = "GBP", locale = "en-GB",
  disclosureGiven, consentRecorded, data, transcript, speakerLabels = { agent: "Agent", caller: "Caller" },
  onShowEvidence, actions, className,
}: CallRecordProps) {
  const id = useId();
  const [view, setView] = useState<"money" | "quantity">("money");
  const [shown, setShown] = useState<string[]>([]);
  const lines = useRef<Map<string, HTMLLIElement>>(new Map());
  const live = status === "live";
  const s = STATUS[status];
  const evidence = outcome?.evidenceLineIds ?? [];
  const hasQuantity = !!cost?.items.some((i) => i.quantity);

  const showEvidence = () => {
    setShown(evidence);
    onShowEvidence?.(evidence);
    const first = lines.current.get(evidence[0]);
    if (first) {
      first.scrollIntoView({ block: "nearest", behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      first.focus({ preventScroll: true });
    }
  };

  const checks: { ok: boolean; good: string; bad: string; fix: string }[] = [];
  if (disclosureGiven !== undefined) checks.push({ ok: disclosureGiven, good: "Said it is an AI", bad: "The agent did not say it is an AI", fix: "Add the AI line to the start of the agent's greeting." });
  if (consentRecorded !== undefined) checks.push({ ok: consentRecorded, good: "Recording consent captured", bad: "No recording consent was captured", fix: "Make the agent ask before recording, and check this call's recording can be kept." });

  return (
    <article aria-labelledby={`${id}-h`} className={cn("w-full space-y-4 rounded-card border border-line bg-surface p-5 max-sm:p-4", className)}>
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 id={`${id}-h`} className="mr-auto text-body leading-5 font-semibold text-fg">{title}</h3>
          <Badge tone={s.tone}>
            {live && <span aria-hidden className="size-1.5 rounded-full bg-danger motion-safe:animate-pulse-dot" />}
            {status === "failed" && <AlertIcon width={11} height={11} />}
            {s.label}
          </Badge>
          {actions}
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-compact sm:grid-cols-3">
          <div><dt className="text-small leading-4 text-fg-muted">Started</dt><dd className="font-mono tabular-nums text-fg">{startedAt}</dd></div>
          <div><dt className="text-small leading-4 text-fg-muted">{live ? "So far" : "Duration"}</dt><dd className="font-mono tabular-nums text-fg">{duration}</dd></div>
          <div className="col-span-2 sm:col-span-1"><dt className="text-small leading-4 text-fg-muted">{live ? "Status" : "Ended because"}</dt><dd className="text-fg">{live ? "Still talking" : endedReason}</dd></div>
        </dl>
      </header>

      {checks.some((c) => !c.ok) && (
        <div className="space-y-2">
          {checks.filter((c) => !c.ok).map((c) => (
            <div key={c.bad} className="flex gap-3 rounded-card bg-warning-soft p-3 text-body leading-5 text-warning-fg">
              <AlertIcon className="mt-0.5 shrink-0" />
              <div><p className="font-medium">Needs you: {c.bad.charAt(0).toLowerCase() + c.bad.slice(1)}</p><p className="mt-0.5">{c.fix}</p></div>
            </div>
          ))}
        </div>
      )}
      {checks.some((c) => c.ok) && (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-small leading-4 text-fg-muted">
          {checks.filter((c) => c.ok).map((c) => (
            <li key={c.good} className="inline-flex items-center gap-1"><CheckIcon width={12} height={12} className="text-success-fg" />{c.good}</li>
          ))}
        </ul>
      )}

      <Section title="Outcome" aside={outcome && <AIBadge label="AI review" />}>
        {outcome ? (
          <div className="space-y-2">
            <Badge tone={VERDICT[outcome.verdict].tone}>{VERDICT[outcome.verdict].icon}{VERDICT[outcome.verdict].label}</Badge>
            <p className="text-body leading-5 text-fg">{outcome.rationale}</p>
            {evidence.length > 0 && (transcript?.length || onShowEvidence) && (
              <Button size="sm" variant="ghost" onClick={showEvidence} aria-controls={transcript?.length ? `${id}-t` : undefined} className="-ml-3">
                Show in transcript
              </Button>
            )}
          </div>
        ) : (
          <p className="text-body leading-5 text-fg-muted">{live ? "The review appears when the call ends." : "No review for this call."}</p>
        )}
      </Section>

      {data && Object.keys(data).length > 0 && (
        <Section title="Taken from the call">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-2 text-compact sm:grid-cols-2">
            {Object.entries(data).map(([k, v]) => (
              <div key={k}><dt className="text-small leading-4 text-fg-muted">{k}</dt><dd className="text-fg">{v}</dd></div>
            ))}
          </dl>
        </Section>
      )}

      {cost && (
        <Section title={live ? "Cost so far" : "Cost"}
          aside={hasQuantity && (
            <SegmentedControl size="sm" label="Show cost as" value={view} onChange={setView}
              options={[{ value: "money", label: "Money" }, { value: "quantity", label: "Usage" }]} />
          )}>
          <table className="w-full text-compact">
            <caption className="sr-only">{view === "money" ? "Cost by part of the call" : "Usage by part of the call"}</caption>
            <tbody>
              {cost.items.map((i) => (
                <tr key={i.label} className="border-b border-line">
                  <th scope="row" className="py-1.5 pr-2 text-left font-normal text-fg">{i.label}</th>
                  <td className="py-1.5 text-right text-fg">
                    {view === "money" ? <Money value={i.amount} currency={currency} locale={locale} /> : <span className="font-mono tabular-nums">{i.quantity ?? "Not counted"}</span>}
                  </td>
                </tr>
              ))}
              <tr>
                <th scope="row" className="pt-2 pr-2 text-left font-semibold text-fg">Total</th>
                <td className="pt-2 text-right font-semibold text-fg"><Money value={cost.total} currency={currency} locale={locale} calculated /></td>
              </tr>
            </tbody>
          </table>
        </Section>
      )}

      {transcript && transcript.length > 0 && (
        <Section title="Transcript">
          <ol id={`${id}-t`} className="max-h-72 space-y-1 overflow-y-auto rounded-md pr-1 text-compact" tabIndex={0} aria-label="Call transcript">
            {transcript.map((l) => {
              const isEvidence = shown.includes(l.id);
              return (
                <li key={l.id} ref={(el) => { if (el) lines.current.set(l.id, el); else lines.current.delete(l.id); }} tabIndex={-1}
                  className={cn("rounded-control border-l-2 px-3 py-1.5 outline-none transition-colors duration-(--dur-base) focus-visible:ring-2 focus-visible:ring-fg",
                    isEvidence ? "border-fg bg-sunken" : "border-transparent")}>
                  <p className="flex flex-wrap items-baseline gap-x-2 text-small leading-4 text-fg-muted">
                    <span className="font-medium text-fg">{l.speaker === "agent" ? speakerLabels.agent : speakerLabels.caller}</span>
                    {l.time && <span className="font-mono tabular-nums">{l.time}</span>}
                    {isEvidence && <span className="font-medium text-fg">Evidence for the outcome</span>}
                  </p>
                  <p className="text-fg">{l.text}</p>
                </li>
              );
            })}
          </ol>
        </Section>
      )}
    </article>
  );
}
```
