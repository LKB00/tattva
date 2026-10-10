# SlideStage
The large view of one slide at its true shape, scaled to fit, with its state and things to check.
Status: stable. Page: https://lkb00.github.io/tattva/#component-slide-stage
SlideStage shows the current slide at a fixed shape (16:9, 4:3, 1:1, 4:5 or 9:16) and scales it to the space without reflowing, so what the person sees is what will export. It covers viewing, editing, AI working, previewing a change, loading, partly built and failed, each in words. Things to check, such as text that does not fit or a number with no source, sit behind a quiet count that turns amber only when they stop presenting. An optional caption says what the AI changed, with Undo.
## When to use it

Shows one slide exactly as it will export, says what is happening to it, and points at anything to fix before presenting.

## Use it for

- The main view of a deck editor, beside the slide rail.
- Previewing a layout or an AI change before it is applied.
- Showing a slide that failed or is only partly built, with Try again.

## Not for

- Comparing a slide before and after an AI change: use `deck-change-review`
- A single generated image: use `media-frame`
- The list of all slides: use `slide-rail`

## Anatomy

- Slide name
- State in words
- Things to check count
- List of things to check
- Preview banner with Exit preview
- Frame at a fixed shape
- Working edge while the AI works
- Partly built note
- AI edit caption with Undo

## Do

- Lay out at the design size and let the stage scale it, so the view matches the export.
- Report text that does not fit as an issue instead of shrinking it.
- Say in the AI caption what was kept, such as "Your numbers were not changed".
- Use previewing for layouts and suggestions, and apply only from a separate choice.

## Avoid

- Don't use the AI colour on the slide itself. Generated slides use the person's theme.
- Don't make the issue count amber for optional suggestions.
- Don't let hovering or previewing change the slide.
- Don't animate the scaling or fly slides in.

## On a phone

- Fills the width and keeps its shape. It never causes sideways page scroll, and pinch-zoom still works.
- Portrait slides are capped by maxHeight (70dvh by default) so the whole slide stays on screen.
- The things-to-check count, Exit preview, Try again and Undo grow to 44px on touch screens. Rows in the issue list are 44px.

## Accessibility: built in

- The stage is a region named by label.
- The things-to-check count is a button with aria-expanded that opens a list; each issue is a button that moves focus to its target.
- The preview banner is a polite status. Escape in the stage exits the preview.
- Failed is an alert with the reason and Try again. Partly built is a polite status.
- The working edge announces its label once when the AI starts.
- States and issue severity are words with an icon, never colour alone.
- Scaling never animates; the preview cross-fade stops under reduced motion.

## Accessibility: what you need to do

- Give a label that names the slide, such as "Slide 3, Orders by month". It names the region.
- Give each issue's target element an id and pass it as targetId, so choosing the issue moves focus there.
- Mark an issue blocking only when it really stops presenting or export.
- Lay slide content out at the design size (960 wide for landscape, 540 wide for 9:16). Do not shrink text to make it fit; report overflow instead.
- Write the AI change caption in plain words and say what was kept.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | Names the region and shows at the top, such as "Slide 3, Orders by month". |
| ratio | `"16:9" \| "4:3" \| "1:1" \| "4:5" \| "9:16" \| "fluid"` | `"16:9"` | Slide shape. Fluid grows with its content and is not scaled. |
| state | `"viewing" \| "editing" \| "working" \| "previewing" \| "loading" \| "partial" \| "failed"` | `"viewing"` | What is happening to the slide, shown in words. |
| children | `ReactNode` |  | The slide, laid out at 960 wide (540 for 9:16). |
| issues | `StageIssue[]` |  | Things to check: kind, message, optional targetId and blocking. |
| onIssueSelect | `(issue: StageIssue) => void` |  | Called when an issue is chosen. Without it focus moves to targetId. |
| previewLabel | `string` | `"Previewing a change. Nothing has changed yet."` | Words in the preview banner. |
| onExitPreview | `() => void` |  | Shows Exit preview; Escape in the stage does the same. |
| workingLabel | `string` |  | What the AI is doing while working. |
| partialNote | `string` |  | What is missing while partly built. |
| errorMessage | `string` |  | Why it failed and what was kept. |
| onRetry | `() => void` |  | Shows Try again when failed or partly built. |
| aiChange | `{ summary: string; onUndo?: () => void }` |  | A caption saying what the AI changed, with an AI label and optional Undo. |
| maxHeight | `string` | `"70dvh"` | Tallest the frame may be, as a CSS length. |
| className | `string` |  | Extra classes on the region. |

## States

- status: Set with the state prop.
- viewing: The default: the slide and its name.
- editing: state="editing": an ink frame and "Editing".
- AI working: state="working": a working edge and the workingLabel in words.
- previewing: state="previewing": a neutral banner with Exit preview; Escape exits.
- loading: state="loading": a still placeholder at the slide's shape.
- partly built: state="partial": the slide with a "Partly built" note and Try the rest again.
- failed: state="failed": the reason, what was kept, and Try again.
- things to fix: A blocking issue turns the count amber: "1 thing to fix before you present".

## Tokens

- `--lime`
- `--attention-soft`
- `--attention-fg`
- `--danger-fg`
- `--unsure`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--border`
- `--surface`
- `--surface-sunken`
- `--dur-fast`
- `--shape-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Things to check and what the AI changed: A blocking issue (a number with no source) turns the count amber. Open it and choose the issue to move focus to that text on the slide. The caption says what the AI changed, with Undo.
- Every state: AI working wraps the frame in one calm working edge. Previewing shows a neutral banner, and nothing changes until a choice is made elsewhere; Escape exits. Partly built keeps what is ready. Failed says what was kept.
- Shapes: 4:5 and 9:16: Portrait slides are laid out at their own design size and capped in height, so they stay on screen.

Source: src/molecules/SlideStage.tsx
