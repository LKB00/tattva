# MessageList
A column that holds a conversation and reads out new messages.
Status: stable. Page: https://lkb00.github.io/tattva/#component-message-list
MessageList holds the messages of one conversation in a centered column with even spacing. Screen readers read out each new message as it arrives. A reply that is still being written stays quiet until it is done, then says so once.
## When to use it

The column that holds one conversation. It reads new turns out to screen readers as they are added, so people who cannot see the screen can follow along.

## Use it for

- The messages of one conversation, in order.
- A thread where replies arrive while the person waits.
- A page with more than one conversation, each with its own name.

## Not for

- A single turn on its own: use `message`
- The box where people type: use `composer`
- A list of past chats: use `conversation-list`

## Anatomy

- Conversation area
- Messages

## Do

- Put each message directly inside it so each new one is read out.
- Mark the reply as still being written while its words arrive.
- Give each conversation its own name when a page shows more than one.
- Place it inside ThreadTemplate, which already sets a good reading width.

## Avoid

- Do not put the message box inside it. Everything added there is read out.
- Do not rebuild the list for every new word. Update the last message instead.
- Do not add other read-out areas inside it.

## On a phone

- Fills the width of its container up to 768px, so on a phone it is the full width with a 24px gap between messages.
- It does not scroll or pin itself. Your scrolling parent must handle the on-screen keyboard and the bottom safe area.

## Accessibility: built in

- Screen readers hear each new message as it is added, without being cut off.
- Changes to messages already on screen are not read out again.
- It is named "Conversation" for screen readers unless you give it another name.
- It has no keyboard controls of its own.

## Accessibility: what you need to do

- Put each Message directly inside it, so each new one is read out.
- Set streaming on the reply that is still being written, and turn it off when it ends.
- Give each list its own label when a page shows more than one conversation.
- Keep the message box and other read-out areas outside it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | The messages, in order. Usually Message components. |
| label | `string` | `"Conversation"` | Accessible name of the log region. Change it when more than one thread is on screen. |

## Tokens

- `max-w-3xl reading width`
- `gap-6 spacing`

## Examples

### A short conversation

Your messages and the assistant's replies stack in one column.

```tsx
<MessageList>
  <Message role="user">Summarise the meeting notes.</Message>
  <Message role="assistant">The team agreed to ship on Friday and review metrics next week.</Message>
</MessageList>
```

### A reply that is still being written

Give the conversation a name for screen readers. A reply that is still being written shows a blinking cursor.

```tsx
<MessageList label="Revenue analysis">
  <Message role="user">What drove growth?</Message>
  <Message role="assistant" streaming>Revenue grew mostly because of enterprise renewals</Message>
</MessageList>
```

Source: src/organisms/MessageList.tsx
