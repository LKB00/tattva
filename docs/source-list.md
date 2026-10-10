# SourceList
The numbered sources behind an answer, shown in two columns.
Status: stable. Page: https://lkb00.github.io/tattva/#component-source-list
SourceList shows a Sources heading and one card per source. Each card is a link that opens in a new tab. The numbers match the [1] markers in the reply. Place it under a reply that backs up its claims.
## When to use it

Shows where an answer came from: it lists the sources behind a reply as numbered cards, so people can check a claim. The numbers match the [1] markers in the text.

## Use it for

- Under a finished reply that cites its sources.
- Research answers where people may want to read the original.
- Next to Markdown, whose [1] markers jump to the matching card.

## Not for

- One source shown when someone hovers a marker: use `citation-hover-card`
- A single source on its own: use `source-card`

## Anatomy

- Sources heading
- Numbered card
- Title
- Website
- Short quote

## Do

- Use numbers that match the [n] markers in the reply.
- Use real page titles and websites so people can judge a source at a glance.
- Add a short quote when it shows why the source backs up the claim.
- Show it only after the reply is finished, so nothing jumps while people read.

## Avoid

- Do not show a source the reply never mentions.
- Do not reuse numbers across replies on one page. Links would point to the wrong source.
- Do not use links you have not checked. Cards open whatever link you give them.

## On a phone

- Sources show in one column on a phone and in two columns from 600px wide.
- Each source is a link that opens in a new tab, and its title is cut to one line and its snippet to two.
- A source card is taller than 44px, so the whole card is an easy tap target.

## Accessibility: built in

- It is an area named "Sources" that holds a numbered list.
- Each card is one link, read as its number, title, website and quote.
- Each card can be jumped to from a matching [1] marker in the reply.

## Accessibility: what you need to do

- Use ids that match the [n] markers in the reply, and keep them unique on the page.
- Say that links open in a new tab if that matters to your users. Screen readers are not told.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| sources (required) | `Source[]` |  | Sources to list. Source is { id: number; title: string; url: string; domain: string; snippet?: string }. |
| className | `string` |  | Extra classes merged onto the section. |

## Tokens

- `--surface`
- `--border / --border-strong`
- `--surface-sunken (hover)`
- `--lime (number badge fill)`
- `--fg-muted / --fg-subtle`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Three sources: The short quote is optional. Cards sit in two columns on wider screens.
- Beside the reply it supports: The [1] and [2] in the text point to the first and second source below.

Source: src/organisms/SourceList.tsx
