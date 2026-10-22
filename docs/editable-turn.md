# EditableTurn
A message the person sent, which they can edit and send again, with its earlier versions kept.
Also known as: edit message, edit prompt, resend.
Status: stable. Page: https://lkb00.github.io/tattva/#component-editable-turn
EditableTurn shows the person's own message with Edit and Copy buttons under it, always there rather than only on hover. Edit opens the text in place with Cancel and Send. Sending an edit adds a new version; the earlier ones stay, and a small pager (2 of 2) moves between them and the replies that followed each.
## When to use it

Lets people fix or rephrase what they asked without starting over, and go back to what they had before.

## Use it for

- Fixing a typo or adding detail to a question already sent.
- Trying a question two ways and comparing the replies.

## Not for

- Moving between regenerated versions of a reply: use `version-pager`
- A person's message that cannot be changed: use `message`
- Editing text the AI wrote: use `inline-edit`

## Anatomy

- Message bubble
- Version pager
- Copy
- Edit
- Edit box with note
- Cancel and Send

## Do

- Keep every version and its replies.
- Say that sending an edit writes the replies after it again.
- Put focus back on Edit when editing ends.

## Avoid

- Do not show Edit only on hover.
- Do not throw the old version away.
- Do not let people send an empty edit.

## On a phone

- Edit and Copy sit under the bubble at all times, because a phone has no hover.
- The edit box takes the full width on a narrow screen.

## Accessibility: built in

- Edit and Copy are labelled buttons under the bubble, reachable by Tab.
- Editing moves focus into the box with the cursor at the end; Escape cancels and Ctrl or Cmd with Enter sends.
- When editing ends, focus goes back to Edit.
- The pager says which version shows, for example Version 2 of 2.

## Accessibility: what you need to do

- Keep the replies of each version, so going back shows what the person saw then.
- Tell people that sending an edit writes the replies after it again; the note under the box does this.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| versions (required) | `string[]` |  | Every version of this message, oldest first. |
| current | `number` |  | Which version shows, 1-based. Defaults to the newest. |
| onChangeVersion | `(version: number) => void` |  | Shows another version and the replies that followed it. |
| onResend (required) | `(text: string) => void` |  | Sends the edited text as a new version. |
| onCopy | `(text: string) => void` |  | Copies the message. The button is hidden when omitted. |
| labels | `EditableTurnLabels` |  | Overrides edit, copy, copied, send, cancel, field and note. |
| className | `string` |  | Extra classes on the root. |

## States

- selected: Set with the current prop.
- one version: The message with Copy and Edit under it. No pager.
- editing: The bubble becomes an edit box with a note, Cancel and Send. Escape cancels, Ctrl or Cmd + Enter sends, and focus goes back to Edit.
- several versions: A pager (◀ 2 of 2 ▶) moves between the versions the person sent.
- empty edit: Send is turned off while the box is empty.
- focus: Copy, Edit and the pager arrows show a focus ring on keyboard focus.

## Tokens

- `--surface-sunken`
- `--surface`
- `--line-strong`
- `--fg-muted`
- `--radius-card`

## Examples

### Edit and send again

Press Edit, change the question, and Send. Then use the pager to go back.

```tsx
<EditableTurn
  versions={versions}
  current={current}
  onChangeVersion={setCurrent}
  onResend={(text) => sendEdit(text)}
  onCopy={copy}
/>
```

Source: src/molecules/EditableTurn.tsx
