## tattva/organisms/ProjectPanel.tsx

```tsx
import { useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { EditIcon, FileIcon, NotebookIcon, PlusIcon, XIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { MeterBar } from "../atoms/MeterBar";

export interface ProjectFile {
  id: string;
  name: string;
  /** Size or length, such as "12 pages". */
  detail?: string;
}

export interface ProjectPanelLabels {
  instructions?: string;
  noInstructions?: string;
  editInstructions?: string;
  files?: string;
  noFiles?: string;
  addFiles?: string;
  /** Receives the file name. */
  remove?: (name: string) => string;
  /** Receives the file name. */
  removed?: (name: string) => string;
  /** Receives used and total, already formatted. */
  capacity?: (used: string, total: string) => string;
  capacityLabel?: string;
  /** Receives how many chats use the project. */
  chats?: (n: number) => string;
  showMore?: string;
  showLess?: string;
}

export interface ProjectPanelProps {
  /** The project's name. */
  name: string;
  /** One line about what the project is for. */
  description?: string;
  /** How the assistant should work in every chat of this project. */
  instructions?: string;
  onEditInstructions?: () => void;
  /** Files every chat in the project can read. */
  files: ProjectFile[];
  onAddFiles?: () => void;
  onRemoveFile?: (id: string) => void;
  /** How much of the project's knowledge room the files fill. */
  capacity?: { used: number; total: number };
  /** How many chats belong to the project. */
  chatCount?: number;
  labels?: ProjectPanelLabels;
  /** Level of the project name's heading, so it fits the page outline. Default 2. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * A project: chats that share the same instructions and files. The panel shows the project's name, its instructions
 * (folded after three lines), the files every chat can read, and how full the project's knowledge is. Taking a file
 * out moves focus to the next file, so a keyboard user never lands on nothing.
 */
export function ProjectPanel({ name, description, instructions, onEditInstructions, files, onAddFiles, onRemoveFile, capacity, chatCount, labels, headingLevel = 2, className }: ProjectPanelProps) {
  const l = {
    instructions: "Instructions", noInstructions: "No instructions yet. Tell the assistant how to work in this project.", editInstructions: "Edit instructions",
    files: "Files", noFiles: "No files yet. Every chat in this project can read the files you add here.", addFiles: "Add files",
    remove: (n: string) => `Remove ${n}`, removed: (n: string) => `${n} removed.`,
    capacity: (u: string, t: string) => `${u} of ${t} tokens used`, capacityLabel: "Project knowledge used",
    chats: (n: number) => (n === 1 ? "1 chat" : `${n} chats`), showMore: "Show all", showLess: "Show less", ...labels,
  };
  const [more, setMore] = useState(false);
  const uid = useId();
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const list = useRef<HTMLUListElement>(null);
  const said = useRef<HTMLParagraphElement>(null);
  const long = (instructions?.length ?? 0) > 180;
  const remove = (f: ProjectFile) => {
    if (!onRemoveFile) return;
    const buttons = [...(list.current?.querySelectorAll<HTMLButtonElement>("[data-remove]") ?? [])];
    const at = buttons.findIndex((b) => b.dataset.remove === f.id);
    const next = buttons[at + 1] ?? buttons[at - 1];
    onRemoveFile(f.id);
    if (said.current) said.current.textContent = l.removed(f.name);
    requestAnimationFrame(() => (next && next.isConnected ? next : document.getElementById(`${uid}-files`))?.focus());
  };
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("space-y-5 rounded-card border border-line bg-surface p-4 sm:p-5", className)}>
      <div>
        <div className="flex items-baseline gap-3">
          <H id={`${uid}-h`} className="m-0 min-w-0 flex-1 text-title-sm leading-7 font-semibold text-fg">{name}</H>
          {chatCount != null && <span className="shrink-0 text-small leading-5 text-fg-muted">{l.chats(chatCount)}</span>}
        </div>
        {description && <p className="m-0 mt-1 text-body leading-6 text-fg-muted">{description}</p>}
      </div>

      <div>
        <div className="flex items-center gap-2">
          <NotebookIcon aria-hidden width={16} height={16} className="shrink-0 text-fg-muted" />
          <H2 className="m-0 min-w-0 flex-1 text-body leading-5 font-semibold text-fg">{l.instructions}</H2>
          {onEditInstructions && <IconButton size="sm" label={l.editInstructions} onClick={onEditInstructions}><EditIcon width={14} height={14} /></IconButton>}
        </div>
        {instructions
          ? <>
              <p id={`${uid}-ins`} className={cn("m-0 mt-2 text-body leading-6 whitespace-pre-wrap text-fg", long && !more && "line-clamp-3")}>{instructions}</p>
              {long && <button type="button" aria-expanded={more} aria-controls={`${uid}-ins`} onClick={() => setMore(!more)} className="mt-1 cursor-pointer text-small leading-5 font-medium text-fg hover:text-accent transition-colors pointer-coarse:min-h-11">{more ? l.showLess : l.showMore}</button>}
            </>
          : <p className="m-0 mt-2 text-small leading-5 text-fg-muted">{l.noInstructions}</p>}
      </div>

      <div>
        <div className="flex items-center gap-2">
          <FileIcon aria-hidden width={16} height={16} className="shrink-0 text-fg-muted" />
          <H2 id={`${uid}-files`} tabIndex={-1} className="m-0 min-w-0 flex-1 text-body leading-5 font-semibold text-fg outline-none">{l.files}</H2>
          {onAddFiles && <Button size="sm" variant="ghost" onClick={onAddFiles} leading={<PlusIcon aria-hidden width={14} height={14} />}>{l.addFiles}</Button>}
        </div>
        {files.length === 0
          ? <p className="m-0 mt-2 text-small leading-5 text-fg-muted">{l.noFiles}</p>
          : (
            <ul ref={list} className="mt-2 space-y-1">
              {files.map((f) => (
                <li key={f.id} className="flex min-h-10 items-center gap-2.5 rounded-control px-2 py-1 hover:bg-hover">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-body leading-5 text-fg" title={f.name}>{f.name}</span>
                    {f.detail && <span className="block text-small leading-4 text-fg-muted">{f.detail}</span>}
                  </span>
                  {onRemoveFile && <IconButton size="sm" label={l.remove(f.name)} data-remove={f.id} onClick={() => remove(f)}><XIcon width={14} height={14} /></IconButton>}
                </li>
              ))}
            </ul>
          )}
        {capacity && (
          <div className="mt-4">
            <p className="m-0 mb-1.5 text-small leading-4 text-fg-muted">{l.capacity(fmt(capacity.used), fmt(capacity.total))}</p>
            <MeterBar value={capacity.used} max={capacity.total} warnAt={0.9} label={l.capacityLabel} valueText={l.capacity(fmt(capacity.used), fmt(capacity.total))} />
          </div>
        )}
      </div>
      <p ref={said} role="status" className="sr-only" />
    </section>
  );
}
```

## tattva/organisms/PromptBox.tsx

```tsx
import { useId, useState } from "react";
import { useAnnounceChange } from "../lib/focus";
import { SparkleIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Spinner } from "../atoms/Spinner";

/** Prompt field with a Generate button and example prompts. Screen readers hear when generating starts and ends. */
export function PromptBox({ onGenerate, busy, placeholder = "Describe what you want to create…", examples = [], busyMessage = "Generating", doneMessage = "Done. The results are ready." }: {
  onGenerate: (prompt: string) => void; busy?: boolean; placeholder?: string; examples?: string[];
  /** What screen readers hear when generating starts. */
  busyMessage?: string;
  /** What screen readers hear when it ends. Say where the results are if that helps, such as "4 images below". */
  doneMessage?: string;
}) {
  const [v, setV] = useState("");
  const said = useAnnounceChange(!!busy, (now) => (now ? busyMessage : doneMessage));
  const inputId = useId();
  return (
    <form onSubmit={(e) => { e.preventDefault(); if (v.trim() && !busy) onGenerate(v.trim()); }} className="space-y-2">
      <div className="rounded-field border border-line-strong bg-surface p-2.5 shadow-sm focus-within:border-fg-subtle has-[textarea:focus-visible]:outline-2 has-[textarea:focus-visible]:outline-offset-2 has-[textarea:focus-visible]:outline-[var(--focus-ring)]">
        <label htmlFor={inputId} className="sr-only">Prompt</label>
        <textarea id={inputId} rows={3} value={v} onChange={(e) => setV(e.target.value)} placeholder={placeholder}
          className="block w-full resize-none bg-transparent p-2 text-body-lg outline-none placeholder:text-fg-subtle [field-sizing:content]" />
        <div className="flex items-center justify-between px-1 pt-1">
          <span className="text-small leading-4 text-fg-subtle">{v.length} characters</span>
          <Button type="submit" variant="lime" size="sm" disabled={!v.trim() || busy} leading={busy ? <Spinner size={14} /> : <SparkleIcon width={14} height={14} />}>{busy ? "Generating…" : "Generate"}</Button>
        </div>
      </div>
      <p role="status" aria-live="polite" className="sr-only">{said}</p>
      {examples.length > 0 && (
        <p className="flex flex-wrap items-center gap-1.5 text-small leading-4 text-fg-muted">Try:
          {examples.map((x) => <button key={x} type="button" onClick={() => setV(x)} className="rounded-control border border-line px-2 py-0.5 hover:bg-hover">{x}</button>)}
        </p>
      )}
    </form>
  );
}
```
