# TranscriptAudioEditor
Edit recorded speech by editing its words: remove words to cut the audio, or change words to make new audio in a consented voice.
Status: stable. Page: https://lkb00.github.io/tattva/#component-transcript-audio-editor
TranscriptAudioEditor shows a recording's words, each tied to a time, with a waveform and a docked player above. Removing words strikes them through, hatches the same stretch on the waveform and makes playback skip it. Changing words sends the phrase to a voice model; while it works the phrase has a moving AI-coloured underline and the words Making new audio, and when the new audio is ready it is marked AI and waits for Play, Retry, Keep or Revert. Filler words are marked and can be removed in one go, every edit point gets a dashed line, and Undo takes back the last edit.
## When to use it

Lets someone fix a voice-over, podcast or interview by editing text instead of cutting a waveform, and see exactly which words the AI re-spoke.

## Use it for

- Cutting filler words, false starts and long pauses from a recording.
- Fixing a wrong word in a voice-over without recording it again, using a voice the speaker agreed to.
- Reviewing which parts of a finished recording were made by AI before it is published.

## Not for

- Reading along with a call recording, without editing: use `transcript-sync`
- Choosing between several takes of a whole clip: use `take-picker`
- Checking and recording a speaker's consent: use `voice-consent-check`

## Anatomy

- Docked player
- Waveform with cuts and new audio
- Edit summary
- Remove filler words
- Undo
- Keyboard hint
- Speaker and time
- Words
- Edit point
- New audio bar (Play, Retry, Keep, Revert)
- Selection bar
- New words field

## Do

- Keep removed words visible, struck through, so people can restore them.
- Wait for Keep before treating new audio as final, and keep the recording until then.
- Say why Change words is off, such as no consent or too many characters.
- Make every edit undoable.

## Avoid

- Don't use the AI colour for the playing word or the person's own speech. Only new audio made by AI gets it.
- Don't use amber for new audio waiting to be kept. Nothing is wrong, and Keep is not urgent.
- Don't make new audio in a voice without the speaker's recorded consent.
- Don't announce each word as it plays. It would talk over the audio.

## On a phone

- It fills the width. The player, waveform and words stack in one column.
- A tap selects a word; the − and + buttons in the selection bar make the selection shorter or longer, so no dragging is needed.
- Lines are 44px tall on a touch screen, and every button in the bars is 44px tall.
- The selection bar sticks to the bottom of the editor, so it stays in reach and sits just above the keyboard while typing new words.
- The keyboard shortcuts hint is hidden on narrow screens.

## Accessibility: built in

- Each paragraph is a multi-select listbox named by speaker and time, and every word is an option. The whole transcript is one tab stop.
- Arrow keys move by word, Up and Down by paragraph, Home and End to the paragraph's ends, Ctrl+Home and Ctrl+End to the whole transcript's. Shift extends the selection and Space selects one word.
- Delete removes the selection, D opens Change words, Enter keeps new audio (or moves the playhead to the word), Escape clears the selection, Ctrl+Z undoes. Shortcuts are off while typing in the new words field.
- Removed, filler, making new audio, new audio by AI, kept and failed are all said in words after each word, never by colour or strike-through alone.
- Change words stays focusable when it is off, and its reason is linked to it as a description.
- A status region announces edits and finished or failed audio. The word being played is never announced.
- The waveform is a seek slider with the time in words, and lists cuts and new audio in its description.
- While new audio is made, its underline moves only when motion is allowed; the words Making new audio are always shown.

## Accessibility: what you need to do

- Only set voiceAvailable when the speaker has consented to their voice being used, and say why in voiceUnavailableReason when they have not.
- Keep an undo history and pass onUndo with an undoLabel that says what it will undo.
- Pass the voice model's real limits in limits, so people learn them before they type.
- Label exported audio as partly AI-made when any span is kept.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| words (required) | `TranscriptWord[]` |  | Each word: id, text, start and end in seconds, and optional speaker and filler. |
| spans | `TranscriptEditSpan[]` | `[]` | Edits so far: id, wordIds, state ("original" \| "removed" \| "regenerating" \| "regenerated" \| "kept" \| "reverted" \| "failed"), and optional newText and error. |
| speakers | `Record<string, { label: string }>` |  | Names for the speaker keys. Each run of words by one speaker is a paragraph. |
| audio | `Omit<AudioPlayerProps, "current" \| "onTimeChange" \| "compact" \| ...>` |  | Wires in a docked player. The part keeps the time, skips removed words and plays new phrases. |
| peaks | `number[] \| null` |  | Loudness for the waveform when you keep your own player. |
| duration | `number` |  | Length in seconds. Defaults to the audio's duration or the last word's end. |
| position | `number` |  | Playback position in seconds, when your own player keeps it. |
| onSeek | `(seconds: number) => void` |  | Called when a word is clicked, the waveform is moved or Play is pressed on new audio. |
| onRemove | `(wordIds: string[]) => void` |  | Shows Remove and Remove filler words. Make a removed span. |
| onRegenerate | `(wordIds: string[], newText?: string) => void` |  | Shows Change words. Make a regenerating span, then set it to regenerated or failed. |
| onSmooth | `(wordIds: string[]) => void` |  | Shows Smooth edit when the selection includes a cut. |
| onKeep | `(spanId: string) => void` |  | Keep new audio. Also on Enter while the phrase has focus. |
| onRetry | `(spanId: string) => void` |  | Make the new audio again. |
| onRevert | `(spanId: string) => void` |  | Back to the recording. Also restores removed words. |
| onUndo | `() => void` |  | Shows Undo, and runs on Ctrl+Z or Cmd+Z in the editor. |
| undoLabel | `string` | `"Undo"` | What Undo will undo. Used as the button's name. |
| voiceAvailable | `boolean` | `true` | False when there is no consented voice. Change words then says why. |
| voiceName | `string` |  | Whose voice new audio uses, shown while typing new words and in the AI label. |
| voiceUnavailableReason | `string` |  | Why the voice cannot be used, in one line. |
| limits | `{ maxChars?: number; languages?: string[] }` |  | The voice model's limits, shown before typing and checked against the selection. |
| label | `string` | `"Transcript"` | Name of the transcript region. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- removed: Struck-through words that playback skips; the waveform hatches the same stretch. They stay visible so they can be restored.
- regenerating: A phrase being spoken again in a consented voice: a moving lime underline and Making new audio. Text only under reduced motion.
- regenerated: New AI audio, marked with a lime underline and an AI label, with Play, Retry, Keep and Revert.
- kept: New audio the person accepted; the AI mark stays so it is always clear which words were made.
- failed: A dashed danger underline and the reason in words, with Retry and Revert.
- filler words: Words such as um and like get a neutral dotted underline and one button removes them all.
- change not allowed: When a phrase cannot be changed (no consented voice, crosses a cut, two speakers, too long) the reason is written in one line.

## Tokens

- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--surface`
- `--surface-raised`
- `--surface-sunken`
- `--border`
- `--lime`
- `--danger-fg`
- `--radius-card`
- `--radius-field`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Edit a podcast intro: Press Play to hear it; the word being played gets a tint. Click a word, Shift-click another, then Remove or Change words. New audio takes a moment, then waits for Keep or Revert. Remove filler words cuts every marked filler at once, and Undo takes back each step.
- Every state: Removed words are struck through and hatched on the waveform. One phrase is making new audio, one is ready and waiting, one was kept and one failed with a reason. Each state is also said in words for screen readers.
- No consented voice: Removing words still works, but Change words says in one line why it is off. Select a few words to see it. The limits are said before typing.

Source: src/organisms/TranscriptAudioEditor.tsx
