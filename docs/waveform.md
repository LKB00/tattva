# Waveform
The loudness of a clip drawn as bars, with the played part filled. Can also be the seek control.
Status: stable. Page: https://lkb00.github.io/tattva/#component-waveform
Waveform draws one clip from precomputed peaks: a call recording, a generated voice or a song. Played bars are ink and the rest are a light line, with a playhead between. Give it onSeek and it becomes one slider you can drag, tap or move with the keys. It can mark stretches (made by AI, made by a person, stale, selected or highlighted) and moments such as a tool call. In live mode it shows the latest levels from a microphone.
## When to use it

Shows the shape of a clip so people can see where the talking, the quiet parts and the marked moments are, and jump straight to them.

## Use it for

- The seek bar of a call recording, a voice clip or a song.
- Showing which stretch of a song or voice-over the AI made or changed.
- A small level display beside a microphone, with its state written next to it.

## Not for

- A full player with play, time and speed: use `audio-player`
- Picking a value on a scale: use `slider`
- A trend in numbers over time: use `sparkline`

## Anatomy

- Bars
- Played part
- Playhead
- Regions
- Markers
- Still-being-made track
- Region key with times
- Time bubble while dragging

## Do

- Precompute the peaks on the server, 100 to 200 values for a clip, so the page does not decode the audio.
- Pass the real media time as position, and let the playhead move with it.
- Label every region and marker in plain words.
- Use the ai region only for stretches the AI made or changed.

## Avoid

- Don't colour the bars, the playhead or the played part with the AI colour. Playback is not AI.
- Don't use amber for anything but a stretch or moment a person must act on.
- Don't animate the bars to the beat as the main sign of state. Write the state in words.
- Don't make the live drawing the only sign that the microphone is on.

## On a phone

- It fills the width. As a seek control its hit area is at least 44px tall, even at the 32px height.
- Tap anywhere to seek. While a finger drags, a time bubble shows above it.
- A touch that starts on it does not scroll the page, so dragging stays put.
- When the waveform is narrower than 256px (a 320px phone inside a card) the bars give way to a plain progress bar.

## Accessibility: built in

- With onSeek it is one element with role slider, aria-valuemin, aria-valuemax and aria-valuenow in seconds, and aria-valuetext in words, such as "1 minute 12 seconds of 3 minutes 12 seconds".
- Arrow keys move 5 seconds, Shift with an arrow 15 seconds, Page Up and Page Down 30 seconds, Home and End go to the start and end.
- Regions, markers, the drawing state, the error and the still-being-made part are read out as the slider's description.
- Without onSeek, or in live mode, the drawing is hidden from screen readers. Region labels stay readable as text.
- Played and unplayed bars differ in lightness, and the playhead is a line, so the played part does not depend on hue. AI regions add a dotted edge and words; stale regions a hatch and words; review markers a diamond shape.
- A press focuses the slider, and drags use pointer capture so they keep working outside it. The hit area is at least 44px tall.
- Under reduced motion the peaks do not fade in, the playhead moves at most four times a second, and a live drawing changes at most once a second.
- In forced colours the playhead, played part and selection keep system colours.

## Accessibility: what you need to do

- With onSeek, give it a label that names the clip, such as "Seek, call with Maya Okafor".
- In live mode or without onSeek it is hidden from screen readers, so write the state (such as "You, speaking") beside it.
- Give each region and marker a label in plain words. They are read out with the slider.
- Update position from the real media time. Do not ease or animate it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| peaks (required) | `number[] \| null` |  | Loudness per slice, each 0 to 1. null while still being worked out, which shows the drawing state. In live mode the newest level is last. |
| duration (required) | `number` |  | Length of the clip in seconds. In live mode, the seconds the visible window covers. |
| position | `number` | `0` | Playhead in seconds. Bars before it are drawn as played. |
| onSeek | `(seconds: number) => void` |  | Makes it a seek slider. Called on tap, drag and key presses. Leave out for a drawing only. |
| label | `string` |  | Name of the seek slider, such as "Seek, call with Maya Okafor". Needed with onSeek. |
| regions | `{ start: number; end: number; kind: "ai" \| "person" \| "stale" \| "selected" \| "highlight"; label?: string }[]` |  | Marked stretches. ai gets the AI wash and a dotted top edge, stale an amber hatch, selected an ink outline, highlight a neutral wash, person a solid top edge. |
| markers | `{ at: number; label: string; tone?: "neutral" \| "review" }[]` |  | Moments on the timeline. review is an amber diamond, for a moment a person must check. |
| pendingFrom | `number` |  | From this second to the end the clip is still being made. Drawn faded behind a dashed line. |
| mode | `"static" \| "live"` | `"static"` | live draws the most recent levels, newest on the right, with no playhead or seeking. |
| liveBars | `number` | `64` | In live mode, how many bars to show. |
| error | `string` |  | Shows a plain bar and this message instead of the peaks. Seeking still works. |
| simple | `boolean` | `false` | Draws a plain progress bar instead of the peaks. |
| height | `32 \| 48 \| 72` | `48` | Height of the drawing. The seek hit area is at least 44px tall. |
| formatTime | `(seconds: number) => string` |  | Clock text for the time bubble while dragging. Defaults to formatMediaTime, such as 1:12. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- error: Set with the error prop.

## Tokens

- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--border-strong`
- `--surface`
- `--lime`
- `--attention`
- `--dur-base`
- `--text-small`

## Examples

### Seek control with markers

A call recording. Drag, tap or use the arrow keys to seek. Markers show a tool call, an interruption and, as an amber diamond, a transfer someone should review.

```tsx
const [pos, setPos] = useState(52);

<Waveform
  label="Seek, call with Maya Okafor"
  peaks={peaks}
  duration={192}
  position={pos}
  onSeek={setPos}
  markers={[
    { at: 41, label: "Tool call: look up order 4471" },
    { at: 96, label: "Caller interrupted the assistant" },
    { at: 158, label: "Transfer to a person, check the reason", tone: "review" },
  ]}
/>
```

### Marked stretches in a song

The AI-made chorus has a faint AI wash, a dotted top edge and a label. The stale part needs a person to regenerate it, so it is hatched amber. The selection is outlined in ink.

```tsx
<Waveform
  label="Seek, Harbour Lights take 2"
  peaks={songPeaks}
  duration={180}
  position={pos}
  onSeek={setPos}
  height={72}
  regions={[
    { start: 48, end: 76, kind: "ai", label: "Chorus rewritten by AI" },
    { start: 96, end: 116, kind: "stale", label: "Needs regenerating" },
    { start: 136, end: 160, kind: "selected", label: "Your selection" },
  ]}
/>
```

### Drawing, error, live and plain

peaks={null} while the peaks are worked out. error keeps a plain bar you can still seek. mode="live" shows the latest microphone levels in a neutral colour, with the state written beside it. simple forces the plain bar.

```tsx
<Waveform label="Seek, voice note" peaks={null} duration={64} onSeek={seek} />

<Waveform label="Seek, voice note" peaks={peaks} duration={64} position={20} onSeek={seek}
  error="The waveform could not be drawn. You can still play and seek." />

<span>You, speaking</span>
<Waveform mode="live" peaks={levels} duration={6} liveBars={48} height={32} />

<Waveform label="Seek, voice note" peaks={peaks} duration={64} position={40} onSeek={seek} simple height={32} />
```

Source: src/atoms/Waveform.tsx
