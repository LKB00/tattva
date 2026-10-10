# ApprovedByMark
A small mark that says who said yes to an action.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-approved-by-mark
ApprovedByMark shows who approved an action: you, an automatic check, a saved rule, or nobody. It always uses an icon and words, so the meaning never depends on color. Put it beside any action in a log so people can tell their own approval from a machine's.
## When to use it

Says who allowed an action: the person, an automatic check, a saved rule, or nobody. It always pairs an icon with words, so people can tell their own approval from a machine's without relying on color.

## Use it for

- Beside each action in a log or history.
- On a finished step, to show whether a person or a rule let it run.
- Making auto mode visible with the words "Nobody asked".

## Not for

- A full record of actions with status and Undo: use `action-log`
- Showing that content was written by AI: use `ai-badge`
- A general status or category label: use `badge`

## Anatomy

- Icon
- Words
- Extra detail (optional, in the tooltip)

## Do

- Show it on every action that needed or skipped an approval.
- Keep the words visible next to the icon.
- Say 'Nobody asked' when auto mode skipped the question.
- Add detail naming the saved rule when you can.

## Avoid

- Don't use color alone to tell the kinds apart.
- Don't show 'You approved' for something an automatic check approved.
- Don't hide the mark to save space. Let it wrap instead.
- Don't use amber for it. It is a record, not a request.

## On a phone

- It is one short line of small text that wraps inside its container instead of cutting off.
- The detail text shows as a tooltip on hover only, so on a phone it is read aloud by screen readers but never shown.
- Keep the label words short, because the mark has no tap action.

## Accessibility: built in

- The words are always on screen. The icon is hidden from screen readers.
- Extra detail is read by screen readers after the words, and shows as a tooltip on hover.
- It is plain text, so it zooms and wraps with the page.

## Accessibility: what you need to do

- Put anything people must see in the visible words, not only in detail: the tooltip appears only on mouse hover.
- Pass labels in the person's language when your app is not in English.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| by (required) | `"you" \| "check" \| "rule" \| "none"` |  | Who approved the action. none means nobody was asked (auto mode). |
| labels | `Partial<Record<ApprovedBy, string>>` |  | Replace the visible words for one or more kinds. |
| detail | `string` |  | Extra plain detail. Set as the tooltip and added as screen reader text. |
| className | `string` |  | Extra classes on the span. |

## States

- you: Set by to you for a tick and the text You approved.
- check: Set by to check for a shield and the text Automatic check approved.
- rule: Set by to rule for a bookmark and the text Allowed by a saved rule.
- none: Set by to none for a loop icon and the text Nobody asked (auto mode).
- detail: Pass detail to add a tooltip and extra text for screen readers.

## Tokens

- `--fg-muted`

## Examples

### The four kinds

Each kind has its own icon and words. 'Nobody asked' is shown plainly so auto mode is never hidden.

```tsx
<ApprovedByMark by="you" />
<ApprovedByMark by="check" />
<ApprovedByMark by="rule" />
<ApprovedByMark by="none" />
```

### Naming the saved rule

Add detail to say which rule allowed it. It shows in the tooltip and is read out by screen readers.

```tsx
<ApprovedByMark by="rule" detail="Rule: emails to team@example.com" />
```

### Your own words

Replace the words for one kind with labels.

```tsx
<ApprovedByMark by="you" labels={{ you: "Approved by Sam" }} />
```

Source: src/atoms/ApprovedByMark.tsx
