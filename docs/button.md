# Button
A rounded button with a text label. It comes in five styles and three sizes, and can hold an icon.
Status: stable. Page: https://lkb00.github.io/tattva/#component-button
Button is how people take an action. Its style shows how important the action is. Primary is dark and bold. Lime is a bright highlight for the one most positive action. Secondary has an outline. Ghost has no border. Danger is for actions that delete things. It sinks a little when pressed. Set busy while work runs after a press, and a spinner takes the place of the label. It never sends a form unless you ask it to.
## When to use it

The main way to take an action. Its style shows how much the action matters, so one strong button can lead a screen while quieter ones sit beside it.

## Use it for

- An action with a short verb label, like Send, Save or Regenerate.
- The one main action on a screen: use the primary or lime style.
- A second, quieter action next to the main one: use secondary or ghost.
- Deleting something, or anything that cannot be undone: use danger.

## Not for

- An action shown by an icon alone: use `icon-button`
- A setting that turns on or off right away: use `switch`
- Picking one option from a small set: use `segmented-control`

## Anatomy

- Icon before
- Label
- Icon after

## Do

- Use one primary button per screen, for the action you most want people to take.
- Use lime for one positive highlight, with dark text. Lime is only ever a background.
- Use secondary for the second action beside a primary one. Use ghost for quiet toolbar actions.
- Start labels with a verb that says what happens, like "Regenerate" or "Delete chat".
- Use busy, not disabled, while a press is being handled, so focus stays on the button.

## Avoid

- Do not use the danger style unless something is deleted or cannot be undone.
- Do not put two primary buttons side by side.
- Do not make a button amber. Amber is only for when a person has to act.
- Do not use an icon alone in a Button. For icon-only buttons, use IconButton with a label.

## On a phone

- On a touch screen every button keeps the size it is drawn at and has an invisible tap area at least 44px tall and wide, so sm and md stay small but are easy to tap.
- The label never wraps, so a long label can run past a narrow container. Keep labels short or shorten them on a phone.
- Hover colours do nothing on a phone, so the pressed state is the only feedback: the button sinks a little under the finger and comes back when it lifts.

## Accessibility: built in

- It is a real button, so the Tab key reaches it and Enter and Space press it.
- A clear outline shows when someone tabs to it.
- A disabled button looks faded, cannot be pressed and is skipped by the Tab key.
- While busy it sets aria-busy, keeps focus and stays in the Tab order, and screen readers hear busyLabel after the label, which stays in the page but cannot be seen. Presses do nothing until busy is off.
- On press it sinks to --press-scale in --dur-instant and comes back in --dur-fast. IconButton has the same press.
- The press is off, and color changes are instant, for people who turn off motion in their system settings.

## Accessibility: what you need to do

- Write a label that says what happens, such as "Delete chat", not "OK".
- Set type to "submit" when the button should send a form. It does not by default.
- If you put only an icon inside, add a name for screen readers, or use IconButton instead.
- While busy, set busyLabel to what is happening, such as "Saving". Turn busy off when the work ends, and show the result or the error on the page.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variant | `"primary" \| "lime" \| "secondary" \| "ghost" \| "danger"` | `"primary"` | Visual weight of the button. Exported as ButtonVariant. |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Height and padding: 32px, 36px or 44px. Exported as ButtonSize. |
| leading | `ReactNode` |  | Content rendered before the label, usually an icon. |
| trailing | `ReactNode` |  | Content rendered after the label. |
| busy | `boolean` | `false` | Work is running after a press. The label gives way to a spinner without changing the width, presses are ignored, and the button keeps focus and stays in the Tab order. Sets aria-busy. |
| busyLabel | `string` | `"Working"` | Read by screen readers while busy, for example "Saving". |
| type | `"button" \| "submit" \| "reset"` | `"button"` | Native button type. Set to "submit" explicitly inside forms. |
| ref | `Ref<HTMLButtonElement>` |  | The button element, for moving focus to it, for example onto the safe choice of a confirmation. |
| className | `string` |  | Merged after the variant and size classes, so it can override them. |
| children | `ReactNode` |  | The label. |
| ...rest | `ButtonHTMLAttributes<HTMLButtonElement>` |  | Passed to the underlying <button>, including onClick, disabled and aria-* attributes. |

## States

- loading: Pass busy: a spinner takes the place of the label at the same width, presses are ignored, aria-busy is set and busyLabel (default "Working") is read. It keeps focus and stays in the Tab order.
- disabled: Pass the native disabled attribute; it looks dimmed, ignores clicks and is skipped by keyboard.
- hover: The background shifts to a darker or tinted shade when the pointer is over it.
- focus: A visible focus ring appears when you reach it with the keyboard.
- pressed: While held down it sinks to --press-scale in --dur-instant and comes back in --dur-fast when let go. Off under reduced motion.

## Tokens

- `--accent`
- `--accent-hover`
- `--on-accent`
- `--lime`
- `--lime-hover`
- `--on-lime`
- `--surface`
- `--bg`
- `--border`
- `--border-strong`
- `--hover`
- `--fg`
- `--fg-muted`
- `--danger`
- `--dur-instant`
- `--dur-fast`
- `--press-scale`
- `--focus-ring`
- `--radius-control`

## Examples

### Variants

Primary is the default. Use it once per screen. Lime is a small bright highlight with dark text. Ghost suits quiet actions in toolbars.

```tsx
<div className="flex flex-wrap items-center gap-3">
  <Button variant="primary">Primary</Button>
  <Button variant="lime">Lime</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="danger">Delete chat</Button>
</div>
```

### Sizes

Small, medium and large. Medium is the default.

```tsx
<div className="flex flex-wrap items-center gap-3">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```

### With icons

An icon can sit before or after the label.

```tsx
<div className="flex flex-wrap items-center gap-3">
  <Button leading={<PlusIcon width={14} height={14} />}>New chat</Button>
  <Button variant="secondary" trailing={<RefreshIcon width={14} height={14} />}>Regenerate</Button>
  <Button variant="lime" leading={<SparkleIcon width={14} height={14} />}>Ask AI</Button>
</div>
```

### Busy while saving

Press it and it shows a spinner for a moment. The button keeps its width, ignores more presses and keeps focus, so nothing jumps and a second press does not save twice.

```tsx
function Example() {
  const [busy, setBusy] = useState(false);
  const save = () => {
    setBusy(true);
    window.setTimeout(() => setBusy(false), 1500);
  };
  return <Button busy={busy} busyLabel="Saving" onClick={save}>Save changes</Button>;
}
```

### Disabled

A disabled button looks faded and cannot be pressed.

```tsx
<div className="flex flex-wrap items-center gap-3">
  <Button disabled>Send</Button>
  <Button variant="secondary" disabled>Cancel</Button>
</div>
```

Source: src/atoms/Button.tsx
