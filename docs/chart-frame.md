# ChartFrame
The box every chart sits in. It adds a title, a short written summary, a table view and clear messages when data is loading or missing.
Status: stable. Page: https://lkb00.github.io/tattva/#component-chart-frame
ChartFrame gives a chart a title, a line saying what is measured and over what time, and a short summary in words. A View as table button swaps the chart for the same numbers in a table. It also shows messages while data loads, when there is none, or when something fails. In a very narrow space it shows a tiny trend line instead.
## When to use it

The box every chart sits in. It puts the title, what is measured and a summary in words above the chart, so the point is clear before anyone reads the lines.

## Use it for

- Any chart on a page, so it gets a title, a summary and a table view.
- Showing clear messages while data loads, when there is none, or when loading fails.
- A chart that may land in a narrow space: pass a small trend line as the fallback.

## Not for

- One headline number: use `stat-tile`
- A table of numbers with no chart: use `data-table`

## Anatomy

- Title
- Subtitle with what is measured and when
- Table and download buttons
- Summary in words
- Key for the lines or bars
- Chart or table
- Source and note

## Do

- Write the summary as a sentence that says what the data shows, with the key number.
- Say what is measured and over what time in the subtitle.
- Give every chart a table, so the table button is always there.
- When there is nothing to show, say why and what to do next.
- Pass onRetry, so the error message offers a Try again button.

## Avoid

- Don't skip the summary because the chart looks obvious. Some people need the words.
- Don't hide numbers in a pop-up. Put them in the table.
- Don't put filters inside the box. Keep them in one row above the charts they control.
- Don't make the box shorter than the chart and its labels.

## On a phone

- The chart is drawn at the width of the frame, and below minWidth (280px unless you change it) it is replaced by your fallback, usually a Sparkline, with a note to use the table view.
- Cards use 16px padding and the title wraps instead of being cut off.
- The View as table button swaps in a DataTable that scrolls sideways inside the frame, so give the table a narrow column set for phones.

## Accessibility: built in

- The title and summary sit in the chart's caption, so screen readers hear them with the chart.
- View as table swaps in a real table with the same numbers, and the button label changes to match the view.
- While data loads, screen readers hear "Loading chart".
- A failure is announced right away.

## Accessibility: what you need to do

- Write a summary that says what the data shows, with the key number. Some people only get the words.
- Pass table data for every chart, or the View as table button does not appear.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | Chart title, set in the display style. |
| subtitle | `string` |  | States the unit and the time window. |
| summary | `ReactNode` |  | Plain-language reading of the chart, shown above it in body text. |
| children | `ReactNode` |  | The chart. It receives the full width of the frame. |
| table | `DataTableProps` |  | Data for the table view. Without it the toggle is hidden. Each chart exports a helper that builds it. |
| source | `string` |  | Source line shown under the chart. |
| note | `string` |  | Caveat shown after the source, for example that the latest point is still streaming. |
| legend | `ReactNode` |  | Rendered above the chart. Charts draw their own legend, so use this only for a shared legend. |
| state | `"ready" \| "loading" \| "empty" \| "error"` | `"ready"` | Anything other than ready replaces the chart. |
| empty | `ChartEmptyState` |  | What is missing, why, and an optional action. Shown in the empty state. |
| errorMessage | `string` |  | Message for the error state. A default says nothing was lost. |
| onRetry | `() => void` |  | Called by the retry button in the error state. |
| fallback | `ReactNode` |  | Shown instead of the chart when the frame is narrower than minWidth. |
| minWidth | `number` | `280` | Narrowest width in px at which the chart is drawn. |
| defaultView | `"chart" \| "table"` | `"chart"` | Which view is shown first. |
| onDownload | `() => void` |  | Adds a Download data button and calls this when pressed. |
| stateHeight | `number` | `200` | Height in px of the loading, empty and error states, so the layout does not jump. |
| className | `string` |  | Extra classes on the figure. |

## States

- status: Set with the state prop.
- empty: Set with the empty prop.

## Tokens

- `--surface`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--chart-axis`
- `--font-serif`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A chart with a summary and a table: The summary says what the chart shows. View as table swaps the chart for the same numbers in a table.
- Loading, nothing to show, and a problem: Loading shows a grey placeholder. When there is nothing to show, it says what is missing, why and what to do. A problem offers a retry.
- A tiny version in narrow spaces: This box is too narrow for a full chart, so it shows a tiny trend line. The table view still has every value.

Source: src/molecules/ChartFrame.tsx
