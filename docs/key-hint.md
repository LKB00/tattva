# KeyHint
A small key label, such as Tab or Esc, that shows which key to press.
Status: stable. Page: https://lkb00.github.io/tattva/#component-key-hint
KeyHint shows a key name in a small outlined box. Put it next to the action the key does. The action must still be reachable without the key.
## When to use it

A small key label, such as Esc or Tab, set beside the action it triggers. It is only a hint: the action must also work without the key.

## Use it for

- Beside a menu item or button that also has a keyboard shortcut.
- In help text that explains how to move around with the keyboard.
- Each key of a combination, one label per key.

## Not for

- Something people click: use `button`
- Labels that are not keyboard keys: use `badge`

## Anatomy

- Key label

## Do

- Put it beside words that name the action.
- Use one label per key in a combination.
- Make every shortcut also work with a mouse or tap.
- Use short names such as Esc and Tab.

## Avoid

- Do not use it as a button. It does nothing when clicked.
- Do not show it on touch-only screens.
- Do not use it alone. Say what the key does.
- Do not use it for hints that are not about the keyboard.

## On a phone

- It is a small label for a keyboard key, and keyboard shortcuts do not apply on a phone, so hide it there or show it only where a keyboard is likely.
- Its text is 12px on a touch screen.

## Accessibility: built in

- It is marked up as a keyboard key, and screen readers read the key name as text.
- It cannot be reached with Tab and does nothing when clicked.

## Accessibility: what you need to do

- Put words beside it that name the action. Screen readers read only the key name.
- Make the action work with a mouse or tap too.
- Hide it on touch-only screens, where there is no keyboard.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | Key label, such as Tab or Esc. |
| className | `string` |  | Extra classes merged onto the kbd element. |

## Tokens

- `--surface`
- `--border-strong`
- `--fg-muted`

## Examples

### Single keys

Put the label next to the action it triggers.

```tsx
<p className="flex items-center gap-2 text-body leading-5">Press <KeyHint>Esc</KeyHint> to close</p>
```

### Combination

Use one label per key.

```tsx
<p className="flex items-center gap-1 text-body leading-5"><KeyHint>Ctrl</KeyHint> + <KeyHint>Enter</KeyHint><span className="ml-2 text-fg-muted">Send</span></p>
```

Source: src/atoms/KeyHint.tsx
