# SourceCard
A numbered link card for one source.
Status: stable. Page: https://lkb00.github.io/tattva/#component-source-card
SourceCard is a link in a box. It has a numbered lime-tinted marker, a title, the website name and an optional short excerpt. The matching CitationMarker jumps to it. It opens in a new tab. Put several in a numbered list.
## When to use it

One numbered source that an answer drew on. The number matches the citation in the text, so people can check where a claim came from.

## Use it for

- The list of sources under a reply.
- A place for citation markers in the text to jump to.

## Not for

- The marker inside the sentence itself: use `citation-marker`
- A whole set of sources laid out in columns: use `source-list`

## Anatomy

- Number marker
- Title
- Website
- Excerpt

## Do

- Put cards in a numbered list so they match the small numbers in the text.
- Keep numbers steady and matching the CitationMarkers.
- Add an excerpt when the title alone is unclear.

## Avoid

- Do not use lime for text. Here it only fills the small number circle.
- Do not leave the website blank. It tells people where the link goes.
- Do not use it outside a list.

## On a phone

- The whole card is one link that opens in a new tab, so the tap target is the full card.
- The title is cut to one line and the snippet to two lines, so every card stays short.
- Render it inside a list that sets the columns. The card itself fills the width it is given.

## Accessibility: built in

- The whole card is one link. Screen readers read the number, title, website and excerpt in order.
- Long titles and excerpts are cut short on screen, but screen readers still read all of it.
- Each card carries an anchor for its number, so citation markers can jump to it.
- The rise-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Put cards in a numbered list (ol), so screen readers hear the count.
- Say in the nearby text that sources open in a new tab.
- Give every source its own number, matching its citation marker.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| source (required) | `Source` |  | Object with id (number), title (string), url (string), domain (string) and snippet (string, optional). The id forms the li anchor source-{id}. |

## States

- hover: The card gets a stronger border and a soft background under the pointer.
- focus: A visible focus ring appears when you reach the card link with the keyboard.
- truncated: A long title is cut to one line and a long snippet to two lines.

## Tokens

- `--lime`
- `--border`
- `--border-strong`
- `--surface`
- `--surface-sunken`
- `--fg-subtle`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Source list: The numbers match the small numbers in the text.

Source: src/molecules/SourceCard.tsx
