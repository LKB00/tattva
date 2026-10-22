## tattva/organisms/QuestionSet.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { NumberField } from "../atoms/NumberField";
import { TextField } from "../atoms/TextField";
import { Tabs } from "../molecules/Tabs";

export interface QuestionSetOption {
  value: string;
  label: string;
  /** One short line that tells the options apart. */
  description?: string;
}

export interface QuestionSetInput {
  kind: "text" | "number" | "date";
  placeholder?: string;
  /** Shown before a number, such as "₹". */
  prefix?: string;
}

export interface QuestionSetQuestion {
  id: string;
  /** Short name used on the tab, such as "Amount". */
  label: string;
  /** The full question. */
  question: string;
  options?: QuestionSetOption[];
  /** When set, a "Something else" choice reveals this input. Without options, the input shows straight away. */
  input?: QuestionSetInput;
  /** Default true. An optional question never blocks the final button. */
  required?: boolean;
  /** Several options may be picked. The answer holds their values joined by commas (see answerValues). */
  multiple?: boolean;
  /** The value of the option to suggest. It is marked "Recommended", and listed first. */
  recommended?: string;
}

/** Answer value when the person skipped a question. */
export const QS_SKIPPED = "__skipped__";
/** Answer value when the person let the assistant decide. */
export const QS_AGENT_DECIDES = "__agent__";
/** The picked values of an answer, for a question with `multiple`. */
export const answerValues = (value: string | undefined) => (value ?? "").split(",").map((v) => v.trim()).filter(Boolean);

export interface QuestionSetProps {
  questions: QuestionSetQuestion[];
  /** Answer text per question id. An empty or missing value means unanswered. */
  answers: Record<string, string>;
  onAnswer: (id: string, value: string) => void;
  /** The single final action. Called from the button on the question that completes the set. */
  onSubmit: () => void;
  /** Facts already known, shown above the questions as "Already have". */
  known?: { label: string; value: ReactNode }[];
  /** Messages from the parent for answers it found invalid. The card jumps to the first one. */
  errors?: Record<string, string>;
  /** Replace the built-in input, for example to drop in a DatePicker. Called when a question's input is showing. */
  renderInput?: (q: QuestionSetQuestion, value: string, onChange: (value: string) => void) => ReactNode;
  /** Label of the final button. */
  submitLabel?: string;
  /** Label of the button while questions remain. */
  nextLabel?: string;
  title?: string;
  /** Name of the run that asked. */
  runName?: string;
  /** Show "Question 2 of 3" above the question. Default true. */
  showProgress?: boolean;
  /** Offer Skip on questions that are not required. Default false. */
  allowSkip?: boolean;
  /** Offer "You decide" on every question, so the assistant picks. Default false. */
  allowAgentDecides?: boolean;
  /** Show every answer for a last look, with a Change link each, before the final button. Default false. */
  review?: boolean;
  /** Called by "Use the defaults": the assistant fills in the rest. The button shows only when this is set. */
  onUseDefaults?: () => void;
  /** Words on the buttons, for localisation. */
  labels?: Partial<Record<"back" | "skip" | "agentDecides" | "recommended" | "useDefaults" | "review" | "change" | "skipped" | "agentDecided" | "of" | "question", string>>;
  className?: string;
}

const LABELS = { back: "Back", skip: "Skip", agentDecides: "You decide", recommended: "Recommended", useDefaults: "Use the defaults", review: "Check your answers", change: "Change", skipped: "Skipped", agentDecided: "Assistant decides", of: "of", question: "Question" };

const filled = (v: string | undefined) => (v ?? "").trim() !== "";
const field = "flex min-h-10 w-full items-center gap-2 rounded-field border bg-surface px-3 text-body leading-5 text-fg transition-colors duration-[var(--dur-fast)] pointer-coarse:min-h-11 focus-within:outline-(length:--focus-width) focus-within:outline-solid focus-within:outline-offset-2 focus-within:outline-[color:var(--focus-ring)]";

/**
 * One card that asks every missing fact at once. A tab per question, one panel visible, and one button.
 * Tapping an option answers and moves on to the next unanswered question. The button reads "Next" until the
 * answer that completes the set, where it reads the submit label. After submit, the parent should replace the card
 * with a Receipt so the thread stays short.
 */
export function QuestionSet({ questions, answers, onAnswer, onSubmit, known, errors, renderInput, submitLabel = "Continue", nextLabel = "Next", title = "A few quick questions", runName,
  showProgress = true, allowSkip = false, allowAgentDecides = false, review = false, onUseDefaults, labels, className }: QuestionSetProps) {
  const L = { ...LABELS, ...labels };
  const uid = useId();
  const root = useRef<HTMLElement>(null);
  const firstOpen = questions.findIndex((q) => q.required !== false && !filled(answers[q.id]));
  const [cur, setCur] = useState(firstOpen < 0 ? 0 : firstOpen);
  const [otherOpen, setOtherOpen] = useState<Record<string, boolean>>({});
  const [announce, setAnnounce] = useState("");
  const [reviewing, setReviewing] = useState(false);
  const moved = useRef<"tab" | "input" | "button" | null>(null);

  const n = questions.length;
  const idx = Math.min(cur, Math.max(n - 1, 0));
  const q = questions[idx];
  const isRequired = (x: QuestionSetQuestion) => x.required !== false;
  /** Next question still to answer: any unanswered one ahead (optional ones are still shown on the way), then,
   *  wrapping around, a required one left behind. Optional questions already passed never block the end. */
  const nextOpen = (from: number, a: Record<string, string>) => {
    for (let i = 1; i < n; i++) { const j = (from + i) % n; if (!filled(a[questions[j].id]) && (j > from || isRequired(questions[j]))) return j; }
    return -1;
  };

  const go = (i: number, focus: "tab" | "input" | "button" | null) => { moved.current = focus; setCur(i); };
  const answerNow = (id: string, value: string) => { onAnswer(id, value); };

  // After a move we made, put focus somewhere sensible: the tapped option disappeared with its panel.
  useEffect(() => {
    const m = moved.current; moved.current = null;
    if (!m || !root.current) return;
    const sel = m === "tab" ? '[role="tab"][aria-selected="true"]' : m === "input" ? "[data-qs-input] input" : "[data-qs-submit]";
    root.current.querySelector<HTMLElement>(sel)?.focus({ preventScroll: true });
  });

  useEffect(() => { if (q) setAnnounce(reviewing ? L.review : `${L.question} ${idx + 1} ${L.of} ${n}: ${q.label}`); }, [idx, n, q, reviewing, L.review, L.question, L.of]);

  const errKey = Object.keys(errors ?? {}).filter((k) => errors?.[k]).sort().join("|");
  useEffect(() => {
    const i = questions.findIndex((x) => errors?.[x.id]);
    if (i >= 0) setCur(i);
    // Only when the set of errored questions changes, not on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errKey]);

  // Latest-state ref so Enter (which waits a tick for a number field to commit) never reads stale answers.
  const latest = useRef<() => void>(() => {});
  const remaining = questions.filter((x, i) => i !== idx && !filled(answers[x.id]) && (i > idx || isRequired(x)));
  const last = remaining.length === 0;
  const canAct = !q || !isRequired(q) || filled(answers[q.id]);
  const act = () => {
    if (reviewing) { onSubmit(); return; }
    if (!canAct) return;
    if (last) { if (review) { setReviewing(true); moved.current = "button"; } else onSubmit(); return; }
    const j = nextOpen(idx, answers);
    if (j >= 0) go(j, "tab");
  };
  latest.current = act;

  if (!q) return null;

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const t = e.target as HTMLElement;
    // Number keys pick an option, as in other agent tools; never while typing in a field.
    if (!reviewing && /^[1-9]$/.test(e.key) && !["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName) && !e.metaKey && !e.ctrlKey && !e.altKey) {
      // In the order shown: the recommended option is first.
      const shown = [...(q.options ?? [])].sort((a, b) => Number(b.value === q.recommended) - Number(a.value === q.recommended));
      const o = shown[Number(e.key) - 1];
      if (o) { e.preventDefault(); pick(o); }
      return;
    }
    if (e.key !== "Enter" || t.tagName !== "INPUT" || e.nativeEvent.isComposing) return;
    e.preventDefault();
    // A number field commits its draft in its own Enter handler; wait one tick so we see the result.
    setTimeout(() => latest.current(), 0);
  };

  const chosen = answers[q.id] ?? "";
  // The recommended option leads, so the suggestion is the first thing read.
  const opts = [...(q.options ?? [])].sort((a, b) => Number(b.value === q.recommended) - Number(a.value === q.recommended));
  const isOption = opts.some((o) => o.value === chosen) || (!!q.multiple && answerValues(chosen).some((v) => opts.some((o) => o.value === v)));
  /** A choice that is not an option: skip, or let the assistant decide. Moves on like an option does. */
  const special = (value: string) => {
    setOtherOpen((s) => ({ ...s, [q.id]: false }));
    answerNow(q.id, value);
    const j = nextOpen(idx, { ...answers, [q.id]: value });
    go(j >= 0 ? j : idx, j >= 0 ? "tab" : "button");
  };
  const showOther = !q.multiple && !!q.input && (opts.length === 0 || (otherOpen[q.id] ?? (filled(chosen) && !isOption)));
  const err = errors?.[q.id];

  const pick = (o: QuestionSetOption) => {
    if (q.multiple) {
      // Several may be picked: toggle this one and stay, so more can be chosen. The button moves on.
      const cur = answerValues(chosen).filter((v) => v !== QS_SKIPPED && v !== QS_AGENT_DECIDES);
      answerNow(q.id, (cur.includes(o.value) ? cur.filter((v) => v !== o.value) : [...cur, o.value]).join(","));
      return;
    }
    setOtherOpen((s) => ({ ...s, [q.id]: false }));
    answerNow(q.id, o.value);
    const j = nextOpen(idx, { ...answers, [q.id]: o.value });
    go(j >= 0 ? j : idx, j >= 0 ? "tab" : "button");
  };
  const openOther = () => {
    setOtherOpen((s) => ({ ...s, [q.id]: true }));
    if (isOption) answerNow(q.id, "");
    moved.current = "input"; // the state change above re-renders, and the focus effect then runs
  };

  const setValue = (v: string) => answerNow(q.id, v);
  const inp = q.input;
  const inputEl = !inp ? null : renderInput ? renderInput(q, chosen, setValue) : inp.kind === "number" ? (
    <span className="flex items-center gap-2">
      {inp.prefix && <span aria-hidden className="text-body leading-5 text-fg-muted">{inp.prefix}</span>}
      <NumberField label={inp.prefix ? `${q.label} (${inp.prefix})` : q.label} value={filled(chosen) && Number.isFinite(Number(chosen)) ? Number(chosen) : null}
        onChange={(v) => setValue(v === null ? "" : String(v))} invalid={!!err} aria-describedby={err ? `${uid}-err` : undefined} />
    </span>
  ) : inp.kind === "date" ? (
    <span className={cn(field, err ? "border-danger" : "border-line hover:border-line-strong", "sm:max-w-56")}>
      <input type="date" aria-label={q.label} value={chosen} onChange={(e) => setValue(e.target.value)} aria-invalid={err ? true : undefined} aria-describedby={err ? `${uid}-err` : undefined}
        className="min-w-0 flex-1 bg-transparent py-1 text-fg outline-none focus-visible:outline-none" />
    </span>
  ) : (
    <TextField aria-label={q.label} value={chosen} onChange={(e) => setValue(e.target.value)} placeholder={inp.placeholder} invalid={!!err} aria-describedby={err ? `${uid}-err` : undefined} />
  );

  const panel = (
    <div>
      {showProgress && n > 1 && <p className="mb-1 text-small leading-4 text-fg-muted tabular-nums">{L.question} {idx + 1} {L.of} {n}</p>}
      <p id={`${uid}-q`} className="text-body leading-5 font-medium break-words">{q.question}{!isRequired(q) && <span className="ml-2 text-small leading-4 font-normal text-fg-muted">Optional</span>}</p>
      {opts.length > 0 && (
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {opts.map((o) => {
            const on = (q.multiple ? answerValues(chosen).includes(o.value) : chosen === o.value) && !showOther;
            return (
              <li key={o.value}>
                <button type="button" {...(q.multiple ? { role: "checkbox", "aria-checked": on } : { "aria-pressed": on })} onClick={() => pick(o)}
                  className={cn("h-full w-full cursor-pointer rounded-card border px-3 py-2 text-left transition-colors duration-[var(--dur-fast)] pointer-coarse:min-h-11 forced-colors:border-[CanvasText]",
                    on ? "border-fg bg-selected" : "border-line bg-surface hover:border-line-strong hover:bg-bg")}>
                  <span className="flex items-start gap-2">
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body leading-5 font-medium">
                        <span>{o.label}</span>
                        {o.value === q.recommended && <Badge tone="neutral">{L.recommended}</Badge>}
                      </span>
                      {o.description && <span className="mt-0.5 block text-small leading-4 text-fg-muted">{o.description}</span>}
                    </span>
                    {q.multiple
                      ? <span aria-hidden className={cn("mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-[calc(var(--radius-field)/2)] border", on ? "border-fg bg-fg text-bg" : "border-line-strong")}>{on && <CheckIcon width={12} height={12} />}</span>
                      : on && <CheckIcon aria-hidden className="mt-0.5 shrink-0" />}
                  </span>
                </button>
              </li>
            );
          })}
          {inp && !q.multiple && (
            <li>
              <button type="button" aria-pressed={showOther} onClick={openOther}
                className={cn("h-full w-full cursor-pointer rounded-card border border-dashed px-3 py-2 text-left text-body leading-5 font-medium transition-colors duration-[var(--dur-fast)] pointer-coarse:min-h-11 forced-colors:border-[CanvasText]",
                  showOther ? "border-fg bg-sunken" : "border-line-strong bg-surface hover:bg-bg")}>
                Something else
              </button>
            </li>
          )}
        </ul>
      )}
      {showOther && <div data-qs-input className="mt-3">{inputEl}</div>}
      {((allowSkip && !isRequired(q)) || allowAgentDecides) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {allowAgentDecides && <Button type="button" size="sm" variant="ghost" aria-pressed={chosen === QS_AGENT_DECIDES} onClick={() => special(QS_AGENT_DECIDES)}>{L.agentDecides}</Button>}
          {allowSkip && !isRequired(q) && <Button type="button" size="sm" variant="ghost" aria-pressed={chosen === QS_SKIPPED} onClick={() => special(QS_SKIPPED)}>{L.skip}</Button>}
        </div>
      )}
      {err && (
        <p id={`${uid}-err`} role="alert" className="mt-2 flex items-start gap-1.5 text-body leading-5 text-danger-fg">
          <AlertIcon aria-hidden width={16} height={16} className="mt-0.5 shrink-0" />
          <span>{err}</span>
        </p>
      )}
    </div>
  );

  const tabs = questions.map((x, i) => {
    const done = filled(answers[x.id]);
    const bad = !!errors?.[x.id];
    return {
      id: x.id,
      label: (
        <>
          <span aria-hidden className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-micro tabular-nums">
            {bad ? <AlertIcon width={12} height={12} /> : done ? <CheckIcon width={12} height={12} /> : i + 1}
          </span>
          {/* On a phone only the current step shows its name, so all the steps fit; the others keep their name for screen readers. */}
          <span className={cn(i !== idx && "max-sm:sr-only")}>{x.label}</span>
          <span className="sr-only">{bad ? ", needs another answer" : done ? ", answered" : ", not answered yet"}</span>
        </>
      ),
      panel: i === idx ? panel : undefined,
    };
  });

  const hasKnown = known && known.length > 0;
  /** An answer in words, for the review: option labels, typed text, Skipped or Assistant decides. */
  const answerText = (x: QuestionSetQuestion) => {
    const v = answers[x.id];
    if (!filled(v)) return "—";
    if (v === QS_SKIPPED) return L.skipped;
    if (v === QS_AGENT_DECIDES) return L.agentDecided;
    const label = (val: string) => x.options?.find((o) => o.value === val)?.label ?? val;
    return x.multiple ? answerValues(v).map(label).join(", ") : label(v);
  };
  const reviewList = (
    <div>
      <p className="text-body leading-5 font-medium">{L.review}</p>
      <dl className="mt-3 divide-y divide-line rounded-card border border-line">
        {questions.map((x, i) => (
          <div key={x.id} className="flex items-start justify-between gap-3 px-3 py-2">
            <div className="min-w-0">
              <dt className="text-small leading-4 text-fg-muted">{x.label}</dt>
              <dd className="m-0 mt-0.5 text-body leading-5 font-medium break-words">{answerText(x)}</dd>
            </div>
            <Button type="button" size="sm" variant="ghost" aria-label={`${L.change}: ${x.label}`} onClick={() => { setReviewing(false); go(i, "tab"); }}>{L.change}</Button>
          </div>
        ))}
      </dl>
    </div>
  );
  return (
    <section ref={root} aria-labelledby={`${uid}-t`} onKeyDown={onKeyDown} className={cn("rounded-card border border-attention bg-surface p-4", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="warning">Needs your answers</Badge>
        {runName && <span className="text-small leading-4 text-fg-muted">{runName}</span>}
      </div>
      <h3 id={`${uid}-t`} className="mt-2 text-body leading-5 font-semibold">{title}</h3>
      {hasKnown && (
        <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-small leading-4 text-fg-muted">
          <dt className="font-medium">Already have:</dt>
          {known.map((k) => (
            <dd key={k.label} className="m-0"><span>{k.label} </span><span className="font-medium text-fg">{k.value}</span></dd>
          ))}
        </dl>
      )}
      {reviewing
        ? <div className="mt-3">{reviewList}</div>
        : <Tabs className="mt-3" label="Questions" tabs={tabs} value={q.id} onChange={(id) => go(questions.findIndex((x) => x.id === id), null)} />}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {(reviewing || idx > 0) && <Button type="button" size="md" variant="ghost" className="pointer-coarse:h-11" onClick={() => (reviewing ? setReviewing(false) : go(idx - 1, "tab"))}>{L.back}</Button>}
          {onUseDefaults && !reviewing && <Button type="button" size="md" variant="ghost" className="pointer-coarse:h-11" onClick={onUseDefaults}>{L.useDefaults}</Button>}
        </div>
        <Button data-qs-submit="" aria-disabled={(!reviewing && !canAct) || undefined} onClick={act} variant="primary" size="md" className={cn("ml-auto pointer-coarse:h-11", !reviewing && !canAct && "opacity-50")}>
          {reviewing ? submitLabel : last ? (review ? nextLabel : submitLabel) : nextLabel}
        </Button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">{announce}</p>
    </section>
  );
}
```
