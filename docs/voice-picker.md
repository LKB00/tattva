# VoicePicker
A list of voices to hear and choose from, with tag filters. Only one sample plays at a time.
Status: stable. Page: https://lkb00.github.io/tattva/#component-voice-picker
VoicePicker lays out VoiceCards as one radio group. Each card has its own sample button, and starting a sample stops any other. Optional filter chips come from the voices' tags. It has a loading state, an empty state, and a "no match" state with a way back to all voices. Without your own player it uses a stand-in that simulates each sample with a timer.
## When to use it

Helps people choose a voice by hearing it, with ownership and availability in view, without samples talking over each other.

## Use it for

- Choosing the voice for an assistant, a narrator or a phone agent.
- A voice library where people filter by accent, mood or use case.
- A settings page that lists the person's own designed and cloned voices.

## Not for

- Showing one voice on its own: use `voice-card`
- Choosing among a few short text options: use `radio-group`
- Choosing which AI model answers: use `model-picker`

## Anatomy

- Label
- Filter chips (optional)
- Voice cards
- Empty or no-match message

## Do

- Put the most likely voices first, and keep the list short enough to compare by ear.
- Use tags people understand: mood, accent, use case.
- Keep a withdrawn voice in the list while someone still uses it, so they know to switch.

## Avoid

- Do not play a sample when a voice is chosen. Choosing and hearing are separate.
- Do not use colour alone for locked or withdrawn voices. The card writes the reason.
- Do not make the filter chips lime or amber. They are neutral controls.

## On a phone

- Always one column on a phone. layout="grid" adds a second column only from 640px wide.
- Filter chips wrap and keep a 44px tap area.
- Sample buttons are 44px on a touch screen, and a tap on the card chooses the voice.

## Accessibility: built in

- The list is a radiogroup named by the label. Each card is a native radio, so arrow keys move and choose and Tab stops on the chosen one.
- Locked and withdrawn voices are disabled radios, skipped by the arrow keys.
- Filter chips are toggle buttons that say whether they are pressed. After filtering, a polite message says how many voices are shown.
- While loading, the list is marked busy and "Loading voices" is announced.
- Only one sample plays at a time, and a sample hidden by a filter stops.

## Accessibility: what you need to do

- Give the picker a label that says what the voice is for, such as "Narrator voice".
- If you pass previewFor, stop the playing sample before starting another, and never start one without a press.
- Write withdrawal dates in full with your own date code.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| voices (required) | `VoiceOption[]` |  | Each has id, name, source, and optional description, tags, owner, consent, status, withdrawsOn, lockedReason, sampleSeconds and sampleFails. |
| value | `string` |  | Id of the chosen voice. |
| onChange (required) | `(id: string) => void` |  | Called when a voice is chosen. Never plays its sample. |
| label | `string` | `"Voice"` | Name of the group, shown above the list. |
| hideLabel | `boolean` |  | Hides the label visually. Screen readers still hear it. |
| filters | `boolean` | `false` | Shows filter chips built from the tags, with All first. |
| loading | `boolean` | `false` | Shows three placeholder rows. |
| layout | `"list" \| "grid"` | `"list"` | Grid adds a second column from 640px wide. |
| previewFor | `(voice: VoiceOption) => VoicePreview` |  | Your own player. Leave out to use the stand-in, which simulates samples with a timer. |
| emptyText | `string` | `"No voices yet."` | Shown when there are no voices at all. |
| className | `string` |  | Extra classes for the wrapper. |

## States

- loading: Three placeholder rows and a busy list. Set loading.
- empty: A dashed box with emptyText when voices is empty.
- no match: A filter shows no voices: "No voices tagged Calm." with Show all voices.
- previewing: One card plays its sample; starting another stops it.
- filtered: A filter chip is pressed and the list shows only voices with that tag.

## Tokens

- `--surface`
- `--border`
- `--fg`
- `--fg-muted`
- `--radius-card`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With tag filters: Filter by tag, play samples, and choose. Starting a sample stops the one playing, and a filter that hides the playing voice stops it too.
- Grid, with locked and withdrawn voices: Two columns from 640px wide. The chosen voice has been withdrawn, so its card asks the person to pick another.
- Loading and empty: Placeholder rows while voices load, and a plain message when there are none.

Source: src/organisms/VoicePicker.tsx
