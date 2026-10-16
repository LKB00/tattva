# SharePanel
Who can open a chat or a result, with its link to copy and a way to stop sharing.
Status: stable. Page: https://lkb00.github.io/tattva/#component-share-panel
SharePanel goes in a Dialog or a Sheet. It offers who can open the item as plain choices: Only you, People in your workspace, or Anyone with the link, each with one line on what it means. When shared, it shows the link with Copy link (which says Copied), a line on exactly what the link shows, and Stop sharing, which asks once.
## When to use it

Makes sharing a chat or result a clear choice about who can see it, so nothing is shared more widely than meant.

## Use it for

- Sharing a chat, an artifact or a report as a link.
- Changing or stopping sharing later.

## Not for

- Inviting people to work on something together: use `dialog`
- Exporting a file: use `export-sheet`
- Asking before an action the AI takes: use `permission-prompt`

## Anatomy

- Heading and item title
- Who can open it
- Link and Copy link
- What the link shows
- Stop sharing

## Do

- Start from Only you.
- Say what the link shows and what it does not.
- Make stopping as easy as sharing.

## Avoid

- Do not make Anyone with the link the default.
- Do not hide that later messages are not shared, or are.
- Do not stop sharing without one question.

## On a phone

- The link and Copy link stack on a narrow screen, with the button full width.
- Each choice has its own line of explanation, so nothing is cut off.

## Accessibility: built in

- The choices are a radio group with a legend; arrow keys move between them.
- The link field selects itself on focus, and Copy link says Copied, also read out.
- Stop sharing asks in place and moves focus to the safe choice.

## Accessibility: what you need to do

- Put it in a Dialog or a Sheet with a clear title, and set headingLevel to fit (2 by default).
- Say exactly what the link shows in the scope line.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title (required) | `string` |  | What is being shared, such as the chat's title. |
| access (required) | `"private" \| "workspace" \| "link"` |  | Who can open it now. |
| onAccessChange (required) | `(access) => void` |  | Called when the person picks who can open it. |
| link | `string` |  | The link, once there is one. |
| onCopy | `(link: string) => void` |  | Copies the link. Defaults to the clipboard. |
| onStopSharing | `() => void` |  | Turns the link off. Asks once first. |
| showWorkspace | `boolean` | `true` | Offer the workspace choice. |
| labels | `SharePanelLabels` |  | Overrides heading, access, options, link, copy, copied, scope, stop, stopQuestion and keep. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `2` | Level of the part's heading. |
| className | `string` |  | Extra classes on the root. |

## States

- only you: No link is shown.
- workspace: The link, Copy link, and a line saying what the link shows.
- anyone with the link: The same, and the choice itself warns about private details.
- copied: Copy link says Copied with a check for a moment, and the same word is read out.
- asking to stop: Stop sharing becomes a question in place, with Stop sharing and Keep sharing.

## Tokens

- `--surface-sunken`
- `--line`
- `--fg-muted`
- `--danger`
- `--radius-field`

## Examples

### Share a chat

Change who can open it, copy the link, or stop sharing.

```tsx
<SharePanel
  title="Lisbon trip plan"
  access={access}
  onAccessChange={setAccess}
  link="https://example.com/share/7KQ4M9XP"
  onStopSharing={stopSharing}
/>
```

Source: src/organisms/SharePanel.tsx
