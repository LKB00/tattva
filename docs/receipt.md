# Receipt
Collapse a card the person already answered into one line. It opens again to show the full card.
Status: stable. Page: https://lkb00.github.io/tattva/#component-receipt
Receipt keeps a thread short. Once a person has acted on a card, the card is replaced by one line: a check, what was settled and a short note on the right. Pressing the line opens the original card in place. Nothing is mounted until it is opened, unless you ask for it.
## When to use it

The pattern: every decision card in a thread becomes a Receipt after the person acts. The thread then reads as a short list of what happened, and the detail is still one press away.

## Use it for

- A question card, approval or form that the person has finished.
- A step the agent finished that the person may want to check later.
- Any card that matters while it is open and only for reference afterwards.

## Not for

- A section that opens and closes as part of the page: use `collapsible`
- A card the person still has to act on: use `approval-prompt`
- A history of events over time: use `timeline`

## Anatomy

- Check icon
- Title
- Meta
- Chevron
- Opened card

## Do

- Turn a decision card into a Receipt as soon as the person acts.
- Name the receipt for what happened, not for the card.
- Put the one fact people look for in meta, such as the amount.

## Avoid

- Do not use a Receipt for something the person still has to do.
- Do not hide a failure inside a closed Receipt. Show it.
- Do not nest Receipts.

## On a phone

- The header row is at least 44px tall on touch screens and spans the full width.
- The title wraps, while the meta text on the right keeps its size and does not wrap.
- It opens with a tap, and whatever you put inside needs to fit a phone width.

## Accessibility: built in

- The whole row is one button with aria-expanded and aria-controls pointing at the opened region.
- The opened content is a region named by the button, so screen readers announce what it is.
- The check and chevron are decorative. The title is the button's name.
- Opening does not move or trap focus. Focus stays on the button.
- The row is at least 40px tall, and 44px on coarse pointers.

## Accessibility: what you need to do

- Write the title as what happened, in the past tense, such as "Confirmed the facts".
- Keep meta short. It is read out as part of the button.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | What was settled, such as "Confirmed the facts". |
| children (required) | `ReactNode` |  | The full card, shown when opened. |
| meta | `ReactNode` |  | Short note on the right, such as a date or an amount. |
| icon | `ReactNode` |  | Replaces the default check. It is decorative and hidden from screen readers. |
| defaultOpen | `boolean` | `false` | Start open. Ignored when open is passed. |
| open | `boolean` |  | Controlled open state. |
| onOpenChange | `(open: boolean) => void` |  | Called when the person opens or closes the receipt. |
| keepMounted | `boolean` |  | Keep children mounted, hidden, while closed. Use it to keep state inside the card. |
| className | `string` |  | Extra classes for the outer box. |

## States

- open or closed: The children show under the row, the chevron turns down and aria-expanded is true.
- closed: Only the row shows. The children are not mounted unless keepMounted is set.
- hover: The row gets a soft background under the pointer.
- focus: A visible focus ring appears on the row when reached with the keyboard.

## Tokens

- `--surface`
- `--border`
- `--surface-hover`
- `--success-fg`
- `--fg-muted`
- `--fg-subtle`
- `--dur-fast`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Closed: The default is one line. The check is decorative; the title says what happened.
- Open: Use defaultOpen to start open. The full card shows below the line, and the chevron turns.
- Inside a thread: Settled cards become Receipts between messages, so the conversation stays short. The second one is controlled.

Source: src/molecules/Receipt.tsx
