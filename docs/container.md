# Container
A centered column with a set width and margins on the sides.
Status: stable. Page: https://lkb00.github.io/tattva/#component-container
Container limits how wide a column can get: chat, home, page or full. It adds margins on the sides that grow on larger screens. The widths are proposals to confirm.
## When to use it

A centered column with a maximum width and side margins. Long lines are hard to read, so the chat width keeps a conversation at a comfortable line length.

## Use it for

- The conversation and the message box, with the chat width so they line up.
- Settings and documentation pages, with the page width.
- A home screen, with the home width.

## Not for

- Laying out columns inside the page: use `grid`
- Spacing items in a column: use `stack`

## Anatomy

- Side margins
- Column with a maximum width

## Do

- Use chat width for the conversation and the message box so they line up.
- Use page width for settings and documentation.
- Use the main element once per page.
- Let side margins grow on larger screens.

## Avoid

- Do not put containers inside containers.
- Do not hard-code widths in components.
- Do not use full width for running text.
- Do not let chat lines run past about 80 characters.

## On a phone

- On a phone it fills the width with a 16px side margin, and the width presets do not apply because they are all wider than a phone.
- Use flush when content such as an image must reach the screen edge.
- It adds no safe-area padding, so add that yourself where content sits against a notch or the bottom bar.

## Accessibility: built in

- It adds no meaning of its own: it renders the element you choose.
- Side margins keep text off the screen edge at every size, unless you turn them off with flush.
- The chat and home widths keep lines of text to a readable length.

## Accessibility: what you need to do

- Set as to main for the main area of the page, and use main only once per page.
- Do not use the full width for running text, because very long lines are hard to read.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| size | `"chat" \| "home" \| "page" \| "full"` | `"page"` | Max-width preset. chat 768px, home 680px, page 1120px, full uncapped. |
| flush | `boolean` | `false` | Removes the side margins for content that bleeds to the edge. |
| as | `"div" \| "main" \| "section" \| "article" \| "header" \| "footer" \| "nav"` | `"div"` | Element to render. |

## Tokens

- `--w-chat`
- `--w-home`
- `--w-page`
- `--margin`

## Examples

### Chat width

This width fits about 70 to 75 characters a line at normal text size.

```tsx
<Container size="chat">
  <Stack>…thread…</Stack>
</Container>
```

### Page and home widths

```tsx
<Container size="home">…</Container>
<Container size="page">…</Container>
```

Source: src/atoms/Container.tsx
