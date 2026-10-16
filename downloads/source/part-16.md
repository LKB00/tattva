## tattva/lib/sensitive.ts

```ts
export type SensitiveKind = "card" | "key" | "password" | "email" | "phone";

export interface SensitiveFinding {
  id: string;
  kind: SensitiveKind;
  /** Where it is in the text, so it can be taken out. */
  start: number;
  end: number;
  /** A safe preview, such as "•••• 4242". */
  preview: string;
}

// A real card number passes the Luhn check, so a long order number does not count. A phone number is 10 digits, or
// 10 to 13 written the way phone numbers are (a + or spaces), so an order number is not one either.
const luhn = (digits: string) => {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = Number(digits[digits.length - 1 - i]);
    if (i % 2 === 1) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
  }
  return sum % 10 === 0;
};

const RULES: { kind: SensitiveKind; re: RegExp; ok?: (m: string) => boolean; preview: (m: string) => string }[] = [
  { kind: "card", re: /\b(?:\d[ -]?){13,19}\b/g, ok: (m) => luhn(m.replace(/\D/g, "")), preview: (m) => `•••• ${m.replace(/\D/g, "").slice(-4)}` },
  { kind: "key", re: /\b(?:sk|pk|rk|ghp|gho|xox[abp]|AKIA)[-_A-Za-z0-9]{12,}\b/g, preview: (m) => `${m.slice(0, 4)}••••` },
  { kind: "password", re: /\b(?:password|passcode|pwd)\s*(?:is|:|=)\s*\S+/gi, preview: () => "••••••" },
  { kind: "email", re: /\b[\w.+-]+@[\w-]+\.[\w.-]+\b/g, preview: (m) => `${m[0]}•••@${m.split("@")[1]}` },
  { kind: "phone", re: /(?<!\d)\+?\d[\d ()-]{8,14}\d(?!\d)/g, ok: (m) => { const n = m.replace(/\D/g, "").length; return n >= 10 && n <= 13 && (n === 10 || /[+ ()-]/.test(m)); }, preview: (m) => `•••• ${m.replace(/\D/g, "").slice(-3)}` },
];

/**
 * Finds private details in a message before it is sent: card numbers (Luhn checked), API keys, passwords written
 * as "password: …", email addresses and phone numbers. It runs on the person's device; nothing is sent anywhere.
 * Overlapping matches keep the first, most specific kind (a card number is not also a phone number).
 */
export function findSensitive(text: string, kinds: SensitiveKind[] = ["card", "key", "password", "email", "phone"]): SensitiveFinding[] {
  const out: SensitiveFinding[] = [];
  for (const r of RULES) {
    if (!kinds.includes(r.kind)) continue;
    for (const m of text.matchAll(r.re)) {
      const raw = m[0].replace(/[ -]+$/, ""); // a match never ends in the space after a number
      const start = m.index ?? 0, end = start + raw.length;
      if (r.ok && !r.ok(raw)) continue;
      if (out.some((f) => start < f.end && end > f.start)) continue;
      out.push({ id: `${r.kind}-${start}`, kind: r.kind, start, end, preview: r.preview(raw) });
    }
  }
  return out.sort((a, b) => a.start - b.start);
}

/** The text with the given findings taken out. */
export function removeSensitive(text: string, findings: SensitiveFinding[]): string {
  let out = text;
  for (const f of [...findings].sort((a, b) => b.start - a.start)) out = out.slice(0, f.start) + out.slice(f.end);
  return out.replace(/[ \t]{2,}/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
}
```

## tattva/lib/useFocusAfter.ts

```ts
import { useEffect, useRef } from "react";

/**
 * Keeps keyboard focus in place when a part swaps the control someone just pressed for something else
 * (Keep becomes a "Kept" badge, Confirm becomes a summary). Call `arm()` in the handler; when `key`
 * next changes and focus has fallen to the page body, focus moves to what `target()` returns.
 */
export function useFocusAfter(key: unknown, target: () => HTMLElement | null | undefined) {
  const armed = useRef(false);
  const pick = useRef(target);
  pick.current = target;
  useEffect(() => {
    if (!armed.current) return;
    armed.current = false;
    const a = document.activeElement;
    if (a && a !== document.body && a.isConnected) return;
    pick.current()?.focus({ preventScroll: true });
  }, [key]);
  return () => { armed.current = true; };
}

export type HeadingLevel = 2 | 3 | 4 | 5 | 6;
/** The heading tag for a level, and the one below it for inner headings (never deeper than h6). */
export const headingTag = (level: HeadingLevel) => `h${level}` as "h2" | "h3" | "h4" | "h5" | "h6";
export const subHeadingTag = (level: HeadingLevel) => headingTag(Math.min(level + 1, 6) as HeadingLevel);
```

## tattva/molecules/AILabel.tsx

```tsx
import { useState, type ReactNode } from "react";
import { AIMark } from "../atoms/AIMark";
import { Popover } from "../atoms/Popover";
import { cn } from "../lib/cn";
import { RevertAIIcon } from "../lib/icons";

export type AILabelLevel = "feature" | "message" | "field" | "image";
export type AILabelSize = 16 | 18 | 22;

export interface AILabelProps {
  /** Where the label sits. Sets the placement classes when `placed` is true and the side the explainer opens toward. */
  level?: AILabelLevel;
  /** Pixel size. Match the text beside it: 16 for 12px text, 18 for 14px, 22 for 16px. Use one size smaller next to ghost icon buttons. */
  size?: AILabelSize;
  /** Text in the pill. */
  text?: string;
  /** Apply absolute placement for the level. The parent needs `relative`. Leave false to place the label yourself, for example inline in a row. */
  placed?: boolean;
  /** Toggletip section: a short statement of what the AI did here. */
  overview?: ReactNode;
  /** Toggletip section: model, inputs, limits or anything specific to this instance. */
  details?: ReactNode;
  /** Toggletip section: links to documentation or sources. */
  resources?: ReactNode;
  /** Toggletip section: controls such as Learn more or Turn off. The label never triggers an AI action itself. */
  actions?: ReactNode;
  /** True once a person has edited the content. The tint is dropped and an icon-only revert button replaces the pill. */
  edited?: boolean;
  /** Called when the revert button is pressed. The app restores the AI version and sets `edited` back to false. */
  onRevert?: () => void;
  /** Accessible name for the revert button. */
  revertLabel?: string;
  /** Accessible name for the toggletip panel. */
  popoverLabel?: string;
  className?: string;
}

const PILL: Record<AILabelSize, string> = {
  16: "h-4 gap-0.5 px-1.5 text-nano leading-4",
  18: "h-4.5 gap-1 px-2 text-micro leading-chip",
  22: "h-5.5 gap-1 px-2.5 text-small leading-chip-lg",
};
const MARK: Record<AILabelSize, 16 | 18 | 22> = { 16: 16, 18: 16, 22: 16 };
const PLACE: Record<AILabelLevel, string> = {
  feature: "absolute top-3 right-3",
  message: "",
  field: "absolute top-1/2 right-3 -translate-y-1/2",
  image: "absolute bottom-2 left-2",
};

/**
 * Marks content as produced by AI and opens a toggletip that explains it. The pill is a lime fill with charcoal text.
 * It labels and explains. It never starts an AI action. After a person edits the content the pill is replaced by an
 * icon-only revert button, and reverting brings the pill back.
 */
export function AILabel({
  level = "feature", size = 18, text = "AI", placed = false, overview, details, resources, actions,
  edited = false, onRevert, revertLabel = "Revert to AI version", popoverLabel = "About this AI content", className,
}: AILabelProps) {
  const [open, setOpen] = useState(false);
  const place = placed ? PLACE[level] : "";

  if (edited) {
    return (
      <button type="button" aria-label={revertLabel} title={revertLabel} onClick={onRevert}
        className={cn("inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-control border border-line bg-surface text-fg-muted hover:bg-hover hover:text-fg pointer-coarse:size-11", place, className)}>
        <RevertAIIcon width={size === 16 ? 14 : 16} height={size === 16 ? 14 : 16} />
      </button>
    );
  }

  const sections: [string, ReactNode][] = ([["Overview", overview], ["Details", details], ["Resources", resources], ["Actions", actions]] as [string, ReactNode][]).filter(([, v]) => v !== undefined && v !== null && v !== false);

  return (
    <span className={cn("inline-flex align-middle", place, className)} onBlur={(e) => { if (open && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false); }}>
      <Popover open={open} onOpenChange={setOpen} label={popoverLabel} align={level === "image" || level === "message" ? "start" : "end"} side={level === "image" ? "top" : "bottom"}
        panelClassName="w-72 max-w-[calc(100vw-2rem)] p-4"
        trigger={({ triggerProps, toggle }) => (
          <button type="button" onClick={toggle} {...triggerProps} aria-label={`${text}. About this AI content`}
            className="group inline-flex min-h-6 shrink-0 cursor-pointer items-center rounded-control tap">
            <span className={cn("inline-flex animate-pop items-center rounded-control border border-transparent bg-lime font-medium text-on-lime group-hover:bg-lime-hover", PILL[size])}>
              <AIMark size={MARK[size]} />{text}
            </span>
          </button>
        )}>
        {sections.length === 0 ? <p className="text-compact leading-5 text-fg-muted">This content was produced by AI.</p> : (
          <div className="space-y-3 text-compact leading-5 text-fg-muted">
            {sections.map(([name, body]) => (
              <section key={name} aria-label={name}>
                <h4 className="font-sans! mb-1 text-nano font-normal uppercase tracking-caps text-fg-subtle">{name}</h4>
                <div className={name === "Actions" ? "flex flex-wrap gap-2" : undefined}>{body}</div>
              </section>
            ))}
          </div>
        )}
      </Popover>
    </span>
  );
}
```

## tattva/molecules/AltitudeToggle.tsx

```tsx
import { useId, useState } from "react";
import { cn } from "../lib/cn";
import { SegmentedControl } from "../atoms/SegmentedControl";

export type Altitude = "summary" | "steps" | "everything";

export interface AltitudeToggleProps {
  /** Selected view (controlled). */
  value?: Altitude;
  /** Starting view when uncontrolled. */
  defaultValue?: Altitude;
  onChange?: (value: Altitude) => void;
  /** Replace the names of the views. */
  labels?: Partial<Record<Altitude, string>>;
  /** Replace the line that explains each view. */
  hints?: Partial<Record<Altitude, string>>;
  /** Accessible name for the group. */
  label?: string;
  className?: string;
}

const defaultLabels: Record<Altitude, string> = { summary: "Summary", steps: "Steps", everything: "Everything" };
const defaultHints: Record<Altitude, string> = {
  summary: "A short account of the result and anything that needs you.",
  steps: "Each thing the assistant did, one line at a time.",
  everything: "Every detail, including what it read and tried.",
};
const order: Altitude[] = ["summary", "steps", "everything"];

/** Switch between three levels of detail about what an agent did. Arrow keys move and select. */
export function AltitudeToggle({ value, defaultValue = "summary", onChange, labels, hints, label = "How much detail", className }: AltitudeToggleProps) {
  const [inner, setInner] = useState<Altitude>(defaultValue);
  const current = value ?? inner;
  const uid = useId();
  const l = { ...defaultLabels, ...labels };
  const h = { ...defaultHints, ...hints };
  return (
    <div className={cn("min-w-0", className)}>
      <div className="max-w-full overflow-x-auto">
        <SegmentedControl label={label} value={current} options={order.map((k) => ({ value: k, label: l[k] }))}
          onChange={(v) => { if (value === undefined) setInner(v); onChange?.(v); }} />
      </div>
      <p id={`${uid}-hint`} className="mt-1.5 text-small leading-4 text-fg-muted">{h[current]}</p>
    </div>
  );
}
```

## tattva/molecules/AttachmentChip.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { keepFocus, useAnnounceChange } from "../lib/focus";
import { FileIcon, ImageIcon, XIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { MeterBar } from "../atoms/MeterBar";

export type AttachmentStatus = "ready" | "uploading" | "error";

export interface AttachmentChipProps {
  /** File name. */
  name: string;
  /** Display size such as "2.4 MB". */
  size?: string;
  /** Picks the default icon when no thumbnail is given. */
  kind?: "file" | "image";
  /** Replaces the default icon, for example an img element. Keep it decorative. */
  thumbnail?: ReactNode;
  status?: AttachmentStatus;
  /** Upload progress from 0 to 100. Used while status is "uploading". */
  progress?: number;
  /** Text shown when status is "error". */
  errorMessage?: string;
  /** Shows a Retry button in the error state. */
  onRetry?: () => void;
  /** Shows the remove button. The button is named after the file. */
  onRemove?: () => void;
  /** Where keyboard focus goes after Remove. By default the next attachment, else the previous one, else the message box. */
  focusAfterRemove?: () => HTMLElement | null;
  /** What screen readers hear when the upload finishes. Defaults to "(name) uploaded". */
  readyMessage?: string;
  className?: string;
}

/** File or image chip for the composer. Shows upload progress as a meter and a retry action when the upload fails. */
export function AttachmentChip({ name, size, kind = "file", thumbnail, status = "ready", progress = 0, errorMessage = "Upload failed", onRetry, onRemove, focusAfterRemove, readyMessage, className }: AttachmentChipProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Uploads finishing or failing are read out; the chip appearing is not.
  const said = useAnnounceChange(status, (now) => (now === "ready" ? readyMessage ?? `${name} uploaded` : now === "error" ? `${name}: ${errorMessage}` : ""));
  const pct = Math.round(Math.max(0, Math.min(100, progress)));
  const Icon = kind === "image" ? ImageIcon : FileIcon;
  return (
    <div ref={ref} className={cn("flex w-64 max-w-full items-center gap-2.5 rounded-card border bg-surface p-2", status === "error" ? "border-danger-line" : "border-line", className)}>
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sunken text-fg-muted">
        {thumbnail ?? <Icon width={18} height={18} />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-compact font-medium text-fg" title={name}>{name}</span>
        {status === "ready" && size && <span className="block text-small leading-4 text-fg-muted">{size}</span>}
        {status === "uploading" && (
          <span className="mt-1 block">
            <MeterBar value={pct} label={`Uploading ${name}`} valueText={`${pct}% uploaded`} />
            <span className="mt-1 block text-small leading-4 text-fg-muted tabular-nums">Uploading {pct}%{size ? ` of ${size}` : ""}</span>
          </span>
        )}
        {status === "error" && <span className="block truncate text-small leading-4 text-danger-fg">{errorMessage}</span>}
      </span>
      {status === "error" && onRetry && <Button size="sm" variant="secondary" onClick={onRetry} aria-label={`Retry upload of ${name}`}>Retry</Button>}
      {onRemove && (
        <IconButton label={`Remove ${name}`} size="sm" onClick={() => { onRemove(); keepFocus(ref.current, focusAfterRemove); }}><XIcon width={14} height={14} /></IconButton>
      )}
      <span role="status" aria-live="polite" className="sr-only">{said}</span>
    </div>
  );
}
```
