# Callout
A message box inside the page, with a color for its mood, an optional title and an optional button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-callout
Callout is the base for every notice shown inside the page. It is a soft rounded box with an icon, an optional title, some text and an optional button. It has four moods: info, success, warning and danger. ErrorState, RefusalNotice and RateLimitNotice are built on it, so try those first if one fits.
## When to use it

A notice that sits inside the page instead of popping up over it. The soft color sets the mood, while the icon and the words carry the meaning.

## Use it for

- A note about the page or the app, such as a saved draft or an unstable connection.
- A warning someone should read before going on.
- A short message with one button that fixes or follows up on it.

## Not for

- A failure the person can try again: use `error-state`
- A request the assistant will not do: use `refusal-notice`
- A usage limit with a reset time: use `rate-limit-notice`

## Anatomy

- Icon
- Title
- Text
- Button

## Do

- Give every callout a title or a clear first sentence, so color is not the only clue.
- Add one button for the next step the reader can take, like Retry or Upgrade.
- Use danger only for things that failed. Use info for limits and neutral notes.
- Keep the text to one or two sentences.

## Avoid

- Do not stack several callouts. Combine them or show the most important one.
- Do not use warning as decoration. It is amber, which tells people to take a look.
- Do not put long forms or lists inside. Link to a fuller page instead.
- Do not use neutral or accent colors. Only the four moods work here.

## On a phone

- Fills the width of its container, and the message wraps beside the icon.
- On a phone the action drops to its own line under the message, so the message keeps its full width.
- The action button keeps its size and has a 44px tap area on touch screens.

## Accessibility: built in

- When it appears, screen readers announce danger right away and the other moods politely.
- The icon is hidden from screen readers.
- Info and success show a circle icon, warning and danger a triangle, so color is never the only clue.

## Accessibility: what you need to do

- Write a title or text that says what happened, because the icon is not read out.
- Name the button for what it does, such as "Retry upload".
- Use the danger mood only for problems that need attention now, because screen readers interrupt for it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| tone | `"info" \| "success" \| "warning" \| "danger"` | `"info"` | Colour family of the surface and text. Info and success use the info icon, warning and danger use the alert icon. |
| title | `string` |  | Short bold heading above the body. |
| children | `ReactNode` |  | Body content. Rendered at 90% opacity under the title. |
| action | `ReactNode` |  | Trailing slot, usually a small Button. |

## States

- danger: Set tone to danger to announce it as an alert; the other tones announce it as a status.

## Tokens

- `--info-soft`
- `--info-fg`
- `--success-soft`
- `--success-fg`
- `--warning-soft`
- `--warning-fg`
- `--danger-soft`
- `--danger-fg`
- `--radius-card`

## Examples

### Informational

The default mood. Use it for neutral notes that ask nothing of the reader.

```tsx
<Callout title="Draft saved">Your changes are saved and will sync when you are back online.</Callout>
```

### All tones

Success, warning and danger look alike apart from color. Screen readers announce danger more urgently.

```tsx
<div className="space-y-3">
  <Callout tone="success" title="Export complete">The file is ready to download.</Callout>
  <Callout tone="warning" title="Large file">Uploads over 20 MB may take a minute.</Callout>
  <Callout tone="danger" title="Upload failed">The connection dropped before the file finished.</Callout>
</div>
```

### With an action

Add a button at the end of the box.

```tsx
<Callout tone="warning" title="Connection unstable" action={<Button size="sm" variant="secondary">Retry</Button>}>
  Responses may be delayed.
</Callout>
```

Source: src/molecules/Callout.tsx
