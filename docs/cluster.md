# Cluster
A row of items that wraps to the next line when it runs out of room.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-cluster
Cluster puts items in a row and wraps them to the next line when space runs out. Use it for tags, rows of buttons and small details. It uses the same spacing as Stack.
## When to use it

A row of small things that wraps onto the next line instead of running off the edge. Nothing is hidden or squeezed, so tags and buttons stay readable at any width.

## Use it for

- A set of tags or filters.
- A row of buttons, such as Cancel and Send.
- Small details in one line, such as a file count and a date.
- A label at one end and an action pushed to the other.

## Not for

- Items that go top to bottom: use `stack`
- Form fields or cards that should line up in columns: use `grid`

## Anatomy

- Outer box
- Items
- Push apart

## Do

- Use it for groups that can wrap, such as tags and filters.
- Keep the space smaller than the space between groups.
- Use a real list for a set of related links or tags.
- Line up the text bottoms when text sizes differ.

## Avoid

- Do not use it for form columns. Use Grid.
- Do not force one line and hide what does not fit.
- Do not count on the order changing when items wrap.
- Do not put long paragraphs inside as items.

## On a phone

- Items wrap onto the next line when they do not fit, so a row of chips or actions never runs off a phone screen.
- The gap stays the same, and buttons inside a wrapped row keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- It adds no meaning of its own: it renders the element you choose.
- As a ul or ol it is still announced as a list, even though the bullets are removed.
- Items wrap to the next line instead of overflowing, so nothing needs sideways scrolling when text is zoomed.
- Wrapping keeps the order of your code, so screen readers and the keyboard follow the same order.

## Accessibility: what you need to do

- Set as to ul or ol when the items are a list, and wrap each item in li.
- Set as to nav when the row is a set of links for moving around.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| gap | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8` | `2` | Gap step on the 4px grid, scaled by --density. |
| align | `"start" \| "center" \| "end" \| "baseline"` | `"center"` | Cross-axis alignment. |
| justify | `"start" \| "center" \| "end" \| "between"` | `"start"` | Main-axis distribution. |
| as | `"div" \| "ul" \| "ol" \| "nav" \| "section" \| "header" \| "footer"` | `"div"` | Element to render. |

## Tokens

- `--density`

## Examples

### Tags that wrap

```tsx
<Cluster gap={2}>
  <Badge>Draft</Badge>
  <Badge>Shared</Badge>
  <Badge>Reviewed</Badge>
</Cluster>
```

### Push apart

Push the main button to the far end while the rest stay at the start.

```tsx
<Cluster justify="between" className="w-full">
  <span>3 files</span>
  <Button size="sm">Send</Button>
</Cluster>
```

Source: src/atoms/Cluster.tsx
