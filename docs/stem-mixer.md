# StemMixer
One lane per stem of a song with Mute, Solo, a named level slider and a box to pick it for export, plus the separation state in words.
Status: stable. Page: https://lkb00.github.io/tattva/#component-stem-mixer
StemMixer lists the parts the AI split a song into, such as vocals, drums, bass and other. Each row has a box to pick it for export, Mute and Solo toggle buttons, its waveform and a level slider named after the stem. Each row says in words whether it is playing, muted, soloed or silent because another stem is soloed. The whole mixer shows the separation state: separating (with a plain time, no percentage), ready, failed (with whether it was charged and Try again) or not on the person's plan. Export says how many stems it will export.
## When to use it

Lets a person hear and export the separate parts of a generated song.

## Use it for

- The stems step of an export Sheet in a music studio.
- Checking a vocal or drum part on its own before export.
- Telling a person plainly that stems are still being made, failed, or are not on their plan.

## Not for

- The structure of a song in time: use `section-lane`
- Playing one finished clip: use `audio-player`
- Choosing a file format and licence: use `export-sheet`

## Anatomy

- Title and separation state
- Stem rows (export box, name and what it is doing, Mute, Solo, waveform, level)
- Export note and Export button

## Do

- Name every stem plainly: Vocals, Drums, Bass, Other.
- Say how many stems Export will take, and any download limits beside it.
- Say whether a failed split was charged.

## Avoid

- Do not show a percentage for a split that is really queued.
- Do not colour muted or soloed rows only; the words say it.
- Do not use amber for separating or plan-locked. Neither needs the person to act.

## On a phone

- Rows stack: the export box and name, then Mute and Solo, then the level slider.
- Waveforms are hidden when the mixer is narrower than 24rem (about 400px).
- Mute, Solo, sliders and buttons grow to 44px on touch screens.

## Accessibility: built in

- Mute and Solo are toggle buttons with aria-pressed, named with the stem: "Mute Drums", "Solo Vocals".
- Each level is a native range slider named "Drums level", read as a percentage.
- Each export box is named "Export Drums". Export says how many stems it will take and turns off when none are picked.
- Each row says in words whether the stem is playing, muted, soloed or silent while another is soloed.
- Waveforms are pictures only and hidden from screen readers.
- One polite status line says mute, solo and separation changes once each; the mixer is aria-busy while separating.
- The separating dot only pulses with motion allowed; otherwise it is still next to the word Separating.

## Accessibility: what you need to do

- Apply mute, solo and level to the audio you play; the mixer only reports them.
- Pass a separatingNote with a real time or queue position, never a made-up percentage.
- Say in failedNote whether the person was charged.
- Keep the plan-locked state honest: say which plan has stems and that the full song can still be exported.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| stems (required) | `Stem[]` |  | Stems: id, name, peaks, level (0 to 100), muted, soloed, exported. |
| status (required) | `"separating" \| "ready" \| "failed" \| "plan-locked"` |  | Where the split is. |
| duration | `number` | `0` | Song length in seconds, for the waveforms. |
| position | `number` | `0` | Playhead in seconds, drawn on each waveform. |
| onLevelChange | `(id: string, level: number) => void` |  | Level slider moved. |
| onMuteChange | `(id: string, muted: boolean) => void` |  | Mute pressed. |
| onSoloChange | `(id: string, soloed: boolean) => void` |  | Solo pressed. Several stems can be soloed. |
| onExportChange | `(id: string, exported: boolean) => void` |  | Export box ticked or cleared. |
| onExport | `(ids: string[]) => void` |  | Exports the picked stems. Leave out to hide Export. |
| exportNote | `string` |  | Format and limits beside Export. |
| separatingNote | `string` | `"Splitting the song into stems. About a minute."` | What is happening while separating. No percentages. |
| failedNote | `string` | `"The song could not be split. You were not charged."` | What happened and whether it was charged. |
| onRetry | `() => void` |  | Shows Try again when failed. |
| planNote | `string` | `"Stems come with the Pro plan."` | Which plan has stems. |
| onSeePlans | `() => void` |  | Shows See plans when plan-locked. |
| placeholderCount | `number` | `4` | Placeholder rows while separating. |
| title | `string` | `"Stems"` | Heading. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the heading. |
| className | `string` |  | Extra classes. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--lime`
- `--accent`
- `--radius-card`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Mix and pick stems to export: Four stems, Other muted. Solo one to hear it alone; the rest say they are silent. Tick stems to change what Export takes.
- Separation states: Separating shows placeholder rows and a plain time. Failed says it was not charged and offers Try again. Plan-locked says which plan has stems and that the full song still exports.
- Phone width: Rows stack and the waveforms are hidden. Vocals is soloed, so the other rows say they are silent.

Source: src/organisms/StemMixer.tsx
