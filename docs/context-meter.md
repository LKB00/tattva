# ContextMeter
Shows how full the chat is, with a Summarize button when it is nearly full.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-context-meter
ContextMeter shows how full the chat is, as a bar and short text. The assistant can only keep so much of a chat in mind. The bar stays neutral until it nears the limit. Then it turns amber, a line says why, and a Summarize button appears. A marker can show that earlier messages were summarized.
## When to use it

Shows how much of the chat the assistant can still keep in mind. It stays quiet until people can do something, then warns in amber and offers to summarize.

## Use it for

- A long chat that may reach the limit of what the assistant can hold.
- Offering Summarize when the chat is nearly full.
- Leaving a note after earlier messages have been summarized.

## Not for

- Credits or a plan allowance: use `usage-meter`
- A limit that has already been reached: use `rate-limit-notice`
- A plain bar with no warning text or actions: use `meter-bar`

## Anatomy

- Usage text
- Bar
- Warning text
- Summarize button
- Summarized marker

## Do

- Keep the meter quiet until the person can do something about it.
- Show the reason and the button together with amber.
- Leave a marker after summarizing so the chat history stays honest.
- Pass onSummarize, or the warning appears with nothing to act on.

## Avoid

- Do not warn when there is plenty of room. Amber means act now.
- Do not show Summarize unless it works.
- Do not rely on the bar color alone. The text carries the state.

## On a phone

- The meter fills the width, and the amount and the warning share one row.
- The Summarize button appears under the bar when the limit is near, and has a 44px tap area on a touch screen.
- The bar is only 6px tall and carries no tap action, so the amount in text is the part to read.

## Accessibility: built in

- The bar is a named meter, so screen readers hear its value, such as "68% of context".
- The warning is written beside the bar, so it does not rely on color.
- Summarize turns off and reads "Summarizing" while a summary runs.
- The bar's grow-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Tell people when summarizing ends. The button label changes, but nothing is read out.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| percent (required) | `number` |  | Share of the context window in use, 0 to 100. |
| valueText | `string` | `"N% of context"` | Text beside the bar and the meter's value text. |
| summarizeAt | `number` | `85` | Percent at which the bar warns and Summarize appears. |
| onSummarize | `() => void` |  | Called on Summarize. The action stays hidden when omitted. |
| summarizing | `boolean` |  | Disables the action and changes its label while a summary runs. |
| compactionNote | `string` |  | Shows a marker row with this text. |
| warnText | `string` | `"Close to the limit."` | Reason shown beside the amber state. |
| summarizeLabel | `string` | `"Summarize"` | Label of the action. |
| label | `string` | `"Context used"` | Accessible name of the meter. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- near limit: At or above summarizeAt a warning line appears, and a Summarize button if onSummarize is passed.
- summarizing: Pass summarizing to disable the button and change its text to Summarizing.
- compacted: Pass compactionNote to add a check line below the bar saying what was condensed.

## Tokens

- `--attention`
- `--attention-fg`
- `--fg`
- `--border`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Normal: Far from the limit, there is no warning and no button.
- Near the limit: Near the limit, the bar warns and Summarize appears.
- After summarizing: Leave a marker once the conversation has been shortened.

Source: src/molecules/ContextMeter.tsx
