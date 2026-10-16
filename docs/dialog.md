# Dialog
A modal window on the native dialog element, with a title, a body that scrolls and a footer for buttons.
Status: stable. Page: https://lkb00.github.io/tattva/#component-dialog
Dialog asks for one decision or one short task and blocks the page until it is done. It is built on the browser's own dialog element, so the page behind is inert and Tab stays inside. On a phone it becomes a sheet that rises from the bottom. Closing is a quick fade. Your code keeps the open value.
## When to use it

Stops the person to ask for a decision or a small amount of input that must be settled before they go on. Everything behind it is locked until it closes.

## Use it for

- Confirming an action that is hard to undo, such as deleting a project.
- A short form that must be finished before moving on.
- Long content that should stay out of the page until asked for, such as terms.

## Not for

- A message that does not need an answer: use `toast`
- A note that stays on the page: use `callout`
- A short list of choices next to a button: use `popover`
- A menu of actions for one item: use `tool-menu`

## Anatomy

- Backdrop
- Panel
- Danger label (destructive only)
- Title
- Description
- Close button
- Body
- Footer

## Do

- Keep the open value in your own code and set it to false in onClose.
- Name the footer buttons after what they do.
- Put one clear main action in the footer and make the way out equally easy to find.
- Keep the body short. If it needs a full page, make it a page.
- Use tone destructive for actions that cannot be undone.

## Avoid

- Do not open a Dialog for a message that needs no answer. Use a Toast or a Callout.
- Do not stack one Dialog on top of another.
- Do not use it for a short list of choices. Use a Popover or a menu.
- Do not set dismissible to false unless leaving without choosing would cause harm.
- Do not rely on the red tone alone to warn. The label and your wording must say it too.

## On a phone

- On a phone the dialog opens from the bottom as a sheet with rounded top corners; from 640px it is centered.
- It is at most 90% of the screen height, the body scrolls inside, and scrolling does not pass through to the page.
- The footer buttons stack in a column on a phone, sit side by side from 640px, and stay clear of the bottom safe area.
- Tapping the backdrop closes it unless you made it not dismissible.

## Accessibility: built in

- It uses the native dialog element opened with showModal, so the page behind is inert and Tab stays inside the window.
- The title is the dialog's name and the description is read after it. A destructive Dialog has role alertdialog.
- Focus moves to the first control in the body or footer, or the dialog itself when there is none, and returns to the element that opened it once the dialog has gone.
- Escape asks to close through onClose. With dismissible false it does nothing.
- The Close button is labelled "Close" and is 44px on touch screens.
- The danger icon is hidden from screen readers; the word Destructive carries the meaning for everyone.
- The page behind cannot scroll while the dialog is open.
- On phones the panel is a bottom sheet with a maximum height in dvh units, so the on-screen keyboard and browser bars do not hide the footer. Movement only plays when motion is not reduced.
- Closing is a quick plain fade in --dur-fast, faster than opening. The panel cannot be pressed while it fades, and the dialog stays modal until it has gone. When people turn off motion in their system settings, it goes at once.

## Accessibility: what you need to do

- Write a title that says what is being decided, such as "Delete this project?". The title is the dialog's name.
- Label the footer buttons with the outcome ("Delete project"), not Yes and No.
- Put the safe choice first in the reading order, and never make the destructive button the only way to leave.
- If you set dismissible to false, give a footer button that closes it.
- A toast raised while a Dialog is open sits behind the inert page. Show it after the Dialog closes.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| open (required) | `boolean` |  | Whether the dialog is showing. Your code owns it. |
| onClose (required) | `() => void` |  | Called when the person asks to close: Escape, a click on the backdrop or the Close button. Set open to false in response. |
| title (required) | `string` |  | Rendered as the h2 heading and used as the dialog's name through aria-labelledby. |
| description | `string` |  | Shown under the title and linked with aria-describedby. |
| children | `ReactNode` |  | The body. It scrolls when it is too tall. |
| footer | `ReactNode` |  | Usually buttons. They sit in a bar under the body, stacked on phones and in a row from the sm breakpoint. |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Maximum width from the sm breakpoint up: 24rem, 32rem or 42rem. On phones it is always full width. |
| dismissible | `boolean` | `true` | When false, Escape and backdrop clicks do nothing and the Close button is hidden. Only your footer buttons can close it. |
| tone | `"default" \| "destructive"` | `"default"` | Destructive adds a danger icon and the word Destructive above the title, and sets role="alertdialog". |
| className | `string` |  | Classes added to the panel. |

## States

- open or closed: The page behind is inert, cannot scroll, and focus moves into the window. Focus returns to the opener once it has gone.
- closed: With open false nothing is drawn and the page behaves as normal.
- closing: After open turns false the panel fades out in --dur-fast and cannot be pressed. It stays modal until it has gone. Under reduced motion it goes at once.
- scrolling body: When the body is taller than the window, only the body scrolls and the title and footer stay in view.
- bottom sheet: Under the sm breakpoint the panel is full width with rounded top corners and sits at the bottom of the screen.
- focus: A visible focus ring shows on the Close button, on footer buttons and on controls in the body when reached by keyboard.

## Tokens

- `--surface-raised`
- `--border`
- `--scrim`
- `--shadow-lg`
- `--danger-fg`
- `--fg`
- `--fg-muted`
- `--dur-fast`
- `--dur-base`
- `--dur-slow`
- `--focus-ring`
- `--radius-overlay`

## Examples

### Confirm with a footer

The simplest use: a title, a line of context and two buttons. The main action goes last.

```tsx
function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Publish changes</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Publish these changes?" description="People with the link will see the new version right away."
        footer={<>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Publish</Button>
        </>}>
        <p>You can go back to the earlier version from the history list.</p>
      </Dialog>
    </>
  );
}
```

### Destructive with typed confirmation

Tone destructive adds a danger icon and the word Destructive to the title. The delete button stays disabled until the person types the word. Focus starts in the field.

```tsx
function Example() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const close = () => { setOpen(false); setTyped(""); };
  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>Delete project</Button>
      <Dialog open={open} onClose={close} tone="destructive" size="sm" title="Delete this project?" description="All chats and files in it are removed. This cannot be undone."
        footer={<>
          <Button variant="secondary" onClick={close}>Cancel</Button>
          <Button variant="danger" disabled={typed !== "DELETE"} onClick={close}>Delete project</Button>
        </>}>
        <label htmlFor="confirm-delete" className="block text-fg">Type DELETE to confirm</label>
        <input id="confirm-delete" value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete="off"
          className="mt-1.5 h-9 w-full rounded-field border border-line-strong bg-surface px-3 text-fg pointer-coarse:min-h-11" />
      </Dialog>
    </>
  );
}
```

### Long content that scrolls

When the body is taller than the screen, only the body scrolls. The title and the footer stay in view. Try it on a narrow screen to see the bottom sheet.

```tsx
function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Read the terms</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Terms of use" size="lg"
        footer={<Button onClick={() => setOpen(false)}>I have read this</Button>}>
        <div className="space-y-3 text-fg-muted">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i}>Section {i + 1}. This is placeholder text for a long page. The title and the buttons stay in place while this part scrolls.</p>
          ))}
        </div>
      </Dialog>
    </>
  );
}
```

Source: src/organisms/Dialog.tsx
