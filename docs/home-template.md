# HomeTemplate
The first screen of a new conversation: one greeting and one tray, centered.
Status: stable. Page: https://lkb00.github.io/tattva/#component-home-template
HomeTemplate centers a heading, one block of content and an optional note in a narrow column. Use it for a new conversation, where nothing should compete with the greeting. The content block answers the headline, usually a Tray with a Composer at the bottom.
## When to use it

The screen before a conversation starts. One greeting and one block of content sit in a narrow centered column, so nothing competes with getting started.

## Use it for

- A new chat, before the first message.
- A landing screen whose greeting is answered by a Tray with a message box.
- Showing the AI notice right under the starting point.

## Not for

- A conversation that has already started: use `thread-template`
- A screen with several sections or dashboards

## Anatomy

- Heading
- Tray
- Note

## Do

- Use it only for a new conversation, before the first message.
- Keep one heading and one block of content.
- Put the Composer inside the Tray so they share one width.
- Place it inside AppShell, which gives it the height to center in.

## Avoid

- Do not add more sections below the tray. Anything extra competes with the greeting.
- Do not use it once a conversation has started. Switch to ThreadTemplate.
- Do not make it wider. The narrow column keeps lines easy to read.

## On a phone

- The content sits at the top on a phone and is centred vertically from the md breakpoint up.
- Side padding is 1rem and the content column is capped at 48rem, so it fills the screen on a phone.
- The area scrolls on its own when the content is taller than the screen.

## Accessibility: built in

- The title bar holds the page's top heading, "New chat" unless you change it.
- The content scrolls when it is taller than the screen.
- Reading order matches what people see: title, greeting, content, note.

## Accessibility: what you need to do

- Use HeroHeading for the greeting, so screen readers can find it as a heading.
- Set header to name the screen if "New chat" is not right.
- Decide which control gets focus first, usually the message box.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| heading (required) | `ReactNode` |  | The greeting. Use HeroHeading. |
| children (required) | `ReactNode` |  | The block that answers the headline, usually a Tray with its Composer as footer. |
| footnote | `ReactNode` |  | A quiet line under the content, for example AIDisclosure. |

## Tokens

- `max-w-read`
- `space-y-8`
- `px-4 py-10`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Greeting, tray and AI notice: A greeting, a tray with one row and a message box, and the AI notice below.
- Empty placeholders: The same layout with plain placeholders, showing what goes where.

Source: src/templates/HomeTemplate.tsx
