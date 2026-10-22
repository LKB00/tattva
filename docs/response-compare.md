# ResponseCompare
Two replies side by side, and the person picks the better one.
Also known as: compare responses, side by side, a b compare.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-response-compare
ResponseCompare shows two replies to the same question next to each other, each with a Choose this reply button, and an About the same choice. After a choice, the kept reply says You chose this in words and the other steps back. A short thank-you line is read out. On a phone the two replies stack.
## When to use it

Asks people which of two replies is better, in a way that is quick to answer and easy to skip, so the product learns what they prefer.

## Use it for

- Asking which of two replies helped more, to learn preferences.
- Letting someone pick between two drafts before continuing.

## Not for

- More than two options to pick from: use `variant-grid`
- A thumbs up or down on one reply: use `feedback-bar`
- Moving between versions of the same reply: use `version-pager`

## Anatomy

- Heading and one-line reason
- Reply A
- Reply B
- Choose buttons
- About the same
- Thank-you line

## Do

- Ask now and then, not after every reply.
- Show both replies in full, so people compare the real thing.
- Say why you are asking in one short line.
- Let people carry on without choosing.

## Avoid

- Do not label one reply as recommended. It sways the choice.
- Do not use it for more than two replies.
- Do not hide the choice after it is made. Say which one was kept.

## On a phone

- Below 640px the two replies stack, Reply A first, each with its own Choose button under it.
- Long replies keep their full text; the page scrolls, not the card.

## Accessibility: built in

- The part is a region named by its heading, and each reply is named by its label.
- The choice is an ordinary button under each reply, described by that reply's label.
- After a choice, the kept reply says You chose this in words, and a status line reads the thank-you.
- The kept reply's border change stops animating when people turn off motion in their system settings.

## Accessibility: what you need to do

- Give each reply a short label that says which is which, such as Reply A and Reply B.
- Set headingLevel so the heading fits your page outline. It is 3 unless you change it.
- Do not ask on every reply. Ask now and then, and never block the conversation on it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| replies (required) | `[CompareReply, CompareReply]` |  | The two replies: { id, label, content }. |
| onChoose (required) | `(id: string \| "same") => void` |  | Called with the chosen reply's id, or same. |
| chosen | `string \| "same" \| null` |  | The current choice. Leave it out to let the part keep its own. |
| allowSame | `boolean` | `true` | Offer an About the same choice. |
| labels | `ResponseCompareLabels` |  | Overrides heading, hint, choose, same, chosen and thanks(label). |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the root. |

## States

- not chosen: Both replies have a Choose this reply button, with About the same below.
- chosen: The kept reply gets the selected fill and says You chose this; the other steps back. A thank-you line is read out.
- about the same: Both replies stay as they were and the thank-you line says they are about the same.
- focus: Each Choose button shows a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--bg`
- `--line`
- `--selected`
- `--selected-border`
- `--fg-muted`
- `--radius-card`
- `--radius-control`

## Examples

### Pick the better reply

Press Choose this reply under one, or About the same.

```tsx
<ResponseCompare
  replies={[
    { id: "a", label: "Reply A", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },
    { id: "b", label: "Reply B", content: <p>Refunds usually take a while…</p> },
  ]}
  onChoose={(id) => saveChoice(id)}
/>
```

### Without About the same

Turn it off when a choice is required.

```tsx
<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />
```

Source: src/organisms/ResponseCompare.tsx
