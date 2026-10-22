# ParameterPanel
A set of choices for making something with AI, with a live cost and a Generate button.
Also known as: settings panel, generation settings, controls panel.
Status: stable. Page: https://lkb00.github.io/tattva/#component-parameter-panel
ParameterPanel shows one control for each setting: a choice between a few options, shape buttons, style buttons, a number, or a repeat code with a Fixed switch. When you give it a cost, the cost under the controls updates as settings change, and screen readers hear it. Put it next to where people type their request, so the cost is clear before anything is made.
## When to use it

Gathers the settings for one thing being made, with the cost shown above Generate. People can change settings while they can still see what it will cost.

## Use it for

- Settings for one image, video or other result, next to where the request is typed.
- Showing a cost that updates as the settings change.
- Letting people fix a repeat code so they can get similar results again.

## Not for

- Settings that apply to the whole app
- Actions on a result that already exists: use `variation-actions`
- Choosing which AI model to use: use `model-picker`

## Anatomy

- Title
- Settings
- Cost
- Generate button

## Do

- Show the cost before making anything, so people can change settings first.
- Keep the list short. Put the settings people change most at the top.
- Add a hint on the repeat code that says what it does and does not promise.
- Work out the cost from the same settings that Generate uses.
- Set busy while the result is being made, so Generate turns off and shows it is working.

## Avoid

- Do not use amber for the cost. Cost is just information until it blocks something.
- Do not bury the Generate button below a long list of settings.
- Do not keep the settings inside the panel. Your app owns them.
- Do not use it for settings that apply to the whole app. It is for one creation.

## On a phone

- The panel fills the width, and the option chips wrap onto new lines.
- Switches and number boxes grow to 44px tall on a touch screen, and the number boxes are 16px so the page does not zoom. Chips keep their size and have a 44px tap area.
- Option descriptions are set as a title only, which a finger cannot show, so put anything people must read in the label or hint.
- The cost line and Generate button stay on one row at the bottom.

## Accessibility: built in

- The panel is a form named by its title, and Generate submits it, so Enter in a number box generates.
- Each group of options is named by its label. Arrow keys move and choose, and Tab stops only on the chosen option.
- Shape options say the ratio in words. The small drawing beside them is hidden from screen readers.
- The Fixed switch and the number boxes are named from their labels.
- Screen readers hear the new cost when it changes, without losing their place.

## Accessibility: what you need to do

- Pass estimateCost when there is a cost, so screen readers hear it change.
- Write labels that make sense on their own. Each control is named from its label, and the hint is not read with it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| parameters (required) | `ParameterSpec[]` |  | Schema in display order. Each entry has an id, a label, an optional hint and a kind of segmented, aspect, presets, number or seed. |
| values (required) | `Record<string, string \| number \| boolean \| null>` |  | Current value for each parameter id. A seed is a number when Fixed is on and null when it is off. |
| onChange (required) | `(values: ParameterValues) => void` |  | Called with a new values object whenever one control changes. |
| onGenerate (required) | `(values: ParameterValues) => void` |  | Called with the current values when the form is submitted. Not called while busy. |
| estimateCost | `(values: ParameterValues) => number` |  | Returns the cost for the current values. Without it the readout is empty. |
| formatCost | `(cost: number) => string` | ``About ${cost} credits`` | Formats the readout text. |
| title | `string` | `"Settings"` | Heading, also the accessible name of the form. |
| generateLabel | `string` | `"Generate"` | Text on the submit button. |
| busyLabel | `string` | `"Generating…"` | Button text while busy. |
| busy | `boolean` |  | Disables Generate and shows a spinner. |
| className | `string` |  | Extra classes for the form, for width. |

## States

- loading: Set with the busy prop.

## Tokens

- `--surface`
- `--surface-sunken`
- `--border`
- `--lime`
- `--on-lime`
- `--fg-muted`
- `--shadow-sm`
- `--radius-control`
- `--radius-field`
- `--radius-card`

## Examples

### Video settings with cost

Length, shape and a repeat code. The cost changes when the length changes.

```tsx
const params: ParameterSpec[] = [
  { kind: "segmented", id: "duration", label: "Duration", options: [{ value: "5", label: "5 s" }, { value: "10", label: "10 s" }] },
  { kind: "aspect", id: "ratio", label: "Shape", options: ["16:9", "9:16", "1:1", "4:3"].map((r) => ({ value: r, label: r })) },
  { kind: "seed", id: "seed", label: "Repeat code", defaultSeed: 4821 },
];
const [values, setValues] = useState({ duration: "5", ratio: "16:9", seed: null });

<ParameterPanel parameters={params} values={values} onChange={setValues}
  onGenerate={() => {}} estimateCost={(v) => Number(v.duration) * 12} />
```

### Style buttons, a number and a busy state

Custom cost text and button text. While busy, the button is off and shows a spinner.

```tsx
const params: ParameterSpec[] = [
  { kind: "presets", id: "style", label: "Style", options: [{ value: "photo", label: "Photo" }, { value: "ink", label: "Ink" }, { value: "paper", label: "Paper cut" }] },
  { kind: "number", id: "count", label: "Images", min: 1, max: 4, step: 1, unit: "images" },
];
const [values, setValues] = useState({ style: "photo", count: 2 });

<ParameterPanel title="Image settings" parameters={params} values={values} onChange={setValues}
  onGenerate={() => {}} estimateCost={(v) => Number(v.count) * 4}
  formatCost={(c) => `${c} credits for this run`} generateLabel="Make images" busy />
```

### One setting, no cost

With no cost given, that space stays empty. The repeat code starts fixed here, so the number shows.

```tsx
const [values, setValues] = useState({ seed: 1234 });

<ParameterPanel title="Repeat results"
  parameters={[{ kind: "seed", id: "seed", label: "Repeat code", hint: "Similar, not identical" }]}
  values={values} onChange={setValues} onGenerate={() => {}} />
```

Source: src/organisms/ParameterPanel.tsx
