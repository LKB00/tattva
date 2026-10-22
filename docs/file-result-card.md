# FileResultCard
A file the AI made, with what kind it is, a preview, Open and Download.
Also known as: file card, download card, artifact card.
Status: stable. Page: https://lkb00.github.io/tattva/#component-file-result-card
FileResultCard shows a file the AI created, such as a report, a spreadsheet, slides or an image. It says the kind of file in words (worked out from its name), its size or length, and shows a small preview when there is one. Open and Download sit on the right. While the file is being made it says so, and if making it failed it says so and offers Try again.
## When to use it

Hands people the files the AI made in a form they recognise, with the two things they want: look at it, or keep it.

## Use it for

- Documents, spreadsheets, slides and images the AI created.
- A file that is still being made, or that failed.

## Not for

- A file the person attached: use `attachment-chip`
- An image the AI made, shown large: use `media-frame`
- Editing the file next to the chat: use `canvas-panel`

## Anatomy

- Preview or file icon
- File name
- Kind and size
- Open
- Download
- Making or failed line

## Do

- Show the real file name and its kind in words.
- Say when a file is still being made.
- Offer Try again when it fails.

## Avoid

- Do not show a download link before the file exists.
- Do not show only an icon for the kind of file.
- Do not hide a failure; say it in words.

## On a phone

- The buttons wrap under the name when the card is narrow.
- Long names end with an ellipsis; the full name is in the buttons' labels.

## Accessibility: built in

- Open and Download include the file name in their labels.
- Making and failed are said in words and read out as a status.
- The preview is decoration; the name and kind carry the meaning.

## Accessibility: what you need to do

- Use the real file name, with its extension, so the kind of file is clear.
- Give a size or length, such as 8 slides, when you know it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| name (required) | `string` |  | The file's name with its extension. |
| kind | `"document" \| "sheet" \| "slides" \| "pdf" \| "image" \| "code" \| "file"` |  | What kind of file it is. Worked out from the extension when omitted. |
| detail | `string` |  | Size or length, such as 24 KB or 8 slides. |
| preview | `ReactNode` |  | A small picture of the first page or the image itself. |
| status | `"ready" \| "making" \| "failed"` | `"ready"` | Whether the file is ready, still being made, or failed. |
| onOpen | `() => void` |  | Opens the file. The button is hidden when omitted. |
| onDownload | `() => void` |  | Downloads the file. The button is hidden when omitted. |
| onRetry | `() => void` |  | Tries again after a failure. |
| labels | `FileResultCardLabels` |  | Overrides kinds, open, download, retry, making(name) and failed. |
| className | `string` |  | Extra classes on the root. |

## States

- status: Set with the status prop.
- ready: The kind of file in words, its size, a preview, Open and Download.
- making: A spinner in place of the preview and Making followed by the name; the buttons wait.
- failed: A red line says the file could not be made, with Try again.
- no preview: An icon for the kind of file stands in for the preview.

## Tokens

- `--surface`
- `--bg`
- `--line`
- `--fg-muted`
- `--danger-fg`
- `--radius-card`
- `--radius-control`

## Examples

### Files the AI made

A document, a spreadsheet still being made, and one that failed.

```tsx
<FileResultCard name="Q3 support report.docx" detail="6 pages" onOpen={open} onDownload={download} />
<FileResultCard name="Refunds by region.xlsx" status="making" />
<FileResultCard name="Board slides.pptx" status="failed" onRetry={retry} />
```

Source: src/molecules/FileResultCard.tsx
