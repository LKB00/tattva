# MicButton
The one mic control for dictation and starting voice, with every mic state written next to it: recording, locked, turning speech into text, blocked and no mic.
Status: stable. Page: https://lkb00.github.io/tattva/#component-mic-button
MicButton starts and stops the mic. In tap mode one press starts and the next stops. In hold mode the person holds to talk, slides up to lock the recording, and slides away to cancel. While recording, three neutral bars inside the button follow the input level and the word Recording sits beside it. The app owns the state: it asks for permission, records and transcribes, and passes the state back in.
## When to use it

Gives people one clear, labelled control for the mic, so they always know whether it is listening. The state is in words beside the button, not only in an icon or a colour.

## Use it for

- Dictating into a message box: the speech fills the field and the person sends it.
- Starting a voice conversation from a composer.
- Hold-to-talk voice notes on a phone, with slide up to lock and slide away to cancel.

## Not for

- Muting the mic during a live voice session: use `voice-panel`
- Playing back a recording
- A plain toggle that is not about the mic: use `switch`

## Anatomy

- Round button
- Mic icon, level bars, stop mark or spinner
- Attention dot (blocked only)
- State word
- Hold hint
- Cancel (locked only)
- Live region (hidden)

## Do

- Keep the transcribed words in the field for the person to read and send.
- Show blocked with a way to fix it, not a dead button.
- Use lg for the main control on a voice screen, md inside a composer.
- Give a typed route next to the mic.

## Avoid

- Do not colour the recording state lime. Lime is for the AI; this is the person's voice.
- Do not use amber for recording. Amber is only for blocked, where the person has to act.
- Do not rely on the system mic dot alone to show the mic is on.
- Do not start recording without a press.

## On a phone

- The button is 44px (md) or 56px (lg), so it meets the touch size without extra padding.
- Hold mode stops the page from scrolling or opening the long-press menu while the finger is down.
- Slide up 56px to lock, or slide more than 32px off the button and let go to cancel. The words beside the button say which will happen.
- Start and stop give a short buzz on phones that support it. Turn it off with haptics={false}.

## Accessibility: built in

- It is a real button. Its name changes with the state: the label when idle, Stop recording while recording, and Mic blocked. Show how to turn it on when blocked.
- aria-pressed is true while recording or locked.
- Requesting, processing and unavailable set aria-disabled, so the button stays focusable and its name explains why it does nothing.
- A polite status region says only Recording and Stopped, once each.
- In hold mode, holding Space records and releasing stops; Enter starts and stops like a toggle. No key cancels, so nothing is thrown away by one key.
- Every state shows a word beside the button, so the state never depends on colour or the icon alone.
- Under reduced motion the level bars are replaced by a still stop mark and the press does not shrink.

## Accessibility: what you need to do

- Set state from what is really happening: requesting while the permission prompt is open, blocked when it was refused, unavailable when there is no input device.
- Pass onHelp when the mic can be blocked, and open steps that say how to turn it back on.
- Put the transcribed words in the field for the person to check. Never send dictation on their behalf.
- Pass level from a real analyser, from 0 to 1. Leave it at 0 if you have none; the word Recording still shows.
- Offer a typed route next to it. Voice must never be the only way in.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| state (required) | `"idle" \| "requesting" \| "recording" \| "locked" \| "processing" \| "blocked" \| "unavailable"` |  | Where the mic is. The app sets it from the real permission, recorder and transcriber. |
| mode | `"tap" \| "hold"` | `"tap"` | tap: press to start, press again to stop. hold: hold to talk, slide up to lock, slide away to cancel. |
| level | `number` | `0` | Input level from 0 to 1. Drives the three bars while recording. |
| onStart (required) | `() => void` |  | The person asked to start. Ask for the mic, then set requesting, recording or blocked. |
| onStop (required) | `() => void` |  | The person asked to stop. Keep what was said. |
| onCancel | `() => void` |  | Throw the recording away. Called when a held press slides off and lets go, or Cancel is pressed while locked. |
| onLock | `() => void` |  | Hold mode: the person slid up. Set state to locked. |
| onHelp | `() => void` |  | Pressed while blocked. Open the steps to turn the mic on. |
| label | `string` | `"Dictate"` | What the button does when idle, such as Dictate or Start voice. It is the accessible name when idle. |
| showLabel | `boolean` | `false` | Show the label as text beside the button when idle. Other states always show their word. |
| size | `"md" \| "lg"` | `"md"` | md is 44px. lg is 56px, for the main control on a voice screen. |
| haptics | `boolean` | `true` | A short buzz on start and stop where the device supports it. |
| className | `string` |  | Classes for the outer row. |

## States

- status: Set with the state prop.
- permission prompt open: Set state to requesting while the browser asks. The ring turns and the word says Allow the mic to start.
- cancel armed: Hold mode: while the finger is more than 32px off the button, the bars give way to a stop mark and the word says Let go to cancel.

## Tokens

- `--accent`
- `--on-accent`
- `--surface`
- `--line`
- `--line-strong`
- `--fg`
- `--fg-muted`
- `--danger`
- `--attention`
- `--dur-fast`
- `--dur-instant`
- `--ease-out`
- `--touch-target`

## Examples

### Dictate into a message box

Tap once to start and once to stop. The button waits for permission, records, then writes the words into the box. The person still sends it.

```tsx
const [state, setState] = useState<MicState>("idle");
const level = useMicLevel(state === "recording"); // your analyser, 0 to 1

<div className="flex items-end gap-2 rounded-field border border-line bg-surface p-2">
  <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} />
  <MicButton
    state={state}
    level={level}
    label="Dictate"
    onStart={async () => { setState("requesting"); setState(await startRecorder() ? "recording" : "blocked"); }}
    onStop={async () => { setState("processing"); setText(await transcribe()); setState("idle"); }}
  />
</div>
```

### Hold to talk, with lock and cancel

Press and hold. Slide up to lock and keep recording hands-free, or slide away and let go to cancel. On a keyboard, hold Space, or press Enter to start and again to stop.

```tsx
<MicButton
  state={state}
  mode="hold"
  level={level}
  size="lg"
  label="Hold to talk"
  showLabel
  onStart={() => setState("recording")}
  onStop={finish}
  onLock={() => setState("locked")}
  onCancel={() => { discard(); setState("idle"); }}
/>
```

### Every state

Each state shows its own word. Blocked carries the amber dot because the person has to act; press it to see the help it opens.

```tsx
<MicButton state="idle" showLabel label="Dictate" onStart={start} onStop={stop} />
<MicButton state="requesting" onStart={start} onStop={stop} />
<MicButton state="recording" level={0.6} onStart={start} onStop={stop} />
<MicButton state="locked" onStart={start} onStop={stop} onCancel={cancel} />
<MicButton state="processing" onStart={start} onStop={stop} />
<MicButton state="blocked" onHelp={openMicHelp} onStart={start} onStop={stop} />
<MicButton state="unavailable" onStart={start} onStop={stop} />
```

Source: src/atoms/MicButton.tsx
