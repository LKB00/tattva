# ShotSettings
Settings for one video generation, with the cost shown as takes × cost per take before Generate is pressed.
Status: stable. Page: https://lkb00.github.io/tattva/#component-shot-settings
ShotSettings holds the model, length, aspect ratio, draft or final quality and the number of takes for a video generation. The cost line reads "4 takes × 20 = 80 credits" with what is left, and updates as settings change. Options the chosen model cannot use stay visible, marked and explained in words. The model is never switched to make an option work: if a chosen option stops fitting, Generate waits and the line under it says what to change. It is the video sibling of ParameterPanel, which stays as it is for images and text.
## When to use it

Lets people choose how a video is made and see exactly what it will cost, before they spend anything.

## Use it for

- The settings beside a video prompt box.
- A settings sheet on a phone, with Generate at the bottom.
- Any generation where each output is charged and models support different options.

## Not for

- Image or text settings with a single cost estimate: use `parameter-panel`
- Choosing only the model: use `model-picker`
- A spending limit for a whole project: use `budget-control`

## Anatomy

- Title
- Model
- Length
- Aspect ratio with shape glyphs
- Extra controls (such as camera move)
- Quality with draft note
- Takes
- Cost line and what is left
- Generate

## Do

- Show cost per take and the total before Generate, and say what is left.
- Keep unavailable options visible with the reason, so people learn the model's limits before they hit them.
- Point people to drafts first. A draft can be made final later.
- Name the button by what it makes: "Generate 4 takes".

## Avoid

- Do not switch the model or a setting silently to make a feature work.
- Do not hide a reason in a tooltip only.
- Do not colour the cost or the settings lime. Lime is only for Generate, which starts the AI.
- Do not use amber for low credits. Say it in words and offer fewer takes or a draft.

## On a phone

- Fills the width. Chips wrap onto more lines.
- Generate takes the full width under the cost line.
- Every chip has a 44px touch area.
- Put it in a bottom Sheet on a phone.

## Accessibility: built in

- The panel is a form named by its title. Each setting is a radio group with one tab stop; arrow keys, Home and End move and choose.
- Unavailable options keep aria-disabled, are skipped by the arrow keys and point to their written reason with aria-describedby. Screen readers also hear "not available".
- The chosen chip shows a check mark as well as a stronger border, so selection is not shown by colour alone.
- The cost line is a polite status region, so the new total is read after a change.
- When Generate cannot run, the reason is written next to it and next to the setting to change.
- Chips have a 44px touch area on touch screens.

## Accessibility: what you need to do

- Work out costPerOutput and the balance in your code. Never let a model write a price.
- Mark options as unavailable with a reason the person can act on, such as "Reel Lite makes clips up to 6 seconds".
- On a phone, put it in a bottom Sheet and keep Generate in reach.
- When a model changes, do not change the person's other choices for them. Pass the new unavailable reasons and let them choose.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `{ model: string; length: string; aspect: string; quality: "draft" \| "final"; outputs: number }` |  | The current settings. |
| onChange (required) | `(value: ShotSettingsValue) => void` |  | Called with the new settings. |
| onGenerate (required) | `(value: ShotSettingsValue) => void` |  | Generate pressed. Never called while an option does not fit the model or credits are short. |
| models (required) | `ShotOption[]` |  | Models. A description shows next to the label. |
| lengths (required) | `ShotOption[]` |  | Lengths for the chosen model, such as "4 s". Set unavailable with a reason on the ones it cannot make. |
| aspects (required) | `ShotOption[]` |  | Aspect ratios labelled like "16:9", drawn with a shape glyph. |
| qualities | `ShotOption[]` | `Draft and Final` | Quality tiers. Values are "draft" and "final". |
| costPerOutput (required) | `number` |  | Cost of one take with the current settings, from your code. The total is takes × this. |
| balance | `number` |  | Credits left. Shows what is left after this, or that there is not enough. |
| unit | `string` | `"credits"` | Unit after numbers. |
| maxOutputs | `number` | `4` | Most takes per press. |
| draftNote | `string` | `"Drafts are faster and cheaper. …"` | Shown while Final is picked, to suggest a draft first. |
| children | `ReactNode` |  | Extra controls after the aspect ratio, such as CameraMovePicker. |
| busy | `boolean` | `false` | Generating: Generate shows a spinner and is off. |
| title | `string` | `"Shot settings"` | Heading and form name. |
| className | `string` |  | Extra classes for the panel. |

## States

- loading: Set with the busy prop.

## Tokens

- `--surface`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--danger-fg`
- `--lime`
- `--radius-card`
- `--radius-control`
- `--dur-fast`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Settings with cost and a camera move: Switch to Reel Lite: 8 s, 10 s, 21:9 and some camera moves become unavailable with the reason written out, and the chosen 8 s is marked instead of being changed.
- When Generate has to wait: A chosen length the model cannot make, not enough credits, and generating. Each says in words what to do.
- Without a balance: Leave out balance when credits are shown elsewhere. maxOutputs limits the takes per press.

Source: src/organisms/ShotSettings.tsx
