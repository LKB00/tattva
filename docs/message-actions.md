# MessageActions
Copy and retry buttons that sit under an assistant reply.
Status: stable. Page: https://lkb00.github.io/tattva/#component-message-actions
MessageActions is a small row of icon buttons under a reply. Copy saves the text so it can be pasted. It shows a check and "Copied" for a moment. The Regenerate button only appears if you turn it on. It is made for the bottom of a Message.
## When to use it

Small icon buttons under a reply for what people do after reading it: copy it, or ask for a new one. Icons keep the row quiet so it does not compete with the answer.

## Use it for

- Under every finished assistant reply.
- Offering a fresh answer: pass onRegenerate to show the second button.

## Not for

- Rating whether a reply was good: use `feedback-bar`
- Copying a piece of code inside a reply: use `code-block`
- Moving between versions of a reply: use `version-pager`

## Anatomy

- Copy button
- Regenerate button

## Do

- Put it at the bottom of an assistant Message once the reply is finished.
- Give it the plain text of the answer.
- Add Regenerate only when a new try is possible.

## Avoid

- Do not show it on a person's messages or while the reply is still appearing.
- Do not add more than a few actions. Put extras in a menu.
- Do not assume copying always works. If the browser blocks it, nothing is shown.

## On a phone

- The copy and regenerate buttons stay 28px square on touch screens and have a 44px tap area.
- The buttons have a title for hover, which a phone does not show, so the label is read by screen readers only.
- Copy needs clipboard access from the browser. If it is blocked, nothing happens and no error is shown.

## Accessibility: built in

- Both buttons have names that screen readers read: "Copy response" and "Regenerate response".
- After copying, a check shows and the name changes to "Copied" for a moment.
- Both buttons work with the keyboard, and their names also show as a tooltip on hover.
- The icons are hidden from screen readers.

## Accessibility: what you need to do

- Add your own announcement if people must know the copy worked. Screen readers may not read the name change.
- Tell people when copying fails. The button stays silent when the clipboard is blocked.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| text (required) | `string` |  | Plain text written to the clipboard when Copy is pressed. |
| onRegenerate | `() => void` |  | When set, adds a Regenerate response button. |

## States

- copied: After a successful copy the icon becomes a check and the label reads Copied for about 1.5 seconds.
- hover: Each icon button gets a soft background under the pointer.
- focus: Each icon button shows a focus ring on keyboard focus.

## Tokens

- `--fg-subtle`
- `--surface-hover`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Copy only: Without the retry option, only Copy shows.
- Copy and regenerate

Source: src/molecules/MessageActions.tsx
