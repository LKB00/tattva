# SuggestionCard
One writing suggestion with its type, the before and after, a reason, and Accept and Dismiss buttons.
Status: stable. Page: https://lkb00.github.io/tattva/#component-suggestion-card
SuggestionCard shows one suggestion to improve your writing. A label with an icon and a word names the kind of change. Your original text is crossed out next to the suggested text, and a short reason says why. Accept or Dismiss ends it. The types are Correctness, Clarity, Engagement and Tone, and you can swap the label and icon.
## When to use it

Shows one writing suggestion with its type, the original crossed out next to the new text, and a short reason. One card per suggestion keeps each decision small.

## Use it for

- A spelling, grammar, clarity or tone fix for a phrase.
- A suggestion opened from an underlined phrase in the text.

## Not for

- A whole AI draft: use `suggestion-bar`
- A suggested ending to the line being typed: use `ghost-text`

## Anatomy

- Type label with icon
- Original text
- Suggested text
- Reason
- Accept
- Dismiss

## Do

- Show one suggestion per card.
- Keep the explanation to a sentence.
- When you add a type, give it both a label and an icon.
- After Accept or Dismiss, move the cursor to the next suggestion or back to the text.

## Avoid

- Do not tell types apart by color alone.
- Do not accept just because someone pointed at it or tabbed to it.
- Do not use it for a whole draft. Use SuggestionBar.

## On a phone

- The card fills the width up to 384px, so it fills a phone and does not grow on a tablet.
- Accept and Dismiss keep their size and have a 44px tap area on touch screens.
- The original and the suggestion wrap as one paragraph.

## Accessibility: built in

- The card is named by its type, such as "Clarity suggestion".
- The type is a word plus an icon. Color is only extra.
- Hidden words say "Original" and "Suggested" before each text, because screen readers may not mention crossed-out text.
- Accept and Dismiss are real buttons.
- After Accept or Dismiss, keyboard focus moves to the next suggestion, else the previous one, else the text. Pass focusAfter to choose another place.

## Accessibility: what you need to do

- When you add your own type, give it both a categoryLabel and a categoryIcon, so it never relies on color.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| category | `"correctness" \| "clarity" \| "engagement" \| "tone"` | `"correctness"` | Picks the default label, icon and badge tone. |
| categoryLabel | `string` |  | Replaces the category text, for document-specific categories. |
| categoryIcon | `ReactNode` |  | Replaces the category icon. |
| original (required) | `string` |  | Text as written, shown struck through. |
| suggestion (required) | `string` |  | Proposed replacement. An empty string shows (remove). |
| explanation | `string` |  | Short reason for the change. |
| onAccept / onDismiss | `() => void` |  | Resolve the suggestion. |
| acceptLabel / dismissLabel | `string` | `"Accept" / "Dismiss"` | Button text. |
| className | `string` |  | Extra classes on the card. |

## States

- category: Set category to correctness, clarity, engagement or tone to change the badge colour and icon.
- removal: When suggestion is empty, the card shows (remove) in place of the new text.
- focus: Accept and Dismiss show a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--border`
- `--lime`
- `--danger`
- `--fg-muted`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Try it: Accept or dismiss to see the result. The card shows one suggestion, like when you click an underlined phrase.
- The types: Each type has its own icon and word, so none depends on color.

Source: src/molecules/SuggestionCard.tsx
