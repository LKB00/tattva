# Badge
A small label that shows a status, a count or a category.
Status: stable. Page: https://lkb00.github.io/tattva/#component-badge
Badge is a small tag for short status text. It comes in several colors that match meaning, like green for success. It cannot be pressed, so it works inside headings, lists and tables. Keep the text to a word or two.
## When to use it

A word or two of status, count or category in a small pill. Its color backs up the meaning, and it cannot be pressed, so it fits inside headings, rows and tables.

## Use it for

- A status beside a title, like Draft or Failed.
- A count or a category in a list row.
- A small "Beta" or "New" tag next to a feature name.

## Not for

- Marking content made by AI: use `ai-badge`
- Showing that a person has to act: use `attention-dot`
- Something people should press: use `button`

## Anatomy

- Optional icon
- Label

## Do

- Use the neutral color for plain details. Save colors for states that mean something.
- Keep the label to one or two words.
- Use the accent color sparingly. Lime is a small highlight, not a background for body text.
- Always add words to a colored badge, so meaning does not depend on color.

## Avoid

- Do not use the warning color to say a person must act. Use AttentionDot for that.
- Do not make a Badge pressable. Use a Button or a link.
- Do not put long sentences in it. They do not fit.
- Do not make the text lime.

## On a phone

- Badge is not tappable and does not change on a phone.
- Its text is 12px on touch screens.
- The pill has no width limit and does not truncate, so keep the text to a word or two.

## Accessibility: built in

- Screen readers read its text as part of the sentence around it.
- Each tone pairs a soft background with matching text that is easy to read.
- It is plain text, so the Tab key skips it.

## Accessibility: what you need to do

- Write the status in words. Color alone must not carry the meaning.
- Use the lime tone when the badge sits on an image, so the text stays readable.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| tone | `"neutral" \| "accent" \| "lime" \| "success" \| "warning" \| "danger" \| "info" \| "unsure" \| "celebrate"` | `"neutral"` | Colour role. Exported as Tone. Use lime, the opaque version of accent, when the badge sits on an image. unsure is a calm neutral for "not fully sure" or "partly done". celebrate is reserved for a goal fully reached, one place per product. |
| className | `string` |  | Merged after the base classes. |
| ...rest | `HTMLAttributes<HTMLSpanElement>` |  | Passed to the <span>, including children, id and aria-* attributes. |

## Tokens

- `--surface-sunken`
- `--fg-muted`
- `--border`
- `--lime`
- `--fg`
- `--success-soft`
- `--success-fg`
- `--warning-soft`
- `--warning-fg`
- `--danger-soft`
- `--danger-fg`
- `--info-soft`
- `--info-fg`
- `--radius-control`

## Examples

### Tones

Neutral is the default. Accent is the lime highlight. The other colors match their meaning.

```tsx
<div className="flex flex-wrap items-center gap-2">
  <Badge>Neutral</Badge>
  <Badge tone="accent">Accent</Badge>
  <Badge tone="success">Success</Badge>
  <Badge tone="warning">Warning</Badge>
  <Badge tone="danger">Danger</Badge>
  <Badge tone="info">Info</Badge>
</div>
```

### With an icon

An icon and text sit side by side.

```tsx
<Badge tone="info"><SparkleIcon width={10} height={10} />Beta</Badge>
```

### Not sure, and a goal reached

Unsure is a calm neutral for "not fully sure" or "partly done". It is not a warning. Celebrate is for one thing only: a goal fully reached.

```tsx
<div className="flex flex-wrap items-center gap-2">
  <Badge tone="unsure">Medium confidence</Badge>
  <Badge tone="unsure">Partly refunded</Badge>
  <Badge tone="celebrate">Refunded in full</Badge>
</div>
```

Source: src/atoms/Badge.tsx
