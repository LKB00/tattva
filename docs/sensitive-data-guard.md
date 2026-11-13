# SensitiveDataGuard
Warns before a message with a card number, password or other private detail is sent.
Also known as: pii warning, data leak warning, privacy check.
Status: stable. Page: https://lkb00.github.io/tattva/#component-sensitive-data-guard
SensitiveDataGuard sits just above the message box when a message holds a private detail: a card number, an API key, a password, an email address or a phone number. It names each one with a safe preview such as •••• 4242, and offers to take them out. Send anyway is still there. The findSensitive helper finds the details on the person's device; nothing is sent anywhere to check.
## When to use it

Stops people sharing private details with an AI by accident, without blocking them when they meant to.

## Use it for

- Checking a message just before it is sent.
- Pasted text that may hold card numbers, keys or passwords.

## Not for

- Telling people the chat is private or not saved: use `private-chat-banner`
- A message the AI will not answer: use `refusal-notice`
- A general warning not tied to the message: use `callout`

## Anatomy

- Lock icon and heading
- One-line reason
- List of details with previews
- Take them out
- Send anyway

## Do

- Check when the person presses Send, so they are not interrupted while typing.
- Show a safe preview, never the whole detail.
- Make taking it out the main action, and keep Send anyway.

## Avoid

- Do not send the message to a server to check it.
- Do not block sending. People may mean to share it.
- Do not show the full card number or password in the warning.

## On a phone

- It sits above the message box at full width, so the box and keyboard stay where they are.
- Each detail's row wraps so its button drops under the text on a narrow screen.

## Accessibility: built in

- The warning is a status region, so it is read out when it appears without moving focus.
- It is named by its heading, which says how many details were found.
- Each Take out button names the detail it removes.
- Amber and a lock icon, plus words, so it does not rely on color.

## Accessibility: what you need to do

- Show it before sending, not after. Run findSensitive when the person presses Send.
- Keep focus in the message box; the warning is read out on its own.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| findings (required) | `SensitiveFinding[]` |  | What was found, from findSensitive(text). Nothing shows when it is empty. |
| onRemove (required) | `(id: string) => void` |  | Takes one detail out of the message. |
| onRemoveAll (required) | `() => void` |  | Takes every detail out. |
| onSendAnyway (required) | `() => void` |  | Sends the message as it is. |
| labels | `SensitiveDataGuardLabels` |  | Overrides heading(n), body, kinds, remove, removeAll and sendAnyway. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the root. |

## States

- hidden: With nothing found, it shows nothing.
- one detail: One detail with its safe preview, and a single Take out button.
- several details: A row per detail with its own Take out button, and Take them out for all.

## Tokens

- `--attention-soft`
- `--attention-border`
- `--attention-fg`
- `--fg-muted`
- `--radius-card`

## Examples

### A card number and a phone number

Take one out, take both out, or send anyway. Edit the message and the warning follows.

```tsx
const findings = findSensitive(text);

<SensitiveDataGuard
  findings={findings}
  onRemove={(id) => setText(removeSensitive(text, findings.filter((f) => f.id === id)))}
  onRemoveAll={() => setText(removeSensitive(text, findings))}
  onSendAnyway={send}
/>
```

Source: src/molecules/SensitiveDataGuard.tsx
