# UsageMeter
How many credits are left, with an optional cost estimate, reset date and upgrade button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-usage-meter
UsageMeter shows how many credits are left and can say what the next action will cost. It stays neutral until most credits are used or the cost is more than what is left. Then it says why in amber and shows the upgrade button you provide.
## When to use it

Shows how many credits are left and what the next action will cost, before it runs. It warns only when the person may need to act.

## Use it for

- Before a paid action, to show about how much it will use.
- A plan's remaining allowance, with when it resets.
- Offering an upgrade once credits run low.

## Not for

- How full the current chat is: use `context-meter`
- A limit that has been reached and blocks the next request: use `rate-limit-notice`

## Anatomy

- Remaining text
- Reset time
- Bar
- Cost estimate
- Warning text
- Upgrade button

## Do

- Show the estimate before the action runs.
- Show when the allowance resets.
- Offer the upgrade only when credits run low.

## Avoid

- Do not use amber while there is plenty left.
- Do not hide retries that use up credits.
- Do not give an exact estimate you cannot back up. Say about.

## On a phone

- The meter fills the width, with the amount on the left and the reset time on the right.
- The warning and your upgrade action share a row that wraps. A button gets a 44px tap area by itself. If your upgrade action is a small link, give it the tap class.

## Accessibility: built in

- The bar is a named meter that screen readers read as "N of M credits left".
- The estimate and the warning are written out, so color is not the only clue.
- The warning says why, such as running low or not enough left for this.
- The bar's grow-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Put a real button or link with a clear name in the upgrade slot.
- Place the meter before the action it estimates, so the cost is heard before the action.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| remaining (required) | `number` |  | Credits or quota left. |
| total (required) | `number` |  | Full allowance for the period. |
| unit | `string` | `"credits"` | Plural unit name used in the text. |
| estimate | `number` |  | Cost of the pending action. Shows This will use about N credits. |
| resetText | `string` |  | Reset time, for example Resets Nov 1. |
| warnAt | `number` | `0.8` | Fraction used, 0 to 1, at which the meter warns. |
| upgrade | `ReactNode` |  | Slot for an upgrade action, shown only in the warn state. |
| warnText | `string` |  | Overrides the reason in the warn state. |
| label | `string` | `"Usage"` | Accessible name of the meter. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- running low: When the used share reaches warnAt, the bar warns and a running-low message shows with the optional upgrade slot.
- not enough: When estimate is more than remaining, the bar turns attention-coloured and says there is not enough left.
- estimate: Pass estimate to show how much this action will use.

## Tokens

- `--attention`
- `--attention-fg`
- `--fg`
- `--fg-subtle`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With an estimate: Shows the cost before the person confirms an action.
- Running low: When credits run low, the meter explains why and shows the upgrade button.
- Cost is more than what is left: The warning says so even when usage is moderate.

Source: src/molecules/UsageMeter.tsx
