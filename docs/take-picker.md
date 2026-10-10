# TakePicker
Compare a few AI-made takes of the same request, hear them at the same moment, and keep one.
Status: stable. Page: https://lkb00.github.io/tattva/#component-take-picker
TakePicker lists two to four (or more) audio takes made from one request. Each row has Play, a waveform you can seek, the length, a few words on what is different, and Keep. One playhead is shared by every take, so moving from one take to the next plays from the same moment, which makes the difference easy to hear. Takes still being made keep their slot and say so, a failed take explains itself and can be tried again, and once every take is done and none is kept, an amber line asks the person to pick one. Takes not kept stay in history.
## When to use it

Helps a person choose the best of several generated takes by ear, without losing the ones they did not choose.

## Use it for

- Choosing between two to four song takes from one prompt.
- Choosing a new version of one section, heard with a few seconds of the song around it.
- Picking several short sound effects at once, with multiple.

## Not for

- Video takes: use `take-grid`
- Image variations: use `variant-grid`
- Playing one finished clip: use `audio-player`
- Earlier versions of the whole song: use `version-history`

## Anatomy

- Heading
- Request
- AI label
- Pick a take line (amber)
- Take row: Play, AI mark, name, number key, Kept, time, what is different, waveform, Keep
- Making row
- Failed row with Try again
- Key hint
- History note
- Cost
- Make more

## Do

- Keep the takes that were not chosen, and say where they went.
- Say what is different about each take in a few plain words.
- Show the cost of making more beside the button.
- For a section, play a little of the song around it so the joins can be heard.

## Avoid

- Don't autoplay a take when it arrives, or play a preview on hover.
- Don't colour the waveform or the playhead with the AI colour. Only the AI marks and Make more use it.
- Don't use amber for "making" or "new take ready". Amber appears only when the person must pick.
- Don't describe takes as sounding like a real singer or band.

## On a phone

- Takes are stacked rows. Play is 44px on the left and Keep sits on the right, 44px tall on touch screens.
- Each waveform is a 44px tall seek area. On very narrow rows it becomes a plain bar.
- Number keys and their hints are hidden on touch screens.
- Make more and its cost wrap under the history note when space is short.

## Accessibility: built in

- The picker is a section named by its heading, and the takes are a list named by the same words.
- Play on each row is a toggle button named "Play Take 2" with aria-pressed. Starting a take stops any other player on the page.
- Each waveform is a slider named "Seek, Take 2" with the time in words; see Waveform for its keys.
- Keep is a toggle button named "Keep Take 2" with aria-pressed. The kept row also shows a check mark and the word Kept.
- Keep is disabled until a take has finished, with a tooltip saying why.
- Keys 1 to 9 play that take while focus is in the list, never while typing or with a modifier key. A key hint shows this on screens with a mouse.
- One status region speaks changes only, such as "Making 3 takes.", "1 of 3 takes ready, 2 still being made." and "3 takes ready. Pick one to keep." It never reads the clock.
- What is different is read as one line starting "Different:".
- Under reduced motion, rows do not rise in, the making dot does not pulse, and the playhead moves in steps.

## Accessibility: what you need to do

- Give every take a unique label, such as "Take 2". It names the Play, Seek and Keep buttons.
- Write differs in plain words about sound (tempo, voice, instruments), never as "sounds like" a real artist.
- Never start a take by itself when it arrives. The picker only plays after a press.
- Say in error why a take failed and whether the person was charged.
- Keep the takes that were not chosen in history, and say so in note.
- Offer lyrics or a written description of each take where you can, since audio alone is not enough for everyone.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| takes (required) | `AudioTake[]` |  | The takes: id, label, status (pending, streaming, ready, failed), and optional src, peaks, duration, madeUpTo, differs and error. |
| kept (required) | `string[]` |  | Ids of the kept takes. |
| onKeptChange (required) | `(ids: string[]) => void` |  | Called with the new kept ids when Keep is pressed. |
| multiple | `boolean` | `false` | Lets the person keep more than one take. Off, Keep works like a radio choice. |
| onMore | `() => void` |  | Shows the make-more button. It shows a busy state while any take is still being made. |
| moreLabel | `string` | `"Make 2 more"` | Text of the make-more button. |
| moreCost | `string` |  | Cost shown beside the make-more button, such as "about 10 credits". |
| section | `{ start: number; end: number; label: string }` |  | The takes replace one section of a longer song. Play runs around the section and the section is marked on each waveform. |
| context | `number` | `3` | Seconds of the song played before and after the section. |
| onRetryTake | `(id: string) => void` |  | Shows Try again on a failed take. |
| title | `string` | `"Takes"` | Heading of the picker. Also names the list. |
| prompt | `string` |  | The request the takes were made from, shown under the heading. |
| note | `string` | `"Takes you don't keep stay in history."` | Line beside the make-more button. |
| requirePick | `boolean` | `true` | Once every take is done and none is kept, an amber line asks the person to pick one. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the heading. |
| className | `string` |  | Extra classes on the picker. |

## States

- making: Every take is pending: each slot keeps its height and reads "Making take 2" next to a small AI dot.
- partly ready: Some takes are ready or still making their end (streaming) while others are pending. Ready ones can be played and kept.
- pick a take: Every take is done and none is kept: an amber line with a dot and words asks the person to pick one. Turn off with requirePick={false}.
- kept: The kept row has a dark border, a check mark and the word Kept, and its Keep button is pressed.
- failed: A take that could not be made shows the reason and, with onRetryTake, Try again. When every take failed, one message replaces the list.
- playing: One take at a time. Moving to another take plays from the same moment.

## Tokens

- `--lime`
- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--accent`
- `--fg`
- `--fg-muted`
- `--border`
- `--border-strong`
- `--surface`
- `--surface-sunken`
- `--danger-fg`
- `--dur-base`
- `--dur-fast`
- `--dur-instant`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Three song takes, pick one: Every take is done and none is kept yet, so the amber line asks for a pick. Press Play on Take 1, then Play on Take 2: it carries on from the same moment. Make 2 more shows the making, still-making-the-end and ready states, and the cost sits beside the button.
- Takes for one section, with a failed take: With section set, Play runs from a few seconds before the chorus to a few seconds after it, so the joins can be heard, and the chorus is marked as AI-made on each waveform. Take 3 failed and says why; Try again keeps its slot while it is made again.
- Making, partly ready, and keeping several: While every take is still being made, each slot keeps its height and says which take it is making. Partly ready: a finished take can be played while the next is still making its end; nothing is amber yet because the person cannot act on all of them. With multiple, Keep works like a check box.

Source: src/organisms/TakePicker.tsx
