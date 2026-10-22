# CardRow
Results side by side: a grid on wide screens, a swipe row on a phone.
Also known as: carousel, card grid, card list, horizontal scroll, slider of cards.
Status: stable. Page: https://lkb00.github.io/tattva/#component-card-row
CardRow lays out two or more ResultCards of the same kind. On wide screens they form a grid that wraps; on a phone they sit in a row that swipes sideways, with the next card peeking in so people can tell there is more. It is a list, so its length is announced.
## When to use it

Lets people compare a handful of results at a glance, on any screen.

## Use it for

- Two to eight results of the same kind.
- Results in a chat answer that must fit a phone.

## Not for

- Many results people filter and sort: use `data-table`
- Pictures the AI made, to pick from: use `variant-grid`

## Anatomy

- Row
- Card

## Do

- Use it for results of the same kind.
- Keep to a handful; link to a full list for more.

## Avoid

- Do not mix kinds of results in one row.
- Do not hide the scroll on a phone; the peeking card shows there is more.

## On a phone

- Cards swipe sideways and snap into place, each at most 85% of the width.
- The row can be scrolled with the keyboard once it has focus.

## Accessibility: built in

- A list with a label, so its length and name are announced.
- On a phone the row takes keyboard focus and scrolls with the arrow keys.

## Accessibility: what you need to do

- Give the row a label that says what is in it, such as Hotels in Paris.
- Keep the cards in the order the answer ranks them.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Names the group for screen readers. |
| children (required) | `ReactNode` |  | Two or more ResultCards with the same fields. |
| minCardWidth | `52 \| 60 \| 72` | `60` | Narrowest a card may get on wide screens, in the spacing scale (60 is 240px). |
| className | `string` |  | Extra classes on the list. |

## States

- wide: A grid that wraps; cards in a row share one height.
- phone: A row that swipes sideways and snaps, with the next card peeking in.
- focus: The row shows a focus ring and scrolls with the arrow keys on a phone.

## Tokens

- `--spacing`
- `--focus-ring`

## Examples

### A row of results

Wraps on wide screens, swipes on a phone.

```tsx
<CardRow label="Hotels in Paris">
  <ResultCard ... />
  <ResultCard ... />
  <ResultCard ... />
</CardRow>
```

### Wider cards

minCardWidth sets how narrow a card may get before the row wraps.

```tsx
<CardRow label="Plans" minCardWidth={72}>...</CardRow>
```

Source: src/molecules/CardRow.tsx
