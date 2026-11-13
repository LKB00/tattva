# Splitter
A draggable bar between two panes that people can also move with the keyboard.
Also known as: resizable, resizable panels, split view, split pane, divider.
Status: stable. Page: https://lkb00.github.io/tattva/#component-splitter
Splitter is only the bar. You draw the two panes and set the size of the first from the value. Dragging, the arrow keys, Home and End change that value. A double click or Enter can collapse the first pane if you handle onToggle.
## When to use it

Lets people change how much room a side pane or panel gets. It works with a mouse, a finger and the keyboard.

## Use it for

- A resizable sidebar next to the main area.
- A split between an editor and its output.
- A pane people can collapse with a double click.

## Not for

- Showing or hiding content without resizing: use `collapsible`
- Switching between views: use `tabs`

## Anatomy

- Bar
- Line
- Hit area

## Do

- Put the bar in a flex row or column between the two panes.
- Set min and max so neither pane can disappear by accident.
- Save the size so it comes back next visit.
- Offer a button as well when a pane can collapse.

## Avoid

- Do not expect it to size the panes. You set the first pane from value.
- Do not leave out the label.
- Do not use it to switch views. Use Tabs.
- Do not make the first pane smaller than its content needs without a way to bring it back.

## On a phone

- It is dragged with a finger, and the handle gets a wider invisible touch area on touch screens.
- The drag handles pointer events only and stops the page from scrolling while the finger is on the handle.
- Arrow keys and double click do not exist on a phone, so offer a button that does the same job as onToggle.
- The value, min and max are pixels that you pass in, so choose limits that leave room on a 360px screen.

## Accessibility: built in

- The bar has role separator with aria-orientation, aria-valuenow, aria-valuemin and aria-valuemax, and can be focused with Tab.
- Arrow keys along the bar's axis resize by step. Shift makes the step four times larger. Home goes to min and End goes to max.
- Enter calls onToggle when you pass it.
- Dragging uses pointer capture, so the drag keeps working if the pointer leaves the bar. It works with mouse, pen and touch.
- The size is always held between min and max.
- The bar is 12px wide, and 44px wide on touch screens through an invisible larger target.
- The line darkens on hover, focus and drag, and the focus ring is the global one. The cursor shows col-resize or row-resize.

## Accessibility: what you need to do

- Give the bar a label that names what it resizes, such as "Resize sidebar".
- Draw the panes yourself and size the first from the same value. Splitter does not lay anything out.
- Clamp saved sizes when you restore them, and offer a way to reset.
- If a pane can collapse, tell people how, because the double click and Enter are not visible.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| direction (required) | `"horizontal" \| "vertical"` |  | horizontal is a vertical bar between left and right panes. vertical is a horizontal bar between top and bottom panes. |
| value (required) | `number` |  | Size of the first pane in px. |
| onChange (required) | `(px: number) => void` |  | Called with the new size, already clamped between min and max. |
| min (required) | `number` |  | Smallest size of the first pane in px. |
| max (required) | `number` |  | Largest size of the first pane in px. |
| label (required) | `string` |  | Accessible name of the bar. |
| onToggle | `() => void` |  | Called on double click and on Enter. Use it to collapse or restore the first pane. Without it neither does anything. |
| step | `number` | `16` | Keyboard step in px. Shift multiplies it by 4. |
| className | `string` |  | Classes for the bar. In a flex row it fills the height; in a flex column it fills the width. |

## States

- hover: The line darkens when the pointer is over the bar.
- dragging: While the bar is pressed and moved, the line is thicker and uses the accent colour.
- focus: A visible focus ring appears on the bar when you reach it with the keyboard.
- at limit: At min or max the size stops changing, and aria-valuenow stays at that limit.

## Tokens

- `--border`
- `--border-strong`
- `--accent`
- `--dur-fast`
- `--focus-ring`

## Examples

### Sidebar and main area

Horizontal means a vertical bar between left and right panes. The first pane gets its width from the value.

```tsx
function Example() {
  const [w, setW] = useState(160);
  return (
    <div className="flex h-40 w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg">
      <div style={{ width: w }} className="shrink-0 overflow-hidden bg-sunken p-3">Sidebar ({w}px)</div>
      <Splitter direction="horizontal" label="Resize sidebar" value={w} onChange={setW} min={96} max={300} />
      <div className="min-w-0 flex-1 p-3">Main area. Drag the bar, or focus it and press the arrow keys.</div>
    </div>
  );
}
```

### Top and bottom

Vertical means a horizontal bar between top and bottom panes. The value is the height of the top pane.

```tsx
function Example() {
  const [h, setH] = useState(90);
  return (
    <div className="flex h-56 w-full max-w-lg flex-col overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg">
      <div style={{ height: h }} className="shrink-0 overflow-hidden bg-sunken p-3">Editor ({h}px)</div>
      <Splitter direction="vertical" label="Resize editor" value={h} onChange={setH} min={48} max={160} />
      <div className="min-h-0 flex-1 p-3">Output</div>
    </div>
  );
}
```

### Collapse with double click or Enter

onToggle runs on a double click and on Enter. Here it hides the first pane and brings it back at its old size.

```tsx
function Example() {
  const [w, setW] = useState(160);
  const [saved, setSaved] = useState(160);
  const toggle = () => {
    if (w === 0) setW(saved || 160);
    else { setSaved(w); setW(0); }
  };
  return (
    <div className="flex h-40 w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg">
      <div style={{ width: w }} className="shrink-0 overflow-hidden bg-sunken">
        <div className="w-40 p-3">Files</div>
      </div>
      <Splitter direction="horizontal" label="Resize file list" value={w} onChange={setW} onToggle={toggle} min={0} max={240} />
      <div className="min-w-0 flex-1 p-3">Double click the bar, or press Enter on it, to {w === 0 ? "show" : "hide"} the file list.</div>
    </div>
  );
}
```

Source: src/molecules/Splitter.tsx
