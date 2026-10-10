# AIPresence
A moving orb that shows whether the assistant is waiting, listening, thinking, speaking, or has hit a problem.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ai-presence
AIPresence is a small dark glass lens set in a fine bezel, with lime light inside it and the AI mark at its heart, under a soft glow. Each state moves differently: Ready breathes slowly, Listening sends rings outward, Thinking circles a comet of light inside the rim, Speaking pulses with the voice, and an error dims the light to red. When the state changes, it glides smoothly to the new look. The state is always written out in words too. For people who turn off motion, it stays still and switches instantly. It is not a button, so place a labelled Stop button next to it.
## When to use it

A drawn orb that shows what a voice assistant is doing: waiting, listening, thinking, speaking or stuck. It glides between states instead of restarting, and the state is always given in words too.

## Use it for

- A voice conversation, to show whether the assistant is listening or speaking.
- The pause while the assistant thinks between voice turns.
- Reacting to how loud the speaker is: pass level.

## Not for

- Showing who wrote a message: use `avatar`
- A whole voice screen with its controls: use `voice-panel`
- The wait before a text reply: use `typing-indicator`

## Anatomy

- Glow
- Bezel
- Glass sphere
- Inner light
- AI mark
- Thinking comet
- Listening rings
- State label
- Hidden status message

## Do

- Place a labelled Stop button beside the orb whenever the person can interrupt.
- Ask for microphone permission when the person presses a button, then start the orb.
- Keep the label showing unless the state is written out nearby.
- Pass the raw volume and let the orb smooth it.

## Avoid

- Make the orb the only button or the only sign of what is happening.
- Change the state many times a second. Screen readers announce only real changes.
- Use amber for the problem state. Amber is only for when a person has to act.
- Add a glow outside the disc, or use rainbow or purple gradients.

## On a phone

- The orb is a fixed size (32, 64 or 112px) and does not scale with the screen, so pick the size that fits a narrow screen.
- The orb and its label sit on one row, so a long label can squeeze a small screen. Keep the label short.
- It is not a control. Place a Stop button beside it, which has a 44px tap area on touch screens.
- Under reduced motion it draws a still frame instead of the animation.

## Accessibility: built in

- Screen readers hear the state in words, politely, each time it changes.
- The drawing is hidden from screen readers.
- For people who turn off motion, the orb stays still, ignores volume and changes state instantly.
- The problem state shows the words "Something went wrong", not only a red center.

## Accessibility: what you need to do

- Put a labelled Stop button next to it whenever people can interrupt. The orb is not a button.
- Change state only when the assistant really changes what it is doing. Screen readers hear each change.
- Keep the visible label on, unless the state is written out nearby.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| state | `"idle" \| "listening" \| "thinking" \| "speaking" \| "error"` | `"idle"` | Current state. Each state is a row of animation targets. |
| size | `"sm" \| "md" \| "lg"` | `"md"` | 32, 64 or 112 pixels. |
| level | `number` | `0` | Audio amplitude from 0 to 1. Smoothed inside the component. Ignored under reduced motion. |
| showLabel | `boolean` | `true` | Show the state as visible text. The status region is present either way. |
| labels | `Partial<Record<AIPresenceState, string>>` |  | Replace the text for any state. |
| className | `string` |  | Extra classes for the wrapper. |

## States

- status: Set with the state prop.

## Tokens

- `--code-bg`
- `--fg-subtle`
- `--lime`
- `--danger`
- `--fg-muted`
- `--danger-fg`

## Examples

### Switch between states

The orb glides between states. The label and the hidden message for screen readers change only when the state does.

```tsx
const [state, setState] = useState<AIPresenceState>("listening");

<AIPresence state={state} size="lg" />
{(["idle", "listening", "thinking", "speaking", "error"] as const).map((s) => (
  <Button key={s} size="sm" onClick={() => setState(s)}>{s}</Button>
))}
<Button size="sm" variant="ghost" onClick={() => setState("idle")}>Stop</Button>
```

### Audio level

Pass the sound volume from 0 to 1. The orb smooths it, rising fast and falling slowly.

```tsx
<AIPresence state="speaking" size="lg" level={level} />
```

### Sizes

```tsx
<AIPresence size="sm" state="thinking" />
<AIPresence size="md" state="thinking" />
<AIPresence size="lg" state="thinking" showLabel={false} />
```

Source: src/atoms/AIPresence.tsx
