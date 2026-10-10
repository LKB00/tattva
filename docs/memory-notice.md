# MemoryNotice
A short notice that says what was saved to memory, with Manage, Undo and close.
Status: stable. Page: https://lkb00.github.io/tattva/#component-memory-notice
MemoryNotice appears when something is saved and says exactly what. Manage opens the memory list and Undo removes the item. Each button shows only if you provide what it does. It looks neutral because nothing needs fixing.
## When to use it

Says exactly what was just saved to memory, at the moment it is saved, so people can check it and take it back. It looks neutral because nothing has gone wrong.

## Use it for

- Right after the assistant saves something about the person.
- Giving a quick way to undo a save or open the full memory list.
- Confirming a save to one project's memory, with your own title.

## Not for

- Seeing or editing everything that is remembered: use `memory-list`
- Telling people that a chat is not being saved: use `private-chat-banner`
- A warning or error the person must fix: use `callout`

## Anatomy

- Icon
- Title
- Saved text
- Manage button
- Undo button
- Close button

## Do

- Show it right when something is saved, and quote what was saved.
- Make Undo actually remove the item.
- Send Manage to the full memory list.

## Avoid

- Do not say only "Memory updated". Name what changed.
- Do not use amber. Saving is not something the person must fix.
- Do not keep it on screen after the person closes it.

## On a phone

- The notice fills the width, and the text wraps beside the icon.
- Manage and Undo sit under the text and wrap if they do not fit. Each has a 44px tap area on a touch screen.
- The dismiss button stays at the right edge, keeps its size and has a 44px tap area.

## Accessibility: built in

- It is a polite status message, so screen readers can read it without cutting in.
- The close button has only an icon, so it carries the name "Dismiss memory notice".
- Manage, Undo and close are real buttons that work with the keyboard.
- The icon is hidden from screen readers.

## Accessibility: what you need to do

- Write the saved text in the person's own terms, so it makes sense when heard on its own.
- Move focus to a sensible place after Undo or close removes the notice.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title | `string` | `"Memory updated"` | Heading. |
| saved (required) | `ReactNode` |  | What was saved, in the person's terms. |
| onManage | `() => void` |  | Opens the memory manager. The button is hidden when omitted. |
| onUndo | `() => void` |  | Removes the saved item. The button is hidden when omitted. |
| onDismiss | `() => void` |  | Dismisses the notice. The close button is hidden when omitted. |
| manageLabel | `string` | `"Manage"` | Label of the manage button. |
| undoLabel | `string` | `"Undo"` | Label of the undo button. |
| dismissLabel | `string` | `"Dismiss memory notice"` | Accessible name of the close button. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- actions: Pass onManage or onUndo to show Manage and Undo buttons under the text.
- dismissible: Pass onDismiss to show a close button on the right.

## Tokens

- `--surface-sunken`
- `--border`
- `--fg-muted`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With actions: Undo and close both hide the notice here.
- Information only: With no buttons, the notice only says what was saved.

Source: src/molecules/MemoryNotice.tsx
