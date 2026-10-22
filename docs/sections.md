# Sections
A long answer in foldable sections that open as they stream in.
Also known as: accordion, collapsible sections, expandable sections, faq.
Status: stable. Page: https://lkb00.github.io/tattva/#component-sections
Sections shows a long answer as a group of foldable sections, each with a title and an optional short line such as 3 options. While the answer streams, each new section opens as it arrives so people can follow along. When it ends, the sections fold back to the first one. Once the person opens or closes a section, the answer stops moving things and leaves their choice alone.
## When to use it

Keeps a long, structured answer short to scan, without hiding where the answer is while it is still being written.

## Use it for

- Trip plans, reports and comparisons with clear parts.
- Answers that stream in part by part.

## Not for

- One section that people open and close: use `collapsible`
- The assistant's reasoning, shown on request: use `thinking-block`
- Steps the assistant is working through: use `plan-card`

## Anatomy

- Section heading
- Short line
- Chevron
- Section content

## Do

- Use a few sections with clear titles.
- Keep ids stable while streaming.
- Let the person's choice win once they open or close one.

## Avoid

- Do not fold an answer of one or two short paragraphs.
- Do not move sections after the person has opened one.
- Do not hide the only important part in a folded section.

## On a phone

- Titles wrap; the short line moves under the title when there is no room.
- Each heading is a full-width button, easy to tap.

## Accessibility: built in

- Each section title is a heading wrapping a button with aria-expanded.
- Folded content is hidden from everyone, not just from sight.
- Opening and closing follow reduced motion.

## Accessibility: what you need to do

- Write section titles that say what is inside.
- Keep the id of a section the same while the answer streams, so it keeps its open state.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| sections (required) | `{ id: string; title: string; meta?: string; content: ReactNode }[]` |  | The sections, in order. Ids stay the same while the answer streams. |
| streaming | `boolean` | `false` | The answer is still arriving: each new section opens; when it ends, the first stays open. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of each section's heading. |
| className | `string` |  | Extra classes on the root. |

## States

- streaming: The newest section is open; earlier ones fold as each new one arrives.
- finished: The first section is open and the rest are folded.
- person chose: After the person opens or closes a section, nothing moves on its own.
- focus: Each section heading button shows a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--line`
- `--fg`
- `--fg-muted`
- `--radius-card`

## Examples

### While the answer streams

Each new section opens as it arrives, then the answer settles on the first.

```tsx
<Sections streaming={isStreaming} sections={[
  { id: "flights", title: "Flights", meta: "2 options", content: <FactList facts={flightFacts} /> },
  { id: "stay", title: "Where to stay", meta: "3 hotels", content: stayText },
  { id: "plan", title: "Day by day", meta: "2 days", content: planText },
]} />
```

### A finished answer

The first section open, the rest folded.

```tsx
<Sections sections={sections} />
```

Source: src/organisms/Sections.tsx
