# DiffFileRow
One changed file in a review, with how much was added and removed, and buttons to keep or reject it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-diff-file-row
DiffFileRow shows a file name, how many lines were added and removed, and buttons to keep or reject the file. After you choose, it shows a label with an icon and words. Undo puts it back. If you kept some changes in the file and not others, it says Partly kept. DiffView uses it for its file list. You can also use it alone in a short summary.
## When to use it

One line per changed file, so people can see the size of each change and decide on the whole file in one step. After a choice the buttons become a labelled result, so the list shows what is settled.

## Use it for

- A short list of changed files in a summary, with Keep and Reject for each.
- A file list beside your own display of the changed lines.
- Showing which files are kept, rejected or partly kept after a review.

## Not for

- Reviewing the changed lines themselves: use `diff-view`
- A file the person attached to a message: use `attachment-chip`

## Anatomy

- File icon
- File name (folder faded, name bold)
- Counts (added, removed)
- Keep and Reject buttons, or a result label
- Partly kept label (when choices differ)
- Undo (optional)

## Do

- Show both counts, even when one is zero.
- Keep the full file path available, since many files share a name.
- Pass onReset if people should be able to change their mind. Without it, decided rows have no Undo.

## Avoid

- Don't show the counts with only color. Keep the plus and minus signs.
- Don't hide Reject behind Keep. Show both until a choice is made.
- Don't drop the file name to save space. Shorten the folder part instead.

## On a phone

- The file name takes the first line and is cut with an ellipsis, with the Keep and Reject buttons wrapping under it when the row is narrow.
- Tapping the name selects the file, and every button has a 44px tap area on a touch screen.
- The row highlight on hover is only decoration, so selection is shown without hover.

## Accessibility: built in

- Keep, Reject and Undo include the file path in their names, so screen readers know which file they act on.
- The selected file is marked as the current one for screen readers.
- A decided file shows an icon and words, not only a color. A partly kept file shows a half-filled icon and the words Partly kept.
- The counts use plus and minus signs as well as color, and screen readers hear them as a sentence, such as "12 lines added, 3 removed".
- After Keep, Reject or Undo, keyboard focus moves to the file name, which now says the new state, such as "Kept".

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| path (required) | `string` |  | File path. The directory part is muted and the file name is emphasised. |
| added (required) | `number` |  | Count of added lines. |
| removed (required) | `number` |  | Count of removed lines. |
| state | `"pending" \| "kept" \| "rejected" \| "partial"` | `"pending"` | Review state. Pending shows the buttons, kept and rejected show a badge, and partial shows a Partly kept badge beside the buttons. DiffView derives partial from the hunks. |
| selected | `boolean` |  | Marks the row as the file currently shown. Sets aria-current on the name button. |
| onSelect | `() => void` |  | Called when the name is chosen. |
| onKeep | `() => void` |  | Called by the Keep button. In DiffView this decides every hunk in the file. |
| onReject | `() => void` |  | Called by the Reject button. |
| onReset | `() => void` |  | Adds an Undo button to decided and partly kept rows. |
| labels | `{ keep, reject, kept, rejected, partial, undo, lines }` |  | Replace the button and badge text, and lines(added, removed), the sentence screen readers hear for the counts. |
| className | `string` |  | Extra classes on the row. |

## States

- status: Set with the state prop.
- selected: Set with the selected prop.

## Tokens

- `--success-fg`
- `--danger-fg`
- `--surface-sunken`
- `--surface-hover`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Waiting, kept and rejected: Choose Keep or Reject to see the label. Undo puts the row back.
- Partly kept: Some changes in the file are kept and others are not. Keep and Reject still decide the whole file.
- A new file: A file with nothing removed still shows both counts.

Source: src/molecules/DiffFileRow.tsx
