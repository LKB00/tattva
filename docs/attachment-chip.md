# AttachmentChip
A tag for an attached file or image, with name, size, upload progress, an error with Retry, and Remove.
Status: stable. Page: https://lkb00.github.io/tattva/#component-attachment-chip
AttachmentChip shows one attached file by the message box. It has a thumbnail or icon, the file name and size. While uploading it shows a progress bar and a percentage. If the upload fails, it shows the problem in red with a Retry button. Remove is always there and is named after the file.
## When to use it

Shows one file attached to a message, with its upload state. Progress, failure and the way out are all visible, so people know whether the file will be sent.

## Use it for

- A file or image attached in the message box.
- An upload in progress, with a bar and a percentage.
- An upload that failed, with the reason and a Retry button.

## Not for

- A tool that is switched on: use `tool-chip`
- Showing what the chat is about: use `context-pill`

## Anatomy

- Thumbnail or icon
- Name
- Size
- Progress bar
- Error message
- Retry
- Remove

## Do

- Say what went wrong and what the person can do.
- Keep Remove available while uploading so a person can cancel.
- Use a real thumbnail for images when you have one.

## Avoid

- Do not use amber for a failed upload. Use red with a Retry button.
- Do not show progress without a visible percentage.
- Do not use it for tools. Use ToolChip.

## On a phone

- The chip is 16rem wide but shrinks to fit a narrower container.
- A long file name is cut off with an ellipsis, and the full name is only in a title tip that does not show on touch, so show the full name elsewhere if it matters.
- The Retry and remove buttons keep their size and have a 44px tap area on touch screens.

## Accessibility: built in

- While uploading, the bar is a meter named "Uploading" plus the file name, and screen readers read the percentage.
- The percentage and the error are written in words, so color is not the only clue.
- Retry and Remove are buttons named after the file, such as "Remove q3-planning.pdf".
- The default file and image icons are hidden from screen readers.
- When an upload finishes or fails, screen readers hear it: the file name and "uploaded", or the file name and the error. Nothing is read when the chip first appears.
- After Remove, keyboard focus moves to the next attachment, else the previous one, else the message box. Pass focusAfterRemove to choose another place.

## Accessibility: what you need to do

- Keep any thumbnail you pass decorative, with an empty text alternative, because the file name is already shown.
- Set readyMessage and errorMessage when you translate.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `string` |  | File name. Truncated with the full name in the title. |
| size | `string` |  | Display size such as 2.4 MB. |
| kind | `"file" \| "image"` | `"file"` | Chooses the default icon. |
| thumbnail | `ReactNode` |  | Replaces the default icon. |
| status | `"ready" \| "uploading" \| "error"` | `"ready"` | Which state to show. |
| progress | `number` | `0` | Upload progress from 0 to 100. |
| errorMessage | `string` | `"Upload failed"` | Text shown in the error state. |
| onRetry | `() => void` |  | Shows Retry in the error state. |
| onRemove | `() => void` |  | Shows the remove button. |
| className | `string` |  | Extra classes for the chip. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--danger`
- `--danger-fg`
- `--fg-muted`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Ready, uploading and failed: All three states together. Retry on the failed one makes it ready.
- Your own thumbnail: Use any picture, such as a preview of the image.

Source: src/molecules/AttachmentChip.tsx
