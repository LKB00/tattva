# LiveCaptions
A streaming caption log for voice that marks words still changing, words the assistant never said, and hidden numbers.
Status: stable. Page: https://lkb00.github.io/tattva/#component-live-captions
LiveCaptions shows both sides of a voice conversation as they speak, with each speaker named in text. Interim words are lighter and have no full stop, then settle in place under the same id. When the person cuts in, the assistant's unspoken words are struck through and marked Not spoken, or left out. Secrets such as card digits show as a bracketed placeholder. It follows the newest line until the person scrolls up, then offers Jump to latest.
## When to use it

Makes a voice conversation readable without sound, and honest about what was really said. It is the accessible version of voice.

## Use it for

- Live captions under a voice assistant.
- A support call transcript where the assistant and the caller are both shown.
- A recorded call where each line jumps the audio to that point.

## Not for

- A typed chat thread: use `message-list`
- A stream of agent steps or logs: use `live-log`
- The whole voice screen with orb and controls: use `voice-panel`

## Anatomy

- Header with label
- Size control
- Hide or Show button
- Caption log
- Speaker label (AI mark for the assistant)
- Time
- State word
- Caption text
- Jump to latest
- Live region (hidden, optional)

## Do

- Keep the same id when an interim line becomes final, so it settles in place.
- Pass spokenUpTo from the audio that really played.
- Name every speaker in words, and list AI speakers in aiSpeakers.
- Store the size and visible choices for the person.

## Avoid

- Do not colour the person's captions lime. Only the AI label carries the AI wash.
- Do not live-announce every word. It fights the audio and the screen reader.
- Do not show speech the assistant never played as if it was said.
- Do not show emotion scores about the person.

## On a phone

- Caption text starts at the large size on screens narrower than 600px, and medium elsewhere.
- The header wraps: the size control and the Hide button drop under the label on a narrow screen.
- Lines wrap and never scroll sideways, so the log works at 320px wide.
- The Hide and Show button and Jump to latest have 44px touch areas.

## Accessibility: built in

- The log is a focusable role=log region named by its heading, with aria-live off, so people read it on demand with the arrow keys.
- Each speaker is named in text. AI labels add the AI mark, never colour alone.
- Interim lines show the words Still changing, interrupted lines say Interrupted, and hidden parts say Part hidden.
- Unspoken words are struck through and start with Not spoken for screen readers.
- With announceFinal, a polite status region reads each finished AI line once; interim words are never read.
- New lines fade in over --dur-fast. Under reduced motion they appear at once.
- With onSeek, each line is a real button.

## Accessibility: what you need to do

- Store visible and size for the person and pass them back next time, so the setting persists across sessions.
- Announce the session state (listening, speaking) somewhere else, once, in a status region. The log stays quiet.
- Turn on announceFinal for people who mute the audio and use a screen reader.
- Replace secrets with [hidden] before they reach the caption text. The part never sees the secret.
- Set spokenUpTo from the audio that was really played, so the transcript matches what the person heard.
- Offer the full transcript after the session ends, and a way to flag wrong words where it becomes a record.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| lines (required) | `CaptionLine[]` |  | Every line so far, oldest first. Each has id, speaker, text, status (interim, final, interrupted or redacted), and optional spokenUpTo, at and hiddenLabel. |
| visible | `boolean` |  | Captions on or off. Uncontrolled when left out, starting on. |
| onVisibleChange | `(visible: boolean) => void` |  | Called by the Hide and Show button. Store the choice. |
| size | `"sm" \| "md" \| "lg" \| "xl"` |  | Caption text size. Uncontrolled when left out: lg on a narrow screen, md elsewhere. |
| onSizeChange | `(size: CaptionSize) => void` |  | Called by the size control. Store the choice. |
| follow | `boolean` | `true` | Keep the newest line in view. Scrolling up turns it off; scrolling back to the bottom turns it on. |
| onFollowChange | `(follow: boolean) => void` |  | Called when following starts or stops. |
| onSeek | `(id: string) => void` |  | Makes each line a button that jumps the recording to it. |
| speakerLabels | `Record<string, string>` | `{ person: "You", assistant: "Assistant" }` | Names shown for each speaker key. |
| aiSpeakers | `string[]` | `["assistant"]` | Speaker keys that are AI. Their labels carry the AI mark on a soft AI wash. |
| unspoken | `"show" \| "hide"` | `"show"` | Interrupted lines: show the unspoken rest struck through, or leave it out. |
| announceFinal | `boolean` | `false` | Read each finished AI line once in a polite status region. |
| label | `string` | `"Captions"` | Accessible name of the log, also shown as its heading. |
| emptyText | `ReactNode` | `"Captions appear here as you talk."` | Shown before the first line. |
| controls | `boolean` | `true` | Show the size control and the Hide button. |
| maxHeight | `number \| string` | `64` | Tallest the log grows before it scrolls: spacing steps or a CSS length. |
| className | `string` |  | Classes for the outer box. |

## States

- empty: Before the first line, the log shows the empty text.
- scrolled up: When the person scrolls up, following stops and Jump to latest shows how many captions arrived since.

## Tokens

- `--surface`
- `--surface-sunken`
- `--line`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--lime-soft`
- `--dur-fast`
- `--ease-out`
- `--radius-card`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A live conversation: Step through it. The person's words start light and settle. The assistant is cut off mid-answer, and the part it never said is struck through.
- A call transcript you can play from: Custom speakers, a hidden card number and a line that was cut off. Each line is a button that plays the recording from that point.
- Unspoken words left out: With unspoken set to hide, the transcript keeps only what was played. The line still says Interrupted. announceFinal reads finished assistant lines to screen readers.

Source: src/organisms/LiveCaptions.tsx
