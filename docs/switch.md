# Switch
An on-off switch with a name for screen readers. It can be disabled and can carry a hidden explanation.
Status: stable. Page: https://lkb00.github.io/tattva/#component-switch
Switch turns a setting on or off right away, like turning web search on. Your code keeps track of whether it is on. When on, the track is dark. When off, it is gray. The knob slides across. The area you can press is larger than it looks, so it is easy to hit.
## When to use it

Turns one setting on or off the moment it is pressed, with no save step. The knob position and the track color both show the state, so color is not the only clue.

## Use it for

- A setting that applies right away, like web search or memory.
- A row in a settings list, with the setting's name beside it.
- A setting that is locked: disable it and give the reason.

## Not for

- An action, like sending or deleting: use `button`
- A choice between more than two options: use `segmented-control`
- An icon action that shows a pressed state: use `icon-button`

## Anatomy

- Pressable area
- Track
- Knob
- Hidden explanation (for screen readers)

## Do

- Use it for settings that apply right away, with no save step.
- Show a visible label next to it and give the switch the same name.
- Name the setting, not the action. Write "Web search", not "Turn on web search".
- Keep the on-or-off value in your own code and pass it back as checked.

## Avoid

- Do not use a Switch for a choice that needs a confirm step. Use a checkbox or a form.
- Do not use it for an action. Use a Button.
- Do not make the on state amber. The track is dark when on.
- Do not disable a switch without saying why. Give the reason in the explanation or nearby text.
- Do not rely on the hidden explanation for visible help text. Only screen readers hear it, so show any help text yourself.

## On a phone

- On a touch screen the switch gets a hit area of at least 44px by 44px, while the track stays 20px tall.
- With a visible label, tapping the label also toggles the switch.
- Put the switch and its label on one row with room to spare, so two switches never sit closer than 44px.

## Accessibility: built in

- Screen readers call it a switch and say whether it is on or off.
- It is a real button, so the Tab key reaches it and Enter and Space flip it.
- The description is read after the name and state.
- The pressable area is bigger than the track, and bigger still on touch screens.
- A disabled switch is skipped by the Tab key, and screen readers call it unavailable.

## Accessibility: what you need to do

- Give it a label that names the setting, such as "Web search". A visible label beside it does not name it.
- When it is disabled, say why in description and in visible text nearby.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| checked (required) | `boolean` |  | Current state. The component is fully controlled. |
| onChange (required) | `(v: boolean) => void` |  | Called with the opposite of checked when the switch is activated. |
| label (required) | `string` |  | Accessible name, applied as aria-label. When children are given, the children are the name instead and label is not used. |
| children | `ReactNode` |  | Visible label beside the switch. Pressing it flips the switch, and it becomes the accessible name. |
| labelPosition | `"start" \| "end"` | `"end"` | Which side of the switch the children sit on. Only matters when children are given. |
| disabled | `boolean` |  | Dims the switch, removes it from the tab order and blocks onChange. |
| description | `string` |  | Extra context announced after the name. Rendered as screen reader text and linked with aria-describedby. |
| id | `string` |  | Id on the button, for a visible label that uses htmlFor. |
| className | `string` |  | Classes for the button. The hit area is the button, so margins and alignment apply to it. |

## States

- selected: Set with the checked prop.
- disabled: Set with the disabled prop.

## Tokens

- `--accent`
- `--border-strong`
- `--dur-fast`
- `--focus-ring`

## Examples

### Controlled switch

Your code keeps the on-or-off value and updates it when the switch is pressed.

```tsx
function Example() {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} label="Web search" />;
}
```

### In a settings row

The switch has no words of its own. Put a visible label beside it and give it the same name.

```tsx
function Example() {
  const [search, setSearch] = useState(true);
  const [memory, setMemory] = useState(false);
  return (
    <div className="flex w-72 flex-col gap-3 text-body leading-5 text-fg">
      <div className="flex items-center justify-between">
        <span>Web search</span>
        <Switch checked={search} onChange={setSearch} label="Web search" />
      </div>
      <div className="flex items-center justify-between">
        <span>Memory</span>
        <Switch checked={memory} onChange={setMemory} label="Memory" />
      </div>
    </div>
  );
}
```

### Disabled with a description

A disabled switch looks faded and cannot be changed. The explanation is read out after the name, so say why the setting is unavailable.

```tsx
<div className="flex w-72 items-center justify-between text-body leading-5 text-fg">
  <label htmlFor="memory-switch">Memory</label>
  <Switch id="memory-switch" checked={false} onChange={() => {}} label="Memory"
    disabled description="Turned off by your workspace admin." />
</div>
```

### With a visible label

Pass the words as children. They sit beside the switch, pressing them flips it, and a screen reader uses them as the name.

```tsx
function Example() {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} label="Web search">Web search</Switch>;
}
```

Source: src/atoms/Switch.tsx
