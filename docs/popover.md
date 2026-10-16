# Popover
A small panel that opens beside a button, for menus, pickers and short explanations.
Status: stable. Page: https://lkb00.github.io/tattva/#component-popover
Popover shows a button and, when open, a panel just below or above it. If the panel would run off the screen, it opens on the other side and stays a little away from the edges. When it opens, your cursor moves into the panel. When it closes, the cursor returns to the button and the panel fades out quickly. Menus and lists add arrow keys, Home and End, and Tab leaves the menu. It can manage itself, or your app can open and close it.
## When to use it

A small panel that opens beside a button, for menus, pickers and short explanations. Focus moves in when it opens and back when it closes, so keyboard users keep their place.

## Use it for

- A menu of actions behind a button.
- A list of options to pick from, such as a style or a size.
- A short explanation or a few settings that open from a button.

## Not for

- Something people must answer before going on. Use a dialog
- Actions on text the person has selected: use `selection-toolbar`

## Anatomy

- Button
- Panel

## Do

- Give the button its screen reader details, so it says whether the panel is open.
- Give the panel a name that says what it holds.
- Use a menu for a list of actions and a list box for a list of options, so arrow keys work.
- Keep panels narrower than the screen. A panel wider than the screen still runs off the right edge.
- Open upward near the bottom of a screen. Automatic flipping covers cases you did not plan for.

## Avoid

- Do not use it for something people must answer. Use a dialog.
- Do not put one popover inside another.
- Do not use an icon-only button without a name.
- Do not rely on pointing to open it.
- Do not use a menu or list box for content that is not a list of items. Use the default panel.

## On a phone

- Menus open as a bottom sheet with a backdrop on a narrow touch screen, kept within thumb reach and padded for the bottom safe area.
- Other roles, such as a dialog or listbox, stay anchored to the trigger unless you set phoneSheet; they are at least 224px wide and move to stay inside the screen edges.
- It closes when a finger touches outside it, and the sheet scrolls inside itself at up to 80% of the screen height.
- Give an anchored panel inside a scrolling or clipped parent the portal prop so it is not cut off.

## Accessibility: built in

- When the panel opens, focus moves into it: to the chosen or first item in a menu or list, or to the first control in other panels.
- Escape closes the panel and returns focus to the button.
- In menus and lists, the up and down arrows move between items and wrap around. Home and End jump to the ends, and unavailable items are skipped.
- In a menu or list, Tab closes it and moves on from the button.
- The panel has a name, and it flips to the other side when it would run off the screen.
- Closing is a quick plain fade in --dur-fast, faster than opening. The panel cannot be pressed while it fades. When people turn off motion in their system settings, it goes at once.

## Accessibility: what you need to do

- Spread triggerProps onto your button, so screen readers hear whether the panel is open.
- Give the button a name, even when it shows only an icon.
- Set role to "menu" for actions or "listbox" for options, and give each item the matching item role, so the arrow keys work.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| trigger (required) | `(api: PopoverTriggerApi) => ReactNode` |  | Render function. Receives open, toggle and triggerProps with aria-expanded, aria-haspopup and aria-controls. |
| children (required) | `ReactNode \| ((api: { close: () => void }) => ReactNode)` |  | Panel content. A function receives close. |
| label (required) | `string` |  | Accessible name for the panel. |
| align | `"start" \| "end"` | `"start"` | Which edge of the trigger the panel lines up with. |
| side | `"bottom" \| "top"` | `"bottom"` | Whether the panel opens below or above the trigger. |
| role | `"dialog" \| "menu" \| "listbox"` | `"dialog"` | Role on the panel, also used for aria-haspopup on the trigger. |
| open | `boolean` |  | Controlled mode. Omit to let the popover manage itself. |
| onOpenChange | `(open: boolean) => void` |  | Called when the panel opens or closes. |
| autoFocus | `boolean` | `true` | Moves focus into the panel when it opens. Menu and listbox panels focus the checked radio or selected option, or else the first enabled item. Dialog panels focus the first focusable element, or the panel itself if there is none. Set false when the opener manages focus. |
| flip | `boolean` | `true` | After the panel mounts it is measured. If the preferred side overflows the viewport and the other side has more room, the panel opens there. It is also kept 8px inside the left and right viewport edges. |
| portal | `boolean` | `false` | Draws the panel on the page itself (fixed position) so a scrolling or clipped parent can never cut it off. Use it for menus inside lists and side bars. The panel keeps its place as the page scrolls or resizes. |
| phoneSheet | `boolean` | `true for menus` | On a phone (a narrow touch screen) the panel opens as a bottom sheet with a backdrop, within thumb reach. On by default when role is menu. Set false to keep it floating. |
| className | `string` |  | Classes for the wrapper. |
| panelClassName | `string` |  | Classes for the panel, for example to set a width. |

## States

- open or closed: Set with the open prop.
- closing: After open turns false the panel stays for --dur-fast while it fades out, and it cannot be pressed. Under reduced motion it goes at once.

## Tokens

- `--surface-raised`
- `--border`
- `--shadow-lg`
- `--dur-fast`
- `--radius-overlay`

## Examples

### Basic panel

Give the button its screen reader details and open the panel on click.

```tsx
<Popover label="About credits"
  trigger={({ toggle, triggerProps }) => <Button variant="secondary" size="sm" onClick={toggle} {...triggerProps}>About credits</Button>}>
  <p className="p-2 text-body leading-5">Cost depends on duration.</p>
</Popover>
```

### A menu that closes when you pick

The panel can close itself when you pick something. Use a menu for a list of actions.

```tsx
<Popover label="Options" role="menu" align="end"
  trigger={({ toggle, triggerProps }) => <Button variant="secondary" size="sm" onClick={toggle} {...triggerProps}>Options</Button>}>
  {({ close }) => (
    <div className="flex flex-col">
      <button role="menuitem" className="rounded-xl px-3 py-1.5 text-left text-body leading-5 hover:bg-hover" onClick={close}>Rename</button>
      <button role="menuitem" className="rounded-xl px-3 py-1.5 text-left text-body leading-5 hover:bg-hover" onClick={close}>Duplicate</button>
    </div>
  )}
</Popover>
```

### Opens upward

Open upward when the button is near the bottom of the screen. If the panel still does not fit, it opens downward.

```tsx
<Popover label="Tips" side="top"
  trigger={({ toggle, triggerProps }) => <Button variant="ghost" size="sm" onClick={toggle} {...triggerProps}>Tips</Button>}>
  <p className="p-2 text-body leading-5">Press Esc to close.</p>
</Popover>
```

### Near the edge of the screen

A wide panel on a button at the right edge. It would run past the edge, so it shifts left to stay on screen.

```tsx
<div className="flex justify-end">
  <Popover label="Share options" panelClassName="w-72"
    trigger={({ toggle, triggerProps }) => <Button variant="secondary" size="sm" onClick={toggle} {...triggerProps}>Share</Button>}>
    <p className="p-2 text-body leading-5">Anyone with the link can view this. The panel shifts left to stay on screen.</p>
  </Popover>
</div>
```

Source: src/atoms/Popover.tsx
