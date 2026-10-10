# DataTable
The numbers behind a chart, in a plain table with digits lined up.
Status: stable. Page: https://lkb00.github.io/tattva/#component-data-table
DataTable shows numbers as a table. The first column names each row. Numbers line up on the right so they are easy to compare. Headings can sort, a cell can carry an up or down marker, and rows can be dense for screens people read all day. On a narrow screen the table scrolls sideways. ChartFrame uses it for the View as table view.
## When to use it

The numbers behind a chart, in a plain table. Numbers line up on the right with equal-width digits, so a column can be compared at a glance.

## Use it for

- The table view of a chart, inside ChartFrame.
- A small set of numbers that people need to read and compare exactly.
- Giving every value that a chart shows only in a pop-up a place to be read.
- A watchlist, a positions list or any list of numbers people sort and scan: turn on sortable headings, dense rows and the up or down marker.

## Not for

- Laying out a page or a form
- A side-by-side comparison of products or plans: use `comparison-table`
- One headline number: use `stat-tile`

## Anatomy

- Caption
- Column headings (sortable)
- Row names
- Number cells
- Up or down marker
- Scrolling area

## Do

- Put the unit in each number column heading.
- Use commas in big numbers and the same decimals down a column.
- Include every number the chart shows, even ones that only appear in a pop-up.
- Mark missing values with words such as "No data".

## Avoid

- Don't line text up on the right.
- Don't merge cells or stack headings. Keep one row of headings.
- Don't use it to lay out a page. It is for data.

## On a phone

- By default the table keeps its columns and scrolls sideways inside its own box, so the page itself never scrolls sideways.
- Set responsive="stack" and a narrow container turns each row into a card with the column name before each value, so nothing scrolls.
- Sort buttons in the header and the first-column row button are 44px tall on touch screens.
- Tapping anywhere on a row calls onRowClick, so there is no hover state to rely on.

## Accessibility: built in

- It is a real table: the first column names each row, and screen readers pair each number with its headings.
- The caption is read by screen readers and also names the scrolling area.
- The scrolling area can be reached with the Tab key, so keyboard users can scroll it sideways.
- Number columns line up on the right with equal-width digits.
- A sortable heading is a real button inside the heading cell. The heading carries aria-sort, and a polite message says how the table is now sorted.
- An up or down marker has an arrow shape and a hidden word, so direction is not colour alone.
- When rows can be chosen, the row name is a real button and the chosen row has aria-current.

## Accessibility: what you need to do

- Write a caption that says what the table holds. It is hidden on screen, and screen readers use it as the table's name.
- Put the unit in each number column heading, so each number is heard with its unit.
- Write missing values as words, such as "No data", not as an empty cell.
- The up or down marker adds an arrow and a hidden word, but your text must still carry its own sign (+ or −). Do not leave the number unsigned and rely on the colour.
- If you keep the sort in your own code, pass sort and onSortChange together, or the headings will look broken.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| columns (required) | `DataTableColumn[]` |  | Column definitions: key, header, numeric, sortable, sortValue and direction. The first column is the row header. sortValue gives the raw number or text to sort by when the cell shows formatted text. direction returns "up", "down" or "flat" for a cell, which adds an arrow and the up or down colour. |
| rows (required) | `Record<string, ReactNode>[]` |  | One object per row, keyed by column key. Values are already formatted. |
| caption (required) | `string` |  | Names the table and states what it holds. It is also the accessible name of the scroll region. |
| stickyHeader | `boolean` |  | Keeps the header row visible while the body scrolls. Pair it with maxHeight. |
| maxHeight | `number` |  | Maximum height in px before the table scrolls vertically. |
| density | `"comfortable" \| "dense"` | `"comfortable"` | Row spacing. Dense fits more rows. |
| sort | `SortState \| null` |  | The current sort, when your code keeps it. SortState is { key, direction: "asc" \| "desc" }. Use with onSortChange. |
| defaultSort | `SortState \| null` | `null` | The starting sort when the table keeps it itself. |
| onSortChange | `(sort: SortState \| null) => void` |  | Called when a sortable heading is pressed. Each press goes none, ascending, descending, none. |
| onRowClick | `(row: DataRow, index: number) => void` |  | Called when a row is chosen. The row name becomes a button, so the keyboard works. Clicking elsewhere on the row also calls it. |
| activeRowKey | `string` |  | Key of the row to mark as the current one (aria-current). Matches rowKey. |
| rowKey | `(row: DataRow, index: number) => string` |  | A stable key per row. Defaults to the row's id value, then its position. Needed for activeRowKey when rows reorder. |
| responsive | `"scroll" \| "stack"` | `"scroll"` | What a narrow container does with the table. scroll keeps the columns and scrolls sideways. stack turns each row into a card, with the column name before each value, so nothing scrolls. It follows the width of the table's own container, not the screen. |
| emptyText | `string` | `"No rows."` | Shown when there are no rows. |
| className | `string` |  | Extra classes on the scroll region. |

## States

- focus: The scrollable table region can be focused with the keyboard and shows a focus ring.
- sticky header: Pass stickyHeader (with maxHeight) to keep the column headings in view while the body scrolls.
- scrolling: A table wider or taller than its box scrolls inside it instead of stretching the page.
- empty: With no rows, a single line (emptyText, "No rows." by default) is shown under the headings.
- sorted: A sortable heading (sortable on the column) cycles none, ascending, descending when pressed; the table shows arrows and says how it is sorted.
- dense: Pass density="dense" for tighter rows.
- up or down: A column's direction function adds an arrow and the up or down colour to a cell.
- current row: The row matching activeRowKey is marked with aria-current and a sunken background.
- row hover: When onRowClick is set, rows highlight on hover and the row name is a button.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--up-fg`
- `--down-fg`
- `--surface-hover`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Wait times by shop: Number columns line up on the right. Values are already formatted.
- A long table with fixed headings: For long tables, headings stay in view while the rows scroll.
- Cards on a phone: Set responsive to stack and each row becomes a card when the table is narrow, with the column name before each value. Nothing scrolls sideways. This frame is narrow on purpose, so you see the phone layout here.
- Sortable, dense, with up and down: A watchlist. Headings sort (none, then ascending, then descending). The change column gets an arrow and a colour. Pressing a row name chooses that row.

Source: src/molecules/DataTable.tsx
