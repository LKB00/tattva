# ActionDraft
The draft an AI proposes, edited in place, confirmed by the person, then shown as progress.
Status: stable. Page: https://lkb00.github.io/tattva/#component-action-draft
ActionDraft shows what the AI plans to do as a short review. The person edits a value in place, then presses Confirm. The same card then shows the steps and the result. Nothing runs until the person presses Confirm, and the part has no way to confirm by itself.
## When to use it

Keeps a person in charge of an action an AI prepared: they read it, fix it and decide.

## Use it for

- An order the AI drafted from a message.
- Any action with values the person may want to change before it runs.
- Showing progress and the result in the same place the person confirmed.

## Not for

- A yes or no on something an agent is about to do: use `approval-prompt`
- Asking for access to a tool or data: use `permission-prompt`
- A list of what already happened: use `action-log`

## Anatomy

- Title and status
- Summary
- Fields with Edit buttons
- Computed rows
- Steps
- Result or error
- Note
- Confirm and discard buttons

## Do

- Show the facts the app worked out in rows so the person sees them first.
- Move status to confirming while you wait for the app to accept the press.
- Put OrderTicket inside it when the AI drafted an order.
- Show the result in words when done.

## Avoid

- Do not confirm for the person, even behind a setting.
- Do not let the AI write dates, deadlines or amounts into fields. Code computes them.
- Do not make the discard button small or hidden.
- Do not remove the sentence that nothing happens until they confirm.

## On a phone

- The card fills the width of its container up to 430px, and Confirm and Not now sit side by side as two 48px buttons on touch screens.
- Editable fields open as inline inputs and use the decimal keypad for number fields.
- Put the card where the on-screen keyboard will not hide Confirm, for example by letting the page scroll.

## Accessibility: built in

- The card is a section named by its title.
- In draft, values read as plain text and each has an Edit button. Enter saves, Escape cancels, and focus returns to Edit.
- Confirm and the other button are the same size. Only Confirm is filled. Confirm is disabled while any field has an error, and the note says so.
- After Confirm, focus moves to the title because the buttons go away.
- Steps have an icon and a word (Waiting, In progress, Done, Failed), never colour alone. A polite live region announces progress and done.
- A failure appears in an element with role alert.
- The spinning step icon stops when the person has reduced motion on.

## Accessibility: what you need to do

- Write the title as a full action with its numbers, such as Buy 10 RELIANCE at market.
- Keep the title in step with the field values so it is true when the person confirms.
- Write error messages as sentences that say what to change.
- Never call onConfirm from code. Only the button press may do it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| status (required) | `"draft" \| "confirming" \| "working" \| "done" \| "failed"` |  | Where the action is. Only draft allows editing and pressing the buttons. |
| title (required) | `string` |  | The action in one line, such as Buy 10 RELIANCE at market. |
| summary | `string` |  | One or two sentences of context. |
| fields (required) | `{ id: string; label: string; value: string; kind?: "text" \| "number"; editable?: boolean; unit?: string; error?: string }[]` |  | The values. Editable ones get an Edit button in draft. Any error locks Confirm. |
| onFieldChange (required) | `(id: string, value: string) => void` |  | Called when an edit is saved. |
| rows | `{ label: string; value: ReactNode }[]` |  | Facts the app worked out, such as margin and charges. Read only. |
| steps | `{ id: string; label: string; state: "pending" \| "running" \| "done" \| "failed"; detail?: string }[]` |  | Progress once confirmed. Each has an icon and a word for screen readers. |
| result | `ReactNode` |  | Shown when status is done. |
| error | `string` |  | Shown in an alert when status is failed. |
| onConfirm (required) | `() => void` |  | Called when Confirm is pressed. |
| onDiscard (required) | `() => void` |  | Called when the other button is pressed. |
| confirmLabel | `string` | `"Confirm"` | Text of the filled button. |
| discardLabel | `string` | `"Not now"` | Text of the other button. It has the same size as Confirm. |
| className | `string` |  | Extra classes for the card. |

## States

- status: Set with the status prop.
- error: A field error shows in words under the field and disables Confirm. The note then says to fix the marked fields.
- editing: Pressing Edit on a field turns it into an input in place. Enter or Done saves, Escape or Cancel keeps the old value.
- edited: A field whose value differs from the first value this part saw gets an Edited tag, also after confirming.
- confirming: Fields are read only, both buttons are disabled and Confirm shows a spinner.
- step states: Each step shows Waiting, In progress, Done or Failed as an icon plus a word for screen readers.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--text`
- `--text-muted`
- `--success-soft`
- `--success-fg`
- `--danger-soft`
- `--danger-fg`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Draft with an edited field: Press Edit on Quantity, change it and press Done. The Edited tag appears. Enter 0 to see Confirm lock.
- Working, then done: After Confirm the fields are read only and the steps advance. A live region announces the change. Restart plays it again.
- Failed: The error is in words in an alert, with the step that failed. Nothing is hidden behind colour.

Source: src/organisms/ActionDraft.tsx
