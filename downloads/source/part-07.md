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
