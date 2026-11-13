## tattva/organisms/Dialog.tsx

```tsx
import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, XIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";
import { usePresence } from "../hooks/usePresence";

export type DialogSize = "sm" | "md" | "lg";
export type DialogTone = "default" | "destructive";

export interface DialogProps {
  open: boolean;
  /** Called when the dialog asks to close: Escape, a backdrop click or the Close button. Set `open` to false in response. */
  onClose: () => void;
  /** Required. Rendered as the heading and used as the dialog's name. */
  title: string;
  /** Extra context announced after the title. Rendered visibly under it. */
  description?: string;
  /** The body. It scrolls when it is taller than the screen. */
  children?: ReactNode;
  /** Usually buttons. The main action goes last. */
  footer?: ReactNode;
  size?: DialogSize;
  /** When false, Escape and a backdrop click do nothing, the Close button is hidden and only your footer buttons can close it. */
  dismissible?: boolean;
  /** "destructive" adds a danger icon and the word "Destructive" to the title row and sets role="alertdialog". */
  tone?: DialogTone;
  className?: string;
}

const widths: Record<DialogSize, string> = { sm: "sm:max-w-sm", md: "sm:max-w-lg", lg: "sm:max-w-2xl" };
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Modal window on the native <dialog> element. showModal() makes the page behind inert and keeps Tab inside.
 * Focus goes to the first control in the body or footer (or the dialog), and returns to the opener on close.
 * Under the sm breakpoint it becomes a bottom sheet.
 */
export function Dialog({ open, onClose, title, description, children, footer, size = "md", dismissible = true, tone = "default", className }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const openRef = useRef(open);
  openRef.current = open;
  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const destructive = tone === "destructive";
  // Closing is a quick fade (faster than opening); the dialog stays modal until it has gone.
  const { present, leaving } = usePresence(open);

  useEffect(() => {
    const d = ref.current;
    if (!d || !present) return;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!d.open) d.showModal();
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    // Prefer the body or footer over the Close button, so a form field or the main action is where you start.
    const first = d.querySelector<HTMLElement>(`[data-dialog-body] :is(${FOCUSABLE}), [data-dialog-footer] :is(${FOCUSABLE})`) ?? d.querySelector<HTMLElement>(FOCUSABLE);
    (first ?? d).focus({ preventScroll: true });
    return () => {
      root.style.overflow = prevOverflow;
      if (d.open) d.close();
      const back = opener.current;
      if (back && back.isConnected) back.focus({ preventScroll: true });
      opener.current = null;
    };
  }, [present]);

  return (
    <dialog ref={ref} tabIndex={-1} role={destructive ? "alertdialog" : undefined} aria-labelledby={titleId} aria-describedby={description ? descId : undefined}
      // Escape is turned into a request, so the parent stays the one source of truth for `open`.
      onCancel={(e) => { e.preventDefault(); if (dismissible) onClose(); }}
      onClose={() => { if (openRef.current) onClose(); }}
      onClick={(e) => { if (dismissible && e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none items-end justify-center bg-transparent p-0 text-fg backdrop:bg-(--scrim) open:flex sm:items-center sm:p-4">
      {present && (
        <div className={cn(leaving && "pointer-events-none motion-safe:animate-fade-out!",
          "flex max-h-[min(90dvh,100%)] w-full flex-col overflow-hidden rounded-t-overlay border border-line bg-raised shadow-lg motion-safe:animate-sheet sm:max-h-[85dvh] sm:rounded-overlay sm:motion-safe:animate-rise forced-colors:border-[CanvasText]",
          widths[size], className,
        )}>
          <div className="flex items-start gap-3 px-5 pt-5 pb-3">
            <div className="min-w-0 flex-1">
              {destructive && (
                <p className="mb-1 inline-flex items-center gap-1.5 text-small leading-4 font-medium text-danger-fg">
                  <AlertIcon aria-hidden width={14} height={14} className="shrink-0" />Destructive
                </p>
              )}
              <h2 id={titleId} className="text-subhead leading-snug font-semibold text-balance">{title}</h2>
              {description && <p id={descId} className="mt-1 text-body leading-5 text-fg-muted">{description}</p>}
            </div>
            {dismissible && (
              <IconButton label="Close" onClick={onClose} className="-mt-1 -mr-2 shrink-0 pointer-coarse:size-11">
                <XIcon aria-hidden width={16} height={16} />
              </IconButton>
            )}
          </div>
          {children != null && <div data-dialog-body className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-2 text-body leading-5">{children}</div>}
          {footer != null && <div data-dialog-footer className="flex flex-col-reverse gap-2 border-t border-line px-5 py-4 pb-[max(1rem,var(--safe-bottom))] sm:flex-row sm:justify-end">{footer}</div>}
        </div>
      )}
    </dialog>
  );
}
```
