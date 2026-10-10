# TakeVersions
The versions of one video take, each saying what it came from: extend, edit, remix, re-cut or upscale, with preview, make current and undo.
Status: stable. Page: https://lkb00.github.io/tattva/#component-take-versions
TakeVersions lists the history of one clip, newest at the top. Each version says how it was made and from which version, such as "Extended +4 s from v1" or "Edited 0:02 to 0:06 from v2: warmer sunrise light", with the prompt behind it and a tiny strip that marks the changed part. Preview shows a version without changing anything. Make current never deletes, and an Undo follows. On a phone it shows one version at a time with Previous and Next.
## When to use it

Keeps every extend and edit of a clip, says where each one came from, and makes going back safe.

## Use it for

- The history panel beside a take in a video editor.
- Going back to an earlier cut after an edit went wrong.
- Starting a new line of edits from an older version.

## Not for

- Versions of a document or a chat answer: use `version-history`
- Stepping between sibling replies in chat: use `version-pager`
- Different takes from one prompt: use `take-grid`

## Anatomy

- Title and count
- Notice with Undo (after a change)
- Version list, newest first
- Poster with length
- Version name and Current tag
- Lineage line
- Prompt
- Author and time
- Changed-part strip
- Make current
- Branch
- Pager (phone)

## Do

- Save every extend, edit, remix and upscale as a new version.
- Pass from on each version, so the lineage line can name its source.
- Pass segment for edits and re-cuts, so the changed part is shown and said.

## Avoid

- Do not overwrite a version when the person edits.
- Do not offer Make current on a version that is still running.
- Do not show the operation as an icon alone. The words carry it.

## On a phone

- Below 640px wide it shows one version at a time with Previous and Next buttons.
- Make current and Branch move under the version, in reach of a thumb.
- Buttons get a 44px tap area on touch screens.

## Accessibility: built in

- It is a section named by its heading. Versions are an ordered list, newest first, and the current one has aria-current="true".
- Each version's main button previews it. Its name says the version and how it was made, such as Preview v3. Edited 0:02 to 0:06 from v2.
- Preview buttons are one tab stop. Up and Down move between versions; Home and End jump.
- After Make current or Undo, a polite status says what changed, and focus moves to the current version when the pressed button goes away.
- Length is read as seconds. The changed-part strip is hidden from screen readers because the lineage line says the same.
- The pager uses VersionPager, which says the version name and its place, such as v3, 3 of 5.

## Accessibility: what you need to do

- Show the previewed version in your player, and say in the player that it is a preview.
- Keep time text plain, such as Today 10:05, and the same across versions.
- If Branch opens a new editor, move focus there.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| versions (required) | `TakeVersion[]` |  | Oldest first, so the first is v1. Each has op, from, prompt, segment, detail, durationSec, author, time and status. |
| currentId (required) | `string` |  | The version in use now. |
| onPreview (required) | `(id: string) => void` |  | Show a version without changing anything. Called with currentId to end the preview. |
| onMakeCurrent (required) | `(id: string) => void` |  | Make a version current. Also called with the old id by Undo. |
| onBranch | `(id: string) => void` |  | Start a new line of edits from a version. Shows Branch. |
| previewId | `string` |  | Controlled preview. Omit to let the part keep it. |
| layout | `"auto" \| "list" \| "pager"` | `"auto"` | auto shows the pager below 640px wide and the list above. |
| title | `string` | `"Versions"` | Heading text. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Heading level of the title. |
| className | `string` |  | Classes for the panel. |

## States

- previewing: A version other than the current one was previewed: sunken row and a Previewing tag.
- restored: After Make current: a notice says nothing was deleted, with Undo.
- working: A version still running, such as an upscale: its status tag shows and Make current is held back.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--chart-seq-1`
- `--chart-2`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- History of one clip: Five versions: generated, extended, edited, re-cut by a person, and an upscale still running. Make current says nothing was deleted and offers Undo. Up and Down move between versions. On a narrow screen it turns into the pager below.
- One at a time, for a phone: The pager layout, which auto uses below 640px wide. Each step previews that version; Make current keeps the same Undo.

Source: src/molecules/TakeVersions.tsx
