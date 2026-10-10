# Checklist
A list of what is still open, with finished work folded into one line.
Status: stable. Page: https://lkb00.github.io/tattva/#component-checklist
Checklist shows open items as rows, each with an optional tag and status. Rows that need a person get an amber dot. Finished work is folded into one summary line so the list stays short. Use it for a task in progress, such as people who still owe a document.
## When to use it

Shows what is still open in a running task and folds finished work into one line, so the list stays short and the open items stand out.

## Use it for

- People or items that still owe something, such as missing documents.
- A task in progress where only a few items need a person.
- Open work with a one-line summary of what is already done.

## Not for

- Steps that must happen in a set order: use `step-timeline`
- A short list of things to open from a landing screen: use `tray`

## Anatomy

- Top line
- Item title
- Item tag
- Status with amber dot
- Done summary line

## Do

- List open items first and fold finished ones into the summary line.
- Mark a row only when a person has to act.
- Write status as a short fact with a time, such as No reply in 5 days.
- Use the tag for a category, not for status.

## Avoid

- Do not list every finished item. The summary line is there to avoid that.
- Do not use amber for items that are only late or still being handled by the assistant.
- Do not use it for steps that must happen in order. Use StepTimeline.

## On a phone

- Each row runs the full width, with the title on the left and the status on the right.
- The rows are not tappable, so there are no touch targets to size. Status text is 12px.

## Accessibility: built in

- It is a real list, so screen readers say how many items there are.
- The amber dot is read as "Needs attention", next to the status words.
- The check mark in the summary line is hidden from screen readers. The words carry the meaning.

## Accessibility: what you need to do

- Write a status that says what is needed, such as "No reply in 5 days".
- Put a real button or link in the title if a row should open something. Rows do nothing on their own.
- Mark a row as needing attention only when a person has to act.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `ChecklistItem[]` |  | Open items. ChecklistItem is { id: string; title: ReactNode; badge?: ReactNode; status?: string; attention?: boolean }. |
| doneSummary | `string` |  | One line summarising completed work. Shown as a final row with a check mark. |
| className | `string` |  | Extra classes merged onto the list. |

## States

- done summary: Pass doneSummary to add a final row with a check and the summary text.
- empty: With no items and no doneSummary, only the top border is drawn.

## Tokens

- `--border (top and row rules)`
- `--border-strong (summary check)`
- `--attention (dot)`
- `--fg-muted / --fg-subtle`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Open items with a summary: The first row needs a person, so it has an amber dot. Finished work is one line at the end.
- Nothing needs a person: When nothing needs a person, no amber appears.

Source: src/organisms/Checklist.tsx
