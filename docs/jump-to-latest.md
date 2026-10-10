# JumpToLatest
A small floating button that takes you back to the newest message.
Status: stable. Page: https://lkb00.github.io/tattva/#component-jump-to-latest
JumpToLatest floats over the conversation. It says "Jump to latest", or "New messages" with a count if messages arrived while you were scrolled up. Click it to go to the bottom.
## When to use it

A floating button that brings a reader back to the newest message after they scroll up. It only appears when they are away from the bottom, so the conversation never pulls them down against their will.

## Use it for

- A long conversation where the reader has scrolled up to reread something.
- Telling a reader that new messages arrived while they were scrolled up, with a count.

## Not for

- Reading out new messages as they arrive: use `message-list`
- A general action inside the page: use `button`

## Anatomy

- Button
- Arrow
- Label
- Count

## Do

- Place it over the conversation, not inside the scrolling part.
- Show it only when the reader is away from the bottom.
- Scroll smoothly on click, or at once for people who ask for less motion.
- When you send a message, show it near the top and let this button handle the rest.

## Avoid

- Do not pull a reader down who scrolled up on purpose.
- Do not show it at the bottom.
- Do not rely on the count alone. Keep the label.
- Do not use amber. Nothing here needs a decision.

## On a phone

- The button is centered at the bottom of its thread. It keeps its size and has a 44px tap area on a touch screen.
- It sits 12px above the thread's bottom edge and ignores safe areas, so place the thread above the composer and the home bar.
- A tap scrolls to the newest message, and your code decides when the button shows.

## Accessibility: built in

- It is a real button with visible text, so screen readers say what people see.
- The count is read after the label, with a short pause between them.
- When people turn off motion in their system settings, it appears without the rise.
- When hidden, it is removed from the page, so the keyboard never lands on it.

## Accessibility: what you need to do

- Use scrollToBottom from useStickToBottom as the click handler. It jumps straight down, with no smooth scroll, when people turn off motion.
- Make the scrolling area reachable by keyboard, so people can scroll the conversation without a mouse.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| visible (required) | `boolean` |  | Shows the pill. Usually !atBottom from useStickToBottom. |
| count | `number` | `0` | Unseen messages. Above zero the label switches to newLabel and shows the count. |
| onClick (required) | `() => void` |  | Scrolls the thread, usually scrollToBottom. |
| label / newLabel | `string` | `"Jump to latest" / "New messages"` | Visible text for each state. |

## States

- hidden: When visible is false the button is not rendered.
- new messages: When count is above zero the label changes to New messages and a lime count badge is shown.
- hover: The button gets a soft background under the pointer.
- focus: A visible focus ring appears on keyboard focus.

## Tokens

- `--animate-rise`
- `--lime`
- `--on-lime`
- `--shadow-md`
- `--surface-raised`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- In a long conversation: Scroll up, then add a message. The button appears with a count.
- Both labels: The two labels side by side.

Source: src/molecules/JumpToLatest.tsx
