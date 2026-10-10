# PayoffChart
Shows the profit or loss at the end for a position as the price moves, with break-even prices and best and worst outcomes labelled.
Status: stable. Page: https://lkb00.github.io/tattva/#component-payoff-chart
PayoffChart draws a line for profit or loss at each end price. Above the zero line is profit and below it is loss. The loss area is also hatched, so it can be told apart without colour. It marks where you break even and labels the most you can make and lose, or says Unlimited. Give it ready points, or give it option legs and it works the line out.
## When to use it

Lets someone see what could happen to a position before they take it, and where it starts to make or lose money.

## Use it for

- An option or a spread: a long call, a bull call spread, an iron condor.
- A share position, alone or combined with options.
- Any result that depends on one price, when you already have the points.

## Not for

- A price history over time: use `line-chart`
- Open, high, low and close for each day: use `candlestick-chart`
- One number with a trend: use `stat-tile`

## Anatomy

- Side scale for profit and loss
- Zero line
- Profit and loss line
- Tinted profit area
- Hatched loss area
- Break-even marks and labels
- Max profit and max loss labels
- Current price marker
- Bottom price labels

## Do

- Say "at expiry" and the unit in the ChartFrame subtitle.
- State the break-even prices and the most you can make or lose in the summary.
- Use payoffAtExpiry(legs, spots) when your app needs the same numbers elsewhere.
- Pass the current price as spot so people see where they are now.

## Avoid

- Don't use it to promise a result. It shows the end value only, not the chance of reaching it.
- Don't leave out the premium on option legs. The line would show the wrong break-even.
- Don't hide the table view. Some people need the numbers.

## On a phone

- The chart measures its container and redraws at that width, so it fills a phone screen.
- Touch or drag across the chart to read the profit or loss at a price. Vertical swipes still scroll the page, and the tooltip stays until you tap elsewhere.
- The tooltip flips to the left of your finger past the middle of the chart.

## Accessibility: built in

- You can tab to the chart. Left and Right move between prices, PageUp and PageDown jump ten steps, Home and End go to the ends, and Escape clears.
- Each step is read out as the price and then profit, loss or break even with the amount.
- The loss area has a diagonal hatch as well as a tint, so profit and loss do not depend on colour.
- Break-even prices, max profit and max loss are written as text on the chart.
- Unlimited is only said for the right edge, because a price cannot go below zero.
- The pop-up is hidden from screen readers, because the same values are read out as you move.

## Accessibility: what you need to do

- Give it an ariaLabel that names the position.
- Put it in a ChartFrame with a summary that states the break-even prices and the most you can make or lose, and pass payoffTable to the table prop.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| points | `{ spot: number; pnl: number }[]` |  | Ready-made points: the price and the profit or loss at that price. Use this or legs. |
| legs | `PayoffLeg[]` |  | Positions to work the result out from. Each has kind (call, put or stock), side (buy or sell), strike, premium and qty. Used when points is not given. |
| spotRange | `[number, number]` |  | Price range to draw when working from legs. Defaults to a band around the strikes. |
| steps | `number` | `120` | Number of steps across the range when working from legs. Every strike is added as an extra point. |
| spot | `number` |  | Current price. Drawn as a labelled dashed line when it is inside the range. |
| formatValue | `(n: number) => string` | `formatNumber` | Formats prices and amounts everywhere in the chart. |
| ariaLabel (required) | `string` |  | Name for the chart region. |
| height | `number` | `260` | Plot height in px. Minimum 180. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- focus: A visible ring appears around the plot when you tab to it. The middle price is chosen at once, with its guide line and pop-up.
- hover: Moving the pointer over the plot shows the guide line and pop-up for the nearest price. The pop-up hides when the pointer leaves, unless the chart has focus.
- selected price: Left, Right, PageUp, PageDown, Home and End move to a price. A dot sits on the line and the profit or loss is read out. Escape clears it.
- empty: With no points and no legs, only the empty axes are drawn.
- price marker hidden: If spot is outside the range, the current price line and its label are not drawn.

## Tokens

- `--up-soft`
- `--down-soft`
- `--up-fg`
- `--down-fg`
- `--down`
- `--chart-1`
- `--chart-grid`
- `--chart-axis`
- `--surface`
- `--fg`
- `--fg-muted`
- `--focus-ring`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A long call: You pay 5 for the right to buy at 100. The most you lose is what you paid. The profit has no top. The dashed line is today's price.
- A bull call spread: Built from two legs. Selling the higher call caps the profit, so it says a number instead of Unlimited.
- An iron condor: Four legs. Profit only between the two inner strikes, with two break-even prices and both ends capped.

Source: src/organisms/PayoffChart.tsx
