# VideoPlayer
Plays a generated clip and lets you act on the exact frame you paused on.
Status: stable. Page: https://lkb00.github.io/tattva/#component-video-player
VideoPlayer plays one clip: play and pause, a frame-accurate scrubber, frame steps, loop, mute, captions and full screen. When it is paused, a small toolbar offers actions on that frame, such as Use as start frame or Extend from here. It covers generating, loading, ready, playing, paused, buffering, ended and error, each written in words. It plays a real file when src is set, and without one it draws a stand-in scene and simulates time, so previews need no file. Nothing plays until the person presses Play.
## When to use it

Lets someone watch a generated take, stop on the exact frame they want and use it, with every state in words.

## Use it for

- Reviewing a take the AI made, then using a frame as the start of the next shot.
- Picking the point to extend or edit from.
- Showing a clip with captions and a transcript as its text alternative.

## Not for

- A still image the AI made: use `media-frame`
- Audio only, such as a call or a voice: use `audio-player`
- Choosing a stretch of the clip to edit or extend: use `clip-range-selector`
- Progress of a long job with steps: use `generation-progress`

## Anatomy

- Title
- AI label or provenance
- State or subtitle
- Frame (16:9, 9:16 or 1:1)
- Working edge while generating
- Captions
- Scrubber
- Play
- Frame back and forward
- Time and frame
- Loop
- Mute
- Captions toggle
- Full screen
- Paused-frame actions
- Transcript
- Keyboard shortcuts

## Do

- Wait for a press before playing anything.
- Offer frame actions that match the next step, such as Use as start frame or Extend from here.
- Label every AI clip and say what the file carries.
- Give a transcript or captions for clips with speech.

## Avoid

- Don't autoplay, or play on hover under reduced motion.
- Don't colour the player, the scrubber or the progress with the AI colour. Only the label and the working edge use it.
- Don't show a countdown or a made-up percentage while generating.
- Don't use red or blame words for a blocked take. Say what was blocked and whether credits came back.

## On a phone

- The Play button is 44px; every other control grows to 44px on touch screens. The controls wrap on narrow screens.
- The scrubber's hit area is 44px tall even though the track is 4px.
- Tap the frame to play or pause. Double-tap its left or right side to go back or forward 2 seconds.
- Paused-frame actions sit in a row under the controls and wrap to full width, with 44px buttons.
- A 9:16 clip is capped in width so it does not push the controls off a phone screen.

## Accessibility: built in

- The player is a region named by its title.
- Play is a toggle button named Play with aria-pressed. When it cannot play it uses aria-disabled and stays focusable.
- The scrubber is a slider with the time in words, such as "3.2 seconds of 8 seconds, frame 77 of 192".
- The frame step buttons say the frame they go to, such as "Forward one frame, to frame 78".
- Loop, Mute and Captions are toggle buttons with aria-pressed. A clip with no sound says "No sound in this clip".
- Space plays or pauses while focus is in the player, except on a button. Arrows seek 1 second, Shift with an arrow steps a frame, Home and End jump to the ends.
- K, M, C, comma and period work only while focus is in the player and never in a text field. A switch in Keyboard shortcuts turns them off.
- The paused-frame actions are a named group that says the frame number.
- Ready after generating, ended, buffering and error are announced once. The clock and play or pause are not.
- Captions use native tracks for files, and the transcript sits in a collapsible section.
- The big play mark on the frame is for pointers only and is hidden from screen readers; the Play button is the real control.

## Accessibility: what you need to do

- Give a label that tells takes apart, such as "Take 3, harbour at dawn". It names the player and its scrubber.
- Give a transcript, or cues for captions, for any clip with speech. Describe what the clip shows there too: the prompt is not a description.
- Never start playback from code. There is no autoplay prop on purpose.
- Say what the file carries in provenance (watermark, Content Credentials) and what can strip it. Do not promise more.
- Pass statusNote for a failed or blocked take that says whether credits came back.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Names the player and its scrubber, such as "Take 3, harbour at dawn". |
| subtitle | `string` |  | Second line. Without it the line shows the state in words. |
| src | `string` |  | A real video file. Leave out to simulate playback with a drawn scene. |
| duration | `number` |  | Length in seconds. Needed without src. |
| scene | `"harbour" \| "kite"` | `"harbour"` | The drawn scene used without src. |
| poster | `string` |  | Still image shown before playing and while generating. |
| ratio | `"16:9" \| "9:16" \| "1:1"` | `"16:9"` | Shape of the frame. The space is reserved before anything loads. |
| fps | `number` |  | Frames per second. Turns on frame step buttons and keys, and frame numbers. |
| state | `"generating" \| "loading" \| "error"` |  | Forces a state the player cannot see. Ready, playing, paused, buffering and ended are tracked by the player. |
| statusNote | `string` |  | Words beside generating or error, such as the queue reason or whether credits came back. |
| onRetry | `() => void` |  | Shows Try again in the error state. |
| loop | `boolean` | `false` | Starts with loop on. |
| muted | `boolean` | `false` | Starts muted. |
| hasAudio | `boolean` | `true` | Set false when the clip has no sound. The mute button then says so. |
| captions | `{ src: string; lang: string; label: string }[]` |  | Caption files for a real src, as native tracks. |
| cues | `VideoCue[]` |  | Caption lines drawn over the frame, with or without src. |
| transcript | `ReactNode` |  | Spoken words and a description of the clip, in a collapsed section. |
| frameActions | `VideoFrameAction[]` |  | Actions on the paused frame, such as "Use as start frame". Shown only while paused. |
| onFrameAction | `(id: string, seconds: number, frame?: number) => void` |  | Called with the action id, the time and the frame number. |
| shortcuts | `boolean` | `true` | Single-key shortcuts on at first. The person can turn them off inside the player. |
| aiGenerated | `boolean` | `false` | Adds an AI label beside the title. |
| aiNote | `ReactNode` |  | What the AI label explains, used when there is no provenance. |
| provenance | `ProvenancePopoverProps` |  | Opens model, date and what the file carries from the label. |
| current | `number` |  | Position in seconds when the parent keeps it. A change of more than a frame seeks. |
| onTimeChange | `(seconds: number) => void` |  | Called as the position moves. |
| onPlayingChange | `(playing: boolean) => void` |  | Called when playback starts or stops. |
| className | `string` |  | Extra classes on the player. |

## States

- status: Set with the state prop.
- selected: Set with the current prop.
- generating: state="generating": first frame or poster dimmed under a working edge; nothing can play.
- loading: state="loading", or while a src loads: a spinner and disabled controls.
- paused on a frame: Pausing shows the frame actions with the time and frame number.
- error: state="error" or a file that fails: a calm message, statusNote and Try again.
- one at a time: Starting any video or audio player pauses the others on the page.

## Tokens

- `--accent`
- `--fg`
- `--fg-muted`
- `--border`
- `--surface`
- `--surface-sunken`
- `--danger-fg`
- `--lime`
- `--chart-seq-1`
- `--chart-seq-5`
- `--chart-2`
- `--chart-4`
- `--dur-fast`
- `--dur-instant`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Generated take with frame actions: No file is needed: the player draws a stand-in scene and simulates time. Press Play, pause anywhere, then step frames with the buttons, or with comma and period while focus is in the player. The paused-frame actions return the time and frame number.
- Shapes: 9:16 and 1:1: The frame keeps its shape before anything loads. A 9:16 clip is capped in width. A clip with no sound says so on the mute button. Loop starts on when loop is set, and the person can turn it off.
- Generating, error and loading: While generating, the first frame is dimmed under one calm working edge and nothing can play. Say why someone is waiting, never a countdown. When it finishes, screen readers hear that it is ready. An error says whether credits came back.

Source: src/molecules/VideoPlayer.tsx
