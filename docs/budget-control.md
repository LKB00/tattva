# BudgetControl
Shows and sets how much time, money and steps a run may use, and what happens at the limit.
Status: stable. Page: https://lkb00.github.io/tattva/#component-budget-control
BudgetControl shows three limits for a run: time, spend and number of steps. Each has a progress bar and a number the person can change. A choice sets what happens when a limit is reached. A limit that is close or reached says so in words.
## When to use it

Puts the limits of a run where people can see and change them: time, spend and steps. One choice sets what happens at a limit, so a run never quietly goes past it.

## Use it for

- Before or during a long run, to set how much time, money or steps it may use.
- Showing how close a run is to each limit.
- Choosing whether a run stops, stops and asks, or asks for more at a limit.

## Not for

- Usage of a plan or account over time: use `usage-meter`
- How full the conversation's memory is: use `context-meter`
- A single bar with no settings: use `meter-bar`

## Anatomy

- Heading
- Limit row: name, number box with unit
- Progress bar
- Used of cap text and near-limit note
- When a limit is reached choices
- Status text for screen readers

## Do

- Show used and cap in plain numbers next to the bar.
- Say what happens at the limit before it happens.
- Default to Stop and ask me.
- Use the same unit people see on their bill.

## Avoid

- Don't use jargon like 'iterations'. Say steps.
- Don't rely on the bar color alone. A note names the state.
- Don't let a cap go below zero.
- Don't continue past a limit without asking, unless the person chose that.

## On a phone

- The limit field opens the number keypad on a phone, and on a touch screen it is 44px tall with 16px text so the page does not zoom.
- Each limit stacks its name above the field when the card is narrow.
- The three choices for what happens at a limit are rows that grow to at least 44px tall on touch screens.

## Accessibility: built in

- Each bar has a name and a spoken value, such as "12 of 30 minutes used".
- Each number box has a name, such as "Time limit", and shows its unit.
- Limits that are close or reached are announced, and shown with an icon and words.
- The choices for a reached limit are radio buttons that work with the arrow keys.

## Accessibility: what you need to do

- Show your own message if a number is not allowed. The box accepts any number from zero up and shows no error.
- Set headingLevel so the heading fits your page outline. It is 3 unless you change it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| limits (required) | `BudgetLimit[]` |  | Each limit: id, label, used, cap, unit. |
| onCapChange | `(id: string, cap: number) => void` |  | Called with a valid, non-negative number when the person edits a cap. |
| limitAction | `"stop-and-ask" \| "stop" \| "ask-for-more"` |  | What happens at a limit (controlled). |
| defaultLimitAction | `LimitAction` | `"stop-and-ask"` | Starting choice when uncontrolled. |
| onLimitActionChange | `(action: LimitAction) => void` |  | Called when the choice changes. |
| warnAt | `number` | `0.8` | Fraction of a cap at which a limit counts as close. |
| labels | `BudgetControlLabels` |  | Replace the heading, choice names, notes and the number box name. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's own heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the section. |

## States

- near limit: When used reaches warnAt of the cap, the bar changes colour and a Close to the limit note appears.
- limit reached: When used reaches the cap, the note reads Limit reached.
- editing a cap: Typing a valid number in a limit's box updates it and calls onCapChange.
- focus: The cap boxes and the radio options show a focus ring on keyboard focus.

## Tokens

- `--attention`
- `--border`
- `--surface-sunken`
- `--radius-field`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Limits for a trip search: Change a number and the bar updates. Spend is close to its limit and steps have reached theirs.
- Plenty of room: Nothing is close to a limit, so no warning shows.
- Spend in credits, stop without asking: Use any unit. Here the choice starts on Stop.

Source: src/organisms/BudgetControl.tsx
