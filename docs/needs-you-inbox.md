# NeedsYouInbox
One list of everything across your runs that is waiting for you.
Status: stable. Page: https://lkb00.github.io/tattva/#component-needs-you-inbox
NeedsYouInbox gathers every question, approval, failure and finished piece of work that waits on you, from all runs, in one place. Items are grouped by how urgent they are. Each row names the run, says what is needed, shows how long it has waited and has one button. When the list is empty, it says so plainly. It works on a phone.
## When to use it

One place for everything, across all runs, that is waiting on a person, sorted by how soon it needs them. Each row has one clear action, so people can clear the list quickly, even on a phone.

## Use it for

- A home screen or side panel that collects questions, approvals, failures and finished work from many runs.
- A phone view where people sort out what waits on them.
- Saying plainly that nothing is waiting.

## Not for

- Every task, including ones that need nothing from the person: use `agent-session-list`
- A single question inside a run: use `agent-question-card`
- A catch-up when someone returns to one run: use `re-entry-recap`

## Anatomy

- Title and count
- Group heading (Needs you now, soon, when you have time)
- Row: run name, type label, what is needed, wait time
- Action button
- Empty message

## Do

- Sort by how urgent it is, then by how long it has waited.
- Give each row one clear action.
- Show the run name so people know where the item came from.
- Use plain wait times such as 12 min or Yesterday.

## Avoid

- Do not put finished-and-fine runs here. Only things that need a person.
- Do not mark every group amber.
- Do not hide the wait time.
- Do not add extra actions to rows. Open the details instead.

## On a phone

- The card has 16px padding on a phone and 20px from 640px wide.
- Each row wraps so the action button drops under the text, and long run names are cut with an ellipsis.
- Action buttons keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- The inbox is a region named by its title, with real headings for the title and each group.
- Each group is a list, so screen readers say how many items it holds.
- Each button's name includes the run and what is needed, so the buttons do not all sound the same.
- The type of item is written in words, not only shown by an icon or color.
- Rows wrap on narrow screens.

## Accessibility: what you need to do

- Set headingLevel so the title fits the headings around it.
- Keep actionLabel short, such as Answer or Review. The run and the need are added to the button name for screen readers.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `InboxItem[]` |  | Waiting items: { id, run, kind, urgency, need, waited, actionLabel }. kind is question, approval, failure or review. urgency is now, soon or later. |
| onAction | `(item: InboxItem) => void` |  | Fires from the row button. |
| labels | `NeedsYouInboxLabels` |  | Overrides title, group names, type names, waiting(time), emptyTitle and emptyBody. |
| headingLevel | `2 \| 3 \| 4` | `2` | Level of the title. Group headings use the next level. |
| className | `string` |  | Extra classes on the root. |

## States

- empty: With no items, a compact cleared message replaces the list and the count badge is hidden.
- urgent: Items with urgency now get an attention border and a primary action button; later groups use quieter styling.
- failure: An item with kind failure shows a red kind badge.
- focus: Each action button shows a focus ring on keyboard focus.

## Tokens

- `--attention`
- `--surface`
- `--line`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Four things are waiting: Press an action to handle an item. It leaves the list.
- Nothing is waiting: An empty inbox is good news. Say so.
- A single urgent item: Only the urgent group gets the amber outline.

Source: src/organisms/NeedsYouInbox.tsx
