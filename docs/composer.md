# Composer
The box where people type a message, with attach, tools and send or stop.
Status: stable. Page: https://lkb00.github.io/tattva/#component-composer
Composer is where people type to the assistant. Enter sends. Shift and Enter start a new line. It never sends while someone is still choosing a character with an input method. While the assistant is replying, Send turns into Stop. The box grows as you type, then scrolls. Show the attach button only if your app can take files.
## When to use it

The one place people type to the assistant. Send turns into Stop while a reply is being written, so the main button always does what matters right now.

## Use it for

- The message box at the bottom of a conversation.
- A message box inside a Tray on a landing screen.
- A chat where people may need to stop a long reply.

## Not for

- Describing something to make, such as an image, where Enter should add a line: use `prompt-box`
- A short one-line search or filter field

## Anatomy

- Text box
- Attach button (only if files are allowed)
- Tools area
- Character counter
- Send or Stop button

## Do

- Keep one Composer at the bottom of the conversation, as wide as the messages.
- Always let people stop a reply while it is being written.
- Put choices such as project or model beside Send.
- Set the limit to the real one so the counter is honest.
- Pass onAttach only when your app can really take files. The button appears whenever it is set.
- Pass onStop whenever you set generating, so Stop really stops the reply.

## Avoid

- Do not show the attach button if your app cannot take files. A button that does nothing is confusing.
- Do not show more than one Composer in the same conversation.
- Do not add a second send button. Enter and the green button already cover it.
- Do not use the green Send button for anything else. Green marks the one main send action.

## On a phone

- The text box is 16px on a touch screen so the page does not zoom on focus, and it grows up to 200px tall as the person types.
- The attach, tools and send controls wrap onto their own line when they do not fit. Each has a 44px tap area on a touch screen.
- The phone keyboard is asked to show a send key. Enter sends and Shift+Enter adds a new line, which is hard to reach on a phone, so people cannot easily write a second line.
- It does no keyboard or safe-area handling of its own, so keep it above the on-screen keyboard and the bottom safe area yourself.

## Accessibility: built in

- The text box is named "Message" for screen readers.
- Enter sends and Shift and Enter add a new line. Enter never sends while someone is still choosing a character with an input method.
- The buttons are named "Attach file", "Send message" and "Stop generating".
- Send stays off until there is text to send.
- Near the limit a character count appears, and screen readers hear it politely.

## Accessibility: what you need to do

- Show the sent message or an error after onSend, so people know what happened.
- Give anything you put in tools its own name for screen readers.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| placeholders | `string[]` |  | Example messages that take turns as the placeholder while the box is empty, so a blank field shows what kind of thing to type. With reduced motion the first one stays still. Overrides placeholder. |
| placeholderInterval | `number` | `4000` | Milliseconds each example stays. |
| onSend (required) | `(text: string) => void` |  | Called with the trimmed text on Enter or Send. The field is cleared afterwards. |
| generating | `boolean` |  | When true the send button becomes Stop, and submitting is blocked. |
| onStop | `() => void` |  | Called when Stop is pressed while generating. |
| placeholder | `string` | `"Message the assistant…"` | Placeholder text of the textarea. |
| maxLength | `number` | `4000` | Hard limit on the textarea. A counter appears once the text passes 90% of it. |
| onAttach | `() => void` |  | Called when Attach file is pressed. The attach button renders only when this is provided. |
| tools | `ReactNode` |  | Extra controls rendered between the attach button, when present, and the send button. |
| disabled | `boolean` |  | Disables the textarea and Send and dims the whole composer. |

## States

- streaming: Set with the generating prop.
- disabled: Set with the disabled prop.

## Tokens

- `--border-strong`
- `--surface`
- `--shadow-sm / --shadow-md`
- `--fg-subtle`
- `--warning-fg (counter)`
- `--lime (Send)`
- `--radius-field`

## Examples

### Default

Send stays off until something is typed. Try Enter, then Shift and Enter.

```tsx
<div className="max-w-xl">
  <Composer onSend={(text) => console.log(text)} />
</div>
```

### With an attach button

The Attach file button shows only when files are allowed. Press it to see what happens.

```tsx
<div className="max-w-xl">
  <Composer onAttach={() => openFilePicker()} onSend={(text) => console.log(text)} />
</div>
```

### While a reply is being written

The green Send button turns into Stop. Enter does nothing until the reply is done.

```tsx
<div className="max-w-xl">
  <Composer generating onStop={() => {}} onSend={() => {}} />
</div>
```

### With a choice beside Send

Add choices such as a project picker. They sit to the left of Send.

```tsx
<div className="max-w-xl">
  <Composer
    placeholder="Ask about your projects…"
    onSend={() => {}}
    tools={<ContextPill icon={<UsersIcon width={14} height={14} />} onClick={() => {}}>All projects</ContextPill>}
  />
</div>
```

### Near the character limit

The limit here is 40 characters. Type more than 36 to see the counter.

```tsx
<div className="max-w-xl">
  <Composer maxLength={40} placeholder="Type more than 36 characters…" onSend={() => {}} />
</div>
```

### Rotating examples

An empty box shows one example at a time instead of a row of example chips. With reduced motion, the first example stays.

```tsx
<Composer
  onSend={(text) => console.log(text)}
  placeholders={[
    "My order was cancelled but no refund came",
    "UPI payment failed and the money is gone",
    "The flight was cancelled and I want my money back",
  ]}
/>
```

Source: src/organisms/Composer.tsx
