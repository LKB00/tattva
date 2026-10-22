# SceneIllustration
An animated scene for empty, waiting, trust and success moments, told with objects and one lime shape.
Also known as: animation, lottie, animated illustration.
Status: stable. Page: https://lkb00.github.io/tattva/#component-scene-illustration
SceneIllustration plays one of 35 Tattva scenes from a Lottie file. Each scene tells a small story with objects, and its lime shape shows part of that story: a phone screen, a highlighter, a door, a moon. It plays a short entrance, then a calm loop that carries the meaning, and pauses while off screen. Its colours follow light and dark mode, and it holds still when a person asks for less motion.
## When to use it

A larger, moving picture for the moments that matter in an AI product: the first message, waiting, asking first, showing sources, a polite no, done. It helps people read the moment at a glance.

## Use it for

- The art slot of an EmptyState on a full page or a large panel.
- Onboarding, first-use and success screens.
- Explaining an AI moment, such as asking before acting or showing sources, on a page or in a guide.

## Not for

- Small areas, dense panels or lists: use `illustration`
- A heading or a list of features: use `pictogram`
- A spinner while something loads for a second or two: use `spinner`

## Anatomy

- Lime shape that shows part of the story
- Objects in dark line on light fill
- Solid dark accents

## Do

- Use a scene to support the words on a screen, never to replace them.
- Pick the scene whose story matches the message, so the picture and the words agree.
- Show at most one moving scene on a screen.
- Use the still picture on busy pages and in long lists.

## Avoid

- Do not use a scene where a spinner or a short status line is enough.
- Do not recolour scenes. They take their colours from the theme so dark mode works.
- Do not put two moving scenes next to each other.
- Do not add text inside a scene. Put the words beside it.

## On a phone

- Choose size sm or fill on a phone; the height follows at four by three.
- The scene is not tappable and has no text, so nothing changes on touch screens.
- It pauses while scrolled out of view, which saves battery.

## Accessibility: built in

- Without a label, screen readers skip the scene.
- With a label, screen readers read it as a picture and say the label.
- The keyboard never stops on it.
- When a person asks for less motion, the scene shows its finished picture and never moves.
- It pauses while off screen and never flashes.

## Accessibility: what you need to do

- Leave out the label when the words beside the scene already say what it shows, which should be almost always.
- Give a label only when the scene adds meaning the words do not.
- Show one moving scene per screen at most, so motion never competes for attention.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| data | `object` |  | The scene's Lottie data, for example imported from @tattva/ui/scenes/<name>.json. |
| src | `string` |  | Address of a scene's Lottie file. Used when data is not given. |
| label | `string` |  | Accessible name. Without it the scene is hidden from assistive tech. |
| motion | `"loop" \| "once" \| "still"` | `"loop"` | Entrance then a calm loop, entrance only, or the finished picture. Reduced motion always shows the still picture. |
| size | `"sm" \| "md" \| "lg" \| "fill"` | `"md"` | Width 12rem, 18rem, 30rem or the container's width. Height follows at 4:3. |
| className | `string` |  | Extra classes for the scene's box. |

## Tokens

- `--fg`
- `--surface`
- `--lime`

## Examples

### In an empty screen

Put the scene in EmptyState's art slot. The words say what happened; the scene sets the tone.

```tsx
import firstUse from "@tattva/ui/scenes/first-use.json";

<EmptyState
  variant="first-use"
  art={<SceneIllustration data={firstUse} size="sm" />}
  action={<Button>Ask a question</Button>}
/>
```

### Loop, once or still

Loop suits a waiting screen. Once suits a success that should settle. Still suits pages with a lot going on. Reduced motion always shows the still picture.

```tsx
<SceneIllustration data={working} motion="loop" />
<SceneIllustration data={success} motion="once" />
<SceneIllustration data={approval} motion="still" />
```

### Loading the file by address

The scene files are also served on the Tattva site and ship in the npm package, so you can load one by address instead of importing it.

```tsx
<SceneIllustration src="/scenes/confidence.json" label="A dial with the needle high in the lime" />
```

### All scenes

Each scene has one job. Pick the one that matches the moment, not the one you like best.

```tsx
{sceneNames.map((name) => (
  <SceneIllustration key={name} src={`/scenes/${name}.json`} size="sm" motion="still" />
))}
```

Source: src/molecules/SceneIllustration.tsx
