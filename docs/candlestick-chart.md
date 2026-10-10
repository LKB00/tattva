# CandlestickChart
Price candles for open, high, low and close. Up and down are told apart by shape and by words, not by colour alone.
Status: stable. Page: https://lkb00.github.io/tattva/#component-candlestick-chart
CandlestickChart draws one candle for each period. A thin line shows the highest and lowest price. The box shows where the price opened and closed. Candles that closed at or above their open are hollow, and candles that closed lower are filled. You can tab to the chart and use the arrow keys to read one candle at a time.
## When to use it

Shows how a price moved inside each period, so people can see the range and the direction at once.

## Use it for

- A share, coin or any price with open, high, low and close for each day or minute.
- A live price where the last candle keeps changing: turn on streaming.
- Showing how much was traded under each candle: turn on volume.

## Not for

- A single trend line with one value per day: use `line-chart`
- A trend in a very small space: use `sparkline`
- Comparing amounts between groups: use `bar-chart`

## Anatomy

- Side scale with 4 to 6 marks
- Thin grid lines
- Candles: thin line and box
- Volume strip (optional)
- Bottom labels
- Guide line and pop-up

## Do

- Put it in a ChartFrame with a summary and the table from candlestickTable.
- Keep up as hollow and down as filled, so direction never depends on colour alone.
- Turn on streaming when the last candle can still change.
- Say the currency or unit in the ChartFrame subtitle.

## Avoid

- Don't use it for one value per day. Use a line chart.
- Don't squeeze hundreds of candles into a narrow space. Pass fewer candles or a longer period.
- Don't reverse the meaning of hollow and filled in one product.

## On a phone

- The chart measures its container and redraws at that width.
- Touch or drag across the chart to read a candle. Vertical swipes still scroll the page, and the tooltip stays until you tap elsewhere.
- The tooltip flips to the left of your finger past the middle of the chart.
- Give the chart a short date range on a phone, because every candle needs room to be seen.

## Accessibility: built in

- You can tab to the chart. Left and Right move between candles, Home and End jump to the ends, and Escape clears.
- Each step is read out as time, open, high, low, close, up or down with the size of the change, volume, and "provisional" when it applies.
- Up candles are hollow with a thin line and down candles are filled, so direction does not depend on colour.
- The pop-up and the table say "up" or "down" in words.
- The pop-up is hidden from screen readers, because the same values are read out as you move.
- Hovering or tapping a candle shows the same pop-up.

## Accessibility: what you need to do

- Give it an ariaLabel that says what the price is and over what time.
- Put it in a ChartFrame with a summary in words, and pass candlestickTable to the table prop.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| data (required) | `{ t: string; o: number; h: number; l: number; c: number; v?: number }[]` |  | One entry per candle, oldest first. t is a label such as a date or time. o, h, l and c are open, high, low and close. v is the volume. |
| height | `number` | `280` | Plot height in px, including the volume strip and the bottom labels. Minimum 160. |
| volume | `boolean` |  | Adds a thin volume strip under the prices on the same x scale. Needs v on the candles. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats prices on the scale, in the pop-up and in the table. |
| ariaLabel (required) | `string` |  | Name for the chart region. |
| streaming | `boolean` |  | The last candle may still change. It gets a dashed outline and is called provisional. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- streaming: Set with the streaming prop.
- focus: A visible ring appears around the plot when you tab to it. The last candle is chosen at once, with its guide line and pop-up.
- hover: Moving the pointer over the plot shows the guide line and pop-up for the candle under it. The pop-up hides when the pointer leaves, unless the chart has focus.
- selected candle: Left, Right, Home and End move to a candle. Its guide line, pop-up and the volume bar get stronger, and its details are read out. Escape clears it.
- no data: With an empty data list the chart draws only the empty axes.
- no volume: With volume on but no v values on any candle, the strip is left out.

## Tokens

- `--up`
- `--down`
- `--up-fg`
- `--down-fg`
- `--chart-grid`
- `--chart-axis`
- `--surface`
- `--fg`
- `--fg-muted`
- `--focus-ring`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Forty days with volume and a table: The usual setup. The frame adds a title, a summary and a View as table button.
- A short day: With few candles each one is wider and every label fits. No volume strip.
- A candle that is still forming: Press Start. The last candle updates in place and has a dashed outline. A new candle is added every few seconds.

Source: src/organisms/CandlestickChart.tsx
