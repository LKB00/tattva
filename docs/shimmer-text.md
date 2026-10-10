# ShimmerText
Status text with a moving shine, for steps like "Searching the web…".
Status: stable. Page: https://lkb00.github.io/tattva/#component-shimmer-text
ShimmerText is a line of text with a shine that sweeps across it. Use it to show what the assistant is doing right now. When the step ends, replace it with the result.
## When to use it

One line of status text with a shine sweeping across it. The shine says the work is still going; the words say what the assistant is doing.

## Use it for

- A step in progress, like "Searching the web…".
- Next to a small spinner when a step takes a while.
- A status line that you replace with the result when the step ends.

## Not for

- The wait before you know what the assistant is doing: use `typing-indicator`
- A list of the steps the assistant has taken: use `step-timeline`
- Body text or headings

## Do

- Write a short phrase that names the step, like "Reading 4 files…".
- Replace it with the finished text when the step is done.
- Show one step at a time.
- Keep it short enough for one line.

## Avoid

- Do not use it for body text or headings.
- Do not leave it moving after the work has stopped.
- Only plain text works inside it, not other elements.
- Do not change its text color. The shine needs the default.

## On a phone

- ShimmerText is inline text at 14px and wraps with the text around it on a narrow screen.
- The shimmer runs on a phone. It is a status line, so keep it short.

## Accessibility: built in

- It is real text, so screen readers read it and people can select it.
- The shine stops for people who turn off motion in their system settings.

## Accessibility: what you need to do

- Put it in an area that announces changes if people must hear each step. It does not announce itself.
- Never put the only copy of something important here. Part of the text is light and hard to read.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `string` |  | The status text. Only strings are accepted. |
| className | `string` |  | Merged last. Use it to change size or spacing. |

## Tokens

- `--fg-subtle`
- `--fg`
- `--animate-shimmer`

## Examples

### Status step

One line saying what the assistant is doing.

```tsx
<ShimmerText>Searching the web…</ShimmerText>
```

### With a spinner

Add a small Spinner when the step takes a while.

```tsx
<div className="flex items-center gap-2">
  <Spinner size={14} label="Reading files" />
  <ShimmerText>Reading 4 files…</ShimmerText>
</div>
```

Source: src/atoms/ShimmerText.tsx
