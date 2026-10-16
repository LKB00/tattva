# Skeleton
A shimmering gray block that holds the place of content while it loads.
Status: stable. Page: https://lkb00.github.io/tattva/#component-skeleton
Skeleton is a gray block with a soft moving shine. It has no size of its own, so you set its width and height. Use several to sketch the shape of what is about to appear.
## When to use it

A gray block with a soft moving shine that holds the space of content still loading. Several together sketch the shape of what is coming, so the page does not jump when it arrives.

## Use it for

- Lines of text that are loading: vary the widths.
- A list row with a picture and text, before the data arrives.
- Cards or images whose size you already know.

## Not for

- A short wait inside a button: use `spinner`
- The wait before the assistant replies: use `typing-indicator`
- A load that failed: use `error-state`

## Do

- Match the size and position of the real content, so the page does not jump.
- Vary line lengths so it looks like real text.
- Use a round block for pictures of people and gently rounded blocks for text and images.
- Replace the whole group with real content at once.
- Set a width and height on each block. Without them it has no size and shows nothing.

## Avoid

- Do not leave blocks on screen after something fails. Show an error message instead.
- Do not use it inside a button. Use Spinner.
- Do not put text inside a Skeleton. Screen readers cannot see it.
- Do not use a Skeleton and a Spinner for the same area.

## On a phone

- Skeleton has no size of its own. It fills the width and height you give it, so use classes that fit a narrow screen.
- The shimmer runs on a phone unless the person has asked for less motion.

## Accessibility: built in

- Screen readers skip it.
- The shine stops for people who turn off motion in their system settings.
- It cannot be pressed, and the Tab key skips it.

## Accessibility: what you need to do

- Tell screen readers the area is loading, for example with a hidden status message. The blocks themselves are skipped.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| className | `string` |  | Sets the size and any radius override. Without a height and width the block collapses to zero. |
| ...rest | `HTMLAttributes<HTMLDivElement>` |  | Passed to the <div>. |

## Tokens

- `--surface-sunken`
- `--border`
- `--animate-shimmer`

## Examples

### Text lines

Make the lines different lengths so it looks like a paragraph.

```tsx
<div className="flex w-72 flex-col gap-2">
  <Skeleton className="h-3 w-full" />
  <Skeleton className="h-3 w-11/12" />
  <Skeleton className="h-3 w-2/3" />
</div>
```

### Message row

A round block for a picture, with two lines of text beside it.

```tsx
<div className="flex w-72 items-start gap-3">
  <Skeleton className="size-8 rounded-full" />
  <div className="flex flex-1 flex-col gap-2">
    <Skeleton className="h-3 w-24" />
    <Skeleton className="h-3 w-full" />
  </div>
</div>
```

Source: src/atoms/Skeleton.tsx
