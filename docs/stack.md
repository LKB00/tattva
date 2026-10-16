# Stack
Stacks things top to bottom with an even space between them.
Status: stable. Page: https://lkb00.github.io/tattva/#component-stack
Stack puts items in a column with the same space between each. A tighter area shrinks the space on its own. Use it instead of adding space to each item by hand.
## When to use it

Puts things in a column with one even gap between them. The gap belongs to the stack, not to each item, so spacing stays consistent and shrinks in tighter areas.

## Use it for

- A column of cards, paragraphs or form fields that need the same space between them.
- A list of items, rendered as a real list element.
- Groups inside groups, with a smaller gap inside each group.

## Not for

- Items that sit side by side in a row: use `cluster`
- Items laid out in columns: use `grid`
- Limiting how wide a page column gets: use `container`

## Anatomy

- Outer box
- Items
- Push apart

## Do

- Use the space setting between items, not extra margins.
- Leave more space between groups than inside them.
- Use a real list when the items are a list.
- Put stacks inside stacks for groups, with less space inside.

## Avoid

- Do not add margins to items to adjust spacing.
- Do not use spacing outside the set sizes.
- Do not space unrelated areas the same as related items.
- Do not use Stack for a row. Use Cluster.

## On a phone

- Items stack in one column and fill the width of the container.
- The gap is the same on a phone, unless the area is set to compact density, which makes it 20% smaller.

## Accessibility: built in

- It adds no meaning of its own: it renders the element you choose.
- As a ul or ol it is still announced as a list, even though the bullets are removed.
- Items keep the order they have in your code, so screen readers and the keyboard follow what people see.

## Accessibility: what you need to do

- Set as to ul or ol when the items are a list, and wrap each item in li.
- Set as to main, nav or section when the stack is a page area, so screen reader users can jump to it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| gap | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8` | `4` | Step on the 4px grid, so 1 is 4px and 8 is 32px. Multiplied by --density. |
| as | `"div" \| "section" \| "article" \| "ul" \| "ol" \| "nav" \| "header" \| "footer" \| "main" \| "aside"` | `"div"` | Element to render. List elements get their markers and padding reset. |
| className / style | `string / CSSProperties` |  | Merged with the component's own classes and gap. |

## Tokens

- `--density`

## Examples

### Normal space

The default space between items.

```tsx
<Stack gap={4}>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</Stack>
```

### Tighter space

The same space shrinks a little in a tight area. This is a proposal.

```tsx
<div data-density="compact">
  <Stack gap={4}>
    <p>First</p>
    <p>Second</p>
  </Stack>
</div>
```

### As a list

Use a list element when the items are a list.

```tsx
<Stack as="ul" gap={2}>
  <li>Search</li>
  <li>Read</li>
</Stack>
```

Source: src/atoms/Stack.tsx
