# AgentStatusIcon
A small icon that shows what an assistant is doing right now, with a different shape for each state.
Status: stable. Page: https://lkb00.github.io/tattva/#component-agent-status-icon
AgentStatusIcon shows whether an assistant is working, needs you, is waiting, is done, has failed or has stopped. Each state has its own shape, so you do not need to see color. The working icon spins, and stays still if you turn motion off. Amber is only for "needs you", because only then must a person act.
## When to use it

A tiny picture of an assistant's state that still reads in a crowded row. Each state has its own shape so it works without color, and only "needs you" is amber, because only then must a person act.

## Use it for

- Beside a task or run name, to show its state at a glance.
- In a compact header or row where there is no room for words.
- With showLabel on, when there is room to write the state as well.

## Not for

- A run that people press to open its details: use `background-run-chip`
- A general label, such as a category or a count: use `badge`
- Showing how far along one long job is: use `generation-progress`

## Anatomy

- Icon
- Visible text (optional)

## Do

- Put the icon next to the task name so they are read together.
- Show the text where there is room, such as a page header.
- Use "needs you" only when a person must act.

## Avoid

- Don't use it for anything except what an assistant is doing.
- Don't change its color. The color is part of the meaning.
- Don't put the words only in a hover tip.

## On a phone

- It is a small icon that keeps its size on a phone, 16px by default.
- With showLabel the words sit beside the icon in 12px text, so the status is not shown by the icon alone.
- It has no tap action, so wrap it in a button if it must open something.

## Accessibility: built in

- Without visible text, screen readers hear the state as the icon's name, such as "Needs input".
- With showLabel on, the icon is hidden from screen readers and the words are read once.
- Each state has its own shape, so color is never the only clue.
- The working icon spins, and stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Pass label in the person's language when your app is not in English.
- Turn on showLabel instead of writing the state beside the icon yourself, so it is not read twice.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| status (required) | `"working" \| "needs-input" \| "idle" \| "completed" \| "failed" \| "stopped"` |  | Which state to show. Selects the shape, the tone and the default label. |
| size | `number` | `16` | Glyph width and height in px. |
| label | `string` |  | Replaces the default accessible text, for example to translate it. |
| showLabel | `boolean` | `false` | Render the label as visible text beside the glyph. |
| className | `string` |  | Extra classes. With showLabel they go on the wrapper, otherwise on the svg. |

## States

- status: Set with the status prop.

## Tokens

- `--attention`
- `--success`
- `--danger`
- `--fg-muted`
- `--fg-subtle`

## Examples

### All six states

Each state has its own shape. The icon has a name for screen readers, so it works alone in a crowded row.

```tsx
<div className="flex gap-4">
  <AgentStatusIcon status="working" />
  <AgentStatusIcon status="needs-input" />
  <AgentStatusIcon status="idle" />
  <AgentStatusIcon status="completed" />
  <AgentStatusIcon status="failed" />
  <AgentStatusIcon status="stopped" />
</div>
```

### With words beside it

Show the text when there is room. A screen reader reads the text once and skips the icon.

```tsx
<div className="flex flex-wrap gap-4">
  <AgentStatusIcon status="needs-input" showLabel />
  <AgentStatusIcon status="completed" showLabel />
  <AgentStatusIcon status="failed" showLabel label="Failed to start" />
</div>
```

Source: src/atoms/AgentStatusIcon.tsx
