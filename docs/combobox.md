# Combobox
A search box with suggestions that is never a closed list: whatever is typed can be used.
Status: stable. Page: https://lkb00.github.io/tattva/#component-combobox
Combobox is a text box with a list of suggestions under it. Before typing it shows popular names and a line saying any name can be typed. While typing it shows the best matches, then a last row that keeps exactly what was typed. Enter picks the top suggestion when the text is the start of its name (ama picks Amazon), and otherwise accepts the text as typed, so nobody is blocked by the list.
## When to use it

Help people name something quickly, such as a company or a bank, without forcing them to choose from a list that may not contain it.

## Use it for

- Asking which company, bank or shop, where the list can never be complete.
- A name field where common answers are one tap and any other answer is still welcome.
- Search where the text itself is the answer, not an id.

## Not for

- A fixed set where only the listed values are valid: use `select`
- Running commands or jumping around the product: use `command-palette`
- A plain text answer with no suggestions: use `text-field`
- A list of actions opened from a button: use `menu`

## Anatomy

- Search icon
- Input
- Popular names or matches
- Use typed text row
- Empty hint

## Do

- Show popular names for the answers most people give.
- Keep the last row that accepts the typed text, so the list never blocks anyone.
- Use the text as the answer. Do not turn it into an id the person cannot see.
- Say what the last row does in the words of your product with useTypedLabel.

## Avoid

- Do not use it when only the listed values are allowed. Use a Select.
- Do not show more than a handful of matches. The list stops at 6.
- Do not clear the box when the typed text is not in the list.
- Do not use it to run commands. A command palette has a different job.

## On a phone

- The field is 16px on a touch screen, so the page does not zoom when it takes focus.
- The suggestion list opens under the field, shows at most six rows, and each row is 44px tall.
- The list always opens below the field, so near the bottom of a phone the on-screen keyboard can cover it; scroll the field up first.
- Tapping a suggestion does not take focus from the field.

## Accessibility: built in

- The input has role combobox with aria-expanded, aria-controls, aria-autocomplete set to list, and aria-activedescendant naming the active option. Focus stays in the input.
- The list has role listbox. Each row has role option, and the active row has aria-selected.
- Arrow Down and Arrow Up move through the rows and wrap round. Enter picks the active row. Escape closes the list, and pressing it again does nothing.
- With no active row, Enter picks the top suggestion when the typed text is the start of its label. Otherwise it accepts the typed text.
- A polite live region says how many suggestions there are, or that there are none and Enter will use what was typed.
- Clicking or tapping a row picks it without taking focus out of the input.
- Rows are 44px tall on coarse pointers. The active row has a bar on its left edge as well as a shade, and uses the system highlight in forced colours.

## Accessibility: what you need to do

- Pass a label. It is the accessible name of the box. Put it inside Field to also show a visible label.
- Spread the props from Field onto the Combobox so the hint and error are linked.
- Keep value in the parent. The text is the answer, so read it from there as well as from onSelect.
- If the answer is invalid, say why in text (Field does this with error) and also set invalid.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `string` |  | The text in the box. It is always the text, never an id. |
| onChange (required) | `(value: string) => void` |  | Called on every keystroke, and with the option's label when a suggestion is picked. |
| options (required) | `{ value: string; label: string; hint?: string }[]` |  | The suggestions. Matching uses the label only, ignoring case. hint shows small on the right of the row. |
| popular | `string[]` |  | Labels shown before typing. A label that matches an option uses that option's value. |
| onSelect | `(value: string, how: "option" \| "typed") => void` |  | Called when a suggestion is picked (how is option, with the option's value) or the typed text is accepted (how is typed, with the text). |
| label (required) | `string` |  | Accessible name of the box. |
| placeholder | `string` |  | Hint text shown while the box is empty. |
| useTypedLabel | `(typed: string) => string` | `Use “typed”` | Words for the last row while typing, which keeps exactly what was typed. |
| emptyHint | `string` | `"Not here? Type its name above."` | Line shown under the popular names, saying any name can be typed. |
| invalid | `boolean` |  | Danger border and aria-invalid on the input. Explain the problem in text too. |
| disabled | `boolean` |  | Dims the box, ignores typing and keeps the list closed. |
| id | `string` |  | Id of the input. Field sets it. |
| aria-describedby | `string` |  | Ids of the hint and error. Field sets it. |
| aria-invalid | `boolean` |  | Marks the input invalid. Field sets it when it has an error. |
| required | `boolean` |  | Passed to the input. Field sets it. |
| className | `string` |  | Classes for the outer wrapper. |

## States

- error: Pass invalid, or aria-invalid from Field, for a danger border.
- disabled: Pass disabled. The box is dimmed and the list never opens.
- closed: The list is hidden until the box has focus and there is something to show. Escape closes it again until you type or press an arrow key.
- popular: Focused and empty, the popular names show with the empty hint under them.
- typing: Up to 6 matches show, starting-with matches first, followed by a row that keeps exactly what was typed.
- no match: When nothing matches, only the row that keeps the typed text shows, and the live region says there are no suggestions.
- active option: The row reached with the arrow keys is shaded, has a bar on its left edge and aria-selected, and is named by aria-activedescendant.
- hover: A row is shaded when the pointer is over it.
- focus: A focus ring is drawn around the whole box when the input is reached with the keyboard.

## Tokens

- `--surface-raised`
- `--border`
- `--fg`
- `--fg-muted`
- `--surface-hover`
- `--shadow-md`
- `--focus-ring`
- `--danger`
- `--radius-overlay`

## Examples

### Company search with popular names

Focus the empty box to see the popular names and the hint. Type ama and press Enter to pick Amazon.

```tsx
function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72 max-w-full">
      <Combobox label="Company" placeholder="Search for a company" value={v} onChange={setV} options={companies} popular={["Amazon", "Flipkart", "Swiggy"]}
        onSelect={(val, how) => console.log(how, val)} />
    </div>
  );
}
```

### Free text is accepted

A name that is not in the list stays as typed. The last row says so, and its words can be changed with useTypedLabel.

```tsx
function Example() {
  const [v, setV] = useState("Corner Bookshop");
  return (
    <div className="w-72 max-w-full">
      <Combobox label="Seller" value={v} onChange={setV} options={companies} useTypedLabel={(t) => `Use \u201C${t}\u201D as the seller`} />
    </div>
  );
}
```

### Inside a Field with an error

Field adds the label, hint and error, and passes the id and aria props to the input. The error shows until something is typed.

```tsx
function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72 max-w-full">
      <Field label="Bank" hint="Pick one, or type its name." error={v.trim().length === 0 ? "Choose or type a bank." : undefined} required>
        {(a) => <Combobox {...a} label="Bank" value={v} onChange={setV} options={companies} popular={["Amazon", "Flipkart", "Swiggy"]} placeholder="Search for a bank" />}
      </Field>
    </div>
  );
}
```

Source: src/molecules/Combobox.tsx
