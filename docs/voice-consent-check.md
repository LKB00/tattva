# VoiceConsentCheck
A live check that the person whose voice or likeness is being copied is present and agrees, by reading prompted lines aloud.
Status: stable. Page: https://lkb00.github.io/tattva/#component-voice-consent-check
VoiceConsentCheck walks through four steps: agree to plain terms (what it is for, who can use it, how to remove it), check the mic, read short lines aloud one at a time, then the result. A noisy room gets an amber notice with Check again or Continue anyway. A failed check keeps the samples and shows the tries left, and a lockout shows the exact time to try again. Set subject to "likeness" to use the same flow for face and voice in video. Your code records, checks and counts attempts; the part only shows the step you give it.
## When to use it

Makes cloning a voice or a likeness need the person's own live participation and informed agreement, not just a checkbox.

## Use it for

- Verifying a voice before it is cloned.
- Verifying a person's face and voice before their likeness is used in video (subject="likeness").
- Re-checking consent after a failed or expired verification.

## Not for

- Approving a single action an agent wants to take: use `approval-prompt`
- Asking for mic or camera permission alone: use `permission-prompt`
- Picking a voice that is already verified: use `voice-picker`

## Anatomy

- Title
- Step bar and step name
- Step heading
- Step body (terms, level, line, result)
- Manual review link
- Actions

## Do

- Say plainly what the voice or likeness is for, who can use it and how to remove it, before anything is recorded.
- Use fresh lines for each attempt so a saved recording cannot pass.
- Keep the samples after a failed check, and say so.
- Give an exact retry time when locked out, and a way to reach a person.

## Avoid

- Do not let a checkbox alone stand in for consent. The live reading is the check.
- Do not colour the person's level meter lime. It is their voice, not the AI.
- Do not use amber for the Recording label. Amber is only for the noisy room, where the person must act.
- Do not offer to clone a famous or someone else's voice.

## On a phone

- Fills the width. Put it in a full-screen Sheet on a phone.
- Lines are set large (22px, 26px from 640px wide) so they are easy to read at arm's length.
- Action buttons share the row equally on a phone, and checkboxes are 44px tall on touch.
- Recording stops if the page goes to the background, and a note asks the person to read the line again.

## Accessibility: built in

- The panel is a section named by the step heading. When the step changes, focus moves to the new heading.
- One polite status message per change. While reading, it carries the line itself, so each line is read out once.
- Space starts and stops recording from anywhere in the panel that is not a control or a field. On the Start or Stop button Space works as usual.
- The steps are an ordered list with the current one marked and "done" or "current" written for screen readers.
- The level meter has a value in words (quiet, speaking, loud) and three still steps, never a moving wave.
- Recording and Not recording are written in words. The new line slides in only when motion is allowed.
- The agreement box shows an error in words if Continue is pressed without it.

## Accessibility: what you need to do

- Always pass manualReviewHref, so people who cannot read aloud or use a camera have another way in.
- Work out retryAt in code and write it in full, such as "14:20 tomorrow". The model must never make up the time.
- On a phone, show it in a full-screen Sheet or Dialog.
- Make the lines new for each attempt, short, and free of words that are hard to say.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| step (required) | `"explain" \| "micCheck" \| "reading" \| "checking" \| "verified" \| "failed" \| "lockedOut"` |  | The step to show. |
| lines (required) | `string[]` |  | Lines to read aloud, one at a time. |
| currentLine (required) | `number` |  | Index of the line being read. |
| subject | `"voice" \| "likeness"` | `"voice"` | Likeness changes the copy to cover the camera as well as the mic. |
| consentText (required) | `ReactNode` |  | What it will be used for, who can use it and how to remove it. Shown first, and again on success. |
| recording | `boolean` | `false` | True while the current line is being recorded. |
| level | `number` | `0` | Input level from 0 to 1, shown as quiet, speaking or loud. |
| noise | `"ok" \| "noisy"` |  | Mic check result. Leave out while listening. |
| attemptsLeft | `number` |  | Tries left, shown after a failed check. At 0, Try again is hidden. |
| retryAt | `string` |  | When the person may try again, written out by your code. |
| onAgree (required) | `() => void` |  | The box is ticked and Agree and continue pressed. |
| onContinue | `() => void` |  | Continue, or Continue anyway when noisy. |
| onCheckAgain | `() => void` |  | Check again after a noisy result. |
| onStartLine (required) | `() => void` |  | Start recording the current line. |
| onStopLine (required) | `() => void` |  | Stop recording. Also called when the page goes to the background. |
| onRetry | `() => void` |  | Try again after a failed check. |
| onCancel (required) | `() => void` |  | Cancel, or Close when locked out. |
| onDone | `() => void` |  | Done after success. |
| manualReviewHref | `string` |  | Link to a check by a person, for anyone who cannot read aloud. |
| supportHref | `string` |  | Support link, shown when locked out. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `2` | Level of the step heading. |
| className | `string` |  | Extra classes for the panel. |

## States

- explain: What will happen and why, the terms, and a tick box. Continue without ticking shows an error in words.
- mic check: A three-step level reading, quiet, speaking or loud. A noisy room shows an amber note with Check again and Continue anyway.
- reading: One line to read aloud, large. Recording is marked in red with the word Recording; Space starts and stops it when focus is not on a control.
- checking: The recording is being compared. A spinner and the word Checking; focus stays on the step heading.
- verified: The voice or likeness is confirmed: a plain success message and what happens next.
- failed: The check did not match. The samples are kept, and the number of tries left is shown.
- locked out: After too many tries: the exact time to try again, from your code, and a link to support. No retry button.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--warning-soft`
- `--warning-fg`
- `--success-fg`
- `--danger`
- `--danger-fg`
- `--radius-card`
- `--dur-base`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- The whole check: Agree, check the mic (the first check is noisy here; Check again clears it), read three lines, then checking and verified. Timers stand in for the app.
- Likeness for video, every step: subject="likeness" changes the copy to cover the camera. Pick any step to see it; this starts on a failed check with two tries left.
- Locked out: After too many tries: the exact time to try again, computed by code, plus support and manual review.

Source: src/organisms/VoiceConsentCheck.tsx
