# ReEntryRecap
A "While you were away" summary shown when you come back to a run.
Status: stable. Page: https://lkb00.github.io/tattva/#component-re-entry-recap
ReEntryRecap catches you up after a break. It says how long you were away, what finished, what needs you now (with buttons), and what changed as simple counts. A Show full log button leads to the detail. The whole card can fold down to its header.
## When to use it

Catches people up after a break: how long they were away, what finished, what needs them now and what changed. What needs action comes before the counts, and the full log is one press away.

## Use it for

- When someone returns to a run that kept working while they were gone.
- Putting the actions that wait on the person at the top of a run.
- Summing up changes as counts, with a way into the full log.

## Not for

- Waiting items from many runs at once: use `needs-you-inbox`
- The full record of every action: use `action-log`
- A section that people open and close, with no recap: use `collapsible`

## Anatomy

- Header with time away
- Fold button
- Finished list
- Needs you list with actions
- Counts of what changed
- Show full log

## Do

- Show it once, when the person returns, not on every visit.
- Put what needs the person above what changed.
- Use counts for changes and keep the detail in the full log.
- Write each line as a short sentence a friend would say.

## Avoid

- Do not show the whole log here.
- Do not use amber for finished work.
- Do not hide the actions behind the fold.
- Do not show it if nothing happened. Say nothing.

## On a phone

- The whole header is one button across the card that opens and closes the recap. On a touch screen its tap area is at least 44px tall.
- Items needing you wrap so the action button drops under the text on a narrow screen.
- The change counts wrap onto as many rows as they need.

## Accessibility: built in

- The header is a button that says whether the card is open or closed.
- The card is a region named by its header, with a heading for each part, so screen readers can jump between them.
- Rows that need you have a dot and words, not color alone.
- The fold arrow turns without animation when people turn off motion in their system settings.

## Accessibility: what you need to do

- Write action labels that make sense alone, such as "Pick a hotel", because the buttons are named only by them.
- Set headingLevel so the header fits your page outline. It is 3 unless you change it; the inner headings sit one level below.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| awayFor (required) | `string` |  | How long the person was away, such as 2 hours. |
| finished | `string[]` | `[]` | What finished while away. |
| needsYou | `RecapNeed[]` | `[]` | Items waiting on the person: { id, text, actionLabel, onAction? }. |
| changes | `RecapChange[]` | `[]` | Counts of what changed: { label, count }. |
| onShowLog | `() => void` |  | Opens the full log. The button is hidden when omitted. |
| defaultOpen | `boolean` | `true` | Whether the card starts open. |
| labels | `ReEntryRecapLabels` |  | Overrides heading, away(time), section titles, empty lines and showLog. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's own heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the root. |

## States

- open or closed: Set with the defaultOpen prop.

## Tokens

- `--attention`
- `--surface`
- `--line`
- `--sunken`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- After two hours away: Press a Needs you button or Show full log. Press the header to fold the card.
- Nothing needs you: A calm recap when everything went well.
- Folded: Start folded when the person has seen similar recaps before.

Source: src/organisms/ReEntryRecap.tsx
