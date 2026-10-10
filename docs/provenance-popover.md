# ProvenancePopover
A label that says content was made with AI, and opens a short note on how.
Status: stable. Page: https://lkb00.github.io/tattva/#component-provenance-popover
ProvenancePopover shows an AI label in plain words, with the details one click away. The panel can show which tool made it, the date, what the AI did, whether a person edited it, why you are seeing it, and a link to more. Anything you do not know is left out.
## When to use it

A small AI label in plain words that opens a short note on how the content was made. The label is always visible and the details are one click away, so it informs without getting in the way.

## Use it for

- Marking text, images or files that AI made or changed.
- Explaining which tool made something, when, and whether a person edited it.
- Telling people why they are seeing AI content.

## Not for

- A plain AI label with nothing more to explain: use `ai-badge`
- Showing where a single fact came from: use `citation-hover-card`
- Showing how sure the AI is about an answer: use `confidence-indicator`

## Anatomy

- AI label
- Panel title
- Made with and date
- What the AI did
- Edited by a person
- Why you are seeing this
- Link to more

## Do

- Show the label first and keep the details one click away.
- Fill in only what you are sure of. Missing details are left out.
- Say whether a person edited it, if you keep track.
- Explain why in one sentence.

## Avoid

- Do not label content AI did not touch. Too many labels weaken trust.
- Do not rely on the green color to show it is AI. The words do that.
- Do not put long policy text in the panel. Link to it.
- Do not make up details your system does not record.

## On a phone

- The label is a button. On touch screens it keeps its small badge size and has a 44px tap area.
- On a phone the panel opens as a bottom sheet with a backdrop, within thumb reach. On wider screens it opens under the label, flips above if there is no room below, and stays inside the screen edges.
- Tap outside the panel to close it. The View full details link is small text with no 44px target.

## Accessibility: built in

- The label is a button with words on it, so it is never only an icon.
- It tells screen readers whether the panel is open, and opens with Enter, Space, a click or a tap.
- Escape closes the panel and returns to the label. Clicking outside also closes it.
- The panel is named by its title, and the details are laid out as lists.

## Accessibility: what you need to do

- Write a label that says what happened in plain words, such as AI-generated or Edited with AI.
- Translate the row labels with rowLabels if your product is not in English.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label | `string` | `"AI-generated"` | Visible text of the label and the accessible name of the trigger. |
| madeWith | `string` |  | Tool or model that produced the content. |
| date | `string` |  | When it was made, as display text. |
| actions | `string[]` |  | What the AI did, one short phrase each. |
| editedByPerson | `boolean` |  | Whether a person changed it afterwards. Omit to hide the row. |
| why | `string` |  | One line on why the person is seeing this content. |
| detailsHref | `string` |  | Link to a fuller record. The link is hidden when omitted. |
| detailsLabel | `string` | `"View full details"` | Text of the details link. |
| title | `string` | `"About this content"` | Panel heading and accessible name of the panel. |
| rowLabels | `{ madeWith; date; actions; edited; yes; no }` |  | Replaces the row labels for localisation. |
| open / onOpenChange | `boolean / (open: boolean) => void` |  | Controlled mode. Omit both for self-managed state. |
| align / side | `"start" \| "end" / "bottom" \| "top"` | `"start" / "bottom"` | Which edge of the label the panel hangs from. |

## States

- hover: The trigger pill gets a stronger tint under the pointer.
- focus: The trigger shows a focus ring on keyboard focus.
- edited by a person: Pass editedByPerson to add a row saying whether a person edited it.

## Tokens

- `--lime`
- `--on-lime`
- `--surface-raised`
- `--surface-sunken`
- `--border`
- `--shadow-lg`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Every detail filled in: Every detail filled in. Click, tap, or press Enter or Space on the label to open it.
- Minimal: Only a tool and a reason. Use this when that is all you know.

Source: src/molecules/ProvenancePopover.tsx
