# GenerationProgress
Shows how a slow AI task is going: waiting, making it, ready to listen early, finishing, done, failed or cancelled.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-generation-progress
GenerationProgress shows where a slow task stands. While it works, it shows a bar with a percent, or a moving bar if the percent is not known. A gray placeholder holds the space for the result. It shows the time left and a Cancel button while work is under way, and swaps in the result when done. For audio, the placeholder is a flat waveform with a label, a streaming status lets people listen before the end is made, and a note can say what cancelling does to their credits. Screen readers hear the status only when it changes, never every percent.
## When to use it

Shows where a slow task stands, from waiting to done or failed. A placeholder the same shape as the result holds its place, so the page does not jump when it arrives.

## Use it for

- Making an image, video or file that takes more than a few seconds.
- Waiting in line before the work starts: show the queue position.
- A task that can fail and be tried again.
- A song, voice-over or sound effect: use previewShape="audio", and streaming when the start can be played early.

## Not for

- A short wait for a chat reply: use `typing-indicator`
- A list of steps an agent is working through: use `checklist`
- An amount used out of a limit: use `meter-bar`

## Anatomy

- Result area (placeholder, flat waveform or result)
- Status
- Time left
- Listen now
- Cancel, Retry or Start again
- Progress bar
- Error message
- Credits note

## Do

- Make the result area the same shape as the result, so the page does not jump.
- Offer Cancel for anything that takes more than a few seconds.
- Say why it failed.
- Pass percent only when you know the real progress. Without it, a moving bar shows instead.
- For audio, use previewShape="audio" and say what is coming in previewLabel, such as "Song, about 2 minutes".
- Say what cancelling does to credits with refundNote, when you know it.

## Avoid

- Do not fake a percent. Use the moving bar instead.
- Do not announce every percent change. This component already avoids that.
- Do not use amber for waiting in line. Waiting is not something the person must act on.
- Do not remove Cancel once the task has started.
- Do not autoplay streaming audio. Offer Listen now and let the person press it.
- Do not draw a fake waveform in the placeholder. The flat bars say the sound is not there yet.

## On a phone

- The preview area and the status line fill the width; the status text, time left and action wrap onto new lines.
- The preview area takes its height from the class you pass, so size it for a narrow screen.
- Action buttons are 44px tall on a touch screen and wrap onto a new line when space is short.
- The audio placeholder fills the width at a fixed short height, so it does not take a 16:9 block on a phone.

## Accessibility: built in

- Screen readers hear the status only when it changes, such as "Generating" or "Done", never each percent.
- The visible status line is hidden from screen readers, so nothing is said twice.
- The percent bar is a meter named "Generation progress".
- A failure shows an icon and the words "Generation failed", not color alone.
- The placeholder is hidden from screen readers, and its shimmer stops when people turn off motion in their system settings.
- The audio placeholder's label is plain text; its flat bars are hidden from screen readers.
- Cancelled shows an icon and the word Cancelled, and the announcement includes the credits note.
- Listen now, Cancel, Retry and Start again are 44px tall on a touch screen.

## Accessibility: what you need to do

- Pass error with a reason, so screen readers hear why it failed.
- Give the finished result its own text alternative.
- Pass refundNote only when your product knows whether cancelling returns credits. Never guess.
- Listen now must not start playback by itself somewhere off screen. Move focus to the player you show.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| status (required) | `"queued" \| "generating" \| "streaming" \| "finalising" \| "done" \| "failed" \| "cancelled"` |  | Current state. streaming: the start can already be played while the rest is made. cancelled: the person stopped it. |
| percent | `number` |  | 0 to 100. A bar shows while generating or streaming. Omit for an indeterminate bar. |
| queuePosition | `number` |  | Shown beside Queued. |
| eta | `string` |  | Time estimate, shown while queued, generating, streaming or finalising. |
| error | `string` |  | Message shown, and announced, when failed. |
| onCancel | `() => void` |  | Shows Cancel while queued, generating, streaming or finalising. |
| onRetry | `() => void` |  | Shows Retry when failed, and Start again when cancelled. |
| onListen | `() => void` |  | Shows Listen now while streaming. Start playback only from this press. |
| listenLabel | `string` | `"Listen now"` | Text for the Listen now button. |
| preview | `ReactNode` |  | Result shown when done, and while streaming if you pass a player that can play early. A placeholder fills the area before then. |
| previewShape | `"media" \| "audio"` | `"media"` | audio swaps the 16:9 block for a flat waveform with a label. |
| previewLabel | `string` | `"The audio will appear here"` | Words in the audio placeholder, such as "Song, about 2 minutes". |
| previewClassName | `string` | `"aspect-video" (media), none (audio)` | Classes for the preview area, to match the result shape. |
| refundNote | `string` |  | What cancelling does to credits. Shown next to Cancel while work runs and after cancelling, and read out with Cancelled. |
| labels | `Partial<Record<GenerationStatus, string>>` |  | Replaces the text for a status. Also used for the announcement. |
| className | `string` |  | Extra classes for the wrapper. |

## States

- status: Set with the status prop.
- error: Set with the error prop.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg-subtle`
- `--danger-fg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Try each state: Switch the state to see each one. The percent bar shows only while making it, with a percent.
- Progress not known: Leave out the percent when progress is not known.
- Waiting in line: Shows your place in line and no bar.
- Failed: Failed shows the message in words and offers Retry.
- Audio: listen before it is finished: Streaming means the start can be played while the rest is still being made. Listen now never plays on its own; the person presses it. The credits note sits next to Cancel.
- Audio: queued and cancelled: previewShape audio swaps the 16:9 block for a flat waveform with a label. After Cancel the note says what happened to the credits, and Start again is offered.

Source: src/molecules/GenerationProgress.tsx
