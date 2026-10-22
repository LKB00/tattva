## tattva/molecules/TakeVersions.tsx

```tsx
import { useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { cn } from "../lib/cn";
import { BranchIcon, SparkleIcon, UsersIcon } from "../lib/icons";
import { headingTag, useFocusAfter, type HeadingLevel } from "../lib/useFocusAfter";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { TakePoster, TAKE_STATUS_WORD, formatClock, formatSpokenDuration, type TakeScene, type TakeStatus } from "./TakeCard";
import { VersionPager } from "./VersionPager";

export type TakeOp = "generated" | "extended" | "edited" | "remixed" | "upscaled" | "recut" | "uploaded";

export interface TakeVersion {
  id: string;
  /** Overrides the automatic name "v1", "v2"... */
  name?: string;
  /** What made this version. */
  op: TakeOp;
  /** Id of the version it came from. */
  from?: string;
  /** The prompt behind this version. */
  prompt?: string;
  /** Seconds of the clip that were edited or re-cut, as [start, end]. */
  segment?: [number, number];
  /** Short extra fact, such as "4K" for an upscale or "sunset lighting" for an edit. */
  detail?: string;
  durationSec: number;
  author: "ai" | "person";
  /** Person name, or the model name for AI. */
  authorName?: string;
  /** Display time such as "5 min ago". */
  time: string;
  status: TakeStatus;
  poster?: string;
  scene?: TakeScene;
}

export interface TakeVersionsProps {
  /** Oldest first. Versions are numbered from the start, so the first is v1. The list shows the newest at the top. */
  versions: TakeVersion[];
  currentId: string;
  /** Called when a version is shown for a look, without changing anything. Showing the current one ends the preview. */
  onPreview: (id: string) => void;
  /** Makes a version the current one. Nothing is deleted, and the notice that follows offers Undo. */
  onMakeCurrent: (id: string) => void;
  /** Starts a new line of edits from this version. */
  onBranch?: (id: string) => void;
  /** Controlled preview id. Omit to let the part keep it. */
  previewId?: string;
  /** list: every version in a column. pager: one at a time with Previous and Next. auto: pager on narrow screens. */
  layout?: "auto" | "list" | "pager";
  title?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}

const NARROW = "(max-width: 639px)";
const subscribe = (cb: () => void) => {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia(NARROW);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useNarrow = () => useSyncExternalStore(subscribe, () => !!window.matchMedia?.(NARROW).matches, () => false);

const OP_WORD: Record<TakeOp, string> = {
  generated: "Generated", extended: "Extended", edited: "Edited", remixed: "Remixed", upscaled: "Upscaled", recut: "Re-cut", uploaded: "Uploaded",
};

/** The lineage line, such as "Extended +4 s from v2" or "Edited 0:02 to 0:06 from v2: sunset lighting". */
export function takeOpLabel(v: TakeVersion, all: TakeVersion[]) {
  const nameOf = (x: TakeVersion) => x.name ?? `v${all.indexOf(x) + 1}`;
  const src = v.from ? all.find((x) => x.id === v.from) : undefined;
  const from = src ? ` from ${nameOf(src)}` : "";
  const seg = v.segment ? ` ${formatClock(v.segment[0])} to ${formatClock(v.segment[1])}` : "";
  switch (v.op) {
    case "extended": {
      const added = src ? Math.round(v.durationSec - src.durationSec) : 0;
      return `Extended${added > 0 ? ` +${added} s` : ""}${from}`;
    }
    case "edited": return `Edited${seg}${from}${v.detail ? `: ${v.detail}` : ""}`;
    case "recut": return `Re-cut${seg}${from}`;
    case "upscaled": return `Upscaled${v.detail ? ` to ${v.detail}` : ""}${from}`;
    case "remixed": return `Remixed${from}${v.detail ? `: ${v.detail}` : ""}`;
    default: return `${OP_WORD[v.op]}${v.detail ? `: ${v.detail}` : ""}`;
  }
}

/** Where in the clip the change landed, as start and end fractions. Extends mark the added tail. */
function markOf(v: TakeVersion, all: TakeVersion[]): [number, number] | undefined {
  if (!v.durationSec) return undefined;
  if (v.segment && (v.op === "edited" || v.op === "recut")) return [v.segment[0] / v.durationSec, v.segment[1] / v.durationSec];
  if (v.op === "extended") {
    const src = all.find((x) => x.id === v.from);
    if (src && src.durationSec < v.durationSec) return [src.durationSec / v.durationSec, 1];
  }
  return undefined;
}

/** A tiny strip of frames with the changed part outlined. Drawn for the eye; the words carry the same fact. */
function Filmstrip({ mark }: { mark: [number, number] }) {
  return (
    <span aria-hidden className="relative mt-1.5 flex h-2.5 w-full max-w-48 gap-px overflow-hidden rounded-control">
      {Array.from({ length: 8 }, (_, i) => <span key={i} className="h-full flex-1 bg-line" />)}
      <span className="absolute inset-y-0 rounded-control border-2 border-fg bg-selected" style={{ left: `${mark[0] * 100}%`, width: `${Math.max(4, (mark[1] - mark[0]) * 100)}%` }} />
    </span>
  );
}

/**
 * The versions of one video take: every extend, edit, remix and upscale, each saying what it came from. Making a
 * version current never deletes anything, and an Undo follows. Up and Down move between versions.
 */
export function TakeVersions({
  versions, currentId, onPreview, onMakeCurrent, onBranch, previewId: controlledPreview, layout = "auto", title = "Versions", headingLevel = 3, className,
}: TakeVersionsProps) {
  const narrow = useNarrow();
  const pager = layout === "pager" || (layout === "auto" && narrow);
  const H = headingTag(headingLevel);
  const uid = useId();
  const listRef = useRef<HTMLOListElement>(null);
  const [innerPreview, setInnerPreview] = useState<string | undefined>(undefined);
  const previewId = controlledPreview ?? innerPreview;
  const [focusId, setFocusId] = useState<string | undefined>(undefined);
  const [undo, setUndo] = useState<{ from: string; to: string } | null>(null);
  const [notice, setNotice] = useState("");
  const [changes, setChanges] = useState(0);
  const [pagerId, setPagerId] = useState<string | undefined>(undefined);

  const nameOf = (v: TakeVersion) => v.name ?? `v${versions.indexOf(v) + 1}`;
  const byId = (id?: string) => versions.find((v) => v.id === id);
  const newestFirst = [...versions].reverse();
  const stopId = byId(focusId)?.id ?? currentId;
  const armFocus = useFocusAfter(changes, () => listRef.current?.querySelector<HTMLElement>(`[data-version="${currentId}"]`));

  const preview = (id: string) => {
    const next = id === currentId ? undefined : id;
    if (controlledPreview === undefined) setInnerPreview(next);
    onPreview(id);
  };
  const makeCurrent = (id: string) => {
    const v = byId(id);
    if (!v) return;
    armFocus();
    setUndo({ from: currentId, to: id });
    setChanges((n) => n + 1);
    setNotice(`${nameOf(v)} is now the current version. Nothing was deleted.`);
    if (controlledPreview === undefined) setInnerPreview(undefined);
    onMakeCurrent(id);
  };
  const undoLast = () => {
    if (!undo) return;
    const back = byId(undo.from);
    armFocus();
    onMakeCurrent(undo.from);
    setUndo(null);
    setChanges((n) => n + 1);
    setNotice(back ? `Back to ${nameOf(back)}.` : "Undone.");
  };

  const onListKey = (e: KeyboardEvent<HTMLOListElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const all = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-version]") ?? []);
    const from = all.indexOf(document.activeElement as HTMLElement);
    if (from < 0) return;
    let to = from;
    if (e.key === "ArrowDown") to = Math.min(from + 1, all.length - 1);
    else if (e.key === "ArrowUp") to = Math.max(from - 1, 0);
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = all.length - 1;
    else return;
    e.preventDefault();
    all[to]?.focus();
  };

  const row = (v: TakeVersion, roving: boolean) => {
    const name = nameOf(v);
    const isCurrent = v.id === currentId;
    const isPreview = v.id === previewId && !isCurrent;
    const op = takeOpLabel(v, versions);
    const mark = markOf(v, versions);
    const ready = v.status === "done";
    return (
      <div className={cn("flex flex-wrap items-start gap-x-3 gap-y-2 rounded-card p-2", isPreview ? "bg-sunken" : isCurrent ? "bg-surface" : "")}>
        <button type="button" data-version={v.id} tabIndex={roving ? (v.id === stopId ? 0 : -1) : undefined}
          aria-pressed={isPreview} aria-label={`Preview ${name}. ${op}${isCurrent ? ". Current version" : ""}`}
          onClick={() => preview(v.id)} onFocus={() => setFocusId(v.id)}
          className="flex min-w-0 flex-1 basis-56 cursor-pointer items-start gap-3 rounded-control text-left">
          <span className={cn("relative aspect-video w-20 shrink-0 overflow-hidden rounded-card border", isCurrent ? "border-fg" : "border-line")}>
            {ready ? <TakePoster src={v.poster} scene={v.scene} /> : <span className="block h-full w-full bg-sunken" />}
            <span className="absolute right-1 bottom-1 rounded-control bg-overlay px-1 font-mono text-nano leading-4 text-inverse-fg tabular-nums">{formatClock(v.durationSec)}</span>
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-1.5 text-compact font-semibold text-fg">
              {name}
              {isCurrent && <Badge>Current</Badge>}
              {isPreview && <Badge>Previewing</Badge>}
              {!ready && <Badge>{TAKE_STATUS_WORD[v.status]}</Badge>}
            </span>
            <span className="mt-0.5 block text-small text-fg">{op}</span>
            {v.prompt && <span className="mt-0.5 line-clamp-2 block text-small leading-4 text-fg-muted">“{v.prompt}”</span>}
            <span className="mt-0.5 flex flex-wrap items-center gap-1.5 text-small leading-4 text-fg-muted">
              <span className="inline-flex items-center gap-1">
                {v.author === "ai" ? <SparkleIcon width={11} height={11} aria-hidden /> : <UsersIcon width={11} height={11} aria-hidden />}
                {v.author === "ai" ? "AI" : "Person"}{v.authorName ? `, ${v.authorName}` : ""}
              </span>
              <span aria-hidden>·</span><span>{v.time}</span>
              <span className="sr-only">, {formatSpokenDuration(v.durationSec)}</span>
            </span>
            {mark && <Filmstrip mark={mark} />}
          </span>
        </button>
        <span className="flex shrink-0 flex-wrap gap-1.5 max-sm:basis-full max-sm:pl-23">
          {!isCurrent && ready && <Button size="sm" variant="secondary" onClick={() => makeCurrent(v.id)} aria-label={`Make ${name} current`}>Make current</Button>}
          {onBranch && ready && <Button size="sm" variant="ghost" leading={<BranchIcon width={14} height={14} />} onClick={() => onBranch(v.id)} aria-label={`Branch from ${name}`}>Branch</Button>}
        </span>
      </div>
    );
  };

  const shownId = byId(pagerId)?.id ?? previewId ?? currentId;
  const shownIndex = Math.max(0, versions.findIndex((v) => v.id === shownId));

  return (
    <section aria-labelledby={`${uid}h`} className={cn("space-y-2 rounded-card border border-line bg-surface p-3", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 px-1">
        <H id={`${uid}h`} className="text-body font-semibold text-fg">{title}</H>
        <p className="text-small leading-4 text-fg-muted">{versions.length} {versions.length === 1 ? "version" : "versions"}. Nothing is ever overwritten.</p>
      </div>

      <div className={cn("flex flex-wrap items-center gap-2 rounded-card text-small", notice ? "border border-line bg-sunken px-3 py-2" : "sr-only")}>
        <p role="status" aria-live="polite" className="min-w-0 flex-1">{notice}</p>
        {undo && <Button size="sm" variant="secondary" onClick={undoLast}>Undo</Button>}
      </div>

      {pager ? (
        <div className="space-y-2">
          <VersionPager total={versions.length} current={shownIndex + 1} label={`${title} pager`}
            announce={(c, t) => `${nameOf(versions[c - 1])}, ${c} of ${t}`}
            onChange={(n) => { const v = versions[n - 1]; setPagerId(v.id); preview(v.id); }} />
          {row(versions[shownIndex], false)}
        </div>
      ) : (
        <ol ref={listRef} onKeyDown={onListKey} aria-label={`${title}, newest first`} className="m-0 list-none space-y-1 p-0">
          {newestFirst.map((v) => (
            <li key={v.id} aria-current={v.id === currentId ? "true" : undefined}>{row(v, true)}</li>
          ))}
        </ol>
      )}
      {!pager && <p className="px-1 text-small leading-4 text-fg-subtle">Up and Down move between versions. Preview does not change the current version.</p>}
    </section>
  );
}
```
