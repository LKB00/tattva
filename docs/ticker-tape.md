# TickerTape
A looping strip of symbols, prices and changes, with a visible Pause button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ticker-tape
TickerTape scrolls a row of prices to the left in a seamless loop. It stops when it is paused, hovered or has focus inside. A real Pause button sits at the end. With reduced motion it does not move and becomes a row you can scroll by hand.
## When to use it

Gives a glanceable stream of many prices in a small space, while keeping control with the person.

## Use it for

- A strip across the top of a market screen.
- Showing a watchlist when space is tight.

## Not for

- Numbers people must compare or sort: use `data-table`
- One key number with its trend: use `stat-tile`
- The shape of one price over time: use `sparkline`

## Anatomy

- Region
- Item: symbol, price, change
- Second copy (hidden)
- Pause or Play button

## Do

- Keep the Pause button visible.
- Use a list of unique symbols.
- Keep the same data available in a still view.

## Avoid

- Do not remove the button to save space.
- Do not use it as the only place a price appears.
- Do not set a very high speed.

## On a phone

- The strip scrolls by itself and fills the width, with the Pause button fixed at the right edge. The button is 44px on touch screens and shows only its icon below 640px.
- Moving the strip by touch does not pause it, because pausing is tied to a mouse pointer or keyboard focus. Tap the Pause button instead.
- With reduced motion on, the strip stops and can be swiped sideways by hand.

## Accessibility: built in

- It is a region named by label.
- A real button reads Pause ticker or Play ticker.
- It stops while hovered or while focus is inside it.
- With reduced motion it does not move and can be scrolled sideways.
- The second copy is hidden from screen readers and cannot take focus.
- Each change is read as Up, Down or Unchanged, with the numbers.

## Accessibility: what you need to do

- Give it a label such as Market ticker.
- Do not hide the Pause button or put important information only in the strip.
- Offer the same prices somewhere that does not move.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `{ symbol: string; price: number; change: number; percent: number }[]` |  | The items to show, in order. Symbols should be unique. |
| label (required) | `string` |  | Accessible name of the region, such as Market ticker. |
| speed | `number` | `40` | Scroll speed in pixels per second. |
| paused | `boolean` |  | Controlled pause state. Leave out and the strip manages it. |
| onPausedChange | `(paused: boolean) => void` |  | Called when the Pause or Play button is pressed. |
| className | `string` |  | Classes for the region. |

## States

- paused: Pass paused, or press the button. The strip stops and the button reads Play ticker.
- hover: The strip stops while the pointer is over it.
- focus: The strip stops while focus is inside it. The button shows a visible focus ring.
- reduced motion: The strip does not move. It is one row you can scroll sideways, with no second copy.
- empty: With no items the strip stays still and shows only the button.

## Tokens

- `--surface`
- `--line`
- `--hover`
- `--fg`
- `--fg-muted`
- `--up-fg`
- `--down-fg`
- `--dur-fast`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Default: Scrolls at 40 pixels per second. Hover it or tab into it to stop it.
- Paused by the page: Controlled with paused and onPausedChange. The button and the page stay in step.
- With reduced motion: Turn on reduced motion in your system settings and this strip stops moving. It becomes a list you can scroll sideways.

Source: src/molecules/TickerTape.tsx
