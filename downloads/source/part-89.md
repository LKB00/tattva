## tattva/organisms/SlideRail.tsx

```tsx
import { useEffect, useId, useRef, useState, useSyncExternalStore, type DragEvent, type KeyboardEvent, type MouseEvent, type ReactNode, type SVGProps } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, CheckIcon, InfoIcon, MoreIcon, PlusIcon, RetryIcon, UndoIcon } from "../lib/icons";
import { AIMark } from "../atoms/AIMark";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { Menu, type MenuEntry } from "../molecules/Menu";
import { SlideCanvas, type SlideRatio } from "../molecules/SlideStage";

export type SlideStatus = "pending" | "generating" | "ready" | "edited" | "failed" | "stale" | "review";

export interface SlideRef {
  id: string;
  /** The slide's title. Screen readers move through a deck by these, so every slide needs one. */
  title: string;
  /** The slide drawn at its design size. The rail scales it down. Leave out to show the title on a plain card. */
  thumbnail?: ReactNode;
  status: SlideStatus;
  /** True when the AI wrote this slide. Shows a small AI mark until a person edits it. */
  aiMade?: boolean;
  /** Why it failed, or what to review, in plain words. Read with the slide's name. */
  error?: string;
}

export interface SlideRailProps {
  slides: SlideRef[];
  /** The slide on the stage. It holds keyboard focus inside the rail. */
  currentId: string;
  /** Slides chosen as the scope of an AI edit or a bulk action. Defaults to the current slide only. */
  selectedIds?: string[];
  onCurrentChange: (id: string) => void;
  /** Turns on multi-select: Shift with an arrow or click, Ctrl or Cmd with a click, Space and Ctrl+A. */
  onSelectionChange?: (ids: string[]) => void;
  /** Turns on reordering by drag, Alt with an arrow, and Move earlier or later. `to` is the slide's new index. */
  onReorder?: (from: number, to: number) => void;
  /** Shows Try again for a failed slide. */
  onRetry?: (id: string) => void;
  /** Shows Add slide. The new slide goes after this one. */
  onInsertAfter?: (id: string) => void;
  /** Shows Duplicate for the chosen slides. */
  onDuplicate?: (ids: string[]) => void;
  /** Shows Delete for the chosen slides. The rail always asks first. */
  onDelete?: (ids: string[]) => void;
  /** Shows Undo after an add, duplicate, delete or move, and on Ctrl+Z or Cmd+Z in the rail. Your app keeps the history. */
  onUndo?: () => void;
  /** "auto" is a column on wide screens and a sideways strip on phones. */
  orientation?: "vertical" | "horizontal" | "auto";
  /** Slide shape, used for the thumbnails. */
  ratio?: SlideRatio;
  /** Name of the list. */
  label?: string;
  className?: string;
}

const STATUS_WORDS: Record<SlideStatus, string> = {
  pending: "waiting", generating: "being written", ready: "ready", edited: "edited by you", failed: "failed", stale: "outline changed since it was built", review: "needs your review",
};

const PHONE = "(max-width: 599.98px)";
const subscribe = (cb: () => void) => {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia(PHONE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const usePhone = () => useSyncExternalStore(subscribe, () => !!window.matchMedia?.(PHONE).matches, () => false);

function PersonIcon(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></svg>;
}

/** The state of one slide in words, with an icon. Colour only adds to it. */
function StatusLine({ status }: { status: SlideStatus }) {
  const base = "flex min-w-0 items-center gap-1 text-small leading-4";
  switch (status) {
    case "pending": return <span className={cn(base, "text-fg-subtle")}>Waiting</span>;
    case "generating": return <span className={cn(base, "text-fg-muted")}><span aria-hidden className="size-2 shrink-0 rounded-full bg-lime" />Writing…</span>;
    case "ready": return <span className={cn(base, "text-fg-subtle")}>Ready</span>;
    case "edited": return <span className={cn(base, "text-fg-muted")}><PersonIcon width={12} height={12} className="shrink-0" />Edited by you</span>;
    case "failed": return <span className={cn(base, "font-medium text-danger-fg")}><AlertIcon width={12} height={12} aria-hidden className="shrink-0" />Failed</span>;
    case "stale": return <span className={cn(base, "text-fg-muted")}><InfoIcon width={12} height={12} aria-hidden className="shrink-0" />Outline changed</span>;
    case "review": return <span className={cn(base, "font-medium text-attention-fg")}><span aria-hidden className="size-2 shrink-0 rounded-full bg-attention" />Needs review</span>;
  }
}

/**
 * The ordered strip of slide thumbnails. Each slide shows its state in words: waiting, writing, ready, edited by you,
 * failed, outline changed or needs review. People move around, choose the scope of an AI edit, reorder, add, duplicate
 * and delete, with Undo. A column on wide screens and a sideways strip on phones.
 */
export function SlideRail({
  slides, currentId, selectedIds, onCurrentChange, onSelectionChange, onReorder, onRetry, onInsertAfter, onDuplicate, onDelete, onUndo,
  orientation = "auto", ratio = "16:9", label = "Slides", className,
}: SlideRailProps) {
  const phone = usePhone();
  const horizontal = orientation === "horizontal" || (orientation === "auto" && phone);
  const list = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const keepBtn = useRef<HTMLButtonElement>(null);
  const anchor = useRef(currentId);
  const focusList = useRef(false);
  const dragFrom = useRef<number | null>(null);
  const [drop, setDrop] = useState<number | null>(null);
  const [confirm, setConfirm] = useState<string[] | null>(null);
  const [undoNote, setUndoNote] = useState<string | null>(null);
  const [announce, setAnnounce] = useState("");
  const titleId = useId();

  const total = slides.length;
  const selected = selectedIds && selectedIds.length ? selectedIds : [currentId];
  const multi = onSelectionChange && selected.length > 1;
  const idx = (id: string) => slides.findIndex((s) => s.id === id);
  const cur = Math.max(0, idx(currentId));
  const current = slides[cur];
  const name = (i: number) => `slide ${i + 1}, ${slides[i]?.title ?? ""}`;
  const say = (text: string) => setAnnounce(text);

  // Status milestones only: a slide failing or needing review, and how many are ready. Never every change.
  const prev = useRef(new Map<string, SlideStatus>());
  useEffect(() => {
    const before = prev.current;
    const msgs: string[] = [];
    let readyGain = false;
    slides.forEach((s, i) => {
      const was = before.get(s.id);
      if (!was || was === s.status) return;
      if (s.status === "failed") msgs.push(`Slide ${i + 1} failed`);
      else if (s.status === "review") msgs.push(`Slide ${i + 1} needs your review`);
      else if (s.status === "ready" && (was === "generating" || was === "pending")) readyGain = true;
    });
    if (readyGain) {
      const done = slides.filter((s) => s.status !== "pending" && s.status !== "generating" && s.status !== "failed").length;
      msgs.push(done === total ? "All slides ready" : `${done} of ${total} slides ready`);
    }
    if (before.size && msgs.length) say(msgs.join(". "));
    prev.current = new Map(slides.map((s) => [s.id, s.status]));
  }, [slides, total]);

  // Keep focus on the current slide when it changes or moves, but only if focus was already in the list.
  useEffect(() => {
    const el = list.current?.querySelector<HTMLElement>(`[data-slide-id="${CSS.escape(currentId)}"]`);
    if (!el) return;
    // Scroll the rail only, never the page: scrollIntoView would also move every scrolling ancestor, the window included.
    const box = list.current;
    if (box) {
      const b = box.getBoundingClientRect(), r = el.getBoundingClientRect();
      if (r.top < b.top) box.scrollTop -= b.top - r.top; else if (r.bottom > b.bottom) box.scrollTop += r.bottom - b.bottom;
      if (r.left < b.left) box.scrollLeft -= b.left - r.left; else if (r.right > b.right) box.scrollLeft += r.right - b.right;
    }
    if (focusList.current) { focusList.current = false; el.focus(); }
  }, [currentId, slides]);

  useEffect(() => { if (confirm) keepBtn.current?.focus(); }, [confirm]);

  const backToList = () => { list.current?.querySelector<HTMLElement>(`[data-slide-id="${CSS.escape(currentId)}"]`)?.focus(); };

  const go = (i: number, extend: boolean) => {
    const j = Math.max(0, Math.min(total - 1, i));
    const id = slides[j].id;
    focusList.current = true;
    if (extend && onSelectionChange) {
      const a = Math.max(0, idx(anchor.current));
      const [lo, hi] = a < j ? [a, j] : [j, a];
      onSelectionChange(slides.slice(lo, hi + 1).map((s) => s.id));
    } else {
      anchor.current = id;
      onSelectionChange?.([id]);
    }
    onCurrentChange(id);
  };

  const move = (from: number, to: number) => {
    if (!onReorder || to < 0 || to >= total || from === to) return;
    const t = slides[from].title;
    focusList.current = true;
    onReorder(from, to);
    const text = `Slide ${from + 1}, ${t}, moved to position ${to + 1}`;
    say(text);
    setUndoNote(`${text}.`);
  };

  const duplicate = (ids: string[]) => {
    if (!onDuplicate) return;
    onDuplicate(ids);
    const text = ids.length === 1 ? `Slide ${idx(ids[0]) + 1} duplicated.` : `${ids.length} slides duplicated.`;
    say(text); setUndoNote(text);
  };

  const insert = () => {
    if (!onInsertAfter || !current) return;
    onInsertAfter(current.id);
    const text = `New slide added after slide ${cur + 1}.`;
    say(text); setUndoNote(text);
  };

  const askDelete = (ids: string[]) => { if (onDelete && ids.length) { setUndoNote(null); setConfirm(ids); } };
  const doDelete = () => {
    if (!confirm || !onDelete) return;
    const ids = confirm;
    const text = ids.length === 1 ? `Slide ${idx(ids[0]) + 1}, ${slides[idx(ids[0])]?.title}, deleted.` : `${ids.length} slides deleted.`;
    setConfirm(null);
    focusList.current = true;
    onDelete(ids);
    say(onUndo ? `${text} Undo is available.` : text);
    setUndoNote(text);
  };
  const cancelDelete = () => { setConfirm(null); backToList(); };

  const undo = () => {
    if (!onUndo) return;
    focusList.current = true;
    onUndo();
    setUndoNote(null);
    say("Undone");
  };

  const toggle = (id: string) => {
    if (!onSelectionChange) return;
    const has = selected.includes(id);
    const next = has ? selected.filter((x) => x !== id) : [...selected, id];
    onSelectionChange(next.length ? slides.filter((s) => next.includes(s.id)).map((s) => s.id) : [currentId]);
    say(`${name(idx(id))} ${has ? "removed from" : "added to"} the selection. ${next.length || 1} selected.`);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const mod = e.ctrlKey || e.metaKey;
    const back = horizontal ? ["ArrowLeft", "ArrowUp"] : ["ArrowUp", "ArrowLeft"];
    const fwd = horizontal ? ["ArrowRight", "ArrowDown"] : ["ArrowDown", "ArrowRight"];
    const dir = back.includes(e.key) ? -1 : fwd.includes(e.key) ? 1 : 0;
    if (dir && e.altKey) { e.preventDefault(); move(cur, cur + dir); return; }
    if (dir) { e.preventDefault(); go(cur + dir, e.shiftKey); return; }
    if (e.key === "Home" || e.key === "End") { e.preventDefault(); go(e.key === "Home" ? 0 : total - 1, e.shiftKey); return; }
    if (e.key === " " && onSelectionChange) { e.preventDefault(); toggle(currentId); return; }
    if (mod && e.key.toLowerCase() === "a" && onSelectionChange) { e.preventDefault(); onSelectionChange(slides.map((s) => s.id)); say(`All ${total} slides selected`); return; }
    if (mod && e.key.toLowerCase() === "z" && !e.shiftKey && onUndo) { e.preventDefault(); undo(); return; }
    if (e.key === "Escape" && multi) { e.preventDefault(); onSelectionChange?.([currentId]); say("Selection cleared"); return; }
    // Delete never deletes on one key: it opens the question below the list, with Keep focused.
    if ((e.key === "Delete" || e.key === "Backspace") && onDelete) { e.preventDefault(); askDelete(selected); }
  };

  const onClick = (e: MouseEvent, id: string) => {
    focusList.current = false;
    if (e.shiftKey && onSelectionChange) {
      const a = Math.max(0, idx(anchor.current)), j = idx(id);
      const [lo, hi] = a < j ? [a, j] : [j, a];
      onSelectionChange(slides.slice(lo, hi + 1).map((s) => s.id));
      onCurrentChange(id);
      return;
    }
    if ((e.ctrlKey || e.metaKey) && onSelectionChange) { toggle(id); onCurrentChange(id); return; }
    anchor.current = id;
    onSelectionChange?.([id]);
    onCurrentChange(id);
  };

  // A right click or a long press opens the same menu as the visible More button.
  const onContext = (e: MouseEvent, id: string) => {
    e.preventDefault();
    if (!selected.includes(id)) { anchor.current = id; onSelectionChange?.([id]); }
    onCurrentChange(id);
    requestAnimationFrame(() => bar.current?.querySelector<HTMLButtonElement>("[aria-haspopup]")?.click());
  };

  /* ---- drag to reorder (pointer only; keyboard and the menu do the same) ---- */
  const dragStart = (e: DragEvent, i: number) => { dragFrom.current = i; e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", slides[i].id); };
  const dragOver = (e: DragEvent<HTMLElement>, i: number) => {
    if (dragFrom.current === null) return;
    e.preventDefault();
    const r = e.currentTarget.getBoundingClientRect();
    const after = horizontal ? e.clientX > r.left + r.width / 2 : e.clientY > r.top + r.height / 2;
    setDrop(after ? i + 1 : i);
  };
  const dragEnd = () => { dragFrom.current = null; setDrop(null); };
  const dropHere = (e: DragEvent) => {
    e.preventDefault();
    const from = dragFrom.current;
    if (from !== null && drop !== null) {
      const to = drop > from ? drop - 1 : drop;
      if (to !== from) move(from, to);
    }
    dragEnd();
  };

  const ar = ratio === "fluid" ? 16 / 9 : ({ "16:9": 16 / 9, "4:3": 4 / 3, "1:1": 1, "4:5": 4 / 5, "9:16": 9 / 16 } as const)[ratio];

  /* ---- action bar items ---- */
  const singleItems: MenuEntry[] = current ? [
    ...(onInsertAfter ? [{ id: "add", label: `Add slide after slide ${cur + 1}`, icon: <PlusIcon width={16} height={16} />, onSelect: insert }] : []),
    ...(onDuplicate ? [{ id: "dup", label: `Duplicate slide ${cur + 1}`, onSelect: () => duplicate([current.id]) }] : []),
    ...(onReorder ? [
      { id: "up", label: "Move earlier", disabled: cur === 0, onSelect: () => move(cur, cur - 1) },
      { id: "down", label: "Move later", disabled: cur === total - 1, onSelect: () => move(cur, cur + 1) },
    ] : []),
    ...(onDelete ? [{ type: "separator" as const }, { id: "del", label: `Delete slide ${cur + 1}`, danger: true, onSelect: () => askDelete([current.id]) }] : []),
  ] : [];
  const multiItems: MenuEntry[] = [
    ...(onDuplicate ? [{ id: "dup", label: `Duplicate ${selected.length} slides`, onSelect: () => duplicate(selected) }] : []),
    { id: "one", label: `Select only slide ${cur + 1}`, onSelect: () => { onSelectionChange?.([currentId]); say("Selection cleared"); } },
    ...(onDelete ? [{ type: "separator" as const }, { id: "del", label: `Delete ${selected.length} slides`, danger: true, onSelect: () => askDelete(selected) }] : []),
  ];

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", !horizontal && "min-h-0", className)}>
      <div className="flex min-h-8 items-center justify-between gap-2 px-1">
        <p id={titleId} className="text-compact font-medium text-fg">
          {label} <span className="font-normal text-fg-muted tabular-nums">{total}{multi ? `, ${selected.length} selected` : ""}</span>
        </p>
        {onInsertAfter && current && (
          <Button size="sm" variant="secondary" leading={<PlusIcon width={14} height={14} />} onClick={insert} aria-label={`Add slide after slide ${cur + 1}`}>Add slide</Button>
        )}
      </div>

      <div ref={list} role="listbox" aria-labelledby={titleId} aria-multiselectable={onSelectionChange ? true : undefined}
        aria-orientation={horizontal ? "horizontal" : "vertical"} onKeyDown={onKeyDown}
        onFocus={() => { focusList.current = false; }}
        onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDrop(null); }}
        className={cn(
          "flex p-1",
          horizontal ? "snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain" : "min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain",
        )}>
        {slides.map((s, i) => {
          const isCur = s.id === currentId;
          const isSel = selected.includes(s.id);
          const words = `Slide ${i + 1} of ${total}, ${s.title}, ${STATUS_WORDS[s.status]}${s.aiMade && s.status !== "edited" ? ", made by AI" : ""}${s.error ? `. ${s.error}` : ""}`;
          const lineBefore = drop === i && dragFrom.current !== null && dragFrom.current !== i && dragFrom.current !== i - 1;
          const lineAfter = drop === i + 1 && i === total - 1 && dragFrom.current !== null && dragFrom.current !== i;
          const thumb = (
            <div aria-hidden className={cn("relative", horizontal ? "h-16" : "w-full")} style={horizontal ? { width: `calc(var(--spacing) * 16 * ${ar})` } : undefined}>
              <WorkingEdge active={s.status === "generating"} radius="control" label="">
                <div className={cn(
                  "relative overflow-hidden rounded-control border bg-surface",
                  isCur ? "border-fg ring-1 ring-fg" : "border-line",
                  horizontal && "h-16",
                )} style={horizontal ? undefined : { aspectRatio: String(ar) }}>
                  {s.status === "pending" ? (
                    <div className="absolute inset-0 grid content-center gap-1.5 bg-sunken p-2">
                      <span className="truncate text-small text-fg-muted">{s.title}</span>
                      <Skeleton className="h-1.5 w-4/5 rounded-control motion-reduce:animate-none" />
                      <Skeleton className="h-1.5 w-3/5 rounded-control motion-reduce:animate-none" />
                    </div>
                  ) : s.status === "failed" ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-sunken p-2 text-center">
                      <AlertIcon width={16} height={16} className="text-danger-fg" />
                      <span className="line-clamp-2 text-small text-fg-muted">{s.title}</span>
                    </div>
                  ) : s.thumbnail ? (
                    <div key={s.status} className={cn("size-full motion-safe:animate-[fade_var(--dur-base)_var(--ease-out)_both]", s.status === "generating" && "opacity-60")}>
                      <SlideCanvas ratio={ratio === "fluid" ? "16:9" : ratio} className="h-full">{s.thumbnail}</SlideCanvas>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                      <span className="line-clamp-2 text-small font-medium text-fg">{s.title}</span>
                    </div>
                  )}
                  {s.aiMade && s.status !== "edited" && s.status !== "pending" && s.status !== "failed" && (
                    <span className="absolute right-1 bottom-1 inline-flex size-4 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} className="size-3" /></span>
                  )}
                </div>
              </WorkingEdge>
            </div>
          );
          return (
            <div key={s.id} role="option" data-slide-id={s.id} aria-selected={isSel} aria-label={words} title={s.error}
              tabIndex={isCur ? 0 : -1} draggable={!!onReorder}
              onClick={(e) => onClick(e, s.id)} onContextMenu={(e) => onContext(e, s.id)}
              onDragStart={(e) => dragStart(e, i)} onDragOver={(e) => dragOver(e, i)} onDrop={dropHere} onDragEnd={dragEnd}
              className={cn(
                "relative shrink-0 cursor-pointer rounded-card transition-colors duration-(--dur-fast) select-none",
                horizontal ? "flex snap-start flex-col gap-1 p-1" : "flex gap-2 p-1.5",
                isSel && multi ? "bg-accent-soft" : "hover:bg-hover",
              )}>
              {lineBefore && <span aria-hidden className={cn("absolute bg-fg", horizontal ? "inset-y-1 -left-1.5 w-0.5" : "inset-x-1 -top-1 h-0.5")} />}
              {lineAfter && <span aria-hidden className={cn("absolute bg-fg", horizontal ? "inset-y-1 -right-1.5 w-0.5" : "inset-x-1 -bottom-1 h-0.5")} />}
              {horizontal ? (
                <>
                  {thumb}
                  <span aria-hidden className="flex items-center gap-1 px-0.5">
                    <span className="text-small font-medium text-fg tabular-nums">{i + 1}</span>
                    {isSel && multi && <CheckIcon width={12} height={12} className="text-fg" />}
                    <StatusLine status={s.status} />
                  </span>
                </>
              ) : (
                <>
                  <span aria-hidden className="flex w-5 shrink-0 flex-col items-end gap-1 pt-0.5">
                    <span className="text-small font-medium text-fg tabular-nums">{i + 1}</span>
                    {isSel && multi && <CheckIcon width={12} height={12} className="text-fg" />}
                  </span>
                  <span className="grid min-w-0 flex-1 gap-1">
                    {thumb}
                    <span aria-hidden><StatusLine status={s.status} /></span>
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {undoNote && !confirm && (
        <div className="flex flex-wrap items-center gap-2 rounded-card border border-line bg-surface px-2.5 py-1.5 motion-safe:animate-fade">
          <p className="min-w-0 flex-1 text-compact text-fg-muted">{undoNote}</p>
          {onUndo && <Button size="sm" variant="ghost" leading={<UndoIcon width={14} height={14} />} onClick={undo}>Undo</Button>}
        </div>
      )}

      <div ref={bar} className="flex min-h-8 flex-wrap items-center gap-2 px-1">
        {confirm ? (
          <div role="group" aria-label="Confirm delete" className="flex w-full flex-wrap items-center gap-2 motion-safe:animate-fade"
            onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); cancelDelete(); } }}>
            <p className="w-full text-compact text-fg">
              {confirm.length === 1 ? `Delete slide ${idx(confirm[0]) + 1}, ${slides[idx(confirm[0])]?.title}?` : `Delete ${confirm.length} slides?`}
              {onUndo && <span className="text-fg-muted"> You can undo this.</span>}
            </p>
            <Button ref={keepBtn} size="sm" variant="secondary" onClick={cancelDelete}>{confirm.length === 1 ? "Keep it" : "Keep them"}</Button>
            <Button size="sm" variant="danger" onClick={doDelete}>{confirm.length === 1 ? "Delete slide" : `Delete ${confirm.length} slides`}</Button>
          </div>
        ) : multi ? (
          <>
            <p className="min-w-0 flex-1 text-compact text-fg-muted">{selected.length} slides selected</p>
            <Menu portal align="end" side="top" trigger={<MoreIcon width={16} height={16} />} triggerLabel={`Actions for ${selected.length} selected slides`} items={multiItems} />
          </>
        ) : current ? (
          <>
            <p className="min-w-0 flex-1 text-compact leading-5 text-fg-muted">
              {current.status === "failed" && current.error ? current.error : current.status === "review" && current.error ? current.error : `Slide ${cur + 1}`}
            </p>
            {current.status === "failed" && onRetry && (
              <Button size="sm" variant="secondary" leading={<RetryIcon width={14} height={14} />} onClick={() => onRetry(current.id)} aria-label={`Try slide ${cur + 1} again`}>Try again</Button>
            )}
            {singleItems.length > 0 && (
              <Menu portal align="end" side="top" trigger={<MoreIcon width={16} height={16} />} triggerLabel={`Actions for slide ${cur + 1}`} items={singleItems} />
            )}
          </>
        ) : null}
      </div>

      <p role="status" aria-live="polite" className="sr-only">{announce}</p>
    </div>
  );
}
```
