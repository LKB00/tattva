# PromptBox
A box for describing what you want made, with a Generate button and optional examples.
Status: stable. Page: https://lkb00.github.io/tattva/#component-prompt-box
PromptBox is for tools that make things, such as images. It has a three-line text box, a character count and a green Generate button. While it works, the button is off and shows Generating. Example ideas appear as small buttons that fill the box when clicked. Use it when the result is a set of new things, not a chat reply.
## When to use it

A roomy box for describing something to make, such as an image or a draft. Enter adds a line instead of sending, because these descriptions are often long and reworked before each run.

## Use it for

- The input of a tool that makes images, designs or drafts.
- Offering a few example ideas that fill the box in one click.
- A Generate step that takes a while: set busy so it cannot be pressed twice.

## Not for

- Chatting back and forth with the assistant: use `composer`
- Fine settings such as size, style or seed: use `parameter-panel`

## Anatomy

- Text box
- Character count
- Generate button
- Example ideas

## Do

- Use it when each submit makes something new.
- Offer two or three examples so new people see what to write.
- Keep it in the working state the whole time, so people cannot submit twice.
- Pair it with VariantGrid and CanvasPanel in a SplitCanvasTemplate.
- Set busy back to false when the run ends, or Generate stays off.

## Avoid

- Do not use it for chat. Use Composer, which has Enter and Stop.
- Do not show a PromptBox and a Composer on the same screen.
- Do not use long sentences as examples. They do not fit in small buttons.

## On a phone

- The text box is 16px on a touch screen so the page does not zoom on focus. It stays three rows tall and does not grow.
- Enter adds a new line, so people send with the Generate button, which has a 44px tap area on a touch screen.
- The example chips wrap onto more lines. Each keeps its size and has a 44px tap area on a touch screen.

## Accessibility: built in

- It is a real form, and the text box is named "Prompt" for screen readers.
- Generate is a real button. It stays off while the box is empty or busy.
- While busy, the button text changes to "Generating…" and its spinner is read as "Loading".
- Example ideas are real buttons, so they work from the keyboard.
- Screen readers hear when generating starts and when it ends.

## Accessibility: what you need to do

- Set doneMessage to say where the results are, such as "Done. 4 images below."

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| onGenerate (required) | `(prompt: string) => void` |  | Called with the trimmed prompt on submit. Not called when empty or busy. |
| busy | `boolean` |  | Disables Generate and swaps its label and icon for a spinner with Generating… |
| placeholder | `string` | `"Describe what you want to create…"` | Placeholder text for the textarea. |
| examples | `string[]` | `[]` | Prompts offered as Try pills. Clicking one replaces the textarea content. |

## States

- loading: Set with the busy prop.

## Tokens

- `--border-strong`
- `--surface`
- `--shadow-sm`
- `--lime (Generate)`
- `--fg-subtle`
- `--surface-hover`
- `--radius-control`
- `--radius-field`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With example ideas: Click an example to fill the box, then Generate. The demo shows Generating for 1.5 seconds.
- While it works: The button is off, so a second request cannot start. The text can still be edited.
- Custom placeholder: Change the hint text to match what is being made.

Source: src/organisms/PromptBox.tsx
