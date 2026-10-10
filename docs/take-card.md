# TakeCard
One generated video take, from the queue to the finished clip, with a charge line that says whether credits were taken.
Status: stable. Page: https://lkb00.github.io/tattva/#component-take-card
TakeCard is a single video take. It holds its aspect ratio from the moment the request is sent, so nothing moves when the result lands. While a model works, a calm lime edge goes round the card and the status is written out: queued with the place in line and why, generating, finalising. A finished take shows a poster, a Play button, the length, the model and the AI label. Every ending (failed, blocked by policy, cancelled, rate limited) says in words whether credits were taken.
## When to use it

Shows one video take honestly from the queue to the end: what is happening, what it cost, and what you can do next. It never leaves the person guessing whether a failed or blocked take was charged.

## Use it for

- A take inside a video studio grid, while it is queued, made and finished.
- A single take in a chat answer, where an agent made a clip.
- Showing a policy block calmly, with the refund and one way to rephrase.

## Not for

- A still image or a set of image variants: use `media-grid`
- Slow work that is not a video, such as a report: use `generation-progress`
- Many takes at once with one shared announcement: use `take-grid`
- Playing the video with a scrubber and frame steps

## Anatomy

- Media box at the take's ratio
- Poster and Play button (done)
- Status word and icon (working)
- Draft tag
- Select control
- AI label
- Length
- Take name
- Status line
- Length, model, ratio
- Prompt
- Lineage
- Policy or error note
- Charge line
- Actions or overflow menu
- Live region (hidden, standalone only)

## Do

- Put the card where the result will land as soon as the request is sent.
- Pass a charge on every card, and update it to refunded or notCharged when a job ends without a result.
- Say why a queued take waits (Busy period), and give an estimate only when you have a real one.
- Tag drafts as Draft and offer a way to make the final quality.

## Avoid

- Do not show a red error for a policy block, or word it as the person's fault when the output was stopped.
- Do not show a percent the service does not report, and never hold it at 99%.
- Do not autoplay or loop takes in the grid.
- Do not use amber for waiting in a queue. Waiting is not something the person must do.

## On a phone

- Fills the width of its column. The media box keeps its ratio, so the layout does not jump.
- The whole poster is the Play button, so a tap opens the take.
- Extra actions sit in an overflow menu, which opens as a bottom sheet on a phone.
- Buttons and the select control get a 44px tap area on touch screens.

## Accessibility: built in

- The card is an article named by the take name and described by its status line and charge line.
- aria-busy is true while queued, generating or finalising.
- Standalone, a polite status region says only status changes, such as Take 1: ready. Never percentages.
- The poster is a real button named Play Take 1, 8 seconds.
- Length is shown as 0:08 and read as 8 seconds.
- Status is always a word with an icon. Selection adds a check mark and the word selected, not only a border.
- The select control is a checkbox in multi mode and a pressed button in single mode, each named after the take.
- Under reduced motion the working edge is still, and the poster and status swap with no fade.

## Accessibility: what you need to do

- Give each take a name people can tell apart, such as Take 3, not only an id.
- Write the charge from your billing records. Never let the model write an amount.
- Provide captions and a transcript in your player when the take has speech. The prompt is not alt text.
- When many cards update at once, use TakeGrid, or set announce={false} and speak a summary yourself.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| id (required) | `string` |  | Take id. Set as data-take-id on the card. |
| label (required) | `string` |  | Name of the take, such as Take 2. It names the card. |
| status (required) | `"queued" \| "generating" \| "finalising" \| "done" \| "failed" \| "blocked" \| "cancelled" \| "rateLimited"` |  | Where the job is. Set it from the real job state. |
| ratio | `"16:9" \| "9:16" \| "1:1" \| "4:3" \| "21:9"` | `"16:9"` | The media box keeps this ratio in every state. |
| poster | `string` |  | Poster image URL, shown when done. |
| scene | `"harbour" \| "dusk" \| "forest" \| "city" \| "studio"` | `"harbour"` | A drawn stand-in poster from colour tokens, used when there is no image. |
| durationSec | `number` |  | Length in seconds. Shown as 0:08 and read as 8 seconds. |
| model | `string` |  | Model that made the take. |
| prompt | `string` |  | What was asked for. It is not alt text for the result. |
| quality | `"draft" \| "final"` |  | draft adds a Draft tag on the frame and Draft quality in the words. |
| queuePosition | `number` |  | Place in the queue while queued. |
| queueReason | `string` |  | Why the person waits, such as Busy period. Never an upgrade pitch. |
| eta | `string` |  | Plain time estimate, only when the service gives one. |
| percent | `number` |  | 0 to 100, only if the service reports it. Shows a neutral bar. Never spoken. |
| charge | `{ amount: number; state: "estimated" \| "charged" \| "refunded" \| "notCharged"; unit?: string }` |  | The charge line. Work the amount out in code. |
| blockedReason | `{ where: "input" \| "output"; message: string; suggestion?: string }` |  | Why a blocked take was stopped, and one way to rephrase. |
| error | `string` |  | What went wrong, when failed. |
| retryNote | `string` |  | When a rate-limited take starts again. |
| cancelNote | `string` |  | Says whether cancelling returns credits. Shown under Cancel while working. |
| lineage | `string` |  | Where the take came from, such as Extended from take 2. |
| provenance | `{ madeWith?: string; made?: string; carries?: string[]; caveat?: string }` |  | Fills the AI label's explainer: what the file carries and what can strip it. |
| onOpen | `() => void` |  | Opens the take in your player. Makes the poster a Play button when done. |
| onCancel | `() => void` |  | Shows Cancel while queued, generating or finalising. |
| onRetry | `() => void` |  | Shows Try again on failed, cancelled and rate-limited takes. |
| onEditPrompt | `() => void` |  | Shows Edit prompt on blocked takes. |
| menu | `MenuEntry[]` |  | Extra actions for a finished take, in an overflow menu. |
| selectMode | `"single" \| "multi"` |  | Shows the select control: a checkbox for multi, a pressed button for single. |
| selected | `boolean` | `false` | Selected. Shown with an ink border and a check mark, and said in words. |
| onSelect | `() => void` |  | Called by the select control. |
| announce | `boolean` | `true` | Speak status changes from this card. TakeGrid turns it off and speaks once for all cards. |
| compact | `boolean` | `false` | Hides the prompt and lineage for small tiles. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Heading level of the take name. |
| tabIndex | `number` |  | Makes the card a focus stop. TakeGrid sets it for its roving focus. |
| className | `string` |  | Classes for the card. |

## States

- status: Set with the status prop.
- error: status failed: a red status word, the error and Try again.
- selected: selected with selectMode: ink border, check mark and the word selected.
- loading: status queued, generating or finalising: the lime working edge, aria-busy and the status word.
- blocked: status blocked: a calm note naming the input or the output, with the charge line.
- cancelled: status cancelled: says Cancelled and whether credits came back.
- rate limited: status rateLimited: says the take is paused and when it starts again.
- draft: quality draft: Draft tag on the frame and Draft quality in the words.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--lime`
- `--danger-fg`
- `--chart-1`
- `--chart-2`
- `--chart-3`
- `--chart-4`
- `--chart-5`
- `--chart-seq-1`
- `--chart-seq-5`
- `--dur-base`
- `--dur-fast`
- `--ease-out`
- `--focus-ring`
- `--touch-target`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- From the queue to a finished take: Step through the life of one take. The lime edge shows only while the model works. Cancel says first that the credits come back, and the card then says so.
- Endings: blocked, failed, rate limited, cancelled: A policy block is a calm note, not a red error. It says whether the request or the finished video was stopped, and that nothing was charged. A failure is the only red state. Every ending names the charge.
- A draft take with lineage and more actions: A low-cost draft is tagged Draft on the frame and in the words, so it is never taken for the finished clip. The lineage line says where it came from, and the overflow menu holds the next steps.

Source: src/molecules/TakeCard.tsx
