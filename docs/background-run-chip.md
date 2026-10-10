# BackgroundRunChip
A small chip for a run in the background that opens its details.
Status: stable. Page: https://lkb00.github.io/tattva/#component-background-run-chip
BackgroundRunChip shows one background run in a single small pill: a state icon, its name, a short status and how long it has run. Pressing it opens the details or a peek. When the run needs you, the chip turns amber so it stands out. Every other state stays calm.
## When to use it

A small pill for a run that keeps going while the person does other things. It stays calm while the run works and turns amber only when the run needs the person.

## Use it for

- A row of background runs in a header or footer.
- Opening a run's details or a quick peek.
- Drawing attention to a background run that is waiting on the person.

## Not for

- A full list of runs with summaries and replies: use `agent-session-list`
- Saying who is in control of the screen: use `takeover-bar`
- A status that nobody needs to press: use `agent-status-icon`

## Anatomy

- State icon
- Run name
- Short status
- Time elapsed

## Do

- Use it where space is tight, such as a header or a side rail.
- Keep the status to two or three words.
- Open a peek or panel with the full story on press.
- Group chips that need you first.

## Avoid

- Do not use amber for working, done or failed runs.
- Do not put more than a name and a short status in the chip.
- Do not use a chip for an action. It only opens details.
- Do not let the elapsed time tick every second for screen readers.

## On a phone

- The chip never grows wider than its container, and the name and status text are cut with an ellipsis when they do not fit.
- Nothing shows the full text of a cut name on a phone, so keep names and status words short.
- On a touch screen the chip keeps its size and has a 44px tap area.

## Accessibility: built in

- It is one real button, and its name reads the state, the run name, the status and the time together.
- Amber comes with the words Needs you and a question-mark icon, so it does not rely on color.
- It tells screen readers whether its panel is open when you pass expanded.
- The spinning icon stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Pass expanded while the panel it opens is showing. Leave it out if the chip goes to another page.
- Keep statusText short, because it is read in the button name with the run name and time.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `string` |  | Name of the run. |
| status (required) | `AgentStatus` |  | working, needs-input, idle, completed, failed or stopped. needs-input gets the amber style. |
| statusText | `string` |  | Short status. Defaults to a plain word for the status. |
| elapsed | `string` |  | Time the run has been going, such as 4 min. |
| expanded | `boolean` |  | Set while the details this chip opens are showing. Sets aria-expanded. |
| onClick | `MouseEventHandler<HTMLButtonElement>` |  | Opens the details. Other button attributes pass through. |
| className | `string` |  | Extra classes on the button. |

## States

- status: Set with the status prop.
- open or closed: Set with the expanded prop.

## Tokens

- `--attention-soft`
- `--attention-fg`
- `--surface`
- `--line`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Four runs in a row: Press a chip to open its details. The run that needs you is amber.
- Working: The icon spins and stays still if motion is turned off.
- A long name on a small screen: Long names are cut with an ellipsis and the chip never grows wider than its row.

Source: src/molecules/BackgroundRunChip.tsx
