# Message
One turn in a conversation: a bubble for the person, open text across the full width for the assistant.
Status: stable. Page: https://lkb00.github.io/tattva/#component-message
Message shows one turn. A person's messages sit on the right in a soft bubble. The assistant's messages are open text across the full width, with no mark beside them, so long answers are easy to read and short ones do not leave a column of marks down the thread. Screen readers hear "Assistant" before each reply. Set mark to top to show a small AI mark and the name above a reply. While a reply is still appearing, a blinking cursor shows and screen readers stay quiet. When it finishes, they hear one short "Response complete" note. The bottom area holds actions, feedback or sources.
## When to use it

One turn in a chat. The person's words sit in a bubble on the right; the assistant's reply is open text across the full width, so long answers and code have room.

## Use it for

- Each turn of a conversation, from the person or the assistant.
- A reply that is still being written: turn on streaming.
- A finished reply with actions, feedback or sources underneath.

## Not for

- A whole conversation that should be read out as it grows: use `message-list`
- Notes from the app itself, such as limits or errors: use `callout`
- A refusal or a safety stop: use `refusal-notice`

## Anatomy

- Mark and name (optional, above)
- Bubble or plain text
- Blinking cursor
- Bottom area

## Do

- Keep the assistant's text out of a bubble so long text and code have room.
- Put actions and feedback at the bottom, and only after the reply ends.
- Wrap the messages in an area that announces new replies if your app should read them out.
- Show the AI mark once, on the first reply, or not at all. The thread already says who is speaking.

## Avoid

- Do not put the assistant's text in a bubble. The layout needs it open.
- Do not put a mark beside every reply. It pushes the text in and fills the thread with repeated marks.
- Do not add a bottom area to a person's message. It is ignored.
- Remember to mark the reply as finished, or the blinking cursor stays.

## On a phone

- The user bubble is at most 80% of the width, and the assistant text takes the full width.
- The assistant text can shrink to the width of the screen and wraps. Wide children such as tables or code must scroll inside themselves.

## Accessibility: built in

- Screen readers stay quiet while words arrive, then say "Response complete" once.
- The blinking cursor is hidden from screen readers.
- Screen readers hear the name ("Assistant" by default) before every reply, whether or not the mark shows.
- The rise-in motion stops when people turn off motion in their system settings.

## Accessibility: what you need to do

- Set streaming to false when the reply ends. Until then the cursor keeps blinking and nothing is announced.
- Put conversations in MessageList, so screen readers hear new replies as they arrive.
- Give images and charts inside a reply their own text alternatives.
- When more than one assistant or agent speaks, give each its name and set mark to top, so people can see who said what.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variant | `"bubble" \| "plain"` | `"bubble"` | How the person's own turn looks. bubble is a right-aligned bubble. plain is left-aligned serif text with no box, like a line in a letter. It only changes user messages. |
| mark | `"none" \| "top"` | `"none"` | Assistant only. none shows no mark: the reply uses the full width. top shows a small AI mark and the name above the reply. Use it once per thread, or on every reply when more than one assistant speaks. |
| name | `string` | `"Assistant"` | Assistant only. Shown with the mark, and read by screen readers before every reply. |
| showAvatar | `boolean` |  | Deprecated: use mark. true shows the mark above the reply. |
| role (required) | `"user" \| "assistant"` |  | Chooses the layout. User renders a bubble, assistant renders open text across the full width. |
| streaming | `boolean` |  | Assistant only. Shows a blinking caret, sets aria-busy and sets aria-live="off" on the text while tokens arrive. |
| completeLabel | `string` | `"Response complete"` | Assistant only. Announced once through a polite status region when streaming changes from true to false. |
| children (required) | `ReactNode` |  | Message content. |
| footer | `ReactNode` |  | Assistant only. Slot under the content for MessageActions, FeedbackBar or sources. |
| className | `string` |  | Extra classes on the outer wrapper. |

## States

- streaming: Set with the streaming prop.

## Tokens

- `--surface-sunken`
- `--fg`
- `--fg-muted`
- `--lime`
- `--on-lime`
- `--radius-card`

## Examples

### User and assistant

The person's bubble never fills the whole width. The assistant has no bubble.

```tsx
<div className="w-full max-w-xl space-y-6">
  <Message role="user">Can you summarize the meeting?</Message>
  <Message role="assistant">
    <p>The team agreed to ship on Friday and review the open risks on Wednesday.</p>
  </Message>
</div>
```

### Streaming

While words are still appearing, a blinking cursor shows and screen readers do not read each new word.

```tsx
<Message role="assistant" streaming>
  <p>Looking at the notes now, the main decision was</p>
</Message>
```

### With a footer

Add actions and feedback at the bottom once the reply is finished.

```tsx
<Message
  role="assistant"
  footer={
    <div className="space-y-2">
      <MessageActions text="The team agreed to ship on Friday." onRegenerate={() => {}} />
      <ConfidenceIndicator level="high" />
    </div>
  }
>
  <p>The team agreed to ship on Friday.</p>
</Message>
```

### Plain turns, with the mark once

The person's turns are serif text with no bubble. The first reply shows the AI mark and name above it; the rest need no mark, because the thread already says who is speaking.

```tsx
<div className="flex w-full max-w-xl flex-col gap-5">
  <Message role="user" variant="plain">My refund from Flipkart is stuck.</Message>
  <Message role="assistant" mark="top">I read your message and found the order.</Message>
  <Message role="user" variant="plain">Yes, that one.</Message>
  <Message role="assistant">Is the amount ₹3,499?</Message>
</div>
```

Source: src/molecules/Message.tsx
