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
