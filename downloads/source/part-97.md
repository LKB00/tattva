## tattva/organisms/TranscriptSync.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { AIMark } from "../atoms/AIMark";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { formatMediaTime } from "../atoms/Waveform";
import { AudioPlayer } from "../molecules/AudioPlayer";
import type { AudioPlayerProps } from "../molecules/AudioPlayer";

export interface TranscriptLine {
  id: string;
  /** Key into `speakers`. */
  speaker: string;
  /** When the line starts, in seconds from the start of the recording. */
  start: number;
  /** When it ends. Defaults to the start of the next line. */
  end?: number;
  text: string;
  /** Wall-clock time, such as "14:02:10", shown beside the offset. */
  clock?: string;
  /** `interrupted`: the speaker was cut off, and only the first `spokenUpTo` characters were played. `redacted`: the text was hidden, such as a card number. */
  status?: "final" | "interrupted" | "redacted";
  /** With `interrupted`, how many characters were actually spoken. The rest is struck through and marked Not spoken. */
  spokenUpTo?: number;
}

export interface TranscriptSpeaker {
  /** Name shown on each line, such as "Maya Okafor" or "Support assistant". */
  label: string;
  /** This speaker is an AI. Its lines get the AI mark; people's lines stay neutral. */
  ai?: boolean;
}

export interface TranscriptSyncProps {
  lines: TranscriptLine[];
  /** Who is who. Every `speaker` in lines needs an entry. */
  speakers: Record<string, TranscriptSpeaker>;
  /** Wires in a player above the transcript. The part then keeps the time itself, so `current` and `onSeek` are not needed. */
  audio?: Omit<AudioPlayerProps, "current" | "onTimeChange">;
  /** Playback position in seconds, when your own player keeps it. */
  current?: number;
  /** Called with a line's start time when the line is pressed. Seek your player there. */
  onSeek?: (seconds: number) => void;
  /** Name of the transcript region. */
  label?: string;
  /** Shows placeholder lines while the transcript is being made. */
  loading?: boolean;
  /** Shown when there are no lines. */
  emptyText?: string;
  /** Classes for the scrolling list, for example to change its height. */
  listClassName?: string;
  className?: string;
}

/** Index of the line that holds time t, or -1 before the first line. */
function lineAt(lines: TranscriptLine[], t: number): number {
  let found = -1;
  for (let i = 0; i < lines.length; i++) {
    const end = lines[i].end ?? lines[i + 1]?.start ?? Infinity;
    if (t >= lines[i].start && t < end) return i;
    if (t >= lines[i].start) found = i;
  }
  return found;
}

/**
 * A recording's transcript that keeps in step with playback. The line being played is marked, the list follows it
 * until the person scrolls away, and pressing a line plays from there. Speakers are named in words; AI speakers also carry the AI mark.
 */
export function TranscriptSync({
  lines, speakers, audio, current, onSeek, label = "Transcript", loading = false, emptyText = "There is no transcript for this recording.",
  listClassName, className,
}: TranscriptSyncProps) {
  const hintId = useId();
  const [ownTime, setOwnTime] = useState(0);
  const [seekTo, setSeekTo] = useState<number | undefined>(undefined);
  const [follow, setFollow] = useState(true);
  const list = useRef<HTMLOListElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const ours = useRef(0);

  const time = audio ? ownTime : current ?? 0;
  const active = lineAt(lines, time);

  const seek = (t: number) => {
    setFollow(true);
    if (audio) { setSeekTo(t); setOwnTime(t); }
    onSeek?.(t);
  };

  const inView = (i: number) => {
    const box = list.current, el = items.current[i];
    if (!box || !el) return true;
    const top = el.offsetTop;
    return top >= box.scrollTop && top + el.offsetHeight <= box.scrollTop + box.clientHeight;
  };

  // Keep the current line in view, without moving the page, until the person scrolls away.
  useEffect(() => {
    const box = list.current, el = items.current[active];
    if (!follow || !box || !el || inView(active)) return;
    ours.current = Date.now();
    box.scrollTop = Math.max(0, el.offsetTop - box.clientHeight / 3);
  }, [active, follow]);

  const onScroll = () => {
    if (Date.now() - ours.current < 150) return;
    if (active >= 0 && !inView(active)) setFollow(false);
  };

  const backToCurrent = () => {
    setFollow(true);
    const box = list.current, el = items.current[active];
    if (box && el) { ours.current = Date.now(); box.scrollTop = Math.max(0, el.offsetTop - box.clientHeight / 3); }
  };

  return (
    <div className={cn("flex min-w-0 flex-col gap-3", className)}>
      {audio && <AudioPlayer {...audio} current={seekTo} onTimeChange={(t) => { setOwnTime(t); setSeekTo(undefined); }} />}
      <div className="flex min-h-8 flex-wrap items-center justify-between gap-2">
        <p id={hintId} className="text-small text-fg-muted">{loading || lines.length === 0 ? label : "Press a line to play from there."}</p>
        {!follow && active >= 0 && (
          <Button size="sm" variant="secondary" onClick={backToCurrent} className="pointer-coarse:h-11 motion-safe:animate-fade">Back to current line</Button>
        )}
      </div>
      <section aria-label={label} aria-busy={loading || undefined} className="min-w-0">
        {loading ? (
          <div className="flex flex-col gap-3" aria-label="Transcript loading">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-1.5 px-3">
                <Skeleton className="h-3 w-32" />
                <Skeleton className={cn("h-3", i === 1 ? "w-3/5" : "w-11/12")} />
              </div>
            ))}
            <span role="status" className="sr-only">Transcript loading</span>
          </div>
        ) : lines.length === 0 ? (
          <p className="rounded-card border border-dashed border-line px-4 py-6 text-center text-compact text-fg-muted">{emptyText}</p>
        ) : (
          <ol ref={list} onScroll={onScroll} aria-describedby={hintId}
            className={cn("relative flex max-h-80 flex-col gap-0.5 overflow-y-auto overscroll-contain", listClassName)}>
            {lines.map((l, i) => {
              const who = speakers[l.speaker] ?? { label: l.speaker };
              const on = i === active;
              const cut = l.status === "interrupted" && l.spokenUpTo !== undefined && l.spokenUpTo < l.text.length;
              return (
                <li key={l.id} ref={(el) => { items.current[i] = el; }}>
                  <button type="button" onClick={() => seek(l.start)} aria-current={on || undefined}
                    className={cn("relative flex w-full min-h-11 cursor-pointer flex-col gap-1 rounded-control py-2 pr-3 pl-4 text-left transition-colors duration-(--dur-fast) hover:bg-hover",
                      "before:absolute before:inset-y-2 before:left-1 before:w-0.5 before:rounded-full before:transition-colors before:duration-(--dur-fast)",
                      on ? "bg-selected before:bg-fg forced-colors:outline forced-colors:outline-1" : "before:bg-transparent")}>
                    <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5 text-small">
                      {who.ai ? (
                        <span aria-hidden className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} /></span>
                      ) : (
                        <span aria-hidden className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-nano font-medium text-fg-muted">{who.label.charAt(0)}</span>
                      )}
                      <span className="font-medium text-fg">{who.label}{who.ai && <span className="sr-only"> (AI)</span>}</span>
                      <span className="text-fg-muted tabular-nums">
                        <span className="sr-only">at </span>{formatMediaTime(l.start)}{l.clock && <span className="text-fg-muted"> · {l.clock}</span>}
                      </span>
                      {on && <span className="rounded-control bg-fg px-1.5 text-nano leading-4 font-medium text-bg">Now</span>}
                    </span>
                    <span className={cn("text-compact leading-5", l.status === "redacted" ? "text-fg-muted italic" : "text-fg")}>
                      {cut ? (
                        <>
                          {l.text.slice(0, l.spokenUpTo)}
                          <span className="sr-only"> Not spoken: </span>
                          <s className="text-fg-subtle">{l.text.slice(l.spokenUpTo)}</s>
                          <span aria-hidden className="ml-1.5 inline-block rounded-control border border-line px-1 text-nano leading-4 text-fg-muted not-italic">Not spoken</span>
                        </>
                      ) : l.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </div>
  );
}
```

## tattva/organisms/Tray.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { SectionLabel } from "../atoms/SectionLabel";

/**
 * A soft sand surface that holds a short list and, optionally, the composer beneath it,
 * so list and input share one width and edge.
 */
export function Tray({ label, action, children, footer, className }: { label?: string; action?: ReactNode; children: ReactNode; footer?: ReactNode; className?: string }) {
  return (
    <section aria-label={label} className={cn("rounded-card bg-sunken p-1 shadow-sm", className)}>
      <div className="space-y-1 px-3.5 pt-3 pb-2.5">
        {label && <SectionLabel action={action}>{label}</SectionLabel>}
        <ul className="space-y-0.5">{children}</ul>
      </div>
      {footer}
    </section>
  );
}
```

## tattva/organisms/VariantGrid.tsx

```tsx
import { useRef, type KeyboardEvent } from "react";
import { useAnnounceChange } from "../lib/focus";
import { Skeleton } from "../atoms/Skeleton";
import { type Variant, VariantTile } from "../molecules/VariantTile";


export type { Variant };

/**
 * Generated options as a radio group. Loading slots reserve space so the layout never jumps.
 * Focus roves like a native radio group: only the selected tile (or the first when none is selected) is a tab stop,
 * arrow keys move focus and select with wrapping, and Home and End jump to the first and last tile.
 * Screen readers hear when options start generating and when new ones arrive.
 */
export function VariantGrid({ variants, selectedId, onSelect, loadingCount = 0, label = "Generated variants", loadingMessage = "Generating options", readyMessage = (n) => (n === 1 ? "1 option ready" : `${n} options ready`) }: {
  variants: Variant[]; selectedId?: string; onSelect: (id: string) => void; loadingCount?: number;
  /** Name of the group. */
  label?: string;
  /** What screen readers hear when loading slots appear. */
  loadingMessage?: string;
  /** What screen readers hear when new options arrive, with the number now shown. */
  readyMessage?: (count: number) => string;
}) {
  const said = useAnnounceChange(`${variants.length}|${loadingCount}`, (now, before) => {
    const [n, l] = now.split("|").map(Number), [n0, l0] = before.split("|").map(Number);
    if (n > n0) return readyMessage(n);
    return l > l0 ? loadingMessage : "";
  });
  const ref = useRef<HTMLDivElement>(null);
  const selectedIndex = variants.findIndex((v) => v.id === selectedId);
  const stop = selectedIndex >= 0 ? selectedIndex : 0;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey || !variants.length) return;
    const tiles = Array.from(ref.current?.querySelectorAll<HTMLElement>('[role="radio"]') ?? []);
    const from = tiles.indexOf(document.activeElement as HTMLElement);
    if (from < 0) return;
    let to = from;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") to = (from + 1) % variants.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") to = (from - 1 + variants.length) % variants.length;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = variants.length - 1;
    else return;
    e.preventDefault();
    tiles[to]?.focus();
    onSelect(variants[to].id);
  };

  return (
    <>
    <p role="status" aria-live="polite" className="sr-only">{said}</p>
    <div ref={ref} role="radiogroup" aria-label={label} onKeyDown={onKeyDown} className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
      {variants.map((v, i) => <VariantTile key={v.id} variant={v} selected={v.id === selectedId} onSelect={onSelect} tabIndex={i === stop ? 0 : -1} />)}
      {Array.from({ length: loadingCount }, (_, i) => <Skeleton key={`l${i}`} className="aspect-square" />)}
    </div>
    </>
  );
}
```
