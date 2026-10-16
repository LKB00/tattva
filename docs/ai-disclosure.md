# AIDisclosure
A small centered note reminding people to check the assistant's answers.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ai-disclosure
AIDisclosure is one line of small, light text. It sits below the message box or the conversation. It says "AI can make mistakes. Check important information." You can replace the words. It has no icon or border.
## When to use it

One small, quiet line that reminds people the assistant can be wrong. It sits once under the message box, so it is always there without competing with the conversation.

## Use it for

- Under the message box in a chat.
- At the end of a generated answer or report.
- A caution for a sensitive topic, such as medication: change the words.

## Not for

- Marking one item as made by AI: use `ai-badge`
- A warning the person must read or act on: use `callout`
- Legal terms people must agree to

## Do

- Show it once, under the message box or at the end of the conversation.
- Keep custom text to one short sentence.
- State plainly what the person should check.
- Keep it light so it stays quiet.

## Avoid

- Do not repeat it under every message. Use AIBadge to mark single items.
- Do not make it an amber warning. Amber is only for when a person has to act.
- Do not use it for legal terms that need a link or a click to agree.
- Do not write long paragraphs. It is small and centered.

## On a phone

- The line is centred 12px text that wraps on a narrow screen.
- It is not tappable. Keep it visible near the input, not behind a tap.

## Accessibility: built in

- Screen readers read it as a normal paragraph, in page order.
- It is not announced when its words change.

## Accessibility: what you need to do

- Keep critical instructions out of it. It is the lightest text in the system and easy to miss.
- If you add a link, give it words that say where it goes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children | `ReactNode` |  | Replaces the default message when provided. |

## Tokens

- `--fg-subtle`

## Examples

### Default

The built-in message.

```tsx
<AIDisclosure />
```

### Custom message

Change the words for a specific part of your product.

```tsx
<AIDisclosure>Answers about medication are not medical advice.</AIDisclosure>
```

Source: src/atoms/AIDisclosure.tsx
