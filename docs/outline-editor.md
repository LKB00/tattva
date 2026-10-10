# OutlineEditor
The plan of a deck before any slide is built: the AI drafts it, the person edits, reorders and approves it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-outline-editor
OutlineEditor shows the slides the AI plans to make, each with a title, a one-line description and its sources. Slides stream in while the AI drafts, and each one becomes editable once it is complete. The person can edit in place, add a slide after any other, remove one (Undo remove puts it back in its place), reorder with buttons or Alt and an arrow, and lock slides so Update outline leaves them alone. Any edit turns Ready into Edited, where Update outline (redraft) and Build slides (use as is) are both offered. Every slide needs a title before building.
## When to use it

Lets a person co-write the plan of a deck with the AI, and decide when it is good enough to build.

## Use it for

- The step between a brief and a built deck, where the person checks the slide list.
- Any generated document with sections the person may want to reorder, add or remove before the full text is written.
- Redrafting a plan around the person's edits while keeping the slides they locked.

## Not for

- A fixed plan of agent steps to approve or send back: use `plan-card`
- Progress while the slides are being built: use `generation-progress`
- Correcting one value the AI filled in: use `inline-edit`

## Anatomy

- Heading and slide count
- State badge
- State note or error
- AI overview
- Slide rows: number, title, description, sources, who wrote it, Move up, Move down, Add after, Lock, Remove
- Undo remove bar
- Add slide
- Build slides, Update outline and the estimate

## Do

- Offer Update outline and Build slides side by side once the person has edited, so they choose whether to redraft.
- Show where each slide's content comes from, and which slides the AI wrote.
- Keep the slides the person edited or locked when the outline is redrafted.
- Show the estimate next to Build, from your own code.

## Avoid

- Don't build automatically when drafting finishes; the person approves first.
- Don't colour the person's own slides, the Build button or the whole outline with the AI colour. Only the AI marks and the working edge use it.
- Don't animate each word as it streams in. One calm working edge is enough.
- Don't let an empty title through. Screen-reader users move through a deck by its titles.

## On a phone

- One column. The description folds under the title behind a Description button, and opens by itself when the row has an error.
- Move up, Move down, Add after, Lock and Remove are 44px on touch screens. Reorder works with these buttons; there is no drag.
- Build slides and Update outline sit in a bar that sticks to the bottom of the screen, above the safe area, and share the width.

## Accessibility: built in

- The outline is a section named by its heading. The slides are an ordered list named with the slide count, and each slide is a group named "Slide 3: title".
- Every field and button names its slide, such as "Slide 3 title", "Move slide 3 up" and "Add a slide after slide 3".
- Alt with Up or Down moves the slide while focus is anywhere in its row, including the title field. Focus stays on the same field or button after the move.
- When a move button turns off because the slide reached the end, focus moves to the other move button.
- Remove takes one press and is never final: focus goes to Undo remove, which puts the slide back in its place and returns focus to its title.
- Lock is a toggle button with aria-pressed.
- An empty title gets aria-invalid and a linked error, "Every slide needs a title". Build moves focus to the first one.
- A polite live region says milestones only: "Outline drafted, 6 slides", "Slide 4 moved to 3", "Outline updated, 6 slides", "Slide 2 removed. Undo is available." It never reads streamed words.
- The list is marked busy while the AI drafts or updates. Focus is not moved when the outline appears.
- New rows rise in and moved rows slide quickly; under reduced motion both happen at once with no animation.

## Accessibility: what you need to do

- Give the estimate from your own code (slides and credits), never from the model, and update it when the slide count changes.
- Pass pendingId while drafting so the half-written slide is read-only, and move state to ready when drafting ends; screen readers then hear "Outline drafted, 6 slides".
- Write the failed error in plain words and say whether anything was charged.
- Keep the outline in a column no wider than reading width, and do not take focus when it appears.
- If you set a heading label, keep it short; it also names the list.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `OutlineItem[]` |  | The slides, in order. Each has id, title, and optionally description, sources, locked, origin ("ai" or "person") and edited. |
| state (required) | `"drafting" \| "ready" \| "edited" \| "updating" \| "approved" \| "building" \| "failed"` |  | Where the outline is. Edits are allowed in drafting (finished slides), ready, edited and failed. |
| onItemsChange (required) | `(items: OutlineItem[]) => void` |  | Called with the new list after every edit, insert, remove, reorder, undo or lock. |
| onBuild (required) | `() => void` |  | Approve and build. Only called when every slide has a title. |
| onUpdate | `() => void` |  | Redraft the unlocked slides around the person's edits. Adds Update outline while edited, Try again when failed, and the Lock buttons. |
| onStateChange | `(state: OutlineState) => void` |  | Told when the first edit turns ready into edited. |
| pendingId | `string` |  | The slide the AI is still writing. It stays read-only and says so. |
| overview | `ReactNode` |  | The AI's short summary of the deck, marked as drafted by AI. |
| estimate | `ReactNode` |  | Slides and cost, worked out by your app, shown beside Build slides. |
| error | `ReactNode` |  | Why drafting failed, in plain words, shown in the failed state. |
| maxItems | `number` |  | Most slides allowed. Add turns off at the limit and says why. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's own heading. |
| labels | `Partial<OutlineEditorLabels>` |  | heading, build, update, retry, addEnd, titleError and failedNote, for wording or translation. |
| className | `string` |  | Extra classes on the section. |

## States

- status: Set with the state prop.
- error: Set with the error prop.
- drafting: state="drafting": slides stream in; the one in pendingId is read-only and says "Still writing this slide"; a working edge runs.
- empty: No slides yet: while drafting it says the first slide is coming; otherwise it invites adding one.
- ready: state="ready": Build slides and the estimate.
- edited: Any edit in ready, or state="edited": Update outline joins Build slides.
- updating: state="updating": read-only under a working edge; locked slides are marked.
- approved: state="approved": read-only with a check and a note.
- building: state="building": read-only, says slides are being built.
- failed: state="failed": what was written stays editable, with the error and Try again.
- missing title: Build with an empty title: field error, focus on it, a summary line, nothing built.
- at limit: items.length reaches maxItems: Add turns off and says why.
- removed: After a remove: Undo remove puts the slide back in its place.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--danger-fg`
- `--lime`
- `--on-lime`
- `--dur-fast`
- `--dur-base`
- `--ease-out`
- `--safe-bottom`
- `--shape-card`
- `--shape-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Draft, edit and build: Slides stream in title first, and only the one being written is read-only. Edit any title and the badge changes to Edited by you, with Update outline beside Build slides. Lock a slide to keep it when updating. Build moves to Approved, then Building.
- Failed, updating and building: When drafting stops, what was written stays editable and the error says why, with Try again beside Build. While the AI updates, the outline is read-only under one calm working edge and locked slides say so. While building, it reads as a plain list.
- Missing title and the slide limit: Press Build slides: the empty title gets the error "Every slide needs a title" and focus, and nothing is built. At the limit, Add is turned off and the reason is written beside it. Remove a slide to see Undo remove.

Source: src/organisms/OutlineEditor.tsx
