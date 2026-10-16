# AIMark
A small four-point shape that tells people something was made by AI.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ai-mark
AIMark is a small shape that matches the color of the text beside it. By default it is just decoration. Give it a title and screen readers will read it out. Many people know the sparkle means AI, but not what the AI does. So add words whenever the action matters.
## When to use it

The one shape this system uses to mean AI. It takes the color of the text beside it, and its arms are slightly uneven, so it reads as our own mark rather than a generic sparkle.

## Use it for

- Beside the words on a button that starts an AI action, like Summarize.
- On its own, with a title, inside a small badge or circle.
- Inside other AI labels that need a symbol.

## Not for

- Labelling a piece of content as made by AI: use `ai-badge`
- Explaining how AI content was made: use `ai-label`
- Showing who wrote a message: use `avatar`

## Anatomy

- Four-point shape

## Do

- Add words when the action is specific, like Summarize or Rewrite.
- Use one mark for AI everywhere so people learn it.
- Match its size to the text beside it.
- Give it a title when it stands alone.

## Avoid

- Put it alone on every button. Too many marks lose their meaning.
- Use a second AI symbol in the same product.
- Make it lime on a plain page background. Lime is a fill that holds dark text.
- Use it as decoration where nothing is made by AI.

## On a phone

- The mark is a fixed pixel size and looks the same on a phone.
- It is not tappable. Put it inside a button if it starts something, and that button gets a 44px target on touch screens.

## Accessibility: built in

- Without a title, screen readers skip it and read only the words beside it.
- With a title, screen readers read it as an image with that name.
- It never takes keyboard focus.

## Accessibility: what you need to do

- Give it a title when it stands alone, so screen readers can say what it means.
- Check that it stands out from its background when alone. It copies the text color.
- Keep a button around it at least 24 pixels wide.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| size | `16 \| 18 \| 22 \| 24 \| 32` | `18` | Pixel size of the square mark. |
| title | `string` |  | Accessible name. When set the mark has role img and this label. When omitted it is hidden from assistive technology. |
| ...svg props | `SVGProps<SVGSVGElement>` |  | Other props go to the svg element, except width, height and title. |

## Tokens

- `currentColor`
- `--lime`
- `--on-lime`

## Examples

### Sizes

Five sizes. The first three match small, medium and large text. The last two are for use on their own.

```tsx
<div className="flex items-end gap-4 text-fg">
  <AIMark size={16} /><AIMark size={18} /><AIMark size={22} /><AIMark size={24} /><AIMark size={32} />
</div>
```

### Paired with text

The mark sits beside words that say what will happen. A screen reader reads only the words.

```tsx
<Button variant="secondary"><AIMark size={16} />Summarize this page</Button>
```

### Named image

When the mark stands alone, give it a title so screen readers can say what it means.

```tsx
<span className="inline-flex size-8 items-center justify-center rounded-full bg-lime text-on-lime">
  <AIMark size={18} title="AI-generated" />
</span>
```

Source: src/atoms/AIMark.tsx
