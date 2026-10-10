# IconButton
A round button that shows only an icon. It always has a name, and it can show an on or off state.
Status: stable. Page: https://lkb00.github.io/tattva/#component-icon-button
IconButton is for actions shown by a small picture alone, like copy, regenerate, send and stop. It must have a label. The label is read by screen readers and shown as a tooltip on hover. Set active to make it an on-or-off button with a soft highlight.
## When to use it

A small round button for actions people know by their icon, such as copy, send or stop. There are no words on it, so it always takes a name that screen readers read and a mouse shows as a tooltip.

## Use it for

- Toolbar actions under a reply, like copy and regenerate.
- The send and stop buttons in a message box.
- An on-or-off action, like marking a reply as good: set active.

## Not for

- An action whose icon people may not recognise: use `button`
- A setting that stays on until someone turns it off: use `switch`

## Anatomy

- Icon

## Do

- Always give it a label that names the action, like "Copy" or "Stop generating".
- Use lime for the send button and primary for stop.
- Use active for real on-or-off buttons, and keep the label the same when the state changes.
- Use a slightly smaller icon in the small size.

## Avoid

- Do not use IconButton when the icon is unclear. Use a Button with text.
- Do not use active to mark the page someone is on.
- Do not put text inside. The button is a fixed square.
- Do not make it amber. Amber is only for when a person has to act.

## On a phone

- On a touch screen the button keeps its size and has a tap area at least 44px tall and wide, even at size sm.
- The name only shows as a hover tooltip, which a phone never shows, so the icon must be clear without it.
- Leave room between neighbouring icon buttons. Each tap area is 44px wide, so buttons packed close together share the space between them.

## Accessibility: built in

- Screen readers read the label as the button's name.
- The same label shows as a tooltip when a mouse hovers over it.
- When active is set, screen readers say whether it is pressed.
- It is a real button, so the Tab key reaches it, Enter and Space press it, and a clear outline shows on focus.
- A disabled button cannot be pressed. The lime send button stays visible but faded.

## Accessibility: what you need to do

- Give it a label that names the action, such as "Stop generating".
- Keep the label the same when active changes. Screen readers already say whether it is pressed.
- Leave active out for plain actions, so screen readers do not treat them as on-or-off buttons.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Accessible name. Applied as aria-label and as the title tooltip. |
| variant | `"ghost" \| "secondary" \| "primary" \| "lime"` | `"ghost"` | Visual style. There is no danger variant. |
| size | `"sm" \| "md"` | `"md"` | Square size, 28px (sm) or 36px (md). |
| active | `boolean` |  | Sets aria-pressed and applies the soft accent background. Leave undefined for a plain action button. |
| type | `"button" \| "submit" \| "reset"` | `"button"` | Native button type. |
| ref | `Ref<HTMLButtonElement>` |  | The button element, for moving focus to it. |
| className | `string` |  | Merged last, so it can override the defaults. |
| children | `ReactNode` |  | The icon, typically an icon from lib/icons at 14 to 16px. |
| ...rest | `ButtonHTMLAttributes<HTMLButtonElement>` |  | Passed to the underlying <button>. |

## States

- selected: Set with the active prop.

## Tokens

- `--accent`
- `--accent-hover`
- `--accent-soft`
- `--accent-fg`
- `--on-accent`
- `--lime`
- `--lime-hover`
- `--on-lime`
- `--surface`
- `--bg`
- `--border`
- `--hover`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--dur-fast`
- `--focus-ring`
- `--radius-control`

## Examples

### Variants and sizes

Ghost is the default for message toolbars. There are medium and small sizes.

```tsx
<div className="flex flex-wrap items-center gap-3">
  <IconButton label="Copy"><CopyIcon width={16} height={16} /></IconButton>
  <IconButton label="Regenerate" variant="secondary"><RefreshIcon width={16} height={16} /></IconButton>
  <IconButton label="Search" variant="primary"><SearchIcon width={16} height={16} /></IconButton>
  <IconButton label="New" variant="lime"><PlusIcon width={16} height={16} /></IconButton>
  <IconButton label="Copy" size="sm"><CopyIcon width={14} height={14} /></IconButton>
</div>
```

### Send and stop

The send button is lime. When it is disabled it stays visible but faded, so the message box does not look empty.

```tsx
<div className="flex items-center gap-3">
  <IconButton label="Send message" variant="lime"><SendIcon width={16} height={16} /></IconButton>
  <IconButton label="Send message" variant="lime" disabled><SendIcon width={16} height={16} /></IconButton>
  <IconButton label="Stop generating" variant="primary"><StopIcon width={16} height={16} /></IconButton>
</div>
```

### Toggle with active

Set active to show a pressed state. The button gets a soft highlight, and screen readers say it is pressed.

```tsx
function Example() {
  const [liked, setLiked] = useState(false);
  return (
    <IconButton label="Good response" active={liked} onClick={() => setLiked((v) => !v)}>
      <ThumbUpIcon width={16} height={16} />
    </IconButton>
  );
}
```

Source: src/atoms/Button.tsx
