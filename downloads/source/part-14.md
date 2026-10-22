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

## tattva/lib/embedded.ts

```ts
import { createContext } from "react";

/**
 * True inside documentation previews. Page-level components such as AppShell render plain
 * containers instead of landmarks (main, aside) there, so a docs page keeps one main landmark.
 */
export const EmbeddedContext = createContext(false);
```
