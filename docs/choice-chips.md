# ChoiceChips
A short question with its answers as small chips, for one pick or several.
Also known as: chips, filter chips, chip group, choice group, toggle chips, pill picker.
Status: stable. Page: https://lkb00.github.io/tattva/#component-choice-chips
ChoiceChips asks one question with a few short answers, such as which room or which nights. The chips are real radio buttons, or checkboxes when several can be picked, so arrow keys and Space work as in any form. The picked chip shows a tick as well as its colour, and the answer the assistant suggests is listed first and says Suggested. Use it inside a message or a form; for several questions in a row, use QuestionSet.
## When to use it

Lets the assistant ask a quick question that has a few short answers, without a whole form.

## Use it for

- One clarifying question inside an answer: which area, which size.
- A filter with a few values, one or several at a time.
- A setting with three to six short options.

## Not for

- Prompts that send a message when picked: use `suggestion-chips`
- Several questions in a row, or options that need a line of explanation: use `question-set`
- Switching between views or modes: use `segmented-control`

## Anatomy

- Question
- Chip
- Tick
- Suggested note

## Do

- Ask one question with three to six short answers.
- Mark the answer the assistant would pick with recommended, so people can accept it in one tap.
- Turn the chips off once the answer is sent, so the thread shows what was chosen.

## Avoid

- Do not pick an answer for the person; a suggestion is shown, not chosen.
- Do not use chips that send a message straight away; that is SuggestionChips.
- Do not put more than about six chips in one group.

## On a phone

- Chips wrap onto new lines; each is at least 44px tall on a touch screen.
- The question stays above the chips.

## Accessibility: built in

- The chips are a fieldset with the question as its legend, built on real radio buttons or checkboxes.
- Arrow keys move between radio chips; Space picks a chip.
- The picked chip shows a tick as well as its colour.
- Each chip shows a focus ring on keyboard focus, and is at least 44px tall on a touch screen.

## Accessibility: what you need to do

- Write the question as the label, even when it is hidden; it names the group.
- Keep each chip to one or two words. Long answers belong in QuestionSet.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label (required) | `string` |  | The question, shown above the chips. |
| options (required) | `{ value: string; label: string }[]` |  | The answers, in order. |
| value (required) | `string \| string[]` |  | The picked value, or values when multiple. |
| onChange (required) | `(value: string \| string[]) => void` |  | Called with the new value, or the new list when multiple. |
| multiple | `boolean` | `false` | Several chips may be picked. Each is then a checkbox. |
| recommended | `string` |  | Value of the suggested answer. It is listed first and says Suggested. |
| hideLabel | `boolean` | `false` | Hides the question visually; screen readers still read it. |
| disabled | `boolean` | `false` | Turns every chip off, for example after the answer was sent. |
| className | `string` |  | Extra classes on the group. |

## States

- disabled: After the answer is sent, the chips fade and cannot be changed, so the thread shows what was chosen.
- nothing picked: Every chip is quiet; the suggested one is listed first and says Suggested.
- picked: The picked chip fills with the soft accent and shows a tick.
- several picked: With multiple, each picked chip shows its own tick.
- focus: The chip under keyboard focus shows a focus ring.

## Tokens

- `--accent`
- `--accent-soft`
- `--line`
- `--radius-control`
- `--focus-ring`

## Examples

### One answer, with a suggestion

The suggested answer is listed first and says so. Nothing is picked until the person picks.

```tsx
const [room, setRoom] = useState<string | string[]>("");

<ChoiceChips label="Which room do you want?" recommended="double" value={room} onChange={setRoom}
  options={[{ value: "double", label: "Double" }, { value: "twin", label: "Twin" }, { value: "suite", label: "Suite" }]} />
```

### Several answers

With multiple, each chip is a checkbox and the value is a list.

```tsx
const [nights, setNights] = useState<string | string[]>(["sat"]);

<ChoiceChips multiple label="Which nights?" value={nights} onChange={setNights}
  options={[{ value: "fri", label: "Friday" }, { value: "sat", label: "Saturday" }, { value: "sun", label: "Sunday" }]} />
```

### Inside an answer

The message asks the question in words, so the chips' own label is hidden but still read.

```tsx
<Message role="assistant">
  <p>I found hotels in three areas. Where would you like to stay?</p>
  <ChoiceChips hideLabel label="Area to stay in" value={area} onChange={setArea}
    options={[{ value: "marais", label: "Le Marais" }, { value: "montmartre", label: "Montmartre" }, { value: "left", label: "Left Bank" }]} />
</Message>
```

Source: src/molecules/ChoiceChips.tsx
