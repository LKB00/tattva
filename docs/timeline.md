# Timeline
A top-to-bottom list of events with times and an optional status.
Status: experimental (based on design reasoning, not yet seen in shipped products). Page: https://lkb00.github.io/tattva/#component-timeline
Timeline lists events in order. Each has a time, a title, and optionally a description and a status. The status shows as a marker shape and as words, so it is never color alone.
## When to use it

Lists events in the order they happened, each with a time, a title and an optional status. The status is shown as a marker shape and in words, so it never relies on color.

## Use it for

- What an agent did during a task, step by step with times.
- The history of an update or a long job, including a step that failed.
- A short log of events a person may need to check later.

## Not for

- Live progress of steps that are still running: use `step-timeline`
- A flow with decisions and branches: use `process-diagram`
- Steps that have no times

## Anatomy

- Marker
- Connecting line
- Time
- Title
- Status label
- Description

## Do

- Use it when the order in time matters.
- Give each time a standard date value too.
- Keep titles to a few words.
- Show the status in words as well as the marker.

## Avoid

- Do not use it for steps with no time. Use a numbered list.
- Do not rely on marker color for the status.
- Do not put long text in the title.
- Do not animate the markers.

## On a phone

- Events stay in one column, and the time, title and state wrap onto more lines when they do not fit.
- Nothing in it is tappable, so there are no touch targets to size. The small state labels are 12px.

## Accessibility: built in

- It is a numbered list, so screen readers say how many events there are and which one you are on.
- Each time is marked up as a time, and carries the exact dateTime you give it.
- Each status is written in words. The markers and the connecting line are hidden from screen readers.

## Accessibility: what you need to do

- Give each event a dateTime in a standard format, such as 2026-10-03T09:40, so software can read the time.
- Translate the status words with stateLabels if your product is not in English.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| events (required) | `TimelineEvent[]` |  | Each event has id, time, optional dateTime, title, optional description and optional state (done, current, upcoming, failed). |
| stateLabels | `Record<TimelineState, string>` | `English labels` | Replaces the state text for localisation. |
| className | `string` |  | Extra classes on the list. |

## States

- done: An event with state done shows a lime dot with a check.
- current: An event with state current shows a dark filled centre in a ringed dot.
- upcoming: An event with state upcoming, or no state, shows an empty ringed dot.
- failed: An event with state failed shows a red dot with a cross.

## Tokens

- `--lime`
- `--on-lime`
- `--danger-soft`
- `--danger-fg`
- `--border-strong`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- What happened, and when
- When something fails

Source: src/molecules/Timeline.tsx
