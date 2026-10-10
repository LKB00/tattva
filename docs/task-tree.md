# TaskTree
A list of tasks and the smaller tasks inside them, each with a status and an Open button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-task-tree
TaskTree lists tasks, with smaller tasks indented beneath them. Each row shows a name, a status in words beside an icon, a (+N) count of tasks inside it, and an Open button. Bigger tasks open and close. A failed row stays until you dismiss it. A finished row can remove itself after a short wait. Use it beside the box where people type, to show what helpers are doing.
## When to use it

Shows the helpers an assistant has started, with smaller tasks indented under the task that started them. Failed rows wait for you, and finished rows can tidy themselves away.

## Use it for

- Beside the box where people type, to show what helpers are doing.
- A task that splits into smaller tasks, each with its own status.
- Letting people open one helper to see what it did.

## Not for

- The steps of one task in the order they happen: use `step-timeline`
- Separate tasks grouped by what they need from the person: use `agent-session-list`
- A to-do list the person ticks off: use `checklist`

## Anatomy

- Open and close arrow
- Status icon
- Name
- (+N) count
- Status in words
- Open button
- Dismiss button (failed rows)
- Spoken update

## Do

- Keep failed rows visible until the person dismisses them.
- Remove the row from your own data when it is dismissed, so a later update does not bring it back.
- Let finished rows leave on their own when they would otherwise pile up.
- Use Open to take people to that task's own page.

## Avoid

- Don't show status with only color. Each row has an icon shape and words.
- Don't make the wait so short that a result vanishes before it can be read.
- Don't nest deeper than people can follow. Each level moves further right.
- Don't use it for a simple list of steps in order. Use StepTimeline.

## On a phone

- Each level of nesting indents by 20px, so deep trees leave less width for the task name, which is cut with an ellipsis.
- The status word and Open button wrap under the name when the row is narrow.
- The expand, Open and dismiss controls keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- Rows are list items, and bigger tasks have a button that says Expand or Collapse with the task name.
- Screen readers hear the (+N) count as the number of tasks inside.
- Status is an icon shape plus words. Partial uses a half-filled circle.
- Open and Dismiss buttons include the task name, and each removal, timed ones too, is announced.
- The running icon spins, and stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Leave dismissAfterMs off if people need time to read finished rows.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| tasks (required) | `TaskNode[]` |  | Root tasks. Each has id, name, status (running, done, failed, stopped or partial) and optional children. |
| onOpen | `(id: string) => void` |  | Called by a row's Open button. |
| onDismiss | `(id: string) => void` |  | Called when a row is dismissed, either by the Dismiss button on a failed row or by dismissAfterMs on a done row. The tree hides the row at once, and your app removes it from its data here. |
| dismissAfterMs | `number` | `undefined` | Milliseconds after which a done row is dismissed and onDismiss(id) is called. Off when undefined. Failed rows never auto-dismiss. A done parent waits until its nested rows are done. The timer is not motion, so reduced motion does not change it. |
| defaultCollapsed | `string[]` | `[]` | Ids of parents that start collapsed. |
| labels | `TaskTreeLabels` |  | Replace status names and button text. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- running: A task with status running shows the working icon.
- done: A task with status done shows the completed icon, and is removed after dismissAfterMs if that is set and its children are also done.
- failed: A task with status failed shows the failed icon and a dismiss button that hides it.
- stopped: A task with status stopped shows the stopped icon.
- partial: A task with status partial shows a half-filled circle.
- collapsed: A task with children can be collapsed to hide them; pass their ids in defaultCollapsed to start closed.
- hover: A row gets a soft background under the pointer.

## Tokens

- `--surface`
- `--border`
- `--surface-hover`
- `--danger`
- `--success`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Tasks inside tasks: The (+N) count includes every task inside. Close a parent task to hide what is inside.
- Dismissing a failed task: Failed rows have a Dismiss button and stay until you use it.
- Finished tasks leave on their own: The finished row disappears after 4 seconds. The failed row stays.

Source: src/organisms/TaskTree.tsx
