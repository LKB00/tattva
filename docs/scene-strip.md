# SceneStrip
An ordered storyboard of shots with a status on each, a total length, and reorder by drag, buttons or keyboard.
Status: stable. Page: https://lkb00.github.io/tattva/#component-scene-strip
SceneStrip lays out the shots of one scene in order as cards. Each card shows its number, name, prompt, length and status: no take yet, generating, pick a take, ready, or did not work. The header gives the total length and what is still open. Reorder by dragging a card, with the Move earlier and Move later buttons on every card, or with Alt and an arrow key on a focused card; each move is announced. Add shot puts a new shot at the end. It is order, status and length, not an editing timeline.
## When to use it

Puts chosen takes in order as a simple storyboard and shows which shots are done.

## Use it for

- A drawer under the take grid in a video studio.
- Planning a multi-shot ad or explainer before every shot exists.
- Following several shots while they generate.

## Not for

- Steps of a task an agent is doing: use `step-timeline`
- Choosing between takes of one shot: use `variant-grid`
- Events over time: use `timeline`

## Anatomy

- Title
- Total length, shot count and what is open
- Shot cards (number, poster, length, name, prompt, status, move buttons, Open)
- Add shot

## Do

- Show the total length and what is still open.
- Keep move buttons on every card so drag is never the only way.
- Say on a failed shot whether it was charged.

## Avoid

- Do not turn it into a multitrack timeline. Order, status and length are enough.
- Do not use lime for finished shots. Lime marks only shots the AI is making now.
- Do not use amber except for shots where a person must pick a take.

## On a phone

- A sideways strip that snaps to each card.
- Move buttons grow to 44px on touch, so reorder never needs a drag.
- The drag hint is hidden on small screens; the buttons are the way to move.

## Accessibility: built in

- Shots are an ordered list. Each card is focusable and named with its position, name, status and length, for example "Shot 2 of 5: Ferry leaves, pick a take, 8 seconds".
- Alt with an arrow key moves the focused card, and focus stays on it.
- Every card has Move earlier and Move later buttons named with the shot; at the ends they turn off and focus moves to the other button.
- Each move is announced once: "Ferry leaves moved to position 1 of 5."
- Status is written in words with an icon or dot, never colour alone. The total length is also read in words.

## Accessibility: what you need to do

- Keep the order saved as it changes, so nothing is lost when the person leaves.
- Set note on a failed shot to say whether it was charged.
- Use onOpen to show the shot's takes or trim it, in a Sheet on a phone.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| shots (required) | `SceneShot[]` |  | Shots in order: id, label, prompt, durationSec, status, poster, note. |
| onReorder (required) | `(shots: SceneShot[]) => void` |  | Called with the new order after a move or drop. |
| onAdd | `() => void` |  | Adds a shot at the end. Leave out to hide Add shot. |
| onOpen | `(id: string) => void` |  | Opens a shot to pick a take or trim it. |
| title | `string` | `"Scene"` | Heading of the strip. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the heading. |
| className | `string` |  | Extra classes. |

## States

- empty: No shots yet: a short line and Add shot, so the first step is obvious.
- generating: A shot whose take is being made shows the lime working mark and the word Generating, because the AI is doing it.
- pick a take: A shot with finished takes but none chosen is marked in amber with Pick a take, because a person has to choose.
- did not work: A failed shot says so in words, with a note such as Not charged, and stays in its place.
- reordering: Drag, Move earlier and Move later, or Alt with an arrow key on a focused card. Each move is announced, and focus stays on the moved card.
- phone: Under 640px the strip scrolls sideways and snaps to each card; the move buttons grow to 44px.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--lime`
- `--attention`
- `--attention-fg`
- `--radius-card`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A scene in progress: Five shots with every status. Drag a card, use its arrows, or focus it and press Alt with an arrow key. Add shot appends one.
- Empty: Before any shots exist: a short line and Add shot.

Source: src/organisms/SceneStrip.tsx
