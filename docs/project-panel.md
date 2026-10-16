# ProjectPanel
A project's instructions and files, shared by every chat in it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-project-panel
ProjectPanel shows a project: chats that share the same instructions and files. It has the project's name and how many chats use it, its instructions (folded after three lines, with Show all), the files every chat can read with a way to add or remove them, and how full the project's knowledge is.
## When to use it

Gives people one place to set how the AI works on a body of work, and what it knows, for every chat at once.

## Use it for

- A side panel on a project page.
- Showing what every chat in a project starts with.

## Not for

- What the AI can see in one chat: use `context-panel`
- The list of chats: use `conversation-list`
- Saved memories about the person: use `memory-list`

## Anatomy

- Name and chat count
- Description
- Instructions with Edit
- Files with Add and Remove
- Knowledge bar

## Do

- Show the instructions people wrote, word for word.
- Say what an empty project needs.
- Show how full the knowledge is before it is full.

## Avoid

- Do not hide that every chat reads these files.
- Do not cut instructions off without Show all.

## On a phone

- Each file row is at least 40px tall and its remove button grows to 44px on touch screens.
- Long instructions fold after three lines.

## Accessibility: built in

- The panel is a region named by the project, with headings for Instructions and Files.
- Show all says whether the instructions are open.
- Removing a file moves focus to the next file, or to the Files heading, and a status line says what was removed.

## Accessibility: what you need to do

- Set headingLevel so the project name fits your page (2 by default).
- Give files their real names.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `string` |  | The project's name. |
| description | `string` |  | One line about what it is for. |
| instructions | `string` |  | How the assistant should work in every chat of this project. |
| onEditInstructions | `() => void` |  | Opens the instructions to edit. |
| files (required) | `ProjectFile[]` |  | Files every chat can read: { id, name, detail? }. |
| onAddFiles | `() => void` |  | Opens a way to add files. |
| onRemoveFile | `(id: string) => void` |  | Removes a file. Focus moves to the next one. |
| capacity | `{ used: number; total: number }` |  | How full the project's knowledge is, in tokens. The bar turns amber past 90%. |
| chatCount | `number` |  | How many chats belong to the project. |
| labels | `ProjectPanelLabels` |  | Overrides every line of text. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `2` | Level of the project name's heading. |
| className | `string` |  | Extra classes on the root. |

## States

- empty: No instructions and no files: each says in one line what it is for.
- long instructions: Folded after three lines, with Show all.
- nearly full: The knowledge bar turns amber past 90%.
- file removed: Focus moves to the next file's remove button, or to the Files heading when none are left, and a status line says what was removed.

## Tokens

- `--surface`
- `--line`
- `--hover`
- `--fg-muted`
- `--attention`
- `--radius-card`

## Examples

### A support project

Show all the instructions, or remove a file: focus moves to the next.

```tsx
<ProjectPanel
  name="Customer support"
  description="Replies to customers of the Acme store."
  chatCount={24}
  instructions={instructions}
  files={files}
  onEditInstructions={edit}
  onAddFiles={add}
  onRemoveFile={remove}
  capacity={{ used: 41800, total: 200000 }}
/>
```

Source: src/organisms/ProjectPanel.tsx
