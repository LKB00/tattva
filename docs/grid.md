# Grid
A grid that changes its number of columns to fit the screen.
Status: stable. Page: https://lkb00.github.io/tattva/#component-grid
Grid sets how many columns show at each screen size. The defaults are 4 columns on phones, 8 on tablets and 12 on large screens. Or set a minimum item width, and the grid fits as many items as it can. The space between items follows the page spacing.
## When to use it

Lays items out in columns that change with the screen size: 4 on phones, 8 on tablets and 12 on large screens. Or give a minimum width, and it fits as many items in a row as there is room for.

## Use it for

- A page layout with a side rail and a main area.
- A set of cards that should fill the row and wrap.
- Content that needs one column on phones and more on large screens.

## Not for

- A row of tags or buttons that should just wrap: use `cluster`
- A single column of items: use `stack`
- Comparing options feature by feature: use `comparison-table`

## Anatomy

- Outer box
- Columns
- Items
- Space between

## Do

- Set columns for page layout and a minimum width for sets of cards.
- Use one or two columns on phones.
- Keep items in reading order.
- Use the page spacing so gaps change with the screen size.

## Avoid

- Do not move items so they look different from reading order.
- Do not give items a fixed width.
- Do not put grids inside grids more than two deep.
- Do not use 12 columns on a phone.

## On a phone

- Below 840px it uses 4 columns by default, so on a phone each item must span columns or it gets a quarter of the width.
- With the min prop it fits as many columns as it can, and a single column on a phone if min is wider than half the screen.
- The gutter is 16px on a phone and grows at 840px.

## Accessibility: built in

- It adds no meaning of its own. The items inside carry it.
- Columns drop as the screen narrows, so content stays readable without sideways scrolling.
- It never reorders items, so screen readers and the keyboard follow the order of your code.

## Accessibility: what you need to do

- Keep the order on screen the same as the order in your code. Do not use column placement to move items around.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| cols | `{ base?: Cols; md?: Cols; lg?: Cols }` | `{ base: 4, md: 8, lg: 12 }` | Column counts per window class. Cols is 1, 2, 3, 4, 6, 8 or 12. |
| min | `string` |  | Minimum item width as a CSS length. Switches to auto-fit and ignores cols. |
| gap | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8` | `--gutter` | Gap step scaled by --density. Omit to use the gutter token (16px, then 24px from md). |

## Tokens

- `--gutter`
- `--density`
- `--breakpoint-md`
- `--breakpoint-lg`

## Examples

### Cards that rearrange

One column on phones, two on tablets, three on large screens.

```tsx
<Grid cols={{ base: 1, md: 2, lg: 3 }} className="w-full">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Grid>
```

### Fits as many as it can

Each item has a minimum width. The number per row follows the space available.

```tsx
<Grid min="9rem" className="w-full">
  <Card>A</Card><Card>B</Card><Card>C</Card><Card>D</Card>
</Grid>
```

### Items that span columns

An item can take up more than one column.

```tsx
<Grid className="w-full">
  <div className="col-span-4 md:col-span-3 lg:col-span-4">Rail</div>
  <div className="col-span-4 md:col-span-5 lg:col-span-8">Content</div>
</Grid>
```

Source: src/atoms/Grid.tsx
