## tattva/organisms/VoicePanel.tsx

```tsx
import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode, type SVGProps } from "react";
import { cn } from "../lib/cn";
import { XIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { KeyHint } from "../atoms/KeyHint";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { AIPresence, type AIPresenceState } from "../atoms/AIPresence";

/**
 * Every state a voice session can be in. The first six are the original VoicePanel states, so old code keeps working.
 * micBlocked and noMic are the only states where the person must act, so they are the only amber ones.
 */
export type VoiceState =
  | "listening" | "thinking" | "speaking" | "interrupted" | "muted" | "reconnecting"
  | "connecting" | "ready" | "userSpeaking" | "working" | "held" | "micBlocked" | "noMic" | "ended" | "error";
export type VoiceSessionState = VoiceState;
export type VoiceInputMode = "handsFree" | "pushToTalk";
export type VoiceMediaState = "on" | "off" | "stoppedBySystem";

export interface VoiceCaption {
  id: string;
  speaker: "you" | "assistant";
  text: string;
}

export interface VoicePanelProps {
  state: VoiceState;
  /** Overrides the visible text for each state. */
  stateLabels?: Partial<Record<VoiceState, string>>;
  /** Hands-free listens all the time. Push-to-talk turns the main control into Hold to talk. */
  inputMode?: VoiceInputMode;
  /** Shows a Hands-free / Push to talk switch when given. */
  onInputModeChange?: (mode: VoiceInputMode) => void;
  /** Push-to-talk: the person pressed Hold to talk (pointer down, or Space held). */
  onTalkStart?: () => void;
  /** Push-to-talk: the person let go. `cancelled` is true when they slid off the button before letting go. */
  onTalkEnd?: (cancelled: boolean) => void;
  /** Live captions. Either simple caption objects, or your own node such as LiveCaptions. */
  captions?: VoiceCaption[] | ReactNode;
  /** Speaker names used in simple captions. */
  speakerLabels?: { you: string; assistant: string };
  emptyCaptions?: string;
  muted?: boolean;
  onMutedChange?: (muted: boolean) => void;
  /** Shows Hold when given. The session pauses: nothing is heard or said until Resume. */
  onHold?: () => void;
  /** Called by Resume in the held state. */
  onResume?: () => void;
  onEnd?: () => void;
  /** Shows Interrupt while the assistant speaks, and makes Esc stop it. */
  onInterrupt?: () => void;
  /** Microphone level from 0 to 1. Moves the orb while listening and fills the neutral level bars. */
  inputLevel?: number;
  /** Assistant audio level from 0 to 1. Moves the orb while it speaks. Ignored under reduced motion. */
  outputLevel?: number;
  /** Text for the working state, for example "Checking your calendar". */
  workingLabel?: string;
  /** Mic blocked or no mic: the button that asks for the microphone again. */
  onMicRetry?: () => void;
  /** Mic blocked or no mic: the way out to typing. */
  onTypeInstead?: () => void;
  /** Camera and screen share. "stoppedBySystem" shows a notice with Turn on again. */
  media?: { camera?: VoiceMediaState; screen?: VoiceMediaState };
  /** Camera toggle shows when `onCameraChange` is given. */
  cameraOn?: boolean;
  onCameraChange?: (on: boolean) => void;
  /** Screen share toggle shows when `onScreenChange` or `onScreenShareChange` is given. */
  screenSharing?: boolean;
  onScreenChange?: (on: boolean) => void;
  /** Older name for onScreenChange. */
  onScreenShareChange?: (on: boolean) => void;
  /** Time since the session started, for example "02:14". Shown, never announced. */
  elapsed?: string;
  /** Minutes or credits used, for example a compact UsageMeter. */
  usage?: ReactNode;
  /** Who is talking and whether it is recorded, for example an AIDisclosure. */
  disclosure?: ReactNode;
  /** Extra content under the state, for example a connection hint or a retry button. */
  footer?: ReactNode;
  /** Shows the key hints (Esc, M, Space) on screens with a fine pointer. */
  showKeyHints?: boolean;
  className?: string;
}
export type VoiceSessionProps = VoicePanelProps;

const DEFAULT_LABELS: Record<VoiceState, string> = {
  connecting: "Connecting",
  ready: "Ready. Start talking.",
  listening: "Listening",
  userSpeaking: "Hearing you",
  thinking: "Thinking",
  working: "Working on it",
  speaking: "Speaking",
  interrupted: "Stopped. Go ahead.",
  muted: "Muted. The assistant cannot hear you.",
  held: "On hold. Tap Resume.",
  reconnecting: "Reconnecting",
  micBlocked: "Microphone blocked",
  noMic: "No microphone found",
  ended: "Call ended",
  error: "Something went wrong",
};

/** How each session state drives the shared orb. The orb has five looks; dimming covers the paused ones. */
const ORB: Record<VoiceState, { look: AIPresenceState; dim?: "soft" | "still" }> = {
  connecting: { look: "idle", dim: "soft" },
  ready: { look: "idle" },
  listening: { look: "listening" },
  userSpeaking: { look: "listening" },
  thinking: { look: "thinking" },
  working: { look: "thinking" },
  speaking: { look: "speaking" },
  interrupted: { look: "idle" },
  muted: { look: "idle", dim: "soft" },
  held: { look: "idle", dim: "still" },
  reconnecting: { look: "idle", dim: "soft" },
  micBlocked: { look: "idle", dim: "still" },
  noMic: { look: "idle", dim: "still" },
  ended: { look: "idle", dim: "still" },
  error: { look: "error" },
};

const icon = (p: SVGProps<SVGSVGElement>) => ({ width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, ...p });
const MicIcon = () => <svg {...icon({})}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>;
const MicOffIcon = () => <svg {...icon({})}><path d="M4 4l16 16M9 9v2a3 3 0 0 0 5 2M15 9V6a3 3 0 0 0-5.5-1.7M5 11a7 7 0 0 0 11 5.7M12 18v3" /></svg>;
const CameraIcon = () => <svg {...icon({})}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg>;
const ScreenIcon = () => <svg {...icon({})}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>;
const PauseIcon = () => <svg {...icon({})}><path d="M9 6v12M15 6v12" /></svg>;
const PlayIcon = () => <svg {...icon({})}><path d="M8 5.5v13l10-6.5z" /></svg>;
const StopIcon = () => <svg {...icon({})}><rect x="7" y="7" width="10" height="10" rx="1.5" /></svg>;

const isCaptionList = (c: unknown): c is VoiceCaption[] =>
  Array.isArray(c) && c.every((x) => x !== null && typeof x === "object" && "speaker" in x && "text" in x && "id" in x);

/** Three neutral bars for the person's own mic level. Never lime: lime marks the AI only. Steps, not a moving wave. */
function MicLevel({ level, off }: { level: number; off: boolean }) {
  const step = off ? 0 : level > 0.66 ? 3 : level > 0.25 ? 2 : level > 0.04 ? 1 : 0;
  return (
    <span aria-hidden className="inline-flex h-4 items-end gap-0.5">
      {[1, 2, 3].map((i) => (
        <span key={i} className={cn("w-1 rounded-full transition-colors duration-(--dur-fast)", i === 1 ? "h-1.5" : i === 2 ? "h-2.5" : "h-4", step >= i ? "bg-fg" : "bg-line-strong")} />
      ))}
    </span>
  );
}

/** A notice where the person must act. Amber, no role of its own: the state is already announced once by the orb's status region. */
function ActNotice({ title, children, actions }: { title: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <div className="w-full rounded-card bg-warning-soft p-4 text-body leading-5 text-warning-fg motion-safe:animate-rise">
      <p className="font-medium">{title}</p>
      <p className="mt-0.5">{children}</p>
      {actions && <div className="mt-3 flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

/** A calm notice that needs no action. Neutral, no role. */
function InfoNotice({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-card border border-line bg-sunken px-3 py-2 text-compact text-fg motion-safe:animate-rise">
      <span>{children}</span>{action}
    </div>
  );
}

const typing = (el: EventTarget | null) => {
  const t = el as HTMLElement | null;
  return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
};

/**
 * A voice conversation (VoiceSession). The orb is the shared AIPresence, the state is always written in words, and
 * captions give the conversation without audio. Mute, Hold and End are separate: End sits apart, in a danger outline.
 * The mic blocked and no mic states are the only amber ones, because there the person must act.
 */
export function VoiceSession({
  state, stateLabels, inputMode = "handsFree", onInputModeChange, onTalkStart, onTalkEnd,
  captions, speakerLabels = { you: "You", assistant: "Assistant" }, emptyCaptions = "Captions appear here as you talk.",
  muted, onMutedChange, onHold, onResume, onEnd, onInterrupt, inputLevel = 0, outputLevel = 0, workingLabel,
  onMicRetry, onTypeInstead, media, cameraOn, onCameraChange, screenSharing, onScreenChange, onScreenShareChange,
  elapsed, usage, disclosure, footer, showKeyHints = true, className,
}: VoicePanelProps) {
  const labels = { ...DEFAULT_LABELS, ...(workingLabel ? { working: workingLabel } : {}), ...stateLabels };
  const label = labels[state];
  const orb = ORB[state];
  const isMuted = muted ?? state === "muted";
  const camera: VoiceMediaState = media?.camera ?? (cameraOn ? "on" : "off");
  const screen: VoiceMediaState = media?.screen ?? (screenSharing ? "on" : "off");
  const setScreen = onScreenChange ?? onScreenShareChange;
  const ended = state === "ended";
  const held = state === "held";
  const blocked = state === "micBlocked" || state === "noMic";
  const ptt = inputMode === "pushToTalk";

  // Simple captions are a log people read on demand. A custom node (LiveCaptions) brings its own log.
  const list = captions === undefined ? [] : isCaptionList(captions) ? captions : null;
  const hasCaptions = list ? list.length > 0 : !!captions;

  // Push-to-talk: pointer or Space held. Sliding off the button before letting go cancels.
  const [talk, setTalk] = useState<"idle" | "talking" | "cancel">("idle");
  const talkRef = useRef(talk);
  const setPhase = (p: typeof talk) => { talkRef.current = p; setTalk(p); };
  const canTalk = ptt && !ended && !held && !blocked && !isMuted;
  const startTalk = () => { if (!canTalk || talkRef.current !== "idle") return; setPhase("talking"); onTalkStart?.(); };
  const endTalk = (forceCancel = false) => {
    if (talkRef.current === "idle") return;
    const cancelled = forceCancel || talkRef.current === "cancel";
    setPhase("idle");
    onTalkEnd?.(cancelled);
  };
  const onTalkMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (talkRef.current === "idle") return;
    const r = e.currentTarget.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    const next = inside ? "talking" : "cancel";
    if (next !== talkRef.current) setPhase(next);
  };

  // Keys work while focus is inside the panel, never while typing, never with a modifier. End has no key.
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (typing(e.target) || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "Escape" && state === "speaking" && onInterrupt) {
      e.preventDefault();
      const hadFocusOnInterrupt = (e.target as HTMLElement).dataset.interrupt !== undefined;
      if (hadFocusOnInterrupt) interrupt(); else onInterrupt();
      return;
    }
    if ((e.key === "m" || e.key === "M") && onMutedChange && !ended) { e.preventDefault(); onMutedChange(!isMuted); return; }
    if (e.key === " " && ptt) {
      const onButton = (e.target as HTMLElement).tagName === "BUTTON" && !(e.target as HTMLElement).dataset.talk;
      if (onButton) return; // Space presses whichever other button has focus
      e.preventDefault();
      if (!e.repeat) startTalk();
    }
  };
  const onKeyUp = (e: KeyboardEvent<HTMLElement>) => { if (e.key === " " && ptt) endTalk(); };

  // Interrupt disappears once pressed, so hand focus to the main control instead of losing it to the page.
  const section = useRef<HTMLElement>(null);
  const interrupt = () => {
    onInterrupt?.();
    requestAnimationFrame(() => section.current?.querySelector<HTMLButtonElement>("[data-main]")?.focus());
  };

  const talkText = talk === "talking" ? "Release to send" : talk === "cancel" ? "Release to cancel" : "Hold to talk";
  const mainSize = "h-14 px-6 text-body leading-5";
  // Every button in the control row is as tall as the main one, so the row reads as one even line. The main control
  // leads by place and width, not by height.
  const rowSize = "h-14";

  const muteButton = (main: boolean) => (
    <Button variant="secondary" data-main={main ? "" : undefined} aria-pressed={isMuted} onClick={() => onMutedChange?.(!isMuted)}
      leading={isMuted ? <MicOffIcon /> : <MicIcon />}
      trailing={!isMuted && !ptt && !blocked && !held ? <MicLevel level={inputLevel} off={state !== "listening" && state !== "userSpeaking"} /> : undefined}
      className={cn(main ? mainSize : rowSize, "aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg aria-pressed:hover:bg-fg")}>
      Mute
    </Button>
  );

  return (
    <section ref={section} aria-label="Voice conversation" onKeyDown={onKeyDown} onKeyUp={onKeyUp}
      className={cn("flex w-full max-w-lg flex-col items-center gap-4 rounded-card border border-line bg-surface p-6 max-sm:p-4", className)}>
      {(disclosure || elapsed || usage) && (
        <div className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 text-small leading-4 text-fg-muted">
          <div className="min-w-0">{disclosure}</div>
          <div className="flex items-center gap-3">
            {usage}
            {elapsed && <span className="font-mono tabular-nums"><span className="sr-only">Time </span>{elapsed}</span>}
          </div>
        </div>
      )}

      <div className={cn("flex flex-col items-center gap-2 transition-[opacity,filter] duration-(--dur-slow) ease-(--ease-standard)",
        orb.dim === "soft" && "opacity-70", orb.dim === "still" && "opacity-45 grayscale")}>
        {/* The orb's status region is the one polite announcement for state changes. Its own label is hidden; ours cross-fades below. */}
        <AIPresence state={orb.look} size={hasCaptions ? "md" : "lg"} showLabel={false}
          level={orb.look === "speaking" ? outputLevel : orb.look === "listening" ? inputLevel : 0}
          labels={{ [orb.look]: label }} />
      </div>
      <p aria-hidden key={label} className={cn("-mt-1 text-center text-body leading-5 font-medium motion-safe:animate-fade",
        state === "error" ? "text-danger-fg" : blocked ? "text-warning-fg" : "text-fg")}>
        {label}
      </p>

      {state === "speaking" && onInterrupt && (
        <Button variant="secondary" size="sm" data-interrupt="" onClick={interrupt} leading={<StopIcon />}
          trailing={showKeyHints ? <KeyHint className="pointer-coarse:hidden">Esc</KeyHint> : undefined}>
          Interrupt
        </Button>
      )}
      {state === "micBlocked" && (
        <ActNotice title="Allow the microphone to talk"
          actions={<>
            {onMicRetry && <Button size="sm" variant="secondary" onClick={onMicRetry} leading={<MicIcon />}>Allow microphone</Button>}
            {onTypeInstead && <Button size="sm" variant="ghost" onClick={onTypeInstead}>Type instead</Button>}
          </>}>
          Your browser is blocking it. Allow it in the address bar or in your settings, or type instead.
        </ActNotice>
      )}
      {state === "noMic" && (
        <ActNotice title="Connect a microphone to talk"
          actions={<>
            {onMicRetry && <Button size="sm" variant="secondary" onClick={onMicRetry}>Check again</Button>}
            {onTypeInstead && <Button size="sm" variant="ghost" onClick={onTypeInstead}>Type instead</Button>}
          </>}>
          We could not find one on this device. Plug in a headset, or type instead.
        </ActNotice>
      )}
      {camera === "stoppedBySystem" && !ended && (
        <InfoNotice action={onCameraChange && <Button size="sm" variant="secondary" onClick={() => onCameraChange(true)}>Turn camera on</Button>}>
          Camera stopped when your phone locked.
        </InfoNotice>
      )}
      {screen === "stoppedBySystem" && !ended && (
        <InfoNotice action={setScreen && <Button size="sm" variant="secondary" onClick={() => setScreen(true)}>Share again</Button>}>
          Screen sharing stopped when your phone locked.
        </InfoNotice>
      )}
      {footer}

      {list ? (
        <div role="log" aria-live="off" aria-label={ended ? "Transcript" : "Live captions"} tabIndex={0}
          className="max-h-48 w-full space-y-2 overflow-y-auto rounded-card bg-sunken p-3 text-compact">
          {list.length === 0 ? (
            <p className="text-fg-muted">{emptyCaptions}</p>
          ) : list.map((c) => (
            <p key={c.id} className={c.speaker === "you" ? "text-fg-muted" : "text-fg"}>
              {c.speaker === "assistant" && <span aria-hidden className="mr-1.5 inline-block size-1.5 rounded-full bg-lime align-middle" />}
              <span className="font-medium">{speakerLabels[c.speaker]}: </span>{c.text}
            </p>
          ))}
        </div>
      ) : (
        <div className="w-full">{captions as ReactNode}</div>
      )}

      {!ended && (
        <div className="flex w-full flex-col gap-3 motion-safe:animate-rise">
          {onInputModeChange && (
            <SegmentedControl size="sm" label="How you talk" value={inputMode} onChange={onInputModeChange} className="self-center"
              options={[{ value: "handsFree", label: "Hands-free" }, { value: "pushToTalk", label: "Push to talk" }]} />
          )}
          <div className="flex w-full flex-wrap items-center gap-2">
            {ptt ? (
              <Button variant="secondary" data-talk="1" data-main="" disabled={!canTalk} aria-pressed={talk !== "idle"}
                onPointerDown={(e) => { if (e.button !== 0) return; e.currentTarget.setPointerCapture(e.pointerId); startTalk(); }}
                onPointerMove={onTalkMove} onPointerUp={() => endTalk()} onPointerCancel={() => endTalk(true)}
                onBlur={() => endTalk(true)} onContextMenu={(e) => e.preventDefault()}
                className={cn(mainSize, "touch-none", talk === "talking" && "border-fg bg-fg text-bg hover:bg-fg", talk === "cancel" && "border-line-strong text-fg-muted")}
                leading={<MicIcon />}
                trailing={showKeyHints && talk === "idle" ? <KeyHint className="pointer-coarse:hidden">Space</KeyHint> : undefined}>
                {talkText}
              </Button>
            ) : muteButton(true)}
            {ptt && muteButton(false)}
            {held ? (
              onResume && <Button variant="secondary" onClick={onResume} leading={<PlayIcon />} className={rowSize}>Resume</Button>
            ) : (
              onHold && <Button variant="secondary" onClick={onHold} disabled={blocked} leading={<PauseIcon />} className={rowSize}>Hold</Button>
            )}
            {onCameraChange && (
              <Button variant="secondary" aria-pressed={camera === "on"} onClick={() => onCameraChange(camera !== "on")} leading={<CameraIcon />}
                className={cn(rowSize, "aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg aria-pressed:hover:bg-fg")}>
                <span className="max-sm:sr-only">Camera</span>
              </Button>
            )}
            {setScreen && (
              <Button variant="secondary" aria-pressed={screen === "on"} onClick={() => setScreen(screen !== "on")} leading={<ScreenIcon />}
                className={cn(rowSize, "aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg aria-pressed:hover:bg-fg")}>
                <span className="max-sm:sr-only">Share screen</span>
              </Button>
            )}
            <Button variant="secondary" onClick={onEnd} leading={<XIcon width={14} height={14} />}
              className={cn(rowSize, "ml-auto border-danger-line text-danger-fg hover:border-danger hover:bg-danger-soft")}>
              End
            </Button>
          </div>
          {showKeyHints && (onMutedChange || onInterrupt || ptt) && (
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-small leading-4 text-fg-muted pointer-coarse:hidden">
              {ptt && <span className="inline-flex items-center gap-1"><KeyHint>Space</KeyHint> hold to talk</span>}
              {onMutedChange && <span className="inline-flex items-center gap-1"><KeyHint>M</KeyHint> mute</span>}
              {onInterrupt && <span className="inline-flex items-center gap-1"><KeyHint>Esc</KeyHint> interrupt</span>}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

/** The original name. Same component: every VoicePanel prop still works. */
export const VoicePanel = VoiceSession;
```
