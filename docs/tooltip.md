# Tooltip
A short text label that appears on hover and on keyboard focus.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tooltip
Tooltip names or briefly explains a control, usually one that shows only an icon. It appears after a short delay on hover and at once on keyboard focus. It holds plain text only. People on touch screens never see it from a tap, so it can never carry anything they need.
## When to use it

A short extra hint for a control, such as the name of an icon button. It is a bonus for people with a mouse or keyboard. Everything it says must also be available some other way.

## Use it for

- Naming an icon-only button for people who hover over it.
- A short reminder of what a control does.
- Telling people about a shortcut next to the control.

## Not for

- Anything with a link, button or formatting inside: use `popover`
- Information people must read to finish a task
- A shortcut hint shown beside an item: use `key-hint`

## Anatomy

- Trigger
- Tip

## Do

- Keep it to a few words.
- Use it on controls that have little or no visible text.
- Place it so it does not cover what the person is trying to read.
- Give the trigger its own name and use the tooltip only as extra.

## Avoid

- Do not put essential information, errors or instructions in it.
- Do not put links, buttons or other controls inside it.
- Do not use it on something that cannot take focus.
- Do not use it to show a longer explanation. Use a Popover or text on the page.

## On a phone

- Hover is ignored on touch screens, so the tip never shows from a touch alone.
- It still shows when the control gets focus, but do not rely on that: put anything the user must know in visible text.
- The tip is at most 16rem wide and wraps.

## Accessibility: built in

- The tip has role tooltip and is linked to the trigger with aria-describedby, so screen readers read it as a description.
- It is always in the page, hidden until shown, so the description is available even before it appears.
- Hover shows it after the delay. Keyboard focus shows it at once. Blur, moving the pointer away and Escape hide it.
- Escape closes the tip and leaves focus where it was.
- The pointer can move onto the tip without it closing.
- On touch screens (coarse pointer) a tap does not show it. It can still show on keyboard focus.
- The fade runs only when motion is allowed. Forced-colors mode adds a border.

## Accessibility: what you need to do

- Never put essential information in a tooltip. Touch users do not see it.
- The trigger must be focusable, such as a button or a link. A tooltip on plain text cannot be reached by keyboard.
- An icon-only trigger still needs its own accessible name. The tooltip adds a description, it does not replace the name.
- Keep it to a few words. Long text belongs on the page or in a Popover.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| content (required) | `string` |  | Plain text for the tip. No markup, links or buttons. |
| children (required) | `ReactElement` |  | The trigger. It gets aria-describedby added, so it must accept that prop and be focusable. |
| side | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Which side of the trigger the tip appears on. It does not flip when space runs out. |
| delay | `number` | `400` | Milliseconds to wait before a hover shows the tip. Focus shows it at once. |
| className | `string` |  | Classes for the tip itself. |

## States

- hover: The tip appears after the delay when the pointer rests on the trigger, and stays while the pointer is on it or on the tip.
- focus: The tip appears at once when the trigger gets keyboard focus and hides when focus leaves.
- dismissed: Escape hides the tip without moving focus.
- touch: On coarse pointers a tap or hover does not show the tip.

## Tokens

- `--fg`
- `--bg`
- `--shadow-md`
- `--animate-fade`

## Examples

### On an icon button

The tooltip repeats the button name for sighted mouse users. The button keeps its own label.

```tsx
<Tooltip content="Copy reply">
  <IconButton label="Copy reply"><CopyIcon width={16} height={16} /></IconButton>
</Tooltip>
```

### Long delay, below the trigger

A longer delay keeps tips from flashing as the pointer crosses a toolbar. side places the tip below.

```tsx
<Tooltip content="Runs the whole plan again" side="bottom" delay={1000}>
  <Button variant="secondary">Run again</Button>
</Tooltip>
```

### Beside a toolbar

Use left or right when there is no room above or below, for example in a vertical toolbar.

```tsx
<div className="flex gap-2">
  <Tooltip content="Share" side="right">
    <IconButton label="Share"><ShareIcon width={16} height={16} /></IconButton>
  </Tooltip>
  <Tooltip content="Download" side="right">
    <IconButton label="Download"><DownloadIcon width={16} height={16} /></IconButton>
  </Tooltip>
</div>
```

Source: src/atoms/Tooltip.tsx
