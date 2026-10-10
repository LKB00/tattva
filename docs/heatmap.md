# Heatmap
A grid of coloured cells with the number printed in each one. Use it to spot patterns across two things.
Status: stable. Page: https://lkb00.github.io/tattva/#component-heatmap
Heatmap shows one number per cell for rows and columns, such as sectors by day. Colour shows how big the number is, and the number is printed in the cell so colour is never the only clue. The direction scale shows ups and downs around zero. The sequential scale shows low to high in one colour. The grid works with the arrow keys.
## When to use it

Shows where the high and low spots are in a table of numbers, at a glance, without losing the exact values.

## Use it for

- Moves by group and day, where gains and losses both matter: direction scale.
- A profit and loss calendar: weekday rows by week columns.
- Counts or amounts by two categories, such as orders by region and hour: sequential scale.

## Not for

- Change over time for a few lines: use `line-chart`
- Comparing a handful of amounts: use `bar-chart`
- Reading exact values and sorting: use `data-table`

## Anatomy

- Column headings
- Row headings
- Cells with colour and number
- Dash for missing data
- Scale bar (optional)

## Do

- Keep the numbers printed in the cells.
- Use the direction scale only when zero means something, such as gain against loss.
- Put it in a ChartFrame with a summary and a table.
- Use null for missing data, not 0.

## Avoid

- Don't use the direction scale for counts that cannot be negative. Use sequential.
- Don't hide the numbers and rely on colour.
- Don't use dozens of columns on a phone. The grid scrolls sideways, so keep it short.

## On a phone

- The grid keeps cells at least 32px square, and when there are too many columns it scrolls sideways inside its own box.
- Column headers are cut off with an ellipsis when they do not fit, so keep them short.
- Values show inside the cells, so nothing depends on hover.
- Cells are 32px by default and have no larger size on touch screens, so raise cellSize if people need to tap them.

## Accessibility: built in

- The grid has rows, column headings and row headings, so a screen reader can say where you are.
- The grid is one tab stop. Arrow keys move between cells, Home and End go to the row ends, Ctrl with Home or End goes to the corners, and PageUp and PageDown go to the top and bottom of the column.
- Each cell is named like "Banks, Mon: up 1.2 percent". A cell with no data is named "No data".
- The number is printed in every cell by default, so colour is not the only clue. Direction is also shown with a plus or minus sign.
- Cells with no data show a dash and a dashed border.
- Cell borders stay visible in forced-colors mode.

## Accessibility: what you need to do

- Give it an ariaLabel that says what the grid holds.
- Put it in a ChartFrame with a summary and pass heatmapTable to the table prop.
- Pass a unit such as "percent" so each cell is read with what it measures.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| rows (required) | `string[]` |  | Row labels, top to bottom. |
| cols (required) | `string[]` |  | Column labels, left to right. |
| values (required) | `(number \| null)[][]` |  | One array per row, one value per column. null means no data. |
| scale | `"direction" \| "sequential"` | `"direction"` | Direction colours around zero in the up and down colours. Sequential uses one hue in five steps. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats the number in a cell. With the direction scale it gets the size of the move, and the + or minus sign is added for you. |
| unit | `string` | `""` | Word read after each value by screen readers, for example "percent". |
| showValues | `boolean` | `true` | Prints the number in every cell. Turn it off only when the numbers are given somewhere else. |
| ariaLabel (required) | `string` |  | Name for the grid. |
| legend | `boolean` |  | Shows a small scale bar with the lowest, zero and highest values (or low and high for sequential). |
| cellSize | `number` | `44` | Smallest cell width and height in px. Values below 32 are raised to 32. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- focus: One cell has a visible focus ring. Only that cell is in the Tab order, and the arrow keys move the ring.
- no data: A cell whose value is null shows a dash on a sunken background with a dashed border, and is named "No data".
- flat: With the direction scale, a value of exactly 0 gets the plain sunken background and is read as flat.
- scrolling: When the columns do not fit, the grid scrolls sideways inside its own box.

## Tokens

- `--up`
- `--down`
- `--chart-seq-1`
- `--chart-seq-2`
- `--chart-seq-3`
- `--chart-seq-4`
- `--chart-seq-5`
- `--surface`
- `--surface-sunken`
- `--fg`
- `--fg-muted`
- `--focus-ring`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Sector moves by day: The direction scale. The up and down colours are stronger for bigger moves. Each cell prints its signed number. The cell with no data shows a dash.
- A profit and loss calendar: Feed it weekday rows and week columns. Put each day in the row for its weekday and the column for its week. Use null for a day with no trades.
- Counts in one colour: The sequential scale runs from light to dark in one hue. The number sits on a small chip so it stays readable on any shade.

Source: src/organisms/Heatmap.tsx
