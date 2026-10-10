# AILabel
A small lime tag that says content was made by AI and explains how. Once a person edits the content, it becomes an undo button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-ai-label
AILabel marks content as made by AI. Pressing it opens a small note with up to four parts: overview, details, links and buttons. It only labels and explains. It never starts AI work. The level setting picks where it sits: on a feature, a message, a field or an image. After an edit, the lime color goes away and an icon button brings back the AI version.
## When to use it

A small lime tag that marks content as made by AI and opens a note explaining how. Once a person edits the content it turns into an undo button, because the content is no longer purely AI.

## Use it for

- A box, message, field or image whose content the AI made.
- Explaining what the AI did, with details, links or buttons.
- Letting people go back to the AI version after they edit it.

## Not for

- A button that starts AI work: use `button`
- A simple mark with no explanation: use `ai-badge`
- A full record of where content came from: use `provenance-popover`

## Anatomy

- Lime tag
- AI mark
- Text
- Explanation note
- Undo button

## Do

- Put one label on the whole box, not one on every line.
- Keep the label away from the edge of the box.
- Use the buttons part for things like Learn more or Turn off.
- Set edited to true as soon as a person changes the content, so the undo button appears.
- In onRevert, restore the AI version and set edited back to false.

## Avoid

- Use the label as a button that starts AI work.
- Put it on content a person wrote.
- Make the label amber. Amber is only for when a person has to act.
- Push the label right up against the edge of a box.

## On a phone

- On touch screens the pill keeps its size and has a 44px tap area. The revert button grows to 44px square.
- The explainer opens on tap and closes by tapping outside, and its panel is at most the screen width minus 2rem.
- Buttons in the Actions section wrap onto more lines on a narrow screen.

## Accessibility: built in

- The tag is a real button. Screen readers hear its words, then "About this AI content", and whether the note is open.
- Opening the note moves the keyboard into it. Escape closes it and returns the keyboard to the tag; tabbing away or clicking outside also closes it.
- Each part of the note is named, such as Overview and Details.
- The undo button shows only an icon, but screen readers hear "Revert to AI version".
- The pressable area is at least 24 pixels tall, and 44 on touch screens.

## Accessibility: what you need to do

- Give buttons and links you put in the note their own clear words.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| level | `"feature" \| "message" \| "field" \| "image"` | `"feature"` | Where the label sits. Feature is the upper right of a container. Field is the right side, vertically centred. Message and image are our own placements. |
| size | `16 \| 18 \| 22` | `18` | Pill and mark size. Match the adjacent text size. |
| text | `string` | `"AI"` | Word in the pill. |
| placed | `boolean` | `false` | Apply absolute placement for the level. The parent must be positioned. |
| overview | `ReactNode` |  | Toggletip section: what the AI did. |
| details | `ReactNode` |  | Toggletip section: specifics for this instance. |
| resources | `ReactNode` |  | Toggletip section: links. |
| actions | `ReactNode` |  | Toggletip section: buttons. The label itself never triggers AI work. |
| edited | `boolean` | `false` | Drops the tint and shows the icon-only revert button. |
| onRevert | `() => void` |  | Called when revert is pressed. The app restores the AI version. |
| revertLabel | `string` | `"Revert to AI version"` | Accessible name of the revert button. |
| popoverLabel | `string` | `"About this AI content"` | Accessible name of the toggletip panel. |
| className | `string` |  | Extra classes for the wrapper. |

## States

- hover: The lime pill darkens slightly under the pointer.
- focus: A visible focus ring appears on the label button on keyboard focus.
- open: Pressing the label opens a popover with the overview, details, resources and actions you pass, or a default line if none are passed.
- edited: Pass edited to replace the pill with a small revert button that calls onRevert.
- placed: Pass placed to pin the label to a corner or edge of its parent, depending on level.

## Tokens

- `--lime`
- `--lime-hover`
- `--on-lime`
- `--border`
- `--surface-raised`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Feature container: Sits at the upper right of a box, a little away from the edge.
- Toggletip sections: All four parts filled in. Buttons are plain buttons and links are links. Escape or a click outside closes the note.
- Edited, with revert: After an edit, the tag turns into an icon button named Revert to AI version. Pressing it brings the tag back.
- Sizes: Match the size to the text around it.

Source: src/molecules/AILabel.tsx
