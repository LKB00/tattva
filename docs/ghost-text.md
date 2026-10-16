# GhostText
Faded suggested text that appears after what you typed, with a Tab key hint.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ghost-text
GhostText shows a suggested ending in faded type with a dotted underline, so it looks different from real text. A key hint shows which key accepts it. The component only reports when someone accepts or dismisses. Your editor decides which keys do that and what happens to the text.
## When to use it

A suggested ending shown faded after what someone typed, with a hint for the key that accepts it. It looks clearly different from real text and only becomes text when accepted.

## Use it for

- Completing the sentence or line someone is typing.
- Offering a long suggestion that can be accepted a word at a time, with a hint that says how.

## Not for

- A whole paragraph or a rewrite: use `suggestion-bar`
- A correction to text already written: use `suggestion-card`
- Ideas for what to ask next: use `suggestion-chips`

## Anatomy

- Typed text
- Suggestion
- Key hint to accept
- Hint to accept one word
- Dismiss button
- Hidden description for screen readers

## Do

- Make Tab, or your accept key, work from the keyboard as well as from the hint.
- Dismiss on Escape, and when the person keeps typing.
- For long suggestions, let people accept one word at a time and say how.
- Keep the suggestion looking different from real text.

## Avoid

- Do not put the suggestion into the real text before it is accepted.
- Do not make screen readers announce the suggestion. It changes with every key press.
- Do not use it for whole paragraphs. Use SuggestionBar.

## On a phone

- Phones have no Tab or Esc key, so pass onAccept and onDismiss. The key hint then becomes a tap target and a dismiss button appears.
- On touch screens both buttons keep their size and have a 44px tap area, so the line they sit in does not get taller.
- The hint shows the accept key as text, so set acceptKey to something a phone user understands or hide the hint.

## Accessibility: built in

- Screen readers skip the faded text. A hidden description carries it instead, with the keys that accept or dismiss it.
- It announces nothing on its own, because the suggestion changes with every key press.
- When you give it actions, the key hint and the dismiss control are real buttons with names, such as "Accept suggestion, Tab".

## Accessibility: what you need to do

- Pass an id and point the text box's aria-describedby at it, so screen readers read the hidden description.
- Make the accept key, usually Tab, and Escape work in your editor. The component only shows the hint.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `string` |  | The suggested continuation. |
| typed | `ReactNode` |  | Text already typed, rendered in normal ink before the suggestion. |
| id | `string` |  | Id of the hidden description. Point the field's aria-describedby at it. |
| acceptKey | `string` | `"Tab"` | Key shown in the hint and named in the description. |
| dismissKey | `string` | `"Esc"` | Key named in the description. |
| partialHint | `string` |  | Text for a partial accept path, such as one word or one line. |
| description | `string` |  | Replaces the default hidden description. |
| onAccept | `() => void` |  | Called when the hint button is activated. Makes the hint a button. |
| onDismiss | `() => void` |  | Called when the dismiss button is activated. Shows the button. |
| acceptLabel / dismissLabel | `string` | `"Accept suggestion" / "Dismiss suggestion"` | Accessible names of the two controls. |

## States

- accept button: Pass onAccept to turn the key hint into a button that accepts the suggestion.
- dismiss button: Pass onDismiss to show a small close button beside the suggestion.
- partial hint: Pass partialHint to show a short note about accepting only part of the suggestion.

## Tokens

- `--surface-sunken`
- `--fg-subtle`
- `--border-strong`
- `--border`
- `--radius-control`

## Examples

### Accept or dismiss

Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses.

```tsx
<GhostText typed="Thanks for the update." partialHint="Ctrl + Right accepts one word"
  onAccept={() => accept()} onDismiss={() => dismiss()}>
  {" I will review the draft tomorrow morning."}
</GhostText>
```

### Display only

Without buttons the hint is plain text. Use it when your editor handles every key.

```tsx
<GhostText typed="Dear team,">{" thank you for your patience."}</GhostText>
```

Source: src/atoms/GhostText.tsx
