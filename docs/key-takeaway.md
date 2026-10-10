# KeyTakeaway
A labeled box for the closing point of an answer.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-key-takeaway
KeyTakeaway sets the closing point of an answer apart from the rest. An icon and a text label make it stand out, so color is not the only clue. Keep it to one to three sentences.
## When to use it

Sets the closing point of a long answer apart, so a reader who skims still finds it. A visible label and an icon mark it, so it does not rely on color.

## Use it for

- The one to three sentence conclusion at the end of a long answer.
- A recommendation that follows from the facts above it.

## Not for

- Warnings, limits or errors: use `callout`
- A whole overview with sources and feedback: use `summary-card`

## Anatomy

- Icon
- Label
- Summary

## Do

- Use it once, at the end of a long answer.
- Write a full sentence that makes sense on its own.
- Keep the label visible.
- Put it after the facts it sums up.

## Avoid

- Do not use it for warnings. Use Callout.
- Do not repeat the whole answer.
- Do not use several in one answer.
- Do not hide the label.

## On a phone

- Fills the width of its container, and the text wraps inside the box.
- The small label is 12px on a touch screen.

## Accessibility: built in

- Screen readers hear it as a section named by its visible label, so people can jump to it.
- The icon is hidden from screen readers. The label carries the meaning.

## Accessibility: what you need to do

- Write a label that makes sense on its own, because screen readers use it as the section's name.
- Use only one per answer, so the named sections stay easy to tell apart.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label | `string` | `"Key takeaway"` | Visible label. Also the accessible name of the region. |
| children (required) | `ReactNode` |  | One to three sentences. |
| className | `string` |  | Extra classes on the section. |

## Tokens

- `--surface-sunken`
- `--lime`
- `--on-lime`
- `--border`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Ending an answer
- Your own label

Source: src/molecules/KeyTakeaway.tsx
