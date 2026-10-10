# MessageQueue
Messages sent while the assistant is busy, with Send now, reorder and delete.
Status: stable. Page: https://lkb00.github.io/tattva/#component-message-queue
MessageQueue lists messages a person sent while the assistant was busy. Each one has a dashed outline and muted text until it runs. A header explains the difference between waiting in line and steering, and you can change that text. Each message has Send now, move up, move down and delete. Your app keeps the order. An empty message shows when the list is empty.
## When to use it

Holds messages a person sent while the assistant was still busy. They look pending, with a dashed outline and muted text, so nobody mistakes them for messages already sent.

## Use it for

- Messages typed while the assistant is working on an earlier one.
- Letting people send a waiting message now, move it, or delete it before it runs.

## Not for

- Messages that have been sent: use `message-list`
- The steps the assistant plans to take: use `plan-card`

## Anatomy

- Header with count
- Explanation
- Waiting message
- Send now
- Move up and down
- Delete
- Empty message

## Do

- Show it only while the assistant is working or when messages are waiting.
- Change the header text to match how your product handles waiting and steering.
- Reorder items in your own state when onMove is called. The list does not reorder itself.
- Show the shortcut on Send now only if that shortcut really works in your product.

## Avoid

- Do not show waiting messages in the chat as if they were sent.
- Do not expect it to reorder itself. Your app keeps the order.
- Do not hide Delete. People should be able to remove a message before it runs.

## On a phone

- Each queued message shows its text on a line that gets cut off, and the buttons wrap below it when the row is too narrow.
- Send now and the move and delete buttons keep their size and have a 44px tap area on touch screens.
- Messages are reordered with the up and down buttons; there is no drag.

## Accessibility: built in

- It is a named section, and the waiting messages are a numbered list.
- Every icon button is named with the message's place, such as "Move message 2 up". Send now is named with the message text.
- Move up is turned off on the first message, and move down on the last.
- After a move, screen readers hear the new place, such as "Message moved to position 1 of 3".
- Waiting messages differ by a dashed outline and muted text, as well as the header and count.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `QueuedMessage[]` |  | Queued messages in send order, each with id and text. |
| onSendNow | `(id: string) => void` |  | Called when Send now is pressed on an item. |
| onMove | `(id: string, direction: "up" \| "down") => void` |  | Called to move an item one place. The parent reorders items. |
| onDelete | `(id: string) => void` |  | Called when delete is pressed. |
| title | `string` | `"Queued"` | Heading and region name. |
| description | `ReactNode` |  | Header copy explaining queue and steering. Has a default sentence that you can replace. |
| emptyText | `string` |  | Text shown when items is empty. |
| sendNowShortcut | `string` |  | Shortcut hint shown on the first item's Send now. Omit to hide. |
| className | `string` |  | Extra classes for the region. |

## States

- empty: With no items, the list is replaced by the emptyText message.
- first or last: The move up button is disabled on the first message and move down on the last.
- shortcut hint: Pass sendNowShortcut to show a key hint on the first message's Send now button.
- focus: Every button in a row shows a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--fg-muted`
- `--fg-subtle`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A line you can reorder: Move, send and delete change the list. Send now removes the message as if it had started.
- Nothing waiting: With no messages, a short note shows instead.

Source: src/organisms/MessageQueue.tsx
