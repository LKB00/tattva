## tattva/molecules/EmptyState.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon } from "../lib/icons";
import { Illustration, type IllustrationName } from "../atoms/Illustration";

export type EmptyStateVariant = "first-use" | "no-results" | "cleared" | "error" | "permission" | "offline" | "rate-limit";

interface Preset {
  art: IllustrationName;
  title: string;
  body: string;
  /** True when a person must act, which is the only time amber appears. */
  attention: boolean;
  /** Whether the region announces itself when it appears. */
  live: boolean;
}

/** Default copy follows "cause, then next step". Every string can be overridden. */
const presets: Record<EmptyStateVariant, Preset> = {
  "first-use": { art: "empty-chat", title: "Start your first chat", body: "Nothing is here yet. Ask a question or add a file to begin.", attention: false, live: false },
  "no-results": { art: "no-results", title: "No results for these filters", body: "Try a shorter search or clear the filters.", attention: false, live: true },
  cleared: { art: "success", title: "Everything here is done", body: "New items will show up as they arrive.", attention: false, live: false },
  error: { art: "error", title: "We could not load this", body: "The request failed on our side and your work is safe. Try again.", attention: false, live: false },
  permission: { art: "permission", title: "You need access to see this", body: "This project is private. Ask an owner to add you.", attention: true, live: false },
  offline: { art: "offline", title: "You are offline", body: "Changes are saved on this device and will sync when you reconnect.", attention: false, live: true },
  "rate-limit": { art: "rate-limit", title: "You reached the usage limit", body: "Wait for the limit to reset or upgrade your plan to continue.", attention: true, live: false },
};

export interface EmptyStateProps {
  /** Preset that sets the default art, copy, tone and live behavior. */
  variant?: EmptyStateVariant;
  /** Art slot. Omit for the variant's illustration, pass `null` for none, or pass an Illustration or Pictogram. */
  art?: ReactNode | null;
  /** Names the cause or invites the first step. */
  title?: string;
  /** One short line that gives the next step. */
  children?: ReactNode;
  /** The one primary action, usually a Button. */
  action?: ReactNode;
  /** Optional secondary link or ghost button. */
  secondary?: ReactNode;
  /** `center` suits full panels. `start` left-aligns text for small areas. */
  layout?: "center" | "start";
  /** Drops the art for dense contexts such as tables and menus. */
  compact?: boolean;
  /** Heading level of the title. */
  headingLevel?: 2 | 3 | 4;
  /** Overrides whether the region has role="status". Defaults per variant: no-results and offline only. */
  live?: boolean;
  /** Label of the amber chip shown for permission and rate-limit. */
  attentionLabel?: string;
  className?: string;
}

/**
 * Message for an area with nothing to show. It names the cause, gives one next step and optionally shows art.
 * Presets cover first use, no results, cleared, error, permission, offline and rate limit.
 */
export function EmptyState({
  variant = "first-use", art, title, children, action, secondary, layout = "center", compact = false,
  headingLevel = 3, live, attentionLabel = "Action needed", className,
}: EmptyStateProps) {
  const p = presets[variant];
  const Heading = `h${headingLevel}` as "h3";
  const center = layout === "center";
  const artNode = compact ? null : art === undefined ? <Illustration name={p.art} size={center ? 96 : 64} /> : art;
  const isLive = live ?? p.live;
  return (
    <div
      role={isLive ? "status" : undefined}
      className={cn("flex flex-col gap-4 rounded-card border border-line bg-surface p-6", center ? "items-center text-center" : "items-start text-left", compact && "gap-3 p-4", className)}
    >
      {artNode && <div aria-hidden={art === undefined ? true : undefined} className="shrink-0">{artNode}</div>}
      <div className={cn("min-w-0 max-w-[44ch]", center && "mx-auto")}>
        {p.attention && (
          <p className={cn("mb-2 inline-flex items-center gap-1.5 rounded-control bg-attention-soft px-2.5 py-0.5 text-micro font-medium text-attention-fg")}>
            <AlertIcon width={12} height={12} />{attentionLabel}
          </p>
        )}
        <Heading className="text-lead-lg leading-6 [overflow-wrap:anywhere]">{title ?? p.title}</Heading>
        <p className="mt-1.5 text-body leading-6 text-fg-muted">{children ?? p.body}</p>
      </div>
      {(action || secondary) && (
        <div className={cn("flex flex-wrap items-center gap-2", center && "justify-center")}>
          {action}{secondary}
        </div>
      )}
    </div>
  );
}
```

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
