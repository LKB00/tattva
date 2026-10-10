# SplitCanvasTemplate
Chat or controls on the left, and the thing you are making on the right.
Status: stable. Page: https://lkb00.github.io/tattva/#component-split-canvas-template
SplitCanvasTemplate splits the main area into two columns: a left side for chat or controls and a right side for the work. On smaller screens they stack, with the work below. The left side scrolls on its own. Use it when the result should stay in view while the person keeps working.
## When to use it

Splits the main area in two: chat or controls on the left, the thing being made on the right. The work stays in view while the person keeps changing it.

## Use it for

- Editing a document or code with the assistant beside it.
- A studio with the prompt and options on the left and the chosen draft on the right.
- Any screen where the result must stay visible while people work.

## Not for

- A plain chat with no lasting result: use `thread-template`
- A new chat before the first message: use `home-template`

## Anatomy

- Left side
- Canvas (right side)

## Do

- Put a CanvasPanel on the right so it fills the height.
- Use it when the result should stay in view while the person makes changes.
- Keep the controls for making things on the left.
- Check the stacked layout on small screens, where the canvas comes after the left side.

## Avoid

- Do not use it for plain chat. ThreadTemplate is the right frame.
- Do not put lasting content on the left and short-lived content on the canvas. The canvas is for the thing being made.
- Do not set fixed heights on the sides. The template handles overflow itself.

## On a phone

- Below the lg breakpoint the conversation and the canvas stack in one column, conversation first, and the page scrolls as one.
- The stacked canvas is at least 22.5rem tall; from lg up the two sit side by side and scroll separately.
- Side padding is 1rem on a phone and 1.5rem from sm.

## Accessibility: built in

- The two sides are named areas, "Conversation" and "Canvas" by default.
- The left side comes first in reading order, which matches the stacked layout on small screens.
- The title bar holds the page's top heading.

## Accessibility: what you need to do

- Rename the sides with primaryLabel and canvasLabel when they hold something other than a chat and a canvas.
- Pass a header. Without one, the page's top heading is empty.
- Tell people when the canvas changes because of something they did on the left. The template does not.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| primary (required) | `ReactNode` |  | Left column: the conversation or controls. Wrapped in a section named by primaryLabel (default Conversation) that scrolls and spaces its children by 24px. |
| canvas (required) | `ReactNode` |  | Right column: the artifact that outlives a single message, usually CanvasPanel. Wrapped in a section named by canvasLabel (default Canvas). Stacks under primary on narrow screens. |
| primaryLabel | `string` | `"Conversation"` | Accessible name for the left region. Change it when the column holds controls rather than a chat. |
| canvasLabel | `string` | `"Canvas"` | Accessible name for the right region. |

## Tokens

- `gap-4 / p-4`
- `grid-cols 5fr / 6fr at lg`
- `min-h-90 canvas on small screens`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A prompt and a canvas: A document on the right. On a narrow screen the two sides stack.
- Empty placeholders: Each side has a name for screen readers. The defaults are Conversation on the left and Canvas on the right, and both can be renamed.

Source: src/templates/SplitCanvasTemplate.tsx
