# WorkflowPage
A task in progress, shown as a conversation: heading, checklist, approval request and steps.
Status: stable. Page: https://lkb00.github.io/tattva/#component-workflow-page
WorkflowPage shows a long task as a conversation. A heading and a status line open the page. A checklist shows who still owes a reply, with finished work folded into one line. An approval request holds the next action until a person says yes. A step list shows where the task is overall. The message box stays at the bottom, so a person can still ask a question while the task waits.
## When to use it

A worked example of a long task shown as a conversation. Open items, the decision that needs a person and overall progress stack in one column, and the message box stays for questions.

## Use it for

- A starting point for tasks that wait on people, such as chasing documents.
- Seeing how Checklist, ApprovalPrompt and StepTimeline fit in a thread.
- Showing how to confirm a decision with a short message.

## Not for

- A plain question and answer: use `thread-page`
- One list of everything waiting for the person across tasks: use `needs-you-inbox`

## Anatomy

- Side panel
- Title
- Heading and status
- Checklist
- Approval request
- Decision message
- Step list
- Message box with a context tag
- AI notice

## Do

- Use the conversation layout so follow-up questions stay possible.
- Put the request that needs a person where it is easy to spot, between the checklist and the step list.
- Say what will be sent, to whom and when in the approval request.
- Confirm the outcome of a decision with a message, as the page does.
- Keep the status line under the heading in step with the checklist.

## Avoid

- Do not mark work in progress as needing attention. Amber means a person has to act.
- Do not list finished items one by one. Fold them into one summary line.
- Do not ask for approval without a Deny option.

## On a phone

- The sidebar opens from a Menu button in a side sheet on a phone, and the page shows the workflow in one column.
- The approval buttons keep their size and have a 44px tap area on touch screens. The checklist rows are not tappable.
- The page is 45rem tall at most and never taller than the phone screen height. The composer area clears the bottom safe area.

## Accessibility: built in

- The approval request is announced as an alert dialog named after its action.
- After a choice, a status message says "Decision: Approved" or "Decision: Denied", and screen readers hear it.
- Rows that need attention show a dot, read as "Needs attention", with written status.
- The step list tells screen readers which step is current and the state of each step.

## Accessibility: what you need to do

- Move focus to the approval request if it appears after the page has loaded. The page does not do this.
- Tell people when a step changes state. The step list does not announce it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| (none) | `-` |  | This page takes no props. It is a reference composition with sample content, meant to be copied and adapted. |

## States

- decided: After Approve or Deny is chosen, a line below the prompt states the decision.

## Tokens

- `--attention / --warning-soft`
- `--success (steps)`
- `--border (checklist rules)`
- `font-serif heading`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Full page: Approve or deny the reminder to see the decision message appear under the request.

Source: src/pages/WorkflowPage.tsx
