# CommandPalette
A search box and a list of actions in a modal window. Type to narrow the list, then press Enter.
Status: stable. Page: https://lkb00.github.io/tattva/#component-command-palette
CommandPalette lets people reach any action by typing a few letters. It follows the combobox and listbox pattern: focus stays in the search field while the arrow keys move through the options. It adds no keyboard shortcut of its own, so your app decides how it opens.
## When to use it

Gives quick, keyboard-first access to many actions without a menu for each. Typing narrows the list and Enter runs the top choice.

## Use it for

- An app with many actions that people would rather type than hunt for.
- Jumping between places, or running an action from the keyboard.
- Showing shortcuts people can learn over time.

## Not for

- A short menu of actions for one item: use `tool-menu`
- A small panel of choices next to a button: use `popover`
- A confirm or a form: use `dialog`

## Anatomy

- Backdrop
- Panel
- Search field
- Esc hint
- Group heading
- Option (icon, label, hint, shortcut)
- Empty message

## Do

- Add a visible button that opens it, as well as any shortcut.
- Group commands under short headings.
- Add keywords for the other names people might type.
- Show a shortcut only when it really works.
- Keep labels short and start them with a verb or a place.

## Avoid

- Do not make it the only way to reach an action.
- Do not register a shortcut inside it. Your app owns that.
- Do not use it for a form or a confirm. Use a Dialog.
- Do not put long text or controls inside an option.
- Do not give two commands the same label.

## On a phone

- The palette fills the width with a 12px margin and sits at the top, taking up to the full screen height; from 640px it is centered lower and capped at 30rem.
- The search field is 16px so the page does not zoom, the Esc hint is hidden on a phone, and results scroll inside the list.
- Result rows are 44px tall on a touch screen, and the shortcut hints on each row are hidden on a phone.
- There is no keyboard shortcut to open it on a phone, so give people a button that opens it.

## Accessibility: built in

- The search field is a combobox with aria-expanded, aria-controls and aria-activedescendant. The list is a listbox with options, and groups are labelled by their headings.
- Focus stays in the search field. Arrow Up and Down move the active option and wrap round. Home and End jump to the first and last. Enter runs the active command and closes. Escape closes.
- Typing filters by label, keywords and group. The count ("5 results") is announced in a polite live region.
- It is a native modal dialog, so the page behind is inert. Focus returns to the element that opened it when it closes, and the page does not scroll behind it.
- The active option scrolls into view inside the list.
- Options are 44px tall on touch screens. The active option also gets an outline in forced-colors mode.
- Movement only plays when motion is not reduced.

## Accessibility: what you need to do

- Give it a label that says what it does, such as "Commands".
- Add a visible button that opens it. A shortcut alone does not help people who cannot use the keyboard shortcut.
- Wire your shortcut yourself, for example Ctrl or Cmd plus K on the document, and call preventDefault on it.
- Make each shortcut shown in a command real. The palette only displays it.
- Keep command labels short and unique, because they are the options' names.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| open (required) | `boolean` |  | Whether the palette is showing. Your code owns it. The search text resets each time it opens. |
| onClose (required) | `() => void` |  | Called on Escape, a click on the backdrop, and after a command is chosen (just before its onSelect). |
| commands (required) | `PaletteCommand[]` |  | The actions. Each has id, label, onSelect, and optionally group, hint, icon, shortcut, keywords and disabled. |
| commands[].id (required) | `string` |  | Unique key for the command. |
| commands[].label (required) | `string` |  | The name shown and searched. Matches at the start rank first. |
| commands[].group | `string` |  | Heading it is listed under. Commands without a group sit above the headings. |
| commands[].hint | `string` |  | Small helper text under the label. |
| commands[].icon | `ReactNode` |  | Shown before the label. Hidden from screen readers. |
| commands[].shortcut | `string` |  | Shown as a key hint. Display only. |
| commands[].keywords | `string[]` |  | Extra words that find the command. |
| commands[].disabled | `boolean` |  | Shown dimmed, marked aria-disabled, skipped by the arrow keys and ignored on click. |
| commands[].onSelect (required) | `() => void` |  | Runs when the command is chosen with Enter or a click. |
| placeholder | `string` | `"Type a command…"` | Hint text in the search field. |
| emptyText | `string` | `"No matching commands"` | Shown when nothing matches. |
| label (required) | `string` |  | Accessible name of the dialog, the search field and the list. |
| className | `string` |  | Classes added to the panel. |

## States

- open or closed: Set with the open prop.
- closed: With open false nothing is drawn. The search text and active option reset the next time it opens.
- empty: When no command matches the typed text, or none are passed, the empty text is shown and the result count says No results.
- active option: One option is highlighted and named by aria-activedescendant. Arrow keys, Home, End and the pointer move it.
- disabled option: A command with disabled is dimmed, marked aria-disabled, skipped by the arrow keys and ignored on click.
- filtered: Once text is typed, the list is narrowed and ranked, with label-prefix matches first, and the count is announced.

## Tokens

- `--surface-raised`
- `--surface-hover`
- `--border`
- `--scrim`
- `--shadow-lg`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--dur-base`
- `--focus-ring`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Grouped commands opened by a button: Commands under a group name get a heading. Typing narrows the list, matches at the start of a label come first, and a disabled command is shown but skipped by the arrow keys.
- Opened with Ctrl K or Cmd K: The palette registers no shortcut. Your app adds one. In an app, attach the listener to the document; here it is on the box so it does not clash with this site's own search.
- No results: When nothing matches, or no commands are passed, the list shows the empty text. Screen readers hear "No results" once someone has typed.

Source: src/organisms/CommandPalette.tsx
