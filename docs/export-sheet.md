# ExportSheet
Export a deck as PDF, PowerPoint, images or a link: what the file holds, what needs fixing first (amber) and what will change, then progress, the file name, or Retry.
Status: stable. Page: https://lkb00.github.io/tattva/#component-export-sheet
ExportSheet lets the person choose a format and shows what the file will hold. Before anything is made it lists the results of your app's checks for that format: things a person must act on, such as AI changes nobody has reviewed or an image with no description, in amber with a link to the slide; and things worth knowing, such as fonts that will be swapped, in neutral. Export is never blocked; with open items the button says Export anyway. Then it shows real progress, the file name when done, and Try again when it fails. It is a dialog on wide screens and a bottom sheet on phones.
## When to use it

Stops people finding out after they sent a deck that fonts changed, descriptions went missing or AI changes were never checked.

## Use it for

- The Export or Share action in a deck editor.
- Making a view-only link to a deck.
- An export panel inside a side bar or settings page, with inline.

## Not for

- Reviewing AI changes slide by slide: use `deck-change-review`
- A plain confirm before one action: use `dialog`
- Progress for a single generated file: use `generation-progress`

## Anatomy

- Title
- Format choice
- What the file holds
- Speaker notes switch
- Before you export (checks)
- Progress
- Result (file name and size)
- Footer actions

## Do

- Run the checks per format: a font swap matters in PowerPoint, not in PDF.
- Put things a person must act on first, in amber, each with a link to its slide.
- Let people export anyway, and say so on the button.
- Name the file after the deck and show it when done.

## Avoid

- Do not use amber for notes that need no action, such as "Credentials are kept in PDF".
- Do not block the export until every check is fixed.
- Do not let font swaps, missing image descriptions or removed content credentials go unmentioned.
- Do not share or send the file without a press from the person.

## On a phone

- Opens as a bottom sheet under the sm breakpoint, with the actions stacked at the bottom where a thumb reaches.
- Format options and the notes switch grow to 44px rows on touch screens.
- "Go to slide" links drop under their message on narrow screens and keep a 44px touch area.

## Accessibility: built in

- In dialog mode it is a native modal dialog: the page behind is inert, Tab stays inside, Escape closes it and focus returns to the opener.
- Formats are a native radio group, so arrow keys move between them.
- Each check starts with the words "Needs you" or "Note" and an icon, so the meaning does not rest on colour.
- A polite live region speaks when checking ends ("Checks done. 2 things to fix before you send it."), when the export starts, ends or fails. Progress is not read out slide by slide.
- Export progress is a meter with value text such as "Slide 5 of 8".
- The check list fades in at --dur-fast, and not at all under reduced motion.

## Accessibility: what you need to do

- Run the checks in your app for the chosen format and pass them in plain words. The model must not write them.
- Return focus to the right slide when onJumpTo is used, and close the sheet if the slide is hidden behind it.
- Make the file name readable: the deck title and the format, such as "q3-churn-review.pdf".
- Never send or share the file from code. Download and Copy link happen only when the person presses them.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| open | `boolean` | `false` | Whether the dialog shows. Ignored when inline. |
| onClose | `() => void` |  | Closes it. Also used by Cancel and Close. |
| inline | `boolean` | `false` | Draws the same content as a card in the page. |
| deckTitle | `string` |  | Shown in the title: "Export Q3 churn review". |
| formats | `("pdf" \| "pptx" \| "png" \| "link")[]` | `["pdf", "pptx", "png", "link"]` | Formats on offer, in order. |
| format (required) | `"pdf" \| "pptx" \| "png" \| "link"` |  | The chosen format. |
| onFormatChange (required) | `(format: ExportFormat) => void` |  | Called when the person picks a format. Run the checks for it. |
| state (required) | `"choosing" \| "checking" \| "exporting" \| "done" \| "failed"` |  | Where the export is. |
| includes | `string[]` |  | What the file will hold, worked out by your app. |
| includeNotes | `boolean` |  | Whether speaker notes go in. |
| onIncludeNotesChange | `(value: boolean) => void` |  | Shows the speaker notes switch. Leave out for formats that cannot carry notes. |
| checks | `ExportCheck[]` |  | { id, severity: "fix" \| "info", message, slideId?, slideLabel? }. Fix items are amber and come first. |
| onJumpTo | `(slideId: string) => void` |  | Adds a Go to slide link to checks that name a slide. |
| progress | `{ done: number; total: number }` |  | Real progress in slides while exporting. |
| fileName | `string` |  | The file made, or the link. |
| fileSize | `string` |  | Size of the file, such as "3.8 MB". |
| error | `string` |  | Why the export failed, in plain words. |
| onExport (required) | `() => void` |  | Starts the export. Never blocked. |
| onStopExport | `() => void` |  | Stops a running export. |
| onRetry | `() => void` |  | Try again after a failure. Defaults to onExport. |
| onDownload | `() => void` |  | Download button when a file is done. |
| onCopyLink | `() => void` |  | Copy link button when a link is done. The sheet then says "Link copied". |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Heading level when inline. |
| className | `string` |  | Extra classes for the panel. |

## States

- open or closed: Set with the open prop.
- status: Set with the state prop.
- error: Set with the error prop.
- checking: Spinner and "Checking the deck for PowerPoint…". Format and notes are disabled for the moment.
- choosing: Format, what the file holds and the check results. Export anyway when fix items remain.
- nothing to fix: "Nothing to fix. It should look the same as PDF." with a check icon.
- exporting: "Making PowerPoint: slide 5 of 8" with a meter and Stop export.
- done: "Export done" with the file name and size, and Download or Copy link.
- failed: Red panel with the reason and Try again. The format choice stays, so the person can pick another.

## Tokens

- `--raised`
- `--surface`
- `--sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--attention-soft`
- `--attention-fg`
- `--danger-soft`
- `--danger-fg`
- `--success-fg`
- `--radius-card`
- `--radius-overlay`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Export with checks: Open it, switch format and watch the checks change. PowerPoint fails the first time at slide 6, to show Try again. Go to slide 4 closes the sheet and jumps there.
- Every state: Drawn inline so each state is easy to compare: checking, things to fix, nothing to fix, exporting, done and failed.
- A view-only link: The link format ends with the link and Copy link instead of a file.

Source: src/organisms/ExportSheet.tsx
