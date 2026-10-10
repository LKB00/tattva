# DotPlot
Shows a best guess and how sure it is, with a caption that explains the marks.
Status: stable. Page: https://lkb00.github.io/tattva/#component-dot-plot
DotPlot draws one row for each result. A dot shows the best guess and a thin line shows the range it likely falls in. A caption above says what the dot and line mean and how many people or cases it covers. The numbers are printed beside each row when there is room.
## When to use it

Shows a best guess and the range it likely falls in, one row per result. A caption says what the dot and line mean, because a bare range line means little to most readers.

## Use it for

- Survey or test results where how sure you are matters.
- Comparing groups of different sizes: turn on showN.
- Results measured against a target, with a reference line.

## Not for

- Amounts that should be compared by bar length: use `bar-chart`
- Change over time: use `line-chart`

## Anatomy

- Caption
- Number scale
- Row names
- Range line with end caps
- Best-guess dot
- Numbers in text
- Reference line (optional)

## Do

- Write the caption so a reader can say what the line means, how sure it is and how many people are behind it.
- Show group sizes when groups are small or differ between rows.
- Print the numbers as text, so no one has to read them off the scale.
- When the question is how two things differ, show that difference directly.

## Avoid

- Don't leave the range line unexplained. A bare line means nothing.
- Don't treat overlapping lines as proof that two results are the same. They are not.
- Don't show scores with no range and no group size. At least show how many were asked.
- Don't cut a bar chart to fit a range. This chart marks positions, not bar lengths, so its scale can start above zero.

## On a phone

- The chart measures its container and redraws at that width. Long row labels are shortened with an ellipsis to fit.
- Touch a row to show the tooltip. Vertical swipes still scroll the page, and the tooltip stays until you tap elsewhere.
- The caption above the chart wraps, so write it in plain words.

## Accessibility: built in

- The caption is shown above the chart and is also part of the chart's name for screen readers.
- You can tab to the chart. Arrow keys move between rows, and Home and End jump to the first and last.
- Each row is read out as measure, row, value and unit, then the range and group size.
- The range line has end caps, and the dot has a ring that keeps it clear.

## Accessibility: what you need to do

- Write a caption that says what the dot and line mean and how many people are behind them. Screen readers hear it as part of the chart's name.
- Set measure, intervalLabel and unit, so each row is read in full.
- Put it in a ChartFrame with a table. The numbers beside each row are dropped when the chart is narrow.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| data (required) | `DotDatum[]` |  | One row per estimate: label, estimate, low, high and an optional n. |
| caption (required) | `string` |  | Says what the dot and line mean, with the interval level and sample size. Rendered above the chart. |
| showN | `boolean` |  | Prints n beside each row. Use it for small samples. |
| measure | `string` | `"Estimate"` | Name of the estimate in announcements and the tooltip. |
| intervalLabel | `string` | `"interval"` | Names the interval, for example 95% confidence interval. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats the axis, text column and tooltip. |
| unit | `string` | `""` | Unit word read after each value by screen readers. |
| domain | `[number, number]` |  | Fixed value axis. Defaults to the interval extent. The axis does not need to start at zero. |
| reference | `{ value: number; label: string }` |  | A named reference line, such as the current model. |
| ariaLabel | `string` | `"Dot plot"` | Name for the chart region. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- hover: Moving the pointer over a row shades it and shows a tooltip with the estimate, interval and sample size.
- focus: The chart can be focused with the keyboard; arrow keys step through rows and Escape clears the tooltip.
- reference line: Pass reference to draw a labelled vertical line at that value.
- narrow: Below about 440px wide, the value text beside each row is hidden, though the tooltip still shows it.
- sample size: Pass showN to print each row's sample size when the data has n.

## Tokens

- `--chart-1`
- `--chart-grid`
- `--chart-axis`
- `--surface`
- `--surface-hover`
- `--fg`
- `--fg-muted`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Happy customers, with a range: The caption says what is measured, how sure we are and how many customers. The text column gives the numbers.
- Different group sizes and a goal line: Each row prints how many customers were asked, so a wide range from a small group makes sense. The line marks the current shop.
- With a table view: A helper lists the best guess, both ends of the range and the group size.

Source: src/organisms/DotPlot.tsx
