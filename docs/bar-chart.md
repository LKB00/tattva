# BarChart
Bars that compare amounts. Highlight one bar, or stack up to four parts.
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

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- One bar stands out: One bar is the point, so it gets the main color and the rest are grey. Numbers sit at the ends of the bars.
- Upright bars: Use upright bars for a short list with short names. Names that do not fit are cut short. The full name is in the pop-up and table.
- Stacked bars: Parts follow the key from left to right. The total sits at the end of each bar. Each part's number is in the pop-up and table.
- With a table view: A helper builds the table data for ChartFrame.

Source: src/organisms/BarChart.tsx
