## tattva/organisms/SectionLane.tsx

```tsx
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, ChevronIcon, LockIcon, PlusIcon, RegenerateIcon, EditIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Button } from "../atoms/Button";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { Waveform, formatMediaTime, speakMediaTime, type WaveformRegion } from "../atoms/Waveform";

/**
 * Where a section is. `original`: as generated or recorded, nothing to do. `edited`: the person changed its lyrics or style
 * and it has not been generated yet. `stale`: an edit elsewhere means it no longer fits (for example the key or tempo moved).
 * `generating`: the AI is making it. `has-alternates`: new takes are ready and a person must keep one. `failed`: it did not work.
 */
export type SectionState = "original" | "edited" | "stale" | "generating" | "has-alternates" | "failed";

export interface SongSection {
  id: string;
  /** Plain name, such as "Verse 1" or "Chorus". */
  name: string;
  /** Start and end in seconds within the whole song. */
  start: number;
  end: number;
  /** Who made it. `ai` gets a small AI mark; recorded or uploaded parts get a word instead. */
  origin: "ai" | "person" | "upload";
  state: SectionState;
  /** Lyrics, shown in the detail panel of the selected section. */
  lyrics?: string;
  /** Style words for this section, such as "half-time drums". */
  styles?: string[];
  /** Number of new takes, for `has-alternates`. */
  alternates?: number;
  /** A short extra line, such as "Not charged" on a failed section or why it is out of date. */
  note?: string;
}

export interface SectionLaneProps {
  /** Sections in play order. */
  sections: SongSection[];
  /** Length of the whole song, in seconds. */
  duration: number;
  /** Loudness of the whole song for the waveform above the lane. Leave out to hide the waveform. */
  peaks?: number[] | null;
  /** Playhead, in seconds. */
  position?: number;
  /** Makes the waveform a seek slider. */
  onSeek?: (seconds: number) => void;
  /** The selected section, or null. */
  selectedId?: string | null;
  onSelect?: (id: string | null) => void;
  /** Called with the new order of ids after Move earlier, Move later or Alt with an arrow key. */
  onReorder?: (ids: string[]) => void;
  /** Regenerates one section. Staged: it changes nothing until Generate. */
  onRegenerate?: (id: string) => void;
  /** Adds a new section after this one (extend). */
  onExtend?: (id: string) => void;
  /** Opens the section's lyrics and styles for editing. */
  onEdit?: (id: string) => void;
  /** Opens the new takes of a section with alternates. */
  onOpenAlternates?: (id: string) => void;
  /** Tries a failed section again. */
  onRetry?: (id: string) => void;
  /** Changes waiting for Generate. Above 0 an amber bar shows the count and the Generate button. */
  pendingChanges?: number;
  /** Generates every staged change at once. */
  onGenerate?: () => void;
  /** Cost of that generation, shown next to the button, such as "about 20 credits". */
  generateCost?: string;
  /** Why Generate cannot run, such as "Not enough credits". Turns the button off and shows the reason. */
  generateBlocked?: string;
  title?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const STATE_WORD: Record<SectionState, string> = {
  original: "Up to date", edited: "Edited, not generated", stale: "Out of date", generating: "Generating",
  "has-alternates": "New takes to compare", failed: "Did not work",
};
const ORIGIN_WORD = { ai: "Made by AI", person: "Recorded", upload: "Uploaded" } as const;
const needsYou = (s: SectionState) => s === "edited" || s === "stale" || s === "has-alternates";

function StateLine({ s }: { s: SongSection }) {
  const base = "inline-flex min-w-0 items-center gap-1.5 text-small leading-4.5 font-medium";
  if (s.state === "generating") return <span className={cn(base, "text-fg")}><span aria-hidden className="size-2 shrink-0 rounded-full bg-lime" />Generating</span>;
  if (s.state === "failed") return <span className={cn(base, "text-fg")}><AlertIcon width={12} height={12} aria-hidden className="shrink-0" />Did not work</span>;
  if (needsYou(s.state)) {
    const word = s.state === "has-alternates" ? `${s.alternates ?? 2} takes to compare` : STATE_WORD[s.state];
    return <span className={cn(base, "text-attention-fg")}><span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-attention" />{word}</span>;
  }
  return <span className={cn(base, "font-normal text-fg-subtle")}>Up to date</span>;
}

function OriginMark({ origin }: { origin: SongSection["origin"] }) {
  if (origin === "ai") {
    return <span className="inline-flex items-center gap-1 text-small leading-4.5 text-fg-muted"><span aria-hidden className="size-2 shrink-0 rounded-full bg-lime ring-1 ring-fg-muted" />AI</span>;
  }
  return <span className="text-small leading-4.5 text-fg-muted">{ORIGIN_WORD[origin]}</span>;
}

/**
 * The structure of one generated song as labelled blocks on a timeline, sized to their length: select a section, regenerate
 * it, extend after it or move it. Edits are staged and shown in one amber bar until Generate, so several changes cost one
 * generation. Sections the AI made carry a small AI mark; sections that are out of date say so in words.
 */
export function SectionLane({
  sections, duration, peaks, position = 0, onSeek, selectedId = null, onSelect, onReorder, onRegenerate, onExtend, onEdit,
  onOpenAlternates, onRetry, pendingChanges = 0, onGenerate, generateCost, generateBlocked, title = "Song structure",
  headingLevel = 3, className,
}: SectionLaneProps) {
  const H = headingTag(headingLevel);
  const uid = useId();
  const [focusId, setFocusId] = useState<string | null>(selectedId ?? sections[0]?.id ?? null);
  const [message, setMessage] = useState("");
  const options = useRef(new Map<string, HTMLDivElement>());
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  const refocus = useRef<{ id: string; key: string } | null>(null);

  const dur = Math.max(1, duration || sections.reduce((m, s) => Math.max(m, s.end), 0));
  const selected = sections.find((s) => s.id === selectedId) ?? null;
  const selectedIndex = selected ? sections.indexOf(selected) : -1;
  const activeId = sections.some((s) => s.id === focusId) ? focusId : selectedId ?? sections[0]?.id ?? null;
  const outOfDate = sections.filter((s) => s.state === "stale").length;

  // Announce the staged count only when it changes, not on first render.
  const lastPending = useRef(pendingChanges);
  useEffect(() => {
    if (lastPending.current === pendingChanges) return;
    lastPending.current = pendingChanges;
    setMessage(pendingChanges ? `${pendingChanges} ${pendingChanges === 1 ? "change" : "changes"} waiting to generate.` : "No changes waiting.");
  }, [pendingChanges]);

  // Announce sections that start generating, finish, fail or get new takes. The lane's own status region says it,
  // because a status region cannot sit inside the listbox.
  const lastStates = useRef(new Map(sections.map((s) => [s.id, s.state])));
  useEffect(() => {
    const said: string[] = [];
    for (const s of sections) {
      const was = lastStates.current.get(s.id);
      if (was && was !== s.state && s.state === "generating") said.push(`Generating ${s.name}.`);
      else if (was && was !== s.state && (s.state === "failed" || s.state === "has-alternates" || was === "generating")) {
        said.push(`${s.name}: ${s.state === "has-alternates" ? `${s.alternates ?? 2} takes ready` : STATE_WORD[s.state].toLowerCase()}.`);
      }
    }
    lastStates.current = new Map(sections.map((s) => [s.id, s.state]));
    if (said.length) setMessage(said.join(" "));
  }, [sections]);

  useEffect(() => {
    const r = refocus.current;
    if (!r) return;
    refocus.current = null;
    (r.key === "option" ? options.current.get(r.id) : buttons.current.get(`${r.id}:${r.key}`))?.focus();
  }, [sections]);

  const move = (from: number, to: number, how: "button" | "key", key?: string) => {
    if (!onReorder || to < 0 || to >= sections.length || from === to) return;
    const ids = sections.map((s) => s.id);
    const [id] = ids.splice(from, 1);
    ids.splice(to, 0, id);
    onReorder(ids);
    const name = sections[from].name;
    setMessage(`${name} moved to position ${to + 1} of ${sections.length}.`);
    if (how === "key") refocus.current = { id, key: "option" };
    else if (key) {
      const atEnd = (key === "earlier" && to === 0) || (key === "later" && to === sections.length - 1);
      refocus.current = { id, key: atEnd ? (key === "earlier" ? "later" : "earlier") : key };
    }
  };

  const focusOption = (id: string) => { setFocusId(id); options.current.get(id)?.focus(); };
  const onLaneKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = sections.findIndex((s) => s.id === activeId);
    if (i < 0) return;
    const k = e.key;
    if (e.altKey && (k === "ArrowLeft" || k === "ArrowUp")) { e.preventDefault(); move(i, i - 1, "key"); return; }
    if (e.altKey && (k === "ArrowRight" || k === "ArrowDown")) { e.preventDefault(); move(i, i + 1, "key"); return; }
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    let to = -1;
    if (k === "ArrowRight" || k === "ArrowDown") to = Math.min(sections.length - 1, i + 1);
    else if (k === "ArrowLeft" || k === "ArrowUp") to = Math.max(0, i - 1);
    else if (k === "Home") to = 0;
    else if (k === "End") to = sections.length - 1;
    else if (k === "Enter" || k === " ") { e.preventDefault(); onSelect?.(sections[i].id === selectedId ? null : sections[i].id); return; }
    else if (k === "Escape" && selectedId) { e.preventDefault(); onSelect?.(null); return; }
    else return;
    e.preventDefault();
    focusOption(sections[to].id);
  };

  const regions: WaveformRegion[] = sections.flatMap((s): WaveformRegion[] => {
    if (s.id === selectedId) return [{ start: s.start, end: s.end, kind: "selected" }];
    if (s.state === "stale" || s.state === "edited") return [{ start: s.start, end: s.end, kind: "stale" }];
    if (s.origin === "ai") return [{ start: s.start, end: s.end, kind: "ai" }];
    return [];
  });

  const setBtn = (key: string) => (el: HTMLButtonElement | null) => { if (el) buttons.current.set(key, el); else buttons.current.delete(key); };
  const helpId = `${uid}-help`;
  const sizeBtn = "pointer-coarse:h-11";

  return (
    <section aria-labelledby={`${uid}-h`} className={cn("@container w-full min-w-0 space-y-3 rounded-card border border-line bg-surface p-4", className)}>
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <H id={`${uid}-h`} className="text-lead leading-6 font-semibold text-fg">{title}</H>
        <p className="text-small leading-4.5 text-fg-muted tabular-nums">
          <span className="font-medium text-fg">{formatMediaTime(dur)}</span><span className="sr-only"> ({speakMediaTime(dur)})</span> · {sections.length} {sections.length === 1 ? "section" : "sections"}
          {outOfDate > 0 && <> · <span className="text-attention-fg">{outOfDate} out of date</span></>}
        </p>
      </header>

      {pendingChanges > 0 && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-card border border-attention bg-attention-soft px-3 py-2">
          <p className="flex min-w-0 flex-[1_1_14rem] items-center gap-2 text-compact text-fg">
            <span aria-hidden className="size-2 shrink-0 rotate-45 bg-attention" />
            <span><span className="font-medium">{pendingChanges} {pendingChanges === 1 ? "change" : "changes"}.</span> Generate to hear {pendingChanges === 1 ? "it" : "them"}. Nothing changes until then.</span>
          </p>
          {onGenerate && (
            <div className="ml-auto flex items-center gap-2">
              {(generateBlocked || generateCost) && <span className="text-small leading-4.5 text-fg-muted">{generateBlocked ?? generateCost}</span>}
              <Button variant="lime" size="sm" className={sizeBtn} disabled={!!generateBlocked}
                leading={generateBlocked ? <LockIcon width={14} height={14} aria-hidden /> : <RegenerateIcon width={14} height={14} aria-hidden />}
                onClick={onGenerate}>Generate</Button>
            </div>
          )}
        </div>
      )}

      {peaks !== undefined && (
        <Waveform peaks={peaks} duration={dur} position={position} onSeek={onSeek} label={onSeek ? `Seek, ${title}` : undefined} regions={regions} height={48} />
      )}

      {sections.length === 0 ? (
        <p className="rounded-card border border-dashed border-line p-4 text-compact text-fg-muted">No sections yet. Generate a song to see its structure.</p>
      ) : (
        <>
          <p id={helpId} className="text-small leading-4.5 text-fg-subtle max-sm:hidden">Arrow keys move between sections, Enter selects one, Alt with an arrow moves it.</p>
          <div className="-mx-1 overflow-x-auto px-1 pt-1 pb-2 [scrollbar-width:thin]">
            <div role="listbox" aria-label={`${title}, sections in order`} aria-orientation="horizontal" aria-describedby={helpId}
              onKeyDown={onLaneKey} className="flex min-w-full gap-1.5">
              {sections.map((s, i) => {
                const len = Math.max(0, s.end - s.start);
                const isSel = s.id === selectedId;
                const label = `${s.name}, ${i + 1} of ${sections.length}, ${formatMediaTime(s.start)} to ${formatMediaTime(s.end)}, ${ORIGIN_WORD[s.origin]}, ${s.state === "has-alternates" ? `${s.alternates ?? 2} takes to compare` : STATE_WORD[s.state]}`;
                return (
                  <WorkingEdge key={s.id} active={s.state === "generating"} label={`Generating ${s.name}`} radius="card" announce={false}
                    className="flex min-w-28 shrink-0 transition-[flex-grow] duration-(--dur-fast) ease-(--ease-out)"
                    style={{ flexGrow: len, flexBasis: 0 }}>
                    <div role="option" aria-selected={isSel} tabIndex={s.id === activeId ? 0 : -1} aria-label={label}
                      ref={(el) => { if (el) options.current.set(s.id, el); else options.current.delete(s.id); }}
                      onFocus={() => setFocusId(s.id)}
                      onClick={() => { setFocusId(s.id); onSelect?.(isSel ? null : s.id); }}
                      className={cn("relative flex w-full min-w-0 cursor-pointer flex-col gap-1 rounded-card border bg-surface px-2.5 py-2 text-left outline-offset-2 transition-colors duration-(--dur-fast) hover:bg-hover pointer-coarse:min-h-11",
                        isSel ? "border-fg ring-1 ring-fg" : needsYou(s.state) ? "border-dashed border-attention" : "border-line",
                        s.state === "failed" && "bg-sunken")}>
                      <span className="flex min-w-0 items-center gap-1">
                        {isSel && <CheckIcon width={14} height={14} strokeWidth={3} aria-hidden className="shrink-0 text-fg" />}
                        <span className="min-w-0 flex-1 truncate text-compact font-medium text-fg">{s.name}</span>
                      </span>
                      <span className="flex flex-wrap items-center gap-x-2 text-small leading-4.5 text-fg-muted tabular-nums">
                        {formatMediaTime(s.start)}–{formatMediaTime(s.end)}
                        <OriginMark origin={s.origin} />
                      </span>
                      <StateLine s={s} />
                    </div>
                  </WorkingEdge>
                );
              })}
            </div>
          </div>
        </>
      )}

      {selected && (
        <div role="group" aria-labelledby={`${uid}-sel`} className="space-y-2.5 rounded-card border border-line bg-sunken p-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p id={`${uid}-sel`} className="text-compact font-semibold text-fg">{selected.name} <span className="font-normal text-fg-muted tabular-nums">· {formatMediaTime(selected.start)} to {formatMediaTime(selected.end)}</span></p>
            <span className="flex items-center gap-3"><OriginMark origin={selected.origin} /><StateLine s={selected} /></span>
          </div>
          {selected.note && <p className="text-small leading-4.5 text-fg-muted">{selected.note}</p>}
          {selected.lyrics && <p className="line-clamp-3 text-compact whitespace-pre-line text-fg">{selected.lyrics}</p>}
          {selected.styles && selected.styles.length > 0 && <p className="text-small leading-4.5 text-fg-muted">Style: {selected.styles.join(", ")}</p>}
          <div className="flex flex-wrap items-center gap-1.5">
            {selected.state === "failed" && onRetry && (
              <Button size="sm" variant="secondary" className={sizeBtn} onClick={() => onRetry(selected.id)} aria-label={`Try ${selected.name} again`}>Try again</Button>
            )}
            {selected.state === "has-alternates" && onOpenAlternates && (
              <Button size="sm" variant="secondary" className={sizeBtn} onClick={() => onOpenAlternates(selected.id)} aria-label={`Compare new takes of ${selected.name}`}>Compare takes</Button>
            )}
            {onRegenerate && selected.state !== "failed" && (
              <Button size="sm" variant="secondary" className={sizeBtn} disabled={selected.state === "generating"} leading={<RegenerateIcon width={14} height={14} aria-hidden />}
                onClick={() => onRegenerate(selected.id)} aria-label={`Regenerate ${selected.name}`}>Regenerate</Button>
            )}
            {onExtend && (
              <Button size="sm" variant="ghost" className={sizeBtn} leading={<PlusIcon width={14} height={14} aria-hidden />}
                onClick={() => onExtend(selected.id)} aria-label={`Extend after ${selected.name}`}>Extend after</Button>
            )}
            {onEdit && (
              <Button size="sm" variant="ghost" className={sizeBtn} leading={<EditIcon width={14} height={14} aria-hidden />}
                onClick={() => onEdit(selected.id)} aria-label={`Edit lyrics and style of ${selected.name}`}>Edit</Button>
            )}
            {onReorder && sections.length > 1 && (
              <span className="ml-auto flex items-center gap-1">
                <button type="button" ref={setBtn(`${selected.id}:earlier`)} aria-label={`Move ${selected.name} earlier`} disabled={selectedIndex === 0}
                  onClick={() => move(selectedIndex, selectedIndex - 1, "button", "earlier")}
                  className="tap grid size-8 cursor-pointer place-items-center rounded-control text-fg-muted hover:bg-hover hover:text-fg disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent pointer-coarse:size-11">
                  <ChevronIcon aria-hidden className="rotate-180" />
                </button>
                <button type="button" ref={setBtn(`${selected.id}:later`)} aria-label={`Move ${selected.name} later`} disabled={selectedIndex === sections.length - 1}
                  onClick={() => move(selectedIndex, selectedIndex + 1, "button", "later")}
                  className="tap grid size-8 cursor-pointer place-items-center rounded-control text-fg-muted hover:bg-hover hover:text-fg disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent pointer-coarse:size-11">
                  <ChevronIcon aria-hidden />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      <p role="status" aria-live="polite" className="sr-only">{message}</p>
    </section>
  );
}
```
