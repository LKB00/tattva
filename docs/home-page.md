# HomePage
The first screen: a headline backed up by the list of tasks right below it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-home-page
HomePage is what a person sees before any conversation starts. The headline says how many tasks need them, and the tray below lists those tasks with amber dots. The message box sits in the same tray, with a small tag that shows what the assistant can see. Nothing else is on screen.
## When to use it

A worked example of the first screen. The headline says how many tasks need the person, and the tray right below lists them, so the claim and the proof sit together.

## Use it for

- A starting point to copy for your own landing screen.
- Seeing how AppShell, HomeTemplate, Tray and Composer fit together.
- Checking where attention dots and the AI notice go.

## Not for

- Dropping into a product as it is, since it holds sample data
- A landing screen built with your own content: use `home-template`

## Anatomy

- Side panel
- Big headline
- Tray of tasks that need you
- Message box with a context tag
- AI notice

## Do

- Copy it as a starting point and replace the sample rows with real tasks.
- Keep the headline true to the tray. The count in the heading should match the rows below.
- Use amber only for rows that need a person.
- Keep the message box at the bottom of the tray.

## Avoid

- Do not add navigation cards or promo blocks around the tray.
- Do not list tasks that need nothing from the person under "Needs you".
- Do not drop the page into your app as it is. It contains sample data.

## On a phone

- The sidebar opens from a Menu button in a side sheet on a phone.
- The greeting, the task list and the composer stack in one column.
- The page is 45rem tall at most and never taller than the phone screen height.

## Accessibility: built in

- Screen readers find a side panel named "Sidebar" and one main area.
- The headline types itself out once, shows whole when people turn off motion in their system settings, and screen readers always get the full text.
- Rows that need a person show an amber dot, read as "Needs attention", beside written detail.
- Rows are buttons. In the message box, Enter sends and Shift and Enter add a new line.

## Accessibility: what you need to do

- Give each real task a detail that says what is needed, not just the amber dot.
- Give people a way to reach the side panel on small screens.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| (none) | `-` |  | This page takes no props. It is a reference composition with sample content, meant to be copied and adapted. |

## Tokens

- `--bg`
- `--surface-sunken (tray)`
- `--attention (dots)`
- `--lime (send)`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Full page: The whole screen at a fixed height. The headline types itself out once.

Source: src/pages/HomePage.tsx
