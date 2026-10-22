## tattva/organisms/VoicePicker.tsx

```tsx
import { useEffect, useId, useMemo, useState } from "react";
import { cn } from "../lib/cn";
import { Skeleton } from "../atoms/Skeleton";
import { VoiceCard, useSimulatedSamples, type VoiceConsent, type VoicePreview, type VoiceSource, type VoiceStatus } from "../molecules/VoiceCard";

export interface VoiceOption {
  id: string;
  name: string;
  description?: string;
  /** Used for the filter chips as well as shown on the card. */
  tags?: string[];
  source: VoiceSource;
  owner?: string;
  consent?: VoiceConsent;
  status?: VoiceStatus;
  /** Written-out date from your code, for example "3 March 2027". */
  withdrawsOn?: string;
  lockedReason?: string;
  /** Sample length in seconds, for the built-in stand-in player. */
  sampleSeconds?: number;
  /** Makes the stand-in sample fail, to show the error state. */
  sampleFails?: boolean;
}

export interface VoicePickerProps {
  voices: VoiceOption[];
  /** Id of the chosen voice. */
  value?: string;
  onChange: (id: string) => void;
  /** Name of the group, shown above the list. */
  label?: string;
  hideLabel?: boolean;
  /** Shows filter chips built from the voices' tags. */
  filters?: boolean;
  /** Placeholder rows while the voices load. */
  loading?: boolean;
  /** One column (the default), or two columns from 640px wide. Always one column on a phone. */
  layout?: "list" | "grid";
  /**
   * Your own player. Return the preview for a voice. Leave out to use the stand-in player, which simulates a sample
   * with a timer. Either way only one sample plays at a time: when one starts, stop the others.
   */
  previewFor?: (voice: VoiceOption) => VoicePreview;
  /** Text when there are no voices at all. */
  emptyText?: string;
  className?: string;
}

/**
 * A radio group of VoiceCards with optional tag filters. Each card has its own sample button, and starting one sample
 * stops any other. Choosing a voice never plays it, and nothing plays by itself.
 */
export function VoicePicker({
  voices, value, onChange, label = "Voice", hideLabel, filters = false, loading = false, layout = "list",
  previewFor, emptyText = "No voices yet.", className,
}: VoicePickerProps) {
  const labelId = useId();
  const group = useId();
  const sim = useSimulatedSamples();
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => Array.from(new Set(voices.flatMap((v) => v.tags ?? []))), [voices]);
  const shown = tag ? voices.filter((v) => v.tags?.includes(tag)) : voices;

  // A sample for a voice the filter just hid would keep playing out of sight, so stop it.
  const { id: playingId, stop } = sim;
  useEffect(() => { if (playingId && !shown.some((v) => v.id === playingId)) stop(); }, [playingId, shown, stop]);

  const preview = (v: VoiceOption) => previewFor ? previewFor(v) : sim.previewFor(v.id, { seconds: v.sampleSeconds ?? 8, fails: v.sampleFails });

  const chip = (t: string | null, text: string) => {
    const on = tag === t;
    return (
      <li key={text}>
        <button type="button" aria-pressed={on} onClick={() => setTag(t)}
          className={cn("tap inline-flex h-8 cursor-pointer items-center gap-1 rounded-control border px-3 text-compact transition-colors duration-(--dur-fast)",
            on ? "border-fg bg-fg text-bg" : "border-line bg-surface text-fg-muted hover:border-line-strong hover:text-fg")}>
          {text}
        </button>
      </li>
    );
  };

  return (
    <div className={cn("min-w-0", className)}>
      <p id={labelId} className={cn("mb-2 text-body leading-5 font-medium text-fg", hideLabel && "sr-only")}>{label}</p>

      {filters && tags.length > 0 && !loading && (
        <ul aria-label={`Filter ${label.toLowerCase()} by tag`} className="mb-3 flex flex-wrap gap-2">
          {chip(null, "All")}
          {tags.map((t) => chip(t, t))}
        </ul>
      )}

      {loading ? (
        <div aria-busy="true" aria-labelledby={labelId} className="space-y-2">
          <span role="status" className="sr-only">Loading voices</span>
          {[0, 1, 2].map((i) => <Skeleton key={i} className="h-20 w-full rounded-card" />)}
        </div>
      ) : voices.length === 0 ? (
        <p className="rounded-card border border-dashed border-line px-4 py-6 text-center text-compact text-fg-muted">{emptyText}</p>
      ) : shown.length === 0 ? (
        <div className="rounded-card border border-dashed border-line px-4 py-6 text-center text-compact text-fg-muted">
          <p>No voices tagged {tag}.</p>
          <button type="button" onClick={() => setTag(null)} className="tap mt-1 cursor-pointer text-fg underline underline-offset-2">Show all voices</button>
        </div>
      ) : (
        <div role="radiogroup" aria-labelledby={labelId}
          className={cn("grid gap-2", layout === "grid" && "sm:grid-cols-2")}>
          {shown.map((v) => (
            <VoiceCard key={v.id} groupName={group} name={v.name} description={v.description} tags={v.tags} source={v.source}
              owner={v.owner} consent={v.consent} status={v.status} withdrawsOn={v.withdrawsOn} lockedReason={v.lockedReason}
              selected={v.id === value} onSelect={() => onChange(v.id)} preview={preview(v)} />
          ))}
        </div>
      )}
      {filters && !loading && voices.length > 0 && (
        <p role="status" className="sr-only">{tag ? `${shown.length} ${shown.length === 1 ? "voice" : "voices"} tagged ${tag}` : ""}</p>
      )}
    </div>
  );
}
```
