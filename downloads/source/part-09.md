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
