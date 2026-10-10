# StarterGallery
A first screen that says what the assistant can do, and offers ideas to start with.
Status: stable. Page: https://lkb00.github.io/tattva/#component-starter-gallery
StarterGallery is for when nothing has been started yet. It opens with one sentence on what the assistant can and cannot do. Then it offers a few ideas as buttons, then template cards with a title, a short note and an optional category. A Shuffle button can sit beside the templates heading. Every control is a real button you can reach with Tab.
## When to use it

The first screen, before anything exists. It says plainly what the assistant can and cannot do, then offers ideas and templates so people do not face an empty box.

## Use it for

- A first visit, or any time nothing has been made yet.
- Offering three to six ideas next to the box where people type.
- A set of templates people can start from.

## Not for

- Ideas shown under a reply, partway through a chat: use `suggestion-chips`
- A list or search that has nothing to show: use `empty-state`

## Anatomy

- Heading
- What it can and cannot do
- Starting ideas
- Templates heading with a Shuffle spot
- Template cards

## Do

- Say what the assistant cannot do as well as what it can.
- Offer three to six starting ideas next to the box where people type.
- Write template notes that say what the person gets.
- Show it on the first screen and when nothing exists yet, not everywhere.

## Avoid

- Do not list more than six ideas. Move the rest into templates.
- Do not use the opening sentence for advertising.
- Do not use amber on cards. Nothing here needs action.
- Do not hide the box where people type behind the gallery.

## On a phone

- The templates show in one column below 640px, then two columns, then three from 1024px.
- Each template card is a full-width button, and the intent buttons wrap across the width.
- The intent buttons keep their size and have a 44px tap area on a touch screen.

## Accessibility: built in

- The section is named by its heading.
- Ideas and templates are lists, so screen readers say how many there are.
- Ideas and template cards are real buttons, reached with Tab and used with Enter or Space.
- A template card is read as its category, then its title, then its note.
- When the templates change, for example after Shuffle, screen readers hear it.
- If the gallery goes away after an idea or template is chosen, keyboard focus moves to the nearest message box. Pass focusAfterChoose to choose another place.

## Accessibility: what you need to do

- Give the Shuffle button a clear name, such as "Show other templates".
- Write the statement as one plain sentence that is clear when heard on its own.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| heading | `string` | `"What would you like to make?"` | Serif heading and accessible name of the section. |
| statement (required) | `ReactNode` |  | One sentence on what the assistant can and cannot do. |
| intents (required) | `StarterIntent[]` |  | Starter intents with an id and a label. Three to six works best. |
| onIntent (required) | `(id: string) => void` |  | Called when an intent is pressed. |
| templates | `StarterTemplate[]` | `[]` | Cards with an id, title, description and optional category. The section is hidden when empty. |
| onTemplate | `(id: string) => void` |  | Called when a template card is pressed. |
| intentsLabel | `string` | `"Start with"` | Label above the intents. |
| templatesLabel | `string` | `"Templates"` | Label above the templates. |
| randomize | `ReactNode` |  | Slot beside the templates label, for a Randomize button. |
| className | `string` |  | Extra classes for the section. |

## States

- no templates: Without templates, the templates section and its heading are left out.
- hover: A template card gets a stronger border and a soft background under the pointer.
- focus: Intent buttons and template cards show a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--surface-hover`
- `--border`
- `--border-strong`
- `--fg-muted`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Ideas and templates: A sentence on what it can do, three ideas and three templates with categories.
- With a Shuffle button: Add a button for shuffling. Here it swaps the templates.
- Ideas only: Leave out the templates for a shorter first screen.

Source: src/organisms/StarterGallery.tsx
