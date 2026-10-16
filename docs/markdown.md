# Markdown
Turns the assistant's formatted text into headings, lists, links and tables, even while it is still being written.
Status: stable. Page: https://lkb00.github.io/tattva/#component-markdown
Markdown shows formatted text safely. It handles headings, bold, italic, links, lists, quotes, tables, dividers and code. Lists can go three levels deep. A code block that is not finished yet still shows as code while the reply is being written. Markers like [1] become small source numbers. Only web and email links work.
## When to use it

Turns the assistant's formatted text into real headings, lists, tables and code. It builds the page safely and copes with text that stops halfway, so it can show a reply while it is still arriving.

## Use it for

- The body of an assistant reply.
- A reply that is still being written: pass all the text so far each time.
- A draft document shown inside a CanvasPanel.

## Not for

- A code sample on its own, outside a reply: use `code-block`
- Text that people need to edit

## Anatomy

- Headings and paragraphs
- Bold, italic and links
- Source numbers
- Lists (up to 3 levels) and quotes
- Tables
- Code blocks

## Do

- Put it in a container that sets text size and spacing.
- While the reply is being written, give it all the text so far each time.
- Show a SourceList under the reply so the [1] markers point somewhere.
- Use it for assistant replies, where the content is not known ahead of time.

## Avoid

- Do not expect images, web code, checkbox lists or lists deeper than three levels. Deeper items stay at level three.
- Do not add web code to the text. It is shown as plain text.
- Do not use it to edit documents. It only displays text.
- Do not rely on it for the page's heading structure. Its headings sit below the page title.

## On a phone

- Tables and code blocks scroll sideways inside their own box, so a wide one never pushes the page wider.
- Source markers like [1] get a larger invisible tap area on a touch screen.
- Paragraphs wrap long unbroken words and addresses, so they do not push the page wider.

## Accessibility: built in

- Headings are marked as headings, one level below the page title.
- Lists are real lists, so screen readers say how many items there are and how deep they go.
- Table columns have headers, and a wide table can be reached with Tab and scrolled sideways.
- Source markers like [1] are links that screen readers hear as "Source 1".
- Only web and email links become links, and they open in a new tab. The text cannot add scripts to the page.

## Accessibility: what you need to do

- Put it inside a Message with streaming on while the reply arrives, so screen readers are not interrupted by every word.
- Show a SourceList on the same page, so source markers lead somewhere.
- Ask for link text that makes sense on its own, not "click here".

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `string` |  | The Markdown source. Partial text is fine. Re-render with the growing string while streaming. |

## States

- unclosed code fence: A code fence with no closing line still renders as a code block, so partly streamed text does not break.
- unsafe link: A link whose address is not http, https or mailto is shown as plain text instead of a link.
- wide table: A table wider than the column scrolls sideways and can be focused with the keyboard.

## Tokens

- `--surface-sunken (code, table head)`
- `--border (tables, rules)`
- `--accent-fg (links)`
- `--accent-soft-border (blockquote)`
- `--fg-muted`
- `--code-bg (via CodeBlock)`
- `--radius-card`

## Examples

### A rich reply

Shows a heading, bold and italic text, a link, a source number, a table, a quote, a list, a divider and code.

```tsx
const RICH = `## Quarterly summary

Revenue grew **12%** …`;

<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{RICH}</Markdown>
</div>
```

### Nested lists

Indent each level. Numbered and bulleted lists can mix. Three levels is the most.

```tsx
const NESTED = `Plan for the release:

1. Prepare the build
   - Update the changelog
   - Bump versions
     1. Core package
     2. Docs site
2. Ship it
   - Tag the commit
- Notify the team`;

<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{NESTED}</Markdown>
</div>
```

### Code that is still being written

The end of the code has not arrived yet. It still shows as code, not as stray symbols.

```tsx
const STREAMING = "Here is a small helper:\n\n```ts\nexport function clamp(...) {\n  return Math.min(...);";

<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{STREAMING}</Markdown>
</div>
```

### A risky link becomes plain text

Links that could run code are not clickable. Only their words stay.

```tsx
<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{"Open [the safe page](https://example.com) or [this one](javascript:alert(1))."}</Markdown>
</div>
```

Source: src/organisms/Markdown.tsx
