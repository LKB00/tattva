# ThreadPage
A full answer with the assistant's thinking, the steps it took, sources and feedback.
Status: stable. Page: https://lkb00.github.io/tattva/#component-thread-page
ThreadPage shows one full reply from the assistant. The reply appears as it is written, after a thinking section and a card showing the step it took. It ends with how sure the assistant is, its sources, message actions and a feedback bar. Those only appear once the reply is finished, so the page does not jump while people read. Suggestion chips offer follow-ups, and the send button becomes Stop while the reply is being written.
## When to use it

A worked example of one full answer: thinking, a step the assistant took, the reply as it is written, then sources and feedback. The extras wait until the reply ends, so the page does not jump.

## Use it for

- A starting point for a research or question-and-answer screen.
- Seeing the order of thinking, steps, answer, sources and feedback.
- Seeing how Stop, streaming text and follow-up suggestions work together.

## Not for

- A long task with approvals and steps: use `workflow-page`
- A tool that makes images or drafts: use `studio-page`

## Anatomy

- Side panel
- Title
- Your message
- Thinking section
- Card for a step the assistant took
- The reply, as it is written
- How sure the assistant is
- Sources
- Message actions
- Feedback bar
- Suggestion chips
- Message box
- AI notice

## Do

- Copy the order: thinking, steps taken, answer, then how sure it is, sources and actions.
- Show the extras only when the reply is finished.
- Put source numbers in the reply so they link to the source cards.
- Show follow-up suggestions after the last reply, and hide them while a reply is being written.

## Avoid

- Do not show feedback or actions while the reply is still being written.
- Do not put the message box inside the scrolling conversation. ThreadTemplate keeps it at the bottom.
- Do not use the sample reply in your real product. Swap in your own.

## On a phone

- The sidebar opens from a Menu button in a side sheet on a phone, and the page shows the conversation.
- Messages, sources and the composer fit one column, and the composer stays at the bottom while the messages scroll.
- The page is 45rem tall at most and never taller than the phone screen height. The composer area clears the bottom safe area.

## Accessibility: built in

- New messages are read out politely. The reply being written is marked busy, then says "Response complete" once.
- The blinking cursor is hidden from screen readers.
- Before words arrive, the typing indicator is read as "Assistant is thinking".
- Sources are a numbered list of links, and the [1] markers in the reply link to them.
- Stop replaces Send while the reply is written, and works from the keyboard.

## Accessibility: what you need to do

- Keep streaming on the reply in step with your real stream, and turn it off when it ends.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| (none) | `-` |  | This page takes no props. It is a reference composition with sample content, meant to be copied and adapted. |

## States

- streaming: Sending a message streams the reply, shows Stop on the composer and holds back sources and feedback until it finishes.

## Tokens

- `--surface-sunken (user bubble)`
- `--lime`
- `--success (confidence)`
- `--border`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Full page: The reply is written when the page loads. Press Stop to interrupt it, or send a message to start another.

Source: src/pages/ThreadPage.tsx
