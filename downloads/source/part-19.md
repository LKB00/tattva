## tattva/molecules/CameraMovePicker.tsx

```tsx
import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon } from "../lib/icons";
import { SegmentedControl } from "../atoms/SegmentedControl";

export type CameraMove =
  | "static" | "pushIn" | "pullOut" | "panLeft" | "panRight" | "tiltUp" | "tiltDown"
  | "truckLeft" | "truckRight" | "orbit" | "crane" | "tracking" | "handheld";

export type CameraStrength = "subtle" | "strong";

/** Plain names and one-line meanings, so nobody has to learn camera jargon. */
export const cameraMoveInfo: Record<CameraMove, { name: string; meaning: string }> = {
  static: { name: "Static", meaning: "The camera does not move." },
  pushIn: { name: "Push in", meaning: "The camera moves closer to the subject." },
  pullOut: { name: "Pull out", meaning: "The camera moves away from the subject." },
  panLeft: { name: "Pan left", meaning: "The camera turns to the left." },
  panRight: { name: "Pan right", meaning: "The camera turns to the right." },
  tiltUp: { name: "Tilt up", meaning: "The camera tips upward." },
  tiltDown: { name: "Tilt down", meaning: "The camera tips downward." },
  truckLeft: { name: "Truck left", meaning: "The camera slides sideways to the left." },
  truckRight: { name: "Truck right", meaning: "The camera slides sideways to the right." },
  orbit: { name: "Orbit", meaning: "The camera circles around the subject." },
  crane: { name: "Crane up", meaning: "The camera rises above the scene." },
  tracking: { name: "Tracking", meaning: "The camera follows a moving subject." },
  handheld: { name: "Handheld", meaning: "A slight, natural shake, as if held by hand." },
};

export const allCameraMoves = Object.keys(cameraMoveInfo) as CameraMove[];

export interface CameraMovePickerProps {
  /** Chosen moves, in the order they were picked. Static is never combined with other moves. */
  value: CameraMove[];
  onChange: (value: CameraMove[]) => void;
  /** Visible name of the group. */
  label?: string;
  /** Moves to offer, in order. Defaults to all of them. */
  moves?: CameraMove[];
  /** How many moves can be combined. 1 makes it a single choice. */
  max?: number;
  /** Moves the chosen model can make. Others stay visible but cannot be picked. Leave out when all are supported. */
  supported?: CameraMove[];
  /** Why the other moves cannot be picked, for example "Not available with Reel Lite". */
  unsupportedReason?: string;
  /** How strong the move is. Shown only with onStrengthChange and a moving choice. */
  strength?: CameraStrength;
  onStrengthChange?: (strength: CameraStrength) => void;
  /** Turns the whole picker off, for example while a take is generating. */
  disabled?: boolean;
  className?: string;
}

/* ---------- diagrams ----------
   Each diagram is a frame with a subject and a fixed arrow for the move. On hover or keyboard focus the subject moves
   once, as it would appear in the shot, and holds. It never loops. Under reduced motion nothing moves: the arrow and the
   still subject already say what the move is. */

const still = "transition-transform duration-(--dur-slow) ease-(--ease-out) transform-fill origin-center motion-reduce:transition-none motion-reduce:translate-none! motion-reduce:scale-none! motion-reduce:rotate-none!";

/** Where the subject goes during the preview, written as utilities that only apply while the tile is hovered or focused. */
const subjectMotion: Record<CameraMove, string> = {
  static: "",
  pushIn: "group-hover:scale-150 group-focus-visible:scale-150",
  pullOut: "scale-150 group-hover:scale-100 group-focus-visible:scale-100",
  panLeft: "group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5",
  panRight: "group-hover:-translate-x-1.5 group-focus-visible:-translate-x-1.5",
  tiltUp: "group-hover:translate-y-1 group-focus-visible:translate-y-1",
  tiltDown: "group-hover:-translate-y-1 group-focus-visible:-translate-y-1",
  truckLeft: "group-hover:translate-x-2 group-focus-visible:translate-x-2",
  truckRight: "group-hover:-translate-x-2 group-focus-visible:-translate-x-2",
  orbit: "group-hover:scale-x-50 group-focus-visible:scale-x-50",
  crane: "group-hover:translate-y-1 group-hover:scale-90 group-focus-visible:translate-y-1 group-focus-visible:scale-90",
  tracking: "",
  handheld: "group-hover:translate-x-0.5 group-hover:rotate-6 group-focus-visible:translate-x-0.5 group-focus-visible:rotate-6",
};

/** Background marks that move instead of the subject (the subject stays centred while the world slides by). */
const groundMotion: Partial<Record<CameraMove, string>> = {
  tracking: "group-hover:-translate-x-2 group-focus-visible:-translate-x-2",
};

/** The fixed arrow (or mark) for each move, drawn in a 32 by 24 box. */
const arrows: Record<CameraMove, ReactNode> = {
  static: <path d="M13 21h6M16 18v3" />,
  pushIn: <path d="M4 5l3 3M28 5l-3 3M4 19l3-3M28 19l-3-3" />,
  pullOut: <path d="M7 8L4 5M25 8l3-3M7 16l-3 3M25 16l3 3M4 7V5h2M28 7V5h-2M4 17v2h2M28 17v2h-2" />,
  panLeft: <path d="M11 21H5M7 19l-2 2 2 2" />,
  panRight: <path d="M21 21h6M25 19l2 2-2 2" />,
  tiltUp: <path d="M28 15V7M26 9l2-2 2 2" />,
  tiltDown: <path d="M28 9v8M26 15l2 2 2-2" />,
  truckLeft: <path d="M22 21H5M7 19l-2 2 2 2" />,
  truckRight: <path d="M10 21h17M25 19l2 2-2 2" />,
  orbit: <path d="M7 19c3 3 15 3 18 0M23 17l2 2-2.5 1" />,
  crane: <path d="M28 18V5M26 7l2-2 2 2" />,
  tracking: <path d="M21 4h6M25 2l2 2-2 2" />,
  handheld: <path d="M5 21l2-1.5 2 1.5 2-1.5 2 1.5" />,
};

function MoveDiagram({ move }: { move: CameraMove }) {
  return (
    <svg aria-hidden viewBox="0 0 32 24" className="h-6 w-8 shrink-0 overflow-visible" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="1.5" width="28" height="21" rx="2.5" strokeOpacity={0.35} />
      <g className={cn(still, groundMotion[move])} strokeOpacity={0.45}>
        <path d="M6 17h20" />
        {move === "tracking" && <path d="M9 15v4M15 15v4M21 15v4" />}
      </g>
      <g className={cn(still, subjectMotion[move])}>
        <circle cx="16" cy="9" r="2.2" fill="currentColor" stroke="none" />
        <path d="M13 15c.5-2.2 1.6-3.2 3-3.2s2.5 1 3 3.2" />
      </g>
      <g strokeWidth={1.75}>{arrows[move]}</g>
    </svg>
  );
}

/**
 * Pick a camera move by name, with a small diagram for each one. Moves can be combined up to `max`. Moves the model
 * cannot make stay visible, cannot be picked, and say why in words. The diagram moves once on hover or focus and never
 * under reduced motion.
 */
export function CameraMovePicker({
  value, onChange, label = "Camera move", moves = allCameraMoves, max = 1, supported, unsupportedReason = "Not available with this model",
  strength, onStrengthChange, disabled = false, className,
}: CameraMovePickerProps) {
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const single = max <= 1;
  const full = !single && value.length >= max;
  const isSupported = (m: CameraMove) => !supported || supported.includes(m);
  const unsupported = moves.filter((m) => !isSupported(m));

  // Why a tile cannot be pressed right now, or null when it can.
  const blockedWhy = (m: CameraMove): string | null => {
    if (disabled) return null;
    if (!isSupported(m)) return unsupportedReason;
    if (full && !value.includes(m) && m !== "static") return `Up to ${max} moves. Remove one to pick another.`;
    return null;
  };

  const toggle = (m: CameraMove) => {
    if (disabled || blockedWhy(m)) return;
    const on = value.includes(m);
    if (single) { onChange(on && m !== "static" ? ["static"] : [m]); return; }
    if (m === "static") { onChange(["static"]); return; }
    const rest = value.filter((x) => x !== "static");
    const next = on ? rest.filter((x) => x !== m) : [...rest, m];
    onChange(next.length ? next : ["static"]);
  };

  // One tab stop: the first chosen tile, or the first tile. Arrow keys move between tiles, Home and End jump.
  const firstChosen = Math.max(0, moves.findIndex((m) => value.includes(m)));
  const onKey = (i: number, e: KeyboardEvent<HTMLButtonElement>) => {
    const n = moves.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    refs.current[next]?.focus();
  };

  const chosen = value.filter((m) => moves.includes(m)).map((m) => cameraMoveInfo[m].name);
  const summary = chosen.length === 0 ? "No move chosen" : chosen.length === 1 ? chosen[0] : `${chosen.slice(0, -1).join(", ")}, then ${chosen[chosen.length - 1].toLowerCase()}`;
  const moving = value.some((m) => m !== "static");
  const reasonId = `${uid}-reason`;
  const limitId = `${uid}-limit`;

  return (
    <div className={cn("min-w-0 space-y-2", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span id={`${uid}-label`} className="text-small leading-4 font-medium text-fg">{label}</span>
        <span className="text-small leading-4.5 text-fg-muted">
          {single ? "Pick one" : `Combine up to ${max}`}<span aria-hidden> · </span><span className="text-fg">{summary}</span>
        </span>
      </div>
      <div role="group" aria-labelledby={`${uid}-label`} aria-describedby={!single ? limitId : undefined}
        className={cn("grid grid-cols-3 gap-1.5 sm:grid-cols-4", disabled && "opacity-(--disabled-opacity)")}>
        {moves.map((m, i) => {
          const on = value.includes(m);
          const why = blockedWhy(m);
          const off = disabled || !!why;
          const info = cameraMoveInfo[m];
          return (
            <button key={m} ref={(el) => { refs.current[i] = el; }} type="button" aria-pressed={on} aria-disabled={off || undefined}
              aria-describedby={!isSupported(m) ? reasonId : undefined} title={why ?? info.meaning}
              tabIndex={i === firstChosen ? 0 : -1} onClick={() => toggle(m)} onKeyDown={(e) => onKey(i, e)}
              className={cn("group tap relative flex min-w-0 flex-col items-center gap-1 rounded-card border px-1.5 pt-2 pb-1.5 text-small leading-4.5 font-medium",
                "transition-colors duration-(--dur-fast)",
                on ? "border-fg bg-surface text-fg shadow-sm" : "border-line text-fg-muted",
                off ? "cursor-not-allowed opacity-(--disabled-opacity)" : "cursor-pointer hover:bg-hover hover:text-fg")}>
              {on && <CheckIcon width={12} height={12} className="absolute top-1 right-1" />}
              <MoveDiagram move={m} />
              <span className="max-w-full truncate">{info.name}</span>
              {!isSupported(m) && <span className="sr-only">, not available</span>}
            </button>
          );
        })}
      </div>
      {!single && <p id={limitId} className={cn("text-small leading-4.5", full ? "text-fg" : "text-fg-muted")}>
        {full ? `${max} of ${max} moves chosen. Remove one to pick another.` : "Static cannot be combined with other moves."}
      </p>}
      {unsupported.length > 0 && (
        <p id={reasonId} className="text-small leading-4.5 text-fg-muted">
          {unsupported.map((m) => cameraMoveInfo[m].name).join(", ")}: {unsupportedReason.charAt(0).toLowerCase() + unsupportedReason.slice(1)}.
        </p>
      )}
      {onStrengthChange && moving && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-small leading-4.5 text-fg-muted">Strength</span>
          <SegmentedControl size="sm" label="Camera move strength" value={strength ?? "subtle"} onChange={onStrengthChange}
            options={[{ value: "subtle", label: "Subtle" }, { value: "strong", label: "Strong" }]} />
        </div>
      )}
    </div>
  );
}
```
