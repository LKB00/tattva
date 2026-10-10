# Tattva free parts: all the source in one file

For AI builders (Lovable, v0, Bolt and others) that cannot unzip or install packages. Each section is one file; recreate them under `src/tattva/` with the same names, then import from `./tattva` (the `index.ts` section lists what is exported). Also add the colours from https://lkb00.github.io/tattva/downloads/tokens.css to the project's global stylesheet, and set `data-palette` on the html element for a colour theme.

Read https://lkb00.github.io/tattva/llms.txt for how to use each part. Pro parts are not included.

## tattva/index.ts

```ts
// Tattva free kit: the free parts. Import everything from here: import { Button } from "./tattva";
export * from "./atoms/AIBadge";
export * from "./atoms/AIDisclosure";
export * from "./atoms/AIMark";
export * from "./atoms/AIPresence";
export * from "./atoms/AgentStatusIcon";
export * from "./atoms/ApprovedByMark";
export * from "./atoms/AttentionDot";
export * from "./atoms/Avatar";
export * from "./atoms/Badge";
export * from "./atoms/Button";
export * from "./atoms/Checkbox";
export * from "./atoms/CitationMarker";
export * from "./atoms/Cluster";
export * from "./atoms/Container";
export * from "./atoms/DataFreshness";
export * from "./atoms/EditScopeChip";
export * from "./atoms/FrameScrubber";
export * from "./atoms/GhostText";
export * from "./atoms/Grid";
export * from "./atoms/HeroHeading";
export * from "./atoms/Illustration";
export * from "./atoms/KeyHint";
export * from "./atoms/MeterBar";
export * from "./atoms/MicButton";
export * from "./atoms/Money";
export * from "./atoms/NumberField";
export * from "./atoms/Pictogram";
export * from "./atoms/Popover";
export * from "./atoms/Price";
export * from "./atoms/PriceChange";
export * from "./atoms/Reveal";
export * from "./atoms/ScrollEdge";
export * from "./atoms/SectionLabel";
export * from "./atoms/SegmentedControl";
export * from "./atoms/Select";
export * from "./atoms/ShimmerText";
export * from "./atoms/Skeleton";
export * from "./atoms/Slider";
export * from "./atoms/Spinner";
export * from "./atoms/Stack";
export * from "./atoms/StatusLine";
export * from "./atoms/StatusTicker";
export * from "./atoms/Switch";
export * from "./atoms/TextField";
export * from "./atoms/Tooltip";
export * from "./atoms/TypingIndicator";
export * from "./atoms/Waveform";
export * from "./atoms/WorkingEdge";
export * from "./molecules/Callout";
export * from "./molecules/CodeBlock";
export * from "./molecules/Collapsible";
export * from "./molecules/Combobox";
export * from "./molecules/DatePicker";
export * from "./molecules/Field";
export * from "./molecules/Message";
export * from "./molecules/RadioGroup";
export * from "./molecules/Tabs";
export * from "./molecules/ThinkingBlock";
export * from "./organisms/Composer";
export * from "./organisms/Dialog";
export * from "./organisms/Markdown";
export * from "./organisms/MessageList";
export * from "./hooks";
export * from "./lib/icons";
export { cn } from "./lib/cn";
```

## tattva/atoms/AIBadge.tsx

```tsx
import { SparkleIcon } from "../lib/icons";
import { Badge } from "./Badge";

/** Label for any content produced by AI. Use on generated images, summaries, and drafts. */
/** Set `solid` when the badge sits on an image or another busy background. */
export function AIBadge({ label = "AI-generated", solid = false }: { label?: string; solid?: boolean }) {
  return <Badge tone={solid ? "lime" : "accent"}><SparkleIcon width={10} height={10} />{label}</Badge>;
}
```

## tattva/atoms/AIDisclosure.tsx

```tsx
import type { ReactNode } from "react";

export function AIDisclosure({ children }: { children?: ReactNode }) {
  return <p className="text-center text-small leading-4 text-fg-subtle">{children ?? "AI can make mistakes. Check important information."}</p>;
}
```

## tattva/atoms/AIMark.tsx

```tsx
import type { SVGProps } from "react";

export interface AIMarkProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "title"> {
  /** Pixel size. Use 16 beside 12px text, 18 beside 14px text, 22 beside 16px text, 24 and 32 for standalone use. */
  size?: 16 | 18 | 22 | 24 | 32;
  /** Accessible name. Omit for a decorative mark that sits next to text. When set, the mark becomes an image with this name. */
  title?: string;
}

/**
 * The Tattva AI mark: a four-point shape with arms of slightly different length, so it reads as drawn
 * and does not collide with the generic sparkle other products use. It fills with currentColor.
 * The standard sparkle is ambiguous on its own, so pair the mark with text when the action is specific.
 */
export function AIMark({ size = 18, title, ...rest }: AIMarkProps) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"
      role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} focusable="false"
      {...rest}
    >
      <path d="M12.4 1.5Q14.2 9.8 21.5 11.4Q13.8 14.4 11.4 22.5Q9.6 14 2.5 12.6Q9.8 9.8 12.4 1.5Z" />
    </svg>
  );
}
```

## tattva/atoms/AIPresence.tsx

```tsx
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
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
  /** Show the state as visible text beside the orb. The status region for assistive technology is always present. */
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
 * states never restarts anything: the light just changes how it behaves.
 */
interface Params {
  breathHz: number; breathAmp: number; // slow swell of the whole orb
  core: number;      // size of the lit centre
  glow: number;      // strength of the light inside the glass
  halo: number;      // strength of the glow outside the glass
  drift: number;     // how far the inner lights wander from the centre
  swirl: number;     // how fast they circle, degrees per second
  comet: number;     // opacity of the arc that circles while thinking
  ripple: number;    // opacity of the rings that spread while listening
  gain: number;      // how much the audio level moves things
  warm: number;      // 0 lime, 1 the error colour
}
const TARGETS: Record<AIPresenceState, Params> = {
  idle:      { breathHz: 0.22, breathAmp: 0.025, core: 0.9,  glow: 0.75, halo: 0.35, drift: 6,  swirl: 18,  comet: 0, ripple: 0,   gain: 0,    warm: 0 },
  listening: { breathHz: 0.7,  breathAmp: 0.03,  core: 1,    glow: 0.9,  halo: 0.55, drift: 7,  swirl: 30,  comet: 0, ripple: 0.9, gain: 0.35, warm: 0 },
  thinking:  { breathHz: 0.45, breathAmp: 0.02,  core: 0.75, glow: 0.8,  halo: 0.45, drift: 11, swirl: 140, comet: 1, ripple: 0,   gain: 0,    warm: 0 },
  speaking:  { breathHz: 1.5,  breathAmp: 0.05,  core: 1.15, glow: 1,    halo: 0.8,  drift: 8,  swirl: 60,  comet: 0, ripple: 0,   gain: 0.6,  warm: 0 },
  error:     { breathHz: 0,    breathAmp: 0,     core: 0.7,  glow: 0.55, halo: 0.15, drift: 3,  swirl: 0,   comet: 0, ripple: 0,   gain: 0,    warm: 1 },
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

const R = 34; // radius of the glass sphere, in a 100 x 100 box

/**
 * Animated presence orb: a small dark glass sphere with lime light living inside it and the AI mark at its heart. A soft core glows at the
 * centre, two smaller lights drift and circle inside the glass, a halo breathes outside it, and a highlight and a
 * bright rim give it depth. Listening sends rings outward, thinking sends a comet of light round the rim, speaking
 * pulses with the audio level, and an error dims the light to the danger colour.
 * A single frame loop eases one set of parameters toward the current state, so changing state never restarts an
 * animation. Under prefers-reduced-motion no frames are scheduled: each state is a still drawing plus its label.
 * Place a labelled Stop button beside it. The orb is not a control.
 */
export function AIPresence({ state = "idle", size = "md", level = 0, showLabel = true, labels, className }: AIPresenceProps) {
  const reduced = usePrefersReducedMotion();
  const text = { ...DEFAULT_LABELS, ...labels }[state];
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const id = (n: string) => `${uid}-${n}`;
  const halo = useRef<SVGCircleElement>(null);
  const core = useRef<SVGCircleElement>(null);
  const b1 = useRef<SVGCircleElement>(null);
  const b2 = useRef<SVGCircleElement>(null);
  const lights = useRef<SVGGElement>(null);
  const comet = useRef<SVGGElement>(null);
  const rip1 = useRef<SVGCircleElement>(null);
  const rip2 = useRef<SVGCircleElement>(null);
  const sphere = useRef<SVGGElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const mark = useRef<SVGGElement>(null);
  const fres = useRef<SVGCircleElement>(null);
  const cur = useRef<Params>({ ...TARGETS[state] });
  const target = useRef<Params>(TARGETS[state]);
  const lvlIn = useRef(0);
  lvlIn.current = Math.min(1, Math.max(0, level));

  const draw = (t: number, lvl: number, angle: number) => {
    const c = cur.current;
    const breath = Math.sin(2 * Math.PI * c.breathHz * t) * c.breathAmp;
    const push = lvl * c.gain;
    sphere.current?.setAttribute("transform", `translate(50 50) scale(${1 + breath + push * 0.04}) translate(-50 -50)`);
    halo.current?.setAttribute("opacity", String(Math.min(1, c.halo + push * 0.5)));
    halo.current?.setAttribute("r", String(R + 10 + push * 8));
    core.current?.setAttribute("r", String(17 * c.core * (1 + breath * 2 + push * 0.5)));
    lights.current?.setAttribute("opacity", String(c.glow));
    fres.current?.setAttribute("opacity", String(Math.min(1, c.glow * 0.7 + push * 0.3)));
    const a = (angle * Math.PI) / 180;
    const d = c.drift * (1 + push);
    b1.current?.setAttribute("cx", String(50 + Math.cos(a) * d));
    b1.current?.setAttribute("cy", String(50 + Math.sin(a * 1.3) * d * 0.8));
    b2.current?.setAttribute("cx", String(50 + Math.cos(a + 2.4) * d * 0.9));
    b2.current?.setAttribute("cy", String(50 + Math.sin(a * 0.8 + 2.4) * d));
    // The AI mark at the heart: turns with the light, swells with the core.
    const ms = 0.74 * c.core * (1 + breath * 2 + push * 0.35);
    mark.current?.setAttribute("transform", `translate(50 50) rotate(${angle * 0.35}) scale(${ms}) translate(-12 -12)`);
    comet.current?.setAttribute("opacity", String(c.comet));
    comet.current?.setAttribute("transform", `rotate(${angle * 2.2} 50 50)`);
    // Two rings spread out of the glass and fade, half a cycle apart.
    const p1 = (t * 0.6) % 1, p2 = (t * 0.6 + 0.5) % 1;
    rip1.current?.setAttribute("r", String(R + p1 * 14));
    rip1.current?.setAttribute("opacity", String(c.ripple * (1 - p1)));
    rip2.current?.setAttribute("r", String(R + p2 * 14));
    rip2.current?.setAttribute("opacity", String(c.ripple * (1 - p2)));
    // The light turns toward the danger colour on error.
    svg.current?.style.setProperty("--orb-light", c.warm > 0.5 ? "var(--danger)" : "var(--ref-lime)");
  };

  useLayoutEffect(() => {
    target.current = TARGETS[state];
    if (reduced) { cur.current = { ...TARGETS[state] }; draw(0, 0, state === "thinking" ? 40 : 0); }
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
      angle = (angle + c.swirl * dt) % 3600;
      draw(t, lvl, angle);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const init = TARGETS[state];
  const light = state === "error" ? "var(--danger)" : "var(--ref-lime)";
  const lightStyle = { ["--orb-light" as string]: light } as React.CSSProperties;
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <svg ref={svg} viewBox="0 0 100 100" aria-hidden="true" focusable="false" style={lightStyle} className={cn("shrink-0 overflow-visible", DIM[size])}>
        <defs>
          {/* The glass: lighter at the top left, falling to near black at the edge. */}
          <radialGradient id={id("glass")} cx="38%" cy="30%" r="75%">
            {/* Documented exception to the no-hex rule: the orb is a physical object (metal bezel) and its materials do not change with the theme. See scripts/check-docs.mjs. */}
            <stop offset="0%" stopColor="#40474e" />
            <stop offset="50%" stopColor="var(--ref-charcoal)" />
            <stop offset="100%" stopColor="#0c0e10" />
          </radialGradient>
          {/* A light: bright centre fading to nothing, in the current light colour. */}
          <radialGradient id={id("light")}>
            <stop offset="0%" style={{ stopColor: "color-mix(in oklab, var(--orb-light) 60%, white)" }} />
            <stop offset="45%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0.85" />
            <stop offset="100%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={id("halo")}>
            <stop offset="40%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0.5" />
            <stop offset="100%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0" />
          </radialGradient>
          {/* The rim: bright at the top, gone by the bottom. */}
          <linearGradient id={id("rim")} x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="40%" stopColor="white" stopOpacity="0.06" />
            <stop offset="75%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0.1" />
            <stop offset="100%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0.5" />
          </linearGradient>
          {/* The bezel: a fine metal ring, bright where the light falls (top left), dark on the far side. */}
          <linearGradient id={id("bezel")} x1="0.15" y1="0.05" x2="0.85" y2="0.95">
            <stop offset="0%" stopColor="#f3f2ee" />
            <stop offset="45%" stopColor="#9a9d9f" />
            <stop offset="100%" stopColor="#3b3f43" />
          </linearGradient>
          {/* Light bouncing on the lower inside edge of the glass. */}
          <linearGradient id={id("fresnel")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="35%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0" />
            <stop offset="100%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id={id("comet")} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" style={{ stopColor: "var(--orb-light)" }} stopOpacity="0" />
            <stop offset="100%" style={{ stopColor: "var(--orb-light)" }} />
          </linearGradient>
          <clipPath id={id("clip")}><circle cx="50" cy="50" r={R} /></clipPath>
          <filter id={id("soft")} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.6" /></filter>
          <filter id={id("haze")} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" /></filter>
          <filter id={id("sheen")} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.4" /></filter>
          {/* The reflection: a soft band of light that fades downward. */}
          <linearGradient id={id("refl")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.32" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outside the glass: the halo, and the rings that spread while listening. */}
        <circle ref={halo} cx="50" cy="50" r={R + 10} fill={`url(#${id("halo")})`} opacity={init.halo} filter={`url(#${id("haze")})`} />
        <circle ref={rip1} cx="50" cy="50" r={R} fill="none" strokeWidth="1.2" opacity="0" style={{ stroke: "var(--orb-light)" }} />
        <circle ref={rip2} cx="50" cy="50" r={R} fill="none" strokeWidth="1.2" opacity="0" style={{ stroke: "var(--orb-light)" }} />

        <g ref={sphere}>
          {/* The setting: a fine bezel and a dark seat, so the glass sits in something rather than floating. */}
          <circle cx="50" cy="50" r={R + 3.2} fill="#0b0d0f" stroke={`url(#${id("bezel")})`} strokeWidth="1.3" />
          <circle cx="50" cy="50" r={R} fill={`url(#${id("glass")})`} />
          {/* Inside the glass: the core and two drifting lights, softened and kept inside the sphere. */}
          <g clipPath={`url(#${id("clip")})`}>
            <g ref={lights} opacity={init.glow} filter={`url(#${id("soft")})`}>
              <ellipse cx="50" cy="74" rx="30" ry="16" fill={`url(#${id("light")})`} opacity="0.35" />
              <circle ref={b1} cx="54" cy="47" r="17" fill={`url(#${id("light")})`} opacity="0.9" />
              <circle ref={b2} cx="45" cy="54" r="15" fill={`url(#${id("light")})`} opacity="0.8" />
              <circle ref={core} cx="50" cy="50" r={17 * init.core} fill={`url(#${id("light")})`} />
            </g>
            {/* The AI mark, crisp at the centre of the light: a soft glow under it, the shape on top. */}
            <g ref={mark} transform={`translate(50 50) scale(${0.74 * init.core}) translate(-12 -12)`}>
              <path d="M12.4 1.5Q14.2 9.8 21.5 11.4Q13.8 14.4 11.4 22.5Q9.6 14 2.5 12.6Q9.8 9.8 12.4 1.5Z" style={{ fill: "var(--orb-light)" }} filter={`url(#${id("sheen")})`} opacity="0.9" />
              <path d="M12.4 1.5Q14.2 9.8 21.5 11.4Q13.8 14.4 11.4 22.5Q9.6 14 2.5 12.6Q9.8 9.8 12.4 1.5Z" style={{ fill: "color-mix(in oklab, var(--orb-light) 55%, white)" }} />
            </g>
            {/* The comet that circles inside the rim while thinking. */}
            <g ref={comet} opacity={init.comet}>
              <path d={`M50 ${50 - R + 4} A ${R - 4} ${R - 4} 0 0 1 ${50 + (R - 4)} 50`} fill="none" stroke={`url(#${id("comet")})`} strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <circle ref={fres} cx="50" cy="50" r={R - 1.2} fill="none" stroke={`url(#${id("fresnel")})`} strokeWidth="3" filter={`url(#${id("sheen")})`} opacity={init.glow * 0.7} />
            {/* A soft reflection on the upper left. */}
            <path d="M27 40 C 30 25, 50 18, 66 24 C 56 23, 38 27, 27 40 Z" fill={`url(#${id("refl")})`} filter={`url(#${id("sheen")})`} />
          </g>
          <circle cx="50" cy="50" r={R - 0.5} fill="none" stroke={`url(#${id("rim")})`} strokeWidth="1" />
          {/* A sharp glint: the small bright point that makes it read as glass. */}
          <ellipse cx="36.5" cy="30.5" rx="2.1" ry="1.2" fill="white" opacity="0.7" transform="rotate(-35 36.5 30.5)" style={{ filter: "blur(0.25px)" }} />
        </g>
      </svg>
      {showLabel && <span aria-hidden="true" className={cn("text-small leading-4", state === "error" ? "text-danger-fg" : "text-fg-muted")}>{text}</span>}
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
  return <span className={cn("inline-flex items-center gap-1 rounded-control border px-2 py-0.5 text-micro leading-4 font-medium", tones[tone], className)} {...rest} />;
}
```

## tattva/atoms/Button.tsx

```tsx
import type { ButtonHTMLAttributes, MouseEvent, ReactNode, Ref } from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "lime" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover disabled:bg-disabled disabled:text-disabled-fg",
  lime: "bg-lime text-on-lime hover:bg-lime-hover disabled:bg-disabled disabled:text-disabled-fg",
  secondary: "bg-surface text-fg border border-line hover:bg-bg hover:border-line-strong active:bg-pressed disabled:bg-disabled disabled:text-disabled-fg disabled:border-disabled-line",
  ghost: "text-fg-muted hover:bg-hover hover:text-fg active:bg-pressed disabled:bg-transparent disabled:text-disabled-fg",
  danger: "bg-danger text-on-danger hover:opacity-90 disabled:bg-disabled disabled:text-disabled-fg disabled:opacity-100",
};
const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-small leading-4 gap-1.5",
  md: "h-9 px-4 text-compact gap-2",
  lg: "h-11 px-6 text-body leading-5 gap-2",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The button element, for moving focus to it. */
  ref?: Ref<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leading?: ReactNode;
  trailing?: ReactNode;
  /** Work is running after a press. The label gives way to a spinner without changing the width, presses are ignored, and the button keeps focus and stays in the Tab order. */
  busy?: boolean;
  /** Read by screen readers while busy, for example "Saving". Defaults to "Working". */
  busyLabel?: string;
}

/** Press feedback shared by every button: a quick sink on press and a slower release. Off under reduced motion. */
export const pressable = "transition-[color,background-color,border-color,opacity,scale] duration-(--dur-fast) ease-(--ease-out) motion-safe:active:scale-(--press-scale) motion-safe:active:duration-(--dur-instant)";

function BusyMark() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 animate-spin">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Button({ variant = "primary", size = "md", leading, trailing, busy = false, busyLabel = "Working", className, children, type = "button", onClick, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      aria-busy={busy || undefined}
      onClick={(e: MouseEvent<HTMLButtonElement>) => { if (busy) { e.preventDefault(); return; } onClick?.(e); }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-control font-medium whitespace-nowrap select-none cursor-pointer",
        pressable, "disabled:pointer-events-none",
        busy && "cursor-progress motion-safe:active:scale-100",
        variants[variant], sizes[size], className,
      )}
      {...rest}
    >
      <span className={cn("inline-flex items-center justify-center gap-[inherit] transition-opacity duration-(--dur-fast)", busy && "opacity-0")}>{leading}{children}{trailing}</span>
      {busy && <span className="absolute inset-0 flex items-center justify-center motion-safe:animate-fade"><BusyMark /><span className="sr-only">{busyLabel}</span></span>}
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The button element, for moving focus to it. */
  ref?: Ref<HTMLButtonElement>;
  /** Required: icon-only controls must have an accessible name. */
  label: string;
  variant?: "ghost" | "secondary" | "primary" | "lime";
  size?: "sm" | "md";
  active?: boolean;
}

export function IconButton({ label, variant = "ghost", size = "md", active, className, children, type = "button", ...rest }: IconButtonProps) {
  const v = { ghost: "text-fg-subtle hover:bg-hover hover:text-fg active:bg-pressed disabled:bg-transparent disabled:text-disabled-fg", secondary: "border border-line bg-surface text-fg-muted hover:bg-bg hover:text-fg active:bg-pressed disabled:bg-disabled disabled:text-disabled-fg disabled:border-disabled-line", primary: "bg-accent text-on-accent hover:bg-accent-hover disabled:bg-disabled disabled:text-disabled-fg", lime: "bg-lime text-on-lime hover:bg-lime-hover disabled:bg-disabled disabled:text-disabled-fg" }[variant];
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      aria-pressed={active}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-control cursor-pointer disabled:pointer-events-none", pressable,
        size === "sm" ? "size-7" : "size-9", v, active && "bg-accent-soft text-accent-fg", className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
```

## tattva/atoms/Checkbox.tsx

```tsx
import { useEffect, useId, useRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "onChange" | "size" | "children"> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Visible label. Clicking it toggles the box. Also the accessible name. */
  label?: ReactNode;
  /** Visible hint under the label. Linked with aria-describedby. */
  description?: string;
  /** Shows a dash instead of a check, for a group that is partly selected. Pressing it still calls onChange. */
  indeterminate?: boolean;
  /** Marks the box as having an error (red border, aria-invalid). Show the error text yourself. */
  invalid?: boolean;
  /** Accessible name when there is no visible label. */
  ariaLabel?: string;
  className?: string;
}

/** Controlled checkbox. A native input, redrawn as a 20px box. The whole row is the click target, and at least 44px tall on coarse pointers. */
export function Checkbox({ checked, onChange, label, description, indeterminate, invalid, disabled, ariaLabel, id, className, ...rest }: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const labelId = useId();
  const descId = useId();
  // `indeterminate` is a DOM property only; there is no attribute for it.
  useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate; }, [indeterminate]);
  return (
    <label className={cn("group/cb inline-flex items-start gap-3 text-body leading-5 text-fg pointer-coarse:min-h-11 pointer-coarse:items-center", disabled ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer", className)}>
      <span className="relative mt-0.5 inline-grid size-5 shrink-0 place-items-center pointer-coarse:mt-0">
        <input {...rest} ref={ref} type="checkbox" id={id} checked={checked} disabled={disabled}
          aria-checked={indeterminate ? "mixed" : checked}
          aria-invalid={invalid || undefined}
          aria-label={label ? undefined : ariaLabel}
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={description ? descId : undefined}
          onChange={(e) => onChange(e.target.checked)}
          className={cn("peer size-5 shrink-0 appearance-none rounded-md border bg-surface transition-colors duration-[var(--dur-fast)] checked:border-accent checked:bg-accent indeterminate:border-accent indeterminate:bg-accent forced-colors:border-[ButtonText] forced-colors:checked:border-[Highlight] forced-colors:checked:bg-[Highlight] forced-colors:indeterminate:border-[Highlight] forced-colors:indeterminate:bg-[Highlight]",
            invalid ? "border-danger" : "border-line-strong", disabled ? "cursor-not-allowed" : "cursor-pointer")} />
        <CheckIcon aria-hidden className="pointer-events-none absolute size-3.5 text-on-accent opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-0 forced-colors:text-[HighlightText]" strokeWidth={3} />
        <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute size-3.5 text-on-accent opacity-0 peer-indeterminate:opacity-100 forced-colors:text-[HighlightText]" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
          <path d="M6 12h12" />
        </svg>
      </span>
      {(label || description) && (
        <span className="flex min-w-0 flex-col">
          {label && <span id={labelId}>{label}</span>}
          {description && <span id={descId} className="text-fg-muted">{description}</span>}
        </span>
      )}
    </label>
  );
}
```

## tattva/atoms/CitationMarker.tsx

```tsx

/** Inline numbered marker, e.g. "…grew 12%[1]". Links to the source and is keyboard reachable. */
export function CitationMarker({ n, href, title }: { n: number; href?: string; title?: string }) {
  return (
    <a href={href ?? `#source-${n}`} title={title} aria-label={`Source ${n}${title ? `: ${title}` : ""}`}
      className="mx-0.5 inline-flex animate-pop h-4 min-w-4 -translate-y-0.5 items-center justify-center rounded bg-accent-soft px-1 text-nano font-semibold text-accent-fg no-underline hover:bg-accent hover:text-on-accent">
      {n}
    </a>
  );
}
```

## tattva/atoms/Cluster.tsx

```tsx
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { spaceValue, type Space } from "./Stack";

const align = { start: "items-start", center: "items-center", end: "items-end", baseline: "items-baseline" } as const;
const justify = { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" } as const;

export interface ClusterProps extends HTMLAttributes<HTMLElement> {
  /** Gap step from 1 to 8 on the 4px grid, scaled by --density. */
  gap?: Space;
  /** Cross-axis alignment. */
  align?: keyof typeof align;
  /** Main-axis distribution. */
  justify?: keyof typeof justify;
  as?: "div" | "ul" | "ol" | "nav" | "section" | "header" | "footer";
  children?: ReactNode;
}

/** Wrapping horizontal group for chips, actions and metadata. Items drop to the next line instead of overflowing. */
export function Cluster({ gap = 2, align: a = "center", justify: j = "start", as = "div", className, style, children, ...rest }: ClusterProps) {
  const s: CSSProperties = { gap: spaceValue(gap), ...style };
  // Safari stops calling a list a list once its markers are removed, so say it is one.
  const isList = as === "ul" || as === "ol";
  return createElement(as, { ...(isList ? { role: "list" } : {}), ...rest, className: cn("flex flex-wrap", align[a], justify[j], isList ? "list-none p-0 m-0" : "", className), style: s }, children);
}
```

## tattva/atoms/Container.tsx

```tsx
import { createElement, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

const widths = {
  chat: "max-w-[var(--w-chat)]",
  home: "max-w-[var(--w-home)]",
  page: "max-w-[var(--w-page)]",
  full: "max-w-none",
} as const;

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Max-width preset. chat 768px, home 680px, page 1120px (proposed), full has no cap. */
  size?: keyof typeof widths;
  /** Remove the side margins, for content that bleeds to the edge. */
  flush?: boolean;
  as?: "div" | "main" | "section" | "article" | "header" | "footer" | "nav";
  children?: ReactNode;
}

/** Centered column with a width preset and side margins from --margin (16, 24 and 32px by window class). */
export function Container({ size = "page", flush, as = "div", className, children, ...rest }: ContainerProps) {
  return createElement(as, { ...rest, className: cn("mx-auto w-full", widths[size], !flush && "px-[var(--margin)]", className) }, children);
}
```

## tattva/atoms/DataFreshness.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";

export type FreshnessStatus = "live" | "delayed" | "stale" | "simulated" | "closed";

export interface DataFreshnessProps {
  /** If left out, it is worked out from asOf and now. Delayed, simulated and closed are only used when passed. */
  status?: FreshnessStatus;
  /** When the data was last updated. ISO time. */
  asOf?: string;
  /** The current time, ISO. For docs and tests. By default the real time, refreshed every second. */
  now?: string;
  /** Shown in the delayed label, such as "Delayed 15 min". */
  delayMinutes?: number;
  /** Seconds after which data counts as stale. */
  staleAfter?: number;
  className?: string;
}

const LIVE_WITHIN = 10;

function ago(seconds: number): string {
  if (seconds < 60) return `${Math.max(0, Math.floor(seconds))} sec ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return `${Math.floor(seconds / 86400)} d ago`;
}

function Icon({ status }: { status: FreshnessStatus }) {
  const common = { "aria-hidden": true, viewBox: "0 0 16 16", className: "size-3.5 shrink-0", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  if (status === "delayed" || status === "stale") return <svg {...common}><circle cx="8" cy="8" r="6" /><path d="M8 4.5V8l2.2 1.4" /></svg>;
  if (status === "simulated") return <svg {...common}><path d="M2 11l3-4 3 2 3-5 3 3" /><path d="M2 14h12" strokeDasharray="2 2" /></svg>;
  return <svg {...common}><circle cx="8" cy="8" r="6" /><path d="M5.5 8h5" /></svg>;
}

/** Says how fresh the numbers are, in words and an icon. Calm tones only: a late feed is not an error. */
export function DataFreshness({ status, asOf, now, delayMinutes = 15, staleAfter = 60, className }: DataFreshnessProps) {
  const computed = status === undefined;
  const [tickNow, setTickNow] = useState(() => Date.now());
  // Only a computed status with no fixed `now` needs a clock.
  useEffect(() => {
    if (!computed || now !== undefined || !asOf) return;
    const id = setInterval(() => setTickNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [computed, now, asOf]);

  const nowMs = now !== undefined ? Date.parse(now) : tickNow;
  const asOfMs = asOf !== undefined ? Date.parse(asOf) : NaN;
  const seconds = Number.isFinite(nowMs) && Number.isFinite(asOfMs) ? Math.max(0, (nowMs - asOfMs) / 1000) : NaN;

  let resolved: FreshnessStatus;
  if (status) resolved = status;
  else if (!Number.isFinite(seconds)) resolved = "stale";
  else resolved = seconds < LIVE_WITHIN ? "live" : seconds > staleAfter ? "stale" : "live";

  // A short gap between 10s and staleAfter still counts as live, so the label does not flicker.
  const label =
    resolved === "live" ? "Live"
    : resolved === "delayed" ? `Delayed ${delayMinutes} min`
    : resolved === "simulated" ? "Simulated data"
    : resolved === "closed" ? "Market closed"
    : Number.isFinite(seconds) ? `Stale: last update ${ago(seconds)}` : "Stale";

  // Announce once, only on the change into stale.
  const prevStatus = useRef(resolved);
  const [alert, setAlert] = useState("");
  useEffect(() => {
    if (prevStatus.current !== "stale" && resolved === "stale") setAlert("Data is stale");
    else if (resolved !== "stale") setAlert("");
    prevStatus.current = resolved;
  }, [resolved]);

  const tone = resolved === "delayed" || resolved === "stale" ? "bg-unsure-soft text-unsure-fg border-transparent" : "bg-sunken text-fg-muted border-line";
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-control border px-2 py-0.5 text-micro leading-4 font-medium whitespace-nowrap forced-colors:border-[CanvasText]", tone, className)}>
      {resolved === "live" ? <span aria-hidden className="size-2 shrink-0 rounded-full bg-up motion-safe:animate-pulse-dot forced-colors:bg-[CanvasText]" /> : <Icon status={resolved} />}
      <span>{label}</span>
      <span aria-live="polite" className="sr-only">{alert}</span>
    </span>
  );
}
```

## tattva/atoms/EditScopeChip.tsx

```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, ChevronIcon, EditIcon, FileIcon, LayersIcon } from "../lib/icons";
import { AIMark } from "./AIMark";
import { Popover } from "./Popover";

/** What an AI edit will change. Slide ids are your own; give a label when the default ("Slide 3", "3 slides") is not right. */
export type EditScope =
  | { kind: "element"; label: string }
  | { kind: "slides"; ids: string[]; label?: string }
  | { kind: "deck"; label?: string };

export interface EditScopeChipProps {
  /** The scope the next AI request will use. */
  scope: EditScope;
  /** The scopes the person can switch to. With one option or none, the chip is a plain label with no menu. */
  options: EditScope[];
  onChange: (scope: EditScope) => void;
  /** Cost or reach of a whole-deck edit, worked out by your app, such as "All 12 slides, about 40 credits". Shown in the menu and beside the chip while the whole deck is chosen. */
  deckCost?: ReactNode;
  /** Locks the scope, for example while the AI is already editing. Say why in disabledReason. */
  disabled?: boolean;
  /** Said beside a locked chip, such as "Scope is fixed while the AI edits". */
  disabledReason?: string;
  /** Word before the scope, in the chip and its accessible name. Default "Edit". */
  prefix?: string;
  className?: string;
}

/** The words for a scope: "Slide 3", "Slides 3 to 5", "4 slides", "Whole deck" or the element's own label. */
export function scopeLabel(s: EditScope): string {
  if (s.label) return s.label;
  if (s.kind === "deck") return "Whole deck";
  if (s.kind === "slides") {
    if (s.ids.length === 1) return `Slide ${s.ids[0]}`;
    const n = s.ids.map(Number);
    const run = n.every((v, i) => Number.isInteger(v) && (i === 0 || v === n[i - 1] + 1));
    return run && n.length > 1 ? `Slides ${s.ids[0]} to ${s.ids[s.ids.length - 1]}` : `${s.ids.length} slides`;
  }
  return "This element";
}

const key = (s: EditScope) => (s.kind === "slides" ? `slides:${s.ids.join(",")}` : s.kind === "element" ? `element:${s.label}` : "deck");
const ICON = { element: EditIcon, slides: FileIcon, deck: LayersIcon } as const;

/**
 * Shows exactly what the next AI request will change, and lets the person narrow or widen it before sending.
 * The chip stays neutral; only the small AI mark uses the AI colour.
 */
export function EditScopeChip({ scope, options, onChange, deckCost, disabled = false, disabledReason, prefix = "Edit", className }: EditScopeChipProps) {
  const [open, setOpen] = useState(false);
  const list = useRef<HTMLDivElement>(null);
  // The menu is drawn on the page (portal) so a clipped parent cannot cut it off. It becomes visible only after it is
  // placed, so focus moves to the checked scope one frame later.
  useEffect(() => {
    if (!open) return;
    const f = requestAnimationFrame(() => {
      const el = list.current;
      if (!el || el.contains(document.activeElement)) return;
      (el.querySelector<HTMLElement>('[aria-checked="true"]') ?? el.querySelector<HTMLElement>("[role=menuitemradio]"))?.focus();
    });
    return () => cancelAnimationFrame(f);
  }, [open]);
  const current = scopeLabel(scope);
  const Icon = ICON[scope.kind];
  const pickable = !disabled && options.length > 1;
  const name = `${prefix} scope: ${current}`;

  const face = (
    <>
      <span aria-hidden className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} /></span>
      <span className="text-fg-muted">{prefix}<span className="sr-only"> scope:</span></span>
      <Icon aria-hidden width={13} height={13} className="shrink-0 text-fg-subtle" />
      <span className="min-w-0 truncate">{current}</span>
    </>
  );
  const chip = "inline-flex h-8 max-w-full items-center gap-1.5 rounded-control border border-line bg-surface px-2.5 text-small leading-4 font-medium text-fg tap";

  return (
    <span className={cn("inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1", className)}>
      {pickable ? (
        <Popover open={open} onOpenChange={setOpen} role="menu" label="What the AI edit will change" side="top" portal panelClassName="w-72 max-w-[calc(100vw-2rem)]"
          trigger={({ triggerProps }) => (
            <button type="button" {...triggerProps} aria-label={name} onClick={() => setOpen(!open)}
              onKeyDown={(e) => { if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) { e.preventDefault(); setOpen(true); } }}
              className={cn(chip, "cursor-pointer transition-colors duration-(--dur-fast) hover:border-line-strong hover:bg-hover")}>
              {face}
              <ChevronIcon aria-hidden width={12} height={12} className={cn("shrink-0 text-fg-subtle transition-transform duration-(--dur-fast)", open ? "-rotate-90" : "rotate-90")} />
            </button>
          )}>
          {({ close }) => (
            <div ref={list}>
              <p role="presentation" className="px-2.5 pt-1.5 pb-1 text-small leading-4 font-medium text-fg-subtle">The AI will change</p>
              {options.map((o) => {
                const checked = key(o) === key(scope);
                const OIcon = ICON[o.kind];
                return (
                  <button key={key(o)} type="button" role="menuitemradio" aria-checked={checked} tabIndex={-1}
                    onClick={() => { if (!checked) onChange(o); close(); }}
                    className="flex min-h-9 w-full cursor-pointer items-start gap-2.5 rounded-control px-2.5 py-2 text-left text-body text-fg hover:bg-hover focus-visible:bg-hover focus-visible:outline-offset-[-2px]">
                    <OIcon aria-hidden width={15} height={15} className="mt-0.5 shrink-0 text-fg-subtle" />
                    <span className="min-w-0 flex-1">
                      <span className="block">{scopeLabel(o)}</span>
                      {o.kind === "deck" && deckCost && <span className="block text-small text-fg-muted">{deckCost}</span>}
                    </span>
                    <span aria-hidden className="flex size-4 shrink-0 items-center justify-center pt-0.5">{checked && <CheckIcon width={14} height={14} />}</span>
                  </button>
                );
              })}
            </div>
          )}
        </Popover>
      ) : (
        <span className={cn(chip, disabled && "border-dashed text-fg-muted")}>
          {face}
        </span>
      )}
      {scope.kind === "deck" && deckCost && !disabled && <span className="text-small text-fg-muted">{deckCost}</span>}
      {disabled && disabledReason && <span className="text-small text-fg-muted">{disabledReason}</span>}
    </span>
  );
}
```

## tattva/atoms/FrameScrubber.tsx

```tsx
import { useRef, useState } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { formatMediaTime, speakMediaTime } from "./Waveform";

export interface FrameScrubberProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Length of the clip in seconds. 0 or less shows a disabled, empty track (length not known yet). */
  duration: number;
  /** Playhead in seconds. The parent owns it. */
  value: number;
  /** Called with the new time after a drag, a tap or a key press. */
  onChange: (seconds: number) => void;
  /** Name of the slider, such as "Seek, take 3". */
  label: string;
  /** Frames per second. Turns on frame steps (comma and period, or Shift with an arrow, while the scrubber has focus) and snaps every move to a whole frame. */
  fps?: number;
  /** Seconds moved by an arrow key. */
  step?: number;
  /** Still images spread evenly over the clip. The nearest one shows above the playhead while dragging or pointing. */
  thumbnails?: string[];
  /** Draws the preview above the playhead for a time, when there are no image thumbnails (for example a drawn frame). */
  renderThumbnail?: (seconds: number) => ReactNode;
  /** Called when a drag starts and ends, so a player can pause while scrubbing. */
  onScrubbingChange?: (scrubbing: boolean) => void;
  /** Blocks seeking. The slider stays focusable and says it is unavailable. */
  disabled?: boolean;
  className?: string;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** "3.2 seconds" under a minute, where tenths matter; "1 minute 12 seconds" past it. */
export function speakClipTime(seconds: number): string {
  const t = Math.max(0, seconds || 0);
  if (t >= 60) return speakMediaTime(t);
  const r = Math.round(t * 10) / 10;
  return `${Number.isInteger(r) ? r : r.toFixed(1)} second${r === 1 ? "" : "s"}`;
}

/** The frame number counted from 1, as people say it. */
export const frameAt = (seconds: number, fps: number) => Math.floor(Math.max(0, seconds) * fps + 1e-6) + 1;

/**
 * The seek slider for a video clip. A thin track with a 44px hit area, the played part in ink (never the AI colour),
 * value text in words, and frame steps on comma and period that work only while the scrubber itself has focus.
 */
export function FrameScrubber({
  duration, value, onChange, label, fps, step = 1, thumbnails, renderThumbnail, onScrubbingChange, disabled = false, className, ...rest
}: FrameScrubberProps) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<number | null>(null);
  const [dragAt, setDragAt] = useState<number | null>(null);
  const [hoverAt, setHoverAt] = useState<number | null>(null);

  const dur = Math.max(0, duration || 0);
  const live = !disabled && dur > 0;
  const frame = fps ? 1 / fps : 0;
  const snap = (t: number) => clamp(frame ? Math.round(t / frame) * frame : t, 0, dur);
  const pos = clamp(dragAt ?? value, 0, dur);
  const pct = (s: number) => `${dur ? (clamp(s, 0, dur) / dur) * 100 : 0}%`;
  const totalFrames = fps ? Math.max(1, Math.round(dur * fps)) : 0;

  const timeAt = (clientX: number) => {
    const r = track.current?.getBoundingClientRect();
    return r && r.width ? snap(clamp((clientX - r.left) / r.width, 0, 1) * dur) : 0;
  };
  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if (!live || (ev.pointerType === "mouse" && ev.button !== 0)) return;
    ev.currentTarget.setPointerCapture(ev.pointerId);
    ev.currentTarget.focus();
    drag.current = ev.pointerId;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onScrubbingChange?.(true);
    onChange(t);
  };
  const move = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current === ev.pointerId) { const t = timeAt(ev.clientX); setDragAt(t); onChange(t); }
    else if (live && ev.pointerType === "mouse") setHoverAt(timeAt(ev.clientX));
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    drag.current = null;
    setDragAt(null);
    onScrubbingChange?.(false);
  };
  const key = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!live || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const k = ev.key;
    const one = frame || 0.1;
    let to: number;
    // Frame steps: comma and period, or Shift with an arrow. They only reach here while this slider has focus.
    if (k === "," || (ev.shiftKey && (k === "ArrowLeft" || k === "ArrowDown"))) to = value - one;
    else if (k === "." || (ev.shiftKey && (k === "ArrowRight" || k === "ArrowUp"))) to = value + one;
    else if (k === "ArrowRight" || k === "ArrowUp") to = value + step;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = value - step;
    else if (k === "PageUp") to = value + step * 10;
    else if (k === "PageDown") to = value - step * 10;
    else if (k === "Home") to = 0;
    else if (k === "End") to = dur;
    else return;
    ev.preventDefault();
    ev.stopPropagation();
    onChange(snap(to));
  };

  const valueText = dur > 0
    ? `${speakClipTime(value)} of ${speakClipTime(dur)}${fps ? `, frame ${Math.min(frameAt(value, fps), totalFrames)} of ${totalFrames}` : ""}`
    : "Length not known yet";

  const peekAt = dragAt ?? hoverAt;
  const thumbFor = (t: number) => {
    if (thumbnails?.length) {
      const i = clamp(Math.round((t / (dur || 1)) * (thumbnails.length - 1)), 0, thumbnails.length - 1);
      return <img src={thumbnails[i]} alt="" className="size-full object-cover" />;
    }
    return renderThumbnail?.(t);
  };
  const hasThumbs = !!thumbnails?.length || !!renderThumbnail;

  return (
    <div className={cn("relative min-w-0", className)} {...rest}>
      <div ref={track} role="slider" tabIndex={0} aria-label={label}
        aria-valuemin={0} aria-valuemax={Math.round(dur * 10) / 10} aria-valuenow={Math.round(clamp(value, 0, dur) * 10) / 10}
        aria-valuetext={valueText} aria-orientation="horizontal" aria-disabled={!live || undefined}
        onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={() => setHoverAt(null)}
        className={cn("group relative flex min-h-11 touch-none items-center rounded-sm select-none", live ? "cursor-pointer" : "cursor-default")}>
        {/* The drawn track is 4px; the slider box around it is the 44px hit area. */}
        <span aria-hidden className="relative block h-1 w-full rounded-full bg-line-strong forced-colors:bg-[GrayText]">
          <span className="absolute inset-y-0 left-0 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ width: pct(pos) }} />
        </span>
        {live && (
          <span aria-hidden className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-fg shadow-sm transition-transform duration-(--dur-fast) group-hover:scale-110 group-focus-visible:scale-110 forced-colors:bg-[CanvasText] motion-reduce:transition-none"
            style={{ left: pct(pos) }} />
        )}
      </div>
      {live && peekAt !== null && (
        <span aria-hidden className="pointer-events-none absolute bottom-full z-10 mb-1 flex -translate-x-1/2 flex-col items-center gap-1"
          style={{ left: `clamp(var(--spacing) * 10, ${pct(peekAt)}, 100% - var(--spacing) * 10)` }}>
          {hasThumbs && <span className="block h-11 w-20 overflow-hidden rounded-sm border border-line bg-sunken shadow-md">{thumbFor(peekAt)}</span>}
          <span className="rounded-control bg-inverse px-1.5 py-0.5 text-small text-inverse-fg tabular-nums shadow-sm">
            {formatMediaTime(peekAt)}{fps ? ` · frame ${frameAt(peekAt, fps)}` : ""}
          </span>
        </span>
      )}
    </div>
  );
}
```

## tattva/atoms/GhostText.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { XIcon } from "../lib/icons";
import { KeyHint } from "./KeyHint";

export interface GhostTextProps {
  /** The suggested continuation, shown dimmed. */
  children: string;
  /** Text the person already typed. Rendered in normal ink before the suggestion. */
  typed?: ReactNode;
  /** Id for the visually hidden description. Point the field's aria-describedby at it. */
  id?: string;
  /** Key that accepts the whole suggestion. Shown in the hint. */
  acceptKey?: string;
  /** Key that dismisses the suggestion. Announced to assistive tech. */
  dismissKey?: string;
  /** Text for a partial accept path, for example "Ctrl + Right accepts one word". Omit when partial accept is not offered. */
  partialHint?: string;
  /** Override the text read by assistive tech. The default names the suggestion, the accept key and the dismiss key. */
  description?: string;
  /** Called when the hint is activated. The consumer wires the real key (usually Tab) to the same handler. */
  onAccept?: () => void;
  /** Called when the dismiss control is activated. The consumer wires Escape to the same handler. */
  onDismiss?: () => void;
  /** Accessible names for the two controls. */
  acceptLabel?: string;
  dismissLabel?: string;
  className?: string;
}

/**
 * Dimmed inline suggestion shown after typed text. The visible suggestion is hidden from the accessibility tree and
 * a visually hidden description carries the same text, so it is read as a pending suggestion and not as typed text.
 * It never uses aria-live. The consumer owns key handling.
 */
export function GhostText({
  children, typed, id, acceptKey = "Tab", dismissKey = "Esc", partialHint, description,
  onAccept, onDismiss, acceptLabel = "Accept suggestion", dismissLabel = "Dismiss suggestion", className,
}: GhostTextProps) {
  const hint = <KeyHint>{acceptKey}</KeyHint>;
  return (
    <span className={cn("inline", className)}>
      {typed}
      <span id={id} className="sr-only">
        {description ?? `Suggestion available: ${children}. Press ${acceptKey} to accept, ${dismissKey} to dismiss.${partialHint ? ` ${partialHint}.` : ""}`}
      </span>
      <span aria-hidden="true" data-ghost className="rounded-sm bg-sunken text-fg-subtle underline decoration-line-strong decoration-dotted underline-offset-4">{children}</span>
      <span className="ml-1.5 inline-flex items-center gap-1 align-middle">
        {onAccept
          ? <button type="button" aria-label={`${acceptLabel}, ${acceptKey}`} onClick={onAccept} className="cursor-pointer rounded-md">{hint}</button>
          : <span aria-hidden="true">{hint}</span>}
        {partialHint && <span aria-hidden="true" className="text-micro text-fg-subtle">{partialHint}</span>}
        {onDismiss && (
          <button type="button" aria-label={dismissLabel} title={dismissLabel} onClick={onDismiss}
            className="inline-flex size-5 cursor-pointer items-center justify-center rounded-control text-fg-subtle hover:bg-hover hover:text-fg">
            <XIcon width={12} height={12} />
          </button>
        )}
      </span>
    </span>
  );
}
```

## tattva/atoms/Grid.tsx

```tsx
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { spaceValue, type Space } from "./Stack";

export type Cols = 1 | 2 | 3 | 4 | 6 | 8 | 12;

const base: Record<Cols, string> = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 6: "grid-cols-6", 8: "grid-cols-8", 12: "grid-cols-12" };
const md: Record<Cols, string> = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 6: "md:grid-cols-6", 8: "md:grid-cols-8", 12: "md:grid-cols-12" };
const lg: Record<Cols, string> = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 6: "lg:grid-cols-6", 8: "lg:grid-cols-8", 12: "lg:grid-cols-12" };

export interface GridCols {
  /** Columns below md. Default 4. */
  base?: Cols;
  /** Columns from md (840px). Default 8. */
  md?: Cols;
  /** Columns from lg (1200px). Default 12. */
  lg?: Cols;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Column counts per window class. Defaults follow the 4, 8, 12 column system. */
  cols?: GridCols;
  /** Minimum item width as a CSS length such as "16rem". When set, the grid auto-fits and `cols` is ignored. */
  min?: string;
  /** Gap step from 1 to 8, scaled by --density. Omit to use the --gutter token. */
  gap?: Space;
  children?: ReactNode;
}

/** Responsive grid. Items span columns with Tailwind col-span utilities. */
export function Grid({ cols, min, gap, className, style, children, ...rest }: GridProps) {
  const c = { base: 4 as Cols, md: 8 as Cols, lg: 12 as Cols, ...cols };
  const s: CSSProperties = {
    gap: gap ? spaceValue(gap) : "var(--gutter)",
    ...(min ? { gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}), 1fr))` } : null),
    ...style,
  };
  return <div {...rest} className={cn("grid", !min && [base[c.base], md[c.md], lg[c.lg]].join(" "), className)} style={s}>{children}</div>;
}
```

## tattva/atoms/HeroHeading.tsx

```tsx
import { useEffect, useState } from "react";

/** Serif headline that types itself in once. Static for reduced-motion users and screen readers. */
export function HeroHeading({ text, type = true }: { text: string; type?: boolean }) {
  const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(type && !reduce ? 0 : text.length);
  useEffect(() => {
    if (!type || reduce) return;
    setN(0);
    const t = window.setInterval(() => setN((v) => { if (v >= text.length) { window.clearInterval(t); return v; } return v + 1; }), 28);
    return () => window.clearInterval(t);
  }, [text, type, reduce]);
  return (
    <h2 aria-label={text} className="text-balance text-center text-title-md leading-9 tracking-snug text-fg sm:text-head-sm sm:leading-headline">
      <span aria-hidden>{text.slice(0, n)}</span>
    </h2>
  );
}
```

## tattva/atoms/Illustration.tsx

```tsx
import type { ReactNode } from "react";

/** Names of the spot illustrations. Each one shows a single concept. */
export type IllustrationName =
  | "empty-chat"
  | "no-results"
  | "error"
  | "permission"
  | "offline"
  | "rate-limit"
  | "success"
  | "upload"
  | "first-run";

export type IllustrationSize = 64 | 96 | 160;

/** Gallery data: every name with a short plain description of what is drawn. */
export const spotIllustrations: { name: IllustrationName; label: string }[] = [
  { name: "empty-chat", label: "Two empty speech bubbles" },
  { name: "no-results", label: "A magnifier over a sheet of lines" },
  { name: "error", label: "A sheet with an exclamation badge" },
  { name: "permission", label: "A closed lock" },
  { name: "offline", label: "A plug apart from its socket" },
  { name: "rate-limit", label: "An hourglass" },
  { name: "success", label: "A sheet with a check badge" },
  { name: "upload", label: "A tray with a sheet and an up arrow" },
  { name: "first-run", label: "A dotted path leading to a flag" },
];

export interface IllustrationProps {
  /** Which spot illustration to draw. */
  name: IllustrationName;
  /** Rendered size in px. Stroke weight follows it: 64 is 1.5px, 96 is 2px, 160 is 2.5px. */
  size?: IllustrationSize;
  /** Accessible name. Leave it out for decorative art, which is hidden from assistive tech. */
  title?: string;
  className?: string;
}

const strokeFor: Record<IllustrationSize, number> = { 64: 1.5, 96: 2, 160: 2.5 };

/* Art is drawn on a 160 unit grid. Ink is stroke-fg, paper is fill-surface, sand is fill-sunken,
   and each piece uses at most one lime fill. No detail is smaller than 4 units. */
const art: Record<IllustrationName, ReactNode> = {
  "empty-chat": (
    <>
      <path className="fill-sunken" d="M36 30H86a12 12 0 0 1 12 12V68a12 12 0 0 1-12 12H52L40 92V80H36a12 12 0 0 1-12-12V42a12 12 0 0 1 12-12Z" />
      <path className="fill-surface" d="M70 62H124a12 12 0 0 1 12 12V104a12 12 0 0 1-12 12H116V132L100 116H70a12 12 0 0 1-12-12V74a12 12 0 0 1 12-12Z" />
      <path d="M74 78H120M74 90H106" />
      <rect className="fill-lime" x="74" y="99" width="18" height="6" rx="3" />
    </>
  ),
  "no-results": (
    <>
      <rect className="fill-surface" x="30" y="26" width="64" height="86" rx="8" />
      <path d="M44 46H80M44 58H80M44 70H64" />
      <circle className="fill-sunken" cx="94" cy="90" r="26" />
      <path d="M82 84a14 14 0 0 1 10-10" />
      <rect className="fill-lime" x="0" y="0" width="28" height="10" rx="5" transform="translate(113 109) rotate(45)" />
    </>
  ),
  error: (
    <>
      <path className="fill-surface" d="M42 24H98L120 46V132H42Z" />
      <path d="M98 24V46H120M56 62H90M56 74H80M56 86H70" />
      <circle className="fill-lime" cx="110" cy="112" r="20" />
      <path d="M110 102V114M110 121V122" />
    </>
  ),
  permission: (
    <>
      <path d="M58 70V52a22 22 0 0 1 44 0V70" />
      <rect className="fill-surface" x="42" y="70" width="76" height="60" rx="12" />
      <circle className="fill-lime" cx="80" cy="97" r="8" />
      <path d="M80 105V115" />
    </>
  ),
  offline: (
    <>
      <path d="M22 82C8 82 8 108 28 120" />
      <rect className="fill-lime" x="22" y="64" width="42" height="36" rx="10" />
      <rect className="fill-sunken" x="64" y="70" width="14" height="6" rx="3" />
      <rect className="fill-sunken" x="64" y="88" width="14" height="6" rx="3" />
      <rect className="fill-surface" x="104" y="56" width="40" height="52" rx="10" />
      <path d="M114 72H126M114 92H126" />
      <path d="M12 134H148" />
    </>
  ),
  "rate-limit": (
    <>
      <path className="fill-surface" d="M52 32V46C52 64 80 66 80 80C80 94 52 96 52 114V128H108V114C108 96 80 94 80 80C80 66 108 64 108 46V32Z" />
      <path className="fill-sunken" d="M64 46H96C96 54 88 58 80 62C72 58 64 54 64 46Z" />
      <path className="fill-lime" d="M64 122H96C96 112 88 106 80 102C72 106 64 112 64 122Z" />
      <rect className="fill-surface" x="42" y="22" width="76" height="10" rx="5" />
      <rect className="fill-surface" x="42" y="128" width="76" height="10" rx="5" />
    </>
  ),
  success: (
    <>
      <rect className="fill-surface" x="36" y="26" width="64" height="88" rx="8" />
      <path d="M50 46H86M50 58H86M50 70H72" />
      <circle className="fill-lime" cx="104" cy="104" r="28" />
      <path d="M92 104L101 113L117 93" />
    </>
  ),
  upload: (
    <>
      <rect className="fill-surface" x="48" y="26" width="64" height="80" rx="8" />
      <rect className="fill-lime" x="62" y="38" width="36" height="6" rx="3" />
      <path d="M80 82V56M68 66L80 54L92 66" />
      <path className="fill-sunken" d="M22 98H52L58 110H102L108 98H138V122A10 10 0 0 1 128 132H32A10 10 0 0 1 22 122Z" />
    </>
  ),
  "first-run": (
    <>
      <path d="M26 122C54 122 50 98 76 102C96 105 98 118 112 106" strokeDasharray="0.1 10" />
      <circle className="fill-surface" cx="26" cy="122" r="6" />
      <ellipse className="fill-sunken" cx="116" cy="108" rx="20" ry="5" />
      <path d="M116 28V108" />
      <path className="fill-lime" d="M116 28H146L134 42L146 56H116Z" />
    </>
  ),
};

/**
 * Spot illustration for empty, error and success states. One concept, monochrome ink on paper,
 * at most one lime accent, drawn only with theme tokens so it follows light and dark mode.
 * Decorative by default. Pass `title` when the art carries meaning that the page text does not.
 */
export function Illustration({ name, size = 96, title, className }: IllustrationProps) {
  const units = (strokeFor[size] * 160) / size;
  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g className="fill-none stroke-fg" strokeWidth={units} strokeLinecap="round" strokeLinejoin="round">{art[name]}</g>
    </svg>
  );
}
```

## tattva/atoms/KeyHint.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

/** Keyboard hint pill such as Tab or Esc. Pair it with the action it triggers, and keep the action reachable without the key. */
export function KeyHint({ children, className }: { children: ReactNode; className?: string }) {
  return <kbd className={cn("inline-flex h-5 min-w-5 items-center justify-center rounded-md border border-line-strong bg-surface px-1.5 font-mono text-nano text-fg-muted", className)}>{children}</kbd>;
}
```

## tattva/atoms/MeterBar.tsx

```tsx
import { cn } from "../lib/cn";

export interface MeterBarProps {
  value: number;
  max?: number;
  /** Accessible name, e.g. "Context used". */
  label: string;
  /** Switch to the attention color at or above this fraction of max (0 to 1). Use only when the person should act. */
  warnAt?: number;
  /** Text read out with the value, e.g. "68% of context". */
  valueText?: string;
  className?: string;
}

/** Thin progress bar exposed as a meter. Ink by default, amber past the warn threshold. */
export function MeterBar({ value, max = 100, label, warnAt, valueText, className }: MeterBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const warn = warnAt !== undefined && value / max >= warnAt;
  return (
    <div role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} aria-valuetext={valueText}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-line", className)}>
      <div className={cn("h-full origin-left animate-grow-x rounded-full transition-[width] duration-[var(--dur-base)]", warn ? "bg-attention" : "bg-fg")} style={{ width: `${pct}%` }} />
    </div>
  );
}
```

## tattva/atoms/MicButton.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent, PointerEvent } from "react";
import { cn } from "../lib/cn";
import { LockIcon, MicIcon, MicOffIcon, StopIcon } from "../lib/icons";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { AttentionDot } from "./AttentionDot";
import { Spinner } from "./Spinner";

export type MicState = "idle" | "requesting" | "recording" | "locked" | "processing" | "blocked" | "unavailable";

export interface MicButtonProps {
  /** Where the mic is. The app owns it: set it from the real permission, recorder and transcriber. */
  state: MicState;
  /** tap: press once to start and once to stop. hold: hold to talk, slide up to lock, slide away to cancel. */
  mode?: "tap" | "hold";
  /** Input level from 0 to 1, read from the mic. Drives the three bars while recording. */
  level?: number;
  /** The person asked to start. Ask for the mic, then set state to requesting, recording or blocked. */
  onStart: () => void;
  /** The person asked to stop. Keep what was said and move to processing or idle. */
  onStop: () => void;
  /** The person slid away and let go (hold), or pressed Cancel while locked. Throw the recording away. */
  onCancel?: () => void;
  /** The person slid up while holding (hold mode only). Set state to locked; recording carries on hands-free. */
  onLock?: () => void;
  /** Pressed while blocked. Open the steps for turning the mic back on. */
  onHelp?: () => void;
  /** What the button does when idle, such as "Dictate" or "Start voice". */
  label?: string;
  /** Show the label next to the button when idle. Other states always show their word. */
  showLabel?: boolean;
  /** md is 44px, lg is 56px (the main control on a voice screen). */
  size?: "md" | "lg";
  /** A short buzz on start and stop where the device supports it. */
  haptics?: boolean;
  className?: string;
}

/** How far up (px) a held press must slide to lock. */
const LOCK_AT = 56;
/** How far outside the button (px) a held press must slide to arm cancel. */
const CANCEL_AT = 32;

const stateWord: Record<Exclude<MicState, "idle">, string> = {
  requesting: "Allow the mic to start",
  recording: "Recording",
  locked: "Recording, locked",
  processing: "Writing it down",
  blocked: "Mic blocked",
  unavailable: "No mic found",
};

const buzz = (on: boolean) => { if (on && typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(12); };

/** Three bars that follow the input level. Heights ease over --dur-fast, which smooths the raw level. Neutral, never lime: it is the person's voice. */
function Bars({ level }: { level: number }) {
  const l = Math.max(0, Math.min(1, level));
  return (
    <span aria-hidden className="flex h-4 items-center gap-0.5">
      {[0.65, 1, 0.8].map((w, i) => (
        <span key={i} style={{ height: `calc(var(--spacing) * ${1 + Math.round(l * w * 30) / 10})` }}
          className="w-1 rounded-full bg-current transition-[height] duration-(--dur-fast) ease-(--ease-out)" />
      ))}
    </span>
  );
}

/**
 * The one mic control for dictation and for starting voice. It shows every mic state in words beside the button:
 * waiting for permission, recording, locked, writing it down, blocked and no mic. In hold mode the person holds to
 * talk, slides up to lock and slides away to cancel; keyboard people hold Space, or press Enter to start and stop.
 */
export function MicButton({
  state, mode = "tap", level = 0, onStart, onStop, onCancel, onLock, onHelp,
  label = "Dictate", showLabel = false, size = "md", haptics = true, className,
}: MicButtonProps) {
  const reduced = useReducedMotion();
  const hintId = useId();
  const live = state === "recording" || state === "locked";
  const busy = state === "requesting" || state === "processing";
  const inert = busy || state === "unavailable";

  // A held press in progress (pointer or Space), and whether letting go now cancels.
  const [holding, setHolding] = useState(false);
  const [cancelArmed, setCancelArmed] = useState(false);
  const origin = useRef<{ x: number; y: number } | null>(null);
  // The click that follows the end of a held press must not toggle again.
  const pressed = useRef(false);
  const skipClick = useRef(false);
  const swallowNextClick = () => { skipClick.current = true; window.setTimeout(() => { skipClick.current = false; }, 0); };

  // The host left recording while a hold was in progress (an error, a lock): forget the hold.
  if (holding && state !== "idle" && state !== "recording" && state !== "requesting") { setHolding(false); setCancelArmed(false); }

  // Announce only "Recording" and "Stopped", once each, in a polite region that is always in the page.
  const [said, setSaid] = useState("");
  const wasLive = useRef(live);
  useEffect(() => {
    if (live && !wasLive.current) setSaid("Recording");
    else if (!live && wasLive.current) setSaid("Stopped");
    wasLive.current = live;
  }, [live]);

  const start = () => { buzz(haptics); onStart(); };
  const stop = () => { buzz(haptics); onStop(); };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (skipClick.current) { skipClick.current = false; return; }
    if (state === "blocked") { onHelp?.(); return; }
    if (inert) return;
    // Tap mode, a locked hold, or Enter on a hold button (detail 0 is a keyboard click): start and stop like a toggle.
    if (mode === "tap" || state === "locked" || e.detail === 0) {
      if (live) stop(); else if (state === "idle") start();
    }
  };

  const endHold = (cancel: boolean) => {
    origin.current = null;
    setHolding(false);
    setCancelArmed(false);
    if (cancel && onCancel) { buzz(haptics); onCancel(); } else stop();
  };

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    if (mode !== "hold" || state !== "idle" || e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    origin.current = { x: e.clientX, y: e.clientY };
    pressed.current = true;
    setHolding(true);
    start();
  };
  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (!holding || !origin.current) return;
    const dy = e.clientY - origin.current.y;
    if (onLock && dy < -LOCK_AT) { origin.current = null; setHolding(false); setCancelArmed(false); onLock(); return; }
    const r = e.currentTarget.getBoundingClientRect();
    const out = e.clientX < r.left - CANCEL_AT || e.clientX > r.right + CANCEL_AT || e.clientY > r.bottom + CANCEL_AT;
    setCancelArmed(out && !!onCancel);
  };
  const onPointerUp = () => {
    if (!pressed.current) return;
    pressed.current = false;
    swallowNextClick();
    if (holding && origin.current) endHold(cancelArmed);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (mode !== "hold" || e.key !== " ") return;
    e.preventDefault();
    if (e.repeat || state !== "idle") return;
    pressed.current = true;
    origin.current = { x: 0, y: 0 };
    setHolding(true);
    start();
  };
  const onKeyUp = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (mode !== "hold" || e.key !== " ") return;
    e.preventDefault();
    if (!pressed.current) return;
    pressed.current = false;
    swallowNextClick();
    if (holding) endHold(false);
  };

  const name =
    live ? "Stop recording"
    : state === "requesting" ? "Waiting for mic permission"
    : state === "processing" ? "Writing it down"
    : state === "blocked" ? "Mic blocked. Show how to turn it on"
    : state === "unavailable" ? "No mic found"
    : label;

  const word =
    holding && cancelArmed ? "Let go to cancel"
    : state === "idle" ? (showLabel ? label : "")
    : stateWord[state];
  const hint = holding && !cancelArmed ? [onLock && "Slide up to lock", onCancel && "slide away to cancel"].filter(Boolean).join(", ") : "";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <button
        type="button"
        aria-label={name}
        aria-pressed={live}
        aria-disabled={inert || undefined}
        aria-describedby={mode === "hold" && state === "idle" ? hintId : undefined}
        onClick={onClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pressed.current = false; if (holding) endHold(false); }}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onContextMenu={mode === "hold" ? (e) => e.preventDefault() : undefined}
        className={cn(
          "relative inline-flex shrink-0 select-none items-center justify-center rounded-full",
          "transition-[color,background-color,border-color,scale] duration-(--dur-fast) ease-(--ease-out)",
          "motion-safe:active:scale-96 motion-safe:active:duration-(--dur-instant)",
          mode === "hold" && "touch-none [-webkit-touch-callout:none]",
          size === "lg" ? "size-14" : "size-11",
          live
            ? cancelArmed ? "border border-line-strong bg-sunken text-fg-muted" : "bg-accent text-on-accent hover:bg-accent-hover"
            : "border border-line bg-surface text-fg hover:border-line-strong hover:bg-hover",
          inert ? "cursor-default text-fg-muted motion-safe:active:scale-100 hover:border-line hover:bg-surface" : "cursor-pointer",
          state === "unavailable" && "opacity-60",
        )}
      >
        {live && !reduced && !cancelArmed && state === "recording" && <Bars level={level} />}
        {live && (reduced || cancelArmed) && state === "recording" && <StopIcon width={size === "lg" ? 20 : 16} height={size === "lg" ? 20 : 16} />}
        {state === "locked" && <StopIcon width={size === "lg" ? 20 : 16} height={size === "lg" ? 20 : 16} />}
        {state === "processing" && <span aria-hidden className="motion-reduce:[&_svg]:animate-none"><Spinner size={size === "lg" ? 20 : 16} label="" /></span>}
        {(state === "idle" || state === "requesting") && <MicIcon width={size === "lg" ? 22 : 18} height={size === "lg" ? 22 : 18} />}
        {(state === "blocked" || state === "unavailable") && <MicOffIcon width={size === "lg" ? 22 : 18} height={size === "lg" ? 22 : 18} />}
        {state === "blocked" && (
          <span aria-hidden className="absolute right-1 top-1 flex rounded-full bg-surface p-0.5"><AttentionDot /></span>
        )}
        {state === "requesting" && (
          <span aria-hidden className="absolute inset-0 rounded-full border-2 border-transparent border-t-fg-subtle motion-safe:animate-spin" />
        )}
      </button>

      {(word || hint) && (
        <span className="flex min-w-0 flex-col leading-tight">
          {word && (
            <span className={cn("inline-flex items-center gap-1.5 text-small font-medium", state === "idle" ? "text-fg-muted" : "text-fg")}>
              {live && !cancelArmed && <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-danger" />}
              {state === "locked" && <LockIcon aria-hidden width={12} height={12} />}
              {word}
            </span>
          )}
          {hint && <span className="text-micro text-fg-muted">{hint}</span>}
        </span>
      )}

      {state === "locked" && onCancel && (
        <button type="button" onClick={() => { buzz(haptics); onCancel(); }}
          className="tap inline-flex h-8 cursor-pointer items-center rounded-control px-3 text-small font-medium text-fg-muted hover:bg-hover hover:text-fg">
          Cancel
        </button>
      )}

      {mode === "hold" && <span id={hintId} hidden>Hold to record and let go to finish. Or press Enter to start and Enter again to stop.</span>}
      <span role="status" className="sr-only">{said}</span>
    </span>
  );
}
```

## tattva/atoms/Money.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface MoneyProps {
  value: number;
  /** ISO 4217 code. */
  currency?: string;
  locale?: string;
  /** Short form. INR uses lakh and crore (1.2 L, 3.4 Cr). Other currencies use K, M and so on. */
  compact?: boolean;
  /** Prefix + for a positive number. A negative number always shows the true minus sign. */
  showSign?: boolean;
  /** Adds an arrow and the up or down colour for a number that is not zero. The sign is always shown with it. */
  direction?: boolean;
  /** Marks the number as worked out by code. Pass a string to replace the default screen reader phrase. */
  calculated?: boolean | string;
  className?: string;
}

const MONO = "font-mono tabular-nums";

export interface MonoProps {
  children: ReactNode;
  className?: string;
}

/** Mono text with tabular figures, for a date or id that code worked out. */
export function Mono({ children, className }: MonoProps) {
  return <span className={cn(MONO, className)}>{children}</span>;
}

function format(value: number, currency: string, locale: string, compact: boolean): string {
  const abs = Math.abs(value);
  const full = new Intl.NumberFormat(locale, { style: "currency", currency, minimumFractionDigits: Number.isInteger(abs) ? 0 : 2, maximumFractionDigits: 2 });
  if (!compact) return full.format(abs);
  if (currency === "INR") {
    const symbol = full.formatToParts(0).find((p) => p.type === "currency")?.value ?? "₹";
    const one = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
    if (abs >= 1e7) return `${symbol}${one.format(abs / 1e7)} Cr`;
    if (abs >= 1e5) return `${symbol}${one.format(abs / 1e5)} L`;
    return full.format(abs);
  }
  return new Intl.NumberFormat(locale, { style: "currency", currency, notation: "compact", maximumFractionDigits: 1 }).format(abs);
}

/** An amount that code calculated, in mono with tabular figures, so it reads as worked out and not guessed. */
export function Money({ value, currency = "INR", locale = "en-IN", compact = false, showSign = false, direction = false, calculated, className }: MoneyProps) {
  const noteId = useId();
  if (!Number.isFinite(value)) return <span className={cn(MONO, className)}>{"—"}</span>;
  const dir = direction && value !== 0 ? (value > 0 ? "up" : "down") : null;
  const sign = value < 0 ? "−" : (showSign || dir) && value > 0 ? "+" : "";
  let text: string;
  try { text = format(value, currency, locale, compact); } catch { text = `${Math.abs(value)} ${currency}`; }
  const note = calculated ? (typeof calculated === "string" ? calculated : "Calculated by code") : null;
  return (
    <span aria-describedby={note ? noteId : undefined}
      className={cn(MONO, dir === "up" && "text-up-fg", dir === "down" && "text-down-fg", note && "underline decoration-fg-subtle decoration-dotted underline-offset-4", className)}>
      {dir && <span className="sr-only">{dir === "up" ? "Up " : "Down "}</span>}
      {dir && <span aria-hidden className="mr-1 inline-block text-[0.7em] align-[0.1em]">{dir === "up" ? "▲" : "▼"}</span>}
      {sign}{text}
      {note && <span id={noteId} className="sr-only">. {note}</span>}
    </span>
  );
}
```

## tattva/atoms/NumberField.tsx

```tsx
import { useState } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { PlusIcon } from "../lib/icons";

export interface NumberFieldProps {
  value: number | null;
  onChange: (value: number | null) => void;
  /** Accessible name. The buttons are named from it too. */
  label: string;
  min?: number;
  max?: number;
  /** Amount for the buttons and Arrow keys. */
  step?: number;
  /** Decimals shown and kept. Defaults to the decimals in step. */
  precision?: number;
  /** Text after the number, such as "lots". */
  unit?: string;
  invalid?: boolean;
  disabled?: boolean;
  /** md is 40px tall, sm is 32px. Both are 44px on coarse pointers. */
  size?: "sm" | "md";
  id?: string;
  "aria-describedby"?: string;
  /** Also marks the field invalid. Field passes this when it has an error. */
  "aria-invalid"?: boolean;
  required?: boolean;
  className?: string;
}

const decimals = (n: number) => (String(n).split(".")[1] ?? "").length;

/** A number input with minus and plus buttons. Typing is free; the value is checked on blur and Enter. */
export function NumberField({ value, onChange, label, min, max, step = 1, precision, unit, invalid, disabled, size = "md", id, required, className, "aria-invalid": ariaInvalid, ...rest }: NumberFieldProps) {
  const bad = invalid || ariaInvalid;
  const places = precision ?? decimals(step);
  const [draft, setDraft] = useState<string | null>(null);
  const clamp = (n: number) => Number(Math.min(max ?? Infinity, Math.max(min ?? -Infinity, n)).toFixed(places));
  const parse = (t: string): number | null | undefined => {
    const s = t.trim().replace(/,/g, "");
    if (s === "") return null;
    const n = Number(s);
    return Number.isFinite(n) ? clamp(n) : undefined; // undefined: not a number, keep the old value
  };
  const commit = () => {
    if (draft === null) return;
    const next = parse(draft);
    setDraft(null);
    if (next !== undefined && next !== value) onChange(next);
  };
  const current = draft !== null ? (parse(draft) ?? value) : value;
  const move = (dir: 1 | -1, mult = 1) => {
    setDraft(null);
    const next = current == null ? clamp(min ?? 0) : clamp(current + dir * step * mult);
    if (next !== value) onChange(next);
  };
  const jump = (n: number) => { setDraft(null); if (n !== value) onChange(clamp(n)); };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const big = e.shiftKey ? 10 : 1;
    if (e.key === "ArrowUp") move(1, big);
    else if (e.key === "ArrowDown") move(-1, big);
    else if (e.key === "PageUp") move(1, 10);
    else if (e.key === "PageDown") move(-1, 10);
    else if (e.key === "Home" && min !== undefined) jump(min);
    else if (e.key === "End" && max !== undefined) jump(max);
    else if (e.key === "Enter") commit();
    else return;
    if (e.key !== "Enter") e.preventDefault();
  };
  const shown = draft ?? (value === null ? "" : value.toFixed(places));
  const atMin = current != null && min !== undefined && current <= min;
  const atMax = current != null && max !== undefined && current >= max;
  const btn = cn(
    "flex shrink-0 cursor-pointer items-center justify-center self-stretch rounded-lg px-2 text-fg-muted transition-colors duration-[var(--dur-fast)] hover:bg-hover hover:text-fg",
    "disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent pointer-coarse:min-w-11",
  );
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-field border px-1 text-body leading-5 text-fg transition-colors duration-[var(--dur-fast)]",
      size === "sm" ? "min-h-8" : "min-h-10", "pointer-coarse:min-h-11",
      "has-[input:focus-visible]:outline-(length:--focus-width) has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[color:var(--focus-ring)]",
      bad ? "border-danger" : "border-line hover:border-line-strong",
      disabled ? "cursor-not-allowed border-disabled-line bg-disabled text-disabled-fg [&_input]:text-disabled-fg" : "bg-surface",
      className,
    )}>
      <button type="button" tabIndex={-1} aria-label={`Decrease ${label}`} disabled={disabled || atMin} onClick={() => move(-1)} className={btn}>
        <svg aria-hidden viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><path d="M5 12h14" /></svg>
      </button>
      <input {...rest} id={id} type="text" inputMode={min !== undefined && min >= 0 ? "decimal" : "text"} role="spinbutton" autoComplete="off" aria-label={label}
        aria-valuenow={current ?? undefined} aria-valuemin={min} aria-valuemax={max}
        aria-valuetext={current == null ? undefined : `${current.toFixed(places)}${unit ? ` ${unit}` : ""}`}
        aria-invalid={bad || undefined} required={required} disabled={disabled} value={shown}
        onChange={(e) => setDraft(e.target.value)} onBlur={commit} onKeyDown={onKeyDown}
        className="w-16 min-w-0 flex-1 bg-transparent py-1 text-center tabular-nums outline-none focus-visible:outline-none disabled:cursor-not-allowed" />
      {unit && <span className="shrink-0 text-fg-muted">{unit}</span>}
      <button type="button" tabIndex={-1} aria-label={`Increase ${label}`} disabled={disabled || atMax} onClick={() => move(1)} className={btn}>
        <PlusIcon />
      </button>
    </span>
  );
}
```

## tattva/atoms/Pictogram.tsx

```tsx
import type { ReactNode } from "react";

export type PictogramName =
  | "chat" | "agent" | "document" | "image" | "code" | "data"
  | "search" | "shield" | "memory" | "voice" | "plan" | "tools";

export type PictogramSize = 32 | 48 | 64;

/** Gallery data: every pictogram name. */
export const pictogramNames: PictogramName[] = [
  "chat", "agent", "document", "image", "code", "data", "search", "shield", "memory", "voice", "plan", "tools",
];

export interface PictogramProps {
  name: PictogramName;
  /** Rendered size in px. */
  size?: PictogramSize;
  /** Accessible name. Leave it out for decorative use. */
  title?: string;
  className?: string;
}

/**
 * Drawn on a 32 x 32 grid with 1px of padding, so art stays inside 30 x 30.
 * Every shape is a stroke, never a filled outline. Color is currentColor.
 */
const art: Record<PictogramName, ReactNode> = {
  chat: <><path d="M5 5H27a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H15L9 28V22H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /><path d="M9 11H23M9 16H18" /></>,
  agent: <><circle cx="8" cy="8" r="4" /><rect x="20" y="20" width="8" height="8" rx="2" /><path d="M12 8H20a4 4 0 0 1 4 4V20" /></>,
  document: <><path d="M7 3H19L25 9V29H7Z" /><path d="M19 3V9H25M11 16H21M11 21H21M11 26H16" /></>,
  image: <><rect x="3" y="5" width="26" height="22" rx="3" /><circle cx="11" cy="12" r="3" /><path d="M3 23L11 17L17 22L22 18L29 24" /></>,
  code: <><path d="M10 9L3 16L10 23M22 9L29 16L22 23M18 6L14 26" /></>,
  data: <><path d="M3 28H29" /><rect x="5" y="16" width="5" height="12" rx="1" /><rect x="13" y="9" width="5" height="19" rx="1" /><rect x="21" y="4" width="5" height="24" rx="1" /></>,
  search: <><circle cx="14" cy="14" r="10" /><path d="M21 21L29 29" /></>,
  shield: <><path d="M16 3L27 7V15C27 22 22 27 16 29C10 27 5 22 5 15V7Z" /><path d="M11 16L15 20L22 12" /></>,
  memory: <><path d="M3 10L16 4L29 10L16 16Z" /><path d="M3 16L16 22L29 16M3 22L16 28L29 22" /></>,
  voice: <><rect x="11" y="3" width="10" height="16" rx="5" /><path d="M6 15a10 10 0 0 0 20 0M16 25V29M11 29H21" /></>,
  plan: <><path d="M4 8L7 11L12 5M4 17L7 20L12 14" /><path d="M17 8H28M17 17H28M17 26H25" /><circle cx="8" cy="26" r="3" /></>,
  tools: <><path d="M20 4a7 7 0 0 0-6 10L4 24a2.8 2.8 0 0 0 4 4L18 18a7 7 0 0 0 10-6L23 17L19 16L18 12L23 8Z" /></>,
};

/**
 * Single-color pictogram for headings, feature lists and small empty areas. It is a stroke drawing on a 32 grid
 * and takes its color from the surrounding text color.
 *
 * Stroke rule: the stroke is 1.5 units in the 32 unit artwork and scales with the artwork, so it renders
 * 1.5px at 32, 2.25px at 48 and 3px at 64. Proportions stay the same at every size.
 * Decorative by default. Pass `title` to give it an accessible name.
 */
export function Pictogram({ name, size = 32, title, className }: PictogramProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {art[name]}
    </svg>
  );
}
```

## tattva/atoms/Popover.tsx

```tsx
import { createPortal } from "react-dom";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { usePresence } from "../hooks/usePresence";

export interface PopoverTriggerApi {
  open: boolean;
  toggle: () => void;
  /** Spread onto the trigger element: aria-expanded, aria-haspopup, aria-controls. */
  triggerProps: { "aria-expanded": boolean; "aria-haspopup": "dialog" | "menu" | "listbox"; "aria-controls": string };
}

export interface PopoverProps {
  trigger: (api: PopoverTriggerApi) => ReactNode;
  /** Panel content. A function receives `close` so items can dismiss the panel. */
  children: ReactNode | ((api: { close: () => void }) => ReactNode);
  /** Accessible name for the panel. */
  label: string;
  align?: "start" | "end";
  side?: "bottom" | "top";
  role?: "dialog" | "menu" | "listbox";
  /** Controlled mode. Omit both to let the popover manage itself. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Move focus into the panel when it opens. Set false when the opener manages focus itself. */
  autoFocus?: boolean;
  /** Open on the opposite side when the preferred side would overflow the viewport, and keep the panel inside the viewport edges. */
  flip?: boolean;
  /** Draw the panel on the page itself (fixed position, outside the parent) so a scrolling or clipped parent can never cut it off. Use it for menus inside lists. */
  portal?: boolean;
  /** On a phone (narrow touch screen) draw the panel as a bottom sheet with a backdrop, within thumb reach. On by default for menus. */
  phoneSheet?: boolean;
  className?: string;
  panelClassName?: string;
}

const PHONE = "(max-width: 639px) and (pointer: coarse)";
function usePhone(on: boolean) {
  const [phone, setPhone] = useState(() => on && typeof window !== "undefined" && window.matchMedia(PHONE).matches);
  useEffect(() => {
    if (!on) { setPhone(false); return; }
    const m = window.matchMedia(PHONE);
    const f = () => setPhone(m.matches);
    f(); m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, [on]);
  return phone;
}

const GAP = 8;
const EDGE = 8;
const ITEM = '[role="menuitem"],[role="menuitemcheckbox"],[role="menuitemradio"],[role="option"]';
const CHECKED = '[role="menuitemradio"][aria-checked="true"],[role="option"][aria-selected="true"],[role="radio"][aria-checked="true"]';
const FOCUSABLE = 'a[href],button,input,select,textarea,summary,[contenteditable="true"],[tabindex]';

/**
 * Anchored panel for menus, pickers and explainers. Focus moves into the panel on open and returns to the
 * trigger on close. Menu and listbox panels add arrow-key movement, Home, End and Tab-to-leave. Placement
 * starts from CSS, then flips to the opposite side and clamps to the viewport edges when the panel would overflow.
 */
export function Popover({
  trigger, children, label, align = "start", side = "bottom", role = "dialog", open: controlled, onOpenChange,
  autoFocus = true, flip = true, portal = false, phoneSheet, className, panelClassName,
}: PopoverProps) {
  const [inner, setInner] = useState(false);
  const open = controlled ?? inner;
  const sheet = usePhone(phoneSheet ?? role === "menu");
  // Closing is a quick plain fade; the panel cannot be pressed while it goes.
  const { present, leaving } = usePresence(open);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();
  const [place, setPlace] = useState({ flipped: false, dx: 0 });
  const [fixed, setFixed] = useState<{ top: number; left: number } | null>(null);
  const skipRestore = useRef(false);
  const wasOpen = useRef(false);
  const mounted = useRef(false);
  const set = (v: boolean) => { if (controlled === undefined) setInner(v); onOpenChange?.(v); };

  const triggerEl = useCallback(
    () => root.current?.querySelector<HTMLElement>(`[aria-controls="${CSS.escape(id)}"]`) ?? root.current?.querySelector<HTMLElement>("[aria-haspopup]") ?? null,
    [id],
  );
  const items = () => Array.from(panel.current?.querySelectorAll<HTMLElement>(ITEM) ?? []).filter((el) => !(el as HTMLButtonElement).disabled && el.getAttribute("aria-disabled") !== "true");

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!root.current || !t || root.current.contains(t) || panel.current?.contains(t)) return;
      // A click on another focusable element keeps focus there. A click on empty space returns focus to the trigger.
      if (t.closest?.(FOCUSABLE)) skipRestore.current = true;
      set(false);
    };
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === "Escape") set(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Placement: measure after mount, flip if the preferred side overflows, clamp horizontally.
  useLayoutEffect(() => {
    // Keep the last fixed spot while the panel fades out; it is measured again on the next open.
    if (!open) { setPlace((p) => (p.flipped || p.dx ? { flipped: false, dx: 0 } : p)); return; }
    if (sheet) return;
    if (portal) {
      // Fixed placement from the trigger's box, kept in step while the page scrolls or resizes.
      const place = () => {
        const p = panel.current; const r = root.current;
        if (!p || !r) return;
        const rect = r.getBoundingClientRect();
        const w = p.offsetWidth; const h = p.offsetHeight;
        const vw = document.documentElement.clientWidth; const vh = window.innerHeight;
        const below = vh - rect.bottom - GAP; const above = rect.top - GAP;
        const wantBelow = side === "bottom" ? !(below < h + GAP && above > below) : (above < h + GAP && below > above);
        const top = wantBelow ? rect.bottom + GAP : Math.max(EDGE, rect.top - GAP - h);
        const natural = align === "end" ? rect.right - w : rect.left;
        const left = w > vw - EDGE * 2 ? EDGE : Math.min(Math.max(natural, EDGE), vw - EDGE - w);
        setFixed((prev) => (prev && prev.top === Math.round(top) && prev.left === Math.round(left) ? prev : { top: Math.round(top), left: Math.round(left) }));
      };
      place();
      window.addEventListener("resize", place); window.addEventListener("scroll", place, true);
      return () => { window.removeEventListener("resize", place); window.removeEventListener("scroll", place, true); };
    }
    if (!flip) return;
    const measure = () => {
      const p = panel.current; const r = root.current;
      if (!p || !r) return;
      const rect = r.getBoundingClientRect();
      const w = p.offsetWidth; const h = p.offsetHeight;
      const vw = document.documentElement.clientWidth; const vh = window.innerHeight;
      const below = vh - rect.bottom - GAP; const above = rect.top - GAP;
      const room = side === "bottom" ? below : above;
      const other = side === "bottom" ? above : below;
      const flipped = room < h + GAP && other > room;
      const natural = align === "end" ? rect.right - w : rect.left;
      const clamped = w > vw - EDGE * 2 ? EDGE : Math.min(Math.max(natural, EDGE), vw - EDGE - w);
      const dx = Math.round(clamped - natural);
      setPlace((prev) => (prev.flipped === flipped && prev.dx === dx ? prev : { flipped, dx }));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open, flip, side, align, portal, sheet]);

  // A panel drawn on the page (portal) stays hidden until it has been placed, and a hidden element cannot take focus,
  // so focusing waits for the placement.
  const placed = !portal || sheet || !!fixed;
  const pendingFocus = useRef(false);
  // Focus in on open, back to the trigger on close.
  useEffect(() => {
    const first = !mounted.current;
    mounted.current = true;
    if (open) {
      if (!wasOpen.current) pendingFocus.current = autoFocus && !first;
      wasOpen.current = true;
      if (!pendingFocus.current || !placed) return;
      pendingFocus.current = false;
      const p = panel.current;
      if (!p) return;
      let target: HTMLElement | null | undefined;
      if (role === "dialog") {
        target = Array.from(p.querySelectorAll<HTMLElement>(FOCUSABLE)).find((el) => el.tabIndex >= 0 && !(el as HTMLButtonElement).disabled && el.getAttribute("aria-disabled") !== "true");
      } else {
        target = p.querySelector<HTMLElement>(CHECKED) ?? items()[0];
        if (target && ((target as HTMLButtonElement).disabled || target.getAttribute("aria-disabled") === "true")) target = items()[0];
      }
      (target ?? p).focus();
      return;
    }
    pendingFocus.current = false;
    if (!wasOpen.current) return;
    wasOpen.current = false;
    if (skipRestore.current) { skipRestore.current = false; return; }
    const a = document.activeElement;
    if (!a || a === document.body || root.current?.contains(a) || panel.current?.contains(a)) triggerEl()?.focus();
  }, [open, autoFocus, role, triggerEl, placed]);

  const onPanelKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (role === "dialog" || e.defaultPrevented) return;
    if (e.key === "Tab") {
      // Standard menu behavior: leave the menu and let focus continue from the trigger.
      skipRestore.current = true;
      triggerEl()?.focus();
      set(false);
      return;
    }
    const list = items();
    if (!list.length) return;
    const i = list.findIndex((el) => el === document.activeElement || el.contains(document.activeElement));
    let next = -1;
    if (e.key === "ArrowDown") next = i < 0 ? 0 : (i + 1) % list.length;
    else if (e.key === "ArrowUp") next = i < 0 ? list.length - 1 : (i - 1 + list.length) % list.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = list.length - 1;
    else return;
    e.preventDefault();
    list[next].focus();
  };

  const eff = place.flipped ? (side === "bottom" ? "top" : "bottom") : side;
  const style = place.dx ? (align === "end" ? { right: -place.dx } : { left: place.dx }) : undefined;

  const panelEl = present && (
    <div id={id} ref={panel} role={role} aria-label={label} tabIndex={-1} onKeyDown={onPanelKey}
      style={sheet ? undefined : portal ? { position: "fixed", top: fixed?.top ?? 0, left: fixed?.left ?? 0, visibility: fixed ? "visible" : "hidden" } : style}
      className={cn(sheet
        ? "fixed inset-x-0 bottom-0 z-(--z-menu) max-h-[80dvh] overflow-y-auto overscroll-contain rounded-t-overlay border border-b-0 border-line bg-raised p-2 pb-[max(0.5rem,var(--safe-bottom))] shadow-lg outline-none motion-safe:animate-sheet"
        : cn("min-w-56 rounded-overlay border border-line bg-raised p-1.5 shadow-lg outline-none animate-rise",
          portal ? "z-(--z-menu)" : cn("z-30 absolute", eff === "bottom" ? "top-full mt-2" : "bottom-full mb-2", align === "end" ? "right-0" : "left-0"), panelClassName), leaving && "pointer-events-none motion-safe:animate-fade-out!")}>
      {sheet && <span aria-hidden className="mx-auto mt-0.5 mb-1.5 block h-1 w-10 rounded-full bg-line-strong forced-colors:bg-[CanvasText]" />}
      {typeof children === "function" ? children({ close: () => set(false) }) : children}
    </div>
  );
  return (
    <div ref={root} className={cn("relative inline-block", className)}>
      {trigger({ open, toggle: () => set(!open), triggerProps: { "aria-expanded": open, "aria-haspopup": role, "aria-controls": id } })}
      {sheet && panelEl
        ? createPortal(<><div aria-hidden className={cn("fixed inset-0 z-(--z-menu) bg-(--scrim)", leaving ? "motion-safe:animate-fade-out" : "motion-safe:animate-fade")} />{panelEl}</>, root.current?.closest("dialog") ?? document.body)
        : portal && panelEl ? createPortal(panelEl, root.current?.closest("dialog") ?? document.body) : panelEl}
    </div>
  );
}
```

## tattva/atoms/Price.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";

export interface PriceProps {
  value: number;
  /** ISO 4217 code. */
  currency?: string;
  locale?: string;
  decimals?: number;
  /** A small arrow before the number. It shows the direction of the last change and stays until the next change. */
  showDirection?: boolean;
  /** Tints the background briefly when the value changes. Only with motion allowed. */
  flash?: boolean;
  /** Announces the new value in a hidden polite live region, at most once every 5 seconds. */
  announce?: boolean;
  /** Accessible name, such as "Reliance price". Read before the number. */
  label?: string;
  className?: string;
}

type Dir = "up" | "down" | null;

const FLASH_MS = 600;
const ANNOUNCE_MS = 5000;

/** Formats a price. Falls back to a plain number when the currency or locale is not valid. */
export function formatPrice(value: number, currency: string, locale: string, decimals: number): string {
  if (!Number.isFinite(value)) return "—";
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency, minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
  } catch {
    return `${value.toFixed(decimals)} ${currency}`;
  }
}

/** A live number. It tints briefly and shows an arrow for the last change. The arrow is the cue, the tint is extra. */
export function Price({ value, currency = "INR", locale = "en-IN", decimals = 2, showDirection = true, flash = true, announce = false, label, className }: PriceProps) {
  const [prev, setPrev] = useState(value);
  const [dir, setDir] = useState<Dir>(null);
  const [flashing, setFlashing] = useState(false);
  const [tick, setTick] = useState(0);

  // Compare during render so the first paint of a new value already carries its direction.
  if (value !== prev) {
    setPrev(value);
    if (Number.isFinite(value) && Number.isFinite(prev) && value !== prev) {
      setDir(value > prev ? "up" : "down");
      setFlashing(true);
      setTick((t) => t + 1);
    }
  }

  useEffect(() => {
    if (!tick) return;
    const t = setTimeout(() => setFlashing(false), FLASH_MS);
    return () => clearTimeout(t);
  }, [tick]);

  const text = formatPrice(value, currency, locale, decimals);

  const [spoken, setSpoken] = useState("");
  const lastSpoken = useRef(0);
  useEffect(() => {
    if (!announce || !tick) return;
    const wait = Math.max(0, lastSpoken.current + ANNOUNCE_MS - Date.now());
    const t = setTimeout(() => { lastSpoken.current = Date.now(); setSpoken(text); }, wait);
    return () => clearTimeout(t);
  }, [announce, tick, text]);

  const arrow = showDirection && dir;
  return (
    <span className={cn(
      "inline-flex items-baseline gap-1 rounded-sm whitespace-nowrap font-mono tabular-nums transition-colors duration-[var(--dur-slow)]",
      flash && flashing && dir === "up" && "motion-safe:bg-up-soft",
      flash && flashing && dir === "down" && "motion-safe:bg-down-soft",
      className,
    )}>
      {label && <span className="sr-only">{label}: </span>}
      {arrow && (
        <svg aria-hidden viewBox="0 0 10 10" className={cn("size-[0.6em] shrink-0 self-center", arrow === "up" ? "text-up-fg" : "text-down-fg")} fill="currentColor">
          {arrow === "up" ? <path d="M5 1l4 7H1z" /> : <path d="M5 9L1 2h8z" />}
        </svg>
      )}
      {arrow && <span className="sr-only">{arrow === "up" ? "Up " : "Down "}</span>}
      <span>{text}</span>
      {announce && <span aria-live="polite" aria-atomic="true" className="sr-only">{spoken}</span>}
    </span>
  );
}
```

## tattva/atoms/PriceChange.tsx

```tsx
import { cn } from "../lib/cn";

export interface PriceChangeProps {
  /** The change as an absolute amount, such as 32.5. The sign sets the direction. */
  change: number;
  /** The change as a percent, such as 1.14. */
  percent?: number;
  currency?: string;
  locale?: string;
  decimals?: number;
  /** What to show: the amount and the percent, only the percent, or only the amount. */
  format?: "both" | "percent" | "amount";
  /** Shown instead of the numbers when both are zero. */
  flatLabel?: string;
  className?: string;
}

type Dir = "up" | "down" | "flat";

function direction(change: number, percent?: number): Dir {
  const n = change !== 0 && Number.isFinite(change) ? change : percent ?? 0;
  return n > 0 ? "up" : n < 0 ? "down" : "flat";
}

function num(abs: number, locale: string, decimals: number, style: "currency" | "percent" | "decimal", currency: string): string {
  try {
    if (style === "percent") return `${new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(abs)}%`;
    return new Intl.NumberFormat(locale, { style: "currency", currency, minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(abs);
  } catch {
    return abs.toFixed(decimals);
  }
}

/** A signed change with an arrow. Direction is shown by the arrow and the sign, never by colour alone. */
export function PriceChange({ change, percent, currency = "INR", locale = "en-IN", decimals = 2, format = "both", flatLabel, className }: PriceChangeProps) {
  const amountOk = Number.isFinite(change);
  const percentOk = percent !== undefined && Number.isFinite(percent);
  const wantAmount = format !== "percent";
  const wantPercent = format !== "amount";
  const usable = (wantAmount && amountOk) || (wantPercent && percentOk);
  if (!usable) return <span className={cn("font-mono tabular-nums whitespace-nowrap", className)}>{"—"}</span>;

  const dir = direction(amountOk ? change : 0, percentOk ? percent : undefined);
  const sign = dir === "up" ? "+" : dir === "down" ? "−" : "";
  const parts: string[] = [];
  if (wantAmount && amountOk) parts.push(`${sign}${num(Math.abs(change), locale, decimals, "currency", currency)}`);
  if (wantPercent && percentOk) parts.push(`${sign}${num(Math.abs(percent), locale, decimals, "percent", currency)}`);
  const text = parts.length === 2 ? `${parts[0]} (${parts[1]})` : parts[0];
  const showFlat = dir === "flat" && flatLabel;

  return (
    <span className={cn("inline-flex items-center gap-1 whitespace-nowrap font-mono tabular-nums", dir === "up" && "text-up-fg", dir === "down" && "text-down-fg", dir === "flat" && "text-fg-muted", className)}>
      <span className="sr-only">{dir === "up" ? "Up " : dir === "down" ? "Down " : "Unchanged "}</span>
      <svg aria-hidden viewBox="0 0 10 10" className="size-[0.6em] shrink-0" fill={dir === "flat" ? "none" : "currentColor"} stroke={dir === "flat" ? "currentColor" : "none"} strokeWidth={1.5} strokeLinecap="round">
        {dir === "up" && <path d="M5 1l4 7H1z" />}
        {dir === "down" && <path d="M5 9L1 2h8z" />}
        {dir === "flat" && <path d="M1.5 5h7" />}
      </svg>
      <span>{showFlat ? flatLabel : text}</span>
    </span>
  );
}
```

## tattva/atoms/Reveal.tsx

```tsx
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** Stagger step in ms. Proposal. */
export const REVEAL_STEP = 40;
/** Items beyond this index share the last delay, so the whole group settles inside 400ms. Proposal. */
export const REVEAL_CAP = 5;

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  /** rise moves 6px up while fading in (220ms). fade is opacity only (150ms). */
  variant?: "rise" | "fade";
  /** Position in a group. Delay is index x 40ms, held at the cap so the group stays under 400ms. */
  index?: number;
  as?: "div" | "li" | "section" | "article" | "span" | "p";
  children?: ReactNode;
}

/**
 * Enter animation wrapper using animate-rise or animate-fade.
 * Under reduced motion it renders its children with no animation.
 * Stagger numbers (40ms step, 5 items) are proposals.
 */
export function Reveal({ variant = "rise", index = 0, as = "div", className, style, children, ...rest }: RevealProps) {
  const reduced = useReducedMotion();
  const delay = Math.min(Math.max(index, 0), REVEAL_CAP - 1) * REVEAL_STEP;
  const s: CSSProperties | undefined = reduced ? style : { animationDelay: `${delay}ms`, ...style };
  return createElement(as, { ...rest, className: cn(!reduced && (variant === "rise" ? "animate-rise" : "animate-fade"), className), style: s }, children);
}
```

## tattva/atoms/ScrollEdge.tsx

```tsx
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/cn";

export interface ScrollEdgeProps {
  /** Which edge softens. */
  edge?: "top" | "bottom" | "both";
  /** Height of the fade zone, in px. */
  size?: number;
  /** The content that scrolls. */
  children?: ReactNode;
  /** Accessible name of the scrolling region. */
  label?: string;
  /** Classes for the outer box. Give it a height, or place it in a flex or grid cell that has one. */
  className?: string;
  /** Classes for the element that scrolls. */
  contentClassName?: string;
}

// Stops run from 0% (the content side) to 100% (the screen edge) because --se-dir points towards the edge.
// Each blur layer owns an overlapping slice, so the strength ramps up instead of showing as a band.
// Blur doubles: 0.75, 1.5, 3, 6, 12px.
const LAYERS = [
  "[backdrop-filter:blur(0.75px)] [-webkit-backdrop-filter:blur(0.75px)] [mask-image:linear-gradient(var(--se-dir),transparent_0%,black_20%,black_40%,transparent_60%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_0%,black_20%,black_40%,transparent_60%)]",
  "[backdrop-filter:blur(1.5px)] [-webkit-backdrop-filter:blur(1.5px)] [mask-image:linear-gradient(var(--se-dir),transparent_20%,black_40%,black_60%,transparent_80%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_20%,black_40%,black_60%,transparent_80%)]",
  "[backdrop-filter:blur(3px)] [-webkit-backdrop-filter:blur(3px)] [mask-image:linear-gradient(var(--se-dir),transparent_40%,black_60%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_40%,black_60%,black_80%,transparent_100%)]",
  "[backdrop-filter:blur(6px)] [-webkit-backdrop-filter:blur(6px)] [mask-image:linear-gradient(var(--se-dir),transparent_60%,black_80%,black_100%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_60%,black_80%,black_100%)]",
  "[backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] [mask-image:linear-gradient(var(--se-dir),transparent_80%,black_100%)] [-webkit-mask-image:linear-gradient(var(--se-dir),transparent_80%,black_100%)]",
];

const TINT = "[background-image:linear-gradient(var(--se-dir),transparent_0%,color-mix(in_srgb,var(--bg)_35%,transparent)_55%,color-mix(in_srgb,var(--bg)_90%,transparent)_100%)]";
const SOLID = "[background-image:linear-gradient(var(--se-dir),transparent_0%,var(--bg)_100%)]";

function Edge({ side, size }: { side: "top" | "bottom"; size: number }) {
  const style = { height: size, "--se-dir": side === "top" ? "to top" : "to bottom" } as CSSProperties;
  return (
    <div aria-hidden style={style} className={cn("pointer-events-none absolute inset-x-0", side === "top" ? "top-0" : "bottom-0")}>
      {/* Plain gradient: where backdrop-filter is missing. */}
      <div className={cn("absolute inset-0 supports-[backdrop-filter]:hidden", SOLID)} />
      {/* Plain gradient: when the person asked for less transparency. */}
      <div className={cn("absolute inset-0 hidden [@media(prefers-reduced-transparency:reduce)]:block", SOLID)} />
      <div className="absolute inset-0 hidden supports-[backdrop-filter]:block">
        <div className="absolute inset-0 [@media(prefers-reduced-transparency:reduce)]:hidden">
          {LAYERS.map((l, i) => <div key={i} className={cn("pointer-events-none absolute inset-0", l)} />)}
          <div className={cn("absolute inset-0", TINT)} />
        </div>
      </div>
    </div>
  );
}

/**
 * A scrolling area whose top and/or bottom edge softens progressively, so content passing under it fades out
 * instead of meeting a hard panel line. The edge layers are decorative, ignore the pointer and never take focus.
 * The scroller is a focusable region, so keyboard people can scroll it with the arrow keys.
 */
export function ScrollEdge({ edge = "both", size = 48, children, label = "Scrollable content", className, contentClassName }: ScrollEdgeProps) {
  return (
    <div className={cn("relative min-h-0 overflow-hidden", className)}>
      <div role="region" aria-label={label} tabIndex={0}
        className={cn("h-full overflow-y-auto overscroll-contain focus-visible:[outline-offset:-2px]", contentClassName)}>
        {children}
      </div>
      {(edge === "top" || edge === "both") && <Edge side="top" size={size} />}
      {(edge === "bottom" || edge === "both") && <Edge side="bottom" size={size} />}
    </div>
  );
}
```

## tattva/atoms/SectionLabel.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SectionLabelProps {
  children: ReactNode;
  action?: ReactNode;
  /** Element to render. A label is plain text by default. Use a heading level only when it should appear in the page outline. */
  as?: "p" | "h2" | "h3" | "h4";
  className?: string;
}

/** Small uppercase section label, used in trays, rails and lists. */
export function SectionLabel({ children, action, as: Tag = "p", className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center justify-between gap-2 px-1", className)}>
      <Tag className="font-sans! text-nano font-normal uppercase tracking-caps text-fg-muted">{children}</Tag>
      {action && <span className="text-small leading-4 text-fg-muted">{action}</span>}
    </div>
  );
}
```

## tattva/atoms/SegmentedControl.tsx

```tsx
import { useRef, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { useIndicator } from "../hooks/useIndicator";

export interface SegmentOption<T extends string> { value: T; label: string; description?: string }

export interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Accessible name for the group. */
  label: string;
  size?: "sm" | "md";
  className?: string;
}

/** Single-choice pill group. Arrow keys move and select, Home and End jump, and only the selected option is a tab stop. */
export function SegmentedControl<T extends string>({ options, value, onChange, label, size = "md", className }: SegmentedControlProps<T>) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = useRef<HTMLDivElement>(null);
  const mark = useIndicator(group, '[role="radio"][aria-checked="true"]', value);
  // If value matches nothing, keep the first option reachable so the group is never skipped by Tab.
  const hasMatch = options.some((o) => o.value === value);
  const move = (i: number, e: KeyboardEvent) => {
    const n = options.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    onChange(options[next].value);
    refs.current[next]?.focus();
  };
  return (
    <div ref={group} role="radiogroup" aria-label={label} className={cn("relative inline-flex max-w-full overflow-x-auto rounded-control border border-line bg-sunken p-0.5 [scrollbar-width:none]", className)}>
      {mark && <span aria-hidden style={mark} className="pointer-events-none rounded-control bg-surface shadow-sm forced-colors:hidden" />}
      {options.map((o, i) => {
        const on = o.value === value;
        return (
          <button key={o.value} ref={(el) => { refs.current[i] = el; }} type="button" role="radio" aria-checked={on} title={o.description}
            tabIndex={on || (!hasMatch && i === 0) ? 0 : -1} onClick={() => onChange(o.value)} onKeyDown={(e) => move(i, e)}
            className={cn("relative cursor-pointer rounded-control font-medium whitespace-nowrap transition-colors duration-(--dur-fast)", size === "sm" ? "px-2.5 py-1 text-micro" : "px-3.5 py-1.5 text-small leading-4",
              on ? cn(!mark && "bg-surface shadow-sm", "text-fg forced-colors:border forced-colors:border-[Highlight]") : "text-fg-muted hover:text-fg")}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
```

## tattva/atoms/Select.tsx

```tsx
import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<ComponentProps<"select">, "size"> {
  /** The choices. Use this or pass <option> elements as children. */
  options?: SelectOption[];
  /** Shown while value is empty. It is a disabled first option, so it cannot be picked again. */
  placeholder?: string;
  invalid?: boolean;
  /** md is 40px tall, sm is 32px. Both are 44px on coarse pointers. */
  size?: "sm" | "md";
  /** Classes for the wrapper around the select. */
  className?: string;
}

/** A native select with a drawn chevron. The menu stays the browser's own, so it works with every screen reader and phone. */
export function Select({ options, placeholder, invalid, size = "md", className, children, value, defaultValue, ...rest }: SelectProps) {
  const empty = value === "" || (value === undefined && (defaultValue === undefined || defaultValue === ""));
  return (
    <span className={cn("relative block w-full", className)}>
      <select {...rest} value={value} defaultValue={value === undefined ? (defaultValue ?? (placeholder ? "" : undefined)) : undefined}
        aria-invalid={invalid || rest["aria-invalid"] || undefined}
        className={cn(
          "w-full appearance-none rounded-field border bg-surface pr-9 pl-3 text-body leading-5 transition-colors duration-[var(--dur-fast)] cursor-pointer",
          size === "sm" ? "h-8" : "h-10", "pointer-coarse:h-11",
          empty && placeholder ? "text-fg-subtle" : "text-fg",
          invalid || rest["aria-invalid"] ? "border-danger" : "border-line hover:border-line-strong",
          "disabled:cursor-not-allowed disabled:border-disabled-line disabled:bg-disabled disabled:text-disabled-fg",
        )}>
        {placeholder && <option value="" disabled hidden>{placeholder}</option>}
        {options?.map((o) => <option key={o.value} value={o.value} disabled={o.disabled} className="text-fg">{o.label}</option>)}
        {children}
      </select>
      <svg aria-hidden viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-fg-muted"><path d="M6 9l6 6 6-6" /></svg>
    </span>
  );
}
```

## tattva/atoms/ShimmerText.tsx

```tsx
import { cn } from "../lib/cn";

/** Shimmering status text such as "Searching the web…". */
export function ShimmerText({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("bg-[linear-gradient(90deg,var(--fg-subtle)_40%,var(--fg)_50%,var(--fg-subtle)_60%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer text-body leading-5", className)}>
      {children}
    </span>
  );
}
```

## tattva/atoms/Skeleton.tsx

```tsx
import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Skeleton({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn("rounded-md bg-[linear-gradient(90deg,var(--surface-sunken)_25%,var(--border)_50%,var(--surface-sunken)_75%)] bg-[length:200%_100%] animate-shimmer", className)}
      {...rest}
    />
  );
}
```

## tattva/atoms/Slider.tsx

```tsx
import { useId } from "react";
import type { CSSProperties } from "react";
import { cn } from "../lib/cn";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Accessible name. */
  label: string;
  /** Shows the current value as text to the right. */
  showValue?: boolean;
  /** Turns the number into text, for example "40%". Used for the visible value and for aria-valuetext. */
  formatValue?: (value: number) => string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

// Class strings are written out in full so Tailwind can see them. Both engines get the same drawing:
// the track paints the filled part up to --fill, and the thumb is a 20px ring.
const webkit = "[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:border-0 [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,var(--color-accent)_var(--fill),var(--color-line-strong)_var(--fill))] [&::-webkit-slider-runnable-track]:forced-colors:bg-none [&::-webkit-slider-runnable-track]:forced-colors:bg-[ButtonText] [&::-webkit-slider-thumb]:-mt-1.75 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-accent [&::-webkit-slider-thumb]:bg-surface [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:forced-colors:border-[ButtonText] [&::-webkit-slider-thumb]:forced-colors:bg-[Canvas]";
const moz = "[&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border-0 [&::-moz-range-track]:bg-[linear-gradient(to_right,var(--color-accent)_var(--fill),var(--color-line-strong)_var(--fill))] [&::-moz-range-track]:forced-colors:bg-none [&::-moz-range-track]:forced-colors:bg-[ButtonText] [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-accent [&::-moz-range-thumb]:bg-surface [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:forced-colors:border-[ButtonText] [&::-moz-range-thumb]:forced-colors:bg-[Canvas]";

/** Controlled single-thumb slider on a native range input. Arrow keys, Home, End and Page keys come from the browser. */
export function Slider({ value, onChange, min = 0, max = 100, step = 1, label, showValue, formatValue, disabled, id, className }: SliderProps) {
  const auto = useId();
  const inputId = id ?? auto;
  const text = formatValue ? formatValue(value) : String(value);
  const fill = max > min ? Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100)) : 0;
  return (
    <div className={cn("flex items-center gap-3", disabled && "opacity-(--disabled-opacity)", className)}>
      <input id={inputId} type="range" min={min} max={max} step={step} value={value} disabled={disabled}
        aria-label={label} aria-valuetext={formatValue ? text : undefined}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${fill}%` } as CSSProperties}
        className={cn("m-0 h-5 min-w-0 flex-1 cursor-pointer appearance-none bg-transparent pointer-coarse:h-11 disabled:cursor-not-allowed",
          webkit, moz)} />
      {showValue && <output htmlFor={inputId} className="min-w-[3ch] text-right text-body leading-5 text-fg-muted tabular-nums">{text}</output>}
    </div>
  );
}
```

## tattva/atoms/Spinner.tsx

```tsx
export function Spinner({ size = 16, label = "Loading" }: { size?: number; label?: string }) {
  return (
    <svg role="status" aria-label={label} width={size} height={size} viewBox="0 0 24 24" className="animate-spin text-fg-muted">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
```

## tattva/atoms/Stack.tsx

```tsx
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

/** Step on the 4px grid. 1 is 4px, 8 is 32px. Multiplied by --density. */
export type Space = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type StackTag = "div" | "section" | "article" | "ul" | "ol" | "nav" | "header" | "footer" | "main" | "aside";

/** CSS length for a space step, scaled by the density token. */
export const spaceValue = (n: Space) => `calc(var(--density) * ${n * 4}px)`;

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Gap step from 1 to 8 on the 4px grid, scaled by --density. */
  gap?: Space;
  /** Element to render. Use ul or ol with li children for lists. */
  as?: StackTag;
  children?: ReactNode;
}

/** Vertical flow with one gap between children. Prefer it over margins between siblings. */
export function Stack({ gap = 4, as = "div", className, style, children, ...rest }: StackProps) {
  const s: CSSProperties = { gap: spaceValue(gap), ...style };
  // Safari stops calling a list a list once its markers are removed, so say it is one.
  const isList = as === "ul" || as === "ol";
  return createElement(as, { ...(isList ? { role: "list" } : {}), ...rest, className: cn("flex flex-col", isList ? "list-none p-0 m-0" : "", className), style: s }, children);
}
```

## tattva/atoms/StatusLine.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface StatusLineProps {
  /** The pieces of the line, in order. A middle dot is drawn between them. */
  items: ReactNode[];
  /** Index of the item that is the current state. It keeps the normal ink and turns medium weight. The others are muted. */
  current?: number;
  /** Accessible name of the group. */
  label?: string;
  className?: string;
}

/** One quiet line for the top of a screen, such as "Case · Flipkart · ₹2,340 · Waiting". It truncates instead of wrapping. */
export function StatusLine({ items, current, label = "Status", className }: StatusLineProps) {
  return (
    <div role="group" aria-label={label} className={cn("min-w-0 truncate text-body leading-6 text-fg", className)}>
      <span className="sr-only">Status: </span>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span aria-hidden className="mx-1.5 text-fg-subtle">{"·"}</span>}
          <span aria-current={i === current ? "true" : undefined} className={current === undefined ? undefined : i === current ? "font-medium text-fg" : "text-fg-muted"}>{item}</span>
        </span>
      ))}
    </div>
  );
}
```

## tattva/atoms/StatusTicker.tsx

```tsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ShimmerText } from "./ShimmerText";

export interface StatusTickerProps {
  /** The step the AI run is on right now, such as "Reading 3 files". The app passes the real step; when done, pass the final line, such as "Done in 12s". */
  current: string;
  /** Every step text the run may show. Used only to reserve the width of the widest one, so the box never grows. */
  steps?: string[];
  /** The run has finished. The line stops shimmering, aria-busy is removed and the line is announced at once. */
  done?: boolean;
  /** Accessible name of the line, such as "Assistant status". */
  label?: string;
  /** A text whose width the box keeps from the start, such as the longest step you expect. */
  reserve?: string;
  className?: string;
}

/** Screen readers hear a new step at most this often. The latest step wins. */
const ANNOUNCE_GAP = 2000;

/** One line that shows the real current step of an AI run. It keeps the width of the widest text it has shown, so nothing beside it moves. */
export function StatusTicker({ current, steps, done = false, label = "AI status", reserve, className }: StatusTickerProps) {
  const reduced = useReducedMotion();
  const [prev, setPrev] = useState<{ text: string; key: number } | null>(null);
  const [shown, setShown] = useState({ text: current, key: 0 });
  const [minWidth, setMinWidth] = useState(0);
  const [spoken, setSpoken] = useState(current);
  const textRef = useRef<HTMLSpanElement>(null);
  const lastSpoke = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Swap the line during render so the old text and the new one are drawn in the same frame.
  if (current !== shown.text) {
    setPrev(reduced ? null : { text: shown.text, key: shown.key });
    setShown({ text: current, key: shown.key + 1 });
  }

  // Remember the widest text shown so far; the box never shrinks below it.
  useLayoutEffect(() => {
    const w = textRef.current?.getBoundingClientRect().width ?? 0;
    setMinWidth((m) => (w > m ? w : m));
  }, [shown.key]);

  // Throttle the live region: speak at once if the last announcement was long enough ago, else speak the latest step when the gap ends.
  useEffect(() => {
    clearTimeout(timer.current);
    const speak = () => { lastSpoke.current = Date.now(); setSpoken(current); };
    const wait = ANNOUNCE_GAP - (Date.now() - lastSpoke.current);
    if (done || wait <= 0) speak();
    else timer.current = setTimeout(speak, wait);
    return () => clearTimeout(timer.current);
  }, [current, done]);

  const ghosts = [reserve, ...(steps ?? [])].filter((s): s is string => !!s);
  const working = !done && !reduced;

  return (
    <span className={cn("inline-flex max-w-full min-w-0 align-middle", className)}>
      <span role="group" aria-label={label} aria-busy={!done} style={{ minWidth: `min(${minWidth}px, 100%)` }} className="relative inline-grid min-w-0 max-w-full text-body leading-6 text-fg-muted">
        {ghosts.map((g, i) => (
          <span key={i} aria-hidden className="invisible col-start-1 row-start-1 truncate">{g}</span>
        ))}
        {prev && (
          <span key={`p${prev.key}`} aria-hidden onAnimationEnd={() => setPrev(null)}
            className="pointer-events-none absolute inset-0 truncate animate-fade-out">{prev.text}</span>
        )}
        <span key={shown.key} ref={textRef} className={cn("col-start-1 row-start-1 w-fit max-w-full truncate", !reduced && shown.key > 0 && "animate-blur-in", done && "text-fg")}>
          {working ? <ShimmerText className="leading-6">{shown.text}</ShimmerText> : shown.text}
        </span>
      </span>
      <span role="status" aria-live="polite" className="sr-only">{spoken}</span>
    </span>
  );
}
```

## tattva/atoms/Switch.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SwitchProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  /** Accessible name. Used as aria-label only when there are no children. */
  label: string;
  /** Visible label beside the switch. Clicking it toggles the switch, and it becomes the accessible name. */
  children?: ReactNode;
  /** Which side of the switch the children sit on. */
  labelPosition?: "start" | "end";
  /** Blocks toggling and dims the switch. */
  disabled?: boolean;
  /** Extra context announced after the name through aria-describedby. Rendered as screen reader text. */
  description?: string;
  id?: string;
  className?: string;
}

/** Controlled on/off toggle. The track is 20px tall. The button around it is at least 24px tall, and 44px on coarse pointers. */
export function Switch({ checked, onChange, label, children, labelPosition = "end", disabled, description, id, className }: SwitchProps) {
  const descId = useId();
  const textId = useId();
  const hasText = children != null && children !== false && children !== "";
  const control = (
    <button type="button" role="switch" id={id} aria-checked={checked} aria-label={hasText ? undefined : label} aria-labelledby={hasText ? textId : undefined} disabled={disabled}
      aria-describedby={description ? descId : undefined} onClick={() => { if (!disabled) onChange(!checked); }}
      className={cn("inline-flex min-h-6 min-w-9 shrink-0 cursor-pointer items-center justify-center rounded-full disabled:cursor-not-allowed pointer-coarse:min-h-11 pointer-coarse:min-w-11", !hasText && className)}>
      <span aria-hidden className={cn("relative block h-5 w-9 rounded-full border border-transparent forced-colors:border-[CanvasText] transition-colors duration-[var(--dur-fast)]", disabled ? "bg-line" : checked ? "bg-accent" : "bg-line-strong")}>
        <span className={cn("absolute top-px left-px size-4 rounded-full bg-thumb shadow-sm forced-colors:bg-[CanvasText] transition-transform duration-[var(--dur-fast)]", checked && "translate-x-4")} />
      </span>
      {description && <span id={descId} className="sr-only">{description}</span>}
    </button>
  );
  if (!hasText) return control;
  const text = <span id={textId} className={cn("text-body leading-5", disabled ? "text-disabled-fg" : "text-fg")}>{children}</span>;
  return (
    <label className={cn("inline-flex items-center gap-3", disabled ? "cursor-not-allowed" : "cursor-pointer", className)}>
      {labelPosition === "start" && text}
      {control}
      {labelPosition === "end" && text}
    </label>
  );
}
```

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

## tattva/atoms/Waveform.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { HTMLAttributes, KeyboardEvent, PointerEvent } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** What a stretch of the clip is. `ai` = made or changed by AI, `person` = made by a person, `stale` = needs a person to regenerate or check, `selected` = the person's selection, `highlight` = a neutral mark such as the line being read. */
export type WaveformRegionKind = "ai" | "person" | "stale" | "selected" | "highlight";

export interface WaveformRegion {
  /** Start, in seconds. */
  start: number;
  /** End, in seconds. */
  end: number;
  kind: WaveformRegionKind;
  /** Short words for the stretch, such as "Chorus rewritten by AI". Shown under the waveform and read out. */
  label?: string;
}

export interface WaveformMarker {
  /** Where it sits, in seconds. */
  at: number;
  /** What happened, such as "Tool call: look up order". */
  label: string;
  /** `review` is drawn as an amber diamond and only for a moment a person must check. */
  tone?: "neutral" | "review";
}

export type WaveformState = "drawing" | "ready" | "error";

export interface WaveformProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Loudness per slice, each 0 to 1. `null` while the peaks are still being worked out (the drawing state). In live mode, the newest level is last. */
  peaks: number[] | null;
  /** Length of the clip in seconds. In live mode, the seconds the visible window covers. */
  duration: number;
  /** Playhead, in seconds. Everything before it is drawn as played. */
  position?: number;
  /** Makes it a seek control (one slider). Leave out for a drawing only, which is hidden from screen readers. */
  onSeek?: (seconds: number) => void;
  /** Name of the seek slider, such as "Seek, call with Maya Okafor". Required with onSeek. */
  label?: string;
  /** Marked stretches: AI-made, person-made, stale, selected or highlighted. */
  regions?: WaveformRegion[];
  /** Moments on the timeline, such as a tool call or an interruption. */
  markers?: WaveformMarker[];
  /** From this second to the end the clip is still being made. Drawn as a dashed track. */
  pendingFrom?: number;
  /** `static` draws a whole clip. `live` draws the most recent levels from a microphone or a stream, newest on the right, with no playhead or seeking. */
  mode?: "static" | "live";
  /** In live mode, how many bars to show. */
  liveBars?: number;
  /** Shows a flat line and this message instead of the peaks. Seeking still works on the plain bar. */
  error?: string;
  /** Draws a plain progress bar instead of peaks. It also switches to this when the waveform is narrower than 256px. */
  simple?: boolean;
  /** Height of the drawing. The hit area is at least 44px tall when it is a seek control. */
  height?: 32 | 48 | 72;
  /** Clock text for the time bubble shown while dragging. Defaults to formatMediaTime. */
  formatTime?: (seconds: number) => string;
  className?: string;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** "1:12", or "1:02:05" past an hour. Use it for visible times. */
export function formatMediaTime(seconds: number): string {
  const t = Math.max(0, Math.floor(seconds || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = String(t % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

/** "1 minute 12 seconds", in words for screen readers. */
export function speakMediaTime(seconds: number): string {
  const t = Math.max(0, Math.round(seconds || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const unit = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
  const parts = [h && unit(h, "hour"), m && unit(m, "minute"), (s || (!h && !m)) && unit(s, "second")].filter(Boolean);
  return parts.join(" ");
}

const HEIGHT = { 32: "h-8", 48: "h-12", 72: "h-18" } as const;
const KIND_WORD: Record<WaveformRegionKind, string> = { ai: "Made by AI", person: "Made by a person", stale: "Needs regenerating", selected: "Selected", highlight: "Marked" };

/** Keeps the shown value from changing more than once per `ms` when `on` is true. */
function useThrottled<T>(value: T, ms: number, on: boolean): T {
  const [shown, setShown] = useState(value);
  const last = useRef(0);
  useEffect(() => {
    if (!on) return;
    const wait = Math.max(0, last.current + ms - Date.now());
    const t = window.setTimeout(() => { last.current = Date.now(); setShown(value); }, wait);
    return () => window.clearTimeout(t);
  }, [value, ms, on]);
  return on ? shown : value;
}

/**
 * Draws the loudness of one clip as bars, with the played part filled. With onSeek it is also the seek slider.
 * It never uses the AI colour for playback: played bars are ink, the rest are the strong line colour.
 * Only an `ai` region gets a faint AI wash, and it also has a dotted top edge and words, so colour is never the only signal.
 */
export function Waveform({
  peaks, duration, position = 0, onSeek, label, regions = [], markers = [], pendingFrom, mode = "static", liveBars = 64,
  error, simple = false, height = 48, formatTime = formatMediaTime, className, ...rest
}: WaveformProps) {
  const reduced = useReducedMotion();
  const descId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<number | null>(null);
  const [dragAt, setDragAt] = useState<number | null>(null);

  const live = mode === "live";
  const dur = Math.max(0, duration || 0);
  const state: WaveformState = error ? "error" : peaks === null ? "drawing" : "ready";
  const seekable = !!onSeek && !live && dur > 0;
  // With reduced motion the playhead moves at most four times a second.
  const shownPos = useThrottled(clamp(position, 0, dur), 250, reduced && !live && dragAt === null);
  const pos = dragAt ?? shownPos;
  const pct = (s: number) => `${dur ? (clamp(s, 0, dur) / dur) * 100 : 0}%`;

  // With reduced motion a live drawing changes at most once a second, so it reads as a still level, not a moving wave.
  const livePeaks = useThrottled(peaks, 1000, reduced && live);
  const bars = live ? (livePeaks ?? []).slice(-liveBars) : peaks ?? [];
  const n = live ? liveBars : bars.length;
  const offset = live ? liveBars - bars.length : 0;
  const playedBars = !live && dur ? (pos / dur) * n : 0;

  const timeAt = (clientX: number) => {
    const r = trackRef.current?.getBoundingClientRect();
    return r && r.width ? clamp((clientX - r.left) / r.width, 0, 1) * dur : 0;
  };
  const down = (ev: PointerEvent<HTMLDivElement>) => {
    if (!seekable || (ev.pointerType === "mouse" && ev.button !== 0)) return;
    ev.currentTarget.setPointerCapture(ev.pointerId);
    ev.currentTarget.focus();
    drag.current = ev.pointerId;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onSeek?.(t);
  };
  const move = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    const t = timeAt(ev.clientX);
    setDragAt(t);
    onSeek?.(t);
  };
  const up = (ev: PointerEvent<HTMLDivElement>) => {
    if (drag.current !== ev.pointerId) return;
    drag.current = null;
    setDragAt(null);
  };
  const key = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!seekable) return;
    const big = ev.shiftKey ? 15 : 5;
    const k = ev.key;
    let to: number;
    if (k === "ArrowRight" || k === "ArrowUp") to = position + big;
    else if (k === "ArrowLeft" || k === "ArrowDown") to = position - big;
    else if (k === "PageUp") to = position + 30;
    else if (k === "PageDown") to = position - 30;
    else if (k === "Home") to = 0;
    else if (k === "End") to = dur;
    else return;
    ev.preventDefault();
    onSeek?.(clamp(to, 0, dur));
  };

  const labelled = regions.filter((r) => r.label);
  const description = [
    state === "drawing" ? "Waveform still drawing." : state === "error" ? error : "",
    pendingFrom !== undefined && pendingFrom < dur ? `Still being made after ${speakMediaTime(pendingFrom)}.` : "",
    ...regions.map((r) => `${r.label ?? KIND_WORD[r.kind]}, ${speakMediaTime(r.start)} to ${speakMediaTime(r.end)}.`),
    ...markers.map((m) => `${m.tone === "review" ? "Needs review: " : ""}${m.label} at ${speakMediaTime(m.at)}.`),
  ].filter(Boolean).join(" ");

  const showBars = state === "ready" && !simple;
  const drawing = (
    <div aria-hidden className={cn("relative w-full", HEIGHT[height])}>
      {/* Regions sit behind the bars. */}
      {regions.map((r, i) => (
        <span key={i} className={cn("absolute inset-y-0",
          r.kind === "ai" && "border-t-2 border-dotted border-fg-muted bg-lime-soft forced-colors:border-[CanvasText]",
          r.kind === "person" && "border-t-2 border-fg-subtle",
          r.kind === "stale" && "border-t-2 border-dashed border-attention",
          r.kind === "selected" && "rounded-sm bg-selected ring-1 ring-fg forced-colors:outline forced-colors:outline-1",
          r.kind === "highlight" && "rounded-sm bg-hover",
        )}
          style={{
            left: pct(r.start), width: `calc(${pct(r.end)} - ${pct(r.start)})`,
            backgroundImage: r.kind === "stale" ? "repeating-linear-gradient(135deg, color-mix(in oklab, var(--attention) 28%, transparent) 0 calc(var(--spacing) * 0.5), transparent 0 calc(var(--spacing) * 1.75))" : undefined,
          }} />
      ))}
      {showBars ? (
        <svg viewBox={`0 0 ${Math.max(1, n)} 100`} preserveAspectRatio="none" focusable="false"
          className={cn("absolute inset-0 size-full", !live && "motion-safe:animate-fade")}>
          {bars.map((p, i) => {
            const h = Math.max(4, clamp(p, 0, 1) * 96);
            const x = i + offset;
            const played = !live && x + 0.5 <= playedBars;
            const pending = pendingFrom !== undefined && dur && (x / n) * dur >= pendingFrom;
            return (
              <rect key={i} x={x + 0.18} width={0.64} y={50 - h / 2} height={h}
                fill={live ? "var(--fg-muted)" : played ? "var(--fg)" : "var(--border-strong)"}
                fillOpacity={pending ? 0.45 : 1} />
            );
          })}
        </svg>
      ) : (
        // Plain bar: drawing, error, simple, or a narrow space.
        <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-line-strong forced-colors:bg-[GrayText]">
          {!live && state !== "drawing" && <span className="absolute inset-y-0 left-0 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ width: pct(pos) }} />}
        </span>
      )}
      {/* Narrow containers swap the bars for the plain bar. */}
      {showBars && !live && (
        <span className="absolute inset-0 hidden bg-surface @max-3xs:block">
          <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-line-strong">
            {!live && <span className="absolute inset-y-0 left-0 rounded-full bg-fg" style={{ width: pct(pos) }} />}
          </span>
        </span>
      )}
      {pendingFrom !== undefined && pendingFrom < dur && (
        <span className="absolute inset-y-0 right-0 border-l border-dashed border-fg-subtle" style={{ left: pct(pendingFrom) }} />
      )}
      {markers.map((m, i) => (
        <span key={i} title={m.label} className="absolute inset-y-0 w-0" style={{ left: pct(m.at) }}>
          <span className={cn("absolute inset-y-0 left-0 w-px -translate-x-1/2", m.tone === "review" ? "bg-attention" : "bg-fg-subtle")} />
          <span className={cn("absolute -top-1 left-0 size-2 -translate-x-1/2", m.tone === "review" ? "rotate-45 bg-attention" : "rounded-full bg-fg-subtle")} />
        </span>
      ))}
      {!live && state === "ready" && (
        <span className="absolute -inset-y-1 w-0.5 -translate-x-1/2 rounded-full bg-fg forced-colors:bg-[CanvasText]" style={{ left: pct(pos) }} />
      )}
      {state === "drawing" && <span className="absolute inset-0 flex items-center justify-center"><span className="bg-surface px-2 text-small text-fg-muted">Drawing waveform</span></span>}
    </div>
  );

  return (
    <div className={cn("@container min-w-0", className)} {...rest}>
      {seekable ? (
        <div ref={trackRef} role="slider" tabIndex={0} aria-label={label ?? "Seek"}
          aria-valuemin={0} aria-valuemax={Math.round(dur)} aria-valuenow={Math.round(position)}
          aria-valuetext={`${speakMediaTime(position)} of ${speakMediaTime(dur)}`} aria-orientation="horizontal"
          aria-describedby={description ? descId : undefined}
          onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
          className="relative flex min-h-11 cursor-pointer touch-none items-center rounded-sm select-none">
          {drawing}
          {dragAt !== null && (
            <span aria-hidden className="pointer-events-none absolute -top-7 -translate-x-1/2 rounded-control bg-inverse px-1.5 py-0.5 text-small text-inverse-fg tabular-nums shadow-sm" style={{ left: pct(dragAt) }}>
              {formatTime(dragAt)}
            </span>
          )}
        </div>
      ) : (
        <div ref={trackRef} aria-hidden className="relative">{drawing}</div>
      )}
      {description && seekable && <span id={descId} hidden>{description}</span>}
      {state === "error" && <p className="mt-1 text-small text-fg-muted">{error}</p>}
      {labelled.length > 0 && (
        <ul aria-hidden={seekable || undefined} className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-small text-fg-muted">
          {labelled.map((r, i) => (
            <li key={i} className="flex min-w-0 items-center gap-1.5">
              <span className={cn("inline-block size-2 shrink-0",
                r.kind === "ai" && "rounded-full bg-lime ring-1 ring-fg-muted",
                r.kind === "stale" && "rotate-45 bg-attention",
                r.kind === "person" && "rounded-full bg-fg-subtle",
                (r.kind === "selected" || r.kind === "highlight") && "rounded-sm ring-1 ring-fg")} />
              <span className="min-w-0">{r.label}, <span className="tabular-nums">{formatTime(r.start)} to {formatTime(r.end)}</span></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## tattva/atoms/WorkingEdge.tsx

```tsx
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

export type WorkingEdgeRadius = "card" | "overlay" | "control" | "field" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";

export interface WorkingEdgeProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** True only while the AI is really working on this surface. The ring shows while true. */
  active: boolean;
  /** The surface the ring goes around, such as a card or a field. */
  children: ReactNode;
  /** Said once by screen readers when active turns true. */
  label?: string;
  /** Set false when the caller announces the change itself, and the surface must not hold a status region (such as a listbox option). */
  announce?: boolean;
  /** Corner radius. Match the corner of the surface inside. "card" (the default) follows the shape setting like every card. */
  radius?: WorkingEdgeRadius;
  className?: string;
}

const RADIUS: Record<WorkingEdgeRadius, string> = {
  card: "rounded-card", overlay: "rounded-overlay", control: "rounded-control", field: "rounded-field",
  sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", "2xl": "rounded-2xl", "3xl": "rounded-3xl", "4xl": "rounded-4xl", full: "rounded-full",
};

// The turning highlight needs a registered angle, which a class cannot declare. React hoists and dedupes this sheet by href.
// One slow turn is decorative and loops only while real work runs. Reduced motion gets a still ring; forced colours a plain border.
const CSS = `
@property --sd-edge-angle { syntax: "<angle>"; inherits: false; initial-value: 0deg; }
@keyframes sd-edge-turn { to { --sd-edge-angle: 360deg; } }
.sd-edge-ring {
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none; padding: var(--focus-width);
  background: conic-gradient(from var(--sd-edge-angle), color-mix(in oklab, var(--lime) 30%, transparent), var(--lime) 18%, color-mix(in oklab, var(--lime) 30%, transparent) 36%, color-mix(in oklab, var(--lime) 30%, transparent));
  -webkit-mask: linear-gradient(var(--fg) 0 0) content-box, linear-gradient(var(--fg) 0 0); -webkit-mask-composite: xor;
  mask: linear-gradient(var(--fg) 0 0) content-box exclude, linear-gradient(var(--fg) 0 0);
  animation: sd-edge-turn var(--dur-ambient, 2.4s) linear infinite;
}
.sd-edge-ring[data-active="false"] { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .sd-edge-ring { animation: none; background: var(--lime); } }
@media (forced-colors: active) { .sd-edge-ring { animation: none; background: none; -webkit-mask: none; mask: none; padding: 0; border: var(--focus-width) solid CanvasText; } }
`;

/** Wraps a surface and draws a calm moving ring in the AI colour around it, only while the AI is working on it. */
export function WorkingEdge({ active, children, label = "AI is working on this", radius = "card", announce = true, className, ...rest }: WorkingEdgeProps) {
  return (
    <div {...rest} className={cn("relative", RADIUS[radius], className)}>
      <style href="tattva-working-edge" precedence="default">{CSS}</style>
      {children}
      <span aria-hidden data-active={active}
        className={cn("sd-edge-ring transition-opacity", active ? "opacity-100 duration-[var(--dur-base)] ease-[var(--ease-arrive)]" : "opacity-0 duration-[var(--dur-fast)] ease-[var(--ease-in)]")} />
      {announce && <span role="status" aria-live="polite" className="sr-only">{active ? label : ""}</span>}
    </div>
  );
}
```

## tattva/hooks/index.ts

```ts
export * from "./useReducedMotion";
export * from "./useStickToBottom";
export * from "./useStreamingText";
export { useScrollEdges } from "./useScrollEdges";
export { useIndicator } from "./useIndicator";
export { usePresence } from "./usePresence";
```

## tattva/hooks/useIndicator.ts

```ts
import { useLayoutEffect, useState, type CSSProperties, type RefObject } from "react";

/**
 * Position of a sliding selection indicator inside `ref`, following the child that matches `selector`
 * (for example '[aria-selected="true"]'). Returns a style for an absolutely positioned element; the container must be
 * `relative`. The first placement does not animate, so the indicator never slides in from the corner. Pass `key` so it
 * re-measures when the selection changes.
 */
export function useIndicator(ref: RefObject<HTMLElement | null>, selector: string, key: unknown): CSSProperties | null {
  const [box, setBox] = useState<{ x: number; y: number; w: number; h: number; ready: boolean } | null>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const read = () => {
      const el = root.querySelector<HTMLElement>(selector);
      if (!el) { setBox(null); return; }
      const next = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
      setBox((p) => (p && p.x === next.x && p.y === next.y && p.w === next.w && p.h === next.h ? p : { ...next, ready: !!p }));
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(root);
    root.querySelectorAll("*").forEach((c) => ro.observe(c));
    return () => ro.disconnect();
  }, [ref, selector, key]);
  if (!box) return null;
  return {
    position: "absolute", left: 0, top: box.y, width: box.w, height: box.h,
    transform: `translateX(${box.x}px)`,
    transitionProperty: box.ready ? "transform, width" : "none",
    transitionDuration: "var(--dur-base)", transitionTimingFunction: "var(--ease-arrive)",
  };
}
```

## tattva/hooks/usePresence.ts

```ts
import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Keeps something mounted for a short exit after `open` turns false, so it can fade out instead of vanishing.
 * `leaving` is true during that time. Under reduced motion there is no delay. The default matches --dur-fast.
 */
export function usePresence(open: boolean, exitMs = 150): { present: boolean; leaving: boolean } {
  const reduce = useReducedMotion();
  const [present, setPresent] = useState(open);
  useEffect(() => {
    if (open) { setPresent(true); return; }
    if (!present) return;
    const t = window.setTimeout(() => setPresent(false), reduce ? 0 : exitMs);
    return () => window.clearTimeout(t);
  }, [open, present, reduce, exitMs]);
  return { present: open || present, leaving: !open && present };
}
```

## tattva/hooks/useReducedMotion.ts

```ts
import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const snapshot = () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(QUERY).matches;

/**
 * True when the person has asked the system to reduce motion.
 * Updates live when the setting changes. Returns false where matchMedia is unavailable.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, snapshot, () => false);
}
```

## tattva/hooks/useScrollEdges.ts

```ts
import { useEffect, useState, type CSSProperties, type RefObject } from "react";

/**
 * For a row that scrolls sideways. Returns a style that softly fades the edge that has more content past it, so a phone user
 * can see there is more to reach. Nothing fades when everything fits. Spread it on the scrolling element.
 * Pass remeasureOn when the element mounts later than the component, so it is measured once it is there.
 */
export function useScrollEdges(ref: RefObject<HTMLElement | null>, remeasureOn?: unknown): CSSProperties {
  const [edge, setEdge] = useState({ start: false, end: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => {
      const start = el.scrollLeft > 1;
      const end = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
      setEdge((p) => (p.start === start && p.end === end ? p : { start, end }));
    };
    read();
    el.addEventListener("scroll", read, { passive: true });
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", read); ro.disconnect(); };
  }, [ref, remeasureOn]);
  if (!edge.start && !edge.end) return {};
  const mask = `linear-gradient(to right, ${edge.start ? "transparent 0, black var(--edge-fade)" : "black 0"}, ${edge.end ? "black calc(100% - var(--edge-fade)), transparent 100%" : "black 100%"})`;
  return { maskImage: mask, WebkitMaskImage: mask };
}
```

## tattva/hooks/useStickToBottom.ts

```ts
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

export interface UseStickToBottomOptions {
  /** Distance in px from the bottom that still counts as "at the bottom". Default 80. */
  threshold?: number;
}

export interface UseStickToBottom<T extends HTMLElement> {
  /** Attach to the scrolling container. Put the content in one wrapper child so growth can be observed. */
  ref: RefObject<T | null>;
  /** True while the reader is within the threshold of the bottom. */
  atBottom: boolean;
  /** Messages that arrived while the reader was scrolled up. Reset when they reach the bottom. */
  unseen: number;
  /** Call when a new message arrives. Pins when the reader is at the bottom, otherwise raises `unseen`. */
  markUnseen: (count?: number) => void;
  /** Smooth scroll to the bottom, instant under reduced motion. Re-pins and clears `unseen`. */
  scrollToBottom: () => void;
}

/**
 * Keeps a scroll container pinned to the bottom only while the reader is near it.
 * Scrolling up releases the pin. Growth of the content and resizes of the container re-pin when pinned.
 * Pass the container as `ref`. Proposal: threshold 80px, from community and implementer sources.
 */
export function useStickToBottom<T extends HTMLElement = HTMLDivElement>({ threshold = 80 }: UseStickToBottomOptions = {}): UseStickToBottom<T> {
  const ref = useRef<T>(null);
  const pinned = useRef(true);
  const gliding = useRef(false);
  const reduced = useReducedMotion();
  const [atBottom, setAtBottom] = useState(true);
  const [unseen, setUnseen] = useState(0);

  const jump = useCallback(() => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
      if (gliding.current) {
        if (dist <= 1) { gliding.current = false; pinned.current = true; setAtBottom(true); setUnseen(0); }
        return;
      }
      const near = dist <= threshold;
      pinned.current = near;
      setAtBottom(near);
      if (near) setUnseen(0);
    };
    const cancelGlide = () => { gliding.current = false; };
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", cancelGlide, { passive: true });
    el.addEventListener("touchstart", cancelGlide, { passive: true });
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { if (pinned.current && !gliding.current) jump(); }) : null;
    ro?.observe(el);
    if (el.firstElementChild) ro?.observe(el.firstElementChild);
    jump();
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", cancelGlide);
      el.removeEventListener("touchstart", cancelGlide);
      ro?.disconnect();
    };
  }, [threshold, jump]);

  const scrollToBottom = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    pinned.current = true;
    setUnseen(0);
    if (reduced) { gliding.current = false; jump(); setAtBottom(true); return; }
    gliding.current = true;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [reduced, jump]);

  const markUnseen = useCallback((count = 1) => {
    if (pinned.current) { jump(); return; }
    setUnseen((n) => n + count);
  }, [jump]);

  return { ref, atBottom, unseen, markUnseen, scrollToBottom };
}
```

## tattva/hooks/useStreamingText.ts

```ts
import { useCallback, useEffect, useRef, useState } from "react";

/** Simulates token streaming for demos and tests. Swap for your real stream. */
export function useStreamingText(full: string, { speed = 18, auto = true }: { speed?: number; auto?: boolean } = {}) {
  const [text, setText] = useState("");
  const [streaming, setStreaming] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const stop = useCallback(() => { window.clearInterval(timer.current); setStreaming(false); }, []);
  const start = useCallback(() => {
    window.clearInterval(timer.current);
    setText(""); setStreaming(true);
    let i = 0;
    timer.current = window.setInterval(() => {
      i += 2;
      setText(full.slice(0, i));
      if (i >= full.length) { window.clearInterval(timer.current); setStreaming(false); }
    }, speed);
  }, [full, speed]);

  useEffect(() => { if (auto) start(); return () => window.clearInterval(timer.current); }, [auto, start]);
  return { text, streaming, start, stop };
}
```

## tattva/lib/cn.ts

```ts
export type ClassValue = string | false | null | undefined;

/** Join class names, dropping falsy values. */
export function cn(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ");
}
```

## tattva/lib/icons.tsx

```tsx
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true, ...p,
});

export const SendIcon = (p: P) => <svg {...base(p)}><path d="M12 19V5M5 12l7-7 7 7" /></svg>;
export const StopIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>;
export const CopyIcon = (p: P) => <svg {...base(p)}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></svg>;
export const CheckIcon = (p: P) => <svg {...base(p)}><path d="M5 12l5 5L20 7" /></svg>;
export const XIcon = (p: P) => <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>;
export const ThumbUpIcon = (p: P) => <svg {...base(p)}><path d="M7 11v9H4v-9h3zM7 11l4-7a2 2 0 0 1 2 2v4h5.5a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 17.5 20H7" /></svg>;
export const ThumbDownIcon = (p: P) => <svg {...base(p)}><path d="M17 13V4h3v9h-3zM17 13l-4 7a2 2 0 0 1-2-2v-4H5.5a2 2 0 0 1-2-2.3l1-6A2 2 0 0 1 6.5 4H17" /></svg>;
export const RefreshIcon = (p: P) => <svg {...base(p)}><path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" /></svg>;
export const SparkleIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" /></svg>;
export const ChevronIcon = (p: P) => <svg {...base(p)}><path d="M9 6l6 6-6 6" /></svg>;
export const PaperclipIcon = (p: P) => <svg {...base(p)}><path d="M21 12l-8.5 8.5a5 5 0 0 1-7-7L14 5a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 8" /></svg>;
export const AlertIcon = (p: P) => <svg {...base(p)}><path d="M12 3l10 18H2L12 3zM12 10v5M12 18h.01" /></svg>;
export const InfoIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>;
export const ToolIcon = (p: P) => <svg {...base(p)}><path d="M14.5 6.5a4 4 0 0 0-5 5L3 18l3 3 6.5-6.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" /></svg>;
export const GlobeIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
export const PlusIcon = (p: P) => <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>;
export const ImageIcon = (p: P) => <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 16l-5-5-8 9" /></svg>;
export const ShieldIcon = (p: P) => <svg {...base(p)}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>;
export const MoonIcon = (p: P) => <svg {...base(p)}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>;
export const SunIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
export const FileIcon = (p: P) => <svg {...base(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5" /></svg>;
export const SearchIcon = (p: P) => <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>;
export const UsersIcon = (p: P) => <svg {...base(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" /></svg>;

/* ---- AI product icons, added for the visual identity slice. Same grid, stroke and caps as above. ---- */
const spark = (d: string) => <path d={d} fill="currentColor" stroke="none" />;

// Actions
export const RegenerateIcon = (p: P) => <svg {...base(p)}><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" />{spark("M12 8.8l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1z")}</svg>;
export const RetryIcon = (p: P) => <svg {...base(p)}><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" /></svg>;
export const EditIcon = (p: P) => <svg {...base(p)}><path d="M4 20l.9-3.6L16.4 4.9a2 2 0 0 1 2.8 2.8L7.6 19.1 4 20zM14.5 6.8l2.7 2.7" /></svg>;
export const UndoIcon = (p: P) => <svg {...base(p)}><path d="M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" /></svg>;
export const RedoIcon = (p: P) => <svg {...base(p)}><path d="M15 14l5-5-5-5M20 9H9.5a5.5 5.5 0 0 0 0 11H13" /></svg>;
export const ShareIcon = (p: P) => <svg {...base(p)}><path d="M12 15V4M8 8l4-4 4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" /></svg>;
export const DownloadIcon = (p: P) => <svg {...base(p)}><path d="M12 4v11M8 11l4 4 4-4M5 20h14" /></svg>;
export const PinIcon = (p: P) => <svg {...base(p)}><path d="M9 4h6M10 4l-.5 6L6.5 13h11L14.5 10 14 4M12 13v7" /></svg>;
export const TagIcon = (p: P) => <svg {...base(p)}><path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7a1 1 0 0 1 .7.3l7.3 7.3a1 1 0 0 1 0 1.4l-7.7 7.7a1 1 0 0 1-1.4 0L3.8 12.9a1 1 0 0 1-.3-.7z" /><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" /></svg>;
export const BookmarkIcon = (p: P) => <svg {...base(p)}><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z" /></svg>;
export const SettingsIcon = (p: P) => <svg {...base(p)}><path d="M4 7h9M17 7h3M4 17h3M11 17h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></svg>;
export const MoreIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><circle cx="5.5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18.5" cy="12" r="1.5" /></svg>;
export const SyncIcon = (p: P) => <svg {...base(p)}><path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4" /></svg>;
export const LoopIcon = (p: P) => <svg {...base(p)}><path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3" /></svg>;

// Media and input
export const MicIcon = (p: P) => <svg {...base(p)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>;
export const MicOffIcon = (p: P) => <svg {...base(p)}><path d="M4 4l16 16M9 9v2a3 3 0 0 0 5 2M15 9V6a3 3 0 0 0-5.5-1.7M5 11a7 7 0 0 0 11 5.7M12 18v3" /></svg>;
export const CameraIcon = (p: P) => <svg {...base(p)}><path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><circle cx="12" cy="13.5" r="3.5" /></svg>;
export const EyeIcon = (p: P) => <svg {...base(p)}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>;
export const LockIcon = (p: P) => <svg {...base(p)}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>;

// Agent and context
export const MemoryIcon = (p: P) => <svg {...base(p)}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v18M12.5 8h3M12.5 12h3" /></svg>;
export const NotebookIcon = (p: P) => <svg {...base(p)}><path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13C17 4 14 4.5 12 6zM12 6v13" /></svg>;
export const PlanIcon = (p: P) => <svg {...base(p)}><path d="M3.5 6.5L5 8l3-3M11 6.5h9M3.5 12.5L5 14l3-3M11 12.5h9M5.5 19h.01M11 19h9" /></svg>;
export const CheckpointIcon = (p: P) => <svg {...base(p)}><path d="M5 21V4M5 4h11l-2 4 2 4H5" /></svg>;
export const BranchIcon = (p: P) => <svg {...base(p)}><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 7v10M18 10c0 4-3 5-7 5H6" /></svg>;
export const ContextIcon = (p: P) => <svg {...base(p)}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 6.5h8M10.5 3h3" /></svg>;
export const LayersIcon = (p: P) => <svg {...base(p)}><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3zM3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" /></svg>;
export const HistoryIcon = (p: P) => <svg {...base(p)}><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 8v4l3 2" /></svg>;
export const ThoughtIcon = (p: P) => <svg {...base(p)}><path d="M7.5 16a4 4 0 0 1-.8-7.9 5 5 0 0 1 9.6-.7A3.8 3.8 0 0 1 17 16H7.5z" /><circle cx="6.5" cy="19.2" r="1" /><circle cx="4" cy="22" r=".5" /></svg>;

// Trust and review
export const CitationIcon = (p: P) => <svg {...base(p)}><path d="M9.5 7C6.5 7.5 5 9.5 5 12.5V17h4.5v-4.5H5M19 7c-3 .5-4.5 2.5-4.5 5.5V17H19v-4.5h-4.5" /></svg>;
export const SourceIcon = (p: P) => <svg {...base(p)}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" /></svg>;
export const ApproveIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></svg>;
export const NeedsReviewIcon = (p: P) => <svg {...base(p)}><path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M13 3l5 5v2M13 3v5h5" /><circle cx="16" cy="16" r="3" /><path d="M18.2 18.2L21 21" /></svg>;

// AI actions
export const AIEditIcon = (p: P) => <svg {...base(p)}><path d="M4 20l.8-3.2L14.5 7a2 2 0 0 1 2.8 2.8L7.6 19.5 4 20zM13 8.5l2.5 2.5" />{spark("M19 2.5l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z")}</svg>;
export const AISummarizeIcon = (p: P) => <svg {...base(p)}><path d="M4 5h16M4 10h10M4 15h5M4 20h5" />{spark("M17 11l1.3 3.7L22 16l-3.7 1.3L17 21l-1.3-3.7L12 16l3.7-1.3z")}</svg>;
export const AIEnhanceIcon = (p: P) => <svg {...base(p)}><path d="M4 20L14 10" />{spark("M17.5 3l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM7 4l.6 1.4L9 6l-1.4.6L7 8l-.6-1.4L5 6l1.4-.6z")}</svg>;
export const AISuggestIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><path d="M9 8l1.8 4.2L15 14l-4.2 1.8L9 20l-1.8-4.2L3 14l4.2-1.8zM18 3l1 2.3 2.3 1-2.3 1-1 2.3-1-2.3-2.3-1 2.3-1z" /></svg>;
export const RevertAIIcon = (p: P) => <svg {...base(p)}><path d="M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />{spark("M14.5 12l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z")}</svg>;
export const ArrowRightIcon = (p: P) => <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const PaletteIcon = (p: P) => <svg {...base(p)}><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.2-1-1.5-1-2.7 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z" /><circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="10" cy="7" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="7.5" r="1" fill="currentColor" stroke="none" /></svg>;
```

## tattva/molecules/Callout.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, InfoIcon } from "../lib/icons";
import type { Tone } from "../atoms/Badge";

const calloutTones: Record<Exclude<Tone, "neutral" | "accent" | "lime" | "unsure" | "celebrate">, string> = {
  info: "bg-info-soft text-info-fg",
  success: "bg-success-soft text-success-fg",
  warning: "bg-warning-soft text-warning-fg",
  danger: "bg-danger-soft text-danger-fg",
};

export function Callout({ tone = "info", title, children, action }: { tone?: keyof typeof calloutTones; title?: string; children?: ReactNode; action?: ReactNode }) {
  const Icon = tone === "info" || tone === "success" ? InfoIcon : AlertIcon;
  return (
    <div role={tone === "danger" ? "alert" : "status"} className={cn("flex gap-3 rounded-card p-4 text-body leading-5 max-sm:flex-wrap", calloutTones[tone])}>
      <Icon className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        {title && <p className="font-medium">{title}</p>}
        {children && <div className={cn(title && "mt-0.5")}>{children}</div>}
      </div>
      {action && <div className="shrink-0 max-sm:basis-full max-sm:pl-8">{action}</div>}
    </div>
  );
}
```

## tattva/molecules/CodeBlock.tsx

```tsx
import { useState } from "react";
import { CheckIcon, CopyIcon } from "../lib/icons";

export function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard unavailable */ }
  };
  return (
    <figure className="overflow-hidden rounded-card border border-line bg-code text-code-fg">
      <figcaption className="flex items-center justify-between border-b border-code-line px-3 py-1.5 text-small leading-4 text-code-muted">
        <span className="font-mono">{language}</span>
        <button type="button" onClick={copy} className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 hover:text-code-fg">
          {copied ? <CheckIcon width={12} height={12} /> : <CopyIcon width={12} height={12} />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </figcaption>
      <pre tabIndex={0} className="overflow-x-auto p-3 font-mono text-compact leading-6"><code>{code}</code></pre>
    </figure>
  );
}
```

## tattva/molecules/Collapsible.tsx

```tsx
import { useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";
import { usePresence } from "../hooks/usePresence";

export interface CollapsibleProps {
  header: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * A header that shows and hides what is under it. The content grows open in --dur-base and closes faster in --dur-fast.
 * Closed content is hidden from everyone, not just from sight. Under reduced motion it simply appears.
 */
export function Collapsible({ header, children, defaultOpen = false, className }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const { present } = usePresence(open);
  // `shown` turns on one frame after the content mounts, so the height has a closed state to grow from.
  const [shown, setShown] = useState(defaultOpen);
  // Clipping is only needed while the height moves; once open, focus rings inside are not cut off.
  const [settled, setSettled] = useState(defaultOpen);
  useEffect(() => {
    setSettled(false);
    if (!open) { setShown(false); return; }
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, [open]);
  return (
    <div className={className}>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 text-left">
        <ChevronIcon className={cn("shrink-0 text-fg-subtle transition-transform duration-[var(--dur-fast)]", open && "rotate-90")} />
        {header}
      </button>
      <div id={id} hidden={!present} onTransitionEnd={(e) => { if (e.target === e.currentTarget && open) setSettled(true); }}
        className={cn("grid transition-[grid-template-rows,opacity] ease-(--ease-arrive)", shown ? "grid-rows-[1fr] opacity-100 duration-(--dur-base)" : "grid-rows-[0fr] opacity-0 duration-(--dur-fast)")}>
        <div className={cn("min-h-0", !(shown && settled) && "overflow-hidden")}>{children}</div>
      </div>
    </div>
  );
}
```

## tattva/molecules/Combobox.tsx

```tsx
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { TextField } from "../atoms/TextField";
import { cn } from "../lib/cn";
import { SearchIcon } from "../lib/icons";

export interface ComboboxOption {
  value: string;
  label: string;
  /** Small text on the right of the row, such as a category. */
  hint?: string;
}

export interface ComboboxProps {
  /** The text in the box. Always the text, never an id. */
  value: string;
  /** Called on every keystroke, and with the option's label when a suggestion is picked. */
  onChange: (value: string) => void;
  options: ComboboxOption[];
  /** Labels shown before typing. A label that matches an option uses that option's value. */
  popular?: string[];
  /** Called when a suggestion is picked ("option") or the typed text is accepted ("typed"). */
  onSelect?: (value: string, how: "option" | "typed") => void;
  /** Accessible name of the box. */
  label: string;
  placeholder?: string;
  /** Text of the last row while typing, which keeps exactly what was typed. */
  useTypedLabel?: (typed: string) => string;
  /** Line under the popular names, saying any name can be typed. */
  emptyHint?: string;
  invalid?: boolean;
  disabled?: boolean;
  /** Set by Field. */
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  required?: boolean;
  className?: string;
}

type Row = { key: string; value: string; label: string; hint?: string; how: "option" | "typed" };
const MAX = 6;

/**
 * A search box with suggestions that is never a closed list. Whatever is typed can be used. WAI-ARIA combobox with list
 * autocomplete: focus stays in the input and the active option is named with aria-activedescendant.
 */
export function Combobox({ value, onChange, options, popular, onSelect, label, placeholder, useTypedLabel, emptyHint = "Not here? Type its name above.", invalid, disabled, id, className, ...aria }: ComboboxProps) {
  const uid = useId();
  const listId = `${uid}-list`;
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [active, setActive] = useState(-1);
  const list = useRef<HTMLUListElement>(null);

  const typed = value.trim();
  const q = typed.toLowerCase();
  const rows = useMemo<Row[]>(() => {
    if (!typed) {
      return (popular ?? []).map((p) => {
        const o = options.find((x) => x.label.toLowerCase() === p.toLowerCase());
        return { key: `p-${p}`, value: o?.value ?? p, label: o?.label ?? p, hint: o?.hint, how: "option" as const };
      });
    }
    const starts = options.filter((o) => o.label.toLowerCase().startsWith(q));
    const contains = options.filter((o) => !o.label.toLowerCase().startsWith(q) && o.label.toLowerCase().includes(q));
    const found: Row[] = [...starts, ...contains].slice(0, MAX).map((o) => ({ key: `o-${o.value}`, value: o.value, label: o.label, hint: o.hint, how: "option" as const }));
    // An exact match is already in the list, so a second row saying the same thing would only confuse.
    if (!found.some((r) => r.label.toLowerCase() === q)) found.push({ key: "typed", value: typed, label: useTypedLabel ? useTypedLabel(typed) : `Use “${typed}”`, how: "typed" });
    return found;
  }, [typed, q, options, popular, useTypedLabel]);

  const open = focused && !dismissed && !disabled && (typed ? true : rows.length > 0);
  const suggestions = rows.filter((r) => r.how === "option");

  useEffect(() => {
    if (active >= 0) list.current?.children[active]?.scrollIntoView?.({ block: "nearest" });
  }, [active]);

  const pick = (r: Row) => {
    if (r.how === "option") { onChange(r.label); onSelect?.(r.value, "option"); }
    else { if (r.value !== value) onChange(r.value); onSelect?.(r.value, "typed"); }
    setDismissed(true);
    setActive(-1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!rows.length) return;
      e.preventDefault();
      if (!open) { setDismissed(false); setActive(-1); return; }
      const n = rows.length;
      setActive(e.key === "ArrowDown" ? (active + 1) % n : active <= 0 ? n - 1 : active - 1);
    } else if (e.key === "Enter") {
      if (!typed) return;
      e.preventDefault();
      const top = suggestions[0];
      if (open && active >= 0) pick(rows[active]);
      // "ama" then Enter means Amazon: a typed prefix of the top suggestion picks it.
      else if (top && top.label.toLowerCase().startsWith(q)) pick(top);
      else pick({ key: "typed", value: typed, label: typed, how: "typed" });
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      e.stopPropagation();
      setDismissed(true);
      setActive(-1);
    }
  };

  const status = !open ? "" : typed ? (suggestions.length ? `${suggestions.length} ${suggestions.length === 1 ? "suggestion" : "suggestions"}. Use the arrow keys, or press Enter to use what you typed.` : "No suggestions. Press Enter to use what you typed.") : `${rows.length} popular. Or type any name.`;

  return (
    <div className={cn("relative w-full", className)}>
      <TextField
        {...aria} id={id} type="text" role="combobox" autoComplete="off" aria-label={label} aria-expanded={open} aria-controls={listId} aria-autocomplete="list"
        aria-activedescendant={open && active >= 0 ? `${uid}-o${active}` : undefined}
        leading={<SearchIcon />} placeholder={placeholder} value={value} invalid={invalid} disabled={disabled}
        onChange={(e) => { onChange(e.target.value); setDismissed(false); setActive(-1); }}
        onFocus={() => setFocused(true)} onBlur={() => { setFocused(false); setDismissed(false); setActive(-1); }} onKeyDown={onKeyDown} />
      <div className={cn("absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-overlay border border-line bg-raised py-1 shadow-md", !open && "hidden")}>
        <ul ref={list} id={listId} role="listbox" aria-label={`${label} suggestions`} className="m-0 list-none p-0">
          {open && rows.map((r, i) => (
            // mousedown is stopped so the input keeps focus and the list does not close before the click lands.
            <li key={r.key} id={`${uid}-o${i}`} role="option" aria-selected={i === active} onMouseDown={(e) => e.preventDefault()} onClick={() => pick(r)}
              className={cn(
                "flex min-h-9 cursor-pointer items-center justify-between gap-3 px-3 py-1.5 text-body leading-5 text-fg pointer-coarse:min-h-11",
                r.how === "typed" && suggestions.length > 0 && "mt-1 border-t border-line pt-2",
                i === active ? "bg-hover shadow-[inset_3px_0_0_var(--fg)] forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]" : "hover:bg-hover",
              )}>
              <span className={r.how === "typed" ? "font-medium" : undefined}>{r.label}</span>
              {r.hint && <span className="shrink-0 text-small leading-4 text-fg-muted">{r.hint}</span>}
            </li>
          ))}
        </ul>
        {open && !typed && <p className="px-3 pt-1.5 pb-1 text-small leading-4 text-fg-muted">{emptyHint}</p>}
      </div>
      <p role="status" aria-live="polite" className="sr-only">{status}</p>
    </div>
  );
}
```

## tattva/molecules/DatePicker.tsx

```tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Button } from "../atoms/Button";
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";

export interface DatePickerProps {
  /** The chosen day as an ISO date (yyyy-mm-dd), or null when nothing is chosen. */
  value: string | null;
  onChange: (value: string) => void;
  /** Earliest day that can be picked (ISO). Earlier days are shown but disabled. */
  min?: string;
  /** Latest day that can be picked (ISO). Later days are shown but disabled. Defaults to today. */
  max?: string;
  /** Today as an ISO date. Set it for tests and docs. Defaults to the real date on this device. */
  today?: string;
  /** Accessible name of the calendar grid, such as "Date it happened". */
  label: string;
  /** BCP 47 locale for month, weekday and day names. */
  locale?: string;
  className?: string;
}

// All date maths is in UTC on yyyy-mm-dd strings, so a day never shifts with the time zone.
const DAY = 86_400_000;
const toUTC = (iso: string) => { const [y, m, d] = iso.split("-").map(Number); return Date.UTC(y, m - 1, d); };
const toISO = (t: number) => new Date(t).toISOString().slice(0, 10);
const addDays = (iso: string, n: number) => toISO(toUTC(iso) + n * DAY);
const daysIn = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
const monthKey = (iso: string) => iso.slice(0, 7);
// Clamps the day so 31 Jan plus one month is 28 or 29 Feb, not 3 March.
function addMonths(iso: string, n: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1 + n, 1));
  return toISO(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), Math.min(d, daysIn(t.getUTCFullYear(), t.getUTCMonth()))));
}
const localToday = () => { const n = new Date(); return toISO(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())); };
const weekdayIndex = (iso: string) => (new Date(toUTC(iso)).getUTCDay() + 6) % 7; // Monday is 0

function monthCells(y: number, m: number): (string | null)[] {
  const first = toISO(Date.UTC(y, m, 1));
  const cells: (string | null)[] = Array(weekdayIndex(first)).fill(null);
  for (let d = 1; d <= daysIn(y, m); d++) cells.push(toISO(Date.UTC(y, m, d)));
  while (cells.length % 7) cells.push(null);
  return cells;
}

/** "Sat, 20 Sep 2026 · 6 days ago". Today and yesterday get their own words. */
function describe(iso: string, today: string, fmt: (iso: string, o: Intl.DateTimeFormatOptions) => string) {
  const label = `${fmt(iso, { weekday: "short" })}, ${fmt(iso, { day: "numeric" })} ${fmt(iso, { month: "short" })} ${fmt(iso, { year: "numeric" })}`;
  const ago = Math.round((toUTC(today) - toUTC(iso)) / DAY);
  const when = ago === 0 ? "Today" : ago === 1 ? "Yesterday" : ago > 1 ? `${ago} days ago` : ago === -1 ? "Tomorrow" : `in ${-ago} days`;
  return `${label} · ${when}`;
}

/**
 * An inline month calendar for dates that are almost always recent. It is not a pop-up. Days outside min and max are shown
 * but cannot be picked. It follows the WAI-ARIA date picker grid: one tab stop, arrow keys, Home, End and Page keys.
 */
export function DatePicker({ value, onChange, min, max, today: todayProp, label, locale = "en-IN", className }: DatePickerProps) {
  const today = todayProp ?? localToday();
  const latest = max ?? today;
  const start = value ?? today;
  const [view, setView] = useState(() => ({ y: Number(start.slice(0, 4)), m: Number(start.slice(5, 7)) - 1 }));
  const [focus, setFocus] = useState(start);
  const grid = useRef<HTMLDivElement>(null);
  const moved = useRef(false);

  const fmt = useMemo(() => {
    const cache = new Map<string, Intl.DateTimeFormat>();
    return (iso: string, o: Intl.DateTimeFormatOptions) => {
      const k = JSON.stringify(o);
      let f = cache.get(k);
      if (!f) { f = new Intl.DateTimeFormat(locale, { ...o, timeZone: "UTC" }); cache.set(k, f); }
      return f.format(toUTC(iso));
    };
  }, [locale]);

  const allowed = (iso: string) => iso <= latest && (!min || iso >= min);
  const cells = useMemo(() => monthCells(view.y, view.m), [view]);
  const rows = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
  const viewKey = `${view.y}-${String(view.m + 1).padStart(2, "0")}`;
  const firstOfView = `${viewKey}-01`;
  const prevDisabled = !!min && addDays(firstOfView, -1) < min;
  const nextDisabled = addMonths(firstOfView, 1) > latest;
  // The one day in the tab order: where focus was, else the chosen day, else the first allowed day of the month.
  const tabDay = [focus, value].find((d) => d && monthKey(d) === viewKey && allowed(d)) ?? cells.find((c) => c && allowed(c)) ?? null;

  // After a key press moves focus to a day (possibly in another month), focus its button once it has rendered.
  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    grid.current?.querySelector<HTMLElement>(`[data-day="${focus}"]`)?.focus();
  }, [focus, view]);

  // Follow a value changed from outside, such as the parent's own shortcut buttons.
  useEffect(() => {
    if (!value) return;
    setFocus(value);
    setView({ y: Number(value.slice(0, 4)), m: Number(value.slice(5, 7)) - 1 });
  }, [value]);

  const show = (iso: string) => setView({ y: Number(iso.slice(0, 4)), m: Number(iso.slice(5, 7)) - 1 });
  const shiftMonth = (by: number) => { const n = addMonths(firstOfView, by); show(n); };
  const pick = (iso: string) => { if (!allowed(iso)) return; setFocus(iso); onChange(iso); };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const from = (e.target as HTMLElement).closest<HTMLElement>("[data-day]")?.dataset.day;
    if (!from) return;
    let next: string;
    switch (e.key) {
      case "ArrowLeft": next = addDays(from, -1); break;
      case "ArrowRight": next = addDays(from, 1); break;
      case "ArrowUp": next = addDays(from, -7); break;
      case "ArrowDown": next = addDays(from, 7); break;
      case "Home": next = addDays(from, -weekdayIndex(from)); break;
      case "End": next = addDays(from, 6 - weekdayIndex(from)); break;
      case "PageUp": next = addMonths(from, e.shiftKey ? -12 : -1); break;
      case "PageDown": next = addMonths(from, e.shiftKey ? 12 : 1); break;
      default: return;
    }
    e.preventDefault();
    // A day outside the range is skipped to the nearest allowed day. If that is where we already are, nothing moves.
    if (min && next < min) next = min;
    if (next > latest) next = latest;
    if (next === from) return;
    moved.current = true;
    setFocus(next);
    show(next);
  };

  const quick = [{ text: "Today", iso: today }, { text: "Yesterday", iso: addDays(today, -1) }].filter((q) => allowed(q.iso));
  const heads = Array.from({ length: 7 }, (_, i) => {
    const iso = addDays("2024-01-01", i); // a Monday
    return { short: fmt(iso, { weekday: "narrow" }), long: fmt(iso, { weekday: "long" }) };
  });

  return (
    <div className={cn("w-fit max-w-full rounded-card border border-line bg-surface p-3", className)}>
      {quick.length > 0 && (
        <div className="flex gap-2 pb-3">
          {quick.map((q) => <Button key={q.text} variant="secondary" size="sm" className="pointer-coarse:h-11" onClick={() => pick(q.iso)}>{q.text}</Button>)}
        </div>
      )}
      <div className="flex items-center justify-between gap-2 pb-2">
        <p aria-live="polite" className="px-1 text-body leading-5 font-semibold text-fg">{fmt(firstOfView, { month: "long", year: "numeric" })}</p>
        <div className="flex gap-1">
          {([["Previous month", -1, prevDisabled], ["Next month", 1, nextDisabled]] as const).map(([name, by, off]) => (
            <button key={name} type="button" aria-label={name} disabled={off} onClick={() => shiftMonth(by)}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-control text-fg transition-colors duration-[var(--dur-fast)] hover:bg-hover disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent pointer-coarse:size-11">
              <ChevronIcon className={by < 0 ? "rotate-180" : undefined} />
            </button>
          ))}
        </div>
      </div>
      <div ref={grid} role="grid" aria-label={label} onKeyDown={onKey}>
        <div role="row" className="grid grid-cols-7">
          {heads.map((h) => (
            <div key={h.long} role="columnheader" className="flex h-8 items-center justify-center text-small leading-4 font-medium text-fg-muted">
              <abbr title={h.long} aria-hidden className="no-underline">{h.short}</abbr>
              <span className="sr-only">{h.long}</span>
            </div>
          ))}
        </div>
        {rows.map((row, r) => (
          <div key={r} role="row" className="grid grid-cols-7">
            {row.map((iso, c) => {
              if (!iso) return <div key={c} role="gridcell" aria-hidden className="size-10 pointer-coarse:size-11" />;
              const ok = allowed(iso), chosen = iso === value, isToday = iso === today;
              return (
                <div key={iso} role="gridcell" aria-selected={chosen} className="flex items-center justify-center">
                  <button type="button" data-day={iso} tabIndex={iso === tabDay ? 0 : -1} aria-disabled={!ok || undefined} aria-current={isToday ? "date" : undefined}
                    aria-label={`${fmt(iso, { weekday: "long" })}, ${fmt(iso, { day: "numeric" })} ${fmt(iso, { month: "long" })} ${fmt(iso, { year: "numeric" })}`}
                    onClick={() => pick(iso)}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border-2 text-body leading-5 tabular-nums transition-colors duration-[var(--dur-fast)] pointer-coarse:size-11",
                      isToday ? "border-fg" : "border-transparent",
                      chosen ? "bg-accent font-semibold text-on-accent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]"
                        : ok ? "cursor-pointer text-fg hover:bg-hover" : "cursor-not-allowed text-fg-subtle opacity-50",
                    )}>
                    {Number(iso.slice(8))}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p aria-live="polite" className={cn("px-1 pt-3 text-body leading-5", value ? "font-medium text-fg" : "text-fg-muted")}>
        {value ? describe(value, today, fmt) : "Pick a date"}
      </p>
    </div>
  );
}
```

## tattva/molecules/Field.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon } from "../lib/icons";

export interface FieldControlProps {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  required?: boolean;
}

export interface FieldProps {
  /** Visible label, joined to the control with htmlFor. */
  label: string;
  /** Help text under the control. */
  hint?: string;
  /** Error message. Setting it marks the control invalid. */
  error?: string;
  required?: boolean;
  /** Shows "(optional)" after the label. */
  optional?: boolean;
  /** Receives the id and aria props to spread onto the control. */
  children: (control: FieldControlProps) => ReactNode;
  className?: string;
}

/** Label, control, hint and error in one wrapper, with the ids wired for you. */
export function Field({ label, hint, error, required, optional, children, className }: FieldProps) {
  const uid = useId();
  const id = `${uid}-control`, hintId = `${uid}-hint`, errorId = `${uid}-error`;
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-body leading-5 font-medium text-fg">
        {label}
        {required && <span aria-hidden className="ml-0.5 text-fg-muted">*</span>}
        {optional && !required && <span className="ml-1 font-normal text-fg-muted">(optional)</span>}
      </label>
      {children({ id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined, required: required || undefined })}
      {hint && <p id={hintId} className="text-small leading-4 text-fg-muted">{hint}</p>}
      {/* Always mounted so screen readers pick up the message when it appears. */}
      <div id={errorId} aria-live="polite" className="empty:-mt-1.5">
        {error && <p className="flex items-start gap-1.5 text-small leading-4 text-danger-fg"><AlertIcon className="mt-px shrink-0" width={14} height={14} />{error}</p>}
      </div>
    </div>
  );
}
```

## tattva/molecules/Message.tsx

```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Avatar } from "../atoms/Avatar";

export interface MessageProps {
  role: "user" | "assistant";
  /** True while tokens are still arriving. Shows the caret, sets aria-busy and keeps the streaming text out of live announcements. */
  streaming?: boolean;
  /** Announced once, politely, when streaming ends. */
  completeLabel?: string;
  /** How the person's own turn looks. bubble is a right-aligned bubble. plain is left-aligned serif text with no box, like a line in a letter. Only changes user messages. */
  variant?: "bubble" | "plain";
  /** Show the assistant's avatar. Turn it off for settled lines so the mark appears once, on the latest line; the text then sits flush left. */
  showAvatar?: boolean;
  children: ReactNode;
  /** Slot under the bubble: MessageActions, FeedbackBar, SourceList... */
  footer?: ReactNode;
  className?: string;
}

/**
 * User messages are right-aligned bubbles; assistant messages are unboxed prose
 * with an avatar so long answers stay readable.
 */
export function Message({ role, streaming, completeLabel = "Response complete", variant = "bubble", showAvatar = true, children, footer, className }: MessageProps) {
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
    <div className={cn("flex animate-rise", showAvatar && "gap-3", className)} aria-busy={streaming || undefined}>
      {showAvatar && <Avatar kind="ai" />}
      <div className="min-w-0 flex-1 space-y-3 pt-0.5">
        {/* aria-live is off while tokens arrive, so screen readers are not interrupted per token. */}
        <div aria-live={streaming ? "off" : undefined} className="space-y-4 text-body-lg leading-7 text-fg">
          {children}
          {streaming && <span aria-hidden className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-fg animate-caret" />}
        </div>
        {footer}
        <span role="status" className="sr-only">{announce}</span>
      </div>
    </div>
  );
}
```

## tattva/molecules/RadioGroup.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface RadioOption {
  value: string;
  label: ReactNode;
  /** Visible hint under the label. */
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  /** Name of the group, shown as the legend. */
  label: string;
  /** Hides the legend visually. Screen readers still hear it. */
  hideLabel?: boolean;
  orientation?: "vertical" | "horizontal";
  /** Marks every radio as having an error (red border, aria-invalid). Show the error text yourself. */
  invalid?: boolean;
  disabled?: boolean;
  /** Shared by all radios, which is what gives the browser its arrow-key behaviour. Defaults to a generated one. */
  name?: string;
  className?: string;
}

/** Controlled group of native radios in a fieldset. The browser handles Tab and the arrow keys. */
export function RadioGroup({ options, value, onChange, label, hideLabel, orientation = "vertical", invalid, disabled, name, className }: RadioGroupProps) {
  const auto = useId();
  const groupName = name ?? auto;
  return (
    <fieldset disabled={disabled} className={cn("min-w-0 border-0 p-0 m-0", className)}>
      <legend className={cn("mb-2 p-0 text-body leading-5 font-medium text-fg", hideLabel && "sr-only")}>{label}</legend>
      <div className={cn("flex gap-x-6 gap-y-2", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap")}>
        {options.map((o) => <Radio key={o.value} name={groupName} option={o} checked={o.value === value} invalid={invalid} onSelect={onChange} />)}
      </div>
    </fieldset>
  );
}

function Radio({ name, option, checked, invalid, onSelect }: { name: string; option: RadioOption; checked: boolean; invalid?: boolean; onSelect: (v: string) => void }) {
  const labelId = useId();
  const descId = useId();
  return (
    <label className={cn("inline-flex items-start gap-3 text-body leading-5 text-fg pointer-coarse:min-h-11 pointer-coarse:items-center", option.disabled ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer")}>
      <span className="relative mt-0.5 inline-grid size-5 shrink-0 place-items-center pointer-coarse:mt-0">
        <input type="radio" name={name} value={option.value} checked={checked} disabled={option.disabled}
          aria-invalid={invalid || undefined} aria-labelledby={labelId} aria-describedby={option.description ? descId : undefined}
          onChange={() => onSelect(option.value)}
          className={cn("peer size-5 shrink-0 appearance-none rounded-full border bg-surface transition-colors duration-[var(--dur-fast)] checked:border-accent forced-colors:border-[ButtonText] forced-colors:checked:border-[Highlight]",
            invalid ? "border-danger" : "border-line-strong", option.disabled ? "cursor-not-allowed" : "cursor-pointer")} />
        <span aria-hidden className="pointer-events-none absolute size-2.5 scale-0 rounded-full bg-accent transition-transform duration-[var(--dur-fast)] peer-checked:scale-100 forced-colors:bg-[Highlight]" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span id={labelId}>{option.label}</span>
        {option.description && <span id={descId} className="text-fg-muted">{option.description}</span>}
      </span>
    </label>
  );
}
```

## tattva/molecules/Tabs.tsx

```tsx
import { useEffect, useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { useScrollEdges } from "../hooks/useScrollEdges";
import { useIndicator } from "../hooks/useIndicator";
import { cn } from "../lib/cn";

export interface TabItem {
  id: string;
  label: ReactNode;
  /** A number shown after the label, such as unread items. */
  count?: number;
  disabled?: boolean;
  /** Content for this tab. Only the active tab's panel is rendered. */
  panel?: ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  /** Id of the active tab. */
  value: string;
  onChange: (id: string) => void;
  /** Accessible name of the tab list. */
  label: string;
  variant?: "underline" | "pill";
  /** auto selects a tab when arrow keys reach it. manual only moves focus; Enter or Space selects. */
  activation?: "auto" | "manual";
  /** Tabs share the full width instead of sizing to their label. */
  fill?: boolean;
  className?: string;
}

/**
 * WAI-ARIA tabs. One tab stop (the active tab), arrow keys, Home and End move between tabs. On narrow screens the
 * list scrolls sideways with no visible scrollbar and keeps the active tab in view. Only the active panel is mounted.
 */
export function Tabs({ tabs, value, onChange, label, variant = "underline", activation = "auto", fill, className }: TabsProps) {
  const uid = useId();
  const list = useRef<HTMLDivElement>(null);
  const tabId = (id: string) => `${uid}-tab-${id}`;
  const panelId = (id: string) => `${uid}-panel-${id}`;
  const edges = useScrollEdges(list);
  const mark = useIndicator(list, '[role="tab"][aria-selected="true"]', value);
  const enabled = tabs.filter((t) => !t.disabled);
  const active = tabs.find((t) => t.id === value);
  // If value matches nothing, the first enabled tab takes the tab stop so the list stays reachable.
  const stop = active && !active.disabled ? active.id : enabled[0]?.id;

  useEffect(() => {
    const l = list.current;
    const el = l?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!l || !el) return;
    const a = l.getBoundingClientRect(); const b = el.getBoundingClientRect();
    if (b.left < a.left) l.scrollLeft += b.left - a.left;
    else if (b.right > a.right) l.scrollLeft += b.right - a.right;
  }, [value]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key) || !enabled.length) return;
    const cur = enabled.findIndex((t) => tabId(t.id) === (document.activeElement as HTMLElement | null)?.id);
    const n = enabled.length;
    const j = e.key === "Home" ? 0 : e.key === "End" ? n - 1 : e.key === "ArrowRight" ? (cur + 1) % n : (cur < 0 ? 0 : (cur - 1 + n) % n);
    e.preventDefault();
    const next = enabled[j];
    document.getElementById(tabId(next.id))?.focus();
    if (activation === "auto") onChange(next.id);
  };

  return (
    <div className={className}>
      <div ref={list} role="tablist" aria-label={label} onKeyDown={onKey} style={edges}
        className={cn("relative flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", variant === "underline" ? "gap-1 border-b border-line sm:gap-4" : "gap-1")}>
        {mark && (
          <span aria-hidden style={variant === "underline" ? { ...mark, top: undefined, bottom: 0, height: 2 } : mark}
            className={cn("pointer-events-none forced-colors:hidden", variant === "underline" ? "rounded-full bg-fg" : "rounded-control bg-accent")} />
        )}
        {tabs.map((t) => {
          const on = t.id === value;
          return (
            <button key={t.id} type="button" role="tab" id={tabId(t.id)} aria-selected={on} disabled={t.disabled}
              aria-controls={on && t.panel !== undefined ? panelId(t.id) : undefined} tabIndex={t.id === stop ? 0 : -1}
              onClick={() => { if (!t.disabled) onChange(t.id); }}
              className={cn(
                "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-body font-medium transition-colors duration-[var(--dur-fast)] focus-visible:outline-offset-[-2px] disabled:cursor-not-allowed disabled:text-disabled-fg pointer-coarse:h-11",
                fill && "flex-1",
                variant === "underline"
                  ? cn("h-10 border-b-2 px-3", on ? cn(mark ? "border-transparent" : "border-fg", "text-fg forced-colors:border-[Highlight] forced-colors:text-[Highlight]") : "border-transparent text-fg-muted hover:text-fg forced-colors:border-transparent")
                  : cn("h-9 rounded-control px-4", on ? cn(!mark && "bg-accent", "text-on-accent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]") : "text-fg-muted hover:bg-hover hover:text-fg"),
              )}>
              {t.label}
              {t.count !== undefined && <span className="text-small leading-4 tabular-nums opacity-80">{t.count}</span>}
            </button>
          );
        })}
      </div>
      {active?.panel !== undefined && (
        <div key={active.id} role="tabpanel" id={panelId(active.id)} aria-labelledby={tabId(active.id)} tabIndex={0} className="animate-panel-in pt-4">{active.panel}</div>
      )}
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

## tattva/organisms/Composer.tsx

```tsx
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { PaperclipIcon, SendIcon, StopIcon } from "../lib/icons";
import { IconButton } from "../atoms/Button";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface ComposerProps {
  onSend: (text: string) => void;
  /** While true the send button becomes Stop and calls onStop. */
  generating?: boolean;
  onStop?: () => void;
  placeholder?: string;
  /** Example messages that take turns as the placeholder while the box is empty. With reduced motion the first one stays. Overrides placeholder. */
  placeholders?: string[];
  /** Milliseconds each example stays. Default 4000. */
  placeholderInterval?: number;
  maxLength?: number;
  /** Called when Attach file is pressed. The attach button renders only when this is provided. */
  onAttach?: () => void;
  /** Extra controls (model picker, tools toggle) rendered left of the send button. */
  tools?: ReactNode;
  disabled?: boolean;
}

export function Composer({ onSend, generating, onStop, onAttach, placeholder = "Message the assistant…", placeholders, placeholderInterval = 4000, maxLength = 4000, tools, disabled }: ComposerProps) {
  const [value, setValue] = useState("");
  const [turn, setTurn] = useState(0);
  const reduced = useReducedMotion();
  const rotating = !!placeholders && placeholders.length > 1 && !reduced && value === "";
  useEffect(() => {
    if (!rotating) return;
    const t = window.setInterval(() => setTurn((n) => n + 1), placeholderInterval);
    return () => window.clearInterval(t);
  }, [rotating, placeholderInterval]);
  const shownPlaceholder = placeholders?.length ? placeholders[(rotating ? turn : 0) % placeholders.length] : placeholder;
  const ref = useRef<HTMLTextAreaElement>(null);
  const inputId = useId();
  const canSend = value.trim().length > 0 && !disabled;

  const submit = () => {
    if (!canSend || generating) return;
    onSend(value.trim());
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };
  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends, Shift+Enter newline. Never send mid IME composition.
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); submit(); }
  };
  const grow = (el: HTMLTextAreaElement) => { el.style.height = "auto"; el.style.height = `${Math.min(el.scrollHeight, 200)}px`; };
  const nearLimit = value.length > maxLength * 0.9;

  return (
    <div className={cn("rounded-field border border-line-strong bg-surface shadow-sm transition-shadow focus-within:border-fg-subtle focus-within:shadow-md has-[textarea:focus-visible]:outline-2 has-[textarea:focus-visible]:outline-offset-2 has-[textarea:focus-visible]:outline-[var(--focus-ring)]", disabled && "opacity-(--disabled-opacity)")}>
      <label htmlFor={inputId} className="sr-only">Message</label>
      <textarea enterKeyHint="send"
        id={inputId} ref={ref} rows={1} value={value} maxLength={maxLength} disabled={disabled}
        placeholder={shownPlaceholder}
        onChange={(e) => { setValue(e.target.value); grow(e.target); }}
        onKeyDown={onKey}
        className="block w-full resize-none bg-transparent px-5 pt-4 pb-1 text-body-lg leading-relaxed outline-none [field-sizing:content] placeholder:text-fg-subtle"
      />
      <div className="flex flex-wrap items-center gap-1.5 px-2.5 pb-2.5">
        {onAttach && <IconButton label="Attach file" size="sm" variant="secondary" onClick={onAttach}><PaperclipIcon /></IconButton>}
        {tools}
        <span className="ml-auto flex items-center gap-1.5">
        {nearLimit && <span className="mr-2 text-small leading-4 text-warning-fg" aria-live="polite">{value.length}/{maxLength}</span>}
        {generating
          ? <IconButton label="Stop generating" variant="secondary" onClick={onStop}><StopIcon /></IconButton>
          : <IconButton label="Send message" variant="lime" disabled={!canSend} onClick={submit}><SendIcon /></IconButton>}
        </span>
      </div>
    </div>
  );
}
```

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

## tattva/organisms/Markdown.tsx

```tsx
import { Fragment, type ReactNode } from "react";
import { CitationMarker } from "../atoms/CitationMarker";
import { CodeBlock } from "../molecules/CodeBlock";

/**
 * Small, dependency-free Markdown renderer for assistant output.
 * - Builds React elements only (no innerHTML), so model output cannot inject markup.
 * - Tolerates partial input: an unclosed code fence renders as code while streaming.
 * - Links are limited to http(s)/mailto. `[1]` becomes a CitationMarker.
 * - Lists nest up to 3 levels by leading-space indentation (2 or 4 spaces per level, or tabs). Each list is ordered or not by its own first item.
 * Supports: headings, paragraphs, bold, italic, inline code, links, lists, blockquotes, tables, hr, fenced code.
 */

const SAFE_URL = /^(https?:\/\/|mailto:)/i;

function inline(text: string, keyBase = ""): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*)|(\[([^\]]+)\]\(([^)\s]+)\))|(\[(\d{1,2})\])/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${keyBase}${i++}`;
    if (m[1]) out.push(<code key={k} className="rounded bg-sunken px-1 py-0.5 font-mono text-[0.9em]">{m[1].slice(1, -1)}</code>);
    else if (m[2]) out.push(<strong key={k} className="font-semibold">{inline(m[2].slice(2, -2), k)}</strong>);
    else if (m[3]) out.push(<em key={k}>{inline(m[3].slice(1, -1), k)}</em>);
    else if (m[4]) {
      out.push(SAFE_URL.test(m[6])
        ? <a key={k} href={m[6]} target="_blank" rel="noreferrer noopener" className="text-accent-fg underline underline-offset-2 hover:text-accent">{m[5]}</a>
        : <Fragment key={k}>{m[5]}</Fragment>);
    } else if (m[7]) out.push(<CitationMarker key={k} n={Number(m[8])} />);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const isTableSep = (l?: string) => !!l && /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
const cells = (l: string) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

const LIST_RE = /^([ \t]*)([-*+]|\d+\.)\s+(.*)$/;
const MAX_DEPTH = 3;
interface ListItem { depth: number; ordered: boolean; text: string }

/** Turn consecutive list lines into items with a depth of 0 to 2, from leading whitespace. Tabs count as 4 spaces. */
function listItems(raw: string[]): ListItem[] {
  const stack: number[] = [];
  return raw.map((line) => {
    const m = line.match(LIST_RE)!;
    const indent = m[1].replace(/\t/g, "    ").length;
    while (stack.length && indent < stack[stack.length - 1]) stack.pop();
    if (!stack.length || indent > stack[stack.length - 1]) { if (stack.length < MAX_DEPTH) stack.push(indent); }
    return { depth: stack.length - 1, ordered: /\d/.test(m[2]), text: m[3] };
  });
}

/** Render items from `from` as one list at `depth`. The list is ordered or not by its first item and ends when a sibling of the other type starts. */
function renderList(items: ListItem[], from: number, depth: number, key: string | number): [ReactNode, number] {
  const ordered = items[from].ordered;
  const Tag = ordered ? "ol" : "ul";
  const lis: ReactNode[] = [];
  let i = from;
  while (i < items.length && items[i].depth >= depth) {
    const it = items[i];
    if (it.depth === depth && it.ordered !== ordered) break;
    if (it.depth > depth) break;
    i++;
    let nested: ReactNode = null;
    if (i < items.length && items[i].depth > depth) {
      const nestedNodes: ReactNode[] = [];
      while (i < items.length && items[i].depth > depth) {
        const [node, next] = renderList(items, i, depth + 1, nestedNodes.length);
        nestedNodes.push(node); i = next;
      }
      nested = nestedNodes;
    }
    lis.push(<li key={lis.length}>{inline(it.text)}{nested}</li>);
  }
  return [<Tag key={key} className={`space-y-1 pl-5 ${depth > 0 ? "mt-1 " : ""}${ordered ? "list-decimal" : "list-disc"} marker:text-fg-subtle`}>{lis}</Tag>, i];
}

export function Markdown({ children }: { children: string }) {
  const lines = children.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0, k = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    const fence = line.match(/^```\s*([\w+-]*)/);
    if (fence) {
      const buf: string[] = []; i++;
      while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]);
      i++; // closing fence (may be missing while streaming)
      blocks.push(<CodeBlock key={k++} language={fence[1] || "text"} code={buf.join("\n")} />);
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const size = ["text-title-xs leading-7", "text-subhead leading-7", "text-lead leading-6", "text-body-lg"][h[1].length - 1];
      blocks.push(<p key={k++} role="heading" aria-level={h[1].length + 1} className={`${size} mt-2 font-semibold tracking-tight`}>{inline(h[2])}</p>);
      i++; continue;
    }
    if (/^\s*([-*_])\1{2,}\s*$/.test(line)) { blocks.push(<hr key={k++} className="border-line" />); i++; continue; }
    if (line.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) buf.push(lines[i++].replace(/^>\s?/, ""));
      blocks.push(<blockquote key={k++} className="border-l-2 border-accent-line pl-4 text-fg-muted">{inline(buf.join(" "))}</blockquote>);
      continue;
    }
    if (line.includes("|") && isTableSep(lines[i + 1])) {
      const head = cells(line); i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) rows.push(cells(lines[i++]));
      blocks.push(
        <div key={k++} tabIndex={0} className="overflow-x-auto rounded-card border border-line">
          <table className="w-full text-left text-body leading-5">
            <thead className="bg-sunken text-fg-muted"><tr>{head.map((c, j) => <th key={j} scope="col" className="px-3 py-2 font-medium">{inline(c)}</th>)}</tr></thead>
            <tbody>{rows.map((r, a) => <tr key={a} className="border-t border-line">{r.map((c, j) => <td key={j} className="px-3 py-2">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (LIST_RE.test(line)) {
      const raw: string[] = [];
      while (i < lines.length && LIST_RE.test(lines[i])) raw.push(lines[i++]);
      const items = listItems(raw);
      let at = 0;
      while (at < items.length) {
        // A list that starts indented is still a top-level list, so shift everything up to depth 0.
        const [node, next] = renderList(items, at, 0, k++);
        blocks.push(node); at = next;
      }
      continue;
    }
    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(```|#{1,4}\s|>|[ \t]*([-*+]|\d+\.)\s)/.test(lines[i]) && !(lines[i].includes("|") && isTableSep(lines[i + 1]))) buf.push(lines[i++]);
    blocks.push(<p key={k++} className="[overflow-wrap:anywhere]">{inline(buf.join(" "))}</p>);
  }
  return <>{blocks}</>;
}
```

## tattva/organisms/MessageList.tsx

```tsx
import type { ReactNode } from "react";

/**
 * Labelled log for a thread. New messages are announced politely. A streaming Message opts its own text out
 * of announcements and says "Response complete" once when it finishes.
 */
export function MessageList({ children, label = "Conversation" }: { children: ReactNode; label?: string }) {
  return <div role="log" aria-label={label} aria-live="polite" aria-relevant="additions" className="mx-auto flex w-full max-w-3xl flex-col gap-6">{children}</div>;
}
```
