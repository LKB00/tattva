# FileDropZone
Where people drop or browse for files, with the kinds and sizes that work said up front.
Also known as: file upload, dropzone, drag and drop upload, uploader.
Status: stable. Page: https://lkb00.github.io/tattva/#component-file-drop-zone
FileDropZone is a dashed area to drop files on, with a Browse files button for everyone who cannot drag. It says which kinds of file and what size work before anyone tries, changes its words when a file is over it, and when a file does not work it names the file and says why.
## When to use it

Makes adding files easy and predictable, so people know what will work before they try.

## Use it for

- Adding files to a chat, a project or a research run.
- Uploads with limits on kind or size.

## Not for

- A file already added: use `attachment-chip`
- A file the AI made: use `file-result-card`

## Anatomy

- Icon
- Title
- Kinds and size
- Browse files
- Errors

## Do

- Say the kinds and size limit before anyone tries.
- Name the file that did not work and say why.
- Keep Browse files for people who cannot drag.

## Avoid

- Do not make dragging the only way.
- Do not reject a file without saying which one.

## On a phone

- On a phone, Browse files opens the phone's own picker; dragging is rare there.
- The area fills the width and its button is a full tap target.

## Accessibility: built in

- Browse files is a real button, described by the kinds and size line.
- Errors are read out as soon as they appear.
- The words change to Drop to add when a file is over the area, not just the color.

## Accessibility: what you need to do

- List the kinds people actually use, not every extension.
- Check the files again on your server; this checks only names and sizes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| onFiles (required) | `(files: File[]) => void` |  | Called with the files that passed the checks. |
| accept | `string[]` |  | Accepted extensions, such as ["pdf", "docx"]. Any file when omitted. |
| maxSizeMb | `number` |  | Largest file in megabytes. |
| multiple | `boolean` | `true` | Allow more than one file at a time. |
| disabled | `boolean` |  | Turns the area and its button off. |
| labels | `FileDropZoneLabels` |  | Overrides title, browse, drop, hint, wrongKind and tooBig. |
| className | `string` |  | Extra classes on the root. |

## States

- disabled: The area fades and Browse files is turned off.
- resting: A dashed area with Add files, which kinds and sizes work, and Browse files.
- dragging over: The area takes the selected fill and border and says Drop to add.
- file refused: A red line names each file that was refused and why; the files that passed are still added.
- focus: Browse files shows a focus ring on keyboard focus.

## Tokens

- `--bg`
- `--line-strong`
- `--selected`
- `--selected-border`
- `--danger-fg`
- `--radius-card`

## Examples

### Add files

Press Browse files, or drag files onto the area. A file of the wrong kind or size says why.

```tsx
<FileDropZone accept={["pdf", "docx", "csv", "png"]} maxSizeMb={25} onFiles={add} />
```

Source: src/molecules/FileDropZone.tsx
