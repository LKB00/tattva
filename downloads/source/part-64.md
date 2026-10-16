## tattva/organisms/GenUIRenderer.tsx

```tsx
import { Component, useRef, useState, type ErrorInfo, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { catalogByType, needsConfirmation, validateNode, type CatalogEntry, type GenUIActionType, type RenderContext } from "./genui/catalog";
import type { SpecNode, SpecState } from "./genui/spec";

export type { GenUIActionType };

/** What the person did, sent back to the agent. */
export interface GenUIActionEvent {
  /** Unique per action. Pass it back as `pendingActionId` while the agent is working on it. */
  actionId: string;
  nodeId: string;
  type: GenUIActionType;
  value: unknown;
}

export interface GenUIRendererLabels {
  /** Heading of a part that could not be shown. */
  fallbackTitle?: string;
  /** Text under a loading part, for screen readers. */
  loading?: string;
  /** Question in the confirm step. */
  confirmQuestion?: string;
  confirm?: string;
  cancel?: string;
  /** Shown next to a part while the agent handles its action. */
  sending?: string;
  /** Shown for a part that a node points at but that never arrived. */
  missing?: string;
}

export interface GenUIRendererProps {
  /** The spec so far. Build it with `applyChunk`. */
  state: SpecState;
  /** Called for every action the person takes. Actions that need a confirm step are sent only after the person agrees. */
  onAction?: (event: GenUIActionEvent) => void;
  /** Id of the action the agent is still handling. The part that sent it shows a waiting state and its controls are off. */
  pendingActionId?: string | null;
  labels?: GenUIRendererLabels;
  className?: string;
}

const MAX_DEPTH = 6;

/** Gathers readable text from a node's props, so a part that cannot be shown still tells the person something. */
function plainText(v: unknown, out: string[] = [], depth = 0): string[] {
  if (out.length >= 12 || depth > 3) return out;
  if (typeof v === "string") { if (v.trim()) out.push(v.trim()); }
  else if (typeof v === "number") out.push(String(v));
  else if (Array.isArray(v)) v.slice(0, 12).forEach((x) => plainText(x, out, depth + 1));
  else if (typeof v === "object" && v !== null) Object.entries(v).slice(0, 12).forEach(([k, x]) => { if (!/^(class|style|on[A-Z]|dangerously)/i.test(k)) plainText(x, out, depth + 1); });
  return out;
}

function FallbackCard({ node, reasons, title }: { node: SpecNode | { id: string }; reasons: string[]; title: string }) {
  const lines = "props" in node ? plainText(node.props) : [];
  return (
    <div role="group" aria-label={title} data-genui-fallback className="rounded-card border border-line bg-sunken p-3 text-body leading-5">
      <p className="flex items-center gap-1.5 text-small leading-4 font-medium text-fg-muted"><AlertIcon width={12} height={12} aria-hidden />{title}</p>
      {lines.length > 0 && <div className="mt-1.5 space-y-1 text-fg">{lines.map((t, i) => <p key={i} className="[overflow-wrap:anywhere]">{t}</p>)}</div>}
      {reasons.length > 0 && <p className="mt-1.5 text-small leading-4 text-fg-subtle [overflow-wrap:anywhere]">{reasons.join(". ")}.</p>}
    </div>
  );
}

/** Catches anything a part throws while drawing, and swaps in the fallback card. */
class NodeBoundary extends Component<{ resetKey: string; fallback: ReactNode; children: ReactNode }, { failed: boolean; key: string }> {
  state = { failed: false, key: this.props.resetKey };
  static getDerivedStateFromError() { return { failed: true }; }
  static getDerivedStateFromProps(p: { resetKey: string }, s: { failed: boolean; key: string }) { return p.resetKey !== s.key ? { failed: false, key: p.resetKey } : null; }
  componentDidCatch(_e: Error, _i: ErrorInfo) { /* the fallback is the report */ }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function NodeBody({ entry, props, kids, ctx }: { entry: CatalogEntry; props: Record<string, unknown>; kids: ReactNode[]; ctx: RenderContext }) {
  return <>{entry.render(props, kids, ctx)}</>;
}

function signature(n: SpecNode): string {
  try { return JSON.stringify([n.type, n.props, n.children]); } catch { return n.id; }
}

/**
 * Draws a streamed spec using only parts from the catalog. Each node is checked first. A node that is unknown, invalid
 * or throws while drawing becomes a quiet card with whatever plain text it held. Nodes still on their way show as skeletons.
 * Actions go out through `onAction`. Actions marked `confirm` wait for an inline yes. This component never throws.
 */
export function GenUIRenderer({ state, onAction, pendingActionId, labels, className }: GenUIRendererProps) {
  const l = {
    fallbackTitle: "This part could not be shown", loading: "Still loading", confirmQuestion: "Are you sure?", confirm: "Confirm", cancel: "Cancel",
    sending: "Waiting for a reply…", missing: "This part never arrived", ...labels,
  };
  const [awaiting, setAwaiting] = useState<{ nodeId: string; type: GenUIActionType; value: unknown } | null>(null);
  const [sent, setSent] = useState<Record<string, { type: GenUIActionType; value: unknown }>>({});
  const [last, setLast] = useState<{ actionId: string; nodeId: string } | null>(null);
  const counter = useRef(0);

  const send = (nodeId: string, type: GenUIActionType, value: unknown) => {
    const actionId = `${nodeId}-${++counter.current}`;
    setLast({ actionId, nodeId });
    setSent((s) => ({ ...s, [nodeId]: { type, value } }));
    try { onAction?.({ actionId, nodeId, type, value }); } catch { /* a host error must not break the screen */ }
  };

  const renderNode = (id: string, path: string[]): ReactNode => {
    const node = state.nodes[id];
    if (!node) {
      if (!state.done) return <Skeleton key={id} role="presentation" className="h-16 w-full rounded-card" />;
      return <FallbackCard key={id} node={{ id }} reasons={[]} title={l.missing} />;
    }
    if (path.includes(id) || path.length >= MAX_DEPTH) return <FallbackCard key={id} node={node} reasons={["This part is nested too deeply"]} title={l.fallbackTitle} />;

    let check: ReturnType<typeof validateNode>;
    try { check = validateNode(node); } catch { check = { ok: false, props: {}, errors: ["could not be checked"], warnings: [] }; }
    const fallback = <FallbackCard key={id} node={node} reasons={check.errors} title={l.fallbackTitle} />;
    if (!check.ok) return fallback;

    const entry = catalogByType[node.type];
    const kids = entry.canHaveChildren ? (node.children ?? []).map((c) => renderNode(c, [...path, id])) : [];
    const pending = !!pendingActionId && last?.actionId === pendingActionId && last.nodeId === id;
    const ctx: RenderContext = {
      nodeId: id, pending, sent: sent[id],
      act: (type, value) => {
        if (needsConfirmation(node.type, check.props)) setAwaiting({ nodeId: id, type, value });
        else send(id, type, value);
      },
    };
    const confirming = awaiting?.nodeId === id;
    return (
      <div key={id} data-genui-node={id} className="min-w-0">
        <NodeBoundary resetKey={signature(node)} fallback={fallback}>
          <NodeBody entry={entry} props={check.props} kids={kids} ctx={ctx} />
        </NodeBoundary>
        {pending && <p role="status" className="mt-1.5 text-small leading-4 text-fg-muted">{l.sending}</p>}
        {confirming && awaiting && (
          <ConfirmStep
            question={l.confirmQuestion} consequence={typeof check.props.consequence === "string" ? check.props.consequence : undefined}
            confirmLabel={l.confirm} cancelLabel={l.cancel}
            onConfirm={() => { const a = awaiting; setAwaiting(null); send(a.nodeId, a.type, a.value); }}
            onCancel={() => setAwaiting(null)}
          />
        )}
      </div>
    );
  };

  let body: ReactNode;
  try {
    body = state.root ? renderNode(state.root, []) : state.done ? null : <Skeleton role="presentation" className="h-16 w-full rounded-card" />;
  } catch {
    body = <FallbackCard node={{ id: "root" }} reasons={[]} title={l.fallbackTitle} />;
  }
  return (
    <div aria-busy={!state.done} className={cn("min-w-0 space-y-3", className)}>
      {body}
      {!state.done && <span role="status" className="sr-only">{l.loading}</span>}
    </div>
  );
}

/** The inline question before a consequential action. Amber, because a person has to act. */
function ConfirmStep({ question, consequence, confirmLabel, cancelLabel, onConfirm, onCancel }: {
  question: string; consequence?: string; confirmLabel: string; cancelLabel: string; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <div role="group" aria-label={question} className="mt-2 rounded-card bg-attention-soft p-3 text-body leading-5 text-attention-fg">
      <p className="font-medium">{question}</p>
      {consequence && <p className="mt-0.5">{consequence}</p>}
      <div className="mt-2 flex flex-wrap gap-2">
        <Button size="sm" autoFocus onClick={onConfirm}>{confirmLabel}</Button>
        <Button size="sm" variant="secondary" onClick={onCancel}>{cancelLabel}</Button>
      </div>
    </div>
  );
}
```

## tattva/organisms/GeneratedSurface.tsx

```tsx
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, ChevronIcon, PinIcon, RegenerateIcon, RetryIcon } from "../lib/icons";
import { Button } from "../atoms/Button";
import { Spinner } from "../atoms/Spinner";
import { AILabel } from "../molecules/AILabel";

export type GeneratedSurfaceStatus = "streaming" | "ready" | "failed";

export interface GeneratedSurfaceLabels {
  madeBy?: (source: string) => string;
  viewSpec?: string;
  hideSpec?: string;
  pin?: string;
  pinned?: string;
  regenerate?: string;
  report?: string;
  retry?: string;
  streaming?: string;
  failed?: string;
  /** Intro of the AI label's explainer. */
  overview?: string;
}

export interface GeneratedSurfaceProps {
  /** Who made this, such as "Orders helper". Always visible. */
  source: string;
  /** The generated screen, usually a GenUIRenderer. */
  children?: ReactNode;
  status?: GeneratedSurfaceStatus;
  /** The spec behind the screen. Shown as JSON under "View spec". Pass a string to show it as is. */
  spec?: unknown;
  /** Whether the screen is pinned (controlled). */
  pinned?: boolean;
  onPinnedChange?: (pinned: boolean) => void;
  onRegenerate?: () => void;
  onReport?: () => void;
  /** Called by the Try again button when status is failed. */
  onRetry?: () => void;
  /** Plain text version of the answer. Shown when status is failed, so the person still gets something. */
  fallback?: ReactNode;
  labels?: GeneratedSurfaceLabels;
  className?: string;
}

function specText(spec: unknown): string {
  if (typeof spec === "string") return spec;
  try { return JSON.stringify(spec, null, 2) ?? ""; } catch { return "The spec could not be shown."; }
}

/**
 * The frame around a generated screen. It says who made it, lets the person read the spec, pin the screen, ask for a new
 * one or report it, and falls back to plain text when generation fails. Pin and regenerate have no published source:
 * they are our own design, so treat them as experimental.
 */
export function GeneratedSurface({ source, children, status = "ready", spec, pinned, onPinnedChange, onRegenerate, onReport, onRetry, fallback, labels, className }: GeneratedSurfaceProps) {
  const l = {
    madeBy: (s: string) => `Made by ${s}`, viewSpec: "View spec", hideSpec: "Hide spec", pin: "Pin", pinned: "Pinned", regenerate: "Regenerate", report: "Report",
    retry: "Try again", streaming: "Still being made…", failed: "This screen could not be made. Here is the answer as text.",
    overview: "This screen was made by an assistant. The app checked each part before showing it.", ...labels,
  };
  const [innerPinned, setInnerPinned] = useState(false);
  const isPinned = pinned ?? innerPinned;
  const [open, setOpen] = useState(false);
  const specId = useId();
  const togglePin = () => { const v = !isPinned; if (pinned === undefined) setInnerPinned(v); onPinnedChange?.(v); };

  return (
    <section aria-label={l.madeBy(source)} className={cn("min-w-0 rounded-card border border-line bg-surface p-4", className)}>
      <header className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <AILabel level="message" size={18} text={l.madeBy(source)} overview={l.overview} />
        {status === "streaming" && <span role="status" className="inline-flex items-center gap-1.5 text-small leading-4 text-fg-muted"><span aria-hidden><Spinner /></span>{l.streaming}</span>}
        <div className="ml-auto flex flex-wrap justify-end gap-1">
          <Button size="sm" variant="ghost" aria-pressed={isPinned} onClick={togglePin} leading={<PinIcon width={14} height={14} />}>{isPinned ? l.pinned : l.pin}</Button>
          {onRegenerate && <Button size="sm" variant="ghost" onClick={onRegenerate} disabled={status === "streaming"} leading={<RegenerateIcon width={14} height={14} />}>{l.regenerate}</Button>}
          {onReport && <Button size="sm" variant="ghost" onClick={onReport}>{l.report}</Button>}
        </div>
      </header>

      <div className="mt-3 min-w-0" aria-busy={status === "streaming"}>
        {status === "failed" ? (
          <div className="space-y-3">
            <p role="alert" className="flex items-start gap-2 rounded-card bg-sunken p-3 text-body leading-5 text-fg-muted"><AlertIcon className="mt-0.5 shrink-0" aria-hidden />{l.failed}</p>
            {fallback && <div className="text-body leading-5 text-fg">{fallback}</div>}
            {onRetry && <Button size="sm" variant="secondary" onClick={onRetry} leading={<RetryIcon width={14} height={14} />}>{l.retry}</Button>}
          </div>
        ) : children}
      </div>

      {spec !== undefined && (
        <div className="mt-3 border-t border-line pt-2">
          <button type="button" aria-expanded={open} aria-controls={specId} onClick={() => setOpen(!open)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-control px-1 text-small leading-4 font-medium text-fg-muted hover:text-fg">
            <ChevronIcon width={12} height={12} className={cn("transition-transform motion-reduce:transition-none", open && "rotate-90")} aria-hidden />
            {open ? l.hideSpec : l.viewSpec}
          </button>
          <div id={specId} hidden={!open}>
            {open && <pre tabIndex={0} className="mt-2 max-h-72 overflow-auto rounded-card bg-code p-3 font-mono text-small leading-5 text-code-fg"><code>{specText(spec)}</code></pre>}
          </div>
        </div>
      )}
    </section>
  );
}
```
