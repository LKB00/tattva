## tattva/molecules/MediaFrame.tsx

```tsx
import { useState } from "react";
import { cn } from "../lib/cn";
import { ImageIcon } from "../lib/icons";
import { AIBadge } from "../atoms/AIBadge";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { ProvenancePopover, type ProvenancePopoverProps } from "./ProvenancePopover";

export type MediaRatio = "1:1" | "4:3" | "16:9" | "3:2";

const ratioClass: Record<MediaRatio, string> = {
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-video",
  "3:2": "aspect-[3/2]",
};

export interface MediaFrameProps {
  /** Image URL. */
  src: string;
  /** Describes what the image shows, not how it was made. Required. Ignored when `decorative` is set. */
  alt: string;
  /** Marks the image as decoration. Renders alt="". */
  decorative?: boolean;
  /** Fixed ratio. The frame reserves this space before the image loads, so layout does not shift. */
  ratio?: MediaRatio;
  /** Average color of the image as any CSS color, such as a token `var(--lime-soft)`. Used as the placeholder. When omitted, a shimmer shows while loading. */
  dominantColor?: string;
  /** Caption below the image. Wraps the frame in figure and figcaption. */
  caption?: string;
  /** Shows the AI-generated label on the image. */
  aiGenerated?: boolean;
  /** Label text for the AI badge. */
  aiLabel?: string;
  /** Provenance details. When set, the label opens a popover with them. */
  provenance?: Omit<ProvenancePopoverProps, "label">;
  /** Called when Retry is pressed after a load failure. */
  onRetry?: () => void;
  /** Forces a state. Use it for previews and for controlled loading. */
  status?: "loading" | "error";
  /** Copy for the error tile. */
  errorLabel?: string;
  retryLabel?: string;
  /** Edge to edge inside a card: no corners or border of its own, so the card's corners clip the picture. */
  flush?: boolean;
  className?: string;
}

/**
 * Image with a fixed ratio, a token radius and a reserved box. It shows a placeholder while loading,
 * a fallback tile with Retry when the image fails, an optional caption and an optional AI label.
 */
export function MediaFrame({
  src, alt, decorative, ratio = "4:3", dominantColor, caption, aiGenerated, aiLabel = "AI-generated", provenance, onRetry,
  status, errorLabel = "Image could not load", retryLabel = "Retry", flush = false, className,
}: MediaFrameProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const error = status === "error" || (status === undefined && failed);
  const showImage = status === undefined && !failed;
  const loading = status === "loading" || (showImage && !loaded);

  const retry = () => { setFailed(false); setLoaded(false); setAttempt((n) => n + 1); onRetry?.(); };

  const frame = (
    <div className={cn("relative", className)}>
      <div className={cn("relative overflow-hidden bg-sunken", !flush && "rounded-card border border-line", ratioClass[ratio])} style={dominantColor && !error ? { backgroundColor: dominantColor } : undefined}>
        {loading && !dominantColor && <Skeleton className="absolute inset-0 rounded-none" />}
        {showImage && (
          <img
            key={attempt}
            src={src}
            alt={decorative ? "" : alt}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={cn("absolute inset-0 size-full object-cover transition-opacity duration-[var(--dur-base)] motion-reduce:transition-none", loaded ? "opacity-100" : "opacity-0")}
          />
        )}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-sunken p-3 text-center">
            <ImageIcon width={20} height={20} className="text-fg-subtle" />
            <p className="text-small leading-4 text-fg-muted">{errorLabel}</p>
            <Button size="sm" variant="secondary" onClick={retry}>{retryLabel}</Button>
          </div>
        )}
      </div>
      {aiGenerated && (
        <div className="absolute bottom-2 left-2 z-10 rounded-control bg-surface p-0.5">
          {provenance ? <ProvenancePopover label={aiLabel} side="top" {...provenance} /> : <AIBadge label={aiLabel} solid />}
        </div>
      )}
    </div>
  );

  if (!caption) return frame;
  return (
    <figure className="m-0">
      {frame}
      <figcaption className="mt-2 text-small leading-5 text-fg-muted">{caption}</figcaption>
    </figure>
  );
}
```

## tattva/molecules/MemoryNotice.tsx

```tsx
import type { ReactNode } from "react";
import { SparkleIcon, XIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { cn } from "../lib/cn";

export interface MemoryNoticeProps {
  /** Heading. */
  title?: string;
  /** What was saved, in the person's terms. */
  saved: ReactNode;
  /** Opens the memory manager. The button is hidden when omitted. */
  onManage?: () => void;
  /** Removes the saved item. The button is hidden when omitted. */
  onUndo?: () => void;
  /** Dismisses the notice. The close button is hidden when omitted. */
  onDismiss?: () => void;
  manageLabel?: string;
  undoLabel?: string;
  dismissLabel?: string;
  className?: string;
}

/** Inline notice shown at the moment something is saved to memory. It names what was saved and offers Manage and Undo. */
export function MemoryNotice({ title = "Memory updated", saved, onManage, onUndo, onDismiss, manageLabel = "Manage", undoLabel = "Undo", dismissLabel = "Dismiss memory notice", className }: MemoryNoticeProps) {
  return (
    <div role="status" className={cn("flex items-start gap-3 rounded-card border border-line bg-sunken px-4 py-3 text-body leading-5", className)}>
      <SparkleIcon className="mt-0.5 shrink-0 text-fg-muted" width={14} height={14} />
      <div className="min-w-0 flex-1">
        <p className="font-medium text-fg">{title}</p>
        <p className="mt-0.5 text-fg-muted">{saved}</p>
        {(onManage || onUndo) && (
          <div className="mt-2 flex flex-wrap gap-2">
            {onManage && <Button size="sm" variant="secondary" onClick={onManage}>{manageLabel}</Button>}
            {onUndo && <Button size="sm" variant="ghost" onClick={onUndo}>{undoLabel}</Button>}
          </div>
        )}
      </div>
      {onDismiss && <IconButton size="sm" label={dismissLabel} onClick={onDismiss}><XIcon /></IconButton>}
    </div>
  );
}
```

## tattva/molecules/Menu.tsx

```tsx
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Kbd } from "../atoms/Kbd";
import { Popover } from "../atoms/Popover";

export type MenuEntry =
  | { type?: "item"; id: string; label: string; icon?: ReactNode; shortcut?: string; disabled?: boolean; danger?: boolean; onSelect: () => void }
  | { type: "separator" }
  | { type: "label"; label: string };

export interface MenuProps {
  /** Content of the trigger button. For an icon alone, also set triggerLabel. */
  trigger: ReactNode;
  /** Accessible name of the trigger button. Required when the trigger is only an icon. */
  triggerLabel?: string;
  /** Accessible name of the menu itself. Defaults to triggerLabel, then "Menu". */
  label?: string;
  items: MenuEntry[];
  align?: "start" | "end";
  side?: "bottom" | "top";
  /** Draw the menu on the page itself so a scrolling or clipped parent cannot cut it off. Use inside lists and side bars. */
  portal?: boolean;
  /** On a phone the menu opens as a bottom sheet within thumb reach. Set false to keep a small floating menu there too. */
  phoneSheet?: boolean;
  className?: string;
}

const ENABLED = '[role="menuitem"]:not([aria-disabled="true"])';

/** Action menu opened from a button, following the WAI-ARIA menu button pattern. Built on Popover. */
export function Menu({ trigger, triggerLabel, label, items, align = "start", side = "bottom", portal, phoneSheet, className }: MenuProps) {
  const [open, setOpen] = useState(false);
  const list = useRef<HTMLDivElement>(null);
  const openAt = useRef<"first" | "last">("first");
  const buffer = useRef({ text: "", timer: 0 });

  // Popover focuses the first item. ArrowUp from the trigger asks for the last one instead.
  useEffect(() => {
    if (!open) return;
    if (openAt.current === "last") {
      const all = list.current?.querySelectorAll<HTMLElement>(ENABLED);
      all?.[all.length - 1]?.focus();
    }
    openAt.current = "first";
  }, [open]);
  useEffect(() => () => window.clearTimeout(buffer.current.timer), []);

  const typeAhead = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey || (e.key === " " && !buffer.current.text)) return;
    const all = Array.from(list.current?.querySelectorAll<HTMLElement>(ENABLED) ?? []);
    if (!all.length) return;
    e.preventDefault();
    const b = buffer.current;
    window.clearTimeout(b.timer);
    b.text += e.key.toLowerCase();
    b.timer = window.setTimeout(() => { b.text = ""; }, 600);
    const cur = all.findIndex((el) => el === document.activeElement);
    // One repeated letter cycles through matches; a longer word keeps the current match if it still fits.
    const start = b.text.length === 1 ? cur + 1 : Math.max(cur, 0);
    for (let k = 0; k < all.length; k++) {
      const el = all[(start + k) % all.length];
      if ((el.dataset.label ?? "").toLowerCase().startsWith(b.text)) { el.focus(); return; }
    }
  };

  return (
    <Popover label={label ?? triggerLabel ?? "Menu"} role="menu" align={align} side={side} portal={portal} phoneSheet={phoneSheet} open={open} onOpenChange={setOpen} className={className} panelClassName="min-w-48"
      trigger={({ triggerProps }) => (
        <button type="button" aria-label={triggerLabel} {...triggerProps}
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (open || (e.key !== "ArrowDown" && e.key !== "ArrowUp")) return;
            e.preventDefault();
            openAt.current = e.key === "ArrowUp" ? "last" : "first";
            setOpen(true);
          }}
          className="inline-flex min-h-9 min-w-9 cursor-pointer items-center justify-center gap-2 rounded-control border border-line bg-surface px-2.5 text-body font-medium text-fg transition-colors duration-[var(--dur-fast)] hover:bg-hover pointer-coarse:min-h-11 pointer-coarse:min-w-11">
          {trigger}
        </button>
      )}>
      {({ close }) => (
        <div ref={list} onKeyDown={typeAhead}>
          {items.map((it, i) => {
            if (it.type === "separator") return <div key={`s${i}`} role="separator" className="my-1 h-px bg-line forced-colors:bg-[CanvasText]" />;
            if (it.type === "label") return <div key={`l${i}`} role="presentation" className="px-2.5 pt-2 pb-1 text-small leading-4 font-medium text-fg-subtle">{it.label}</div>;
            return (
              <button key={it.id} type="button" role="menuitem" tabIndex={-1} data-label={it.label} aria-disabled={it.disabled || undefined}
                onClick={() => { if (it.disabled) return; it.onSelect(); close(); }}
                className={cn(
                  "flex min-h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-body focus-visible:outline-offset-[-2px] pointer-coarse:min-h-11",
                  it.disabled ? "cursor-not-allowed opacity-(--disabled-opacity)" : cn("cursor-pointer hover:bg-hover focus-visible:bg-hover", it.danger ? "text-danger-fg" : "text-fg"),
                )}>
                {it.icon && <span aria-hidden className="flex size-4 shrink-0 items-center justify-center">{it.icon}</span>}
                <span className="flex-1">{it.label}</span>
                {it.shortcut && <Kbd>{it.shortcut}</Kbd>}
              </button>
            );
          })}
        </div>
      )}
    </Popover>
  );
}
```

## tattva/molecules/Message.tsx

```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { SparkleIcon } from "../lib/icons";

export interface MessageProps {
  role: "user" | "assistant";
  /** True while tokens are still arriving. Shows the caret, sets aria-busy and keeps the streaming text out of live announcements. */
  streaming?: boolean;
  /** Announced once, politely, when streaming ends. */
  completeLabel?: string;
  /** How the person's own turn looks. bubble is a right-aligned bubble. plain is left-aligned serif text with no box, like a line in a letter. Only changes user messages. */
  variant?: "bubble" | "plain";
  /**
   * The AI mark on an assistant reply. none (the default) shows no mark: the reply uses the full width and its place in
   * the thread says who wrote it, as in most chat products. top shows a small mark and the name above the reply: use it
   * once, on the first reply of a thread, or on every reply when more than one assistant or agent speaks.
   */
  mark?: "none" | "top";
  /** The name shown with the mark and read by screen readers before the reply. Defaults to "Assistant". */
  name?: string;
  /** @deprecated Use mark. true shows the mark above the reply; the mark no longer sits beside it. */
  showAvatar?: boolean;
  children: ReactNode;
  /** Slot under the bubble: MessageActions, FeedbackBar, SourceList... */
  footer?: ReactNode;
  className?: string;
}

/**
 * User messages are right-aligned bubbles; assistant messages are unboxed prose across the full width, so long answers
 * stay readable and short ones do not leave a column of marks down the thread. Screen readers hear the name first.
 */
export function Message({ role, streaming, completeLabel = "Response complete", variant = "bubble", mark, name = "Assistant", showAvatar, children, footer, className }: MessageProps) {
  const top = (mark ?? (showAvatar ? "top" : "none")) === "top";
  const [announce, setAnnounce] = useState("");
  const was = useRef(false);
  useEffect(() => {
    if (streaming) setAnnounce("");
    else if (was.current) setAnnounce(completeLabel);
    was.current = !!streaming;
  }, [streaming, completeLabel]);

  if (role === "user" && variant === "plain") {
    return <div className={cn("animate-rise font-serif text-turn text-fg", className)}>{children}</div>;
  }
  if (role === "user") {
    return (
      <div className={cn("flex justify-end animate-rise", className)}>
        <div className="max-w-[80%] rounded-card rounded-br-[min(var(--radius-lg),var(--shape-card))] bg-sunken px-5 py-3 text-body-lg leading-relaxed">{children}</div>
      </div>
    );
  }
  return (
    <div className={cn("animate-rise min-w-0 space-y-3", className)} aria-busy={streaming || undefined}>
      {top && (
        <p className="flex items-center gap-1.5 text-compact font-medium text-fg-muted">
          <span aria-hidden className="grid size-5 place-items-center rounded-full bg-lime text-on-lime"><SparkleIcon width={11} height={11} /></span>{name}
        </p>
      )}
      {/* aria-live is off while tokens arrive, so screen readers are not interrupted per token. */}
      <div aria-live={streaming ? "off" : undefined} className="space-y-4 text-body-lg leading-7 text-fg">
        {!top && <span className="sr-only">{name}: </span>}
        {children}
        {streaming && <span aria-hidden className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-fg animate-caret" />}
      </div>
      {footer}
      <span role="status" className="sr-only">{announce}</span>
    </div>
  );
}
```
