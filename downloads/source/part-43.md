## tattva/molecules/TakeoverBar.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { useFocusAfter } from "../lib/useFocusAfter";
import { EyeIcon } from "../lib/icons";
import { AgentStatusIcon } from "../atoms/AgentStatusIcon";
import { Button } from "../atoms/Button";

export type TakeoverState = "you-control" | "agent-working" | "supervise";

export interface TakeoverBarLabels {
  youControl?: string;
  youControlHint?: string;
  agentWorking?: string;
  supervise?: string;
  /** Receives the step the person is asked to watch. */
  superviseHint?: (step: string) => ReactNode;
  takeOver?: string;
  resume?: string;
  handBack?: string;
}

export interface TakeoverBarProps {
  state: TakeoverState;
  /** The step that needs watching. Shown in the supervise state. */
  step?: string;
  /** Person takes control from the agent. Shown in the working and supervise states. */
  onTakeOver?: () => void;
  /** Agent continues from where it paused. */
  onResume?: () => void;
  /** Person gives control back, and the agent continues with what the person changed. */
  onHandBack?: () => void;
  labels?: TakeoverBarLabels;
  className?: string;
}

/**
 * Full-width bar that says who is in control right now. The status sentence sits in one polite
 * live region so a screen reader says it once when the state changes. Only the supervise state uses
 * amber, because only then a person must act.
 */
export function TakeoverBar({ state, step, onTakeOver, onResume, onHandBack, labels, className }: TakeoverBarProps) {
  const l = {
    youControl: "You have control", youControlHint: "The agent is paused and is not doing anything.",
    agentWorking: "The agent is working", supervise: "This step needs you to watch",
    superviseHint: (s: string) => <>The agent will wait while you watch: {s}</>,
    takeOver: "Take over", resume: "Resume", handBack: "Hand back", ...labels,
  };
  const title = state === "you-control" ? l.youControl : state === "agent-working" ? l.agentWorking : l.supervise;
  const actions = useRef<HTMLDivElement>(null);
  // Every button is swapped when control changes hands. Focus moves to the first button of the new state.
  const arm = useFocusAfter(state, () => actions.current?.querySelector("button"));
  const act = (f?: () => void) => () => { arm(); f?.(); };
  const hint = state === "you-control" ? l.youControlHint : state === "supervise" ? (step ? l.superviseHint(step) : null) : null;
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 rounded-card border px-4 py-3",
      state === "supervise" ? "border-transparent bg-attention-soft text-attention-fg" : "border-line bg-surface text-fg", className)}>
      <div className="flex min-w-0 flex-1 basis-56 items-start gap-2.5">
        <span className="mt-0.5 shrink-0" aria-hidden>
          {state === "agent-working" ? <AgentStatusIcon status="working" /> : state === "you-control" ? <AgentStatusIcon status="idle" /> : <EyeIcon />}
        </span>
        <div role="status" aria-live="polite" className="min-w-0">
          <p className="text-body leading-5 font-medium">{title}</p>
          {hint && <p className={cn("text-small leading-4", state === "supervise" ? "text-attention-fg" : "text-fg-muted")}>{hint}</p>}
        </div>
      </div>
      <div ref={actions} className="ml-auto flex flex-wrap justify-end gap-2">
        {state === "agent-working" && <Button variant="secondary" onClick={act(onTakeOver)}>{l.takeOver}</Button>}
        {state === "supervise" && (<><Button variant="secondary" onClick={act(onTakeOver)}>{l.takeOver}</Button><Button onClick={act(onResume)}>{l.resume}</Button></>)}
        {state === "you-control" && (<><Button variant="secondary" onClick={act(onHandBack)}>{l.handBack}</Button><Button onClick={act(onResume)}>{l.resume}</Button></>)}
      </div>
    </div>
  );
}
```

## tattva/molecules/ThinkingBlock.tsx

```tsx
import type { ReactNode } from "react";
import { ShimmerText } from "../atoms/ShimmerText";
import { Collapsible } from "./Collapsible";

/** Collapsed-by-default reasoning. Shimmers while active, shows duration when done. */
export function ThinkingBlock({ active, seconds, children }: { active?: boolean; seconds?: number; children: ReactNode }) {
  return (
    <Collapsible
      defaultOpen={false}
      header={active ? <ShimmerText>Thinking…</ShimmerText> : <span className="text-body leading-5 text-fg-muted">Thought for {seconds ?? 0}s</span>}
    >
      <div className="mt-2 ml-2 border-l-2 border-line pl-4 text-body leading-relaxed text-fg-muted">{children}</div>
    </Collapsible>
  );
}
```

## tattva/molecules/TickerTape.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import type { Ref } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { PriceChange } from "../atoms/PriceChange";

export interface TickerItem {
  symbol: string;
  price: number;
  /** Absolute change. */
  change: number;
  /** Change in percent. */
  percent: number;
}

export interface TickerTapeProps {
  items: TickerItem[];
  /** Accessible name of the strip, such as "Market ticker". */
  label: string;
  /** Scroll speed in pixels per second. */
  speed?: number;
  /** Controlled pause state. Leave out to let the strip manage it. */
  paused?: boolean;
  onPausedChange?: (paused: boolean) => void;
  className?: string;
}

function plain(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function Row({ items, hidden, rowRef }: { items: TickerItem[]; hidden?: boolean; rowRef?: Ref<HTMLUListElement> }) {
  return (
    <ul ref={rowRef} aria-hidden={hidden || undefined} inert={hidden} className="m-0 flex shrink-0 list-none items-center p-0">
      {items.map((it) => (
        <li key={it.symbol} className="flex items-baseline gap-2 border-r border-line px-4 py-2 text-body leading-5 whitespace-nowrap">
          <span className="font-medium text-fg">{it.symbol}</span>
          <span className="font-mono tabular-nums text-fg">{plain(it.price)}</span>
          <PriceChange change={it.change} percent={it.percent} format="both" className="text-small leading-4" />
        </li>
      ))}
    </ul>
  );
}

function PauseIcon({ paused }: { paused: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="currentColor">
      {paused ? <path d="M5 3l8 5-8 5z" /> : <path d="M4.5 3h2.5v10H4.5zM9 3h2.5v10H9z" />}
    </svg>
  );
}

/** A looping strip of prices. It stops when paused, hovered or focused, and does not move at all with reduced motion. */
export function TickerTape({ items, label, speed = 40, paused, onPausedChange, className }: TickerTapeProps) {
  const reduced = useReducedMotion();
  const [inner, setInner] = useState(false);
  const isControlled = paused !== undefined;
  const pausedNow = isControlled ? paused : inner;
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLUListElement>(null);
  const offset = useRef(0);

  const moving = !reduced && !pausedNow && !hover && !focus && items.length > 0;
  const loops = !reduced && items.length > 0;

  useEffect(() => {
    if (!moving) return;
    let raf = 0;
    let last = performance.now();
    const step = (t: number) => {
      const width = copyRef.current?.offsetWidth ?? 0;
      const dt = Math.min(t - last, 100) / 1000;
      last = t;
      if (width > 0) {
        offset.current = (offset.current + speed * dt) % width;
        if (trackRef.current) trackRef.current.style.transform = `translateX(${-offset.current}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [moving, speed]);

  // Reduced motion: drop the transform so the strip can be scrolled by hand.
  useEffect(() => {
    if (reduced && trackRef.current) { trackRef.current.style.transform = ""; offset.current = 0; }
  }, [reduced]);

  const toggle = () => { if (!isControlled) setInner(!pausedNow); onPausedChange?.(!pausedNow); };
  const name = pausedNow ? "Play ticker" : "Pause ticker";

  return (
    <div role="region" aria-label={label} className={cn("flex items-stretch overflow-hidden rounded-card border border-line bg-surface", className)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocus(false); }}>
      <div tabIndex={reduced ? 0 : undefined} className={cn("min-w-0 flex-1", reduced ? "overflow-x-auto" : "overflow-hidden")}>
        <div ref={trackRef} className="flex w-max will-change-transform">
          <Row items={items} rowRef={copyRef} />
          {loops && <Row items={items} hidden />}
        </div>
      </div>
      <button type="button" onClick={toggle} aria-label={name} title={name}
        className="inline-flex min-h-9 min-w-9 shrink-0 cursor-pointer items-center justify-center gap-1.5 border-l border-line px-3 text-small leading-4 font-medium text-fg-muted transition-colors duration-[var(--dur-fast)] hover:bg-hover hover:text-fg pointer-coarse:min-h-11 pointer-coarse:min-w-11">
        <PauseIcon paused={pausedNow} />
        <span className="hidden sm:inline">{pausedNow ? "Play" : "Pause"}</span>
      </button>
    </div>
  );
}
```

## tattva/molecules/Timeline.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, XIcon } from "../lib/icons";

export type TimelineState = "done" | "current" | "upcoming" | "failed";

export interface TimelineEvent {
  id: string;
  /** Display text for the time, such as "09:40" or "3 Oct". */
  time: string;
  /** Machine-readable value for the time element, such as "2026-10-03T09:40". */
  dateTime?: string;
  title: string;
  description?: ReactNode;
  /** Optional state. Shown as a marker shape and as text. */
  state?: TimelineState;
}

export interface TimelineProps {
  events: TimelineEvent[];
  /** Text for each state label, for localisation. */
  stateLabels?: Record<TimelineState, string>;
  className?: string;
}

const defaultLabels: Record<TimelineState, string> = { done: "Done", current: "In progress", upcoming: "Upcoming", failed: "Failed" };

/** Vertical timeline as an ordered list. Each event has a time element, a title and an optional state. */
export function Timeline({ events, stateLabels = defaultLabels, className }: TimelineProps) {
  return (
    <ol className={cn("m-0 list-none p-0", className)}>
      {events.map((e, i) => (
        <li key={e.id} className="relative flex gap-4 pb-6 last:pb-0">
          {i < events.length - 1 && <span aria-hidden className="absolute top-6 bottom-0 left-2.75 w-px bg-line-strong" />}
          <span aria-hidden className={cn("relative z-(--z-above) flex size-6 shrink-0 items-center justify-center rounded-full border",
            e.state === "done" && "border-transparent bg-lime text-on-lime",
            e.state === "current" && "border-fg bg-surface",
            e.state === "failed" && "border-transparent bg-danger-soft text-danger-fg",
            (!e.state || e.state === "upcoming") && "border-line-strong bg-surface")}>
            {e.state === "done" && <CheckIcon width={12} height={12} />}
            {e.state === "current" && <span className="size-2 rounded-full bg-fg" />}
            {e.state === "failed" && <XIcon width={12} height={12} />}
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="flex flex-wrap items-baseline gap-x-3 text-compact">
              <time dateTime={e.dateTime} className="font-mono text-small text-fg-subtle tabular-nums">{e.time}</time>
              <span className="font-medium text-fg">{e.title}</span>
              {e.state && <span className="text-micro text-fg-muted">{stateLabels[e.state]}</span>}
            </p>
            {e.description && <div className="mt-1 text-compact leading-6 text-fg-muted">{e.description}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
```
