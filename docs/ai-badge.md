# AIBadge
A lime-tinted badge with a sparkle that marks content made by AI.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ai-badge
AIBadge is a Badge with a sparkle and a short label. Use it on generated images, summaries and drafts, so people can tell AI work from human work. It says "AI-generated" by default. You can change the words.
## When to use it

A badge with a sparkle that marks one piece of content as made by AI. It sits on the item itself, so people can tell AI work from human work at a glance.

## Use it for

- A generated image, summary or draft.
- A card whose text the assistant wrote.
- Content on a photo or a busy background: turn on solid.

## Not for

- A note about the whole conversation: use `ai-disclosure`
- AI content that needs an explanation, or an undo after editing: use `ai-label`
- Content a person wrote

## Anatomy

- Sparkle icon
- Label

## Do

- Put it on anything the AI wrote or made, like summaries or images.
- Keep the label to two words or fewer.
- Place it close to the content it describes, like a corner of a card.
- Use the same words for the same kind of content everywhere.

## Avoid

- Do not use it on content a person wrote.
- Do not use it as a general highlight. The sparkle means AI.
- Do not swap it for a plain Badge in the accent color.
- Do not use it in place of AIDisclosure when the whole conversation needs a caution.

## On a phone

- AIBadge is not tappable and does not change on a phone.
- Its text is 12px on touch screens.
- Set solid when the badge sits on an image, as on any screen size.

## Accessibility: built in

- Screen readers read the label as part of the text around it.
- Screen readers skip the sparkle.
- It cannot be pressed, and the Tab key skips it.

## Accessibility: what you need to do

- Use a label that says what the content is, such as "AI summary".
- Turn on solid on images or busy backgrounds, so the text stays readable.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label | `string` | `"AI-generated"` | Text shown next to the sparkle. |
| solid | `boolean` | `false` | Use the opaque lime badge. Set it when the badge sits on an image or another busy background so the text keeps its contrast. |

## States

- solid: Pass solid for a filled lime badge instead of the soft one.

## Tokens

- `--lime`
- `--fg`

## Examples

### Default

The standard label for content made by AI.

```tsx
<AIBadge />
```

### Custom label

Change the words to describe the kind of content.

```tsx
<div className="flex flex-wrap items-center gap-2">
  <AIBadge label="AI summary" />
  <AIBadge label="Draft" />
</div>
```

Source: src/atoms/AIBadge.tsx
