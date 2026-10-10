# VariationActions
A row of things you can do with one AI result, each with a Subtle or Strong choice, and a line saying where it came from.
Status: stable. Page: https://lkb00.github.io/tattva/#component-variation-actions
VariationActions lists things to do with one result, such as Vary, Upscale, Remix and Extend. Each has its own strength choice. A line says which result this one came from, and each action can show what it costs. You can change the list, and drop the strength choice where it is not needed.
## When to use it

A row of things to do with one result, such as Vary or Upscale. Each action keeps its own strength choice and shows its cost beside it, so nothing is charged by surprise.

## Use it for

- Under a generated image or clip, to make a new take from it.
- Showing what each action costs before it runs.
- Saying which result this one came from, with the lineage line.

## Not for

- Settings for something not made yet: use `parameter-panel`
- Copy, retry and feedback on a chat reply: use `message-actions`
- Choosing between several results side by side: use `variant-grid`

## Anatomy

- Where it came from
- Action button
- Strength choice
- Cost note

## Do

- Say which result this one came from.
- Show what each action costs, if it costs anything.
- Keep the strength choice next to the action it changes.
- Hide the strength choice for actions that do not have one.

## Avoid

- Do not run an action when someone changes strength. Only the action button does that.
- Do not put more than a handful of actions in one row.
- Do not hide costs and charge afterward.
- Do not use the "came from" line as decoration. Leave it out when the result has no source.

## On a phone

- Each action is its own row: the button, its strength switch and its cost wrap onto new lines when the row is full.
- Buttons and switch options keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- Each strength choice is named after its action, such as "Vary strength". Arrow keys move and choose.
- Actions are real buttons with visible words.
- Each action keeps its own strength, so changing one never changes another.
- Changing a strength never runs an action. Only the action button does.

## Accessibility: what you need to do

- Write each cost in words, such as "About 4 credits", so it reads clearly aloud.
- Tell people when an action starts and when it is done. The row does not announce anything.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| actions | `VariationAction[]` | `Vary, Upscale, Remix, Extend` | Each action has an id, a label, an optional cost node and an optional strength flag. Set strength to false to hide the choice. |
| onAction (required) | `(actionId: string, strength: string) => void` |  | Called when an action button is pressed. Strength is an empty string for actions with no strength choice. |
| strengths | `SegmentOption<string>[]` | `Subtle, Strong` | Strength choices shared by all actions that have one. |
| defaultStrength | `string` |  | Strength each action starts on. Defaults to the first strength. |
| lineage | `ReactNode` |  | Line above the actions, for example Made from Variant B. |
| disabled | `boolean` |  | Disables the action buttons. |
| className | `string` |  | Extra classes for the wrapper. |

## States

- disabled: Set with the disabled prop.

## Tokens

- `--fg-muted`
- `--fg-subtle`
- `--border`
- `--surface-sunken`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Standard actions, with where it came from: The standard list is Vary, Upscale, Remix and Extend. Extend has no strength choice.
- Showing costs: Each action can show a cost. Use it to say what the action will spend.
- Your own strengths, switched off: Your own strength choices, starting on the second one. Disabled turns the buttons off.

Source: src/molecules/VariationActions.tsx
