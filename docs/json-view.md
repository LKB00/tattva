# JsonView
Shows a tool call's input or output as a tree you can open level by level, with a copy button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-json-view
JsonView turns any JSON value into a tree. Objects and arrays start closed below the first level and show how many keys or items they hold. Strings, numbers, true or false and null each have their own colour and their own mark, such as quotes around strings. Long strings are cut short until you ask for all of it, and the whole value can be copied as JSON.
## When to use it

Lets people read and check the structured data an agent sent to a tool or got back, without reading raw text.

## Use it for

- The input and output of a tool call in an agent run.
- A debug panel that shows a request or response body.
- Any nested data where people need to open one part and ignore the rest.

## Not for

- Code or a flat block of text to copy: use `code-block`
- Many records with the same fields, to scan and compare: use `data-table`
- A short summary of a tool call for most readers: use `tool-call-card`

## Anatomy

- Header with label
- Copy status
- Copy button
- Scroll region
- Tree
- Row: open marker, key, value
- Show all

## Do

- Name the label after what the data is, not after the tool.
- Open one level by default and let people open the rest.
- Lower maxStringLength in a narrow side panel.
- Put it inside ToolCallCard or a Collapsible when most readers do not need the raw data.

## Avoid

- Do not use it for prose or code. Use CodeBlock.
- Do not show secrets, tokens or personal data that the reader should not copy.
- Do not open every level of a large value by default.

## On a phone

- Long values wrap onto more lines instead of running off the screen, and the indent per level is smaller than on wide screens.
- Rows and the Copy button are at least 44px tall on touch screens. Tapping a row opens it, and tapping a shortened string shows all of it.
- When the nesting is very deep, the tree scrolls sideways inside its own box, and the page does not.

## Accessibility: built in

- Follows the WAI-ARIA tree view pattern: role tree, role treeitem rows with aria-level, aria-posinset, aria-setsize, and aria-expanded on objects and arrays that have children.
- One row is in the Tab order at a time. Up and Down move between rows, Right opens a branch or moves into it, Left closes it or moves to its parent, Home and End go to the first and last row.
- Enter and Space open or close a branch. On a shortened string they show all of it, or shorten it again.
- Each row has a spoken name with the key, the type word and the value or count, such as "filters, object, 2 keys", and says when a string is shortened.
- Types are told apart by marks as well as colour: quotes around strings, the words true, false and null, braces with a key count and brackets with an item count.
- The tree sits in a region named by the label, which scrolls sideways when needed.
- Copy results show as text and are announced politely: Copied, or Could not copy when the clipboard or onCopy fails.
- New rows fade in only when the person has not asked for reduced motion. The open marker turns without motion in that case too.

## Accessibility: what you need to do

- Give a label that says what the data is, such as "Search input" or "Search result". It is the name of the tree and the region.
- If you pass onCopy, throw or reject when copying fails, so the failure is shown and announced.
- Do not put secrets in the value. Everything shown can be copied.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `unknown` |  | The value to show. Objects and arrays become branches; everything else is a leaf. A value that contains itself shows [circular] instead of looping. |
| label (required) | `string` |  | Shown in the header. It is also the accessible name of the tree and of the scroll region. |
| defaultExpandDepth | `number` | `1` | How many levels start open. 1 opens the top level, 0 starts fully closed. Later changes to this prop only affect branches nobody has opened or closed. |
| maxStringLength | `number` | `160` | Strings longer than this many characters are cut short with a Show all choice. |
| onCopy | `(text: string) => void \| Promise<void>` |  | Replaces the built-in clipboard copy. Gets the value as JSON indented with two spaces. Throw or reject to show Could not copy. |
| className | `string` |  | Classes for the outer box. |

## States

- expanded: Click a branch or press Right, Enter or Space to open it. The marker turns and the children appear below, indented.
- collapsed: A closed object or array shows its count, such as { 4 keys } or [ 12 items ].
- empty: An empty object or array shows { } or [ ] and cannot be opened.
- focus: One row at a time takes the focus ring. Arrow keys, Home and End move it.
- hover: The row under the pointer gets a light background.
- truncated: A string longer than maxStringLength ends in an ellipsis with Show all. Click the row or press Enter to show all of it, and again to shorten it.
- copied: After a copy, the words Copied show next to the button with a tick for two seconds, and are announced.
- copy failed: If the clipboard or onCopy fails, Could not copy shows in the danger colour for two seconds, and is announced.
- circular: A value that contains itself shows [circular] at the point where it repeats, instead of opening forever.

## Tokens

- `--surface-sunken`
- `--surface-hover`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--success-fg`
- `--info-fg`
- `--accent-fg`
- `--danger-fg`
- `--dur-fast`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Tool input: The top level is open. The filters object shows its key count until you open it.
- Tool output with a long string: Two levels start open. The note is longer than 80 characters, so it is cut short with Show all.
- All closed: With defaultExpandDepth set to 0 only the summary row shows. Use it where space is tight.

Source: src/molecules/JsonView.tsx
