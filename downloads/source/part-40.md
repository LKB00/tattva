## tattva/molecules/StatTile.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { MeterBar } from "../atoms/MeterBar";
import { AlertIcon } from "../lib/icons";

export type DeltaDirection = "up" | "down" | "flat";

export interface StatDelta {
  /** Signed text with the unit, for example "+4.2%" or "-120 ms". */
  text: string;
  /** Which way the number moved. Drives the arrow. */
  direction: DeltaDirection;
  /** The comparison period, for example "vs previous 7 days". */
  versus?: string;
}

export interface StatThreshold {
  /** Current value on the same scale as max. */
  value: number;
  /** Upper end of the scale. */
  max: number;
  /** Where the threshold tick sits on the scale. */
  at: number;
  /** Visible name for the tick, for example "Target 800 ms". */
  label: string;
}

export interface StatTileProps {
  /** Metric name in sentence case, without a trailing colon. */
  label: string;
  /** Formatted value, for example "1.24 s" or "$4.2K". */
  value: string;
  /** Set the value in the serif. */
  serif?: boolean;
  /** Change since the comparison period. */
  delta?: StatDelta;
  /** Which direction of change is an improvement. Use "down" for latency, cost and error rate. */
  goodDirection?: "up" | "down" | "neutral";
  /** A visible detail line under the value, such as an interval or a sample size. */
  detail?: string;
  /** Slot for a Sparkline. Pass it with decorative set, since the value and delta already say the numbers. */
  spark?: ReactNode;
  /** Draws a thin scale with a tick at the threshold. */
  threshold?: StatThreshold;
  /** A person has to act on this metric. Shows an amber chip with text. Leave off for ordinary good or bad movement. */
  needsAction?: boolean;
  /** Text of the amber chip. */
  actionText?: string;
  className?: string;
}

const Arrow = ({ d }: { d: DeltaDirection }) => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {d === "up" ? <path d="M12 19V5M5 12l7-7 7 7" /> : d === "down" ? <path d="M12 5v14M5 12l7 7 7-7" /> : <path d="M5 12h14" />}
  </svg>
);

/**
 * One headline number with its change. The delta carries an arrow and text, and a visible "better" or "worse" word,
 * so the meaning never rests on color. goodDirection decides which way counts as better, so a drop in latency reads as good.
 */
export function StatTile({ label, value, serif, delta, goodDirection = "up", detail, spark, threshold, needsAction, actionText = "Needs review", className }: StatTileProps) {
  const verdict = !delta || delta.direction === "flat" || goodDirection === "neutral" ? "none" : delta.direction === goodDirection ? "better" : "worse";
  const tone = verdict === "better" ? "text-success-fg" : verdict === "worse" ? "text-danger-fg" : "text-fg-muted";
  const dirWord = delta ? { up: "up", down: "down", flat: "unchanged" }[delta.direction] : "";
  return (
    <div role="group" aria-label={label} className={cn("min-w-0 rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-small leading-5 text-fg-muted">{label}</p>
        {needsAction && <span className="inline-flex shrink-0 items-center gap-1 rounded-control bg-attention-soft px-2 py-0.5 text-micro leading-4 font-medium text-attention-fg"><AlertIcon width={12} height={12} />{actionText}</span>}
      </div>
      <div className="mt-1 flex items-end justify-between gap-3">
        <p className={cn("min-w-0 text-title-lg leading-9 font-medium tracking-snug text-fg [overflow-wrap:anywhere]", serif && "font-serif font-normal")}>{value}</p>
        {spark && <div className="shrink-0 pb-1">{spark}</div>}
      </div>
      {delta && (
        <p className="mt-1 flex flex-wrap items-center gap-x-1.5 text-small leading-5">
          <span className={cn("inline-flex items-center gap-1 font-medium", tone)}>
            <Arrow d={delta.direction} />
            <span className="sr-only">{dirWord}, </span>{delta.text}
            {verdict !== "none" && <span className="font-normal">{verdict}</span>}
          </span>
          {delta.versus && <span className="text-fg-subtle">{delta.versus}</span>}
        </p>
      )}
      {detail && <p className="mt-1 text-small leading-5 text-fg-muted">{detail}</p>}
      {threshold && (
        <div className="mt-3">
          <div className="relative">
            <MeterBar label={label} value={threshold.value} max={threshold.max} warnAt={needsAction ? threshold.at / threshold.max : undefined}
              valueText={`${value}. ${threshold.label}.`} />
            <span aria-hidden className="absolute -top-1 h-3.5 w-0.5 -translate-x-1/2 rounded-full bg-fg" style={{ left: `${Math.max(0, Math.min(100, (threshold.at / threshold.max) * 100))}%` }} />
          </div>
          <p className="mt-1.5 text-micro leading-4 text-fg-subtle">{threshold.label}</p>
        </div>
      )}
    </div>
  );
}
```

## tattva/molecules/StreamingReveal.tsx

```tsx
import { Fragment, useRef } from "react";
import { cn } from "../lib/cn";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface StreamingRevealProps {
  /** The text received so far. Pass the `text` from useStreamingText or your own buffer. */
  text: string;
  /** True while more text may arrive. The last partial word is held back until it ends, so words land whole. */
  streaming?: boolean;
  className?: string;
}

/**
 * Renders streamed text so each new word fades in once from a faint blur (--dur-base, --ease-arrive).
 * Words that have settled keep their element and never re-animate. New words append in flow, so nothing moves.
 * Under reduced motion the text appears instantly. Words present at first render do not animate.
 */
export function StreamingReveal({ text, streaming = false, className }: StreamingRevealProps) {
  const reduced = useReducedMotion();
  let tokens = text.split(/(\s+)/).filter((t) => t !== "");
  if (streaming && tokens.length > 0 && !/\s$/.test(text)) tokens = tokens.slice(0, -1);
  const settled = useRef<number | null>(null);
  if (settled.current === null) settled.current = tokens.length;
  if (tokens.length < settled.current) settled.current = 0;
  const initial = settled.current;

  if (reduced) return <span className={className}>{tokens.join("")}</span>;
  return (
    <span className={className}>
      {tokens.map((t, i) =>
        /^\s+$/.test(t) ? <Fragment key={i}>{t}</Fragment> : <span key={i} className={cn(i >= initial && "animate-word-in")}>{t}</span>,
      )}
    </span>
  );
}
```

## tattva/molecules/SuggestionCard.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { keepFocus } from "../lib/focus";
import { AlertIcon, SearchIcon, SparkleIcon, UsersIcon } from "../lib/icons";
import { Badge, type Tone } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export type SuggestionCategory = "correctness" | "clarity" | "engagement" | "tone";

const categories: Record<SuggestionCategory, { label: string; icon: ReactNode; tone: Tone }> = {
  correctness: { label: "Correctness", icon: <AlertIcon width={11} height={11} />, tone: "danger" },
  clarity: { label: "Clarity", icon: <SearchIcon width={11} height={11} />, tone: "info" },
  engagement: { label: "Engagement", icon: <SparkleIcon width={11} height={11} />, tone: "success" },
  tone: { label: "Tone", icon: <UsersIcon width={11} height={11} />, tone: "neutral" },
};

export interface SuggestionCardProps {
  category?: SuggestionCategory;
  /** Override the category text, for document-specific categories. */
  categoryLabel?: string;
  /** Override the category icon. */
  categoryIcon?: ReactNode;
  /** Text as written. Shown struck through. */
  original: string;
  /** Proposed replacement. Shown highlighted. Leave empty for a deletion. */
  suggestion: string;
  /** Short reason for the change. */
  explanation?: string;
  onAccept?: () => void;
  onDismiss?: () => void;
  acceptLabel?: string;
  dismissLabel?: string;
  /** Where keyboard focus goes after Accept or Dismiss. By default the next suggestion, else the previous one, else the text. */
  focusAfter?: () => HTMLElement | null;
  className?: string;
}

/** One writing suggestion with a category label, an original-versus-suggested diff, a reason, Accept and Dismiss. Category is always text plus an icon, never color alone. */
export function SuggestionCard({
  category = "correctness", categoryLabel, categoryIcon, original, suggestion, explanation, onAccept, onDismiss,
  acceptLabel = "Accept", dismissLabel = "Dismiss", focusAfter, className,
}: SuggestionCardProps) {
  const ref = useRef<HTMLElement>(null);
  const act = (f?: () => void) => () => { f?.(); keepFocus(ref.current, focusAfter); };
  const c = categories[category];
  const label = categoryLabel ?? c.label;
  return (
    <article ref={ref} aria-label={`${label} suggestion`} className={`w-full max-w-sm space-y-3 rounded-card border border-line bg-surface p-4 text-body leading-5 shadow-sm ${className ?? ""}`}>
      <Badge tone={c.tone}>{categoryIcon ?? c.icon}{label}</Badge>
      <p className="leading-relaxed text-fg">
        <span className="sr-only">Original: </span>
        <del className="text-fg-muted decoration-danger decoration-2">{original}</del>
        {" "}
        <span className="sr-only">Suggested: </span>
        {suggestion ? <ins className="rounded-sm bg-lime-soft px-0.5 text-fg no-underline">{suggestion}</ins> : <span className="text-fg-muted">(remove)</span>}
      </p>
      {explanation && <p className="text-small leading-4 text-fg-muted">{explanation}</p>}
      <div className="flex gap-2">
        <Button size="sm" variant="lime" onClick={act(onAccept)}>{acceptLabel}</Button>
        <Button size="sm" variant="ghost" onClick={act(onDismiss)}>{dismissLabel}</Button>
      </div>
    </article>
  );
}
```

## tattva/molecules/SuggestionChips.tsx

```tsx
export function SuggestionChips({ suggestions, onPick }: { suggestions: string[]; onPick: (s: string) => void }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Suggested prompts">
      {suggestions.map((s) => (
        <li key={s}>
          <button type="button" onClick={() => onPick(s)}
            className="rounded-control border border-line bg-surface px-3.5 py-1.5 text-compact text-fg-muted transition-colors hover:border-line-strong hover:bg-sunken hover:text-fg">
            {s}
          </button>
        </li>
      ))}
    </ul>
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
