# ComparisonTable
Compares 2 to 5 things side by side. On a small screen, it becomes stacked cards.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-comparison-table
ComparisonTable lines up items against the same features in a real table. On a small screen it shows one card per item with the same details. Screen readers get only one version at a time. A badge marks the recommended item in words.
## When to use it

Lines up two to five options against the same features so people can compare them at a glance. On a small screen it becomes one card per option, because wide tables are hard to read on a phone.

## Use it for

- Comparing plans, models or products on the same features.
- Pointing out a recommended option among a few choices, with a badge.

## Not for

- The numbers behind a chart: use `data-table`
- Picking one of a few options inside a control: use `segmented-control`
- Laying out a page in columns: use `grid`

## Anatomy

- Caption
- Item headings
- Feature names
- Cells
- Badge

## Do

- Compare two to five items on the same features.
- Keep cell text short.
- Mark a recommendation with the badge text.
- Write a caption that says what is compared.

## Avoid

- Do not use a table to lay out a page.
- Do not compare more than five items.
- Do not show a winner with color alone.
- Do not leave cells empty. Write a dash or a reason.

## On a phone

- Below 600px wide it switches from a table to one card per item, with each attribute in a two-column list, so nothing scrolls sideways.
- From 600px wide it is a real table that scrolls sideways inside its box if it is wider than the screen.
- Only one of the two forms is shown at a time, so screen readers do not read the data twice.

## Accessibility: built in

- It is a real table with a caption and column and row headings, so screen readers say which option and feature each cell belongs to.
- On a small screen the table is hidden and only the cards are shown, so screen readers read one version, not both.
- The recommended option is named by the badge text, not only by its tint.
- The table can be reached by keyboard and scrolled sideways when it is wider than the space.

## Accessibility: what you need to do

- Write a caption that says what is compared. It names the table for screen readers and heads the cards.
- Fill every cell. Write a dash or a short reason instead of leaving one empty.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `ComparisonItem[]` |  | Two to five items with id, name, optional subtitle and optional badge. Extras are ignored. |
| rows (required) | `ComparisonRow[]` |  | Each row has id, label and values in the same order as items. |
| caption (required) | `string` |  | Names the table. Used as the heading of the stacked cards. |
| attributeLabel | `string` | `"Attribute"` | Header of the first column. |

## States

- recommended column: Set badge on an item to tint its column and show the badge under its name.
- narrow screen: Below the small breakpoint the table becomes one stacked card per item.
- scrolling: On wider screens a table that does not fit scrolls sideways and can be focused with the keyboard.
- item limit: Only the first five items are shown.

## Tokens

- `--surface-sunken`
- `--lime`
- `--border`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Three plans: Make the window narrow to see the stacked cards.
- Two options with short notes

Source: src/organisms/ComparisonTable.tsx
