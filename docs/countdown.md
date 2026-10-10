# Countdown
A deadline as a large date, the days left in words, and an optional bar of time used.
Status: stable. Page: https://lkb00.github.io/tattva/#component-countdown
Countdown puts the date first and biggest, then says how many days are left in words: 20 days left, Due today, or 3 days past. Pass a start date to add a thin bar of time used. After the deadline it shows a label with an icon, and it turns amber only when the page says a person must act.
## When to use it

Answers the first question about a case: by when. The date is the largest text and the days left are written out, so nothing depends on colour or a bar.

## Use it for

- A reply-by or pay-by date at the top of a case.
- A deadline with a start date, to show how much time has gone.
- A missed deadline that now needs a person to take a step.

## Not for

- A plain number with how it changed: use `stat-tile`
- How much of an allowance is used: use `meter-bar`
- A status label such as Overdue in a row: use `badge`

## Anatomy

- Label
- Action chip
- Date
- Days in words
- Time bar

## Do

- Put it near the top, since the date is the first thing people look for.
- Pass start when the person needs to see how much time has gone.
- Use needsAction only when the next step belongs to a person.

## Avoid

- Do not use amber because a date is close. Use it when a person must act.
- Do not rely on the bar. The days are always written in words.
- Do not use it for dates measured in hours or minutes.

## On a phone

- It is a card that fills its container, with the date in large text that breaks anywhere if it is too long.
- The days left are in words and the bar is a picture of the same thing, so a small screen loses nothing.
- Nothing in it is tapped or hovered.

## Accessibility: built in

- The card is a group named by the label.
- The date is a time element with the ISO date.
- Days left, due today and days past are written in words, so colour is never the only cue.
- A missed deadline shows an icon and the missed label.
- The time bar is a meter with the text N of M days used.
- Dates are worked out from the calendar day only, so time zones and daylight saving cannot shift the count.

## Accessibility: what you need to do

- Give a label that says whose date it is, such as They must reply by.
- Pass needsAction only when a person has to act. Amber is not decoration.
- Pass today in docs and tests so the days left do not change under you.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| deadline (required) | `string` |  | ISO date, such as 2026-10-27. Only the calendar day is used. |
| today | `string` |  | ISO date to count from. Defaults to today on the device. Pass it in docs and tests. |
| label (required) | `string` |  | What the date is, such as They must reply by. Also the name of the group. |
| start | `string` |  | ISO date the clock started. Turns on the time bar. |
| unit | `"days"` | `"days"` | Only days for now. |
| missedLabel | `string` | `"Deadline passed"` | Shown with an icon once the deadline has passed. |
| formatDate | `(iso: string) => string` | `long date in en-IN` | Turns the ISO date into the large text. |
| needsAction | `boolean` |  | Adds the amber chip. When the deadline is today or past it also adds an amber border and bar. Leave it off unless a person must act. |
| actionText | `string` | `"Needs action"` | Text of the amber chip. |
| className | `string` |  | Classes for the outer card. |

## States

- days left: The default. The date is large and the days left are written in words.
- due today: When the deadline is today the line reads Due today.
- missed: After the deadline the missed label shows with an icon, followed by the days past.
- needs action: With needsAction, an amber chip shows. If the deadline is today or past, the border and bar turn amber too.
- no date: If the deadline cannot be read as a date, an em dash shows in place of the date and the days line is left out.

## Tokens

- `--surface`
- `--border`
- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--fg`
- `--fg-muted`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With a time bar: A start date adds the bar. The bar has the words 10 of 30 days used for screen readers.
- Past the deadline: The missed label comes with an icon. The amber treatment shows only because needsAction is passed.
- Due today: On the day itself it reads Due today. Without needsAction it stays in plain ink.

Source: src/molecules/Countdown.tsx
