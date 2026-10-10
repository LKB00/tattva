# StreamingReveal
Text that appears as it is written, with each new word fading in once.
Status: stable. Page: https://lkb00.github.io/tattva/#component-streaming-reveal
StreamingReveal fades in each new word from a faint blur as it arrives, in --dur-base on --ease-arrive. Words already shown never animate again. A half-written word waits until it is finished, so words appear whole. For people who ask for less motion, text appears at once.
## When to use it

Shows a reply as it is being written, fading in each new word once. Words already shown never move or fade again, so the text stays calm to read.

## Use it for

- The text of an assistant reply while it streams in.
- Any text that grows word by word from a live source.

## Not for

- Content that appears all at once: use `reveal`
- A whole reply with its avatar, cursor and actions: use `message`
- Showing the assistant is busy before any words arrive: use `typing-indicator`

## Anatomy

- Words
- Spaces

## Do

- Add words in place and let lines wrap on their own.
- Pass text in at a steady pace, about 30 times a second at most.
- Mark the reply as finished when it ends so the last word shows.
- Let Message handle what screen readers announce.

## Avoid

- Do not animate height or position.
- Do not rebuild old words, which would replay their fade.
- Do not add your own blur or slide on top of the built-in fade.
- Do not slow the text down to show off the effect.

## On a phone

- Each new word fades in from a faint blur in --dur-base (220ms) on --ease-arrive, and new words add to the end so the text does not jump as it streams.
- With reduced motion turned on in the phone settings, the text just appears.

## Accessibility: built in

- When people turn off motion in their system settings, the text appears with no fade or blur.
- A half-written word is held back until it is complete, so words never appear in pieces.
- Words are real text, so selecting, copying and searching the page still work.
- It announces nothing by itself, so screen readers are not flooded with every new word.

## Accessibility: what you need to do

- Put it inside Message, or another part that tells screen readers when the reply is complete.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| text (required) | `string` |  | Text received so far. Pass the buffer, not a delta. |
| streaming | `boolean` | `false` | While true, a trailing partial word is held back until it is complete. |
| className | `string` |  | Class for the wrapping span. |

## States

- streaming: Set with the streaming prop.

## Tokens

- `--animate-word-in`
- `--blur-arrive`
- `--dur-base`
- `--ease-arrive`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A reply as it is written: Replay writes the text again. Only the newest words are faint.
- Inside a message: The message keeps its blinking cursor and screen reader behavior. This only changes how words appear.

Source: src/molecules/StreamingReveal.tsx
