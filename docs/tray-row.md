# TrayRow
A compact list row with an icon, a title, a detail line and a hint that shows on hover.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tray-row
TrayRow is one pressable row for tight lists, like a task tray or recent items. Place it inside a list. When attention is on, the icon becomes an amber dot and the detail text gets darker. That marks the row that needs a person.
## When to use it

A compact row that can be pressed, for tight lists. The amber dot is the one mark that says this row is waiting on a person.

## Use it for

- Items in a task tray or a list of recent things.
- A row that opens something when pressed.
- Showing which item is waiting on the person: turn on attention.

## Not for

- A to-do item that shows status and is not pressed: use `checklist-row`
- A tag that shows what the chat is about: use `context-pill`

## Anatomy

- Icon or amber dot
- Title
- Detail
- Hint at the end

## Do

- Put rows inside a list.
- Mark only rows that truly wait on a person.
- Write a detail that says the status or the next step.
- Keep titles short so the detail has room.

## Avoid

- Do not mark most rows. The amber dot loses meaning when it is common.
- Do not hide essential actions in the hint. It only shows on hover or keyboard focus.
- Do not use it outside a list.

## On a phone

- Under 640px wide the row has rounded corners, the title sits above the detail, and the detail wraps instead of being cut off.
- From 640px wide the title and detail share one line and the detail is truncated.
- Rows keep their size and have a tap area at least 44px tall on touch screens, and the trailing text is always visible there instead of only on hover.

## Accessibility: built in

- The row is a real button. The Tab key reaches it, and Enter or Space presses it.
- The amber dot is read as "Needs attention".
- The hint at the end shows on hover and on keyboard focus, and always shows on touch screens.
- On touch screens the row keeps its size and has a tap area at least 44px tall.

## Accessibility: what you need to do

- Put rows inside a list (ul or ol). Each row is already a list item.
- Give the list a name for screen readers if the page has more than one.
- When attention is on, say why in the detail text.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | Primary label, medium weight. |
| detail | `string` |  | Secondary text that truncates when space runs out. |
| attention | `boolean` |  | Shows the amber dot instead of the icon and sets the detail text to the foreground colour. |
| icon | `ReactNode` |  | Leading icon. Ignored when attention is true. |
| trailing | `ReactNode` |  | Small text or node at the right edge. Hidden until the row is hovered or focused. |
| onClick | `() => void` |  | Click handler for the row button. |

## States

- hover: The row gets a soft background and shows its trailing text, such as Open.
- focus: A visible focus ring appears and the trailing text shows when you reach the row with the keyboard.
- attention: Pass attention to swap the icon for a small attention dot.
- truncated: On wider screens a long detail is cut off with an ellipsis.

## Tokens

- `--surface-hover`
- `--fg`
- `--fg-subtle`
- `--attention`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Plain rows: Icons are optional. The hint at the end shows on hover or when the row is reached by keyboard.
- Needs attention: Mark the row where a person has to decide something. The detail should say what.

Source: src/molecules/TrayRow.tsx
