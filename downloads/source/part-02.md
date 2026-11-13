## tattva/atoms/AIPresence.tsx

```tsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";

export type AIPresenceState = "idle" | "listening" | "thinking" | "speaking" | "error";
export type AIPresenceSize = "sm" | "md" | "lg";

export interface AIPresenceProps {
  /** What the assistant is doing. Changes are announced once in a polite status region. */
  state?: AIPresenceState;
  size?: AIPresenceSize;
  /**
   * Optional audio amplitude from 0 to 1, for example from a microphone analyser.
   * The component smooths it over several frames, so pass the raw value. It is ignored under reduced motion.
   */
  level?: number;
  /** Show the state as visible text beside the mark. The status region for assistive technology is always present. */
  showLabel?: boolean;
  /** Override the text for each state, for localisation. */
  labels?: Partial<Record<AIPresenceState, string>>;
  className?: string;
}

const DEFAULT_LABELS: Record<AIPresenceState, string> = {
  idle: "Ready", listening: "Listening", thinking: "Thinking", speaking: "Speaking", error: "Something went wrong",
};

/**
 * One continuous parameter set. Each state is a row of targets the animation eases toward, so moving between
 * states never restarts anything: the mark just changes how it moves.
 */
interface Params {
  breathHz: number; breathAmp: number; // slow swell of the halo
  halo: number;      // how much of the soft halo shows
  ripple: number;    // opacity of the rings that spread while listening
  arc: number;       // opacity of the arc that circles while thinking
  turn: number;      // how fast the arc turns, degrees per second
  gain: number;      // how much the audio level moves things
}
const TARGETS: Record<AIPresenceState, Params> = {
  idle:      { breathHz: 0.25, breathAmp: 0.04, halo: 1,   ripple: 0, arc: 0, turn: 0,   gain: 0 },
  listening: { breathHz: 0.6,  breathAmp: 0.03, halo: 1,   ripple: 1, arc: 0, turn: 0,   gain: 0.5 },
  thinking:  { breathHz: 0.4,  breathAmp: 0.02, halo: 1,   ripple: 0, arc: 1, turn: 220, gain: 0 },
  speaking:  { breathHz: 1.4,  breathAmp: 0.05, halo: 1,   ripple: 0, arc: 0, turn: 0,   gain: 1 },
  error:     { breathHz: 0,    breathAmp: 0,    halo: 0,   ripple: 0, arc: 0, turn: 0,   gain: 0 },
};

const DIM: Record<AIPresenceSize, string> = { sm: "size-8", md: "size-16", lg: "size-28" };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

const DISC = 27;  // the AI-colour disc, in a 100 x 100 box
const HALO = 39;  // the soft halo around it
const ARC = 33;   // the thinking arc runs in the halo, between the disc and the halo's edge
const MARK = "M12.4 1.5Q14.2 9.8 21.5 11.4Q13.8 14.4 11.4 22.5Q9.6 14 2.5 12.6Q9.8 9.8 12.4 1.5Z";

/**
 * The assistant's presence: the Tattva AI mark on a disc in the theme's AI colour, inside a soft halo. Flat, like
 * the rest of the system: no glass, glow or blur, only theme colours. Idle breathes slowly, listening sends rings
 * outward, thinking turns a thin arc round the disc, speaking swells with the audio level, and an error turns the
 * disc to the danger colours and stops. One frame loop eases a set of parameters toward the current state, so
 * changing state never restarts an animation. Under prefers-reduced-motion no frames run: each state is a still
 * drawing plus its label. Place a labelled Stop button beside it. The disc is not a control.
 */
export function AIPresence({ state = "idle", size = "md", level = 0, showLabel = true, labels, className }: AIPresenceProps) {
  const reduced = usePrefersReducedMotion();
  const text = { ...DEFAULT_LABELS, ...labels }[state];
  const halo = useRef<SVGCircleElement>(null);
  const disc = useRef<SVGGElement>(null);
  const arc = useRef<SVGGElement>(null);
  const rip1 = useRef<SVGCircleElement>(null);
  const rip2 = useRef<SVGCircleElement>(null);
  const cur = useRef<Params>({ ...TARGETS[state] });
  const target = useRef<Params>(TARGETS[state]);
  const lvlIn = useRef(0);
  lvlIn.current = Math.min(1, Math.max(0, level));

  const draw = (t: number, lvl: number, angle: number) => {
    const c = cur.current;
    const breath = Math.sin(2 * Math.PI * c.breathHz * t) * c.breathAmp;
    const push = lvl * c.gain;
    halo.current?.setAttribute("r", String(HALO * (1 + breath + push * 0.08)));
    halo.current?.setAttribute("opacity", String(c.halo));
    disc.current?.setAttribute("transform", `translate(50 50) scale(${1 + push * 0.1}) translate(-50 -50)`);
    arc.current?.setAttribute("opacity", String(c.arc));
    arc.current?.setAttribute("transform", `rotate(${angle} 50 50)`);
    // Two rings spread out from the disc and fade, half a cycle apart.
    const p1 = (t * 0.55) % 1, p2 = (t * 0.55 + 0.5) % 1;
    rip1.current?.setAttribute("r", String(DISC + p1 * (HALO + 9 - DISC)));
    rip1.current?.setAttribute("opacity", String(c.ripple * (1 - p1)));
    rip2.current?.setAttribute("r", String(DISC + p2 * (HALO + 9 - DISC)));
    rip2.current?.setAttribute("opacity", String(c.ripple * (1 - p2)));
  };

  useLayoutEffect(() => {
    target.current = TARGETS[state];
    if (reduced) { cur.current = { ...TARGETS[state] }; draw(0, 0, 40); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, reduced]);

  useEffect(() => {
    if (reduced) return;
    let raf = 0, last = performance.now(), t = 0, angle = 0, lvl = 0;
    const loop = (now: number) => {
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now; t += dt;
      const ease = 1 - Math.exp(-dt / 0.18);
      const c = cur.current, g = target.current;
      (Object.keys(g) as (keyof Params)[]).forEach((k) => { c[k] += (g[k] - c[k]) * ease; });
      const rate = lvlIn.current > lvl ? 0.35 : 0.12; // fast attack, slow release, per 60fps frame
      lvl += (lvlIn.current - lvl) * (1 - Math.pow(1 - rate, dt * 60));
      angle = (angle + c.turn * dt) % 360;
      draw(t, lvl, angle);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const init = TARGETS[state];
  const err = state === "error";
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={cn("shrink-0 overflow-visible", DIM[size])}>
        {/* The soft halo, and the rings that spread while listening. */}
        <circle ref={halo} cx="50" cy="50" r={HALO} opacity={init.halo} style={{ fill: "var(--lime-soft)", transition: "opacity var(--dur-base)" }} />
        <circle ref={rip1} cx="50" cy="50" r={DISC} fill="none" strokeWidth="2" opacity="0" style={{ stroke: "var(--lime)" }} />
        <circle ref={rip2} cx="50" cy="50" r={DISC} fill="none" strokeWidth="2" opacity="0" style={{ stroke: "var(--lime)" }} />
        {/* The arc that turns in the halo, round the disc, while thinking. Text colour, so it reads in light and dark. */}
        <g ref={arc} opacity={init.arc}>
          <path d={`M50 ${50 - ARC} A ${ARC} ${ARC} 0 0 1 ${50 + ARC} 50`} fill="none" strokeWidth="2.5" strokeLinecap="round" style={{ stroke: "var(--fg)" }} />
        </g>
        {/* The disc in the AI colour, and the AI mark at its centre. */}
        <g ref={disc}>
          <circle cx="50" cy="50" r={DISC} style={{ fill: err ? "var(--danger-soft)" : "var(--lime)", transition: "fill var(--dur-base)" }} />
          <path d={MARK} transform="translate(50 50) scale(1.5) translate(-12 -12)" style={{ fill: err ? "var(--danger-fg)" : "var(--on-lime)", transition: "fill var(--dur-base)" }} />
        </g>
      </svg>
      {showLabel && <span aria-hidden="true" className={cn("text-small leading-4", err ? "text-danger-fg" : "text-fg-muted")}>{text}</span>}
      <span role="status" className="sr-only">{text}</span>
    </div>
  );
}
```

## tattva/atoms/AgentStatusIcon.tsx

```tsx
import { cn } from "../lib/cn";

export type AgentStatus = "working" | "needs-input" | "idle" | "completed" | "failed" | "stopped";

const defaultLabels: Record<AgentStatus, string> = {
  working: "Working",
  "needs-input": "Needs input",
  idle: "Idle",
  completed: "Completed",
  failed: "Failed",
  stopped: "Stopped",
};

const tone: Record<AgentStatus, string> = {
  working: "text-fg-muted",
  "needs-input": "text-attention",
  idle: "text-fg-subtle",
  completed: "text-success",
  failed: "text-danger",
  stopped: "text-fg-subtle",
};

export interface AgentStatusIconProps {
  status: AgentStatus;
  /** Glyph size in px. */
  size?: number;
  /** Override the accessible text for this status, for example for another language. */
  label?: string;
  /** Show the label as visible text beside the glyph. The glyph is then hidden from assistive tech so the text is read once. */
  showLabel?: boolean;
  className?: string;
}

/**
 * Status glyph for an agent session. Each status has its own shape (working arc, question mark,
 * dash, check, cross, square), so it reads without color. Needs input uses the attention color
 * because a person must act. The working arc spins and is static under prefers-reduced-motion.
 */
export function AgentStatusIcon({ status, size = 16, label, showLabel = false, className }: AgentStatusIconProps) {
  const text = label ?? defaultLabels[status];
  const svg = (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden={showLabel ? true : undefined} role={showLabel ? undefined : "img"} aria-label={showLabel ? undefined : text}
      className={cn("shrink-0", tone[status], status === "working" && "animate-spin", !showLabel && className)}>
      {status === "working" && (<><circle cx="12" cy="12" r="9" strokeOpacity="0.25" /><path d="M21 12a9 9 0 0 0-9-9" /></>)}
      {status === "needs-input" && (<><circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" /><path d="M9.8 9.6a2.3 2.3 0 1 1 3.3 2.1c-.7.4-1.1.8-1.1 1.6M12 16.6h.01" stroke="var(--surface)" strokeWidth={2} /></>)}
      {status === "idle" && (<><circle cx="12" cy="12" r="9" /><path d="M8.5 12h7" /></>)}
      {status === "completed" && (<><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>)}
      {status === "failed" && (<><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></>)}
      {status === "stopped" && <rect x="5" y="5" width="14" height="14" rx="3" />}
    </svg>
  );
  if (!showLabel) return svg;
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-small leading-4 font-medium text-fg", className)}>
      {svg}
      {text}
    </span>
  );
}
```

## tattva/atoms/ApprovedByMark.tsx

```tsx
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { ApproveIcon, BookmarkIcon, LoopIcon, ShieldIcon } from "../lib/icons";

export type ApprovedBy = "you" | "check" | "rule" | "none";

export interface ApprovedByMarkProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Who said yes: the person, an automatic safety check, a saved rule, or nobody (auto mode). */
  by: ApprovedBy;
  /** Replace the words for one kind. */
  labels?: Partial<Record<ApprovedBy, string>>;
  /** Extra plain detail, such as the name of the saved rule. Added to the tooltip and the screen reader text. */
  detail?: string;
}

const defaults: Record<ApprovedBy, string> = {
  you: "You approved",
  check: "Automatic check approved",
  rule: "Allowed by a saved rule",
  none: "Nobody asked (auto mode)",
};
const icons: Record<ApprovedBy, ReactNode> = {
  you: <ApproveIcon width={13} height={13} />,
  check: <ShieldIcon width={13} height={13} />,
  rule: <BookmarkIcon width={13} height={13} />,
  none: <LoopIcon width={13} height={13} />,
};

/** Small mark that says who approved an action. Always an icon plus words, never color alone. */
export function ApprovedByMark({ by, labels, detail, className, title, ...rest }: ApprovedByMarkProps) {
  const text = labels?.[by] ?? defaults[by];
  return (
    <span title={title ?? detail} className={cn("inline-flex min-w-0 items-center gap-1 text-small leading-4 text-fg-muted", className)} {...rest}>
      <span className="shrink-0">{icons[by]}</span>
      <span>{text}</span>
      {detail && <span className="sr-only">. {detail}</span>}
    </span>
  );
}
```

## tattva/atoms/AttentionDot.tsx

```tsx
/** Amber dot. The only signal that something needs a person; it always travels with text. */
export function AttentionDot({ label = "Needs attention" }: { label?: string }) {
  return <span role="img" aria-label={label} className="size-1.5 shrink-0 rounded-full bg-attention" />;
}
```

## tattva/atoms/Avatar.tsx

```tsx
import { cn } from "../lib/cn";
import { SparkleIcon } from "../lib/icons";

export interface AvatarProps {
  kind: "user" | "ai";
  name?: string;
  size?: "sm" | "md";
  className?: string;
}

/** The assistant is an ink disc with a lime spark: recognisable at 24px, and the only place lime fills a circle. */
export function Avatar({ kind, name = "You", size = "md", className }: AvatarProps) {
  const dims = size === "sm" ? "size-6 text-nano" : "size-8 text-small leading-4";
  return (
    <span
      role="img"
      aria-label={kind === "ai" ? "Assistant" : name}
      className={cn("inline-flex shrink-0 items-center justify-center rounded-full",
        kind === "ai" ? "bg-code text-lime border border-line-strong" : "border border-line bg-sunken font-serif text-fg-muted", dims, className)}
    >
      {kind === "ai" ? <SparkleIcon width={size === "sm" ? 11 : 14} height={size === "sm" ? 11 : 14} /> : name.slice(0, 1).toUpperCase()}
    </span>
  );
}
```

## tattva/atoms/Badge.tsx

```tsx
import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type Tone = "neutral" | "accent" | "lime" | "success" | "warning" | "danger" | "info" | "unsure" | "celebrate";

const tones: Record<Tone, string> = {
  neutral: "bg-sunken text-fg-muted border-line",
  accent: "bg-lime-soft text-fg border-transparent",
  /** Opaque lime for use over images and other busy backgrounds. */
  lime: "bg-lime text-on-lime border-transparent",
  success: "bg-success-soft text-success-fg border-transparent",
  warning: "bg-warning-soft text-warning-fg border-transparent",
  danger: "bg-danger-soft text-danger-fg border-transparent",
  info: "bg-info-soft text-info-fg border-transparent",
  /** Not fully sure, or partly done. Calm, not a warning. */
  unsure: "bg-unsure-soft text-unsure-fg border-transparent",
  /** A goal fully reached. Reserved: one place per product. */
  celebrate: "bg-celebrate-soft text-celebrate-fg border-transparent",
};

export function Badge({ tone = "neutral", className, ...rest }: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return <span data-slot="badge" data-tone={tone} className={cn("inline-flex items-center gap-1 rounded-control border px-2 py-0.5 text-micro leading-4 font-medium", tones[tone], className)} {...rest} />;
}
```
