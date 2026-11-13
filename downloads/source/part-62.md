## tattva/organisms/DeckChangeReview.tsx

```tsx
import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "../lib/cn";
import { type HeadingLevel, headingTag, subHeadingTag } from "../lib/useFocusAfter";
import { ChevronIcon, CheckIcon, HistoryIcon, NeedsReviewIcon, UndoIcon } from "../lib/icons";
import { AIMark } from "../atoms/AIMark";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { SegmentedControl } from "../atoms/SegmentedControl";

/** proposed: waiting for the person. kept: the change will go into the deck. rejected: the slide stays as it was ("Undone" on screen). */
export type DeckChangeState = "proposed" | "kept" | "rejected";

export interface DeckChange {
  slideId: string;
  /** Position in the deck, for example 3. Shown as "Slide 3". */
  slideNumber: number;
  /** The slide's title. */
  title: string;
  /** A drawing of the slide before the AI edit. */
  before: ReactNode;
  /** A drawing of the slide after the AI edit. */
  after: ReactNode;
  /** What changed, in one plain line, for example "Turned the bullet list into a bar chart". */
  summary: string;
  state: DeckChangeState;
}

/** reviewing: decisions open. applying: Done was pressed and the deck is saving. applied: saved as one version. */
export type DeckReviewStatus = "reviewing" | "applying" | "applied";

export interface DeckChangeReviewProps {
  /** What the person asked the AI to do, for example "Make it more visual". */
  request: string;
  changes: DeckChange[];
  /** Called when the person keeps or undoes one slide's change. */
  onChange: (slideId: string, state: DeckChangeState) => void;
  onKeepAll: () => void;
  onRejectAll: () => void;
  /** Applies the kept changes to the deck as one version. Only offered once every change has a decision. */
  onDone: () => void;
  status?: DeckReviewStatus;
  /** side-by-side: Before and After next to each other. toggle: one picture with a Before and After switch. Narrow screens always use toggle. */
  view?: "side-by-side" | "toggle";
  /** list: every slide in a column. pager: one slide at a time with Previous and Next. auto: pager when the part is narrower than a phone. */
  layout?: "auto" | "list" | "pager";
  /** In the applied state, opens version history so the whole edit can be restored. */
  onOpenHistory?: () => void;
  /** Heading level of the panel title. Each slide is one level below. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const SAID: Record<DeckChangeState, string> = { proposed: "back to needs review", kept: "kept", rejected: "undone" };

/** Counts for the header, in words: "2 of 6 kept, 1 undone, 3 left to review". */
export function deckReviewSummary(changes: { state: DeckChangeState }[]) {
  const n = (s: DeckChangeState) => changes.filter((c) => c.state === s).length;
  const parts = [`${n("kept")} of ${plural(changes.length, "slide")} kept`];
  if (n("rejected")) parts.push(`${n("rejected")} undone`);
  parts.push(n("proposed") ? `${n("proposed")} left to review` : "all reviewed");
  return parts.join(", ");
}

function StateBadge({ state }: { state: DeckChangeState }) {
  if (state === "kept") return <Badge tone="success"><CheckIcon aria-hidden width={10} height={10} />Kept</Badge>;
  if (state === "rejected") return <Badge><UndoIcon aria-hidden width={10} height={10} />Undone</Badge>;
  return <Badge tone="warning"><NeedsReviewIcon aria-hidden width={10} height={10} />Needs review</Badge>;
}

function Frame({ label, ai, children }: { label: string; ai?: boolean; children: ReactNode }) {
  return (
    <figure className="m-0 min-w-0">
      <figcaption className="mb-1 flex items-center gap-1 text-micro font-medium text-fg-muted">
        {ai && <span aria-hidden className="inline-flex size-4 items-center justify-center rounded-control bg-lime text-on-lime"><AIMark size={16} className="size-3" /></span>}
        {label}
      </figcaption>
      <div aria-hidden className="relative aspect-video overflow-hidden rounded-xs border border-line bg-bg">{children}</div>
    </figure>
  );
}

/** Narrower than this, the part shows one slide at a time with the toggle view. */
const PAGER_BELOW = 480;

function useNarrow(ref: RefObject<HTMLElement | null>, on: boolean) {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!on || !el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < PAGER_BELOW));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, on]);
  return on && narrow;
}

/**
 * Review an AI edit that touched several slides, one slide at a time. Each slide shows what changed in one line, the
 * slide before and after, and Keep or Undo. Nothing reaches the deck until Done, which saves every kept change as one
 * version that can be restored as a whole. Undecided slides are the amber "needs you" state.
 */
export function DeckChangeReview({
  request, changes, onChange, onKeepAll, onRejectAll, onDone, status = "reviewing", view = "side-by-side", layout = "auto",
  onOpenHistory, headingLevel = 3, className,
}: DeckChangeReviewProps) {
  const H = headingTag(headingLevel);
  const SubH = subHeadingTag(headingLevel);
  const id = useId();
  const root = useRef<HTMLElement>(null);
  const narrow = useNarrow(root, layout === "auto");
  const pager = layout === "pager" || narrow;
  const mode = pager ? "toggle" : view;
  const [page, setPage] = useState(0);
  const [shown, setShown] = useState<Record<string, "before" | "after">>({});
  const [said, setSaid] = useState("");
  const [doneHint, setDoneHint] = useState(false);

  const left = changes.filter((c) => c.state === "proposed").length;
  const kept = changes.filter((c) => c.state === "kept").length;
  const locked = status !== "reviewing";
  const at = Math.min(page, Math.max(changes.length - 1, 0));
  const visible = pager ? changes.slice(at, at + 1) : changes;

  useEffect(() => { if (left === 0) setDoneHint(false); }, [left]);
  const lastStatus = useRef(status);
  useEffect(() => {
    if (status === lastStatus.current) return;
    lastStatus.current = status;
    if (status === "applying") setSaid("Saving changes to the deck.");
    if (status === "applied") setSaid(`Saved. ${plural(kept, "slide")} changed as one version.`);
  }, [status, kept]);

  const decide = (c: DeckChange, s: DeckChangeState) => {
    if (locked || c.state === s) return;
    onChange(c.slideId, s);
    const after = left - (c.state === "proposed" ? 1 : 0) + (s === "proposed" ? 1 : 0);
    setSaid(`Slide ${c.slideNumber} ${SAID[s]}. ${after ? `${after} left to review.` : "All slides reviewed."}`);
  };

  if (status === "applied") {
    return (
      <section ref={root} aria-labelledby={`${id}-title`} className={cn("min-w-0 rounded-card border border-line bg-surface p-4", className)}>
        <H id={`${id}-title`} className="flex items-center gap-2 text-body leading-5 font-semibold text-fg">
          <CheckIcon aria-hidden width={16} height={16} className="text-success-fg" />Changes saved
        </H>
        <p className="mt-1 text-small leading-4 text-fg-muted">
          {kept ? <>Saved as one version: <span className="text-fg">AI: {request}, {plural(kept, "slide")}</span>. You can restore the whole edit from version history.</> : "No changes were kept. The deck is as it was."}
        </p>
        {kept > 0 && onOpenHistory && (
          <Button size="sm" variant="secondary" className="mt-3" leading={<HistoryIcon aria-hidden width={14} height={14} />} onClick={onOpenHistory}>Version history</Button>
        )}
        <p role="status" aria-live="polite" className="sr-only">{said}</p>
      </section>
    );
  }

  return (
    <section ref={root} aria-labelledby={`${id}-title`} className={cn("min-w-0 space-y-3", className)}>
      <div className="space-y-2">
        <H id={`${id}-title`} className="flex items-center gap-2 text-body leading-5 font-semibold text-fg">
          <span aria-hidden className="inline-flex size-6 shrink-0 items-center justify-center rounded-control bg-lime text-on-lime"><AIMark size={16} /></span>
          AI changed {plural(changes.length, "slide")}
        </H>
        <p className="text-small leading-4 text-fg-muted">You asked: <q className="text-fg">{request}</q>. Nothing reaches the deck until you press Done.</p>
        <p className={cn("flex flex-wrap items-center gap-2 rounded-card border px-3 py-2 text-small leading-4",
          left ? "border-attention bg-attention-soft text-attention-fg" : "border-line bg-surface text-fg")}>
          {left ? <NeedsReviewIcon aria-hidden width={14} height={14} className="shrink-0" /> : <CheckIcon aria-hidden width={14} height={14} className="shrink-0 text-success-fg" />}
          <span className="font-medium">{left ? "Needs your review." : "All reviewed."}</span>
          <span>{deckReviewSummary(changes)}.</span>
        </p>
      </div>

      <ol className="m-0 list-none space-y-3 p-0" aria-label="Changed slides">
        {visible.map((c) => {
          const face = shown[c.slideId] ?? "after";
          return (
            <li key={c.slideId} className={cn("min-w-0 rounded-card border bg-surface p-3 transition-colors duration-(--dur-fast)",
              c.state === "proposed" ? "border-attention" : "border-line")}>
              <div className="flex flex-wrap items-start gap-2">
                <div className="min-w-0 flex-1">
                  <SubH className="text-body leading-5 font-medium text-fg"><span className="text-fg-muted">Slide {c.slideNumber}</span> {c.title}</SubH>
                  <p className="mt-0.5 text-small leading-4 text-fg-muted">{c.summary}</p>
                </div>
                <StateBadge state={c.state} />
              </div>

              {mode === "side-by-side" ? (
                <div className={cn("mt-3 grid grid-cols-2 gap-3", c.state === "rejected" && "[&_figure:last-child]:opacity-60")}>
                  <Frame label="Before">{c.before}</Frame>
                  <Frame label="After" ai>{c.after}</Frame>
                </div>
              ) : (
                <div className="mt-3 space-y-2">
                  <SegmentedControl size="sm" label={`Slide ${c.slideNumber}: show`} value={face}
                    onChange={(v) => setShown((m) => ({ ...m, [c.slideId]: v }))}
                    options={[{ value: "before", label: "Before" }, { value: "after", label: "After" }]} />
                  <div className="max-w-md">{face === "after" ? <Frame label="After" ai>{c.after}</Frame> : <Frame label="Before">{c.before}</Frame>}</div>
                </div>
              )}

              <div role="group" aria-label={`Slide ${c.slideNumber}, ${c.title}`} className="mt-3 flex flex-wrap gap-2">
                <Button size="sm" variant={c.state === "kept" ? "primary" : "secondary"} aria-pressed={c.state === "kept"} disabled={locked}
                  leading={<CheckIcon aria-hidden width={14} height={14} />} onClick={() => decide(c, c.state === "kept" ? "proposed" : "kept")}>
                  Keep
                </Button>
                <Button size="sm" variant={c.state === "rejected" ? "primary" : "secondary"} aria-pressed={c.state === "rejected"} disabled={locked}
                  leading={<UndoIcon aria-hidden width={14} height={14} />} onClick={() => decide(c, c.state === "rejected" ? "proposed" : "rejected")}>
                  Undo
                </Button>
              </div>
            </li>
          );
        })}
      </ol>

      {pager && changes.length > 1 && (
        <nav aria-label="Changed slides" className="flex items-center justify-between gap-2">
          <Button size="sm" variant="ghost" disabled={at === 0} onClick={() => setPage(at - 1)}
            leading={<ChevronIcon aria-hidden width={14} height={14} className="rotate-180" />}>Previous</Button>
          <span className="text-small leading-4 text-fg-muted">{at + 1} of {changes.length}</span>
          <Button size="sm" variant="ghost" disabled={at >= changes.length - 1} onClick={() => setPage(at + 1)}
            trailing={<ChevronIcon aria-hidden width={14} height={14} />}>Next</Button>
        </nav>
      )}

      <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
        <Button size="sm" variant="secondary" disabled={locked} onClick={() => { onKeepAll(); setSaid(`All ${plural(changes.length, "slide")} kept.`); }}>Keep all</Button>
        <Button size="sm" variant="secondary" disabled={locked} onClick={() => { onRejectAll(); setSaid(`All ${plural(changes.length, "slide")} undone.`); }}>Undo all</Button>
        <span className="flex-1" />
        <Button size="sm" busy={status === "applying"} busyLabel="Saving changes" aria-disabled={left > 0 || undefined}
          aria-describedby={left > 0 ? `${id}-hint` : undefined}
          onClick={() => { if (left > 0) { setDoneHint(true); return; } onDone(); }}
          className={cn(left > 0 && "opacity-60")}>
          {kept ? `Done, apply ${plural(kept, "change")}` : "Done"}
        </Button>
        <p id={`${id}-hint`} className={cn("w-full text-micro", doneHint ? "text-attention-fg" : "text-fg-muted", left === 0 && "sr-only")}>
          {left > 0 ? `Keep or undo ${plural(left, "more slide")} first, or use Keep all.` : ""}
        </p>
      </div>

      <p role="status" aria-live="polite" className="sr-only">{said}</p>
    </section>
  );
}
```
