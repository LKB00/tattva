## tattva/organisms/LikenessConsent.tsx

```tsx
import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { AlertIcon, ApproveIcon, CameraIcon, HistoryIcon, InfoIcon, LockIcon, MicIcon, ShieldIcon, SparkleIcon, XIcon } from "../lib/icons";
import { headingTag, subHeadingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { AttentionDot } from "../atoms/AttentionDot";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Callout } from "../molecules/Callout";
import { InlineConfirm } from "../molecules/InlineConfirm";
import { RadioGroup } from "../molecules/RadioGroup";
import { VoiceConsentCheck, type VoiceConsentCheckProps } from "./VoiceConsentCheck";

export type LikenessStatus =
  | "notRequested" | "pending" | "expired" | "recording" | "reviewing"
  | "accepted" | "rejected" | "revoked" | "notRealPerson";
export type LikenessKind = "face" | "voice" | "faceAndVoice";
export type LikenessAudience = "onlyMe" | "approved" | "workspace" | "anyone";

export interface LikenessUse { who: string; what: string; when: string }

export interface LikenessConsentProps {
  /** The person whose face or voice it is, for example "Asha Rao". For a made-up avatar, its name. */
  subjectName: string;
  kind?: LikenessKind;
  status: LikenessStatus;
  /** How long the consent link has left, worked out by your code and written in words, for example "23 hours". Links last 24 hours. */
  linkExpiresIn?: string;
  /** Why the recording was not accepted, in plain words. */
  rejectionReason?: string;
  /** When consent was given or revoked, written by your code, for example "2 October". */
  decidedOn?: string;
  /** Who may use the likeness. Starts at the narrowest choice. */
  audience?: LikenessAudience;
  onAudienceChange?: (audience: LikenessAudience) => void;
  /** Audience choices to offer, in order. Leave "anyone" out unless your product allows it. */
  audienceOptions?: LikenessAudience[];
  /** True when the viewer is the person in the likeness (or its owner) and may change who uses it or revoke it. */
  canManage?: boolean;
  /** Where it has been used, newest first. The owner is told each time. */
  usage?: LikenessUse[];
  /** Send the subject a link to record on their own device. Also "Send a new link" after expiry or rejection. */
  onSendLink?: () => void;
  /** The subject is here: record on this device instead of sending a link. */
  onRecordHere?: () => void;
  /** Withdraw a pending request. */
  onCancelRequest?: () => void;
  onRevoke?: () => void;
  /** Props for the recording step, passed to VoiceConsentCheck with subject="likeness". Needed when status is "recording". */
  check?: Omit<VoiceConsentCheckProps, "subject" | "headingLevel">;
  /** Set when avatars of real people are not allowed where the viewer is. Nothing can be requested and the message says why. */
  region?: { allowed: boolean; message?: string };
  headingLevel?: HeadingLevel;
  className?: string;
}

const kindWords: Record<LikenessKind, { thing: string; Icon: typeof CameraIcon }> = {
  face: { thing: "face", Icon: CameraIcon },
  voice: { thing: "voice", Icon: MicIcon },
  faceAndVoice: { thing: "face and voice", Icon: CameraIcon },
};

const audienceText: Record<LikenessAudience, { label: string; description: string }> = {
  onlyMe: { label: "Only the person in it", description: "Nobody else can pick this likeness." },
  approved: { label: "People they approve", description: "Each person is approved by name." },
  workspace: { label: "Everyone in this workspace", description: "Anyone on the team can use it in their takes." },
  anyone: { label: "Anyone with the link", description: "Widest choice. Hard to keep track of." },
};

const stepNames = ["Ask", "Record", "Review", "Ready"] as const;
const stepOf: Partial<Record<LikenessStatus, number>> = { notRequested: 0, pending: 1, expired: 1, recording: 1, reviewing: 2, rejected: 2, accepted: 3 };

/**
 * Consent for using a real person's face or voice in avatars and takes. The person records it themselves (a link to their
 * own phone, or here with VoiceConsentCheck), the link lasts 24 hours, and the status is always written out. The person
 * in it decides who may use it and can revoke it, and every use is listed. Amber shows only while that person still has
 * to act. There is no way to make a likeness from an uploaded photo.
 */
export function LikenessConsent({
  subjectName, kind = "faceAndVoice", status, linkExpiresIn, rejectionReason, decidedOn, audience = "onlyMe", onAudienceChange,
  audienceOptions = ["onlyMe", "approved", "workspace"], canManage = false, usage = [], onSendLink, onRecordHere, onCancelRequest, onRevoke,
  check, region, headingLevel = 2, className,
}: LikenessConsentProps) {
  const H = headingTag(headingLevel);
  const H2 = subHeadingTag(headingLevel);
  const headId = useId();
  const headRef = useRef<HTMLHeadingElement>(null);
  const first = subjectName.split(" ")[0];
  const { thing, Icon } = kindWords[kind];
  const blockedRegion = region && !region.allowed;

  // When the status changes and the pressed button went away, start keyboard and screen reader users at the heading.
  // A change that arrives from elsewhere (the subject accepted) never takes focus from what the viewer is doing.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    const a = document.activeElement;
    if (!a || a === document.body || !a.isConnected) headRef.current?.focus({ preventScroll: true });
  }, [status]);

  const badge: Record<LikenessStatus, ReactNode> = {
    notRequested: <Badge>Not requested</Badge>,
    pending: <Badge tone="warning"><span aria-hidden className="size-1.5 shrink-0 rounded-full bg-attention" />Waiting for {first}</Badge>,
    expired: <Badge><HistoryIcon width={12} height={12} />Link expired</Badge>,
    recording: <Badge tone="warning"><span aria-hidden className="size-1.5 shrink-0 rounded-full bg-attention" />{first} is recording</Badge>,
    reviewing: <Badge><ShieldIcon width={12} height={12} />Checking the recording</Badge>,
    accepted: <Badge tone="success"><ApproveIcon width={12} height={12} />Consent given</Badge>,
    rejected: <Badge tone="danger"><AlertIcon width={12} height={12} />Not accepted</Badge>,
    revoked: <Badge><LockIcon width={12} height={12} />Revoked</Badge>,
    notRealPerson: <Badge><SparkleIcon width={12} height={12} />Not a real person</Badge>,
  };

  const heading =
    status === "notRequested" ? `Ask ${first} for consent`
    : status === "pending" ? `Waiting for ${first} to record`
    : status === "expired" ? "The link expired"
    : status === "recording" ? `${first} is recording`
    : status === "reviewing" ? "Checking the recording"
    : status === "accepted" ? `${first} said yes`
    : status === "rejected" ? "The recording was not accepted"
    : status === "revoked" ? `${first} withdrew consent`
    : "Made-up avatar";

  const announce =
    status === "pending" ? `Waiting for ${first} to record.${linkExpiresIn ? ` The link expires in ${linkExpiresIn}.` : ""}`
    : status === "accepted" ? `${first} gave consent.`
    : status === "rejected" ? "The recording was not accepted."
    : status === "revoked" ? "Consent revoked. The likeness can no longer be used."
    : status === "expired" ? "The link expired."
    : status === "reviewing" ? "Checking the recording."
    : "";

  const step = stepOf[status];
  const usable = status === "accepted" || status === "notRealPerson";

  return (
    <section aria-labelledby={headId}
      className={cn("flex w-full min-w-0 flex-col gap-4 rounded-card border border-line bg-surface p-4 sm:p-6", className)}>
      <header className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="flex min-w-0 items-center gap-2 text-small leading-4.5 text-fg-muted">
            <Icon width={14} height={14} className="shrink-0" />
            <span className="truncate">{status === "notRealPerson" ? `Avatar: ${subjectName}` : `${subjectName}'s ${thing}`}</span>
          </p>
          {badge[status]}
        </div>
        {step !== undefined && (
          <ol aria-label="Steps" className="flex gap-1">
            {stepNames.map((n, i) => (
              <li key={n} aria-current={i === step ? "step" : undefined} className="flex-1 space-y-1">
                <span className={cn("block h-1 rounded-full", i < step || (i === step && status === "accepted") ? "bg-fg" : i === step ? "bg-fg-muted" : "bg-line")} />
                <span className={cn("block text-small leading-4.5", i === step ? "font-medium text-fg" : "text-fg-subtle")}>
                  {n}<span className="sr-only">{i < step || status === "accepted" ? ", done" : i === step ? ", current" : ""}</span>
                </span>
              </li>
            ))}
          </ol>
        )}
        <H id={headId} ref={headRef} tabIndex={-1} className="text-subhead font-semibold text-fg outline-none">{heading}</H>
      </header>

      {blockedRegion && status !== "notRealPerson" && (
        <Callout tone="info" title="Not available where you are">
          {region?.message ?? "Avatars of real people are not offered in your region. Made-up avatars still work."}
        </Callout>
      )}

      {status === "notRequested" && !blockedRegion && (
        <div className="space-y-2 text-compact text-fg">
          <p>{first} records a short video on their own device and reads a few lines aloud. That recording is the consent. A photo is not enough.</p>
          <p className="text-fg-muted">The link lasts 24 hours. {first} can say no, and can withdraw consent at any time later.</p>
        </div>
      )}

      {status === "pending" && (
        <div className="space-y-2 text-compact text-fg">
          <p className="flex items-start gap-2"><span className="mt-1.5 flex shrink-0"><AttentionDot label={`Needs ${first}`} /></span>
            <span>We sent {first} a link to record on their phone.{linkExpiresIn ? ` It expires in ${linkExpiresIn}.` : " It lasts 24 hours."}</span></p>
          <p className="text-fg-muted">Nothing can be made with this likeness until {first} records and agrees.</p>
        </div>
      )}

      {status === "expired" && (
        <p className="text-compact text-fg">{first} did not record within 24 hours, so the link stopped working. Nothing was saved. Send a new link if you still need it.</p>
      )}

      {status === "recording" && (check
        ? <VoiceConsentCheck {...check} subject="likeness" headingLevel={Math.min(headingLevel + 1, 6) as HeadingLevel} className="border-0 p-0 sm:p-0" />
        : <p className="text-compact text-fg-muted">{first} is recording on their own device. This updates when they finish.</p>)}

      {status === "reviewing" && (
        <p className="text-compact text-fg-muted">We are checking that the person in the video read the lines and agreed. This usually takes a minute. You can leave this page.</p>
      )}

      {status === "rejected" && (
        <div className="space-y-2 text-compact text-fg">
          <p>{rejectionReason ?? "The recording did not show clear agreement."}</p>
          <p className="text-fg-muted">Nothing was made from it. {first} can record again with a new link.</p>
        </div>
      )}

      {status === "revoked" && (
        <div className="space-y-2 text-compact text-fg">
          <p>{decidedOn ? `On ${decidedOn}, ${first}` : first} withdrew consent. Nobody can use this likeness in new takes.</p>
          <p className="text-fg-muted">Takes already made stay in their projects, labelled as using a withdrawn likeness. Ask {first} again to use it.</p>
        </div>
      )}

      {status === "notRealPerson" && (
        <p className="text-compact text-fg">This avatar was made from a description, not from a real person, so nobody's consent is needed. It cannot be changed to look or sound like a real person.</p>
      )}

      {status === "accepted" && (
        <p className="text-compact text-fg">{first} recorded and agreed{decidedOn ? ` on ${decidedOn}` : ""}. Only {first} can change who uses it or withdraw it.</p>
      )}

      {usable && (
        <div className="space-y-3 border-t border-line pt-4">
          {canManage && onAudienceChange
            ? <RadioGroup label="Who can use it" value={audience} onChange={(v) => onAudienceChange(v as LikenessAudience)}
                options={audienceOptions.map((a) => ({ value: a, ...audienceText[a] }))} />
            : <div className="space-y-1">
                <H2 className="text-body leading-5 font-medium text-fg">Who can use it</H2>
                <p className="text-compact text-fg">{audienceText[audience].label}</p>
                {status === "accepted" && !canManage && <p className="text-small leading-4.5 text-fg-muted">Only {first} can change this.</p>}
              </div>}
        </div>
      )}

      {(status === "accepted" || status === "revoked") && (
        <div className="space-y-2 border-t border-line pt-4">
          <H2 className="text-body leading-5 font-medium text-fg">Where it was used</H2>
          {usage.length === 0
            ? <p className="text-compact text-fg-muted">Not used yet. {first} is told each time someone uses it.</p>
            : <>
                <p className="text-small leading-4.5 text-fg-muted">Used in {usage.length} {usage.length === 1 ? "take" : "takes"}. {first} is told each time.</p>
                <ul className="divide-y divide-line">
                  {usage.map((u, i) => (
                    <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-3 py-1.5 text-compact">
                      <span className="min-w-0 text-fg">{u.who} <span className="text-fg-muted">used it in</span> {u.what}</span>
                      <span className="text-small leading-4.5 text-fg-muted">{u.when}</span>
                    </li>
                  ))}
                </ul>
              </>}
        </div>
      )}

      {(() => {
        const actions: ReactNode[] = [];
        if (!blockedRegion && (status === "notRequested" || status === "expired" || status === "rejected" || status === "revoked")) {
          if (onSendLink) actions.push(<Button key="send" onClick={onSendLink}>{status === "notRequested" ? `Send ${first} a link` : "Send a new link"}</Button>);
          if (onRecordHere) actions.push(<Button key="here" variant="secondary" leading={<Icon width={14} height={14} />} onClick={onRecordHere}>{first} is here: record now</Button>);
        }
        if (status === "pending") {
          if (onSendLink) actions.push(<Button key="resend" variant="secondary" onClick={onSendLink}>Send the link again</Button>);
          if (onRecordHere) actions.push(<Button key="here" variant="secondary" leading={<Icon width={14} height={14} />} onClick={onRecordHere}>{first} is here: record now</Button>);
          if (onCancelRequest) actions.push(<Button key="cancel" variant="ghost" leading={<XIcon width={14} height={14} />} onClick={onCancelRequest}>Cancel request</Button>);
        }
        if (status === "accepted" && canManage && onRevoke) {
          actions.push(<InlineConfirm key="revoke" tone="danger" confirmLabel="Revoke" cancelLabel="Keep it" onConfirm={onRevoke}
            question={`Stop all new use of ${first}'s ${thing}?`}>Revoke consent</InlineConfirm>);
        }
        return actions.length ? <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4 max-sm:[&>button]:flex-1">{actions}</div> : null;
      })()}

      {status !== "recording" && status !== "notRealPerson" && <p className="flex items-start gap-2 text-small leading-4.5 text-fg-subtle"><InfoIcon width={14} height={14} className="mt-0.5 shrink-0" />
        Consent covers this workspace only. It does not give anyone ownership of {first}'s likeness.</p>}
      <p role="status" className="sr-only">{announce}</p>
    </section>
  );
}
```
