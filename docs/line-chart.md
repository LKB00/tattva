# LineChart
A line chart for change over time. Lines are named at their ends and can be explored with the keyboard.
Status: stable. Page: https://lkb00.github.io/tattva/#component-line-chart
LineChart draws up to five lines. Solid lines are real numbers and dotted lines are guesses about the future. From the third line on, a dash pattern and a marker shape back up the color. With two to four lines, each is named at its end. You can tab to the chart and use the arrow keys to move between points.
## When to use it

Shows change over time for up to five lines. Lines are named at their ends where there is room, so people do not have to look back and forth at a key.

## Use it for

- A measure tracked over days, hours or months.
- Comparing a few groups over the same time.
- A forecast after real values: set where the projection starts.
- Live data where the latest point may still change: turn on streaming.

## Not for

- Comparing amounts at one point in time: use `bar-chart`
- A trend in a very small space: use `sparkline`
- A best guess with a range: use `dot-plot`

## Anatomy

- Key
- Side scale with 4 to 6 marks
- Thin grid lines
- Lines
- End dots and names
- Bottom labels
- Guide line and pop-up

## Do

- Use it for change over time. Keep to four lines where you can.
- Use solid lines for real numbers and dotted lines only for forecasts.
- Put it in a ChartFrame with a summary and a table.
- Switch to several small charts when lines bunch up and their names would overlap.
- Group extra lines into one "Other" line. Lines after the fifth are not drawn.

## Avoid

- Don't put two different measures on one chart. Use two charts.
- Don't add a sixth line. Group the smallest into one grey "Other" line.
- Don't change the other colors when a filter removes a line. Each line keeps its color.
- Don't use amber for a line. It is saved for things that need a person.

## On a phone

- The chart measures its container and redraws at that width, so it fills a phone screen.
- Touch or drag on the chart to show the tooltip. Vertical swipes still scroll the page, and the tooltip stays until you tap elsewhere.
- The tooltip flips to the left of your finger past the middle of the chart, and axis labels at the edges are pulled inward so they are not cut off.
- Give the chart a height of about 200 to 240px on a phone, and it never goes below 160px.

## Accessibility: built in

- You can tab to the chart. Left and Right move between points, Up and Down switch lines, Home and End jump to the ends, and Escape clears.
- Each step is read out as line, time, value and unit, with "projected" or "provisional" added when it applies.
- From the third line on, a dash pattern and a marker shape back up the color.
- The pop-up is hidden from screen readers, because the same values are read out as you move.
- The draw-in animation is skipped when people turn off motion in their system settings.

## Accessibility: what you need to do

- Put it in a ChartFrame with a summary and a table.
- Give it an ariaLabel and a unit, so each point is read with what it measures.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| series (required) | `LineSeries[]` |  | Up to five series. Each has id, label, data (numbers or null) and optional projectionFrom. Color follows position. |
| x (required) | `string[]` |  | X labels, one per data position, already formatted. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats the axis, labels and tooltip. |
| unit | `string` | `""` | Unit word read after each value by screen readers. |
| height | `number` | `240` | Plot height in px including the x axis band. Minimum 160. |
| yDomain | `[number, number]` |  | Fixed y domain. Overrides zeroBaseline. |
| zeroBaseline | `boolean` | `true` | Start the y axis at zero when all values are non-negative. |
| streaming | `boolean` |  | Makes the latest point of each series hollow because it is not final. |
| animate | `boolean` |  | Reveals the lines once on mount, from left to right in --dur-slow on --ease-arrive. Skipped when the person prefers reduced motion. |
| ariaLabel | `string` | `"Line chart"` | Name for the chart region. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- streaming: Set with the streaming prop.

## Tokens

- `--chart-1`
- `--chart-2`
- `--chart-3`
- `--chart-4`
- `--chart-5`
- `--chart-grid`
- `--chart-axis`
- `--surface`
- `--fg`
- `--fg-muted`
- `--dur-slow`
- `--ease-arrive`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Two lines, named at their ends: A key shows for two or more lines. The names at the line ends repeat it. Click or tap the chart, or tab to it and use the arrow keys.
- Four lines that differ by more than color: The third and fourth lines have a dash pattern and a square or triangle dot, so you can tell them apart without color.
- Real numbers and a forecast: Forecast points are dotted. Here Saturday and Sunday are forecast.
- A number still coming in: While the latest point is still coming in, it is hollow. The pop-up and screen reader both call it not final.

Source: src/organisms/LineChart.tsx
