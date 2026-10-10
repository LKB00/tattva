# OptionChain
Calls on the left, puts on the right, strike in the middle, as a real table.
Status: stable. Page: https://lkb00.github.io/tattva/#component-option-chain
OptionChain shows the prices and numbers for each strike. The row nearest the spot price is marked. Cells in the money get a quiet grey tint and a small diamond, not a gain or loss colour. On a phone the table scrolls sideways inside its own region while the header and the strike stay in view.
## When to use it

Lets a person scan strikes and tap one price to start an order.

## Use it for

- Choosing a strike and a side for an order.
- Comparing open interest and implied volatility across strikes.
- A small chain in a narrow phone screen.

## Not for

- A general table of records: use `data-table`
- A single price with a change: use `money`

## Anatomy

- Expiry and spot line
- Calls and Puts group headers
- Column headers
- Strike column
- Value cells
- Price buttons

## Do

- Keep Price in the columns when you pass onPick.
- Show the expiry and the spot price.
- Use a maxHeight for long chains.
- Pass null for a missing value and let the dash show.

## Avoid

- Do not use gain and loss colours to mark in the money.
- Do not hide the scroll region on a phone. It is the way to reach the far columns.
- Do not place an order from onPick. Open an order ticket instead.
- Do not pass more columns than the width can hold without scrolling in mind.

## On a phone

- The chain scrolls both ways inside its own box, because the table is as wide as its columns. The strike column stays pinned and the header rows stay at the top.
- Price buttons grow to 44px by 44px on touch screens, so rows get taller there.
- Show few columns on a phone, since each extra column adds to the sideways scroll.

## Accessibility: built in

- It is a real table with a caption, two header rows and a row header for each strike.
- The scroll region has a name and can be reached by keyboard, so the sideways scroll works without a mouse.
- The nearest strike carries the visible mark ATM and the words At the money for screen readers.
- In the money cells say so in words for screen readers beside the tint and the diamond.
- Price buttons have names such as Call 24,350, price 142.50. Up and Down arrows move between rows in the same column. The chosen one is aria-pressed.
- Values are right aligned with tabular figures. A missing value is a dash.

## Accessibility: what you need to do

- Give it an ariaLabel that names the chain, such as NIFTY option chain.
- When a price is picked, say what was picked in text. Do not rely on the highlight.
- Show the expiry in expiryLabel so the table is not read out without it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| rows (required) | `{ strike: number; call: ChainSide; put: ChainSide }[]` |  | One row per strike. ChainSide has ltp (required, may be null) and optional oi, oiChange, iv, delta. |
| spot (required) | `number` |  | Price of the underlying. The nearest strike is marked, and calls below it and puts above it are in the money. |
| columns | `("oi" \| "oiChange" \| "iv" \| "delta" \| "ltp")[]` | `["oi", "iv", "ltp"]` | Columns on each side, in order for calls. Puts show them mirrored. |
| onPick | `(pick: { side: "call" \| "put"; strike: number; ltp: number }) => void` |  | Makes price cells buttons. Called with the side, strike and price. |
| selected | `{ side: "call" \| "put"; strike: number }` |  | Marks one price cell as chosen. |
| expiryLabel | `string` |  | Shown above the table beside the spot price. |
| ariaLabel (required) | `string` |  | Accessible name of the scrolling region. |
| maxHeight | `number \| string` |  | Height limit of the scrolling region. The header stays in view. |
| className | `string` |  | Extra classes for the outer box. |

## States

- selected: The price cell matching selected is filled with the accent and set aria-pressed.
- at the money: The row with the strike nearest spot gets a strong border, the mark ATM, and the words At the money for screen readers.
- in the money: Calls below spot and puts above spot get a grey tint and a small diamond, with the words In the money for screen readers.
- empty value: A null or missing value shows a dash. A null price is plain text, not a button.
- scrolling: The region scrolls both ways. The header rows stay at the top and the strike column stays at the edge.
- hover: A price button shades when the pointer is over it.
- focus: The scroll region and each price button show the focus ring. Up and Down arrows move between rows in the same column.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--text`
- `--text-muted`
- `--accent`
- `--hover`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Pick a price: With onPick the price cells are buttons. The chosen one is marked and written out under the table.
- More columns: Choose columns and their order. Puts mirror the order so Price sits next to the strike on both sides. A missing value shows a dash.
- On a phone width: In a 360px box the table scrolls sideways in its own region. maxHeight keeps the header in view when rows scroll.

Source: src/organisms/OptionChain.tsx
