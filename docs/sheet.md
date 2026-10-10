# Sheet
A panel that slides over the page from the bottom, right or left edge, with a drag handle on bottom sheets.
Status: stable. Page: https://lkb00.github.io/tattva/#component-sheet
Sheet is a modal surface built on the native dialog element. The page behind it cannot be reached or scrolled while it is open. A bottom sheet has a handle you can drag down to close, and the same handle is a Close button for keyboard and screen readers. Side sheets run the full height of the screen.
## When to use it

Shows a short task or a set of details on top of the page without leaving it. It feels close to the page behind it, so it suits quick looks and short decisions.

## Use it for

- A case summary or detail view that opens from a list on a phone.
- A side panel for filters, settings or order details.
- A step the person must finish, with dismissing turned off and buttons in the footer.

## Not for

- A short question that needs a yes or no: use `dialog`
- A panel that stays beside the page while people keep working: use `canvas-panel`
- A list of actions on one item: use `menu`

## Anatomy

- Scrim
- Drag handle (bottom sheet)
- Title
- Close button (side sheet)
- Body
- Footer

## Do

- Keep the content short enough to scan in one sitting.
- Put the main action last in the footer.
- Use a bottom sheet on phones and a side sheet for details beside a list.
- Give the sheet a title that says what it is, such as Case summary.

## Avoid

- Do not stack one sheet on another.
- Do not use it for a one-line confirmation. Use a Dialog.
- Do not turn off dismissing without a visible button that closes it.
- Do not put long forms in a bottom sheet. Use a page.

## On a phone

- A bottom sheet rises from the screen edge, is capped at 40, 65 or 90 percent of the screen height by size, and scrolls inside its body.
- Drag the handle down more than 80px, or flick it, to close. The handle is 44px tall on a touch screen, and a tap on it also closes.
- The footer buttons stack in a column on a phone and sit in a row from 640px wide, and the footer keeps clear of the home bar with the bottom safe area.
- Side sheets have no drag, leave a 40px strip of the page showing, and close with a 44px button or a tap on that strip.

## Accessibility: built in

- It is a native dialog opened with showModal, so the page behind is inert and Tab stays inside.
- The title is the heading and the name of the dialog.
- Focus moves to the first control in the body or footer, or to the sheet itself, and returns to the opener on close.
- Escape closes it when dismissible is true.
- On a bottom sheet, the drag handle is a button named Close, so a keyboard or screen reader user can close it without dragging.
- Page scrolling is locked while it is open.
- Sliding only happens when the person has not asked for reduced motion.
- Touch targets of the handle and the side sheet Close button grow to 44px on touch screens.

## Accessibility: what you need to do

- Pass a title that names the sheet. It is the heading and the accessible name.
- Set open to false when onClose is called, or the sheet cannot close.
- When dismissible is false, give people a visible way out in the footer.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| open (required) | `boolean` |  | Whether the sheet is showing. Fully controlled. |
| onClose (required) | `() => void` |  | Called when the sheet asks to close: Escape, a scrim tap, the Close control or a drag past the limit. Set open to false in response. |
| title (required) | `string` |  | Rendered as the heading and used as the sheet's name through aria-labelledby. |
| side | `"bottom" \| "right" \| "left"` | `"bottom"` | Which edge the sheet slides in from. |
| children | `ReactNode` |  | The body. It scrolls when it is taller than the sheet. |
| footer | `ReactNode` |  | Usually buttons, pinned under the body. |
| dismissible | `boolean` | `true` | When false, Escape, a scrim tap and dragging do nothing and the Close control is not drawn. |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Width of a side sheet. Height cap of a bottom sheet, as a share of the screen height (40, 65 or 90 percent). |
| className | `string` |  | Classes for the sheet panel. |

## States

- open or closed: The page behind is inert and cannot scroll, and focus moves into the sheet. Focus returns to the opener on close.
- closed: With open false nothing is drawn and the page behaves as normal.
- dragging: On a bottom sheet, holding the handle moves the sheet down with the pointer. Past 80px, or a fast flick, it closes. Otherwise it springs back.
- closing: After open turns false the sheet slides back out (about a third of a second) before it is removed, and focus returns to the opener once it has gone. With reduced motion it is removed at once.
- scrolling body: When the body is taller than the sheet, only the body scrolls and the title and footer stay in view.
- focus: A visible focus ring shows on the handle, the Close button, footer buttons and body controls when reached by keyboard.
- hover: The Close button on a side sheet gets a tinted background under the pointer.

## Tokens

- `--scrim`
- `--surface-raised`
- `--border`
- `--border-strong`
- `--ease-out`
- `--dur-slow`
- `--shadow-lg`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Bottom sheet with a case summary: Opens from the bottom edge. Drag the handle down, press Escape, tap the scrim or use the Close handle to dismiss it.
- Side sheet on the right: Full height, sliding in from the right. Use size to choose the width.
- Not dismissible, with a footer: Escape, the scrim and dragging do nothing, and there is no Close control. Only the footer buttons close it.

Source: src/organisms/Sheet.tsx
