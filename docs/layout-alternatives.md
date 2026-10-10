# LayoutAlternatives
Other layouts for one slide, suggested by the AI and compared with the slide as it is. Preview without changing the deck, then apply one or keep the current.
Status: stable. Page: https://lkb00.github.io/tattva/#component-layout-alternatives
LayoutAlternatives shows the slide's current layout first and the AI's suggested layouts beside it. Focus or hover previews a layout on the slide without changing the deck; Enter, a mouse click or Apply layout commits it, and Undo takes it back. On touch a tap only previews, so nothing is applied by accident. A visible text mode promises what happens to the person's words: kept exactly, or shortened to fit with each option saying what it shortens. Layouts arrive one by one, a failed request says so with Try again, and when no layout is good enough it says so plainly and offers Edit text instead of weak options.
## When to use it

Lets people try other layouts for one slide safely: they see each one on the slide before anything changes, and their words are protected unless they say otherwise.

## Use it for

- A Layouts panel beside the slide stage in a deck editor.
- A bottom Sheet on a phone, opened from the slide.
- Any single item where the AI offers other arrangements of the same content.

## Not for

- Picking one of several fresh generations, such as images: use `variant-grid`
- Reviewing an AI edit that changed several slides: use `deck-change-review`
- Choosing between video takes: use `take-grid`

## Anatomy

- Title with AI mark
- Text mode (Keep my words, Shorten to fit)
- Text mode promise
- Current layout (always first)
- Suggested layouts with label and what changes
- Placeholders for layouts on the way
- Preview bar (Back to current, Apply layout)
- Applied row with Undo
- More layouts with cost
- No good layouts or failed notice

## Do

- Keep the current layout first, so going back is always one step.
- Say on the slide stage, in words, that a preview is not applied.
- Make the text mode visible and keep it until the person changes it.
- Show no options rather than weak ones, and offer Edit text.
- Say on each option what it changes about the words when the mode is Shorten to fit.

## Avoid

- Do not apply a layout on hover or focus. Previews never change the deck.
- Do not shuffle layouts in a way that drops the person's edits.
- Do not colour the slide drawings or the preview lime. Lime is only the AI mark and the placeholders' mark.
- Do not use amber for "layouts available". Suggestions are optional.

## On a phone

- Two layouts per row; three from a wider panel and four on a wide page.
- A tap previews a layout; the Apply layout button commits it, because touch has no hover.
- Buttons and layout tiles have a 44px touch area.
- Put it in a bottom Sheet on a phone.

## Accessibility: built in

- The layouts are a radio group with one tab stop. Arrow keys, Home and End move between layouts, and focus previews the layout.
- Enter applies the focused layout. Space previews it. Escape goes back to the current layout and moves focus to it.
- Each layout's name says whether it is the current one or applied, and includes what it changes.
- Previewing and Applied are written on the tile, not shown by border alone.
- A polite live region says only state changes: layouts ready, previewing a layout, back to original, applied, undone.
- Placeholders are hidden from screen readers; the live region says how many layouts are ready.
- A touch tap previews instead of applying, and Apply layout is a separate button.
- Tiles enter with Reveal, which does not move under reduced motion.

## Accessibility: what you need to do

- Show the preview on your slide stage when onPreview is called, and mark it as a preview in words. Never save a preview to the deck.
- Return null from your preview when onPreview(null) arrives, so Escape and Back to current really restore the slide.
- Only offer layouts that fit the chosen text mode. In Keep my words, leave out layouts that would cut text.
- Work out the cost of More layouts in your code and pass it in cost.
- On a phone, put the part in a bottom Sheet and keep the slide visible above it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| current (required) | `{ thumbnail: ReactNode; label?: string }` |  | The slide as it is now. Always the first option, labelled Current. |
| options (required) | `{ id: string; label: string; thumbnail: ReactNode; note?: string }[]` |  | Suggested layouts. label is the accessible name; note says what changes, such as "Shortens two points". |
| state (required) | `"loading" \| "partial" \| "ready" \| "failed" \| "none"` |  | Where the request is. none means the AI found no layout good enough. |
| loadingCount | `number` | `0` | Placeholders to draw for layouts still on the way, while loading or partial. |
| previewId | `string \| null` |  | The option previewed on the slide. null shows the current layout. |
| onPreview (required) | `(id: string \| null) => void` |  | Preview an option on your slide stage, or go back to the current layout with null. Never change the deck here. |
| onApply (required) | `(id: string) => void` |  | Apply an option to the slide: Enter, a mouse click or Apply layout. |
| appliedId | `string \| null` |  | The option just applied. Shows Applied and Undo. |
| onUndo | `() => void` |  | Shows Undo after applying. Restore the previous layout and clear appliedId. |
| textMode (required) | `"keep" \| "fit"` |  | keep: the person's words stay exactly. fit: the AI may shorten text to fit a layout. |
| onTextModeChange | `(mode: "keep" \| "fit") => void` |  | Shows the Keep my words and Shorten to fit control. Ask for new layouts when it changes. |
| onMore | `() => void` |  | Shows More layouts when ready, and Try again in the none state. |
| onRetry | `() => void` |  | Try again in the failed state. |
| onEditText | `() => void` |  | Edit text in the none state. |
| error | `string` |  | Plain reason in the failed state. |
| noneReason | `string` |  | Plain reason in the none state. |
| cost | `ReactNode` |  | What More layouts costs, shown beside it. |
| slideName | `string` |  | The slide, such as "slide 3". Used in the title and the group name. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Heading level of the title. |
| className | `string` |  | Extra classes for the panel. |

## States

- selected: Set with the current prop.
- status: Set with the state prop.
- error: Set with the error prop.

## Tokens

- `--surface`
- `--bg`
- `--sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--lime`
- `--on-lime`
- `--success-fg`
- `--danger-fg`
- `--radius-card`
- `--radius-control`
- `--dur-fast`
- `--ease-out`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Preview, apply and undo: Hover or Tab through the layouts: the slide on the left shows each one as a preview and the deck does not change. Enter or a click applies; Undo takes it back. Switch to Shorten to fit to ask again with one more option.
- Loading, some ready, failed and no good layouts: Placeholders hold the space while layouts are made. A failed request keeps the slide as it is and offers Try again. When nothing is good enough the part says so and offers Edit text.
- In a bottom sheet on a phone: Tap a layout to preview it on the slide, then press Apply layout. Closing the sheet drops the preview.

Source: src/organisms/LayoutAlternatives.tsx
