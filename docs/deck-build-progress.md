# DeckBuildProgress
Progress for a deck the AI builds slide by slide: slides ready out of the total, the real step, Stop that keeps what is done, and Retry per failed slide.
Status: stable. Page: https://lkb00.github.io/tattva/#component-deck-build-progress
DeckBuildProgress counts slides ready out of the total with one bar segment per slide, and shows the real current step your app reports. Each slide is listed with its status in words; ready slides can be opened at once and failed slides have their own Retry. Stop says how many slides it keeps. When the job runs on the server it tells the person they can leave the page. If some slides fail the result is "Partly ready", not "Failed".
## When to use it

Shows honestly how far a deck build has got, lets people use and keep what is done, and makes failed slides easy to fix without starting again.

## Use it for

- Building a deck from an approved outline, where each slide takes a few seconds.
- Redoing many slides at once, such as a new theme across the deck.
- A phone screen, as a compact bar above the slide strip.

## Not for

- One image or one file being made: use `generation-progress`
- A long agent run with many kinds of steps: use `activity-trace`
- A job that is out of sight in the background: use `background-run-chip`

## Anatomy

- Status icon and heading
- Count line
- Segment bar (one per slide)
- Current step
- Leave-the-page note
- Actions
- Slide list toggle
- Slide rows (thumbnail, number, title, status, Open or Retry)

## Do

- Count real slides: "3 of 12 slides ready". People can check that.
- Let people open ready slides while the rest build.
- Say what Stop keeps, and offer to build the rest later.
- Treat one failed slide as that slide's problem, with its own Retry.

## Avoid

- Do not show a made-up percentage or a timer that is not tied to the job.
- Do not ask people to keep the tab open. Run the job on the server.
- Do not animate slides flying in or play a celebration when the deck is ready.
- Do not colour the whole card lime. Lime marks only the slide the AI is making right now.

## On a phone

- Set compact for a phone: one status line, the bar and the main action, with the slide list behind a Show slides button.
- Slide rows are at least 48px tall, and Open, Retry and Show slides get a 44px touch area.
- The bar keeps one segment per slide and shrinks the gaps, so it fits at 320px wide.

## Accessibility: built in

- The bar is a progressbar named "Slides ready" with a value text such as "3 of 12 slides ready, 1 failed".
- A polite live region speaks only when the job changes state or a slide fails, never for each step or each ready slide. It stays quiet on first render.
- Every slide status is a word (Waiting, Building, Ready, Failed, Not built), with an icon for Ready and Failed.
- Open and Retry buttons name their slide, such as "Retry slide 5, Price change in July".
- The slide list sits behind a button with aria-expanded.
- The pulsing dot on the slide being built holds still under reduced motion, and segments change colour without movement.

## Accessibility: what you need to do

- Pass the real step from your build job. Never invent steps or a percentage to look busy.
- Keep the job running on the server if the person leaves, and only set background when that is true.
- When the person comes back to a finished job, show what happened with ReEntryRecap instead of replaying the progress.
- Move focus to the deck or the first ready slide when the person presses Open.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| state (required) | `"queued" \| "building" \| "partial" \| "failed" \| "cancelled" \| "done"` |  | Where the whole job is. Use partial when the job ended with some slides made and some failed; failed only when nothing usable exists. |
| slides (required) | `DeckBuildSlide[]` |  | Every slide in outline order: id, title, status ("waiting" \| "building" \| "ready" \| "failed") and an optional thumbnail kind. All counts come from here. |
| currentStep | `string` |  | The real step the job is on, such as "Making the chart for slide 4". Shown while building. |
| queuePosition | `number` |  | Place in the queue while queued. |
| background | `boolean` | `false` | Says the person can leave the page and the deck keeps building. Set it only when that is true. |
| error | `string` |  | Why the whole build failed, in plain words. |
| onStop | `() => void` |  | Stops the build and keeps the ready slides. The button reads "Stop and keep 3 slides". |
| onRetrySlide | `(slideId: string) => void` |  | Retries one failed slide. Adds Retry to its row. |
| onRetryFailed | `() => void` |  | Retries every failed slide, or the whole build when state is failed. |
| onResume | `() => void` |  | After a stop, builds the slides that were not made. |
| onOpen | `(slideId?: string) => void` |  | Opens the deck, or one ready slide. Adds Open to ready rows and Open deck when the job ends. |
| compact | `boolean` | `false` | One-row layout for a phone, with the list folded away. |
| deckTitle | `string` |  | Name of the deck, shown in the heading. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the heading in the full layout. |
| className | `string` |  | Extra classes for the card. |

## States

- status: Set with the state prop.
- error: Set with the error prop.
- queued: "Waiting to start", with the queue position when given. The bar is empty.
- building: Count, bar and the current step. The slide being made has a lime segment and a lime-edged thumbnail.
- partial: Build ended with failed slides: amber "Needs you" line, Retry the failed slides, Open deck.
- failed: Nothing usable was made: error text and Try the build again.
- cancelled: "Stopped. 3 slides kept, 5 not built", with Build the other slides and Open deck.
- done: "All 8 slides are ready" with Open deck.
- compact: One-row phone layout with the slide list folded. Set compact.

## Tokens

- `--surface`
- `--sunken`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--lime`
- `--danger`
- `--danger-soft`
- `--danger-fg`
- `--attention-fg`
- `--success-fg`
- `--radius-card`
- `--radius-control`
- `--dur-base`
- `--dur-fast`
- `--ease-out`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A live build: Eight slides build one by one. Slide 5 fails and the rest carry on, so the job ends Partly ready. Try Stop part way: it keeps the ready slides and offers to build the rest.
- Every state: Queued, building, partly ready, failed, stopped and ready. Each one is written in words; the colour only repeats it.
- Compact, on a phone: One line, the bar and Stop. The slide list opens on request.

Source: src/organisms/DeckBuildProgress.tsx
