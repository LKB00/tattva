# MemoryList
A list of what the assistant remembers. Each item can be edited or deleted. Two switches sit on top.
Status: stable. Page: https://lkb00.github.io/tattva/#component-memory-list
MemoryList shows a Pause memory switch and a Search past chats switch above one row for each remembered topic. Each row says where it applies and has Edit and Delete. Your app keeps the data. The empty message can be replaced.
## When to use it

The place where people see, fix and remove what the assistant remembers. The two switches sit on top because they change how memory works for everything below them.

## Use it for

- A memory page in settings.
- Letting people pause memory, or stop replies drawing on past chats.
- Showing where each memory applies, such as all chats or one project.

## Not for

- Telling people that one thing was just saved: use `memory-notice`
- A chat that saves nothing at all: use `private-chat-banner`

## Anatomy

- Pause memory switch
- Search past chats switch
- Memory row
- Topic
- Where it applies
- Edit and delete buttons
- Empty message

## Do

- Show where each memory applies.
- Explain what pausing does to memories already saved.
- Add an undo or a confirm step for delete. The list calls onDelete as soon as the button is pressed.

## Avoid

- Do not hide entries behind a search. Show them as a list people can scan.
- Do not rename the switches without saying what they control.
- Do not store anything here. Your app keeps the data.

## On a phone

- The two switches at the top have a 44px tap area, and their descriptions wrap beside them.
- Each row keeps its edit and delete buttons at the right, each with a 44px tap area on a touch screen, and the memory text wraps in the space left.
- Editing opens a text box that takes focus at once, so the on-screen keyboard appears; the text is 16px so the page does not zoom.

## Accessibility: built in

- Both switches have names and are read as on or off.
- Edit and delete buttons name the memory they act on, such as "Edit memory: Work".
- The edit box has a visible label and gets focus when it opens.
- Save is turned off while the edit box is empty.
- After Save or Cancel, keyboard focus returns to that memory's Edit button. After a delete it moves to the next memory (or the previous one, or the empty message), and screen readers hear "Memory deleted."

## Accessibility: what you need to do

- Give each memory a topic. Without one, the edit and delete buttons repeat the whole memory text in their names.
- Set deletedMessage when you translate.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| entries (required) | `MemoryEntry[]` |  | Items with id, optional topic, text and scope. |
| onEdit | `(id: string, text: string) => void` |  | Called when an edit is saved. |
| onDelete | `(id: string) => void` |  | Called when delete is chosen. |
| paused | `boolean` |  | Controlled state of Pause memory. |
| defaultPaused | `boolean` | `false` | Starting state when uncontrolled. |
| onPausedChange | `(paused: boolean) => void` |  | Called when the pause switch changes. |
| searchChats | `boolean` |  | Controlled state of Search past chats. |
| defaultSearchChats | `boolean` | `true` | Starting state when uncontrolled. |
| onSearchChatsChange | `(on: boolean) => void` |  | Called when the search switch changes. |
| emptyState | `ReactNode` |  | Replaces the empty message. |
| pauseLabel | `string` | `"Pause memory"` | Label of the pause switch. |
| pauseDescription | `string` |  | Helper text under the pause label. |
| searchLabel | `string` | `"Search past chats"` | Label of the search switch. |
| searchDescription | `string` |  | Helper text under the search label. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- paused: Turn on the Pause memory switch (or pass paused) to stop saving new memories while keeping existing ones.
- past chats off: Turn off the Search past chats switch (or pass searchChats false) to stop replies drawing on earlier conversations.
- editing: Pressing the edit button turns that entry into a text box with Save and Cancel; Save is disabled when the text is empty.
- empty: With no entries, a dashed box shows emptyState or a default message.

## Tokens

- `--surface`
- `--border`
- `--border-strong`
- `--fg-muted`
- `--radius-field`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Editable list: Edits and deletes work in this demo.
- Nothing remembered: Change the message shown when the list is empty.

Source: src/organisms/MemoryList.tsx
