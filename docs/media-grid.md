# MediaGrid
A gallery of images in even rows that adjusts to the screen, with optional selecting and an empty message.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-media-grid
MediaGrid lays out images with the same spacing and the same shape. It uses 2 columns on small screens, 3 on medium and 4 on large, up to the limit you set. Selecting is optional, with a checkbox button on each image. With no images, it shows an empty message.
## When to use it

Lays out many images in even rows with one gap and one shape, so they are easy to scan. It can let people pick several, and shows an empty message when there is nothing.

## Use it for

- A gallery of uploads or generated images.
- Picking several images to download, delete or reuse: turn on selectable.

## Not for

- Picking one of several AI-made options: use `variant-grid`
- A single image: use `media-frame`

## Anatomy

- Count line
- Grid
- Image tile
- Select button
- Empty message

## Do

- Give the grid a name that says what the images are.
- Use one shape for the whole grid.
- Replace the empty message when you know the reason, such as a filter.

## Avoid

- Do not mix shapes in one grid.
- Do not show what is chosen with color alone. The check mark does that.
- Do not use it for a single image. Use MediaFrame.

## On a phone

- The grid is two columns on a phone, and three or four only from the md and xl breakpoints.
- In select mode, each check button sits in the top right corner of the image. On touch screens it keeps its 28px size and has a 44px by 44px tap area.
- The count line is 12px text above the grid, and it is announced as a status when the count changes.

## Accessibility: built in

- The grid is a named list, so screen readers say how many images there are.
- Each select button is a checkbox named "Select" plus the image description. It works with Tab, Enter and Space.
- A chosen image shows a check mark and a ring, not just color.
- The count line is announced and updates when the choice changes.

## Accessibility: what you need to do

- Give the grid a label that says what the images are, such as "Your uploads".
- Write a description for every image. A decorative image's select button is named only by its id.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `MediaGridItem[]` |  | Each item is the MediaFrame props except ratio and className, plus an id. |
| label (required) | `string` |  | Accessible name of the list. |
| columns | `2 \| 3 \| 4` | `4` | Maximum columns. Fewer show on narrower screens. |
| ratio | `MediaRatio` | `"4:3"` | Ratio shared by every tile. |
| selectable | `boolean` |  | Adds a checkbox button to each tile. |
| selected | `string[]` |  | Controlled selection as item ids. |
| onSelectedChange | `(ids: string[]) => void` |  | Called with the new selection. |
| empty | `ReactNode` |  | Replaces the default EmptyState. |
| countLabel | `(count: number, selected: number) => string` |  | Builds the count line. Defaults to a count of images and selected. |
| className | `string` |  | Extra classes for the wrapper. |

## States

- selected: Set with the selected prop.
- empty: Set with the empty prop.

## Tokens

- `--lime`
- `--border-strong`
- `--fg`
- `--bg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Gallery: Every image has the same shape, so rows stay even.
- Selectable: Each image has a checkbox button. A check mark shows what is chosen, not only a ring. The count line announces changes.
- Empty: With no images, the grid shows an empty message. You can replace it.

Source: src/organisms/MediaGrid.tsx
