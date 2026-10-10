# VariantGrid
A set of made options where you pick one, with empty slots held for ones still coming.
Status: stable. Page: https://lkb00.github.io/tattva/#component-variant-grid
VariantGrid shows options as square tiles, two across or four on wider screens. You can pick exactly one, and the pick shows a check mark as well as a border. Tab goes to the picked tile and arrow keys move and pick. Loading slots keep the layout from jumping while more options arrive.
## When to use it

Shows options the assistant made as square tiles and lets people pick one. Empty slots hold space for options still on the way, so tiles do not jump around.

## Use it for

- Picking one of several generated images or designs.
- A round of options that arrive one by one: set loadingCount.
- Comparing options side by side before opening one in a canvas.

## Not for

- Picking several options at once
- Media that people look at but do not choose between: use `media-grid`
- Buttons to vary, upscale or remix one option: use `variation-actions`

## Anatomy

- Option tile
- AI label
- Check mark
- Loading placeholder

## Do

- Give each option its own name.
- Hold space for options that are still arriving.
- Make the content fill the square tile.
- Mark made images with the AI label. VariantTile adds it for you.
- Update selectedId in onSelect, since arrow keys pick as they move.

## Avoid

- Do not use it to pick several. It allows one choice.
- Do not put buttons inside a tile. The whole tile is the button.
- Do not rely on border color alone to show the pick. The check mark covers it.

## On a phone

- Tiles show in two columns on a phone and in four columns from 600px wide, and each tile stays square.
- Tiles are tapped to select, and the selected tile shows a check mark, so selection does not depend on hover.
- Loading slots are the same square size, so the grid does not jump when the options arrive.

## Accessibility: built in

- It is a group of choices named "Generated variants". Each tile has its own name, and screen readers say which one is picked.
- Only one tile is a Tab stop. Arrow keys move and pick, wrapping at the ends, and Home and End jump to the first and last.
- The pick shows a check mark and a thicker border, not color alone.
- Loading slots are hidden from screen readers.
- Screen readers hear when options start generating and when new ones arrive, such as "4 options ready".

## Accessibility: what you need to do

- Give each variant a label that tells it apart, not just a letter.
- Set label, loadingMessage and readyMessage when you translate.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variants (required) | `Variant[]` |  | Options to show. Variant is { id: string; node: ReactNode; label: string }. The node fills a square tile. |
| selectedId | `string` |  | Id of the chosen variant. Leave undefined for no selection. |
| onSelect (required) | `(id: string) => void` |  | Called with the id when a tile is clicked. |
| loadingCount | `number` | `0` | Number of skeleton squares appended after the variants. |

## States

- selected: The tile whose id matches selectedId is checked and is the one tab stop.
- loading: Pass loadingCount to append that many shimmering placeholder tiles.
- keyboard: Arrow keys, Home and End move focus between tiles and select the one reached.
- empty: With no variants, only loading placeholders (if any) are drawn.

## Tokens

- `--fg (selected border)`
- `--border / --border-strong`
- `--shadow-md`
- `--surface-sunken (skeleton)`
- `rounded-2xl tiles`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Four options, one picked: Each option has a name for screen readers. Tab to the picked tile, then use the arrow keys, Home and End.
- More options on the way: Two options are ready and two slots are held, so the grid keeps its size.
- Nothing picked yet: Leave the pick empty until the person chooses.

Source: src/organisms/VariantGrid.tsx
