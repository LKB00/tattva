## tattva/molecules/EnhanceCompare.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { type HeadingLevel, headingTag } from "../lib/useFocusAfter";
import { AlertIcon, RetryIcon, SparkleIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { Kbd } from "../atoms/Kbd";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { Slider } from "../atoms/Slider";
import { AudioPlayer } from "./AudioPlayer";

/** idle: not cleaned up yet. processing: the AI is cleaning it up. ready: Before and After can be compared. failed: the clean-up did not work. */
export type EnhanceStatus = "idle" | "processing" | "ready" | "failed";
export type EnhanceListening = "before" | "after";

export interface EnhanceKeepPart {
  id: string;
  /** What to keep, such as "Keep laughter" or "Keep room sound". */
  label: string;
  on: boolean;
}

export interface EnhanceCompareProps {
  /** Name of the recording. Also names the player. */
  title: string;
  /** Length in seconds. */
  duration: number;
  /** Cleanup strength, 0 (Natural) to 100 (Clean). */
  strength: number;
  onStrengthChange: (n: number) => void;
  /** Which version is playing. Switching keeps the position. */
  listening: EnhanceListening;
  onListeningChange: (v: EnhanceListening) => void;
  status: EnhanceStatus;
  /** Starts or repeats the clean-up with the current settings. Shows the Clean up button. */
  onProcess?: () => void;
  /** Cost shown beside Clean up, such as "Free on your plan" or "about 2 credits". */
  costNote?: string;
  /** Sounds the person can choose to keep. */
  keepParts?: EnhanceKeepPart[];
  onKeepPartChange?: (id: string, on: boolean) => void;
  /** Loudness per slice of the original. */
  beforePeaks?: number[];
  /** Loudness per slice of the cleaned version. */
  afterPeaks?: number[];
  /** The original file. Leave both files out to simulate playback. */
  beforeSrc?: string;
  /** The cleaned file. */
  afterSrc?: string;
  /** Message in the failed state. */
  errorText?: string;
  /** Heading of the panel. */
  heading?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
const strengthWords = (n: number) => `${n} percent, ${n < 34 ? "closer to Natural" : n > 66 ? "closer to Clean" : "between Natural and Clean"}`;
const settingsKey = (strength: number, parts?: EnhanceKeepPart[]) => `${strength}|${(parts ?? []).filter((p) => p.on).map((p) => p.id).join(",")}`;

/**
 * Cleans up a recording and lets the person hear the difference. One strength slider runs from Natural to Clean,
 * a few check boxes keep sounds worth keeping, and a Before and After switch changes version at the same moment,
 * so the change is heard straight away instead of after a new render. The After version carries the AI label; the original does not.
 */
export function EnhanceCompare({
  title, duration, strength, onStrengthChange, listening, onListeningChange, status, onProcess, costNote, keepParts, onKeepPartChange,
  beforePeaks, afterPeaks, beforeSrc, afterSrc, errorText = "The clean-up did not finish. Your recording is unchanged.", heading = "Clean up sound", headingLevel = 3, className,
}: EnhanceCompareProps) {
  const id = useId();
  const H = headingTag(headingLevel);
  const [pos, setPos] = useState(0);
  const [current, setCurrent] = useState<number | undefined>(undefined);
  const lastPos = useRef(0);
  const switchedAt = useRef(0);
  const nudge = useRef(0);
  const applied = useRef<string | null>(null);

  const ready = status === "ready";
  const showing: EnhanceListening = ready ? listening : "before";
  const key = settingsKey(strength, keepParts);
  // Remember the settings the After version was made with, so a later change can say it is not applied yet.
  useEffect(() => { if (ready && applied.current === null) applied.current = key; if (status === "processing") applied.current = null; }, [ready, status, key]);
  const changed = ready && applied.current !== null && applied.current !== key;

  const setListening = (v: EnhanceListening) => {
    if (v === listening || !ready) return;
    lastPos.current = pos;
    switchedAt.current = performance.now();
    onListeningChange(v);
  };

  // A real file restarts at zero when it changes. Put it back where the person was, so the switch is a true A/B.
  const onTime = (t: number) => {
    if (performance.now() - switchedAt.current < 1500 && t < lastPos.current - 0.5) {
      nudge.current = (nudge.current + 1) % 2;
      setCurrent(lastPos.current + nudge.current * 0.001);
      return;
    }
    setPos(t);
  };

  // B switches Before and After while focus is inside, but never while typing or on the slider.
  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey || isTyping(e.target)) return;
    if ((e.key === "b" || e.key === "B") && ready) { e.preventDefault(); setListening(listening === "before" ? "after" : "before"); }
  };

  const statusText = status === "processing" ? "Cleaning up. You can keep listening to the original."
    : status === "ready" ? "Clean-up ready. Switch between Before and After to compare."
    : status === "failed" ? `Clean-up failed. ${errorText}` : "";

  return (
    <section aria-labelledby={`${id}-h`} onKeyDown={onKey} className={cn("@container flex min-w-0 flex-col gap-4 rounded-card border border-line bg-surface p-3 sm:p-4", className)}>
      <header className="flex flex-wrap items-center justify-between gap-2">
        <H id={`${id}-h`} className="text-body leading-5 font-semibold text-fg">{heading}</H>
        {ready && (
          <SegmentedControl<EnhanceListening> label="Listen to" value={listening} onChange={setListening}
            options={[{ value: "before", label: "Before" }, { value: "after", label: "After" }]} className="pointer-coarse:[&_button]:min-h-11" />
        )}
      </header>

      <AudioPlayer title={title} duration={duration} speeds={[1]}
        subtitle={showing === "after" ? "Listening to After, cleaned up" : ready ? "Listening to Before, the original" : "The original"}
        peaks={showing === "after" ? afterPeaks ?? beforePeaks : beforePeaks}
        src={showing === "after" ? afterSrc : beforeSrc}
        aiGenerated={showing === "after"} aiNote="The After version was cleaned up by AI. The original is kept as it was."
        current={current} onTimeChange={onTime} />

      <div className="flex flex-col gap-1">
        <span aria-hidden className="text-compact font-medium text-fg">Strength</span>
        <Slider label="Cleanup strength" value={strength} onChange={onStrengthChange} min={0} max={100} step={5}
          formatValue={strengthWords} disabled={status === "processing"} />
        <div aria-hidden className="flex justify-between text-small text-fg-muted">
          <span>Natural</span><span>Clean</span>
        </div>
      </div>

      {keepParts && keepParts.length > 0 && (
        <fieldset className="flex flex-col gap-1" disabled={status === "processing"}>
          <legend className="mb-1 text-compact font-medium text-fg">Sounds to keep</legend>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {keepParts.map((p) => (
              <Checkbox key={p.id} checked={p.on} label={p.label} disabled={status === "processing"} onChange={(on) => onKeepPartChange?.(p.id, on)} />
            ))}
          </div>
        </fieldset>
      )}

      {status === "failed" && (
        <div className="flex flex-wrap items-center gap-2 rounded-field bg-sunken px-3 py-2 text-compact text-fg">
          <AlertIcon width={16} height={16} aria-hidden className="shrink-0 text-danger-fg" />
          <span className="min-w-40 flex-1">{errorText}</span>
        </div>
      )}

      <footer className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-3">
        <p className="flex min-w-40 flex-1 items-center gap-2 text-small text-fg-muted">
          {status === "processing" && <span aria-hidden className="size-2 shrink-0 rounded-full bg-lime ring-1 ring-fg-muted motion-safe:animate-pulse-dot" />}
          {status === "idle" && "Not cleaned up yet. Press Clean up, then compare Before and After."}
          {status === "processing" && "Cleaning up. You can keep listening to the original."}
          {ready && !changed && <span className="flex flex-wrap items-center gap-1.5">Cleaned up. <span className="pointer-coarse:hidden">Press <Kbd>B</Kbd> to switch.</span></span>}
          {changed && "Settings changed. Apply them to hear the new After."}
          {status === "failed" && "Nothing was changed."}
        </p>
        {onProcess && status !== "processing" && (status !== "ready" || changed) && (
          <span className="flex flex-wrap items-center gap-2">
            {costNote && <span className="text-small text-fg-muted">{costNote}</span>}
            <Button size="sm" variant={status === "failed" ? "secondary" : "lime"} onClick={onProcess} className="pointer-coarse:h-11"
              leading={status === "failed" ? <RetryIcon width={14} height={14} /> : <SparkleIcon width={14} height={14} />}>
              {status === "failed" ? "Try again" : changed ? "Apply" : "Clean up"}
            </Button>
          </span>
        )}
      </footer>

      <span role="status" className="sr-only">{statusText}</span>
    </section>
  );
}
```

## tattva/molecules/ErrorState.tsx

```tsx
import type { ReactNode } from "react";
import { Button } from "../atoms/Button";
import { Callout } from "./Callout";

/** Recoverable failure: say what happened, whether the user's input is safe, and offer a next step. */
export function ErrorState({ title = "Something went wrong", message, onRetry }: { title?: string; message: ReactNode; onRetry?: () => void }) {
  return <Callout tone="danger" title={title} action={onRetry && <Button size="sm" variant="secondary" onClick={onRetry}>Try again</Button>}>{message}</Callout>;
}
```

## tattva/molecules/FactList.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Skeleton } from "../atoms/Skeleton";

export interface Fact {
  /** What the value is: "Check-in", "Plan". */
  label: string;
  /** The value itself: "3pm", "Pro". Text or a small part such as a Badge. */
  value: ReactNode;
}

export interface FactListProps {
  facts: Fact[];
  /** "split" puts the label and the value side by side; "stacked" puts the label above the value, for narrow places. */
  layout?: "split" | "stacked";
  /** On wide screens, lays the facts out in two columns. */
  columns?: 1 | 2;
  /** Shows placeholder rows while the facts are still arriving. */
  loading?: boolean;
  /** How many placeholder rows to show while loading. */
  loadingRows?: number;
  /** Said when there are no facts. Nothing is drawn when omitted. */
  emptyLabel?: string;
  className?: string;
}

/**
 * Short label and value pairs, such as "Check-in: 3pm" or "Plan: Pro". A description list, so each value is read
 * with its label. Light enough to sit in an answer or a card, and easy to scan on a phone.
 */
export function FactList({ facts, layout = "split", columns = 1, loading = false, loadingRows = 3, emptyLabel, className }: FactListProps) {
  if (loading) {
    return (
      <div aria-busy="true" className={cn("grid gap-2", className)}>
        {Array.from({ length: loadingRows }, (_, i) => (
          <div key={i} className="flex items-center justify-between gap-4"><Skeleton className="h-4 w-24" /><Skeleton className="h-4 w-16" /></div>
        ))}
      </div>
    );
  }
  if (facts.length === 0) return emptyLabel ? <p className={cn("m-0 text-body leading-5 text-fg-muted", className)}>{emptyLabel}</p> : null;
  return (
    <dl className={cn("m-0 grid gap-x-8", columns === 2 && "sm:grid-cols-2", className)}>
      {facts.map((f, i) => (
        <div key={`${f.label}-${i}`}
          className={cn("min-w-0 py-1.5", layout === "split" ? "flex items-baseline justify-between gap-4" : "flex flex-col gap-0.5")}>
          <dt className="shrink-0 text-body leading-5 text-fg-muted">{f.label}</dt>
          <dd className={cn("m-0 min-w-0 text-body leading-5 font-medium text-fg [overflow-wrap:anywhere]", layout === "split" && "text-right")}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
```

## tattva/molecules/FeedbackBar.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { ThumbDownIcon, ThumbUpIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";

export type Rating = "up" | "down" | null;
const reasons = ["Inaccurate", "Not helpful", "Unsafe", "Too long", "Other"];

export interface FeedbackBarProps {
  /** Called once per message. Thumbs up sends the rating. Thumbs down sends the rating with a reason, or alone when the person chooses Skip. */
  onSubmit: (rating: Exclude<Rating, null>, reason?: string) => void;
  /** Any value. When it changes, for example to the message id, the bar returns to its starting state. */
  resetKey?: unknown;
}

/** Thumbs up and down for one response. After submitting, the chosen thumb stays pressed and a thank-you line sits beside it. */
export function FeedbackBar({ onSubmit, resetKey }: FeedbackBarProps) {
  const [rating, setRating] = useState<Rating>(null);
  const [done, setDone] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setRating(null); setDone(false);
  }, [resetKey]);

  const submit = (r: Exclude<Rating, null>, reason?: string) => { setRating(r); setDone(true); if (reason === undefined) onSubmit(r); else onSubmit(r, reason); };

  return (
    <div className="space-y-2">
      <div className="-ml-1.5 flex items-center gap-0.5">
        <IconButton size="sm" label="Good response" active={rating === "up"} onClick={() => { if (!done) submit("up"); }}><ThumbUpIcon /></IconButton>
        <IconButton size="sm" label="Bad response" active={rating === "down"} onClick={() => { if (!done) setRating("down"); }}><ThumbDownIcon /></IconButton>
        <p className="ml-1.5 text-small leading-4 text-fg-muted" role="status">{done ? "Thanks, your feedback helps improve responses." : ""}</p>
      </div>
      {rating === "down" && !done && (
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="What went wrong?">
          <span className="text-small leading-4 text-fg-muted">What went wrong?</span>
          {reasons.map((r) => <Button key={r} size="sm" variant="secondary" className="h-7 px-2.5 text-small leading-4" onClick={() => submit("down", r)}>{r}</Button>)}
          <Button size="sm" variant="ghost" className="h-7 px-2.5 text-small leading-4" onClick={() => submit("down")}>Skip</Button>
        </div>
      )}
    </div>
  );
}
```
