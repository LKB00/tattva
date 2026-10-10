# Money
An amount that code worked out, in mono with tabular figures, in rupees by default.
Status: stable. Page: https://lkb00.github.io/tattva/#component-money
Money shows a number in a mono face with figures of equal width, so it looks calculated and not guessed by an AI. It formats with the locale, so rupees read as ₹2,34,000. It can use lakh and crore short forms, a sign, and an arrow with the up or down colour. Mono is a smaller sibling for dates and ids.
## When to use it

Marks a figure as something code counted. Mono and a dotted underline say it is exact, and a hidden note tells screen readers the same.

## Use it for

- Refund amounts, totals and balances.
- A change in an amount, with an arrow and a sign.
- A date or id that code computed (use Mono).

## Not for

- A headline number with its trend: use `stat-tile`
- Many amounts in rows and columns: use `data-table`
- A trend over time: use `sparkline`

## Anatomy

- Arrow (optional)
- Sign
- Amount
- Hidden note (optional)

## Do

- Use it for every figure that code calculated.
- Pass the currency and locale when the money is not rupees.
- Use Mono for dates and ids that were computed.

## Avoid

- Do not use it for numbers the AI guessed.
- Do not use direction colours without the arrow and sign. Direction adds both for you.
- Do not print a raw number next to a currency sign yourself.

## On a phone

- It is plain text in a monospace font with no fixed width, so it takes the size of the text around it.
- Use the compact prop for tight spaces, which gives lakh and crore forms for INR.
- The note that code calculated the amount is read by screen readers only, so a phone shows just the dotted underline.

## Accessibility: built in

- The amount is plain text, so it is read as written.
- With direction, the arrow is hidden and a hidden word Up or Down is read before the sign and amount.
- A negative amount uses the true minus sign.
- The calculated note is linked with aria-describedby and is not shown as a tooltip.
- A value that is not a number shows an em dash, never NaN.

## Accessibility: what you need to do

- Use direction only when the sign and arrow add meaning, and do not rely on its colour alone.
- Do not use Money for amounts the AI estimated. The mono look promises that code worked it out.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `number` |  | The amount. A value that is not a finite number shows an em dash. |
| currency | `string` | `"INR"` | ISO 4217 currency code. |
| locale | `string` | `"en-IN"` | Locale for grouping and symbols. |
| compact | `boolean` | `false` | Short form. Lakh (L) and crore (Cr) for INR, K and M through Intl for others. |
| showSign | `boolean` | `false` | Prefix + for a positive number. A negative number always shows the true minus sign. |
| direction | `boolean` | `false` | For a non-zero number, adds an arrow, a sign and the up or down text colour. |
| calculated | `boolean \| string` |  | Adds a dotted underline and a hidden note. A string replaces the default phrase Calculated by code. |
| className | `string` |  | Classes for the span. |

## States

- not a number: A value that is not a finite number shows an em dash, never NaN.
- negative: A negative amount shows the true minus sign before the currency.

## Tokens

- `--font-mono`
- `--up-fg`
- `--down-fg`
- `--fg-subtle`

## Examples

### Rupees

Formatted with the en-IN locale, so groups follow the lakh pattern.

```tsx
<p className="text-fg">Refund of <Money value={234000} /> and a fee of <Money value={2340.5} />.</p>
```

### Compact

Lakh and crore for rupees. Other currencies use K, M and so on.

```tsx
<p className="text-fg"><Money value={120000} compact /> · <Money value={34000000} compact /> · <Money value={1250} currency="USD" locale="en-US" compact /></p>
```

### Signed, with direction

The arrow and the sign carry the meaning. The colour is extra.

```tsx
<p className="flex gap-4 text-fg"><Money value={5400} direction /> <Money value={-1200} direction /> <Money value={0} direction showSign /></p>
```

### Calculated note

A dotted underline for sighted people, and the phrase Calculated by code for screen readers.

```tsx
<p className="text-fg">Total <Money value={234000} calculated /> and <Mono>27 Oct 2026</Mono></p>
```

Source: src/atoms/Money.tsx
