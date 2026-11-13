# BarChart
Bars that compare amounts. Highlight one bar, or stack up to four parts.
Also known as: bar graph, column chart, histogram, stacked bar.
Status: stable. Page: https://lkb00.github.io/tattva/#component-bar-chart
BarChart compares amounts. Bars always start at zero. You can highlight one bar in the main color and leave the rest grey. A stacked version splits each bar into up to four parts, with a key in the same order.
## When to use it

Compares amounts with bars that always start at zero. One bar can be highlighted while the rest stay grey, so the bar that tells the story stands out.

## Use it for

- Comparing amounts across categories, such as shops or months.
- Pointing at one category: set highlight.
- Showing what an amount is made of, with up to four stacked parts.

## Not for

- Change over time across many points: use `line-chart`
- A single number: use `stat-tile`
- A best guess with a range: use `dot-plot`

## Anatomy

- Key (stacked)
- Number scale
- Category names
- Bars
- Number labels
- Pop-up

## Do

- Start every bar at zero. Never cut the scale.
- Highlight a bar when it is the story, and leave the rest grey.
- Lay bars sideways for long names or more than a handful of bars.
- Keep stacks to four parts, and list the key in the same order as the stack.

## Avoid

- Don't give every bar its own color. One set of bars takes one color.
- Don't draw a chart with one bar. Use a StatTile.
- Don't squeeze numbers inside bars that are too small. They sit at the bar end, and the table has them all.
- Don't use a pie or donut to show parts of a whole. Use a stacked bar.

## On a phone

- The chart measures its container and redraws at that width. Long category labels are shortened with an ellipsis to fit.
- Touch or drag on a bar to show the tooltip. Vertical swipes still scroll the page, and the tooltip stays until you tap elsewhere.
- Horizontal bars suit a phone best, because labels have room to the left and the chart grows downward.

## Accessibility: built in

- You can tab to the chart. Arrow keys move between bars and, in a stacked chart, between parts. Home and End jump to the first and last bar.
- Each step is read out as the part or measure, the category, the value and the unit.
- Stacked parts have a small gap between them, and the key names each part in stack order.
- The pop-up is hidden from screen readers, because the same values are read out as you move.

## Accessibility: what you need to do

- Put it in a ChartFrame with a summary and a table.
- Give it an ariaLabel, a measure and a unit, so each bar is read with what it measures.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| data (required) | `BarDatum[]` |  | One entry per category: label, and value (single series) or values (stacked). Values must be zero or more. |
| orientation | `"horizontal" \| "vertical"` | `"horizontal"` | Horizontal reads best for long labels and many categories. |
| series | `BarSeries[]` |  | Stack segment definitions, at most four. When set the chart is stacked and each datum uses values. |
| highlight | `string` |  | Label of the one category to emphasize. Others use the neutral. |
| measure | `string` | `"Value"` | Name of the measure for single series charts, used in announcements and the tooltip. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats axis ticks, value labels and the tooltip. |
| unit | `string` | `""` | Unit word read after each value by screen readers. |
| height | `number` |  | Total height in px. Vertical charts default to 240. Horizontal charts size to their rows. |
| ariaLabel | `string` | `"Bar chart"` | Name for the chart region. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- hover: Moving the pointer over a bar or touching it shades its row and shows a tooltip with the values.
- focus: The chart can be focused with the keyboard; arrow keys step through bars, Home and End jump to the ends and Escape clears the tooltip.
- highlight: Pass highlight with a category label to colour that bar and grey out the rest.
- stacked: Pass series with values per row to stack segments, add a legend and let arrow keys move between segments.
- empty: With no data, only the axis is drawn.
- truncated labels: Category labels that do not fit are cut off with an ellipsis, and totals too wide for a vertical bar are left out.

## Tokens

- `--chart-1`
- `--chart-2`
- `--chart-3`
- `--chart-4`
- `--chart-neutral`
- `--chart-grid`
- `--chart-axis`
- `--surface`
- `--surface-hover`
- `--radius-overlay`

## Examples

### One bar stands out

One bar is the point, so it gets the main color and the rest are grey. Numbers sit at the ends of the bars.

```tsx
<div className="w-full">
  <BarChart
    highlight="North shop"
    measure="Sales"
    data={[{ label: "North shop", value: 4200 }, { label: "East shop", value: 2900 }, { label: "West shop", value: 1700 }, { label: "Online", value: 900 }, { label: "Other", value: 400 }]}
    formatValue={(n) => "$" + n.toLocaleString("en-US")}
    unit="dollars"
    ariaLabel="Sales by shop"
  />
</div>
```

### Upright bars

Use upright bars for a short list with short names. Names that do not fit are cut short. The full name is in the pop-up and table.

```tsx
<div className="w-full max-w-lg">
  <BarChart
    orientation="vertical"
    measure="Refunds"
    data={[{ label: "Late", value: 42 }, { label: "Wrong item", value: 118 }, { label: "Damaged", value: 23 }, { label: "Missing", value: 9 }, { label: "Other", value: 14 }]}
    unit="errors"
    ariaLabel="Errors by status code"
  />
</div>
```

### Stacked bars

Parts follow the key from left to right. The total sits at the end of each bar. Each part's number is in the pop-up and table.

```tsx
<div className="w-full">
  <BarChart
    series={[{ id: "in", label: "Walk-in" }, { id: "out", label: "Online" }, { id: "cache", label: "Phone" }]}
    data={[
      { label: "North shop", values: [12, 4, 8] },
      { label: "East shop", values: [9, 3, 5] },
      { label: "West shop", values: [6, 2, 1] },
      { label: "Online", values: [3, 1, 0] },
    ]}
    unit="hundred orders"
    ariaLabel="Orders by shop and type"
  />
</div>
```

### With a table view

A helper builds the table data for ChartFrame.

```tsx
<div className="w-full">
  <ChartFrame
    title="Sales by shop"
    subtitle="US dollars, last 7 days"
    summary="The North shop made 4,200 of 10,100 dollars, the biggest share of sales."
    table={barChartTable(SPEND, { labelHeader: "Shop", caption: "Sales by shop", measure: "Sales", formatValue: (n) => "$" + n.toLocaleString("en-US") })}
  >
    <BarChart highlight="North shop" measure="Sales" data={SPEND} formatValue={(n) => "$" + n.toLocaleString("en-US")} unit="dollars" ariaLabel="Sales by shop" />
  </ChartFrame>
</div>
```

Source: src/organisms/BarChart.tsx
