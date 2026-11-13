# DemoStage
The canvas a product demo sits on: a fixed shape, a quiet ground and room around the product.
Also known as: product demo, faux ui, hero demo, animated mockup, showcase, stage.
Status: stable. Page: https://lkb00.github.io/tattva/#component-demo-stage
DemoStage frames a faux UI demo for a landing page or a feature card: a fixed shape (16:9, 4:3, 1:1 or 4:5), a quiet ground, and space around the product so it reads as framed on purpose, not a screenshot pasted in. Bleed lets a window or phone run off the bottom edge. The demo inside is drawn from state, and useDemoScript changes that state one beat at a time: it starts when the stage scrolls into view, pauses when it leaves, and shows the finished frame, still, to people who turn motion off. The stage is one figure with a written label; what moves inside is hidden from screen readers, so the demo is described once, in words.
## When to use it

Shows what an AI product does in a few seconds of motion, on a landing page or in a feature card, without a video file.

## Use it for

- A homepage hero that shows the product at work.
- A feature card that shows one moment, such as an approval.
- Docs that show a flow before people try it.

## Not for

- The real product's screens: use `app-shell`
- An empty or waiting moment told as a small story: use `scene-illustration`

## Anatomy

- Stage
- Ground
- Framed product
- Label for screen readers

## Do

- Show one screen and one story per demo, simplified to what the viewer needs.
- Give every movement a cause: the cursor clicks, then the screen changes.
- Rest on the finished frame for a moment before the loop starts again, so people can read it.

## Avoid

- Do not shrink a whole app into the stage. Crop to the part the story is about.
- Do not loop faster than people can read. A demo they cannot follow teaches nothing.
- Do not use demo motion in the real product. Demo timing is slower on purpose.

## On a phone

- The stage keeps its shape and scales with the column; choose 4:5 for a phone demo.
- On a phone, use PhoneFrame inside rather than a shrunken desktop window.

## Accessibility: built in

- The stage is a figure with the label as its caption, so screen readers hear one sentence, not every moving part.
- Everything inside is hidden from screen readers and cannot be reached with the keyboard.
- With reduced motion, useDemoScript plays every beat at once and stops: the finished frame shows, still.
- The demo starts only in view and pauses when it scrolls away.

## Accessibility: what you need to do

- Write a label that says what happens in the demo, in one sentence.
- Keep each loop under about ten seconds, and give it a moment to rest on the finished frame.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| children (required) | `ReactNode` |  | The framed product: a BrowserFrame, a PhoneFrame or a quiet card. |
| label (required) | `string` |  | One sentence saying what the demo shows, for people who cannot see it. |
| ratio | `"16:9" \| "4:3" \| "1:1" \| "4:5"` | `"16:9"` | Shape of the stage. |
| tone | `"sunken" \| "surface" \| "wash"` | `"sunken"` | The ground: the sunken page colour, the card surface, or the soft AI wash. |
| bleed | `boolean` | `false` | Lets the product run off the bottom edge. |
| ref | `Ref<HTMLDivElement>` |  | Pass the ref from useDemoScript, so the demo starts in view and pauses out of view. |
| className | `string` |  | Extra classes on the stage. |

## States

- playing: The script plays its beats while the stage is in view.
- paused: Out of view, the script stops and waits.
- reduced motion: Every beat plays at once and the finished frame shows, still.
- bleed: The framed product runs off the bottom edge.

## Tokens

- `--surface-sunken`
- `--surface`
- `--ai-wash-1`
- `--radius-card`
- `--dur-demo`

## Examples

### A chat demo in a browser window

A person asks, the answer arrives as cards, the camera pushes in on the price and pulls back. Everything is drawn from state; useDemoScript plays the beats.

```tsx
const [phase, setPhase] = useState(0);
const [cursor, setCursor] = useState({ x: 80, y: 85, pressed: false });
const [focus, setFocus] = useState<{ target: string; scale: number } | null>(null);
const ref = useDemoScript([
  { at: 900, run: () => setCursor({ x: 22, y: 64, pressed: false }) },
  { at: 1800, run: () => setCursor((c) => ({ ...c, pressed: true })) },
  { at: 2000, run: () => setPhase(1) },
  { at: 3400, run: () => setPhase(3) },
  { at: 4400, run: () => setFocus({ target: "[data-demo=first]", scale: 1.8 }) },
  { at: 6100, run: () => setFocus(null) },
], { duration: 7700, reset: () => { setPhase(0); setFocus(null); } });

<DemoStage ref={ref} label="A person asks for a hotel and gets three hotels as cards with prices.">
  <BrowserFrame title="hotels.example/chat">
    <CameraFocus focus={focus}>{/* your product's screen, drawn from phase */}</CameraFocus>
    <DemoCursor x={cursor.x} y={cursor.y} pressed={cursor.pressed} />
  </BrowserFrame>
</DemoStage>
```

### A phone, cropped at the bottom

bleed lets the phone run off the bottom edge, so it reads as a phone without the whole device in view.

```tsx
<DemoStage ratio="4:5" tone="wash" bleed label="On a phone, a person approves sending an email.">
  <PhoneFrame>{/* the mobile screen */}</PhoneFrame>
</DemoStage>
```

Source: src/molecules/DemoStage.tsx
