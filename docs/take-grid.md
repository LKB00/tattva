# TakeGrid
A set of video takes where running and finished takes sit together, with one combined announcement, keyboard moves, and empty and loading views.
Status: stable. Page: https://lkb00.github.io/tattva/#component-take-grid
TakeGrid lays out TakeCards at one ratio, so rows stay even while some takes are still running. One polite live region speaks for the whole grid, such as "2 of 4 takes ready, 1 take blocked, not charged", so a screen reader is not interrupted by every card. Arrow keys move between takes, Enter opens a finished take and Space selects. It can pick one take or select several, group takes under their prompt, and switch between large and small tiles.
## When to use it

Lets people watch several takes arrive and choose between them, without the page jumping or a screen reader talking over itself.

## Use it for

- The results area of a video studio, with takes from one or more prompts.
- Choosing the one take to keep, in pick mode.
- Choosing several takes to download or delete, in select mode.

## Not for

- Generated images or text options: use `variant-grid`
- A gallery of uploaded or finished images: use `media-grid`
- The versions of one take: use `take-versions`

## Anatomy

- Summary line (live region)
- Selected count
- Tile size control (optional)
- Group heading (prompt)
- Take cards
- Still placeholders (loading)
- Empty state

## Do

- Add each take to the grid as soon as it is requested, so its place never moves.
- Keep one ratio per grid.
- Group by prompt when one session runs several prompts.
- Use pick mode when the next step needs exactly one take.

## Avoid

- Do not let every card speak. The grid already speaks one summary.
- Do not shimmer every pending tile. The working edge on each running take is enough.
- Do not autoplay takes in the grid.
- Do not paint the grid lime. Lime is only for the working edge and the AI label.

## On a phone

- Columns follow the grid's own width: one column for wide takes on a phone, two for tall 9:16 takes.
- Small tiles hide the prompt and lineage, so the name, status and charge still fit.
- Every button and select control has a 44px tap area on touch screens.

## Accessibility: built in

- The grid is a named group. One polite status region gives the summary, such as 2 of 4 takes ready, 1 take blocked, not charged. It changes only when a status changes.
- Each take is an article and one tab stop for the grid. Arrow keys move between takes, Up and Down keep the column, Home and End jump.
- Enter opens a finished take. Space selects or picks it. A hidden hint on each take says so.
- The = and - keys change tile size only while focus is in the grid and never inside a text field. Turn them off with shortcuts={false}.
- Buttons inside each take (Play, Cancel, Try again, More) stay in the Tab order.
- Group headings are real headings. New takes fade in with a short stagger, and appear at once under reduced motion.

## Accessibility: what you need to do

- Give the grid a label that names the work, such as Harbour opening takes.
- Keep each take's status and charge up to date from your job service; the summary follows.
- Offer a visible way to change tile size if people rely on it, with showDensityControl.
- Move focus to the player when onOpen opens one, and back to the take when it closes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| takes (required) | `TakeGridItem[]` |  | TakeCard props for each take, plus an optional request for grouping. |
| mode | `"pick" \| "select"` | `"select"` | pick chooses one finished take. select chooses several of any status. |
| value (required) | `string[]` |  | Selected take ids. |
| onChange (required) | `(ids: string[]) => void` |  | Called with the new selection. |
| ratio | `"16:9" \| "9:16" \| "1:1" \| "4:3" \| "21:9"` | `"16:9"` | One ratio for every tile. 9:16 gets more columns. |
| groupBy | `"request" \| "none"` | `"none"` | A heading per prompt, from each take's request. |
| density | `"comfortable" \| "compact"` |  | Tile size. Controlled when onDensityChange is passed. |
| onDensityChange | `(d: TakeGridDensity) => void` |  | Called by the tile size control and the = and - keys. |
| showDensityControl | `boolean` | `false` | Shows Large and Small above the grid. |
| onOpen | `(id: string) => void` |  | Opens a finished take, from Enter or its poster. |
| loadingCount | `number` | `0` | Draws this many still placeholders for takes on the way. |
| empty | `ReactNode` |  | Replaces the default empty state. |
| label | `string` | `"Takes"` | Accessible name of the grid. |
| shortcuts | `boolean` | `true` | The = and - keys change tile size while focus is in the grid. Set false to turn them off. |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of group headings. Take names sit one level below. |
| className | `string` |  | Classes for the outer box. |

## States

- empty: No takes and no loadingCount: an EmptyState that says how to start.
- loading: loadingCount: still placeholders at the grid's ratio, with a hidden Loading line.
- mixed: Running and finished takes together; the summary counts each kind.
- selected: value: selected takes show a check mark and the selected count.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--fg-muted`
- `--dur-base`
- `--ease-out`
- `--touch-target`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Four takes arriving: Press Next update to move the jobs along. The summary line changes only when a status changes, and it is the only thing spoken. Try the arrow keys, Enter, Space, and the = and - keys while a take has focus.
- Pick one take, grouped by prompt: Tall 9:16 takes in small tiles, under the prompt that made them. Only finished takes can be picked; the failed take keeps its Try again.
- Empty and loading: With nothing yet, an empty state says how to start. While takes are on the way, still placeholders hold their space. They do not shimmer.

Source: src/organisms/TakeGrid.tsx
