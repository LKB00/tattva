# Using Sandstone with AI agents

> The MCP server and the source files it reads come with **Pro** and **Team**. The website files below (`llms.txt`, `components.json`, the Markdown pages and the tokens) are free for anyone.

Sandstone is built so an AI coding agent can pick the right part and use it correctly. This page says how to connect an agent and what rules it should follow.

## Connect the MCP server

The server is one file with no dependencies. It only reads. It never changes your project.

1. Build the data files once: `node scripts/export-assets.mjs` (it also runs in `npm run build` when wired in).
2. Point your agent at `scripts/mcp-server.mjs`.

Claude Code (`.mcp.json` in the project root):

```json
{
  "mcpServers": {
    "sandstone": { "command": "node", "args": ["scripts/mcp-server.mjs"] }
  }
}
```

Cursor (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "sandstone": { "command": "node", "args": ["${workspaceFolder}/scripts/mcp-server.mjs"] }
  }
}
```

### Tools

| Tool | What it does |
|---|---|
| `search_components` | Find components by what they are for. Optional category and status filters. |
| `get_component` | Props, what it is for, what to use instead, do and avoid, accessibility (what is built in and what you must do), import line and an example. |
| `list_patterns` | Short answers to common situations, such as asking before an action that cannot be undone. |
| `get_tokens` | Colors, timing, sizes and shadows, with what each is for. Light or dark. |

Mistakes come back with a fix. Ask for a misspelled component and the server replies with the closest names.

## Files an agent can read without the server

| File | What is in it |
|---|---|
| `public/llms.txt` | Plain index: patterns, case studies and every component with a link. |
| `public/components.json` | Every component: props, types, defaults, do and avoid, accessibility, import line, tokens, related parts, examples. |
| `public/docs/<id>.md` | One Markdown page per component. |
| `public/tokens.dtcg.json` | Tokens in the Design Tokens Community Group format. Light and dark colors are separate groups. |

On the live site the same files are at `https://lkb00.github.io/sandstone/`: `llms.txt`, `components.json`, `tokens.dtcg.json` and `docs/<id>.md`.

`components.json` and `tokens.dtcg.json` are generated from the same source as the documentation pages, so they cannot drift from it. Do not edit them by hand.

## Rules for generated code

1. **Import from the index.** `import { Button } from "./index"`. Never from a deep path such as `./atoms/Button`.
2. **Tokens only.** Use `var(--surface)`, `var(--fg)` and the matching Tailwind classes. Never write a hex value, `rgb()` or a raw pixel color.
3. **Amber means a person has to act.** Use it only for the "needs you" state. Not for warnings, highlights or decoration.
4. **Lime is a fill, never text.** Text on lime is dark.
5. **Every control has an accessible name.** Icon-only buttons need a label. A destructive button says its effect: "Delete project Atlas", not "Delete".
6. **Status is never color alone.** Pair it with an icon and a word.
7. **Native elements first.** Use `button`, `a`, `select`, `input` and `dialog` before custom widgets. Give date pickers, comboboxes and multi-selects a typed-text way in.
8. **Mobile first.** Layouts work at 360px wide with no sideways scrolling. Touch targets are at least 44px.
9. **Use the part that exists.** Search first. Do not rebuild a component that is already in the system.
10. **Reduced motion.** Never animate outside the existing motion tokens.

## Checking your work

- `npm run check:atomic` checks the dependency direction.
- `npm run check:a11y` runs an accessibility audit of every page in light and dark (needs a build).
- `npx tsc --noEmit` checks types.
