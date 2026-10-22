## tattva/molecules/SpeakerNotes.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, ChevronIcon, EditIcon, ImageIcon, RegenerateIcon, StopIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { AILabel } from "./AILabel";
import { InlineConfirm } from "./InlineConfirm";

export type NotesState = "empty" | "generating" | "proposed" | "kept" | "edited" | "failed";

export interface SpeakerNotesProps {
  /** Which slide these notes are for, such as "Slide 4: Pricing plans". Names the notes box. */
  slideLabel: string;
  /** The notes the person has now. Nothing the AI writes lands here until they press Keep. */
  value: string;
  /** Called on every keystroke. Your app sets state to "edited" once the person changes AI-written notes. */
  onChange: (value: string) => void;
  /**
   * empty: no notes yet. generating: the AI is drafting (show the text so far in `proposed`). proposed: a draft waits for Keep or Discard.
   * kept: notes are the AI draft the person kept. edited: the person has written or changed them. failed: the draft did not arrive.
   */
  state: NotesState;
  /** The AI draft, shown apart from the person's notes while generating or proposed. */
  proposed?: string;
  /** Asks the AI to draft notes for this slide. When the person has edited the notes it asks first. */
  onGenerate?: () => void;
  onKeep?: () => void;
  onDiscard?: () => void;
  /** Stops a draft that is still being written. */
  onStop?: () => void;
  /** Puts the AI draft back after the person edited it. Shows a small revert button beside "Edited by you". */
  onRevert?: () => void;
  /** Speaking pace used to turn words into time. The sum is done here in code, never by the model. */
  wordsPerMinute?: number;
  /** Lines about images on this slide, such as "Image on this slide: made by AI". */
  imageCredits?: string[];
  /** Why the draft failed, in plain words. */
  error?: string;
  /** Folds the notes under a button, for a phone where they sit below the slide. */
  collapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

const countWords = (t: string) => (t.trim() ? t.trim().split(/\s+/).length : 0);

/** "About 45 seconds" or "About 2 minutes" from a word count and a pace. Rounded to the nearest 5 seconds under two minutes. */
function speakingTime(words: number, wpm: number) {
  if (!words) return "";
  const secs = (words / wpm) * 60;
  if (secs < 10) return "under 10 seconds";
  if (secs < 120) return `about ${Math.round(secs / 5) * 5} seconds`;
  const mins = Math.round(secs / 30) / 2;
  return `about ${mins % 1 ? mins.toFixed(1) : mins} minutes`;
}

const measure = (text: string, wpm: number) => {
  const n = countWords(text);
  return n ? `${n} ${n === 1 ? "word" : "words"}, ${speakingTime(n, wpm)} to say` : "No notes yet";
};

const ANNOUNCE: Partial<Record<NotesState, string>> = {
  generating: "Drafting notes", proposed: "Draft ready. Keep it or discard it.", kept: "Notes kept", failed: "Notes could not be drafted",
};

/**
 * Speaker notes for one slide. An AI draft is held apart until the person keeps it; kept notes carry an AI label that
 * turns into "Edited by you" once they type. The word count and speaking time are worked out here from the text.
 * Drafting again over the person's own words asks first.
 */
export function SpeakerNotes({
  slideLabel, value, onChange, state, proposed, onGenerate, onKeep, onDiscard, onStop, onRevert, wordsPerMinute = 130,
  imageCredits, error, collapsible = false, defaultOpen = true, className,
}: SpeakerNotesProps) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen || !collapsible);
  const showBody = !collapsible || open;
  const draft = state === "generating" || state === "proposed";

  // Announce changes of state only, never the streaming words.
  const [spoken, setSpoken] = useState("");
  const prev = useRef(state);
  useEffect(() => {
    if (prev.current === state) return;
    const from = prev.current;
    prev.current = state;
    if (from === "proposed" && (state === "empty" || state === "edited")) setSpoken("Draft discarded");
    else if (state !== "edited") setSpoken(ANNOUNCE[state] ?? "");
  }, [state]);

  const origin =
    state === "kept" ? <AILabel level="field" size={16} text="AI draft" overview="The AI wrote these notes and you kept them. Change anything; it becomes yours." /> :
    state === "edited" && value.trim() ? (
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 text-small leading-4 text-fg-muted"><EditIcon aria-hidden width={12} height={12} />Edited by you</span>
        {onRevert && <AILabel edited onRevert={onRevert} revertLabel="Put back the AI draft" size={16} />}
      </span>
    ) : null;

  const draftLabel = value.trim() ? "Draft new notes" : "Draft notes with AI";
  const generate = onGenerate && !draft && (
    state === "edited" && value.trim() ? (
      <InlineConfirm question="Draft over your edits?" confirmLabel="Draft new notes" cancelLabel="Keep mine" onConfirm={onGenerate}>
        <RegenerateIcon aria-hidden width={14} height={14} />{draftLabel}
      </InlineConfirm>
    ) : (
      <Button size="sm" variant="secondary" leading={<RegenerateIcon aria-hidden width={14} height={14} />} onClick={onGenerate}>{draftLabel}</Button>
    )
  );

  const header = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {collapsible ? (
        <button type="button" aria-expanded={open} aria-controls={`${id}-body`} onClick={() => setOpen(!open)}
          className="tap -ml-1 inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-control px-1 text-body leading-5 font-semibold text-fg hover:bg-hover">
          <ChevronIcon aria-hidden width={14} height={14} className={cn("transition-transform duration-(--dur-fast)", open && "rotate-90")} />
          Speaker notes
        </button>
      ) : (
        <label htmlFor={`${id}-notes`} className="text-body leading-5 font-semibold text-fg">Speaker notes</label>
      )}
      {origin}
      <span className="ml-auto text-small leading-4 text-fg-muted tabular-nums">{measure(value, wordsPerMinute)}</span>
    </div>
  );

  return (
    <section aria-label={`Speaker notes, ${slideLabel}`} className={cn("w-full space-y-2", className)}>
      <p role="status" aria-live="polite" className="sr-only">{spoken}</p>
      {header}
      {showBody && (
        <div id={`${id}-body`} className="space-y-2">
          <textarea id={`${id}-notes`} aria-label={collapsible ? `Speaker notes for ${slideLabel}` : undefined} aria-describedby={`${id}-for`}
            value={value} onChange={(e) => onChange(e.target.value)} rows={4}
            placeholder={state === "empty" ? "What you plan to say on this slide. Only you see these while presenting." : undefined}
            className="block w-full resize-y rounded-field border border-line bg-surface px-3 py-2 text-body leading-relaxed text-fg placeholder:text-fg-subtle hover:border-line-strong pointer-coarse:text-lead" />
          <p id={`${id}-for`} className="sr-only">For {slideLabel}.</p>

          {draft && (
            <WorkingEdge active={state === "generating"} label="AI is drafting notes" radius="card">
              <div className="space-y-2 rounded-card border border-line bg-sunken p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <AILabel size={16} text={state === "generating" ? "Drafting" : "AI draft"} overview="A draft from the AI. It does not replace your notes until you press Keep." />
                  <span className="text-small leading-4 text-fg-muted">{state === "generating" ? "Writing a draft. Your notes above stay as they are." : measure(proposed ?? "", wordsPerMinute)}</span>
                </div>
                <p className="text-compact leading-relaxed whitespace-pre-wrap text-fg">{proposed || <span className="text-fg-subtle">Starting…</span>}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {state === "proposed" && onKeep && <Button size="sm" onClick={onKeep}>{value.trim() ? "Keep, replacing my notes" : "Keep"}</Button>}
                  {state === "proposed" && onDiscard && <Button size="sm" variant="ghost" onClick={onDiscard}>Discard</Button>}
                  {state === "generating" && onStop && <Button size="sm" variant="ghost" leading={<StopIcon aria-hidden width={12} height={12} />} onClick={onStop}>Stop drafting</Button>}
                </div>
              </div>
            </WorkingEdge>
          )}

          {state === "failed" && (
            <p className="flex items-start gap-1.5 text-small leading-4 text-danger-fg"><AlertIcon aria-hidden width={14} height={14} className="mt-px shrink-0" />{error ?? "The draft did not arrive. Your notes are unchanged."}</p>
          )}

          {(generate || (state === "failed" && onGenerate)) && (
            <div className="flex flex-wrap items-center gap-2">
              {state === "failed" && onGenerate ? <Button size="sm" variant="secondary" leading={<RegenerateIcon aria-hidden width={14} height={14} />} onClick={onGenerate}>Try drafting again</Button> : generate}
            </div>
          )}

          {imageCredits && imageCredits.length > 0 && (
            <ul aria-label="Images on this slide" className="space-y-1 border-t border-line pt-2">
              {imageCredits.map((c) => <li key={c} className="flex items-start gap-1.5 text-small leading-4 text-fg-muted"><ImageIcon aria-hidden width={12} height={12} className="mt-0.5 shrink-0" />{c}</li>)}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
```

## tattva/molecules/Splitter.tsx

```tsx
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "../lib/cn";

export interface SplitterProps {
  /** horizontal draws a vertical bar between left and right panes. vertical draws a horizontal bar between top and bottom panes. */
  direction: "horizontal" | "vertical";
  /** Size of the first pane in px. */
  value: number;
  onChange: (px: number) => void;
  min: number;
  max: number;
  /** Accessible name, for example "Resize sidebar". */
  label: string;
  /** Called on double click and on Enter. Use it to collapse or restore the first pane. */
  onToggle?: () => void;
  /** Keyboard step in px. Shift multiplies it by 4. */
  step?: number;
  className?: string;
}

/**
 * Only the draggable bar. Your layout draws the two panes and sizes the first one from `value`.
 * The bar is 12px across (44px on touch screens, through an invisible larger hit area).
 */
export function Splitter({ direction, value, onChange, min, max, label, onToggle, step = 16, className }: SplitterProps) {
  const [dragging, setDragging] = useState(false);
  const start = useRef({ pos: 0, size: 0 });
  const horizontal = direction === "horizontal";
  const clamp = (n: number) => Math.round(Math.min(max, Math.max(min, n)));

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { pos: horizontal ? e.clientX : e.clientY, size: value };
    setDragging(true);
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const delta = (horizontal ? e.clientX : e.clientY) - start.current.pos;
    const next = clamp(start.current.size + delta);
    if (next !== value) onChange(next);
  };
  const up = (e: PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  const key = (e: KeyboardEvent<HTMLDivElement>) => {
    const s = step * (e.shiftKey ? 4 : 1);
    const grow = horizontal ? "ArrowRight" : "ArrowDown";
    const shrink = horizontal ? "ArrowLeft" : "ArrowUp";
    let next: number | undefined;
    if (e.key === grow) next = value + s;
    else if (e.key === shrink) next = value - s;
    else if (e.key === "Home") next = min;
    else if (e.key === "End") next = max;
    else if (e.key === "Enter" && onToggle) { e.preventDefault(); onToggle(); return; }
    if (next === undefined) return;
    e.preventDefault();
    onChange(clamp(next));
  };

  return (
    <div role="separator" tabIndex={0} aria-label={label} aria-orientation={horizontal ? "vertical" : "horizontal"}
      aria-valuenow={clamp(value)} aria-valuemin={min} aria-valuemax={max}
      onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onDoubleClick={onToggle} onKeyDown={key}
      className={cn(
        "group relative shrink-0 touch-none select-none",
        horizontal ? "h-full w-3 cursor-col-resize" : "h-3 w-full cursor-row-resize",
        className,
      )}>
      {/* Larger invisible target on touch screens. */}
      <span aria-hidden className={cn("absolute hidden pointer-coarse:block", horizontal ? "inset-y-0 -inset-x-4" : "inset-x-0 -inset-y-4")} />
      <span aria-hidden className={cn(
        "absolute transition-colors duration-[var(--dur-fast)] forced-colors:bg-[CanvasText]",
        horizontal ? cn("inset-y-0 left-1/2 -translate-x-1/2", dragging ? "w-0.5" : "w-px") : cn("inset-x-0 top-1/2 -translate-y-1/2", dragging ? "h-0.5" : "h-px"),
        dragging ? "bg-accent" : "bg-line group-hover:bg-line-strong group-focus-visible:bg-line-strong",
      )} />
    </div>
  );
}
```
