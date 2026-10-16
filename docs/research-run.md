# ResearchRun
A long research run: its phases, how many sources it has read, Stop, then the report.
Status: stable. Page: https://lkb00.github.io/tattva/#component-research-run
ResearchRun shows a deep research run that can take many minutes. It shows the question, the phases (done, now, next), how many sources it has read and for how long, and what it is reading this moment. Stop is always there. When it finishes it says what it did in one line, such as Read 87 sources in 9 min, and offers Open report. Screen readers hear each new phase, not every source.
## When to use it

Keeps people informed and in control during a long research run, so the wait feels like progress, not silence.

## Use it for

- Deep research that searches and reads many sources.
- Any long run with a few clear phases and a count.

## Not for

- An agent's steps with tools and approvals: use `step-timeline`
- A short wait: use `shimmer-text`
- Generating images or video: use `generation-progress`

## Anatomy

- Question
- Phases
- Sources read and time
- What it is reading now
- Stop
- Summary and Open report

## Do

- Show a count that moves, so the wait feels like progress.
- Keep Stop in reach the whole time.
- When stopped, still offer the report of what was read.

## Avoid

- Do not announce every source to screen readers.
- Do not show a percentage you cannot know.
- Do not hide which phase it is in.

## On a phone

- The activity line ends with an ellipsis on one line.
- Stop and Open report wrap under the summary.

## Accessibility: built in

- The phases are an ordered list; the current one is marked as the current step and said as now.
- Screen readers hear each new phase once, and the summary when it ends, through a status line.
- The pulse on the current phase stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Keep phase names short and in plain words.
- Pass the time already in words, such as 4 min.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| question (required) | `string` |  | What is being researched, in the person's words. |
| status (required) | `"running" \| "done" \| "stopped" \| "failed"` |  | Where the run is. |
| phases (required) | `ResearchPhase[]` |  | The phases: { id, label, state: "done" \| "active" \| "waiting" }. |
| sourcesRead (required) | `number` |  | Sources read so far. |
| elapsed (required) | `string` |  | Time so far, in words. |
| activity | `string` |  | What it is doing this moment. Shown while running. |
| onStop | `() => void` |  | Stops the run. Shown while running. |
| onOpenReport | `() => void` |  | Opens the report. Shown when done or stopped. |
| onRetry | `() => void` |  | Tries again after a failure. |
| labels | `ResearchRunLabels` |  | Overrides every line of text. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the part's heading. |
| className | `string` |  | Extra classes on the root. |

## States

- status: Set with the status prop.
- running: Done phases have a check, the current one a lime ring, the rest wait in grey. Sources read, time so far, what it is reading now, and Stop.
- done: One line says how many sources were read and how long it took, with Open report.
- stopped: Says the report covers what was read so far, with Open report.
- failed: A red line and Try again.

## Tokens

- `--surface`
- `--line`
- `--lime`
- `--success-soft`
- `--success-fg`
- `--danger-fg`
- `--radius-card`

## Examples

### Researching a question

Watch the phases and count move, press Stop, or wait for the report.

```tsx
<ResearchRun
  question="Which European cities cut traffic deaths the most since 2015, and how?"
  status="running"
  phases={phases}
  sourcesRead={34}
  elapsed="4 min"
  activity="Reading itf-oecd.org"
  onStop={stop}
  onOpenReport={openReport}
/>
```

Source: src/organisms/ResearchRun.tsx
