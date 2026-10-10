# VariantTile
A square tile for one AI-made option that a person can pick.
Status: stable. Page: https://lkb00.github.io/tattva/#component-variant-tile
VariantTile shows one of several AI-made options as a square you can pick. Put tiles in a VariantGrid so the arrow keys move between them. An AI badge always sits at the top left. The chosen tile gets a thick dark border and a check mark at the bottom right, so color is not the only clue.
## When to use it

One AI-made option shown as a square, so options can be compared side by side. The chosen one gets a check mark and a dark border, not only a color change.

## Use it for

- Picking one of several generated images, layouts or drafts.
- Inside VariantGrid, which adds arrow key movement between tiles.

## Not for

- A whole set of options to choose from: use `variant-grid`
- Picking several images at once: use `media-grid`
- A few text options with no picture: use `segmented-control`

## Anatomy

- Content
- AI badge
- Check mark

## Do

- Use VariantGrid, or wrap tiles in a group that screen readers know is a set of choices, with a name.
- Give each option a clear name, like Option B, sand block.
- Let the content fill the whole square, like a cropped image.

## Avoid

- Do not allow picking more than one. Only one tile can be chosen.
- Do not remove the AI badge from AI-made content.
- Do not use it for navigation. It is for choosing between AI-made options.

## On a phone

- Each tile is a square that fills the width its grid gives it, and has a tap area of at least 44px on touch screens.
- Selection is a tap, and the check mark shows without hover.
- Choose the number of columns in the grid, since the tile size comes from it.

## Accessibility: built in

- Each tile is a button that screen readers treat as a choice. They read its label and whether it is selected.
- A chosen tile shows a check mark and a thicker border, not just color.
- The rise-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Use VariantGrid, or build the group yourself: set tabIndex to -1 on tiles that are not chosen and move between tiles with the arrow keys.
- Give each tile a label that says how it differs, such as "Option A, warm gradient".
- Say that the option is AI-made in the label or the nearby text if that matters. The label replaces the tile's content, so the badge is not read out.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variant (required) | `Variant` |  | Object with id (string), node (ReactNode shown inside the tile) and label (string used as the accessible name). |
| selected (required) | `boolean` |  | Whether this tile is the chosen option. |
| onSelect (required) | `(id: string) => void` |  | Called with variant.id when the tile is pressed. |
| tabIndex | `number` |  | Set to -1 on tiles that are not the tab stop of a roving group. VariantGrid does this for you. Leave it unset for a standalone tile, which then stays a tab stop. |

## States

- selected: Set with the selected prop.

## Tokens

- `--fg`
- `--bg`
- `--border`
- `--border-strong`
- `--shadow-md`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Choose one: Here the demo keeps track of the choice. Without VariantGrid, arrow keys do not move between tiles, so the Tab key stops on each one.

Source: src/molecules/VariantTile.tsx
