## tattva/organisms/TranscriptAudioEditor.tsx

```tsx
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, RetryIcon, UndoIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { KeyHint } from "../atoms/KeyHint";
import { TextField } from "../atoms/TextField";
import { Waveform, formatMediaTime, speakMediaTime } from "../atoms/Waveform";
import type { WaveformRegion } from "../atoms/Waveform";
import { AILabel } from "../molecules/AILabel";
import { AudioPlayer } from "../molecules/AudioPlayer";
import type { AudioPlayerProps } from "../molecules/AudioPlayer";

/**
 * original: untouched. removed: cut, skipped when playing. regenerating: new audio is being made. regenerated: new audio
 * is ready and waits for Keep or Revert. kept: new audio accepted. reverted: back to the recording. failed: new audio could not be made.
 */
export type TranscriptSpanState = "original" | "removed" | "regenerating" | "regenerated" | "kept" | "reverted" | "failed";

export interface TranscriptWord {
  id: string;
  text: string;
  /** Start and end in seconds from the start of the recording. */
  start: number;
  end: number;
  /** Key into `speakers`. */
  speaker?: string;
  /** A filler word such as "um" or "you know". Marked with a dotted underline and offered for removal in one go. */
  filler?: boolean;
}

export interface TranscriptEditSpan {
  id: string;
  /** The words this edit covers, in order. */
  wordIds: string[];
  state: TranscriptSpanState;
  /** The new words, for a span whose words were changed. Shown in place of the old ones. */
  newText?: string;
  /** Why making new audio failed, in plain words. */
  error?: string;
}

export interface TranscriptAudioEditorProps {
  words: TranscriptWord[];
  /** Edits so far. Words in no span are original. */
  spans?: TranscriptEditSpan[];
  /** Who is who. Each run of words by one speaker becomes a paragraph headed by the name. */
  speakers?: Record<string, { label: string }>;
  /** Wires in a docked player. The part then keeps the time itself and skips removed words while playing. */
  audio?: Omit<AudioPlayerProps, "current" | "onTimeChange" | "compact" | "regions" | "markers" | "madeUpTo">;
  /** Loudness per slice, each 0 to 1, when you keep your own player. With `audio` its peaks are used. */
  peaks?: number[] | null;
  /** Length in seconds. Defaults to the audio's duration, or the end of the last word. */
  duration?: number;
  /** Playback position in seconds, when your own player keeps it. */
  position?: number;
  /** Called when the person moves the playhead: a word click, the waveform or Play on a new phrase. */
  onSeek?: (seconds: number) => void;
  /** Called with the words to cut. Make a `removed` span for them. */
  onRemove?: (wordIds: string[]) => void;
  /** Called with the words to replace and the new text (leave the text out to remake the same words). Make a `regenerating` span. */
  onRegenerate?: (wordIds: string[], newText?: string) => void;
  /** Shows Smooth edit: remake the audio around a cut so it does not jump. */
  onSmooth?: (wordIds: string[]) => void;
  onKeep?: (spanId: string) => void;
  onRetry?: (spanId: string) => void;
  /** Back to the recording. Also restores removed words. */
  onRevert?: (spanId: string) => void;
  /** Undoes the last edit. Also on Ctrl+Z or Cmd+Z in the editor. */
  onUndo?: () => void;
  /** What Undo will undo, such as "Undo: removed 2 words". */
  undoLabel?: string;
  /** False when there is no consented voice to make new audio with. Change words then says why. */
  voiceAvailable?: boolean;
  /** Whose voice new audio uses, such as "Maya Okafor, consent on file". */
  voiceName?: string;
  /** Why the voice is not available, shown in one line. */
  voiceUnavailableReason?: string;
  /** Limits of the voice model, said before the person types. */
  limits?: { maxChars?: number; languages?: string[] };
  /** Name of the transcript. */
  label?: string;
  className?: string;
}

interface Token {
  key: string;
  wordIds: string[];
  text: string;
  start: number;
  end: number;
  speaker?: string;
  span?: TranscriptEditSpan;
  removed: boolean;
  filler: boolean;
}

const REPLACED: TranscriptSpanState[] = ["regenerating", "regenerated", "kept", "failed"];
const PENDING: TranscriptSpanState[] = ["regenerating", "regenerated", "failed"];
const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;

/** Words and edits flattened into what is shown: one token per word, or one per changed phrase. */
function buildTokens(words: TranscriptWord[], spans: TranscriptEditSpan[]): Token[] {
  const spanOf = new Map<string, TranscriptEditSpan>();
  for (const s of spans) if (s.state !== "original" && s.state !== "reverted") for (const w of s.wordIds) spanOf.set(w, s);
  const out: Token[] = [];
  const done = new Set<string>();
  for (const w of words) {
    const s = spanOf.get(w.id);
    if (s && REPLACED.includes(s.state)) {
      if (done.has(s.id)) continue;
      done.add(s.id);
      const ws = words.filter((x) => s.wordIds.includes(x.id));
      out.push({ key: w.id, wordIds: ws.map((x) => x.id), text: s.newText ?? ws.map((x) => x.text).join(" "), start: ws[0].start, end: ws[ws.length - 1].end, speaker: w.speaker, span: s, removed: false, filler: false });
    } else {
      out.push({ key: w.id, wordIds: [w.id], text: w.text, start: w.start, end: w.end, speaker: w.speaker, span: s, removed: s?.state === "removed", filler: !!w.filler });
    }
  }
  return out;
}

/** Stretches of time that playback skips: from a removed word to the next word that stays. */
function removedRuns(tokens: Token[], dur: number): { start: number; end: number }[] {
  const runs: { start: number; end: number }[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!tokens[i].removed) continue;
    let j = i;
    while (j < tokens.length && tokens[j].removed) j++;
    runs.push({ start: tokens[i].start, end: tokens[j]?.start ?? dur });
    i = j;
  }
  return runs;
}

/**
 * Edit speech by editing its words. Each word is tied to a time; removing words cuts the audio, and changing words makes
 * new audio for that phrase with a consented voice. The waveform shows the same cuts and new phrases. New audio is marked
 * as AI and waits for Keep or Revert. The words are a selectable list with one tab stop; Delete removes, D changes words,
 * Enter keeps, Ctrl+Z undoes. Words are never announced as they play.
 */
export function TranscriptAudioEditor({
  words, spans = [], speakers, audio, peaks, duration, position, onSeek, onRemove, onRegenerate, onSmooth, onKeep, onRetry, onRevert,
  onUndo, undoLabel = "Undo", voiceAvailable = true, voiceName, voiceUnavailableReason, limits, label = "Transcript", className,
}: TranscriptAudioEditorProps) {
  const uid = useId();
  const hintId = `${uid}-hint`;
  const tokens = useMemo(() => buildTokens(words, spans), [words, spans]);
  const tokenOfWord = useMemo(() => {
    const m = new Map<string, number>();
    tokens.forEach((t, i) => t.wordIds.forEach((w) => m.set(w, i)));
    return m;
  }, [tokens]);
  const dur = audio?.duration ?? duration ?? (words.length ? words[words.length - 1].end : 0);
  const runs = useMemo(() => removedRuns(tokens, dur), [tokens, dur]);

  // Cursor and selection are kept as word ids, so they survive words merging into a changed phrase.
  const [cursorId, setCursorId] = useState<string | null>(null);
  const [sel, setSel] = useState<{ anchor: string; focus: string } | null>(null);
  const [changing, setChanging] = useState(false);
  const [draft, setDraft] = useState("");
  const [said, setSaid] = useState("");
  const [ownTime, setOwnTime] = useState(0);
  const [seekTo, setSeekTo] = useState<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const [, setFocusTick] = useState(0);
  const optionRefs = useRef<Map<string, HTMLSpanElement>>(new Map());
  const playerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragging = useRef(false);

  const time = audio ? ownTime : position ?? 0;
  const idx = (id: string | null) => (id ? tokenOfWord.get(id) ?? -1 : -1);
  const cursor = Math.max(0, idx(cursorId));
  const range = sel ? [Math.min(idx(sel.anchor), idx(sel.focus)), Math.max(idx(sel.anchor), idx(sel.focus))] as const : null;
  const picked = range && range[0] >= 0 ? tokens.slice(range[0], range[1] + 1) : [];
  const current = playing || time > 0 ? tokens.findIndex((t) => !t.removed && time >= t.start && time < t.end) : -1;

  // Announce edits finishing or failing. Status changes only, never the word being played.
  const prev = useRef(new Map<string, TranscriptSpanState>());
  useEffect(() => {
    for (const s of spans) {
      const was = prev.current.get(s.id);
      if (was === "regenerating" && s.state === "regenerated") setSaid("New audio ready. Play it, then keep or revert.");
      if (was === "regenerating" && s.state === "failed") setSaid(`Could not make new audio.${s.error ? ` ${s.error}` : ""}`);
    }
    prev.current = new Map(spans.map((s) => [s.id, s.state]));
  }, [spans]);

  const focusToken = (i: number) => {
    const t = tokens[Math.max(0, Math.min(tokens.length - 1, i))];
    if (!t) return;
    setCursorId(t.key);
    optionRefs.current.get(t.key)?.focus();
  };
  // After an edit the cursor's word may have merged into a phrase; put focus back on whatever holds it now.
  const wantFocus = useRef(false);
  const refocus = () => { wantFocus.current = true; setFocusTick((n) => n + 1); };
  useEffect(() => {
    if (!wantFocus.current) return;
    wantFocus.current = false;
    const t = tokens[Math.max(0, idx(cursorId))];
    if (t) optionRefs.current.get(t.key)?.focus();
  });

  const seek = (t: number) => {
    if (audio) { setSeekTo(t); setOwnTime(t); }
    onSeek?.(t);
  };

  // Playback skips removed words.
  const onPlayerTime = (t: number) => {
    const run = runs.find((r) => t >= r.start && t < r.end);
    if (run && playing) { setSeekTo(run.end); setOwnTime(run.end); return; }
    setOwnTime(t);
    setSeekTo(undefined);
  };

  const playFrom = (t: number) => {
    seek(t);
    if (!audio) return;
    // The docked player owns playback; press its own Play button once the seek has landed.
    window.setTimeout(() => {
      const btn = playerRef.current?.querySelector<HTMLButtonElement>('button[aria-pressed="false"]');
      btn?.click();
    }, 60);
  };

  /* ---------- what the selection allows ---------- */
  const pickedIds = picked.flatMap((t) => t.wordIds);
  const pickedText = picked.map((t) => t.text).join(" ");
  const allRemoved = picked.length > 0 && picked.every((t) => t.removed);
  const someRemoved = picked.some((t) => t.removed);
  const pending = picked.some((t) => t.span && PENDING.includes(t.span.state));
  const speakersIn = new Set(picked.map((t) => t.speaker));
  const maxChars = limits?.maxChars;
  const changeBlocked =
    !voiceAvailable ? voiceUnavailableReason ?? "No voice to use. The speaker has not agreed to their voice being used."
    : pending ? "Keep or revert the new audio first."
    : allRemoved ? "These words are removed. Restore them first."
    : someRemoved ? "The selection crosses a cut. Select words on one side of it."
    : speakersIn.size > 1 ? "Select words from one speaker."
    : maxChars !== undefined && pickedText.length > maxChars ? `Too long: ${pickedText.length} of ${maxChars} characters. Select fewer words.`
    : null;
  const limitText = [maxChars !== undefined ? `Up to ${maxChars} characters` : "", limits?.languages?.length ? `${limits.languages.join(" or ")} only` : ""].filter(Boolean).join(". ");

  const fillers = tokens.filter((t) => t.filler && !t.removed && !t.span);

  const remove = () => {
    if (!onRemove || !picked.length) return;
    if (allRemoved) { restore(); return; }
    const ids = picked.filter((t) => !t.removed && t.span?.state !== "regenerating").flatMap((t) => t.wordIds);
    if (!ids.length) return;
    onRemove(ids);
    setSaid(`Removed ${plural(ids.length, "word")}. Playback will skip ${ids.length === 1 ? "it" : "them"}.`);
    setSel(null);
    refocus();
  };
  const restore = () => {
    const ids = new Set(picked.filter((t) => t.removed && t.span).map((t) => t.span!.id));
    ids.forEach((id) => onRevert?.(id));
    setSaid(`Restored ${plural(picked.filter((t) => t.removed).length, "word")}.`);
    setSel(null);
    refocus();
  };
  const openChange = () => {
    if (!onRegenerate || !picked.length || changeBlocked) return;
    setDraft(pickedText);
    setChanging(true);
    window.requestAnimationFrame(() => { inputRef.current?.focus(); inputRef.current?.select(); });
  };
  const closeChange = () => { setChanging(false); refocus(); };
  const submitChange = () => {
    const text = draft.trim();
    if (!text || !onRegenerate || (maxChars !== undefined && text.length > maxChars)) return;
    onRegenerate(pickedIds, text === pickedText ? undefined : text);
    setSaid("Making new audio.");
    setChanging(false);
    setSel(null);
    refocus();
  };
  const keep = (s: TranscriptEditSpan) => { onKeep?.(s.id); setSaid("Kept the new audio."); };
  const revert = (s: TranscriptEditSpan) => { onRevert?.(s.id); setSaid("Back to the original audio."); };
  const retry = (s: TranscriptEditSpan) => { onRetry?.(s.id); setSaid("Making new audio."); };

  /* ---------- keyboard and pointer ---------- */
  const paraStarts = useMemo(() => tokens.map((t, i) => i === 0 || tokens[i - 1].speaker !== t.speaker), [tokens]);
  const move = (to: number, extend: boolean) => {
    const t = tokens[Math.max(0, Math.min(tokens.length - 1, to))];
    if (!t) return;
    if (extend) setSel({ anchor: sel?.anchor ?? tokens[cursor].key, focus: t.key });
    focusToken(to);
  };

  const onListKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isTyping(e.target) || e.altKey) return;
    const mod = e.ctrlKey || e.metaKey;
    const k = e.key;
    const i = cursor;
    if (mod && (k === "z" || k === "Z") && !e.shiftKey) { if (onUndo) { e.preventDefault(); onUndo(); setSaid(`${undoLabel}. Done.`); } return; }
    if (mod && (k === "a" || k === "A")) { e.preventDefault(); setSel({ anchor: tokens[0].key, focus: tokens[tokens.length - 1].key }); return; }
    if (mod && k !== "Home" && k !== "End") return;
    let to: number | null = null;
    if (k === "ArrowRight") to = i + 1;
    else if (k === "ArrowLeft") to = i - 1;
    else if (k === "ArrowDown") { to = paraStarts.findIndex((p, j) => p && j > i); if (to < 0) to = tokens.length - 1; }
    else if (k === "ArrowUp") { let j = i; while (j > 0 && !paraStarts[j]) j--; to = j === i ? Math.max(0, paraStarts.lastIndexOf(true, i - 1)) : j; }
    else if (k === "Home") { let j = i; while (!mod && j > 0 && !paraStarts[j]) j--; to = mod ? 0 : j; }
    else if (k === "End") { let j = i; while (!mod && j < tokens.length - 1 && !paraStarts[j + 1]) j++; to = mod ? tokens.length - 1 : j; }
    if (to !== null) { e.preventDefault(); if (!e.shiftKey) setSel(null); move(to, e.shiftKey); return; }
    if (k === " ") { e.preventDefault(); const t = tokens[i]; setSel(sel && picked.length === 1 && picked[0] === t ? null : { anchor: t.key, focus: t.key }); return; }
    if (k === "Escape") { if (sel) { e.preventDefault(); setSel(null); } return; }
    if ((k === "Delete" || k === "Backspace") && picked.length && onRemove) { e.preventDefault(); remove(); return; }
    if ((k === "d" || k === "D") && !e.shiftKey && picked.length) { e.preventDefault(); openChange(); return; }
    if (k === "Enter") {
      e.preventDefault();
      const t = tokens[i];
      if (t.span?.state === "regenerated" && onKeep) keep(t.span);
      else seek(t.start);
    }
  };

  const onRootKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isTyping(e.target) || !(e.ctrlKey || e.metaKey) || e.shiftKey || (e.key !== "z" && e.key !== "Z") || !onUndo) return;
    if ((e.target as HTMLElement).getAttribute("role") === "option") return; // handled by the list
    e.preventDefault();
    onUndo();
    setSaid(`${undoLabel}. Done.`);
  };

  const down = (ev: PointerEvent<HTMLSpanElement>, i: number) => {
    if (ev.pointerType === "mouse" && ev.button !== 0) return;
    const t = tokens[i];
    if (ev.shiftKey) { setSel({ anchor: sel?.anchor ?? tokens[cursor].key, focus: t.key }); setCursorId(t.key); return; }
    setCursorId(t.key);
    setSel({ anchor: t.key, focus: t.key });
    if (ev.pointerType === "mouse") dragging.current = true;
    seek(t.start);
  };
  const enter = (i: number) => {
    if (!dragging.current) return;
    setSel((s) => s && { anchor: s.anchor, focus: tokens[i].key });
    setCursorId(tokens[i].key);
  };
  useEffect(() => {
    const up = () => { dragging.current = false; };
    window.addEventListener("pointerup", up);
    return () => window.removeEventListener("pointerup", up);
  }, []);

  // A selection that no longer exists (its words merged or were undone) is dropped.
  useEffect(() => { if (sel && (idx(sel.anchor) < 0 || idx(sel.focus) < 0)) setSel(null); });

  /* ---------- summary ---------- */
  const cuts = runs.length;
  const changed = spans.filter((s) => REPLACED.includes(s.state)).length;
  const removedSeconds = runs.reduce((a, r) => a + (r.end - r.start), 0);
  const summary = cuts || changed
    ? `Edited: ${[cuts && plural(cuts, "cut"), changed && plural(changed, "changed phrase")].filter(Boolean).join(", ")}. Length ${formatMediaTime(dur - removedSeconds)}, was ${formatMediaTime(dur)}.`
    : "No edits yet.";

  /* ---------- waveform ---------- */
  const regions: WaveformRegion[] = [
    ...runs.map((r) => ({ start: r.start, end: r.end, kind: "highlight" as const, label: "Removed, skipped when playing" })),
    ...tokens.filter((t) => t.span && REPLACED.includes(t.span.state) && t.span.state !== "failed")
      .map((t) => ({ start: t.start, end: t.end, kind: "ai" as const, label: t.span!.state === "regenerating" ? "Making new audio" : "New audio by AI" })),
    ...(picked.length ? [{ start: picked[0].start, end: picked[picked.length - 1].end, kind: "selected" as const }] : []),
  ];
  const shownPeaks = audio ? audio.peaks : peaks;
  const pct = (s: number) => `${dur ? (Math.min(Math.max(s, 0), dur) / dur) * 100 : 0}%`;

  /* ---------- paragraphs ---------- */
  const paras: { start: number; speaker?: string; items: number[] }[] = [];
  tokens.forEach((t, i) => {
    if (paraStarts[i]) paras.push({ start: t.start, speaker: t.speaker, items: [] });
    paras[paras.length - 1].items.push(i);
  });

  const renderToken = (i: number) => {
    const t = tokens[i];
    const s = t.span?.state;
    const selected = !!range && i >= range[0] && i <= range[1];
    const prevT = tokens[i - 1];
    const editPoint = !!prevT && !paraStarts[i] && (prevT.removed !== t.removed || (prevT.span !== t.span && (REPLACED.includes(s as TranscriptSpanState) || REPLACED.includes(prevT.span?.state as TranscriptSpanState))));
    return (
      <span key={t.key}>
        {i > 0 && !paraStarts[i] && " "}
        {editPoint && <span aria-hidden className="mx-0.5 inline-block h-4 border-l border-dashed border-fg-subtle align-middle" />}
        <span
          ref={(el) => { if (el) optionRefs.current.set(t.key, el); else optionRefs.current.delete(t.key); }}
          id={`${uid}-${t.key}`} role="option" aria-selected={selected} tabIndex={i === cursor ? 0 : -1}
          onPointerDown={(ev) => down(ev, i)} onPointerEnter={() => enter(i)} onFocus={() => setCursorId(t.key)}
          className={cn("cursor-text rounded-sm py-0.5 select-none box-decoration-clone underline-offset-4",
            i === current && !selected && "bg-hover",
            selected && "bg-fg text-bg",
            t.removed && "text-fg-subtle line-through decoration-fg-muted",
            selected && t.removed && "text-inverse-muted decoration-inverse-fg",
            t.filler && !t.removed && "underline decoration-fg-muted decoration-dotted",
            (s === "regenerated" || s === "kept") && "underline decoration-lime",
            s === "regenerated" ? "decoration-4" : s === "kept" ? "decoration-2" : "",
            s === "regenerating" && "bg-[linear-gradient(90deg,var(--lime)_25%,var(--border)_50%,var(--lime)_75%)] bg-[length:200%_var(--spacing)] bg-bottom bg-repeat-x motion-safe:animate-shimmer",
            s === "failed" && "underline decoration-danger decoration-dashed decoration-2",
          )}>
          {t.text}
          <span className="sr-only">
            {t.removed ? ", removed" : ""}{t.filler && !t.removed ? ", filler word" : ""}
            {s === "regenerating" ? ", making new audio" : s === "regenerated" ? ", new audio by AI, not kept yet" : s === "kept" ? ", new audio by AI" : s === "failed" ? ", new audio failed" : ""}
          </span>
        </span>
      </span>
    );
  };

  const spanBar = (t: Token) => {
    const s = t.span!;
    const quote = t.text.length > 48 ? `${t.text.slice(0, 46)}…` : t.text;
    return (
      <div key={s.id} className="flex flex-wrap items-center gap-x-2 gap-y-1.5 rounded-field border border-line bg-sunken px-2.5 py-2 text-small">
        {s.state === "regenerating" && <span className="min-w-48 flex-1 text-fg-muted">Making new audio for “{quote}”</span>}
        {s.state === "regenerated" && (
          <span className="flex min-w-48 flex-1 items-center gap-1.5 text-fg">
            <AILabel level="field" size={16} text="AI" popoverLabel="About this new audio"
              overview={`These words were spoken by an AI voice${voiceName ? ` (${voiceName})` : ""}. The rest is the original recording.`} />
            <span className="min-w-0">New audio for “{quote}”. Keep it or revert.</span>
          </span>
        )}
        {s.state === "failed" && (
          <span className="flex min-w-48 flex-1 items-center gap-1.5 text-fg">
            <AlertIcon width={14} height={14} aria-hidden className="shrink-0 text-danger-fg" />
            <span className="min-w-0">Could not make new audio for “{quote}”.{s.error && <span className="text-fg-muted"> {s.error}</span>}</span>
          </span>
        )}
        {s.state === "regenerated" && <Button size="sm" variant="secondary" onClick={() => playFrom(t.start)} aria-label={`Play new audio, ${quote}`} className="pointer-coarse:h-11">Play</Button>}
        {(s.state === "regenerated" || s.state === "failed") && onRetry && (
          <Button size="sm" variant="secondary" onClick={() => retry(s)} leading={<RetryIcon width={14} height={14} />} aria-label={`Retry, ${quote}`} className="pointer-coarse:h-11">Retry</Button>
        )}
        {s.state === "regenerated" && onKeep && <Button size="sm" variant="primary" onClick={() => keep(s)} aria-label={`Keep new audio, ${quote}`} className="pointer-coarse:h-11">Keep</Button>}
        {(s.state === "regenerated" || s.state === "failed") && onRevert && (
          <Button size="sm" variant="ghost" onClick={() => revert(s)} aria-label={`Revert to the original, ${quote}`} className="pointer-coarse:h-11">Revert</Button>
        )}
      </div>
    );
  };

  return (
    <div onKeyDown={onRootKey} className={cn("flex min-w-0 flex-col gap-3 rounded-card border border-line bg-surface p-3 sm:p-4", className)}>
      {audio && (
        <div ref={playerRef}>
          <AudioPlayer {...audio} compact current={seekTo} onTimeChange={onPlayerTime} onPlayingChange={setPlaying} />
        </div>
      )}

      <div className="relative">
        <Waveform peaks={shownPeaks === undefined ? [] : shownPeaks} simple={shownPeaks === undefined} duration={dur} position={time}
          onSeek={audio || onSeek ? seek : undefined} label={`Seek, ${audio?.title ?? label}`} regions={regions} height={48} />
        {/* Cuts are hatched over the drawing, and every edit point gets a dashed line, so the waveform matches the words. */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-12">
          {runs.map((r, i) => (
            <span key={i} className="absolute inset-y-0 border-x border-dashed border-fg-subtle bg-glass"
              style={{ left: pct(r.start), width: `calc(${pct(r.end)} - ${pct(r.start)})`, backgroundImage: "repeating-linear-gradient(135deg, color-mix(in oklab, var(--fg-subtle) 45%, transparent) 0 calc(var(--spacing) * 0.25), transparent 0 calc(var(--spacing) * 1.5))" }} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="min-w-0 flex-1 text-small text-fg-muted">{summary}</p>
        {onRemove && fillers.length > 0 && (
          <Button size="sm" variant="secondary" onClick={() => { const ids = fillers.flatMap((t) => t.wordIds); onRemove(ids); setSaid(`Removed ${plural(ids.length, "filler word")}.`); }} className="pointer-coarse:h-11">
            Remove {plural(fillers.length, "filler word")}
          </Button>
        )}
        {onUndo && (
          <Button size="sm" variant="ghost" onClick={() => { onUndo(); setSaid(`${undoLabel}. Done.`); }} leading={<UndoIcon width={14} height={14} />} aria-label={undoLabel} title={undoLabel} className="pointer-coarse:h-11">Undo</Button>
        )}
      </div>

      <p id={hintId} className="text-small text-fg-muted">
        Select words to edit them. Shift and the arrow keys select more.
        <span className="hidden sm:inline"> <KeyHint>Delete</KeyHint> removes, <KeyHint>D</KeyHint> changes words, <KeyHint>Enter</KeyHint> keeps new audio.</span>
      </p>

      <section aria-label={label} onKeyDown={onListKey} className="max-h-120 min-w-0 overflow-y-auto overscroll-contain">
        <div className="flex flex-col gap-4">
          {paras.map((p, pi) => {
            const who = p.speaker ? speakers?.[p.speaker]?.label ?? p.speaker : undefined;
            const groupLabel = `${who ? `${who}, ` : ""}${speakMediaTime(p.start)}`;
            const bars = p.items.map((i) => tokens[i]).filter((t) => t.span && PENDING.includes(t.span.state) && t.key === t.wordIds[0] && t.wordIds.length && !t.removed);
            return (
              <div key={pi} className="flex flex-col gap-1.5">
                <p className="flex items-center gap-2 text-small" aria-hidden>
                  {who && <span className="font-medium text-fg">{who}</span>}
                  <span className="text-fg-muted tabular-nums">{formatMediaTime(p.start)}</span>
                </p>
                <div role="listbox" aria-multiselectable aria-label={groupLabel} aria-describedby={hintId}
                  className="text-body leading-8 text-fg pointer-coarse:leading-11">
                  {p.items.map(renderToken)}
                </div>
                {bars.map(spanBar)}
              </div>
            );
          })}
        </div>
      </section>

      {/* Selection bar. It always holds its place, so nothing jumps when words are selected. */}
      <div className="sticky bottom-0 z-10 -mx-3 -mb-3 rounded-b-card border-t border-line bg-raised px-3 py-2.5 sm:-mx-4 sm:-mb-4 sm:px-4">
        {!picked.length ? (
          <p className="text-small text-fg-muted">Nothing selected. Tap or click a word to select it.</p>
        ) : changing ? (
          <form onSubmit={(e) => { e.preventDefault(); submitChange(); }} onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); closeChange(); } }} className="flex flex-col gap-2">
            <label htmlFor={`${uid}-new`} className="text-small font-medium text-fg">New words</label>
            <TextField ref={inputRef} id={`${uid}-new`} value={draft} onChange={(e) => setDraft(e.target.value)} aria-describedby={`${uid}-newhint`}
              invalid={maxChars !== undefined && draft.length > maxChars} autoComplete="off" />
            <p id={`${uid}-newhint`} className="text-small text-fg-muted">
              {voiceName ? `Voice: ${voiceName}. ` : ""}{limitText ? `${limitText}. ` : ""}
              {maxChars !== undefined && <span className={cn("tabular-nums", draft.length > maxChars && "text-danger-fg")}>{draft.length} of {maxChars} characters.</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button type="submit" size="sm" variant="lime" disabled={!draft.trim() || (maxChars !== undefined && draft.length > maxChars)} className="pointer-coarse:h-11">Make new audio</Button>
              <Button size="sm" variant="ghost" onClick={closeChange} className="pointer-coarse:h-11">Cancel</Button>
            </div>
          </form>
        ) : (
          <div role="group" aria-label="Selected words" className="flex flex-col gap-2">
            <p className="text-small text-fg">
              <span className="font-medium">{plural(pickedIds.length, "word")} selected</span>
              <span className="text-fg-muted tabular-nums">, {formatMediaTime(picked[0].start)} to {formatMediaTime(picked[picked.length - 1].end)}</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {onRemove && (
                <Button size="sm" variant="secondary" onClick={remove} className="pointer-coarse:h-11">{allRemoved ? "Restore" : "Remove"}</Button>
              )}
              {onRegenerate && (
                <Button size="sm" variant="secondary" onClick={openChange} aria-disabled={!!changeBlocked || undefined}
                  aria-describedby={changeBlocked ? `${uid}-why` : undefined}
                  className={cn("pointer-coarse:h-11", changeBlocked && "cursor-not-allowed opacity-(--disabled-opacity)")}>Change words</Button>
              )}
              {onSmooth && someRemoved && (
                <Button size="sm" variant="secondary" onClick={() => { onSmooth(pickedIds); setSaid("Making new audio."); setSel(null); refocus(); }} className="pointer-coarse:h-11">Smooth edit</Button>
              )}
              <span className="flex items-center gap-1">
                <Button size="sm" variant="ghost" aria-label="Select one word less" disabled={!range || range[0] === range[1]}
                  onClick={() => sel && range && setSel({ anchor: tokens[range[0]].key, focus: tokens[range[1] - 1].key })} className="pointer-coarse:size-11 pointer-coarse:px-0">−</Button>
                <Button size="sm" variant="ghost" aria-label="Select one more word" disabled={!range || range[1] >= tokens.length - 1}
                  onClick={() => sel && range && setSel({ anchor: tokens[range[0]].key, focus: tokens[range[1] + 1].key })} className="pointer-coarse:size-11 pointer-coarse:px-0">+</Button>
              </span>
              <Button size="sm" variant="ghost" onClick={() => { setSel(null); refocus(); }} className="pointer-coarse:h-11">Clear</Button>
            </div>
            {changeBlocked && onRegenerate && <p id={`${uid}-why`} className="text-small text-fg-muted">{changeBlocked}</p>}
          </div>
        )}
      </div>

      <span role="status" className="sr-only">{said}</span>
    </div>
  );
}
```
