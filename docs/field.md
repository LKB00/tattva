# Field
Wraps any form control with a visible label, hint text and an error message, and wires them together.
Status: stable. Page: https://lkb00.github.io/tattva/#component-field
Field puts a label, a control, optional hint text and an optional error message in one stack. It links them for you with ids, so screen readers read the label, the hint and the error when the control is focused. You write the control inside, as a function that receives the props to spread on it. It works with TextField, NumberField, Select or any native control.
## When to use it

Gives a control a visible name and the help and error text it needs, linked the way assistive technology expects, so each form field is built the same way.

## Use it for

- A text, number or select control in a form or settings panel.
- A field that needs help text before the user types.
- A field that shows a message when the value is not accepted.

## Not for

- An on-off setting with its label beside it: use `switch`
- A choice between a few options shown side by side: use `segmented-control`
- The message box in a chat: use `composer`

## Anatomy

- Label
- Required mark or (optional)
- Control
- Hint
- Error with icon

## Do

- Spread everything the function gives you onto the control.
- Keep the label short and always visible.
- Use hint for rules the user needs before typing, such as a length or format.
- Show the error after the user has left the field or tried to submit.

## Avoid

- Do not use a placeholder in place of a label. It disappears when typing starts.
- Do not show an error with colour only. Field always adds an icon and text.
- Do not wrap a Switch in a Field. Put its label beside it.
- Do not write your own id and htmlFor pair. Field makes them for you.

## On a phone

- Label, control, hint and error stack in one column at the full width of the container.
- The control inside it follows its own phone rules: 44px tall and 16px text on touch screens.
- The error area is always on the page and is announced without moving focus, so the user is not pulled out of the field.

## Accessibility: built in

- The label is a real <label> joined to the control, so pressing the label focuses the control.
- The hint and the error are joined to the control with aria-describedby, so they are read when it is focused.
- The error area is always on the page with aria-live set to polite, so a new error is announced without stealing focus.
- The error has a warning icon and words, so colour is not the only clue.
- The asterisk is hidden from screen readers. The control gets the required attribute instead.

## Accessibility: what you need to do

- Spread the props the function gives you onto the control. If you skip this, the label is not linked.
- Write error messages that say what is wrong and how to fix it.
- Set error only when the value is wrong, not before the user has had a chance to type.
- For NumberField pass the same text as label, because it needs its own accessible name.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Visible label. It is a real <label> joined to the control with htmlFor. |
| hint | `string` |  | Help text under the control, linked with aria-describedby. |
| error | `string` |  | Error message. Shows with a warning icon, sets aria-invalid on the control and is linked with aria-describedby. The message area is always in the page so screen readers announce changes politely. |
| required | `boolean` |  | Adds an asterisk to the label and passes required to the control. |
| optional | `boolean` |  | Adds the words (optional) after the label. Ignored when required is set. |
| children (required) | `(control: { id: string; "aria-describedby"?: string; "aria-invalid"?: boolean; required?: boolean }) => ReactNode` |  | Render function. Spread the object it receives onto the control. |
| className | `string` |  | Classes for the outer stack. |

## States

- error: Pass error to show the message with a warning icon under the control, link it with aria-describedby and set aria-invalid on the control.
- hint: Pass hint to show help text under the control. It is linked with aria-describedby.
- required: Pass required to add an asterisk to the label and required to the control. optional adds the words (optional) instead.

## Tokens

- `--fg`
- `--fg-muted`
- `--danger-fg`

## Examples

### With a hint and an error

Type one or two letters to see the error appear. The message has an icon and words, not only colour.

```tsx
function Example() {
  const [name, setName] = useState("");
  const bad = name.length > 0 && name.trim().length < 3;
  return (
    <div className="w-72">
      <Field label="Project name" hint="Shown in the sidebar." error={bad ? "Use at least 3 characters." : undefined} required>
        {(a) => <TextField {...a} value={name} onChange={(e) => setName(e.target.value)} placeholder="Q3 planning" />}
      </Field>
    </div>
  );
}
```

### Optional select

Use optional to say the field can be left empty. It adds the words (optional) after the label.

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

### Around a number field

NumberField takes the same props, plus its own label. The error shows when the quantity is 0.

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

Source: src/molecules/Field.tsx
