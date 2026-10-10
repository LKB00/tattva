# SuggestionChips
A row of ready-made questions a person can pick.
Status: stable. Page: https://lkb00.github.io/tattva/#component-suggestion-chips
SuggestionChips shows a few ready-made questions as small buttons. When a person picks one, your app gets the exact words and decides whether to fill the message box or send it. Use it on an empty chat and after a reply to make the next step easy.
## When to use it

Gives a person a ready-made next step instead of a blank box. Each suggestion is a short button holding the exact words.

## Use it for

- An empty chat, to show what the assistant can do.
- After a reply, to offer likely follow-up questions.

## Not for

- A whole first screen with starting ideas and what the assistant can do: use `starter-gallery`
- Showing what the chat is about: use `context-pill`
- Picking one setting from a few options: use `segmented-control`

## Anatomy

- List
- Suggestion

## Do

- Offer three to five suggestions, worded the way the person would say them.
- Make each one a complete request that makes sense on its own.
- Change them as the conversation moves on.

## Avoid

- Do not show suggestions while a reply is still appearing. They compete with it.
- Do not repeat the same suggestion twice.
- Do not use long sentences. A paragraph inside a small button is hard to read.

## On a phone

- Chips wrap onto new rows instead of scrolling sideways.
- Each chip keeps its size and has a 44px tap area on touch screens.
- A tap calls onPick, and no part of it needs hover.

## Accessibility: built in

- The list is named "Suggested prompts", and screen readers hear how many suggestions there are.
- Each suggestion is a real button that reads its own words.
- The Tab key reaches each suggestion, and Enter or Space picks it.

## Accessibility: what you need to do

- Move the keyboard to the message box, or wherever fits, after a pick.
- Give every suggestion different words. They are told apart only by their words.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| suggestions (required) | `string[]` |  | Prompt texts to show. Each string is also used as its key, so keep them unique. |
| onPick (required) | `(s: string) => void` |  | Called with the chosen suggestion. |

## States

- hover: A chip gets a stronger border and a soft background under the pointer.
- focus: A visible focus ring appears on a chip when you reach it with the keyboard.
- empty: Pass an empty suggestions array and no chips are shown.

## Tokens

- `--border`
- `--border-strong`
- `--surface`
- `--surface-sunken`
- `--fg-muted`
- `--fg`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Pick a prompt: It does not remember the choice. Here the demo keeps it.

Source: src/molecules/SuggestionChips.tsx
