# FeedbackBar
Thumbs up and down buttons, with a short list of reasons after a thumbs down.
Status: stable. Page: https://lkb00.github.io/tattva/#component-feedback-bar
FeedbackBar asks how a reply was. A thumbs up is sent right away. A thumbs down shows a row of reasons and a Skip button. Picking a reason sends it with the rating. Skip sends just the rating. After that, the chosen thumb stays pressed and a thank-you appears beside it. Change resetKey when a new message arrives to start over.
## When to use it

A quick way to say whether a reply helped. A thumbs down asks why with one tap, and Skip keeps the reason optional.

## Use it for

- Under a finished assistant reply.
- Collecting a reason when a reply was wrong, unhelpful or unsafe.

## Not for

- Copying or retrying a reply: use `message-actions`
- A detailed written report or survey

## Anatomy

- Thumbs up
- Thumbs down
- Reasons and Skip
- Thank-you message

## Do

- Show it after a reply is finished, next to the message actions.
- Keep the thank-you short and plain.
- Save the answer in onSubmit. The part only hands it to you.
- Change resetKey when a new message arrives, so the bar starts fresh.

## Avoid

- Do not force a reason. Keep Skip so people can send just the rating.
- Do not reuse one bar for several messages without a resetKey. It will not clear itself.
- Do not use it for general surveys. It rates one reply.

## On a phone

- The thumb buttons stay 28px square on touch screens and have a 44px tap area.
- After a thumbs down the reasons wrap onto new rows. Each keeps its size and has a 44px tap area on touch screens.
- Nothing needs hover, and the thank-you line is shown beside the thumbs.

## Accessibility: built in

- The thumbs are named "Good response" and "Bad response", and screen readers say which one is pressed.
- After a rating is sent, the chosen thumb stays pressed and pressing either does nothing.
- The reasons form a group named "What went wrong?". Each reason and Skip is a real button the keyboard can reach.
- The thank-you line is announced politely when it appears.

## Accessibility: what you need to do

- Keep it directly under the reply it rates. Every bar uses the same button names, so position tells screen reader users which reply they are rating.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| onSubmit (required) | `(rating: "up" \| "down", reason?: string) => void` |  | Called once per message. Thumbs up sends only the rating. A reason button sends rating down and the reason text. Skip sends rating down with no reason. |
| resetKey | `unknown` |  | Any value, such as the message id. When it changes, the bar clears its rating and returns to the thumbs. It does not reset on first render. |

## States

- reason picker: After a thumbs down, a row of reasons and a Skip button appears below the icons.
- submitted: After a rating is sent a thank-you message appears and further clicks are ignored until resetKey changes.
- focus: The thumb buttons and reason buttons show a focus ring on keyboard focus.

## Tokens

- `--fg-muted`
- `--accent-soft`
- `--accent-fg`
- `--border`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Interactive: Try thumbs down to see the reasons. The line below shows what was sent.
- Reset for a new message: Send feedback, then choose Next message. The bar starts fresh for each new message.

Source: src/molecules/FeedbackBar.tsx
