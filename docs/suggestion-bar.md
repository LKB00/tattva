# SuggestionBar
A bar under an AI draft. Nothing changes in your document until you choose.
Status: stable. Page: https://lkb00.github.io/tattva/#component-suggestion-bar
SuggestionBar sits under a draft the AI has written but not yet added. You can Keep it (or Replace), Insert below, Regenerate, or Discard. A "Fine-tune this" box lets you ask for a change. Regenerate asks for a fresh version of the same request. Fine-tune changes the current draft. A note beside Regenerate says what another try costs.
## When to use it

Sits under an AI draft that has not been added yet. Nothing changes in the document until the person chooses, and Regenerate and Fine-tune are kept clearly apart.

## Use it for

- A draft paragraph the AI wrote for a document.
- Replacing selected text with a rewrite, with Replace as the main button.
- Showing what another try costs when tries count against a limit.

## Not for

- One small edit with a before and after: use `suggestion-card`
- An action the assistant wants to take that needs a yes: use `approval-prompt`
- A suggested ending to the line being typed: use `ghost-text`

## Anatomy

- Draft preview
- Main button
- Insert below
- Regenerate
- Cost of trying again
- Discard
- Fine-tune box
- Spoken update

## Do

- Keep the draft out of the document until the person chooses Keep, Replace or Insert below.
- Show what another try costs when tries count against a limit.
- Call the box Fine-tune this and the button Regenerate, so they are not confused.
- Return the cursor to the document after Keep or Discard.

## Avoid

- Do not add the draft just because time passed or the person clicked away.
- Do not call a request for a change Regenerate.
- Do not hide Discard. Closing the bar should never be the only way out.

## On a phone

- The buttons wrap onto new rows, and Discard moves to the right edge of its row.
- The Fine-tune field is 16px on touch screens, so the page does not zoom when it takes focus, The field grows to 44px tall, and the Send button keeps its size and has a 44px tap area.
- The long placeholder is cut off in a narrow field. The bar does not move above the on-screen keyboard, so place it where the keyboard will not cover it.

## Accessibility: built in

- Status changes, such as "Added to the document", are announced to screen readers separately from the draft.
- While the draft is being written, the spinner is named "Writing a draft" for screen readers. The draft text itself is not read out as it changes.
- The Fine-tune box has a name, and its send button is turned off while the box is empty.
- Every action is a real button, in reading order.
- Keyboard focus follows the buttons as they change: to Discard while a new draft is written, to the main action when it is ready, and back to the document after Keep, Replace, Insert below or Discard (the nearest text box or editor, else the bar itself). Pass focusAfter to choose the place.

## Accessibility: what you need to do

- Set status to generating while a new draft is written and back to ready when it is done, so screen readers hear the right update.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| status | `"generating" \| "ready" \| "committed" \| "discarded"` | `"ready"` | Where the staged output is. The consumer owns this state. |
| children | `ReactNode` |  | Optional preview of the staged output. |
| primaryLabel | `string` | `"Keep"` | Label of the primary action. Use Replace over a selection. |
| onKeep / onInsertBelow / onDiscard | `() => void` |  | Commit, commit as a new block below, or drop the draft. |
| onRegenerate | `() => void` |  | Ask for a fresh sample of the same request. |
| onRefine | `(instruction: string) => void` |  | Send a follow-up instruction typed in the Fine-tune field. |
| retryCost | `ReactNode` |  | Cost of a retry, shown next to Regenerate. |
| labels | `Partial<Record<string, string>>` |  | Overrides for every piece of copy, including the status messages. |
| className | `string` |  | Extra classes on the container. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--lime`
- `--on-lime`
- `--fg-subtle`
- `--radius-field`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Try each button: Try each button. Regenerate and Fine-tune show a short wait. Keep and Discard finish it.
- Replace a selection: Use Replace as the main button when the draft takes the place of selected text.
- While the draft is written: The buttons are hidden while the draft is written. Discard stays.

Source: src/organisms/SuggestionBar.tsx
