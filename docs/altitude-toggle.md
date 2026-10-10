# AltitudeToggle
Switch between a short summary, each step, or every detail of what an assistant did.
Status: stable. Page: https://lkb00.github.io/tattva/#component-altitude-toggle
AltitudeToggle lets people choose how much detail they see: Summary, Steps or Everything. A line under the control explains the chosen view. It is a SegmentedControl, so the arrow keys move and select. You decide what to show for each view.
## When to use it

Lets people choose how much of an assistant's work to read: a short summary, each step, or every detail. The summary comes first, and the detail is one press away.

## Use it for

- Above a run report or transcript, to switch between a summary and full detail.
- Letting people who check work closely see everything the assistant read and tried.

## Not for

- Choosing between options that are not levels of detail: use `segmented-control`
- One section that people open and close: use `collapsible`
- The assistant's reasoning, shown on request: use `thinking-block`

## Anatomy

- Group of three choices
- Hint line for the chosen view

## Do

- Start on Summary for long runs.
- Keep the same three names across your product.
- Let people change the view without losing their place.
- Make Everything truly complete.

## Avoid

- Don't add more than three levels.
- Don't hide errors in Summary.
- Don't change the view for people on their own.
- Don't use it to pick a topic. It only sets detail.

## On a phone

- The three options sit in one row that scrolls sideways inside its own box if the labels are too wide for the screen.
- Each option keeps its size and has a 44px tap area on a touch screen.
- The hint line under the control is plain text, so it stays visible and does not need a hover.

## Accessibility: built in

- It is one named group: the arrow keys move and select, and Home and End jump to the ends.
- Only the chosen option is a stop for Tab, so the group is quick to pass.
- The line under it explains the chosen view in plain text.
- On narrow screens the group scrolls sideways instead of being cut off.

## Accessibility: what you need to do

- Put the content it controls straight after it, so keyboard users reach the new view next.
- Pass a label that names what is shown when there is more than one toggle on a page.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value | `Altitude` |  | Selected view (controlled): summary \| steps \| everything. |
| defaultValue | `Altitude` | `"summary"` | Starting view when uncontrolled. |
| onChange | `(value: Altitude) => void` |  | Called when the view changes. |
| labels | `Partial<Record<Altitude, string>>` |  | Replace the names of the views. |
| hints | `Partial<Record<Altitude, string>>` |  | Replace the hint line for each view. |
| label | `string` | `"How much detail"` | Accessible name for the group. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- summary: The Summary level shows a short account of the result and anything that needs you.
- steps: The Steps level shows each thing the assistant did, one line at a time.
- everything: The Everything level shows every detail, including what it read and tried.

## Tokens

- `--border`
- `--surface-sunken`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Three levels of detail: Pick a view and the list below changes.
- Start on Steps: Leave it uncontrolled and set where it starts.
- Your own hints: Replace the hint for any view.

Source: src/molecules/AltitudeToggle.tsx
