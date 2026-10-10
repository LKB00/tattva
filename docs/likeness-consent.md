# LikenessConsent
Ask for, track and control a real person's consent to use their face or voice in avatars.
Status: stable. Page: https://lkb00.github.io/tattva/#component-likeness-consent
LikenessConsent follows one person's consent from asking to using: not requested, pending (a link that lasts 24 hours), recording, checking, accepted, rejected, expired and revoked, plus not a real person for made-up avatars. The person records it themselves, on their own phone or here through VoiceConsentCheck with subject="likeness"; there is no way to start from a photo. Once accepted, the person in it chooses who may use it, sees every use, and can revoke it. Amber shows only while that person still has to act.
## When to use it

Makes using a real person's likeness depend on that person's own recorded, scoped and revocable consent.

## Use it for

- Creating an avatar of a teammate or presenter.
- Cloning a person's voice for video narration (kind="voice").
- A settings page where people see and control their own likeness.

## Not for

- The live recording check on its own: use `voice-consent-check`
- Approving one action an agent wants to take: use `approval-prompt`
- Asking for camera or mic permission: use `permission-prompt`

## Anatomy

- Whose likeness and status badge
- Steps (Ask, Record, Review, Ready)
- Heading
- Status text
- Recording (VoiceConsentCheck)
- Who can use it
- Where it was used
- Actions
- Scope note

## Do

- Have the person record their own consent, and let it expire after 24 hours if they do not.
- Start who-can-use-it at the narrowest choice.
- List every use and tell the person each time.
- Say what happens to takes already made when consent is revoked.

## Avoid

- Do not make a likeness from an uploaded photo of a real person.
- Do not use amber once the person has acted. Accepted, rejected and revoked are not waiting on anyone.
- Do not let anyone but the person in it widen who may use it.
- Do not reduce consent to a terms checkbox.

## On a phone

- Fills the width. Action buttons share the row on a phone.
- The step names sit under the step bar and stay readable at 320px.
- Recording happens on the subject's own phone by default; "record now" opens the same check here.
- Choices in Who can use it are 44px tall on touch.

## Accessibility: built in

- A section named by its heading. The steps are an ordered list with aria-current on the current step and "done" or "current" written for screen readers.
- Every status is written in a badge and a heading, never colour alone. The amber badge carries words like "Waiting for Asha".
- Status changes are announced once through a polite status region.
- If a status change removes the button that had focus, focus moves to the heading. A change from elsewhere never takes focus.
- Revoke asks in place with InlineConfirm; Keep it gets focus first and Escape backs out.
- Who can use it is a native radio group with a legend.

## Accessibility: what you need to do

- Work out linkExpiresIn in code from the time the link was sent, and write it in words. A model must never make up the time.
- Only set canManage for the person in the likeness (or its owner). Everyone else sees who may use it but cannot change it.
- Tell the person each time their likeness is used, and fill usage from that log.
- Offer a check by a person through check.manualReviewHref for anyone who cannot read aloud or use a camera.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| subjectName (required) | `string` |  | The person, or the made-up avatar's name. |
| kind | `"face" \| "voice" \| "faceAndVoice"` | `"faceAndVoice"` | What is being used. |
| status (required) | `"notRequested" \| "pending" \| "expired" \| "recording" \| "reviewing" \| "accepted" \| "rejected" \| "revoked" \| "notRealPerson"` |  | Where consent is. |
| linkExpiresIn | `string` |  | Time left on the link, in words, from your code. Links last 24 hours. |
| rejectionReason | `string` |  | Why the recording was not accepted. |
| decidedOn | `string` |  | When consent was given or revoked, written by your code. |
| audience | `"onlyMe" \| "approved" \| "workspace" \| "anyone"` | `"onlyMe"` | Who may use it. |
| onAudienceChange | `(a: LikenessAudience) => void` |  | Change who may use it. Needs canManage. |
| audienceOptions | `LikenessAudience[]` | `["onlyMe", "approved", "workspace"]` | Choices to offer. Add "anyone" only if your product allows it. |
| canManage | `boolean` | `false` | The viewer is the person in it and may change who uses it or revoke it. |
| usage | `{ who: string; what: string; when: string }[]` | `[]` | Where it was used, newest first. |
| onSendLink | `() => void` |  | Send a link to record on their own device, or a new one. |
| onRecordHere | `() => void` |  | The person is here: record on this device. |
| onCancelRequest | `() => void` |  | Withdraw a pending request. |
| onRevoke | `() => void` |  | Revoke consent, after a confirm in place. |
| check | `Omit<VoiceConsentCheckProps, "subject" \| "headingLevel">` |  | Props for the recording step, shown when status is "recording". |
| region | `{ allowed: boolean; message?: string }` |  | When not allowed, explains why nothing can be requested. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `2` | Level of the heading. |
| className | `string` |  | Extra classes for the panel. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--attention`
- `--warning-soft`
- `--warning-fg`
- `--success-soft`
- `--success-fg`
- `--danger-soft`
- `--danger-fg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Every status: The view of the person who asked. Pending is amber because Asha still has to act; nothing else is. They can see who may use it but not change it.
- The person in it: who can use it, uses and revoke: With canManage, Asha picks who may use her likeness (narrowest first), sees each use, and can revoke with a confirm in place.
- Record here: Tomas is in the room, so "record now" opens VoiceConsentCheck with subject="likeness" inside the panel. Done moves to accepted.

Source: src/organisms/LikenessConsent.tsx
