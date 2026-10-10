# DataFreshness
Says how fresh the numbers are, in words and an icon.
Status: stable. Page: https://lkb00.github.io/tattva/#component-data-freshness
DataFreshness is a small label for the age of data: live, delayed, stale, simulated or closed. It always uses words and an icon, so colour is never the only cue. Delayed and stale use the calm unsure tone. If you pass a time, it works out live or stale by itself.
## When to use it

Tells people whether to trust a number as it is, or check its age first.

## Use it for

- Beside a price or a chart that updates.
- Marking demo or simulated data.
- Showing that a market is closed.

## Not for

- A general status tag: use `badge`
- A line of case or order state: use `status-line`
- A level or progress value: use `meter-bar`

## Anatomy

- Dot or icon
- Label
- Hidden live message (stale only)

## Do

- Show it whenever numbers can be old, delayed or made up.
- Pass delayMinutes with the real delay.
- Use simulated for demo data.

## Avoid

- Do not mark stale data in a warning or danger tone.
- Do not use it as a general badge.
- Do not pass a status of live when the feed is down.

## On a phone

- It stays on one line and fits its text, so it works in a header or a card on a narrow screen.
- It shows the status in words and an icon, so nothing depends on hover.

## Accessibility: built in

- It is a plain span with words, so it is not a live region.
- Every status has words and a dot or icon. Colour is never the only cue.
- A hidden polite message is read once, only when the status changes to stale.
- The pulsing dot only pulses when motion is allowed. Otherwise it is still.

## Accessibility: what you need to do

- Place it next to the numbers it describes.
- Pass asOf in ISO time when you want it worked out for you.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| status | `"live" \| "delayed" \| "stale" \| "simulated" \| "closed"` |  | The status to show. If left out, it is worked out from asOf and now: live until staleAfter seconds, then stale. |
| asOf | `string` |  | When the data was last updated, in ISO time. |
| now | `string` |  | The current time in ISO, for docs and tests. By default the real time, refreshed every second while the status is worked out. |
| delayMinutes | `number` | `15` | Minutes shown in the delayed label. |
| staleAfter | `number` | `60` | Seconds after which computed data counts as stale. |
| className | `string` |  | Classes for the span. |

## States

- status: Set with the status prop.
- live: A pulsing dot shows with the word Live. The dot is still with reduced motion.
- becomes stale: When a worked-out status turns stale, a hidden polite message is read once.
- no time: With no status and no valid asOf, it reads Stale.

## Tokens

- `--sunken`
- `--line`
- `--fg-muted`
- `--unsure-soft`
- `--unsure-fg`
- `--up`
- `--radius-control`

## Examples

### Each status

Live has a pulsing dot. The others have an icon and their own words.

```tsx
<div className="flex flex-wrap gap-2"><DataFreshness status="live" /> <DataFreshness status="delayed" delayMinutes={15} /> <DataFreshness status="stale" asOf="2026-10-07T09:57:00Z" now="2026-10-07T10:00:00Z" /> <DataFreshness status="simulated" /> <DataFreshness status="closed" /></div>
```

### Worked out from the time

No status is passed. With a fixed now, 4 seconds is live and 3 minutes is stale.

```tsx
<div className="flex flex-wrap gap-2"><DataFreshness asOf="2026-10-07T09:59:56Z" now="2026-10-07T10:00:00Z" /> <DataFreshness asOf="2026-10-07T09:57:00Z" now="2026-10-07T10:00:00Z" /></div>
```

### With a price

Put it next to the number it describes.

```tsx
<div className="flex items-center gap-3"><Price value={2874.15} label="Reliance price" className="text-title-xs leading-7 text-fg" /> <DataFreshness status="delayed" delayMinutes={15} /></div>
```

Source: src/atoms/DataFreshness.tsx
