# ApprovalPrompt
A pause that asks a person before the assistant does something important.
Status: stable. Page: https://lkb00.github.io/tattva/#component-approval-prompt
ApprovalPrompt stops the assistant before an action and says exactly what will happen. It shows a risk label, the details, and equal Approve and Deny buttons. Low risk looks neutral. Medium and high risk use amber, because a person has to decide. High risk gets a red label. Always allow shows only for low risk. Use it before anything that sends, deletes, spends or shares.
## When to use it

Stops the assistant before an action that matters and says exactly what will happen. Approve and Deny sit side by side, so saying no is as easy as saying yes.

## Use it for

- Before the assistant sends, deletes, spends or shares something.
- An action that cannot be undone: set risk to high.
- A read-only action people may want to allow every time: set risk to low and pass onAlways.

## Not for

- Harmless actions that change nothing
- Choosing how much the assistant may do on its own: use `permission-mode-switcher`
- A question the assistant needs answered before it can go on: use `agent-question-card`

## Anatomy

- Shield icon
- What it wants to do
- Risk label
- Details
- Approve
- Deny
- Always allow (low risk only)

## Do

- Name the real person, file or amount, so no one has to guess.
- Make Deny as easy to find as Approve.
- Set the risk by what the action does: can it be undone, and who does it reach.
- Offer Always allow only for low-risk actions that just look.

## Avoid

- Do not ask about harmless actions. Too many questions teach people to click through.
- Do not use vague words like This action may have effects.
- Do not pre-select Approve for high-risk actions.
- Do not expect Always allow on medium or high risk. It never shows.

## On a phone

- The action, risk badge and details fill the width, and the Approve and Deny buttons wrap onto a second line if they do not fit.
- Every button has a 44px tap area on a touch screen, and Deny is the same size as Approve.
- It sits in the page and does not open as a sheet, so place it where the person will see it without scrolling.

## Accessibility: built in

- Screen readers announce it as an alert dialog named "Approval needed" followed by the action.
- The risk level is written in words, such as "high risk", so color is not the only clue.
- Approve, Deny and Always allow are real buttons that work with Tab, Enter and Space.
- Always allow never shows for medium or high risk, even if you pass onAlways.

## Accessibility: what you need to do

- Move focus to the prompt when it appears, for example to Deny, or show it where the person is already working. It does not move focus by itself.
- Tell people the result of their choice, for example with a short status message.
- Write the detail with the real names, files and amounts.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| action (required) | `string` |  | Short title of what the agent wants to do. Also used in the dialog's accessible name. |
| detail (required) | `ReactNode` |  | Exactly what will happen, in plain language with real values, not placeholders. |
| risk | `"low" \| "medium" \| "high"` | `"medium"` | Low uses the neutral sunken surface and a neutral badge. Medium uses the attention surface and a warning badge. High uses the attention surface and a danger badge. The level is always written in the badge text. Also decides whether Always allow can show. |
| onApprove (required) | `() => void` |  | Called when Approve is pressed. |
| onDeny (required) | `() => void` |  | Called when Deny is pressed. |
| onAlways | `() => void` |  | Adds an Always allow ghost button. Rendered only when risk is low. |

## States

- low risk: Set risk to low for a quiet border and an optional Always allow button when onAlways is passed.
- medium or high risk: Set risk to medium or high for a warning-tinted box and a coloured risk badge.
- focus: The Approve, Deny and Always allow buttons show a focus ring on keyboard focus.

## Tokens

- `--warning / --warning-soft / --warning-fg (medium and high surface)`
- `--surface-sunken (low surface)`
- `--danger-soft / --danger-fg (high risk badge)`
- `--fg-muted`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- High risk: An action that cannot be undone, in amber with a red label. There is no Always allow.
- Medium risk (the default): An action others will see, in amber. Medium is used when no level is given.
- Low risk with Always allow: An action that only looks, in a neutral color. It can offer Always allow so people are not asked again. Click a button to see the choice.

Source: src/organisms/ApprovalPrompt.tsx
