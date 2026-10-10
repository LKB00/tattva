# SelectionToolbar
A small bar that appears over highlighted text, with quick edits, a menu of more, and a box to ask for your own.
Status: stable. Page: https://lkb00.github.io/tattva/#component-selection-toolbar
SelectionToolbar offers quick AI edits for highlighted text. It shows ready-made buttons, a More options menu and a box to ask AI for your own edit. It does not position itself, so you place it near the highlighted text. Real apps should offer the same actions in a right-click menu and a keyboard shortcut, because a floating bar is hard to reach.
## When to use it

A small bar of quick AI edits for highlighted text, with a menu of more and a box to ask for your own edit. It does not position itself, so it fits into any editor.

## Use it for

- Rephrasing, shortening or changing the tone of highlighted text.
- Asking for a custom edit to a selection in your own words.

## Not for

- Showing the result of an edit before it is applied: use `suggestion-bar`
- Ideas for what to ask next in a chat: use `suggestion-chips`

## Anatomy

- Quick edit buttons
- More options menu
- Ask AI to edit box
- Send button

## Do

- Offer every action in a right-click menu and with a keyboard shortcut too.
- Show the result in a SuggestionBar, so nothing changes until it is chosen.
- Return the cursor to the text when the bar closes.
- Place the bar next to the highlighted text, because it does not position itself.

## Avoid

- Do not show it only when pointing.
- Do not apply an edit straight from a button without a preview.
- Do not add more than four or five quick edits. Put the rest in the menu.

## On a phone

- The bar wraps onto new rows. The Ask AI field is at least 192px wide and takes its own row when the chips fill the first.
- The More menu opens as a bottom sheet with a backdrop on phones, and its items are at least 44px tall.
- The ask field is 16px on touch screens, so the page does not zoom. The bar does no measuring, so place it clear of the system selection menu and the keyboard, and note that onClose only runs on Escape, which a phone does not have.

## Accessibility: built in

- Screen readers know it as a named toolbar laid out side to side.
- Tab stops once on the bar. Left and Right arrows, Home and End move between controls. In the text box, the arrows move the cursor first and leave the box only at its ends.
- The More options menu opens with Down or Up arrow and lands on the first item. Escape or Tab closes it and returns to its button.
- Escape closes the menu first. Pressing it again asks the bar to close.
- The More options button, the text box and the send button all have names for screen readers.

## Accessibility: what you need to do

- Hide the bar and return focus to the text when onClose is called.
- Offer the same actions in a right-click menu and with a keyboard shortcut, because a floating bar is hard to reach.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| presets | `SelectionAction[]` | `Rephrase, Shorten, Change tone` | Chips shown in the bar. Each has id, label and optional icon. |
| moreActions | `SelectionAction[]` | `Elaborate, More formal, More casual, Bulletize, Summarize` | Overflow menu items. An empty array hides the menu. |
| onAction | `(id: string) => void` |  | Called for a preset or menu item. |
| onAsk | `(instruction: string) => void` |  | Called with the typed instruction. The field clears after sending. |
| onClose | `() => void` |  | Called on Escape when the menu is closed. |
| label | `string` | `"Edit selected text"` | Accessible name of the toolbar. |
| moreLabel / askLabel / askPlaceholder / sendLabel | `string` |  | Copy and accessible names for the menu button, the field and the send button. |
| className | `string` |  | Extra classes on the bar. |

## States

- more open: Pressing the more button, or Arrow Down on it, opens a menu of extra edits.
- empty instruction: The send button is disabled until something is typed in the ask box.
- keyboard: Left and right arrows move between controls and Escape calls onClose.
- hover: Each preset button gets a soft background under the pointer.

## Tokens

- `--surface-raised`
- `--surface`
- `--surface-sunken`
- `--border`
- `--shadow-md`
- `--radius-control`
- `--radius-field`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- The standard bar: Tab once to enter the bar. Arrow keys move between controls. Escape closes it.
- Your own quick edits, no menu: Use your own quick edits, and drop the menu of more.

Source: src/molecules/SelectionToolbar.tsx
