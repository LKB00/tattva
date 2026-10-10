# DiffView
Review the changes an assistant made to your files, and keep or reject each one.
Status: stable. Page: https://lkb00.github.io/tattva/#component-diff-view
DiffView shows a list of changed files and the changes in the chosen file. Each group of changes has its own Keep and Reject. Each file also has Keep and Reject, which decide all its changes at once. A file is kept when every change is kept, rejected when every change is rejected, and partly kept when it is mixed. Added and removed lines have a plus or minus sign, so you do not need color to tell them apart. A bar at the bottom offers Keep all, Reject all and Next file, and counts the files still to review. Use it when an assistant has edited files and you decide what stays.
## When to use it

The place to decide what stays after an assistant edits files. Files are listed on one side and the chosen file's changes on the other, so people can decide one group of lines, a whole file, or everything at once.

## Use it for

- Reviewing edits an assistant made before they are saved or shared.
- Letting people keep some changes in a file and reject others.
- Working through many changed files, with a count of how many are left.

## Not for

- A short summary of changed files without the lines: use `diff-file-row`
- Showing code that is not a change: use `code-block`
- Going back to an earlier saved version of the whole work: use `version-history`

## Anatomy

- File list (one row per file)
- Change heading with Keep and Reject
- Changed lines (old number, new number, sign, text)
- Bottom bar (files left, Keep all, Reject all, Next file)
- Spoken update

## Do

- Show how many files are left, so people know how much remains.
- Give Keep all and Reject all the same visual weight.
- Save people's choices in your app if the review must survive a page reload.
- Show real line numbers so people can find each change.

## Avoid

- Don't mark lines with only color. Keep the plus and minus signs.
- Don't offer Keep all without showing how many files it affects. Changes already decided stay as they are.
- Don't use it to compare long paragraphs of writing. It shows lines in a fixed-width font.

## On a phone

- Below 768px wide the file list sits above the changes instead of beside them.
- Each block of lines scrolls sideways on its own, because the lines do not wrap, and the two line-number columns use 96px of a phone screen.
- Keep, Reject and Undo buttons keep their size and have a 44px tap area on a touch screen, and the footer buttons wrap onto more rows.

## Accessibility: built in

- Added and removed lines show a plus or minus sign, and screen readers hear "Added:" or "Removed:" before the text.
- Line numbers are hidden from screen readers so they do not interrupt the text.
- Every Keep, Reject and Undo button names the change and the file, for example "Keep hunk 2 in notes/trip-plan.txt".
- Screen readers hear each choice, and how many files are left to review.
- Each group of lines can be reached with Tab and scrolled sideways, so long lines can be read.

## Accessibility: what you need to do

- If you translate the labels, also pass hunk, remaining, announceFile, announceHunk and announceAll, because they are spoken in button names and updates.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| files (required) | `DiffFile[]` |  | Files to review. Each has id, path and hunks. Counts are computed from the hunk lines. |
| statuses | `Record<string, DiffReviewState>` |  | Review state per file id, for controlled use. Missing ids are pending. |
| defaultStatuses | `Record<string, DiffReviewState>` |  | Initial states when uncontrolled. |
| onStatusesChange | `(next: Record<string, DiffReviewState>) => void` |  | Called after any decision at file or hunk level. File states are derived from the hunks, so a mixed file reports "partial". |
| hunkStatuses | `Record<string, DiffHunkState[]>` |  | Decision per hunk, by file id then hunk index, for controlled use. Missing entries follow the file's kept or rejected decision, or pending. |
| defaultHunkStatuses | `Record<string, DiffHunkState[]>` |  | Initial hunk decisions when uncontrolled. |
| onHunkStatusesChange | `(next: Record<string, DiffHunkState[]>) => void` |  | Called after any decision, with the decisions for every hunk. |
| onHunkChange | `(fileId: string, hunkIndex: number, state: DiffHunkState) => void` |  | Called when one hunk's Keep, Reject or Undo is chosen. The index starts at 0. |
| activeId | `string` |  | File whose hunks are shown, for controlled use. |
| defaultActiveId | `string` |  | Initial file when uncontrolled. Defaults to the first file. |
| onActiveChange | `(id: string) => void` |  | Called when the shown file changes. |
| labels | `DiffViewLabels` |  | Replace the visible text, including the remaining-count function, the hunk title function, the keep, reject, kept, rejected, partial and undo words, and announceFile, announceHunk and announceAll, the sentences screen readers hear after each decision. |
| className | `string` |  | Extra classes on the outer section. |

## States

- pending: A file or change block with no decision yet shows Keep and Reject buttons.
- kept: After Keep, the block shows a green Kept badge and an Undo button.
- rejected: After Reject, the block shows a red Rejected badge, an Undo button and dimmed lines.
- partly kept: A file with some blocks kept and others undecided shows as partly kept in the file list.
- all reviewed: When nothing is left to review, the footer says so and Keep all, Reject all and Next file are disabled.
- empty: With no files, only the line No changes to review is shown.
- wide lines: Long lines scroll sideways inside each block, which can be focused with the keyboard.

## Tokens

- `--success-soft`
- `--success-fg`
- `--danger-soft`
- `--danger-fg`
- `--surface-sunken`
- `--border`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Review two files: Decide per file, per change, or use the bottom bar. Next file jumps to a file you have not finished.
- Review one change at a time: The first file has two changes. Keep one and reject the other, and the file shows Partly kept.
- Partly reviewed: Start with one file already decided. The bottom bar shows one file left.

Source: src/organisms/DiffView.tsx
