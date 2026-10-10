# AgentSessionList
A list of assistant tasks grouped by what they need, with a Peek panel to read the latest and reply.
Status: stable. Page: https://lkb00.github.io/tattva/#component-agent-session-list
AgentSessionList groups tasks under Needs input, Working, Ready for review and Completed, each with a count. A row shows a status icon, the task name, a one-line summary marked as written by AI, how old it is and an optional link label. Peek opens the latest update or question, how long it has waited, and a box to reply. Use it as the home screen for assistants working in the background.
## When to use it

A home screen for assistants working in the background, sorted by what each one needs from you. Peek lets people read the latest and reply without leaving the list.

## Use it for

- Showing several assistant tasks at once, grouped into needs input, working, ready for review and completed.
- Answering a waiting assistant straight from the list.
- Showing a one-line summary, written by the assistant, for each task.

## Not for

- Only the items that are waiting on the person, across all runs: use `needs-you-inbox`
- A list of past chats: use `conversation-list`
- One task broken into smaller tasks: use `task-tree`

## Anatomy

- Group heading with count
- Row (status icon, name, link label, age, Peek)
- Summary written by AI
- Peek panel (update or question, wait time, reply box)
- Spoken update

## Do

- Keep the AI-written label on summaries written by AI.
- Put Needs input first so waiting tasks are easy to find.
- Show how long a task has waited in the Peek panel.

## Avoid

- Don't remove the AI-written label from summaries written by AI.
- Don't rely on heading color. The group name and count are words.
- Don't use amber on rows that are not waiting for a person.

## On a phone

- Each row wraps, and the age and Peek button move under the name when the row is narrow.
- Opening a peek shows a reply field that is 44px tall with 16px text on a touch screen, so the page does not zoom.
- The summary and peek panel are indented 28px to line up with the name, which narrows them a little.

## Accessibility: built in

- Each group is named by its heading, and the count is read with the word sessions.
- Peek is a button that says whether it is open, and its name includes the task.
- The reply box and its send button are named with the task.
- Screen readers hear when a reply is sent.
- Each status icon has its own shape and a name for screen readers.

## Accessibility: what you need to do

- Give every session a unique id: it links each Peek button to its panel.
- Set headingLevel so the group names fit your page outline. It is 3 unless you change it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| sessions (required) | `AgentSession[]` |  | Sessions to list. Each has id, name, status, summary, age, and optional pr, peek and group. |
| onReply | `(id: string, text: string) => void` |  | Called when a reply is sent from Peek. The field clears afterwards. |
| labels | `AgentSessionListLabels` |  | Replace group names, button text and the AI badge text. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's own heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- grouped: Sessions are grouped by status into Needs input, Working, Ready for review and Completed, and a group with no sessions is left out.
- peek open: Pressing Peek on a session that has peek data opens its latest output or question and a reply box.
- reply sent: Sending a reply calls onReply, clears the box and announces it to screen readers.
- empty: With no sessions, nothing is shown.
- focus: Peek, the reply box and the send button show a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--border`
- `--surface-sunken`
- `--fg-muted`
- `--fg-subtle`
- `--radius-field`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Tasks grouped by need: Groups with no tasks are left out. Peek works on any row that has something to show.
- Reply from Peek: Open Peek on a task that is waiting, type a reply and send it.

Source: src/organisms/AgentSessionList.tsx
