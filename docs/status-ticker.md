# StatusTicker
One line that shows the real current step of an AI run, such as Reading 3 files, and keeps its width so nothing beside it moves.
Status: stable. Page: https://lkb00.github.io/tattva/#component-status-ticker
StatusTicker shows the step an AI run is on right now. The app passes each real step as it happens; the ticker never moves on a timer of its own. When the step changes, the old line fades out and the new one settles in from a light blur. The box keeps the width of the widest text it has shown, so the things beside it stay still.
## When to use it

Tells people what the AI is doing at this moment, in words, without making the layout jump. It only ever shows what the app says is true.

## Use it for

- The current step of an agent run, such as Reading 3 files or Running tests.
- A search or tool call that has a few named steps.
- A final still line when the run ends, such as Done in 12s.

## Not for

- A wait with no named steps: use `typing-indicator`
- A fixed summary line at the top of a screen: use `status-line`
- A short loading state inside a button: use `spinner`
- Marking the surface the AI is changing: use `working-edge`

## Anatomy

- Line box
- Current step
- Outgoing step
- Live region (hidden)

## Do

- Pass the step the app is really on, the moment it starts.
- Keep steps short and plain: a verb and an object, such as Reading 3 files.
- Pass steps or reserve when the ticker sits beside other content.
- End with a still line that says the result, such as Done in 12s.

## Avoid

- Do not cycle through steps on a timer to look busy.
- Do not put links or buttons in the line.
- Do not use it for errors that need action.
- Do not show more than one ticker for the same run.

## On a phone

- The line never grows wider than its parent: long steps are cut with an ellipsis instead of wrapping.
- It is text only and has no touch targets of its own, so it fits in a narrow header or a chat row.
- Pass steps or reserve so the width is set from the start and the row does not shift on a small screen.

## Accessibility: built in

- The line is a group with the label as its name, and carries aria-busy until done is true.
- A separate polite live region announces a new step at most once every 2 seconds. If steps change faster, the latest one is announced when the gap ends.
- When done turns true the final line is announced at once.
- The fading old line and the width placeholders are aria-hidden, so the text is never read twice inside the line.
- Under reduced motion there is no blur, no fade and no shimmer: the text simply changes.

## Accessibility: what you need to do

- Pass real steps only. Never cycle through made-up steps on a timer.
- Give a label that says whose status it is, such as Assistant status, when more than one runs on a screen.
- Pass done and a final line, such as Done in 12s, when the run ends, so people hear that it finished.
- Show errors with a proper error message as well. The ticker is not an error surface.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| current (required) | `string` |  | The step the run is on right now. When done, pass the final line, such as Done in 12s. |
| steps | `string[]` |  | Every step text the run may show. Used only to reserve the width of the widest one. It does not drive the line. |
| done | `boolean` | `false` | The run has finished. The shimmer stops, the text turns full ink, aria-busy is removed and the line is announced at once. |
| label | `string` | `"AI status"` | Accessible name of the line. |
| reserve | `string` |  | A text whose width the box keeps from the start, such as the longest step you expect. |
| className | `string` |  | Classes for the outer box. |

## States

- selected: Set with the current prop.
- working: While done is false the line shimmers softly and carries aria-busy.
- changing: When current changes, the old line fades out over it while the new one settles in from a 2px blur.
- throttled: If steps change faster than every 2 seconds, screen readers hear only the latest one when the gap ends.
- truncated: A step wider than the space it has is cut with an ellipsis instead of wrapping.
- reduced motion: With reduced motion on, the text swaps with no blur, no fade and no shimmer.

## Tokens

- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--dur-base`
- `--dur-fast`
- `--ease-arrive`
- `--ease-in`
- `--blur-arrive`

## Examples

### Steps from the app

Press Next step to move the run on, the way an app would when a real step starts. After the last step it settles on a still final line.

```tsx
const run = ["Reading 3 files", "Checking the return rule", "Writing the draft", "Running tests"];
const [i, setI] = useState(0);
const done = i >= run.length;

<StatusTicker current={done ? "Done in 12s" : run[i]} steps={run} done={done} label="Assistant status" />
<Button size="sm" variant="secondary" onClick={() => setI((n) => Math.min(n + 1, run.length))} disabled={done}>Next step</Button>
<Button size="sm" variant="ghost" onClick={() => setI(0)}>Start again</Button>
```

### In a row with other content

The reserve text holds the width, so the count beside the ticker does not move when the line changes to the shorter final text.

```tsx
<div className="flex items-center gap-3 rounded-card border border-line bg-surface px-3 py-2">
  <StatusTicker current={done ? "Done in 8s" : "Searching the web"} reserve="Searching the web" done={done} label="Search status" />
  <span className="text-body leading-5 text-fg-subtle">3 sources</span>
</div>
<Button size="sm" variant="secondary" onClick={() => setDone((d) => !d)}>{done ? "Run again" : "Finish"}</Button>
```

Source: src/atoms/StatusTicker.tsx
