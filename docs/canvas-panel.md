# CanvasPanel
A side panel for a document, code or design that stays after the chat message.
Status: stable. Page: https://lkb00.github.io/tattva/#component-canvas-panel
CanvasPanel is a titled panel that scrolls. It holds a document, code or a design. Its top bar shows the title and, if there is more than one version, Previous and Next buttons with a v of n label. It can also show Regenerate, Close and your own buttons. Use it beside the conversation in SplitCanvasTemplate.
## When to use it

A side panel for work that lasts longer than one message, such as a document, code or a design. It keeps versions, so people can go back while the chat moves on.

## Use it for

- A draft document or code that the assistant keeps editing.
- Moving between versions of the same piece of work.
- The right side of SplitCanvasTemplate.

## Not for

- A reply that only matters in the conversation: use `message`
- A code snippet inside a reply: use `code-block`

## Anatomy

- Title
- Version buttons
- Regenerate
- Your own buttons
- Close
- Scrolling content

## Do

- Give the panel a height. It fills it and scrolls its own content.
- Use it for content that stays after the message that made it.
- Start version numbers at 1, and update the content when the version changes.
- Mark made content with an AI label in your own buttons area.

## Avoid

- Do not use it for one-off messages. Replies belong in the conversation.
- Do not put the main controls for making things inside it. They belong in the main column.
- Do not give a version count above 1 without saying which version is shown, or the buttons stay hidden.

## On a phone

- It is a side panel with no phone layout of its own, so on a phone you must give it the full screen or a sheet yourself.
- It fills the height of its parent and scrolls its content inside, so the parent needs a set height.
- The title is cut to one line and the version, regenerate and close controls wrap below it. Each control has a 44px tap area on a touch screen.

## Accessibility: built in

- It is an area named by its title, and the title is also a heading.
- The version buttons sit in a group named "Version history", are named "Previous version" and "Next version", and turn off at the ends.
- Regenerate and Close are icon buttons named "Regenerate" and "Close panel".
- When the version changes, screen readers hear it, such as "Version 2 of 3".
- The content area can be reached with Tab and scrolled with the arrow keys.
- After Close, keyboard focus returns to what had focus when the panel opened, such as the button that opened it. Pass focusAfterClose to choose another place.

## Accessibility: what you need to do

- Give any buttons you pass in actions their own names.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | Artifact name. Shown truncated in the header and used as the panel's aria-label. |
| version | `number` |  | Current version, 1-based. Needed for the version switcher to appear. |
| versions | `number` | `1` | Total number of versions. The switcher shows only when this is greater than 1. |
| onVersionChange | `(v: number) => void` |  | Called with the new version number from the previous and next buttons. |
| onClose | `() => void` |  | Shows a Close panel icon button when provided. |
| onRegenerate | `() => void` |  | Shows a Regenerate icon button when provided. |
| children (required) | `ReactNode` |  | The artifact. Rendered in a scrolling body with 16px padding. |
| actions | `ReactNode` |  | Extra header controls, such as an AI badge or an Export button. |

## States

- first or last version: The previous arrow is disabled on version 1 and the next arrow on the last version.
- single version: When versions is 1 or version is not set, the version switcher is hidden.

## Tokens

- `--surface`
- `--border (line)`
- `--shadow-md`
- `--fg-muted`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Versioned document: With more than one version, Previous and Next appear and turn off at the ends.
- Title only: With no versions, Regenerate or Close, the top bar shows only the title.
- Your own buttons: Your buttons sit after Regenerate and before Close.

Source: src/organisms/CanvasPanel.tsx
