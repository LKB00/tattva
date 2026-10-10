# HeroHeading
A big centered headline that types itself out once, then stays still.
Status: stable. Page: https://lkb00.github.io/tattva/#component-hero-heading
HeroHeading is the big greeting on an empty chat. It types out one letter at a time. If you turn typing off, or the person has turned off motion, the full text shows at once.
## When to use it

The big greeting on an empty chat. It types itself out once and then stays still, so the empty screen feels alive without moving forever.

## Use it for

- The opening line of an empty chat.
- A greeting on a start page: turn typing off if people see it on every visit.

## Not for

- Naming a group of items in a list: use `section-label`
- Titles inside cards or sections

## Do

- Use it once per screen, as the opening line of an empty chat.
- Keep it to one short sentence so it fits on two lines on a phone.
- Turn typing off when it would replay on every visit.
- Speak to the person in a single sentence.

## Avoid

- Do not use it for section titles or inside cards.
- Do not change the text quickly. Each change types out again.
- Do not add another moving element next to it.
- Do not make screen readers announce it again. They already get the full sentence.

## On a phone

- The heading is centred and balanced, and it is smaller below the sm breakpoint so it wraps on a phone.
- Text is typed in letter by letter, and only the typed part is drawn, so on a narrow screen the heading grows taller line by line as it types. Reserve space for it if the content below should not move.
- Under reduced motion it shows all at once.

## Accessibility: built in

- Screen readers hear the whole sentence at once, not each letter as it types.
- People who turn off motion see the full text right away.
- It is a second-level heading.

## Accessibility: what you need to do

- Check that a second-level heading fits your page outline. It is always one.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| text (required) | `string` |  | The headline. Changing it restarts the typing animation. |
| type | `boolean` | `true` | When false, the whole text renders at once with no animation. |

## States

- typing: Pass type (on by default) to reveal the text one character at a time; it shows in full at once when the user prefers reduced motion.

## Tokens

- `--fg`
- `--font-serif`

## Examples

### Typed

The default. The text types out when the page opens and whenever the text changes.

```tsx
<HeroHeading text="What can I help you with?" />
```

### Static

Turn typing off to show the full text at once, for example on a page people visit often.

```tsx
<HeroHeading text="Good evening, Lokesh" type={false} />
```

Source: src/atoms/HeroHeading.tsx
