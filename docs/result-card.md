# ResultCard
One thing in an answer: a picture, its name, a few facts, a price and one action.
Also known as: product card, listing card, item card, search result card, card.
Status: stable. Page: https://lkb00.github.io/tattva/#component-result-card
ResultCard shows one thing the AI found, such as a hotel, a product, a place or a person. It has a picture, the name as a heading, one short line, two to four facts, an optional price and tag, and one action. While the answer is still streaming the card shows, but its action waits until the answer is complete. It can also draw placeholders while it loads.
## When to use it

Turns the things an answer recommends into something people can compare and act on, instead of a paragraph to read.

## Use it for

- Hotels, products, places, people or plans the AI suggests.
- Results laid out side by side with CardRow.
- A result that is still arriving.

## Not for

- A source behind a claim: use `source-card`
- A file the AI made: use `file-result-card`
- A single headline number: use `stat-tile`
- A prompt the person can pick: use `suggestion-card`

## Anatomy

- Picture
- Name
- Short line
- Tag
- Facts
- Price
- Action

## Do

- Give every card in a row the same fields.
- Keep facts to the ones people compare.
- Hold the action until the answer is complete.

## Avoid

- Do not put more than one main action on a card.
- Do not make the whole card a link and also give it a button.
- Do not invent a price or rating the data does not have.

## On a phone

- The card fills the width; in a CardRow it swipes sideways with the next card peeking in.
- The price and the action wrap onto two lines when there is no room.

## Accessibility: built in

- An article with the name as a heading, so people can jump between results.
- The action's label includes the result's name.
- While streaming the action is turned off and the card is marked busy.

## Accessibility: what you need to do

- Write alt text that says what the picture shows.
- Give every card in a row the same fields, so people can compare them.
- Name the action for what happens next, such as View rooms, not Click here.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | The thing's name, shown as a heading. |
| subtitle | `string` |  | One short line under the name. |
| image | `{ src: string; alt: string }` |  | A picture of the thing; alt says what it shows. |
| facts | `{ label: string; value: ReactNode }[]` |  | Two to four facts that help choose. |
| price | `{ value: number; currency?: string; locale?: string; decimals?: number; note?: string }` |  | The price, formatted for the locale, with what it is for. |
| tag | `{ label: string; tone?: Tone }` |  | One short tag, such as Free cancellation. |
| action | `{ label: string; onClick: () => void }` |  | The one thing to do with this result. |
| streaming | `boolean` | `false` | The answer is still arriving; the action waits until it is complete. |
| loading | `boolean` | `false` | Draws placeholders. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the name's heading. |
| className | `string` |  | Extra classes on the root. |

## States

- streaming: The card shows but its action is turned off and the card is marked busy until the answer is complete.
- loading: Placeholders for the picture, the name and the facts.
- ready: Picture, name, short line, facts, price, tag and the action.
- no picture: The card starts with the name; nothing else moves.
- picture failed: The picture frame shows its own fallback tile with Retry.
- focus: The action shows a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--line`
- `--fg`
- `--fg-muted`
- `--radius-card`

## Examples

### Hotels in a row

Three results with the same fields, laid out with CardRow.

```tsx
<CardRow label="Hotels in Paris">
  {hotels.map((h) => (
    <ResultCard key={h.id} title={h.name} subtitle={h.area} image={h.image}
      facts={[{ label: "Rating", value: h.rating }, { label: "Check-in", value: h.checkIn }]}
      price={{ value: h.price, currency: "EUR", note: "a night" }}
      action={{ label: "View rooms", onClick: () => open(h) }} />
  ))}
</CardRow>
```

### While the answer streams

Cards arrive one by one. Placeholders hold the space and the actions wait until the answer is complete.

```tsx
<ResultCard {...hotel} streaming={isStreaming} action={{ label: "View rooms", onClick }} />
<ResultCard title="" loading />
```

### Without a picture

A plan, with a tag and a price.

```tsx
<ResultCard title="Team plan" subtitle="For up to 10 people" tag={{ label: "Most picked", tone: "accent" }}
  facts={[{ label: "Storage", value: "1 TB" }, { label: "Support", value: "Same day" }]}
  price={{ value: 24, currency: "USD", note: "a person a month" }} action={{ label: "Choose", onClick }} />
```

Source: src/molecules/ResultCard.tsx
