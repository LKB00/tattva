# PlanCard
Shows what the assistant plans to do before it starts, so you can approve or ask for changes.
Status: stable. Page: https://lkb00.github.io/tattva/#component-plan-card
PlanCard lays out what the assistant intends to do: a title, numbered steps with a short note each, and an optional time or cost estimate. A label says nothing has changed yet. You approve the plan or ask for a revision. While the plan is open, steps can be edited or removed. Use it when someone should agree to the approach before anything changes.
## When to use it

Shows the steps the assistant intends to take before anything changes, so a person can agree to the approach or ask for another. It does not take your place on the page when it appears, because a plan can wait.

## Use it for

- Before a task that edits, sends or deletes things, so the person agrees first.
- Letting people edit or remove steps before they approve.
- Showing a time or cost estimate next to the steps.

## Not for

- A yes or no on one single action: use `approval-prompt`
- Showing progress through steps that are already running: use `step-timeline`
- A to-do list people tick off themselves: use `checklist`

## Anatomy

- Title
- State label
- "Nothing has changed" label
- Estimate
- Numbered steps (title, note, Edit, Remove)
- Buttons (Approve, Revise) or a note on the result
- Spoken update

## Do

- Show the plan before anything changes, and say so.
- Keep each step's note to one short sentence.
- Give an estimate when you can, in time or cost.
- Let people edit or remove a step while the plan can still change.

## Avoid

- Don't show a plan that has already run as if it were still waiting.
- Don't use amber on the card. A plan is not urgent.
- Don't pack a long list of tasks into one step.

## On a phone

- The card has 20px padding, and each step keeps its Edit button and remove icon on the same row as its text, so step text gets narrower when edit tools are on.
- The remove icon and buttons keep their size and have a 44px tap area on a touch screen.
- Approve and Revise wrap under each other if they do not fit on one row.

## Accessibility: built in

- The card is named by its title, and the steps are a numbered list.
- Edit and Remove buttons include the step number and title.
- Screen readers hear when the plan is approved or a revision is requested.
- It does not move your place on the page when it appears.
- The state is written in words, and Approved adds a check mark.

## Accessibility: what you need to do

- Set headingLevel so the title fits your page outline. It is 3 unless you change it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | Plan title, shown as the heading. |
| steps (required) | `PlanStep[]` |  | Ordered steps. Each has id, title and an optional description. |
| estimate | `ReactNode` |  | Time or cost estimate shown under the title. |
| state | `"draft" \| "awaiting" \| "approved" \| "revised"` |  | State, for controlled use. |
| defaultState | `PlanState` | `"awaiting"` | Initial state when uncontrolled. |
| onStateChange | `(state: PlanState) => void` |  | Called when Approve or Revise changes the state. |
| onApprove | `() => void` |  | Called by Approve. |
| onRevise | `() => void` |  | Called by Revise. |
| onEditStep | `(id: string) => void` |  | Adds an Edit button to each step while the plan is draft or awaiting. |
| onRemoveStep | `(id: string) => void` |  | Adds a Remove button to each step while the plan is draft or awaiting. |
| readOnlyLabel | `string \| null` | `"Nothing has changed yet"` | Read-only badge text. Null hides it. It is hidden once approved. |
| labels | `PlanCardLabels` |  | Replace button text and the state notes. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's own heading, so it fits the page outline. |
| className | `string` |  | Extra classes on the section. |

## States

- status: Set with the state prop.

## Tokens

- `--surface`
- `--border`
- `--surface-sunken`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Awaiting approval: The starting state. Approve and Revise work, and the "nothing has changed" label shows.
- Editable steps: Each step gets Edit and Remove buttons. They go away once the plan is approved or revised.
- Draft and approved: A draft keeps the buttons off while the plan is being written. An approved plan hides the "nothing has changed" label.

Source: src/organisms/PlanCard.tsx
