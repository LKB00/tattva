# DeckChangeReview
Review an AI edit that changed several slides: before and after for each slide, Keep or Undo each one or all at once, then save the kept changes as one version.
Status: stable. Page: https://lkb00.github.io/tattva/#component-deck-change-review
DeckChangeReview lists every slide an AI request changed, each with what changed in one line, the slide before and after, and Keep or Undo. Undecided slides are the amber "needs you" state, and the header counts in words: "1 of 4 slides kept, 3 left to review". Keep all and Undo all handle the whole set. Nothing reaches the deck until Done, which saves the kept changes as one version that can be restored as a whole. On a narrow screen it shows one slide at a time with Previous and Next, and a Before and After switch instead of two pictures.
## When to use it

Lets people take the parts of a deck-wide AI edit they like and leave the rest, instead of accepting or losing it all.

## Use it for

- After a deck-wide request such as "Make it more visual" or "Tighten the wording".
- Reviewing AI speaker notes or rewrites across several slides before they are saved.
- Any staged edit to an ordered set of visual items that each need their own decision.

## Not for

- Reviewing code changes by file and hunk: use `diff-view`
- Choosing another layout for one slide: use `layout-alternatives`
- Switching one text field between the AI version and your edit: use `revert-toggle`
- Restoring an older version of the whole deck: use `version-history`

## Anatomy

- Title with AI mark and slide count
- The request in the person's words
- Review status (amber while slides need a decision)
- Per slide: number, title, what changed, state badge
- Before and After (side by side or switch)
- Keep and Undo
- Pager on narrow screens
- Keep all, Undo all
- Done with the number of changes
- Saved notice with Version history

## Do

- Stage deck-wide AI edits and review them here before they touch the deck.
- Write each change's summary in plain words: what moved, what was cut, what was added.
- Save the kept changes as one version named after the request, so it can be undone as a whole.
- Keep amber for slides that still need a decision.

## Avoid

- Do not apply a deck-wide edit first and offer only a global undo.
- Do not force all-or-nothing: always allow keeping some slides.
- Do not colour the After picture or kept slides lime. Lime only marks that the After picture was made by the AI.
- Do not pick a decision for the person when they press Done; ask them to decide the slides left.

## On a phone

- Below 480px wide (layout auto) it shows one slide at a time with Previous and Next.
- On a narrow screen Before and After become a switch, so each picture fills the width.
- Buttons have a 44px touch area.
- Keep all, Undo all and Done stay together under the slide.

## Accessibility: built in

- The panel is a section named by its title, with a heading per slide one level below.
- Keep and Undo are toggle buttons with aria-pressed, grouped and named by the slide's number and title.
- Each slide's state is a written badge (Needs review, Kept, Undone) with an icon, not colour alone.
- A polite live region says each decision and what is left, such as "Slide 5 kept. 2 left to review.", and when the deck is saved.
- Done stays focusable while slides are left; pressing it explains in words what to do instead of failing silently.
- Before and After pictures are hidden from screen readers; the one-line summary carries the change.
- Keyboard order is slide by slide, then Keep all, Undo all and Done.
- The only motion is a fast colour change on the slide border.

## Accessibility: what you need to do

- Stage the AI edit; do not write it to the deck until onDone. Save the kept changes as one version named after the request.
- Give each change a one-line summary of what really changed, written by your code from the edit, not a guess.
- Draw before and after from the real slides. The pictures are hidden from screen readers, so the summary must carry the meaning.
- Set status to applying while saving and applied when saved, and pass onOpenHistory so the whole edit can be restored.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| request (required) | `string` |  | What the person asked the AI, in their words. Shown in the header and in the saved version's name. |
| changes (required) | `{ slideId: string; slideNumber: number; title: string; before: ReactNode; after: ReactNode; summary: string; state: "proposed" \| "kept" \| "rejected" }[]` |  | Each changed slide. rejected shows as Undone. |
| onChange (required) | `(slideId: string, state: "proposed" \| "kept" \| "rejected") => void` |  | Keep or Undo on one slide. Pressing the chosen button again returns the slide to proposed. |
| onKeepAll (required) | `() => void` |  | Keep every change. |
| onRejectAll (required) | `() => void` |  | Undo every change. |
| onDone (required) | `() => void` |  | Save the kept changes as one version. Only called once no slide is left to review. |
| status | `"reviewing" \| "applying" \| "applied"` | `"reviewing"` | applying locks the decisions and shows a busy Done. applied shows the saved notice. |
| view | `"side-by-side" \| "toggle"` | `"side-by-side"` | Before and After next to each other, or one picture with a switch. Narrow screens always use the switch. |
| layout | `"auto" \| "list" \| "pager"` | `"auto"` | All slides in a column, or one at a time. auto uses the pager when the part is under 480px wide. |
| onOpenHistory | `() => void` |  | Shows Version history in the saved notice. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Heading level of the title. Each slide is one level below. |
| className | `string` |  | Extra classes for the panel. |

## States

- status: Set with the status prop.

## Tokens

- `--surface`
- `--bg`
- `--border`
- `--fg`
- `--fg-muted`
- `--lime`
- `--on-lime`
- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--success-fg`
- `--radius-card`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Keep or undo each slide: Four slides changed by "Make it more visual". Keep or Undo each one; the header counts what is left. Done only applies once every slide has a decision, then saves one version.
- One slide at a time on a phone: layout="pager" (or auto on a narrow screen) shows one slide with Previous and Next and a Before and After switch.
- Needs review, all reviewed, saving and saved: Amber only while a slide still needs a decision. The toggle view shows one picture with a Before and After switch.

Source: src/organisms/DeckChangeReview.tsx
