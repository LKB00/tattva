# ActionLog
A lasting list of what an assistant did, with who approved it and a timed Undo.
Status: stable. Page: https://lkb00.github.io/tattva/#component-action-log
ActionLog is a record of what an assistant did. Each row shows what happened, who did it, how it ended, when, and who approved it. While Undo is still allowed, the row shows how many minutes are left. When something cannot be undone, the row says so and gives the reason. A summary line and a filter help people find what they need.
## When to use it

A lasting record of what an assistant did, so people can check its work and undo it while there is still time. Each row says who acted, how it ended and who said yes.

## Use it for

- A history of the actions an assistant took for the person.
- Offering Undo for a limited time after an action.
- Explaining in words why an action cannot be undone.

## Not for

- Saved versions of a document to go back to: use `version-history`
- Points to return to inside a single run: use `checkpoint-list`
- A short catch-up after time away: use `re-entry-recap`

## Anatomy

- Summary line
- Filter by status
- Row: action, who, time
- Approved-by mark
- Status badge
- Undo button with time left, or 'Can't be undone' and the reason
- Status text for screen readers

## Do

- Show the time left on every Undo button.
- Say why an action cannot be undone.
- Keep the log after the session so people can check later.
- Show who approved each action.
- Keep undoMinutes up to date. The button shows the number you pass and does not count down by itself.

## Avoid

- Don't hide failed actions. Trust drops when failures are quiet.
- Don't offer Undo after the time is over.
- Don't promise Undo for things like sent emails.
- Don't remove undone rows. Show them as Undone.

## On a phone

- Each row wraps: the action text takes the full width and the status badge and Undo button drop underneath when the row is narrow.
- The filter control scrolls sideways inside its own box if its five options do not fit.
- Undo and the filter options keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- Each status has an icon and a word, never color alone.
- The Undo button's name includes the action and the time left.
- Screen readers hear the result of each filter change and each undo.
- The filter is one group of options that works with the arrow keys.
- Rows wrap on narrow screens, and the filter scrolls sideways instead of being cut off.

## Accessibility: what you need to do

- Write each action in plain words, because it is read as part of the Undo button's name.
- Give notUndoableReason for anything that can never be undone, so people learn why.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `ActionLogItem[]` |  | Rows: id, action, actor, status (done \| failed \| undone \| waiting), time (text), approvedBy, undoMinutes, notUndoableReason. |
| onUndo | `(id: string) => void` |  | Called when Undo is pressed. The row then shows Undone. |
| defaultFilter | `ActionStatus \| "all"` | `"all"` | Starting status filter. |
| labels | `ActionLogLabels` |  | Replace filter names, Undo text (undoFor receives the minutes left), the empty text and the not-undoable text. |
| className | `string` |  | Extra classes on the section. |

## States

- done: An action with status done shows a green badge, and an Undo button while undoMinutes is above zero.
- failed: An action with status failed shows a red badge.
- undone: An action with status undone, or one you just undid, shows a neutral badge.
- waiting: An action with status waiting shows an info badge.
- cannot undo: A done action with notUndoableReason shows that reason instead of an Undo button.
- undo ended: A done action with undoMinutes of 0 shows that the undo time is over.
- filtered empty: When the chosen filter matches nothing, a short message replaces the list.

## Tokens

- `--border`
- `--surface`
- `--success-soft`
- `--danger-soft`
- `--info-soft`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A morning of chores: Try the filter, then press Undo on the first row. It becomes Undone and the summary updates.
- Starting on failed actions: Open the log filtered to what went wrong.
- Nothing to show: When the filter matches no rows, the log says so in words.

Source: src/organisms/ActionLog.tsx
