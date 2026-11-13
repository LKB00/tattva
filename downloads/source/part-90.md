## tattva/organisms/Sections.tsx

```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import type { HeadingLevel } from "../lib/useFocusAfter";
import { Collapsible } from "../molecules/Collapsible";

export interface Section {
  /** Stays the same while the answer streams, so a section keeps its open state. */
  id: string;
  title: string;
  /** A short line shown next to the title, such as "3 options". */
  meta?: string;
  content: ReactNode;
}

export interface SectionsProps {
  sections: Section[];
  /** The answer is still arriving. Each new section opens as it arrives; when the answer ends, the first one stays open. */
  streaming?: boolean;
  /** Level of each section's heading. Defaults to 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * A long answer in foldable sections. While the answer streams, each new section opens as it arrives so people can
 * follow along. When it ends, the sections fold back to the first one. Once the person opens or closes a section
 * themselves, the answer stops moving things and leaves their choice alone.
 */
export function Sections({ sections, streaming = false, headingLevel = 3, className }: SectionsProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(sections[0] ? [sections[0].id] : []));
  const touched = useRef(false);
  const last = sections[sections.length - 1]?.id;
  const first = sections[0]?.id;

  // While streaming, follow the newest section; when the stream ends, settle on the first. Never after a person acts.
  useEffect(() => {
    if (touched.current) return;
    if (streaming && last) setOpen(new Set([last]));
  }, [streaming, last]);
  useEffect(() => {
    if (touched.current) return;
    if (!streaming && first) setOpen(new Set([first]));
  }, [streaming, first]);

  const toggle = (id: string, value: boolean) => {
    touched.current = true;
    setOpen((o) => { const n = new Set(o); if (value) n.add(id); else n.delete(id); return n; });
  };

  return (
    <div className={cn("divide-y divide-line rounded-card border border-line bg-surface", className)} aria-busy={streaming || undefined}>
      {sections.map((s) => (
        <Collapsible key={s.id} open={open.has(s.id)} onOpenChange={(v) => toggle(s.id, v)} headingLevel={headingLevel}
          className="px-4 py-3"
          header={
            <span className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
              <span className="min-w-0 text-lead leading-6 font-semibold text-fg">{s.title}</span>
              {s.meta && <span className="shrink-0 text-body leading-5 text-fg-muted">{s.meta}</span>}
            </span>
          }>
          <div className="pt-2 pl-6 text-body leading-6 text-fg">{s.content}</div>
        </Collapsible>
      ))}
    </div>
  );
}
```

## tattva/organisms/SharePanel.tsx

```tsx
import { useId, useState } from "react";
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { CheckIcon, CopyIcon, GlobeIcon, LockIcon, UsersIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { RadioGroup } from "../molecules/RadioGroup";
import { InlineConfirm } from "../molecules/InlineConfirm";

export type ShareAccess = "private" | "workspace" | "link";

export interface SharePanelLabels {
  heading?: string;
  access?: string;
  options?: Partial<Record<ShareAccess, { label: string; description: string }>>;
  link?: string;
  copy?: string;
  copied?: string;
  /** What a shared link shows, in one line. */
  scope?: string;
  stop?: string;
  stopQuestion?: string;
  keep?: string;
}

export interface SharePanelProps {
  /** What is being shared, such as the chat's title. */
  title: string;
  /** Who can open it now. */
  access: ShareAccess;
  onAccessChange: (access: ShareAccess) => void;
  /** The link, once there is one. */
  link?: string;
  /** Copies the link. Defaults to the clipboard. */
  onCopy?: (link: string) => void;
  /** Turns the link off; anyone who has it can no longer open it. */
  onStopSharing?: () => void;
  /** Hide the workspace choice for people who are not in one. */
  showWorkspace?: boolean;
  labels?: SharePanelLabels;
  /** Level of the part's heading, so it fits the page outline. Default 2, for use in a dialog or sheet. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const OPTIONS: Record<ShareAccess, { label: string; description: string }> = {
  private: { label: "Only you", description: "Nobody else can open it." },
  workspace: { label: "People in your workspace", description: "Anyone signed in to your workspace with the link." },
  link: { label: "Anyone with the link", description: "No sign-in needed. Think before sharing private details." },
};

/**
 * Who can open a chat or a result, and its link. Put it in a Dialog or a Sheet. The choice reads as plain sentences,
 * the link is one press to copy (and says Copied), a line says exactly what the link shows, and stopping sharing
 * asks once in place.
 */
export function SharePanel({ title, access, onAccessChange, link, onCopy, onStopSharing, showWorkspace = true, labels, headingLevel = 2, className }: SharePanelProps) {
  const l = {
    heading: "Share", access: "Who can open it", link: "Link", copy: "Copy link", copied: "Copied",
    scope: "The link shows this chat up to now. Messages you send later are not shared.",
    stop: "Stop sharing", stopQuestion: "Stop sharing? The link stops working.", keep: "Keep sharing", ...labels,
    options: { ...OPTIONS, ...labels?.options },
  };
  const [copied, setCopied] = useState(false);
  const uid = useId();
  const H = headingTag(headingLevel);
  const ICON = { private: LockIcon, workspace: UsersIcon, link: GlobeIcon };
  const copy = () => {
    if (!link) return;
    if (onCopy) onCopy(link); else void navigator.clipboard?.writeText(link).catch(() => {});
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  };
  const keys = (Object.keys(OPTIONS) as ShareAccess[]).filter((k) => showWorkspace || k !== "workspace");
  return (
    <section aria-labelledby={`${uid}-h`} className={cn("flex flex-col gap-5", className)}>
      <div>
        <H id={`${uid}-h`} className="m-0 text-title-sm leading-7 font-semibold text-fg">{l.heading}</H>
        <p className="m-0 mt-0.5 truncate text-small leading-5 text-fg-muted" title={title}>{title}</p>
      </div>
      <RadioGroup label={l.access} value={access} onChange={(v) => onAccessChange(v as ShareAccess)}
        options={keys.map((k) => {
          const Icon = ICON[k];
          return { value: k, label: <span className="inline-flex items-center gap-2"><Icon aria-hidden width={15} height={15} className="text-fg-muted" />{l.options[k].label}</span>, description: l.options[k].description };
        })} />
      {access !== "private" && link && (
        <div className="space-y-2">
          <label htmlFor={`${uid}-link`} className="block text-small leading-5 font-medium text-fg">{l.link}</label>
          <div className="flex gap-2 max-sm:flex-col">
            <input id={`${uid}-link`} readOnly value={link} onFocus={(e) => e.currentTarget.select()} aria-describedby={`${uid}-scope`}
              className="h-10 min-w-0 flex-1 rounded-field border border-line bg-sunken px-3 font-mono text-small text-fg" />
            <Button onClick={copy} variant="secondary" className="h-10 shrink-0" leading={copied ? <CheckIcon aria-hidden width={14} height={14} /> : <CopyIcon aria-hidden width={14} height={14} />}>{copied ? l.copied : l.copy}</Button>
          </div>
          <p id={`${uid}-scope`} className="m-0 text-small leading-5 text-fg-muted">{l.scope}</p>
          <span role="status" className="sr-only">{copied ? l.copied : ""}</span>
        </div>
      )}
      {access !== "private" && link && onStopSharing && (
        <InlineConfirm className="self-start" onConfirm={onStopSharing} confirmLabel={l.stop} cancelLabel={l.keep} question={l.stopQuestion} tone="danger">{l.stop}</InlineConfirm>
      )}
    </section>
  );
}
```
