# Checkbox
A tick box with a visible label and hint. It can show a partly selected state.
Status: stable. Page: https://lkb00.github.io/tattva/#component-checkbox
Checkbox is a native checkbox drawn as a 20px box. The label and hint sit beside it, and pressing them toggles the box. Your code keeps track of whether it is checked. Use it for choices that are saved later, or for picking several items from a list.
## When to use it

Lets a person tick or untick one option. It is for choices that take effect when a form is sent, and for picking several items at once.

## Use it for

- A choice in a form, such as agreeing to terms.
- Picking several items from a list.
- A select-all box above a list, using the partly selected state.

## Not for

- A setting that applies the moment it is flipped: use `switch`
- Exactly one choice from a few options: use `radio-group`
- One choice from a long list: use `select`

## Anatomy

- Box
- Check or dash
- Label
- Hint

## Do

- Write the label so it is true when the box is ticked, such as "Share this chat".
- Use the partly selected state only for a box that controls a list of other boxes.
- Keep the checked value in your own code and pass it back as checked.
- Say why a box is disabled in text nearby.

## Avoid

- Do not use a Checkbox for a setting that applies at once. Use a Switch.
- Do not use one for a choice between exclusive options. Use a RadioGroup.
- Do not leave out both the label and ariaLabel.
- Do not show an error with the red border alone.

## On a phone

- The whole row is the tap target and is at least 44px tall on touch screens, while the box stays 20px.
- The label and description wrap inside the row instead of running off the screen.
- Nothing depends on hover.

## Accessibility: built in

- It is a real checkbox, so the Tab key reaches it and Space flips it.
- The label is the name. The hint is read after it.
- The partly selected state is announced as mixed.
- On touch screens the row is at least 44px tall.
- In high-contrast mode the box and the checked state use system colors, so they stay visible.
- The focus ring comes from the global focus rule.

## Accessibility: what you need to do

- Give it a visible label. If you cannot, pass ariaLabel so it still has a name.
- When it is invalid, show the error as text next to it. The red border is not enough on its own.
- In a group, wrap the boxes in a fieldset with a legend so the group has a name.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| checked (required) | `boolean` |  | Current state. The component is fully controlled. |
| onChange (required) | `(checked: boolean) => void` |  | Called with the new checked value when the box is pressed. |
| label | `ReactNode` |  | Visible label. Pressing it toggles the box, and it is the accessible name. |
| description | `string` |  | Visible hint under the label. Linked with aria-describedby. |
| indeterminate | `boolean` |  | Shows a dash instead of a check and sets aria-checked to mixed. Pressing the box still calls onChange. |
| invalid | `boolean` |  | Red border and aria-invalid. Show the error text yourself. |
| disabled | `boolean` |  | Dims the row, skips it in the tab order and blocks changes. |
| ariaLabel | `string` |  | Accessible name for when there is no visible label. |
| id | `string` |  | Id on the input. |
| className | `string` |  | Classes for the outer label row. |
| ...rest | `InputHTMLAttributes<HTMLInputElement>` |  | Other native input props, such as name or required, passed to the input. |

## States

- selected: Set with the checked prop.
- error: Set with the invalid prop.
- disabled: Set with the disabled prop.
- hover: The pointer shows a hand over the whole row, and the label is part of the click target.
- focus: A visible focus ring appears around the box when you reach it with the keyboard.
- indeterminate: Pass indeterminate to show a dash for a partly selected group. Pressing it calls onChange.

## Tokens

- `--accent`
- `--fg-on-accent`
- `--border-strong`
- `--danger`
- `--surface`
- `--dur-fast`
- `--focus-ring`

## Examples

### Controlled checkbox

Your code keeps the checked value and updates it when the box changes.

```tsx
function Example() {
  const [on, setOn] = useState(true);
  return <Checkbox checked={on} onChange={setOn} label="Remember my choice" />;
}
```

### With a hint

The hint shows under the label and is read after the name by screen readers.

```tsx
function Example() {
  const [on, setOn] = useState(false);
  return <Checkbox checked={on} onChange={setOn} label="Share this chat" description="Anyone with the link can read it." />;
}
```

### Select all

The top box shows a dash when only some items are picked. Pressing it picks all, or clears all.

```tsx
function Example() {
  const [items, setItems] = useState({ a: true, b: false, c: false });
  const values = Object.values(items);
  const all = values.every(Boolean);
  const some = values.some(Boolean) && !all;
  const toggleAll = (v: boolean) => setItems({ a: v, b: v, c: v });
  return (
    <div className="flex flex-col gap-2">
      <Checkbox checked={all} indeterminate={some} onChange={toggleAll} label="All sources" />
      <div className="ml-8 flex flex-col gap-2">
        <Checkbox checked={items.a} onChange={(v) => setItems({ ...items, a: v })} label="Web" />
        <Checkbox checked={items.b} onChange={(v) => setItems({ ...items, b: v })} label="Files" />
        <Checkbox checked={items.c} onChange={(v) => setItems({ ...items, c: v })} label="Email" />
      </div>
    </div>
  );
}
```

Source: src/atoms/Checkbox.tsx
