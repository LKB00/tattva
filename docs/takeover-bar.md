# TakeoverBar
A full-width bar that says who is in control: you, or the assistant.
Status: stable. Page: https://lkb00.github.io/tattva/#component-takeover-bar
TakeoverBar tells you who is in charge right now. When the assistant is working, it offers Take over. When you have control, the assistant is paused and does nothing until you choose Resume or Hand back. In watch mode it names the one step you are asked to watch. The status sentence is read out once when it changes.
## When to use it

Makes control of a shared screen obvious, so the assistant never acts while the person thinks they are in charge. It offers the matching way to change control, so people can step in and hand back without stopping the run.

## Use it for

- Above a screen or browser the assistant is operating, so people can take over at any time.
- Pausing the assistant while the person does a step themselves.
- Asking the person to watch one sensitive step, such as a payment.

## Not for

- A question the assistant needs answered: use `agent-question-card`
- Approving one action: use `permission-prompt`
- A run going on in the background: use `background-run-chip`

## Anatomy

- State icon
- Status sentence
- Step you are watching (watch mode)
- Actions: Take over, Resume, Hand back

## Do

- Keep the bar visible for the whole run so it is always clear who is in charge.
- Use the watch state only for steps that really need a person, such as payment or sign-in.
- Say what the assistant is not doing while you have control.
- Keep the buttons plain: Take over, Resume, Hand back.

## Avoid

- Do not use amber for the working or you-control states.
- Do not let the assistant keep acting while the bar says you have control.
- Do not hide Take over in a menu.
- Do not collect passwords or card numbers through the assistant.

## On a phone

- The text and the buttons wrap onto two lines on a narrow screen, with the buttons on the right of the second line.
- The buttons keep their size and have a 44px tap area on a touch screen.
- Nothing depends on hover, and the status text is announced when control changes hands.

## Accessibility: built in

- Screen readers say the status sentence when the state changes.
- The icon is hidden from screen readers because the sentence says the same thing.
- The watch state is shown by an eye icon and words, not by color alone.
- All actions are real buttons, and they wrap on narrow screens.
- After Take over, Resume or Hand back, keyboard focus moves to the first button of the new state.

## Accessibility: what you need to do

- Keep one bar on the page and change its state, instead of swapping in a new bar, so the change is announced.
- Pass step in watch mode, so people hear which step to watch.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| state (required) | `"you-control" \| "agent-working" \| "supervise"` |  | Who is in control. Decides the text and the actions. |
| step | `string` |  | The step to watch. Shown in the supervise state. |
| onTakeOver | `() => void` |  | Fires from Take over, in the working and supervise states. |
| onResume | `() => void` |  | Fires from Resume. The agent continues from where it paused. |
| onHandBack | `() => void` |  | Fires from Hand back, in the you-control state. |
| labels | `TakeoverBarLabels` |  | Overrides visible text: youControl, youControlHint, agentWorking, supervise, superviseHint(step), takeOver, resume, handBack. |
| className | `string` |  | Extra classes on the root. |

## States

- status: Set with the state prop.

## Tokens

- `--surface`
- `--line`
- `--attention-soft`
- `--attention-fg`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Take over, then give it back: Press Take over to pause the assistant. Resume or Hand back lets it continue. The second button shows the watch state.
- You have control: The assistant is paused and not doing anything. This is the state to show after a person takes over.
- A step you need to watch: Use this for sensitive pages such as payment. It is the only state in amber, because you have to act.

Source: src/molecules/TakeoverBar.tsx
