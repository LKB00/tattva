# RadioGroup
A set of radio buttons for picking exactly one option, with a visible group name.
Status: stable. Page: https://lkb00.github.io/tattva/#component-radio-group
RadioGroup shows a few options and lets a person pick one. It is a fieldset with a legend, and every option is a native radio that shares one name. The browser gives it the arrow-key behaviour. Your code keeps track of the picked value.
## When to use it

Lets a person pick exactly one of a few options, with every option visible at once. Each option can carry a short hint.

## Use it for

- A few options that need explaining, such as a response style.
- A form choice where the person should see all the options before picking.
- A choice that is saved later, not applied at once.

## Not for

- A compact switch between views that applies at once: use `segmented-control`
- Many options: use `select`
- Picking several options: use `checkbox`
- A single on or off setting: use `switch`

## Anatomy

- Legend
- Radio circle
- Label
- Hint

## Do

- Start with the most common option picked.
- Keep labels short and put detail in the hint.
- Keep the value in your own code and pass it back as value.
- Use the same shape of label for every option.

## Avoid

- Do not use a RadioGroup for a long list of options. Use a Select.
- Do not use it for a setting that applies the moment it is picked. Use a SegmentedControl or a Switch.
- Do not hide the legend if people may not know what the question is.
- Do not disable the picked option without saying why.

## On a phone

- Each option row is at least 44px tall on touch screens, and the whole row is tappable.
- The vertical layout is a single column; the horizontal layout wraps onto new lines when the options do not fit.
- Option labels and descriptions wrap rather than truncate.

## Accessibility: built in

- It is a fieldset with a legend, so screen readers announce the group name.
- The options are native radios with one shared name. Tab moves into the group, and the arrow keys move between options and pick them. This comes from the browser.
- Only the picked option is in the tab order. When nothing is picked, Tab reaches the first option.
- Each label is the name of its radio, and the hint is read after it.
- On touch screens each row is at least 44px tall.
- In high-contrast mode the circle and the dot use system colors.

## Accessibility: what you need to do

- Give the group a label that names the question, such as "Response style". It is required.
- When the group is invalid, show the error as text. The red border is not enough on its own.
- Pick a starting value when you can. A group with nothing picked is easy to skip.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| options (required) | `{ value: string; label: ReactNode; description?: string; disabled?: boolean }[]` |  | The choices. Each value must be unique in the group. |
| value (required) | `string` |  | The picked value. The component is fully controlled. Use a value that matches no option for nothing picked. |
| onChange (required) | `(value: string) => void` |  | Called with the value of the option the person picked. |
| label (required) | `string` |  | Name of the group, drawn as the legend. |
| hideLabel | `boolean` |  | Hides the legend visually. Screen readers still read it. |
| orientation | `"vertical" \| "horizontal"` | `"vertical"` | Stack the options or lay them in a row that wraps. |
| invalid | `boolean` |  | Red border on every circle and aria-invalid on each radio. Show the error text yourself. |
| disabled | `boolean` |  | Disables the whole group through the fieldset. |
| name | `string` |  | Shared name of the radios. Set it if the group is inside a native form. Otherwise one is made for you. |
| className | `string` |  | Classes for the fieldset. |

## States

- error: Set with the invalid prop.
- disabled: Set with the disabled prop.
- hover: The pointer shows a hand over an enabled row, and the label is part of the click target.
- focus: A visible focus ring appears around the circle in focus when you reach the group with the keyboard.
- nothing picked: When value matches no option, no circle is filled and Tab reaches the first enabled option.

## Tokens

- `--accent`
- `--border-strong`
- `--danger`
- `--surface`
- `--dur-fast`
- `--focus-ring`

## Examples

### With descriptions

Each option has a short hint under its label.

```tsx
function Example() {
  const [v, setV] = useState("balanced");
  return (
    <RadioGroup label="Response style" value={v} onChange={setV} options={[
      { value: "fast", label: "Fast", description: "Short answers, less checking." },
      { value: "balanced", label: "Balanced", description: "A mix of speed and care." },
      { value: "careful", label: "Careful", description: "Slower, checks its work." },
    ]} />
  );
}
```

### Horizontal

Short labels can sit in a row. The row wraps on narrow screens.

```tsx
function Example() {
  const [v, setV] = useState("week");
  return (
    <RadioGroup label="Keep history for" orientation="horizontal" value={v} onChange={setV} options={[
      { value: "day", label: "A day" },
      { value: "week", label: "A week" },
      { value: "month", label: "A month" },
    ]} />
  );
}
```

### Hidden legend and a disabled option

When nearby text already names the group, hide the legend. Screen readers still hear it.

```tsx
function Example() {
  const [v, setV] = useState("light");
  return (
    <RadioGroup label="Theme" hideLabel orientation="horizontal" value={v} onChange={setV} options={[
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "auto", label: "Match system", disabled: true },
    ]} />
  );
}
```

Source: src/molecules/RadioGroup.tsx
