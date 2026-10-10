# ToolChip
A small tag in the message box showing a tool that is on, with a Remove button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tool-chip
ToolChip shows one tool that is turned on, such as Web search. It has an optional icon, the tool name and a Remove button. The button is named Remove plus the tool name, so a row of tags is clear to a screen reader. Leave out the remove option for a tool that is locked on.
## When to use it

Shows one tool that is switched on, such as Web search, right by the message box. People can see what the assistant will use and remove it in one step.

## Use it for

- Each tool that is turned on for the next message.
- A tool that is locked on, shown without a Remove button.

## Not for

- Files or images attached to a message: use `attachment-chip`
- Choosing which tools to turn on: use `tool-menu`
- Showing what the chat is about: use `context-pill`

## Anatomy

- Icon
- Label
- Remove button

## Do

- Show a tag for every tool that is on, next to the text box.
- Use the same icon as the tool has in ToolMenu.
- Keep labels to one or two words.

## Avoid

- Do not use it for attached files. Use AttachmentChip.
- Do not show a tag for a tool that is off.
- Do not take away the button unless there is another way to turn the tool off.

## On a phone

- The chip is at least 32px tall and shortens a long label with an ellipsis, so it never grows wider than its container.
- On touch screens the remove button keeps its size and has a 44px tap area, so the chip stays the same size.

## Accessibility: built in

- The Remove button is a real button named after the tool, such as "Remove Web search".
- The icon is hidden from screen readers. The tool name carries the meaning.
- A clear outline shows when the Remove button has keyboard focus.
- After Remove, keyboard focus moves to the next tag, else the previous one, else the message box, so it never falls to the top of the page. Pass focusAfterRemove to choose another place.

## Accessibility: what you need to do

- Set removeLabel when you translate, so the button name matches the language of the page.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Tool name. Also used in the remove button name. |
| icon | `ReactNode` |  | Leading icon. Decorative. |
| onRemove | `() => void` |  | Shows the remove button and handles its press. |
| removeLabel | `string` | `Remove {label}` | Overrides the remove button name. |
| className | `string` |  | Extra classes for the chip. |

## States

- removable: Pass onRemove to show a small remove button on the right.
- hover: The remove button gets a soft background under the pointer.
- focus: The remove button shows a focus ring on keyboard focus.
- truncated: A long label is cut off with an ellipsis.

## Tokens

- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--surface-hover`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Tags you can remove: Pressing Remove takes the tag away.
- A tag that stays: With no remove option there is no button. Use it when the tool is locked on.

Source: src/molecules/ToolChip.tsx
