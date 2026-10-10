# AvatarStack
A few overlapping avatars, a plus, then how many more people there are.
Status: stable. Page: https://lkb00.github.io/tattva/#component-avatar-stack
AvatarStack shows that people are here or took part, without listing everyone. It draws the first few avatars, a plus, then the number of others. Use it for viewers of a page, people in a shared chat, or who voted. The picture is decoration; screen readers hear one sentence with the names and the count.
## When to use it

Shows that people are here or took part, without listing them all. The avatars overlap to stay small, and the number says how many more there are.

## Use it for

- Who is viewing a page or document right now.
- Who is in a shared chat.
- Who voted, reacted or took part in something.

## Not for

- A single person: use `avatar`
- A full list of names that people need to read or pick from

## Anatomy

- Avatars
- Plus
- Count
- Label

## Do

- Use real counts only. If you cannot count it, do not show it.
- Put the people the viewer knows first.
- Name what is counted with label, for example "voted" or "viewing now".
- Keep it to three faces. More faces add noise, not trust.

## Avoid

- Do not invent or round up numbers to look popular.
- Do not make the stack the only way to see who is there. Link to the full list when people need it.
- Do not use it for one person. Use Avatar.
- Do not colour the plus or the number. Lime belongs to the assistant.

## On a phone

- Stays inline and keeps its size, so it fits beside a title or in a row on a narrow screen.
- It is not a tap target. A button around it gets a 44px tap area on touch screens, but a link around it needs the tap class or its own padding.
- Names and the count are read from a hidden sentence, so nothing depends on hover.

## Accessibility: built in

- Screen readers hear one sentence with the names and the count, for example "Lokesh, Mira, Asha and 1,245 others". The drawn avatars and number are skipped.
- The assistant is read as "Assistant" in that sentence.
- The number uses equal-width digits, so it does not jump when it changes.
- A ring in the page color separates overlapping avatars in light and dark mode.

## Accessibility: what you need to do

- Wrap it in a link or button if it should open the full list. On its own it cannot be pressed.
- Set total to everyone counted, so the sentence screen readers hear gives the right number.
- Pick a label that reads well after the number, such as "viewers" or "others".

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| people (required) | `{ name: string; kind?: "user" \| "ai" }[]` |  | People to show, most relevant first. Only the first max are drawn. |
| total | `number` | `people.length` | Everyone counted, including the ones drawn. The number shown is the rest. |
| max | `number` | `3` | How many avatars to draw before the plus. |
| label | `string` | `"others"` | Word after the number, for example "voted" or "viewing". |
| size | `"sm" \| "md"` | `"md"` | 24px or 32px avatars. |
| compact | `boolean` | `false` | Show 1.2k instead of 1,248. |
| className | `string` |  | Merged after the base classes. |

## States

- overflow: When total is larger than the people shown (or max cuts the list), a plus disc and a count appear.
- compact: Pass compact to shorten large counts, for example 1.2K.

## Tokens

- `--bg`
- `--border`
- `--surface`
- `--fg`
- `--fg-muted`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Three people and the rest: The default: three avatars, a plus, and how many others.
- Short numbers and a custom word: Use compact for big counts, and name what is being counted.
- With the assistant, small: In a shared chat the assistant can be one of the faces. Small fits beside a title or in a list row.

Source: src/molecules/AvatarStack.tsx
