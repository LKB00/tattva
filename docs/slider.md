# Slider
A single-thumb slider for picking a number in a range, with an optional value readout.
Status: stable. Page: https://lkb00.github.io/tattva/#component-slider
Slider is a native range input with a restyled track and a 20px thumb. The part of the track before the thumb is filled. It can show the value beside it, and a format function turns the number into text such as 40%. Use it when the exact number matters less than the feel of the range.
## When to use it

Lets a person pick a number from a range by dragging or using the arrow keys. It suits settings where a rough value is fine.

## Use it for

- A setting with a clear minimum and maximum, such as creativity or volume.
- A value that people adjust and compare by feel.
- A number with steps, such as a length in rounds of 256.

## Not for

- A number where the exact value must be typed: use `number-field`
- A few named levels: use `segmented-control`
- Free text: use `text-field`

## Anatomy

- Track
- Filled track
- Thumb
- Value text

## Do

- Show the value, so people know what they have picked.
- Pick a step that matches how precise the setting needs to be.
- Use formatValue when the number has a unit.
- Give the slider a width. It fills the space it is given.

## Avoid

- Do not use a Slider when people need to enter an exact number. Use a NumberField.
- Do not use it for a few named choices. Use a SegmentedControl.
- Do not use it for a range with two ends. It has one thumb.
- Do not rely on the filled track alone to show the value.

## On a phone

- The slider is 44px tall on touch screens, so the thumb is easy to grab even though it is drawn 20px wide.
- It stretches to fill the width of its container, with the value shown beside it when showValue is on.
- It is the browser's own range input, so a finger drags it directly; for exact numbers, pair it with a NumberField.

## Accessibility: built in

- It is a native range input, so the Tab key reaches it. Arrow keys change the value by one step, and Home and End jump to the ends.
- Screen readers say the label and the value. With formatValue they say the formatted text.
- The visible value is linked to the input as its output.
- On touch screens the control is 44px tall.
- In high-contrast mode the track and thumb use system colors.
- The focus ring comes from the global focus rule.

## Accessibility: what you need to do

- Give it a label that names the setting. It is required.
- Turn on showValue or show the value nearby. Dragging alone does not tell people the number.
- If the unit matters, pass formatValue so the unit is in the visible text and in what screen readers say.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `number` |  | Current value. The component is fully controlled. |
| onChange (required) | `(value: number) => void` |  | Called with the new number while the thumb moves. |
| label (required) | `string` |  | Accessible name, applied as aria-label. |
| min | `number` | `0` | Lowest value. |
| max | `number` | `100` | Highest value. |
| step | `number` | `1` | Size of each step. |
| showValue | `boolean` |  | Shows the current value as text to the right. |
| formatValue | `(value: number) => string` |  | Turns the number into text. Used for the visible value and for aria-valuetext. |
| disabled | `boolean` |  | Dims the slider, skips it in the tab order and blocks changes. |
| id | `string` |  | Id on the input. A generated one is used if you leave it out. |
| className | `string` |  | Classes for the row that holds the slider and the value text. |

## States

- disabled: Set with the disabled prop.
- hover: The pointer shows a hand over the slider.
- focus: A visible focus ring appears when you reach the slider with the keyboard.
- dragging: While the thumb moves, onChange is called with each new value and the filled track follows it.

## Tokens

- `--accent`
- `--border-strong`
- `--surface`
- `--fg-muted`
- `--focus-ring`

## Examples

### Basic slider

The value runs from 0 to 100 by default.

```tsx
function Example() {
  const [v, setV] = useState(40);
  return <div className="w-72"><Slider value={v} onChange={setV} label="Volume" /></div>;
}
```

### Percent with a readout

formatValue adds the unit to the visible text and to what screen readers say.

```tsx
function Example() {
  const [v, setV] = useState(60);
  return (
    <div className="w-72">
      <Slider value={v} onChange={setV} label="Creativity" showValue step={5} formatValue={(n) => `${n}%`} />
    </div>
  );
}
```

### Custom range and step

Set min, max and step. The thumb snaps to each step.

```tsx
function Example() {
  const [v, setV] = useState(2048);
  return (
    <div className="w-72">
      <Slider value={v} onChange={setV} label="Reply length" min={256} max={4096} step={256} showValue formatValue={(n) => `${n} tokens`} />
    </div>
  );
}
```

Source: src/atoms/Slider.tsx
