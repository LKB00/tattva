## tattva/molecules/FactList.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Skeleton } from "../atoms/Skeleton";

export interface Fact {
  /** What the value is: "Check-in", "Plan". */
  label: string;
  /** The value itself: "3pm", "Pro". Text or a small part such as a Badge. */
  value: ReactNode;
}

export interface FactListProps {
  facts: Fact[];
  /** "split" puts the label and the value side by side; "stacked" puts the label above the value, for narrow places. */
  layout?: "split" | "stacked";
  /** On wide screens, lays the facts out in two columns. */
  columns?: 1 | 2;
  /** Shows placeholder rows while the facts are still arriving. */
  loading?: boolean;
  /** How many placeholder rows to show while loading. */
  loadingRows?: number;
  /** Said when there are no facts. Nothing is drawn when omitted. */
  emptyLabel?: string;
  className?: string;
}

/**
 * Short label and value pairs, such as "Check-in: 3pm" or "Plan: Pro". A description list, so each value is read
 * with its label. Light enough to sit in an answer or a card, and easy to scan on a phone.
 */
export function FactList({ facts, layout = "split", columns = 1, loading = false, loadingRows = 3, emptyLabel, className }: FactListProps) {
  if (loading) {
    return (
      <div aria-busy="true" className={cn("grid gap-2", className)}>
        {Array.from({ length: loadingRows }, (_, i) => (
          <div key={i} className="flex items-center justify-between gap-4"><Skeleton className="h-4 w-24" /><Skeleton className="h-4 w-16" /></div>
        ))}
      </div>
    );
  }
  if (facts.length === 0) return emptyLabel ? <p className={cn("m-0 text-body leading-5 text-fg-muted", className)}>{emptyLabel}</p> : null;
  return (
    <dl className={cn("m-0 grid gap-x-8", columns === 2 && "sm:grid-cols-2", className)}>
      {facts.map((f, i) => (
        <div key={`${f.label}-${i}`}
          className={cn("min-w-0 py-1.5", layout === "split" ? "flex items-baseline justify-between gap-4" : "flex flex-col gap-0.5")}>
          <dt className="shrink-0 text-body leading-5 text-fg-muted">{f.label}</dt>
          <dd className={cn("m-0 min-w-0 text-body leading-5 font-medium text-fg [overflow-wrap:anywhere]", layout === "split" && "text-right")}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
```

## tattva/molecules/FeedbackBar.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import { ThumbDownIcon, ThumbUpIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";

export type Rating = "up" | "down" | null;
const reasons = ["Inaccurate", "Not helpful", "Unsafe", "Too long", "Other"];

export interface FeedbackBarProps {
  /** Called once per message. Thumbs up sends the rating. Thumbs down sends the rating with a reason, or alone when the person chooses Skip. */
  onSubmit: (rating: Exclude<Rating, null>, reason?: string) => void;
  /** Any value. When it changes, for example to the message id, the bar returns to its starting state. */
  resetKey?: unknown;
}

/** Thumbs up and down for one response. After submitting, the chosen thumb stays pressed and a thank-you line sits beside it. */
export function FeedbackBar({ onSubmit, resetKey }: FeedbackBarProps) {
  const [rating, setRating] = useState<Rating>(null);
  const [done, setDone] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setRating(null); setDone(false);
  }, [resetKey]);

  const submit = (r: Exclude<Rating, null>, reason?: string) => { setRating(r); setDone(true); if (reason === undefined) onSubmit(r); else onSubmit(r, reason); };

  return (
    <div className="space-y-2">
      <div className="-ml-1.5 flex items-center gap-0.5">
        <IconButton size="sm" label="Good response" active={rating === "up"} onClick={() => { if (!done) submit("up"); }}><ThumbUpIcon /></IconButton>
        <IconButton size="sm" label="Bad response" active={rating === "down"} onClick={() => { if (!done) setRating("down"); }}><ThumbDownIcon /></IconButton>
        <p className="ml-1.5 text-small leading-4 text-fg-muted" role="status">{done ? "Thanks, your feedback helps improve responses." : ""}</p>
      </div>
      {rating === "down" && !done && (
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="What went wrong?">
          <span className="text-small leading-4 text-fg-muted">What went wrong?</span>
          {reasons.map((r) => <Button key={r} size="sm" variant="secondary" className="h-7 px-2.5 text-small leading-4" onClick={() => submit("down", r)}>{r}</Button>)}
          <Button size="sm" variant="ghost" className="h-7 px-2.5 text-small leading-4" onClick={() => submit("down")}>Skip</Button>
        </div>
      )}
    </div>
  );
}
```

## tattva/molecules/Field.tsx

```tsx
import { useId } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon } from "../lib/icons";

export interface FieldControlProps {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  required?: boolean;
}

export interface FieldProps {
  /** Visible label, joined to the control with htmlFor. */
  label: string;
  /** Help text under the control. */
  hint?: string;
  /** Error message. Setting it marks the control invalid. */
  error?: string;
  required?: boolean;
  /** Shows "(optional)" after the label. */
  optional?: boolean;
  /** Receives the id and aria props to spread onto the control. */
  children: (control: FieldControlProps) => ReactNode;
  className?: string;
}

/** Label, control, hint and error in one wrapper, with the ids wired for you. */
export function Field({ label, hint, error, required, optional, children, className }: FieldProps) {
  const uid = useId();
  const id = `${uid}-control`, hintId = `${uid}-hint`, errorId = `${uid}-error`;
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-body leading-5 font-medium text-fg">
        {label}
        {required && <span aria-hidden className="ml-0.5 text-fg-muted">*</span>}
        {optional && !required && <span className="ml-1 font-normal text-fg-muted">(optional)</span>}
      </label>
      {children({ id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined, required: required || undefined })}
      {hint && <p id={hintId} className="text-small leading-4 text-fg-muted">{hint}</p>}
      {/* Always mounted so screen readers pick up the message when it appears. */}
      <div id={errorId} aria-live="polite" className="empty:-mt-1.5">
        {error && <p className="flex items-start gap-1.5 text-small leading-4 text-danger-fg"><AlertIcon className="mt-px shrink-0" width={14} height={14} />{error}</p>}
      </div>
    </div>
  );
}
```

## tattva/molecules/FileDropZone.tsx

```tsx
import { useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, PaperclipIcon } from "../lib/icons";
import { Button } from "../atoms/Button";

export interface FileDropZoneLabels {
  title?: string;
  browse?: string;
  drop?: string;
  /** Receives the accepted kinds and the size limit, already in words. */
  hint?: (kinds: string, size: string) => string;
  /** Receives the file name. */
  wrongKind?: (name: string) => string;
  /** Receives the file name and the limit. */
  tooBig?: (name: string, size: string) => string;
}

export interface FileDropZoneProps {
  /** Called with the files that passed the checks. */
  onFiles: (files: File[]) => void;
  /** Accepted extensions, such as ["pdf", "docx", "png"]. Any file when omitted. */
  accept?: string[];
  /** Largest file in megabytes. */
  maxSizeMb?: number;
  multiple?: boolean;
  disabled?: boolean;
  labels?: FileDropZoneLabels;
  className?: string;
}

/**
 * Where people add files for the AI to read: drop them on the area or press Browse. It says up front which kinds
 * and sizes work, and when a file does not, it says which one and why, instead of failing quietly. Browse is a real
 * button, so keyboard and screen reader users never need to drag.
 */
export function FileDropZone({ onFiles, accept, maxSizeMb, multiple = true, disabled, labels, className }: FileDropZoneProps) {
  const l = {
    title: "Add files", browse: "Browse files", drop: "Drop to add",
    hint: (k: string, s: string) => [k, s].filter(Boolean).join(". ") + (k || s ? "." : ""),
    wrongKind: (n: string) => `${n} is a kind of file that cannot be read here.`,
    tooBig: (n: string, s: string) => `${n} is larger than ${s}.`, ...labels,
  };
  const [over, setOver] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const uid = useId();
  const sizeText = maxSizeMb ? `${maxSizeMb} MB` : "";
  const kindsText = accept?.length ? `${accept.map((a) => a.toUpperCase()).join(", ")}` : "";
  const take = (list: FileList | null) => {
    if (!list || disabled) return;
    const ok: File[] = [], bad: string[] = [];
    for (const f of [...list].slice(0, multiple ? undefined : 1)) {
      const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
      if (accept?.length && !accept.map((a) => a.toLowerCase()).includes(ext)) bad.push(l.wrongKind(f.name));
      else if (maxSizeMb && f.size > maxSizeMb * 1024 * 1024) bad.push(l.tooBig(f.name, sizeText));
      else ok.push(f);
    }
    setErrors(bad);
    if (ok.length) onFiles(ok);
  };
  return (
    <div className={cn("space-y-2", className)}>
      <div
        onDragOver={(e) => { if (disabled) return; e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); take(e.dataTransfer.files); }}
        className={cn("flex flex-col items-center gap-3 rounded-card border-2 border-dashed px-4 py-8 text-center transition-colors duration-(--dur-fast) motion-reduce:transition-none",
          over ? "border-selected-line bg-selected" : "border-line-strong bg-bg", disabled && "opacity-(--disabled-opacity)")}>
        <PaperclipIcon aria-hidden width={22} height={22} className="text-fg-muted" />
        <p className="m-0 text-body leading-5 font-medium text-fg">{over ? l.drop : l.title}</p>
        {(kindsText || sizeText) && <p id={`${uid}-hint`} className="m-0 text-small leading-5 text-fg-muted">{l.hint(kindsText, sizeText ? `Up to ${sizeText}` : "")}</p>}
        <Button size="sm" variant="secondary" disabled={disabled} onClick={() => input.current?.click()} aria-describedby={kindsText || sizeText ? `${uid}-hint` : undefined}>{l.browse}</Button>
        <input ref={input} type="file" multiple={multiple} hidden tabIndex={-1} accept={accept?.map((a) => `.${a}`).join(",")}
          onChange={(e) => { take(e.target.files); e.target.value = ""; }} />
      </div>
      <div role="alert">
        {errors.map((e) => (
          <p key={e} className="m-0 flex items-start gap-1.5 text-small leading-5 text-danger-fg"><AlertIcon aria-hidden width={14} height={14} className="mt-0.5 shrink-0" />{e}</p>
        ))}
      </div>
    </div>
  );
}
```

## tattva/molecules/FileResultCard.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, DownloadIcon, FileIcon, ImageIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Spinner } from "../atoms/Spinner";

export type FileKind = "document" | "sheet" | "slides" | "pdf" | "image" | "code" | "file";

export interface FileResultCardLabels {
  kinds?: Partial<Record<FileKind, string>>;
  open?: string;
  download?: string;
  retry?: string;
  /** Receives the file name. */
  making?: (name: string) => string;
  failed?: string;
}

export interface FileResultCardProps {
  /** The file's name, with its extension: "Q3 report.docx". */
  name: string;
  /** What kind of file it is. Worked out from the extension when omitted. */
  kind?: FileKind;
  /** Size or length, such as "24 KB" or "8 slides". */
  detail?: string;
  /** A small picture of the first page or the image itself. */
  preview?: ReactNode;
  status?: "ready" | "making" | "failed";
  /** Opens the file in the app (a canvas or a viewer). The button is hidden when omitted. */
  onOpen?: () => void;
  /** Downloads the file. The button is hidden when omitted. */
  onDownload?: () => void;
  /** Tries again after a failure. */
  onRetry?: () => void;
  labels?: FileResultCardLabels;
  className?: string;
}

const BY_EXT: Record<string, FileKind> = {
  doc: "document", docx: "document", md: "document", txt: "document", rtf: "document", odt: "document",
  xls: "sheet", xlsx: "sheet", csv: "sheet", ods: "sheet",
  ppt: "slides", pptx: "slides", key: "slides", odp: "slides",
  pdf: "pdf",
  png: "image", jpg: "image", jpeg: "image", gif: "image", webp: "image", svg: "image",
  js: "code", ts: "code", tsx: "code", py: "code", json: "code", html: "code", css: "code", sql: "code",
};
const KIND: Record<FileKind, string> = { document: "Document", sheet: "Spreadsheet", slides: "Slides", pdf: "PDF", image: "Image", code: "Code", file: "File" };

/** What kind of file a name is, from its extension. */
export const fileKindOf = (name: string): FileKind => BY_EXT[name.split(".").pop()?.toLowerCase() ?? ""] ?? "file";

/**
 * A file the AI made: a report, a spreadsheet, slides or an image. It shows what kind of file it is in words, a
 * small preview when there is one, and Open and Download. While the file is being made it says so; if making it
 * failed, it says so and offers to try again, instead of a broken link.
 */
export function FileResultCard({ name, kind, detail, preview, status = "ready", onOpen, onDownload, onRetry, labels, className }: FileResultCardProps) {
  const l = {
    open: "Open", download: "Download", retry: "Try again", making: (n: string) => `Making ${n}`, failed: "Could not make this file.", ...labels,
    kinds: { ...KIND, ...labels?.kinds },
  };
  const k = kind ?? fileKindOf(name);
  const Icon = k === "image" ? ImageIcon : FileIcon;
  return (
    <div className={cn("flex w-full max-w-md items-center gap-3 rounded-card border border-line bg-surface p-3", className)} aria-busy={status === "making" || undefined}>
      <div aria-hidden className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-control border border-line bg-bg text-fg-muted">
        {status === "making" ? <Spinner label="" /> : preview ?? <Icon width={22} height={22} />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="m-0 truncate text-body leading-5 font-medium text-fg" title={name}>{name}</p>
        <p className={cn("m-0 mt-0.5 text-small leading-5", status === "failed" ? "text-danger-fg" : "text-fg-muted")} role={status === "making" || status === "failed" ? "status" : undefined}>
          {status === "making" ? l.making(name) : status === "failed"
            ? <span className="inline-flex items-center gap-1"><AlertIcon aria-hidden width={13} height={13} />{l.failed}</span>
            : [l.kinds[k], detail].filter(Boolean).join(" · ")}
        </p>
      </div>
      {status === "ready" && (onOpen || onDownload) && (
        <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
          {onOpen && <Button size="sm" variant="secondary" onClick={onOpen} aria-label={`${l.open} ${name}`}>{l.open}</Button>}
          {onDownload && <Button size="sm" variant="ghost" onClick={onDownload} aria-label={`${l.download} ${name}`} leading={<DownloadIcon aria-hidden width={14} height={14} />}>{l.download}</Button>}
        </div>
      )}
      {status === "failed" && onRetry && <Button size="sm" variant="secondary" onClick={onRetry} className="shrink-0">{l.retry}</Button>}
    </div>
  );
}
```
