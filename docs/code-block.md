# CodeBlock
A dark box for code, with the language name and a Copy button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-code-block
CodeBlock shows code exactly as written. A bar on top holds the language name and a Copy button. The button briefly says Copied. Long lines scroll sideways instead of wrapping. It does not color the code.
## When to use it

Shows code exactly as written, on a dark panel so it stands apart from the words around it. Long lines scroll sideways instead of wrapping, so nothing is broken up.

## Use it for

- Code, commands or settings inside a reply.
- Any text that people must copy exactly.

## Not for

- A short name or value inside a sentence
- Changes between two versions of a file: use `diff-view`
- Formatted text with headings and lists: use `markdown`

## Anatomy

- Language name
- Copy button
- Code area

## Do

- Set the language so people know what they are copying.
- Use it for multi-line code and commands in replies.
- Remove blank lines at the end of the code.

## Avoid

- Do not use it for a single word in a sentence. Use inline code styling.
- Do not expect long lines to wrap. They scroll sideways.
- Do not paste in secrets like passwords. Anything shown can be copied.

## On a phone

- Long lines scroll sideways inside the block and do not wrap, so the page itself does not scroll sideways.
- The Copy button keeps its size and has a 44px tap area on touch screens, so the header row does not get taller.
- If the browser blocks clipboard access, Copy does nothing and shows no error.

## Accessibility: built in

- The box is a figure, and the bar with the language name is its caption.
- Copy is a real button with visible words. Screen readers politely hear "Copied" when it works.
- The Tab key can reach the code area, so keyboard users can scroll long lines with the arrow keys.
- The icons are hidden from screen readers.

## Accessibility: what you need to do

- Explain what the code does in the words around it. The language name alone is not enough.
- Tell people when copying fails. The button stays silent when the clipboard is blocked.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| code (required) | `string` |  | Source text shown in the block and copied to the clipboard. |
| language | `string` | `"text"` | Label shown in the caption. It does not trigger highlighting. |

## States

- copied: After a successful copy the Copy button shows a check and the word Copied for about 1.5 seconds.
- focus: The Copy button and the scrollable code area each show a focus ring on keyboard focus.
- scrolling: A line wider than the block scrolls sideways instead of wrapping.

## Tokens

- `--code-bg`
- `--code-fg`
- `--code-muted`
- `--border`
- `--radius-card`

## Examples

### With a language

The language is only a name shown on top.

```tsx
<CodeBlock language="ts" code={sampleCode} />
```

### Default label

With no language, the name reads text.

```tsx
<CodeBlock code="npm install @tattva/ui" />
```

Source: src/molecules/CodeBlock.tsx
