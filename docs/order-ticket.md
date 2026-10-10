# OrderTicket
A buy or sell form to place a trade: side, quantity, order type, price, product, a review summary and one submit button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-order-ticket
OrderTicket collects the choices for one order and hands them back to your code. It never sends anything. The app computes cost and risk and passes them in as summary rows. A pressed submit button calls onSubmit and nothing more.
## When to use it

Lets a person set up an order by hand, with every figure in view before they press the one button.

## Use it for

- A manual order the person types in themselves.
- The inside of an ActionDraft when an AI drafted the order and the person edits it.
- A locked ticket that explains in words why trading is paused.

## Not for

- Asking a person to approve something an agent wants to do: use `approval-prompt`
- Showing a finished order as a record: use `receipt`
- A single number input: use `number-field`

## Anatomy

- Symbol and last price
- Side
- Quantity
- Order type
- Price (limit and stop only)
- Product
- Stop and target
- Summary rows
- Submit button
- Reason when locked

## Do

- Pass cost and risk in summary so the person sees them before pressing.
- Say why the ticket is locked with disabledReason.
- Put it inside ActionDraft for an order an AI drafted.
- Keep the button text specific, such as Buy RELIANCE.

## Avoid

- Do not place the order inside onChange. Only onSubmit, from a press, may start it.
- Do not rely on the Buy and Sell words being coloured. They are not.
- Do not compute money inside this part. Pass it in.
- Do not add a second submit button.

## On a phone

- The form is one column and fills the width of its container up to 430px. Only Stop and Target sit side by side.
- The submit button is full width and 48px tall on touch screens.
- Quantity and price fields use the number fields, which are 16px on touch screens so the page does not zoom when they get focus.
- Put the ticket where the on-screen keyboard will not hide the submit button, for example by letting the page scroll.

## Accessibility: built in

- It is a real form with a name. Enter in a field submits it, and a locked form does not.
- Each number field has a visible label, a hint where given and its error linked by aria-describedby.
- Side, order type and product are radio groups with arrow-key movement. Sell is a word, not just a colour.
- When locked, the fieldset is disabled and the reason is linked to the button.
- While submitting the button is marked busy and cannot be pressed again.

## Accessibility: what you need to do

- Compute the summary rows yourself and keep them in words and numbers. This part does no money maths.
- Send errors in plain words, one per field. Do not rely on colour.
- When the app places the order, tell the person in text what happened.
- For an order an AI drafted, put this inside ActionDraft so the person must confirm.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| symbol (required) | `string` |  | The instrument, such as RELIANCE. Used in the heading and the default button text. |
| price | `number` |  | Last price, shown at the top. Display only. |
| value (required) | `OrderTicketValue` |  | The whole form: side, quantity, orderType, limitPrice, product, stop, target. |
| onChange (required) | `(v: OrderTicketValue) => void` |  | Called with the full new value on every change. |
| lotSize | `number` |  | Quantity moves in steps of this size and the hint reads "1 lot = 75". A quantity that is not a multiple shows an error. |
| tickSize | `number` | `0.05` | Step for the price, stop and target fields. |
| summary | `{ label: string; value: ReactNode; hint?: string }[]` |  | What the order will cost or risk, worked out by the app. Shown as a definition list. |
| errors | `Partial<Record<keyof OrderTicketValue, string>>` | `{}` | One sentence per field, shown under it. |
| onSubmit (required) | `() => void` |  | Called when the submit button is pressed. The app decides what happens. |
| submitLabel | `string` | `"Buy RELIANCE" style, from side and symbol` | Button text. |
| submitting | `boolean` |  | Shows a spinner in the button and blocks another press. |
| disabled | `boolean` |  | Locks every field and the button. |
| disabledReason | `string` |  | Why it is locked, in words next to the button. Shown only when disabled. |
| className | `string` |  | Extra classes for the form. |

## States

- disabled: Pass disabled. Every field and the button lock, and disabledReason shows in words with a lock icon.
- limit or stop: When order type is Limit or Stop, a price field appears (Limit price or Trigger price). On Market it is hidden.
- invalid: A message in errors shows under its field with a warning icon. A quantity that is not a multiple of lotSize gets an error even if you pass none.
- submitting: Pass submitting. The button shows a spinner, is marked busy and cannot be pressed again.
- focus: The global focus ring shows on whichever field, segment or button you reach with the keyboard.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--text`
- `--text-muted`
- `--danger-fg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Market buy: The simple case. The app computes the summary rows and passes them in.
- Limit sell with errors: Quantity moves in lots. A limit order shows the price field. Each error is a sentence under its field.
- Paused with a reason: Every field and the button lock. The reason sits next to the button in words.

Source: src/organisms/OrderTicket.tsx
