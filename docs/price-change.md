# PriceChange
A signed change with an arrow, as an amount, a percent or both.
Status: stable. Page: https://lkb00.github.io/tattva/#component-price-change
PriceChange shows how far a price moved. It draws an arrow, a plus or a true minus sign, and the number. Up uses the up colour and down uses the down colour, but the arrow and the sign carry the meaning. When nothing changed it shows a dash.
## When to use it

Shows the size and direction of a move in a way that does not depend on colour.

## Use it for

- The change beside a price in a list or a ticker.
- A day change in a table column.
- A percent move on its own.

## Not for

- A headline number with its comparison text: use `stat-tile`
- An amount that is not a change: use `money`
- Many changes in rows and columns: use `data-table`

## Anatomy

- Hidden direction word
- Arrow
- Sign
- Amount
- Percent

## Do

- Pass the real signed change and let the part add the sign.
- Use percent only in tight spaces.
- Set flatLabel when a zero change needs a word.

## Avoid

- Do not show a change as colour alone.
- Do not type the arrow or the minus yourself.
- Do not use it for a total. Use Money.

## On a phone

- It never wraps and keeps the arrow and the numbers on one line, so make sure its container is wide enough.
- It has no hover or tap behaviour, and the direction is shown with an arrow and words, not colour alone.

## Accessibility: built in

- The words Up, Down or Unchanged are read before the numbers.
- The arrow is an svg hidden from screen readers.
- Direction shows as an arrow and a sign, with the colour as extra. Down uses the true minus sign.
- A value that is not a finite number shows an em dash, never NaN.

## Accessibility: what you need to do

- Pass the change as a signed number. Do not add your own plus or minus signs.
- Say what the change is measured against nearby, for example Today.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| change (required) | `number` |  | The change as an absolute amount. Its sign sets the direction. If it is 0, the sign of percent is used. |
| percent | `number` |  | The change in percent, for example 1.14. Shown with a percent sign. |
| currency | `string` | `"INR"` | ISO 4217 currency code for the amount. |
| locale | `string` | `"en-IN"` | Locale for grouping and symbols. |
| decimals | `number` | `2` | Decimal places for the amount and the percent. |
| format | `"both" \| "percent" \| "amount"` | `"both"` | Which numbers to show. Both shows the amount and the percent in brackets. |
| flatLabel | `string` |  | Shown instead of the numbers when the change is flat, next to a dash. |
| className | `string` |  | Classes for the span. |

## States

- flat: When both numbers are zero, a dash replaces the arrow and flatLabel replaces the numbers if it is set.
- not a number: If no shown number is finite, the part shows an em dash.

## Tokens

- `--up-fg`
- `--down-fg`
- `--fg-muted`

## Examples

### Up, down and flat

The arrow and the sign show the direction. Zero shows a dash and a label.

```tsx
<p className="flex flex-wrap gap-4 text-body leading-5"><PriceChange change={32.5} percent={1.14} /> <PriceChange change={-18.4} percent={-0.47} /> <PriceChange change={0} percent={0} flatLabel="No change" /></p>
```

### Percent only

Use the percent format when space is tight.

```tsx
<p className="flex gap-4 text-body leading-5"><PriceChange change={32.5} percent={1.14} format="percent" /> <PriceChange change={-18.4} percent={-0.47} format="percent" /></p>
```

### In a table row

A symbol, a price and a change on one row. The column lines up because the figures are tabular.

```tsx
<div className="grid w-full max-w-sm grid-cols-[1fr_auto_auto] items-baseline gap-x-4 gap-y-2 text-body leading-5 text-fg">
  <span>TCS</span><span className="font-mono tabular-nums">3,921.60</span><PriceChange change={-18.4} format="amount" />
  <span>ITC</span><span className="font-mono tabular-nums">462.30</span><PriceChange change={3.1} format="amount" />
</div>
```

Source: src/atoms/PriceChange.tsx
