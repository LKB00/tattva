# CitationHoverCard
A small number in a sentence that shows where a fact came from.
Status: stable. Page: https://lkb00.github.io/tattva/#component-citation-hover-card
CitationHoverCard is a small number placed inside AI-written text. It opens a card with the source's title, website, a short quote, a trust label, and a link to the source. Point at it or tab to it to open the card. Click or tap to keep it open. Escape closes it.
## When to use it

A small number placed right after a fact that shows where it came from. The source card opens on pointing, tabbing or tapping, so checking a claim never needs a mouse.

## Use it for

- A fact in an AI answer that comes from a web page or document.
- Showing a source's title, website, a short quote and a trust label without leaving the text.

## Not for

- The full list of sources for an answer: use `source-list`
- A plain numbered link to a source, with no card: use `citation-marker`
- A source shown as a card of its own: use `source-card`

## Anatomy

- Number
- Site icon or first letter
- Website
- Trust label
- Title
- Short quote
- Link to the source

## Do

- Put the number right after the fact it supports.
- Show a trust label only when you have a real reason.
- Keep quotes short and taken straight from the source.
- Add a Sources list too, so every source is in one place.

## Avoid

- Do not make pointing at it the only way to reach the source.
- Do not use a trust label as a score without saying how it is decided.
- Do not use it where the card would cover the text being read.

## On a phone

- A tap opens the card and pins it. Tap the number again or tap outside to close it.
- The number is a small inline button. On touch screens it keeps its size and has a 44px tap area, so the line it sits in does not get taller.
- On a phone the card is fixed along the bottom of the screen, 1rem in from each side and above the bottom safe area, so it cannot run off the edge. The Open source link is small text with no 44px target.

## Accessibility: built in

- The number is a button named like "Source 1: energy.example.gov", and it tells screen readers whether the card is open.
- The card opens on pointing, on tabbing to it and on click. A click keeps it open, which is how touch screens use it.
- Escape closes the card and returns to the number. Moving focus away also closes it.
- The card's link can be reached with Tab, and the trust label is written in words.

## Accessibility: what you need to do

- Also list every source in a Sources list, so people can reach them all without opening each card.
- Place the number right after the fact it supports, so the link between them is clear when read aloud.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| n (required) | `number` |  | Citation number shown in the marker. |
| title (required) | `string` |  | Source title. |
| domain (required) | `string` |  | Source domain. Part of the marker's accessible name. |
| url (required) | `string` |  | Target of the open link. |
| snippet | `string` |  | Short excerpt, clamped to three lines. |
| trust | `string` |  | Trust label as text, such as Government or Academic. |
| favicon | `ReactNode` |  | Small mark for the source. Defaults to the first letter of the domain. |
| openLabel | `string` | `"Open source"` | Text of the link. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- hover: Moving the pointer onto the number opens a source card above it, and leaving closes it.
- focus: Focusing the number with the keyboard opens the card too.
- pinned: Clicking the number keeps the card open until you click it again, click outside or press Escape.

## Tokens

- `--accent-soft`
- `--accent-fg`
- `--surface-raised`
- `--border`
- `--shadow-lg`
- `--fg-muted`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Inline in a sentence: Point at the number, tab to it, or tap it. Press Escape to close.
- Without a quote or trust label: Only what you have. The site icon falls back to the first letter of the website.

Source: src/molecules/CitationHoverCard.tsx
