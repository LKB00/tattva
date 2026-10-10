# CallRecord
One call at a glance for the people who run a voice agent: status, why it ended, the AI's verdict with evidence, the cost and anything a person must fix.
Status: stable. Page: https://lkb00.github.io/tattva/#component-call-record
CallRecord sums up one call with a voice agent. It shows the status in words, when it started, how long it ran and why it ended. The AI's verdict (goal met, not met or not sure) comes with its reason and a Show in transcript button that marks the lines it is based on. The cost can be shown as money or as usage. If the agent did not say it is an AI, or no recording consent was captured, an amber notice says a person must fix the agent.
## When to use it

Lets an operator understand one call in seconds: did it work, why did it end, what did it cost, and is there anything they must fix in the agent.

## Use it for

- The detail view when someone opens a row in a call log.
- Reviewing calls the AI marked as failed or unsure.
- Checking that the agent said it is an AI and asked before recording.

## Not for

- The live call the customer sees: use `voice-panel`
- A list of many calls: use `data-table`
- An AI summary of a document or a thread: use `summary-card`

## Anatomy

- Title
- Status badge
- Started, duration, ended because
- Needs-you notices
- Checks passed
- Outcome with AI label
- Taken from the call
- Cost with Money or Usage switch
- Transcript

## Do

- Show the reason with every verdict, and link it to the lines it rests on.
- Keep a not sure verdict neutral. It is honest, not a warning.
- Use amber only for a missing AI disclosure or recording consent: a person must fix the agent.

## Avoid

- Do not show emotion scores about the caller, such as frustrated 72%.
- Do not use amber for a Live badge. Live uses the danger colour or neutral.
- Do not show a verdict while the call is still live.

## On a phone

- The facts fold into two columns, with why it ended on its own line, and the card padding shrinks a step.
- The transcript scrolls inside its own area, about 18rem tall, so the cost and outcome stay close.
- The Money or Usage switch and Show in transcript keep a 44px tap area on touch screens.

## Accessibility: built in

- The status, the verdict and each check are written in words with an icon, never colour alone.
- Show in transcript marks the evidence lines in words and moves focus to the first one.
- Money and Usage is a radio group: arrow keys move between them.
- Cost is a real table with a hidden caption that says what it holds.
- The live dot stops pulsing under reduced motion, and the word Live stays.

## Accessibility: what you need to do

- Write endedReason in plain words, such as Caller hung up, not a code like customer-ended-call.
- Pass disclosureGiven and consentRecorded from what really happened in the call, so the amber notice is true.
- If you link an audio player, pass onShowEvidence and move the player to the first evidence line.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| status (required) | `"live" \| "completed" \| "failed" \| "voicemail" \| "transferred"` |  | Where the call is. Always shown in words. |
| endedReason (required) | `string` |  | Why it ended, in plain words. Hidden while live. |
| duration (required) | `string` |  | How long it ran, or has run so far. |
| startedAt (required) | `string` |  | When it started, already formatted. |
| title | `string` | `"Call"` | Heading, such as the caller or the agent. |
| outcome | `{ verdict: "success" \| "failure" \| "unknown"; rationale: string; evidenceLineIds?: string[] }` |  | The AI's verdict and its reason. Evidence ids link to transcript lines. |
| cost | `{ total: number; items: { label: string; amount: number; quantity?: string }[] }` |  | What the call cost. The Usage switch shows when any item has a quantity. |
| currency | `string` | `"GBP"` | ISO 4217 code for every amount. |
| locale | `string` | `"en-GB"` | Number format for amounts. |
| disclosureGiven | `boolean` |  | false shows an amber notice. Leave out if you do not track it. |
| consentRecorded | `boolean` |  | false shows an amber notice. Leave out if you do not track it. |
| data | `Record<string, string>` |  | Fields the agent took from the call. |
| transcript | `{ id: string; speaker: "agent" \| "caller"; text: string; time?: string }[]` |  | A simple transcript. Evidence lines are marked when Show in transcript is pressed. |
| speakerLabels | `{ agent: string; caller: string }` | `Agent, Caller` | Names for the two speakers. |
| onShowEvidence | `(lineIds: string[]) => void` |  | Called by Show in transcript, for example to seek your audio player. |
| actions | `ReactNode` |  | Extra header actions, such as Open recording. |
| className | `string` |  | Extra classes for the card. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--warning-soft`
- `--warning-fg`
- `--danger`
- `--success-fg`
- `--lime`
- `--radius-card`
- `--radius-control`
- `--dur-base`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Completed call with evidence: The AI says the goal was met and why. Show in transcript marks the line it is based on. Switch the cost to Usage to see what was used.
- Needs you: no AI disclosure: The agent never said it was an AI. That is amber, because a person must fix the greeting. The verdict is unsure, which stays neutral.
- Live and failed: A live call has no verdict yet and its cost is so far. A failed call says why in words.

Source: src/organisms/CallRecord.tsx
