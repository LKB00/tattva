## tattva/molecules/DiagramFigure.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { Button } from "../atoms/Button";
import { CodeBlock } from "./CodeBlock";

export interface DiagramFigureProps {
  /** Short alt. Names the diagram and says where the long description is. Becomes the figure's aria-label. */
  label: string;
  /** Visible caption. */
  caption: string;
  /** Long description, shown on the page for everyone. */
  description?: ReactNode;
  /** Text alternative shown under the diagram, such as an ordered list of steps. */
  alternative?: ReactNode;
  /** Textual definition of the diagram. Enables the view-source toggle. */
  source?: string;
  /** Language label for the source block. */
  sourceLanguage?: string;
  /** The diagram itself. */
  children: ReactNode;
}

/**
 * Accessible wrapper for a complex image. It renders a figure with a short aria-label, a caption,
 * a visible long description, an optional text alternative and a view-source toggle with copy.
 */
export function DiagramFigure({ label, caption, description, alternative, source, sourceLanguage = "text", children }: DiagramFigureProps) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const desc = `${uid}-desc`;
  const src = `${uid}-src`;
  return (
    <figure aria-label={label} className="m-0 min-w-0 rounded-card border border-line bg-surface p-4 sm:p-5">
      <div tabIndex={0} className="overflow-x-auto">{children}</div>
      <figcaption className="mt-4 border-t border-line pt-4">
        <p className="text-compact font-medium text-fg">{caption}</p>
        {description && <div id={desc} className="mt-1 max-w-[68ch] text-compact leading-6 text-fg-muted">{description}</div>}
      </figcaption>
      {alternative && <div className="mt-3 text-compact leading-6 text-fg-muted">{alternative}</div>}
      {source && (
        <div className="mt-3">
          <Button variant="secondary" size="sm" aria-expanded={open} aria-controls={src} onClick={() => setOpen((o) => !o)}>{open ? "Hide source" : "View source"}</Button>
          {open && <div id={src} className="mt-3"><CodeBlock code={source} language={sourceLanguage} /></div>}
        </div>
      )}
    </figure>
  );
}
```

## tattva/molecules/DiffFileRow.tsx

```tsx
import { useRef } from "react";
import { cn } from "../lib/cn";
import { useFocusAfter } from "../lib/useFocusAfter";
import { CheckIcon, FileIcon, XIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export type DiffHunkState = "pending" | "kept" | "rejected";
/** A file is "partial" when some hunks are kept and others are rejected or still pending. */
export type DiffReviewState = DiffHunkState | "partial";

export interface DiffFileRowProps {
  /** File path. The directory is shown muted and the file name in full weight. */
  path: string;
  /** Number of added lines. */
  added: number;
  /** Number of removed lines. */
  removed: number;
  state?: DiffReviewState;
  /** Marks the file whose hunks are currently shown. */
  selected?: boolean;
  onSelect?: () => void;
  onKeep?: () => void;
  onReject?: () => void;
  /** Return a kept or rejected file to pending. When omitted, decided rows show no undo. */
  onReset?: () => void;
  labels?: { keep?: string; reject?: string; kept?: string; rejected?: string; partial?: string; undo?: string; /** Spoken in place of the +/- counts. */ lines?: (added: number, removed: number) => string };
  className?: string;
}

/** Half-filled circle for a partly kept file. */
function PartialGlyph() {
  return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
    </svg>
  );
}

/** One file in a change review: name, +/- counts and a per-file Keep and Reject. Decided files show a badge with an icon and text, and a partly kept file shows its badge beside the buttons. */
export function DiffFileRow({ path, added, removed, state = "pending", selected, onSelect, onKeep, onReject, onReset, labels, className }: DiffFileRowProps) {
  const l = { keep: "Keep", reject: "Reject", kept: "Kept", rejected: "Rejected", partial: "Partly kept", undo: "Undo", lines: (a: number, r: number) => `${a} ${a === 1 ? "line" : "lines"} added, ${r} removed`, ...labels };
  const slash = path.lastIndexOf("/");
  const dir = slash >= 0 ? path.slice(0, slash + 1) : "";
  const name = slash >= 0 ? path.slice(slash + 1) : path;
  const nameBtn = useRef<HTMLButtonElement>(null);
  // Keep, Reject and Undo disappear once pressed. Focus then lands on the file name, which says the new state.
  const arm = useFocusAfter(state, () => nameBtn.current);
  const act = (f?: () => void) => () => { arm(); f?.(); };
  const stateWord = state === "kept" ? l.kept : state === "rejected" ? l.rejected : state === "partial" ? l.partial : "";
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-card px-3 py-2", selected ? "bg-selected" : "hover:bg-hover", className)}>
      <button ref={nameBtn} type="button" onClick={onSelect} aria-current={selected ? "true" : undefined}
        className="flex min-w-36 flex-1 cursor-pointer items-center gap-2 rounded-control text-left">
        <FileIcon width={14} height={14} className="shrink-0 text-fg-subtle" />
        <span className="min-w-0 truncate text-compact">
          <span className={selected ? "text-fg-muted" : "text-fg-subtle"}>{dir}</span>
          <span className={cn("font-medium", state === "rejected" && "line-through text-fg-muted")}>{name}</span>
          {stateWord && <span className="sr-only">, {stateWord}</span>}
        </span>
      </button>
      <span className="font-mono text-small leading-4 tabular-nums">
        <span aria-hidden className="text-success-fg">+{added}</span>{" "}
        <span aria-hidden className="text-danger-fg">&minus;{removed}</span>
        <span className="sr-only">{l.lines(added, removed)}</span>
      </span>
      {state === "pending" || state === "partial" ? (
        <span key="open" className="flex flex-wrap items-center gap-1.5">
          {state === "partial" && (
            <Badge tone="neutral"><PartialGlyph />{l.partial}</Badge>
          )}
          <Button size="sm" variant="secondary" onClick={act(onKeep)} aria-label={`${l.keep} ${path}`}>{l.keep}</Button>
          <Button size="sm" variant="ghost" onClick={act(onReject)} aria-label={`${l.reject} ${path}`}>{l.reject}</Button>
          {state === "partial" && onReset && <Button size="sm" variant="ghost" onClick={act(onReset)} aria-label={`${l.undo}: ${path}`}>{l.undo}</Button>}
        </span>
      ) : (
        <span key="decided" className="flex items-center gap-1.5">
          <Badge tone={state === "kept" ? "success" : "danger"}>
            {state === "kept" ? <CheckIcon width={11} height={11} /> : <XIcon width={11} height={11} />}
            {state === "kept" ? l.kept : l.rejected}
          </Badge>
          {onReset && <Button size="sm" variant="ghost" onClick={act(onReset)} aria-label={`${l.undo}: ${path}`}>{l.undo}</Button>}
        </span>
      )}
    </div>
  );
}
```

## tattva/molecules/DraftPreview.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";

export interface DraftHeader {
  label: string;
  value: ReactNode;
}

export interface DraftPreviewProps {
  /** Rows like To, From and Subject, drawn as a labelled list above the body. */
  headers?: DraftHeader[];
  /** The body text. */
  children: ReactNode;
  /** Shown in the expand button, such as "Read all 95 words". */
  wordCount?: number;
  /** How many lines show before the text fades out. */
  previewLines?: number;
  defaultOpen?: boolean;
  /** Controlled open state. Pair with onOpenChange. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Text of the expand button. */
  expandLabel?: (words: number | undefined) => string;
  /** Text of the collapse button. */
  collapseLabel?: string;
  /** A line under the message, such as "Nothing goes out without your tap." */
  footer?: ReactNode;
  className?: string;
}

const LINE = 1.625;
const defaultExpand = (words: number | undefined) => (words === undefined ? "Read all" : `Read all ${words} words`);

/** A drafted message shown as what it is, with headers and a body, so no one approves text they have not read. It never opens by itself. */
export function DraftPreview({ headers, children, wordCount, previewLines = 4, defaultOpen = false, open, onOpenChange, expandLabel = defaultExpand, collapseLabel = "Show less", footer, className }: DraftPreviewProps) {
  const [inner, setInner] = useState(defaultOpen);
  const isOpen = open ?? inner;
  const [overflows, setOverflows] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const el = bodyRef.current;
    if (!el || isOpen) return;
    const measure = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    measure();
    const ro = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    ro?.observe(el);
    return () => ro?.disconnect();
  }, [isOpen, previewLines, children]);

  const toggle = () => { const next = !isOpen; if (open === undefined) setInner(next); onOpenChange?.(next); };
  const clamped = !isOpen && overflows;
  return (
    <section className={cn("min-w-0 overflow-hidden rounded-card border border-line bg-surface forced-colors:border-[CanvasText]", className)}>
      {headers && headers.length > 0 && (
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-b border-line bg-sunken px-4 py-3 text-body leading-5">
          {headers.map((h) => (
            <div key={h.label} className="col-span-2 grid grid-cols-subgrid items-baseline">
              <dt className="text-fg-muted">{h.label}</dt>
              <dd className="m-0 min-w-0 text-fg [overflow-wrap:anywhere]">{h.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="px-4 py-3">
        <div className="relative">
          <div ref={bodyRef} id={id} className={cn("text-body leading-5 text-fg [overflow-wrap:anywhere]", !isOpen && "overflow-hidden")}
            style={{ lineHeight: LINE, maxHeight: isOpen ? undefined : `${previewLines * LINE}em` }}>{children}</div>
          {clamped && <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-surface to-transparent" />}
        </div>
        {(overflows || isOpen) && (
          <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={toggle}
            className="mt-2 inline-flex min-h-6 cursor-pointer items-center gap-1 rounded-md text-body leading-5 font-medium text-fg underline-offset-4 hover:underline pointer-coarse:min-h-11">
            <ChevronIcon aria-hidden width={14} height={14} className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)]", isOpen ? "-rotate-90" : "rotate-90")} />
            {isOpen ? collapseLabel : expandLabel(wordCount)}
          </button>
        )}
      </div>
      {footer != null && <div className="border-t border-line px-4 py-2.5 text-small leading-4 text-fg-muted">{footer}</div>}
    </section>
  );
}
```
