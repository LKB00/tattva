# StatTile
One big number with how it changed, an optional tiny trend line and an optional limit.
Status: stable. Page: https://lkb00.github.io/tattva/#component-stat-tile
StatTile shows a name, a big number and how much it changed. The change has an arrow, a plus or minus, and the word "better" or "worse", so color is never the only clue. You say which direction is good, so a drop in wait time reads as good. Amber shows only when a person has to act.
## When to use it

One headline number with how it changed. The change says "better" or "worse" in words, and you choose which direction is good, so a drop in wait time reads as good news.

## Use it for

- A row of the few numbers that matter most, above the charts.
- A number with its change since the last period.
- A number measured against a limit or target, shown on a small scale.

## Not for

- A change over time that people need to read point by point: use `line-chart`
- Comparing several amounts: use `bar-chart`
- How much of an allowance is used or left: use `usage-meter`

## Anatomy

- Name
- Action chip
- Big number
- Trend line
- Change
- Detail line
- Limit scale

## Do

- Say which direction is good on every tile, so lower-is-better numbers read correctly.
- Say what the change is compared to, such as the previous 7 days.
- For rates from small groups, show the range or group size in the detail line.
- Put one row of tiles above the charts for the numbers that matter most.

## Avoid

- Don't use amber for a number that just got worse. Amber means a person must act.
- Don't rely on color for the change. The arrow, the plus or minus and the word "better" or "worse" carry the meaning.
- Don't draw a chart with one bar when a tile says it.
- Don't add labels to the trend line. The tile's number and change say it.

## On a phone

- The tile fills the width of its container and the value breaks onto a new line instead of overflowing.
- The sparkline stays at its own size on the right and the text on the left shrinks first.
- Nothing in the tile needs hover or a tap.

## Accessibility: built in

- Each tile is a group named by its label.
- Screen readers hear the change as a direction word, such as "up", then the amount and "better" or "worse".
- The arrow is hidden from screen readers. Color only repeats what the words say.
- The limit scale is a meter, read with the value and the limit's label.

## Accessibility: what you need to do

- Set goodDirection on every tile where lower is better, or a drop is called "worse".
- Say what the change is compared to in versus, such as "vs previous 7 days".
- Pass a trend line with decorative set, so screen readers do not hear the numbers twice.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Metric name in sentence case, without a trailing colon. |
| value (required) | `string` |  | Formatted value, for example 1.24 s or $4.2K. |
| serif | `boolean` |  | Sets the value in the display style. |
| delta | `StatDelta` |  | text (signed, with unit), direction (up, down or flat) and an optional versus period. |
| goodDirection | `"up" \| "down" \| "neutral"` | `"up"` | Which direction of change is an improvement. Use down for latency, cost and error rate. Neutral shows no better or worse word. |
| detail | `string` |  | Visible line under the value, such as an interval and sample size. |
| spark | `ReactNode` |  | Slot for a Sparkline. Pass it with decorative set. |
| threshold | `StatThreshold` |  | value, max, at and label. Draws a thin scale with a tick at the threshold. |
| needsAction | `boolean` |  | Shows the amber chip and turns the threshold fill amber. Use only when a person has to act. |
| actionText | `string` | `"Needs review"` | Text of the amber chip. |
| className | `string` |  | Extra classes on the tile. |

## States

- better: When the delta direction matches goodDirection, the change is shown in green with the word better.
- worse: When the delta direction is the opposite of goodDirection, the change is shown in red with the word worse.
- flat or neutral: A flat change, or goodDirection set to neutral, is shown in the muted colour with no verdict.
- needs action: Pass needsAction to add an attention tag and turn the threshold bar to the warning colour.
- threshold: Pass threshold to show a meter bar with a marker at the limit and its label below.

## Tokens

- `--success-fg`
- `--danger-fg`
- `--attention-soft`
- `--attention-fg`
- `--fg`
- `--fg-muted`
- `--border`
- `--radius-control`
- `--radius-card`

## Examples

### A row of shop numbers

Seven tiles for a shop dashboard. For wait time, sales cost and refunds, lower is better. The happy-customer tile shows its range and sample size.

```tsx
<div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <StatTile label="Typical wait" value="28 min" goodDirection="down" delta={{ text: "-4.1%", direction: "down", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Typical wait" data={[830, 812, 845, 820, 790, 805, 812]} />} />
  <StatTile label="Longest waits" value="77 min" goodDirection="down" delta={{ text: "+6.0%", direction: "up", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Longest waits" data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />} />
  <StatTile label="Time to answer the phone" value="41 s" goodDirection="down" delta={{ text: "-2.8%", direction: "down", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Time to answer the phone" data={[440, 430, 420, 425, 415, 412, 410]} />} />
  <StatTile label="Orders" value="18.4K" goodDirection="neutral" delta={{ text: "+9.2%", direction: "up", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Orders" data={[15.2, 16.1, 15.8, 17.0, 17.6, 18.0, 18.4]} />} />
  <StatTile label="Refunds paid" value="$1,240" goodDirection="down" delta={{ text: "+5.1%", direction: "up", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Refunds paid" data={[980, 1020, 1100, 1130, 1180, 1210, 1240]} />} />
  <StatTile label="Refund rate" value="0.8%" goodDirection="down" delta={{ text: "-0.2 pts", direction: "down", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Refund rate" data={[0.6, 0.7, 0.6, 0.9, 1.1, 1.0, 0.8]} />} />
  <StatTile label="Happy customers" value="92.5%" goodDirection="up" detail="Likely between 88.1% and 95.4%, from 200 customers" delta={{ text: "+1.5 pts", direction: "up", versus: "vs last survey" }} />
</div>
```

### A limit and a call to act

The tick marks the limit on a thin scale. The amber chip and amber fill are for when a person has to review.

```tsx
<div className="grid w-full gap-3 sm:grid-cols-2">
  <StatTile label="Longest waits" value="77 min" goodDirection="down" delta={{ text: "+6.0%", direction: "up", versus: "vs previous 7 days" }} threshold={{ value: 77, max: 100, at: 90, label: "Limit 90 min" }} />
  <StatTile label="Refund rate" value="2.4%" goodDirection="down" needsAction actionText="Needs review" delta={{ text: "+1.6 pts", direction: "up", versus: "vs previous 7 days" }} threshold={{ value: 2.4, max: 4, at: 2, label: "Limit 2%" }} />
</div>
```

### A headline number

Use the larger style for the one tile that leads a page.

```tsx
<div className="w-full max-w-xs">
  <StatTile serif label="Happy customers" value="92.5%" detail="Likely between 88.1% and 95.4%, from 200 customers" />
</div>
```

Source: src/molecules/StatTile.tsx
