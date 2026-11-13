## tattva/organisms/ShotSettings.tsx

```tsx
import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { CheckIcon, SparkleIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Spinner } from "../atoms/Spinner";

/** One choice in a ShotSettings group. Set `unavailable` to keep it visible but not pickable, with the reason in words. */
export interface ShotOption {
  value: string;
  label: string;
  /** Short helper text, for example "Faster and cheaper". */
  description?: string;
  /** Why the chosen model cannot use this option, for example "Reel Lite makes up to 6 seconds". */
  unavailable?: string;
}

export type ShotQuality = "draft" | "final";

export interface ShotSettingsValue {
  model: string;
  /** Length of each take, as the value of one of `lengths`. */
  length: string;
  /** Aspect ratio, as the value of one of `aspects`, for example "16:9". */
  aspect: string;
  quality: ShotQuality;
  /** How many takes one press of Generate makes. Each take is charged. */
  outputs: number;
}

export interface ShotSettingsProps {
  value: ShotSettingsValue;
  onChange: (value: ShotSettingsValue) => void;
  /** Called with the value when Generate is pressed. Never called while a setting does not fit the model or credits are short. */
  onGenerate: (value: ShotSettingsValue) => void;
  models: ShotOption[];
  /** Lengths for the chosen model, for example 4 s, 6 s, 8 s. Mark the ones it cannot make as unavailable. */
  lengths: ShotOption[];
  /** Aspect ratios. Labels must be ratios like "16:9" so the shape glyph can be drawn. */
  aspects: ShotOption[];
  /** Draft and final. Defaults to both, with draft described as faster and cheaper. */
  qualities?: ShotOption[];
  /** Cost of one take with the current settings, worked out by your code. The total is outputs × this. */
  costPerOutput: number;
  /** Credits left. Leave out to hide the balance. */
  balance?: number;
  /** Unit after numbers. */
  unit?: string;
  /** Most takes per press. */
  maxOutputs?: number;
  /** Note shown under quality while Final is picked, nudging people to try a draft first. */
  draftNote?: string;
  /** Extra controls placed after the aspect ratio, such as a CameraMovePicker. */
  children?: ReactNode;
  /** Disables Generate and shows a spinner. Settings stay readable. */
  busy?: boolean;
  title?: string;
  className?: string;
}

const defaultQualities: ShotOption[] = [
  { value: "draft", label: "Draft", description: "Faster and cheaper, lower detail" },
  { value: "final", label: "Final", description: "Full detail" },
];

const fmt = (n: number) => n.toLocaleString("en-US");

function RatioGlyph({ ratio }: { ratio: string }) {
  const [w, h] = ratio.split(":").map(Number);
  if (!w || !h) return null;
  const scale = 12 / Math.max(w, h);
  return <span aria-hidden className="inline-block shrink-0 rounded-2xs border border-current" style={{ width: Math.max(3, w * scale), height: Math.max(3, h * scale) }} />;
}

/**
 * Single-choice chips. Unavailable options stay in view with aria-disabled and point to their written reason; arrow keys
 * skip them so a person cannot land on a choice that cannot be made. A selected value that has become unavailable keeps
 * its place and is marked, so nothing changes behind the person's back.
 */
function OptionGroup({ label, options, value, onChange, glyph, reasonId }: {
  label: string; options: ShotOption[]; value: string; onChange: (v: string) => void; glyph?: boolean; reasonId: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const usable = options.map((o, i) => (o.unavailable ? -1 : i)).filter((i) => i >= 0);
  const current = options.findIndex((o) => o.value === value);
  const stop = current >= 0 ? current : usable[0] ?? 0;
  const move = (i: number, e: KeyboardEvent) => {
    if (!usable.length) return;
    const at = usable.indexOf(i);
    let next: number;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = usable[(at + 1) % usable.length];
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = usable[at <= 0 ? usable.length - 1 : at - 1];
    else if (e.key === "Home") next = usable[0];
    else if (e.key === "End") next = usable[usable.length - 1];
    else return;
    e.preventDefault();
    onChange(options[next].value);
    refs.current[next]?.focus();
  };
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-1.5">
      {options.map((o, i) => {
        const on = o.value === value;
        const off = !!o.unavailable;
        return (
          <button key={o.value} ref={(el) => { refs.current[i] = el; }} type="button" role="radio" aria-checked={on} aria-disabled={off || undefined}
            aria-describedby={off ? reasonId : undefined} tabIndex={i === stop ? 0 : -1}
            onClick={() => { if (!off) onChange(o.value); }} onKeyDown={(e) => move(i, e)}
            className={cn("tap inline-flex min-h-8 items-center gap-1.5 rounded-control border px-3 py-1 text-small leading-4 font-medium transition-colors duration-(--dur-fast)",
              on ? "border-fg bg-surface text-fg shadow-sm" : "border-line text-fg-muted",
              off ? "cursor-not-allowed border-dashed" : "cursor-pointer hover:bg-hover hover:text-fg",
              off && !on && "opacity-(--disabled-opacity)")}>
            {on && <CheckIcon width={12} height={12} className="shrink-0" />}
            {glyph && <RatioGlyph ratio={o.label} />}
            {o.label}
            {off && <span className="sr-only">, not available</span>}
          </button>
        );
      })}
    </div>
  );
}

/** A labelled settings row. Reasons for unavailable options are written under the chips, never only in a tooltip. */
function Row({ id, label, hint, options, children, problem }: { id: string; label: string; hint?: ReactNode; options: ShotOption[]; children: ReactNode; problem?: string }) {
  const off = options.filter((o) => o.unavailable);
  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-small leading-4 font-medium text-fg">{label}</span>
        {hint && <span className="text-small leading-4.5 text-fg-subtle">{hint}</span>}
      </div>
      {children}
      {problem && <p className="text-small leading-4.5 font-medium text-danger-fg">{problem}</p>}
      {off.length > 0 && (
        <ul id={id} className="space-y-0.5 text-small leading-4.5 text-fg-muted">
          {off.map((o) => <li key={o.value}><span className="text-fg">{o.label}</span>: {o.unavailable}</li>)}
        </ul>
      )}
    </div>
  );
}

/**
 * Settings for one video generation: model, length, aspect ratio, draft or final, and how many takes. The cost reads as
 * takes × cost per take before Generate is pressed. Options the model cannot use stay visible with the reason written
 * out, and the model is never switched behind the person's back: if a chosen option stops fitting, Generate waits and
 * says which setting to change.
 */
export function ShotSettings({
  value, onChange, onGenerate, models, lengths, aspects, qualities = defaultQualities, costPerOutput, balance, unit = "credits",
  maxOutputs = 4, draftNote = "Drafts are faster and cheaper. You can make a final version of any draft later.", children, busy = false,
  title = "Shot settings", className,
}: ShotSettingsProps) {
  const uid = useId();
  const set = <K extends keyof ShotSettingsValue>(k: K, v: ShotSettingsValue[K]) => onChange({ ...value, [k]: v });

  const groups: { key: "model" | "length" | "aspect" | "quality"; label: string; options: ShotOption[] }[] = [
    { key: "model", label: "Model", options: models },
    { key: "length", label: "Length", options: lengths },
    { key: "aspect", label: "Aspect ratio", options: aspects },
    { key: "quality", label: "Quality", options: qualities },
  ];
  // A chosen option that the current model cannot use. Shown in words, never fixed silently.
  const conflicts = groups.flatMap((g) => {
    const o = g.options.find((x) => x.value === String(value[g.key]));
    return o?.unavailable ? [{ key: g.key, text: `${g.label} ${o.label} cannot be used: ${o.unavailable.charAt(0).toLowerCase()}${o.unavailable.slice(1)}. Pick another ${g.label.toLowerCase()}.` }] : [];
  });
  const problemFor = (k: string) => conflicts.find((c) => c.key === k)?.text;

  const outputs = Math.min(Math.max(1, value.outputs), maxOutputs);
  const total = outputs * costPerOutput;
  const short = balance !== undefined && total > balance;
  const blocked = conflicts.length > 0 || short;
  const takeWord = (n: number) => (n === 1 ? "take" : "takes");
  const costLine = `${outputs} ${takeWord(outputs)} × ${fmt(costPerOutput)} = ${fmt(total)} ${unit}`;
  const status = conflicts.length > 0 ? "Change the setting marked above to continue."
    : short ? `Not enough ${unit}: ${fmt(total)} needed, ${fmt(balance!)} left. Make fewer takes or a draft.`
    : balance !== undefined ? `${fmt(balance - total)} left after this` : "";
  const quality = qualities.find((q) => q.value === value.quality);
  const outputOptions: ShotOption[] = Array.from({ length: maxOutputs }, (_, i) => ({ value: String(i + 1), label: String(i + 1) }));

  return (
    <form aria-label={title} onSubmit={(e) => { e.preventDefault(); if (!busy && !blocked) onGenerate({ ...value, outputs }); }}
      className={cn("w-full min-w-0 space-y-4 rounded-card border border-line bg-surface p-4 shadow-sm", className)}>
      <h3 className="text-lead leading-6 font-semibold text-fg">{title}</h3>

      {groups.map((g) => (
        <Row key={g.key} id={`${uid}-${g.key}`} label={g.label} options={g.options} problem={problemFor(g.key)}
          hint={g.key === "quality" ? quality?.description : g.key === "model" ? models.find((m) => m.value === value.model)?.description : undefined}>
          <OptionGroup label={g.label} options={g.options} value={String(value[g.key])} reasonId={`${uid}-${g.key}`} glyph={g.key === "aspect"}
            onChange={(v) => (g.key === "quality" ? set("quality", v as ShotQuality) : set(g.key, v))} />
          {g.key === "quality" && value.quality === "final" && draftNote && <p className="text-small leading-4.5 text-fg-muted">{draftNote}</p>}
          {g.key === "aspect" && children}
        </Row>
      ))}

      <Row id={`${uid}-outputs`} label="Takes" hint={`Each take is charged. Up to ${maxOutputs}.`} options={[]}>
        <OptionGroup label="Number of takes" options={outputOptions} value={String(outputs)} reasonId={`${uid}-outputs`}
          onChange={(v) => set("outputs", Number(v))} />
      </Row>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
        <div role="status" aria-live="polite" className="min-w-0 flex-1 basis-48 space-y-0.5">
          <p className="text-compact font-medium text-fg tabular-nums">{costLine}</p>
          {status && <p className={cn("text-small leading-4.5 tabular-nums", blocked ? "text-fg" : "text-fg-muted")}>{status}</p>}
        </div>
        <Button type="submit" variant="lime" disabled={busy || blocked} className="max-sm:w-full"
          leading={busy ? <Spinner size={14} /> : <SparkleIcon width={14} height={14} />}>
          {busy ? "Generating…" : `Generate ${outputs} ${takeWord(outputs)}`}
        </Button>
      </div>
    </form>
  );
}
```
