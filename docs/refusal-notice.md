# RefusalNotice
A calm notice for a request the assistant will not do, with an optional alternative.
Status: stable. Page: https://lkb00.github.io/tattva/#component-refusal-notice
RefusalNotice is a Callout titled "I can't help with that." It explains why and can offer something else instead. A refusal is not an error, so it is not red or amber.
## When to use it

Explains calmly that the assistant will not do something. It uses the info color, not red or amber, because a refusal is not an error.

## Use it for

- A request the assistant declines, with the reason.
- Offering an allowed alternative next to the refusal.

## Not for

- Something that broke and can be tried again: use `error-state`
- A usage limit: use `rate-limit-notice`

## Anatomy

- Info icon
- Title
- Reason
- Something else to try

## Do

- Say calmly, in one sentence, what you can't do.
- Offer something else whenever you can.
- Keep the calm tone. The colors are chosen on purpose.

## Avoid

- Do not use red or amber. A refusal is not a failure.
- Do not lecture or repeat the request back at length.
- Do not use it when something broke. Use ErrorState.

## On a phone

- The reason and the alternative wrap to the screen width.
- It fills the width of its container.
- It has no buttons of its own. If you pass an alternative with a link, give the link the tap class so it has a 44px tap area.

## Accessibility: built in

- Screen readers announce it politely when it appears.
- The title "I can't help with that" is written in words. The icon is hidden from screen readers.

## Accessibility: what you need to do

- Write a reason that names the boundary, because the title is always the same.
- Give any link or button in the alternative a clear name.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| reason (required) | `string` |  | Short explanation of the boundary. |
| alternative | `ReactNode` |  | Optional paragraph offering what can be done instead. |

## States

- alternative: Pass alternative to add a second line suggesting what to do instead.

## Tokens

- `--info-soft`
- `--info-fg`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Reason and alternative: Offer something useful the assistant can do instead.
- Reason only

Source: src/molecules/RefusalNotice.tsx
