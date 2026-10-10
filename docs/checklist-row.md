# ChecklistRow
A list row with a title, an optional tag and a status on the right. An amber dot marks items that need a person.
Status: stable. Page: https://lkb00.github.io/tattva/#component-checklist-row
ChecklistRow shows one item from a to-do list. The title and an optional tag sit on the left. The status sits on the right in light text. If the item needs a person, the status is darker and has an amber dot. A thin line separates rows.
## When to use it

One item in a to-do list, with its status at the end of the row. Only items that need a person get the amber dot and darker status, so they stand out.

## Use it for

- Steps in a task that the assistant or a team is working through.
- A list where a few items wait on the person and most do not.

## Not for

- A row that opens something when pressed: use `tray-row`
- A whole list with finished work folded away: use `checklist`
- A step the assistant is running right now: use `tool-call-card`

## Anatomy

- Title
- Tag
- Amber dot
- Status

## Do

- Put rows inside a list.
- Use the amber dot only when a person has to act, and say what in the status.
- Use the tag for a small label, like a type or priority.

## Avoid

- Do not use the amber dot for progress or priority. It means a person must act.
- Do not combine a long title with a tag. The title gets cut short.
- Do not expect it to be pressable. It has no checkbox.

## On a phone

- The row fills the width. The title takes the space left by the status on the right.
- It is not tappable. If a row should open something, wrap it in a button of your own, which gets a 44px tap area, or a link with the tap class.
- Rows have 12px of padding above and below, and no minimum height.

## Accessibility: built in

- Each row is a list item, so inside a list screen readers hear how many items there are.
- The amber dot is read as "Needs attention".
- Status is written in words, not shown by color alone.

## Accessibility: what you need to do

- Put rows in a list (ul or ol) and give the list a name for screen readers.
- Give every item its own id.
- When attention is on, say why in the status.
- Give anything pressable that you put in the title or tag its own name.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| item (required) | `ChecklistItem` |  | Object with id (string, required), title (ReactNode, required), badge (ReactNode), status (string) and attention (boolean). |

## States

- attention: Set attention on the item to show a dot beside the status and use the stronger text colour.

## Tokens

- `--border`
- `--fg`
- `--fg-subtle`
- `--attention`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Mixed statuses: Only the row that needs a person gets the dot. The others stay quiet.

Source: src/molecules/ChecklistRow.tsx
