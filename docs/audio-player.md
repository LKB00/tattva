# AudioPlayer
Plays one clip: play and pause, a waveform to seek, time, speed and download.
Status: stable. Page: https://lkb00.github.io/tattva/#component-audio-player
AudioPlayer plays a call recording, a generated voice or a song. It has a large Play button, a Waveform that is also the seek slider, the time, a speed choice and an optional Download. It covers loading, streaming, ready, playing, paused, buffering, ended, error and unavailable, each written in words. It plays a real file when src is set, and simulates playback from duration when it is not. Only one player on a page plays at a time.
## When to use it

Lets someone listen back, jump to a moment and change the speed, with every state written in words.

## Use it for

- Listening back to a support or sales call.
- Playing a voice or song the AI made, with an AI label.
- A list of short takes, using the compact row.

## Not for

- A live conversation with the assistant: use `voice-panel`
- A recording with a transcript that follows along: use `transcript-sync`
- Video: use `media-frame`

## Anatomy

- Play button
- Title
- AI label
- Subtitle or state
- Waveform
- Time
- Speed
- Download

## Do

- Wait for a press before playing anything.
- Mark only the moments people need, such as tool calls, interruptions and the end.
- Say why a clip cannot be played or downloaded, and what is still there.
- Add the AI label to clips the AI made, and keep the rest of the player neutral.

## Avoid

- Don't autoplay, or play a preview on hover.
- Don't colour the waveform or the Play button with the AI colour.
- Don't let two players play at once. This one pauses the others for you.
- Don't use amber for "recording" or "new take ready". Neither needs a person to act.

## On a phone

- The Play button is 44px. Speed and Download grow to 44px tall on touch screens.
- The seek area is at least 44px tall. Tap to seek, and a time bubble shows while dragging.
- The bottom row wraps when space is short. On the narrowest phones the waveform becomes a plain bar.
- While playing it sets the lock-screen title and play, pause and seek controls where the browser supports them.
- The compact row is 56px tall.

## Accessibility: built in

- The player is a region named by its title.
- Play is a toggle button named Play with aria-pressed, true while playing. When it cannot play it uses aria-disabled and stays focusable.
- Space and K play or pause while focus is in the player, but not in the speed choice or any text field, and Space on a button keeps its usual meaning.
- The waveform is a slider with the time in words, such as "52 seconds of 3 minutes 12 seconds"; see Waveform for its keys.
- Buffering, ended, streaming, error and unavailable are announced once through a status region. The clock is never announced.
- The time uses tabular figures, so it does not jitter.
- Speed is a native select named Playback speed.
- Under reduced motion the simulated clock ticks four times a second, so the playhead moves in steps.

## Accessibility: what you need to do

- Give a title that tells clips apart, such as "Call with Maya Okafor". It names the player.
- Never start playback without a press. Autoplay talks over screen readers.
- Offer a transcript for recorded speech, with TranscriptSync or a link.
- Pass the error and unavailable reasons in plain words, and onRetry when trying again can help.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | Title of the clip. Also names the player region. |
| subtitle | `string` |  | Second line, such as the date. Without it the line shows the state in words. |
| src | `string` |  | A real audio file. Leave out to simulate playback from duration. |
| duration | `number` |  | Length in seconds. Needed without src. |
| peaks | `number[] \| null` |  | Loudness per slice for the waveform. null shows it still drawing. Leave out for a plain bar. |
| state | `"loading" \| "streaming" \| "buffering" \| "error" \| "unavailable"` |  | Forces a state the player cannot see. Ready, playing, paused and ended are tracked by the player. |
| current | `number` |  | Position in seconds when the parent keeps it. A change of more than a quarter second seeks. |
| onTimeChange | `(seconds: number) => void` |  | Called as the position moves. |
| onPlayingChange | `(playing: boolean) => void` |  | Called when playback starts or stops. |
| markers | `WaveformMarker[]` |  | Moments on the timeline. Passed to the Waveform. |
| regions | `WaveformRegion[]` |  | Marked stretches. Passed to the Waveform. |
| madeUpTo | `number` |  | In the streaming state, the seconds made so far. |
| speeds | `number[]` | `[0.75, 1, 1.25, 1.5, 2]` | Speeds offered. Pass one value to hide the choice. |
| aiGenerated | `boolean` | `false` | Adds an AI label beside the title. |
| aiNote | `ReactNode` |  | What the AI label explains, such as the voice and date. |
| onDownload | `() => void` |  | Shows a Download button. |
| downloadNote | `string` |  | Note beside Download, such as downloads left. |
| unavailableReason | `string` |  | Why it cannot be played, shown in the unavailable state. |
| errorText | `string` | `"This audio could not be loaded."` | Message in the error state. |
| onRetry | `() => void` |  | Shows Try again in the error state. |
| mediaSession | `{ artist?: string; artwork?: string }` |  | Extra lock-screen details while playing. |
| compact | `boolean` | `false` | One 56px row for lists, with no waveform, speed or download. |
| className | `string` |  | Extra classes on the player. |

## States

- status: Set with the state prop.
- selected: Set with the current prop.
- one at a time: Starting any player pauses the others on the page.

## Tokens

- `--accent`
- `--fg`
- `--fg-muted`
- `--border`
- `--surface`
- `--surface-sunken`
- `--danger-fg`
- `--dur-instant`
- `--text-compact`
- `--text-small`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Call recording: No file is needed for a preview: the player simulates playback from duration. Press Play, then try the arrow keys on the waveform, or Space and K anywhere in the player.
- Made by AI: aiGenerated adds the AI label beside the title; the player itself stays neutral. The second clip is still being made: it can play now and the end is drawn dashed.
- Loading, buffering, error, unavailable and compact: Pass state for what the app knows and the player cannot see. Buffering shows a spinner after a short wait once playing. The compact rows are for lists of takes; starting one pauses the other.

Source: src/molecules/AudioPlayer.tsx
