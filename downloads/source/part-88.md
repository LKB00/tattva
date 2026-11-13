## tattva/organisms/SceneStrip.tsx

```tsx
import { useEffect, useId, useRef, useState, type DragEvent, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, ApproveIcon, ChevronIcon, PlusIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Button } from "../atoms/Button";

/**
 * Where a shot is. `empty`: no take made yet. `generating`: the AI is making it. `needsPick`: takes are ready and a person
 * must choose one. `ready`: a take is chosen. `failed`: it did not work; say whether it was charged in `note`.
 */
export type SceneShotStatus = "empty" | "generating" | "needsPick" | "ready" | "failed";

export interface SceneShot {
  id: string;
  /** Short name, for example "Harbour at dawn". */
  label: string;
  /** What was asked for. Shown under the name. */
  prompt?: string;
  /** Length of the chosen take, in seconds. Leave out while there is none. */
  durationSec?: number;
  status: SceneShotStatus;
  /** Poster image of the chosen take. Decorative: the name says what the shot is. */
  poster?: string;
  /** A short extra line, for example "Not charged" on a failed shot or "3 takes" on one that needs a pick. */
  note?: string;
}

export interface SceneStripProps {
  shots: SceneShot[];
  /** Called with the new order after a move or a drop. */
  onReorder: (shots: SceneShot[]) => void;
  /** Adds a shot at the end. Leave out to hide Add shot. */
  onAdd?: () => void;
  /** Opens a shot to pick a take or trim it. */
  onOpen?: (id: string) => void;
  title?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const clock = (sec: number) => {
  const s = Math.round(sec);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
const spoken = (sec: number) => {
  const s = Math.round(sec);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return [m ? `${m} ${m === 1 ? "minute" : "minutes"}` : "", r || !m ? `${r} ${r === 1 ? "second" : "seconds"}` : ""].filter(Boolean).join(" ");
};

function StatusLine({ shot }: { shot: SceneShot }) {
  const base = "inline-flex items-center gap-1.5 text-small leading-4.5 font-medium";
  if (shot.status === "generating") return <span className={cn(base, "text-fg")}><span aria-hidden className="size-2 shrink-0 rounded-full bg-lime" />Generating</span>;
  if (shot.status === "needsPick") return <span className={cn(base, "text-attention-fg")}><span aria-hidden className="size-1.5 shrink-0 rounded-full bg-attention" />Pick a take</span>;
  if (shot.status === "ready") return <span className={cn(base, "text-fg")}><ApproveIcon width={12} height={12} className="shrink-0" />Ready</span>;
  if (shot.status === "failed") return <span className={cn(base, "text-fg")}><AlertIcon width={12} height={12} className="shrink-0" />Did not work</span>;
  return <span className={cn(base, "text-fg-muted")}>No take yet</span>;
}

const statusWords: Record<SceneShotStatus, string> = { empty: "no take yet", generating: "generating", needsPick: "pick a take", ready: "ready", failed: "did not work" };

/**
 * An ordered storyboard of shots for one scene, with a total length and a status on every shot. Reorder by dragging a
 * card, with the Move earlier and Move later buttons on each card, or with Alt and the arrow keys on a focused card.
 * Each move is announced. Kept simpler than an editing timeline on purpose: order, status and length.
 */
export function SceneStrip({ shots, onReorder, onAdd, onOpen, title = "Scene", headingLevel = 3, className }: SceneStripProps) {
  const H = headingTag(headingLevel);
  const uid = useId();
  const [message, setMessage] = useState("");
  const [dragId, setDragId] = useState<string | null>(null);
  const [dropAt, setDropAt] = useState<number | null>(null);
  const cards = useRef(new Map<string, HTMLLIElement>());
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  // After a move, where focus should go once the new order has rendered.
  const refocus = useRef<{ id: string; key: string } | null>(null);

  const total = shots.reduce((s, x) => s + (x.durationSec ?? 0), 0);
  const counts = {
    generating: shots.filter((s) => s.status === "generating").length,
    needsPick: shots.filter((s) => s.status === "needsPick").length,
    failed: shots.filter((s) => s.status === "failed").length,
  };
  const pending = [
    counts.generating ? `${counts.generating} generating` : "",
    counts.needsPick ? `${counts.needsPick} to pick` : "",
    counts.failed ? `${counts.failed} did not work` : "",
  ].filter(Boolean).join(", ");

  const move = (from: number, to: number, how: "button" | "key" | "drop", key?: string) => {
    if (to < 0 || to >= shots.length || from === to) return;
    const next = shots.slice();
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onReorder(next);
    setMessage(`${item.label} moved to position ${to + 1} of ${shots.length}.`);
    if (how === "button" && key) {
      // Keep focus on the pressed button, or on its opposite when the shot reached an end and the button turned off.
      const atEnd = (key === "earlier" && to === 0) || (key === "later" && to === shots.length - 1);
      refocus.current = { id: item.id, key: atEnd ? (key === "earlier" ? "later" : "earlier") : key };
    } else if (how === "key") refocus.current = { id: item.id, key: "card" };
  };

  useEffect(() => {
    const r = refocus.current;
    if (!r) return;
    refocus.current = null;
    const el = r.key === "card" ? cards.current.get(r.id) : buttons.current.get(`${r.id}:${r.key}`);
    el?.focus({ preventScroll: false });
  }, [shots]);

  const onCardKey = (i: number, e: KeyboardEvent<HTMLLIElement>) => {
    if (e.target !== e.currentTarget || !e.altKey) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); move(i, i - 1, "key"); }
    else if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); move(i, i + 1, "key"); }
  };

  const onDragOver = (i: number, e: DragEvent<HTMLLIElement>) => {
    if (!dragId) return;
    e.preventDefault();
    const box = e.currentTarget.getBoundingClientRect();
    setDropAt(e.clientX < box.left + box.width / 2 ? i : i + 1);
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    const from = shots.findIndex((s) => s.id === dragId);
    if (from >= 0 && dropAt !== null) move(from, dropAt > from ? dropAt - 1 : dropAt, "drop");
    setDragId(null); setDropAt(null);
  };

  const helpId = `${uid}-help`;

  return (
    <section aria-labelledby={`${uid}-h`} className={cn("w-full min-w-0 space-y-3 rounded-card border border-line bg-surface p-4", className)}>
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <H id={`${uid}-h`} className="text-lead leading-6 font-semibold text-fg">{title}</H>
        <p className="text-small leading-4.5 text-fg-muted tabular-nums">
          <span className="font-medium text-fg">{clock(total)}</span><span className="sr-only"> ({spoken(total)})</span> total · {shots.length} {shots.length === 1 ? "shot" : "shots"}
          {pending && <> · {pending}</>}
        </p>
      </header>
      {shots.length > 1 && <p id={helpId} className="text-small leading-4.5 text-fg-subtle max-sm:hidden">Drag a shot, use its arrows, or press Alt and an arrow key on a focused shot to move it.</p>}

      {shots.length === 0
        ? <div className="flex flex-col items-start gap-3 rounded-card border border-dashed border-line p-4">
            <p className="text-compact text-fg-muted">No shots yet. Add your first shot to start the scene.</p>
            {onAdd && <Button size="sm" leading={<PlusIcon width={14} height={14} />} onClick={onAdd}>Add shot</Button>}
          </div>
        : <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pt-1 pb-2 [scrollbar-width:thin]">
          <ol aria-label={`${title} shots, in order`} onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropAt(null); }}
            className="flex gap-3">
            {shots.map((s, i) => (
              <li key={s.id} ref={(el) => { if (el) cards.current.set(s.id, el); else cards.current.delete(s.id); }}
                tabIndex={0} aria-describedby={shots.length > 1 ? helpId : undefined}
                aria-label={`Shot ${i + 1} of ${shots.length}: ${s.label}, ${statusWords[s.status]}${s.durationSec ? `, ${spoken(s.durationSec)}` : ""}`}
                draggable onDragStart={(e) => { setDragId(s.id); e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", s.id); }}
                onDragEnd={() => { setDragId(null); setDropAt(null); }} onDragOver={(e) => onDragOver(i, e)} onDrop={onDrop}
                onKeyDown={(e) => onCardKey(i, e)}
                className={cn("relative flex w-44 shrink-0 snap-start flex-col overflow-hidden rounded-card border bg-surface outline-offset-2 sm:w-48",
                  "cursor-grab active:cursor-grabbing transition-opacity duration-(--dur-fast)",
                  s.status === "needsPick" ? "border-attention" : "border-line",
                  dragId === s.id && "opacity-50")}>
                {dropAt === i && <span aria-hidden className="absolute inset-y-0 -left-0.5 w-1 rounded-full bg-fg" />}
                {dropAt === i + 1 && i === shots.length - 1 && <span aria-hidden className="absolute inset-y-0 -right-0.5 w-1 rounded-full bg-fg" />}
                <div className="relative aspect-video bg-sunken">
                  {s.poster && <img src={s.poster} alt="" draggable={false} className="absolute inset-0 size-full object-cover" />}
                  <span className="absolute top-1.5 left-1.5 rounded-control bg-glass px-1.5 text-small leading-4.5 font-medium text-fg tabular-nums">{i + 1}</span>
                  {s.durationSec !== undefined && <span className="absolute right-1.5 bottom-1.5 rounded-control bg-glass px-1.5 text-small leading-4.5 text-fg tabular-nums">{clock(s.durationSec)}</span>}
                  {s.status === "generating" && <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-lime" />}
                </div>
                <div className="flex flex-1 flex-col gap-1 p-2.5">
                  <p className="truncate text-compact font-medium text-fg">{s.label}</p>
                  {s.prompt && <p className="line-clamp-2 text-small leading-4.5 text-fg-muted">{s.prompt}</p>}
                  <div className="mt-auto flex flex-wrap items-center gap-x-2 pt-1">
                    <StatusLine shot={s} />
                    {s.note && <span className="text-small leading-4.5 text-fg-muted">{s.note}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1 border-t border-line p-1.5">
                  <button type="button" aria-label={`Move ${s.label} earlier`} disabled={i === 0}
                    ref={(el) => { if (el) buttons.current.set(`${s.id}:earlier`, el); else buttons.current.delete(`${s.id}:earlier`); }}
                    onClick={() => move(i, i - 1, "button", "earlier")}
                    className="tap grid size-8 cursor-pointer place-items-center rounded-control text-fg-muted hover:bg-hover hover:text-fg disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent">
                    <ChevronIcon className="rotate-180" />
                  </button>
                  <button type="button" aria-label={`Move ${s.label} later`} disabled={i === shots.length - 1}
                    ref={(el) => { if (el) buttons.current.set(`${s.id}:later`, el); else buttons.current.delete(`${s.id}:later`); }}
                    onClick={() => move(i, i + 1, "button", "later")}
                    className="tap grid size-8 cursor-pointer place-items-center rounded-control text-fg-muted hover:bg-hover hover:text-fg disabled:cursor-not-allowed disabled:text-disabled-fg disabled:hover:bg-transparent">
                    <ChevronIcon />
                  </button>
                  {onOpen && <Button size="sm" variant={s.status === "needsPick" ? "secondary" : "ghost"} className="ml-auto" aria-label={`${s.status === "needsPick" ? "Pick a take for" : "Open"} ${s.label}`}
                    onClick={() => onOpen(s.id)}>{s.status === "needsPick" ? "Pick" : "Open"}</Button>}
                </div>
              </li>
            ))}
          </ol>
            {onAdd && (
              <div className="flex w-32 shrink-0 snap-start">
                <button type="button" onClick={onAdd}
                  className="flex w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-card border border-dashed border-line-strong text-compact font-medium text-fg-muted transition-colors duration-(--dur-fast) hover:bg-hover hover:text-fg">
                  <PlusIcon />Add shot
                </button>
              </div>
            )}
          </div>}
      <p role="status" aria-live="polite" className="sr-only">{message}</p>
    </section>
  );
}
```
