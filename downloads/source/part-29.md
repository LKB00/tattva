## tattva/molecules/EditableTurn.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { CopyIcon, EditIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";
import { VersionPager } from "./VersionPager";

export interface EditableTurnLabels {
  edit?: string;
  copy?: string;
  copied?: string;
  send?: string;
  cancel?: string;
  /** Name of the edit box for screen readers. */
  field?: string;
  /** One line under the edit box. */
  note?: string;
}

export interface EditableTurnProps {
  /** Every version of this message the person has sent, oldest first. */
  versions: string[];
  /** Which version is showing, 1-based. Defaults to the newest. */
  current?: number;
  /** Shows another version (and the replies that followed it). */
  onChangeVersion?: (version: number) => void;
  /** Sends the edited text as a new version. The replies after this message are written again. */
  onResend: (text: string) => void;
  /** Copies the message. The button is hidden when omitted. */
  onCopy?: (text: string) => void;
  labels?: EditableTurnLabels;
  className?: string;
}

/**
 * A message the person sent, which they can edit and send again. Sending an edit starts a new branch: the earlier
 * versions stay, and a small pager (◀ 2 of 2 ▶) moves between them. The Edit and Copy buttons sit under the
 * bubble and are always there, not only on hover, so touch and keyboard users can reach them.
 */
export function EditableTurn({ versions, current, onChangeVersion, onResend, onCopy, labels, className }: EditableTurnProps) {
  const l = {
    edit: "Edit", copy: "Copy", copied: "Copied", send: "Send", cancel: "Cancel", field: "Edit your message",
    note: "Sending this writes the replies after it again. Your earlier version stays.", ...labels,
  };
  const at = Math.min(Math.max(current ?? versions.length, 1), versions.length);
  const text = versions[at - 1] ?? "";
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(text);
  const [copied, setCopied] = useState(false);
  const box = useRef<HTMLTextAreaElement>(null);
  const editBtn = useRef<HTMLButtonElement>(null);
  const uid = useId();
  const back = useRef(false);
  useEffect(() => {
    if (editing) { const el = box.current; el?.focus(); el?.setSelectionRange(el.value.length, el.value.length); }
    else if (back.current) { back.current = false; editBtn.current?.focus(); }
  }, [editing]);
  const start = () => { setDraft(text); setEditing(true); };
  const stop = () => { back.current = true; setEditing(false); };
  const send = () => { const t = draft.trim(); if (!t) return; back.current = true; setEditing(false); if (t !== text.trim()) onResend(t); };
  if (editing) {
    return (
      <div className={cn("flex justify-end", className)}>
        <div className="w-full max-w-[80%] max-sm:max-w-full">
          <label htmlFor={`${uid}-box`} className="sr-only">{l.field}</label>
          <textarea id={`${uid}-box`} ref={box} value={draft} onChange={(e) => setDraft(e.target.value)} rows={3} aria-describedby={`${uid}-note`}
            onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); stop(); } if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); send(); } }}
            className="block w-full resize-y rounded-card border border-line-strong bg-surface px-4 py-3 text-body-lg leading-relaxed text-fg" />
          <p id={`${uid}-note`} className="m-0 mt-2 text-small leading-5 text-fg-muted">{l.note}</p>
          <div className="mt-3 flex justify-end gap-2">
            <Button size="sm" variant="ghost" onClick={stop}>{l.cancel}</Button>
            <Button size="sm" onClick={send} disabled={!draft.trim()}>{l.send}</Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col items-end gap-1.5", className)}>
      <div className="max-w-[80%] rounded-card rounded-br-[min(var(--radius-lg),var(--shape-card))] bg-sunken px-5 py-3 text-body-lg leading-relaxed whitespace-pre-wrap text-fg">{text}</div>
      <div className="flex items-center gap-0.5">
        {versions.length > 1 && <VersionPager total={versions.length} current={at} onChange={onChangeVersion} edited={at > 1} label="Versions of your message" />}
        {onCopy && (
          <IconButton size="sm" label={copied ? l.copied : l.copy} onClick={() => { onCopy(text); setCopied(true); window.setTimeout(() => setCopied(false), 1500); }}>
            <CopyIcon width={14} height={14} />
          </IconButton>
        )}
        <IconButton ref={editBtn} size="sm" label={l.edit} onClick={start}><EditIcon width={14} height={14} /></IconButton>
      </div>
    </div>
  );
}
```

## tattva/molecules/EmptyState.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon } from "../lib/icons";
import { Illustration, type IllustrationName } from "../atoms/Illustration";

export type EmptyStateVariant = "first-use" | "no-results" | "cleared" | "error" | "permission" | "offline" | "rate-limit";

interface Preset {
  art: IllustrationName;
  title: string;
  body: string;
  /** True when a person must act, which is the only time amber appears. */
  attention: boolean;
  /** Whether the region announces itself when it appears. */
  live: boolean;
}

/** Default copy follows "cause, then next step". Every string can be overridden. */
const presets: Record<EmptyStateVariant, Preset> = {
  "first-use": { art: "empty-chat", title: "Start your first chat", body: "Nothing is here yet. Ask a question or add a file to begin.", attention: false, live: false },
  "no-results": { art: "no-results", title: "No results for these filters", body: "Try a shorter search or clear the filters.", attention: false, live: true },
  cleared: { art: "success", title: "Everything here is done", body: "New items will show up as they arrive.", attention: false, live: false },
  error: { art: "error", title: "We could not load this", body: "The request failed on our side and your work is safe. Try again.", attention: false, live: false },
  permission: { art: "permission", title: "You need access to see this", body: "This project is private. Ask an owner to add you.", attention: true, live: false },
  offline: { art: "offline", title: "You are offline", body: "Changes are saved on this device and will sync when you reconnect.", attention: false, live: true },
  "rate-limit": { art: "rate-limit", title: "You reached the usage limit", body: "Wait for the limit to reset or upgrade your plan to continue.", attention: true, live: false },
};

export interface EmptyStateProps {
  /** Preset that sets the default art, copy, tone and live behavior. */
  variant?: EmptyStateVariant;
  /** Art slot. Omit for the variant's illustration, pass `null` for none, or pass an Illustration or Pictogram. */
  art?: ReactNode | null;
  /** Names the cause or invites the first step. */
  title?: string;
  /** One short line that gives the next step. */
  children?: ReactNode;
  /** The one primary action, usually a Button. */
  action?: ReactNode;
  /** Optional secondary link or ghost button. */
  secondary?: ReactNode;
  /** `center` suits full panels. `start` left-aligns text for small areas. */
  layout?: "center" | "start";
  /** Drops the art for dense contexts such as tables and menus. */
  compact?: boolean;
  /** Heading level of the title. */
  headingLevel?: 2 | 3 | 4;
  /** Overrides whether the region has role="status". Defaults per variant: no-results and offline only. */
  live?: boolean;
  /** Label of the amber chip shown for permission and rate-limit. */
  attentionLabel?: string;
  className?: string;
}

/**
 * Message for an area with nothing to show. It names the cause, gives one next step and optionally shows art.
 * Presets cover first use, no results, cleared, error, permission, offline and rate limit.
 */
export function EmptyState({
  variant = "first-use", art, title, children, action, secondary, layout = "center", compact = false,
  headingLevel = 3, live, attentionLabel = "Action needed", className,
}: EmptyStateProps) {
  const p = presets[variant];
  const Heading = `h${headingLevel}` as "h3";
  const center = layout === "center";
  const artNode = compact ? null : art === undefined ? <Illustration name={p.art} size={center ? 96 : 64} /> : art;
  const isLive = live ?? p.live;
  return (
    <div
      role={isLive ? "status" : undefined}
      className={cn("flex flex-col gap-4 rounded-card border border-line bg-surface p-6", center ? "items-center text-center" : "items-start text-left", compact && "gap-3 p-4", className)}
    >
      {artNode && <div aria-hidden={art === undefined ? true : undefined} className="shrink-0">{artNode}</div>}
      <div className={cn("min-w-0 max-w-[44ch]", center && "mx-auto")}>
        {p.attention && (
          <p className={cn("mb-2 inline-flex items-center gap-1.5 rounded-control bg-attention-soft px-2.5 py-0.5 text-micro font-medium text-attention-fg")}>
            <AlertIcon width={12} height={12} />{attentionLabel}
          </p>
        )}
        <Heading className="text-lead-lg leading-6 [overflow-wrap:anywhere]">{title ?? p.title}</Heading>
        <p className="mt-1.5 text-body leading-6 text-fg-muted">{children ?? p.body}</p>
      </div>
      {(action || secondary) && (
        <div className={cn("flex flex-wrap items-center gap-2", center && "justify-center")}>
          {action}{secondary}
        </div>
      )}
    </div>
  );
}
```
