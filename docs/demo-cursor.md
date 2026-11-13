# DemoCursor
A cursor for product demos that glides on a gentle curve and presses visibly.
Also known as: fake cursor, animated cursor, mouse pointer.
Status: stable. Page: https://lkb00.github.io/tattva/#component-demo-cursor
DemoCursor shows where the person is acting in a demo. It glides to where the script sends it on a shallow curve (across and down move on different easings), and presses visibly, with a small ring, so every change on screen has a cause the viewer can see. It switches to a pointer over something clickable, and hides between taps on a phone.
## When to use it

Gives every change in a demo a visible cause, so the viewer follows the story.

## Use it for

- Clicking a starter or a button in a web demo.
- Tapping on a phone demo, with the pointer shape.

## Not for

- Anything in the real product: use `button`

## Anatomy

- Cursor
- Press ring

## Do

- Press only things that react on the next beat.
- Keep its moves short and few: one or two per loop.

## Avoid

- Do not wiggle it or circle things. Movement without a cause is noise.
- Do not cover the thing the story is about once it has been pressed: move it away.

## On a phone

- Use the pointer shape for taps, and hide it between taps.

## Accessibility: built in

- Hidden from screen readers; it is decoration in a demo.
- With reduced motion it jumps to its last place without gliding, and the press ring does not pulse.

## Accessibility: what you need to do

- Move it to the thing it will press before it presses, and wait a beat.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| x (required) | `number` |  | Across, as a percentage of the nearest positioned box. |
| y (required) | `number` |  | Down, as a percentage of the nearest positioned box. |
| pressed | `boolean` | `false` | Shows a press: the cursor dips and a ring appears. |
| shape | `"arrow" \| "pointer"` | `"arrow"` | Arrow over the page, pointer over something clickable. |
| hidden | `boolean` | `false` | Fades the cursor out, such as between taps on a phone. |
| className | `string` |  | Extra classes. |

## States

- selected: Dips, with a ring.
- arrow: Over the page.
- pointer: Over something clickable.
- hidden: Faded out, such as between taps.
- reduced motion: Jumps without gliding; the ring does not pulse.

## Tokens

- `--fg`
- `--bg`
- `--dur-demo`

## Examples

### Arrow, pointer and press

Positioned as a percentage of the box it sits in.

```tsx
<div className="relative h-24">
  <DemoCursor x={20} y={30} />
  <DemoCursor x={50} y={30} shape="pointer" />
  <DemoCursor x={80} y={30} shape="pointer" pressed />
</div>
```

Source: src/molecules/DemoCursor.tsx
