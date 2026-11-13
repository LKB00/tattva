## tattva/atoms/TextField.tsx

```tsx
import type { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/cn";

export interface TextFieldProps extends Omit<ComponentProps<"input">, "size" | "type"> {
  type?: "text" | "email" | "password" | "search" | "url" | "tel";
  /** Marks the field as invalid: danger border and aria-invalid. Say what is wrong in text too (see Field). */
  invalid?: boolean;
  /** Content before the text, such as an icon. Decorative: it is not read out. */
  leading?: ReactNode;
  /** Content after the text, such as a unit like "₹". */
  trailing?: ReactNode;
  /** md is 40px tall, sm is 32px. Both are 44px on coarse pointers. */
  size?: "sm" | "md";
  /** Classes for the outer box, so width and margins apply to it. */
  className?: string;
}

/**
 * A single-line text input in a bordered box. The focus ring is drawn on the box (not the bare input) so it wraps the
 * icon and unit slots too. It uses the global focus colour and shows for keyboard focus only.
 */
export function TextField({ type = "text", invalid, leading, trailing, size = "md", className, disabled, readOnly, ...rest }: TextFieldProps) {
  return (
    <span className={cn(
      "flex w-full items-center gap-2 rounded-field border px-3 text-body leading-5 text-fg transition-colors duration-[var(--dur-fast)]",
      size === "sm" ? "min-h-8" : "min-h-10", "pointer-coarse:min-h-11",
      "has-[input:focus-visible]:outline-(length:--focus-width) has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[color:var(--focus-ring)]",
      invalid || rest["aria-invalid"] ? "border-danger" : "border-line hover:border-line-strong",
      disabled ? "cursor-not-allowed border-disabled-line bg-disabled text-disabled-fg [&_input]:text-disabled-fg" : readOnly ? "bg-sunken" : "bg-surface",
      className,
    )}>
      {leading && <span aria-hidden className="flex shrink-0 text-fg-muted">{leading}</span>}
      <input {...rest} type={type} disabled={disabled} readOnly={readOnly} aria-invalid={invalid || rest["aria-invalid"] || undefined}
        className="min-w-0 flex-1 bg-transparent py-1 text-fg outline-none placeholder:text-fg-subtle focus-visible:outline-none disabled:cursor-not-allowed" />
      {trailing && <span className="flex shrink-0 text-fg-muted">{trailing}</span>}
    </span>
  );
}
```

## tattva/atoms/Tooltip.tsx

```tsx
import { cloneElement, useEffect, useId, useRef, useState, type ReactElement } from "react";
import { cn } from "../lib/cn";

export interface TooltipProps {
  /** Plain text only. Never put essential information or anything clickable here. */
  content: string;
  /** The trigger. It must be focusable (a button or a link) and accept aria-describedby. */
  children: ReactElement<{ "aria-describedby"?: string }>;
  side?: "top" | "bottom" | "left" | "right";
  /** Milliseconds to wait before a hover shows it. Focus shows it at once. */
  delay?: number;
  className?: string;
}

const place = {
  top: "bottom-full left-1/2 -translate-x-1/2 pb-1.5",
  bottom: "top-full left-1/2 -translate-x-1/2 pt-1.5",
  left: "right-full top-1/2 -translate-y-1/2 pr-1.5",
  right: "left-full top-1/2 -translate-y-1/2 pl-1.5",
};

/** A short text label for a control, shown on hover and on keyboard focus. Touch users never see it from a tap. */
export function Tooltip({ content, children, side = "top", delay = 400, className }: TooltipProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const clear = () => window.clearTimeout(timer.current);
  useEffect(() => clear, []);

  useEffect(() => {
    if (!open) return;
    // Escape closes the tooltip and leaves focus where it is. While focus is inside, the wrapper below also stops the key
    // so it does not close a dialog or page around the tooltip; this listener covers a tooltip opened by hover.
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const enter = () => {
    // Touch emulates mouseenter on tap; coarse pointers must not depend on hover.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    clear();
    timer.current = window.setTimeout(() => setOpen(true), delay);
  };
  const hide = () => { clear(); setOpen(false); };
  const existing = children.props["aria-describedby"];

  return (
    <span className="relative inline-flex" onMouseEnter={enter} onMouseLeave={hide} onFocus={() => { clear(); setOpen(true); }} onBlur={hide}
      onKeyDown={(e) => { if (e.key === "Escape" && open) { e.stopPropagation(); setOpen(false); } }}>
      {cloneElement(children, { "aria-describedby": existing ? `${existing} ${id}` : id })}
      {/* The outer span carries transparent padding as the gap, so the pointer can move onto the tip without it closing. */}
      <span hidden={!open} className={cn("absolute z-40", place[side])}>
        <span id={id} role="tooltip"
          className={cn("block w-max max-w-64 rounded-md bg-inverse px-2 py-1 text-small leading-4 text-inverse-fg shadow-md motion-safe:animate-fade forced-colors:border forced-colors:border-[CanvasText]", className)}>
          {content}
        </span>
      </span>
    </span>
  );
}
```

## tattva/atoms/TypingIndicator.tsx

```tsx
/** Three-dot "assistant is composing" indicator, shown before the first token arrives. */
export function TypingIndicator({ label = "Assistant is thinking" }: { label?: string }) {
  return (
    <span role="status" aria-label={label} className="inline-flex items-center gap-1 py-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-1.5 rounded-full bg-fg-subtle animate-pulse-dot" style={{ animationDelay: `${i * 160}ms` }} />
      ))}
    </span>
  );
}
```
