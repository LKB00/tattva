# TextField
A single-line text box with room for an icon or unit, two sizes and an invalid state.
Status: stable. Page: https://lkb00.github.io/tattva/#component-text-field
TextField is a native text input in a bordered box. It can show an icon or a unit before or after the text. The border gets stronger on hover, a focus ring shows for keyboard users, and an invalid field gets a danger border. Pair it with Field to give it a label.
## When to use it

A single line of text, email, link, phone number, search or password, with the same look and states as the other form controls.

## Use it for

- A name, email, link or phone number in a form.
- A search box with a search icon.
- A value with a unit, such as a price with a currency sign.

## Not for

- A number the user steps up and down: use `number-field`
- Picking one value from a fixed list: use `select`
- Writing a message to the AI: use `prompt-box`
- A long, multi-line message with attachments and send: use `composer`

## Anatomy

- Box
- Leading slot
- Input
- Trailing slot

## Do

- Wrap it in Field so it has a visible label.
- Use the matching type so phones show the right keyboard.
- Use leading for an icon and trailing for a unit.
- Keep placeholder text as an example, not an instruction.

## Avoid

- Do not use a placeholder as the only label.
- Do not show an invalid border without a message in text.
- Do not use it for a number the user steps. Use NumberField.
- Do not put a button in leading or trailing without giving the button its own label.

## On a phone

- It fills the width of its container and is 44px tall on touch screens, even at size sm.
- Text is 16px on touch screens, so iPhones do not zoom in when the field gets focus.
- The type prop picks the on-screen keyboard (email, tel, url, search), and extra attributes such as inputMode pass through to the input.

## Accessibility: built in

- It is a native input, so typing, selecting, autofill and spell check work as the browser provides.
- The focus ring wraps the whole box, including the icon and unit, and shows for keyboard focus.
- invalid sets aria-invalid on the input.
- A disabled input is skipped by the Tab key. A read-only input can be focused and its text copied.
- The box is 44px tall on coarse pointers.
- The leading slot is hidden from screen readers.

## Accessibility: what you need to do

- Give it a name: wrap it in Field, or pass aria-label (for example on a search box with no visible label).
- When invalid is set, also show a message in text. Field does this when you pass error.
- Pick the right type, such as email or tel, so phones show the right keyboard.
- Password has no show or hide button. Add one yourself if you need it, and keep it a real button with a label.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| type | `"text" \| "email" \| "password" \| "search" \| "url" \| "tel"` | `"text"` | Native input type. Password shows dots and has no built-in show or hide button. |
| invalid | `boolean` |  | Danger border and aria-invalid. Always explain the problem in text too. A passed aria-invalid has the same effect, which is how Field sets it. |
| leading | `ReactNode` |  | Content before the text, such as an icon. It is hidden from screen readers. |
| trailing | `ReactNode` |  | Content after the text, such as a unit. It is not hidden from screen readers. |
| size | `"sm" \| "md"` | `"md"` | md is 40px tall, sm is 32px. Both are 44px on coarse pointers such as touch screens. |
| className | `string` |  | Classes for the outer box, so width and margins apply to it. |
| ref | `Ref<HTMLInputElement>` |  | Reaches the native input. A normal prop in React 19. |
| ...rest | `Omit<InputHTMLAttributes<HTMLInputElement>, "size" \| "type">` |  | Everything else goes to the <input>: value, onChange, placeholder, disabled, readOnly, required, id, aria-label, aria-describedby and so on. |

## States

- error: Pass invalid for a danger border and aria-invalid. Explain the problem in text too.
- hover: The border gets stronger when the pointer is over the box.
- focus: A focus ring is drawn around the whole box (icon and unit included) when you reach it with the keyboard.
- disabled: Pass disabled. The box is dimmed, ignores typing and is skipped by the Tab key.
- readonly: Pass readOnly. The box gets a sunken background; the text can be selected and copied but not changed.

## Tokens

- `--border`
- `--border-strong`
- `--danger`
- `--surface`
- `--surface-sunken`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--focus-ring`
- `--dur-fast`
- `--radius-field`

## Examples

### Search with an icon

The icon is decorative. The box needs its own name because there is no visible label.

```tsx
function Example() {
  const [q, setQ] = useState("");
  return (
    <div className="w-72">
      <TextField type="search" aria-label="Search chats" placeholder="Search chats" leading={<SearchIcon />} value={q} onChange={(e) => setQ(e.target.value)} />
    </div>
  );
}
```

### In a Field with a hint and an error

Field adds the label, hint and error and passes the wiring to the input.

```tsx
<div className="w-72">
  <Field label="Email" hint="We only use it to send receipts." error="Enter an email like name@example.com.">
    {(a) => <TextField {...a} type="email" defaultValue="name@" />}
  </Field>
</div>
```

### Sizes and states

Small and medium, a trailing unit, then disabled and read-only.

```tsx
<div className="flex w-72 flex-col gap-3">
  <TextField size="sm" aria-label="Small" placeholder="Small" />
  <TextField aria-label="Amount" placeholder="0.00" leading="₹" />
  <TextField aria-label="Disabled" defaultValue="Disabled" disabled />
  <TextField aria-label="Read only" defaultValue="Read only" readOnly />
</div>
```

Source: src/atoms/TextField.tsx
