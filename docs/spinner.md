# Spinner
A small spinning ring that shows something is loading.
Status: stable. Page: https://lkb00.github.io/tattva/#component-spinner
Spinner is a small ring that spins while something loads. Use it for short waits inside a button or a row. If you know what the content will look like, use Skeleton instead.
## When to use it

A small spinning ring for a short wait when you cannot show what is coming. It is marked as a status, so screen readers can find what is loading.

## Use it for

- A short wait inside a button, like Saving.
- A row or small area that is loading and has no known shape.
- Next to status text for a step that takes a while.

## Not for

- Content whose shape you already know: use `skeleton`
- The wait before the assistant's first words: use `typing-indicator`
- Naming the step the assistant is on: use `shimmer-text`

## Do

- Use it for waits of a second or more when nothing better fits.
- Give it a specific label like "Saving" when more than one can be on screen.
- Add visible text when the wait belongs to a button or a row.
- Match its size to the text beside it.

## Avoid

- Do not use a Spinner when a Skeleton could show the shape of the content.
- Do not use it while the assistant writes a reply. Use TypingIndicator before the reply starts and ShimmerText for status text.
- Do not show many spinners in one list. Show one for the whole area.
- Do not make it lime or amber.

## On a phone

- Spinner is a fixed pixel size and looks the same on a phone.
- It is not tappable, so give people another way to cancel a long wait.

## Accessibility: built in

- It is marked as a status and named by its label, "Loading" by default.
- The ring stops spinning for people who turn off motion in their system settings.
- It cannot be pressed, and the Tab key skips it.

## Accessibility: what you need to do

- Give it a specific label, like "Saving", when the default "Loading" is too vague or more than one is on screen.
- Show one spinner for an area, not one per item, so screen readers do not meet the same status many times.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| size | `number` | `16` | Width and height in pixels. |
| label | `string` | `"Loading"` | Accessible name announced for the status. |

## Tokens

- `--fg-muted`

## Examples

### Sizes

Four sizes, from small to large.

```tsx
<div className="flex items-center gap-4">
  <Spinner size={14} />
  <Spinner />
  <Spinner size={24} />
  <Spinner size={32} />
</div>
```

### Inside a button

Place it before a button's label to show something is happening. The label should say what.

```tsx
<Button variant="secondary" disabled leading={<Spinner size={14} label="Saving" />}>
  Saving
</Button>
```

Source: src/atoms/Spinner.tsx
