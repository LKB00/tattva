# BrowserFrame
A quiet window around a faux product: a thin bar with the address or title, and a border.
Also known as: browser mockup, window frame, browser chrome, device frame.
Status: stable. Page: https://lkb00.github.io/tattva/#component-browser-frame
BrowserFrame puts a product demo in a window: a thin bar with an address (browser), a title (a desktop app) or no bar at all (a quiet card), a border and nothing that lifts. It frames the product without turning it into a pasted screenshot.
## When to use it

Tells the viewer they are looking at a web page or an app, with as little chrome as possible.

## Use it for

- A web product in a demo.
- A desktop app in a demo.
- A quiet card around one part of a screen.

## Not for

- A phone screen: use `phone-frame`
- A real window in the product: use `app-shell`

## Anatomy

- Bar
- Address or title
- Screen

## Do

- Keep the address short and on the example domain.
- Use plain for a feature card, where a window bar would only add noise.

## Avoid

- Do not add shadows or gloss. The window is framed by its border.
- Do not show a real person's or company's address.

## On a phone

- The window fills the stage width; the address shortens with an ellipsis.

## Accessibility: built in

- The bar's dots are decoration and hidden from screen readers.
- Inside a DemoStage the whole window is hidden from screen readers; the stage's label describes it.

## Accessibility: what you need to do

- Use a short, made-up address on the example domain, never a real customer's.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | The product screen. |
| variant | `"browser" \| "app" \| "plain"` | `"browser"` | An address bar, a title bar, or no bar. |
| title | `string` |  | The address or window title, short. |
| className | `string` |  | Extra classes on the window. |

## States

- browser: A bar with a short address.
- app: A bar with a window title.
- plain: No bar: a quiet card.
- long address: The address shortens with an ellipsis.

## Tokens

- `--surface`
- `--surface-sunken`
- `--line`
- `--line-strong`
- `--radius-card`

## Examples

### Three looks

Browser with an address, an app with a title, and a plain card.

```tsx
<BrowserFrame title="acme.app/chat">{screen}</BrowserFrame>
<BrowserFrame variant="app" title="Acme">{screen}</BrowserFrame>
<BrowserFrame variant="plain">{screen}</BrowserFrame>
```

Source: src/molecules/BrowserFrame.tsx
