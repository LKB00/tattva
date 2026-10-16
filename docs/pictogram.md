# Pictogram
A one-color line icon, larger than a button icon, for small areas and lists of features.
Status: stable. Page: https://lkb00.github.io/tattva/#component-pictogram
Pictogram is a bigger, more detailed cousin of an icon. It is made of lines only and takes its color from the text around it. Use it where a full drawing is too much, such as small empty areas or a row of things the assistant can do.
## When to use it

A line drawing larger than an icon, for spots where a full illustration is too much. It takes the color of the text around it.

## Use it for

- A row or grid of things the assistant can do.
- A small empty area where a full drawing would not fit.
- Beside a heading, to mark its topic.

## Not for

- A full empty, error or success screen: use `illustration`
- An icon inside a button: use `icon-button`

## Do

- Put a visible label beside it.
- Use it in small empty areas where a full drawing would crowd the words.
- Use one size within a group.

## Avoid

- Do not use it as a button icon. Use a small icon.
- Do not fill its shapes. Pictograms stay as lines.
- Do not add any color except the text color.

## On a phone

- Pictogram is a fixed 32, 48 or 64px and looks the same on a phone.
- It is not tappable. If it starts something, wrap it in a button, which gets a 44px target on touch screens.

## Accessibility: built in

- Without a title, screen readers skip it.
- With a title, screen readers read it as a picture and say the title.
- The keyboard never stops on it.
- It uses the surrounding text color, so it follows the theme.

## Accessibility: what you need to do

- Check that the text color it takes stands out against the background.
- Give a title only when it means something the nearby words do not say.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `PictogramName` |  | One of chat, agent, document, image, code, data, search, shield, memory, voice, plan, tools. |
| size | `32 \| 48 \| 64` | `32` | Rendered size in px. |
| title | `string` |  | Accessible name. Without it the pictogram is aria-hidden. |
| className | `string` |  | Extra classes for the svg element. |

## Tokens

- `--fg`
- `--fg-muted`

## Examples

### Sizes

The lines get thicker as the picture grows, so it looks balanced at each size.

```tsx
<Pictogram name="document" size={32} />
<Pictogram name="document" size={48} />
<Pictogram name="document" size={64} />
```

### All names

```tsx
{pictogramNames.map((n) => <Pictogram key={n} name={n} size={48} />)}
```

### Takes the text color

Set a text color on the area around it and the pictogram follows.

```tsx
<div className="text-fg-muted"><Pictogram name="shield" size={48} title="Protected" /></div>
```

Source: src/atoms/Pictogram.tsx
