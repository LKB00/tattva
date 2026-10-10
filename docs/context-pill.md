# ContextPill
A small tag near the message box that shows what the chat is about.
Status: stable. Page: https://lkb00.github.io/tattva/#component-context-pill
ContextPill shows what a chat is about. It can be a button that opens a list of choices. It can be a label with a remove button. Or it can be a plain label.
## When to use it

Shows what the chat is about, right beside the message box. It can open choices, be removed, or simply sit there as a label.

## Use it for

- Showing the project, file or folder the chat is limited to.
- Letting a person change that scope: give it onClick to open choices.
- Letting a person drop the scope: give it onClear.

## Not for

- Ready-made questions to send: use `suggestion-chips`
- A file attached to one message: use `attachment-chip`
- A status or category label: use `badge`

## Anatomy

- Icon
- Label
- Arrow (for choices)
- Remove button

## Do

- Make it pressable when the topic can be changed. Add a remove button when it can be removed.
- Keep labels to a few words, like a file name.
- Put tags in one row near the message box.

## Avoid

- Do not make a tag both pressable and removable unless both make sense.
- Do not use it for tags or filters in a table. It is only for the message box.
- Do not use very long file names. Shorten them first.

## On a phone

- On touch screens the pill stays 28px tall. Its clear button, and the pill itself when it is a button, keep their size and have a 44px tap area.
- It has no hover-only parts: the picker opens on tap and the clear button is always shown.
- The label has no truncation, so keep it short for a narrow screen.

## Accessibility: built in

- With onClick it is a real button. Without it, it is plain text and the Tab key skips it.
- The remove button is a real button named "Clear context".
- The arrow and the remove cross are hidden from screen readers. The label is read.
- After the tag is cleared, keyboard focus moves to what is left of the pill, else the next control, else the message box. Pass focusAfterClear to choose another place.

## Accessibility: what you need to do

- When the pill opens choices, move focus into them, because the choices are yours.
- When there is more than one removable tag, give each a clearLabel that says what it clears, such as "Clear project Atlas".
- Pass an icon that is hidden from screen readers, so only the label is read.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | Label text. |
| icon | `ReactNode` |  | Leading icon in the subtle foreground colour. |
| onClick | `() => void` |  | Turns the pill into a button and adds a chevron. Use it to open a picker. |
| onClear | `() => void` |  | Adds a clear button after the pill. The pill itself then has no border. |
| className | `string` |  | Extra classes for the pill body. |

## States

- hover: When onClick is set, the pill gets a soft background under the pointer.
- focus: When onClick or onClear is set, those buttons show a focus ring on keyboard focus.
- clearable: Pass onClear to add a small clear button inside a shared rounded background.

## Tokens

- `--border`
- `--surface`
- `--surface-hover`
- `--fg`
- `--fg-subtle`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Picker and removable: The first tag opens a list of choices. The second is something attached that the person can remove.
- Static label: With neither, it is a plain label.

Source: src/molecules/ContextPill.tsx
