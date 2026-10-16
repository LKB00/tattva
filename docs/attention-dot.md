# AttentionDot
A small amber dot that means a person has to do something.
Status: stable. Page: https://lkb00.github.io/tattva/#component-attention-dot
AttentionDot is a tiny amber circle. It is the only sign that something needs a person. Examples are a request for approval, a step that failed and needs a decision, or a reply that blocks progress. Always put it next to words that say what is needed. Amber is never for decoration or general warnings.
## When to use it

A tiny amber dot that means a person has to do something before work can go on. Amber is kept for this alone, so the dot always stands out.

## Use it for

- A request waiting for approval.
- A chat or task in a list that is blocked on the person.
- A failed step that needs a decision.

## Not for

- General warnings, or problems the system will fix by itself: use `callout`
- A full list of everything waiting on the person: use `needs-you-inbox`

## Do

- Use it only when a person must act before work can go on.
- Put it next to words that say what is needed.
- Use a specific label like "Approval needed" when the default is too vague.
- Remove it as soon as the person has acted.

## Avoid

- Do not use it for problems the system can fix on its own, or for general warnings.
- Do not use it alone. It must come with words.
- Do not change its color or add another amber element beside it.
- Do not use it as a decorative bullet.

## On a phone

- The dot is a fixed 6px circle and is not tappable, on a phone or anywhere else.
- Place it on or next to a control that has the 44px target, and do not rely on the dot alone to be seen at arm's length.

## Accessibility: built in

- Screen readers read it as an image named "Needs attention", or your label.
- It does not move, so motion settings do not affect it.
- It cannot be pressed, and the Tab key skips it.

## Accessibility: what you need to do

- Put words next to it that say what is needed.
- Give it a specific label, such as "Approval needed", when the default "Needs attention" is too vague.
- Remove it as soon as the person has acted.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| label | `string` | `"Needs attention"` | Accessible name for the dot, applied as aria-label. |

## Tokens

- `--attention`

## Examples

### Beside text

The dot comes with a line saying what the person has to do.

```tsx
<div className="flex items-center gap-2 text-body leading-5 text-fg">
  <AttentionDot label="Approval needed" />
  <span>The assistant wants to run a command on your computer</span>
</div>
```

### In a list row

A chat in a list that is waiting on you. The dot is the marker. The words say why.

```tsx
<div className="flex w-72 items-center justify-between rounded-card border border-line bg-surface px-3 py-2 text-body leading-5 text-fg">
  <span>Quarterly report</span>
  <span className="flex items-center gap-2 text-small leading-4 text-fg-muted">
    <AttentionDot />
    Needs your input
  </span>
</div>
```

Source: src/atoms/AttentionDot.tsx
