# ActivityTrace
The agent's work shown step by step, each step tagged with who did it, then folded to one line.
Status: stable. Page: https://lkb00.github.io/tattva/#component-activity-trace
ActivityTrace lists what the agent did, in order. Every step has a tag in words that says who did the work: AI, Rule sheet, Calculated, Safety check or You. While work is arriving the list stays open and new rows slide in. When it is done it folds to one line that the person can open again.
## When to use it

Show how an answer was reached without filling the thread. The tag on each step tells the reader how much to trust it: an AI judgment can be wrong, a rule sheet lookup was checked, a calculation was done by code, and a safety check is a guardrail.

## Use it for

- An agent that reads, looks things up and calculates before it answers.
- A thread that must stay short once the work is finished.
- Showing which steps were the AI's judgment and which were fixed rules or code.

## Not for

- A plan the person approves step by step: use `step-timeline`
- One tool call with its input and result: use `tool-call-card`
- The model's free-form reasoning text: use `thinking-block`
- Any content that only needs to open and close: use `collapsible`

## Anatomy

- Summary button with chevron
- Step list
- Status icon
- Step title
- Actor tag
- Detail

## Do

- Tag every step honestly. Use AI only for judgments the model made.
- Fold the trace when the work ends so the thread stays short.
- Keep titles to one short line and put extra words in detail.
- Show a failed step and say what failed.

## Avoid

- Do not tag a model guess as Rule sheet or Calculated. That would make it look more certain than it is.
- Do not use it for steps the person must approve. Use StepTimeline or ApprovalPrompt.
- Do not put long reasoning text in a step. Use ThinkingBlock.
- Do not rely on the status icon colour alone. Keep the words.

## On a phone

- The summary row is at least 44px tall on touch screens and spans the full width.
- Summaries, step titles and details wrap onto new lines instead of being cut off.
- Opening and closing needs a tap, not hover.

## Accessibility: built in

- The folded line is a real button with aria-expanded and aria-controls, and the chevron is decorative.
- Steps are an ordered list. Each status icon has a word for screen readers: Waiting, Running, Done or Failed. A failed step also shows the word Failed.
- Each step has a text tag, so who did it is never shown by colour alone.
- While streaming, a polite live region reads out each new step once. A trace that mounts already full is not read out.
- While streaming, the button is marked aria-disabled and the list stays open.
- The spinner and sliding rows only move when the system allows motion. The button is 44px tall on coarse pointers.

## Accessibility: what you need to do

- Write step titles as short sentences that make sense when read out one after another.
- Keep summary specific, such as "Read your message · 8 steps", because it is the button's name.
- Set status on every step while streaming, so the running one is marked.
- Set streaming back to false when the work ends, so the person can fold the list.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| steps (required) | `{ id: string; actor: "ai" \| "rule" \| "calculated" \| "check" \| "you"; title: string; detail?: ReactNode; status?: "pending" \| "running" \| "done" \| "failed" }[]` |  | The steps in order. status defaults to done. |
| summary (required) | `string` |  | The one line shown when folded, such as "Read your message · 8 steps". It is also the button's name. |
| streaming | `boolean` |  | True while steps are still arriving. The list is held open, new rows slide in (when motion is allowed) and each new step is announced. |
| defaultOpen | `boolean` | `false` | Start open. Ignored when open is passed. |
| open | `boolean` |  | Controlled open state. |
| onOpenChange | `(open: boolean) => void` |  | Called when the person opens or folds the list. |
| actorLabels | `Partial<Record<TraceActor, string>>` |  | Rename the tags. The defaults are AI, Rule sheet, Calculated, Safety check and You. |
| className | `string` |  | Extra classes for the outer box. |

## States

- streaming: The list is held open, the summary button ignores presses, and each new row slides in and is announced politely.
- open or closed: The step list shows under the summary and the chevron turns down.
- folded: Only the summary line shows, with the chevron pointing right and aria-expanded false.
- step running: A step with status running shows a spinner (still when motion is reduced) and the word Running for screen readers.
- step failed: A failed step shows an X, the word Failed and a danger-coloured title.
- step pending: A pending step shows an empty circle and a muted title.
- focus: A visible focus ring appears on the summary button.
- hover: The summary row gets a soft background under the pointer when not streaming.

## Tokens

- `--surface`
- `--border`
- `--border-strong`
- `--fg-muted`
- `--fg-subtle`
- `--success-fg`
- `--danger-fg`
- `--surface-hover`
- `--dur-fast`
- `--animate-rise`
- `--lime`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Folded, then open: Folded, the trace is one line. Press it to see every step. The second trace starts open.
- Streaming: A step arrives every 700 milliseconds. While streaming the list is open, the newest step is marked running, and each row is announced. At the end the summary changes and the person can fold it. With reduced motion on, rows appear without sliding.
- A failed step: A failed step shows an X, the word Failed and a detail line. Pending steps show an empty circle. The icons and words carry the meaning, not the colour.
- Controlled: Pass open and onOpenChange when the parent needs to know, for example to fold every trace at once.

Source: src/organisms/ActivityTrace.tsx
