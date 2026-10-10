# Sparkline
A tiny trend line that highlights the latest value and can be read aloud.
Status: stable. Page: https://lkb00.github.io/tattva/#component-sparkline
Sparkline draws a small line and marks the latest value with a bigger dot. Optional dots mark the lowest and highest points. A screen reader hears the first, last, lowest and highest values. Inside a StatTile it is only decoration, because the tile already shows the number.
## When to use it

A tiny trend line with the latest value marked, for places with no room for a full chart. It has no axes or labels, so it always sits beside a number.

## Use it for

- Beside a headline number, inside a StatTile.
- A table cell or list row that shows a trend.
- The fallback in a ChartFrame that is too narrow for the full chart.

## Not for

- A trend people need to read exact values from: use `line-chart`
- The only place the numbers appear: use `data-table`

## Anatomy

- Trend line
- Lowest and highest dots
- Latest point

## Do

- Put it beside a number that gives the current value.
- Cover the same time as the number beside it.
- Use it in place of a chart that is too narrow to draw.

## Avoid

- Don't add axes, grid lines or labels. Use a LineChart for that.
- Don't let a screen reader read it inside a tile. It would repeat the tile.
- Don't compare trend lines as if they share a scale when they do not.

## On a phone

- It is a fixed-size picture, 96 by 28px unless you pass width and height, so it does not resize with its container.
- It has no hover or tap behaviour, so put the numbers next to it in text.
- Set width yourself if you need it larger on a phone.

## Accessibility: built in

- On its own, screen readers hear the label with the first, last, lowest and highest values.
- With decorative set, it is hidden from screen readers.
- The latest point is larger, with a ring that keeps it clear of the line.

## Accessibility: what you need to do

- Set decorative when the number beside it already says the same thing, such as inside a StatTile.
- Give it a label and unit that say what it measures. Screen readers use them.
- Put the full numbers in a table somewhere on the page.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| data (required) | `number[]` |  | Values in time order. |
| label (required) | `string` |  | What the line measures. Used in the accessible name. |
| unit | `string` | `""` | Unit appended to values in the accessible name. Include a leading space if needed. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats values in the accessible name. |
| width | `number` | `96` | Width in px. |
| height | `number` | `28` | Height in px. |
| showMinMax | `boolean` |  | Marks the minimum and maximum with hollow dots. |
| decorative | `boolean` |  | Hides the sparkline from assistive technology. Use when a visible number carries the same information. |
| color | `string` | `"var(--chart-1)"` | Color of the emphasized end point. |
| className | `string` |  | Extra classes on the svg. |

## States

- empty: With an empty data array, nothing is drawn.
- single point: With one value, only the end dot is drawn and no line.
- min and max: Pass showMinMax to mark the lowest and highest points with small rings.
- decorative: Pass decorative to hide it from screen readers when the number beside it already says the same thing.

## Tokens

- `--chart-axis`
- `--chart-1`
- `--surface`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Plain, and with lowest and highest points: The latest point has the main chart color. The line stays grey so the latest value stands out.
- Inside a tile: Here it is decoration only, so screen readers skip it.

Source: src/organisms/Sparkline.tsx
