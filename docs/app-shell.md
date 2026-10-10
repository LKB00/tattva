# AppShell
The outer frame of a screen: a narrow side panel and one main area.
Status: stable. Page: https://lkb00.github.io/tattva/#component-app-shell
AppShell is the frame around every screen. It puts an optional side panel on the left and one main area on the right, and fills the height it is given. On small screens a Menu button opens the side panel in a sheet, so it stays reachable. Keep navigation in the side panel so the main area stays free for the work.
## When to use it

The frame around every screen: a narrow side panel for navigation and one main area for the work. The side panel stays narrow so it never competes with the main area.

## Use it for

- The outer frame of any app screen.
- A screen with past chats or navigation in a side panel.
- A full-width screen with no side panel: leave rail out.

## Not for

- Splitting the main area into chat and work side by side: use `split-canvas-template`
- Spacing content inside a section: use `stack`

## Anatomy

- Side panel
- Main area

## Do

- Put navigation and the user card in the side panel so the main area stays calm.
- Give the frame a space with a set height.
- Put a template (HomeTemplate, ThreadTemplate) inside it.
- Check how it looks without the side panel, since it is hidden on small screens.

## Avoid

- Do not put important actions only in the side panel. It is hidden on narrow screens.
- Do not add a third column. Use SplitCanvasTemplate inside the main area instead.
- Do not put an AppShell inside another AppShell.

## On a phone

- Below the md breakpoint the sidebar moves into a side sheet that opens from a Menu button above the main area. Use menuLabel to rename that button.
- The main area takes the full width and can shrink without overflowing.
- The shell is as tall as its parent, so give the parent a height; use the dynamic viewport height so phone browser bars are counted.

## Accessibility: built in

- The side panel is an area named "Sidebar" and the main area is the page's main area, so screen reader users can jump between them.
- On small screens the side panel is hidden from sight and from screen readers.
- Inside a docs preview the two areas become plain boxes, so the host page keeps one main area.

## Accessibility: what you need to do

- Give people another way to reach navigation on small screens, since the side panel is hidden there.
- Use one AppShell per page. Do not put one inside another.
- Put a template such as ThreadTemplate inside it, which adds the page's top heading.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| rail | `ReactNode` |  | Left sidebar content such as a conversation list and user card. Rendered in an aside with 272px width from md up. Below md it opens from a Menu button in a left side sheet. |
| menuLabel | `string` | `Menu` | Name of the button that opens the rail on a phone. |
| children (required) | `ReactNode` |  | The main column. Rendered inside main as a flex column, so children can use flex-1 and min-h-0. |
| className | `string` |  | Merged onto the root. Use it to fix a height such as h-160 for previews. By default the shell fills its container. |

## States

- narrow screen: Below the medium breakpoint the sidebar rail is hidden and only the main area shows.

## Tokens

- `--bg`
- `--fg`
- `w-68 rail width`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Side panel and main area: The frame fills the space around it, so give that space a height. Make the window narrow and the side panel disappears.
- Without a side panel: With no side panel, the main area takes the full width. The studio page uses this form.

Source: src/templates/AppShell.tsx
