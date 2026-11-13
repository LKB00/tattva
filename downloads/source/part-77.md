## tattva/organisms/OutlineEditor.tsx

```tsx
import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { AlertIcon, CheckIcon, ChevronIcon, LockIcon, PlusIcon, SourceIcon, UndoIcon, XIcon } from "../lib/icons";
import { AIMark } from "../atoms/AIMark";
import { Badge, type Tone } from "../atoms/Badge";
import { Button, IconButton } from "../atoms/Button";
import { Reveal } from "../atoms/Reveal";
import { TextField } from "../atoms/TextField";
import { WorkingEdge } from "../atoms/WorkingEdge";
import { useReducedMotion } from "../hooks/useReducedMotion";

export type OutlineState = "drafting" | "ready" | "edited" | "updating" | "approved" | "building" | "failed";

export interface OutlineItem {
  id: string;
  /** The slide title. Required before building: screen-reader users move through a deck by its titles. */
  title: string;
  /** One line on what the slide says. */
  description?: string;
  /** Files or pages the AI used for this slide. */
  sources?: { id: string; label: string }[];
  /** Update outline leaves this slide as it is. The person sets it with the Lock button. */
  locked?: boolean;
  /** Who wrote it. "ai" shows the AI mark until the person edits it; "person" says Added by you. */
  origin?: "ai" | "person";
  /** The person changed an AI-drafted slide. Set by the part on edit. */
  edited?: boolean;
}

export interface OutlineEditorLabels {
  heading: string;
  build: string;
  update: string;
  retry: string;
  addEnd: string;
  titleError: string;
  failedNote: string;
}

export interface OutlineEditorProps {
  items: OutlineItem[];
  /** Where the outline is. Any edit while "ready" shows as "edited" until the state changes again. */
  state: OutlineState;
  /** The AI's short summary of the deck, shown above the slides. */
  overview?: ReactNode;
  /** id of the slide the AI is still writing while drafting. It stays read-only until it is complete. */
  pendingId?: string;
  /** Called with the new list after every edit, insert, remove, reorder or Keep toggle. */
  onItemsChange: (items: OutlineItem[]) => void;
  /** Told when an edit turns "ready" into "edited". */
  onStateChange?: (state: OutlineState) => void;
  /** Redraft the outline around the person's edits. Adds Update outline while edited, and Try again when failed. */
  onUpdate?: () => void;
  /** Approve the outline and build the slides. Only called when every slide has a title. */
  onBuild: () => void;
  /** Worked out by your app, never by the model: "12 slides, about 60 credits". Shown beside Build. */
  estimate?: ReactNode;
  /** Plain-language reason when drafting failed, such as "The connection dropped after slide 6." */
  error?: ReactNode;
  /** Most slides allowed. Add is turned off at the limit, with the reason in words. */
  maxItems?: number;
  /** Level of the part's own heading. Default 3. */
  headingLevel?: HeadingLevel;
  labels?: Partial<OutlineEditorLabels>;
  className?: string;
}

const BADGE: Record<OutlineState, { tone: Tone; text: string; ai?: boolean }> = {
  drafting: { tone: "accent", text: "AI is drafting", ai: true },
  ready: { tone: "neutral", text: "Ready to build" },
  edited: { tone: "info", text: "Edited by you" },
  updating: { tone: "accent", text: "AI is updating", ai: true },
  approved: { tone: "success", text: "Approved" },
  building: { tone: "accent", text: "Building slides", ai: true },
  failed: { tone: "danger", text: "Drafting stopped" },
};

const NOTE: Partial<Record<OutlineState, string>> = {
  drafting: "Slides appear as they are written. You can edit each one once it is complete.",
  edited: "Update outline redrafts the unlocked slides around your changes. Build slides uses the outline as it is.",
  updating: "Redrafting around your changes. Locked slides stay as they are.",
  approved: "Approved. The slides will be built from this outline.",
  building: "Building slides from this outline. It can no longer be changed here.",
};

let seq = 0;
const newId = () => `outline-new-${Date.now().toString(36)}-${seq++}`;

/**
 * The plan of a deck before any slide is built. The AI drafts it; the person edits, adds, removes, reorders and keeps
 * slides, then builds. Focus stays where it is when the outline appears, because it is not a blocking request.
 */
export function OutlineEditor({
  items, state, overview, pendingId, onItemsChange, onStateChange, onUpdate, onBuild, estimate, error, maxItems,
  headingLevel = 3, labels, className,
}: OutlineEditorProps) {
  const l: OutlineEditorLabels = {
    heading: "Outline", build: "Build slides", update: "Update outline", retry: "Try again", addEnd: "Add slide",
    titleError: "Every slide needs a title", failedNote: "The AI stopped before the outline was finished. You can keep what is here, edit it, or try again.",
    ...labels,
  };
  const uid = useId();
  const H = headingTag(headingLevel);
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const undoRef = useRef<HTMLButtonElement>(null);

  // An edit while "ready" shows as "edited" until the parent moves the state on.
  const [dirty, setDirty] = useState(false);
  useEffect(() => { setDirty(false); }, [state]);
  const shown: OutlineState = state === "ready" && dirty ? "edited" : state;

  const [announce, setAnnounce] = useState("");
  const say = (t: string) => setAnnounce((prev) => (prev === t ? `${t} ` : t));
  const [showErrors, setShowErrors] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(() => new Set());
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const [removed, setRemoved] = useState<{ item: OutlineItem; index: number } | null>(null);
  const focusNext = useRef<{ id: string; part: "title" | "up" | "down" } | "undo" | null>(null);

  const locked = shown === "updating" || shown === "approved" || shown === "building";
  const canEdit = (it: OutlineItem) => !locked && it.id !== pendingId;
  const atMax = maxItems !== undefined && items.length >= maxItems;
  const missing = items.filter((it) => it.id !== pendingId && !it.title.trim());
  const canBuild = items.length > 0 && (shown === "ready" || shown === "edited" || shown === "failed");

  // Announce milestones only, never each streamed word.
  const prevState = useRef(state);
  useEffect(() => {
    const was = prevState.current;
    prevState.current = state;
    if (was === state) return;
    const n = `${items.length} ${items.length === 1 ? "slide" : "slides"}`;
    if (state === "ready" && was === "drafting") say(`Outline drafted, ${n}`);
    else if (state === "ready" && was === "updating") say(`Outline updated, ${n}`);
    else if (state === "updating") say("Updating outline");
    else if (state === "approved") say("Outline approved");
    else if (state === "building") say("Building slides");
    else if (state === "failed") say("Drafting stopped. What was written is kept.");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const commit = (next: OutlineItem[]) => {
    onItemsChange(next);
    if (state === "ready" && !dirty) { setDirty(true); onStateChange?.("edited"); }
  };

  const patch = (id: string, change: Partial<OutlineItem>) =>
    commit(items.map((it) => (it.id === id ? { ...it, ...change, edited: it.origin === "ai" && ("title" in change || "description" in change) ? true : it.edited } : it)));

  const move = (i: number, by: -1 | 1, from: "up" | "down" | "row") => {
    const j = i + by;
    if (j < 0 || j >= items.length) return;
    const next = items.slice();
    const [it] = next.splice(i, 1);
    next.splice(j, 0, it);
    // Keep focus on the pressed button; once a row reaches an end its button turns off, so focus moves to the other one.
    const part = from === "row" ? null : j === 0 && from === "up" ? "down" : j === items.length - 1 && from === "down" ? "up" : from;
    if (part) focusNext.current = { id: it.id, part };
    commit(next);
    say(`Slide ${i + 1} moved to ${j + 1}`);
  };

  const insert = (at: number) => {
    if (atMax) return;
    const it: OutlineItem = { id: newId(), title: "", origin: "person" };
    const next = items.slice();
    next.splice(at, 0, it);
    focusNext.current = { id: it.id, part: "title" };
    commit(next);
    say(`New slide ${at + 1} added`);
  };

  const remove = (i: number) => {
    const it = items[i];
    setRemoved({ item: it, index: i });
    focusNext.current = "undo";
    commit(items.filter((x) => x.id !== it.id));
    say(`Slide ${i + 1} removed. Undo is available.`);
  };

  const undo = () => {
    if (!removed) return;
    const next = items.slice();
    const at = Math.min(removed.index, next.length);
    next.splice(at, 0, removed.item);
    focusNext.current = { id: removed.item.id, part: "title" };
    setRemoved(null);
    commit(next);
    say(`Slide ${at + 1} restored`);
  };

  const build = () => {
    if (missing.length) {
      setShowErrors(true);
      const first = listRef.current?.querySelector<HTMLInputElement>(`[data-title="${CSS.escape(missing[0].id)}"]`);
      first?.focus();
      say(missing.length === 1 ? "One slide needs a title" : `${missing.length} slides need a title`);
      return;
    }
    onBuild();
  };

  // Put focus where the last action said, after the list has re-rendered.
  useEffect(() => {
    const f = focusNext.current;
    if (!f) return;
    focusNext.current = null;
    if (f === "undo") { undoRef.current?.focus(); return; }
    const sel = f.part === "title" ? `[data-title="${CSS.escape(f.id)}"]` : `[data-move="${CSS.escape(f.id)}-${f.part}"]`;
    listRef.current?.querySelector<HTMLElement>(sel)?.focus();
  });

  // Reorder motion: rows slide from their old place to the new one (FLIP), quickly. None under reduced motion.
  const tops = useRef(new Map<string, number>());
  useLayoutEffect(() => {
    const rows = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-row]") ?? []);
    const next = new Map<string, number>();
    for (const el of rows) {
      const id = el.dataset.row!;
      const top = el.offsetTop;
      next.set(id, top);
      const before = tops.current.get(id);
      if (reduced || before === undefined || before === top) continue;
      el.style.transition = "none";
      el.style.transform = `translateY(${before - top}px)`;
      void el.offsetHeight;
      el.style.transition = "transform var(--dur-fast) var(--ease-out)";
      el.style.transform = "";
    }
    tops.current = next;
  }, [items, reduced]);

  const onRowKey = (e: KeyboardEvent<HTMLLIElement>, i: number) => {
    if (!e.altKey || e.ctrlKey || e.metaKey || (e.key !== "ArrowUp" && e.key !== "ArrowDown")) return;
    e.preventDefault();
    const by = e.key === "ArrowUp" ? -1 : 1;
    const j = i + by;
    if (j < 0 || j >= items.length) return;
    // Keep focus on the same field or button inside the moved row.
    const active = document.activeElement as HTMLElement | null;
    const id = items[i].id;
    if (active?.dataset.title === id) focusNext.current = { id, part: "title" };
    move(i, by, "row");
    if (!focusNext.current && active) requestAnimationFrame(() => active.isConnected && document.activeElement !== active && active.focus());
  };

  const badge = BADGE[shown];
  const ai = shown === "drafting" || shown === "updating";
  const note = shown === "failed" ? null : NOTE[shown];
  const count = `${items.length} ${items.length === 1 ? "slide" : "slides"}`;

  return (
    <section aria-labelledby={`${uid}-h`} aria-busy={ai || undefined} className={cn("w-full max-w-read", className)}>
      <WorkingEdge active={ai} label={shown === "drafting" ? "AI is drafting the outline" : "AI is updating the outline"}>
        <div className="rounded-card border border-line bg-surface">
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <H id={`${uid}-h`} className="min-w-0 flex-1 basis-40 text-lead font-semibold">{l.heading}</H>
              <span className="text-small text-fg-muted tabular-nums">{count}</span>
              <Badge tone={badge.tone}>
                {badge.ai ? <AIMark size={16} /> : shown === "approved" ? <CheckIcon width={11} height={11} /> : shown === "failed" ? <AlertIcon width={11} height={11} /> : null}
                {badge.text}
              </Badge>
            </div>
            {note && <p className="mt-2 text-small text-fg-muted">{note}</p>}
            {shown === "failed" && (
              <div role="alert" className="mt-3 flex items-start gap-2 rounded-card border border-line bg-sunken p-3 text-compact text-fg">
                <AlertIcon aria-hidden width={16} height={16} className="mt-0.5 shrink-0 text-danger-fg" />
                <div className="min-w-0"><p>{l.failedNote}</p>{error && <p className="mt-1 text-fg-muted">{error}</p>}</div>
              </div>
            )}
            {overview && (
              <div className="mt-4 flex gap-2.5 rounded-card bg-sunken p-3">
                <span aria-hidden className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} /></span>
                <div className="min-w-0 text-compact text-fg"><p className="text-small leading-4 font-medium text-fg-muted">Overview, drafted by AI</p><div className="mt-0.5">{overview}</div></div>
              </div>
            )}
          </div>

          {items.length === 0 && shown === "drafting" && (
            <p className="border-t border-line px-4 py-6 text-compact text-fg-muted sm:px-5">The first slide will appear here in a moment.</p>
          )}
          {items.length === 0 && shown !== "drafting" && (
            <p className="border-t border-line px-4 py-6 text-compact text-fg-muted sm:px-5">No slides yet. Add one to start, or try drafting again.</p>
          )}

          <ol ref={listRef} aria-label={`${l.heading}, ${count}`} className="border-t border-line">
            {items.map((it, i) => {
              const editable = canEdit(it);
              const pending = it.id === pendingId;
              const empty = !it.title.trim();
              const err = !pending && empty && (showErrors || touched.has(it.id));
              const descOpen = open.has(it.id) || !!err;
              const n = i + 1;
              const name = it.title.trim() || "untitled";
              return (
                <Reveal as="li" key={it.id} data-row={it.id} aria-label={`Slide ${n}: ${name}`} onKeyDown={(e) => editable && onRowKey(e as KeyboardEvent<HTMLLIElement>, i)}
                  className="relative border-b border-line bg-surface px-4 py-3 last:border-b-0 sm:px-5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3">
                    <span aria-hidden className="mt-2 flex size-6 shrink-0 items-center justify-center rounded-full border border-line-strong bg-sunken text-small leading-4 tabular-nums text-fg-muted pointer-coarse:mt-2.5">{n}</span>
                    <div className="min-w-0 flex-1">
                      {editable ? (
                        <>
                          <TextField data-title={it.id} aria-label={`Slide ${n} title`} value={it.title} placeholder="Slide title" invalid={err}
                            aria-describedby={err ? `${uid}-${it.id}-err` : undefined}
                            onChange={(e) => patch(it.id, { title: e.target.value })}
                            onBlur={() => setTouched((t) => (t.has(it.id) ? t : new Set(t).add(it.id)))}
                            className="font-medium" />
                          {err && <p id={`${uid}-${it.id}-err`} className="mt-1 flex items-center gap-1 text-small text-danger-fg"><AlertIcon aria-hidden width={13} height={13} />{l.titleError}</p>}
                          <button type="button" aria-expanded={descOpen} onClick={() => setOpen((o) => { const s = new Set(o); if (s.has(it.id)) s.delete(it.id); else s.add(it.id); return s; })}
                            className="mt-1 inline-flex min-h-8 cursor-pointer items-center gap-1 rounded-control text-small text-fg-muted hover:text-fg sm:hidden tap">
                            <ChevronIcon aria-hidden width={12} height={12} className={cn("transition-transform duration-(--dur-fast)", descOpen && "rotate-90")} />
                            {it.description?.trim() ? "Description" : "Add a description"}
                          </button>
                          <TextField aria-label={`Slide ${n} description`} value={it.description ?? ""} placeholder="One line on what this slide says (optional)"
                            onChange={(e) => patch(it.id, { description: e.target.value })}
                            size="sm" className={cn("mt-1.5 text-compact text-fg-muted", !descOpen && "max-sm:hidden")} />
                        </>
                      ) : (
                        <div className="pt-1">
                          <p className={cn("text-body font-medium", !it.title && "text-fg-muted")}>{it.title || (pending ? "Writing the title" : "Untitled slide")}</p>
                          {it.description && <p className="mt-0.5 text-compact text-fg-muted">{it.description}</p>}
                        </div>
                      )}
                      {it.sources && it.sources.length > 0 && (
                        <ul aria-label={`Sources for slide ${n}`} className="mt-2 flex flex-wrap gap-1.5">
                          {it.sources.map((s) => (
                            <li key={s.id} className="inline-flex max-w-full items-center gap-1 rounded-control border border-line bg-sunken px-2 py-0.5 text-micro text-fg-muted">
                              <SourceIcon aria-hidden width={11} height={11} className="shrink-0" /><span className="truncate">{s.label}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="col-span-2 mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5 sm:col-span-1 sm:col-start-2">
                        {pending ? (
                          <span className="inline-flex items-center gap-1.5 text-small text-fg-muted">
                            <span aria-hidden className="inline-flex size-4 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} /></span>
                            Still writing this slide
                          </span>
                        ) : it.origin === "ai" && !it.edited ? (
                          <span className="inline-flex items-center gap-1.5 text-small text-fg-muted">
                            <span aria-hidden className="inline-flex size-4 items-center justify-center rounded-full bg-lime text-on-lime"><AIMark size={16} /></span>
                            Drafted by AI
                          </span>
                        ) : it.origin === "ai" ? <Badge>Edited by you</Badge> : it.origin === "person" ? <Badge>Added by you</Badge> : null}
                        {it.locked && <Badge><LockIcon width={11} height={11} />Locked</Badge>}

                        {editable && (
                          <span className="ml-auto flex flex-wrap items-center justify-end gap-1 max-sm:w-full max-sm:justify-between">
                            <span className="flex items-center gap-1">
                            <IconButton size="sm" data-move={`${it.id}-up`} label={`Move slide ${n} up`} disabled={i === 0} onClick={() => move(i, -1, "up")} className="pointer-coarse:size-11">
                              <ChevronIcon width={14} height={14} className="-rotate-90" />
                            </IconButton>
                            <IconButton size="sm" data-move={`${it.id}-down`} label={`Move slide ${n} down`} disabled={i === items.length - 1} onClick={() => move(i, 1, "down")} className="pointer-coarse:size-11">
                              <ChevronIcon width={14} height={14} className="rotate-90" />
                            </IconButton>
                            <IconButton size="sm" label={`Add a slide after slide ${n}`} disabled={atMax} onClick={() => insert(i + 1)} className="pointer-coarse:size-11">
                              <PlusIcon width={14} height={14} />
                            </IconButton>
                            {onUpdate && (
                              <IconButton size="sm" label={`Lock slide ${n} so Update outline leaves it as it is`} aria-pressed={!!it.locked} active={!!it.locked}
                                onClick={() => { patch(it.id, { locked: !it.locked }); say(it.locked ? `Slide ${n} unlocked` : `Slide ${n} locked`); }}
                                className={cn("pointer-coarse:size-11", it.locked && "bg-hover text-fg")}>
                                <LockIcon width={14} height={14} />
                              </IconButton>
                            )}
                            </span>
                            <IconButton size="sm" label={`Remove slide ${n}: ${name}`} onClick={() => remove(i)} className="pointer-coarse:size-11">
                              <XIcon width={14} height={14} />
                            </IconButton>
                          </span>
                        )}
                      </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          {removed && !locked && (
            <div className="flex flex-wrap items-center gap-2 border-t border-line bg-sunken px-4 py-2 text-compact sm:px-5">
              <span className="min-w-0 flex-1 text-fg-muted">Removed {removed.item.title.trim() ? `"${removed.item.title.trim()}"` : "an empty slide"}.</span>
              <Button ref={undoRef} size="sm" variant="secondary" leading={<UndoIcon width={14} height={14} />} onClick={undo} className="pointer-coarse:h-11">Undo remove</Button>
              <IconButton size="sm" label="Dismiss" onClick={() => setRemoved(null)} className="pointer-coarse:size-11"><XIcon width={14} height={14} /></IconButton>
            </div>
          )}

          {!locked && shown !== "drafting" && (
            <div className="border-t border-line px-4 py-3 sm:px-5">
              <Button size="sm" variant="ghost" leading={<PlusIcon width={14} height={14} />} disabled={atMax} onClick={() => insert(items.length)} className="pointer-coarse:h-11">{l.addEnd}</Button>
              {atMax && <span className="ml-2 text-small text-fg-muted">An outline can have up to {maxItems} slides.</span>}
            </div>
          )}

          {(canBuild || shown === "failed") && (
            <div className="sticky bottom-0 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-b-card border-t border-line bg-surface px-4 py-3 pb-[max(--spacing(3),var(--safe-bottom))] sm:static sm:px-5">
              {showErrors && missing.length > 0 && (
                <p className="flex w-full items-center gap-1.5 text-small text-danger-fg">
                  <AlertIcon aria-hidden width={13} height={13} />
                  {missing.length === 1 ? `Slide ${items.indexOf(missing[0]) + 1} needs a title before you can build.` : `${missing.length} slides need a title before you can build.`}
                </p>
              )}
              {canBuild && <Button onClick={build} className="pointer-coarse:h-11 max-sm:flex-1">{l.build}</Button>}
              {onUpdate && (shown === "edited" || shown === "failed") && (
                <Button variant="secondary" onClick={onUpdate} className="pointer-coarse:h-11 max-sm:flex-1">{shown === "failed" ? l.retry : l.update}</Button>
              )}
              {estimate && <span className="text-small text-fg-muted max-sm:w-full">{estimate}</span>}
            </div>
          )}
        </div>
      </WorkingEdge>
      <p role="status" aria-live="polite" className="sr-only">{announce}</p>
    </section>
  );
}
```
