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
