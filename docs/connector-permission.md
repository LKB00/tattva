# ConnectorPermission
One connected app, and exactly what the AI can do with it.
Status: stable. Page: https://lkb00.github.io/tattva/#component-connector-permission
ConnectorPermission shows an app the assistant is connected to, such as Gmail, with its account and status. It lists what the assistant can do in plain words, each marked See, Change, Send or Delete; Delete stands out. Disconnect asks once, in place. An expired connection says so and offers Reconnect.
## When to use it

Makes clear what an AI can reach in each connected app, so people connect with confidence and can cut access in one step.

## Use it for

- A settings page that lists connected apps.
- Asking someone to connect an app, showing what it allows first.
- Telling people a connection has expired.

## Not for

- Asking before one action the AI wants to take: use `permission-prompt`
- Everything the AI can see in this chat: use `context-panel`
- Setting how much the AI may do without asking: use `permission-mode-switcher`

## Anatomy

- App icon and name
- Account
- Status badge
- What the assistant can do
- Disconnect or Connect
- Last used

## Do

- List every kind of access, including the scary ones.
- Use the app's real name and logo.
- Say when it was last used, so people notice access they forgot.

## Avoid

- Do not hide delete or send access in small print.
- Do not disconnect without one question.
- Do not show the list for an app that is not connected.

## On a phone

- The status badge drops under the app name when the row is narrow.
- The Disconnect question replaces the button in place, so nothing jumps.

## Accessibility: built in

- The card is a region named by the app's name, with a heading for the list.
- Each kind of access is said in words (See, Change, Send, Delete), not only by its icon.
- Disconnect asks in place and moves focus to the safe choice; the question is read out.

## Accessibility: what you need to do

- Write each line as an action in plain words, such as Send email as you.
- Set headingLevel so the app name fits your page outline. It is 3 unless you change it.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| app (required) | `string` |  | The app's name, such as Gmail. |
| icon | `ReactNode` |  | The app's logo, about 24px. |
| account | `string` |  | Which account it is connected to. |
| status (required) | `"connected" \| "off" \| "expired"` |  | Whether it is connected, not connected, or needs signing in again. |
| access (required) | `ConnectorAccess[]` |  | What the assistant can do: { id, label, level: "read" \| "write" \| "send" \| "delete" }. |
| lastUsed | `string` |  | When the assistant last used it, such as 2 hours ago. |
| onConnect | `() => void` |  | Connects or reconnects. Shown when not connected or expired. |
| onDisconnect | `() => void` |  | Disconnects, after one question in place. |
| labels | `ConnectorPermissionLabels` |  | Overrides status, canHeading, levels, connect, reconnect, disconnect, disconnectQuestion(app), keep and lastUsed(when). |
| headingLevel | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Level of the app name's heading. |
| className | `string` |  | Extra classes on the root. |

## States

- status: Set with the status prop.
- connected: A green Connected badge, the list of access, Disconnect and when it was last used.
- asking to disconnect: Disconnect becomes a question in place, with Disconnect and Keep it; focus moves to Keep it.
- not connected: A neutral badge and a Connect button; the list of access is hidden.
- expired: An amber Needs you to sign in again badge and a Reconnect button.
- delete access: A line with delete access uses the danger color and the word Delete.

## Tokens

- `--surface`
- `--bg`
- `--line`
- `--danger-fg`
- `--success`
- `--warning`
- `--radius-card`

## Examples

### Gmail, connected

Press Disconnect: it asks once, in place. Then Connect again.

```tsx
<ConnectorPermission
  app="Gmail"
  icon={<GmailLogo />}
  account="mira@example.com"
  status="connected"
  lastUsed="2 hours ago"
  access={[
    { id: "r", label: "Read your email and attachments", level: "read" },
    { id: "w", label: "Write drafts for you to check", level: "write" },
    { id: "s", label: "Send email as you", level: "send" },
    { id: "d", label: "Delete email", level: "delete" },
  ]}
  onDisconnect={disconnect}
  onConnect={connect}
/>
```

### Expired

When access runs out, say so and offer to reconnect.

```tsx
<ConnectorPermission app="Google Drive" status="expired" access={[{ id: "r", label: "See your files", level: "read" }]} onConnect={reconnect} />
```

Source: src/molecules/ConnectorPermission.tsx
