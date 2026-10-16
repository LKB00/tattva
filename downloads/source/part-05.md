## tattva/atoms/EditScopeChip.tsx

```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, ChevronIcon, EditIcon, FileIcon, LayersIcon } from "../lib/icons";
import { AIMark } from "./AIMark";
import { Popover } from "./Popover";

/** What an AI edit will change. Slide ids are your own; give a label when the default ("Slide 3", "3 slides") is not right. */
export type EditScope =
  | { kind: "element"; label: string }
  | { kind: "slides"; ids: string[]; label?: string }
  | { kind: "deck"; label?: string };

export interface EditScopeChipProps {
  /** The scope the next AI request will use. */
  scope: EditScope;
  /** The scopes the person can switch to. With one option or none, the chip is a plain label with no menu. */
  options: EditScope[];
  onChange: (scope: EditScope) => void;
  /** Cost or reach of a whole-deck edit, worked out by your app, such as "All 12 slides, about 40 credits". Shown in the menu and beside the chip while the whole deck is chosen. */
  deckCost?: ReactNode;
  /** Locks the scope, for example while the AI is already editing. Say why in disabledReason. */
  disabled?: boolean;
  /** Said beside a locked chip, such as "Scope is fixed while the AI edits". */
  disabledReason?: string;
  /** Word before the scope, in the chip and its accessible name. Default "Edit". */
  prefix?: string;
  className?: string;
}

/** The words for a scope: "Slide 3", "Slides 3 to 5", "4 slides", "Whole deck" or the element's own label. */
export function scopeLabel(s: EditScope): string {
  if (s.label) return s.label;
  if (s.kind === "deck") return "Whole deck";
  if (s.kind === "slides") {
    if (s.ids.length === 1) return `Slide ${s.ids[0]}`;
    const n = s.ids.map(Number);
    const run = n.every((v, i) => Number.isInteger(v) && (i === 0 || v === n[i - 1] + 1));
    return run && n.length > 1 ? `Slides ${s.ids[0]} to ${s.ids[s.ids.length - 1]}` : `${s.ids.length} slides`;
  }
  return "This element";
}

const key = (s: EditScope) => (s.kind === "slides" ? `slides:${s.ids.join(",")}` : s.kind === "element" ? `element:${s.label}` : "deck");
const ICON = { element: EditIcon, slides: FileIcon, deck: LayersIcon } as const;

/**
 * Shows exactly what the next AI request will change, and lets the person narrow or widen it before sending.
 * The chip stays neutral; only the small AI mark uses the AI colour.
 */
export function EditScopeChip({ scope, options, onChange, deckCost, disabled = false, disabledReason, prefix = "Edit", className }: EditScopeChipProps) {
  const [open, setOpen] = useState(false);
  const list = useRef<HTMLDivElement>(null);
  // The menu is drawn on the page (portal) so a clipped parent cannot cut it off. It becomes visible only after it is
  // placed, so focus moves to the checked scope one frame later.
  useEffect(() => {
    if (!open) return;
    const f = requestAnimationFrame(() => {
      const el = list.current;
      if (!el || el.contains(document.activeElement)) return;
      (el.querySelector<HTMLElement>('[aria-checked="true"]') ?? el.querySelector<HTMLElement>("[role=menuitemradio]"))?.focus();
    });
    return () => cancelAnimationFrame(f);
  }, [open]);
  const current = scopeLabel(scope);
  const Icon = ICON[scope.kind];
  const pickable = !disabled && options.length > 1;
  const name = `${prefix} scope: ${current}`;

  const face = (
    <>
      <span aria-hidden className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} /></span>
      <span className="text-fg-muted">{prefix}<span className="sr-only"> scope:</span></span>
      <Icon aria-hidden width={13} height={13} className="shrink-0 text-fg-subtle" />
      <span className="min-w-0 truncate">{current}</span>
    </>
  );
  const chip = "inline-flex h-8 max-w-full items-center gap-1.5 rounded-control border border-line bg-surface px-2.5 text-small leading-4 font-medium text-fg tap";

  return (
    <span className={cn("inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1", className)}>
      {pickable ? (
        <Popover open={open} onOpenChange={setOpen} role="menu" label="What the AI edit will change" side="top" portal panelClassName="w-72 max-w-[calc(100vw-2rem)]"
          trigger={({ triggerProps }) => (
            <button type="button" {...triggerProps} aria-label={name} onClick={() => setOpen(!open)}
              onKeyDown={(e) => { if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) { e.preventDefault(); setOpen(true); } }}
              className={cn(chip, "cursor-pointer transition-colors duration-(--dur-fast) hover:border-line-strong hover:bg-hover")}>
              {face}
              <ChevronIcon aria-hidden width={12} height={12} className={cn("shrink-0 text-fg-subtle transition-transform duration-(--dur-fast)", open ? "-rotate-90" : "rotate-90")} />
            </button>
          )}>
          {({ close }) => (
            <div ref={list}>
              <p role="presentation" className="px-2.5 pt-1.5 pb-1 text-small leading-4 font-medium text-fg-subtle">The AI will change</p>
              {options.map((o) => {
                const checked = key(o) === key(scope);
                const OIcon = ICON[o.kind];
                return (
                  <button key={key(o)} type="button" role="menuitemradio" aria-checked={checked} tabIndex={-1}
                    onClick={() => { if (!checked) onChange(o); close(); }}
                    className="flex min-h-9 w-full cursor-pointer items-start gap-2.5 rounded-control px-2.5 py-2 text-left text-body text-fg hover:bg-hover focus-visible:bg-hover focus-visible:outline-offset-[-2px]">
                    <OIcon aria-hidden width={15} height={15} className="mt-0.5 shrink-0 text-fg-subtle" />
                    <span className="min-w-0 flex-1">
                      <span className="block">{scopeLabel(o)}</span>
                      {o.kind === "deck" && deckCost && <span className="block text-small text-fg-muted">{deckCost}</span>}
                    </span>
                    <span aria-hidden className="flex size-4 shrink-0 items-center justify-center pt-0.5">{checked && <CheckIcon width={14} height={14} />}</span>
                  </button>
                );
              })}
            </div>
          )}
        </Popover>
      ) : (
        <span className={cn(chip, disabled && "border-dashed text-fg-muted")}>
          {face}
        </span>
      )}
      {scope.kind === "deck" && deckCost && !disabled && <span className="text-small text-fg-muted">{deckCost}</span>}
      {disabled && disabledReason && <span className="text-small text-fg-muted">{disabledReason}</span>}
    </span>
  );
}
```

## tattva/atoms/FrameScrubber.tsx

```tsx
import { useRef, useState } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { formatMediaTime, speakMediaTime } from "./Waveform";

export interface FrameScrubberProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Length of the clip in seconds. 0 or less shows a disabled, empty track (length not known yet). */
  duration: number;
  /** Playhead in seconds. The parent owns it. */
  value: number;
  /** Called with the new time after a drag, a tap or a key press. */
  onChange: (seconds: number) => void;
  /** Name of the slider, such as "Seek, take 3". */
  label: string;
  /** Frames per second. Turns on frame steps (comma and period, or Shift with an arrow, while the scrubber has focus) and snaps every move to a whole frame. */
  fps?: number;
  /** Seconds moved by an arrow key. */
  step?: number;
  /** Still images spread evenly over the clip. The nearest one shows above the playhead while dragging or pointing. */
  thumbnails?: string[];
  /** Draws the preview above the playhead for a time, when there are no image thumbnails (for example a drawn frame). */
  renderThumbnail?: (seconds: number) => ReactNode;
  /** Called when a drag starts and ends, so a player can pause while scrubbing. */
  onScrubbingChange?: (scrubbing: boolean) => void;
  /** Blocks seeking. The slider stays focusable and says it is unavailable. */
  disabled?: boolean;
  className?: string;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** "3.2 seconds" under a minute, where tenths matter; "1 minute 12 seconds" past it. */
export function speakClipTime(seconds: number): string {
  const t = Math.max(0, seconds || 0);
  if (t >= 60) return speakMediaTime(t);
  const r = Math.round(t * 10) / 10;
  return `${Number.isInteger(r) ? r : r.toFixed(1)} second${r === 1 ? "" : "s"}`;
}

/** The frame number counted from 1, as people say it. */
export const frameAt = (seconds: number, fps: number) => Math.floor(Math.max(0, seconds) * fps + 1e-6) + 1;

/**
 * The seek slider for a video clip. A thin track with a 44px hit area, the played part in ink (never the AI colour),
 * value text in words, and frame steps on comma and period that work only while the scrubber itself has focus.
 */
export function FrameScrubber({
  duration, value, onChange, label, fps, step = 1, thumbnails, renderThumbnail, onScrubbingChange, disabled = false, className, ...rest
}: FrameScrubberProps) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<number | null>(null);
  const [dragAt, setDragAt] = useState<number | null>(null);
  const [hoverAt, setHoverAt] = useState<number | null>(null);

  const dur = Math.max(0, duration || 0);
  const live = !disabled && dur > 0;
  const frame = fps ? 1 / fps : 0;
  const snap = (t: number) => clamp(frame ? Math.round(t / frame) * frame : t, 0, dur);
  const pos = clamp(dragAt ?? value, 0, dur);
  const pct = (s: number) => `${dur ? (clamp(s, 0, dur) / dur) * 100 : 0}%`;
  const totalFrames = fps ? Math.max(1, Math.round(dur * fps)) : 0;

  const timeAt = (clientX: number) => {
    const r = track.current?.getBoundingClientRect();
    return r && r.width ? snap(clamp((clientX - r.left) / r.width, 0, 1) * dur) : 0;
  };
  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if (!live || (ev.pointerType === "mouse" && ev.button !== 0)) return;
    ev.currentTarget.setPointerCapture(ev.pointerId);
    ev.currentTarget.focus();
    drag.current = ev.pointerId;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onScrubbingChange?.(true);
    onChange(t);
  };
  const move = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current === ev.pointerId) { const t = timeAt(ev.clientX); setDragAt(t); onChange(t); }
    else if (live && ev.pointerType === "mouse") setHoverAt(timeAt(ev.clientX));
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    drag.current = null;
    setDragAt(null);
    onScrubbingChange?.(false);
  };
  const key = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!live || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const k = ev.key;
    const one = frame || 0.1;
    let to: number;
    // Frame steps: comma and period, or Shift with an arrow. They only reach here while this slider has focus.
    if (k === "," || (ev.shiftKey && (k === "ArrowLeft" || k === "ArrowDown"))) to = value - one;
    else if (k === "." || (ev.shiftKey && (k === "ArrowRight" || k === "ArrowUp"))) to = value + one;
    else if (k === "ArrowRight" || k === "ArrowUp") to = value + step;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = value - step;
    else if (k === "PageUp") to = value + step * 10;
    else if (k === "PageDown") to = value - step * 10;
    else if (k === "Home") to = 0;
    else if (k === "End") to = dur;
    else return;
    ev.preventDefault();
    ev.stopPropagation();
    onChange(snap(to));
  };

  const valueText = dur > 0
    ? `${speakClipTime(value)} of ${speakClipTime(dur)}${fps ? `, frame ${Math.min(frameAt(value, fps), totalFrames)} of ${totalFrames}` : ""}`
    : "Length not known yet";

  const peekAt = dragAt ?? hoverAt;
  const thumbFor = (t: number) => {
    if (thumbnails?.length) {
      const i = clamp(Math.round((t / (dur || 1)) * (thumbnails.length - 1)), 0, thumbnails.length - 1);
      return <img src={thumbnails[i]} alt="" className="size-full object-cover" />;
    }
    return renderThumbnail?.(t);
  };
  const hasThumbs = !!thumbnails?.length || !!renderThumbnail;

  return (
    <div className={cn("relative min-w-0", className)} {...rest}>
      <div ref={track} role="slider" tabIndex={0} aria-label={label}
        aria-valuemin={0} aria-valuemax={Math.round(dur * 10) / 10} aria-valuenow={Math.round(clamp(value, 0, dur) * 10) / 10}
        aria-valuetext={valueText} aria-orientation="horizontal" aria-disabled={!live || undefined}
        onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={() => setHoverAt(null)}
        className={cn("group relative flex min-h-11 touch-none items-center rounded-sm select-none", live ? "cursor-pointer" : "cursor-default")}>
        {/* The drawn track is 4px; the slider box around it is the 44px hit area. */}
        <span aria-hidden className="relative block h-1 w-full rounded-full bg-line-strong forced-colors:bg-[GrayText]">
          <span className="absolute inset-y-0 left-0 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ width: pct(pos) }} />
        </span>
        {live && (
          <span aria-hidden className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-fg shadow-sm transition-transform duration-(--dur-fast) group-hover:scale-110 group-focus-visible:scale-110 forced-colors:bg-[CanvasText] motion-reduce:transition-none"
            style={{ left: pct(pos) }} />
        )}
      </div>
      {live && peekAt !== null && (
        <span aria-hidden className="pointer-events-none absolute bottom-full z-10 mb-1 flex -translate-x-1/2 flex-col items-center gap-1"
          style={{ left: `clamp(var(--spacing) * 10, ${pct(peekAt)}, 100% - var(--spacing) * 10)` }}>
          {hasThumbs && <span className="block h-11 w-20 overflow-hidden rounded-sm border border-line bg-sunken shadow-md">{thumbFor(peekAt)}</span>}
          <span className="rounded-control bg-inverse px-1.5 py-0.5 text-small text-inverse-fg tabular-nums shadow-sm">
            {formatMediaTime(peekAt)}{fps ? ` · frame ${frameAt(peekAt, fps)}` : ""}
          </span>
        </span>
      )}
    </div>
  );
}
```
