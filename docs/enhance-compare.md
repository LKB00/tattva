# EnhanceCompare
Clean up a recording with one strength slider, and switch Before and After at the same moment.
Status: stable. Page: https://lkb00.github.io/tattva/#component-enhance-compare
EnhanceCompare sets how strongly a recording is cleaned up, from Natural to Clean, and which sounds to keep, such as laughter or room sound. Once the clean-up is ready, a Before and After switch changes version without moving the playhead, so the difference is heard straight away. It covers idle, processing, ready and failed, and says when the settings have changed since the After version was made.
## When to use it

Lets a person hear exactly what a clean-up changes and choose how far it goes, without losing the original.

## Use it for

- Removing background noise from a podcast interview.
- Making a phone voice memo clearer while keeping some room sound.
- Any AI clean-up where people say they cannot hear a difference.

## Not for

- Choosing between several generated takes: use `take-picker`
- Undoing one AI change in text: use `revert-toggle`
- Just playing a recording: use `audio-player`

## Anatomy

- Heading
- Before and After switch
- Player (AI label on After only)
- Strength slider
- Natural and Clean ends
- Sounds to keep
- Error message
- Status line
- Key hint
- Cost
- Clean up, Apply or Try again

## Do

- Keep the original and let people go back to it at any time.
- Start from a middle strength. Full strength often sounds robotic.
- Offer to keep the sounds that carry meaning, such as laughter.
- Show the cost next to Clean up when there is one.

## Avoid

- Don't render again every time the person wants to compare. The switch must be instant.
- Don't colour the waveform with the AI colour. Only the AI label on After and Clean up use it.
- Don't use amber for processing. Nothing needs the person yet.

## On a phone

- Fills the width. The Before and After switch wraps under the heading on narrow screens and its buttons are 44px tall on touch.
- The strength slider and check boxes are 44px tall on touch screens.
- The B key hint is hidden on touch screens; the switch does the same job.
- The player follows AudioPlayer: a 44px Play button and a 44px seek area.

## Accessibility: built in

- The panel is a section named by its heading.
- Before and After is a radio group named "Listen to": arrow keys move and select, and only the chosen option is a tab stop.
- B switches Before and After while focus is inside the panel, but not on the slider, a check box or any text field, and never with a modifier key.
- The strength slider is a native range named "Cleanup strength", read as "60 percent, between Natural and Clean".
- The sounds to keep are native check boxes in a fieldset named "Sounds to keep". They are disabled while processing.
- One status region announces processing, ready and failed. It never reads the clock.
- The player follows AudioPlayer: Play is a toggle, the waveform is a slider with the time in words, and the After version has an AI label.
- Under reduced motion the processing dot does not pulse.

## Accessibility: what you need to do

- Keep the original. Clean-up must never replace it without a way back.
- Name the sounds to keep in plain words, starting with Keep.
- Say in errorText what happened to the recording and whether the person was charged.
- Set status to processing as soon as the work starts, and to ready or failed when it ends.
- When onProcess costs anything, pass costNote so the cost sits beside the button.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | Name of the recording. Also names the player. |
| duration (required) | `number` |  | Length in seconds. |
| strength (required) | `number` |  | Cleanup strength, 0 (Natural) to 100 (Clean), in steps of 5. |
| onStrengthChange (required) | `(n: number) => void` |  | Called as the slider moves. |
| listening (required) | `"before" \| "after"` |  | Which version plays once the clean-up is ready. Switching keeps the position. |
| onListeningChange (required) | `(v: "before" \| "after") => void` |  | Called by the switch and the B key. |
| status (required) | `"idle" \| "processing" \| "ready" \| "failed"` |  | Where the clean-up is. Before ready, only the original plays. |
| onProcess | `() => void` |  | Starts or repeats the clean-up. Shows Clean up, Apply (after a change) or Try again. |
| costNote | `string` |  | Cost shown beside the button, such as "Free on your plan". |
| keepParts | `{ id: string; label: string; on: boolean }[]` |  | Sounds the person can choose to keep, such as "Keep laughter". |
| onKeepPartChange | `(id: string, on: boolean) => void` |  | Called when a sound to keep is ticked or cleared. |
| beforePeaks | `number[]` |  | Loudness per slice of the original. |
| afterPeaks | `number[]` |  | Loudness per slice of the cleaned version. |
| beforeSrc | `string` |  | The original file. Leave both files out to simulate playback. |
| afterSrc | `string` |  | The cleaned file. |
| errorText | `string` | `"The clean-up did not finish. Your recording is unchanged."` | Message in the failed state. |
| heading | `string` | `"Clean up sound"` | Heading of the panel. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the heading. |
| className | `string` |  | Extra classes on the panel. |

## States

- status: Set with the status prop.
- idle: Not cleaned up yet. Only the original plays, and Clean up starts the work.
- processing: The AI is cleaning up: a small AI dot and words. The original stays playable; the slider and check boxes wait.
- ready: Before and After can be switched at the same moment. The After version has the AI label.
- settings changed: Ready, but the strength or sounds to keep changed since the After was made: the line says so and Apply appears.
- failed: The clean-up did not work: the reason, "Nothing was changed", and Try again.

## Tokens

- `--lime`
- `--accent`
- `--fg`
- `--fg-muted`
- `--border`
- `--surface`
- `--surface-sunken`
- `--danger-fg`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Clean up an interview: Press Clean up. While it works the original stays playable. When it is ready, play and press B or the switch: the playhead stays where it was. Move the strength or a check box and Apply appears, because the After you hear no longer matches the settings.
- Ready, comparing: A short voice memo already cleaned up, listening to Before. The After version carries the AI label; the original does not. The heading can be changed to match the job.
- Failed: The clean-up did not finish. The panel says the recording is unchanged and whether you were charged, and Try again starts it once more (in this demo it then works).

Source: src/molecules/EnhanceCompare.tsx
