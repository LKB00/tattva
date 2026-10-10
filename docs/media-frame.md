# MediaFrame
An image in a fixed shape, with a placeholder while it loads, a message if it fails, and an optional caption and AI label.
Status: stable. Page: https://lkb00.github.io/tattva/#component-media-frame
MediaFrame saves a box in one of four shapes before the image arrives, so the page does not jump. While loading, it shows the image's main color if you give one, or a shimmer if you do not. If the image fails, it shows an icon and a Retry button. A description of the image is required, unless the image is only decoration.
## When to use it

Shows an image without making the page jump. It saves the space first, fills it with a placeholder, and offers Retry if the image fails.

## Use it for

- A photo or generated image in a reply or a card.
- An image that may load slowly or fail.
- An AI-made image that needs a label saying where it came from.

## Not for

- Several images in a gallery: use `media-grid`
- A drawing for an empty or error screen: use `illustration`
- An AI-made option the person picks from: use `variant-tile`

## Anatomy

- Frame
- Placeholder
- Image
- Error message
- AI label
- Caption

## Do

- Describe what the image shows.
- Give the main color when you have it, so the placeholder matches the image.
- Label AI-made images with the visible AI label.
- Use one shape for a group of images.

## Avoid

- Do not use the AI request as the image description. Describe what is in the picture.
- Do not leave out the description unless the image is only decoration.
- Do not hide the AI label to make an image look cleaner.
- Do not let images pick their own size. Without a set shape, the page jumps.

## On a phone

- The frame fills the width of its container and keeps its ratio, so the height follows the width.
- The AI label sits at the bottom left of the image, and with provenance it opens a popover from a button that has a 44px tap area on touch screens.
- The Retry button keeps its size on touch screens and has a 44px tap area. Keep errorLabel short so the error tile fits a small frame.

## Accessibility: built in

- The description is required. With decorative, the image gets an empty one and screen readers skip it.
- With a caption, the image and caption form one figure, so screen readers read them together.
- If the image fails, the message is real text and Retry is a real button.
- The AI label is written in words. With provenance, it is a button: Enter, Space or a tap opens it, and Escape closes it.
- The placeholder shimmer and the fade-in stop when people turn off motion in their system settings.

## Accessibility: what you need to do

- Write alt text that says what the image shows, not how it was made.
- Set decorative only when the image adds nothing the text does not.
- Announce a failed load yourself if people must know. The error message appears without being announced.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| src (required) | `string` |  | Image URL. |
| alt (required) | `string` |  | What the image shows. Ignored when decorative is set. |
| decorative | `boolean` |  | Renders alt="". |
| ratio | `"1:1" \| "4:3" \| "16:9" \| "3:2"` | `"4:3"` | Fixed aspect ratio that is reserved before load. |
| dominantColor | `string` |  | Average color as a CSS color. Used as the placeholder. Without it a shimmer shows while loading. |
| caption | `string` |  | Wraps the frame in figure and adds a figcaption. |
| aiGenerated | `boolean` |  | Shows the AI label on the image. |
| aiLabel | `string` | `"AI-generated"` | Text of the label. |
| provenance | `Omit<ProvenancePopoverProps, "label">` |  | When set, the label opens a ProvenancePopover with these details. |
| onRetry | `() => void` |  | Called when Retry is pressed. The image is requested again either way. |
| status | `"loading" \| "error"` |  | Forces a state, for previews or controlled loading. |
| errorLabel | `string` | `"Image could not load"` | Text in the error tile. |
| retryLabel | `string` | `"Retry"` | Text of the retry button. |
| className | `string` |  | Extra classes for the frame wrapper. |

## States

- status: Set with the status prop.

## Tokens

- `--surface-sunken`
- `--border`
- `--dur-base`
- `--lime-soft`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- Ratios: Pick the shape that fits the content. The frame crops the image to fill it.
- Loading and failed: With a main color, the placeholder uses it. Without one, it shimmers. The error message offers Retry.
- Made by AI, with details: The label is written on the image. With details added, it opens a panel with more.
- Decorative: Decorative images have an empty description, so screen readers skip them.

Source: src/molecules/MediaFrame.tsx
