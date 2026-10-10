# StudioPage
A creative studio: write a prompt and see options on the left, the one you pick on the right.
Status: stable. Page: https://lkb00.github.io/tattva/#component-studio-page
StudioPage is for tools that make something, not just reply in chat. The left side has a prompt box and a grid of options. Placeholder tiles keep the grid steady while options load. The right side shows the chosen draft, with its version history. Only a narrow icon rail sits at the edge, so the two columns get almost the full width.
## When to use it

A worked example of a tool that makes things. The prompt and options sit on the left and the chosen draft with its versions on the right, so people compare and refine without losing their place.

## Use it for

- A starting point for an image, design or writing studio.
- Seeing how PromptBox, VariantGrid and CanvasPanel fit in a SplitCanvasTemplate.
- Seeing loading slots and a version switcher work together.

## Not for

- A plain question and answer: use `thread-page`
- A long task with approvals: use `workflow-page`

## Anatomy

- Prompt box
- Grid of options
- Canvas
- Version switcher
- AI badge

## Do

- Use it when people refine something and compare options.
- Reserve placeholder tiles so the grid keeps its layout while options load.
- Keep the draft on the canvas, where it stays visible while the prompt changes.
- Label AI-made content with the AI badge.

## Avoid

- Do not use it for plain questions and answers. Use the thread page.
- Do not hide version history. People expect to go back after making new options.
- Do not show more than a few options per round. The grid is made for four.

## On a phone

- The sidebar opens from a Menu button in a side sheet on a phone, and below the lg breakpoint the options and the draft stack in one column that scrolls as one.
- The draft panel is at least 22.5rem tall when stacked, so the user scrolls down past the options to reach it.
- The page is 45rem tall at most and never taller than the phone screen height.

## Accessibility: built in

- The two sides are named "Make options" and "Draft" for screen readers.
- The options are a group of choices with one Tab stop. Arrow keys move and pick, and the picked one shows a check mark.
- While busy, the Generate button reads "Generating…".
- The version buttons are named "Previous version" and "Next version", and the draft also says which version is shown in text.
- On narrow screens the two sides stack, with the draft after the options.

## Accessibility: what you need to do

- Announce when new options are ready. The grid and the prompt box do not.
- Give each option a label that describes it, not just a letter.
- Announce version changes if people need to hear them.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| (none) | `-` |  | This page takes no props. It is a reference composition with sample content, meant to be copied and adapted. |

## States

- generating: Pressing Generate shows two options plus two shimmering placeholder tiles for about two seconds.

## Tokens

- `--surface`
- `--border`
- `--lime (Generate)`
- `--shadow-md (canvas)`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Full page: Click Generate to see the busy state and placeholder tiles, then switch versions at the top of the canvas.

Source: src/pages/StudioPage.tsx
