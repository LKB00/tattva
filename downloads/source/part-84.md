## tattva/organisms/RiskLimits.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { MeterBar } from "../atoms/MeterBar";
import { cn } from "../lib/cn";
import { useFocusAfter } from "../lib/useFocusAfter";
import { InfoIcon, LockIcon, StopIcon } from "../lib/icons";

export interface RiskLimit {
  id: string;
  label: string;
  used: number;
  max: number;
  /** Text after the numbers, such as "trades". */
  unit?: string;
  /** Formats a number for display, such as a money format. The app owns money formatting. */
  format?: (n: number) => string;
}

export interface RiskLimitsProps {
  limits: RiskLimit[];
  /** True when trading is stopped. Every limit then says "Paused". */
  paused?: boolean;
  /** Why it is paused, in words. */
  pausedReason?: string;
  /** The kill switch. It asks once, in place, before calling this. Not shown while paused. */
  onKill?: () => void;
  killLabel?: string;
  /** A line of reassurance under the limits, such as "Exits are never blocked." */
  note?: ReactNode;
  className?: string;
}

const plain = (n: number) => n.toLocaleString("en-IN");

/** The limits that protect the person, each with a meter in words and numbers, and a kill switch that asks in place. */
export function RiskLimits({ limits, paused, pausedReason, onKill, killLabel = "Stop all trading", note, className }: RiskLimitsProps) {
  const uid = useId();
  const headId = `${uid}-head`, askId = `${uid}-ask`;
  const [asking, setAsking] = useState(false);
  // Button takes no ref, so focus is found through these wrappers.
  const killWrap = useRef<HTMLDivElement>(null);
  const keepWrap = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const back = useRef(false);
  const arm = useFocusAfter(paused, () => heading.current);

  useEffect(() => { if (asking) keepWrap.current?.querySelector<HTMLButtonElement>("button")?.focus(); }, [asking]);
  useEffect(() => { if (!asking && back.current) { back.current = false; killWrap.current?.querySelector<HTMLButtonElement>("button")?.focus(); } }, [asking]);

  const close = () => { back.current = true; setAsking(false); };
  const stop = () => { arm(); setAsking(false); onKill?.(); };
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); close(); } };

  return (
    <section aria-labelledby={headId} className={cn("flex w-full max-w-phone flex-col gap-4 rounded-card border border-line bg-surface p-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <h3 id={headId} ref={heading} tabIndex={-1} className="text-lead leading-6 font-semibold text-fg">Risk limits</h3>
        {paused && <Badge tone="unsure"><LockIcon aria-hidden width={12} height={12} />Paused</Badge>}
      </div>
      {paused && pausedReason && <p className="text-body leading-5 text-fg-muted">{pausedReason}</p>}
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {limits.map((l) => {
          const fmt = l.format ?? plain;
          const ratio = l.max > 0 ? l.used / l.max : 0;
          const reached = ratio >= 1, near = !reached && ratio >= 0.8;
          const text = `${fmt(l.used)} of ${fmt(l.max)}${l.unit ? ` ${l.unit}` : ""}`;
          return (
            <li key={l.id} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3 text-body leading-5">
                <span className="font-medium text-fg">{l.label}</span>
                <span className="text-fg-muted tabular-nums">{text}</span>
              </div>
              <MeterBar value={Math.min(l.used, l.max)} max={l.max} label={l.label} valueText={text} />
              <div className="flex flex-wrap gap-1.5 empty:hidden">
                {reached && <Badge tone="unsure"><LockIcon aria-hidden width={12} height={12} />Limit reached</Badge>}
                {near && <Badge tone="unsure"><InfoIcon aria-hidden width={12} height={12} />Near the limit</Badge>}
                {paused && <Badge tone="neutral"><LockIcon aria-hidden width={12} height={12} />Paused</Badge>}
              </div>
            </li>
          );
        })}
      </ul>
      {note && <p className="text-body leading-5 text-fg-muted">{note}</p>}
      {onKill && !paused && (asking ? (
        <div role="group" aria-labelledby={askId} onKeyDown={onKey} className="flex flex-col gap-3 rounded-card border border-line-strong bg-sunken p-3">
          <p id={askId} className="text-body leading-5 text-fg">{killLabel}? This pauses new orders. Exits stay open.</p>
          <div className="flex gap-2">
            <Button variant="secondary" size="lg" className="flex-1 pointer-coarse:h-12" onClick={stop}>Stop trading</Button>
            <div ref={keepWrap} className="flex flex-1"><Button variant="secondary" size="lg" className="w-full pointer-coarse:h-12" onClick={close}>Keep trading</Button></div>
          </div>
        </div>
      ) : (
        <div ref={killWrap} className="flex"><Button variant="secondary" size="lg" className="w-full pointer-coarse:h-12" leading={<StopIcon aria-hidden width={14} height={14} />} onClick={() => setAsking(true)}>{killLabel}</Button></div>
      ))}
      <p role="status" aria-live="polite" className="sr-only">{paused ? `Trading is paused.${pausedReason ? ` ${pausedReason}` : ""}` : ""}</p>
    </section>
  );
}
```

## tattva/organisms/SandboxedFrame.tsx

```tsx
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { ShieldIcon } from "../lib/icons";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export type SandboxPermission = "open-links" | "call-tools";

/**
 * Messages the page inside the frame may send. Anything else is ignored.
 *  { type: "tattva:resize", height: number }
 *  { type: "tattva:open-link", url: string }
 *  { type: "tattva:call-tool", id?: string, name: string, args?: object }
 * The host answers a tool request with { type: "tattva:tool-result", id, ok: boolean }.
 */
export const SANDBOX_MESSAGES = { resize: "tattva:resize", openLink: "tattva:open-link", callTool: "tattva:call-tool", toolResult: "tattva:tool-result" } as const;

export interface SandboxedFrameLabels {
  generatedBy?: (source: string) => string;
  whatItCanDo?: string;
  allow?: string;
  deny?: string;
}

export interface SandboxedFrameProps {
  /** Who made the page. Always visible. */
  source: string;
  /** Name of the frame for screen readers, for example "Trip budget calculator". */
  title: string;
  /** The page as a string. Runs with no access to this site. Use this or `src`. */
  srcDoc?: string;
  /** Address of a page on another origin. Use this or `srcDoc`. */
  src?: string;
  /** What the page may ask to do. Each one still needs a yes from the person every time. Default none. */
  permissions?: SandboxPermission[];
  /** Tool names the page may ask for. Requests for other names are ignored. */
  allowedTools?: string[];
  /** Called after the person agrees to open a link. Default opens it in a new tab with no link back to this site. */
  onOpenLink?: (url: string) => void;
  /** Called after the person agrees to a tool request. May return a promise. A rejected promise tells the page it failed. */
  onCallTool?: (name: string, args: Record<string, unknown>) => unknown | Promise<unknown>;
  minHeight?: number;
  maxHeight?: number;
  /** Start height in px. */
  initialHeight?: number;
  /** Let scripts send forms. Off by default. */
  allowForms?: boolean;
  /**
   * Gives the page this site's origin, which lets it read everything the site can. Almost never right for generated pages.
   * Off by default. Never turn it on together with `srcDoc` for pages you did not write.
   */
  allowSameOrigin?: boolean;
  /** Overrides the plain-language line under the frame. */
  summary?: string;
  labels?: SandboxedFrameLabels;
  className?: string;
}

type Request = { kind: "link"; url: string } | { kind: "tool"; id?: string; name: string; args: Record<string, unknown> };

const permissionText: Record<SandboxPermission, string> = { "open-links": "Ask to open a link", "call-tools": "Ask the assistant to do something for you" };

const permissionSentence: Record<SandboxPermission, string> = { "open-links": "ask to open a link", "call-tools": "ask the assistant to do something for you" };

function webUrl(v: unknown): string | null {
  if (typeof v !== "string") return null;
  try { const u = new URL(v); return u.protocol === "https:" || u.protocol === "http:" ? u.href : null; } catch { return null; }
}

function originOf(src?: string): string | null {
  if (!src) return null;
  try { return new URL(src, window.location.href).origin; } catch { return null; }
}

/**
 * Runs a page made by someone else, such as a generated mini app, inside a locked box. The box has no access to this
 * site's data and cannot open links or call tools on its own. It can only send a few messages, and the host checks
 * each one: who sent it, where it came from, and whether the person agrees. Use it when a catalog part cannot do the job.
 */
export function SandboxedFrame({
  source, title, srcDoc, src, permissions = [], allowedTools = [], onOpenLink, onCallTool, minHeight = 120, maxHeight = 640, initialHeight = 240,
  allowForms = false, allowSameOrigin = false, summary, labels, className,
}: SandboxedFrameProps) {
  const l = { generatedBy: (s: string) => `Generated by ${s}`, whatItCanDo: "What this can do", allow: "Allow", deny: "Don't allow", ...labels };
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(() => Math.min(maxHeight, Math.max(minHeight, initialHeight)));
  const [request, setRequest] = useState<Request | null>(null);
  const requestRef = useRef<Request | null>(null);
  requestRef.current = request;
  const expectedOrigin = srcDoc !== undefined ? "null" : originOf(src);

  const tokens = ["allow-scripts", ...(allowForms ? ["allow-forms"] : []), ...(allowSameOrigin ? ["allow-same-origin"] : [])].join(" ");

  const reply = useCallback((msg: Record<string, unknown>) => {
    const target = expectedOrigin && expectedOrigin !== "null" ? expectedOrigin : "*";
    try { frame.current?.contentWindow?.postMessage(msg, target); } catch { /* the frame is gone */ }
  }, [expectedOrigin]);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      // Only the frame we made, from the origin we expect.
      if (!frame.current || e.source !== frame.current.contentWindow) return;
      if (expectedOrigin === null || e.origin !== expectedOrigin) return;
      const d: unknown = e.data;
      if (typeof d !== "object" || d === null || Array.isArray(d)) return;
      const m = { ...(d as Record<string, unknown>) };
      // Frames written before the rename send "sandstone:*"; read them as the same messages.
      if (typeof m.type === "string") m.type = m.type.replace(/^sandstone:/, "tattva:");
      if (m.type === SANDBOX_MESSAGES.resize) {
        if (typeof m.height === "number" && Number.isFinite(m.height)) setHeight(Math.min(maxHeight, Math.max(minHeight, Math.round(m.height))));
      } else if (m.type === SANDBOX_MESSAGES.openLink) {
        const url = webUrl(m.url);
        if (url && permissions.includes("open-links") && !requestRef.current) setRequest({ kind: "link", url });
      } else if (m.type === SANDBOX_MESSAGES.callTool) {
        if (typeof m.name === "string" && permissions.includes("call-tools") && allowedTools.includes(m.name) && !requestRef.current) {
          setRequest({ kind: "tool", id: typeof m.id === "string" ? m.id : undefined, name: m.name, args: typeof m.args === "object" && m.args !== null && !Array.isArray(m.args) ? (m.args as Record<string, unknown>) : {} });
        }
      }
      // Anything else is ignored on purpose.
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [expectedOrigin, maxHeight, minHeight, permissions, allowedTools]);

  const allowRequest = async () => {
    const r = request;
    setRequest(null);
    if (!r) return;
    if (r.kind === "link") {
      if (onOpenLink) onOpenLink(r.url); else window.open(r.url, "_blank", "noopener,noreferrer");
      return;
    }
    let ok = true;
    try { await onCallTool?.(r.name, r.args); } catch { ok = false; }
    if (r.id) reply({ type: SANDBOX_MESSAGES.toolResult, id: r.id, ok });
  };
  const denyRequest = () => {
    const r = request;
    setRequest(null);
    if (r?.kind === "tool" && r.id) reply({ type: SANDBOX_MESSAGES.toolResult, id: r.id, ok: false });
  };

  const can = permissions.length
    ? `This page runs in a locked box and cannot see your account. It can ${permissions.map((p) => permissionSentence[p]).join(" and ")}, and it asks you every time.`
    : "This page runs in a locked box and cannot see your account. It can only show things on this screen.";

  return (
    <section aria-label={l.generatedBy(source)} className={cn("min-w-0 rounded-card border border-line bg-surface p-3", className)}>
      <header className="flex flex-wrap items-center gap-2 px-1 pb-2">
        <Badge><ShieldIcon width={11} height={11} aria-hidden />{l.generatedBy(source)}</Badge>
        {permissions.length > 0 && (
          <ul aria-label="Permissions this page asked for" className="flex flex-wrap gap-1">
            {permissions.map((p) => <li key={p}><Badge tone="info">{permissionText[p]}</Badge></li>)}
          </ul>
        )}
      </header>
      <iframe
        ref={frame} title={title} sandbox={tokens} srcDoc={srcDoc} src={srcDoc === undefined ? src : undefined}
        referrerPolicy="no-referrer" allow="" loading="lazy" style={{ height }}
        className="block w-full max-w-full rounded-card border border-line bg-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
      />
      {request && (
        <div role="group" aria-label="This page is asking for permission" className="mt-2 rounded-card bg-attention-soft p-3 text-body leading-5 text-attention-fg">
          <p className="font-medium">
            {request.kind === "link" ? "This page wants to open a link." : `This page wants the assistant to do this: ${request.name}.`}
          </p>
          {request.kind === "link" && <p className="mt-0.5 [overflow-wrap:anywhere]">{request.url}</p>}
          <div className="mt-2 flex flex-wrap gap-2">
            <Button size="sm" autoFocus onClick={allowRequest}>{l.allow}</Button>
            <Button size="sm" variant="secondary" onClick={denyRequest}>{l.deny}</Button>
          </div>
        </div>
      )}
      <p className="mt-2 px-1 text-small leading-4 text-fg-muted"><span className="font-medium text-fg">{l.whatItCanDo}.</span> {summary ?? can}</p>
    </section>
  );
}
```
