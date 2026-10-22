## tattva/organisms/DeckBuildProgress.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, ChevronIcon, RetryIcon, StopIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Button } from "../atoms/Button";

export type DeckBuildState = "queued" | "building" | "partial" | "failed" | "cancelled" | "done";
export type SlideBuildStatus = "waiting" | "building" | "ready" | "failed";
/** What the little drawing of a ready slide looks like. Only a hint for the thumbnail. */
export type SlideThumbKind = "title" | "chart" | "quote" | "columns" | "text";

export interface DeckBuildSlide {
  id: string;
  /** The slide title from the outline, such as "Why churn went up". */
  title: string;
  status: SlideBuildStatus;
  /** Shape of the thumbnail once the slide is ready. Defaults to "text". */
  kind?: SlideThumbKind;
}

export interface DeckBuildProgressProps {
  /** Where the whole job is. Use "partial" when the job ended with some slides made and some failed; "failed" only when nothing usable exists. */
  state: DeckBuildState;
  /** Every slide in outline order. Ready, failed and waiting counts come from here, so the numbers are always real. */
  slides: DeckBuildSlide[];
  /** The real step the job is on, written by your app, such as "Making the chart for slide 4". Never a made-up percentage. */
  currentStep?: string;
  /** Place in the queue while queued. */
  queuePosition?: number;
  /** The job runs on the server. Says "You can leave this page" instead of asking the person to keep it open. */
  background?: boolean;
  /** Why the whole build failed, in plain words. Shown in the failed state. */
  error?: string;
  /** Stops the build and keeps every ready slide. The button says how many it keeps. */
  onStop?: () => void;
  /** Retries one failed slide. */
  onRetrySlide?: (slideId: string) => void;
  /** Retries every failed slide, or the whole build in the failed state. */
  onRetryFailed?: () => void;
  /** Builds the slides that were not made after a stop. */
  onResume?: () => void;
  /** Opens the deck, or one ready slide when an id is given. */
  onOpen?: (slideId?: string) => void;
  /** One row for a phone: status, count, bar and the main action, with the slide list behind a Show slides button. */
  compact?: boolean;
  /** Name of the deck, used in the heading, such as "Q3 churn review". */
  deckTitle?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

const STATE_WORD: Record<DeckBuildState, string> = {
  queued: "Waiting to start", building: "Building", partial: "Partly ready", failed: "Build failed", cancelled: "Stopped", done: "Ready",
};

/** Small drawing of a slide made from tokens, so a ready slide is recognisable at a glance. */
function SlideThumb({ kind = "text", status }: { kind?: SlideThumbKind; status: SlideBuildStatus }) {
  const frame = "relative aspect-video w-14 shrink-0 overflow-hidden rounded-control border";
  if (status === "waiting") return <span aria-hidden className={cn(frame, "border-dashed border-line-strong bg-transparent")} />;
  if (status === "failed") {
    return <span aria-hidden className={cn(frame, "grid place-items-center border-line bg-danger-soft text-danger-fg")}><AlertIcon width={14} height={14} /></span>;
  }
  if (status === "building") {
    return (
      <span aria-hidden className={cn(frame, "border-lime bg-sunken")}>
        <span className="absolute inset-x-2 top-2 h-1 rounded-full bg-line-strong" />
        <span className="absolute inset-x-2 top-4 h-1 w-1/2 rounded-full bg-line" />
        <span className="absolute right-1 bottom-1 size-1.5 rounded-full bg-lime motion-safe:animate-pulse-dot" />
      </span>
    );
  }
  const bar = "absolute rounded-full bg-fg-subtle";
  return (
    <span aria-hidden className={cn(frame, "border-line bg-surface")}>
      {kind === "title" && <><span className={cn(bar, "inset-x-3 top-3 h-1.5 bg-fg")} /><span className={cn(bar, "inset-x-5 top-6 h-0.5")} /></>}
      {kind === "chart" && (
        <>
          <span className={cn(bar, "top-1.5 left-1.5 h-0.5 w-6 bg-fg")} />
          <span className="absolute inset-x-2 bottom-1.5 flex h-4 items-end gap-0.5">
            {["h-1/3", "h-1/2", "h-2/3", "h-full", "h-3/4"].map((h, i) => <span key={i} className={cn("flex-1 bg-fg-muted", h)} />)}
          </span>
        </>
      )}
      {kind === "quote" && <><span className="absolute top-0.5 left-1.5 text-small leading-none font-semibold text-fg-muted">“</span><span className={cn(bar, "inset-x-3 top-3 h-0.5")} /><span className={cn(bar, "top-4.5 right-5 left-3 h-0.5")} /><span className={cn(bar, "right-3 bottom-1.5 h-0.5 w-3 bg-fg-muted")} /></>}
      {kind === "columns" && (
        <>
          <span className={cn(bar, "top-1.5 left-1.5 h-0.5 w-6 bg-fg")} />
          <span className="absolute inset-x-1.5 top-3.5 bottom-1.5 flex gap-1">
            {[0, 1, 2].map((i) => <span key={i} className="flex-1 bg-sunken" />)}
          </span>
        </>
      )}
      {kind === "text" && <><span className={cn(bar, "top-1.5 left-1.5 h-0.5 w-6 bg-fg")} />{["top-3.5", "top-5", "top-6.5"].map((t) => <span key={t} className={cn(bar, "left-1.5 h-0.5 w-9", t)} />)}</>}
    </span>
  );
}

const SLIDE_WORD: Record<SlideBuildStatus, string> = { waiting: "Waiting", building: "Building", ready: "Ready", failed: "Failed" };

/**
 * Progress for a deck built slide by slide. It counts slides ready out of the total, shows the real current step,
 * lists every slide with its status, and keeps what is done when the person stops. A failed slide gets its own Retry.
 * The live region speaks when the job changes state or a slide fails, never for each step.
 */
export function DeckBuildProgress({
  state, slides, currentStep, queuePosition, background, error, onStop, onRetrySlide, onRetryFailed, onResume, onOpen,
  compact = false, deckTitle, headingLevel = 3, className,
}: DeckBuildProgressProps) {
  const H = headingTag(headingLevel);
  const total = slides.length;
  const ready = slides.filter((s) => s.status === "ready").length;
  const failed = slides.filter((s) => s.status === "failed");
  const notMade = total - ready - failed.length;
  const active = state === "queued" || state === "building";
  const [listOpen, setListOpen] = useState(!compact);

  const countText = `${ready} of ${plural(total, "slide")} ready`;
  const failText = failed.length ? `, ${failed.length} failed` : "";

  // Announce only changes of job state and new failures. Steps and each ready slide stay silent.
  const announcement =
    state === "queued" ? "Deck build is waiting to start" :
    state === "building" ? (failed.length ? `Slide ${slides.indexOf(failed[failed.length - 1]) + 1} failed. Still building.` : `Building ${plural(total, "slide")}`) :
    state === "partial" ? `Build finished. ${countText}${failText}` :
    state === "failed" ? `Build failed${error ? `. ${error}` : ""}` :
    state === "cancelled" ? `Stopped. ${plural(ready, "slide")} kept` :
    `Deck ready. ${plural(total, "slide")}`;
  const [spoken, setSpoken] = useState("");
  const first = useRef(true);
  useEffect(() => {
    // Skip the first render so a page that opens mid-build does not shout; the heading already says where things are.
    if (first.current) { first.current = false; return; }
    setSpoken(announcement);
  }, [announcement]);

  const headline =
    state === "queued" ? (queuePosition ? `Waiting to start. Number ${queuePosition} in the queue.` : "Waiting to start.") :
    state === "building" ? `${countText}${failText}` :
    state === "partial" ? `${countText}. ${plural(failed.length, "slide")} did not build.` :
    state === "failed" ? (ready ? `${countText}.` : "No slides were made.") :
    state === "cancelled" ? `Stopped. ${plural(ready, "slide")} kept${notMade ? `, ${notMade} not built` : ""}.` :
    `All ${plural(total, "slide")} are ready.`;

  const stopLabel = ready ? `Stop and keep ${plural(ready, "slide")}` : "Stop building";

  const icon =
    state === "done" ? <CheckIcon width={14} height={14} className="text-success-fg" /> :
    state === "failed" ? <AlertIcon width={14} height={14} className="text-danger-fg" /> :
    state === "partial" ? <AlertIcon width={14} height={14} className="text-attention-fg" /> :
    state === "cancelled" ? <StopIcon width={12} height={12} className="text-fg-muted" /> :
    <span className={cn("size-2 rounded-full", state === "building" ? "bg-lime motion-safe:animate-pulse-dot" : "border border-fg-subtle")} />;

  const bar = (
    <div role="progressbar" aria-label="Slides ready" aria-valuemin={0} aria-valuemax={total} aria-valuenow={ready}
      aria-valuetext={`${countText}${failText}`} className="flex h-1.5 w-full gap-0.5">
      {slides.map((s) => (
        <span key={s.id} className={cn("h-full min-w-0 flex-1 rounded-full transition-colors duration-(--dur-base) ease-(--ease-out)",
          s.status === "ready" ? "bg-fg" : s.status === "failed" ? "bg-danger" : s.status === "building" ? "bg-lime" : "bg-line",
          state === "cancelled" && s.status !== "ready" && "bg-line opacity-50")} />
      ))}
    </div>
  );

  const actions = (
    <div className="flex flex-wrap items-center gap-2">
      {active && onStop && <Button size="sm" variant="secondary" leading={<StopIcon width={12} height={12} aria-hidden />} onClick={onStop}>{stopLabel}</Button>}
      {(state === "partial" || (state === "building" && failed.length > 0)) && onRetryFailed && failed.length > 0 && (
        <Button size="sm" variant="secondary" leading={<RetryIcon width={14} height={14} aria-hidden />} onClick={onRetryFailed}>
          {failed.length === 1 ? "Retry the failed slide" : `Retry ${failed.length} failed slides`}
        </Button>
      )}
      {state === "failed" && onRetryFailed && <Button size="sm" variant="secondary" leading={<RetryIcon width={14} height={14} aria-hidden />} onClick={onRetryFailed}>Try the build again</Button>}
      {state === "cancelled" && onResume && notMade + failed.length > 0 && (
        <Button size="sm" variant="secondary" onClick={onResume}>Build the other {plural(notMade + failed.length, "slide")}</Button>
      )}
      {(state === "done" || state === "partial" || state === "cancelled") && ready > 0 && onOpen && <Button size="sm" onClick={() => onOpen()}>Open deck</Button>}
    </div>
  );

  const list = (
    <ol aria-label="Slides" className="divide-y divide-line">
      {slides.map((s, i) => {
        const shownStatus: SlideBuildStatus | "not built" = state === "cancelled" && (s.status === "waiting" || s.status === "building") ? "not built" : s.status;
        return (
          <li key={s.id} className="flex min-h-12 items-center gap-3 py-1.5">
            <SlideThumb kind={s.kind} status={s.status === "building" && !active ? "waiting" : s.status} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-compact text-fg"><span className="text-fg-muted tabular-nums">{i + 1}.</span> {s.title}</span>
              <span className={cn("flex items-center gap-1 text-small leading-4",
                shownStatus === "failed" ? "text-danger-fg" : shownStatus === "ready" ? "text-fg-muted" : "text-fg-subtle")}>
                {shownStatus === "ready" && <CheckIcon aria-hidden width={12} height={12} />}
                {shownStatus === "failed" && <AlertIcon aria-hidden width={12} height={12} />}
                {shownStatus === "not built" ? "Not built" : SLIDE_WORD[shownStatus]}
              </span>
            </span>
            {s.status === "failed" && onRetrySlide && (
              <Button size="sm" variant="ghost" className="shrink-0" aria-label={`Retry slide ${i + 1}, ${s.title}`} onClick={() => onRetrySlide(s.id)}>Retry</Button>
            )}
            {s.status === "ready" && onOpen && (
              <Button size="sm" variant="ghost" className="shrink-0" aria-label={`Open slide ${i + 1}, ${s.title}`} onClick={() => onOpen(s.id)}>Open</Button>
            )}
          </li>
        );
      })}
    </ol>
  );

  const step = active && (currentStep || background) && (
    <div className="space-y-1">
      {currentStep && state === "building" && <p className="flex min-w-0 items-center gap-2 text-compact text-fg-muted"><span className="truncate">{currentStep}</span></p>}
      {background && <p className="text-small leading-4 text-fg-subtle">You can leave this page. The deck keeps building and we will tell you when it is ready.</p>}
    </div>
  );

  if (compact) {
    return (
      <section aria-label={deckTitle ? `Building ${deckTitle}` : "Deck build"} className={cn("w-full space-y-2 rounded-card border border-line bg-surface p-3", className)}>
        <p role="status" aria-live="polite" className="sr-only">{spoken}</p>
        <div className="flex items-center gap-2">
          <span aria-hidden className="flex size-4 shrink-0 items-center justify-center">{icon}</span>
          <p className="min-w-0 flex-1 truncate text-compact"><span className="font-medium">{STATE_WORD[state]}</span><span className="text-fg-muted"> · {state === "queued" ? "Not started" : `${ready} of ${total} ready`}{failed.length ? `, ${failed.length} failed` : ""}</span></p>
          <button type="button" aria-expanded={listOpen} onClick={() => setListOpen(!listOpen)}
            className="tap inline-flex h-8 shrink-0 cursor-pointer items-center gap-1 rounded-control px-2 text-small leading-4 text-fg-muted hover:bg-hover hover:text-fg">
            {listOpen ? "Hide slides" : "Show slides"}
            <ChevronIcon aria-hidden width={12} height={12} className={cn("transition-transform duration-(--dur-fast)", listOpen ? "-rotate-90" : "rotate-90")} />
          </button>
        </div>
        {bar}
        {state === "building" && currentStep && <p className="truncate text-small leading-4 text-fg-muted">{currentStep}</p>}
        {state === "failed" && error && <p className="text-small leading-4 text-danger-fg">{error}</p>}
        {actions}
        {listOpen && list}
      </section>
    );
  }

  return (
    <section aria-label={deckTitle ? `Building ${deckTitle}` : "Deck build"} className={cn("w-full space-y-3 rounded-card border border-line bg-surface p-4", className)}>
      <p role="status" aria-live="polite" className="sr-only">{spoken}</p>
      <div className="space-y-1">
        <H className="flex items-center gap-2 text-body leading-5 font-semibold text-fg">
          <span aria-hidden className="flex size-4 shrink-0 items-center justify-center">{icon}</span>
          <span className="min-w-0">{STATE_WORD[state]}{deckTitle && <span className="font-normal text-fg-muted">: {deckTitle}</span>}</span>
        </H>
        <p className="text-compact text-fg">{headline}</p>
        {state === "failed" && error && <p className="text-compact text-danger-fg">{error}</p>}
        {state === "partial" && <p className="text-small leading-4 text-attention-fg">Needs you: retry or remove the failed {failed.length === 1 ? "slide" : "slides"} before you present.</p>}
      </div>
      {bar}
      {step}
      {actions}
      {total > 0 && (
        <div>
          <button type="button" aria-expanded={listOpen} onClick={() => setListOpen(!listOpen)}
            className="tap inline-flex h-8 cursor-pointer items-center gap-1 rounded-control text-small leading-4 text-fg-muted hover:text-fg">
            <ChevronIcon aria-hidden width={12} height={12} className={cn("transition-transform duration-(--dur-fast)", listOpen && "rotate-90")} />
            {listOpen ? "Hide slides" : `Show all ${plural(total, "slide")}`}
          </button>
          {listOpen && list}
        </div>
      )}
    </section>
  );
}
```
