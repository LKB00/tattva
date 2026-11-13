# CameraFocus
A camera over a demo that pushes in on the detail that matters, centred, and pulls back out.
Also known as: zoom, push in, camera, ken burns.
Status: stable. Page: https://lkb00.github.io/tattva/#component-camera-focus
CameraFocus wraps a demo's screen and, on the beat the story is about, pushes in on one detail: a price, an approval, a source. Aim it at a named element with a CSS selector and it brings that element to the middle of the frame, stopping at the edges so no empty space shows. Null pulls back out. It sits inside the window, so the window's bar stays still while the screen moves.
## When to use it

Draws the eye to the one detail that makes the point, without cutting to a different picture.

## Use it for

- Pushing in on a price, an approval or a source in a demo.

## Not for

- Zooming in the real product: use `media-frame`

## Anatomy

- Camera
- Screen

## Do

- Aim at a named element, so the camera stays on target when the layout changes.
- Pull back out before the loop ends.

## Avoid

- Do not push in more than twice in a loop.
- Do not use it to make small text readable. Make the text bigger instead.

## On a phone

- Use a smaller scale on narrow stages (1.3 to 1.5), so the detail does not fill the frame.

## Accessibility: built in

- With reduced motion the camera does not move.
- The screen inside stays hidden from screen readers when it sits in a DemoStage.

## Accessibility: what you need to do

- Push in once or twice per loop at most, and hold long enough to read.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | The demo's screen. |
| focus | `{ target: string; scale?: number } \| { x: number; y: number; scale?: number } \| null` |  | What to push in on: a CSS selector inside the screen, or a point as percentages. Null pulls back out. Scale defaults to 1.6. |
| className | `string` |  | Extra classes. |

## States

- wide: The whole screen, at its normal size.
- pushed in: The target centred and enlarged, stopping at the screen's edges.
- reduced motion: Stays at its normal size and never moves, so nothing zooms for people who turn motion off.

## Tokens

- `--dur-demo`

## Examples

### Push in on a named element

Mark the element with a data attribute and aim at it.

```tsx
<CameraFocus focus={zoomed ? { target: "[data-demo=price]", scale: 1.8 } : null}>
  <ResultCard ... />  {/* the price element carries data-demo="price" */}
</CameraFocus>
```

Source: src/molecules/CameraFocus.tsx
