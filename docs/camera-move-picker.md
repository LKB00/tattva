# CameraMovePicker
Pick a camera move such as push in, pan or orbit by name, with a small diagram for each.
Status: stable. Page: https://lkb00.github.io/tattva/#component-camera-move-picker
CameraMovePicker shows camera moves as tiles, each with a written name and a small diagram of a subject in the frame and an arrow for the move. Pick one, or combine up to max. Static cannot be combined with other moves. Moves the model cannot make stay visible, cannot be picked and say why. On hover or keyboard focus the diagram moves once to preview the shot and holds; it never loops, and under reduced motion it stays still.
## When to use it

Lets people direct the camera without learning prompt jargon like "dolly" or "truck".

## Use it for

- Camera control inside ShotSettings.
- A camera edit on an existing clip, with only the moves that edit supports.
- Combining two moves, such as push in then pan right.

## Not for

- Choosing between a few plain words: use `segmented-control`
- Any single choice that has no picture: use `radio-group`

## Anatomy

- Label and what is chosen
- Move tiles (diagram, name, check when chosen)
- Limit note
- Unavailable reason
- Strength

## Do

- Write the name of every move. The diagram helps but never stands alone.
- Show unsupported moves with a reason instead of hiding them.
- Keep combinations small. Two or three moves at most.

## Avoid

- Do not loop the diagrams or play them while a take is generating.
- Do not colour chosen moves lime. They are the person's choice, not the AI's work.
- Do not make people type camera commands into the prompt.

## On a phone

- Three tiles per row on a phone, four from 640px wide.
- Each tile has a 44px touch area.
- There is no hover on touch, so diagrams stay still; the arrow shows the move.

## Accessibility: built in

- A group named by its label. Each move is a toggle button with aria-pressed, and the chosen ones also show a check mark.
- One tab stop for the group: arrow keys move between tiles, Home and End jump, Space or Enter picks.
- Moves that cannot be picked keep focus with aria-disabled, say "not available" and point to the written reason.
- When the limit is reached, a note says so in words and points to the group.
- Diagrams are hidden from screen readers; the name is the label. The preview moves once on hover or focus, within 400ms, and never under reduced motion.

## Accessibility: what you need to do

- Pass supported and a reason whenever a model cannot make some moves, so no option fails later.
- Turn the chosen moves into the model's own instructions in your code. Do not show bracket syntax to people.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `CameraMove[]` |  | Chosen moves, in the order picked. |
| onChange (required) | `(value: CameraMove[]) => void` |  | Called with the new moves. Clearing the last one gives ["static"]. |
| label | `string` | `"Camera move"` | Visible name of the group. |
| moves | `CameraMove[]` | `all 13` | Moves to offer: static, pushIn, pullOut, panLeft, panRight, tiltUp, tiltDown, truckLeft, truckRight, orbit, crane, tracking, handheld. |
| max | `number` | `1` | How many moves can be combined. 1 is a single choice. |
| supported | `CameraMove[]` |  | Moves the model can make. Others are shown but cannot be picked. |
| unsupportedReason | `string` | `"Not available with this model"` | Why the other moves cannot be picked. |
| strength | `"subtle" \| "strong"` |  | How strong the move is. |
| onStrengthChange | `(s: "subtle" \| "strong") => void` |  | Shows the strength control while a moving choice is made. |
| disabled | `boolean` | `false` | Turns the whole picker off. |
| className | `string` |  | Extra classes. |

## States

- disabled: Set with the disabled prop.

## Tokens

- `--surface`
- `--border`
- `--fg`
- `--fg-muted`
- `--radius-control`
- `--dur-slow`
- `--dur-fast`
- `--ease-out`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Pick one move: Every move with its name. Hover or Tab onto a tile to see the subject move once.
- Combine two, with strength and limits: Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made.

Source: src/molecules/CameraMovePicker.tsx
