# ConversationList
Past chats grouped by day, with a New chat button, for the side bar.
Status: stable. Page: https://lkb00.github.io/tattva/#component-conversation-list
ConversationList shows a New chat button and the titles of past chats under small group names. Groups appear in the order they are given. Chats with no group go under Recent. The open chat is highlighted. Your app keeps track of which chat is open.
## When to use it

The history of past chats for the side panel. A New chat button sits on top, so starting fresh is always one press away.

## Use it for

- Past chats in the AppShell side panel, grouped by day.
- Switching between chats, with the open one highlighted.
- Starting a new chat from the side panel.

## Not for

- The main site menu or links to other parts of the app
- The messages inside one chat: use `message-list`

## Anatomy

- New chat button
- Group name
- Chat title

## Do

- Use groups such as Today and Yesterday, newest first.
- Keep titles short. Long ones wrap onto a second line and make the list harder to scan.
- Place it in the side bar of AppShell, which sets the width.
- Keep the highlight matching the chat that is open.

## Avoid

- Do not use it as the main site menu. It lists chats only.
- Do not expect it to sort. It keeps the order you give it.
- Do not add extra actions inside a row. Each row is one button.

## On a phone

- Each row title is a full-width button with a tap area at least 44px tall on a touch screen, and long titles wrap instead of being cut off.
- The row menu button grows from 32px to 44px on a touch screen, and the menu opens as a bottom sheet.
- Delete asks in place with Keep and Delete side by side, each with a 44px tap area.

## Accessibility: built in

- It is a navigation area named "Conversations".
- Each chat is a real button, so Tab, Enter and Space work.
- The open chat is marked as current for screen readers and gets a background, so color is not the only clue.
- Each group of chats is its own list, so screen readers say how many chats it holds.

## Accessibility: what you need to do

- Keep activeId in step with the chat that is open, so the right one is announced as current.
- Write titles that tell chats apart. The title is all a screen reader hears for each row.
- Use one per page. Its navigation name, "Conversations", is fixed.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `ConversationItem[]` |  | Conversations to show. ConversationItem is { id: string; title: string; group?: string }. |
| activeId | `string` |  | Id of the open conversation. It receives aria-current and the active style. |
| onSelect (required) | `(id: string) => void` |  | Called with the id when an item is clicked. |
| onNew (required) | `() => void` |  | Called when New chat is pressed. |
| onRename | `(id: string) => void` |  | When given, each row gets a More menu with Rename. Your code asks for the new name. |
| onDelete | `(id: string) => void` |  | When given, each row gets Delete in its More menu. Pressing it asks once, in place, with Keep it as easy to press as Delete and focus on Keep it. Called only after the person confirms. |
| labels | `{ delete?: string; keep?: string; confirm?: (title: string) => string }` |  | The words of the in-place confirmation. |

## States

- current: The item whose id matches activeId gets a highlighted background and aria-current set to page.
- hover: An item gets a soft background under the pointer.
- focus: A visible focus ring appears on an item or the New chat button on keyboard focus.
- empty: With no items, only the New chat button is shown.
- row menu: With onRename or onDelete, each row gets a More menu (drawn on the page, so a scrolling side bar cannot clip it).
- confirming delete: Choosing Delete swaps the row for "Delete this chat?" with Keep it and Delete side by side; focus lands on Keep it and Escape cancels.

## Tokens

- `--surface-hover (bg-hover)`
- `--fg-muted`
- `--fg-subtle`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Grouped history: Each chat has a group name. Groups show in the order they first appear.
- Chats with no groups: Chats with no group all go under Recent.
- Rename and delete from a row menu: Each row gets a More menu. Delete asks once, right in the row, and Keep it is as easy to press as Delete. The menu is drawn on the page itself, so a scrolling side bar cannot cut it off.

Source: src/organisms/ConversationList.tsx
