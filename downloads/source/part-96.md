## tattva/organisms/SuggestionBar.tsx

```tsx
import { useRef, useState, type ReactNode } from "react";
import { nearestTyping, useFocusReturn } from "../lib/focus";
import { cn } from "../lib/cn";
import { CheckIcon, RefreshIcon, SendIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { Spinner } from "../atoms/Spinner";

export type SuggestionBarStatus = "generating" | "ready" | "committed" | "discarded";

export interface SuggestionBarProps {
  /** Where the staged output is in its life. Nothing reaches the document until it is committed. */
  status?: SuggestionBarStatus;
  /** Optional preview of the staged output, rendered above the bar. */
  children?: ReactNode;
  /** Label of the primary action. Use "Replace" when the output replaces a selection. */
  primaryLabel?: string;
  /** Called by the primary action. */
  onKeep?: () => void;
  onInsertBelow?: () => void;
  /** A fresh sample from the same prompt. Not a follow-up. */
  onRegenerate?: () => void;
  onDiscard?: () => void;
  /** A follow-up instruction that changes the draft. Not a fresh sample. */
  onRefine?: (instruction: string) => void;
  /** Cost of a retry, for example "Uses 1 AI response". Shown beside Regenerate. */
  retryCost?: ReactNode;
  /** Where keyboard focus goes once the draft is kept, inserted or discarded. By default the nearest text box or
   * editor outside the bar (the document), else the bar itself, which then shows what happened. */
  focusAfter?: () => HTMLElement | null;
  /** Product text, all overridable. */
  labels?: Partial<Record<"insertBelow" | "regenerate" | "discard" | "refine" | "refinePlaceholder" | "refineSend" | "generating" | "ready" | "committed" | "discarded", string>>;
  className?: string;
}

const defaults = {
  insertBelow: "Insert below", regenerate: "Regenerate", discard: "Discard", refine: "Fine-tune this", refinePlaceholder: "Tell AI what to change",
  refineSend: "Send instruction", generating: "Writing a draft", ready: "Draft ready. Nothing is added until you choose.", committed: "Added to the document.", discarded: "Draft discarded.",
};

/**
 * Result bar for staged AI output. Keep, Insert below, Regenerate and Discard sit next to a "Fine-tune this" field.
 * Regenerate asks for a fresh sample, Fine-tune sends a follow-up instruction. Status changes are announced through a separate polite region.
 */
export function SuggestionBar({
  status = "ready", children, primaryLabel = "Keep", onKeep, onInsertBelow, onRegenerate, onDiscard, onRefine, retryCost, focusAfter, labels, className,
}: SuggestionBarProps) {
  // The buttons change with the status, so focus follows: to Discard while a new draft is written, to the primary
  // action when it is ready, and back to the document (or the bar) once the draft is kept or thrown away.
  const root = useRef<HTMLDivElement>(null);
  const discardWhileWriting = useRef<HTMLButtonElement>(null);
  const primary = useRef<HTMLButtonElement>(null);
  useFocusReturn(status, root, () =>
    status === "generating" ? discardWhileWriting.current : status === "ready" ? primary.current : focusAfter?.() ?? nearestTyping(root.current) ?? root.current);
  const t = { ...defaults, ...labels };
  const [text, setText] = useState("");
  const ready = status === "ready";
  const message = t[status];
  return (
    <div ref={root} tabIndex={-1} className={cn("w-full space-y-3 rounded-card border border-line bg-surface p-3 outline-offset-2", className)}>
      <p role="status" className="sr-only">{status === "generating" ? "" : message}</p>
      {children && <div className={cn("rounded-card bg-sunken p-3 text-body leading-5 text-fg", status === "discarded" && "opacity-60")}>{children}</div>}
      {status === "generating" && (
        <div className="flex items-center gap-2 text-small leading-4 text-fg-muted"><Spinner size={14} label={t.generating} /><span aria-hidden="true">{t.generating}</span>
          <Button ref={discardWhileWriting} size="sm" variant="ghost" className="ml-auto" onClick={onDiscard}>{t.discard}</Button></div>
      )}
      {(status === "committed" || status === "discarded") && (
        <p className="flex items-center gap-1.5 text-small leading-4 text-fg-muted" aria-hidden="true">{status === "committed" && <CheckIcon width={13} height={13} />}{message}</p>
      )}
      {ready && (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <Button ref={primary} size="sm" variant="lime" onClick={onKeep}>{primaryLabel}</Button>
            <Button size="sm" variant="secondary" onClick={onInsertBelow}>{t.insertBelow}</Button>
            <Button size="sm" variant="secondary" leading={<RefreshIcon width={13} height={13} />} onClick={onRegenerate}>{t.regenerate}</Button>
            {retryCost && <span className="text-micro text-fg-subtle">{retryCost}</span>}
            <Button size="sm" variant="ghost" className="ml-auto" onClick={onDiscard}>{t.discard}</Button>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); const v = text.trim(); if (v) { onRefine?.(v); setText(""); } }}
            className="flex items-center gap-1 rounded-field border border-line bg-sunken pl-4 pr-1 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[var(--focus-ring)]">
            <input value={text} onChange={(e) => setText(e.target.value)} aria-label={t.refine} placeholder={`${t.refine}. ${t.refinePlaceholder}`}
              className="h-9 min-w-0 flex-1 bg-transparent text-compact text-fg placeholder:text-fg-subtle focus:outline-none" />
            <IconButton type="submit" size="sm" variant="primary" label={t.refineSend} disabled={!text.trim()}><SendIcon width={13} height={13} /></IconButton>
          </form>
        </>
      )}
    </div>
  );
}
```

## tattva/organisms/SummaryCard.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";
import { AIBadge } from "../atoms/AIBadge";
import { Spinner } from "../atoms/Spinner";
import { FeedbackBar, type Rating } from "../molecules/FeedbackBar";
import type { Source } from "../molecules/SourceCard";
import { SourceList } from "./SourceList";

export interface SummaryCardProps {
  /** Heading of the block. */
  title?: string;
  /** Text of the AI label. */
  aiLabel?: string;
  /** Status line, for example "Based on 4 sources". Announced politely when it changes. */
  status?: ReactNode;
  /** Show a spinner beside the status while the summary is still being produced. */
  generating?: boolean;
  /** The summary. Place CitationHoverCard markers inline here. Never put aria-live on streamed text. */
  children: ReactNode;
  /** Longer detail revealed by the expand control. Omit to hide the control. */
  detail?: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  sources?: Source[];
  /** Disclaimer line under the content. */
  disclaimer?: ReactNode;
  /** Shows the feedback row when provided. */
  onFeedback?: (rating: Exclude<Rating, null>, reason?: string) => void;
  className?: string;
}

/** AI overview block: label and status, summary, optional expandable detail, sources, a disclaimer and a feedback row. */
export function SummaryCard({
  title = "Overview", aiLabel, status, generating, children, detail, expandLabel = "Show more", collapseLabel = "Show less", defaultExpanded = false,
  expanded, onExpandedChange, sources, disclaimer = "AI responses may include mistakes. Check important information.", onFeedback, className,
}: SummaryCardProps) {
  const [inner, setInner] = useState(defaultExpanded);
  const open = expanded ?? inner;
  const id = useId();
  const toggle = () => { const v = !open; if (expanded === undefined) setInner(v); onExpandedChange?.(v); };
  return (
    <section aria-label={title} className={cn("w-full space-y-4 rounded-card border border-line bg-surface p-5", className)}>
      <header className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <AIBadge {...(aiLabel ? { label: aiLabel } : {})} />
        <h3 className="text-lead leading-6 text-fg">{title}</h3>
        {status && (
          <p role="status" className="ml-auto flex items-center gap-1.5 text-small leading-4 text-fg-muted">
            {generating && <Spinner size={12} label="Working" />}{status}
          </p>
        )}
      </header>
      <div className="text-body leading-relaxed text-fg">{children}</div>
      {detail && (
        <div>
          <button type="button" aria-expanded={open} aria-controls={id} onClick={toggle}
            className="inline-flex cursor-pointer items-center gap-1 rounded-control text-small leading-4 font-medium text-fg-muted hover:text-fg">
            <ChevronIcon width={12} height={12} className={cn("transition-transform duration-[var(--dur-fast)]", open ? "-rotate-90" : "rotate-90")} />
            {open ? collapseLabel : expandLabel}
          </button>
          <div id={id} hidden={!open} className="mt-2 text-body leading-relaxed text-fg-muted">{detail}</div>
        </div>
      )}
      {sources && sources.length > 0 && <SourceList sources={sources} />}
      {disclaimer && <p className="text-small leading-4 text-fg-subtle">{disclaimer}</p>}
      {onFeedback && <FeedbackBar onSubmit={onFeedback} />}
    </section>
  );
}
```
