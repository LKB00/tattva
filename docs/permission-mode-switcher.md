# PermissionModeSwitcher
A button that always shows how much freedom the assistant has, and lets you change it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-permission-mode-switcher
PermissionModeSwitcher always shows the current mode, and its level of risk, on the button. Opening it lists each mode with a plain description and a risk label. A mode can have a warning, or be locked with a reason, such as a rule set by your admin. Put it below the box where people type.
## When to use it

Keeps the assistant's level of freedom in view at all times, on a button below the box where people type. Opening it lists every mode with what it allows and how risky it is, so nobody changes it by guesswork.

## Use it for

- Below a chat or task input, to show and change how much the assistant may do without asking.
- Products where an admin may lock some modes and people need to see why.
- Offering a risky mode with a warning written next to it.

## Not for

- Asking about one specific action: use `permission-prompt`
- Choosing which model answers: use `model-picker`
- Switching between two or three equal views: use `segmented-control`

## Anatomy

- Button (risk icon, name, mode)
- Pop-up list
- Mode choice (check, name, risk, description, warning or lock reason)
- Shortcut hint (optional)
- Spoken update

## Do

- Keep the button on screen the whole time, so the mode is never hidden.
- Describe each mode as what the assistant may do without asking.
- Add a warning to the riskiest mode.
- Tell people why a mode is locked and what they can do.
- Pass shortcut only if your app really binds that key.

## Avoid

- Don't show risk with only an icon or color. Keep the words.
- Don't hide locked modes. Showing them with a reason explains the limit.
- Don't show a shortcut the app does not have.

## On a phone

- The trigger is a pill that keeps its size and has a 44px tap area on a touch screen.
- On a phone the panel opens as a bottom sheet with a backdrop. On wider screens it floats above the trigger and is at most the screen width minus 32px.
- Each mode row is a button with its description visible, so nothing needs hover.
- The keyboard shortcut line is shown on a phone too, so leave the shortcut prop out of phone-only layouts.

## Accessibility: built in

- The button says whether the list is open, and names the current mode and its risk.
- The modes work as one set of options: Tab lands on the chosen one and the up and down arrow keys move between them.
- Locked modes are marked unavailable and show the reason in words.
- Screen readers hear the new mode after a change.
- Escape closes the list and returns you to the button.

## Accessibility: what you need to do

- Write each lockedReason so it says who locked the mode and why.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| modes | `PermissionMode[]` | `defaultPermissionModes` | Modes in display order. Each has id, label, description, risk (low, medium or high), and optional warning and lockedReason. |
| value | `string` |  | Selected mode id, for controlled use. |
| defaultValue | `string` |  | Initial mode id when uncontrolled. Defaults to the first mode. |
| onChange | `(id: string) => void` |  | Called when the person picks an unlocked mode. |
| label | `string` | `"Permission mode"` | Name for the trigger text, the popover and the radio group. |
| shortcut | `string` |  | Shortcut shown at the foot of the panel. Pass it only if the app binds it. |
| shortcutLabel | `string` | `"to cycle modes"` | Text beside the shortcut. |
| announcePrefix | `string` | `"Mode changed to"` | Start of the polite announcement made after a change. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- open: Pressing the trigger opens a list of modes, each with a risk label.
- locked: Set lockedReason on a mode to dim it, explain why it is locked and make it unselectable.
- high risk: A mode with risk high shows its risk label in the danger colour, plus its warning text if set.
- keyboard: Up and down arrows move between modes and the chosen one is announced to screen readers.
- shortcut hint: Pass shortcut to show a key hint at the bottom of the list.

## Tokens

- `--surface-raised`
- `--border`
- `--danger-fg`
- `--fg-muted`
- `--radius-control`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- The five modes: The five default modes. The riskiest one shows a warning.
- Locked by your admin: A locked mode is switched off and says why.

Source: src/molecules/PermissionModeSwitcher.tsx
