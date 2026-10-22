# FactList
Short label and value pairs, such as Check-in: 3pm.
Also known as: description list, key value list, definition list, properties, details list, dl.
Status: stable. Page: https://lkb00.github.io/tattva/#component-fact-list
FactList shows a few facts about one thing as label and value pairs. It is a description list, so a screen reader reads each value with its label. Labels sit on the left and values on the right, or stacked for narrow places, and two columns are possible on wide screens. It can show placeholder rows while the facts arrive.
## When to use it

Gives the answer a light, scannable shape for the details people compare: times, plans, sizes, prices.

## Use it for

- Three to eight short facts about one thing.
- Details inside an answer, a card or a panel.
- Facts that are still arriving, with placeholders.

## Not for

- Many rows people sort or filter: use `data-table`
- Several things compared side by side: use `comparison-table`
- A single number that matters most: use `stat-tile`

## Anatomy

- Label
- Value
- Row

## Do

- Keep each value short.
- Use the same labels in the same order across similar results.
- Show placeholders while facts stream in.

## Avoid

- Do not use it for long paragraphs.
- Do not put actions inside values.
- Do not use it for a table people need to sort.

## On a phone

- Label and value stay on one line and the value wraps under itself when long.
- Two columns become one on a phone.

## Accessibility: built in

- A description list (dl, dt, dd), so each value is read with its label.
- Placeholder rows are marked busy while the facts arrive.

## Accessibility: what you need to do

- Keep labels short and the same across similar lists.
- Put units in the value (3pm, 4 min), not only in the label.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| facts (required) | `{ label: string; value: ReactNode }[]` |  | The pairs to show, in order. |
| layout | `"split" \| "stacked"` | `"split"` | Side by side, or label above value. |
| columns | `1 \| 2` | `1` | Two columns on wide screens. |
| loading | `boolean` | `false` | Shows placeholder rows while the facts arrive. |
| loadingRows | `number` | `3` | How many placeholder rows to show. |
| emptyLabel | `string` |  | Said when there are no facts. Nothing is drawn when omitted. |
| className | `string` |  | Extra classes on the root. |

## States

- loading: Placeholder rows hold the space while the facts arrive, marked busy.
- facts: Label and value pairs, side by side or stacked.
- empty: Says the empty label, or draws nothing when there is none.
- long value: A long value wraps under itself instead of pushing the label out.

## Tokens

- `--fg`
- `--fg-muted`
- `--text-body`

## Examples

### Facts about a booking

Label on the left, value on the right.

```tsx
<FactList facts={[
  { label: "Check-in", value: "From 3pm" },
  { label: "Check-out", value: "By 11am" },
  { label: "Plan", value: <Badge tone="success">Free cancellation</Badge> },
]} />
```

### Two columns, and arriving

Two columns on wide screens; placeholders while the facts stream in.

```tsx
<FactList columns={2} facts={specs} />
<FactList loading loadingRows={3} facts={[]} />
```

### Stacked

Label above value, for a narrow side panel.

```tsx
<FactList layout="stacked" facts={facts} />
```

Source: src/molecules/FactList.tsx
