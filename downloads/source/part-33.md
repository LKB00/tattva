## tattva/molecules/JumpToLatest.tsx

```tsx
import { cn } from "../lib/cn";
import { ChevronIcon } from "../lib/icons";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface JumpToLatestProps {
  /** Show the pill. Usually `!atBottom` from useStickToBottom. */
  visible: boolean;
  /** Messages that arrived while the reader was scrolled up. Shown with the "New messages" label when above zero. */
  count?: number;
  /** Scrolls the thread. Usually `scrollToBottom` from useStickToBottom. */
  onClick: () => void;
  /** Label with no unseen messages. */
  label?: string;
  /** Label with unseen messages. */
  newLabel?: string;
  className?: string;
}

/**
 * Floating pill that returns the reader to the newest message. Position it inside a relatively positioned thread.
 * It rises in over 220ms, or appears with no motion when the person prefers reduced motion.
 */
export function JumpToLatest({ visible, count = 0, onClick, label = "Jump to latest", newLabel = "New messages", className }: JumpToLatestProps) {
  const reduced = useReducedMotion();
  if (!visible) return null;
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center", className)}>
      <button type="button" onClick={onClick}
        className={cn("pointer-events-auto inline-flex h-9 cursor-pointer tap items-center gap-2 rounded-control border border-line-strong bg-surface-raised px-4 text-compact text-fg shadow-md hover:bg-hover", !reduced && "animate-rise")}>
        <ChevronIcon className="rotate-90" width={14} height={14} />
        <span>{count > 0 ? newLabel : label}</span>
        {count > 0 && <span className="rounded-control bg-lime px-1.5 text-micro font-medium text-on-lime tabular-nums"><span className="sr-only">, </span>{count}</span>}
      </button>
    </div>
  );
}
```

## tattva/molecules/KeyTakeaway.tsx

```tsx
import { useId, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { SparkleIcon } from "../lib/icons";

export interface KeyTakeawayProps {
  /** Visible label. It names the region. */
  label?: string;
  /** One to three sentences that close the answer. */
  children: ReactNode;
  className?: string;
}

/** Closing summary of an answer. An icon and a text label name the region, so it never relies on color. */
export function KeyTakeaway({ label = "Key takeaway", children, className }: KeyTakeawayProps) {
  const id = useId();
  return (
    <section aria-labelledby={id} className={cn("rounded-card border border-line bg-sunken p-4", className)}>
      <p id={id} className="flex items-center gap-2 text-micro font-bold uppercase tracking-caps text-fg-muted">
        <span className="flex size-5 items-center justify-center rounded-full bg-lime text-on-lime"><SparkleIcon width={11} height={11} /></span>
        {label}
      </p>
      <div className="mt-2 text-body-lg leading-7 text-fg">{children}</div>
    </section>
  );
}
```

## tattva/molecules/LatencyBreakdown.tsx

```tsx
import { useId } from "react";
import { cn } from "../lib/cn";

export type LatencyStageKey = "endpointing" | "stt" | "llm" | "tools" | "tts" | "transport" | "s2s";

export interface LatencyStage {
  key: LatencyStageKey;
  /** Time spent in this stage, in milliseconds. */
  ms: number;
}

export interface LatencyTurn {
  id: string;
  /** Shown in the list, for example "Turn 4" or "Turn 4, 00:52". Defaults to "Turn" and its position. */
  label?: string;
  totalMs: number;
  stages: LatencyStage[];
}

export interface LatencyBreakdownProps {
  /** One reply (turn), or the whole call (stages are medians across turns). */
  mode: "turn" | "call";
  stages: LatencyStage[];
  /** Total time from the end of the person's speech to the first sound of the reply. */
  totalMs: number;
  /** Call mode: spread of turn times. */
  percentiles?: { p50: number; p90: number; p99?: number };
  /** A goal your team set, for example 800. Shown as your team's target, never as a rule. */
  targetMs?: number;
  /** Call mode: every turn. Turns over the target are listed. */
  turns?: LatencyTurn[];
  /** Called when a slow turn is chosen, for example to seek the recording to it. Turns become buttons when given. */
  onTurnSelect?: (id: string) => void;
  /** Heading. Defaults to "Response time" for a turn and "Response time, whole call" for a call. */
  title?: string;
  /** Override stage names, for localisation or your own vocabulary. */
  stageLabels?: Partial<Record<LatencyStageKey, string>>;
  className?: string;
}

const NAMES: Record<LatencyStageKey, string> = {
  endpointing: "End of speech",
  stt: "Speech to text",
  llm: "Model",
  tools: "Tools",
  tts: "Voice",
  transport: "Network",
  s2s: "Speech model",
};

/** Fixed colour per stage, so the same stage looks the same everywhere. Never lime: this is about time, not the AI. */
const SWATCH: Record<LatencyStageKey, string> = {
  endpointing: "bg-(--chart-neutral)",
  stt: "bg-(--chart-1)",
  llm: "bg-(--chart-2)",
  tools: "bg-(--chart-3)",
  tts: "bg-(--chart-4)",
  transport: "bg-(--chart-5)",
  s2s: "bg-(--chart-seq-4)",
};

const fmt = new Intl.NumberFormat("en-GB");
const ms = (n: number) => `${fmt.format(Math.round(n))} ms`;

const slowestOf = (stages: LatencyStage[]) => stages.reduce<LatencyStage | null>((a, s) => (!a || s.ms > a.ms ? s : a), null);

/**
 * Where the time went in a voice turn or a whole call. A stacked bar (decorative) names the slowest stage in words,
 * and a real table follows with every stage in ms. In call mode, turns over the team's target are listed and can
 * seek the recording. On a phone the bar gives way to the table, whose rows carry their own small bars.
 */
export function LatencyBreakdown({ mode, stages, totalMs, percentiles, targetMs, turns, onTurnSelect, title, stageLabels, className }: LatencyBreakdownProps) {
  const id = useId();
  const names = { ...NAMES, ...stageLabels };
  const sum = stages.reduce((a, s) => a + Math.max(0, s.ms), 0) || 1;
  const slowest = slowestOf(stages);
  const over = targetMs !== undefined && totalMs > targetMs;
  const slowTurns = targetMs !== undefined && turns ? turns.filter((t) => t.totalMs > targetMs) : [];
  const heading = title ?? (mode === "turn" ? "Response time" : "Response time, whole call");
  const totalLabel = mode === "turn" ? "This reply" : "Median reply";

  return (
    <section aria-labelledby={`${id}-h`} className={cn("w-full space-y-4 rounded-card border border-line bg-surface p-5 max-sm:p-4", className)}>
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 id={`${id}-h`} className="text-body leading-5 font-semibold text-fg">{heading}</h3>
        {targetMs !== undefined && <p className="text-small leading-4 text-fg-muted">Your team's target: {ms(targetMs)}</p>}
      </header>

      <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
        <div>
          <p className="text-small leading-4 text-fg-muted">{totalLabel}</p>
          <p className="font-mono text-title-sm tabular-nums text-fg">{ms(totalMs)}</p>
          {targetMs !== undefined && (
            <p className={cn("text-small leading-4", over ? "text-danger-fg" : "text-fg-muted")}>
              {over ? `Over target by ${ms(totalMs - targetMs)}` : `Within target, ${ms(targetMs - totalMs)} to spare`}
            </p>
          )}
        </div>
        {percentiles && (
          <dl className="flex gap-5 text-small leading-4">
            {([["P50", percentiles.p50], ["P90", percentiles.p90], ["P99", percentiles.p99]] as const).map(([k, v]) => v !== undefined && (
              <div key={k}>
                <dt className="text-fg-muted"><abbr title={`${k.slice(1)} percent of replies were this fast or faster`} className="no-underline">{k}</abbr></dt>
                <dd className="font-mono text-body leading-5 tabular-nums text-fg">{ms(v)}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {slowest && (
        <p className="text-body leading-5 text-fg">
          Most time: <span className="font-medium">{names[slowest.key].toLowerCase()}</span>, <span className="font-mono tabular-nums">{ms(slowest.ms)}</span>
          <span className="text-fg-muted"> ({Math.round((slowest.ms / sum) * 100)}% of the reply)</span>
        </p>
      )}

      {/* Decorative: the table below carries every number. Hidden on a phone, where the table rows hold the bars. */}
      <div aria-hidden className="max-sm:hidden">
        <div className="flex h-4 w-full overflow-hidden rounded-control bg-sunken">
          {stages.map((s) => (
            <span key={s.key} style={{ width: `${(Math.max(0, s.ms) / sum) * 100}%` }}
              className={cn("h-full border-r border-surface last:border-r-0 motion-safe:animate-grow-x origin-left", SWATCH[s.key], slowest && s.key !== slowest.key && "opacity-60")} />
          ))}
        </div>
      </div>

      <table className="w-full text-compact">
        <caption className="sr-only">{heading}: time per stage in milliseconds</caption>
        <thead>
          <tr className="border-b border-line text-left text-small leading-4 text-fg-muted">
            <th scope="col" className="py-1.5 pr-2 font-medium">Stage</th>
            <th scope="col" className="py-1.5 pr-2 text-right font-medium">Time</th>
            <th scope="col" className="py-1.5 text-right font-medium sm:w-2/5">Share</th>
          </tr>
        </thead>
        <tbody>
          {stages.map((s) => {
            const pct = Math.round((Math.max(0, s.ms) / sum) * 100);
            const top = slowest?.key === s.key;
            return (
              <tr key={s.key} className="border-b border-line last:border-b-0">
                <th scope="row" className={cn("py-2 pr-2 text-left", top ? "font-semibold text-fg" : "font-normal text-fg")}>
                  <span className="flex items-center gap-2">
                    <span aria-hidden className={cn("size-2.5 shrink-0 rounded-full", SWATCH[s.key])} />
                    {names[s.key]}{top && <span className="sr-only"> (slowest)</span>}
                  </span>
                </th>
                <td className="whitespace-nowrap py-2 pr-2 text-right font-mono tabular-nums">{ms(s.ms)}</td>
                <td className="py-2">
                  <span className="flex items-center justify-end gap-2">
                    <span aria-hidden className="h-1.5 w-full max-w-24 min-w-6 overflow-hidden rounded-full bg-sunken sm:hidden">
                      <span className={cn("block h-full", SWATCH[s.key])} style={{ width: `${pct}%` }} />
                    </span>
                    <span className="w-10 text-right font-mono tabular-nums text-fg-muted">{pct}%</span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {mode === "call" && targetMs !== undefined && turns && (
        <div className="space-y-2 border-t border-line pt-4">
          <h4 className="text-small leading-4 font-semibold text-fg">
            {slowTurns.length === 0 ? `No turns over ${ms(targetMs)}` : `${slowTurns.length} of ${turns.length} turns over ${ms(targetMs)}`}
          </h4>
          {slowTurns.length > 0 && (
            <ul className="space-y-1">
              {slowTurns.map((t) => {
                const s = slowestOf(t.stages);
                const name = t.label ?? `Turn ${turns.indexOf(t) + 1}`;
                const body = (
                  <>
                    <span className="font-medium text-fg">{name}</span>
                    <span className="font-mono tabular-nums text-fg">{ms(t.totalMs)}</span>
                    {s && <span className="text-fg-muted">most time: {names[s.key].toLowerCase()}, {ms(s.ms)}</span>}
                  </>
                );
                return (
                  <li key={t.id}>
                    {onTurnSelect ? (
                      <button type="button" onClick={() => onTurnSelect(t.id)}
                        className="flex min-h-9 w-full cursor-pointer flex-wrap items-center gap-x-3 gap-y-0.5 rounded-control px-2 py-1.5 text-left text-compact hover:bg-hover pointer-coarse:min-h-11">
                        {body}
                        <span className="ml-auto text-small leading-4 text-fg-muted">Play from here</span>
                      </button>
                    ) : (
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-0.5 px-2 py-1.5 text-compact">{body}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
```
