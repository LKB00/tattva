# ChartLegend
A key that explains each color, dash and marker in a chart, in the chart's order. It can also switch lines on and off.
Status: stable. Page: https://lkb00.github.io/tattva/#component-chart-legend
ChartLegend lists each line or bar with the same color, dash and marker the chart uses. Items follow the chart's order. They can become buttons that show or hide a line. Charts draw their own key when they have two or more lines. Use this one for custom layouts or a key shared by several charts.
## When to use it

A key that shows the same color, dash and marker as each line or bar, in the chart's order. It can also turn lines on and off.

## Use it for

- One key shared by several charts.
- A custom layout where the key sits apart from the chart.
- Letting people show or hide lines: pass onToggle.

## Not for

- A chart with only one line. The title names it
- A LineChart or stacked BarChart on its own. They draw their own key

## Anatomy

- Sample (line with dot, or color block)
- Name

## Do

- Show a key for two or more lines, and none for one.
- Keep the key in the same order as the lines or stack.
- Let a hidden line keep its color. Hiding one line must not recolor the others.
- Hide the line in the chart when its item is turned off. The key only tells you through onToggle.

## Avoid

- Don't color the name text. The sample beside it shows which is which.
- Don't make the key the only way to tell lines apart. With four or fewer, name the lines at their ends too.
- Don't add a key for one line. The title names it.

## On a phone

- The legend wraps onto more lines when the chart is narrow.
- When the items are toggle buttons they are 24px tall. On touch screens they keep that size and have a 44px tap area.

## Accessibility: built in

- It is a list named "Legend" by default, and every item has a written name.
- With onToggle, each item is a button that screen readers hear as pressed or not, with the word "shown" or "hidden".
- The color samples are hidden from screen readers, because the name says the same thing.
- From the third item on, a dash pattern and a marker shape back up the color.

## Accessibility: what you need to do

- List items in the same order as the chart's lines or stack.
- Give it a label that says which chart it belongs to when a page has more than one key.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| items (required) | `LegendItem[]` |  | Items in the chart's series or stack order. Each has id, label and an optional style. |
| kind | `"line" \| "bar"` | `"line"` | Line shows the dash and marker. Bar shows a rounded swatch. |
| hidden | `string[]` | `[]` | Ids currently hidden. Only used with onToggle. |
| onToggle | `(id: string) => void` |  | Makes items toggle buttons. Pressed means shown. |
| label | `string` | `"Legend"` | Accessible name for the list. |
| className | `string` |  | Extra classes on the list. |

## States

- hidden series: An item whose id is in hidden is shown struck through and dimmed.
- toggle: Pass onToggle to turn each entry into a button that shows or hides its series.
- hover: A toggle entry gets a soft background under the pointer.
- focus: A toggle entry shows a focus ring on keyboard focus.

## Tokens

- `--chart-1`
- `--chart-2`
- `--chart-3`
- `--chart-4`
- `--chart-5`
- `--surface`
- `--fg-muted`
- `--fg-subtle`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A key with dashes and dots: The first two lines are solid with round dots. From the third on, the dash and dot shape change too, not only the color.
- A key for bars: Use this for bars and stacks. List items in the order the stack is read.
- Switch lines on and off: Pressed means the line is shown. A hidden line keeps its place and color, and its name is crossed out.

Source: src/organisms/ChartLegend.tsx
