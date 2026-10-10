# ErrorState
A red message for a problem that can be fixed, with an optional Try again button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-error-state
ErrorState is a red Callout titled "Something went wrong". You give it a message. You can also add a Try again button. Use it when something failed and trying again is safe.
## When to use it

Says that something failed, that it can be fixed, and offers to try again. It is a red Callout with that wording ready to use.

## Use it for

- A request that failed and is safe to try again.
- A part of the page that could not load.

## Not for

- A request the assistant will not do: use `refusal-notice`
- A usage limit: use `rate-limit-notice`
- A whole empty area with a drawing: use `empty-state`

## Anatomy

- Alert icon
- Title
- Message
- Try again button

## Do

- Say what happened in plain words, and whether the person's work was kept.
- Add Try again only when it can work.
- Use a specific title when you know the cause.

## Avoid

- Do not use it for refusals or usage limits. Use RefusalNotice or RateLimitNotice.
- Do not show error codes or technical details as the message.
- Do not blame the person. Describe what went wrong on our side.

## On a phone

- The message wraps, and on a phone the Try again button drops under it so the text keeps its full width.
- Try again keeps its size and has a 44px tap area on touch screens.
- It fills the width of its container.

## Accessibility: built in

- Screen readers announce it right away when it appears.
- Try again is a real button with visible words.
- An alert icon and the words come with the red, so color is not the only clue.

## Accessibility: what you need to do

- Write a message that says what failed and whether the person's work is safe.
- Move the keyboard to a sensible spot after a retry works or fails again.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title | `string` | `"Something went wrong"` | Heading of the callout. |
| message (required) | `ReactNode` |  | What happened, and whether the person's work is safe. |
| onRetry | `() => void` |  | Adds a Try again button when provided. |

## States

- retry: Pass onRetry to show a Try again button next to the message.

## Tokens

- `--danger-soft`
- `--danger-fg`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With retry: Say whether the person's work is safe and offer a next step.
- Custom title, no retry: Leave out Try again when trying again will not help.

Source: src/molecules/ErrorState.tsx
