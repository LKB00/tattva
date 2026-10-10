# Tray
A soft panel with a short list of things to look at, and an optional message box under it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tray
Tray shows a few rows under a small heading. Use it on a landing view to show what needs a person. A message box can sit at the bottom, lined up with the list. Keep the list short. It does not scroll.
## When to use it

A soft panel that gathers the few things a person should look at now. The message box can sit underneath, so the list and the input share one edge.

## Use it for

- A short list of tasks that need a person, on a landing screen.
- A few suggested starting points with a message box under them.
- A small group of open items that all fit without scrolling.

## Not for

- A long list that has to scroll
- Past chats in the side panel: use `conversation-list`
- Progress of a running task, with finished work folded away: use `checklist`

## Anatomy

- Panel
- Heading
- Heading link
- Rows
- Footer (message box)

## Do

- Keep the list to a few rows so it can be read at a glance.
- Put the message box in the footer so it lines up with the list.
- Mark a row as needing attention only when a person has to act.
- Give the panel a heading so screen readers can name it.

## Avoid

- Do not use it for long lists. Use a full list page instead.
- Do not add a border or a second panel inside it.
- Only put list rows inside it. Other content will not display correctly.
- Do not mark every row. When everything is amber, nothing stands out.

## On a phone

- Fills the width of its container, and the rows inside it keep their size and have a tap area at least 44px tall on a touch screen.
- Each row stacks its title above its detail on a phone, and the detail wraps instead of being cut off.
- A row's trailing text, which shows only on hover on a desktop, is always visible on a touch screen.

## Accessibility: built in

- With a label, screen readers can find the panel by that name.
- Rows sit in a real list, so screen readers say how many items there are.
- The label is plain text, so it does not add a level to the page outline.

## Accessibility: what you need to do

- Give it a label unless a nearby heading already names the list.
- Put only list rows, such as TrayRow, inside it.
- Give each row that needs a person a detail that says what is needed, not just the amber dot.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label | `string` |  | Small uppercase heading rendered with SectionLabel. Also becomes the aria-label of the section. |
| action | `ReactNode` |  | Right-aligned text beside the label, such as a count or a link. Only rendered when label is set. |
| children (required) | `ReactNode` |  | The rows. Rendered inside a ul, so pass li elements such as TrayRow. |
| footer | `ReactNode` |  | Rendered below the list, inside the sand surface. Intended for a Composer. |
| className | `string` |  | Extra classes merged onto the section, for width or spacing. |

## Tokens

- `--surface-sunken (bg-sunken)`
- `--shadow-sm`
- `--fg-muted`
- `--attention (via TrayRow)`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Rows that need attention: A row marked as needing attention gets an amber dot. Use it only when a person has to act.
- With a message box underneath: The message box sits inside the panel, lined up with the list.
- Without a heading: Leave the heading out for a plain list. Screen readers then get no name for it, so only do this when a nearby heading explains the list.

Source: src/organisms/Tray.tsx
