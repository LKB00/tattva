# ChartRangeBrush
A strip under a long chart with two handles. The part between them is what the chart above shows.
Status: stable. Page: https://lkb00.github.io/tattva/#component-chart-range-brush
ChartRangeBrush draws a small line of the whole series and a window over it. Drag a handle to change one end, or drag the window to move both. Each handle is a slider that works with the keyboard, and the chosen range is written out as text. The parent keeps the range and passes the matching slice to the chart.
## When to use it

Lets someone zoom into part of a long series, such as the week a model changed, without leaving the chart.

## Use it for

- Cost, usage or latency charts that cover 30 to 365 days.
- Any long line chart where people need to look closely at a short stretch.
- Picking a stretch of a series to compare or export.

## Not for

- Picking one value on a scale: use `slider`
- Picking calendar dates when there is no chart: use `date-picker`
- A short series that already fits on screen: use `line-chart`

## Anatomy

- Label
- Range text
- Reset button
- Overview line
- Dimmed area outside the window
- Window
- Start handle
- End handle

## Do

- Put it straight under the chart it controls, the same width.
- Pass the full series as values, and only the sliced part to the chart.
- Start on a useful window, such as the last 30 days.
- Say the unit in formatCount, such as days or hours.

## Avoid

- Don't use it for a series of a dozen points. Show the whole chart.
- Don't animate the chart above when the range changes. It should follow the hand at once.
- Don't hide the range text. It is the only exact reading of the window.

## On a phone

- The strip fills the width, and the label and Reset button wrap above it.
- Each handle's hit area is 44px wide on touch screens and the strip is 48px tall, even though the handles look thin.
- A touch that starts on the strip does not scroll or zoom the page, so dragging a handle stays put. Touches anywhere else scroll as usual.
- The Reset button grows to 44px tall on touch screens.

## Accessibility: built in

- Each handle has role slider with aria-valuemin, aria-valuemax and aria-valuenow, and aria-valuetext such as "Start, 3 August". Its name is the label plus start or end.
- The handles' limits follow each other, so the start can never pass the end, and the gap set by minSpan is kept.
- Arrow keys move one point, PageUp and PageDown move a tenth of the series, Home and End go to the limits.
- The window is its own slider in the Tab order between the handles. Arrow keys, PageUp, PageDown, Home and End move the whole window, and it reads as "3 August to 1 September".
- The chosen range is always written as text above the strip, so it never depends on the drawing.
- Pointer drags use pointer capture, so the drag keeps working when the pointer leaves the strip. Pressing the bare track brings the nearer handle there and moves focus to it.
- Handles get 44px wide hit areas on coarse pointers. The handle line and grip keep a visible colour in forced-colors mode, and the window border uses the Highlight colour.
- The visible focus ring comes from the global focus style.
- The Reset button uses aria-disabled when the range is already full, so it keeps focus after you press it.

## Accessibility: what you need to do

- Give it a label that says what is being narrowed, such as "Date range".
- Pass labels (or formatLabel) so the handles read out dates, not positions.
- Pass formatCount so the range text says the right unit, such as days.
- Slice the chart's data yourself from range, so the chart and the brush always agree.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| values (required) | `number[]` |  | The overview series, one value per position. Drawn as a small line in the strip. |
| labels | `string[]` |  | One label per value, for example dates. Shown in the range text and read out by the handles. |
| range (required) | `[number, number]` |  | Start and end index, both inclusive. Values out of bounds, in the wrong order or closer than minSpan are corrected for drawing. |
| onRangeChange (required) | `(range: [number, number]) => void` |  | Called with the new start and end after a drag, a key press or Reset. Only called when the range really changes. |
| minSpan | `number` | `2` | The fewest points the window may hold. 2 means the start and end can never meet. |
| label (required) | `string` |  | Name shown above the strip and used in each handle's name, for example "Date range". |
| formatLabel | `(index: number) => string` |  | Turns an index into the text shown and read out. Defaults to labels[index], or the position counted from 1. |
| formatCount | `(count: number) => string` |  | Turns the number of points in the window into words. Defaults to "15 points". |
| className | `string` |  | Extra classes on the wrapper. |
| ...rest | `Omit<HTMLAttributes<HTMLDivElement>, "onChange">` |  | Other attributes go on the wrapper. |

## States

- focus: Tabbing reaches the start handle, the window and the end handle in turn. Each shows the global focus ring.
- hover: Pointing at a handle darkens its grip border. The handles show a resize cursor and the window a grab cursor.
- dragging: While a handle or the window is dragged it follows the pointer at once, with no easing, even outside the strip.
- full range: When the window covers every point, nothing is dimmed and the Reset button looks faded and does nothing.
- at the limit: A handle stops where the window would get shorter than minSpan, and the window stops at either end of the strip.

## Tokens

- `--chart-1`
- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--focus-ring`
- `--dur-fast`
- `--text-small`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Wired to a LineChart: The parent keeps the range and slices the series for the chart above. Drag the window or a handle and the chart shows only that stretch.
- At least a week: minSpan keeps the window from getting shorter than seven points. It starts on the full range, so Reset looks dimmed.
- Labels made from the index: With no labels array, formatLabel turns each position into text. Here each point is half an hour.

Source: src/molecules/ChartRangeBrush.tsx
