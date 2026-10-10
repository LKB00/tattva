# SpeakerNotes
Notes for one slide: an AI draft held apart until you keep it, "AI draft" or "Edited by you", and the word count and speaking time worked out in code.
Status: stable. Page: https://lkb00.github.io/tattva/#component-speaker-notes
SpeakerNotes is a labelled notes box for the current slide. An AI draft streams into a separate box and only replaces the notes when the person presses Keep. Kept notes carry an AI label; once the person types, it changes to "Edited by you" with a button to put the AI draft back. Drafting again over the person's own words asks first. The word count and speaking time are counted from the text, never asked of the model.
## When to use it

Helps a presenter get notes for a slide quickly while keeping what they will say in their own hands.

## Use it for

- The notes panel under the slide in a deck editor.
- Drafting notes for one slide on request, with Keep or Discard.
- Checking how long a slide will take to present.

## Not for

- Drafting text that goes into the slide or a document: use `suggestion-bar`
- Switching between your text and the AI's for any field: use `revert-toggle`
- A plain form text box: use `field`

## Anatomy

- Label or fold button
- Origin (AI draft or Edited by you)
- Words and speaking time
- Notes box
- Draft box with Keep and Discard
- Draft button
- Image credits

## Do

- Hold every AI draft apart until the person presses Keep.
- Show who wrote the notes: "AI draft" or "Edited by you".
- Count words and speaking time in code from the text the person sees.
- List AI images on the slide, so the presenter can say where they came from.

## Avoid

- Do not write AI notes straight into the box, even when it is empty.
- Do not ask the model how long the notes take to say.
- Do not keep the lime AI label after the person has edited the notes.
- Do not redraft notes for every slide without asking.

## On a phone

- Set collapsible to fold the notes under the slide behind a Speaker notes button.
- The notes box text is 16px on touch screens, so phones do not zoom in.
- Buttons get a 44px touch area; the words and time line wraps under the label when space is short.

## Accessibility: built in

- The notes box is a native textarea labelled "Speaker notes" and described by its slide.
- A polite live region says Drafting notes, Draft ready, Notes kept, Draft discarded or Notes could not be drafted. The streaming words are not read out.
- Origin is written in words: "AI draft" on a lime pill, or "Edited by you" with a pencil icon.
- Drafting over edited notes asks "Draft over your edits?" in place, with Keep mine focused first, so one key press never replaces the person's words.
- The fold button has aria-expanded and aria-controls.
- The working edge around a draft being written holds still under reduced motion.

## Accessibility: what you need to do

- Set state to edited as soon as the person changes AI-written notes, and back to kept if they revert.
- Pass the slide's real title in slideLabel, so the notes box is named after its slide.
- Set wordsPerMinute to the presenter's pace if you know it. The default is 130.
- Draft notes for many slides only on a clear request, and still stage each one for Keep or Discard.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| slideLabel (required) | `string` |  | Which slide the notes are for, such as "Slide 4: Pricing plans". Names the section and the notes box. |
| value (required) | `string` |  | The person's notes. AI text lands here only through onKeep. |
| onChange (required) | `(value: string) => void` |  | Called on every keystroke. |
| state (required) | `"empty" \| "generating" \| "proposed" \| "kept" \| "edited" \| "failed"` |  | Where the notes are. kept means the AI draft as kept; edited means the person wrote or changed them. |
| proposed | `string` |  | The AI draft, shown apart while generating or proposed. |
| onGenerate | `() => void` |  | Drafts notes for this slide. Asks first when the notes are edited by the person. |
| onKeep | `() => void` |  | Replaces the notes with the draft. |
| onDiscard | `() => void` |  | Drops the draft. The notes stay as they were. |
| onStop | `() => void` |  | Stops a draft that is still being written. |
| onRevert | `() => void` |  | Puts the AI draft back after an edit. Shows a revert button by "Edited by you". |
| wordsPerMinute | `number` | `130` | Speaking pace used to turn the word count into time. |
| imageCredits | `string[]` |  | Lines about images on the slide, such as "Photo on this slide: made by AI". |
| error | `string` |  | Why the draft failed, in plain words. |
| collapsible | `boolean` | `false` | Folds the notes behind a Speaker notes button. |
| defaultOpen | `boolean` | `true` | Whether folded notes start open. |
| className | `string` |  | Extra classes for the section. |

## States

- status: Set with the state prop.
- error: Set with the error prop.
- open or closed: Folded behind the Speaker notes button. Set collapsible.
- empty: No notes: placeholder text and Draft notes with AI.
- generating: Draft streams into a separate box with a lime working edge and Stop drafting. The person's notes are untouched.
- proposed: Draft waits with Keep (or "Keep, replacing my notes") and Discard.
- kept: AI draft kept: lime "AI draft" label.
- edited: "Edited by you", a revert button when onRevert is set, and drafting asks first.
- failed: Red line with the reason and Try drafting again. The notes are unchanged.

## Tokens

- `--surface`
- `--sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--lime`
- `--danger-fg`
- `--radius-field`
- `--radius-card`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Draft, keep, then edit: Draft notes with AI, then Keep. Type in the box: the label becomes "Edited by you" with a button to put the AI draft back. Drafting again now asks first.
- Every state: Empty, drafting, a draft to review next to the person's own notes, kept, edited and failed.
- Folded, on a phone: Collapsible notes under the slide, with image credits at the bottom.

Source: src/molecules/SpeakerNotes.tsx
