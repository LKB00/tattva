# ScrollEdge
A scrolling area whose top and bottom edges blur gradually, so content softens near the edge instead of meeting a hard line.
Status: stable. Page: https://lkb00.github.io/tattva/#component-scroll-edge
ScrollEdge wraps content that scrolls and draws a soft blur over the top edge, the bottom edge or both. The blur is built from five layers that get stronger towards the edge, with a tint of the page colour on top. Use it behind a fixed header or composer, where a hard panel line would cut the content. Where blur is unavailable, or the person asked for less transparency, it shows a plain fade with no blur.
## When to use it

Lets a long list scroll under a header or footer without a hard line, so the screen feels like one surface. The fade is decoration only: it never takes focus and never blocks a tap.

## Use it for

- A chat thread that scrolls under a header and a message box.
- A panel body that scrolls under a fixed title.
- Any long list where a border line at the edge feels heavy.

## Not for

- A panel that stays beside the page while people keep working: use `canvas-panel`
- A surface that slides over the page: use `sheet`
- Content that hides and shows on request: use `collapsible`

## Anatomy

- Outer box
- Scrolling region
- Top edge
- Bottom edge

## Do

- Give the outer box a fixed or flexible height, or the content cannot scroll.
- Pad the content by at least the fade size at the ends that fade.
- Keep the header or footer you sit under transparent, so the blur shows through.
- Use it only on edges where content really passes underneath.

## Avoid

- Do not rely on the blur to hide anything private.
- Do not stack several ScrollEdge boxes inside each other.
- Do not put the only copy of important text in the fade zone.
- Do not use it where the edge has a border you want people to see.

## On a phone

- The fade at the edge is drawn over the content and ignores touch, so a finger scrolls the content underneath as normal.
- Scrolling stops at the end of the area instead of carrying on into the page behind it.
- Give it a height, or place it in a parent that has one, or it will not scroll.

## Accessibility: built in

- The scrolling element is a region with an accessible name and tabIndex 0, so keyboard users can reach it and scroll with the arrow keys, Page Up and Page Down.
- The edge layers are aria-hidden and ignore the pointer, so they never take focus or block taps.
- Scrolling itself is the browser's own, so keyboard scrolling is unchanged.
- With reduced transparency, or without backdrop-filter, only a plain fade is drawn.
- The focus ring is drawn inside the box so the clipped edge does not hide it.

## Accessibility: what you need to do

- Give the region a label that says what scrolls, such as Conversation, so screen reader users hear it.
- Add padding of at least the fade size inside the content, so the first and last lines rest in clear space.
- Do not put anything people must read inside the fade zone only. Text there is softened on purpose.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| edge | `"top" \| "bottom" \| "both"` | `"both"` | Which edge softens. |
| size | `number` | `48` | Height of the fade zone in px. |
| children | `ReactNode` |  | The content that scrolls. |
| label | `string` | `"Scrollable content"` | Accessible name of the scrolling region. |
| className | `string` |  | Classes for the outer box. Give it a height, or place it in a cell that has one. |
| contentClassName | `string` |  | Classes for the element that scrolls. |

## States

- at the start: The top edge still shows its fade, so keep padding at the top of the content so the first line is not softened.
- reduced transparency: When the system asks for reduced transparency, only a plain fade from the page colour to clear is drawn, with no blur.
- no backdrop-filter: In a browser without backdrop-filter, the same plain fade is drawn.
- focus: The scrolling region shows a visible focus ring, drawn inside the box, when reached by keyboard.

## Tokens

- `--bg`

## Examples

### Both edges on a chat-like list

Scroll the list. Lines passing the top and bottom soften gradually. The padding inside keeps the first and last lines clear.

```tsx
<ScrollEdge label="Conversation" className="h-64 w-full max-w-md rounded-card border border-line">
  <ul className="flex flex-col gap-3 px-4 py-12 text-body leading-5">
    {lines.map((l, i) => (
      <li key={l} className={i % 2 ? "ml-8 rounded-card bg-sunken px-3 py-2" : "mr-8 rounded-card border border-line px-3 py-2"}>{l}</li>
    ))}
  </ul>
</ScrollEdge>
```

### Top edge only

Use this under a fixed header when the bottom has its own control. A taller fade makes a softer join.

```tsx
<ScrollEdge edge="top" size={72} label="Messages" className="h-64 w-full max-w-md rounded-card border border-line">
  <ChatList />
</ScrollEdge>
```

### Reduced transparency and the fallback

When the system asks for reduced transparency, or the browser has no backdrop-filter, the blur layers are not drawn. A plain fade from the page colour to clear is shown instead. Nothing is lost: the content still scrolls the same way. To see it, turn on Reduce transparency in your system settings.

```tsx
<ScrollEdge edge="bottom" size={40} label="Notes" className="h-48 w-full max-w-md rounded-card border border-line">
  <ChatList />
</ScrollEdge>
```

Source: src/atoms/ScrollEdge.tsx
