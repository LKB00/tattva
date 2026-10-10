# PrivateChatBanner
A notice that stays visible during a private chat, says how long a copy is kept, and has Exit.
Status: stable. Page: https://lkb00.github.io/tattva/#component-private-chat-banner
PrivateChatBanner tells people the chat is private for as long as it lasts. The full version says how long a copy is kept and has an Exit button. The small version is a pill for the top bar. Both look neutral. You write the wording, so it states your real time.
## When to use it

Keeps it clear, for the whole chat, that this chat is private and how long a copy is kept. It looks neutral because a private chat is a choice, not a problem.

## Use it for

- The top of a private or temporary chat, for as long as it lasts.
- A small pill in the top bar when space is tight.
- Stating your product's real retention time in your own words.

## Not for

- Confirming that something was saved to memory: use `memory-notice`
- A warning the person must act on: use `callout`

## Anatomy

- Icon
- Name
- How long a copy is kept
- Exit button

## Do

- Keep it visible for the whole private chat.
- Use the small pill when space is tight.
- Change the description if your retention time is not 30 days. The default text says a copy may be kept for 30 days.

## Avoid

- Do not imply that nothing is stored if a copy is kept.
- Do not use amber. Private mode is a choice, not a problem.
- Do not offer to turn it into a regular chat unless your product can.

## On a phone

- The banner fills the width and wraps: the text has a 224px base width, so the Exit button drops to its own line when the row is tight.
- The compact pill stays one line and keeps its desktop height. Its exit button keeps its size and has a 44px tap area on a touch screen.

## Accessibility: built in

- The full banner is a region named by its label, so screen readers can jump to it.
- The small pill's close button has only an icon, and its name includes the mode, such as "Exit private chat".
- The state is said in words, not by color or a border alone.
- The ghost icon is hidden from screen readers.

## Accessibility: what you need to do

- Place the banner before the chat, so screen reader users meet it first. It is not read out when it appears.
- Move focus to a sensible place when Exit ends the private chat.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| variant | `"banner" \| "compact"` | `"banner"` | Full-width strip or header pill. |
| label | `string` | `"Private chat"` | Name of the mode. |
| description | `ReactNode` |  | Retention copy. The default says a copy may be kept for 30 days, so change it if your period differs. |
| onExit | `() => void` |  | Leaves the private chat. The action is hidden when omitted. |
| exitLabel | `string` | `"Exit"` | Label of the banner exit button. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- compact: Set variant to compact for a small pill instead of the full banner.
- exit: Pass onExit to show an Exit button (a close icon in the compact form).

## Tokens

- `--surface-sunken`
- `--border-strong`
- `--fg-muted`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Full banner: Full width. Says how long a copy is kept.
- Small pill: Fits in the top bar next to the title.
- Your own wording: Change the text to match what your product does.

Source: src/molecules/PrivateChatBanner.tsx
