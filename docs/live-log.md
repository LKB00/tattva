# LiveLog
A streaming, monospaced log of what an agent is doing, with pause and follow.
Status: stable. Page: https://lkb00.github.io/tattva/#component-live-log
LiveLog shows tool output, commands and other lines as they arrive. It keeps the newest line in view until the person scrolls up, then offers a Jump to latest button. Pause holds new lines back behind an "N new lines" button. Warnings and errors carry an icon and a word, never colour alone.
## When to use it

Lets people watch a running agent's raw output, stop it from moving to read it, and catch up when they are ready.

## Use it for

- Command and test output while a coding agent runs.
- A browser or data agent's step-by-step log.
- Any stream of short lines that people may want to stop and read.

## Not for

- A lasting record of what the agent changed, with undo: use `action-log`
- A readable summary of the agent's steps: use `activity-trace`
- A finished block of code or output to copy: use `code-block`

## Anatomy

- Header with name
- Paused note
- Pause or Resume button
- Scrolling log
- Line: time, level mark, text
- Jump to latest or N new lines button

## Do

- Keep the log for raw, fast output. Summarise the same work elsewhere for people who will not read it.
- Give warnings and errors a level so they are marked with a word.
- Turn on wrap where lines are long and the screen is narrow.

## Avoid

- Do not use it as the only record of what an agent changed.
- Do not edit or remove earlier lines; only append.
- Do not colour whole lines to show status.

## On a phone

- It fills the width of its container in one column. Long lines scroll sideways inside the log unless wrap is on, so the page never scrolls sideways.
- The Pause button and the N new lines button keep their size and have a 44px tap area on a touch screen.
- Dragging the log up stops following, and the Jump to latest button appears near the bottom.
- Turn on wrap on narrow screens when lines are long and reading matters more than lining up.

## Accessibility: built in

- The scrolling area has role="log", is named by the visible heading, and can be focused with Tab. Arrow keys, Page Up, Page Down, Home and End then scroll it.
- While following and not paused, the log is polite, so a single new line is read out. When several lines arrive within 2 seconds of the last one read, the log goes quiet and a hidden status line reads one summary, such as "4 new lines. Latest: Error: Expected status 200", at most every 2 seconds.
- Nothing is read out while paused or while the person has scrolled up.
- Warning and error lines show an icon and the word Warning or Error. Errors also use the danger text colour. Info lines have no mark.
- The Pause button's name includes the log's name, such as "Pause Test run", and changes to Resume. A visible Paused note appears while paused.
- New lines fade in from a slight blur, the first four of a burst a little apart. Under reduced motion they just appear.
- Numbers use tabular figures in a monospaced font, so columns of times line up.

## Accessibility: what you need to do

- Give it a label that says what is being logged, such as "Test run".
- Only append lines. The component holds paused lines by count, so changing earlier lines while paused shows the wrong ones.
- Keep each line short and give warnings and errors a level, so they get their icon and word.
- Format time before passing it in.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| lines (required) | `{ id: string; text: string; time?: string; level?: "info" \| "warn" \| "error" }[]` |  | Every line so far, oldest first. Append new lines to the end. |
| follow | `boolean` | `true` | Keep the newest line in view. Scrolling up turns it off and scrolling back to the bottom turns it on. Works without onFollowChange. |
| onFollowChange | `(follow: boolean) => void` |  | Called when following stops or starts, from scrolling or the Jump to latest button. |
| paused | `boolean` | `false` | Hold new lines back. They are counted on an "N new lines" button that resumes. Works without onPauseChange. |
| onPauseChange | `(paused: boolean) => void` |  | Called when the Pause, Resume or N new lines button is pressed. |
| maxHeight | `number \| string` | `64` | Tallest the log grows before it scrolls. A number is spacing steps (64 is 16rem); a string is any CSS length, such as a token in var(). |
| label (required) | `string` |  | Shown as the heading and used as the log's name and in the Pause button's name. |
| wrap | `boolean` | `false` | Wrap long lines. When off, long lines keep their spacing and the log scrolls sideways. |
| className | `string` |  | Classes for the outer box. |

## States

- empty: With no lines the log says "Nothing yet."
- following: The log stays scrolled to the newest line and is polite to screen readers. This is the default.
- scrolled up: Scrolling away from the bottom stops following, silences announcements and shows a Jump to latest button with a count of lines that arrived since.
- paused with held lines: New lines are held back, a Paused note shows in the header, and an "N new lines" button resumes and jumps to the newest line.
- burst: When several lines arrive within 2 seconds, the log stops reading each one and a hidden status reads one count summary instead.
- focus: The scrolling area shows the focus ring and scrolls with the arrow keys, Page Up, Page Down, Home and End.

## Tokens

- `--font-mono`
- `--text-small`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--danger-fg`
- `--sunken`
- `--raised`
- `--line`
- `--line-strong`
- `--hover`
- `--spacing`
- `--stagger`
- `--blur-arrive`
- `--dur-base`
- `--ease-arrive`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Lines arriving, with pause: A new line arrives every 0.9 seconds. Press Pause to hold them; new ones wait behind the "N new lines" button. Scroll up to stop following.
- Wrapped lines with levels: With wrap, long lines break instead of scrolling sideways. Warnings and errors carry an icon and a word.

Source: src/organisms/LiveLog.tsx
