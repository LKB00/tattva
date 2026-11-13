## tattva/molecules/Toast.tsx

```tsx
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, InfoIcon, XIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";
import { useReducedMotion } from "../hooks/useReducedMotion";

export type ToastTone = "neutral" | "success" | "danger" | "info";

export interface ToastOptions {
  title: string;
  description?: string;
  tone?: ToastTone;
  action?: { label: string; onClick: () => void };
  /** Milliseconds before it closes. 0 keeps it until dismissed. By default it follows the content: 4s for a title, 6s with a description, 8s with an action. */
  duration?: number;
}

export interface ToastApi {
  show: (options: ToastOptions) => string;
  dismiss: (id: string) => void;
  /** Changes a toast in place, for example "Saving" to "Saved". Its timer starts again with the new content. */
  update: (id: string, options: Partial<ToastOptions>) => void;
}

/** How long a toast stays when no duration is given: long enough to read, longest when there is something to press. */
export const toastDuration = (o: ToastOptions) => o.duration ?? (o.action ? 8000 : o.description ? 6000 : 4000);

const toneIcon = {
  neutral: null,
  success: <CheckIcon aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-success-fg" />,
  danger: <AlertIcon aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-danger-fg" />,
  info: <InfoIcon aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-info-fg" />,
} satisfies Record<ToastTone, ReactNode>;

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: string;
  description?: string;
  tone?: ToastTone;
  action?: { label: string; onClick: () => void };
  /** Shows the close button. Without it the toast has no close button, so pass it whenever the toast can go away. */
  onDismiss?: () => void;
  /** Shows how much time is left, as a thin bar along the bottom. Pass the length in ms; `paused` holds it. */
  timeLeft?: { duration: number; paused: boolean };
}

/** The toast itself, without any timing. Use it to show a toast in docs or to build your own host. A danger toast has role="alert". */
export function Toast({ title, description, tone = "neutral", action, onDismiss, timeLeft, className, onKeyDown, ...rest }: ToastProps) {
  return (
    <div role={tone === "danger" ? "alert" : undefined} {...rest}
      onKeyDown={(e) => { onKeyDown?.(e); if (e.key === "Escape" && onDismiss && !e.defaultPrevented) { e.stopPropagation(); onDismiss(); } }}
      className={cn("pointer-events-auto relative flex w-full max-w-sm items-start gap-3 overflow-hidden rounded-overlay border border-line bg-raised p-3 pl-4 text-body leading-5 text-fg shadow-lg forced-colors:border-[CanvasText]", className)}>
      {toneIcon[tone]}
      <div className="min-w-0 flex-1 py-0.5">
        <p className="font-medium">{title}</p>
        {description && <p className="mt-0.5 text-fg-muted">{description}</p>}
        {action && (
          <button type="button" onClick={action.onClick}
            className="-ml-2 mt-1.5 inline-flex h-8 cursor-pointer items-center rounded-md px-2 text-compact font-medium text-accent-fg hover:bg-hover pointer-coarse:min-h-11">
            {action.label}
          </button>
        )}
      </div>
      {onDismiss && (
        <IconButton label={`Close notification: ${title}`} size="sm" onClick={onDismiss} className="-mt-0.5 -mr-1 shrink-0 pointer-coarse:size-11">
          <XIcon aria-hidden width={14} height={14} />
        </IconButton>
      )}
      {timeLeft && timeLeft.duration > 0 && (
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-line-strong motion-reduce:hidden"
          style={{ animation: `shrink-x ${timeLeft.duration}ms linear both`, animationPlayState: timeLeft.paused ? "paused" : "running" }} />
      )}
    </div>
  );
}

const ToastContext = createContext<ToastApi | null>(null);

/** Returns `{ show, dismiss, update }`. Must be used under a ToastProvider. */
export function useToast(): ToastApi {
  const api = useContext(ToastContext);
  if (!api) throw new Error("useToast must be used inside a ToastProvider.");
  return api;
}

interface Item extends ToastOptions { id: string; version: number; leaving?: boolean }
const MAX_VISIBLE = 3;
const EXIT_MS = 150; // --dur-fast

function ToastItem({ item, onDismiss }: { item: Item; onDismiss: (id: string) => void }) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [touch, setTouch] = useState(false);
  // A hidden tab cannot be read, so the clock stops there too.
  const [away, setAway] = useState(() => typeof document !== "undefined" && document.visibilityState === "hidden");
  useEffect(() => {
    const f = () => setAway(document.visibilityState === "hidden");
    document.addEventListener("visibilitychange", f);
    return () => document.removeEventListener("visibilitychange", f);
  }, []);
  const paused = hover || focus || touch || away;
  const duration = toastDuration(item);
  const remaining = useRef(duration);
  const dismiss = useRef(onDismiss);
  dismiss.current = onDismiss;

  // Time left carries over a pause, so hovering does not reset the countdown.
  useEffect(() => {
    if (!duration || paused) return;
    const start = Date.now();
    const t = setTimeout(() => dismiss.current(item.id), remaining.current);
    return () => { clearTimeout(t); remaining.current -= Date.now() - start; };
  }, [paused, duration, item.id]);

  return (
    <li className={cn("pointer-events-none flex w-full justify-center md:justify-end", item.leaving ? "motion-safe:animate-fade-out" : "motion-safe:animate-rise")}>
      <Toast title={item.title} description={item.description} tone={item.tone} action={item.action && { label: item.action.label, onClick: () => { item.action!.onClick(); onDismiss(item.id); } }}
        onDismiss={() => onDismiss(item.id)} timeLeft={item.action && duration ? { duration, paused } : undefined}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onTouchStart={() => setTouch(true)} onTouchEnd={() => setTouch(false)} onTouchCancel={() => setTouch(false)}
        onFocus={() => setFocus(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocus(false); }} />
    </li>
  );
}

/**
 * Hosts the toasts. Put it once near the root. The region and its live list stay mounted so screen readers
 * hear new toasts. At most three show at once, newest on top; older ones wait and appear when there is room.
 */
export function ToastProvider({ children, className }: { children: ReactNode; className?: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const counter = useRef(0);
  const reduce = useReducedMotion();
  // A toast fades out (faster than it arrived) before it leaves the list.
  const dismiss = useCallback((id: string) => {
    if (reduce) { setItems((l) => l.filter((t) => t.id !== id)); return; }
    setItems((l) => l.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
    window.setTimeout(() => setItems((l) => l.filter((t) => t.id !== id)), EXIT_MS);
  }, [reduce]);
  const show = useCallback((options: ToastOptions) => {
    counter.current += 1;
    const id = `toast-${counter.current}`;
    setItems((l) => [...l, { ...options, id, version: 0 }]);
    return id;
  }, []);
  const update = useCallback((id: string, options: Partial<ToastOptions>) => {
    setItems((l) => l.map((t) => (t.id === id ? { ...t, ...options, version: t.version + 1 } : t)));
  }, []);
  const api = useMemo(() => ({ show, dismiss, update }), [show, dismiss, update]);
  const visible = [...items].reverse().slice(0, MAX_VISIBLE);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <section role="region" aria-label="Notifications" className={cn("pointer-events-none fixed inset-x-0 bottom-0 z-50 p-4 pb-[max(1rem,var(--safe-bottom))]", className)}>
        <ol aria-live="polite" aria-relevant="additions text" className="m-0 flex list-none flex-col gap-2 p-0">
          {visible.map((t) => <ToastItem key={`${t.id}-${t.version}`} item={t} onDismiss={dismiss} />)}
        </ol>
      </section>
    </ToastContext.Provider>
  );
}
```

## tattva/molecules/ToolCallCard.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, ToolIcon } from "../lib/icons";
import { Badge, type Tone } from "../atoms/Badge";
import { Spinner } from "../atoms/Spinner";
import { Collapsible } from "./Collapsible";

export type ToolStatus = "pending" | "running" | "success" | "error";

const status: Record<ToolStatus, { tone: Tone; label: string }> = {
  pending: { tone: "neutral", label: "Queued" },
  running: { tone: "accent", label: "Running" },
  success: { tone: "success", label: "Done" },
  error: { tone: "danger", label: "Failed" },
};

export interface ToolCallCardProps {
  name: string;
  status: ToolStatus;
  /** One-line human summary of what the tool is doing, e.g. 'Searching "q3 revenue"'. */
  summary?: string;
  input?: unknown;
  output?: ReactNode;
  durationMs?: number;
}

export function ToolCallCard({ name, status: s, summary, input, output, durationMs }: ToolCallCardProps) {
  const { tone, label } = status[s];
  return (
    <div className={cn("rounded-card border bg-surface p-3", s === "error" ? "border-danger-line" : "border-line")}>
      <Collapsible
        header={
          <span className="flex min-w-0 flex-1 items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-sunken text-fg-muted">
              {s === "running" ? <Spinner size={14} /> : s === "success" ? <CheckIcon className="text-success" /> : s === "error" ? <AlertIcon className="text-danger" /> : <ToolIcon />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-mono text-compact font-medium">{name}</span>
              {summary && <span className="block truncate text-small leading-4 text-fg-muted">{summary}</span>}
            </span>
            {durationMs != null && s !== "running" && <span className="text-small leading-4 text-fg-subtle tabular-nums">{(durationMs / 1000).toFixed(1)}s</span>}
            <Badge tone={tone}>{label}</Badge>
          </span>
        }
      >
        <div className="mt-3 space-y-2 text-small leading-4">
          {input !== undefined && (
            <div>
              <p className="mb-1 font-medium text-fg-subtle">Input</p>
              <pre tabIndex={0} className="overflow-x-auto rounded-md bg-sunken p-2 font-mono leading-5">{JSON.stringify(input, null, 2)}</pre>
            </div>
          )}
          {output != null && (
            <div>
              <p className="mb-1 font-medium text-fg-subtle">Output</p>
              <div className="overflow-x-auto rounded-md bg-sunken p-2 font-mono leading-5 [overflow-wrap:anywhere]">{output}</div>
            </div>
          )}
        </div>
      </Collapsible>
    </div>
  );
}
```

## tattva/molecules/ToolChip.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { keepFocus } from "../lib/focus";
import { XIcon } from "../lib/icons";

export interface ToolChipProps {
  /** Tool name, for example "Web search". Also names the remove button. */
  label: string;
  /** Leading icon. Decorative, so it needs no name of its own. */
  icon?: ReactNode;
  /** Called when the remove button is pressed. Omit to render a fixed chip with no remove button. */
  onRemove?: () => void;
  /** Overrides the remove button name. Defaults to `Remove ${label}`. */
  removeLabel?: string;
  /** Where keyboard focus goes after Remove. By default the next tag, else the previous one, else the message box. */
  focusAfterRemove?: () => HTMLElement | null;
  className?: string;
}

/** Pill shown in the composer for a tool that is switched on. The remove button is named after the tool. */
export function ToolChip({ label, icon, onRemove, removeLabel, focusAfterRemove, className }: ToolChipProps) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span ref={ref} className={cn("inline-flex min-h-8 max-w-full items-center gap-1.5 rounded-control border border-line bg-sunken pl-3 text-small leading-4 font-medium text-fg", onRemove ? "pr-1" : "pr-3", className)}>
      {icon && <span className="flex shrink-0 items-center text-fg-muted">{icon}</span>}
      <span className="truncate">{label}</span>
      {onRemove && (
        <button type="button" onClick={() => { onRemove(); keepFocus(ref.current, focusAfterRemove); }} aria-label={removeLabel ?? `Remove ${label}`} title={removeLabel ?? `Remove ${label}`}
          className="flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-control text-fg-subtle transition-colors hover:bg-hover hover:text-fg">
          <XIcon width={12} height={12} />
        </button>
      )}
    </span>
  );
}
```

## tattva/molecules/TrayRow.tsx

```tsx
import type { ReactNode } from "react";
import { AttentionDot } from "../atoms/AttentionDot";

export interface TrayRowProps {
  title: string;
  detail?: string;
  /** Amber dot + detail in the foreground colour: this one needs you. */
  attention?: boolean;
  icon?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
}

export function TrayRow({ title, detail, attention, icon, trailing, onClick }: TrayRowProps) {
  return (
    <li>
      <button type="button" onClick={onClick}
        className="group flex w-full items-center gap-2.5 rounded-card px-3 py-2 text-left sm:rounded-control sm:py-1.5 tap text-compact transition-colors hover:bg-hover cursor-pointer">
        {attention ? <AttentionDot /> : icon && <span className="text-fg-subtle">{icon}</span>}
        <span className="flex min-w-0 flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
          <span className="font-medium text-fg">{title}</span>
          {detail && <span className="min-w-0 text-fg-subtle sm:truncate">{detail}</span>}
        </span>
        <span className="flex-1" />
        {trailing && <span className="text-small leading-4 text-fg-subtle shrink-0 opacity-0 transition-opacity pointer-coarse:opacity-100 group-hover:opacity-100 group-focus-visible:opacity-100">{trailing}</span>}
      </button>
    </li>
  );
}
```
