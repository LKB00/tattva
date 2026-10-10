# InlineEdit
A labelled value that reads as plain text and turns into an input in place when you press Edit.
Status: stable. Page: https://lkb00.github.io/tattva/#component-inline-edit
InlineEdit is for checking, not filling in. The value shows as plain text with a visible Edit button. Pressing it turns the value into an input in the same place. Enter or Done saves, Escape cancels, and a changed value gets an Edited tag so people can see their fix registered. A validate function can keep the edit open and show a message.
## When to use it

Let people confirm facts that were read or worked out for them, and fix only the ones that are wrong, without a form full of empty boxes.

## Use it for

- A short list of facts to check before a next step, such as an amount, a seller and a date.
- A value that is usually right and only sometimes needs changing.
- A value shown in a special way, such as money, that turns into plain text when edited.

## Not for

- Collecting new information from an empty form: use `field`
- A number that is stepped up and down: use `number-field`
- A choice between a few options: use `segmented-control`
- Choosing from a fixed list: use `select`

## Anatomy

- Label
- Edited tag
- Value
- Edit button
- Input with Done and Cancel
- Error with icon

## Do

- Show the value as plain text first. Checking is easier than typing.
- Keep a visible Edit button on every row.
- Let the Edited tag show what was fixed.
- Keep each value short, as a single line.

## Avoid

- Do not show every value as an empty input box.
- Do not make the whole row the only thing you can press.
- Do not use the lime AI colour for the Edited tag. It is neutral on purpose.
- Do not use it for long text. Use a full form for that.

## On a phone

- The edit button keeps its size and has a 44px tap area on a touch screen, and the value wraps on the left of it.
- Editing swaps the value for a text box with Done and Cancel in one row, and the text box is 16px so the page does not zoom.
- Set inputMode so a phone shows the right keyboard, such as numbers.

## Accessibility: built in

- Edit is a real button with a name such as Edit Amount, and it has a 44px tap area on coarse pointers.
- The input is named by the visible label. Focus moves to it when editing starts.
- Enter or Done saves and Escape cancels. After either, focus returns to the Edit button.
- An error shows under the field with a warning icon and words, is linked to the input with aria-describedby, and sets aria-invalid. The area is a polite live region.
- After a change is saved, a polite live region says Saved.
- The Edited tag is text, so it does not rely on colour. It has a border in forced colours.

## Accessibility: what you need to do

- Give each row a clear label. It is also the accessible name of the input.
- Write validate messages that say what is wrong and how to fix it.
- Use inputMode that matches the value, such as decimal for an amount, so phones show the right keyboard.
- If display shows something different from the text, make sure it still reads correctly for screen readers.
- Pass editLabel when Edit and the label are not enough to know what will change.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Visible label, small and muted. It is also the accessible name of the input. |
| value (required) | `string` |  | The current text. |
| onChange (required) | `(value: string) => void` |  | Called with the new text when an edit is saved and the text changed. |
| display | `ReactNode` |  | How to show the value when not editing, such as a Money. Defaults to the text, or Not set when empty. |
| edited | `boolean` |  | Forces the Edited tag on or off. When left out, the part compares value with originalValue. |
| originalValue | `string` |  | The value before anyone changed it. When left out, the first value the part received is used. |
| inputMode | `"text" \| "numeric" \| "decimal" \| "tel" \| "email" \| "url" \| "search"` |  | The keyboard to show on phones while editing. |
| validate | `(value: string) => string \| null` |  | Returns an error message, or null when the value is fine. On an error the edit stays open and the message shows under the field. |
| editLabel | `string` | ``Edit ${label}`` | Accessible name of the Edit button. |
| className | `string` |  | Classes for the outer row. |

## States

- reading: The value shows as plain text, with a visible Edit button on the right.
- editing: After Edit is pressed the value becomes an input with Done and Cancel buttons, and focus moves to the input with its text selected.
- edited: When the value differs from the original, or edited is true, an Edited tag shows next to the label.
- error: When validate returns a message on save, the edit stays open, the input is invalid and the message shows under it with an icon.
- saved: After a changed value is saved, a hidden polite live region says Saved.
- empty: An empty value without display shows Not set in muted text.
- hover: The Edit button is shaded when the pointer is over it.

## Tokens

- `--fg`
- `--fg-muted`
- `--border`
- `--surface-hover`
- `--surface-sunken`
- `--danger-fg`
- `--dur-fast`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A three-row fact check: Change one value and press Done. The Edited tag appears next to its label. The rows stack in a Stack, with a small gap, and each row draws its own divider.
- With validation: Clear the digits or type letters and press Done. The edit stays open and the message appears under the field with an icon and words.
- Custom display and edit label: display shows the value as large money. editLabel gives the button a longer name for screen readers.

Source: src/molecules/InlineEdit.tsx
