# ThinkingBlock
A closed note of the assistant's thinking. It shimmers while it works and shows how long it took when done.
Status: stable. Page: https://lkb00.github.io/tattva/#component-thinking-block
ThinkingBlock starts closed. While the assistant is working, it says Thinking with a shimmer. After that it says how many seconds it thought. Opening it shows the thinking in light text with a line on the left.
## When to use it

Keeps the assistant's reasoning out of the way but within reach. It starts closed, shimmers while the assistant works, then says how long it took.

## Use it for

- Reasoning the assistant shows before its answer.
- Letting people check how an answer was reached, if they want to.

## Not for

- One step the assistant took, such as a search: use `tool-call-card`
- The answer itself: use `message`
- A simple waiting signal with nothing to open: use `typing-indicator`

## Anatomy

- Arrow
- Status label
- Thinking text

## Do

- Show it above the answer, so the answer stays the main thing.
- Switch to the finished look with the real time taken.
- Keep it closed so people choose to see the detail.
- Pass seconds once thinking ends. Without it, the heading says 0s.

## Avoid

- Do not open it by default. It has no setting for that.
- Do not present the thinking as a checked source.
- Do not show a made-up time. Leave the block out instead.

## On a phone

- The header is a full-width button with a tap area at least 44px tall on touch screens.
- The opened text sits behind a left rule and wraps to the screen width.
- It is closed by default, so it takes one line on a phone until someone taps it.

## Accessibility: built in

- The heading is a real button. Screen readers say whether it is open or closed.
- "Thinking…" and the time it took are real text that screen readers read. The shimmer is only a visual effect.
- The shimmer stops when people turn off motion in their system settings.
- When closed, the reasoning is skipped by screen readers.

## Accessibility: what you need to do

- Announce when thinking ends if screen reader users need to know. The part does not.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| active | `boolean` |  | When true the header shimmers and reads Thinking. |
| seconds | `number` |  | Elapsed seconds shown when not active. Falls back to 0. |
| children (required) | `ReactNode` |  | Reasoning text shown when expanded. |

## States

- selected: Set with the active prop.

## Tokens

- `--fg-subtle`
- `--fg-muted`
- `--border`

## Examples

### Active

Use while the assistant is still thinking.

```tsx
<ThinkingBlock active>Comparing the two schedules against the team calendar.</ThinkingBlock>
```

### Finished

When done, give the time taken. It shows 0 seconds if you leave it out.

```tsx
<ThinkingBlock seconds={8}>Comparing the two schedules against the team calendar.</ThinkingBlock>
```

Source: src/molecules/ThinkingBlock.tsx
