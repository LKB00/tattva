# EmptyState
A message for an area with nothing in it: a drawing, a title that says why, one line, and one button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-empty-state
EmptyState has up to five parts: a drawing, a title, one line of text, one main button and an optional second link. Seven ready-made versions cover first use, no results, cleared, error, permission, offline and usage limit. Each says why the area is empty first, then what to do next. You can change every word.
## When to use it

Fills an area that has nothing to show with a reason and one next step. Saying the cause first stops people wondering whether something broke.

## Use it for

- A first visit, before anything has been made.
- A search or filter with no results.
- An area where everything is done, or that cannot load, is private or is offline.

## Not for

- A short error inside a page or reply: use `error-state`
- A usage limit inside a chat: use `rate-limit-notice`
- Content that is still loading: use `skeleton`

## Anatomy

- Drawing
- "Action needed" tag (permission and usage limit)
- Title
- Text
- Main button
- Second link

## Do

- Say why in the title and what to do next on the button.
- Treat a filtered list differently from one that is truly empty.
- Offer one main button and at most one second link.
- Keep words short and plain, and never point to another part of the app as the only way out.

## Avoid

- Do not leave a dead end. Every screen needs a way forward, or a reason there is none.
- Do not use amber unless a person must act.
- Do not let the drawing be the only explanation.
- Do not use several drawings on one screen.

## On a phone

- The panel fills the width, with the art, text and buttons stacked in one column.
- Text is capped at 44 characters wide and the title breaks anywhere, so long titles do not overflow.
- The action and secondary buttons wrap onto separate lines when they do not fit, and each button has a 44px tap area on touch screens.

## Accessibility: built in

- The title is a real heading.
- Screen readers announce it only for no results and offline, which follow something the person did or a change in the connection. The others are not announced every time a page loads.
- The built-in drawing is hidden from screen readers. A drawing you pass keeps its own name.
- The amber "Action needed" tag has an icon and words, so the need to act is not shown by color alone.

## Accessibility: what you need to do

- Set headingLevel so the title fits the headings around it.
- Give the button or link you add words that name the next step.
- Turn on live when your own empty state appears after something the person did.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variant | `"first-use" \| "no-results" \| "cleared" \| "error" \| "permission" \| "offline" \| "rate-limit"` | `"first-use"` | Sets default art, copy, tone and live behavior. |
| art | `ReactNode \| null` |  | Replaces the variant's illustration. Pass an Illustration or a Pictogram, or null for none. |
| title | `string` |  | Names the cause or invites the first step. Defaults per variant. |
| children | `ReactNode` |  | One-line body with the next step. Defaults per variant. |
| action | `ReactNode` |  | The one primary action, usually a Button. |
| secondary | `ReactNode` |  | Optional secondary link or ghost button. |
| layout | `"center" \| "start"` | `"center"` | Center for full panels. Start left-aligns text in small areas. |
| compact | `boolean` | `false` | Omits the art and tightens spacing. |
| headingLevel | `2 \| 3 \| 4` | `3` | Heading level of the title. |
| live | `boolean` |  | Overrides role="status". By default it is on for no-results and offline only. |
| attentionLabel | `string` | `"Action needed"` | Text of the amber chip in the permission and rate-limit variants. |
| className | `string` |  | Extra classes for the container. |

## States

- first use: The default variant shows an empty-chat drawing, a title and a short body for a first visit.
- no results: Set variant to no-results for a search drawing; it is announced to screen readers as a status.
- cleared: Set variant to cleared for a success drawing when everything is done.
- error: Set variant to error for an error drawing and a message that the work is safe.
- permission: Set variant to permission for a lock drawing and an Action needed tag.
- offline: Set variant to offline for a plug drawing; it is announced as a status.
- rate limit: Set variant to rate-limit for an hourglass drawing and an Action needed tag.
- compact: Pass compact to drop the drawing and tighten the padding.

## Tokens

- `--surface`
- `--border`
- `--fg-muted`
- `--attention-soft`
- `--attention-fg`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- First use: A truly empty area invites the first step. The title is positive and the button does what it says.
- No results, left-aligned: A filtered list is not the same as an empty one. Say the filters caused it and offer to clear them. Left-align the text in small areas.
- Permission: A person has to act here, so this version adds an amber tag with an icon and words, next to a line that says why.
- Compact, no art: Crowded places such as a table or a menu skip the drawing.

Source: src/molecules/EmptyState.tsx
