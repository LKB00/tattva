# ContextPanel
Everything the AI can see right now, each item removable.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-context-panel
ContextPanel lists what the assistant can see in this chat, grouped by kind: instructions, the open page, files, connected apps and memories. Each item can be taken out with one press, and focus moves to the next item. Items the person cannot remove, such as a workspace's own instructions, show without a button. An optional bar shows how full the assistant's working memory is.
## When to use it

Shows people exactly what the AI is working from, so its answers make sense and they can take out what it should not use.

## Use it for

- A side panel or popover next to the message box.
- Explaining why the AI said something, by showing what it read.
- Freeing up room when the working memory is nearly full.

## Not for

- One file or app chip inside the message box: use `attachment-chip`
- Only how full the working memory is: use `context-meter`
- Saved memories across chats: use `memory-list`

## Anatomy

- Heading and count
- Groups by kind
- Items with a short detail
- Take out buttons
- Working memory bar
- Add

## Do

- Show everything the assistant can use, including instructions and memories.
- Let people take items out in one press.
- Say when nothing is shared.

## Avoid

- Do not hide what a connected app gives the assistant.
- Do not ask before taking an item out. It can be added back.
- Do not show token counts without the bar and plain words.

## On a phone

- Each item is at least 40px tall, and its take-out button grows to 44px on touch screens.
- Long names wrap to two lines, then end with an ellipsis; the full name is in the button's label.

## Accessibility: built in

- The panel is a region named by its heading, with a heading for each group.
- Each take-out button names the item it removes.
- After taking an item out, focus moves to the next item's button, or to the heading when none are left, and a status line says what was taken out.
- The working memory bar is a meter with its value in words.

## Accessibility: what you need to do

- Give each item a name people recognise, such as the file name.
- Set headingLevel so the heading fits your page outline. It is 3 unless you change it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `ContextItem[]` |  | What the assistant can see: { id, kind: "file" \| "app" \| "memory" \| "page" \| "instruction", label, detail?, fixed? }. |
| onRemove (required) | `(id: string) => void` |  | Takes an item out of what the assistant can see. |
| onAdd | `() => void` |  | Opens a way to add files or apps. The button is hidden when omitted. |
| room | `{ used: number; total: number }` |  | How full the working memory is, in tokens. The bar turns amber past 90%. |
| labels | `ContextPanelLabels` |  | Overrides heading, count(n), groups, remove(label), removed(label), add, empty, room(used, total) and roomLabel. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the root. |

## States

- empty: Says the assistant only sees this chat.
- fixed item: An item the person cannot remove shows without a take-out button.
- nearly full: The working memory bar turns amber past 90%.
- item taken out: Focus moves to the next item's button, or to the heading when none are left, and a status line says what was taken out.

## Tokens

- `--surface`
- `--line`
- `--hover`
- `--fg-muted`
- `--attention`
- `--radius-card`
- `--radius-control`

## Examples

### A support chat

Take items out with the X. The instructions are set by the workspace, so they stay.

```tsx
<ContextPanel
  items={[
    { id: "i", kind: "instruction", label: "Answer as the store's support team", detail: "Set by your workspace", fixed: true },
    { id: "p", kind: "page", label: "Orders dashboard", detail: "The page you have open" },
    { id: "f1", kind: "file", label: "Q3 refunds.csv", detail: "1,204 rows" },
    { id: "a", kind: "app", label: "Shopify", detail: "Read only" },
    { id: "m", kind: "memory", label: "You prefer replies under 100 words" },
  ]}
  onRemove={remove}
  onAdd={openPicker}
  room={{ used: 18400, total: 200000 }}
/>
```

### Nothing shared

Say plainly that the assistant only sees the chat.

```tsx
<ContextPanel items={[]} onRemove={remove} onAdd={openPicker} />
```

Source: src/organisms/ContextPanel.tsx
