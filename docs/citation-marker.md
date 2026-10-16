# CitationMarker
A small numbered link that points to a source, placed after a claim in a reply.
Status: stable. Page: https://lkb00.github.io/tattva/#component-citation-marker
CitationMarker is a small numbered tag raised slightly like a footnote. It links to the source you give it, or to a matching spot on the same page. Hovering highlights it. Place it right after the claim it supports.
## When to use it

A small raised number after a claim that links to its source, like a footnote. It keeps the sentence readable while letting people check where a fact came from.

## Use it for

- After a claim in a reply that comes from a source.
- Linking to a matching entry in a source list on the same page.

## Not for

- Showing a source's details when people point at it: use `citation-hover-card`
- The full list of sources under a reply: use `source-list`
- A label that stands outside a sentence: use `badge`

## Do

- Number markers in the order the sources first appear.
- Give each a title, so the tooltip and screen readers say what the source is.
- Give each marker a real link, or give your source list matching anchors.
- Place the marker right after the claim.

## Avoid

- Do not use it for footnotes that are not links.
- Do not reuse a number for different sources in one message.
- Do not use it outside a sentence. Use Badge for a standalone label.
- Do not rely on hover to show the source. People on touch screens never see it.

## On a phone

- The marker is only 16px tall, but on touch screens it gets an invisible tap area about 8px larger on each side.
- Its number is 12px on touch screens.
- The tooltip with the source title needs a hover, so a phone only sees the number. Show the source name in the list below the text.

## Accessibility: built in

- It is a real link, so the Tab key reaches it and Enter follows it.
- Screen readers hear "Source 1" followed by the title.
- The title also shows as a tooltip when a mouse hovers over it.
- A clear outline shows when someone tabs to it.

## Accessibility: what you need to do

- Give each marker a title, so screen readers hear what the source is, not only its number.
- Leave some space around markers in dense text. They are small to tap.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| n (required) | `number` |  | The number shown in the chip and used in the default anchor and label. |
| href | `string` | ``#source-${n}`` | Link target. Defaults to an in-page anchor named for the number. |
| title | `string` |  | Source title. Shown as the native tooltip and appended to the accessible name. |

## States

- hover: The number fills with the accent colour when the pointer is over it.
- focus: A visible focus ring appears when you reach the link with the keyboard.

## Tokens

- `--accent-soft`
- `--accent-fg`
- `--accent`
- `--on-accent`

## Examples

### In a sentence

Markers sit right after the text they support.

```tsx
<p className="max-w-sm text-body leading-5 text-fg">
  Revenue grew 12% year on year<CitationMarker n={1} title="Annual report" href="#annual-report" />, driven
  by subscriptions<CitationMarker n={2} title="Q3 earnings call" href="#earnings-call" />.
</p>
```

### Default target

With no link given, it jumps to the matching source on the same page.

```tsx
<CitationMarker n={3} />
```

Source: src/atoms/CitationMarker.tsx
