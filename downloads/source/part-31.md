## tattva/molecules/GenerationProgress.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, XIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { MeterBar } from "../atoms/MeterBar";
import { Skeleton } from "../atoms/Skeleton";

/**
 * queued: waiting in line. generating: being made. streaming: playable already while the rest is made (audio).
 * finalising: almost done. done. failed. cancelled: the person stopped it.
 */
export type GenerationStatus = "queued" | "generating" | "streaming" | "finalising" | "done" | "failed" | "cancelled";

export interface GenerationProgressProps {
  status: GenerationStatus;
  /** 0 to 100. Shown as a bar while generating or streaming. Omit for an indeterminate state. */
  percent?: number;
  /** Place in the queue while queued. */
  queuePosition?: number;
  /** Time estimate such as "About 30 seconds left". */
  eta?: string;
  /** Shown while failed. */
  error?: string;
  onCancel?: () => void;
  onRetry?: () => void;
  /** While streaming, shows a Listen now button. Nothing plays until the person presses it. */
  onListen?: () => void;
  /** Text for the Listen now button. */
  listenLabel?: string;
  /** Result shown when done, and while streaming when it can already be played. Before then a placeholder of the same shape stands in. */
  preview?: ReactNode;
  /** Shape of the placeholder. `media` is a plain block (16:9 unless previewClassName says otherwise). `audio` is a flat waveform with a label. */
  previewShape?: "media" | "audio";
  /** Words in the audio placeholder, such as "Song, about 2 minutes". */
  previewLabel?: string;
  /** Classes for the preview area, to set its aspect ratio or height. */
  previewClassName?: string;
  /** What happens to the credits, such as "Cancelling now returns your 40 credits." Shown next to Cancel and after cancelling. Pass it only when you know it is true. */
  refundNote?: string;
  /** Replaces the text for each status. Also used for the announcement. */
  labels?: Partial<Record<GenerationStatus, string>>;
  className?: string;
}

const DEFAULT_LABELS: Record<GenerationStatus, string> = {
  queued: "Queued", generating: "Generating", streaming: "Ready to listen, still finishing", finalising: "Finalising",
  done: "Done", failed: "Generation failed", cancelled: "Cancelled",
};

/** A flat waveform: even, low bars, so it reads as "audio will be here" without pretending to show the sound. */
function AudioPlaceholder({ label, moving }: { label: string; moving: boolean }) {
  return (
    <div className="relative flex h-full min-h-16 items-center gap-3 bg-sunken px-3">
      <span aria-hidden className="absolute inset-x-3 inset-y-2">
        <svg viewBox="0 0 48 100" preserveAspectRatio="none" focusable="false" className="size-full">
          {Array.from({ length: 48 }, (_, i) => <rect key={i} x={i + 0.15} width={0.7} y={42} height={16} fill="var(--border-strong)" />)}
        </svg>
      </span>
      {moving && <span aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,color-mix(in_oklab,var(--surface)_60%,transparent)_50%,transparent_75%)] bg-[length:200%_100%] motion-safe:animate-shimmer" />}
      <span className="relative rounded-control bg-surface px-2 py-0.5 text-small text-fg-muted">{label}</span>
    </div>
  );
}

/**
 * Status for slow generation. The visible text can change often, but screen readers only hear status changes.
 * Streaming audio can be listened to before it is finished; Listen now never starts playback on its own.
 */
export function GenerationProgress({
  status, percent, queuePosition, eta, error, onCancel, onRetry, onListen, listenLabel = "Listen now", preview, previewShape = "media",
  previewLabel, previewClassName, refundNote, labels, className,
}: GenerationProgressProps) {
  const text = { ...DEFAULT_LABELS, ...labels };
  const active = status === "queued" || status === "generating" || status === "streaming" || status === "finalising";
  const determinate = (status === "generating" || status === "streaming") && percent !== undefined;
  const announcement = status === "failed" && error ? `${text.failed}. ${error}`
    : status === "cancelled" && refundNote ? `${text.cancelled}. ${refundNote}` : text[status];
  const pct = percent === undefined ? 0 : Math.round(Math.max(0, Math.min(100, percent)));
  const audio = previewShape === "audio";
  const showPreview = !!preview && (status === "done" || status === "streaming");
  const stopped = status === "failed" || status === "cancelled";
  const placeholderLabel = stopped ? (status === "cancelled" ? "Not made" : "No audio") : previewLabel ?? "The audio will appear here";

  return (
    <div className={cn("space-y-3 rounded-card border border-line bg-surface p-3", className)}>
      <p role="status" aria-live="polite" className="sr-only">{announcement}</p>
      <div className={cn("overflow-hidden rounded-card", previewClassName ?? (audio ? "" : "aspect-video"))}>
        {showPreview ? preview
          : audio ? <AudioPlaceholder label={placeholderLabel} moving={active} />
          : <Skeleton className={cn("h-full w-full", stopped && "animate-none")} />}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-body leading-5 font-medium" aria-hidden>
          {status === "done" && <CheckIcon width={14} height={14} />}
          {status === "failed" && <AlertIcon width={14} height={14} className="text-danger-fg" />}
          {status === "cancelled" && <XIcon width={14} height={14} className="text-fg-muted" />}
          <span className={status === "failed" ? "text-danger-fg" : undefined}>{text[status]}</span>
          {status === "queued" && queuePosition !== undefined && <span className="font-normal text-fg-muted">Position {queuePosition}</span>}
          {determinate && <span className="font-normal text-fg-muted">{pct}%</span>}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {active && eta && <span className="text-small leading-4 text-fg-muted">{eta}</span>}
          {status === "streaming" && onListen && <Button size="sm" variant="secondary" onClick={onListen} className="pointer-coarse:h-11">{listenLabel}</Button>}
          {active && onCancel && <Button size="sm" variant="secondary" onClick={onCancel} className="pointer-coarse:h-11">Cancel</Button>}
          {stopped && onRetry && <Button size="sm" variant="secondary" onClick={onRetry} className="pointer-coarse:h-11">{status === "cancelled" ? "Start again" : "Retry"}</Button>}
        </div>
      </div>
      {determinate && <MeterBar label="Generation progress" value={pct} valueText={`${pct}%`} />}
      {active && !determinate && status !== "queued" && <div aria-hidden className="h-1.5 w-full rounded-full bg-[linear-gradient(90deg,var(--border)_25%,var(--fg-subtle)_50%,var(--border)_75%)] bg-[length:200%_100%] animate-shimmer" />}
      {status === "failed" && error && <p className="text-small leading-4 text-fg-muted">{error}</p>}
      {refundNote && (active && onCancel || status === "cancelled") && <p className="text-small leading-4 text-fg-muted">{refundNote}</p>}
    </div>
  );
}
```

## tattva/molecules/InlineConfirm.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { Button } from "../atoms/Button";
import { cn } from "../lib/cn";

export interface InlineConfirmProps {
  /** The first button's label, for example "Delete chat". */
  children: ReactNode;
  /** Label of the button that does the action. */
  confirmLabel?: string;
  /** Label of the safe button that goes back. It gets focus when the question shows. */
  cancelLabel?: string;
  /** The question shown in place of the button. Defaults to the confirm label plus " this?". */
  question?: string;
  /** Called once when the confirm button is pressed. */
  onConfirm: () => void;
  /** danger draws the confirm button in the danger colour. */
  tone?: "danger" | "default";
  /** Milliseconds before the question quietly goes back to the first button. 0 turns this off. */
  timeout?: number;
  className?: string;
}

type Pause = "hover" | "focus" | "touch" | "hidden";

/** A button that asks "Are you sure?" in its own place instead of opening a dialog. */
export function InlineConfirm({ children, confirmLabel = "Delete", cancelLabel = "Keep it", question, onConfirm, tone = "default", timeout = 6000, className }: InlineConfirmProps) {
  const [asking, setAsking] = useState(false);
  const questionId = useId();
  const root = useRef<HTMLSpanElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const cancel = useRef<HTMLButtonElement>(null);
  // "trigger" or "cancel": where focus goes after the next swap. Visibility must change before focus can land.
  const focusNext = useRef<"trigger" | "cancel" | null>(null);

  const pauses = useRef(new Set<Pause>());
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const left = useRef(timeout);
  const startedAt = useRef(0);

  const close = (focusTrigger: boolean) => {
    clearTimeout(timer.current);
    timer.current = undefined;
    // Hover and touch are still true after a close; they are tracked all the time.
    pauses.current.delete("focus");
    pauses.current.delete("hidden");
    focusNext.current = focusTrigger ? "trigger" : null;
    setAsking(false);
  };

  // Runs the timer only while nothing pauses it, and keeps the time left across pauses.
  const sync = () => {
    if (!asking || timeout <= 0) return;
    if (pauses.current.size === 0 && timer.current === undefined) {
      startedAt.current = Date.now();
      timer.current = setTimeout(() => {
        timer.current = undefined;
        // Only take focus back if it was inside, so a timeout never pulls focus from elsewhere.
        close(!!root.current?.contains(document.activeElement));
      }, left.current);
    } else if (pauses.current.size > 0 && timer.current !== undefined) {
      clearTimeout(timer.current);
      timer.current = undefined;
      left.current -= Date.now() - startedAt.current;
    }
  };
  const pause = (p: Pause, on: boolean) => {
    if (on) pauses.current.add(p); else pauses.current.delete(p);
    sync();
  };

  useEffect(() => {
    if (asking) left.current = timeout;
    const target = focusNext.current === "cancel" ? cancel.current : focusNext.current === "trigger" ? trigger.current : null;
    focusNext.current = null;
    target?.focus();
    if (!asking) return;
    const onVis = () => pause("hidden", document.visibilityState === "hidden");
    onVis();
    sync();
    document.addEventListener("visibilitychange", onVis);
    return () => { document.removeEventListener("visibilitychange", onVis); clearTimeout(timer.current); timer.current = undefined; };
  }, [asking]);

  const ask = () => { focusNext.current = "cancel"; setAsking(true); };
  const confirm = () => { close(true); onConfirm(); };

  const onKeyDown = (e: KeyboardEvent) => {
    if (asking && e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(true); }
  };
  // Keyboard focus pauses the timer. Focus moved there after a mouse press does not, so the question still times out.
  const onFocusIn = (e: FocusEvent) => { if (asking) pause("focus", (e.target as HTMLElement).matches(":focus-visible")); };
  const onFocusOut = (e: FocusEvent) => { if (!root.current?.contains(e.relatedTarget as Node | null)) pause("focus", false); };
  const onEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") pause("hover", true); };
  const onLeave = (e: PointerEvent) => { if (e.pointerType === "mouse") pause("hover", false); };

  const q = question ?? `${confirmLabel} this?`;

  return (
    <span
      ref={root}
      onKeyDown={onKeyDown}
      onFocus={onFocusIn}
      onBlur={onFocusOut}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onTouchStart={() => pause("touch", true)}
      onTouchEnd={() => pause("touch", false)}
      onTouchCancel={() => pause("touch", false)}
      // Two columns: the first holds the button and, stacked on it, the question and Cancel. Confirm sits in the
      // second, so it can never appear under the pointer that pressed the first button.
      className={cn("inline-grid grid-cols-[auto_auto] items-center gap-x-2 align-middle", className)}
    >
      <span className={cn("col-start-1 row-start-1 justify-self-start", asking && "invisible")}>
        <Button ref={trigger} variant="secondary" size="sm" onClick={ask}>{children}</Button>
      </span>
      <span className={cn("col-start-1 row-start-1 flex items-center gap-2", asking ? "motion-safe:animate-fade" : "invisible")}>
        <span id={questionId} className="text-compact text-fg">{q}</span>
        <Button ref={cancel} variant="secondary" size="sm" onClick={() => close(true)}>{cancelLabel}</Button>
      </span>
      <span className={cn("col-start-2 row-start-1", asking ? "motion-safe:animate-fade" : "invisible")}>
        <Button variant={tone === "danger" ? "danger" : "primary"} size="sm" onClick={confirm} aria-describedby={questionId}>{confirmLabel}</Button>
      </span>
      <span role="status" aria-live="polite" className="sr-only">{asking ? q : ""}</span>
    </span>
  );
}
```
