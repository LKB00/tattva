# WorkingEdge
A calm moving ring in the AI colour around a surface, shown only while the AI is working on it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-working-edge
WorkingEdge wraps a card, a field or a panel and draws a thin ring around it while active is true. A soft highlight turns slowly around the ring, about once every 2.4 seconds, so people can see which surface the AI is changing. When the work stops, the ring fades out quickly. It never changes the size of what it wraps.
## When to use it

Marks the one surface the AI is working on right now, so people know where to look and what may change. The ring is tied to real work and stops when the work stops.

## Use it for

- A draft card the AI is writing or rewriting.
- A form field the AI is filling in.
- A panel the AI is updating after a request.

## Not for

- Saying what step the AI is on: use `status-ticker`
- A placeholder before content exists: use `skeleton`
- Showing that the AI is present but idle: use `ai-presence`
- Asking a person to act on something: use `attention-dot`

## Anatomy

- Wrapper
- Surface (children)
- Ring
- Live region (hidden)

## Do

- Show it on the one surface the AI is changing.
- Turn it off the moment the work ends or fails.
- Pair it with a StatusTicker or a message that says what is happening.

## Avoid

- Do not leave it on as decoration.
- Do not put it on several surfaces at once for one task.
- Do not use it to ask a person to act. That is amber, not the AI colour.
- Do not use it on ordinary controls that the AI is not changing.

## On a phone

- The ring is drawn over the edge of the surface, so the surface keeps its size and the layout does not shift on a narrow screen.
- The ring ignores touch, so taps reach the card or field underneath as normal.
- The wrapper is a block that follows the width of its parent, so it fits one-column phone layouts.

## Accessibility: built in

- The ring is aria-hidden and ignores the pointer, so it never takes focus or blocks a tap.
- A visually hidden polite live region says the label when active turns true, and is emptied when it turns false.
- Under reduced motion the ring is still and solid, with no turning highlight.
- In forced colours mode the ring is a plain border in the system text colour.
- The ring fades out in the fast duration when active turns false.

## Accessibility: what you need to do

- Set active from the real state of the work, and turn it off as soon as the work ends or fails.
- Give a label that names the work, such as AI is writing the draft, when the default is too vague.
- Tell people what changed when the work ends, for example with a StatusTicker or a message.
- Match radius to the corner of the surface inside, so the ring sits on its edge.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| active (required) | `boolean` |  | True only while the AI is really working on this surface. The ring shows while true. |
| children (required) | `ReactNode` |  | The surface the ring goes around, such as a card or a field. |
| label | `string` | `"AI is working on this"` | Said once by screen readers when active turns true. |
| radius | `"card" \| "overlay" \| "control" \| "field" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full"` | `"card"` | Corner of the ring. Match the corner of the surface inside. The role names (card, overlay, control, field) follow the shape setting. |
| className | `string` |  | Classes for the wrapper. |
| ...rest | `HTMLAttributes<HTMLDivElement>` |  | Other attributes go on the wrapper div. |

## States

- selected: Set with the active prop.
- inactive: With active false the ring is hidden and the surface looks as it does on its own.
- fading out: When active turns false the ring fades out in the fast duration.
- reduced motion: With reduced motion on, the ring is a still solid line in the AI colour with no turning highlight.
- forced colours: In forced colours mode the ring is a plain border in the system text colour.

## Tokens

- `--lime`
- `--fg`
- `--focus-width`
- `--dur-base`
- `--dur-fast`
- `--ease-arrive`
- `--ease-in`
- `--radius-2xl`

## Examples

### Around a card

Press Stop and Start. The ring fades in while the AI works and fades out quickly when it stops. The card does not move.

```tsx
const [active, setActive] = useState(true);

<WorkingEdge active={active}>
  <div className="rounded-card border border-line bg-surface p-4">
    <p className="text-body leading-5 font-medium text-fg">Refund request</p>
    <p className="mt-1 text-body leading-5 text-fg-muted">Aero Home, Aero 12 blender, ₹2,340.</p>
  </div>
</WorkingEdge>
<Button size="sm" variant="secondary" onClick={() => setActive((a) => !a)}>{active ? "Stop" : "Start"}</Button>
```

### With a StatusTicker inside

The ring shows where the work is and the ticker says what it is. Both follow the same real steps, and the ring stops on the final line.

```tsx
<WorkingEdge active={!done} radius="xl" label="AI is writing the draft">
  <div className="flex flex-col gap-2 rounded-card border border-line bg-surface p-4">
    <StatusTicker current={done ? "Done in 12s" : run[i]} steps={run} done={done} label="Draft status" />
    <p className="text-body leading-5 text-fg-muted">The draft appears here when it is ready.</p>
  </div>
</WorkingEdge>
<Button size="sm" variant="secondary" onClick={() => setI((n) => Math.min(n + 1, run.length))} disabled={done}>Next step</Button>
<Button size="sm" variant="ghost" onClick={() => setI(0)}>Start again</Button>
```

Source: src/atoms/WorkingEdge.tsx
