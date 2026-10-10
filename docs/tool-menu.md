# ToolMenu
The plus menu by the message box, with ways to attach things, tools you can switch on, and connected apps.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tool-menu
ToolMenu is a plus button that opens a menu with three sections. Attach and Connectors items do something and close the menu. Tools have a check mark and stay open when toggled, so several can be on. The cursor moves to the first item when it opens, and arrow keys, Home and End move between items. Tab closes the menu. If the menu would run off the screen, it opens on the other side.
## When to use it

The plus button by the message box that gathers everything you can add to a message: files, tools and connected apps. Tools keep the menu open when switched, so several can be turned on in one go.

## Use it for

- Attaching a file or a photo to a message.
- Turning tools such as web search or deep research on and off.
- Picking a connected app as a source.

## Not for

- Choosing how the assistant answers: use `model-picker`
- Settings that belong on a settings page
- Moving around the site

## Anatomy

- Plus button
- Attach section
- Tools section
- Check mark
- Connected apps section
- App status

## Do

- Keep the menu open when a tool is toggled so several can be switched on.
- Use short status words for connected apps, such as Connected.
- Show every tool that is on as a ToolChip by the message box, so people can see and remove it without opening the menu.

## Avoid

- Do not put settings that belong in a settings page into the menu.
- Do not use it as a site menu.
- Do not leave out the check mark. A tool without one looks like a button that does something.

## On a phone

- On a phone the menu opens as a bottom sheet, because it is a menu; the sheet scrolls if the list is long.
- Every row is at least 44px tall on touch screens.
- Labels and descriptions are cut off with an ellipsis, so keep them short.
- Choosing an attach or connector row closes the sheet, while turning a tool on or off keeps it open.

## Accessibility: built in

- It is a real menu. Tool rows are check items that tell screen readers whether they are on.
- On open, the cursor moves to the first available item. Arrow keys wrap around, Home and End jump, and items that are off are skipped.
- Escape closes the menu and returns to the plus button. Tab closes it and moves on through the page.
- Each section is a group named by its heading, and the heading is not read twice.
- The plus button is named by the label, and the menu opens on the other side if it would run off the screen.

## Accessibility: what you need to do

- Pass checked for every tool from your own state, because screen readers read it out.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| attach | `ToolMenuAction[]` | `[]` | Attach items with id, label, icon, description and disabled. |
| tools | `ToolMenuTool[]` | `[]` | Tool items. Each has a checked boolean owned by the parent. |
| connectors | `ToolMenuConnector[]` | `[]` | Connector items with an optional status text. |
| onAttach | `(id: string) => void` |  | Called when an attach item is chosen. |
| onToggle | `(id: string, checked: boolean) => void` |  | Called with the new checked value when a tool is chosen. |
| onConnector | `(id: string) => void` |  | Called when a connector item is chosen. |
| labels | `{ attach?: string; tools?: string; connectors?: string }` | `Attach, Tools, Connectors` | Section headings. |
| label | `string` | `"Add to message"` | Name of the trigger button and the menu. |
| align | `"start" \| "end"` | `"start"` | Horizontal alignment of the panel. |
| side | `"bottom" \| "top"` | `"top"` | Side of the button the panel opens on. Top suits a composer at the bottom of the page. |

## States

- open: Pressing the plus button opens a menu with Attach, Tools and Connectors groups.
- item disabled: Set disabled on an item to dim it and stop clicks.
- tool on: A tool with checked true shows a check mark and stays in the menu when pressed.
- connector status: Set status on a connector to show short text such as Connected on its right.
- empty group: A group with no items is left out of the menu.

## Tokens

- `--surface-raised`
- `--border`
- `--surface-hover`
- `--fg-muted`
- `--shadow-lg`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Menu with tags: Switching a tool on or off updates its check and adds or removes its tag next to the button.
- Tools only: Sections with nothing in them are left out.

Source: src/organisms/ToolMenu.tsx
