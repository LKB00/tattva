# Select
A styled native dropdown with a drawn chevron, a placeholder and an invalid state.
Status: stable. Page: https://lkb00.github.io/tattva/#component-select
Select is the browser's own dropdown with a matching look. Because the menu is native, it works with every screen reader and shows the phone's own picker on touch screens. Give it a list of options or write <option> elements yourself.
## When to use it

Picks one value from a list that is too long for side-by-side buttons, using the platform's own menu so it is reliable everywhere.

## Use it for

- Choosing a model, language or time zone from a list.
- Any single choice from more than about five options.
- A form where the native picker on phones is an advantage.

## Not for

- Two to four options that should all stay visible: use `segmented-control`
- A menu with actions, icons or rich content: use `popover`
- Free text the user types: use `text-field`

## Anatomy

- Box
- Selected text
- Chevron

## Do

- Use it for a list the user chooses from once.
- Put the most likely choice first, or set a value up front.
- Wrap it in Field so it has a visible label.
- Use children with optgroup to group long lists.

## Avoid

- Do not use it for two or three options. Use SegmentedControl.
- Do not put actions in it, such as Delete. Use a menu.
- Do not use placeholder as the label.
- Do not try to style the open menu. It belongs to the browser.

## On a phone

- It is a native select, so a phone shows its own picker and the open list is not styled by this system.
- It fills the width of its container, is 44px tall on touch screens, and its text is 16px so iPhones do not zoom.

## Accessibility: built in

- It is a native select, so the keyboard, type-ahead and screen reader behaviour come from the browser.
- The chevron is hidden from screen readers and does not catch clicks.
- invalid sets aria-invalid.
- The focus ring is the global one and shows for keyboard focus.
- A disabled select is skipped by the Tab key.
- The select is 44px tall on coarse pointers, and the browser's own picker opens on touch.

## Accessibility: what you need to do

- Give it a name: wrap it in Field, or pass aria-label.
- Use a placeholder only as a prompt. Do not rely on it to say what the field is.
- Keep option labels short and unique.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| options | `{ value: string; label: string; disabled?: boolean }[]` |  | The choices. Use this or children. If both are given, options come first. |
| children | `ReactNode` |  | <option> and <optgroup> elements, for cases options cannot express. |
| placeholder | `string` |  | A hidden, disabled first option shown while the value is empty. It shows in a muted colour. |
| invalid | `boolean` |  | Danger border and aria-invalid. |
| size | `"sm" \| "md"` | `"md"` | md is 40px tall, sm is 32px. Both are 44px on coarse pointers. |
| className | `string` |  | Classes for the wrapper around the select. |
| ref | `Ref<HTMLSelectElement>` |  | Reaches the native select. A normal prop in React 19. |
| ...rest | `Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">` |  | Everything else goes to the <select>: value, defaultValue, onChange, disabled, required, id, aria-label, aria-describedby and so on. |

## States

- error: Pass invalid for a danger border and aria-invalid.
- hover: The border gets stronger when the pointer is over the select.
- focus: The global focus ring shows around the select when you reach it with the keyboard.
- disabled: Pass disabled. The select is dimmed and skipped by the Tab key.
- placeholder: While the value is empty and placeholder is set, the placeholder shows in a muted colour.

## Tokens

- `--border`
- `--border-strong`
- `--danger`
- `--surface`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--dur-fast`
- `--radius-field`

## Examples

### Options from data

Pass options. An option can be disabled. Pass an aria-label when there is no visible label.

```tsx
function Example() {
  const [v, setV] = useState("balanced");
  return (
    <div className="w-60">
      <Select aria-label="Model" value={v} onChange={(e) => setV(e.target.value)} options={models} />
    </div>
  );
}
```

### In a Field with a placeholder

While nothing is picked, the placeholder shows. Field adds the label and hint.

```tsx
function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72">
      <Field label="Model" optional hint="You can change this later.">
        {(a) => <Select {...a} value={v} onChange={(e) => setV(e.target.value)} options={models} placeholder="Choose a model" />}
      </Field>
    </div>
  );
}
```

### Children, invalid and disabled

Write <option> elements yourself if you need groups. Invalid and disabled are shown here.

```tsx
<div className="flex w-60 flex-col gap-3">
  <Select aria-label="Region" invalid defaultValue="eu">
    <optgroup label="Europe"><option value="eu">Frankfurt</option></optgroup>
    <optgroup label="Asia"><option value="in">Mumbai</option></optgroup>
  </Select>
  <Select aria-label="Plan" disabled options={models} defaultValue="fast" />
</div>
```

Source: src/atoms/Select.tsx
