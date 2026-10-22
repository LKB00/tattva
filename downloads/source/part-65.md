## tattva/organisms/ExportSheet.tsx

```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, ArrowRightIcon, CheckIcon, CopyIcon, DownloadIcon, FileIcon, InfoIcon, RetryIcon, SourceIcon } from "../lib/icons";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Button } from "../atoms/Button";
import { Meter } from "../atoms/Meter";
import { Spinner } from "../atoms/Spinner";
import { Switch } from "../atoms/Switch";
import { RadioGroup } from "../molecules/RadioGroup";
import { Dialog } from "./Dialog";

export type ExportFormat = "pdf" | "pptx" | "png" | "link";
export type ExportState = "choosing" | "checking" | "exporting" | "done" | "failed";

export interface ExportCheck {
  id: string;
  /** fix: a person must act before sending (amber), such as AI changes nobody has reviewed or an image that is missing. info: worth knowing, nothing to do (neutral), such as a font that will be swapped. */
  severity: "fix" | "info";
  /** Plain words, worked out by your app for the chosen format, such as "Slide 6 has an image with no description". */
  message: string;
  /** The slide to jump to, with a label for the button, such as "Slide 6". */
  slideId?: string;
  slideLabel?: string;
}

export interface ExportSheetProps {
  /** Dialog mode: whether it is showing. Ignored when inline. */
  open?: boolean;
  /** Closes the dialog. Also the Close and Cancel buttons. */
  onClose?: () => void;
  /** Draw the same content as a card in the page instead of a dialog, for a side panel or a settings page. */
  inline?: boolean;
  /** Name of the deck, shown in the title, such as "Q3 churn review". */
  deckTitle?: string;
  /** Formats on offer, in order. */
  formats?: ExportFormat[];
  format: ExportFormat;
  onFormatChange: (format: ExportFormat) => void;
  /** choosing: picking a format. checking: your app is checking the deck for this format. exporting: the file is being made. done and failed: the result. */
  state: ExportState;
  /** What will be in the file, worked out by your app, such as "12 slides, 16:9" or "Content credentials on 3 AI images". */
  includes?: string[];
  includeNotes?: boolean;
  /** Shows a switch for speaker notes. Leave out for formats that cannot carry notes. */
  onIncludeNotesChange?: (value: boolean) => void;
  /** Results of the checks for the chosen format. Fix items are amber and come first. */
  checks?: ExportCheck[];
  /** Takes the person to a slide named in a check. Closes nothing by itself. */
  onJumpTo?: (slideId: string) => void;
  /** Real progress while exporting, in slides. */
  progress?: { done: number; total: number };
  /** The file that was made, such as "q3-churn-review.pdf". For a link, the link. */
  fileName?: string;
  /** Size of the file, such as "4.2 MB". */
  fileSize?: string;
  /** Why the export failed, in plain words. */
  error?: string;
  /** Starts the export. Never blocked by fix items: the button then says "Export anyway". */
  onExport: () => void;
  /** Stops an export that is running. */
  onStopExport?: () => void;
  /** Tries again after a failure. Defaults to onExport. */
  onRetry?: () => void;
  onDownload?: () => void;
  /** Copies the link (link format). The sheet says "Link copied" after. */
  onCopyLink?: () => void;
  headingLevel?: HeadingLevel;
  className?: string;
}

const FORMAT: Record<ExportFormat, { label: string; short: string; description: string; action: string }> = {
  pdf: { label: "PDF", short: "PDF", description: "Best for sending. Looks the same everywhere.", action: "Export PDF" },
  pptx: { label: "PowerPoint (.pptx)", short: "PowerPoint", description: "Others can edit it. Some fonts and effects may change.", action: "Export PowerPoint" },
  png: { label: "Images (.png)", short: "images", description: "One picture per slide, in a zip file.", action: "Export images" },
  link: { label: "View-only link", short: "a link", description: "Anyone with the link can view. It stays up to date.", action: "Create link" },
};

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/**
 * Export for a deck. The person picks a format, sees what the file will hold, and reads what will not survive before
 * the file is made: fix items in amber with a link to the slide, notes in neutral. Export is never blocked. Then it
 * shows real progress, the file name when done, and Retry when it fails. A dialog on wide screens, a bottom sheet on phones.
 */
export function ExportSheet({
  open = false, onClose, inline = false, deckTitle, formats = ["pdf", "pptx", "png", "link"], format, onFormatChange, state,
  includes, includeNotes, onIncludeNotesChange, checks = [], onJumpTo, progress, fileName, fileSize, error,
  onExport, onStopExport, onRetry, onDownload, onCopyLink, headingLevel = 3, className,
}: ExportSheetProps) {
  const f = FORMAT[format];
  const fixes = checks.filter((c) => c.severity === "fix");
  const infos = checks.filter((c) => c.severity === "info");
  const picking = state === "choosing" || state === "checking" || state === "failed";
  const [copied, setCopied] = useState(false);
  useEffect(() => { setCopied(false); }, [fileName, state]);

  // Speak when a stage ends, not while it runs.
  const [spoken, setSpoken] = useState("");
  const prev = useRef(state);
  useEffect(() => {
    if (prev.current === state) return;
    prev.current = state;
    setSpoken(
      state === "choosing" ? (fixes.length ? `Checks done. ${plural(fixes.length, "thing")} to fix before you send it.` : infos.length ? `Checks done. ${plural(infos.length, "note")}, nothing to fix.` : "Checks done. Nothing to fix.") :
      state === "exporting" ? `Exporting ${f.short}` :
      state === "done" ? `Export done. ${fileName ?? ""}` :
      state === "failed" ? `Export failed. ${error ?? ""}` : "",
    );
  }, [state, fixes.length, infos.length, f.short, fileName, error]);

  const isLink = format === "link";

  const body: ReactNode = (
    <div className="space-y-5">
      <p role="status" aria-live="polite" className="sr-only">{spoken}</p>

      {state === "failed" && (
        <p className="flex items-start gap-2 rounded-card bg-danger-soft px-3 py-2 text-compact text-danger-fg">
          <AlertIcon aria-hidden width={14} height={14} className="mt-0.5 shrink-0" />
          <span><span className="font-medium">Export failed. </span>{error ?? "The file was not made. Nothing was sent."}</span>
        </p>
      )}

      {picking && (
        <div><RadioGroup label="Format" value={format} onChange={(v) => onFormatChange(v as ExportFormat)} disabled={state === "checking"}
          options={formats.map((x) => ({ value: x, label: FORMAT[x].label, description: FORMAT[x].description }))} /></div>
      )}

      {picking && (includes?.length || onIncludeNotesChange) ? (
        <section aria-label="What the file will hold" className="space-y-2">
          <p className="text-body leading-5 font-medium text-fg">What the {isLink ? "link shows" : "file holds"}</p>
          {includes && includes.length > 0 && (
            <ul className="space-y-1">
              {includes.map((t) => <li key={t} className="flex items-start gap-2 text-compact text-fg-muted"><CheckIcon aria-hidden width={14} height={14} className="mt-0.5 shrink-0" />{t}</li>)}
            </ul>
          )}
          {onIncludeNotesChange && <Switch checked={!!includeNotes} onChange={onIncludeNotesChange} label="Include speaker notes" disabled={state === "checking"}>Include speaker notes</Switch>}
        </section>
      ) : null}

      {picking && (
        <section aria-label="Before you export" className="space-y-2">
          <p className="text-body leading-5 font-medium text-fg">Before you export</p>
          {state === "checking" ? (
            <p className="flex items-center gap-2 text-compact text-fg-muted"><Spinner size={14} label="Checking" /><span>Checking the deck for {f.short}…</span></p>
          ) : checks.length === 0 ? (
            <p className="flex items-center gap-2 text-compact text-fg-muted"><CheckIcon aria-hidden width={14} height={14} className="text-success-fg" />Nothing to fix. It should look the same as {f.short}.</p>
          ) : (
            <ul className="space-y-1.5 motion-safe:animate-fade">
              {[...fixes, ...infos].map((c) => {
                const fix = c.severity === "fix";
                return (
                  <li key={c.id} className={cn("flex flex-wrap items-start gap-x-2 gap-y-1 rounded-card px-3 py-2 text-compact", fix ? "bg-attention-soft text-attention-fg" : "bg-sunken text-fg-muted")}>
                    {fix ? <AlertIcon aria-hidden width={14} height={14} className="mt-0.5 shrink-0" /> : <InfoIcon aria-hidden width={14} height={14} className="mt-0.5 shrink-0" />}
                    <span className="min-w-0 flex-1"><span className="font-medium">{fix ? "Needs you: " : "Note: "}</span>{c.message}</span>
                    {c.slideId && onJumpTo && (
                      <button type="button" onClick={() => onJumpTo(c.slideId!)}
                        className="tap ml-6 inline-flex shrink-0 basis-full cursor-pointer sm:basis-auto items-center gap-1 rounded-control text-small leading-4 font-medium underline underline-offset-2 hover:no-underline sm:ml-0">
                        Go to {c.slideLabel ?? "slide"}<ArrowRightIcon aria-hidden width={12} height={12} />
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}

      {state === "exporting" && (
        <section aria-label="Export progress" className="space-y-2">
          <p className="flex items-center gap-2 text-compact text-fg"><FileIcon aria-hidden width={14} height={14} />
            {progress ? `Making ${f.short}: slide ${progress.done} of ${progress.total}` : `Making ${f.short}…`}
          </p>
          {progress ? <Meter label="Export progress" value={progress.done} max={progress.total} valueText={`Slide ${progress.done} of ${progress.total}`} />
            : <Spinner size={16} label="Exporting" />}
          <p className="text-small leading-4 text-fg-subtle">You can close this and keep working. Changes from now on are not in this file.</p>
        </section>
      )}

      {state === "done" && (
        <section aria-label="Export done" className="space-y-3">
          <p className="flex items-center gap-2 text-compact font-medium text-fg"><CheckIcon aria-hidden width={16} height={16} className="text-success-fg" />{isLink ? "Link ready" : "Export done"}</p>
          <div className="flex min-w-0 items-center gap-3 rounded-card border border-line bg-sunken px-3 py-2.5">
            {isLink ? <SourceIcon aria-hidden width={16} height={16} className="shrink-0 text-fg-muted" /> : <FileIcon aria-hidden width={16} height={16} className="shrink-0 text-fg-muted" />}
            <span className="min-w-0 flex-1">
              <span className="block truncate font-mono text-compact text-fg">{fileName}</span>
              {fileSize && <span className="block text-small leading-4 text-fg-muted">{fileSize}</span>}
            </span>
          </div>
          {fixes.length > 0 && <p className="text-small leading-4 text-fg-muted">Exported with {plural(fixes.length, "item")} not fixed. You can fix them and export again.</p>}
          {copied && <p className="text-small leading-4 text-fg-muted">Link copied.</p>}
        </section>
      )}

    </div>
  );

  const close = onClose && <Button variant="secondary" onClick={onClose}>{state === "done" ? "Close" : "Cancel"}</Button>;
  const footer: ReactNode = (
    <>
      {state !== "exporting" && close}
      {(state === "choosing" || state === "checking") && (
        <Button onClick={onExport} leading={<DownloadIcon aria-hidden width={14} height={14} />}>{fixes.length && state === "choosing" ? "Export anyway" : f.action}</Button>
      )}
      {state === "exporting" && onStopExport && <Button variant="secondary" onClick={onStopExport}>Stop export</Button>}
      {state === "failed" && <Button onClick={onRetry ?? onExport} leading={<RetryIcon aria-hidden width={14} height={14} />}>Try again</Button>}
      {state === "done" && isLink && onCopyLink && <Button onClick={() => { onCopyLink(); setCopied(true); }} leading={<CopyIcon aria-hidden width={14} height={14} />}>Copy link</Button>}
      {state === "done" && !isLink && onDownload && <Button onClick={onDownload} leading={<DownloadIcon aria-hidden width={14} height={14} />}>Download</Button>}
    </>
  );

  const title = deckTitle ? `Export ${deckTitle}` : "Export deck";

  if (inline) {
    const H = headingTag(headingLevel);
    return (
      <section aria-label={title} className={cn("w-full overflow-hidden rounded-card border border-line bg-surface", className)}>
        <H className="px-5 pt-5 pb-3 text-subhead leading-snug font-semibold text-balance text-fg">{title}</H>
        <div className="px-5 pb-4 text-body leading-5">{body}</div>
        <div className="flex flex-col-reverse gap-2 border-t border-line px-5 py-4 sm:flex-row sm:justify-end">{footer}</div>
      </section>
    );
  }

  return (
    <Dialog open={open} onClose={onClose ?? (() => {})} title={title} dismissible={!!onClose} footer={footer} className={className}>
      {body}
    </Dialog>
  );
}
```
