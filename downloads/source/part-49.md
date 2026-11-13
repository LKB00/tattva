## tattva/molecules/VoiceCard.tsx

```tsx
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, HistoryIcon, LockIcon, ShieldIcon, StopIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";

export type VoiceSource = "builtIn" | "designed" | "cloned" | "library";
export type VoiceConsent = "self-verified" | "licensed" | "none";
export type VoiceStatus = "available" | "withdrawing" | "withdrawn" | "locked";
export type PreviewState = "idle" | "loading" | "playing" | "error";

export interface VoicePreview {
  state: PreviewState;
  /** Starts the sample, or stops it when it is loading or playing. */
  onToggle: () => void;
  /** Seconds played so far, for the readout while playing. */
  elapsed?: number;
  /** Length of the sample in seconds. */
  duration?: number;
}

export interface VoiceCardProps {
  name: string;
  /** One short line about how it sounds, for example "Warm, unhurried, good for long reads". */
  description?: string;
  /** Short tags such as accent, age range or use case. */
  tags?: string[];
  /** Where the voice came from. Built in, designed from a description, cloned from a recording, or shared in a library. */
  source: VoiceSource;
  /** Person the voice belongs to. For a cloned voice, leave it out when it is the person's own voice. */
  owner?: string;
  /** How the owner agreed. "none" on a cloned voice asks the person to verify it. */
  consent?: VoiceConsent;
  /** The sample player. Never starts by itself. */
  preview?: VoicePreview;
  status?: VoiceStatus;
  /** Date the voice stops working, already written out by your code, for example "3 March 2027". Shown when withdrawing. */
  withdrawsOn?: string;
  /** Why a locked voice cannot be chosen, for example "Needs the Studio plan". */
  lockedReason?: string;
  /** Shows the card as chosen. Only with onSelect. */
  selected?: boolean;
  /** Makes the card a radio. Leave out for a card that only plays its sample. */
  onSelect?: () => void;
  /** Radio group name. VoicePicker sets it. */
  groupName?: string;
  className?: string;
}

const sourceText: Record<VoiceSource, string> = { builtIn: "Built in", designed: "Designed", cloned: "Cloned", library: "From the library" };

/** "0:07" for seven seconds. */
export const formatSeconds = (s: number) => {
  const t = Math.max(0, Math.floor(s));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
};

function ownershipLine(source: VoiceSource, owner?: string, consent?: VoiceConsent): { text: string; needsYou?: boolean } | null {
  if (source === "cloned") {
    if (consent === "none") return { text: owner ? `Cloned from ${owner}. Not verified yet` : "Not verified yet. Verify it to use it", needsYou: true };
    if (!owner) return { text: "Your voice, verified" };
    return { text: consent === "licensed" ? `${owner}'s voice, licensed` : `${owner}'s voice, verified` };
  }
  if (source === "library" && owner) return { text: consent === "licensed" ? `Shared by ${owner}, licensed` : `Shared by ${owner}` };
  if (owner) return { text: `Made by ${owner}` };
  return null;
}

/** Three small bars that move only while the sample plays. Under reduced motion they hold still at mid height. */
function PreviewBars({ playing, tick }: { playing: boolean; tick: number }) {
  const shape = [0.5, 0.9, 0.65, 0.8];
  return (
    <span aria-hidden className="flex h-4 items-center gap-0.5">
      {shape.map((h, i) => {
        const live = playing ? 0.35 + (((tick + i * 3) * 37) % 65) / 100 : h * 0.5;
        return (
          <span key={i} style={{ ["--lvl" as string]: String(live) }}
            className="h-4 w-0.5 origin-center scale-y-50 rounded-full bg-fg-muted motion-safe:scale-y-(--lvl) motion-safe:transition-transform motion-safe:duration-(--dur-fast)" />
        );
      })}
    </span>
  );
}

const PlayGlyph = (p: { className?: string }) => (
  <svg aria-hidden width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.2-6.5a1 1 0 0 0 0-1.7L9.5 4.6A1 1 0 0 0 8 5.5z" /></svg>
);

/**
 * One voice: its name, how it sounds, who it belongs to and whether it can be used, with a sample button.
 * Choosing the voice and playing its sample are separate controls. Give it onSelect to make it a radio inside VoicePicker.
 */
export function VoiceCard({
  name, description, tags, source, owner, consent, preview, status = "available", withdrawsOn,
  lockedReason = "Not on your plan", selected = false, onSelect, groupName, className,
}: VoiceCardProps) {
  const id = useId();
  const own = ownershipLine(source, owner, consent);
  const withdrawn = status === "withdrawn";
  const locked = status === "locked";
  const blocked = withdrawn || locked;
  const pState = preview?.state ?? "idle";
  const busy = pState === "loading" || pState === "playing";
  const tick = Math.round((preview?.elapsed ?? 0) * 4);

  const previewLabel = pState === "playing" ? `Stop sample of ${name}` : pState === "loading" ? `Stop loading sample of ${name}`
    : pState === "error" ? `Try the sample of ${name} again` : `Play sample of ${name}`;
  // Said once per change of state, never per second.
  const announce = pState === "playing" ? `Playing sample of ${name}` : pState === "loading" ? `Loading sample of ${name}`
    : pState === "error" ? `The sample of ${name} did not load` : "";

  const statusLine: ReactNode =
    status === "withdrawing" ? <><HistoryIcon width={14} height={14} className="shrink-0" />{withdrawsOn ? `Available until ${withdrawsOn}` : "Being withdrawn by its owner"}</>
    : withdrawn ? <><XCircle />Withdrawn by its owner. No longer available</>
    : locked ? <><LockIcon width={14} height={14} className="shrink-0" />{lockedReason}</>
    : null;

  const heading = onSelect
    ? <label htmlFor={`${id}-r`} className={cn("text-body leading-5 font-medium text-fg after:absolute after:inset-0 after:rounded-card after:content-['']", blocked ? "cursor-not-allowed" : "cursor-pointer")}>{name}</label>
    : <p className="text-body leading-5 font-medium text-fg">{name}</p>;

  return (
    <div className={cn(
      "relative flex items-start gap-3 rounded-card border bg-surface p-3 transition-colors duration-(--dur-fast) ease-(--ease-out)",
      selected ? "border-fg" : "border-line", onSelect && !blocked && !selected && "hover:border-line-strong",
      "has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-accent",
      className,
    )}>
      {onSelect && (
        <span className="relative mt-0.5 inline-grid size-5 shrink-0 place-items-center">
          <input id={`${id}-r`} type="radio" name={groupName} checked={selected} disabled={blocked}
            aria-describedby={`${id}-d`} onChange={() => onSelect()}
            className={cn("peer size-5 appearance-none rounded-full border bg-surface outline-none transition-colors duration-(--dur-fast) checked:border-accent forced-colors:border-[ButtonText] forced-colors:checked:border-[Highlight]",
              "border-line-strong", blocked ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer")} />
          <span aria-hidden className="pointer-events-none absolute size-2.5 scale-0 rounded-full bg-accent transition-transform duration-(--dur-fast) peer-checked:scale-100 forced-colors:bg-[Highlight]" />
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {heading}
          {selected && <span className="inline-flex items-center gap-1 text-small leading-4.5 text-fg"><CheckIcon width={12} height={12} />Selected</span>}
        </div>
        <div id={`${id}-d`} className={cn("mt-0.5 space-y-1", blocked && "text-fg-subtle")}>
          {description && <p className="text-compact text-fg-muted">{description}</p>}
          <p className="flex flex-wrap items-center gap-1">
            <Badge>{sourceText[source]}</Badge>
            {tags?.map((t) => <Badge key={t}>{t}</Badge>)}
          </p>
          {own && (
            <p className={cn("flex items-center gap-1 text-small leading-4.5", own.needsYou ? "text-warning-fg" : "text-fg-muted")}>
              {own.needsYou ? <AlertIcon width={14} height={14} className="shrink-0" /> : <ShieldIcon width={14} height={14} className="shrink-0" />}{own.text}
            </p>
          )}
          {statusLine && <p className="flex items-center gap-1 text-small leading-4.5 text-fg-muted">{statusLine}</p>}
          {withdrawn && selected && (
            <p className="rounded-control bg-warning-soft px-2 py-1 text-small leading-4.5 text-warning-fg">You are still on this voice. Pick another one.</p>
          )}
          {preview && pState !== "idle" && (
            <div className="flex items-center gap-2 pt-0.5 text-small leading-4.5 text-fg-muted" aria-hidden>
              {pState === "loading" && <span>Loading sample…</span>}
              {pState === "error" && <span className="flex items-center gap-1 text-danger-fg"><AlertIcon width={14} height={14} />Sample did not load</span>}
              {pState === "playing" && (
                <>
                  <PreviewBars playing tick={tick} />
                  <span className="tabular-nums">Playing {formatSeconds(preview.elapsed ?? 0)}{preview.duration ? ` of ${formatSeconds(preview.duration)}` : ""}</span>
                  {preview.duration ? (
                    <span className="h-1 min-w-8 flex-1 overflow-hidden rounded-full bg-line">
                      <span className="block h-full origin-left rounded-full bg-fg" style={{ transform: `scaleX(${Math.min(1, (preview.elapsed ?? 0) / preview.duration)})` }} />
                    </span>
                  ) : null}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {preview && !withdrawn && (
        <button type="button" onClick={preview.onToggle} aria-label={previewLabel} title={previewLabel}
          className={cn("relative z-10 inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors duration-(--dur-fast) pointer-coarse:size-11",
            busy ? "border-inverse bg-inverse text-inverse-fg" : "border-line bg-surface text-fg hover:bg-hover")}>
          {pState === "playing" ? <StopIcon width={14} height={14} />
            : pState === "loading" ? <svg aria-hidden viewBox="0 0 24 24" className="size-4 motion-safe:animate-spin"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" /><path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            : pState === "error" ? <AlertIcon width={16} height={16} />
            : <PlayGlyph />}
        </button>
      )}
      <span role="status" className="sr-only">{announce}</span>
    </div>
  );
}

const XCircle = () => (
  <svg aria-hidden width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="shrink-0"><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></svg>
);

/* ---------- simulated sample playback ---------- */

export interface SampleSpec {
  /** Length of the sample in seconds. */
  seconds: number;
  /** Makes the sample fail to load, to show the error state. */
  fails?: boolean;
}

export interface SamplePlayback {
  /** Voice whose sample is loading, playing or failed. Null when nothing is. */
  id: string | null;
  state: PreviewState;
  elapsed: number;
  /** Plays the sample for this id, or stops it if it is the one already going. Starting one stops any other. */
  toggle: (id: string, spec: SampleSpec) => void;
  stop: () => void;
  /** The preview prop for one card. */
  previewFor: (id: string, spec: SampleSpec) => VoicePreview;
}

/**
 * Stand-in for real audio: a short load, then a timer that counts up to the sample length. Only one sample plays at a time.
 * Swap it for your own player and pass the same preview shape to each card.
 */
export function useSimulatedSamples({ loadMs = 600, tickMs = 250 }: { loadMs?: number; tickMs?: number } = {}): SamplePlayback {
  const [id, setId] = useState<string | null>(null);
  const [state, setState] = useState<PreviewState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const timers = useRef<number[]>([]);
  const clear = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current.forEach((t) => window.clearInterval(t)); timers.current = []; };
  useEffect(() => clear, []);

  const stop = useCallback(() => { clear(); setId(null); setState("idle"); setElapsed(0); }, []);

  const toggle = useCallback((next: string, spec: SampleSpec) => {
    if (next === id && (state === "loading" || state === "playing")) { stop(); return; }
    clear();
    setId(next); setState("loading"); setElapsed(0);
    timers.current.push(window.setTimeout(() => {
      if (spec.fails) { setState("error"); return; }
      setState("playing");
      let t = 0;
      const iv = window.setInterval(() => {
        t += tickMs / 1000;
        if (t >= spec.seconds) { clear(); setId(null); setState("idle"); setElapsed(0); return; }
        setElapsed(t);
      }, tickMs);
      timers.current.push(iv);
    }, loadMs));
  }, [id, state, stop, loadMs, tickMs]);

  const previewFor = (v: string, spec: SampleSpec): VoicePreview => ({
    state: v === id ? state : "idle",
    elapsed: v === id ? elapsed : 0,
    duration: spec.seconds,
    onToggle: () => toggle(v, spec),
  });

  return { id, state, elapsed, toggle, stop, previewFor };
}
```
