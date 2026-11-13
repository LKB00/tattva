## tattva/organisms/LayoutAlternatives.tsx

```tsx
import { useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { type HeadingLevel, headingTag } from "../lib/useFocusAfter";
import { AlertIcon, CheckIcon, EditIcon, RetryIcon, UndoIcon } from "../lib/icons";
import { AIMark } from "../atoms/AIMark";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Reveal } from "../atoms/Reveal";
import { SegmentedControl } from "../atoms/SegmentedControl";

/** loading: nothing back yet. partial: some layouts back, more coming. ready: all back. failed: the request broke. none: the AI found no layout good enough. */
export type LayoutAltState = "loading" | "partial" | "ready" | "failed" | "none";

/** keep: the person's words stay exactly as written. fit: the AI may shorten text so a layout fits. */
export type LayoutTextMode = "keep" | "fit";

export interface LayoutOption {
  id: string;
  /** Short plain name, for example "Chart left, points right". Also the option's accessible name. */
  label: string;
  /** A drawing of the slide in this layout. Decorative: the label says what it is. */
  thumbnail: ReactNode;
  /** Optional one line on what changes, for example "Shortens two bullet points". */
  note?: string;
}

export interface LayoutAlternativesProps {
  /** The slide as it is now. Always the first option, so there is always a way back. */
  current: { thumbnail: ReactNode; label?: string };
  /** Layouts the AI suggested. They arrive over time in the partial state. */
  options: LayoutOption[];
  state: LayoutAltState;
  /** Placeholders to draw while loading or partial, for layouts still on the way. */
  loadingCount?: number;
  /** The option shown on the slide right now without being applied. null or undefined means the current layout. */
  previewId?: string | null;
  /** Called to preview an option on the slide (focus, hover, or a tap on touch screens), or with null to go back to the current layout. Never changes the deck. */
  onPreview: (id: string | null) => void;
  /** Called when the person applies an option: Enter, a click with a mouse, or the Apply button. */
  onApply: (id: string) => void;
  /** The option that was just applied. Shows "Applied" with an Undo button until you clear it. */
  appliedId?: string | null;
  /** Shows Undo in the applied state. Your app restores the previous layout and clears appliedId. */
  onUndo?: () => void;
  /** The promise about the person's words. Shown as a two-way control when onTextModeChange is passed. */
  textMode: LayoutTextMode;
  onTextModeChange?: (mode: LayoutTextMode) => void;
  /** Asks for more layouts. Shown as "More layouts" while nothing else is loading. */
  onMore?: () => void;
  /** Shown in the failed state. */
  onRetry?: () => void;
  /** Offered in the none state, so the person can change the content instead. */
  onEditText?: () => void;
  /** Plain reason in the failed state. */
  error?: string;
  /** Plain reason in the none state, for example "The table has too many rows for another layout." */
  noneReason?: string;
  /** Cost of asking for more, shown next to the button, for example "About 2 credits". */
  cost?: ReactNode;
  /** The slide these layouts are for, for example "Slide 3, Pricing". Used in the heading and the group name. */
  slideName?: string;
  /** Heading level of the panel title. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** The one sentence the live region speaks when the set of layouts changes. */
export function layoutAltSummary(state: LayoutAltState, ready: number, waiting: number) {
  if (state === "loading") return `Making ${plural(waiting || 3, "layout")}.`;
  if (state === "partial") return `${ready} of ${ready + waiting} layouts ready.`;
  if (state === "ready") return `${plural(ready, "layout")} ready.`;
  if (state === "none") return "No good layouts for this slide.";
  return "Could not make layouts.";
}

const CURRENT = "__current";

/**
 * Other layouts for one slide, suggested by the AI and compared side by side with the slide as it is.
 * Focus or hover previews a layout on the slide without changing the deck. Enter, a mouse click or Apply commits it.
 * On touch a tap only previews, and the Apply button commits. Escape goes back to the current layout.
 * The text mode is a visible promise about the person's words.
 */
export function LayoutAlternatives({
  current, options, state, loadingCount = 0, previewId, onPreview, onApply, appliedId, onUndo, textMode, onTextModeChange,
  onMore, onRetry, onEditText, error, noneReason, cost, slideName, headingLevel = 3, className,
}: LayoutAlternativesProps) {
  const H = headingTag(headingLevel);
  const id = useId();
  const group = useRef<HTMLDivElement>(null);
  const pointer = useRef<string>("");
  // A preview chosen by focus or tap stays when the mouse leaves; a hover preview goes back to it.
  const pinned = useRef<string | null>(previewId ?? null);
  const [said, setSaid] = useState("");

  const showOptions = state !== "none" && !(state === "failed" && options.length === 0);
  const waiting = state === "loading" || state === "partial" ? loadingCount : 0;
  const previewing = previewId && options.some((o) => o.id === previewId) ? previewId : null;
  const previewOption = options.find((o) => o.id === previewing);
  const applied = appliedId ? options.find((o) => o.id === appliedId) : undefined;
  const all = [{ id: CURRENT, label: current.label ?? "Current layout" }, ...(showOptions ? options : [])];
  const stopId = previewing ?? CURRENT;
  const nameOf = (o: string | null) => (o ? options.find((x) => x.id === o)?.label ?? "" : current.label ?? "Current layout");

  // Speak only when the set of layouts changes state, never on every hover.
  const summary = layoutAltSummary(state, options.length, waiting);
  const lastSummary = useRef("");
  useEffect(() => {
    if (summary !== lastSummary.current) { lastSummary.current = summary; setSaid(summary); }
  }, [summary]);

  const preview = (o: string | null, speak: boolean) => {
    pinned.current = o;
    if (o !== previewing) { onPreview(o); if (speak) setSaid(o ? `Previewing ${nameOf(o)}. Not applied yet.` : "Back to original."); }
  };
  const apply = (o: string) => {
    if (o === CURRENT) { preview(null, true); return; }
    pinned.current = null;
    onApply(o);
    setSaid(`${nameOf(o)} applied.`);
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const tiles = Array.from(group.current?.querySelectorAll<HTMLElement>('[role="radio"]') ?? []);
    const from = tiles.indexOf(document.activeElement as HTMLElement);
    if (e.key === "Escape") {
      if (previewing) { e.preventDefault(); e.stopPropagation(); preview(null, true); tiles[0]?.focus(); }
      return;
    }
    if (from < 0) return;
    let to = from;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") to = (from + 1) % tiles.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") to = (from - 1 + tiles.length) % tiles.length;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = tiles.length - 1;
    else if (e.key === "Enter") { e.preventDefault(); apply(all[from].id); return; }
    else if (e.key === " ") { e.preventDefault(); preview(all[from].id === CURRENT ? null : all[from].id, true); return; }
    else return;
    e.preventDefault();
    tiles[to]?.focus();
  };

  const tile = (o: { id: string; label: string; note?: string }, thumb: ReactNode, i: number) => {
    const isCurrent = o.id === CURRENT;
    const on = isCurrent ? !previewing : o.id === previewing;
    const isApplied = !isCurrent && o.id === appliedId;
    const optionId = isCurrent ? null : o.id;
    return (
      <Reveal as="div" key={o.id} index={i} className="min-w-0">
        <button type="button" role="radio" aria-checked={on} tabIndex={o.id === stopId ? 0 : -1}
          aria-describedby={`${id}-keys`}
          aria-label={`${o.label}${isCurrent ? ", the slide as it is now" : ""}${isApplied ? ", applied" : ""}${o.note ? `. ${o.note}` : ""}`}
          onFocus={() => preview(optionId, true)}
          onPointerDown={(e: PointerEvent) => { pointer.current = e.pointerType; }}
          onPointerEnter={(e: PointerEvent) => { if (e.pointerType === "mouse" && optionId !== previewing) onPreview(optionId); }}
          onClick={() => {
            const touch = pointer.current === "touch" || pointer.current === "pen";
            pointer.current = "";
            if (touch) preview(optionId, true); else apply(o.id);
          }}
          className={cn("group block w-full cursor-pointer rounded-card border bg-surface p-1.5 text-left transition-[border-color,box-shadow] duration-(--dur-fast) ease-(--ease-out)",
            on ? "border-fg ring-1 ring-fg" : "border-line hover:border-line-strong")}>
          <span aria-hidden className="relative block aspect-video overflow-hidden rounded-[max(2px,calc(var(--radius-card)-7px))] border border-line bg-bg">
            {thumb}
          </span>
          <span className="flex min-h-9 items-start gap-1.5 px-1 pt-1.5">
            <span className="min-w-0 flex-1">
              <span className="line-clamp-2 block text-small leading-4 font-medium text-fg">{o.label}</span>
              {o.note && <span className="line-clamp-2 block text-micro text-fg-muted">{o.note}</span>}
            </span>
            {isCurrent ? <Badge className="shrink-0">Current</Badge>
              : isApplied ? <Badge tone="success" className="shrink-0"><CheckIcon aria-hidden width={10} height={10} />Applied</Badge>
              : on ? <Badge className="shrink-0 border-fg">Previewing</Badge> : null}
          </span>
        </button>
      </Reveal>
    );
  };

  return (
    <section aria-labelledby={`${id}-title`} className={cn("@container min-w-0 space-y-3", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <H id={`${id}-title`} className="flex min-w-48 flex-1 items-center gap-2 text-body leading-5 font-semibold text-fg">
          <span aria-hidden className="inline-flex size-6 shrink-0 items-center justify-center rounded-control bg-lime text-on-lime"><AIMark size={16} /></span>
          <span className="min-w-0">Other layouts{slideName ? <span className="font-normal text-fg-muted"> for {slideName}</span> : null}</span>
        </H>
        {onTextModeChange && (
          <SegmentedControl size="sm" label="Your words" value={textMode} onChange={onTextModeChange}
            options={[{ value: "keep", label: "Keep my words" }, { value: "fit", label: "Shorten to fit" }]} />
        )}
      </div>
      <p className="text-small leading-4 text-fg-muted">
        {textMode === "keep"
          ? "Your text stays exactly as written. Layouts that cannot fit it are left out."
          : "The AI may shorten text so a layout fits. Each option says what it shortens."}
      </p>

      <p id={`${id}-keys`} className="sr-only">Arrow keys and focus preview a layout on the slide without changing it. Enter applies it. Escape goes back to the current layout.</p>

      <div ref={group} role="radiogroup" aria-label={`Layouts${slideName ? ` for ${slideName}` : ""}`} onKeyDown={onKey}
        onPointerLeave={(e) => { if (e.pointerType === "mouse" && pinned.current !== previewing) onPreview(pinned.current); }}
        className="grid grid-cols-2 gap-2 @xl:grid-cols-3 @3xl:grid-cols-4">
        {tile({ id: CURRENT, label: current.label ?? "Current layout" }, current.thumbnail, 0)}
        {showOptions && options.map((o, i) => tile(o, o.thumbnail, i + 1))}
        {waiting > 0 && Array.from({ length: waiting }, (_, i) => (
          <div key={`wait-${i}`} aria-hidden className="min-w-0 rounded-card border border-dashed border-line-strong bg-surface p-1.5">
            <div className="flex aspect-video items-center justify-center rounded-xs bg-sunken text-fg-subtle"><AIMark size={16} /></div>
            <div className="flex min-h-9 items-start px-1 pt-1.5 text-small leading-4 text-fg-muted">Making a layout</div>
          </div>
        ))}
      </div>

      {state === "none" && (
        <div className="rounded-card border border-line bg-surface p-4">
          <p className="text-body leading-5 font-medium text-fg">No good layouts for this slide</p>
          <p className="mt-1 text-small leading-4 text-fg-muted">{noneReason ?? "Rather than show weak options, the AI showed none. Changing the content usually opens up new layouts."}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {onEditText && <Button size="sm" variant="secondary" leading={<EditIcon aria-hidden width={14} height={14} />} onClick={onEditText}>Edit text</Button>}
            {onMore && <Button size="sm" variant="ghost" onClick={onMore}>Try again</Button>}
          </div>
        </div>
      )}

      {state === "failed" && (
        <div className="flex flex-wrap items-start gap-3 rounded-card border border-line bg-surface p-4">
          <AlertIcon aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-danger-fg" />
          <div className="min-w-0 flex-1">
            <p className="text-body leading-5 font-medium text-fg">{options.length ? "Could not make more layouts" : "Could not make layouts"}</p>
            <p className="mt-1 text-small leading-4 text-fg-muted">{error ?? "Something went wrong on our side. Your slide has not changed."}</p>
          </div>
          {onRetry && <Button size="sm" variant="secondary" leading={<RetryIcon aria-hidden width={14} height={14} />} onClick={onRetry}>Try again</Button>}
        </div>
      )}

      {previewOption && (
        <div className="flex flex-wrap items-center gap-2 rounded-card border border-line bg-sunken p-3">
          <p className="min-w-0 flex-1 text-small leading-4 text-fg"><span className="font-medium">Previewing {previewOption.label}.</span> <span className="text-fg-muted">Not applied yet.</span></p>
          <Button size="sm" variant="ghost" onClick={() => preview(null, true)}>Back to current</Button>
          <Button size="sm" onClick={() => apply(previewOption.id)}>Apply layout</Button>
        </div>
      )}

      {applied && !previewOption && (
        <div className="flex flex-wrap items-center gap-2 rounded-card border border-line bg-surface p-3">
          <CheckIcon aria-hidden width={16} height={16} className="shrink-0 text-success-fg" />
          <p className="min-w-0 flex-1 text-small leading-4 text-fg"><span className="font-medium">{applied.label} applied.</span></p>
          {onUndo && <Button size="sm" variant="secondary" leading={<UndoIcon aria-hidden width={14} height={14} />} onClick={() => { onUndo(); setSaid("Layout change undone."); }}>Undo</Button>}
        </div>
      )}

      {onMore && state !== "none" && (state === "ready" || (state === "failed" && options.length > 0)) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Button size="sm" variant="secondary" leading={<AIMark size={16} />} onClick={onMore}>More layouts</Button>
          {cost && <span className="text-micro text-fg-muted">{cost}</span>}
        </div>
      )}

      <p role="status" aria-live="polite" className="sr-only">{said}</p>
    </section>
  );
}
```
