# Collapsible
A heading with an arrow that shows or hides extra content when pressed.
Status: stable. Page: https://lkb00.github.io/tattva/#component-collapsible
Collapsible is a full-width heading with an arrow. Pressing it opens a hidden section, which grows open and closes a little faster. It starts closed unless you say otherwise. ThinkingBlock and ToolCallCard are built on it. Use it for extra detail most people do not need at first.
## When to use it

Hides detail that most people do not need at first behind a heading they can press. The arrow turns to show whether it is open.

## Use it for

- Advanced options under a simpler form.
- Long detail, such as logs or notes, that would crowd the page.
- Your own expandable section when ThinkingBlock or ToolCallCard do not fit.

## Not for

- The assistant's reasoning: use `thinking-block`
- One step the assistant took, with its status: use `tool-call-card`
- Content that most people need to read

## Anatomy

- Arrow
- Heading
- Hidden section

## Do

- Make the heading say what is inside, like Sources or Full output.
- Use it to tuck away extra detail that would make the page long.
- Add space inside the hidden section yourself.

## Avoid

- Do not hide anything a person must act on.
- Do not put buttons inside the heading. The whole heading is one button.
- Do not stack many of them when tabs or a table would be clearer.

## On a phone

- The whole header row is the button, so the tap target is the full width. On touch screens its tap area is at least 44px tall.
- It opens by tap and has no hover state, so it works the same on a phone.
- The content grows open in place and pushes the page down, with no scrolling area of its own.

## Accessibility: built in

- The heading is a real button. Screen readers say whether the section is open or closed.
- Enter and Space open and close it, and the keyboard stays on the heading.
- When closed, the hidden section is hidden from everyone, so screen readers and the Tab key skip it.
- The arrow is hidden from screen readers.
- The content grows open in --dur-base and closes in --dur-fast, on --ease-arrive. It is clipped only while the height moves, so focus rings inside are not cut off once it is open.
- When people turn off motion in their system settings, it opens and closes at once.

## Accessibility: what you need to do

- Write heading words that make sense alone, because the arrow is not read out.
- Do not put another button or link inside the heading: the heading is already a button.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| header (required) | `ReactNode` |  | Content of the toggle button, shown next to the chevron. |
| children (required) | `ReactNode` |  | Panel content. Stays mounted and is hidden with the hidden attribute once it has finished closing. |
| defaultOpen | `boolean` | `false` | Initial open state. The component is uncontrolled and manages state internally. |
| className | `string` |  | Class applied to the outer wrapper. |

## States

- open or closed: Set with the defaultOpen prop.
- opening: The content grows open and fades in over --dur-base on --ease-arrive. It is clipped only while the height moves. Instant under reduced motion.
- closing: The content shrinks and fades in --dur-fast, then is hidden from everyone with the hidden attribute. Instant under reduced motion.

## Tokens

- `--fg-subtle`
- `--dur-fast`
- `--dur-base`
- `--ease-arrive`

## Examples

### Closed by default

The heading can hold more than words, like a count or a badge.

```tsx
<Collapsible header={<span className="text-body leading-5 font-medium">Advanced options</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">These settings apply to new chats only.</p>
</Collapsible>
```

### Open by default

Start it open when the content is the main reason people came.

```tsx
<Collapsible defaultOpen header={<span className="text-body leading-5 font-medium">Details</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">Created on 4 March by the workspace owner.</p>
</Collapsible>
```

Source: src/molecules/Collapsible.tsx
