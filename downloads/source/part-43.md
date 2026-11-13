## tattva/molecules/TakeCard.tsx

```tsx
import { useId, type CSSProperties, type KeyboardEvent, type MouseEvent, type Ref } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, BranchIcon, CheckIcon, HistoryIcon, InfoIcon, MoreIcon, ShieldIcon, SparkleIcon, XIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Meter } from "../atoms/Meter";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { AILabel } from "./AILabel";
import { Menu, type MenuEntry } from "./Menu";

/* ---------- shared vocabulary for video takes (also used by TakeGrid and TakeVersions) ---------- */

export type TakeStatus = "queued" | "generating" | "finalising" | "done" | "failed" | "blocked" | "cancelled" | "rateLimited";
export type TakeRatio = "16:9" | "9:16" | "1:1" | "4:3" | "21:9";
/** A drawn stand-in frame, made only from colour tokens. Use it in previews and while you have no poster image. */
export type TakeScene = "harbour" | "dusk" | "forest" | "city" | "studio";
export type TakeChargeState = "estimated" | "charged" | "refunded" | "notCharged";

export interface TakeCharge {
  /** Credits (or the unit you pass). Code works it out; never let the model write it. */
  amount: number;
  /** estimated: before or during the run. charged: taken. refunded: taken, then given back. notCharged: never taken. */
  state: TakeChargeState;
  /** Plural unit. Defaults to "credits". */
  unit?: string;
}

export interface TakeBlockedReason {
  /** input: the prompt or a reference was stopped before generating. output: the finished video was stopped by the safety check. */
  where: "input" | "output";
  /** What the policy check said, in plain words. */
  message: string;
  /** One way to rephrase or change the request. */
  suggestion?: string;
}

export interface TakeProvenance {
  /** Model or tool that made the take. Defaults to `model`. */
  madeWith?: string;
  /** When it was made, as display text. */
  made?: string;
  /** What the file carries, one item each, such as "Invisible watermark" or "C2PA Content Credentials". */
  carries?: string[];
  /** What can remove the marks. Defaults to a plain warning that re-uploads can strip metadata. */
  caveat?: string;
}

export const TAKE_STATUS_WORD: Record<TakeStatus, string> = {
  queued: "Queued", generating: "Generating", finalising: "Finalising", done: "Ready", failed: "Failed",
  blocked: "Blocked by content policy", cancelled: "Cancelled", rateLimited: "Paused, too many requests",
};

/** True while a model is really working on the take. Drives the lime working edge and aria-busy. */
export const isTakeWorking = (s: TakeStatus) => s === "queued" || s === "generating" || s === "finalising";

const RATIO: Record<TakeRatio, string> = {
  "16:9": "aspect-video", "9:16": "aspect-[9/16]", "1:1": "aspect-square", "4:3": "aspect-[4/3]", "21:9": "aspect-[21/9]",
};
export const takeRatioClass = (r: TakeRatio) => RATIO[r];

/** "0:08" for the eye. */
export function formatClock(sec: number) {
  const s = Math.max(0, Math.round(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
/** "8 seconds" or "1 minute 4 seconds" for the ear. */
export function formatSpokenDuration(sec: number) {
  const s = Math.max(0, Math.round(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  const part = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
  if (!m) return part(r, "second");
  return r ? `${part(m, "minute")} ${part(r, "second")}` : part(m, "minute");
}

/** "20 credits", "1 credit". */
export function formatCredits(amount: number, unit = "credits") {
  const n = new Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(amount);
  return `${n} ${amount === 1 && unit.endsWith("s") ? unit.slice(0, -1) : unit}`;
}

/** The charge in words. Every ending says whether credits were taken. */
export function chargeText(c: TakeCharge) {
  const amt = formatCredits(c.amount, c.unit);
  switch (c.state) {
    case "estimated": return `Estimated ${amt}`;
    case "charged": return `Charged ${amt}`;
    case "refunded": return `${amt} refunded`;
    case "notCharged": return "Not charged";
  }
}

/* ---------- drawn poster ---------- */

const mix = (a: string, pct: number, b: string) => `color-mix(in oklab, ${a} ${pct}%, ${b})`;

const SCENES: Record<TakeScene, { sky: [string, string]; sun: string; far: string; near: string; city?: boolean }> = {
  harbour: { sky: ["var(--chart-seq-1)", mix("var(--chart-seq-2)", 70, "var(--surface)")], sun: mix("var(--chart-2)", 70, "var(--surface)"), far: "var(--chart-seq-3)", near: "var(--chart-seq-5)" },
  dusk: { sky: [mix("var(--chart-5)", 45, "var(--surface)"), mix("var(--chart-2)", 50, "var(--surface)")], sun: mix("var(--chart-2)", 80, "var(--surface)"), far: mix("var(--chart-5)", 70, "var(--fg)"), near: mix("var(--chart-5)", 35, "var(--fg)") },
  forest: { sky: [mix("var(--chart-3)", 30, "var(--surface)"), mix("var(--chart-4)", 25, "var(--surface)")], sun: mix("var(--chart-4)", 35, "var(--surface)"), far: mix("var(--chart-4)", 80, "var(--surface)"), near: mix("var(--chart-4)", 55, "var(--fg)") },
  city: { sky: [mix("var(--chart-seq-2)", 45, "var(--surface)"), mix("var(--chart-seq-1)", 30, "var(--surface)")], sun: mix("var(--chart-2)", 55, "var(--surface)"), far: "var(--chart-seq-3)", near: "var(--chart-seq-5)", city: true },
  studio: { sky: ["var(--surface-sunken)", "var(--border)"], sun: mix("var(--chart-3)", 60, "var(--surface)"), far: "var(--border-strong)", near: "var(--fg-subtle)" },
};

export interface TakePosterProps {
  /** Poster image URL. Wins over `scene`. */
  src?: string;
  /** Drawn stand-in frame from colour tokens. Defaults to "harbour". */
  scene?: TakeScene;
  className?: string;
}

/** A still frame for a take: the poster image, or a small drawn scene in token colours. Always decorative; the card carries the words. */
export function TakePoster({ src, scene = "harbour", className }: TakePosterProps) {
  const id = useId();
  if (src) return <img src={src} alt="" className={cn("h-full w-full object-cover", className)} />;
  const s = SCENES[scene];
  const fill = (c: string): CSSProperties => ({ fill: c });
  return (
    <svg aria-hidden viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" className={cn("block h-full w-full", className)}>
      <defs>
        <linearGradient id={`${id}sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: s.sky[0] }} />
          <stop offset="1" style={{ stopColor: s.sky[1] }} />
        </linearGradient>
      </defs>
      <rect width="160" height="90" fill={`url(#${id}sky)`} />
      <circle cx="100" cy="32" r="11" style={fill(s.sun)} />
      {s.city ? (
        <g style={fill(s.far)}>
          <rect x="6" y="40" width="16" height="50" /><rect x="26" y="30" width="12" height="60" /><rect x="42" y="46" width="20" height="44" />
          <rect x="68" y="24" width="14" height="66" /><rect x="88" y="42" width="18" height="48" /><rect x="112" y="34" width="12" height="56" /><rect x="130" y="48" width="24" height="42" />
        </g>
      ) : (
        <path d="M0 60 Q30 44 60 56 T120 52 T160 50 V90 H0Z" style={fill(s.far)} />
      )}
      <path d="M0 74 Q40 62 80 72 T160 68 V90 H0Z" style={fill(s.near)} />
    </svg>
  );
}

/* ---------- card ---------- */

export interface TakeCardProps {
  id: string;
  /** Name of the take, such as "Take 2". It names the card for screen readers. */
  label: string;
  status: TakeStatus;
  /** The box keeps this ratio from the moment the request is sent, so nothing moves when the result lands. */
  ratio?: TakeRatio;
  /** Poster image URL, shown when done. */
  poster?: string;
  /** Drawn stand-in poster when there is no image. */
  scene?: TakeScene;
  /** Length in seconds. Shown as 0:08 and read as "8 seconds". */
  durationSec?: number;
  /** Model that made it, shown on the card. */
  model?: string;
  /** What was asked for. Shown under the title. It is not a description of the result. */
  prompt?: string;
  /** "draft" adds a Draft tag, so a low-resolution preview is never taken for the finished take. */
  quality?: "draft" | "final";
  /** Place in the queue while queued. */
  queuePosition?: number;
  /** Why the person is waiting, such as "Busy period". Never an upgrade pitch. */
  queueReason?: string;
  /** Plain time estimate such as "About 2 minutes". Only if the service gives one. */
  eta?: string;
  /** 0 to 100, only if the service really reports it. Omit for no bar. */
  percent?: number;
  /** The charge for this take and whether it was taken. */
  charge?: TakeCharge;
  /** Why a blocked take was stopped. Shown as a calm note, never a red error. */
  blockedReason?: TakeBlockedReason;
  /** What went wrong, shown when failed. */
  error?: string;
  /** When the rate limit lets this take start again, such as "Starts again in about a minute". */
  retryNote?: string;
  /** Says whether cancelling returns credits, such as "Cancel now and the 20 credits come back." Shown while working. */
  cancelNote?: string;
  /** Where this take came from, such as "Extended from take 2". */
  lineage?: string;
  /** What the file carries and what can strip it. Fills the AI label's explainer. */
  provenance?: TakeProvenance;
  /** Opens the take in your player or lightbox. Makes the poster a Play button when done. */
  onOpen?: () => void;
  onCancel?: () => void;
  /** Shown as Try again on failed, cancelled and rate-limited takes. */
  onRetry?: () => void;
  /** Shown as Edit prompt on blocked takes. */
  onEditPrompt?: () => void;
  /** Extra actions for a finished take (Extend, Remix, Download), in an overflow menu. */
  menu?: MenuEntry[];
  /** Turns on the select control. "multi" is a checkbox, "single" picks one take. */
  selectMode?: "single" | "multi";
  selected?: boolean;
  onSelect?: () => void;
  /** Speak status changes from this card. TakeGrid turns this off and speaks for all its cards at once. */
  announce?: boolean;
  /** Heading level of the take name. */
  headingLevel?: HeadingLevel;
  /** Makes the whole card a focus stop. TakeGrid sets this for its roving focus. */
  tabIndex?: number;
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
  /** Extra id for aria-describedby, such as a keyboard hint. */
  describedBy?: string;
  /** Hides the prompt and the lineage line, for small tiles. The name, status and charge stay. */
  compact?: boolean;
  ref?: Ref<HTMLElement>;
  className?: string;
}

const STATUS_ICON: Record<TakeStatus, typeof CheckIcon> = {
  queued: HistoryIcon, generating: SparkleIcon, finalising: SparkleIcon, done: CheckIcon, failed: AlertIcon,
  blocked: ShieldIcon, cancelled: XIcon, rateLimited: HistoryIcon,
};

/** The sentence spoken for a status change. No percentages. */
export function takeAnnouncement(label: string, status: TakeStatus) {
  return `${label}: ${TAKE_STATUS_WORD[status].toLowerCase()}`;
}

/**
 * One generated video take, from the queue to the finished clip. The box holds its ratio from the start, a calm lime
 * edge shows only while a model is working, and every ending (failed, blocked, cancelled, rate limited) says in words
 * whether credits were taken. Status is always a word with an icon, never colour alone.
 */
export function TakeCard({
  id, label, status, ratio = "16:9", poster, scene, durationSec, model, prompt, quality, queuePosition, queueReason, eta, percent,
  charge, blockedReason, error, retryNote, cancelNote, lineage, provenance, onOpen, onCancel, onRetry, onEditPrompt, menu,
  selectMode, selected = false, onSelect, announce = true, headingLevel = 3, tabIndex, onKeyDown, describedBy, compact = false, ref, className,
}: TakeCardProps) {
  const uid = useId();
  const H = headingTag(headingLevel);
  const working = isTakeWorking(status);
  const done = status === "done";
  const Icon = STATUS_ICON[status];
  const word = TAKE_STATUS_WORD[status];
  const pct = percent === undefined ? undefined : Math.round(Math.max(0, Math.min(100, percent)));
  const spokenLength = durationSec !== undefined ? formatSpokenDuration(durationSec) : undefined;
  const madeWith = provenance?.madeWith ?? model;
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <article
      ref={ref}
      data-take-id={id}
      aria-labelledby={`${uid}t`}
      aria-describedby={`${uid}s ${uid}c${describedBy ? ` ${describedBy}` : ""}`}
      aria-busy={working || undefined}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      className={cn("group/take min-w-0 rounded-card", className)}
    >
      <WorkingEdge active={working} label="" className="h-full">
        <div className={cn(
          "flex h-full flex-col rounded-card border bg-surface transition-[border-color,box-shadow] duration-(--dur-fast) ease-(--ease-out)",
          selected ? "border-fg shadow-md" : "border-line",
        )}>
          {/* Media box: holds the ratio in every state. */}
          <div className={cn("relative rounded-t-card bg-sunken", RATIO[ratio])}>
            {done ? (
              <>
                <div className="absolute inset-0 overflow-hidden rounded-t-card motion-safe:animate-[fade_var(--dur-base)_var(--ease-out)_both]"><TakePoster src={poster} scene={scene} /></div>
                {onOpen ? (
                  <button type="button" onClick={onOpen} aria-label={`Play ${label}${spokenLength ? `, ${spokenLength}` : ""}`}
                    className="group/play absolute inset-0 flex cursor-pointer items-center justify-center rounded-t-card">
                    <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-overlay text-inverse-fg shadow-md transition-transform duration-(--dur-fast) ease-(--ease-out) motion-safe:group-hover/play:scale-105">
                      <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z" /></svg>
                    </span>
                  </button>
                ) : null}
                {durationSec !== undefined && (
                  <span className="pointer-events-none absolute right-2 bottom-2 rounded-control bg-overlay px-1.5 py-0.5 font-mono text-micro leading-4 text-inverse-fg tabular-nums" aria-hidden>{formatClock(durationSec)}</span>
                )}
                <span className="absolute bottom-2 left-2">
                  <AILabel level="message" size={16} text="AI" popoverLabel={`About ${label}`}
                    overview={`This video was generated by AI${madeWith ? ` with ${madeWith}` : ""}${provenance?.made ? `, ${provenance.made}` : ""}.`}
                    details={provenance?.carries?.length ? <><p>The file carries:</p><ul className="mt-1 list-disc pl-4">{provenance.carries.map((c) => <li key={c}>{c}</li>)}</ul></> : undefined}
                    resources={<p>{provenance?.caveat ?? "These marks can be lost when the file is edited elsewhere or re-uploaded, so a missing label does not prove a video is real."}</p>} />
                </span>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-3 text-center">
                <Icon width={18} height={18} aria-hidden className={cn(status === "failed" ? "text-danger-fg" : "text-fg-muted")} />
                <p key={status} className={cn("text-small font-medium motion-safe:animate-fade", status === "failed" ? "text-danger-fg" : "text-fg")} aria-hidden>{word}</p>
                {status === "queued" && queuePosition !== undefined && <p className="text-small leading-4 text-fg-muted" aria-hidden>Position {queuePosition} in the queue</p>}
                {status === "rateLimited" && retryNote && <p className="text-small leading-4 text-fg-muted" aria-hidden>{retryNote}</p>}
                {status === "generating" && pct !== undefined && (
                  <Meter label={`${label} progress`} value={pct} valueText={`${pct}%`} className="mt-1 w-2/3 max-w-40" />
                )}
              </div>
            )}
            {quality === "draft" && (
              <span className="pointer-events-none absolute top-2 left-2"><Badge className="bg-glass">Draft</Badge></span>
            )}
            {selectMode && onSelect && (
              <button type="button" onClick={(e) => { stop(e); onSelect(); }} tabIndex={tabIndex === undefined ? undefined : -1}
                {...(selectMode === "multi" ? { role: "checkbox", "aria-checked": selected } : { "aria-pressed": selected })}
                aria-label={`${selectMode === "multi" ? "Select" : "Pick"} ${label}`}
                className={cn(
                  "absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full border shadow-sm",
                  selected ? "border-transparent bg-inverse text-inverse-fg" : "border-line-strong bg-glass text-transparent hover:text-fg-subtle",
                )}>
                <CheckIcon width={14} height={14} />
              </button>
            )}
          </div>

          {/* Words: name, status, meta, notes, charge, actions. */}
          <div className="flex flex-1 flex-col gap-2 p-3">
            <div className="flex min-w-0 flex-wrap items-start justify-between gap-x-2 gap-y-0.5">
              <H id={`${uid}t`} className="min-w-0 truncate text-compact font-semibold text-fg">{label}</H>
              <p id={`${uid}s`} className={cn("flex shrink-0 items-center gap-1 text-small leading-4 font-medium", status === "failed" ? "text-danger-fg" : done ? "text-fg" : "text-fg-muted")}>
                <Icon width={12} height={12} aria-hidden />
                <span key={status} className="motion-safe:animate-fade">{word}{selected ? <span className="sr-only">, selected</span> : null}</span>
              </p>
            </div>

            <p className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-small leading-4 text-fg-muted">
              {durationSec !== undefined && <><span aria-hidden className="font-mono tabular-nums">{formatClock(durationSec)}</span><span className="sr-only">{spokenLength}</span></>}
              {durationSec !== undefined && (model || ratio) && <span aria-hidden>·</span>}
              {model && <span>{model}</span>}
              {model && <span aria-hidden>·</span>}
              <span><span className="sr-only">Ratio </span>{ratio}</span>
              {quality === "draft" && <><span aria-hidden>·</span><span>Draft quality</span></>}
            </p>

            {prompt && !compact && <p className="line-clamp-2 text-small text-fg-muted"><span className="sr-only">Prompt: </span>{prompt}</p>}

            {lineage && !compact && (
              <p className="flex items-center gap-1 text-small leading-4 text-fg-muted"><BranchIcon width={12} height={12} aria-hidden />{lineage}</p>
            )}

            {status === "queued" && (queueReason || eta) && (
              <p className="text-small leading-4 text-fg-muted">{[queueReason, eta].filter(Boolean).join(". ")}</p>
            )}
            {(status === "generating" || status === "finalising") && eta && <p className="text-small leading-4 text-fg-muted">{eta}</p>}

            {status === "blocked" && (
              <div className="rounded-card border border-line bg-sunken p-2.5 text-small">
                <p className="flex items-center gap-1.5 font-medium text-fg"><ShieldIcon width={14} height={14} aria-hidden />
                  {blockedReason?.where === "input" ? "Your request was stopped before generating" : "The finished video was stopped by the safety check"}
                </p>
                {blockedReason?.where === "output" && <p className="mt-1 text-fg-muted">The check looked at what the model made, not at you.</p>}
                {blockedReason?.message && <p className="mt-1 text-fg-muted">{blockedReason.message}</p>}
                {blockedReason?.suggestion && <p className="mt-1 text-fg-muted"><span className="font-medium text-fg">Try: </span>{blockedReason.suggestion}</p>}
              </div>
            )}
            {status === "failed" && error && (
              <p className="flex items-start gap-1.5 text-small text-fg-muted"><AlertIcon width={14} height={14} aria-hidden className="mt-0.5 shrink-0 text-danger-fg" />{error}</p>
            )}
            {status === "rateLimited" && (
              <p className="flex items-start gap-1.5 text-small text-fg-muted"><InfoIcon width={14} height={14} aria-hidden className="mt-0.5 shrink-0" />
                Too many takes were requested at once, so this one is waiting. {retryNote ?? "It starts again on its own."}
              </p>
            )}

            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
              <p id={`${uid}c`} className="flex items-center gap-1 text-small leading-4 text-fg-muted">
                {charge ? <>
                  {charge.state === "refunded" || charge.state === "notCharged" ? <CheckIcon width={12} height={12} aria-hidden /> : null}
                  <span className={cn(charge.state !== "notCharged" && "font-mono tabular-nums")}>{chargeText(charge)}</span>
                </> : null}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {working && onCancel && <Button size="sm" variant="secondary" onClick={onCancel} aria-label={`Cancel ${label}`}>Cancel</Button>}
                {(status === "failed" || status === "cancelled" || status === "rateLimited") && onRetry && (
                  <Button size="sm" variant="secondary" onClick={onRetry} aria-label={`Try ${label} again`}>Try again</Button>
                )}
                {status === "blocked" && onEditPrompt && <Button size="sm" variant="secondary" onClick={onEditPrompt}>Edit prompt</Button>}
                {done && menu && menu.length > 0 && (
                  <Menu portal align="end" triggerLabel={`More actions for ${label}`} items={menu}
                    trigger={<MoreIcon width={16} height={16} />} />
                )}
              </div>
            </div>
            {working && cancelNote && onCancel && <p className="text-small leading-4 text-fg-subtle">{cancelNote}</p>}
          </div>
        </div>
      </WorkingEdge>
      {announce && <p role="status" aria-live="polite" className="sr-only">{takeAnnouncement(label, status)}</p>}
    </article>
  );
}
```
