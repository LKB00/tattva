## tattva/molecules/CitationHoverCard.tsx

```tsx
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { GlobeIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";

export interface CitationHoverCardProps {
  /** Citation number shown in the marker. */
  n: number;
  title: string;
  domain: string;
  /** Where "Open source" goes. */
  url: string;
  snippet?: string;
  /** Trust label as text, for example "Government" or "Academic". */
  trust?: string;
  /** Favicon or any small mark. Falls back to the first letter of the domain. */
  favicon?: ReactNode;
  openLabel?: string;
  className?: string;
}

/**
 * Numbered citation that opens a source card on hover, on keyboard focus and on click or tap.
 * Click pins the card so it stays open on touch. Escape closes it and returns focus to the marker.
 */
export function CitationHoverCard({ n, title, domain, url, snippet, trust, favicon, openLabel = "Open source", className }: CitationHoverCardProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const root = useRef<HTMLSpanElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const id = useId();
  const close = () => { setOpen(false); setPinned(false); };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) close(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { close(); btn.current?.focus(); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <span ref={root} className={`relative mx-0.5 inline-block align-baseline ${className ?? ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { if (!pinned) setOpen(false); }}
      onFocus={() => setOpen(true)}
      onBlur={(e) => { if (!root.current?.contains(e.relatedTarget as Node)) close(); }}>
      <button ref={btn} type="button" aria-label={`Source ${n}: ${domain}`} aria-expanded={open} aria-controls={id}
        onClick={() => { if (open && pinned) close(); else { setOpen(true); setPinned(true); } }}
        className="inline-flex h-4 min-w-4 -translate-y-0.5 cursor-pointer items-center justify-center rounded bg-accent-soft px-1 text-nano font-semibold text-accent-fg hover:bg-accent hover:text-on-accent">
        {n}
      </button>
      {open && (
        <span id={id} role="group" aria-label={`Source ${n}: ${title}`} className="absolute bottom-full left-1/2 z-30 block w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 pb-2 max-sm:fixed max-sm:inset-x-4 max-sm:bottom-[max(1rem,var(--safe-bottom))] max-sm:left-4 max-sm:w-auto max-sm:max-w-none max-sm:translate-x-0 max-sm:pb-0">
          <span className="block animate-rise rounded-overlay border border-line bg-raised p-3 text-left text-body leading-5 font-normal shadow-lg">
            <span className="flex items-center gap-2 text-small leading-4 text-fg-subtle">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sunken text-nano font-semibold text-fg-muted" aria-hidden="true">
                {favicon ?? (domain ? domain.charAt(0).toUpperCase() : <GlobeIcon width={11} height={11} />)}
              </span>
              <span className="min-w-0 flex-1 truncate">{domain}</span>
              {trust && <Badge>{trust}</Badge>}
            </span>
            <span className="mt-2 block font-medium text-fg">{title}</span>
            {snippet && <span className="mt-1 line-clamp-3 block text-small leading-4 text-fg-muted">{snippet}</span>}
            <a href={url} target="_blank" rel="noreferrer noopener" className="mt-2.5 inline-block text-small leading-4 font-medium text-fg underline underline-offset-2">{openLabel}</a>
          </span>
        </span>
      )}
    </span>
  );
}
```

## tattva/molecules/ClaimCheck.tsx

```tsx
import { useId, useState } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, SourceIcon } from "../lib/icons";
import { Button } from "../atoms/Button";

export interface Claim {
  id: string;
  text: string;
  /** unsupported: no source backs it up. disputed: a source says otherwise. */
  status: "unsupported" | "disputed";
  /** Why it was flagged, in plain words. */
  note?: string;
}

/** Plain text, or a claim the check flagged. */
export type ClaimSegment = string | Claim;

export interface ClaimCheckLabels {
  /** Receives how many claims were flagged. */
  summary?: (n: number) => string;
  unsupported?: string;
  disputed?: string;
  askSource?: string;
  remove?: string;
  close?: string;
  /** Prefix of each mark's name, before the claim: "Why it is flagged". */
  why?: string;
}

export interface ClaimCheckProps {
  /** The reply, as plain text and flagged claims in reading order. */
  segments: ClaimSegment[];
  /** Asks the assistant to back the claim up. The button is hidden when omitted. */
  onAskSource?: (id: string) => void;
  /** Takes the claim out of the reply. The button is hidden when omitted. */
  onRemove?: (id: string) => void;
  labels?: ClaimCheckLabels;
  className?: string;
}

/**
 * A reply with the sentences no source backs up marked in place. The warning mark after each one is a button that
 * opens a short note under the reply: why it was flagged, and what to do (ask for a source, or take it out). A line above the
 * reply says how many were flagged, so nobody has to scan for the marks. Marks are a dotted underline plus a small
 * icon, never colour alone.
 */
export function ClaimCheck({ segments, onAskSource, onRemove, labels, className }: ClaimCheckProps) {
  const l = {
    summary: (n: number) => (n === 1 ? "1 claim has no source. Check it before you rely on it." : `${n} claims have no source. Check them before you rely on them.`),
    unsupported: "No source backs this up.", disputed: "A source says otherwise.", askSource: "Ask for a source", remove: "Take it out", close: "Close", why: "Why it is flagged", ...labels,
  };
  const [open, setOpen] = useState<string | null>(null);
  const uid = useId();
  const claims = segments.filter((s): s is Claim => typeof s !== "string");
  const cut = (t: string) => { const x = t.trimEnd(); const i = x.lastIndexOf(" "); return i < 0 ? 0 : i + 1; };
  const head = (t: string) => t.trimEnd().slice(0, cut(t));
  const tail = (t: string) => t.trimEnd().slice(cut(t));
  const mark = (c: Claim) => cn("rounded-sm underline decoration-dotted decoration-2 underline-offset-4", c.status === "disputed" ? "decoration-danger" : "decoration-attention", open === c.id && "bg-attention-soft");
  const current = claims.find((c) => c.id === open);
  return (
    <div className={cn("space-y-3", className)}>
      {claims.length > 0 && (
        <p className="m-0 flex items-start gap-2 text-small leading-5 text-attention-fg">
          <AlertIcon aria-hidden width={16} height={16} className="mt-0.5 shrink-0" />{l.summary(claims.length)}
        </p>
      )}
      <p className="m-0 text-body-lg leading-7 text-fg">
        {segments.map((s, i) => typeof s === "string" ? <span key={i}>{s}</span> : (
          // The claim stays ordinary text so it wraps like the words around it; the warning mark after it is the
          // button (a button cannot break across lines).
          <span key={s.id}>
            <span className={mark(s)}>{head(s.text)}</span>
            {/* The last word and the mark stay together, so the mark never starts a line on its own. */}
            <span className="whitespace-nowrap"><span className={mark(s)}>{tail(s.text)}</span><button type="button" aria-expanded={open === s.id} aria-controls={`${uid}-note`} onClick={() => setOpen(open === s.id ? null : s.id)}
              aria-label={`${s.status === "disputed" ? l.disputed : l.unsupported} ${l.why}: ${s.text}`}
              className={cn("-my-1 ml-0.5 inline-flex size-6 cursor-pointer items-center justify-center rounded-full align-middle transition-colors duration-(--dur-fast) hover:bg-attention-soft motion-reduce:transition-none",
                s.status === "disputed" ? "text-danger-fg" : "text-attention-fg", open === s.id && "bg-attention-soft")}>
              <AlertIcon aria-hidden width={14} height={14} />
            </button></span>
          </span>
        ))}
      </p>
      <div id={`${uid}-note`} aria-live="polite">
        {current && (
          <div className="rounded-control border border-attention-line bg-attention-soft p-3">
            <p className="m-0 text-small leading-5 font-medium text-fg">{current.status === "disputed" ? l.disputed : l.unsupported}</p>
            <p className="m-0 mt-1 text-small leading-5 text-fg-muted">“{current.text.trim()}”{current.note ? ` ${current.note}` : ""}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {onAskSource && <Button size="sm" variant="secondary" leading={<SourceIcon aria-hidden width={14} height={14} />} onClick={() => onAskSource(current.id)}>{l.askSource}</Button>}
              {onRemove && <Button size="sm" variant="ghost" onClick={() => { onRemove(current.id); setOpen(null); }}>{l.remove}</Button>}
              <Button size="sm" variant="ghost" onClick={() => setOpen(null)}>{l.close}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```
