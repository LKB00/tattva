## tattva/organisms/VoiceConsentCheck.tsx

```tsx
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, ApproveIcon, CameraIcon, LockIcon, MicIcon, ShieldIcon, StopIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { Callout } from "../molecules/Callout";

export type ConsentStep = "explain" | "micCheck" | "reading" | "checking" | "verified" | "failed" | "lockedOut";
/** What is being verified: a voice to clone, or a likeness (face and voice) for video. */
export type ConsentSubject = "voice" | "likeness";

export interface VoiceConsentCheckProps {
  step: ConsentStep;
  /** The lines the person reads out, one at a time. Make them new each attempt so a recording cannot be replayed. */
  lines: string[];
  /** Index of the line being read. */
  currentLine: number;
  /** "voice" for a voice clone. "likeness" for face and voice in video: the copy then talks about the camera too. */
  subject?: ConsentSubject;
  /** What the voice or likeness will be used for, who can use it, and how to remove it. Shown before anything is recorded. */
  consentText: ReactNode;
  /** True while the current line is being recorded. */
  recording?: boolean;
  /** Input level from 0 to 1 during the mic check and while recording. Shown as quiet, speaking or loud. */
  level?: number;
  /** Result of the mic check. Leave out while still listening. */
  noise?: "ok" | "noisy";
  /** Tries left after a failed check. */
  attemptsLeft?: number;
  /** When the person may try again, written out by your code, for example "14:20 tomorrow". */
  retryAt?: string;
  /** The person ticked the agreement and pressed Continue. Move to the mic check. */
  onAgree: () => void;
  /** Leave the mic check and start reading. Also "Continue anyway" when it is noisy. */
  onContinue?: () => void;
  /** Listen again after moving somewhere quieter. */
  onCheckAgain?: () => void;
  onStartLine: () => void;
  onStopLine: () => void;
  /** Start a new attempt after a failed check. */
  onRetry?: () => void;
  onCancel: () => void;
  /** Close after success. */
  onDone?: () => void;
  /** Link to a check by a person, for anyone who cannot read aloud. Shown on every step before the result. */
  manualReviewHref?: string;
  /** Link to support, shown when locked out. */
  supportHref?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const words = {
  voice: {
    title: "Confirm this is your voice",
    agree: "I am the person whose voice this is, and I agree to it being cloned as described.",
    device: "mic",
    deviceCheck: "Check your mic",
    checkPrompt: "Say a few words in your normal voice so we can check your mic.",
    readHint: "Read this once, then press Stop.",
    verified: "Your voice is verified. You can now use it.",
    manual: "Cannot read aloud? Ask for a check by a person",
  },
  likeness: {
    title: "Confirm this is you",
    agree: "I am the person shown and heard, and I agree to my likeness being used as described.",
    device: "camera and mic",
    deviceCheck: "Check your camera and mic",
    checkPrompt: "Look at the camera and say a few words so we can check your camera and mic.",
    readHint: "Look at the camera, read this once, then press Stop.",
    verified: "Your likeness is verified. You can now use it.",
    manual: "Cannot read aloud or use a camera? Ask for a check by a person",
  },
} as const;

const stepNames = ["Agree", "Check", "Read lines", "Result"] as const;
const stepIndex: Record<ConsentStep, number> = { explain: 0, micCheck: 1, reading: 2, checking: 3, verified: 3, failed: 3, lockedOut: 3 };

const levelWord = (l: number) => (l < 0.2 ? "quiet" : l < 0.75 ? "speaking" : "loud");

/** Three steps of level, never a moving wave. Neutral: this is the person's own voice, not the AI. */
function LevelMeter({ level, label }: { level: number; label: string }) {
  const word = levelWord(level);
  const filled = word === "quiet" ? 1 : word === "speaking" ? 2 : 3;
  return (
    <div className="flex items-center gap-2 text-small leading-4.5 text-fg-muted">
      <span role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={3} aria-valuenow={filled} aria-valuetext={word}
        className="flex h-4 items-end gap-0.5">
        {[1, 2, 3].map((n) => (
          <span key={n} className={cn("w-1.5 rounded-full transition-colors duration-(--dur-fast)", n === 1 ? "h-1.5" : n === 2 ? "h-2.5" : "h-4", n <= filled ? "bg-fg" : "bg-line")} />
        ))}
      </span>
      <span>Level: {word}</span>
    </div>
  );
}

/**
 * Live consent check before cloning a voice or using someone's likeness. The person agrees to plain terms, checks their
 * mic, then reads prompted lines aloud one at a time, so a recording of someone else cannot pass. Every step is driven by
 * props: your code records, checks and counts attempts.
 */
export function VoiceConsentCheck({
  step, lines, currentLine, subject = "voice", consentText, recording = false, level = 0, noise, attemptsLeft, retryAt,
  onAgree, onContinue, onCheckAgain, onStartLine, onStopLine, onRetry, onCancel, onDone, manualReviewHref, supportHref,
  headingLevel = 2, className,
}: VoiceConsentCheckProps) {
  const w = words[subject];
  const H = headingTag(headingLevel);
  const headId = useId();
  const headRef = useRef<HTMLHeadingElement>(null);
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [leftPage, setLeftPage] = useState(false);
  const idx = stepIndex[step];
  const line = lines[currentLine] ?? "";
  const DeviceIcon = subject === "likeness" ? CameraIcon : MicIcon;

  // Move focus to the heading when the step changes, so keyboard and screen reader users start at the top of it.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headRef.current?.focus({ preventScroll: true });
  }, [step]);

  // Recording stops if the page goes to the background, as on a phone when the app is left.
  const recRef = useRef(recording);
  recRef.current = recording;
  const stopRef = useRef(onStopLine);
  stopRef.current = onStopLine;
  useEffect(() => {
    const onHide = () => { if (document.hidden && recRef.current) { stopRef.current(); setLeftPage(true); } };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, []);
  useEffect(() => { if (recording) setLeftPage(false); }, [recording]);

  // Space starts or stops a line from anywhere in the panel that is not itself a control or a text field.
  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (step !== "reading" || e.key !== " ") return;
    const t = e.target as HTMLElement;
    if (t.closest("button, a, input, textarea, select, [contenteditable='true']")) return;
    e.preventDefault();
    if (recording) onStopLine(); else onStartLine();
  };

  const stepTitle =
    step === "explain" ? "Before you start"
    : step === "micCheck" ? w.deviceCheck
    : step === "reading" ? `Read line ${currentLine + 1} of ${lines.length}`
    : step === "checking" ? "Checking your recordings"
    : step === "verified" ? "Verified"
    : step === "failed" ? "We could not verify it"
    : "Too many tries";

  // One polite message per change. During reading it carries the line itself, so each line is read once.
  const announce =
    step === "reading" ? (recording ? "Recording" : `Line ${currentLine + 1} of ${lines.length}: ${line}`)
    : step === "micCheck" ? (noise === "ok" ? `Your ${w.device} sounds clear` : noise === "noisy" ? "It is noisy where you are" : "Listening")
    : step === "checking" ? "Checking your recordings"
    : step === "verified" ? "Verified"
    : step === "failed" ? `Not verified.${attemptsLeft !== undefined ? ` ${attemptsLeft} ${attemptsLeft === 1 ? "try" : "tries"} left.` : ""}`
    : step === "lockedOut" ? `Too many tries.${retryAt ? ` Try again after ${retryAt}.` : ""}`
    : "";

  const manual = manualReviewHref && step !== "checking" && step !== "verified"
    ? <a href={manualReviewHref} className="tap text-compact text-fg underline underline-offset-2">{w.manual}</a> : null;

  return (
    <section aria-labelledby={headId} onKeyDown={onKey}
      className={cn("flex w-full min-w-0 flex-col gap-4 rounded-card border border-line bg-surface p-4 sm:p-6", className)}>
      <header className="space-y-2">
        <p className="flex items-center gap-2 text-small leading-4.5 text-fg-muted">
          <ShieldIcon width={14} height={14} className="shrink-0" />{w.title}
        </p>
        <ol aria-label="Steps" className="flex gap-1">
          {stepNames.map((n, i) => (
            <li key={n} aria-current={i === idx ? "step" : undefined} className="flex-1">
              <span className={cn("block h-1 rounded-full", i < idx ? "bg-fg" : i === idx ? "bg-fg-muted" : "bg-line")} />
              <span className="sr-only">{n}{i < idx ? ", done" : i === idx ? ", current" : ""}</span>
            </li>
          ))}
        </ol>
        <p className="text-small leading-4.5 text-fg-muted" aria-hidden>Step {idx + 1} of 4: {stepNames[idx]}</p>
        <H id={headId} ref={headRef} tabIndex={-1} className="text-subhead font-semibold text-fg outline-none">{stepTitle}</H>
      </header>

      {step === "explain" && (
        <div className="space-y-4">
          <div className="space-y-2 rounded-card bg-sunken p-4 text-compact text-fg">{consentText}</div>
          <p className="text-compact text-fg-muted">Next you will read {lines.length} short {lines.length === 1 ? "line" : "lines"} out loud. Nothing is recorded until you press Start.</p>
          <div>
            <Checkbox checked={agreed} onChange={(c) => { setAgreed(c); if (c) setAgreeError(false); }} label={w.agree}
              invalid={agreeError} aria-describedby={agreeError ? `${headId}-err` : undefined} />
            {agreeError && <p id={`${headId}-err`} className="mt-1 pl-8 text-small leading-4.5 text-danger-fg">Tick the box to continue.</p>}
          </div>
        </div>
      )}

      {step === "micCheck" && (
        <div className="space-y-3">
          <p className="flex items-start gap-2 text-compact text-fg"><DeviceIcon className="mt-0.5 shrink-0" />{w.checkPrompt}</p>
          <LevelMeter level={level} label="Input level" />
          {noise === "ok" && <p className="flex items-center gap-1 text-compact text-success-fg"><ApproveIcon className="shrink-0" />Sounds clear.</p>}
          {noise === "noisy" && (
            <Callout tone="warning" title="It is noisy where you are">
              Background sound can make the check fail. Move somewhere quieter, then check again.
            </Callout>
          )}
          {!noise && <p className="text-compact text-fg-muted">Listening…</p>}
        </div>
      )}

      {step === "reading" && (
        <div className="space-y-3">
          <p className="text-compact text-fg-muted">{w.readHint}</p>
          <blockquote key={currentLine} className="rounded-card bg-sunken px-4 py-5 text-title-sm leading-snug font-medium text-fg motion-safe:animate-rise sm:text-title-md">
            {line}
          </blockquote>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {recording
              ? <span className="inline-flex items-center gap-1.5 text-compact font-medium text-danger-fg"><span aria-hidden className="size-2 rounded-full bg-danger" />Recording</span>
              : <span className="text-compact text-fg-muted">Not recording</span>}
            <LevelMeter level={recording ? level : 0} label="Input level" />
          </div>
          <p className="text-small leading-4.5 text-fg-subtle max-sm:hidden">Space also starts and stops.</p>
          {leftPage && <p className="text-compact text-fg-muted">Recording stopped when you left this page. Read the line again.</p>}
        </div>
      )}

      {step === "checking" && (
        <p className="flex items-center gap-2 text-compact text-fg-muted">
          <svg aria-hidden viewBox="0 0 24 24" className="size-4 motion-safe:animate-spin"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" /><path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
          This takes a few seconds. You can keep this open or leave it.
        </p>
      )}

      {step === "verified" && (
        <div className="space-y-3">
          <p className="flex items-start gap-2 text-compact text-success-fg"><ApproveIcon className="mt-0.5 shrink-0" />{w.verified}</p>
          <div className="space-y-2 rounded-card bg-sunken p-4 text-compact text-fg">{consentText}</div>
        </div>
      )}

      {step === "failed" && (
        <div className="space-y-2">
          <p className="flex flex-wrap items-center gap-2"><Badge tone="danger"><AlertIcon width={12} height={12} />Not verified</Badge>
            {attemptsLeft !== undefined && <span className="text-compact text-fg-muted">{attemptsLeft} {attemptsLeft === 1 ? "try" : "tries"} left</span>}</p>
          <p className="text-compact text-fg">The lines did not match well enough. Read in a quiet place, at your normal pace.</p>
          <p className="text-compact text-fg-muted">Your earlier samples are kept safe. You will not need to record them again.</p>
        </div>
      )}

      {step === "lockedOut" && (
        <div className="space-y-2">
          <p className="flex items-start gap-2 text-compact text-fg"><LockIcon className="mt-0.5 shrink-0" />
            {retryAt ? `You can try again after ${retryAt}.` : "You can try again later."}</p>
          <p className="text-compact text-fg-muted">This limit protects people from having their {subject === "voice" ? "voice" : "likeness"} copied. Your samples are kept safe.</p>
          {supportHref && <a href={supportHref} className="tap text-compact text-fg underline underline-offset-2">Contact support</a>}
        </div>
      )}

      {manual}

      <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4 max-sm:[&>*]:flex-1">
        {step === "explain" && <Button onClick={() => { if (!agreed) { setAgreeError(true); return; } onAgree(); }}>Agree and continue</Button>}
        {step === "micCheck" && noise === "ok" && <Button onClick={onContinue}>Continue</Button>}
        {step === "micCheck" && noise === "noisy" && <>
          <Button onClick={onCheckAgain}>Check again</Button>
          <Button variant="secondary" onClick={onContinue}>Continue anyway</Button>
        </>}
        {step === "reading" && (recording
          ? <Button variant="secondary" leading={<StopIcon width={14} height={14} />} onClick={onStopLine}>Stop</Button>
          : <Button leading={<MicIcon width={16} height={16} />} onClick={onStartLine}>{currentLine === 0 ? "Start reading" : "Start next line"}</Button>)}
        {step === "failed" && onRetry && (attemptsLeft === undefined || attemptsLeft > 0) && <Button onClick={onRetry}>Try again</Button>}
        {step === "verified" && <Button onClick={onDone}>Done</Button>}
        {step !== "verified" && <Button variant="ghost" onClick={onCancel}>{step === "lockedOut" ? "Close" : "Cancel"}</Button>}
      </div>
      <p role="status" className="sr-only">{announce}</p>
    </section>
  );
}
```
