## tattva/molecules/SlideStage.tsx

```tsx
import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, EditIcon, EyeIcon, InfoIcon, RetryIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { AILabel } from "./AILabel";

export type SlideRatio = "16:9" | "4:3" | "1:1" | "4:5" | "9:16" | "fluid";
export type StageState = "viewing" | "editing" | "working" | "previewing" | "loading" | "partial" | "failed";
export type StageIssueKind = "overflow" | "contrast" | "missingAlt" | "noSource";

export interface StageIssue {
  id: string;
  kind: StageIssueKind;
  /** Plain words, such as "The third point does not fit. Shorten it or split the slide." */
  message: string;
  /** id of the element on the slide this is about. Choosing the issue focuses it. */
  targetId?: string;
  /** True when it stops the person presenting or exporting. Only then the chip turns amber. */
  blocking?: boolean;
}

export interface StageAIChange {
  /** What the AI changed on this slide, in one or two plain sentences. */
  summary: string;
  /** Shown as Undo this change when given. */
  onUndo?: () => void;
}

/** Width and height, in design pixels, of a slide at each ratio. Content is laid out at this size and then scaled. */
const DESIGN: Record<Exclude<SlideRatio, "fluid">, [number, number]> = {
  "16:9": [960, 540], "4:3": [960, 720], "1:1": [960, 960], "4:5": [960, 1200], "9:16": [540, 960],
};

/* ---------------- SlideCanvas ---------------- */

export interface SlideCanvasProps {
  /** Slide shape. "fluid" grows with its content and is not scaled. */
  ratio?: SlideRatio;
  /** The slide, laid out for the design size (960 wide for landscape, 540 wide for 9:16). */
  children: ReactNode;
  className?: string;
  /** Extra styles on the frame, for example a max width. */
  style?: CSSProperties;
}

/**
 * Draws a slide at its design size and scales the whole thing to the width it is given, so nothing reflows.
 * What the person sees here is what will export. SlideStage and SlideRail thumbnails both use it.
 */
export function SlideCanvas({ ratio = "16:9", children, className, style }: SlideCanvasProps) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const size = ratio === "fluid" ? null : DESIGN[ratio];

  useLayoutEffect(() => {
    const el = box.current;
    if (!el || !size) return;
    const fit = () => setScale(el.clientWidth / size[0]);
    fit();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [size?.[0]]);

  if (!size) return <div className={cn("relative w-full overflow-hidden", className)} style={style}>{children}</div>;
  return (
    <div ref={box} className={cn("relative w-full overflow-hidden", className)} style={{ aspectRatio: `${size[0]} / ${size[1]}`, ...style }}>
      {/* Hidden until measured, so a full-size slide never flashes before it is scaled. Scaling never animates. */}
      <div className="absolute top-0 left-0 origin-top-left" style={{ width: size[0], height: size[1], transform: `scale(${scale})`, visibility: scale ? undefined : "hidden" }}>
        {children}
      </div>
    </div>
  );
}

/* ---------------- SlideStage ---------------- */

export interface SlideStageProps {
  /** Names the stage for screen readers and in the header, such as "Slide 3, Pricing". */
  label: string;
  /** Slide shape. The frame keeps it at every width. */
  ratio?: SlideRatio;
  /** What is happening to this slide. */
  state?: StageState;
  /** The slide, laid out at its design size. */
  children?: ReactNode;
  /** Things to check before presenting, such as text that does not fit. */
  issues?: StageIssue[];
  /** Called when the person picks an issue. Without it, focus moves to the element named by targetId. */
  onIssueSelect?: (issue: StageIssue) => void;
  /** Words for the preview banner. */
  previewLabel?: string;
  /** Shows Exit preview in the banner. Escape inside the stage does the same. */
  onExitPreview?: () => void;
  /** What the AI is doing while state is "working", such as "Rewriting the title and points". */
  workingLabel?: string;
  /** What is missing while state is "partial", such as "The chart could not be made. The text is ready." */
  partialNote?: string;
  /** Why it failed, while state is "failed". Say whether anything was kept. */
  errorMessage?: string;
  /** Shows Try again while state is "failed" or "partial". */
  onRetry?: () => void;
  /** A caption under the slide saying what the AI changed. */
  aiChange?: StageAIChange;
  /** Tallest the frame may be, as any CSS length. Portrait slides use it to stay on screen. */
  maxHeight?: string;
  className?: string;
}

const STATE_WORDS: Record<StageState, string> = {
  viewing: "", editing: "Editing", working: "AI is working on this slide", previewing: "Preview",
  loading: "Loading slide", partial: "Partly built", failed: "Could not build this slide",
};

const KIND_WORDS: Record<StageIssueKind, string> = {
  overflow: "Text does not fit", contrast: "Hard to read", missingAlt: "Image has no description", noSource: "Number has no source",
};

function aspect(ratio: SlideRatio) {
  if (ratio === "fluid") return undefined;
  const [w, h] = DESIGN[ratio];
  return w / h;
}

/**
 * The current slide at its true shape, scaled to fit, with the warnings a person needs before presenting.
 * It covers viewing, editing, AI working, previewing a change, loading, partly built and failed, each in words.
 */
export function SlideStage({
  label, ratio = "16:9", state = "viewing", children, issues = [], onIssueSelect, previewLabel = "Previewing a change. Nothing has changed yet.",
  onExitPreview, workingLabel, partialNote, errorMessage, onRetry, aiChange, maxHeight = "70dvh", className,
}: SlideStageProps) {
  const [showIssues, setShowIssues] = useState(false);
  const issuesId = useId();
  const blocking = issues.filter((i) => i.blocking).length;
  const ar = aspect(ratio);
  // Width is capped so the frame's height never passes maxHeight: a 9:16 slide stays on screen.
  const frameStyle: CSSProperties | undefined = ar ? { maxWidth: `min(100%, calc(${maxHeight} * ${ar}))` } : undefined;

  useEffect(() => { if (!issues.length) setShowIssues(false); }, [issues.length]);

  const pick = (issue: StageIssue) => {
    if (onIssueSelect) onIssueSelect(issue);
    else if (issue.targetId) {
      const el = document.getElementById(issue.targetId);
      if (el) {
        if (!el.hasAttribute("tabindex") && !el.matches("a, button, input, select, textarea")) el.setAttribute("tabindex", "-1");
        el.focus();
      }
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape" && state === "previewing" && onExitPreview) { e.preventDefault(); onExitPreview(); }
  };

  const words = state === "working" && workingLabel ? workingLabel : STATE_WORDS[state];
  const issueWords = blocking
    ? `${blocking} ${blocking === 1 ? "thing" : "things"} to fix before you present`
    : `${issues.length} ${issues.length === 1 ? "thing" : "things"} to check`;

  let body: ReactNode;
  if (state === "loading") {
    body = (
      <div className="absolute inset-0 grid content-center gap-3 p-6">
        <Skeleton className="h-6 w-3/5 rounded-control" />
        <Skeleton className="h-3 w-4/5 rounded-control" />
        <Skeleton className="h-3 w-2/3 rounded-control" />
      </div>
    );
  } else if (state === "failed") {
    body = (
      <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-sunken p-4 text-center">
        <AlertIcon width={20} height={20} className="text-danger-fg" />
        <p className="text-body font-medium text-fg">Could not build this slide</p>
        {errorMessage && <p className="max-w-narrow text-compact text-fg-muted">{errorMessage}</p>}
        {onRetry && <Button size="sm" variant="secondary" leading={<RetryIcon width={14} height={14} />} onClick={onRetry} className="mt-1">Try again</Button>}
      </div>
    );
  } else {
    body = (
      <div key={state === "previewing" ? "preview" : "slide"} className={cn("size-full", "motion-safe:animate-fade")}>
        <SlideCanvas ratio={ratio}>{children}</SlideCanvas>
      </div>
    );
  }

  const frame = (
    <div className={cn(
      "relative w-full overflow-hidden rounded-card border bg-surface",
      state === "editing" ? "border-fg" : "border-line",
      state === "working" && "opacity-90",
    )} style={ar && (state === "loading" || state === "failed") ? { aspectRatio: String(ar) } : undefined}>
      {body}
    </div>
  );

  return (
    <section role="region" aria-label={label} onKeyDown={onKeyDown} className={cn("grid w-full min-w-0 gap-2", className)}>
      {/* Top line: the state in words on the left, things to check on the right. */}
      <div className="flex min-h-8 flex-wrap items-center justify-between gap-2">
        <p className="flex min-w-0 items-center gap-1.5 text-compact text-fg-muted">
          {state === "editing" && <EditIcon width={14} height={14} aria-hidden />}
          {state === "previewing" && <EyeIcon width={14} height={14} aria-hidden />}
          {state === "failed" && <AlertIcon width={14} height={14} aria-hidden className="text-danger-fg" />}
          <span className="truncate font-medium text-fg">{label}</span>
          {words && <span aria-hidden className="text-fg-subtle">·</span>}
          {words && <span className="truncate">{words}</span>}
        </p>
        {issues.length > 0 && (
          <button type="button" aria-expanded={showIssues} aria-controls={issuesId} onClick={() => setShowIssues((v) => !v)}
            className={cn(
              "tap inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-control border px-2.5 text-small font-medium transition-colors duration-(--dur-fast)",
              blocking ? "border-transparent bg-attention-soft text-attention-fg hover:opacity-90" : "border-line bg-surface text-fg-muted hover:bg-hover hover:text-fg",
            )}>
            {blocking ? <AlertIcon width={14} height={14} aria-hidden /> : <InfoIcon width={14} height={14} aria-hidden />}
            {issueWords}
          </button>
        )}
      </div>

      {state === "previewing" && (
        <div role="status" className="flex flex-wrap items-center justify-between gap-2 rounded-card border border-line bg-sunken px-3 py-2 motion-safe:animate-fade">
          <p className="flex items-center gap-2 text-compact text-fg"><EyeIcon width={16} height={16} aria-hidden className="shrink-0 text-fg-muted" />{previewLabel}</p>
          {onExitPreview && <Button size="sm" variant="secondary" onClick={onExitPreview}>Exit preview</Button>}
        </div>
      )}

      {showIssues && issues.length > 0 && (
        <ul id={issuesId} aria-label="Things to check on this slide" className="grid gap-1 rounded-card border border-line bg-surface p-1.5">
          {issues.map((i) => (
            <li key={i.id}>
              <button type="button" onClick={() => pick(i)}
                className="flex min-h-9 w-full cursor-pointer items-start gap-2 rounded-control px-2 py-1.5 text-left hover:bg-hover pointer-coarse:min-h-11">
                {i.blocking
                  ? <Badge className="mt-0.5 shrink-0 border-transparent bg-attention-soft text-attention-fg">Fix first</Badge>
                  : <Badge className="mt-0.5 shrink-0">Check</Badge>}
                <span className="min-w-0 text-compact leading-5">
                  <span className="font-medium text-fg">{KIND_WORDS[i.kind]}. </span>
                  <span className="text-fg-muted">{i.message}</span>
                  {i.targetId && <span className="text-fg-subtle"> Go to it.</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mx-auto w-full" style={frameStyle}>
        <WorkingEdge active={state === "working"} label={workingLabel ?? "AI is working on this slide"} radius="card">
          {frame}
        </WorkingEdge>
      </div>

      {state === "partial" && (
        <div role="status" className="flex flex-wrap items-center gap-2 text-compact text-fg-muted">
          <Badge tone="unsure">Partly built</Badge>
          <span className="min-w-0 flex-1">{partialNote ?? "Some parts of this slide are not ready yet."}</span>
          {onRetry && <Button size="sm" variant="secondary" leading={<RetryIcon width={14} height={14} />} onClick={onRetry}>Try the rest again</Button>}
        </div>
      )}

      {aiChange && state !== "loading" && state !== "failed" && (
        <div className="flex flex-wrap items-start gap-2 text-compact leading-5 text-fg-muted">
          <AILabel level="message" size={18} text="AI edit" overview="The AI changed this slide at your request. Your theme and the rest of the deck stayed the same." />
          <p className="min-w-0 flex-1 basis-48">{aiChange.summary}</p>
          {aiChange.onUndo && <Button size="sm" variant="ghost" onClick={aiChange.onUndo}>Undo this change</Button>}
        </div>
      )}
    </section>
  );
}
```

## tattva/molecules/SourceCard.tsx

```tsx
import { GlobeIcon } from "../lib/icons";

export interface Source { id: number; title: string; url: string; domain: string; snippet?: string }

/** One numbered source. Render inside an <ol>; the id anchors inline citation markers. */
export function SourceCard({ source: s }: { source: Source }) {
  return (
    <li id={`source-${s.id}`}>
      <a href={s.url} target="_blank" rel="noreferrer noopener"
        className="flex h-full animate-rise gap-2.5 rounded-card border border-line bg-surface p-3 text-body leading-5 no-underline transition-colors hover:border-line-strong hover:bg-sunken">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-soft text-nano font-semibold text-fg">{s.id}</span>
        <span className="min-w-0">
          <span className="line-clamp-1 font-medium text-fg">{s.title}</span>
          <span className="flex items-center gap-1 text-small leading-4 text-fg-subtle"><GlobeIcon width={11} height={11} />{s.domain}</span>
          {s.snippet && <span className="mt-1 line-clamp-2 block text-small leading-4 text-fg-muted">{s.snippet}</span>}
        </span>
      </a>
    </li>
  );
}
```
