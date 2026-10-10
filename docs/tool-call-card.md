# ToolCallCard
A card that shows one step the assistant took, with its status, how long it took, and what went in and out.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tool-call-card
ToolCallCard shows one step the assistant took. The top line gives the step name, a short summary, how long it took and a status tag. Opening it shows what was sent and what came back. The icon is a tool while waiting, a spinner while running, a check when done and an alert if it failed. A failure also tints the border.
## When to use it

Makes one step the assistant took visible and easy to check. The top line says what it is and how it went; what went in and came out stays folded until someone wants it.

## Use it for

- A search, file read or other action the assistant ran.
- A step that failed, with what was sent and what came back.
- A step that is still running.

## Not for

- The assistant's reasoning: use `thinking-block`
- A list of many steps in a task: use `step-timeline`
- An action that needs the person's approval first: use `approval-prompt`

## Anatomy

- Status icon
- Step name
- Summary
- Time taken
- Status tag
- What was sent
- What came back

## Do

- Write a summary anyone would understand.
- Update the same card as the step moves from waiting to running to done.
- Show the time taken once the step finishes.
- When a step fails, show what went wrong.

## Avoid

- Do not put secrets or personal data in what was sent. It shows as plain text.
- Do not use it to ask for approval. It reports. It does not ask.
- Do not leave a failed step without a note on what to do next.

## On a phone

- The name and the summary are each cut to one line with an ellipsis, and the full text is not shown anywhere else on the card.
- The input and output blocks both scroll sideways, and long unbroken strings in the output wrap.
- The whole header is one tap target that opens the details, with a tap area at least 44px tall on touch screens.

## Accessibility: built in

- The top line is a real button. Screen readers say whether it is open or closed.
- Status is written as a word (Queued, Running, Done or Failed), not shown by icon and color alone.
- While running, the spinner is read as "Loading". The other icons are hidden from screen readers.
- The Tab key can reach the input box, so long lines can be scrolled with the keyboard.

## Accessibility: what you need to do

- Announce status changes yourself if they matter, for example from an area that screen readers watch for updates.
- Write the summary in plain words, such as Searching "q3 revenue", so the step makes sense without opening it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `string` |  | Tool identifier, shown in a monospace face. |
| status (required) | `"pending" \| "running" \| "success" \| "error"` |  | Drives the icon, the badge label (Queued, Running, Done, Failed) and the badge tone. |
| summary | `string` |  | One-line human description of what the tool is doing. |
| input | `unknown` |  | Any value. Shown as indented JSON in the expanded panel when it is not undefined. |
| output | `ReactNode` |  | Result shown in the expanded panel when it is not null or undefined. |
| durationMs | `number` |  | Elapsed time in milliseconds, shown in seconds with one decimal. Hidden while running. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--border`
- `--danger`
- `--success`
- `--surface-sunken`
- `--fg-muted`
- `--fg-subtle`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Pending and running: A waiting step says Queued. A running step shows a spinner and no time yet.
- Success with details: Open the card to see what was sent and what came back.
- Error: The red tag, alert icon and tinted border make a failed step easy to spot.

Source: src/molecules/ToolCallCard.tsx
