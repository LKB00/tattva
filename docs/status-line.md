# StatusLine
One quiet line of status for the top of a screen, such as Case, Flipkart, an amount and Waiting.
Status: stable. Page: https://lkb00.github.io/tattva/#component-status-line
StatusLine joins a few short pieces with a middle dot and keeps them on one line. One piece can be marked as the current state, which stays in normal ink while the others are muted. When there is not enough room, the line cuts off with an ellipsis instead of wrapping.
## When to use it

Tells the person where they are and what state it is in, in one line that never takes more than one row.

## Use it for

- The top of a screen, as a sticky header child.
- A case line with a name, an amount and its state.
- A breadcrumb-like summary that does not need links.

## Not for

- A single state label inside a row: use `badge`
- Moving between sections: use `tabs`

## Anatomy

- Hidden Status prefix
- Items
- Separators

## Do

- Keep each item to a word or two, with the state last.
- Put the line in a sticky header so it stays in view.
- Give the width from the parent. It shrinks and truncates by itself.

## Avoid

- Do not let it wrap to two lines.
- Do not use it to announce changes. It is a plain element, not a live region.
- Do not use colour to show the state. The current item is marked by weight and aria-current.

## On a phone

- It stays on one line and cuts the end with an ellipsis, so on a phone the last items can disappear.
- Nothing shows the cut text, so put the current state early or keep the items short.
- It has no tap action.

## Accessibility: built in

- It is a group named by label, with a hidden Status: prefix read first.
- It is not a live region, so it does not speak on every render.
- The separator dots are hidden from screen readers.
- The current item is marked with aria-current and a heavier weight, not colour alone.

## Accessibility: what you need to do

- Keep it short. A truncated item is cut off visually, and the full text is still read aloud.
- Do not put links or buttons in the items that you need people to find. Use real navigation for that.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `ReactNode[]` |  | The pieces of the line, in order. A middle dot is drawn between them. |
| current | `number` |  | Index of the current state. It keeps the normal ink, turns medium weight and is marked aria-current. The other items are muted. |
| label | `string` | `"Status"` | Accessible name of the group. |
| className | `string` |  | Classes for the line. |

## States

- selected: Set with the current prop.
- truncated: When the items do not fit the width, the line is cut off with an ellipsis and stays on one row.

## Tokens

- `--fg`
- `--fg-muted`
- `--fg-subtle`

## Examples

### With a current item

The current state keeps the normal ink and a heavier weight. The others are muted.

```tsx
<StatusLine items={["Case", "Flipkart", "₹2,340", "Waiting"]} current={3} />
```

### Truncating in a narrow box

The line stays on one row and ends with an ellipsis when it does not fit.

```tsx
<div className="w-48 border border-line p-2">
  <StatusLine items={["Case", "Flipkart Internet Private Limited", "₹2,340", "Waiting for a reply"]} current={3} />
</div>
```

### No current item

Without current, every item is in normal ink.

```tsx
<StatusLine label="Order" items={["Order 4821", "Aero 12 blender", "Delivered 6 Sep"]} />
```

Source: src/atoms/StatusLine.tsx
