# SectionLane
A song's structure as labelled sections on a timeline: select, regenerate one, extend after it or move it, with staged edits and out-of-date sections in amber words.
Status: stable. Page: https://lkb00.github.io/tattva/#component-section-lane
SectionLane shows a generated song as blocks in play order, each sized to its length: Intro, Verse, Chorus and so on. Each block says its time, who made it (a small AI mark, or Recorded or Uploaded) and its state in words. Select a section to see its lyrics and style and to Regenerate it, Extend after it, Edit it or move it. Edits are staged: one amber bar counts them and holds a lime Generate with its cost, so several changes cost one generation. Sections that no longer fit after an edit are marked Out of date, sections being made get a working ring, and failed ones say so with Try again.
## When to use it

Lets a person fix one part of a generated song without regenerating the whole thing, and see which parts the AI made and which need them.

## Use it for

- Under an AudioPlayer for a kept song in a music studio.
- Replacing or extending one section and generating several edits at once.
- Showing mixed authorship: which sections the AI made and which were recorded or uploaded.

## Not for

- Ordering video shots: use `scene-strip`
- Picking between whole takes: use `take-picker`
- Playing one clip: use `audio-player`

## Anatomy

- Title, length, section count and how many are out of date
- Staged changes bar (count, cost, Generate)
- Whole-song waveform (optional)
- Section blocks (name, time, origin, state)
- Selected section panel (lyrics, style, actions, move buttons)

## Do

- Stage edits and generate them together, with the cost beside Generate.
- Say why a section is out of date, in its note.
- Mark which sections the AI made and which a person recorded or uploaded.

## Avoid

- Do not regenerate the whole song for a local fix without saying so.
- Do not use amber for generating sections. Amber is only for edits, out-of-date sections and takes a person must pick.
- Do not use lime for the playhead or the played part. Lime marks AI-made sections and Generate only.
- Do not autoplay new takes when they arrive.

## On a phone

- The lane scrolls sideways inside its card; the page does not. Each block is at least 7rem wide.
- Blocks and buttons grow to 44px tall on touch screens, and moving uses buttons, never a drag.
- The keyboard hint is hidden on small screens.

## Accessibility: built in

- The sections are a horizontal listbox. Left and Right (or Up and Down) move between them, Home and End go to the ends, Enter or Space selects, and Escape clears the selection. Only one section is in the Tab order.
- Each section is named with its position, time, origin and state, for example "Chorus, 3 of 6, 0:40 to 1:02, Made by AI, Out of date".
- Alt with an arrow key moves the focused section and keeps focus on it. The selected section also has Move earlier and Move later buttons; at the ends they turn off and focus moves to the other one.
- State is always written in words with a mark: amber diamonds for edited, out of date and takes to compare; an alert icon for did not work; the working ring and the word Generating while it is made. The selected block has a check mark and a thicker ink border, and is read as selected.
- One polite status line says moves, the staged count when it changes, and when sections finish, fail or get new takes. It does not repeat progress.
- Under reduced motion the working ring stops and stays as a still outline next to the word Generating.
- The waveform is a seek slider with the time in words when onSeek is set.

## Accessibility: what you need to do

- Keep the order, edits and staged count saved, so nothing is lost if the person leaves before Generate.
- Pass generateCost so the price sits next to the button, and generateBlocked when the person cannot afford it.
- Make each new generation a new version of the whole song (for example with VersionHistory), and keep takes that were not chosen.
- Offer the lyrics as text next to the song for people who cannot hear it.
- Set note on a failed section to say whether it was charged, and on an out-of-date one to say why.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| sections (required) | `SongSection[]` |  | Sections in play order: id, name, start, end, origin (ai \| person \| upload), state, lyrics, styles, alternates, note. |
| duration (required) | `number` |  | Length of the whole song in seconds. |
| peaks | `number[] \| null` |  | Loudness for the whole-song waveform above the lane. Leave out to hide it; null shows it drawing. |
| position | `number` | `0` | Playhead in seconds. |
| onSeek | `(seconds: number) => void` |  | Makes the waveform a seek slider. |
| selectedId | `string \| null` | `null` | The selected section. |
| onSelect | `(id: string \| null) => void` |  | Called on click, Enter or Space; Escape clears it. |
| onReorder | `(ids: string[]) => void` |  | New order after Move earlier, Move later or Alt with an arrow key. Leave out to hide moving. |
| onRegenerate | `(id: string) => void` |  | Stages a new take of one section. |
| onExtend | `(id: string) => void` |  | Adds a new section after this one. |
| onEdit | `(id: string) => void` |  | Opens the section's lyrics and style for editing. |
| onOpenAlternates | `(id: string) => void` |  | Opens the new takes of a section in the has-alternates state. |
| onRetry | `(id: string) => void` |  | Tries a failed section again. |
| pendingChanges | `number` | `0` | Staged edits. Above 0 the amber bar shows the count and Generate. |
| onGenerate | `() => void` |  | Generates every staged change at once. |
| generateCost | `string` |  | Cost next to Generate, such as "about 20 credits". |
| generateBlocked | `string` |  | Why Generate cannot run. Turns it off and shows the reason. |
| title | `string` | `"Song structure"` | Heading, usually the song name. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the heading. |
| className | `string` |  | Extra classes. |

## States

- up to date: A section as it was made or recorded, labelled AI, Recorded or Uploaded.
- edited, not generated: Changed by the person but not made again yet: amber, in words, because a person has to press Generate.
- out of date: A section an edit nearby has made stale: amber with Out of date and a dashed border.
- generating: The lime working ring and the word Generating, because the AI is making it. Still under reduced motion.
- takes to compare: New takes are ready for this section: amber, N takes to compare.
- did not work: An alert icon, Try again and whether it was charged.
- changes staged: One amber bar counts the changes waiting, with the cost and a Generate button.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--lime`
- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--radius-card`
- `--radius-control`
- `--dur-fast`
- `--ease-out`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Edit a song: Select a section, then Regenerate, Extend after or move it. Each edit adds to the amber bar and the section after a changed one goes out of date. Generate makes them all at once; the sections then show new takes to compare.
- Every section state: Up to date, edited and not generated, out of date, generating, new takes to compare, and did not work. The failed Outro is selected, so it offers Try again.
- Narrow, cannot afford Generate: At phone width the lane scrolls sideways inside the card. generateBlocked turns Generate off and says why.

Source: src/organisms/SectionLane.tsx
