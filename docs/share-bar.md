# ShareBar
Shares of one whole as a single bar, with each part's value and percentage written out.
Also known as: stacked bar, 100% bar, part to whole, proportion bar, pie chart, donut chart.
Status: stable. Page: https://lkb00.github.io/tattva/#component-share-bar
ShareBar shows how one total splits into parts, such as spend by tool or time by task: one bar, one segment per part, and a list under it with every part's percentage and value. It reads better than a pie, and because the numbers are written out, nothing depends on telling colours apart. Percentages always add up to 100. Past five parts, the smallest fold into Other.
## When to use it

Answers "what share of the total is each part?" in one line.

## Use it for

- Spend or usage split by tool, model or team.
- Time split by task.
- A share inside a card or an answer, where a full chart is too much.

## Not for

- Comparing amounts between categories: use `bar-chart`
- A change over time: use `line-chart`
- How full one limit is: use `meter`

## Anatomy

- Bar
- Segment
- Key
- Percentage
- Value

## Do

- Use it for parts of one whole that add up to 100%.
- Keep it to five parts or fewer; the rest fold into Other.
- Say the period and the unit in the label.

## Avoid

- Do not compare totals from different periods with two share bars; use a bar chart.
- Do not use it for values that do not add up to one whole, such as scores.

## On a phone

- The bar fills the width; the list wraps onto as many lines as it needs.

## Accessibility: built in

- The bar is hidden from screen readers; the list under it carries every part's name, percentage and value.
- The whole is named by a caption read before the list.
- Colour is never the only cue: each part's name and number are written beside its colour key.
- Percentages are rounded so they always add up to 100.

## Accessibility: what you need to do

- Name the whole in ariaLabel, including the period: "Spend by kind of tool, October".
- Order the parts largest first, unless they have a natural order.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| data (required) | `{ label: string; value: number }[]` |  | The parts of the whole. Zero and negative values are left out. |
| ariaLabel (required) | `string` |  | Name of the whole, read before the shares. |
| formatValue | `(n: number) => string` |  | Formats each value in the list. Percentages are always shown too. |
| highlight | `string` |  | Label of the one part to draw in colour; the rest are neutral. |
| otherLabel | `string` | `"Other"` | Label for the parts folded together past five. |
| loading | `boolean` | `false` | Shows placeholders while the numbers arrive. |
| emptyText | `string` | `"Nothing to show yet."` | Said when there is nothing to show. |
| className | `string` |  | Extra classes on the figure. |

## States

- loading: Placeholders for the bar and the list, marked busy.
- shares: One segment per part, with the percentage and value of each written in the list.
- highlight: One part keeps its colour; the others turn neutral and their text fades.
- folded: Past five parts, the smallest fold into Other.
- empty: Says the empty text in words.

## Tokens

- `--chart-1`
- `--chart-2`
- `--chart-3`
- `--chart-4`
- `--chart-5`
- `--chart-neutral`

## Examples

### Spend by kind of tool

Each part gets a chart colour; the list gives the percentage and the amount.

```tsx
<ShareBar ariaLabel="AI spend by kind of tool, October" formatValue={(n) => `$${n.toLocaleString("en-US")}`}
  data={[{ label: "API usage", value: 1620 }, { label: "Chat assistants", value: 1360 }, { label: "Coding assistants", value: 960 }, { label: "Other tools", value: 300 }]} />
```

### One part in focus

highlight draws one part in colour and the rest in the neutral, when the story is about that part.

```tsx
<ShareBar highlight="API usage" ariaLabel="AI spend by kind of tool, October" data={spend} formatValue={usd} />
```

### Loading and empty

Placeholders hold the space while the numbers arrive; an empty total says so in words.

```tsx
<ShareBar loading ariaLabel="Spend by kind of tool" data={[]} />
<ShareBar ariaLabel="Spend by kind of tool" data={[]} emptyText="No spend this month yet." />
```

Source: src/molecules/ShareBar.tsx
