# ClaimCheck
A reply with the sentences no source backs up marked in place.
Status: stable. Page: https://lkb00.github.io/tattva/#component-claim-check
ClaimCheck shows a reply with each unsupported or disputed claim marked by a dotted underline and a small warning mark. A line above says how many were flagged. Pressing the warning mark opens a short note under the reply: why it was flagged, and buttons to ask the assistant for a source or take the claim out.
## When to use it

Helps people see which parts of an AI reply they should check before relying on them, without making them read every source.

## Use it for

- Replies that make factual claims a check could not match to a source.
- Claims that a source contradicts.
- Reports and summaries people will act on or share.

## Not for

- Showing the sources that do back a reply up: use `source-list`
- How sure the AI is about the whole reply: use `confidence-indicator`
- A numbered link to one source: use `citation-marker`

## Anatomy

- Summary line
- Reply text
- Marked claims
- Note with actions

## Do

- Flag only claims a check actually failed to match.
- Say in the note why it was flagged.
- Offer a way to fix it: ask for a source, or take it out.

## Avoid

- Do not mark every sentence. Then nothing stands out.
- Do not use red for unsupported claims. Save it for claims a source contradicts.
- Do not hide the summary line. People skim.

## On a phone

- Marked claims wrap with the text like ordinary words.
- The note opens under the whole reply, full width, so it never covers the text.

## Accessibility: built in

- The warning mark after each claim is a button named by whether the claim is unsupported or disputed, and the claim itself.
- Marks use a dotted underline and an icon, not color alone.
- The note is announced when it opens, and each button says whether its note is open.

## Accessibility: what you need to do

- Keep each flagged claim to one sentence or less, so the button's name stays short.
- Write the note as a plain reason, such as No source in this chat measures that.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| segments (required) | `ClaimSegment[]` |  | The reply as plain text and flagged claims, in reading order. A claim is { id, text, status: "unsupported" \| "disputed", note? }. |
| onAskSource | `(id: string) => void` |  | Asks the assistant to back the claim up. The button is hidden when omitted. |
| onRemove | `(id: string) => void` |  | Takes the claim out of the reply. The button is hidden when omitted. |
| labels | `ClaimCheckLabels` |  | Overrides summary(n), unsupported, disputed, askSource, remove and close. |
| className | `string` |  | Extra classes on the root. |

## States

- nothing flagged: Just the reply, with no summary line.
- unsupported: A dotted amber underline and a warning mark: no source backs the claim up.
- disputed: A dotted red underline: a source says otherwise.
- note open: The pressed claim gets an amber fill and its note opens under the reply with Ask for a source and Take it out.
- focus: Each warning mark shows a focus ring on keyboard focus.

## Tokens

- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--attention-border`
- `--danger`
- `--danger-fg`
- `--radius-control`

## Examples

### Two claims flagged

Press a marked claim to see why it was flagged. Take it out or ask for a source.

```tsx
<ClaimCheck
  segments={[
    "Orders slowed after Tuesday's update. ",
    { id: "c1", text: "The tax check adds about 0.5 s to every order", status: "unsupported", note: "No source measures it." },
    ", and ",
    { id: "c2", text: "most shoppers left before paying", status: "disputed", note: "Order times shows checkouts went up." },
    ".",
  ]}
  onAskSource={askForSource}
  onRemove={removeClaim}
/>
```

### Nothing flagged

With no claims flagged, it is just the reply. No summary line shows.

```tsx
<ClaimCheck segments={["Your order shipped on Monday and arrives Friday."]} />
```

Source: src/molecules/ClaimCheck.tsx
