# RateLimitNotice
An amber message that says when a usage limit resets, with an optional Upgrade button.
Status: stable. Page: https://lkb00.github.io/tattva/#component-rate-limit-notice
RateLimitNotice is a warning Callout titled "You've reached the usage limit." The text says when the limit resets, like "Limits reset in 2 hours." You can add an Upgrade button. The wording is fixed, so give it a short time like 2 hours.
## When to use it

Tells people they reached a usage limit and when it resets. Amber marks that they must wait or act before going on.

## Use it for

- A person has used up their messages or credits for now.
- Offering a way to upgrade: pass onUpgrade.

## Not for

- How much has been used before the limit is reached: use `usage-meter`
- A failure that can be tried again right away: use `error-state`

## Anatomy

- Alert icon
- Title
- Reset time
- Upgrade button

## Do

- Give the real time until the limit resets.
- Offer Upgrade only if it applies to the person's plan.
- Place it where the blocked action would have been.
- Disable the blocked action, or explain it next to the action, so people do not run into the limit again.

## Avoid

- Do not show it before the limit is reached. Use a quieter hint.
- Do not use a full date. Give a short time.
- Do not use it when the service is down. Use ErrorState.

## On a phone

- The message wraps, and on a phone the Upgrade button drops under it so the text keeps its full width.
- Upgrade keeps its size and has a 44px tap area on touch screens.
- It fills the width of its container.

## Accessibility: built in

- Screen readers announce it politely when it appears.
- Upgrade is a real button with visible words.
- The icon is hidden from screen readers. The title and the reset time carry the meaning.

## Accessibility: what you need to do

- Pass a short time, such as "2 hours", because it is read inside "Limits reset in …".

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| resetsIn (required) | `string` |  | Human duration inserted into the sentence Limits reset in {resetsIn}. |
| onUpgrade | `() => void` |  | Adds an Upgrade button when provided. |

## States

- upgrade: Pass onUpgrade to show an Upgrade button next to the message.

## Tokens

- `--warning-soft`
- `--warning-fg`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With upgrade: The Upgrade button is a small primary button.
- Wait only

Source: src/molecules/RateLimitNotice.tsx
