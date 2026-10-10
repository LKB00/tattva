# ConfidenceIndicator
Three bars and a label that show how sure the assistant is about an answer.
Status: stable. Page: https://lkb00.github.io/tattva/#component-confidence-indicator
ConfidenceIndicator pairs three small bars with a label: Low, Medium or High confidence. It never relies on color alone. More bars fill as confidence rises, and screen readers get a sentence that explains the level. High is green and medium is gray. Low is amber, because a person should double-check the answer. Use it beside replies that are not always reliable.
## When to use it

Tells people how far to trust an answer. Bars, a word and a sentence all say the same thing, so nobody needs to see color to read it.

## Use it for

- Beside a reply or fact that is not always reliable.
- Next to an extracted value that a person may need to check.

## Not for

- The model's own rating of itself, or any number you have not measured (see the Trust and safety guide)
- How much of something is used: use `meter-bar`
- Saying that content was made by AI: use `ai-label`

## Anatomy

- Bars
- Label
- Hidden explanation (for screen readers)

## Do

- Show it near the answer it describes, like at the bottom of a message.
- Base the level on something real: how well the sources support the answer, how much of the question was covered, or a success rate you measured on real cases. Write down what each level means for your product.
- When confidence is low, suggest a next step, like checking sources.
- Leave it out when you have no real signal. No label is better than one that guesses.

## Avoid

- Do not drive it from the model's own rating of itself ("I am 90% sure"). Models are often sure and wrong.
- Do not show a percentage you have not measured; a number looks more exact than it is.
- Do not put it on every answer as decoration.
- Do not drop the words to save space. They are the main clue.
- Do not add levels beyond low, medium and high.

## On a phone

- It stays on one line: bars, then the badge.
- The longer sentence, such as "Verify before relying on this", is only a hover tooltip and a screen reader line, so on a phone the bars and the badge word carry the meaning.
- The badge text is at least 12px on touch screens.

## Accessibility: built in

- The bars are hidden from screen readers. They read the label, such as "High confidence".
- A hidden sentence explains the level, such as "Low confidence. Verify before relying on this." Setting showText to false removes it.
- The same sentence shows as a tooltip on hover.
- The bars' grow-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Keep showText on unless the same explanation is already written nearby.
- Place it right next to the answer it rates, so it is clear what it refers to.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| level (required) | `"low" \| "medium" \| "high"` |  | Confidence level. Controls the bars, the badge tone and the label. |
| showText | `boolean` | `true` | Includes a visually hidden sentence that explains the level, for example Low confidence. Verify before relying on this. |

## States

- low: Set level to low for one bar, a warning badge and a verify-before-relying note.
- medium: Set level to medium for two bars and a neutral badge.
- high: Set level to high for three bars and a success badge.

## Tokens

- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--success`
- `--success-soft`
- `--fg-subtle`
- `--border-strong`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- All levels: Low fills one bar, medium two and high three.
- Without the hidden explanation: Turn off the hidden explanation for screen readers. The tooltip still shows on hover.

Source: src/molecules/ConfidenceIndicator.tsx
