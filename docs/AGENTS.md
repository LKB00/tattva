# Using Sandstone with AI agents

> The MCP server and the source files it reads come with **Pro** and **Team**. The website files below (`llms.txt`, `components.json`, the Markdown pages and the tokens) are free for anyone.

Sandstone is built so an AI coding agent can pick the right part and use it correctly. This page says how to connect an agent and what rules it should follow.

## Connect the MCP server

The server is one file with no dependencies. It only reads. It never changes your project.

1. Build the data files once: `node scripts/export-assets.mjs` (it also runs in `npm run build` when wired in).
2. Point your agent at `scripts/mcp-server.mjs`. It reads `scripts/mcp-guide.mjs` next to it, so keep the two files together.

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

### The guided build

The easiest way to use the server is to let it lead:

1. **Ask.** The agent calls `start_project` and asks the person up to six plain questions. "Defaults" is a fine answer.
2. **Plan.** It calls `plan_build` with the answers and gets the setup commands, the setup files to write exactly as given (`sandstone.md`, and for a new Vite app `vite.config.ts`, `index.html` and `src/main.tsx`), and the parts in order. Later sessions read that file first, so the product stays consistent.
3. **Build.** For each part it calls `get_component`, then writes the code.
4. **Check.** Before finishing it calls `review_code` on every file and fixes the errors.

In Claude Code the same flow is a ready-made prompt: type `/mcp__sandstone__build`.

### Tools

| Tool | What it does |
|---|---|
| `start_project` | Call first. Returns six short questions for the agent to ask the person (what they are building, framework, colour theme, light or dark, trust behaviours, plan), each with a default. |
| `plan_build` | Turns the answers into a build plan: setup commands, ready-to-write setup files (including the `sandstone.md` brief), the parts to use in build order (Pro parts marked), patterns to read and warnings. |
| `review_code` | Checks a file against the Sandstone rules before the agent finishes: hex colours, deep imports, clickable divs, icon buttons without labels, images without alt text, lime used as text, removed focus outlines, vague destructive buttons and parts that do not exist. |
| `search_components` | Find components by what they are for. Optional category and status filters. |
| `get_component` | Props, what it is for, what to use instead, do and avoid, accessibility (what is built in and what you must do), import line and an example. |
| `list_patterns` | Short answers to common situations, such as asking before an action that cannot be undone. |
| `get_themes` | The colour themes (lime, teal, indigo, harbor, plum, graphite): each theme's AI color in light and dark, paper and ink, soft wash colors, and how to switch to it. |
| `get_tokens` | Colors, timing, sizes and shadows, with what each is for. Light or dark, and optionally for one colour theme. |

Mistakes come back with a fix. Ask for a misspelled component and the server replies with the closest names.

## Files an agent can read without the server

| File | What is in it |
|---|---|
| `public/llms.txt` | Plain index: patterns, case studies and every component with a link. |
| `public/components.json` | Every component: props, types, defaults, do and avoid, accessibility, import line, tokens, related parts, examples. |
| `public/docs/<id>.md` | One Markdown page per component. |
| `public/tokens.dtcg.json` | Tokens in the Design Tokens Community Group format. Light and dark colors are separate groups. |
| `public/themes.json` | The colour themes: each one's AI color, paper, ink, soft washes and every token that differs from the default. |

On the live site the same files are at `https://lkb00.github.io/sandstone/`: `llms.txt`, `components.json`, `tokens.dtcg.json` and `docs/<id>.md`.

`components.json` and `tokens.dtcg.json` are generated from the same source as the documentation pages, so they cannot drift from it. Do not edit them by hand.

## Rules for generated code

1. **Import from the index.** `import { Button } from "./index"`. Never from a deep path such as `./atoms/Button`.
2. **Tokens only.** Use `var(--surface)`, `var(--fg)` and the matching Tailwind classes. Never write a hex value, `rgb()` or a raw pixel color.
3. **Amber means a person has to act.** Use it only for the "needs you" state. Not for warnings, highlights or decoration.
4. **The AI color is a fill, never text.** It is lime by default and changes with the colour theme (`data-palette` on the root element). Always use `var(--lime)`, never the hex. Text on it is dark.
5. **Every control has an accessible name.** Icon-only buttons need a label. A destructive button says its effect: "Delete project Atlas", not "Delete".
6. **Status is never color alone.** Pair it with an icon and a word.
7. **Native elements first.** Use `button`, `a`, `select`, `input` and `dialog` before custom widgets. Give date pickers, comboboxes and multi-selects a typed-text way in.
8. **Mobile first.** Layouts work at 360px wide with no sideways scrolling. Touch targets are at least 44px.
9. **Use the part that exists.** Search first. Do not rebuild a component that is already in the system.
10. **Reduced motion.** Never animate outside the existing motion tokens.
11. **Do not guess.** If no part fits, a prop does not exist, or a colour is not a token, stop and tell the person what is missing. Do not build a lookalike from raw HTML, pass a prop that is not listed, or type a hex value. Ask, or use the nearest token and say which. See `GOVERNANCE.md`.
12. **Respect the stage.** Every part has a stage: experimental, stable, deprecated or retired. Never choose a deprecated or retired part for new work; the entry names its replacement. Tell the person when you use an experimental part, because its details may change.
13. **Cover the states.** Each part lists its states (loading, empty, error, disabled, and so on) in `components.json` under `states`. Build every state the person's screen can reach; do not leave a loading or error view blank.
14. **Direction is not status.** Use `--up` and `--down` (Tailwind `text-up-fg`, `text-down-fg`, `bg-up-soft`) for prices, profit and loss and any number that moves. Use success and danger only for "it worked" and "it failed". Direction always comes with an arrow or a sign, never colour alone. For readers who cannot tell green from red, set `data-direction="cb"` on the root element.
15. **Reserved colours.** The AI colour marks AI, amber means a person must act, **Unsure** (`--unsure`, Badge tone `unsure`) means "not fully sure" or "partly done" and is not a warning, and **Celebrate** (`--celebrate`, Badge tone `celebrate`) is for exactly one thing in a product: a goal fully reached. Never use any of them as decoration.
16. **Use the form and overlay parts.** For fields use Field with TextField, NumberField, Select, Checkbox, RadioGroup, Slider, DatePicker or Combobox, not a raw `<input>`. For overlays use Dialog, Sheet, Menu, Tooltip, Toast or CommandPalette, not a hand-built popup. Ask for several missing facts at once with QuestionSet, show the agent's steps with ActivityTrace, and fold answered cards into a Receipt.

## Checking your work

- `npm run check:atomic` checks the dependency direction.
- `npm run check:docs` checks that every part documents its states and lifecycle.
- `npm run check:readiness` runs a fixed set of agent tasks through the MCP server and scores them.
- `npm run check:a11y` runs an accessibility audit of every page in light and dark (needs a build).
- `npx tsc --noEmit` checks types.
