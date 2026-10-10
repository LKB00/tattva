# ProcessDiagram
A flow chart of steps and arrows, with a written version for people who cannot see it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-process-diagram
ProcessDiagram draws steps left to right, or top to bottom when space is tight. Shape and label carry meaning: a pill starts, a hexagon is a decision, a double outline ends, and a dashed box with an exclamation mark needs a person. It also has a short name, a written description, a step-by-step list and a way to view the source.
## When to use it

Draws a short process as steps and arrows, where shape and label carry the meaning. It always comes with a written version, so people who cannot see the drawing get the same information.

## Use it for

- Explaining how a request moves from start to result.
- A process with a decision or a step that needs a person.
- A diagram whose text source people may want to copy.

## Not for

- Events with times: use `timeline`
- Live progress of an agent's steps: use `step-timeline`
- A chart or picture that is not a flow of steps: use `diagram-figure`

## Anatomy

- Figure
- Steps
- Arrows
- Step detail line
- Shape key
- Written version
- View source button

## Do

- Write the description first and draw the diagram second.
- Keep labels to a few words.
- Give each step a short sentence of detail.
- Keep the source viewable and copyable.

## Avoid

- Do not show meaning with color alone.
- Do not draw arrows between distant steps. Neighboring steps only.
- Do not use more than about eight steps.
- Do not leave out the written version.

## On a phone

- When the row of steps is wider than the container, the diagram switches to a single vertical column.
- Tap a step to read its detail below the diagram. Steps are 56px tall and 132px wide.
- The text alternative and the view-source button stay under the diagram, and the button has a 44px tap area on a touch screen.

## Accessibility: built in

- Each step can be reached with Tab, and screen readers hear its number, kind and name, such as "2. Step: Plan steps".
- Focusing or clicking a step shows its detail in a line below, and screen readers announce it.
- A numbered written version lists every step and where it leads, and a key explains each shape in words.
- Arrows are hidden from screen readers, because the written version says where each step leads.
- The selected step gets a darker outline, not only a color change.

## Accessibility: what you need to do

- Write a label that names the diagram and says a full description follows.
- Write a description in plain sentences that says what the diagram shows.
- Give each step a one-sentence detail, because it is read out when the step is focused.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| nodes (required) | `ProcessNode[]` |  | Each node has id, label, optional kind (start, step, decision, end, attention) and optional detail. |
| edges | `ProcessEdge[]` | `in order` | Arrows with from, to and an optional label. Draw them between neighbouring nodes. |
| label (required) | `string` |  | Short alt. Names the diagram and says the description follows. |
| caption (required) | `string` |  | Visible caption. |
| description | `ReactNode` |  | Long description, visible to everyone. |
| source | `string` | `generated` | Replaces the generated Mermaid-style definition. |

## States

- node kinds: Set kind on a node to draw it as a start pill, step box, decision hexagon, end box or dashed attention box.
- selected node: Focusing or clicking a node outlines it and shows its detail in the line below the diagram.
- narrow: When the container is too narrow for one row, the nodes stack top to bottom.
- focus: Each node can be reached with the keyboard.

## Tokens

- `--surface`
- `--border-strong`
- `--lime`
- `--attention`
- `--attention-soft`
- `--fg-subtle`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- How a request is handled: Tab to a step to read its detail. Open View source for the text version.
- With labeled branches: Arrows can carry short labels such as yes and no.

Source: src/organisms/ProcessDiagram.tsx
