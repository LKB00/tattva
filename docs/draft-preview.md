# DraftPreview
A drafted message shown like an email, with headers and a body that opens up to the full text.
Status: stable. Page: https://lkb00.github.io/tattva/#component-draft-preview
DraftPreview shows text an AI wrote on a person's behalf in the shape of the real thing: To, From and Subject rows, then the body. The body shows the first few lines and fades out until the person chooses to read the rest. It never opens by itself.
## When to use it

Makes sure nobody approves a message they have not read. The draft looks like what it is, and the full text is one press away.

## Use it for

- An email or letter an agent drafted, shown before it is sent.
- A message with To, From and Subject lines.
- Any long generated text that needs a read-before-approve step.

## Not for

- A hidden section of ordinary content: use `collapsible`
- The approve and deny buttons themselves: use `approval-prompt`
- A note or warning in the page: use `callout`

## Anatomy

- Header rows
- Body
- Fade
- Expand button
- Footer note

## Do

- Show the real To, From and Subject so the draft looks like the sent message.
- Tell people what happens next in the footer, such as when it is sent.
- Keep approval off until the person has had the chance to open the draft.

## Avoid

- Do not open it for the person. It stays collapsed until they choose.
- Do not give a made-up word count.
- Do not use it for text the person wrote themselves.

## On a phone

- It shows the first few lines (4 by default) with a fade, and the show more button is at least 44px tall on a touch screen.
- The header rows and the text break long words, so an address or link cannot push the card wider than the screen.
- The line count is measured again when the width changes, so the button disappears if the text fits.

## Accessibility: built in

- The collapsed text is only clipped by size and a fade. Screen readers still read all of it.
- The fade is hidden from screen readers.
- The expand control is a real button with aria-expanded and aria-controls pointing at the body.
- Headers are a definition list, so each label is tied to its value.
- The button is at least 44px tall on touch screens.
- When the text fits in the preview lines, no button is drawn.

## Accessibility: what you need to do

- Put the approve button after the preview, so it comes later in the reading order.
- Pass a wordCount that is true, since it appears in the expand button.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| headers | `{ label: string; value: ReactNode }[]` |  | Rows such as To, From and Subject, drawn as a labelled definition list above the body. |
| children (required) | `ReactNode` |  | The body text. |
| wordCount | `number` |  | Shown in the expand button, such as Read all 95 words. |
| previewLines | `number` | `4` | How many lines show before the text fades out. |
| defaultOpen | `boolean` | `false` | Starting state when you do not control open. |
| open | `boolean` |  | Controlled open state. Pair it with onOpenChange. |
| onOpenChange | `(open: boolean) => void` |  | Called with the new state when the button is pressed. |
| expandLabel | `(words: number \| undefined) => string` | `Read all N words` | Text of the button while collapsed. Receives wordCount. |
| collapseLabel | `string` | `"Show less"` | Text of the button while open. |
| footer | `ReactNode` |  | A line under the message, such as Nothing goes out without your tap. |
| className | `string` |  | Classes for the outer card. |

## States

- open or closed: Only the first previewLines lines show, with a fade at the bottom. This is the starting state unless defaultOpen or open is set.
- expanded: The full text shows, the fade is gone and the button reads Show less.
- fits: When the text is no longer than the preview lines, there is no fade and no button.
- focus: A visible focus ring shows on the expand button when reached by keyboard.
- hover: The expand button text is underlined under the pointer.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--dur-fast`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Email style with headers: The headers sit above the body. Only the first four lines show until the person presses the button.
- Short and plain: A text that fits in the preview lines shows in full, and no expand button is drawn.
- Controlled open state: Your code keeps the open value, so it can, for example, keep Approve off until the draft has been opened.

Source: src/molecules/DraftPreview.tsx
