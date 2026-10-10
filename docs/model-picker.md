# ModelPicker
A small button that opens a list for choosing how the assistant answers, with optional thinking time and limit messages.
Status: stable. Page: https://lkb00.github.io/tattva/#component-model-picker
ModelPicker shows the current choice on a small button. Opening it lists the options, each with a name, a one-line description and an optional tag. An optional switch below sets how long the assistant thinks. When Auto is picked, the button can show which option actually answered. When a limit is reached, those options are turned off, a line explains why and names the one used instead.
## When to use it

A compact button that opens a short list of ways the assistant can answer, each with a one-line description. It stays honest about what happened: it names the option that answered when Auto chose, and says why an option is off when a limit is reached.

## Use it for

- Letting people choose between a few answer modes, such as Fast and Thinking.
- Showing which option actually answered when Auto is picked.
- Explaining that a limit was reached and naming the option used instead.
- Setting how long the assistant thinks, with the optional switch.

## Not for

- Turning tools such as web search on or off: use `tool-menu`
- Two or three choices that should always be visible: use `segmented-control`
- A usage limit that needs its own message: use `rate-limit-notice`

## Anatomy

- Button
- Option list
- Option name
- Option description
- Tag
- Who answered line
- Limit reason line
- Thinking time switch

## Do

- Write a description that says when to choose each option.
- Whenever Auto is picked, show which option answered.
- Name the replacement when a limit is reached.
- Keep option names short enough to fit the button.

## Avoid

- Do not hide an option behind Auto with no way to pick it directly.
- Do not remove turned-off options. Show them with the reason.
- Do not use it for settings that are not a single choice. Use Switch or checkboxes.

## On a phone

- The trigger keeps its 32px height and has a 44px tap area on touch screens. It shortens a long model name with an ellipsis.
- On a phone the panel opens as a bottom sheet with a backdrop. On wider screens it is an anchored popover 20rem wide, never wider than the screen minus 2rem.
- Each model row and the thinking time options have a 44px tap area on touch screens.

## Accessibility: built in

- The options are a group of single choices named by the label, and screen readers hear which one is picked.
- Arrow keys move and pick, Home and End jump to the ends, and options that are off are skipped. Tab stops on one option only.
- The button says the label before the current choice and tells screen readers whether the list is open. On open, the cursor goes to the picked option, and Escape closes the list and returns to the button.
- Options that are off stay visible, with the reason written above the list.
- The list opens on the other side if it would run off the screen, and stays inside the screen edges.

## Accessibility: what you need to do

- Write a label that names what is being chosen, such as Model or Mode. Screen readers use it for the button and the list.
- When a limit is reached, write the reason in plain words and say when it resets, if you know.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| models (required) | `ModelOption[]` |  | Options with id, name, optional description, badge, auto and disabled. |
| value | `string` |  | Selected id. Omit for uncontrolled use. |
| defaultValue | `string` |  | Initial id when uncontrolled. Defaults to the first model. |
| onChange | `(id: string) => void` |  | Called when an enabled option is chosen. |
| label | `string` | `"Model"` | Accessible name for the trigger, the panel and the radio group. |
| routedId | `string` |  | Id of the model that answered. Shown only while the selected option has auto set. |
| routedText | `(modelName: string) => string` | `Answered by {name}` | Builds the line that names the answering model. |
| effortOptions | `SegmentOption<string>[]` |  | Choices for the thinking time control. Omit to hide it. |
| effortValue | `string` |  | Selected effort. Omit for uncontrolled use. |
| defaultEffort | `string` |  | Initial effort when uncontrolled. Defaults to the first option. |
| onEffortChange | `(value: string) => void` |  | Called when the effort changes. |
| effortLabel | `string` | `"Thinking time"` | Visible label and group name for the effort control. |
| limit | `ModelLimit` |  | Puts the picker in the limit-reached state: reason, limitedIds and fallbackId. |
| fallbackText | `(modelName: string) => string` | `Continuing on {name}.` | Builds the line that names the fallback model. |
| align | `"start" \| "end"` | `"start"` | Horizontal alignment of the panel. |
| side | `"bottom" \| "top"` | `"bottom"` | Side of the trigger the panel opens on. |
| triggerExtra | `ReactNode` |  | Content placed after the model name on the chip. |

## States

- open: Pressing the trigger opens a panel of model options; choosing one closes it.
- option disabled: Set disabled on a model, or list its id in limit.limitedIds, to dim it and make it unselectable.
- limit notice: Pass limit to show a note at the top of the panel saying why some models are unavailable and which one is used instead.
- routed: When the chosen model has auto set and routedId is passed, the trigger shows via the routed model and the panel says who answered.
- keyboard: Arrow keys, Home and End move between enabled models and select the one reached.
- focus: The trigger and the model options show a focus ring on keyboard focus.

## Tokens

- `--surface`
- `--surface-sunken`
- `--surface-raised`
- `--border`
- `--fg-muted`
- `--shadow-lg`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Modes with thinking time: An Auto option, two fixed options and a Standard or Extended switch.
- Auto picks for you: Auto is picked and Thinking answered. The button says so and the list repeats it.
- Usage limit reached: Thinking is turned off, the reason is shown and the replacement is named. Fast can still be picked.

Source: src/molecules/ModelPicker.tsx
