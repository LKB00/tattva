# RevertToggle
Lets people flip between the AI's suggestion and their own edit, with a way back to the original.
Status: stable. Page: https://lkb00.github.io/tattva/#component-revert-toggle
RevertToggle shows one version at a time and lets people switch between the AI suggestion and their edit. Revert to original goes back to the AI version and tells your app to drop the edit. With no edit, it shows the AI version alone. Screen readers hear which version is showing.
## When to use it

Shows one version of a short text at a time, so people can flip between the AI suggestion and their own edit. The original is kept so they can always go back.

## Use it for

- A short AI suggestion the person has edited, such as a reply draft or a title.
- Comparing the AI's wording with the person's own before they keep one.
- Dropping an edit and going back to the original suggestion.

## Not for

- Long text where people need to see exactly what changed: use `diff-view`
- Several versions of one chat message: use `version-pager`

## Anatomy

- Version switch
- Revert button
- Text
- Status for screen readers

## Do

- Keep the AI version until the person reverts or discards it.
- Use it for short text where a side-by-side view would be too much.
- Clear the edit in onRevert. The part shows the AI version but does not remove your stored edit.

## Avoid

- Do not overwrite the AI version when the person edits.
- Do not use it for long documents. A view that highlights changes fits better.
- Do not show the switch before an edit exists.

## On a phone

- The switch and the Revert button sit on one line and wrap when they do not fit.
- The two switch options keep their size and have a 44px tap area on a touch screen, and their labels do not wrap.
- The value card fills the width, so long text wraps inside it.

## Accessibility: built in

- The version switch is a set of choices: arrow keys move between them, and Home and End jump to the ends.
- After each change, screen readers hear "Showing" and the version name.
- Revert to original is a normal button.
- With no edit, the switch and button are not shown at all.

## Accessibility: what you need to do

- Move focus to the text after a revert, because the switch and button go away once the edit is cleared.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| aiValue (required) | `ReactNode` |  | The original AI suggestion. |
| userValue | `ReactNode` |  | The person's edit. Without it only the AI value shows. |
| value | `"ai" \| "user"` |  | Controlled active version. |
| defaultValue | `"ai" \| "user"` | `"user" when an edit exists` | Starting version when uncontrolled. |
| onChange | `(value: "ai" \| "user") => void` |  | Called when the version changes. |
| onRevert | `() => void` |  | Called when Revert to original is chosen. |
| aiLabel | `string` | `"AI suggestion"` | Label of the AI option. |
| userLabel | `string` | `"Your edit"` | Label of the edit option. |
| revertLabel | `string` | `"Revert to original"` | Label of the revert button. |
| label | `string` | `"Version"` | Accessible name of the switch. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- no edit: Without userValue only the AI value is shown and the switch and revert button are hidden.
- reverted: Pressing the revert button switches back to the AI version and announces it to screen readers.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- After an edit: Reverting drops the edit here, and the switch goes away.
- Starting on the AI version: Opens on the AI version even when an edit exists.

Source: src/molecules/RevertToggle.tsx
