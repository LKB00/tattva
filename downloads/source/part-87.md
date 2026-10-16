## tattva/organisms/SharePanel.tsx

```tsx
import { useId, useState } from "react";
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { CheckIcon, CopyIcon, GlobeIcon, LockIcon, UsersIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { RadioGroup } from "../molecules/RadioGroup";
import { InlineConfirm } from "../molecules/InlineConfirm";

export type ShareAccess = "private" | "workspace" | "link";

export interface SharePanelLabels {
  heading?: string;
  access?: string;
  options?: Partial<Record<ShareAccess, { label: string; description: string }>>;
  link?: string;
  copy?: string;
  copied?: string;
  /** What a shared link shows, in one line. */
  scope?: string;
  stop?: string;
  stopQuestion?: string;
  keep?: string;
}

export interface SharePanelProps {
  /** What is being shared, such as the chat's title. */
  title: string;
  /** Who can open it now. */
  access: ShareAccess;
  onAccessChange: (access: ShareAccess) => void;
  /** The link, once there is one. */
  link?: string;
  /** Copies the link. Defaults to the clipboard. */
  onCopy?: (link: string) => void;
  /** Turns the link off; anyone who has it can no longer open it. */
  onStopSharing?: () => void;
  /** Hide the workspace choice for people who are not in one. */
  showWorkspace?: boolean;
  labels?: SharePanelLabels;
  /** Level of the part's heading, so it fits the page outline. Default 2, for use in a dialog or sheet. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const OPTIONS: Record<ShareAccess, { label: string; description: string }> = {
  private: { label: "Only you", description: "Nobody else can open it." },
  workspace: { label: "People in your workspace", description: "Anyone signed in to your workspace with the link." },
  link: { label: "Anyone with the link", description: "No sign-in needed. Think before sharing private details." },
};

/**
 * Who can open a chat or a result, and its link. Put it in a Dialog or a Sheet. The choice reads as plain sentences,
 * the link is one press to copy (and says Copied), a line says exactly what the link shows, and stopping sharing
 * asks once in place.
 */
export function SharePanel({ title, access, onAccessChange, link, onCopy, onStopSharing, showWorkspace = true, labels, headingLevel = 2, className }: SharePanelProps) {
  const l = {
    heading: "Share", access: "Who can open it", link: "Link", copy: "Copy link", copied: "Copied",
    scope: "The link shows this chat up to now. Messages you send later are not shared.",
    stop: "Stop sharing", stopQuestion: "Stop sharing? The link stops working.", keep: "Keep sharing", ...labels,
    options: { ...OPTIONS, ...labels?.options },
  };
  const [copied, setCopied] = useState(false);
  const uid = useId();
  const H = headingTag(headingLevel);
  const ICON = { private: LockIcon, workspace: UsersIcon, link: GlobeIcon };
  const copy = () => {
    if (!link) return;
    if (onCopy) onCopy(link); else void navigator.clipboard?.writeText(link).catch(() => {});
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  };
  const keys = (Object.keys(OPTIONS) as ShareAccess[]).filter((k) => showWorkspace || k !== "workspace");
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("flex flex-col gap-5", className)}>
      <div>
        <H id={`${uid}-h`} className="m-0 text-title-sm leading-7 font-semibold text-fg">{l.heading}</H>
        <p className="m-0 mt-0.5 truncate text-small leading-5 text-fg-muted" title={title}>{title}</p>
      </div>
      <RadioGroup label={l.access} value={access} onChange={(v) => onAccessChange(v as ShareAccess)}
        options={keys.map((k) => {
          const Icon = ICON[k];
          return { value: k, label: <span className="inline-flex items-center gap-2"><Icon aria-hidden width={15} height={15} className="text-fg-muted" />{l.options[k].label}</span>, description: l.options[k].description };
        })} />
      {access !== "private" && link && (
        <div className="space-y-2">
          <label htmlFor={`${uid}-link`} className="block text-small leading-5 font-medium text-fg">{l.link}</label>
          <div className="flex gap-2 max-sm:flex-col">
            <input id={`${uid}-link`} readOnly value={link} onFocus={(e) => e.currentTarget.select()} aria-describedby={`${uid}-scope`}
              className="h-10 min-w-0 flex-1 rounded-field border border-line bg-sunken px-3 font-mono text-small text-fg" />
            <Button onClick={copy} variant="secondary" className="h-10 shrink-0" leading={copied ? <CheckIcon aria-hidden width={14} height={14} /> : <CopyIcon aria-hidden width={14} height={14} />}>{copied ? l.copied : l.copy}</Button>
          </div>
          <p id={`${uid}-scope`} className="m-0 text-small leading-5 text-fg-muted">{l.scope}</p>
          <span role="status" className="sr-only">{copied ? l.copied : ""}</span>
        </div>
      )}
      {access !== "private" && link && onStopSharing && (
        <InlineConfirm className="self-start" onConfirm={onStopSharing} confirmLabel={l.stop} cancelLabel={l.keep} question={l.stopQuestion} tone="danger">{l.stop}</InlineConfirm>
      )}
    </section>
  );
}
```

## tattva/organisms/Sheet.tsx

```tsx
import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { XIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";

export type SheetSide = "bottom" | "right" | "left";
export type SheetSize = "sm" | "md" | "lg";

export interface SheetProps {
  open: boolean;
  /** Called when the sheet asks to close: Escape, a scrim tap, the Close control or a drag down. Set `open` to false in response. */
  onClose: () => void;
  /** Required. Rendered as the heading and used as the sheet's name. */
  title: string;
  /** Which edge the sheet slides in from. */
  side?: SheetSide;
  children?: ReactNode;
  /** Usually buttons, pinned under the body. */
  footer?: ReactNode;
  /** When false, Escape, a scrim tap and dragging do nothing and there is no Close control. Only your own buttons can close it. */
  dismissible?: boolean;
  /** Width for side sheets. Height cap for bottom sheets. */
  size?: SheetSize;
  className?: string;
}

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
const CLOSE_DISTANCE = 80;
const FLICK_SPEED = 0.6; // px per ms
const TAP_SLOP = 6;
const EXIT_MS = 320; // a little under --dur-slow, so the sheet is gone before the next thing can happen

const heights: Record<SheetSize, string> = { sm: "max-h-[40dvh]", md: "max-h-[65dvh]", lg: "max-h-[90dvh]" };
const widths: Record<SheetSize, string> = { sm: "max-w-[min(24rem,calc(100%-2.5rem))]", md: "max-w-[min(30rem,calc(100%-2.5rem))]", lg: "max-w-[min(42rem,calc(100%-2.5rem))]" };
const place: Record<SheetSide, string> = { bottom: "items-end justify-center", right: "items-stretch justify-end", left: "items-stretch justify-start" };
const hidden: Record<SheetSide, string> = { bottom: "translate-y-full", right: "translate-x-full", left: "-translate-x-full" };

/**
 * A surface that slides over the page, on the native <dialog> element, so the page behind is inert and Tab stays inside.
 * A bottom sheet has a drag handle that is also a Close button, so dragging is never the only way out.
 * Focus goes to the first control in the body or footer (or the sheet) and returns to the opener on close.
 */
export function Sheet({ open, onClose, title, side = "bottom", children, footer, dismissible = true, size = "md", className }: SheetProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const openRef = useRef(open);
  openRef.current = open;
  const id = useId();
  const titleId = `${id}-title`;
  // `present` outlasts `open` by the length of the slide-out, so the sheet leaves as smoothly as it arrives.
  const [present, setPresent] = useState(open);
  const [shown, setShown] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const gesture = useRef({ y: 0, t: 0, dy: 0, moved: false });
  const bottom = side === "bottom";

  useEffect(() => {
    if (open) { setPresent(true); return; }
    if (!present) return;
    setShown(false);
    const reduce = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setPresent(false), reduce ? 0 : EXIT_MS);
    return () => window.clearTimeout(t);
  }, [open, present]);

  useEffect(() => {
    const d = ref.current;
    if (!d || !present) return;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!d.open) d.showModal();
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const first = d.querySelector<HTMLElement>(`[data-sheet-body] :is(${FOCUSABLE}), [data-sheet-footer] :is(${FOCUSABLE})`);
    (first ?? d).focus({ preventScroll: true });
    // Two frames, so the off-screen position is painted once before the slide starts.
    let f2 = 0;
    const f1 = requestAnimationFrame(() => { f2 = requestAnimationFrame(() => setShown(true)); });
    return () => {
      cancelAnimationFrame(f1); cancelAnimationFrame(f2);
      setShown(false); setDrag(null);
      root.style.overflow = prevOverflow;
      if (d.open) d.close();
      const back = opener.current;
      if (back && back.isConnected) back.focus({ preventScroll: true });
      opener.current = null;
    };
  }, [present]);

  const down = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* the drag still works without capture */ }
    gesture.current = { y: e.clientY, t: e.timeStamp, dy: 0, moved: false };
    setDrag(0);
  };
  const move = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (drag === null) return;
    const dy = Math.max(0, e.clientY - gesture.current.y);
    gesture.current.dy = dy;
    if (dy > TAP_SLOP) gesture.current.moved = true;
    setDrag(dy);
  };
  const up = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (drag === null) return;
    const { dy, t } = gesture.current;
    const speed = dy / Math.max(1, e.timeStamp - t);
    setDrag(null);
    if (dy > CLOSE_DISTANCE || (dy > 24 && speed > FLICK_SPEED)) onClose();
  };

  const offset = !shown ? undefined : drag ? { transform: `translateY(${drag}px)` } : undefined;
  return (
    <dialog ref={ref} tabIndex={-1} aria-labelledby={titleId}
      // Escape is turned into a request, so the parent stays the one source of truth for `open`.
      onCancel={(e) => { e.preventDefault(); if (dismissible) onClose(); }}
      onClose={() => { if (openRef.current) onClose(); }}
      onClick={(e) => { if (dismissible && e.target === e.currentTarget) onClose(); }}
      className={cn("fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-fg backdrop:bg-[var(--scrim)] open:flex", place[side])}>
      {present && (
        <div style={offset}
          className={cn(
            "flex min-h-0 w-full flex-col overflow-hidden bg-raised shadow-lg forced-colors:border-[CanvasText]",
            bottom ? cn("max-w-2xl rounded-t-overlay border border-b-0 border-line", heights[size]) : cn("h-full border-line", widths[size], side === "right" ? "border-l" : "border-r"),
            !shown && hidden[side],
            drag === null && "motion-safe:transition-transform motion-safe:duration-[var(--dur-slow)] motion-safe:ease-[var(--ease-out)]",
            className,
          )}>
          {bottom && (dismissible ? (
            <button type="button" aria-label="Close" onClick={() => { if (!gesture.current.moved) onClose(); gesture.current.moved = false; }}
              onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={() => setDrag(null)}
              className="flex h-7 w-full shrink-0 cursor-grab touch-none items-center justify-center active:cursor-grabbing pointer-coarse:h-11">
              <span aria-hidden className="h-1 w-10 rounded-full bg-line-strong forced-colors:bg-[CanvasText]" />
            </button>
          ) : (
            <div aria-hidden className="flex h-7 shrink-0 items-center justify-center"><span className="h-1 w-10 rounded-full bg-line-strong forced-colors:bg-[CanvasText]" /></div>
          ))}
          <div className={cn("flex items-start gap-3 px-5 pb-3", bottom ? "pt-1" : "pt-5")}>
            <h2 id={titleId} className="min-w-0 flex-1 text-subhead leading-snug font-semibold text-balance">{title}</h2>
            {!bottom && dismissible && (
              <IconButton label="Close" onClick={onClose} className="-mt-1 -mr-2 shrink-0 pointer-coarse:size-11">
                <XIcon aria-hidden width={16} height={16} />
              </IconButton>
            )}
          </div>
          {children != null && <div data-sheet-body tabIndex={0} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-2 text-body leading-5">{children}</div>}
          {footer != null && <div data-sheet-footer className="flex flex-col-reverse gap-2 border-t border-line px-5 py-4 pb-[max(1rem,var(--safe-bottom))] sm:flex-row sm:justify-end">{footer}</div>}
        </div>
      )}
    </dialog>
  );
}
```
