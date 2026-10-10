# VoicePanel
A voice conversation (VoiceSession) on the shared AI orb, with every mic, turn and connection state in words, captions, and separate Mute, Hold and End.
Status: stable. Page: https://lkb00.github.io/tattva/#component-voice-panel
VoicePanel, also exported as VoiceSession, runs a spoken conversation with the assistant. It is built on AIPresence, so voice uses the same orb as the rest of the product. It has fifteen states, from connecting, listening and speaking to on hold, muted, mic blocked, reconnecting and ended, and each one is written in words. Mute, Hold and End are separate controls, with End set apart in a danger outline. Push-to-talk turns the main control into Hold to talk, with slide off to cancel. Mic blocked and no mic are amber, because the person must act. Every older VoicePanel prop still works.
## When to use it

Shows a live voice conversation so that nothing depends on hearing the audio or seeing the animation: the state is in words, the mic state is always visible, and captions carry what was said.

## Use it for

- A spoken conversation with the assistant, hands-free or push-to-talk.
- A support call where the assistant checks something and says so while it works.
- Telling people the mic is blocked, the call is on hold, or the connection is coming back.
- A voice session that may share the camera or the screen.

## Not for

- Typing a message: use `composer`
- Showing the assistant is getting ready to reply in text: use `typing-indicator`
- Reviewing a finished call as an operator: use `call-record`

## Anatomy

- Disclosure, usage and time
- Orb (AIPresence)
- State text
- Interrupt
- Needs-you notice
- Camera stopped notice
- Footer
- Live captions
- Talk mode switch
- Main control (Mute or Hold to talk)
- Hold or Resume
- Camera
- Share screen
- End
- Key hints

## Do

- Keep captions on by default, and keep the transcript after the call.
- Say what the assistant is doing when it works, such as Checking your order, and show it on screen too.
- Keep Mute, Hold and End as three different things.
- Use the footer to say why it is reconnecting and what people can do.

## Avoid

- Do not rely on the orb alone to show the state, and do not give it a face.
- Do not fill silence with fake breaths or filler words. Say One moment, checking.
- Do not use amber for Live or Reconnecting. Amber is only for mic blocked or no mic.
- Do not make End a primary button next to Mute, and do not remove Mute or End to save space.

## On a phone

- The panel fills the width up to 32rem and its padding shrinks a step below 640px. Place it in a full-height Sheet for the phone layout.
- The main control is 56px tall. Every other button has a 44px tap area on touch screens.
- End sits on the far right, away from Mute, in a danger outline, so it is not pressed by mistake.
- Camera and Share screen show only their icons below 640px; their names stay for screen readers.
- The orb shrinks from large to medium once captions appear, so captions get the middle of the screen.
- Hold to talk ignores scrolling and the long-press menu, and sliding a finger off it cancels.
- Key hints hide on touch screens.

## Accessibility: built in

- There is one polite status region (the orb's). It announces each state change once, never caption words.
- The orb is hidden from screen readers. The words and the captions carry the information.
- Simple captions are a role="log" that can be reached by keyboard and scrolled. It does not read new captions out.
- Mute, Camera, Share screen and Hold to talk report whether they are on with aria-pressed, and their names stay the same.
- Keys work while focus is inside the panel and never while typing in a field: Space held to talk, M to mute, Esc to interrupt. End has no key.
- The person's own mic level is three neutral bars, never lime. Lime is the AI's orb only.
- When people turn off motion in their system settings, the orb is drawn still for each state and the state text stays.

## Accessibility: what you need to do

- Keep the captions filled from your speech service, so people who cannot hear can still follow.
- Pass muted, and the camera and screen state, from your own state, so each button reports whether it is on.
- Stop the microphone and the call in onEnd. Stop the assistant's audio within a moment in onInterrupt.
- In micBlocked and noMic, give onTypeInstead a real text route. Every voice flow needs one.
- Never restart the camera or screen sharing yourself after a lock. Wait for the person to press Turn camera on.
- When a screen reader is running, offer push-to-talk so the assistant does not hear the reader.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| state (required) | `"connecting" \| "ready" \| "listening" \| "userSpeaking" \| "thinking" \| "working" \| "speaking" \| "interrupted" \| "muted" \| "held" \| "reconnecting" \| "micBlocked" \| "noMic" \| "ended" \| "error"` |  | Current state. Drives the orb, the words and which controls show. |
| stateLabels | `Partial<Record<VoiceState, string>>` |  | Overrides the visible text for any state. |
| inputMode | `"handsFree" \| "pushToTalk"` | `"handsFree"` | Push-to-talk turns the main control into Hold to talk. |
| onInputModeChange | `(mode: "handsFree" \| "pushToTalk") => void` |  | Shows a Hands-free / Push to talk switch when given. |
| onTalkStart | `() => void` |  | Push-to-talk: the person started holding. |
| onTalkEnd | `(cancelled: boolean) => void` |  | Push-to-talk: the person let go. cancelled is true when they slid off first. |
| captions | `VoiceCaption[] \| ReactNode` | `[]` | Simple captions (id, speaker, text), or your own node such as LiveCaptions. |
| speakerLabels | `{ you: string; assistant: string }` | `You, Assistant` | Names shown before each simple caption. |
| emptyCaptions | `string` |  | Text shown when there are no captions. |
| muted | `boolean` |  | Pressed state of Mute. Defaults to true when state is muted. |
| onMutedChange | `(muted: boolean) => void` |  | Called by Mute and by the M key. |
| onHold | `() => void` |  | Shows Hold. Nothing is heard or said until Resume. |
| onResume | `() => void` |  | Called by Resume in the held state. |
| onEnd | `() => void` |  | Called by End. End has no key. |
| onInterrupt | `() => void` |  | Shows Interrupt while speaking, and makes Esc stop the assistant. |
| inputLevel | `number` |  | Mic level 0 to 1. Moves the orb while listening and fills the neutral level bars on Mute. |
| outputLevel | `number` |  | Assistant level 0 to 1. Moves the orb while speaking. Ignored under reduced motion. |
| workingLabel | `string` |  | Text for the working state, such as Checking your calendar. |
| onMicRetry | `() => void` |  | Allow microphone (blocked) or Check again (no mic). |
| onTypeInstead | `() => void` |  | Type instead, in the blocked and no mic states. |
| media | `{ camera?: "on" \| "off" \| "stoppedBySystem"; screen?: "on" \| "off" \| "stoppedBySystem" }` |  | Camera and screen state. stoppedBySystem shows a notice with a button to turn it on again. |
| cameraOn | `boolean` |  | Pressed state of Camera, when you do not pass media. |
| onCameraChange | `(on: boolean) => void` |  | Shows the Camera toggle when provided. |
| screenSharing | `boolean` |  | Pressed state of Share screen, when you do not pass media. |
| onScreenChange | `(on: boolean) => void` |  | Shows the Share screen toggle when provided. onScreenShareChange is the older name. |
| elapsed | `string` |  | Time since the start, such as 02:14. Shown, never announced. |
| usage | `ReactNode` |  | Minutes or credits used, such as a compact UsageMeter. |
| disclosure | `ReactNode` |  | Who is talking and whether it is recorded. |
| footer | `ReactNode` |  | Content under the state, such as a connection hint. |
| showKeyHints | `boolean` | `true` | Shows Esc, M and Space hints on screens with a fine pointer. |
| className | `string` |  | Extra classes for the panel. |

## States

- status: Set with the state prop.

## Tokens

- `--lime`
- `--surface`
- `--surface-sunken`
- `--border`
- `--border-strong`
- `--warning-soft`
- `--warning-fg`
- `--danger`
- `--danger-fg`
- `--danger-soft`
- `--radius-card`
- `--dur-fast`
- `--dur-base`
- `--dur-slow`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Every state: Pick a state, or use the buttons: Mute, Hold then Resume, Interrupt while speaking (or Esc), and End. Keys work while focus is inside the panel.
- Push to talk: Hold the button, or hold Space, while you talk. Slide off the button before letting go to cancel. Switch to Hands-free to listen all the time.
- Mic blocked, on hold, camera stopped: Mic blocked is amber with Allow microphone and Type instead, because the person must act. On hold dims the orb. The camera notice is calm and waits for a press.
- Older VoicePanel props: Code written for the first VoicePanel keeps working: state, captions, muted, onMutedChange and onEnd.

Source: src/organisms/VoicePanel.tsx
