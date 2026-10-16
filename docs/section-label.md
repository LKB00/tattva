# SectionLabel
A tiny capital-letter label that names a group in a list, with room for a small action.
Status: stable. Page: https://lkb00.github.io/tattva/#component-section-label
SectionLabel is a small label in capital letters. It names a group of items. Make it a heading if it should show up in the page outline. At the end of the row you can add a count or a short link. It carries no content of its own.
## When to use it

A tiny capital-letter label that names a group of items, such as Today or Pinned. It stays quiet so the items stand out, and it has room at the end for a count or one small action.

## Use it for

- Grouping chats by date in a side list.
- Naming a section in a tray or a settings panel.
- A group name with a count or a Clear button at the end.

## Not for

- A page or card title
- A status on a single item: use `badge`

## Anatomy

- Label
- Action at the end

## Do

- Use short words like "Pinned" or "Last 7 days". It shows in capitals by itself, so write it normally.
- Put it right above the group it names.
- Use the end of the row for one small control or a count.
- Make it a heading only when it is a real section title.

## Avoid

- Do not use it as a page or card title. Use the large headings.
- Do not type labels in capitals. The style does it.
- Do not put long sentences in it.
- Do not put several actions at the end of the row.

## On a phone

- The label and the action sit on one row. The label can wrap if the action takes the space.
- The label text is 12px on touch screens.
- If the action is a button, it keeps its size on a touch screen and has a 44px tap area, so the row does not get taller. A small link needs the tap class to get the same tap area.

## Accessibility: built in

- It is plain text by default, so it does not add a heading to the page outline.
- Screen readers read the text as you typed it. The capitals are only a style.

## Accessibility: what you need to do

- Set as to a heading level when the label should appear in the page outline, and pick the level that fits.
- Give whatever you put in action its own name, such as a button label.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | The label text. |
| action | `ReactNode` |  | Content aligned to the end of the row, wrapped in a muted text-small leading-4 span. |
| as | `"p" \| "h2" \| "h3" \| "h4"` | `"p"` | Element to render. A label is plain text by default. Use a heading level only when it belongs in the page outline. |
| className | `string` |  | Merged onto the outer flex row. |

## Tokens

- `--fg-muted`

## Examples

### Label only

A plain group name above a list.

```tsx
<div className="w-64">
  <SectionLabel>Today</SectionLabel>
</div>
```

### With an action

Add a button or link at the end of the row.

```tsx
<div className="w-64">
  <SectionLabel action={<Button variant="ghost" size="sm">Clear</Button>}>Recent chats</SectionLabel>
</div>
```

Source: src/atoms/SectionLabel.tsx
