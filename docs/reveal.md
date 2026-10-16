# Reveal
Makes new content ease into view, one after another.
Status: stable. Page: https://lkb00.github.io/tattva/#component-reveal
Reveal eases content in with a small rise or a quick fade. Items in a group appear one after another, with the delay capped so the whole group settles in under half a second. For people who ask for less motion, it shows content at once. The timings are proposals.
## When to use it

Eases new content in with a small rise or a fade, so people notice what just appeared. In a group, each item starts a moment after the one before, and the whole group settles quickly.

## Use it for

- A new answer or card that appears once.
- A short list of steps or results that arrive together.
- Small status text such as Saved, using the fade.

## Not for

- Text that arrives word by word as it is written: use `streaming-reveal`
- Placeholders while content loads: use `skeleton`
- Content that changes every second

## Anatomy

- Wrapper
- Content

## Do

- Use it on content that appears once, such as a new answer or card.
- Keep groups to a few items so the wait stays short.
- Use the fade for small status text.
- Pair it with Stack so the layout does not jump.

## Avoid

- Do not animate things that happen all the time.
- Do not wrap content that changes every second.
- Do not delay long lists item by item.
- Do not animate error messages.

## On a phone

- It plays the same short fade or rise on a phone, and nothing about it depends on hover.
- With reduced motion turned on in the phone settings, it shows the content with no animation.

## Accessibility: built in

- When people turn off motion in their system settings, content shows at once with no animation.
- Content is on the page from the start, so screen readers can read it before the animation ends.
- It only fades and moves a few pixels up. Nothing flashes or spins.

## Accessibility: what you need to do

- Do not let the animation be the only sign that something changed. If people need to know, say it in words or announce it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variant | `"rise" \| "fade"` | `"rise"` | rise is opacity plus 6px of travel. fade is opacity only. |
| index | `number` | `0` | Position in a group. Delay is index x 40ms, held at the fifth item. |
| as | `"div" \| "li" \| "section" \| "article" \| "span" \| "p"` | `"div"` | Element to render. |

## States

- entering: On first render it rises or fades in, with a small stagger set by index.
- reduced motion: When the user prefers reduced motion, no animation runs and the content is simply shown.

## Tokens

- `--dur-base`
- `--dur-fast`
- `--ease-out`

## Examples

### One after another

Each item appears just after the one before.

```tsx
<Stack gap={2}>
  {items.map((t, i) => (
    <Reveal key={t} index={i}>{t}</Reveal>
  ))}
</Stack>
```

### Fade only

Use the fade when you do not want any movement.

```tsx
<Reveal variant="fade">Saved</Reveal>
```

Source: src/atoms/Reveal.tsx
