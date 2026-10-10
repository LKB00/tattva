# PromptIndex
A short list of the person's own messages in a long thread, so they can jump back to one.
Status: stable. Page: https://lkb00.github.io/tattva/#component-prompt-index
PromptIndex lists what the person asked, oldest first, one line each. Pressing a line calls onJump, and your code scrolls to that message. As a list it sits in a side panel or sheet. As a rail it is a column of short marks on the right edge of the thread that opens into the list on hover, on keyboard focus or on a tap; on a phone the rail becomes a Questions button that opens the list in a bottom sheet.
## When to use it

Long threads bury the person's own questions. This gives them a way back to any one of them without scrolling through every answer.

## Use it for

- A long chat or agent thread where people want to return to an earlier question.
- A side panel or sheet that lists the questions in this thread.
- A quiet rail on the right edge of a wide thread view.

## Not for

- Switching between different conversations: use `conversation-list`
- Getting back to the newest message: use `jump-to-latest`
- Going back to a saved point where the agent's work can be undone: use `checkpoint-list`

## Anatomy

- Navigation with a name
- Heading (list)
- Item button
- Mark
- Question text (one line)
- Time
- Questions button and sheet (rail, on a phone)

## Do

- Move focus to the message after a jump, not just the scroll position.
- Keep currentId in step with scrolling, so the rail shows where the person is.
- Use the rail on wide thread views and the list in side panels.

## Avoid

- Do not list the AI's answers. This is the person's own questions.
- Do not use it to switch conversations.
- Do not put the rail over text the person needs to read; leave room on the right of the thread.

## On a phone

- Below the sm breakpoint the rail is hidden and a Questions button with the count is shown in its place.
- The button opens the list in a bottom sheet, one question per row, and the sheet closes after a jump.
- Every item grows to at least 44px tall on a touch screen. The Questions button keeps its size and has a 44px tap area.
- On a wider touch screen the first tap on the rail only opens it; a second tap on a question jumps. Tapping elsewhere closes it.

## Accessibility: built in

- It is a nav element. The list variant is named by its visible heading; the rail is named by label.
- Each item is a button inside an ordered list. Its name is the full question and the time, even when the text is cut short on screen.
- The current item has aria-current="location" and a darker, longer mark, so it is not shown by colour alone.
- Only one item is in the Tab order (the current one, or the first). Arrow Up and Down, Home and End move focus between items. Enter and Space jump.
- A cut-off question shows in full as a tooltip on hover, and wraps to show in full when the item has keyboard focus.
- The rail opens when the pointer is over it or an item has keyboard focus. Escape closes it again and keeps focus where it was.
- On a phone, the Questions button reports aria-haspopup="dialog" and aria-expanded. The sheet puts focus on the current question. After a jump the sheet closes, focus returns to the button, and only then is onJump called, so your own focus move is not undone.
- The mark grows over --dur-fast. Under reduced motion it changes at once.

## Accessibility: what you need to do

- In onJump, scroll to the message and move focus to it (give the message tabIndex={-1}), so keyboard and screen reader users land there too.
- Keep currentId in step with the message in view, so aria-current stays true.
- Place the rail inside a positioned box that has a height, such as the thread's wrapper, so it can sit on the right edge and scroll when there are many questions.
- Pass only the person's own messages, not the AI's answers.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `{ id: string; text: string; time?: string }[]` |  | The person's own messages in this thread, oldest first. time is shown as given, so format it first. |
| currentId | `string` |  | id of the message in view. Gets aria-current and the longer mark, and is the item reached with Tab. |
| onJump (required) | `(id: string) => void` |  | Called with the id of the chosen question. Scroll to that message and move focus to it. |
| label | `string` | `"Your questions"` | Name of the navigation. Also the visible heading of the list and the title of the phone sheet. |
| variant | `"list" \| "rail"` | `"list"` | list: a plain list for a side panel or sheet. rail: short marks on the right edge that open into the list; a Questions button and sheet on a phone. |
| className | `string` |  | Classes for the outer box. For the rail, use it to position the box on the thread's right edge and give it a height. |

## States

- empty: With no items the list says "No questions yet." The rail and the phone Questions button are not drawn at all.
- hover: An item gets a soft background and darker text under the pointer. Over the rail, the pointer opens it into a list.
- focus: The focused item shows the focus ring and its text wraps to show in full. Keyboard focus inside the rail opens it.
- open: The rail opens into a raised list on hover, keyboard focus or a tap, and closes on Escape, when the pointer and focus leave, or on a tap elsewhere.
- phone: Below the sm breakpoint the rail is replaced by a Questions button that opens the list in a bottom sheet.

## Tokens

- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--line`
- `--line-strong`
- `--hover`
- `--raised`
- `--surface`
- `--dur-fast`
- `--ease-out`
- `--radius-control`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- List in a side panel: The plain list. Use it inside a side panel or your own sheet. The current question is marked.
- Rail on a long thread: Hover, tab into or tap the marks on the right to open the list. Picking a question scrolls the thread and moves focus to that message. Scrolling updates the current mark. On a phone a Questions button takes the rail's place.

Source: src/organisms/PromptIndex.tsx
