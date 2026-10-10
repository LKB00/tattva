# Toast
A short message that appears at the edge of the screen and goes away by itself. Includes the provider and the useToast hook.
Status: stable. Page: https://lkb00.github.io/tattva/#component-toast
A toast confirms something that just happened, like saving or copying. Wrap your app in ToastProvider, then call show from useToast. At most three show at once, newest on top. How long it stays follows its content, and update changes a toast in place. The timer pauses while the pointer, focus or a finger is on a toast, and while the page is hidden.
## When to use it

Confirms a result without taking over the screen. It is for information the person can safely miss, so nothing important lives only in a toast.

## Use it for

- Confirming a quick action: saved, copied, sent.
- Offering Undo right after a delete.
- Telling the person that something finished in the background.

## Not for

- An error the person has to fix: use `callout`
- An error that replaces a whole area: use `error-state`
- Asking the person to approve an AI action: use `approval-prompt`
- Asking for permission before an AI uses a tool: use `permission-prompt`
- A choice that blocks the page until it is made: use `dialog`

## Anatomy

- Region
- Tone icon
- Title
- Description
- Action button
- Close button
- Time-left bar (with an action)

## Do

- Use it for results the person can safely miss.
- Keep the title to a few words.
- Leave duration out so it follows the content. Pass 0 for an action the person must not miss.
- Use update to turn a Saving toast into Saved, instead of showing a second toast.
- Mount ToastProvider once, near the root of the app.
- Show an error on the page too when something failed.

## Avoid

- Do not use a toast as the only place for an error or a needed decision.
- Do not use it to ask for approval of an AI action.
- Do not fire several toasts for one event.
- Do not use it for long text. Use a Callout or a Dialog.
- Do not use danger tone for ordinary results. Keep it for failures.

## On a phone

- Toasts sit at the bottom edge, fill the width up to 384px, and stay above the bottom safe area.
- Toasts pause their timer while the pointer is over them, while focus is inside, while a finger is held on the toast, and while the page is hidden, so touch the toast to keep a long message on screen.
- The action and close buttons are 44px tall on a touch screen.
- Up to three show at once, newest on top.

## Accessibility: built in

- The region has role region and the name Notifications. Its list is always on the page with aria-live polite, so new toasts are announced.
- A danger toast has role alert, so it is announced at once.
- Success, danger and info show an icon and the title, so colour is never the only cue. A neutral toast has no status to show and has no icon.
- The timer pauses while the pointer is over a toast, while focus is inside it, while a finger is on it, and while the page is hidden. It carries on from the time left.
- A toast with an action shows a thin bar along the bottom with the time left. It is hidden from screen readers and when motion is reduced.
- A dismissed toast fades out in --dur-fast before it leaves. When motion is reduced it goes at once.
- Escape on a focused control inside a toast closes it.
- The close button is labelled with the title and the action is a real button. Both are 44px on touch screens.
- More than three toasts: the newest three show and older ones wait.
- The region sits bottom centre on phones and bottom right from the md breakpoint. It lets clicks pass through everywhere except the toasts. Entry movement only plays when motion is not reduced.

## Accessibility: what you need to do

- A toast must never be the only place an error or a needed decision appears. Show it on the page as well.
- A toast with an action stays 8 seconds by default. If missing the action would cost the person something, pass duration 0 so it stays until dismissed.
- Do not put anything in a toast that the person must read in a few seconds. Pausing helps, but a toast can still be missed.
- Keep titles short and in plain words, because screen readers read them out as they appear.
- Call show from an event handler or an effect, not during render.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| ToastProvider children (required) | `ReactNode` |  | ToastProvider props: your app. The notification region is drawn after it. |
| ToastProvider className | `string` |  | Classes added to the fixed region, for example to change its offset. |
| useToast().show | `(options: ToastOptions) => string` |  | Adds a toast and returns its id. |
| useToast().dismiss | `(id: string) => void` |  | Removes the toast with that id. It fades out in --dur-fast first, or goes at once under reduced motion. Does nothing if it is already gone. |
| useToast().update | `(id: string, options: Partial<ToastOptions>) => void` |  | Changes a toast in place, for example Saving to Saved. Its timer starts again with the new content. |
| options.title (required) | `string` |  | The short message. Always shown. |
| options.description | `string` |  | One more line of detail. |
| options.tone | `"neutral" \| "success" \| "danger" \| "info"` | `"neutral"` | Success, danger and info add an icon. Danger toasts have role alert. |
| options.action | `{ label: string; onClick(): void }` |  | A button in the toast. Pressing it runs onClick and closes the toast. |
| options.duration | `number` | `follows content` | Milliseconds before it closes. 0 keeps it until dismissed. Left out, it follows the content: 4000 for a title only, 6000 with a description, 8000 with an action. The exported toastDuration(options) gives the same number. |
| title (required) | `string` |  | Toast component: the message. |
| description | `string` |  | Toast component: one more line of detail. |
| tone | `"neutral" \| "success" \| "danger" \| "info"` | `"neutral"` | Toast component: icon and role, as above. |
| action | `{ label: string; onClick(): void }` |  | Toast component: a button in the toast. It does not close the toast by itself. |
| onDismiss | `() => void` |  | Toast component: shows the close button and is called by it and by Escape. Without it neither works. |
| timeLeft | `{ duration: number; paused: boolean }` |  | Toast component: shows a thin bar along the bottom that shrinks over duration milliseconds. paused holds it. Hidden from screen readers and under reduced motion. The provider passes it for toasts with an action. |
| className | `string` |  | Toast component: classes added to the toast. |
| ...rest | `Omit<HTMLAttributes<HTMLDivElement>, "title">` |  | Toast component: passed to the outer <div>. |

## States

- paused: While the pointer is over a toast, focus is inside it, a finger is on it, or the page is hidden, its timer stops. It carries on with the time left, and the time-left bar holds too.
- persistent: A toast with duration 0 stays until it is closed. Without a duration it stays 4s for a title, 6s with a description and 8s with an action.
- updated: update(id, options) changes the toast in place and starts its timer again with the new content.
- time left: A toast with an action shows a thin bar along the bottom that shrinks until it closes. Hidden under reduced motion.
- leaving: A dismissed toast fades out in --dur-fast before it leaves the list. Under reduced motion it goes at once.
- queued: Only three toasts show at once. Older ones wait out of sight and appear when there is room.
- focus: A visible focus ring shows on the action and close buttons when reached by keyboard.
- hover: The action and close buttons get a tinted background under the pointer.

## Tokens

- `--surface-raised`
- `--border`
- `--border-strong`
- `--shadow-lg`
- `--success-fg`
- `--danger-fg`
- `--info-fg`
- `--accent-fg`
- `--fg`
- `--fg-muted`
- `--dur-fast`
- `--dur-base`
- `--focus-ring`
- `--radius-overlay`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Each tone: Neutral, success, info and danger. Every tone except neutral has an icon, and every toast has a title, so colour is never the only cue. A danger toast is announced straight away.
- With an Undo action: Delete first, then offer Undo. The action is a real button. The toast stays for 8 seconds, the default for a toast with an action, and a thin bar along the bottom shows the time left.
- Saving, then saved: Show one toast while the work runs, with duration 0 so it stays. When it ends, update changes the same toast in place. Its timer starts again, here with the 6 seconds a toast with a description gets.
- The Toast on its own: The Toast component has no timer and no region. Use it to draw a toast in a page, or to build your own host. Pass onDismiss to show the close button.

Source: src/molecules/Toast.tsx
