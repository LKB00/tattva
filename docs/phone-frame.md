# PhoneFrame
A phone around a faux mobile screen: a rounded body, a status bar and the screen.
Also known as: phone mockup, device frame, iphone frame, mobile mockup.
Status: stable. Page: https://lkb00.github.io/tattva/#component-phone-frame
PhoneFrame shows a mobile screen as a phone: a rounded body whose inner corner follows the outer one, a status bar with the time, and the screen. On a DemoStage with bleed it is cropped at the bottom edge, so it reads as a phone without the whole device in view.
## When to use it

Shows that a product works on a phone, with touch-driven moments such as a tap or a swipe.

## Use it for

- A mobile screen in a demo.
- A feature card about a phone moment, such as approving on the go.

## Not for

- A desktop or web screen: use `browser-frame`

## Anatomy

- Body
- Status bar
- Screen

## Do

- Crop it with bleed so the screen, not the device, is the subject.

## Avoid

- Do not draw a real phone maker's device. It is a plain phone shape.
- Do not shrink a desktop page into it. Show a real mobile layout.

## On a phone

- The phone keeps its width up to 300px and shrinks with a narrower column.

## Accessibility: built in

- The status bar's icons are decoration and hidden from screen readers.

## Accessibility: what you need to do

- Use the pointer shape of DemoCursor for taps, hidden between taps.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | The mobile screen. |
| time | `string` | `"9:41"` | The time in the status bar. |
| className | `string` |  | Extra classes on the body. |

## Tokens

- `--surface`
- `--bg`
- `--line`
- `--line-strong`
- `--radius-card`

## Examples

### Cropped on a stage

The phone runs off the bottom edge.

```tsx
<DemoStage ratio="4:5" tone="wash" bleed label="The app on a phone.">
  <PhoneFrame>{screen}</PhoneFrame>
</DemoStage>
```

Source: src/molecules/PhoneFrame.tsx
