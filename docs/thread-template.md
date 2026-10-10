# ThreadTemplate
A conversation that scrolls, with the message box fixed at the bottom.
Status: stable. Page: https://lkb00.github.io/tattva/#component-thread-template
ThreadTemplate has an optional title row, a scrolling conversation and a message box that stays at the bottom. The conversation and message box share one width, so text and input line up. It needs a parent that stacks things top to bottom, such as the main area of AppShell.
## When to use it

A conversation that scrolls, with the message box fixed at the bottom. Both share one width, so the text people read and the box they type in line up.

## Use it for

- Any chat once the first message is sent.
- A running workflow shown as a conversation, with checklists and approval requests.
- A screen with a title bar and controls such as Share.

## Not for

- A new chat before the first message: use `home-template`
- Work that should stay in view beside the chat: use `split-canvas-template`

## Anatomy

- Title row
- Scrolling conversation
- Message box at the bottom
- Note

## Do

- Place it directly inside AppShell so it fills the main area.
- Wrap messages in MessageList so screen readers announce new ones.
- Use it for workflows too. It can hold a checklist, steps and approval requests.
- Use the note for the AI notice so it stays close to the input.

## Avoid

- Do not put it in a space with no set height. The conversation cannot scroll and the message box will not stay at the bottom.
- Do not put the message box inside the conversation. It would scroll away.
- Do not give the conversation a different width. The shared width keeps text and input lined up.

## On a phone

- Side padding is 1rem on a phone and 1.5rem from the sm breakpoint, and the column is capped at 48rem.
- The messages scroll in their own area while the composer stays at the bottom.
- The composer area adds the bottom safe area to its padding, so it clears the home bar on a phone.

## Accessibility: built in

- The title bar holds the page's top heading.
- The message box sits outside the scrolling area, so it never scrolls away.
- Reading order goes title, conversation, message box, note.

## Accessibility: what you need to do

- Wrap messages in MessageList, so screen readers hear new ones. The template announces nothing.
- Pass a header. Without one, the page's top heading is empty.
- Place it inside AppShell, which supplies the main area.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| header | `ReactNode` |  | Optional title row above the thread. Rendered in a 56px header element. |
| children (required) | `ReactNode` |  | The conversation or workflow body. Scrolls inside a max-w-3xl column. |
| composer (required) | `ReactNode` |  | The input, pinned to the bottom in the same column width as the body. |
| footnote | `ReactNode` |  | Rendered under the composer, for example AIDisclosure. |

## Tokens

- `max-w-3xl`
- `--fg-muted (header)`
- `px-4 sm:px-6 gutters`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A conversation with a message box: The title sits above the conversation. Messages scroll while the message box stays put.
- Empty placeholders: With no title, the content starts at the top. Anything can fill the conversation, not only messages.

Source: src/templates/ThreadTemplate.tsx
