# VoiceCard
One voice to hear and choose: name, how it sounds, who owns it, whether you can use it, and a sample button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-voice-card
VoiceCard shows a voice's name, a short description, tags, where it came from and who it belongs to. A round button plays a short sample and stops it on a second press; while it plays, a small readout shows the time. Give it onSelect and it becomes a radio, with the sample button kept as a separate control. It also shows when a voice is being withdrawn, has been withdrawn, or is not on the person's plan.
## When to use it

Lets people hear a voice before they choose it, and see plainly whose voice it is and whether they can keep using it.

## Use it for

- A voice in a list people pick from, inside VoicePicker.
- A single voice on a settings page, with its sample and its owner.
- Showing that a shared voice is being withdrawn, and until when.

## Not for

- A whole list of voices to choose from: use `voice-picker`
- Playing back a long recording with a scrubber
- Choosing which AI model answers: use `model-picker`

## Anatomy

- Radio (optional)
- Name
- Selected tag
- Description
- Source and tags
- Ownership line
- Availability line
- Playback readout
- Sample button

## Do

- Keep the description to one line about the sound and what it suits.
- Say whose voice it is, and for a shared voice how long it stays available.
- Keep samples short, a few seconds, so people can compare quickly.
- Use useSimulatedSamples only as a stand-in. Pass your real player's state the same way.

## Avoid

- Do not autoplay a sample, or let two play at once.
- Do not colour the playing state lime. A sample is playback, not the AI working.
- Do not use real people's names or famous voices as examples or defaults.
- Do not hide a withdrawn voice someone is still using. Show it, and ask them to pick another.

## On a phone

- The card fills the width. Name and tags wrap; the sample button stays on the right.
- The sample button grows from 36px to 44px on a touch screen.
- With onSelect, a tap anywhere on the card except the sample button chooses the voice.

## Accessibility: built in

- With onSelect, the card holds a native radio named by the voice name and described by the rest of the card, so arrow keys move between voices in a group.
- The sample button is a separate button with a name that says what it will do: "Play sample of Juniper", "Stop sample of Juniper" or "Try the sample of Juniper again".
- A polite status message says once when a sample loads, plays or fails. The running time is not read out every second.
- Selected, withdrawn, locked and not verified are written as words, each with an icon.
- The bars beside the time move only while playing, and hold still under reduced motion.
- Focus on the radio draws a ring round the whole card.

## Accessibility: what you need to do

- Write the withdrawal date in full with your own date code, for example "3 March 2027". The card does not work out dates.
- Wrap cards that have onSelect in an element with role radiogroup and a name, or use VoicePicker, which does this.
- Stop any other sample before you start one. useSimulatedSamples and VoicePicker already do this.
- Never start a sample by itself. Play only when the person presses the button.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `string` |  | Voice name. Also used in the sample button's label, for example "Play sample of Juniper". |
| description | `string` |  | One short line on how it sounds and what it suits. |
| tags | `string[]` |  | Short tags such as accent, age range or use case. |
| source (required) | `"builtIn" \| "designed" \| "cloned" \| "library"` |  | Where the voice came from. Shown as the first tag. |
| owner | `string` |  | Whose voice it is. On a cloned voice leave it out when it is the person's own: the card then says "Your voice, verified". |
| consent | `"self-verified" \| "licensed" \| "none"` |  | How the owner agreed. "none" on a cloned voice shows an amber "Not verified yet" line, because the person must verify it. |
| preview | `{ state: "idle" \| "loading" \| "playing" \| "error"; onToggle(): void; elapsed?: number; duration?: number }` |  | The sample player. Leave out for a card with no sample. |
| status | `"available" \| "withdrawing" \| "withdrawn" \| "locked"` | `"available"` | Withdrawing shows the end date. Withdrawn and locked cannot be chosen. Withdrawn has no sample. |
| withdrawsOn | `string` |  | End date written out by your code, shown as "Available until …". |
| lockedReason | `string` | `"Not on your plan"` | Why a locked voice cannot be chosen. |
| selected | `boolean` | `false` | Shows the card as chosen, with a "Selected" tag. |
| onSelect | `() => void` |  | Makes the card a radio. |
| groupName | `string` |  | Radio group name, shared by every card in the group. |
| className | `string` |  | Extra classes for the card. |

## States

- status: Set with the status prop.
- selected: Ink border and a "Selected" tag. Set selected.
- previewing: Sample playing: stop icon, moving bars, "Playing 0:03 of 0:08" and a thin ink progress line. Set preview.state to "playing".
- loading: Sample loading: spinner in the button and "Loading sample…". Pressing again cancels.
- error: Sample failed: alert icon and "Sample did not load". Pressing again retries.
- withdrawing: "Available until 3 March 2027" with a clock icon. Set status and withdrawsOn.
- withdrawn: Radio off, no sample, "Withdrawn by its owner". If still selected, an amber line asks the person to pick another voice.
- locked: Radio off, sample still playable, lock icon and the reason.
- not verified: Cloned voice with consent "none": amber "Not verified yet" line.

## Tokens

- `--surface`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--warning-soft`
- `--warning-fg`
- `--danger-fg`
- `--radius-card`
- `--radius-control`
- `--dur-fast`
- `--ease-out`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Play a sample: Press the round button to hear a sample and again to stop it. Starting one stops the other. Basalt shows a sample that fails to load.
- Ownership and availability: Your own verified clone, a licensed library voice being withdrawn, one locked to a plan, a clone not yet verified (a person must act, so amber), and one already withdrawn.
- As a radio: With onSelect the card is a radio. Choosing never plays the sample; the sample button is its own control.

Source: src/molecules/VoiceCard.tsx
