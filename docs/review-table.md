# ReviewTable
Rows the assistant drafted, for a person to check and fix before anything is saved.
Also known as: editable table, editable grid, data entry table, spreadsheet, bulk edit.
Status: stable. Page: https://lkb00.github.io/tattva/#component-review-table
ReviewTable shows rows the assistant drafted, such as expenses found in receipts or contacts found in an email, as a table where every cell can be changed. Changed cells are marked, required ones are checked, and one button saves them all; a line beside it says how many changes are waiting. Nothing is written until the person presses Save, and when saving fails the edits stay so they can try again. It is the ask-before-acting pattern for a batch of data.
## When to use it

Lets a person correct what the assistant drafted before it is saved, row by row and cell by cell.

## Use it for

- Data the assistant pulled from documents: expenses, contacts, orders.
- A batch of changes the assistant proposes to a list.
- Anything the assistant fills in that a person must answer for.

## Not for

- Showing rows without changing them: use `data-table`
- Changing one value: use `inline-edit`
- Approving one action: use `approval-prompt`

## Anatomy

- Table
- Editable cell
- Edited mark
- Remove
- Status line
- Start over
- Discard
- Save

## Do

- Say where the rows came from in the label.
- Mark the columns that must be filled in as required.
- Name the save button by what it saves.

## Avoid

- Do not save anything before the person presses Save.
- Do not clear the edits when saving fails.
- Do not use it for more rows than a person can check; split a long batch.

## On a phone

- The table scrolls sideways inside its own frame; the page does not.
- Every cell is at least 44px tall on a touch screen, and the buttons wrap under the status line.

## Accessibility: built in

- Every cell is a real field named by its column and row, such as "Amount, Team lunch".
- Edited cells are marked with a dot and the words "edited" for screen readers.
- A missing required value is marked invalid, says Needed, and the status line counts what is missing.
- The status line is announced politely as edits change; a save error is announced at once.
- Remove buttons name their row.

## Accessibility: what you need to do

- Name the table by what the rows are and where they came from.
- Put the most telling column first: it names each row for screen readers ("Amount, Team lunch").

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | What the rows are, read before the table. |
| columns (required) | `ReviewColumn[]` |  | key, label, and optionally type (text, number, date, choice, link), options, required and readOnly. |
| rows (required) | `{ id: string; values: Record<string, string \| number> }[]` |  | The rows as the assistant drafted them. |
| onSave (required) | `(rows: ReviewRow[]) => void` |  | Called with every row, edited, when the person saves. |
| onDiscard | `() => void` |  | Throws the draft away. Without it there is no Discard button. |
| allowRemove | `boolean` | `false` | Adds a Remove button to each row. |
| saveLabel | `string` | `"Save"` | Says what saving does: "Save expenses". |
| saving | `boolean` | `false` | Turns editing off and shows Save as busy. |
| loading | `boolean` | `false` | Placeholder rows while the assistant drafts. |
| error | `ReactNode` |  | A message when saving failed. The edits stay. |
| className | `string` |  | Extra classes on the frame. |

## States

- loading: Placeholder rows while the assistant drafts.
- error: Set with the error prop.
- drafted: The rows as the assistant drafted them; the status line asks the person to check each row.
- edited: Changed cells show a dot, and the status line counts the changes not saved yet.
- missing value: Saving with a required cell empty marks it invalid, says Needed, and counts what is missing.
- saving: Every cell is turned off and Save shows it is busy.
- save failed: The error is announced under the buttons and every edit stays.
- all removed: Says no rows are left and that Start over brings them back.

## Tokens

- `--surface`
- `--line`
- `--accent`
- `--danger-fg`
- `--radius-card`
- `--radius-field`
- `--focus-ring`

## Examples

### Expenses from receipts

The fourth row is missing its name; saving says so and marks the cell. Change any cell to see the edit count.

```tsx
<ReviewTable label="Expenses the assistant found in your receipts" saveLabel="Save expenses"
  columns={[
    { key: "what", label: "What", required: true },
    { key: "date", label: "Date", type: "date" },
    { key: "amount", label: "Amount ($)", type: "number", required: true },
    { key: "category", label: "Category", type: "choice", options: ["Travel", "Meals", "Office", "Other"] },
  ]}
  rows={drafted} saving={saving} onSave={save} onDiscard={discard} />
```

### Rows that can be taken out

allowRemove adds a Remove button to each row; Start over brings every row and value back.

```tsx
<ReviewTable allowRemove label="Expenses the assistant found in your receipts" columns={columns} rows={drafted} onSave={save} />
```

### While the assistant drafts

Placeholder rows hold the space until the rows arrive.

```tsx
<ReviewTable loading label="Expenses the assistant is reading" columns={columns} rows={[]} onSave={save} />
```

Source: src/organisms/ReviewTable.tsx
