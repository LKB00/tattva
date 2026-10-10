# TypingIndicator
Three pulsing dots that show the assistant is getting ready to reply.
Status: stable. Page: https://lkb00.github.io/tattva/#component-typing-indicator
TypingIndicator is three small dots that pulse one after another. Show it where the reply will appear, from the moment someone sends a message until the first words show up. Then replace it with the reply. Screen readers announce its label.
## When to use it

Three pulsing dots in the spot where the reply will appear. They fill the gap between sending a message and the first words, so people know the assistant heard them.

## Use it for

- The moment after a message is sent, until the first words arrive.
- Beside the assistant's avatar, where the reply will start.

## Not for

- A step you can name, like searching the web: use `shimmer-text`
- Loading that is not the assistant replying: use `spinner`
- A reply that has started to appear: use `message`

## Do

- Show it only until the first words appear.
- Put it in the same spot where the reply will appear.
- Change the label when the assistant is doing something specific.
- Use ShimmerText beside it when you can name the step, like a search.

## Avoid

- Do not keep it on screen once the reply starts appearing.
- Do not use it for loading that is not the assistant. Use Spinner or Skeleton.
- Do not show several in the same conversation.
- Do not make the dots lime or amber.

## On a phone

- TypingIndicator is three small dots and looks the same on a phone.
- It is not tappable. Put it in the message list where the next reply will start, so it does not push content when the reply arrives.

## Accessibility: built in

- It is marked as a status and named by its label, "Assistant is thinking" by default.
- The dots have no text, so screen readers get only the label.
- The dots stop pulsing for people who turn off motion in their system settings.

## Accessibility: what you need to do

- Change the label when the assistant is doing something specific.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label | `string` | `"Assistant is thinking"` | Accessible name announced for the status. |

## Tokens

- `--fg-subtle`
- `--animate-pulse-dot`

## Examples

### Default

The default label is "Assistant is thinking".

```tsx
<TypingIndicator />
```

### Beside the assistant avatar

Placed where the reply will appear, so nothing jumps when text arrives.

```tsx
<div className="flex items-center gap-3">
  <Avatar kind="ai" />
  <TypingIndicator label="The assistant is writing" />
</div>
```

Source: src/atoms/TypingIndicator.tsx
