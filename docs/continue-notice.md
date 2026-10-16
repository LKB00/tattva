# ContinueNotice
Says why a reply ended early and offers to carry on.
Status: stable. Page: https://lkb00.github.io/tattva/#component-continue-notice
ContinueNotice is one quiet line under a reply that ended early. It says why in plain words (it hit the length limit, you stopped it, or the connection dropped) and offers Continue, or Try again after a lost connection. Without it, a reply cut off by the length limit just stops mid-sentence.
## When to use it

Makes an unfinished reply look unfinished, and gives a one-press way to finish it.

## Use it for

- A reply that hit the length limit.
- A reply the person stopped.
- A reply cut off by a lost connection.

## Not for

- Running out of messages for the day: use `rate-limit-notice`
- A request the AI will not answer: use `refusal-notice`
- Any other error: use `error-state`

## Anatomy

- Icon
- Reason
- Continue or Try again

## Do

- Say why it stopped, in plain words.
- Continue from where it stopped, not from the start.

## Avoid

- Do not show it on a reply that finished.
- Do not use red. Stopping early is not an error.
- Do not blame the person.

## On a phone

- The button drops under the line on a narrow screen.

## Accessibility: built in

- The reason is text next to an icon, not the icon alone.
- While busy, the button says it is working and ignores presses but keeps focus.

## Accessibility: what you need to do

- Put it straight after the reply it belongs to.
- Turn on busy while the continuation starts, so a second press does nothing.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| reason (required) | `"length" \| "stopped" \| "lost"` |  | Why the reply ended early. |
| onContinue (required) | `() => void` |  | Carries on from where it ended, or tries again after a lost connection. |
| busy | `boolean` |  | True while the continuation starts. The button keeps its place and ignores presses. |
| labels | `ContinueNoticeLabels` |  | Overrides length, stopped, lost, continue and retry. |
| className | `string` |  | Extra classes on the root. |

## States

- loading: The button shows a spinner, keeps its place and ignores presses.
- length limit: Says the reply stopped at the length limit, with Continue.
- stopped: Says the person stopped the reply, with Continue.
- connection lost: A warning mark, and Try again in place of Continue.

## Tokens

- `--fg-muted`
- `--radius-control`

## Examples

### Hit the length limit

Press Continue to carry on from where it stopped.

```tsx
<ContinueNotice reason="length" onContinue={continueReply} />
```

### Stopped, and lost

The person pressed Stop; the connection dropped.

```tsx
<ContinueNotice reason="stopped" onContinue={continueReply} />
<ContinueNotice reason="lost" onContinue={retry} />
```

Source: src/molecules/ContinueNotice.tsx
