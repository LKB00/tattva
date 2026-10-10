# FrameScrubber
The seek slider for a video clip: time in words, frame steps and a preview while dragging.
Status: stable. Page: https://lkb00.github.io/tattva/#component-frame-scrubber
FrameScrubber is the seek control VideoPlayer uses. A thin track with the played part in ink sits inside a 44px hit area. Its value is said in words, with the frame number when fps is set. Arrow keys move by step; comma and period, or Shift with an arrow, move one frame, and only while the scrubber itself has focus. While dragging or pointing, a bubble shows the time, and a thumbnail when you give one.
## When to use it

Lets people find an exact moment in a short clip, down to the frame, by pointer or keyboard.

## Use it for

- The seek bar inside a video player.
- Picking a single frame, such as a start frame or a thumbnail.
- Any short clip where tenths of a second matter.

## Not for

- Audio, where the loudness shape helps people find a moment: use `waveform`
- Picking a start and an end: use `clip-range-selector`
- Picking a value on a scale: use `slider`

## Anatomy

- Hit area
- Track
- Played part
- Thumb
- Preview bubble with thumbnail, time and frame

## Do

- Pass fps for generated clips, so people can land on an exact frame.
- Keep the played part in ink and the track neutral.
- Pause playback while the person drags (onScrubbingChange).

## Avoid

- Don't colour the played part with the AI colour.
- Don't shrink the 44px hit area to match a thin design.
- Don't make comma and period work when the scrubber does not have focus. VideoPlayer adds them for the whole player, with an off switch.

## On a phone

- The track is 4px but the hit area is 44px tall and fills the width.
- Tap anywhere to seek. While a finger drags, the bubble shows the time and frame above it.
- A touch that starts on it does not scroll the page.

## Accessibility: built in

- It is a slider with aria-valuetext in words, such as "3.2 seconds of 8 seconds, frame 77 of 192".
- Arrow keys move by step, Page Up and Page Down by ten steps, Home and End to the ends.
- Comma and period, or Shift with an arrow, move one frame (or a tenth of a second without fps). They only work while it has focus.
- When disabled it uses aria-disabled and says "Length not known yet" when there is no length.
- The preview bubble is for sight only and hidden from screen readers; the value text carries the same facts.
- In forced colours the track and played part use system colours.

## Accessibility: what you need to do

- Give a label that names the clip, such as "Seek, take 3".
- Update value from the real media time. Do not ease or animate it.
- Pass fps when frames matter, so the value text and keys use frames.
- Write the current time as text near it as well; the bubble only shows while dragging.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| duration (required) | `number` |  | Length in seconds. 0 shows a disabled, empty track. |
| value (required) | `number` |  | Playhead in seconds. The parent owns it. |
| onChange (required) | `(seconds: number) => void` |  | Called with the new time after a drag, a tap or a key. |
| label (required) | `string` |  | Name of the slider, such as "Seek, take 3". |
| fps | `number` |  | Frames per second. Turns on frame steps and snaps to frames. |
| step | `number` | `1` | Seconds moved by an arrow key. Page Up and Page Down move ten steps. |
| thumbnails | `string[]` |  | Still images spread over the clip, shown in the preview. |
| renderThumbnail | `(seconds: number) => ReactNode` |  | Draws the preview for a time when there are no image thumbnails. |
| onScrubbingChange | `(scrubbing: boolean) => void` |  | Called when a drag starts and ends, so a player can pause. |
| disabled | `boolean` | `false` | Blocks seeking. It stays focusable and says it is unavailable. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- disabled: Set with the disabled prop.
- dragging: While a pointer drags, the preview bubble shows the time, frame and thumbnail.
- unknown length: duration 0: an empty, disabled track that says "Length not known yet".

## Tokens

- `--fg`
- `--border-strong`
- `--surface`
- `--surface-sunken`
- `--dur-fast`
- `--text-small`

## Examples

### Frame-accurate, with a drawn preview

With fps the scrubber snaps to whole frames. Focus it, then use the arrows for 1 second and comma or period for one frame. Point or drag to see the frame preview.

```tsx
const [t, setT] = useState(3.25);

<FrameScrubber
  label="Seek, take 3"
  duration={8}
  fps={24}
  value={t}
  onChange={setT}
  renderThumbnail={(s) => <VideoScene time={s} duration={8} />}
/>
<p>{formatMediaTime(t)} of 0:08, frame {frameAt(t, 24)} of 192</p>
```

### Longer clip, and not ready yet

Without fps it moves in seconds; step sets the arrow-key jump. With no length yet it shows an empty track, says so, and stays focusable.

```tsx
<FrameScrubber label="Seek, product walkthrough" duration={95} step={5} value={t} onChange={setT} />
<FrameScrubber label="Seek, take 5" duration={0} value={0} onChange={() => {}} disabled />
```

Source: src/atoms/FrameScrubber.tsx
