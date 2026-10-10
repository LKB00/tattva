# DiagramFigure
Wraps a diagram with a caption, a full description and a way to view its source.
Status: stable. Page: https://lkb00.github.io/tattva/#component-diagram-figure
DiagramFigure gives any diagram a short name, a visible caption, a full description and an optional written version. If you give it the source, it adds a View source button that shows text you can copy. ProcessDiagram uses it, and so can any chart or image.
## When to use it

Wraps any diagram, chart or complex picture so it has a short name, a visible caption and a full description. A complex picture needs more than one line of text, so the full description sits on the page for everyone.

## Use it for

- A chart or drawing that needs more explanation than a short name.
- A diagram made from text, where people may want to view or copy the source.
- A picture that needs a written alternative, such as a numbered list of its steps.

## Not for

- A flow of steps and arrows: use `process-diagram`
- A decorative picture with nothing to explain

## Anatomy

- Figure
- Diagram
- Caption
- Full description
- Written version
- View source button

## Do

- Name the diagram in the label and point to the description.
- Show the full description to everyone.
- Offer the source when the diagram is made from text.
- Wrap charts and images that need more than a short name.

## Avoid

- Do not hide the full description in a pop-up.
- Do not repeat the caption in the label.
- Do not wrap decorative images.
- Do not rely on a hidden description alone.

## On a phone

- The diagram scrolls sideways inside its own box if it is wider than the screen, and the box is focusable by keyboard.
- The padding is 16px on a phone and 20px from 600px wide, and the caption and long description wrap under the diagram.
- The View source button has a 44px tap area on a touch screen, and the source code scrolls sideways inside its block.

## Accessibility: built in

- It is a figure named by your short label, with a visible caption.
- The full description and the written version are ordinary text on the page, readable by everyone.
- The View source button tells screen readers whether the source is shown or hidden.
- A wide diagram scrolls inside its own box, which can be reached by keyboard, so the page never scrolls sideways.

## Accessibility: what you need to do

- Write a label that names the diagram and says the full description follows. Do not repeat the caption.
- Write a full description that gives the same information as the picture.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Short alt. Becomes the figure's aria-label. |
| caption (required) | `string` |  | Visible caption. |
| description | `ReactNode` |  | Long description shown on the page. |
| alternative | `ReactNode` |  | Text alternative, such as an ordered list. |
| source | `string` |  | Textual definition. Enables the View source toggle. |
| sourceLanguage | `string` | `"text"` | Language label of the source block. |
| children (required) | `ReactNode` |  | The diagram. |

## States

- source open: Pass source to show a View source button that reveals the source in a code block and changes to Hide source.
- scrolling: A diagram wider than the figure scrolls sideways and can be focused with the keyboard.

## Tokens

- `--surface`
- `--border`
- `--code-bg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A simple diagram
- With a written version

Source: src/molecules/DiagramFigure.tsx
