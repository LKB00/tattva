# TranscriptSync
A recording's transcript that follows playback. Press a line to play from there.
Also known as: synced transcript, interactive transcript.
Status: stable. Page: https://lkb00.github.io/tattva/#component-transcript-sync
TranscriptSync shows who said what and when, under a player. The line being played is marked with a bar, a tint and the word Now, and the list keeps it in view until the person scrolls away. Pressing a line plays from its start. Speakers are named in words; AI speakers also carry the AI mark in a small AI-coloured circle. Words the assistant never said because it was cut off are struck through and marked Not spoken.
## When to use it

Lets someone read a call and listen to any part of it, so a reviewer can check what was really said.

## Use it for

- Reviewing a support call handled by a voice agent, including the hand-over to a person.
- Checking a generated voice-over against its script.
- Any recording where people need to find a moment by reading.

## Not for

- Captions of a live conversation: use `voice-panel`
- A text chat: use `message-list`
- Audio with no transcript: use `audio-player`

## Anatomy

- Player (optional)
- Hint
- Back to current line
- Line button
- Speaker mark
- Speaker name
- Time and clock
- Now tag
- Text
- Not spoken part

## Do

- Show both the time from the start and the wall-clock time for calls, so reviewers can match logs.
- Mark speech that was never played as Not spoken.
- Keep the player above the transcript, so it stays in reach while reading.

## Avoid

- Don't colour a person's lines with the AI colour, or the current line. The AI colour is only on the AI speaker's mark.
- Don't announce each line as it plays. People read the list when they want to.
- Don't scroll the page to follow the line. Only the list scrolls, and only until the person scrolls it.

## On a phone

- It fills the width and the list scrolls inside itself, so the player stays put above it.
- Each line is a full-width button at least 44px tall.
- Scrolling the list stops it following; Back to current line, 44px tall on touch screens, brings it back.
- Speaker, time and the Now tag wrap onto two lines when space is short.

## Accessibility: built in

- The list is a section named by label. Every line is a button; pressing it seeks to the line's start.
- The current line has aria-current, a bar on its left, a tint and the visible word Now, so it never depends on colour.
- Speaker names are text. AI speakers also get a hidden "(AI)" after the name, and the AI mark is decorative.
- Words that were not spoken are struck through and preceded by hidden text "Not spoken:", with a visible Not spoken tag.
- Following stops when the person scrolls the current line out of view, and Back to current line brings it back. It scrolls only the list, never the page.
- Nothing in the list is announced while playing. Loading is announced once through a status region.
- Highlight changes take --dur-fast; there is no other motion.

## Accessibility: what you need to do

- Name every speaker in speakers, and set ai on the ones that are AI.
- Mark lines the assistant did not finish saying with status interrupted and spokenUpTo, so the record matches what was played.
- Hide card numbers and codes in the text before passing it, and set status redacted.
- Automatic transcripts make mistakes. Where the transcript becomes a record, give people a way to flag errors.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| lines (required) | `TranscriptLine[]` |  | Each line: id, speaker, start in seconds, text, and optional end, clock, status ("final" \| "interrupted" \| "redacted") and spokenUpTo. |
| speakers (required) | `Record<string, { label: string; ai?: boolean }>` |  | Who is who. ai lines get the AI mark; people stay neutral. |
| audio | `Omit<AudioPlayerProps, "current" \| "onTimeChange">` |  | Wires in a player above the list. The part then keeps the time itself. |
| current | `number` |  | Playback position in seconds, when your own player keeps it. |
| onSeek | `(seconds: number) => void` |  | Called with a line's start when it is pressed. |
| label | `string` | `"Transcript"` | Name of the transcript region. |
| loading | `boolean` | `false` | Shows placeholder lines. |
| emptyText | `string` | `"There is no transcript for this recording."` | Shown when there are no lines. |
| listClassName | `string` |  | Classes for the scrolling list, for example a different max height. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- selected: Set with the current prop.
- loading: Set with the loading prop.

## Tokens

- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--surface`
- `--surface-sunken`
- `--border`
- `--lime`
- `--on-lime`
- `--dur-fast`
- `--text-compact`
- `--text-small`

## Examples

### Support call with its recording

Pass audio and the part wires in its own player. Press Play and the current line follows; press any line to jump. The assistant was cut off at 1:06, so the rest of that line is marked Not spoken.

```tsx
<TranscriptSync
  audio={{ title: "Call with Maya Okafor", subtitle: "Support call, 3 October, 14:02", duration: 192, peaks, markers }}
  speakers={{
    maya: { label: "Maya Okafor" },
    assistant: { label: "Support assistant", ai: true },
    dev: { label: "Dev Raman" },
  }}
  lines={[
    { id: "l1", speaker: "assistant", start: 0, clock: "14:02:10", text: "Hello, this is the Halden Home support assistant. I am an AI. How can I help today?" },
    { id: "l2", speaker: "maya", start: 7, clock: "14:02:17", text: "Hi. My kettle order was meant to arrive on Monday and it still has not come." },
    // ...
    { id: "l8", speaker: "assistant", start: 66, text: "The courier now expects Thursday. I can also send a new kettle today...", status: "interrupted", spokenUpTo: 71 },
    // ...
  ]}
/>
```

### With your own player

Keep the time yourself when the player lives elsewhere on the screen. Pass current, and seek your player in onSeek.

```tsx
const [t, setT] = useState(0);
const [seekTo, setSeekTo] = useState<number | undefined>();

<AudioPlayer title="Call with Maya Okafor" duration={192} peaks={peaks}
  current={seekTo} onTimeChange={(s) => { setT(s); setSeekTo(undefined); }} />
<TranscriptSync lines={lines} speakers={speakers} current={t}
  onSeek={(s) => { setSeekTo(s); setT(s); }} />
```

### Loading and empty

loading shows placeholder lines while the transcript is made. With no lines, it says so in words.

```tsx
<TranscriptSync loading lines={[]} speakers={speakers} label="Transcript, being made" />
<TranscriptSync lines={[]} speakers={speakers} emptyText="This call was too short to transcribe." />
```

Source: src/organisms/TranscriptSync.tsx
