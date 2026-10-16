## tattva/organisms/AgentSessionList.tsx

```tsx
import { useId, useState } from "react";
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { ChevronIcon, SendIcon } from "../lib/icons";
import { AgentStatusIcon, type AgentStatus } from "../atoms/AgentStatusIcon";
import { AIBadge } from "../atoms/AIBadge";
import { Badge } from "../atoms/Badge";
import { Button, IconButton } from "../atoms/Button";

export type SessionGroup = "needs-input" | "working" | "review" | "completed";

export interface SessionPeek {
  kind: "output" | "question";
  /** The latest output or the question the agent is waiting on. */
  text: string;
  /** How long the session has waited for a reply, such as "Waiting 12 minutes". */
  waiting?: string;
}

export interface AgentSession {
  id: string;
  name: string;
  status: AgentStatus;
  /** One-line status summary. It is shown with an AI-generated badge, so pass model-written text. */
  summary: string;
  /** Age text, such as "3m". */
  age: string;
  /** Linked pull request label, such as "#1234". */
  pr?: string;
  peek?: SessionPeek;
  /** Group override. By default needs-input, working and completed map to their own group, and idle, failed and stopped map to review. */
  group?: SessionGroup;
}

export interface AgentSessionListLabels {
  groups?: Partial<Record<SessionGroup, string>>;
  peek?: string;
  hidePeek?: string;
  reply?: string;
  send?: string;
  aiSummary?: string;
}

export interface AgentSessionListProps {
  sessions: AgentSession[];
  /** Called when the person sends a reply from the peek panel. */
  onReply?: (id: string, text: string) => void;
  labels?: AgentSessionListLabels;
  /** Level of the part's own heading, so it fits the page outline. Default 3. */
  headingLevel?: HeadingLevel;
  className?: string;
}

const order: SessionGroup[] = ["needs-input", "working", "review", "completed"];
const groupNames: Record<SessionGroup, string> = { "needs-input": "Needs input", working: "Working", review: "Ready for review", completed: "Completed" };
const defaultGroup: Record<AgentStatus, SessionGroup> = { "needs-input": "needs-input", working: "working", completed: "completed", idle: "review", failed: "review", stopped: "review" };

/**
 * Agent sessions grouped by what they need from the person. Each row shows a status icon, the name,
 * an AI-generated one-line summary, the age and an optional PR label. Peek expands the latest output
 * or question, how long it has waited, and a reply field.
 */
export function AgentSessionList({ sessions, onReply, labels, headingLevel = 3, className }: AgentSessionListProps) {
  const l = { peek: "Peek", hidePeek: "Close peek", reply: "Reply", send: "Send reply", aiSummary: "AI-generated", ...labels };
  const names = { ...groupNames, ...labels?.groups };
  const uid = useId();
  const H = headingTag(headingLevel);
  const [open, setOpen] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [announce, setAnnounce] = useState("");

  const send = (s: AgentSession) => {
    const text = (drafts[s.id] ?? "").trim();
    if (!text) return;
    onReply?.(s.id, text);
    setDrafts({ ...drafts, [s.id]: "" });
    setAnnounce(`Reply sent to ${s.name}`);
  };

  return (
    <div className={cn("space-y-5", className)}>
      {order.map((g) => {
        const rows = sessions.filter((s) => (s.group ?? defaultGroup[s.status]) === g);
        if (!rows.length) return null;
        const hid = `${uid}-group-${g}`;
        return (
          <section key={g} aria-labelledby={hid}>
            <H id={hid} className="mb-1.5 flex items-center gap-2 px-1 font-sans text-small leading-4 font-medium tracking-wide text-fg-muted uppercase">
              {names[g]}
              <Badge>{rows.length}<span className="sr-only"> {rows.length === 1 ? "session" : "sessions"}</span></Badge>
            </H>
            <ul className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
              {rows.map((s) => {
                const isOpen = open === s.id;
                const panel = `${uid}-peek-${s.id}`;
                return (
                  <li key={s.id} className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <AgentStatusIcon status={s.status} />
                      <span className="min-w-0 text-body leading-5 font-medium">{s.name}</span>
                      {s.pr && <Badge>{s.pr}</Badge>}
                      <span className="ml-auto text-small leading-4 text-fg-subtle tabular-nums">{s.age}</span>
                      {s.peek && (
                        <Button size="sm" variant="ghost" aria-expanded={isOpen} aria-controls={panel} onClick={() => setOpen(isOpen ? null : s.id)}
                          trailing={<ChevronIcon width={12} height={12} className={cn("transition-transform", isOpen && "rotate-90")} />}>
                          {isOpen ? l.hidePeek : l.peek}<span className="sr-only">: {s.name}</span>
                        </Button>
                      )}
                    </div>
                    <p className="mt-1 flex flex-wrap items-center gap-2 pl-7 text-small leading-4 text-fg-muted">
                      <span>{s.summary}</span>
                      <AIBadge label={l.aiSummary} />
                    </p>
                    {s.peek && isOpen && (
                      <div id={panel} className="mt-3 ml-7 space-y-2 rounded-card bg-sunken p-3">
                        <p className="text-small leading-4 font-medium text-fg-subtle">
                          {s.peek.kind === "question" ? "Question" : "Latest output"}
                          {s.peek.waiting && <span className="font-normal"> · {s.peek.waiting}</span>}
                        </p>
                        <p className={cn("text-body leading-5", s.peek.kind === "output" && "font-mono text-small leading-5")}>{s.peek.text}</p>
                        <form className="flex items-center gap-2" onSubmit={(e) => { e.preventDefault(); send(s); }}>
                          <label className="sr-only" htmlFor={`${uid}-reply-${s.id}`}>{l.reply}: {s.name}</label>
                          <input id={`${uid}-reply-${s.id}`} value={drafts[s.id] ?? ""} onChange={(e) => setDrafts({ ...drafts, [s.id]: e.target.value })} placeholder={`${l.reply}…`}
                            className="h-9 min-w-0 flex-1 rounded-field border border-line bg-surface px-4 text-body leading-5 placeholder:text-fg-subtle" />
                          <IconButton type="submit" variant="primary" label={`${l.send}: ${s.name}`}><SendIcon width={14} height={14} /></IconButton>
                        </form>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
      <p role="status" aria-live="polite" className="sr-only">{announce}</p>
    </div>
  );
}
```

## tattva/organisms/ApprovalPrompt.tsx

```tsx
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { ShieldIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export type Risk = "low" | "medium" | "high";

export interface ApprovalPromptProps {
  action: string;
  /** Exactly what will happen, in plain language. Show real values, not placeholders. */
  detail: ReactNode;
  risk?: Risk;
  onApprove: () => void;
  onDeny: () => void;
  onAlways?: () => void;
}

/**
 * Human-in-the-loop gate for consequential agent actions. Deny is always as easy as approve.
 * Amber means a person must act, so low risk uses the neutral sunken surface, medium uses the attention surface,
 * and high uses the attention surface with a danger badge. The risk is always written out as text.
 */
export function ApprovalPrompt({ action, detail, risk = "medium", onApprove, onDeny, onAlways }: ApprovalPromptProps) {
  return (
    <div role="alertdialog" aria-label={`Approval needed: ${action}`} className={cn("rounded-card border p-4", risk === "low" ? "border-line bg-sunken" : "border-warning-line bg-warning-soft")}>
      <div className="flex items-center gap-2">
        <ShieldIcon className={risk === "low" ? "text-fg-muted" : "text-warning-fg"} />
        <p className="flex-1 text-body leading-5 font-medium">{action}</p>
        <Badge tone={risk === "high" ? "danger" : risk === "medium" ? "warning" : "neutral"}>{risk} risk</Badge>
      </div>
      <div className="mt-2 text-body leading-5 text-fg-muted">{detail}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" onClick={onApprove}>Approve</Button>
        <Button size="sm" variant="secondary" onClick={onDeny}>Deny</Button>
        {onAlways && risk === "low" && <Button size="sm" variant="ghost" onClick={onAlways}>Always allow</Button>}
      </div>
    </div>
  );
}
```
