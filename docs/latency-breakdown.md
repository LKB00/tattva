# LatencyBreakdown
Shows where the time went in a voice reply or a whole call, names the slowest stage in words and lists the turns that were too slow.
Status: stable. Page: https://lkb00.github.io/tattva/#component-latency-breakdown
LatencyBreakdown splits the wait before a voice agent answers into stages: end of speech, speech to text, model, tools, voice and network. A stacked bar shows the split, and a real table under it gives every stage in milliseconds. The slowest stage is named in words, not only the total. In call mode it adds P50, P90 and P99, and lists the turns over your team's target, which can move the recording to that moment.
## When to use it

Helps the people who run a voice agent see why it felt slow, and which part to fix first, without reading a chart.

## Use it for

- The detail page of one call in an agent dashboard.
- Checking one reply that felt slow while testing an agent.
- Comparing a change to the model or voice against your team's target.

## Not for

- Showing people on the call that the assistant is working: use `voice-panel`
- A single number on a dashboard: use `stat-tile`
- Response times over days or weeks: use `line-chart`

## Anatomy

- Heading and target
- Total
- Percentiles
- Slowest stage line
- Stacked bar
- Stage table
- Slow turns list

## Do

- Name the slowest stage. A total alone does not say what to fix.
- Measure time to the first real answer, so a filler word cannot hide a slow reply.
- Link slow turns to the recording, so people can hear what happened.

## Avoid

- Do not colour stages lime. Lime marks the AI, and this is about time.
- Do not use amber for a slow turn. Nobody has to act on one call.
- Do not show the target as a law. It is a goal your team set.

## On a phone

- On a phone the stacked bar is hidden and each table row shows its own small bar, so the split reads as a list.
- Slow turns are full-width buttons with a 44px tap area on touch screens.
- Padding shrinks a step below 640px wide so the numbers keep their room.

## Accessibility: built in

- The stacked bar is hidden from screen readers. A real table follows with every stage, its time in ms and its share.
- The slowest stage is written in a sentence and marked as slowest in the table, not only shown by colour.
- Over and within target are written in words.
- Slow turns are buttons with their name, time and slowest stage in the label.
- The bar grows in once and stops; under reduced motion it is drawn still.

## Accessibility: what you need to do

- Pass times in milliseconds that your code measured. Do not round them into words yourself.
- If you pass onTurnSelect, make it move your audio player and say where it moved, as the example does.
- Set targetMs from your team's own goal and call it that. Do not present it as an industry rule.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| mode (required) | `"turn" \| "call"` |  | One reply, or the whole call with medians, percentiles and turns. |
| stages (required) | `{ key: "endpointing" \| "stt" \| "llm" \| "tools" \| "tts" \| "transport" \| "s2s"; ms: number }[]` |  | Time per stage in milliseconds, in the order they happen. For a call, pass medians. |
| totalMs (required) | `number` |  | Time from the end of the person's speech to the first sound of the reply. |
| percentiles | `{ p50: number; p90: number; p99?: number }` |  | Spread of reply times across the call. |
| targetMs | `number` |  | Your team's goal. Shows over or within target, and lists slow turns in call mode. |
| turns | `{ id: string; label?: string; totalMs: number; stages: LatencyStage[] }[]` |  | Every turn in the call. Those over the target are listed with their slowest stage. |
| onTurnSelect | `(id: string) => void` |  | Makes slow turns buttons. Use it to seek the recording. |
| title | `string` |  | Heading. Defaults to Response time. |
| stageLabels | `Partial<Record<LatencyStageKey, string>>` |  | Your own names for the stages. |
| className | `string` |  | Extra classes for the card. |

## States

- within target: The total is at or under the team's target: the total reads in ink with the words Within target.
- over target: The total is over the target: it says Over target by and the number of milliseconds, in words, never by colour alone.
- slow turns: In call mode, turns over the target are listed as buttons; pressing one calls onTurnSelect so the app can jump to that moment.
- no slow turns: In call mode with every turn inside the target, a plain line says so instead of an empty list.
- phone: Under 640px the stacked bar is hidden and each row of the table gets its own small bar, so nothing is squeezed.

## Tokens

- `--chart-1`
- `--chart-2`
- `--chart-3`
- `--chart-4`
- `--chart-5`
- `--chart-neutral`
- `--chart-seq-4`
- `--surface`
- `--surface-sunken`
- `--border`
- `--danger-fg`
- `--radius-card`
- `--radius-control`
- `--dur-slow`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- One reply: The model took most of the time, so it is named first. The reply was over the team's target.
- A whole call with slow turns: Stages are medians across the call. Two turns went over 800 ms; choose one to play the recording from there.
- Speech-to-speech model, within target: With a single speech model there is no separate speech to text or voice stage. No target line turns red.

Source: src/molecules/LatencyBreakdown.tsx
