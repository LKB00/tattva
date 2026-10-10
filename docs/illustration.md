# Illustration
A small drawing for empty, error, permission and success screens, in dark lines with one green touch.
Status: stable. Page: https://lkb00.github.io/tattva/#component-illustration
Illustration draws one idea for each name: a chat, a search, an error, a lock, a plug, an hourglass, a check, a tray or a flag. It uses dark lines on light fills and at most one green fill. Its colors follow light and dark mode. It is only decoration unless you give it a title.
## When to use it

A small drawing that sets the tone of an empty, error or success screen. It shows one idea in dark lines with one green touch, and follows light and dark mode.

## Use it for

- An empty, first-use or cleared screen.
- An error, offline, permission or usage limit screen.
- Inside EmptyState, which picks a drawing for you.

## Not for

- Small areas, headings or lists of features: use `pictogram`
- A photo or generated image: use `media-frame`
- An icon inside a button: use `icon-button`

## Anatomy

- Dark outline
- Light fill
- Sand fill
- Green touch

## Do

- Use it to support the words on a screen, never to replace them.
- Pick the drawing that matches the message, so the picture and words agree.
- Leave it as decoration when the words beside it already say everything.
- Show one drawing per area.

## Avoid

- Do not use it as decoration on busy screens.
- Do not add robots, brains, glowing orbs or sparkles to new drawings.
- Do not give it fixed colors. Use the theme colors so dark mode works.
- Do not use amber in the drawing. Amber is for words that ask a person to act.

## On a phone

- Illustration is a fixed 64, 96 or 160px and does not scale with the screen, so choose 64 or 96 on a phone.
- It is not tappable and has no text, so nothing changes on touch screens.

## Accessibility: built in

- Without a title, screen readers skip the drawing.
- With a title, screen readers read it as a picture and say the title.
- The keyboard never stops on it.
- The drawing does not move, so there is no motion to turn off.

## Accessibility: what you need to do

- Leave out the title when the nearby words already say what happened, which should be almost always.
- Give a title only when the drawing adds meaning that the words do not.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `IllustrationName` |  | One of empty-chat, no-results, error, permission, offline, rate-limit, success, upload, first-run. |
| size | `64 \| 96 \| 160` | `96` | Rendered size in px. Sets the stroke weight too. |
| title | `string` |  | Accessible name. Without it the art is aria-hidden. |
| className | `string` |  | Extra classes for the svg element. |

## Tokens

- `--fg`
- `--surface`
- `--surface-sunken`
- `--lime`

## Examples

### Three sizes

Line thickness grows with size, so the drawing looks balanced at each size.

```tsx
<Illustration name="no-results" size={64} />
<Illustration name="no-results" size={96} />
<Illustration name="no-results" size={160} />
```

### All names

Each name has one job. Pick the one that matches what is happening, not the one you like best.

```tsx
{spotIllustrations.map((s) => (
  <Illustration key={s.name} name={s.name} size={64} />
))}
```

### When the picture says something

A title lets screen readers describe the picture. Use it only when the picture says something the nearby words do not.

```tsx
<Illustration name="offline" size={96} title="Plug disconnected from its socket" />
```

Source: src/atoms/Illustration.tsx
