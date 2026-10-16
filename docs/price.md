# Price
A live price that tints briefly and shows an arrow for its last change.
Status: stable. Page: https://lkb00.github.io/tattva/#component-price
Price shows one number that changes over time. When the value changes it tints green or red for a moment and shows an arrow for the direction. The arrow stays until the next change, so the cue never depends on the tint. Figures use equal widths so the number does not jump.
## When to use it

Shows a number that keeps changing, and makes each change easy to notice without relying on colour.

## Use it for

- A share price or rate that updates while the page is open.
- A live balance or quote inside a card or a table row.
- Any number where the last move up or down matters.

## Not for

- A fixed amount that does not change: use `money`
- A headline number with a trend and a comparison: use `stat-tile`
- The shape of change over time: use `sparkline`

## Anatomy

- Hidden label
- Direction arrow
- Number
- Hidden live region (optional)

## Do

- Give it a label so the number has a name.
- Keep the arrow on. It is the cue that works without colour.
- Set the currency and locale when the price is not in rupees.

## Avoid

- Do not use it for amounts that never change. Use Money.
- Do not turn announce on for every row of a table.
- Do not rely on the tint to show direction.

## On a phone

- It never wraps and keeps the number on one line, so make sure its container is wide enough for the longest price.
- It has no hover or tap behaviour. The brief colour flash on a change is the same on a phone.

## Accessibility: built in

- The number is plain text. The label and the words Up or Down are read before it.
- The arrow is hidden from screen readers. The words Up and Down replace it.
- The tint only shows when motion is allowed. With reduced motion the arrow still shows.
- With announce on, a polite live region repeats the value, at most once every 5 seconds.
- A value that is not a finite number shows an em dash, never NaN.

## Accessibility: what you need to do

- Pass label so the number has a name, for example Reliance price.
- Turn on announce only for one or two key numbers. Many live regions are noisy.
- Do not feed it faster than people can read. Throttle updates where you can.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `number` |  | The price. A value that is not a finite number shows an em dash. |
| currency | `string` | `"INR"` | ISO 4217 currency code. |
| locale | `string` | `"en-IN"` | Locale for grouping and symbols. |
| decimals | `number` | `2` | Number of decimal places. |
| showDirection | `boolean` | `true` | Shows an arrow before the number for the direction of the last change. It stays until the next change. |
| flash | `boolean` | `true` | Tints the background for about 600 ms on a change. Only when the person allows motion. |
| announce | `boolean` | `false` | Announces the new value in a hidden polite live region, at most once every 5 seconds. |
| label | `string` |  | Accessible name, such as Reliance price. Read before the number. |
| className | `string` |  | Classes for the span. |

## States

- first render: No arrow and no tint show until the value changes for the first time.
- flashing: For about 600 ms after a change the background tints green or red. It is skipped with reduced motion.
- direction held: The arrow for the last change stays until the next change.
- not a number: A value that is not a finite number shows an em dash, never NaN.

## Tokens

- `--up-soft`
- `--down-soft`
- `--up-fg`
- `--down-fg`
- `--dur-slow`

## Examples

### Simulated feed

A random walk every 1.2 seconds. Press Start to see the tint and the arrow.

```tsx
function PriceFeedDemo() {
  const [running, setRunning] = useState(false);
  const [value, setValue] = useState(2480.5);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setValue((v) => Math.round((v + (Math.random() - 0.5) * 12) * 100) / 100), 1200);
    return () => clearInterval(id);
  }, [running]);
  return (
    <div className="flex items-center gap-4">
      <Price value={value} label="Sample price" className="text-title-sm leading-8 text-fg" />
      <Button variant="secondary" size="sm" onClick={() => setRunning(!running)}>{running ? "Stop feed" : "Start feed"}</Button>
    </div>
  );
}
```

### Static

No change yet, so there is no arrow and no tint. It never flashes on first render.

```tsx
<p className="text-title-xs leading-7 text-fg"><Price value={2480.5} label="Sample price" /></p>
```

### Announce on

Screen readers hear the new value in a polite message, at most once every 5 seconds.

```tsx
function PriceAnnounceDemo() {
  const [value, setValue] = useState(1312.4);
  return (
    <div className="flex items-center gap-4">
      <Price value={value} announce label="Sample price" className="text-title-xs leading-7 text-fg" />
      <Button variant="secondary" size="sm" onClick={() => setValue(Math.round((value + (Math.random() - 0.4) * 20) * 100) / 100)}>Change price</Button>
    </div>
  );
}
```

### Dollars, no arrow

Another currency and locale, with the arrow and the tint turned off.

```tsx
<p className="text-title-xs leading-7 text-fg"><Price value={182.3} currency="USD" locale="en-US" showDirection={false} flash={false} /></p>
```

Source: src/atoms/Price.tsx
