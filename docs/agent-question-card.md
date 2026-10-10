# AgentQuestionCard
The assistant asks you a question in the middle of a task, with quick answers.
Status: stable. Page: https://lkb00.github.io/tattva/#component-agent-question-card
AgentQuestionCard is how the assistant asks for help instead of guessing. A small label says why it is asking: choose an approach, needs information, needs a sign-in, or confirm a risky step. You can tap one of two to four choices, type your own answer, let the assistant decide, or skip. Once answered, the card shrinks to a one-line summary. It uses amber because a person has to act.
## When to use it

The assistant stops to ask instead of guessing. A label says why it is asking, and quick choices, a typed answer, Let the agent decide and Skip mean the person is never stuck.

## Use it for

- Asking the person to choose between two to four approaches.
- Asking for a fact the assistant cannot find itself.
- Asking someone to sign in, or to confirm a risky step, before the assistant goes on.

## Not for

- Allowing or denying one specific action: use `permission-prompt`
- Agreeing to a whole plan before work starts: use `plan-card`
- Suggested next prompts after a reply: use `suggestion-chips`

## Anatomy

- Reason label
- Run name
- Question
- Two to four choices
- Own-answer box and Send
- Let the agent decide
- Skip
- Summary after answering

## Do

- Ask only when a wrong guess would cost the person time or money.
- Write the question so it can be answered without reading the log.
- Give two to four choices that really differ, and say how in one line.
- Always offer Let the agent decide and Skip.

## Avoid

- Do not ask for passwords or codes in the text box.
- Do not use amber on a card that is already answered.
- Do not ask about things the assistant can find out itself.
- Do not stack many question cards at once. Use the inbox instead.

## On a phone

- The answer options stack in one column on a phone and move to two columns from 640px wide.
- The text field is 44px tall with 16px text on a touch screen, and the Send button wraps below it when the row is narrow.
- Let the agent decide and Skip are buttons that wrap, so they stay reachable without scrolling sideways.

## Accessibility: built in

- The card is a region named by its question.
- Choices are real buttons in a list, so Tab moves through them and Enter or Space picks one.
- The reason is written in words, so it does not depend on color.
- The own-answer box has a visible label.
- After an answer, keyboard focus moves to the summary, and after Change it moves back to the question.
- An answer given elsewhere is announced to screen readers.
- Sign-in questions have no text box by default, and a hint says never to type a password there.

## Accessibility: what you need to do

- Write the question so it makes sense alone, because screen readers use it as the card's name.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| question (required) | `string` |  | The question, in plain words. |
| reason (required) | `"approach" \| "information" \| "sign-in" \| "risky-step"` |  | Why the assistant is asking. Sets the label. |
| options | `QuestionOption[]` | `[]` | Quick answers ({ id, label, description? }). Only the first four are shown. |
| allowText | `boolean` | `reason !== "sign-in"` | Show the free-text answer. |
| answer | `QuestionAnswer \| null` |  | Controlled answer ({ kind, value, label }). Omit to let the card keep its own. |
| onAnswer | `(answer: QuestionAnswer) => void` |  | Fires for an option, typed text, Let the agent decide, or Skip. |
| onReopen | `() => void` |  | Fires when the person chooses Change on the summary. |
| runName | `string` |  | Name of the run that asked. |
| labels | `AgentQuestionCardLabels` |  | Overrides visible text, including a reasons map. |
| className | `string` |  | Extra classes on the root. |

## States

- answered: Once answered (or when answer is passed), the card collapses to a summary line with a Change button.
- sign-in: Set reason to sign-in to show a lock tag and a hint not to type secrets, and hide the free-text box.
- agent decides: Let the agent decide and Skip close the question with a matching summary.
- text answer: Send is disabled until something is typed in the answer box.
- hover: An option button gets a stronger border under the pointer.
- focus: Options and buttons show a focus ring, and focus moves to the card after an answer or Change.

## Tokens

- `--attention`
- `--attention-soft`
- `--attention-fg`
- `--line`
- `--radius-field`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Choose an approach: Tap a choice. The card collapses to a summary and Change reopens it.
- Missing information: Two choices and a box for any other answer.
- A sign-in is needed: The card never asks for a password in text. You sign in in the other window, then tell the assistant.
- Confirm a risky step: Say what will happen and make both answers easy to reach.

Source: src/organisms/AgentQuestionCard.tsx
