# Menu
A button that opens a list of actions, with full keyboard support.
Status: stable. Page: https://lkb00.github.io/tattva/#component-menu
Menu is a button that opens a short list of actions. Each item can have an icon and a shortcut hint. Items can be grouped with separators and small labels, disabled, or marked as dangerous. It is built on Popover and follows the menu button pattern. Closing is a quick fade.
## When to use it

Holds actions that would crowd the screen, such as Rename, Share and Delete. Choosing an item runs it and closes the menu.

## Use it for

- A More actions button on a card or message.
- A short list of related actions behind one button.
- Actions with shortcuts, a dangerous action set apart at the bottom.

## Not for

- Panels with forms, text or other controls: use `popover`
- Choosing one value that stays selected: use `segmented-control`
- The one main action on a screen: use `button`

## Anatomy

- Trigger button
- Menu panel
- Group label
- Item
- Icon
- Shortcut
- Separator

## Do

- Keep the list short, and put the most used items first.
- Put dangerous actions last, after a separator.
- Use verbs for labels, such as Rename and Export.
- Confirm a destructive action in a follow-up step if it cannot be undone.

## Avoid

- Do not put forms, long text or other controls in a menu. Use a Popover.
- Do not use a menu for two choices. Show two buttons.
- Do not rely on red alone. A danger item must say what it does.
- Do not nest menus inside menus.

## On a phone

- On a phone the menu opens as a bottom sheet with a backdrop, in reach of the thumb; set phoneSheet to false to keep it anchored to the trigger.
- The trigger and every item are at least 44px tall on touch screens.
- Keyboard shortcuts shown beside items are hints for keyboards, so do not make an action available only through a shortcut.

## Accessibility: built in

- The trigger is a button with aria-haspopup="menu" and aria-expanded. The list has role menu and a name, and items have role menuitem.
- Enter, Space and Down Arrow on the trigger open the menu and focus the first item. Up Arrow opens it and focuses the last.
- Up and Down Arrow move between items and wrap. Home and End jump to the first and last. Typing letters jumps to an item that starts with them.
- Enter or Space on an item runs it and closes the menu. Escape closes it and returns focus to the trigger. Tab closes it and moves on.
- Disabled items are skipped by the arrow keys and are marked aria-disabled, so they are still announced.
- Group labels are plain text and are not focusable. Separators have role separator.
- Items are 44px tall and the trigger is 44px on touch screens.
- Danger items keep their words and also use the danger text colour.
- Closing is a quick plain fade in --dur-fast, faster than opening. The menu cannot be pressed while it fades. When people turn off motion in their system settings, it goes at once.

## Accessibility: what you need to do

- When the trigger is only an icon, set triggerLabel to the action it opens, such as "More actions".
- Write item labels as actions, such as "Delete chat". Danger styling is colour on top of the words, never instead of them.
- Do not hide an action only in a menu if people need it often. Show it on the page as well.
- The shortcut text is only a hint. You must wire the shortcut yourself.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| trigger (required) | `ReactNode` |  | Content of the trigger button: text, an icon, or both. |
| triggerLabel | `string` |  | Accessible name of the trigger button. Set it whenever the trigger is only an icon. |
| label | `string` |  | Accessible name of the menu list. Falls back to triggerLabel, then "Menu". |
| items (required) | `({ type?: "item"; id: string; label: string; icon?: ReactNode; shortcut?: string; disabled?: boolean; danger?: boolean; onSelect: () => void } \| { type: "separator" } \| { type: "label"; label: string })[]` |  | Menu content in order. Items run onSelect and then close the menu. |
| align | `"start" \| "end"` | `"start"` | Which edge of the trigger the menu lines up with. |
| side | `"bottom" \| "top"` | `"bottom"` | Preferred side. Popover flips it when there is no room. |
| portal | `boolean` | `false` | Draws the menu on the page itself so a scrolling or clipped parent cannot cut it off. Use it for menus inside lists and side bars. |
| phoneSheet | `boolean` | `true` | On a phone the menu opens as a bottom sheet with a backdrop, within thumb reach. Set false to keep a small floating menu there too. |
| className | `string` |  | Classes for the wrapper around the trigger and menu. |

## States

- open: The trigger reports aria-expanded and the list shows below or above it. Focus moves to an item.
- closing: After it closes the list fades out in --dur-fast and cannot be pressed meanwhile. Under reduced motion it goes at once.
- disabled item: An item with disabled looks dimmed, does nothing, is skipped by the arrow keys and is announced as disabled.
- danger item: An item with danger uses the danger text colour and keeps its words.
- hover: An enabled item gets a soft background under the pointer.
- focus: The focused item gets a soft background and a visible focus ring.

## Tokens

- `--surface`
- `--surface-raised`
- `--surface-hover`
- `--border`
- `--fg`
- `--fg-subtle`
- `--danger-fg`
- `--dur-fast`
- `--focus-ring`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Icon-only trigger: triggerLabel gives the icon button its name. The menu opens below and lines up with the start of the button.
- Label, separator, shortcuts and a danger item: A group label names the section. A separator sets the dangerous action apart. The disabled item is announced but cannot be chosen.
- Text and icon trigger, aligned to the end: Use align end when the button sits at the right edge, so the menu grows to the left.

Source: src/molecules/Menu.tsx
