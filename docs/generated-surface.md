# GeneratedSurface
The frame around a screen an assistant made: who made it, its spec, pin, redo and report.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-generated-surface
A screen made by an assistant needs to say so. GeneratedSurface shows who made it, lets people read the spec behind it, and offers Pin, Regenerate and Report. While the screen is being made it says so. If making it fails, it shows a text version of the answer and a Try again button.
## When to use it

The frame around a screen an assistant made. It always says who made it and lets people read the spec, pin, regenerate or report it, so a generated screen never passes as part of the app.

## Use it for

- Around every screen GenUIRenderer draws in a chat.
- A screen that is still being made: set status to streaming.
- A screen that failed: show the answer as text with Try again.

## Not for

- A page that runs its own code: use `sandboxed-frame`
- A long document or code the person keeps working on: use `canvas-panel`

## Anatomy

- Source label (Made by ...)
- Status note
- Pin, Regenerate and Report buttons
- The screen
- Text fallback with Try again
- View spec

## Do

- Always show who made the screen, even when it looks like ours.
- Keep View spec available so people can check what was sent.
- Give a text version for the failed state.
- Treat Pin and Regenerate as experiments and watch how people use them.

## Avoid

- Don't hide the source label to make the screen feel built in.
- Don't keep Regenerate on while a screen is still being made.
- Don't make Report hard to find.
- Don't pin a screen without telling people where it went.

## On a phone

- The surface fills the width, and the header wraps so the Pin and Regenerate buttons move to their own line when needed.
- Buttons keep their size and have a 44px tap area on a touch screen.
- The spec view scrolls on its own both ways, so a long line does not widen the page.

## Accessibility: built in

- The frame is named "Made by" plus the source, so screen reader users can find it.
- Pin is a toggle button that says whether it is on, and its words change to Pinned.
- While the screen is being made, only the "Still being made…" note is announced.
- A failure is announced right away, and Try again is a normal button.
- View spec opens and closes with the keyboard, and the spec can be scrolled with the keyboard.

## Accessibility: what you need to do

- Pass a plain text fallback, so people still get the answer if the screen fails.
- Set source to a name people recognise. Screen readers use it to name the frame.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| source (required) | `string` |  | Who made the screen. Shown as 'Made by <source>' in an AI label. |
| children | `ReactNode` |  | The generated screen, usually a GenUIRenderer. |
| status | `"streaming" \| "ready" \| "failed"` | `"ready"` | streaming shows a status note and turns Regenerate off. failed shows the fallback and Try again. |
| spec | `unknown` |  | The spec behind the screen. Shown as formatted JSON under View spec. Omit to hide the control. |
| pinned | `boolean` |  | Whether the screen is pinned (controlled). When omitted the frame keeps its own state. |
| onPinnedChange | `(pinned: boolean) => void` |  | Called when Pin is toggled. |
| onRegenerate | `() => void` |  | Shows Regenerate and calls this when pressed. |
| onReport | `() => void` |  | Shows Report and calls this when pressed. |
| onRetry | `() => void` |  | Shows Try again when status is failed. |
| fallback | `ReactNode` |  | Plain text version of the answer, shown when status is failed. |
| labels | `GeneratedSurfaceLabels` |  | Overrides for visible text: madeBy, viewSpec, hideSpec, pin, pinned, regenerate, report, retry, streaming, failed, overview. |
| className | `string` |  | Extra classes on the frame. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--border`
- `--surface-sunken`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A finished screen: Try Pin and Regenerate. Open View spec to see exactly what the assistant sent.
- When it could not be made: The person still gets the answer as text and can try again.
- While it is being made: The status is announced once. Regenerate is off until the screen is ready.

Source: src/organisms/GeneratedSurface.tsx
