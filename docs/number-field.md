# NumberField
A number box with minus and plus buttons, keyboard stepping, limits and an optional unit.
Status: stable. Page: https://lkb00.github.io/tattva/#component-number-field
NumberField lets people type a number or step it with the buttons or the keyboard. The value is checked when they leave the box or press Enter: it is kept between min and max and rounded to the decimals you set. Your code keeps the value, which is null when the box is empty.
## When to use it

A number the user may know exactly (type it) or want to nudge (step it), such as a quantity or a price, with limits that are enforced for them.

## Use it for

- A quantity, count or size with a minimum and maximum.
- A price or other decimal value with a fixed number of places.
- A value with a unit shown after it.

## Not for

- Digits that are not a quantity, like a phone number or a code: use `text-field`
- A choice between a few named options: use `segmented-control`
- Picking from a list of named values: use `select`

## Anatomy

- Decrease button
- Number
- Unit
- Increase button

## Do

- Set min and max when the number has real limits.
- Set precision for money or other fixed decimals.
- Use unit instead of putting the unit in the label alone.
- Say the limits in a hint, so people know them before they hit one.

## Avoid

- Do not use it for phone numbers, codes or ids. Use TextField.
- Do not use it for a huge range where stepping is useless.
- Do not expect onChange on every key press. Typing is applied on blur and Enter.
- Do not rely on the buttons alone. The buttons are skipped by the Tab key, because the arrow keys do the same job.

## On a phone

- The box is 44px tall and the minus and plus buttons are at least 44px wide on touch screens.
- Typing opens the decimal keypad when the minimum is 0 or more, and otherwise the normal keyboard, and the value is checked on Enter or when the field loses focus, so tell users to tap away to confirm.
- When the minimum is below 0 the field uses the normal keyboard so a minus can be typed; the minus and plus buttons work either way.

## Accessibility: built in

- The input has the spinbutton role with aria-valuenow, aria-valuemin and aria-valuemax, as the WAI-ARIA pattern asks.
- aria-valuetext adds the unit to the spoken value.
- Arrow Up and Down change the value by one step. Shift with an arrow, Page Up and Page Down change it by ten steps. Home and End jump to min and max when they are set.
- The buttons are named Decrease and Increase with the label, and are disabled at the limits.
- The buttons are skipped by the Tab key so the field is one stop. They are still pressable with mouse and touch.
- The input is a text input with a decimal keyboard on phones.
- Numbers use tabular figures so digits line up.
- The step buttons are 44px wide on coarse pointers.

## Accessibility: what you need to do

- Pass label. It is the accessible name, and the step buttons are named from it, for example "Decrease Lots".
- Inside Field, pass the same text as label and spread the wiring props so the hint and error are read.
- Tell people the limits in a hint, since min and max only clamp the value.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `number \| null` |  | Current value. null shows an empty box. The component is controlled. |
| onChange (required) | `(value: number \| null) => void` |  | Called with the new value after a step, or after typing is applied on blur or Enter. Called with null if the box was cleared. |
| label (required) | `string` |  | Accessible name of the input, also used in the button names (Decrease and Increase). |
| min | `number` |  | Lowest allowed value. Also the target of the Home key. |
| max | `number` |  | Highest allowed value. Also the target of the End key. |
| step | `number` | `1` | Amount for the buttons and Arrow keys. Shift with an arrow, Page Up and Page Down move ten steps. |
| precision | `number` |  | Decimals shown and kept. Defaults to the decimals in step. |
| unit | `string` |  | Text shown after the number. It is added to the spoken value. |
| invalid | `boolean` |  | Danger border and aria-invalid. |
| disabled | `boolean` |  | Dims the box and disables the input and buttons. |
| size | `"sm" \| "md"` | `"md"` | md is 40px tall, sm is 32px. Both are 44px on coarse pointers. |
| id | `string` |  | Id on the input, for a label that uses htmlFor. Field passes this. |
| aria-describedby | `string` |  | Ids of hint or error text. Field passes this. |
| aria-invalid | `boolean` |  | Same effect as invalid. Field passes this when it has an error. |
| required | `boolean` |  | Sets required on the input. |
| className | `string` |  | Classes for the outer box. |

## States

- error: Set with the invalid prop.
- disabled: Set with the disabled prop.
- hover: The border gets stronger when the pointer is over the box, and a step button shades when the pointer is over it.
- focus: A focus ring is drawn around the whole box when the number is focused with the keyboard.
- at limit: The Decrease button is disabled at min and the Increase button at max.
- editing: While you type, the text is kept as typed. It is checked, clamped and rounded when you leave the field or press Enter.
- empty: A value of null shows an empty box. Arrow keys and the buttons then start from min, or 0 if there is no min.

## Tokens

- `--border`
- `--border-strong`
- `--danger`
- `--surface`
- `--surface-hover`
- `--fg`
- `--fg-muted`
- `--focus-ring`
- `--dur-fast`
- `--radius-field`

## Examples

### Quantity with limits

The buttons stop at 1 and 50. Type a number and press Enter or leave the box to apply it.

```tsx
function Example() {
  const [n, setN] = useState<number | null>(2);
  return <NumberField label="Lots" value={n} onChange={setN} min={1} max={50} unit="lots" />;
}
```

### Decimal steps

Step by 0.25 and always show two decimals. Shift with an arrow key moves ten steps.

```tsx
function Example() {
  const [n, setN] = useState<number | null>(12.5);
  return <NumberField label="Price" value={n} onChange={setN} min={0} step={0.25} precision={2} unit="USD" />;
}
```

### In a Field with a hint and an error

Field adds the visible label, hint and error. Here the error shows at 0.

```tsx
function Example() {
  const [n, setN] = useState<number | null>(0);
  return (
    <div className="w-72">
      <Field label="Quantity" hint="Between 1 and 20." error={n === 0 ? "Choose at least 1." : undefined}>
        {({ id, ...a }) => <NumberField {...a} id={id} label="Quantity" value={n} onChange={setN} min={0} max={20} />}
      </Field>
    </div>
  );
}
```

### Disabled and invalid

```tsx
<div className="flex flex-col items-start gap-3">
  <NumberField label="Seats" value={5} onChange={() => {}} disabled />
  <NumberField label="Seats" value={0} onChange={() => {}} invalid />
</div>
```

Source: src/atoms/NumberField.tsx
