# MeterBar
A thin bar that shows how much of something is used, and turns amber past a set point.
Status: stable. Page: https://lkb00.github.io/tattva/#component-meter-bar
MeterBar is a thin bar that shows an amount out of a limit. It is dark by default and turns amber once it passes a set point. Use it for something with a limit, such as conversation space used. Show amber only when the person should act, and add words beside the bar that say why.
## When to use it

A thin bar for an amount out of a limit, such as space used in a chat. It stays dark and only turns amber past the point where the person should act.

## Use it for

- Space used in a conversation, or credits used in a plan.
- Any amount with a known limit that people may need to act on.
- A building block inside a larger meter that adds words around it.

## Not for

- A wait with no known end: use `spinner`
- Progress of a slow AI task: use `generation-progress`
- How full the chat is, with words and a Summarize button: use `context-meter`

## Anatomy

- Track
- Filled part

## Do

- Add words for the amount, so it makes sense when read aloud.
- Set a warning point only when the person can do something about it.
- Put words beside the bar that explain the warning.
- Set a limit for amounts that are not percents.

## Avoid

- Do not use it for a task with no known total. Use a moving indicator.
- Do not rely on amber alone for the warning.
- Do not use it for something with no limit.
- Do not announce every small change to screen readers.

## On a phone

- The bar fills the width of its container and is 6px tall, which is a display, not a tap target.
- Show the value as text beside it, since a thumb covers a bar this thin.

## Accessibility: built in

- Screen readers hear it as a meter with a name, a range and the current amount.
- When valueText is set, screen readers read it in place of the bare number.
- The grow-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Give it a label that says what is measured.
- Pass valueText with words for the amount, such as "68% of context".
- Put words beside the bar that say why it turned amber. The color change is not announced.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `number` |  | Current amount. The fill width is clamped between 0 and 100 percent of max. |
| max | `number` | `100` | Amount that fills the bar. |
| label (required) | `string` |  | Accessible name, such as Context used. |
| warnAt | `number` |  | Fraction of max, 0 to 1. At or above it the fill uses the attention color. |
| valueText | `string` |  | Text read out with the value, such as 68% of context. |
| className | `string` |  | Extra classes for the track. |

## States

- warning: When warnAt is set and value divided by max reaches it, the fill changes to the attention colour.

## Tokens

- `--border`
- `--fg`
- `--attention`
- `--dur-base`

## Examples

### Plain

A dark fill, as wide as the amount used out of the limit.

```tsx
<MeterBar label="Space used" value={40} valueText="40% of the space" />
```

### Past the warning point

At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why.

```tsx
<div className="w-64 space-y-1">
  <MeterBar label="Space used" value={85} warnAt={0.8} valueText="85% of the space" />
  <p className="text-small leading-4 text-attention-fg">85% used. Start a new chat soon.</p>
</div>
```

### A limit other than 100

Set a limit when the amount is not a percent.

```tsx
<MeterBar label="Credits used" value={30} max={120} valueText="30 of 120 credits" />
```

Source: src/atoms/MeterBar.tsx
