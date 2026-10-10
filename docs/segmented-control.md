# SegmentedControl
A row of joined buttons where you pick one option, using clicks or arrow keys.
Status: stable. Page: https://lkb00.github.io/tattva/#component-segmented-control
SegmentedControl is a set of options drawn as joined buttons. You can pick only one. Arrow keys move and choose, Home and End jump to the first and last, and Tab stops only on the chosen one. The raised background slides to the new choice. Options can have a short hint that shows on hover.
## When to use it

A row of joined buttons for picking one of a few short options. All the options stay in view, so people see their choice next to the others.

## Use it for

- Two to five short options where only one can be chosen, such as a length or a view.
- A setting inside a crowded row: use the small size.
- Switching between two versions of the same content.

## Not for

- Turning one thing on or off: use `switch`
- Running an action: use `button`
- Many options that will not fit on one line

## Anatomy

- Group
- Option buttons

## Do

- Use it for two to five short options where only one can be chosen.
- Give the group a name that says what is being chosen.
- Keep words short so the group stays on one line.
- Use the small size inside crowded rows.

## Avoid

- Do not use it for actions. Use buttons.
- Do not use it for many options. The group does not wrap to a new line.
- Do not choose a value that is not in the list. Nothing would be reachable with Tab.
- Do not use it for on and off. Use Switch.

## On a phone

- The options sit in one row that scrolls sideways when it is wider than the screen, so keep to two or three short labels to avoid hidden options.
- Each option keeps its size and has a 44px tap area on a touch screen.
- An option description is set as a title only, which a finger cannot show.

## Accessibility: built in

- Screen readers hear a named group of options, and which one is chosen.
- Arrow keys move and choose, and wrap around at the ends. Home and End jump to the first and last.
- Tab stops once on the chosen option, so the group takes one Tab to enter and one to leave.
- The chosen option is shown by a raised background and shadow, not by text color alone.
- The raised background slides to the new choice in --dur-base on --ease-arrive. It does not slide when it is first placed, and it moves at once when people turn off motion in their system settings.
- In forced-colors mode the sliding background is hidden and the chosen option gets a border in the system highlight color.

## Accessibility: what you need to do

- Give the group a label that says what is being chosen.
- Keep option words short and clear on their own. The hint shows only on hover.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| options (required) | `SegmentOption<T>[]` |  | Each option has a value, a label and an optional description used as a title. |
| value (required) | `T` |  | Selected value. |
| onChange (required) | `(value: T) => void` |  | Called on click and on arrow, Home and End keys. |
| label (required) | `string` |  | Accessible name for the group. |
| size | `"sm" \| "md"` | `"md"` | Pill size. |
| className | `string` |  | Extra classes for the group. |

## States

- selected: The option matching value gets a raised surface and is the one tab stop. When the choice changes, the raised surface slides to the new option in --dur-base. In forced colours the chosen option gets a border instead.
- hover: An unselected option's text darkens under the pointer.
- keyboard: Arrow keys, Home and End move to another option and select it.
- focus: A visible focus ring appears on the focused option.

## Tokens

- `--surface-sunken`
- `--surface`
- `--border`
- `--fg-muted`
- `--shadow-sm`
- `--dur-fast`
- `--dur-base`
- `--ease-arrive`
- `--radius-control`

## Examples

### Default size

A group of three options.

```tsx
const [v, setV] = useState("week");

<SegmentedControl label="Range" value={v} onChange={setV}
  options={[{ value: "day", label: "Day" }, { value: "week", label: "Week" }, { value: "month", label: "Month" }]} />
```

### Small size

The small size fits inside rows and panels.

```tsx
<SegmentedControl size="sm" label="Strength" value={v} onChange={setV}
  options={[{ value: "week", label: "Subtle" }, { value: "day", label: "Strong" }]} />
```

Source: src/atoms/SegmentedControl.tsx
