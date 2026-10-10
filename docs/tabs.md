# Tabs
A row of tabs that switch between views, with arrow-key movement and optional panels.
Status: stable. Page: https://lkb00.github.io/tattva/#component-tabs
Tabs shows one view at a time out of several. Each tab can carry a count. You can pass a panel with each tab and Tabs shows only the active one, or you can leave panels out and draw the content yourself. The line or pill under the active tab slides to the new tab. The row scrolls sideways on narrow screens and keeps the active tab in view.
## When to use it

Switches between views that belong together on one page, such as Inbox, Sent and Drafts. The active tab is marked by more than colour, and keyboard users get one tab stop and arrow keys.

## Use it for

- Views of the same kind of content, like folders or report sections.
- Tabs with a count, such as unread items.
- Showing only one panel at a time to keep a page short.

## Not for

- Choosing a setting with two or three short options: use `segmented-control`
- Content that readers should open and close in place: use `collapsible`
- A list of actions: use `menu`

## Anatomy

- Tab list
- Tab
- Count
- Panel

## Do

- Keep the labels short, ideally one or two words.
- Use manual activation when showing a panel is slow or has a cost.
- Show a count only when it helps people choose, and keep it a plain number.
- Keep the same tab order every time the page loads.

## Avoid

- Do not nest tabs inside tabs.
- Do not use tabs to move through steps in order. Show the steps as a list.
- Do not disable a tab without explaining why elsewhere on the page.
- Do not put actions in the tab list. Use a Menu or Buttons.

## On a phone

- The row of tabs scrolls sideways when it is too wide, with no scrollbar, and the selected tab is scrolled into view.
- The row fades at an edge where more tabs are hidden.
- Each tab is 44px tall on touch screens and never wraps its label.
- The gap between underline tabs is smaller on a phone and grows from the sm breakpoint.

## Accessibility: built in

- The row is a tab list with a name. Each tab is a button with role tab, and screen readers say whether it is selected.
- Only the active tab is in the Tab order. Left and Right Arrow move between tabs and wrap around, and Home and End jump to the first and last.
- Disabled tabs are skipped by the arrow keys.
- The active tab points to its panel with aria-controls. The panel has role tabpanel and is named by its tab.
- Only the active panel is drawn, so hidden panels are not in the page.
- On touch screens each tab is 44px tall.
- The active tab uses a heavier line or fill as well as colour.
- The line or fill slides to the new tab in --dur-base on --ease-arrive. It does not slide when it is first placed, and it moves at once when people turn off motion in their system settings.
- In forced-colors mode the sliding line or fill is hidden, and the active tab gets a highlight-coloured border (underline) or background (pill) instead.

## Accessibility: what you need to do

- Give the tab list a label that says what the tabs choose between, such as "Mail folders".
- Keep tab names short and different from each other.
- Keep the value in your own state. If a tab opens a page, change the page address as well.
- If you draw the content yourself instead of passing panel, give your content role tabpanel and label it with the tab.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| tabs (required) | `{ id: string; label: ReactNode; count?: number; disabled?: boolean; panel?: ReactNode }[]` |  | The tabs in order. panel is drawn only while its tab is active. |
| value (required) | `string` |  | Id of the active tab. The component is fully controlled. |
| onChange (required) | `(id: string) => void` |  | Called with the tab id when a tab is clicked, or reached by arrow keys in auto mode. |
| label (required) | `string` |  | Accessible name of the tab list. |
| variant | `"underline" \| "pill"` | `"underline"` | Underline for page sections, pill for a small switch. |
| activation | `"auto" \| "manual"` | `"auto"` | auto picks a tab as soon as arrow keys reach it. manual only moves focus; Enter or Space picks it. |
| fill | `boolean` |  | Tabs share the full width instead of sizing to their label. |
| className | `string` |  | Classes for the outer wrapper. |

## States

- selected: The tab matching value gets a heavier underline (or a filled pill), stronger text and aria-selected. When value changes, the underline or pill slides to the new tab in --dur-base; the first placement does not slide. In forced colours the tab gets a highlight border or background instead.
- disabled: A tab with disabled looks dimmed, ignores clicks and is skipped by the arrow keys.
- hover: An unselected tab's text darkens under the pointer, and a pill tab gets a soft background.
- focus: A visible focus ring appears on the focused tab. Only the selected tab is in the Tab order.
- overflow: When the tabs are wider than the space, the list scrolls sideways without a scrollbar and keeps the selected tab in view.

## Tokens

- `--fg`
- `--fg-muted`
- `--border`
- `--surface-hover`
- `--accent`
- `--on-accent`
- `--dur-fast`
- `--dur-base`
- `--ease-arrive`
- `--focus-ring`
- `--radius-control`

## Examples

### Underline with counts

The default look. A count sits after the name. A disabled tab is skipped by the arrow keys.

```tsx
function Example() {
  const [tab, setTab] = useState("inbox");
  return (
    <Tabs
      label="Mail folders"
      value={tab}
      onChange={setTab}
      tabs={[
        { id: "inbox", label: "Inbox", count: 12 },
        { id: "sent", label: "Sent" },
        { id: "drafts", label: "Drafts", count: 3 },
        { id: "archive", label: "Archive", disabled: true },
      ]}
    />
  );
}
```

### Pill, filling the width

Use the pill look for a small switch inside a card. fill makes the tabs share the width.

```tsx
function Example() {
  const [range, setRange] = useState("week");
  return (
    <Tabs
      label="Time range"
      variant="pill"
      fill
      value={range}
      onChange={setRange}
      tabs={[
        { id: "day", label: "Day" },
        { id: "week", label: "Week" },
        { id: "month", label: "Month" },
      ]}
    />
  );
}
```

### With panels and manual activation

Each tab brings its panel and only the active panel is drawn. With manual activation the arrow keys move focus and Enter or Space picks the tab.

```tsx
function Example() {
  const [tab, setTab] = useState("summary");
  return (
    <Tabs
      label="Report"
      value={tab}
      onChange={setTab}
      activation="manual"
      tabs={[
        { id: "summary", label: "Summary", panel: <p className="text-body leading-5 text-fg">Three tasks finished and one is waiting for you.</p> },
        { id: "steps", label: "Steps", count: 4, panel: <p className="text-body leading-5 text-fg">Four steps ran. None of them changed a file.</p> },
        { id: "sources", label: "Sources", panel: <p className="text-body leading-5 text-fg">Two pages were read.</p> },
      ]}
    />
  );
}
```

Source: src/molecules/Tabs.tsx
