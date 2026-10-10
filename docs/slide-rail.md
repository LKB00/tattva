# SlideRail
The list of slide thumbnails: move around, choose slides, reorder, and see each slide's state in words.
Status: stable. Page: https://lkb00.github.io/tattva/#component-slide-rail
SlideRail shows a deck as numbered thumbnails. Each slide says its state in words: waiting, writing, ready, edited by you, failed, outline changed or needs review. People pick the slide on the stage, choose several slides as the scope of an AI edit, reorder by drag or keyboard, and add, duplicate or delete slides with Undo. Delete always asks first. It is a column on wide screens and a sideways strip on phones.
## When to use it

Lets someone find their way around a deck the AI is building or editing, see which slides need them, and choose what the next AI edit may touch.

## Use it for

- The slide list beside the stage in a deck editor.
- Choosing several slides as the scope of an AI edit, such as "shorten slides 3 to 5".
- Following a deck build slide by slide, and retrying one failed slide without stopping the rest.

## Not for

- Planning the deck before slides exist: use `outline-editor`
- Overall progress of a long build: use `deck-build-progress`
- Picking one of several layouts for one slide: use `layout-alternatives`
- A gallery of finished images: use `variant-grid`

## Anatomy

- Title and slide count
- Add slide
- Slide number
- Thumbnail
- Working edge while writing
- AI mark
- State in words
- Drop line while dragging
- Undo note
- Action bar: Try again and More actions
- Delete question

## Do

- Show every slide's state, and keep failed slides from blocking the others.
- Let people choose several slides before an AI edit, so the edit only touches those.
- Pass onUndo whenever you pass onDelete.
- Pass the same slide drawing you give the stage. The rail scales it down.

## Avoid

- Don't use the AI colour for the selection, the current slide or the person's edits. It marks only slides being written and the AI mark.
- Don't make "outline changed" amber unless the person must act before export. Use review for that.
- Don't animate every thumbnail while a deck builds. One working edge per slide being written is enough.
- Don't delete on a single key press.

## On a phone

- Below 600px wide, "auto" turns the column into a sideways strip that snaps slide by slide, with 64px-tall thumbnails.
- Every slide is at least 44px tall to tap. Add slide, Try again and More actions grow to 44px on touch screens.
- Drag does not work on most phones, so Move earlier and Move later are in the More actions menu, which opens as a bottom sheet.
- A long press on a slide opens the same menu where the browser supports it; the visible More button always does.

## Accessibility: built in

- The list is a listbox, multi-selectable when onSelectionChange is set. Each slide is an option named "Slide 3 of 7, Orders by month, needs your review, made by AI" plus its error.
- Only the current slide is in the Tab order. Arrows move, Home and End jump, Shift with an arrow or Home or End extends the selection, Space adds or removes a slide, Ctrl+A or Cmd+A selects all, Escape goes back to one slide.
- Alt with an arrow moves the current slide and is announced: "Slide 4, What chefs told us, moved to position 3".
- Delete or Backspace opens a question below the list with Keep focused; Escape closes it. Nothing is deleted on one key.
- A polite live region announces milestones only: a slide failing or needing review, how many slides are ready, moves, deletes and Undo.
- Drag has a keyboard and menu alternative: Alt with an arrow, and Move earlier or Move later in More actions.
- Thumbnails are hidden from screen readers; the option name carries the title and state. States are words with an icon, never colour alone.
- Thumbnail placeholders stop shimmering and the working edge stops turning when reduced motion is on.

## Accessibility: what you need to do

- Give every slide a real title. Screen readers move through the deck by these titles.
- Keep the history yourself when you pass onUndo, and restore the slides and the current slide in it.
- After a delete, set a new currentId so focus has a slide to land on.
- Pass error in plain words for failed and review slides, and say whether anything was lost.
- Never let a deck-wide AI change rewrite slides marked edited unless the person chose them.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| slides (required) | `SlideRef[]` |  | The slides in order: id, title, status, and optional thumbnail, aiMade and error. |
| currentId (required) | `string` |  | The slide on the stage. It holds keyboard focus in the list. |
| onCurrentChange (required) | `(id: string) => void` |  | Called when the person moves to another slide. |
| selectedIds | `string[]` |  | Slides chosen as the scope of an edit. Defaults to the current slide. |
| onSelectionChange | `(ids: string[]) => void` |  | Turns on choosing several slides. |
| onReorder | `(from: number, to: number) => void` |  | Turns on drag, Alt with an arrow, and Move earlier or later. to is the new index. |
| onRetry | `(id: string) => void` |  | Shows Try again for a failed slide. |
| onInsertAfter | `(id: string) => void` |  | Shows Add slide, placed after this slide. |
| onDuplicate | `(ids: string[]) => void` |  | Shows Duplicate for the chosen slides. |
| onDelete | `(ids: string[]) => void` |  | Shows Delete. The rail always asks first, with Keep focused. |
| onUndo | `() => void` |  | Shows Undo after an add, duplicate, delete or move, and on Ctrl+Z or Cmd+Z in the list. |
| orientation | `"vertical" \| "horizontal" \| "auto"` | `"auto"` | "auto" is a column, and a sideways strip below 600px wide. |
| ratio | `"16:9" \| "4:3" \| "1:1" \| "4:5" \| "9:16" \| "fluid"` | `"16:9"` | Slide shape for the thumbnails. Fluid slides show as 16:9. |
| label | `string` | `"Slides"` | Name of the list, shown above it. |
| className | `string` |  | Give the vertical rail a height, such as h-160, so the list scrolls inside it. |

## States

- waiting: status "pending": the title on a still placeholder, with "Waiting".
- writing: status "generating": a working edge in the AI colour and "Writing…".
- edited by you: status "edited": a person mark and "Edited by you"; the AI mark is dropped.
- failed: status "failed": "Failed" in words, the error in the action bar and Try again.
- outline changed: status "stale": a neutral "Outline changed" note.
- needs review: status "review": amber "Needs review", only when the person must act.
- several chosen: Shift, Ctrl or Cmd with a click or arrow: chosen slides get a tint and a tick, and the bar says how many.
- dragging: An ink line shows where the slide will land.
- asking to delete: Delete opens a question with Keep focused; Undo shows after.

## Tokens

- `--lime`
- `--on-lime`
- `--attention`
- `--attention-fg`
- `--danger-fg`
- `--accent-soft`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--border`
- `--surface`
- `--surface-sunken`
- `--surface-hover`
- `--dur-fast`
- `--dur-base`
- `--ease-out`
- `--spacing`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A deck being built: Every state at once. Slide 5 is being written, slide 6 failed and can be tried again on its own, slide 3 needs review, and slide 4 was built before its outline changed. Try Shift with an arrow to choose several slides, Alt with an arrow to move one, and Delete then Undo.
- Sideways strip for phones: orientation="auto" does this by itself below 600px. Left and Right move between slides. Actions sit in the bar under the strip, so nothing depends on drag or hover.
- Read only, for reviewers: Pass only onCurrentChange and the rail is a plain list to move around in: no selection, no reorder and no actions.

Source: src/organisms/SlideRail.tsx
