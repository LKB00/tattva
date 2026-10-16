# Avatar
A round picture that shows who wrote a message: a letter for a person, a dark circle with a lime spark for the assistant.
Status: stable. Page: https://lkb00.github.io/tattva/#component-avatar
Avatar shows who wrote a message. A person gets the first letter of their name in a light circle. The assistant gets a dark circle with a lime sparkle. Lime fills a circle nowhere else. Screen readers read it as an image with a name.
## When to use it

Shows who wrote a message. A person gets the first letter of their name; the assistant gets a dark circle with a lime spark, so its turns are easy to spot at a glance.

## Use it for

- Beside each assistant reply in a conversation.
- Next to a person's name in a list or a header.
- In tight rows such as a chat list: use the small size.

## Not for

- Several people shown together: use `avatar-stack`
- Showing a status or that something needs a person: use `attention-dot`
- Showing whether a voice assistant is listening or speaking: use `ai-presence`

## Anatomy

- Circle
- Letter or sparkle

## Do

- Use the person's real name so the letter and the screen reader name are right.
- Use small in tight lists and medium beside messages.
- Use the assistant style wherever the assistant speaks, so people recognise it.
- Keep the fixed sizes so avatars stay round.

## Avoid

- Do not use lime for a person. A lime spark on a circle is only for the assistant.
- Do not expect a full name to show. Only the first letter appears.
- Do not use Avatar to show status. Use AttentionDot or Badge.
- Do not change the colors of the assistant avatar.

## On a phone

- Avatar is a fixed 24px or 32px circle and does not change on a phone.
- It is not a control. If it opens a profile or menu, wrap it in a button, which gets a 44px target on touch screens.

## Accessibility: built in

- Screen readers read it as an image named "Assistant" or the person's name.
- The letter and the sparkle are part of that image, so they are not read out on their own.
- It cannot be pressed, and the Tab key skips it.

## Accessibility: what you need to do

- Pass the person's real name, so the letter and the spoken name are right. Without it, screen readers hear "You".
- Wrap it in a button or link yourself if it should open something.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| kind (required) | `"user" \| "ai"` |  | Selects the person or assistant treatment. |
| name | `string` | `"You"` | Used for the initial and for the accessible name of a user avatar. Ignored when kind is "ai". |
| size | `"sm" \| "md"` | `"md"` | 24px (sm) or 32px (md). |
| className | `string` |  | Merged after the base classes. |

## Tokens

- `--code`
- `--lime`
- `--border`
- `--border-strong`
- `--surface-sunken`
- `--fg-muted`
- `--font-serif`

## Examples

### User and assistant

The kind picks the look. The name only matters for a person.

```tsx
<div className="flex items-center gap-3">
  <Avatar kind="user" name="Lokesh" />
  <Avatar kind="ai" />
</div>
```

### Sizes

Small and medium. The sparkle shrinks with it.

```tsx
<div className="flex items-center gap-3">
  <Avatar kind="user" name="Mira" size="sm" />
  <Avatar kind="user" name="Mira" size="md" />
  <Avatar kind="ai" size="sm" />
  <Avatar kind="ai" size="md" />
</div>
```

Source: src/atoms/Avatar.tsx
