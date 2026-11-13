# QuestionSet
One card that asks every missing fact at once, one question at a time, with a single final button.
Also known as: questionnaire, clarifying questions, ask user question, multi step form, wizard, survey, form, follow up questions.
Status: stable. Page: https://lkb00.github.io/tattva/#component-question-set
QuestionSet is for when an agent has read the request once and needs several facts. It asks them all in one card instead of one message each. A row of tabs shows the questions. Tapping an option answers and moves to the next unanswered question. One button says Next until the last answer, then shows the final action.
## When to use it

Read once, ask once. The person answers everything the agent is missing in one place, and the agent gets one submit, not a string of follow-ups.

## Use it for

- An agent that is missing two or more facts before it can act.
- Short answers: a pick from a few options, a number, a date, or a few words.
- Facts the agent already has, listed above the questions so the person does not repeat them.

## Not for

- A single question in the middle of a task: use `agent-question-card`
- Approving or denying an action: use `approval-prompt`
- A list of things to tick off: use `checklist`

## Anatomy

- Reason badge and run name
- Title
- Already have list
- Question tabs
- Question and options
- Something else input
- Error message
- Next or final button

## Do

- Ask everything in one card, after the agent has read the request once.
- Offer two or three likely options, and use input for the rest.
- Put what you already know in known so the person never repeats it.
- Replace the card with a Receipt once it is submitted.
- Mark questions that can be skipped with required: false.

## Avoid

- Do not ask one question per message when you can ask them together.
- Do not use it for a yes or no on a risky action. Use ApprovalPrompt.
- Do not ask for passwords or codes here.
- Do not pile on questions. If the list grows long, split the work.
- Do not rely on the amber border alone to say a person must act. The badge says it in words.

## On a phone

- Only the current question shows its name in the step row on a phone, so every step fits; the others show a number or tick and keep their name for screen readers.
- Options are one column on a phone and two columns from the sm breakpoint, and each option is at least 44px tall.
- The date answer fills the width on a phone and is capped at 14rem from sm up.
- After a tap on an option the set moves to the next open question and moves focus with it, so the on-screen keyboard only appears for questions that take typing.

## Accessibility: built in

- The tabs follow the WAI-ARIA tabs pattern through the Tabs part: arrow keys, Home and End move between tabs, and only the selected tab is in the Tab order.
- Each tab shows a number or a check, and screen readers hear whether it is answered, not answered yet, or needs another answer. Colour is never the only cue.
- Only the current question's panel is shown. A polite live region says "Question 2 of 3" and the tab name when the question changes.
- Options are buttons that report aria-pressed. After you tap an option, focus moves to the next tab, or to the final button when the set is complete.
- Enter in a text, number or date input does the same as the button. The button uses aria-disabled until the current question is answered, so it can still be reached.
- An error shows an icon and text in a role=alert region, and the input gets aria-invalid and is described by the message.
- Options and the button are 44px tall on coarse pointers.

## Accessibility: what you need to do

- Keep each tab label short and different from the others. It is the tab's name for screen readers.
- Write error messages that say what to change, such as "That is more than the order total". The card shows them with an icon and words.
- After submit, replace the card with a Receipt so the thread stays short, and move focus to something sensible.
- To use a date picker, pass renderInput. The built-in date input is the browser's own.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| questions (required) | `QuestionSetQuestion[]` |  | The questions. Each has id, label (the tab name), question, optional options ({ value, label, description? }), optional input ({ kind: "text" \| "number" \| "date", placeholder?, prefix? }) and optional required (default true). Two more are optional: multiple: true lets several options be picked (the answer joins their values with commas; read them with answerValues), and recommended names the option to suggest, marked Recommended and listed first. |
| answers (required) | `Record<string, string>` |  | The answer for each question id. Empty or missing means unanswered. |
| onAnswer (required) | `(id: string, value: string) => void` |  | Called when an option is tapped or something is typed. A number is passed as text. |
| onSubmit (required) | `() => void` |  | The single final action. Called by the button on the question that completes the set. |
| known | `{ label: string; value: ReactNode }[]` |  | Facts the agent already has, shown above the questions as Already have. |
| errors | `Record<string, string>` |  | Messages for answers the parent found invalid. The card jumps to the first one and shows the message under it. Clear a message by setting it to an empty string. |
| renderInput | `(q: QuestionSetQuestion, value: string, onChange: (value: string) => void) => ReactNode` |  | Replaces the built-in input when a question's input is showing. Use it to drop in a DatePicker or any other control. |
| submitLabel | `string` | `"Continue"` | Words on the button for the question that completes the set. |
| nextLabel | `string` | `"Next"` | Words on the button while questions remain. |
| title | `string` | `"A few quick questions"` | The card heading. |
| runName | `string` |  | Name of the run that is asking, shown beside the badge. |
| showProgress | `boolean` | `true` | Shows "Question 2 of 3" above the question. |
| allowSkip | `boolean` | `false` | Offers Skip on questions that are not required. The answer becomes QS_SKIPPED. |
| allowAgentDecides | `boolean` | `false` | Offers You decide on every question, so the assistant picks. The answer becomes QS_AGENT_DECIDES. |
| review | `boolean` | `false` | Shows every answer for a last look, each with a Change link, before the final button. |
| onUseDefaults | `() => void` |  | Shows Use the defaults, which ends the questions so the assistant fills in the rest. |
| labels | `Partial<Record<"back" \| "skip" \| "agentDecides" \| "recommended" \| "useDefaults" \| "review" \| "change" \| "skipped" \| "agentDecided" \| "of" \| "question", string>>` |  | Words on the buttons and labels, for localisation. |
| className | `string` |  | Extra classes for the card. |

## States

- focus: A visible focus ring appears on the focused tab, option, input or button. Only the selected tab is in the Tab order.
- answered tab: A tab whose question has an answer shows a check instead of its number, and screen readers hear "answered".
- option selected: The chosen option gets a stronger border, a check and aria-pressed.
- something else: Choosing Something else reveals a text, number or date input under the options and moves focus into it.
- button waiting: Until the current question is answered the button looks dimmed and is marked aria-disabled. Pressing it does nothing.
- error: When errors has a message for a question, the card jumps to it and shows the message with an icon. The input gets a danger border and aria-invalid, and the tab shows an alert icon.
- optional: A question with required set to false shows Optional beside it and does not block the final button.

## Tokens

- `--attention`
- `--surface`
- `--border`
- `--border-strong`
- `--surface-sunken`
- `--danger-fg`
- `--fg`
- `--fg-muted`
- `--focus-ring`
- `--dur-fast`
- `--radius-field`
- `--radius-card`

## Examples

### An agent's clarifying questions

One question at a time with options, as agent tools ask them. The suggested option is marked Recommended and listed first. The trust question takes several answers. Every question offers You decide, the optional one offers Skip, and Use the defaults ends the questions. Number keys pick an option. Before the final button, a last look lists every answer with a Change link.

```tsx
const questions = [
  { id: "kind", label: "Kind", question: "What are you building?", recommended: "chat", options: [
    { value: "chat", label: "Chat assistant", description: "People ask, it answers with sources" },
    { value: "agent", label: "Agent console", description: "It plans, acts and asks before big steps" },
  ] },
  { id: "trust", label: "Trust", question: "What helps people trust the answers? Pick any.", multiple: true, recommended: "sources", options: [
    { value: "sources", label: "Sources" }, { value: "feedback", label: "Feedback" }, { value: "approvals", label: "Approvals" },
  ] },
  { id: "mode", label: "Look", question: "Light, dark or both?", required: false, recommended: "both", options: [
    { value: "both", label: "Both, following the device" }, { value: "dark", label: "Dark only" },
  ] },
];

function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Three quick questions" questions={questions} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))}
      allowAgentDecides allowSkip review onUseDefaults={useDefaults}
      onSubmit={() => send({ ...answers, trust: answerValues(answers.trust) })} submitLabel="Start building" />
  );
}
```

### Three questions with a number and a date

Each question has options and a Something else choice. The amount takes a number with a rupee sign. The date takes a date. After submit the parent swaps the card for a Receipt.

```tsx
const questions = [
  { id: "why", label: "Reason", question: "Why are you asking for a refund?", options: [
    { value: "damaged", label: "It arrived damaged", description: "Broken, torn or not working" },
    { value: "wrong", label: "Wrong item", description: "Not what you ordered" },
  ], input: { kind: "text", placeholder: "Tell us in a few words" } },
  { id: "amount", label: "Amount", question: "How much did you pay?", options: [
    { value: "2340", label: "₹2,340" },
    { value: "1200", label: "₹1,200" },
  ], input: { kind: "number", prefix: "₹" } },
  { id: "date", label: "Date", question: "When did it arrive?", options: [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
  ], input: { kind: "date" } },
];

function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <Receipt title="Answered 3 questions" meta="Just now">
        <ul className="m-0 list-none space-y-1 p-0 text-body leading-5">{questions.map((q) => <li key={q.id}><span className="text-fg-muted">{q.label}: </span>{answers[q.id]}</li>)}</ul>
      </Receipt>
    );
  }
  return (
    <QuestionSet title="Three quick questions" runName="Refund request" questions={questions} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => setDone(true)} submitLabel="Send to the agent" />
  );
}
```

### With facts already known

Pass known to list what the agent already has. It shows above the tabs so the person does not type it again.

```tsx
// "questions" is the same list as the first example; here only the last two are used.
function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Two things I could not find" questions={questions.slice(1)} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => {}}
      known={[{ label: "Order", value: "#48213" }, { label: "Item", value: "Kettle" }, { label: "Reason", value: "Arrived damaged" }]} />
  );
}
```

### An answer sent back

The answers start filled in, with an amount that is too high. Press Continue: the parent reports the problem through errors, and the card jumps to that question and shows the message.

```tsx
// "questions" is the same list as the first example.
function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({ why: "damaged", amount: "99999", date: "yesterday" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Check your answers" questions={questions} answers={answers} errors={errors}
      onAnswer={(id, v) => { setAnswers((a) => ({ ...a, [id]: v })); setErrors((e) => ({ ...e, [id]: "" })); }}
      onSubmit={() => setErrors(Number(answers.amount) > 5000 ? { amount: "That is more than the order total of ₹2,340. Check the amount." } : {})} />
  );
}
```

Source: src/organisms/QuestionSet.tsx
