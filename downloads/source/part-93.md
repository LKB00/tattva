## tattva/organisms/StemMixer.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, DownloadIcon, LockIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { Slider } from "../atoms/Slider";
import { Skeleton } from "../atoms/Skeleton";
import { Waveform } from "../atoms/Waveform";

/** Where the split into stems is. `separating`: the AI is splitting the song. `ready`: stems can be mixed and exported. `failed`: the split did not work. `plan-locked`: the person's plan does not include stems. */
export type StemMixerStatus = "separating" | "ready" | "failed" | "plan-locked";

export interface Stem {
  id: string;
  /** Plain name, such as "Vocals" or "Drums". */
  name: string;
  /** Loudness per slice, 0 to 1. Leave out for no waveform. */
  peaks?: number[];
  /** Level, 0 to 100. */
  level: number;
  muted: boolean;
  soloed: boolean;
  /** Picked for export. */
  exported: boolean;
}

export interface StemMixerProps {
  stems: Stem[];
  status: StemMixerStatus;
  /** Length of the song, in seconds, for the waveforms. */
  duration?: number;
  /** Playhead, in seconds, drawn on each waveform. */
  position?: number;
  onLevelChange?: (id: string, level: number) => void;
  onMuteChange?: (id: string, muted: boolean) => void;
  onSoloChange?: (id: string, soloed: boolean) => void;
  onExportChange?: (id: string, exported: boolean) => void;
  /** Exports the picked stems. */
  onExport?: (ids: string[]) => void;
  /** Format and limits beside Export, such as "WAV, 3 downloads left this month". */
  exportNote?: string;
  /** While separating: what is happening, such as "Splitting into 4 stems. About a minute." No percentages. */
  separatingNote?: string;
  /** When failed: what happened and whether it was charged. */
  failedNote?: string;
  onRetry?: () => void;
  /** When plan-locked: which plan has stems. */
  planNote?: string;
  /** When plan-locked: opens the plans page. */
  onSeePlans?: () => void;
  /** Rows shown while separating, before stem names are known. */
  placeholderCount?: number;
  title?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const STATUS_WORD: Record<StemMixerStatus, string> = { separating: "Separating", ready: "Ready", failed: "Did not work", "plan-locked": "Not on your plan" };

/**
 * One lane per stem of a song: Mute, Solo, a named level slider and a box to pick it for export.
 * Shows the separation state in words: separating, ready, failed or not on the person's plan.
 * Rows stack on a phone and the waveforms hide when the mixer is narrower than about 400px.
 */
export function StemMixer({
  stems, status, duration = 0, position = 0, onLevelChange, onMuteChange, onSoloChange, onExportChange, onExport, exportNote,
  separatingNote = "Splitting the song into stems. About a minute.", failedNote = "The song could not be split. You were not charged.", onRetry,
  planNote = "Stems come with the Pro plan.", onSeePlans, placeholderCount = 4, title = "Stems", headingLevel = 3, className,
}: StemMixerProps) {
  const H = headingTag(headingLevel);
  const uid = useId();
  const [message, setMessage] = useState("");
  const anySolo = stems.some((s) => s.soloed);
  const picked = stems.filter((s) => s.exported);

  // Announce a change of separation status only.
  const lastStatus = useRef(status);
  useEffect(() => {
    if (lastStatus.current === status) return;
    lastStatus.current = status;
    setMessage(status === "ready" ? `${stems.length} stems ready.` : status === "failed" ? "Separation did not work." : status === "separating" ? "Separating." : "");
  }, [status, stems.length]);

  const toggleSolo = (s: Stem) => {
    onSoloChange?.(s.id, !s.soloed);
    const others = stems.filter((x) => x.soloed && x.id !== s.id).length;
    setMessage(!s.soloed ? `${s.name} soloed. Stems not soloed are silent.` : others ? `${s.name} no longer soloed.` : `${s.name} no longer soloed. All stems play.`);
  };
  const toggleMute = (s: Stem) => {
    onMuteChange?.(s.id, !s.muted);
    setMessage(`${s.name} ${s.muted ? "unmuted" : "muted"}.`);
  };

  const toggle = (on: boolean) => cn("tap h-8 min-w-14 cursor-pointer rounded-control border px-2.5 text-small leading-4.5 font-medium transition-colors duration-(--dur-fast) pointer-coarse:h-11 disabled:cursor-not-allowed disabled:border-disabled-line disabled:bg-disabled disabled:text-disabled-fg",
    on ? "border-fg bg-fg text-bg" : "border-line bg-surface text-fg-muted hover:bg-hover hover:text-fg");

  return (
    <section aria-labelledby={`${uid}-h`} aria-busy={status === "separating" || undefined}
      className={cn("@container w-full min-w-0 space-y-3 rounded-card border border-line bg-surface p-4", className)}>
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <H id={`${uid}-h`} className="text-lead leading-6 font-semibold text-fg">{title}</H>
        <p className="inline-flex items-center gap-1.5 text-small leading-4.5 font-medium text-fg">
          {status === "separating" && <span aria-hidden className="size-2 shrink-0 rounded-full bg-lime motion-safe:animate-pulse" />}
          {status === "ready" && <span className="inline-flex items-center gap-1 font-normal text-fg-muted"><span aria-hidden className="size-2 shrink-0 rounded-full bg-lime ring-1 ring-fg-muted" />Split by AI ·</span>}
          {status === "failed" && <AlertIcon width={12} height={12} aria-hidden />}
          {status === "plan-locked" && <LockIcon width={12} height={12} aria-hidden />}
          {status === "ready" ? `${stems.length} stems` : STATUS_WORD[status]}
        </p>
      </header>

      {status === "separating" && (
        <div className="space-y-2">
          <p className="text-compact text-fg-muted">{separatingNote}</p>
          <ul aria-hidden className="space-y-2">
            {Array.from({ length: placeholderCount }, (_, i) => (
              <li key={i} className="flex items-center gap-3 rounded-card border border-line p-2.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-6 flex-1 @max-sm:hidden" />
                <Skeleton className="h-4 w-24" />
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "failed" && (
        <div className="flex flex-wrap items-center gap-3 rounded-card border border-line bg-sunken p-3">
          <p className="min-w-0 flex-1 text-compact text-fg">{failedNote}</p>
          {onRetry && <Button size="sm" variant="secondary" className="pointer-coarse:h-11" onClick={onRetry}>Try again</Button>}
        </div>
      )}

      {status === "plan-locked" && (
        <div className="flex flex-wrap items-center gap-3 rounded-card border border-dashed border-line-strong p-3">
          <LockIcon width={16} height={16} aria-hidden className="shrink-0 text-fg-muted" />
          <p className="min-w-0 flex-1 text-compact text-fg">{planNote} You can still export the full song.</p>
          {onSeePlans && <Button size="sm" variant="secondary" className="pointer-coarse:h-11" onClick={onSeePlans}>See plans</Button>}
        </div>
      )}

      {status === "ready" && (
        <>
          <ul aria-label={`${title}, ${stems.length}`} className="divide-y divide-line rounded-card border border-line">
            {stems.map((s) => {
              const silent = s.muted || (anySolo && !s.soloed);
              const why = s.muted ? "Muted" : anySolo && !s.soloed ? "Silent while another stem is soloed" : s.soloed ? "Soloed" : "";
              return (
                <li key={s.id} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 p-2.5 @3xl:grid-cols-[auto_minmax(6rem,9rem)_auto_minmax(0,1fr)_minmax(8rem,10rem)]">
                  <Checkbox checked={s.exported} onChange={(v) => onExportChange?.(s.id, v)} ariaLabel={`Export ${s.name}`} />
                  <div className="min-w-0">
                    <p className="truncate text-compact font-medium text-fg">{s.name}</p>
                    <p className={cn("text-small leading-4.5", why ? "text-fg-muted" : "text-fg-subtle")}>{why || "Playing"}</p>
                  </div>
                  <div className="col-span-2 flex items-center gap-1.5 @3xl:col-span-1">
                    <button type="button" aria-pressed={s.muted} aria-label={`Mute ${s.name}`} onClick={() => toggleMute(s)} className={toggle(s.muted)}>Mute</button>
                    <button type="button" aria-pressed={s.soloed} aria-label={`Solo ${s.name}`} onClick={() => toggleSolo(s)} className={toggle(s.soloed)}>Solo</button>
                  </div>
                  <div className={cn("col-span-2 min-w-0 @max-sm:hidden @3xl:col-span-1", silent && "opacity-40")}>
                    {s.peaks && duration > 0 && <Waveform peaks={s.peaks} duration={duration} position={position} height={32} />}
                  </div>
                  <Slider className="col-span-2 @3xl:col-span-1" label={`${s.name} level`} value={s.level} onChange={(v) => onLevelChange?.(s.id, v)}
                    showValue formatValue={(v) => `${v}%`} />
                </li>
              );
            })}
          </ul>
          {onExport && (
            <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2">
              {exportNote && <span className="text-small leading-4.5 text-fg-muted">{exportNote}</span>}
              <Button size="sm" className="pointer-coarse:h-11" disabled={picked.length === 0} leading={<DownloadIcon width={14} height={14} aria-hidden />}
                onClick={() => onExport(picked.map((s) => s.id))}>
                {picked.length === 0 ? "Pick stems to export" : `Export ${picked.length} of ${stems.length} stems`}
              </Button>
            </div>
          )}
        </>
      )}

      <p role="status" aria-live="polite" className="sr-only">{message}</p>
    </section>
  );
}
```

## tattva/organisms/StepTimeline.tsx

```tsx
import { cn } from "../lib/cn";
import { CheckIcon, XIcon } from "../lib/icons";
import { Spinner } from "../atoms/Spinner";

export type StepState = "done" | "active" | "todo" | "failed";
export interface Step { id: string; title: string; detail?: string; state: StepState }

export function StepTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol aria-label="Task progress" className="space-y-0">
      {steps.map((s, i) => (
        <li key={s.id} className="relative flex gap-3 pb-4 last:pb-0" aria-current={s.state === "active" ? "step" : undefined}>
          {i < steps.length - 1 && <span aria-hidden className={cn("absolute top-6 bottom-0 left-2.75 w-px", s.state === "done" ? "bg-success" : "bg-line")} />}
          <span className={cn("z-10 flex size-6 shrink-0 items-center justify-center rounded-full border text-small leading-4",
            s.state === "done" && "border-success bg-success text-on-success",
            s.state === "failed" && "border-danger bg-danger text-on-danger",
            s.state === "active" && "border-accent bg-surface",
            s.state === "todo" && "border-line-strong bg-surface text-fg-subtle")}>
            {s.state === "done" ? <CheckIcon width={12} height={12} /> : s.state === "failed" ? <XIcon width={12} height={12} /> : s.state === "active" ? <Spinner size={14} /> : i + 1}
          </span>
          <div className="min-w-0 pt-0.5">
            <p className={cn("text-body leading-5 font-medium", s.state === "todo" && "text-fg-subtle")}>{s.title}</p>
            {s.detail && <p className="text-small leading-4 text-fg-muted">{s.detail}</p>}
            <span className="sr-only">{s.state}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
```
