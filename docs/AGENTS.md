# Using Tattva with AI agents

Tattva is built so an AI coding agent can pick the right part and use it correctly. This page says how to connect an agent and what rules it should follow.

## Connect the MCP server

Easiest: download `tattva-mcp.zip` from the Downloads page (or https://lkb00.github.io/tattva/downloads/tattva-mcp.zip). It holds the two files below and a plain README, reads its data from the live site, and needs only Node 18+. Step-by-step for each tool: https://lkb00.github.io/tattva/#connect-ai. Set `TATTVA_DATA` to a folder to read the data from disk instead.

The server is one file with no dependencies. It only reads. It never changes your project.

1. Build the data files once: `node scripts/export-assets.mjs` (it also runs in `npm run build` when wired in).
2. Point your agent at `scripts/mcp-server.mjs`. It reads `scripts/mcp-guide.mjs` next to it, so keep the two files together.

Claude Code (`.mcp.json` in the project root):

```json
{
  "mcpServers": {
    "tattva": { "command": "node", "args": ["scripts/mcp-server.mjs"] }
  }
}
```

Cursor (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "tattva": { "command": "node", "args": ["${workspaceFolder}/scripts/mcp-server.mjs"] }
  }
}
```

### The guided build

The easiest way to use the server is to let it lead:

1. **Ask.** The agent calls `start_project` and asks the person a few plain questions, one at a time, as clickable choices where the tool has them. It skips what the request already says, and "defaults" ends the questions.
2. **Plan.** It calls `plan_build` with the answers and gets the setup commands, the setup files to write exactly as given (`tattva.md`, and for a new Vite app `vite.config.ts`, `index.html` and `src/main.tsx`), and the parts in order. Later sessions read that file first, so the product stays consistent.
3. **Build.** For each part it calls `get_component`, then writes the code.
4. **Check.** Before finishing it calls `review_code` on every file and fixes the errors.

In Claude Code the same flow is a ready-made prompt: type `/mcp__tattva__build`.

### Tools

| Tool | What it does |
|---|---|
| `start_project` | Call first. Returns short questions for the agent to ask the person (what they are building, framework, colour theme, light or dark, trust behaviours, plan), each with a default. |
| `plan_build` | Turns the answers, and the idea in the person's words, into a build plan: setup commands, ready-to-write setup files (including the `tattva.md` brief), the parts to use in build order, patterns to read and warnings. |
| `review_code` | Checks a file against the Tattva rules before the agent finishes: hex colours, deep imports, clickable divs, icon buttons without labels, images without alt text, lime used as text, removed focus outlines, vague destructive buttons, parts that do not exist, props a part does not have, missing required props, values outside a part's options, placeholder text, and parts newer than the installed `@tattva/ui`. Pass `paths` and it reads the files itself, only inside the project. |
| `search_components` | Find components by what they are for, with the words each matched. Optional category and status filters. |
| `get_component` | Props, what it is for, what to use instead, do and avoid, accessibility (what is built in and what you must do), import line and an example. `ids` reads several at once; `brief` returns only props and the import. Warns when the installed `@tattva/ui` is too old for the part. |
| `list_patterns` | Short answers to common situations, such as asking before an action that cannot be undone. |
| `get_themes` | The colour themes (lime, teal, indigo, harbor, plum, graphite, terminal): each theme's AI color in light and dark, paper and ink, soft wash colors, and how to switch to it. |
| `get_tokens` | Colors, timing, sizes and shadows, with what each is for. Light or dark, and optionally for one colour theme. `query` finds tokens by purpose, such as "text on lime". |
| `whats_new` | The parts added and updated in each release since a version (by default the installed one), and the upgrade command. |

Mistakes come back with a fix. Ask for a misspelled component and the server replies with the closest names.

## Files an agent can read without the server

| File | What is in it |
|---|---|
| `public/llms.txt` | Plain index: patterns, case studies and every component with a link. |
| `public/components.json` | Every component: props, types, defaults, do and avoid, accessibility, import line, tokens, related parts, examples. |
| `public/docs/<id>.md` | One Markdown page per component. |
| `public/tokens.dtcg.json` | Tokens in the Design Tokens Community Group format. Light and dark colors are separate groups. |
| `public/themes.json` | The colour themes: each one's AI color, paper, ink, soft washes and every token that differs from the default. |

On the live site the same files are at `https://lkb00.github.io/tattva/`: `llms.txt`, `components.json`, `tokens.dtcg.json` and `docs/<id>.md`.

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

17. **Money and markets.** Show every price with Price (or Money), every move with PriceChange so the sign and an arrow always appear, and say how old market data is with DataFreshness. An order an AI drafted goes through ActionDraft so the person edits and presses Confirm; never send an order or any action from code the person did not click. Show limits with RiskLimits and keep exits open when trading is paused. Charts (CandlestickChart, Heatmap, PayoffChart) always ship with their keyboard reading, do not remove it. Draw menus inside lists and side bars with `portal`.

18. **No hard-coded sizes or colours.** Never write `text-[13px]`, `gap-[10px]`, `rounded-[18px]`, `w-[260px]`, `z-[60]`, `bg-white` or a hex colour in a class. Font sizes are tokens (`text-nano`, `text-micro`, `text-small`, `text-compact`, `text-body`, `text-body-lg`, `text-lead`, `text-lead-lg`, `text-subhead`, `text-title-*`, `text-head-*`, `text-display-*`, plus the role tokens `text-label`, `text-note`, `text-row`, `text-input`, `text-answer`, `text-panel`). Spacing, widths and heights use the Tailwind scale (1 = 0.25rem, so 260px is `w-65`). Corners are `rounded-*` tokens, line heights `leading-*`, letter spacing `tracking-*`, wide containers `max-w-read`, `max-w-form`, `max-w-narrow`, `max-w-phone`, `max-w-wide`. If a value you need does not exist, add a token in `tokens.css` and say so; do not write the raw value. `npm run check:docs` fails on raw values.

19. **Design for a phone first.** Lay screens out in one column and add columns for wider screens. Keep every pressable thing at least 44px on touch (the parts already do; do not shrink them). Never set a form field under 16px or text under 12px. Put the main action where a thumb reaches. Fixed bars at the bottom add `pb-(--safe-bottom)`; at the top `pt-(--safe-top)`. Use `dvh`, never `vh`. Do not hide anything behind hover. For a table of many columns use `DataTable` with `responsive="stack"`; for a menu use `Menu` (it becomes a bottom sheet on phones). Read the "On a phone" section of each part in `components.json` (`onPhone`) before using it. `npm run check:phone` verifies this on a 390px touch screen.

20. **Corners come from roles.** Use `rounded-control` (buttons, chips), `rounded-field` (text fields), `rounded-card` (cards, panels, frames) and `rounded-overlay` (dialogs, menus, sheets, toasts). Never `rounded-xl`, `rounded-2xl` or a pixel radius on those. Keep `rounded-full` only for true circles: avatars, dots, switches, spinners. A product picks its shape with `data-shape="round" | "soft" | "sharp"` on `<html>`, or sets `--shape-control`, `--shape-field`, `--shape-card` or `--shape-overlay` itself.

21. **Talk to the person in plain words.** The person may not be a developer. When something is blocked (the package will not install, the website will not open), say what you could not do, what it means for them and the one thing to do next. Never show error codes such as 403 or words such as proxy, registry, policy, sandbox or token, and do not narrate your attempts. Name Pro parts and the paid plan in everyday words, and mark every stand-in in the code. The full wording, with examples, is at the top of `llms.txt`.

22. **Actions use the action colour.** Primary buttons, links and the selected state use `--action` (through the `accent` classes: `bg-accent text-on-accent`, `text-accent-fg`). Each theme sets its own deep action colour; never use the AI colour (`--lime`) for a button or link, and never hard-code ink (`bg-fg`) for a primary action, or the theme stops reaching it. A brand colour goes in `--action`, with white text on it at 4.5:1 or better.

## Checking your work

- `npm run check:atomic` checks the dependency direction.
- `npm run check:docs` checks that every part documents its states and lifecycle.
- `npm run check:readiness` runs a fixed set of agent tasks through the MCP server and scores them.
- `npm run check:a11y` runs an accessibility audit of every page in light and dark (needs a build).
- `npx tsc --noEmit` checks types.
