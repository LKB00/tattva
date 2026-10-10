# CheckpointList
A list of earlier steps you can go back to, with restore and summarize buttons and a confirm step.
Status: stable. Page: https://lkb00.github.io/tattva/#component-checkpoint-list
CheckpointList shows each earlier request with how long ago it was and how many files changed. Rewind on a row opens choices: Restore everything, Restore conversation only, Restore work only and Summarize from here. Restores ask for confirmation first. The current step is marked and has no choices. A note area can say what is not covered.
## When to use it

Lets people go back to an earlier step of their work or chat. Restores ask for confirmation inside the row, so people see what they are about to undo.

## Use it for

- An agent or coding session where each request changes files.
- Undoing the conversation, the work, or both, back to one request.
- Shortening a long chat from one point with Summarize from here.

## Not for

- Stepping between versions of one message: use `version-pager`
- Named saves of a document or design: use `version-history`
- Undoing one AI edit to a short piece of text: use `revert-toggle`

## Anatomy

- Request
- Time and file count
- Current marker
- Rewind button
- Choices
- Confirm step
- Note about what is not covered

## Do

- Keep the confirm step in the row so the person sees what they are acting on.
- Show the file count so people see what a restore will change.
- Fill in the limitations note when some changes are not tracked, so people know before they restore.

## Avoid

- Do not skip the confirm step for the restores.
- Do not use a pop-up window for the confirmation.
- Do not offer choices on the current step. There is nothing to restore.

## On a phone

- Each row shows the prompt on one line and cuts it off with an ellipsis. The full text is in a title attribute, which a touch screen does not show, so on a phone it is not available.
- Rewind opens the restore choices under the row; they wrap, and every button has a 44px tap area on a touch screen.
- The confirm text and its warning wrap, so the destructive step stays readable on a narrow screen.

## Accessibility: built in

- The rows are a numbered list, and the current row is marked as the current step for screen readers.
- Rewind tells screen readers whether its choices are open.
- The confirm step is a named group that says what the restore will remove.
- Restore work only is turned off for a step with no changed files.
- Keyboard focus follows the choices: picking a restore moves it to the confirm step, so the warning is read; Cancel returns it to that choice; after a restore or a summary it returns to the row's Rewind button, or to the row itself if it became the current one.

## Accessibility: what you need to do

- Pass currentId, so screen readers can tell which step is the current one.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| checkpoints (required) | `Checkpoint[]` |  | Rows with id, prompt, time and files. Rendered in the order given. |
| currentId | `string` |  | Id of the current checkpoint. It is marked and has no actions. |
| onRestore | `(id: string, mode: RestoreMode) => void` |  | Called after the person confirms. Mode is everything, conversation or work. |
| onSummarize | `(id: string) => void` |  | Called when Summarize from here is chosen. It has no confirm step. |
| limitations | `ReactNode` |  | Slot under the list for what checkpoints do not cover. |
| labels | `Partial<Record<RestoreMode \| "summarize" \| "confirm" \| "cancel" \| "current" \| "rewind", string>>` |  | Overrides for visible labels. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- current: The checkpoint whose id matches currentId shows a Current badge in place of the Rewind button.
- rewind options: Pressing Rewind opens the restore choices under that checkpoint.
- confirm: Choosing a restore mode shows a plain warning with a Confirm and a Cancel button before anything happens.
- no files changed: Restore work only is disabled for a checkpoint where files is 0.

## Tokens

- `--surface`
- `--surface-sunken`
- `--danger`
- `--border`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Rewind list: In this demo, restoring moves the marker to the chosen step. A step with no changed files cannot use Restore work only.
- Your own wording: Change any visible label.

Source: src/organisms/CheckpointList.tsx
