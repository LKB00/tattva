# PermissionPrompt
Asks you to allow one thing the assistant wants to do, with a choice to always allow it and an optional note.
Status: stable. Page: https://lkb00.github.io/tattva/#component-permission-prompt
PermissionPrompt asks you to allow one thing the assistant wants to do. It shows what the step is, a plain description, the exact thing it will act on, and why it is asking. You can Allow once, Allow always for a clearly named group of things, or Deny. A saved rule lists exactly what it covers. While you are inside the prompt, Esc denies and N opens the note box. ApprovalPrompt is for one clear yes or no. This prompt adds saved choices and a note.
## When to use it

Asks before the assistant does one thing that needs a person's yes. It shows the exact command or target, so people approve what will really happen, and can save the choice for a clearly named group of actions.

## Use it for

- Before a command, file change or web request that needs approval.
- Letting people allow an action once, for this session, or always for a named group.
- Letting people send a note with their decision to steer the assistant.

## Not for

- A plain yes or no with no saved choices: use `approval-prompt`
- Changing how much the assistant may do in general: use `permission-mode-switcher`
- A question with several possible answers: use `agent-question-card`

## Anatomy

- Title of the step
- Who asked (optional)
- Description
- Exact thing it will act on
- Reason
- Choices
- Esc key hint beside Deny
- What a saved choice covers
- Add a note button with N key hint
- Note box and hint
- Confirm button
- Summary of your choice

## Do

- Show the exact thing it will act on, not a loose summary.
- List everything a saved choice would allow.
- Offer only Allow once when you cannot show everything a saved choice would allow.
- Name the helper when a background task is asking.
- Tell people the note box is where they can adjust their choice.

## Avoid

- Don't pick Allow always for people. Allow once is selected first.
- Don't jump the cursor into the prompt unless the assistant is stuck waiting.
- Don't use it for a risky action that needs one clear yes or no. Use ApprovalPrompt.
- Don't rely on the keys alone. Deny, Add a note and Confirm also work with a mouse, a tap, or Tab.
- Don't change what Tab does. It keeps moving to the next control.

## On a phone

- The Escape to deny and N for a note shortcuts need a keyboard, so on a phone people use the choices and the confirm button.
- Long commands and file paths scroll sideways inside their own boxes instead of wrapping.
- The note field is 44px tall with 16px text on a touch screen.
- The choice rows grow to at least 44px tall on touch screens.

## Accessibility: built in

- The prompt is named "Permission needed" plus the step, and the choices work with the arrow keys.
- Escape anywhere inside the prompt denies, and N opens the note box unless you are typing. Screen readers are told about both keys.
- The reason is read with the choices, and the note box has a label and a hint.
- The Add a note button says whether the note box is open.
- After a choice, the result is shown with an icon and words, not only a color, and keyboard focus moves to it.
- A decision made elsewhere, such as from another screen, is announced to screen readers.

## Accessibility: what you need to do

- Set autoFocus only when the assistant cannot continue without an answer. Otherwise leave people where they are.
- Write a reason that says why this step needs a yes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| tool (required) | `string` |  | Kind of action, such as "Bash command". Used as the title and the section name. |
| description (required) | `string` |  | Plain description of what the action does. |
| target (required) | `string \| string[]` |  | The literal command or target. An array lists each subcommand of a compound command. |
| reason | `string` | `"This command requires approval"` | Why the person is being asked. |
| requestedBy | `string` |  | Name of the subagent that asked, shown as a badge. |
| sessionScope | `string` |  | What a session-only approval covers. Adds the middle choice "Allow for this session" (choice "session", state "allowed-session", result "Allowed for this session"). Omit to hide it. |
| ruleScope | `string` |  | Scope of the saved rule, such as `npm test *`. Omit to offer only Allow once. |
| ruleCovers | `string[]` |  | Exactly what a saved rule covers, one entry per rule. Falls back to ruleScope. |
| ruleLifetime | `string` |  | Where and how long a saved rule lasts. |
| onceOnlyReason | `string` |  | Explains why there is no saved-rule option. Shown when ruleScope is omitted. |
| state | `"pending" \| "allowed-once" \| "allowed-session" \| "allowed-rule" \| "denied"` |  | State, for controlled use. Uncontrolled it starts pending and follows the choice. |
| onStateChange | `(state: PermissionState) => void` |  | Called after Confirm or Esc with the new state. |
| onDecide | `(decision: { choice: "once" \| "session" \| "always" \| "deny"; note: string }) => void` |  | Called after Confirm, or after Esc with choice "deny". Carries the choice and the trimmed note. |
| autoFocus | `boolean` | `false` | Move focus to the first choice on mount. Use only when the agent cannot continue until the person answers. |
| labels | `PermissionPromptLabels` |  | Replace choice text, the note label, hint and placeholder, and the scope heading. The Esc and N key hints are fixed. |
| className | `string` |  | Extra classes on the section. |

## States

- status: Set with the state prop.

## Tokens

- `--code-bg`
- `--code-fg`
- `--surface-sunken`
- `--border`
- `--success`
- `--danger`
- `--radius-control`
- `--radius-field`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Saving a choice for next time: Choose Allow always to see what the saved choice covers before you confirm.
- A request with several parts: When a request has several parts, each part is listed, and a saved choice covers each one.
- Allow once only: When a saved choice cannot show everything it would allow, offer only Allow once and say why.
- Allow for this session: Add sessionScope to offer a middle choice. It lasts until the session ends and saves nothing for later.
- Keyboard shortcuts: Click inside the prompt, then press N to open the note box or Esc to deny. The line below shows what you chose.
- After you choose: The prompt shrinks to a short summary. These are the three results.

Source: src/organisms/PermissionPrompt.tsx
