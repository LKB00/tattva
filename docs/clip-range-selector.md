# ClipRangeSelector
Pick the start and end of the part of a clip to extend, edit or re-do, with the longest length built in.
Status: stable. Page: https://lkb00.github.io/tattva/#component-clip-range-selector
ClipRangeSelector puts two named handles and a movable window over a filmstrip. Handles snap to frames, and the window cannot be stretched past maxSpanSec, so the person never meets a "too long" error later. The readout says "6.0 of 10 s max". Two number fields and Set start or end at the playhead give a way to set it without dragging. It shows processing (locked while the AI works) and applied, and says when a range passed in was too long and was shortened.
## When to use it

Lets people choose exactly which part of a clip the AI should extend, edit or re-do, inside the limits the model has.

## Use it for

- Choosing up to 10 seconds of an upload to edit.
- Picking the part of a take to re-do or extend from.
- Setting the start and end of a loop.

## Not for

- Seeking to one moment: use `frame-scrubber`
- Narrowing a chart over a long time range: use `chart-range-brush`
- Ordering shots in a sequence

## Anatomy

- Label
- Range and length readout
- At the limit tag
- Filmstrip
- Start handle
- Window
- End handle
- Playhead
- Status line
- Start and end fields
- Set at playhead buttons

## Do

- Set the model's real limit as maxSpanSec, so the limit shows up front.
- Pair it with a player and pass playhead.
- Keep the original clip when the edit is applied, and say so.

## Avoid

- Don't let people pick a range that will fail later and then show an error.
- Don't make dragging the only way to set the range.
- Don't colour the window with the AI colour. Only the processing dot uses it.

## On a phone

- The handles are 44px wide on touch screens and reach outside the strip edges, so they never cover each other.
- The number fields and buttons are 44px tall on touch screens and wrap under each other on narrow screens.
- A touch that starts on the strip does not scroll the page.

## Accessibility: built in

- The handles are two sliders named "<label>, start" and "<label>, end", with times in words such as "Starts at 9 seconds".
- The window is a third slider that moves the whole range and says both ends and the length.
- An arrow moves one frame (or a tenth of a second), Shift with an arrow or Page Up and Page Down one second, Home and End to the furthest allowed.
- The length is announced once, after a drag ends or the keys stop, not on every step.
- Each handle stops at the minimum and maximum length instead of pushing the other handle.
- The number fields are named by the label, such as "Part to extend from, start in seconds".
- While processing, the sliders use aria-disabled and the fields and buttons are disabled; the status line says why.
- In forced colours the window and handles use system colours.

## Accessibility: what you need to do

- Give a label that says what the part is for, such as "Part to extend from". It names both handles.
- Set maxSpanSec to the model's real limit, so the person cannot pick a range that will fail.
- Pass playhead from the player, so people can set the range without dragging.
- In processing and applied, pass a statusNote that says what is happening and that the original is kept.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| durationSec (required) | `number` |  | Length of the clip in seconds. |
| range (required) | `[number, number]` |  | Start and end in seconds. The parent owns it. |
| onRangeChange (required) | `(range: [number, number]) => void` |  | Called with the new start and end. |
| label (required) | `string` |  | Name of the control, such as "Part to extend from". Also names the handles. |
| fps | `number` |  | Frames per second. Handles snap to frames and an arrow moves one frame. Without it they move a tenth of a second. |
| maxSpanSec | `number` |  | Longest range allowed. The window cannot be stretched past it. |
| minSpanSec | `number` | `1` | Shortest range allowed. |
| thumbnails | `string[]` |  | Still images for the filmstrip. |
| renderThumbnail | `(seconds: number) => ReactNode` |  | Draws one filmstrip tile for a time. |
| playhead | `number` |  | The player's position. Shows a playhead line and Set start or end buttons. |
| status | `"editing" \| "processing" \| "applied"` | `"editing"` | Processing locks the range while the AI works. |
| statusNote | `string` |  | Words for processing or applied. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- status: Set with the status prop.
- at the limit: When the range is as long as maxSpanSec, an "At the limit" tag shows beside the readout.
- too long: A range passed in longer than maxSpanSec keeps its start, moves its end and says so.

## Tokens

- `--fg`
- `--fg-muted`
- `--surface`
- `--surface-sunken`
- `--border`
- `--lime`
- `--success`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Extend from part of an upload: Up to 10 seconds of a 24-second clip. Drag a handle or the window, use the keys (an arrow is one frame, Shift with an arrow is one second), type the times, or play the clip and press Set start or Set end at the playhead.
- Processing, applied and too long: While the AI works the range is locked and says why. Applied says where the result went. The last one was passed 19 seconds with a 10-second limit, so it keeps the start, moves the end and says so. Without thumbnails the strip is plain.

Source: src/molecules/ClipRangeSelector.tsx
