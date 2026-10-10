# VersionHistory
A list of earlier versions of your work, with who made each, when, and Preview and Restore buttons.
Status: stable. Page: https://lkb00.github.io/tattva/#component-version-history
VersionHistory lists versions with the newest first. The oldest is Version 1. Each row shows who made it (AI or a person), when, and an optional short note. Preview shows an older version with a banner and an Exit preview button. Preview does not create a new version, and the list says so. Restore brings that version back.
## When to use it

Lists earlier versions of a piece of work, newest first, with who made each one. Preview and Restore are separate, so people can look without changing anything.

## Use it for

- A document, design or page that both the AI and people edit.
- Looking at an older version before deciding to bring it back.
- Telling AI edits apart from people's edits.

## Not for

- Versions of one chat message: use `version-pager`
- Going back to an earlier step of an agent's work: use `checkpoint-list`
- Undoing one AI edit to a short text: use `revert-toggle`

## Anatomy

- Title
- Preview banner
- Version rows
- Current label
- Preview button
- Restore button
- Preview note

## Do

- Mark the current version in words, with no buttons on it.
- Say that Preview does not create a version, so people feel safe trying it.
- Show who made each version, so AI edits and human edits are easy to tell apart.
- Show the previewed version in your own screen. The list only tells you which one through onPreviewChange.

## Avoid

- Do not restore when someone only previews. They are different actions.
- Do not put the oldest version first. The numbering expects newest first.
- Do not use amber on the preview banner. Nothing is waiting on the person.
- Do not hide the banner. People need a clear way out of a preview.

## On a phone

- Each version is a row whose text has a 192px minimum width, so Preview and Restore wrap below the text on a narrow screen.
- Preview and Restore keep their size and have a 44px tap area on a touch screen.
- The preview bar at the top wraps, with its buttons under the text when needed.

## Accessibility: built in

- Versions are a numbered list, and the current one is marked for screen readers.
- Preview and Restore buttons include the version name, such as "Preview Version 3".
- Each Preview button tells screen readers whether it is on.
- Starting a preview is announced as "Previewing" and the version name.
- Who made each version and which one is current are said in words, not color.
- After a restore, keyboard focus moves to the restored version and screen readers hear "Restored" and its name. Leaving a preview from the bar returns focus to that version's Preview button.

## Accessibility: what you need to do

- Keep version names and summaries short, so the button names stay easy to hear.
- Set restoredMessage when you translate.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| versions (required) | `VersionEntry[]` |  | Newest first. Each entry has an id, time, author (ai or person) and optional name, authorName and summary. A missing name becomes Version N. |
| currentId | `string` |  | Id of the current version. Defaults to the first entry. |
| previewId | `string \| null` |  | Controlled preview. Omit to let the component manage it. |
| onPreviewChange | `(id: string \| null) => void` |  | Called when a preview starts or exits. |
| onRestore (required) | `(id: string) => void` |  | Called when Restore is pressed on a row or in the banner. |
| title | `string` | `"Version history"` | Heading and accessible name of the section. |
| previewNote | `string` | `"Preview does not create a new version."` | Note under the list and in the preview banner. |
| className | `string` |  | Extra classes for the section. |

## States

- current: The version matching currentId (or the first one) shows a Current badge and has no Preview or Restore buttons.
- previewing: Pressing Preview marks that row, and shows a bar above the list with Exit preview and Restore.
- hover: A row that is not being previewed gets a soft background under the pointer.

## Tokens

- `--surface`
- `--surface-sunken`
- `--surface-hover`
- `--border`
- `--lime (via Badge)`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- List with preview: Press Preview on any older version. The banner offers Exit preview and Restore. Restore makes that version the current one.
- Already previewing: The same list already showing a preview, as when someone arrives from a link.
- Your own names: The list handles previews itself. A name you give replaces the automatic one.

Source: src/organisms/VersionHistory.tsx
