# GenUIRenderer
Draws a screen an assistant wrote, using only approved parts, and sends what the person does back.
Status: stable. Page: https://lkb00.github.io/tattva/#component-gen-ui-renderer
An assistant can describe a small screen as data, such as numbers, a chart and a button. GenUIRenderer checks each piece against an approved list and draws it in our own look. A piece that is wrong becomes a quiet text card, and pieces still on their way show as placeholders. When the person presses something, the action goes back to the assistant, and anything hard to undo asks first.
## When to use it

Draws a small screen an assistant described as data, using only parts from an approved list and in our own look. Anything wrong becomes a quiet text card instead of breaking, and the person's choices go back to the assistant.

## Use it for

- An answer that reads better as numbers, a chart or a table than as text.
- Asking the person to pick, set options or approve a plan inside the chat.
- A screen that streams in piece by piece.

## Not for

- A whole page the assistant wrote in its own code: use `sandboxed-frame`
- An answer one sentence can give: use `message`
- Showing who made the screen, with pin, redo and report: use `generated-surface`

## Anatomy

- Parts from the approved list
- Placeholders for pieces still arriving
- Quiet card for parts that could not be shown
- Waiting note
- Inline confirm step

## Do

- Let the host check every part. Never draw a part that is not in the approved list.
- Mark anything hard to undo with confirm and a plain sentence of what will happen.
- Pass pendingActionId so people know the assistant is working on their choice.
- Offer a text answer too, in case the screen cannot be shown.

## Avoid

- Don't let the assistant set colors, sizes or classes. Our look is not up to it.
- Don't skip the confirm step for sending, buying or deleting.
- Don't build a screen when one sentence would do.
- Don't assume the action worked until the assistant says so.

## On a phone

- Everything renders in one column that fills the width, and the text in the fallback box breaks anywhere so it never pushes the page wide.
- A Group set to grid is one column on a phone, two from 640px and three from 1024px.
- The Confirm question and its buttons wrap, and the buttons keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- Every part comes from the approved list and keeps its own labels and keyboard support.
- A part missing its words, such as a chart name or a button label, is not drawn. A quiet text card shows instead.
- While pieces are still arriving, screen readers hear "Still loading" once, not every new piece.
- The confirm step moves focus to Confirm, with Cancel next to it.
- The waiting note under a part is announced to screen readers.

## Accessibility: what you need to do

- Pass pendingActionId while the assistant works on a choice, so people see and hear that it is waiting.
- Mark anything hard to undo with confirm and a plain sentence saying what will happen.
- Offer the answer as text too, in case the screen cannot be shown.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| state (required) | `SpecState` |  | The spec so far. Build it with applyChunk(state, chunk) as pieces stream in, or specFrom(root, nodes) for a finished one. |
| onAction | `(event: GenUIActionEvent) => void` |  | Receives { actionId, nodeId, type: 'press' \| 'submit' \| 'select' \| 'change', value }. Called after any confirm step. Errors thrown here are caught. |
| pendingActionId | `string \| null` |  | Set to the actionId while the assistant handles the action. The part that sent it shows a waiting note and its controls are disabled. |
| labels | `GenUIRendererLabels` |  | Overrides for visible text: fallbackTitle, loading, confirmQuestion, confirm, cancel, sending, missing. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- status: Set with the state prop.

## Tokens

- `--surface-sunken`
- `--border`
- `--attention-soft`
- `--attention-fg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A summary that appears piece by piece: Pieces arrive out of order. The page shows placeholders for what is missing and fills them in. The button asks before it sends anything.
- A broken part shows as a quiet card: An unknown part, a part with styling, a part missing its name and a part that never arrived. Nothing crashes, and the readable text is kept.
- Pick, set and approve: Each choice goes back to the assistant as an event. Booking the trip is marked as hard to undo, so it asks first and then shows that it is waiting.

Source: src/organisms/GenUIRenderer.tsx
