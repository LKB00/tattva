# VersionPager
Previous and next buttons with a count like 1/3, for the versions of one message.
Status: stable. Page: https://lkb00.github.io/tattva/#component-version-pager
VersionPager steps through the versions made when a message is edited or written again. Buttons turn off at either end. Screen readers hear the new position. It can show an Edited label and a button to branch off. It starts on the latest version.
## When to use it

Steps through the versions of one message, made by editing it or asking again. The count is small so the message itself stays the focus.

## Use it for

- A message that was edited, so the earlier wording is still there to look at.
- A reply that was written again, so people can compare the attempts.
- Starting a new chat from one version, with the branch button.

## Not for

- Going back to an earlier point in a long piece of work: use `checkpoint-list`
- Switching between an AI suggestion and the person's own edit: use `revert-toggle`
- A list of saved versions of a document or design: use `version-history`

## Anatomy

- Previous button
- Count
- Next button
- Edited label
- Branch button

## Do

- Keep the pager next to the message it belongs to.
- Change the message text with the version so the count and text match.
- Offer a branch button only if your product can start a separate chat.

## Avoid

- Do not use it for unrelated messages. It is for versions of one message.
- Do not hide the count. The position is the point of the control.
- Do not move the cursor when the version changes. People should be able to keep clicking.

## On a phone

- The pager wraps onto a second line if the edited label and branch button do not fit.
- The previous and next buttons keep their size and have a 44px tap area on a touch screen.
- Tapping steps one version at a time; there is no swipe, so keep the pager next to the message it changes.

## Accessibility: built in

- Previous and next are named buttons that turn off at the first and last version.
- After each step, screen readers hear the new position, such as "Version 2 of 3".
- The visible count is hidden from screen readers so it is not read twice.
- The whole control is a group named "Message versions".

## Accessibility: what you need to do

- Change the message text when the version changes, so what people hear matches the count.
- Place the pager right after the message it belongs to, so screen reader users know which message it changes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| total (required) | `number` |  | Number of sibling versions. |
| current | `number` |  | Controlled current version, 1-based. |
| defaultCurrent | `number` | `total` | Starting version in uncontrolled mode. |
| onChange | `(version: number) => void` |  | Called with the new 1-based version. |
| edited | `boolean` |  | Shows the edited label. |
| editedLabel | `string` | `"Edited"` | Text of the edited label. |
| branchAction | `ReactNode` |  | Slot for an action such as Branch from here. |
| announce | `(current: number, total: number) => string` | `Version N of M` | Builds the polite announcement. |
| label | `string` | `"Message versions"` | Accessible name for the group. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- selected: Set with the current prop.

## Tokens

- `--fg-muted`
- `--surface-sunken`
- `--border`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Default: Starts on the latest version.
- Edited, with a branch button: Use it when your product can start a new chat from this version.

Source: src/molecules/VersionPager.tsx
