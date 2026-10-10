# EditScopeChip
Says exactly what an AI edit will change, such as Slide 3 or Whole deck, and lets the person change it before sending.
Status: stable. Page: https://lkb00.github.io/tattva/#component-edit-scope-chip
EditScopeChip sits in the composer or a selection toolbar and names the reach of the next AI request: one element, one slide, a set of slides or the whole deck. Pressing it opens a menu of the scopes on offer, with the current one checked. Choosing Whole deck shows its cost beside the chip, before anything is sent. With only one scope, or while the AI is already editing, it is a plain label that says why it cannot change.
## When to use it

Makes the reach of an AI edit visible and changeable, so a request meant for one slide never rewrites the deck.

## Use it for

- The composer of a deck or document editor, beside the send button.
- A selection toolbar, where the selection sets the scope and the person can widen it.
- Any AI edit where a wider scope costs more or changes more.

## Not for

- Choosing which files or chats the AI reads: use `context-pill`
- A general list of actions: use `menu`
- Reviewing what the edit changed afterwards: use `diff-view`

## Anatomy

- AI mark
- Prefix (Edit)
- Scope icon
- Scope in words
- Chevron
- Menu of scopes with check
- Cost line for the whole deck

## Do

- Default to the narrowest scope the selection gives.
- Show the cost of a whole-deck edit before the person sends.
- Use plain words: Slide 3, Slides 3 to 5, Whole deck.

## Avoid

- Don't fill the chip with the AI colour; only the small mark uses it.
- Don't widen the scope by yourself after the person chose it.
- Don't hide a locked chip; say why it cannot change.

## On a phone

- The chip keeps its drawn size and gains a 44px tap area on touch screens.
- The menu opens as a bottom sheet on phones, with 44px rows.
- The scope text truncates on very narrow screens; the full scope stays in the accessible name and in the menu.

## Accessibility: built in

- The chip is a menu button named "Edit scope: Slide 3", with aria-expanded and aria-haspopup.
- Down or Up arrow on the chip opens the menu. Focus lands on the checked scope.
- Scopes are menuitemradio items with aria-checked. Arrows, Home and End move; Enter or Space chooses; Escape closes and returns focus to the chip.
- Without a menu the chip is plain text that reads "Edit scope: This quote", and a lock reason is written beside it.
- The AI mark and icons are hidden from screen readers; the scope is always in words.

## Accessibility: what you need to do

- Offer only scopes that make sense for the current selection, narrowest first.
- Work out the deck cost in your code and pass it as deckCost; update it when the deck changes.
- When you lock the chip, pass disabledReason so the reason is written, not only greyed out.
- Send the chosen scope with the request, and show the person's changes for review before keeping them.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| scope (required) | `EditScope` |  | The current scope: { kind: "element", label } \| { kind: "slides", ids, label? } \| { kind: "deck", label? }. |
| options (required) | `EditScope[]` |  | Scopes the person can switch to. One or none makes the chip a plain label. |
| onChange (required) | `(scope: EditScope) => void` |  | Called with the chosen scope. |
| deckCost | `ReactNode` |  | Cost or reach of a whole-deck edit, from your code. Shown in the menu and beside the chip while the whole deck is chosen. |
| disabled | `boolean` | `false` | Locks the scope, for example while the AI is editing. |
| disabledReason | `string` |  | Written beside a locked chip. |
| prefix | `string` | `"Edit"` | Word before the scope, also used in the accessible name. |
| className | `string` |  | Extra classes on the wrapper. |

## States

- disabled: disabled: dashed border, no menu, disabledReason written beside it.
- closed: Shows the scope in words with a chevron.
- open: Menu of scopes, current one checked.
- whole deck: scope.kind="deck" with deckCost: the cost shows beside the chip.
- single scope: options has one entry or none: a plain label, no menu.

## Tokens

- `--surface`
- `--border`
- `--border-strong`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--lime`
- `--on-lime`
- `--dur-fast`
- `--shape-control`
- `--shape-overlay`

## Examples

### In a composer

The chip names what the request will change. Open it to pick this chart title, slide 3, slides 3 to 5 or the whole deck. The whole deck shows its cost beside the chip before you send.

```tsx
const [scope, setScope] = useState<EditScope>({ kind: "slides", ids: ["3"] });

<EditScopeChip
  scope={scope}
  options={[
    { kind: "element", label: "This chart title" },
    { kind: "slides", ids: ["3"] },
    { kind: "slides", ids: ["3", "4", "5"] },
    { kind: "deck" },
  ]}
  onChange={setScope}
  deckCost="All 12 slides, about 40 credits"
/>
```

### Scattered slides, whole deck, single scope and locked

Slides that are not side by side read as "3 slides". The whole deck carries its cost. With one scope there is no menu. While the AI edits, the chip is dashed and says why it cannot change.

```tsx
<EditScopeChip scope={{ kind: "slides", ids: ["2", "6", "9"] }} options={options} onChange={setScope} />
<EditScopeChip scope={{ kind: "deck" }} options={options} onChange={setScope} deckCost="All 12 slides, about 40 credits" />
<EditScopeChip scope={{ kind: "element", label: "This quote" }} options={[]} onChange={setScope} />
<EditScopeChip scope={{ kind: "slides", ids: ["3", "4", "5"] }} options={options} onChange={setScope}
  disabled disabledReason="Fixed while the AI edits these slides" />
```

Source: src/atoms/EditScopeChip.tsx
