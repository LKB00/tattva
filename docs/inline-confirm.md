# InlineConfirm
A button that asks "Delete this?" in its own place, with the safe choice focused, instead of opening a dialog.
Status: stable. Page: https://lkb00.github.io/tattva/#component-inline-confirm
InlineConfirm starts as one button. When pressed, it turns into a short question with two buttons in the same spot, and focus moves to the safe button. If nobody answers, it quietly goes back after a few seconds. Use it for small actions that people rarely mean to undo, such as deleting a chat or discarding a draft.
## When to use it

Adds one small step before an unwanted action, without taking people out of what they were doing.

## Use it for

- Deleting a chat, a file or an item from a list.
- Discarding a draft or clearing a form.
- Removing something that can be recreated, but with some effort.

## Not for

- An action that cannot be undone and has big effects, such as deleting an account: use `dialog`
- Letting an agent act on someone's behalf: use `approval-prompt`
- An action that is easy to undo, where an Undo afterwards is kinder: use `toast`

## Anatomy

- First button
- Question
- Cancel button
- Confirm button

## Do

- Ask a short, specific question, such as "Delete this chat?".
- Use the danger tone when the action removes something.
- Use a dialog instead when people need to read more before deciding.

## Avoid

- Do not use it for actions that cannot be undone and matter a lot.
- Do not chain two inline confirms one after the other.
- Do not set the timeout so short that people cannot read the question.

## On a phone

- All three buttons keep their size and have a 44px tap area on touch screens.
- A finger on the control pauses the timer, and it starts again when the finger lifts.
- The control keeps the width of its widest state, so the question does not push nearby items around. Keep the question short on a phone.

## Accessibility: built in

- Built from native buttons. When the question shows, focus moves to the cancel button, so pressing Enter twice does not confirm.
- Escape, or the cancel button, goes back to the first button and returns focus to it. Confirming also returns focus to it.
- The question is announced through a polite live region and is linked to the confirm button with aria-describedby.
- The confirm button sits to the right of where the first button was, so a double click cannot press it.
- The hidden state uses visibility hidden, so it cannot be focused or read while it is not shown.
- The timer pauses for keyboard focus, mouse hover, touch and a hidden page. When it runs out with focus inside, focus goes back to the first button.
- The question fades in only when the person has not asked for reduced motion.

## Accessibility: what you need to do

- Make the first button label say what it does, such as "Delete chat", and keep the question specific.
- If the item disappears after confirming, move focus somewhere sensible, such as the next item in the list.
- Keep onConfirm quick. Show any later failure with an error message.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | Label of the first button. |
| confirmLabel | `string` | `"Delete"` | Label of the button that does the action. |
| cancelLabel | `string` | `"Keep it"` | Label of the safe button. It gets focus when the question shows. |
| question | `string` | `confirmLabel + " this?"` | The question shown in place of the first button, for example "Delete this?". |
| onConfirm (required) | `() => void` |  | Called when the confirm button is pressed. The control goes back to the first button at the same time. |
| tone | `"danger" \| "default"` | `"default"` | danger draws the confirm button in the danger colour. default uses the accent colour. |
| timeout | `number` | `6000` | Milliseconds before an unanswered question goes back to the first button. 0 turns it off. The time pauses while a mouse is over the control, a finger is on it, it has keyboard focus, or the page is hidden. |
| className | `string` |  | Classes for the outer wrapper. |

## States

- asking: After the first press, the question, the cancel button and the confirm button show in the same place and focus moves to cancel.
- timed out: If nobody answers within timeout, the question quietly turns back into the first button.
- paused: The timer stops while a mouse is over the control, a finger is on it, it has keyboard focus, or the page is hidden, and keeps the time left.
- focus: The global focus ring shows on whichever button has keyboard focus.
- hover: Each button shades when the pointer is over it.

## Tokens

- `--fg`
- `--surface`
- `--border`
- `--accent`
- `--danger`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Delete a chat: Each row has its own control. The confirm button uses the danger colour.
- Discard a draft: Custom labels and a longer timeout. The default tone draws the confirm button in the accent colour.

Source: src/molecules/InlineConfirm.tsx
