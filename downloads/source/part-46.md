## tattva/molecules/VideoPlayer.tsx

```tsx
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, LoopIcon, RetryIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { FrameScrubber, frameAt } from "../atoms/FrameScrubber";
import { KeyHint } from "../atoms/KeyHint";
import { Spinner } from "../atoms/Spinner";
import { Switch } from "../atoms/Switch";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { formatMediaTime } from "../atoms/Waveform";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { AILabel } from "./AILabel";
import { Collapsible } from "./Collapsible";
import { ProvenancePopover } from "./ProvenancePopover";
import type { ProvenancePopoverProps } from "./ProvenancePopover";

export type VideoRatio = "16:9" | "9:16" | "1:1";
/** A drawn stand-in for a clip, used when there is no `src` (previews, tests and docs). */
export type VideoSceneName = "harbour" | "kite";
/**
 * generating: the AI is still making the clip; the poster shows and nothing can play. loading: getting the file.
 * ready, playing, paused, buffering, ended: tracked by the player. error: the clip could not be loaded.
 */
export type VideoPlayerState = "generating" | "loading" | "ready" | "playing" | "paused" | "buffering" | "ended" | "error";

export interface VideoFrameAction {
  id: string;
  /** Short verb phrase, such as "Use as start frame" or "Extend from here". */
  label: string;
  icon?: ReactNode;
}

export interface VideoCue {
  start: number;
  end: number;
  text: string;
}

export interface VideoPlayerProps {
  /** Names the player, such as "Take 3, harbour at dawn". Tells clips apart. */
  label: string;
  /** A second line, such as "8 seconds, made 3 October". Without it the line shows the state in words. */
  subtitle?: string;
  /** A real video file. Leave out to simulate playback with a drawn scene. */
  src?: string;
  /** Length in seconds. Needed without `src`; with `src` it is read from the file when left out. */
  duration?: number;
  /** The drawn scene used without `src`. */
  scene?: VideoSceneName;
  /** Still image shown before playing and while generating. Without it the first drawn frame is used. */
  poster?: string;
  /** Shape of the frame. The space is reserved before anything loads. */
  ratio?: VideoRatio;
  /** Frames per second. Turns on frame step buttons and keys, and frame numbers. */
  fps?: number;
  /** Forces a state the player cannot see for itself: generating, loading or error. */
  state?: "generating" | "loading" | "error";
  /** Extra words beside the generating or error state, such as "Second in the queue, busy period". */
  statusNote?: string;
  /** Shows Try again in the error state. */
  onRetry?: () => void;
  /** Starts with loop on. The person can change it. */
  loop?: boolean;
  /** Starts muted. The person can change it. Nothing ever plays, with or without sound, until the person presses Play. */
  muted?: boolean;
  /** Set to false when the clip has no sound. The mute button then says so and does nothing. */
  hasAudio?: boolean;
  /** Caption files for a real `src`, played through native tracks. */
  captions?: { src: string; lang: string; label: string }[];
  /** Caption lines drawn over the frame. Works with or without `src`. */
  cues?: VideoCue[];
  /** The words spoken in the clip, or a description of what it shows. Shown in a collapsed Transcript section. */
  transcript?: ReactNode;
  /** Actions on the paused frame, such as "Use as start frame". They show only while paused. */
  frameActions?: VideoFrameAction[];
  /** Called with the action id, the time in seconds and the frame number (when `fps` is set). */
  onFrameAction?: (id: string, seconds: number, frame?: number) => void;
  /** Single-key shortcuts (K, M, C, comma, period) on at first. They only work while focus is inside the player, and the person can turn them off. */
  shortcuts?: boolean;
  /** Adds an AI label beside the title. The player itself stays neutral. */
  aiGenerated?: boolean;
  /** What the AI label explains, used when there is no `provenance`. */
  aiNote?: ReactNode;
  /** Opens full provenance details from the label: model, date, what the file carries. Say what can strip it. */
  provenance?: Omit<ProvenancePopoverProps, "open" | "onOpenChange">;
  /** Position in seconds, when the parent keeps it. A change of more than a frame seeks. */
  current?: number;
  onTimeChange?: (seconds: number) => void;
  onPlayingChange?: (playing: boolean) => void;
  className?: string;
}

const STATE_WORD: Record<VideoPlayerState, string> = {
  generating: "Generating", loading: "Loading", ready: "Ready", playing: "Playing", paused: "Paused",
  buffering: "Buffering", ended: "Ended", error: "Could not play",
};
const RATIO: Record<VideoRatio, string> = { "16:9": "aspect-video", "9:16": "aspect-[9/16] max-w-64", "1:1": "aspect-square max-w-md" };
const VIEW: Record<VideoRatio, string> = { "16:9": "0 35 160 90", "9:16": "35 0 90 160", "1:1": "0 0 160 160" };
// Shared with AudioPlayer, so starting a video pauses any audio on the page and the reverse.
const PLAY_EVENT = "tattva-audio-play";
const DOUBLE_TAP_SECONDS = 2;

const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/* ---------- glyphs ---------- */
const G = ({ children, className = "size-5" }: { children: ReactNode; className?: string }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const PlayGlyph = ({ className }: { className?: string }) => <G className={className}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" stroke="none" /></G>;
const PauseGlyph = () => <G><rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none" /><rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none" /></G>;
const FrameBackGlyph = () => <G><path d="M6 5v14" /><path d="M18 6l-8 6 8 6z" fill="currentColor" stroke="none" /></G>;
const FrameFwdGlyph = () => <G><path d="M18 5v14" /><path d="M6 6l8 6-8 6z" fill="currentColor" stroke="none" /></G>;
const SoundGlyph = ({ off }: { off: boolean }) => (
  <G><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" />{off ? <path d="M16 9.5l5 5M21 9.5l-5 5" /> : <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />}</G>
);
const CaptionsGlyph = () => <G><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M10.5 10.5a2 2 0 1 0 0 3M17 10.5a2 2 0 1 0 0 3" /></G>;
const FullGlyph = () => <G><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></G>;

/* ---------- drawn scenes ---------- */

/**
 * One frame of a drawn stand-in clip, worked out from the time alone, so any frame can be drawn again (for the scrubber
 * preview, a filmstrip or a frame action). Colours come from tokens. Use it where a real file is not needed.
 */
export function VideoScene({ scene = "harbour", time, duration, ratio = "16:9", className }: { scene?: VideoSceneName; time: number; duration: number; ratio?: VideoRatio; className?: string }) {
  const p = duration > 0 ? clamp(time / duration, 0, 1) : 0;
  const gid = useId().replace(/:/g, "");
  const paper = "var(--ref-paper)";
  const ink = "var(--ref-charcoal)";
  if (scene === "kite") {
    const kx = 80 + Math.sin(p * Math.PI * 4) * 28;
    const ky = 52 + Math.sin(p * Math.PI * 8) * 10 - p * 8;
    const cloud = (x: number, y: number, s: number) => (
      <g transform={`translate(${((x + p * 60) % 200) - 20} ${y}) scale(${s})`} fill={paper} fillOpacity={0.85}>
        <ellipse cx="0" cy="0" rx="12" ry="5" /><ellipse cx="7" cy="-3" rx="8" ry="5" /><ellipse cx="-6" cy="-2" rx="6" ry="4" />
      </g>
    );
    return (
      <svg viewBox={VIEW[ratio]} preserveAspectRatio="xMidYMid slice" className={cn("block size-full", className)} focusable="false" aria-hidden>
        <defs>
          <linearGradient id={`${gid}k`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--chart-seq-3)" }} />
            <stop offset="1" style={{ stopColor: "var(--chart-seq-1)" }} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill={`url(#${gid}k)`} />
        {cloud(20, 30, 1)}{cloud(110, 45, 0.8)}{cloud(70, 18, 0.6)}
        <path d="M0 118 Q40 96 85 108 T160 102 V160 H0z" style={{ fill: "color-mix(in oklab, var(--chart-4) 70%, var(--ref-charcoal))" }} />
        <path d="M0 128 Q50 112 100 124 T160 118 V160 H0z" fill="var(--chart-4)" />
        {/* A child on the hill holding the line. */}
        <g transform="translate(58 112)" fill={ink}><circle cx="0" cy="-9" r="2.2" /><path d="M-2 -7h4l1 7h-6z" /><path d="M-2 0v5M2 0v5" stroke={ink} strokeWidth="1.4" /></g>
        <path d={`M60 106 Q${(kx + 60) / 2} ${ky + 30} ${kx} ${ky + 8}`} fill="none" stroke={ink} strokeWidth="0.5" />
        <g transform={`translate(${kx} ${ky}) rotate(${Math.sin(p * Math.PI * 8) * 12})`}>
          <path d="M0 -8 L6 0 L0 10 L-6 0z" fill="var(--chart-2)" stroke={ink} strokeWidth="0.6" />
          <path d="M0 10 q3 5 0 9 q-3 4 0 8" fill="none" stroke="var(--chart-2)" strokeWidth="1" />
        </g>
      </svg>
    );
  }
  const sx = 34 + p * 70;
  const sy = 104 - Math.sin(p * Math.PI * 0.85) * 46;
  const boat = 8 + p * 112;
  const wave = (y: number, o: number) => {
    const x0 = -20 + ((p * 40 + o) % 20);
    return <path d={`M${x0} ${y} q5 -2 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0`} fill="none" stroke={paper} strokeOpacity={0.35} strokeWidth="0.7" />;
  };
  return (
    <svg viewBox={VIEW[ratio]} preserveAspectRatio="xMidYMid slice" className={cn("block size-full", className)} focusable="false" aria-hidden>
      <defs>
        <linearGradient id={`${gid}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--chart-seq-5)" }} />
          <stop offset="0.7" style={{ stopColor: "var(--chart-seq-2)" }} />
          <stop offset="1" style={{ stopColor: "color-mix(in oklab, var(--chart-2) 45%, var(--ref-paper))" }} />
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill={`url(#${gid}s)`} />
      <circle cx={sx} cy={sy} r="9" style={{ fill: "color-mix(in oklab, var(--chart-2) 40%, var(--ref-paper))" }} />
      <path d="M0 100 L18 90 L30 95 L48 84 L64 96 L160 96 V100z" fill="var(--chart-seq-5)" />
      <rect y="100" width="160" height="60" fill="var(--chart-seq-4)" />
      <ellipse cx={sx} cy={112} rx="6" ry="14" style={{ fill: "color-mix(in oklab, var(--chart-2) 40%, var(--ref-paper))" }} fillOpacity={0.35} />
      {wave(106, 0)}{wave(114, 7)}{wave(124, 13)}{wave(138, 4)}
      {/* Lighthouse on the right. */}
      <g transform="translate(136 72)">
        <path d="M-3 0h6l2 28h-10z" fill={paper} />
        <rect x="-4" y="8" width="8" height="4" fill="var(--chart-2)" /><rect x="-4.6" y="18" width="9.2" height="4" fill="var(--chart-2)" />
        <rect x="-3.5" y="-5" width="7" height="5" fill={ink} />
        <path d="M-20 28h40v4h-40z" fill="var(--chart-seq-5)" />
      </g>
      <g transform={`translate(${boat} 101)`}>
        <path d="M-9 0h18l-3 4h-12z" fill={ink} />
        <path d="M0 -1V-15L8 -2z" fill={paper} />
        <path d="M-1 -1V-11L-7 -2z" fill={paper} fillOpacity={0.8} />
      </g>
    </svg>
  );
}

/* ---------- player ---------- */

/**
 * Plays one generated clip and lets the person act on the exact frame they paused on. Play and pause, a frame-accurate
 * scrubber, frame steps, loop, mute, captions and full screen. Nothing plays until the person presses Play.
 * Without `src` it simulates playback with a drawn scene, so previews and docs need no file.
 */
export function VideoPlayer({
  label, subtitle, src, duration, scene = "harbour", poster, ratio = "16:9", fps, state: forced, statusNote, onRetry,
  loop: loopStart = false, muted: mutedStart = false, hasAudio = true, captions, cues, transcript, frameActions, onFrameAction,
  shortcuts = true, aiGenerated, aiNote, provenance, current, onTimeChange, onPlayingChange, className,
}: VideoPlayerProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const reduced = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  const root = useRef<HTMLElement>(null);
  const [time, setTime] = useState(current ?? 0);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [loop, setLoop] = useState(loopStart);
  const [muted, setMuted] = useState(mutedStart || !hasAudio);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [keysOn, setKeysOn] = useState(shortcuts);
  const [fileDur, setFileDur] = useState<number | null>(null);
  const [fileState, setFileState] = useState<"loading" | "ok" | "buffering" | "error">(src ? "loading" : "ok");
  const [said, setSaid] = useState("");
  const timeRef = useRef(time);
  timeRef.current = time;

  const dur = duration ?? fileDur ?? 0;
  const blocked = forced === "generating" || forced === "loading" || forced === "error";
  const state: VideoPlayerState = blocked ? forced!
    : src && fileState === "loading" ? "loading" : src && fileState === "error" ? "error"
    : playing && fileState === "buffering" ? "buffering" : playing ? "playing" : ended ? "ended" : time > 0 ? "paused" : "ready";
  const canPlay = !blocked && state !== "loading" && state !== "error" && dur > 0;
  const hasCaptions = !!cues?.length || !!captions?.length;
  const frame = fps ? 1 / fps : 0;
  const frameNo = fps ? Math.min(frameAt(time, fps), Math.max(1, Math.round(dur * fps))) : undefined;
  const totalFrames = fps ? Math.max(1, Math.round(dur * fps)) : 0;

  const report = useCallback((t: number) => { setTime(t); onTimeChange?.(t); }, [onTimeChange]);
  const setPlay = useCallback((on: boolean) => {
    setPlaying(on);
    onPlayingChange?.(on);
    if (on) window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
  }, [id, onPlayingChange]);

  const seek = useCallback((t: number) => {
    const to = clamp(t, 0, dur || 0);
    if (video.current) video.current.currentTime = to;
    setEnded(false);
    report(to);
  }, [dur, report]);

  // The parent moved the position.
  useEffect(() => {
    if (current !== undefined && Math.abs(current - timeRef.current) > Math.max(frame, 0.05)) seek(current);
  }, [current, seek, frame]);

  // Only one player plays at a time, across audio and video.
  useEffect(() => {
    const other = (e: Event) => { if ((e as CustomEvent).detail !== id) { setPlaying(false); video.current?.pause(); } };
    window.addEventListener(PLAY_EVENT, other);
    return () => window.removeEventListener(PLAY_EVENT, other);
  }, [id]);

  // Stop when the clip becomes unplayable (for example it goes back to generating).
  useEffect(() => { if (blocked && playing) setPlay(false); }, [blocked, playing, setPlay]);

  // A real file plays through the video element.
  useEffect(() => {
    const v = video.current;
    if (!v || !src) return;
    v.muted = muted;
    v.loop = loop;
    if (playing && !blocked) v.play().catch(() => setPlay(false));
    else v.pause();
  }, [playing, muted, loop, src, blocked, setPlay]);

  useEffect(() => {
    const tracks = video.current?.textTracks;
    if (!tracks) return;
    for (let i = 0; i < tracks.length; i++) tracks[i].mode = captionsOn ? "showing" : "hidden";
  }, [captionsOn, src]);

  // Without a file, a clock moves the playhead. It ticks less often with reduced motion.
  useEffect(() => {
    if (src || !playing || blocked) return;
    const step = reduced ? 250 : 1000 / Math.min(fps ?? 30, 30);
    let last = performance.now();
    const t = window.setInterval(() => {
      const now = performance.now();
      const next = timeRef.current + (now - last) / 1000;
      last = now;
      if (next >= dur) {
        if (loop) report(0);
        else { report(dur); setPlay(false); setEnded(true); }
      } else report(next);
    }, step);
    return () => window.clearInterval(t);
  }, [src, playing, blocked, reduced, dur, loop, fps, report, setPlay]);

  // Say state changes once: ready after generating (WorkingEdge already says generating), ended, error. Never the clock or play and pause.
  const prevForced = useRef(forced);
  useEffect(() => {
    if (prevForced.current === "generating" && forced !== "generating") setSaid(`${label} is ready to play.`);
    else if (state === "generating") setSaid(statusNote ?? "");
    else if (state === "ended") setSaid(`${label}: ended.`);
    else if (state === "error") setSaid(`${label}: could not play.${statusNote ? ` ${statusNote}` : ""}`);
    else if (state === "buffering") setSaid(`${label}: buffering.`);
    prevForced.current = forced;
  }, [state, forced, label, statusNote]);

  const toggle = () => {
    if (!canPlay) return;
    if (playing) { setPlay(false); return; }
    if (ended || time >= dur) seek(0);
    setEnded(false);
    setPlay(true);
  };
  const stepFrame = (dir: 1 | -1) => {
    if (!canPlay) return;
    if (playing) setPlay(false);
    seek(Math.round((timeRef.current + dir * (frame || 0.1)) / (frame || 0.1)) * (frame || 0.1));
  };
  const toggleMute = () => { if (hasAudio) setMuted((m) => !m); };
  const fullscreen = () => {
    const el = root.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen?.();
    else void el.requestFullscreen?.().catch(() => {});
  };
  const canFull = typeof document !== "undefined" && !!document.fullscreenEnabled;

  // Keys work only while focus is inside the player, never while typing. Single-character keys can be turned off.
  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey || isTyping(e.target)) return;
    const el = e.target instanceof HTMLElement ? e.target : null;
    const onButton = el?.tagName === "BUTTON";
    const k = e.key;
    let done = true;
    if (k === " " && !onButton) toggle();
    else if (keysOn && (k === "k" || k === "K")) toggle();
    else if (keysOn && (k === "m" || k === "M")) toggleMute();
    else if (keysOn && (k === "c" || k === "C") && hasCaptions) setCaptionsOn((c) => !c);
    else if (keysOn && k === ",") stepFrame(-1);
    else if (keysOn && k === ".") stepFrame(1);
    else if (k === "ArrowLeft" || k === "ArrowRight") {
      const dir = k === "ArrowLeft" ? -1 : 1;
      if (e.shiftKey) stepFrame(dir); else if (canPlay) seek(timeRef.current + dir);
    } else if (k === "Home" && canPlay) seek(0);
    else if (k === "End" && canPlay) seek(dur);
    else done = false;
    if (done) e.preventDefault();
  };

  // Touch: one tap plays or pauses; a quick second tap on the left or right side seeks back or forward.
  const tap = useRef<{ at: number; timer: number } | null>(null);
  const onSurfaceUp = (e: PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== "touch" || !canPlay) return;
    const r = e.currentTarget.getBoundingClientRect();
    const side = (e.clientX - r.left) / r.width;
    if (tap.current && performance.now() - tap.current.at < 300) {
      window.clearTimeout(tap.current.timer);
      tap.current = null;
      if (side < 0.4) seek(timeRef.current - DOUBLE_TAP_SECONDS);
      else if (side > 0.6) seek(timeRef.current + DOUBLE_TAP_SECONDS);
      return;
    }
    const timer = window.setTimeout(() => { tap.current = null; toggle(); }, 260);
    tap.current = { at: performance.now(), timer };
  };
  useEffect(() => () => { if (tap.current) window.clearTimeout(tap.current.timer); }, []);
  const lastPointer = useRef("mouse");

  const cue = captionsOn && cues?.find((c) => time >= c.start && time < c.end);
  const showFrameActions = !!frameActions?.length && canPlay && !playing;
  const showPoster = !src && (state === "generating" || state === "loading") ? poster : undefined;
  const timeText = <span className="tabular-nums">{formatMediaTime(time)} / {dur ? formatMediaTime(dur) : "–:––"}</span>;

  const iconBtn = "inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-control text-fg-muted transition-colors duration-(--dur-fast) hover:bg-hover hover:text-fg aria-disabled:cursor-default aria-disabled:text-disabled-fg aria-disabled:hover:bg-transparent aria-pressed:text-fg aria-pressed:bg-sunken pointer-coarse:size-11";

  return (
    <section ref={root} aria-labelledby={titleId} onKeyDown={onKey}
      className={cn("flex min-w-0 flex-col gap-2 rounded-card border border-line bg-surface p-3 sm:p-4 [&:fullscreen]:justify-center [&:fullscreen]:overflow-auto", className)}>
      <div className="flex min-w-0 items-center gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <h3 id={titleId} className="truncate text-compact font-medium text-fg">{label}</h3>
            {provenance ? <ProvenancePopover label="AI-generated" {...provenance} />
              : aiGenerated && <AILabel level="message" size={16} text="AI" overview={aiNote ?? "This clip was made by an AI video model."} popoverLabel={`About the AI in ${label}`} />}
          </div>
          <p className="truncate text-small text-fg-muted">{subtitle ?? STATE_WORD[state]}{subtitle && state !== "ready" && state !== "paused" ? ` · ${STATE_WORD[state]}` : ""}</p>
        </div>
      </div>

      <WorkingEdge active={state === "generating"} label={`Generating ${label}`} className={cn("mx-auto w-full", RATIO[ratio])}>
        <div className="relative size-full overflow-hidden rounded-card bg-sunken">
          {src ? (
            <video ref={video} src={src} poster={poster} preload="metadata" playsInline muted={muted} loop={loop}
              aria-label={label} className="absolute inset-0 size-full object-contain"
              onLoadedMetadata={(e) => { setFileDur(e.currentTarget.duration); setFileState("ok"); }}
              onCanPlay={() => setFileState("ok")} onWaiting={() => setFileState("buffering")} onPlaying={() => setFileState("ok")}
              onError={() => { setFileState("error"); setPlay(false); }}
              onTimeUpdate={(e) => report(e.currentTarget.currentTime)}
              onEnded={() => { setPlay(false); setEnded(true); }}>
              {captions?.map((c) => <track key={c.src} kind="captions" src={c.src} srcLang={c.lang} label={c.label} default={captionsOn} />)}
            </video>
          ) : showPoster ? (
            <img src={showPoster} alt="" className="absolute inset-0 size-full object-cover" />
          ) : (
            <VideoScene scene={scene} time={state === "generating" ? 0 : time} duration={dur || 1} ratio={ratio}
              className={cn("absolute inset-0", (state === "generating" || state === "loading") && "opacity-50 saturate-50")} />
          )}

          {/* Pointer convenience only: the Play button below is the keyboard and screen reader control. */}
          {canPlay && (
            <button type="button" tabIndex={-1} aria-hidden data-compact
              onPointerDown={(e) => { lastPointer.current = e.pointerType; }}
              onPointerUp={onSurfaceUp}
              onClick={() => { if (lastPointer.current !== "touch") toggle(); }}
              className="group absolute inset-0 flex cursor-pointer items-center justify-center">
              <span className={cn("flex size-14 items-center justify-center rounded-full bg-overlay text-inverse-fg shadow-md transition-opacity duration-(--dur-fast) motion-reduce:transition-none",
                playing ? "opacity-0" : "opacity-100")}>
                {state === "ended" ? <RetryIcon width={24} height={24} /> : <PlayGlyph className="size-7" />}
              </span>
            </button>
          )}

          {cue && (
            <p aria-hidden className="pointer-events-none absolute inset-x-3 bottom-3 text-center">
              <span className="box-decoration-clone rounded-sm bg-overlay px-1.5 py-0.5 text-compact leading-relaxed text-inverse-fg">{cue.text}</span>
            </p>
          )}

          {state === "generating" && (
            <div className="absolute inset-0 flex items-center justify-center p-3">
              <p className="flex max-w-full items-center gap-2 rounded-control bg-glass px-3 py-1.5 text-small text-fg shadow-sm">
                <span className="min-w-0 text-center">Generating{statusNote ? `. ${statusNote}` : ""}</span>
              </p>
            </div>
          )}
          {state === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center"><Spinner size={22} label="Loading" /></div>
          )}
          {state === "buffering" && (
            <div className="absolute top-2 right-2 rounded-full bg-glass p-1"><Spinner size={16} label="Buffering" /></div>
          )}
          {state === "error" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-sunken p-3 text-center">
              <AlertIcon width={20} height={20} aria-hidden className="text-danger-fg" />
              <p className="text-compact text-fg">This clip could not be loaded.{statusNote ? ` ${statusNote}` : ""}</p>
              {onRetry && <Button size="sm" variant="secondary" onClick={onRetry} leading={<RetryIcon width={14} height={14} />} className="pointer-coarse:h-11">Try again</Button>}
            </div>
          )}
        </div>
      </WorkingEdge>

      <FrameScrubber duration={canPlay ? dur : 0} value={time} onChange={(t) => seek(t)} fps={fps}
        label={`Seek, ${label}`} disabled={!canPlay}
        onScrubbingChange={(on) => { if (on && playing) setPlay(false); }}
        renderThumbnail={src ? undefined : (t) => <VideoScene scene={scene} time={t} duration={dur || 1} ratio="16:9" />} />

      <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-small text-fg-muted">
        <button type="button" onClick={toggle} aria-label="Play" aria-pressed={playing} aria-disabled={!canPlay || undefined}
          className={cn("inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-on-accent transition-colors duration-(--dur-instant) hover:bg-accent-hover",
            !canPlay && "cursor-default bg-sunken text-fg-subtle hover:bg-sunken")}>
          {playing ? <PauseGlyph /> : state === "ended" ? <RetryIcon width={20} height={20} aria-hidden /> : <PlayGlyph />}
        </button>
        {fps && (
          <>
            <button type="button" className={iconBtn} onClick={() => stepFrame(-1)} aria-disabled={!canPlay || frameNo === 1 || undefined}
              aria-label={canPlay && frameNo && frameNo > 1 ? `Back one frame, to frame ${frameNo - 1}` : "Back one frame"}><FrameBackGlyph /></button>
            <button type="button" className={iconBtn} onClick={() => stepFrame(1)} aria-disabled={!canPlay || frameNo === totalFrames || undefined}
              aria-label={canPlay && frameNo && frameNo < totalFrames ? `Forward one frame, to frame ${frameNo + 1}` : "Forward one frame"}><FrameFwdGlyph /></button>
          </>
        )}
        <span className="ml-1 flex-1 whitespace-nowrap">{timeText}{fps && canPlay && frameNo ? <span className="hidden sm:inline"> · frame {frameNo}</span> : null}</span>
        {/* The secondary toggles wrap together onto their own line when space runs out. */}
        <span className="ml-auto flex shrink-0 items-center gap-1">
          <button type="button" className={iconBtn} onClick={() => setLoop((l) => !l)} aria-pressed={loop} aria-label="Loop"><LoopIcon width={18} height={18} aria-hidden /></button>
          <button type="button" className={iconBtn} onClick={toggleMute} aria-pressed={hasAudio ? muted : undefined} aria-disabled={!hasAudio || undefined}
            aria-label={hasAudio ? "Mute" : "No sound in this clip"} title={hasAudio ? undefined : "No sound in this clip"}><SoundGlyph off={muted} /></button>
          {hasCaptions && (
            <button type="button" className={iconBtn} onClick={() => setCaptionsOn((c) => !c)} aria-pressed={captionsOn} aria-label="Captions"><CaptionsGlyph /></button>
          )}
          {canFull && <button type="button" className={iconBtn} onClick={fullscreen} aria-label="Full screen"><FullGlyph /></button>}
        </span>
      </div>

      {showFrameActions && (
        <div role="group" aria-label={`Actions for the paused frame${frameNo ? `, frame ${frameNo}` : ""}`}
          className="flex flex-wrap items-center gap-2 rounded-field bg-sunken px-3 py-2 motion-safe:animate-fade">
          <span className="min-w-0 flex-1 basis-full text-small text-fg-muted tabular-nums sm:basis-auto">
            Paused at {formatMediaTime(time)}{frameNo ? `, frame ${frameNo}` : ""}
          </span>
          {frameActions!.map((a) => (
            <Button key={a.id} size="sm" variant="secondary" leading={a.icon} className="pointer-coarse:h-11"
              onClick={() => onFrameAction?.(a.id, timeRef.current, fps ? frameAt(timeRef.current, fps) : undefined)}>
              {a.label}
            </Button>
          ))}
        </div>
      )}

      {transcript && (
        <Collapsible header={<span className="text-small font-medium text-fg">Transcript</span>} className="border-t border-line pt-2">
          <div className="pt-2 pl-6 text-compact text-fg">{transcript}</div>
        </Collapsible>
      )}
      <Collapsible header={<span className="text-small font-medium text-fg">Keyboard shortcuts</span>} className={cn(!transcript && "border-t border-line pt-2")}>
        <div className="flex flex-col gap-2 pt-2 pl-6 text-small text-fg-muted">
          <p>These work while focus is inside the player, and never while typing.</p>
          <ul className="grid gap-1 sm:grid-cols-2">
            <li className="flex items-center gap-2"><KeyHint>Space</KeyHint><KeyHint>K</KeyHint> Play or pause</li>
            <li className="flex items-center gap-2"><KeyHint>←</KeyHint><KeyHint>→</KeyHint> Back or forward 1 second</li>
            {fps && <li className="flex items-center gap-2"><KeyHint>,</KeyHint><KeyHint>.</KeyHint> or Shift with an arrow: one frame</li>}
            <li className="flex items-center gap-2"><KeyHint>Home</KeyHint><KeyHint>End</KeyHint> Start or end</li>
            <li className="flex items-center gap-2"><KeyHint>M</KeyHint> Mute</li>
            {hasCaptions && <li className="flex items-center gap-2"><KeyHint>C</KeyHint> Captions</li>}
          </ul>
          <Switch checked={keysOn} onChange={setKeysOn} label="Single-key shortcuts">Single-key shortcuts (K, M, C, comma and period)</Switch>
        </div>
      </Collapsible>

      <span role="status" className="sr-only">{said}</span>
    </section>
  );
}
```
