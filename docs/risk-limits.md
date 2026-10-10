# RiskLimits
The limits that protect the person, with a kill switch that asks first, in place.
Status: stable. Page: https://lkb00.github.io/tattva/#component-risk-limits
RiskLimits lists each limit with how much is used, as words and a meter. Near a limit and at a limit it says so in words with an icon, in a calm tone. The kill switch swaps itself for a short question with two equal buttons, so one tap can never stop trading by mistake.
## When to use it

Shows how close the person is to their own limits, and gives one clear way to stop.

## Use it for

- Daily loss and order count limits in a trading app.
- A paused state that explains why in words.
- A stop-everything control that is safe to put on screen.

## Not for

- A spending cap the person sets for an agent: use `budget-control`
- A single progress bar: use `meter-bar`
- A message that is not about limits: use `callout`

## Anatomy

- Heading and Paused tag
- Reason
- Limit label and numbers
- Meter
- Status tags
- Note
- Kill switch

## Do

- Say what stays possible, such as exits, in note.
- Pass the real used and max, and let the part word the status.
- Explain a pause with pausedReason.
- Keep the kill switch in the same place on every screen.

## Avoid

- Do not make a one-tap kill switch.
- Do not add red or amber to the meters. This is a calm part.
- Do not hide a limit once it is reached.
- Do not use it to block exits.

## On a phone

- The card fills the width of its container up to 430px, and each limit shows its label and amount on one row that wraps if needed.
- Stop trading, Keep trading and the first stop button are 48px tall on touch screens.
- The confirmation shows in the card itself, not in a popup, so nothing covers the limits.

## Accessibility: built in

- Each meter has the limit name and a text value such as 4,200 of 20,000.
- Near the limit, Limit reached and Paused are words with icons, never colour alone.
- The kill question appears in place as a named group. Focus moves to Keep trading, Escape also keeps trading, and focus goes back to the kill button.
- Stop trading and Keep trading are the same size and style.
- After trading stops, focus moves to the heading and a polite live region announces that trading is paused.

## Accessibility: what you need to do

- Give each limit a clear label such as Daily loss.
- Pass a format function for money so the numbers read in your locale.
- Say in pausedReason why trading is paused.
- Keep exits open in your own logic and say so in note.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| limits (required) | `{ id: string; label: string; used: number; max: number; unit?: string; format?(n: number): string }[]` |  | One row per limit. format turns a number into text, for money. |
| paused | `boolean` |  | True when trading is stopped. Every limit then says Paused, and the kill switch is not shown. |
| pausedReason | `string` |  | Why it is paused, in words. |
| onKill | `() => void` |  | Called only after the person answers Stop trading. Without it, no kill switch is shown. |
| killLabel | `string` | `"Stop all trading"` | Text of the kill button, also used in the question. |
| note | `ReactNode` |  | A line under the limits, such as Exits are never blocked. |
| className | `string` |  | Extra classes for the card. |

## States

- near the limit: At 80 percent used or more, a limit shows Near the limit with an info icon in a calm tone.
- limit reached: At 100 percent or more, a limit shows Limit reached with a lock icon. The meter is capped at full.
- paused: Pass paused. A Paused tag shows at the top and on each limit, the reason shows in words and the kill switch is removed.
- asking: Pressing the kill switch swaps it for a question with Stop trading and Keep trading. Focus moves to Keep trading, and Escape also keeps trading.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--text`
- `--text-muted`
- `--unsure-soft`
- `--unsure-fg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Normal: Two limits well below their maximum. Money uses a format function.
- Near the limit: At 80 percent or more a limit says Near the limit with an icon. The meter stays plain.
- Reached and paused: At 100 percent it says Limit reached with a lock. Paused shows in words on each limit and the kill switch is gone.
- Kill switch flow: Press Stop all trading. It asks in place, and focus lands on Keep trading. Choosing Stop trading pauses.

Source: src/organisms/RiskLimits.tsx
