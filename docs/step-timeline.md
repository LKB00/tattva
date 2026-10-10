# StepTimeline
A list of steps in a task, showing which are done, in progress, waiting or failed.
Status: stable. Page: https://lkb00.github.io/tattva/#component-step-timeline
StepTimeline shows the stages of a task in order, joined by a thin line. Done steps get a green check. The current step shows a spinner. Failed steps show a cross. Waiting steps show their number. Use it when order matters and people want to know where things stand.
## When to use it

Shows the stages of a task in order, so people see at a glance what is done, what is happening now and what failed.

## Use it for

- A task whose steps must happen in order.
- Showing where a running workflow stands.
- Showing which step failed, with later steps still waiting.

## Not for

- Open items with no set order: use `checklist`
- Events with dates, such as a history of changes: use `timeline`
- The details of one tool the assistant used: use `tool-call-card`

## Anatomy

- Status icon
- Line between steps
- Title
- Detail
- Status text for screen readers

## Do

- Mark only one step as in progress at a time.
- Use the detail line to say who or what is being waited on.
- Keep titles short, starting with an action word.
- Say why a step failed in its detail line, so people do not have to look elsewhere.

## Avoid

- Do not use it for to-dos with no order. Use Checklist.
- Do not use it for dozens of steps. It cannot fold or scroll.
- Do not use amber here. Amber is for rows that need a person, in Checklist and ApprovalPrompt.

## On a phone

- Steps stack in one column, and titles and details wrap inside the space beside the marker.
- Nothing in it is tappable, so there are no touch targets to size. Detail text is 12px.

## Accessibility: built in

- It is a numbered list named "Task progress".
- The step in progress is marked as the current step for screen readers.
- Each step has hidden text with its state (done, active, todo or failed), so meaning does not rest on color or icon.
- The spinner on the current step is read as "Loading".

## Accessibility: what you need to do

- Mark only one step as active at a time.
- Put the reason for a failure in the step's detail. The hidden text only says "failed".
- Tell people when a step finishes or fails, for example with a short status message. The list does not announce changes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| steps (required) | `Step[]` |  | Ordered steps. Step is { id: string; title: string; detail?: string; state: "done" \| "active" \| "todo" \| "failed" }. |

## States

- done: A step with state done shows a green check and a green connector line.
- active: A step with state active shows a spinner and is marked as the current step.
- todo: A step with state todo shows its number and dimmed title.
- failed: A step with state failed shows a red cross.

## Tokens

- `--success`
- `--danger`
- `--accent`
- `--border / --border-strong`
- `--fg-muted / --fg-subtle`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- In progress: One step done, one in progress, one waiting.
- A failed step: A failed step gets a red cross and says what went wrong. Later steps keep waiting.

Source: src/organisms/StepTimeline.tsx
