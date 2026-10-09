---
name: build-with-tattva
description: Build or change screens for AI products with the Tattva design system (React 19, TypeScript, Tailwind v4), such as chat, an agent at work, approval prompts, sources and citations, generative media, charts or whole pages. Use when the project imports @tattva/ui or a ./tattva folder, or when the user mentions Tattva. Finds the real parts through the Tattva MCP server instead of guessing, and checks the code before finishing.
license: See LICENSE.md in the Tattva repository
---

# Building with Tattva

Tattva is a design system for AI products: 211 React parts for conversation, assistants that act, trust and sources, creating, numbers, empty and error states, controls and whole screens. Use the parts that exist. Never rebuild one by hand, and never invent a part that is not in Tattva.

The plugin connects the **tattva** MCP server. Its tools are the source of truth:

| Tool | Use it to |
|---|---|
| `search_components` | find parts for a need in plain words ("ask before acting", "show sources") |
| `get_component` | read one part: props, examples, when to use it, what to avoid, accessibility |
| `list_patterns` | see the 15 patterns, such as Ask before acting or Show your sources |
| `start_project` | ask the six questions for a new product |
| `plan_build` | turn the answers into parts in order, with setup steps and a `tattva.md` brief |
| `review_code` | check finished code against Tattva's rules |
| `get_themes`, `get_tokens` | colour themes, light and dark tokens, sizes and timing |

## Steps

1. **Say what the person using the screen needs to do.** Pick the closest pattern with `list_patterns`.
2. **Find parts.** `search_components` for each need. If nothing fits, say so and ask; do not guess.
3. **Read before using.** `get_component` for every part you will use. Copy its example, then change it. Respect required props and the listed variants.
4. **Check the stage.** `stable` is safe. `experimental` rests on design reasoning only: tell the user. Never use `deprecated` or `retired` parts; use the `replacedBy` part.
5. **Build bottom up**: smaller parts inside larger ones; check `composedOf` and `related`.
6. **Review.** Run `review_code` on what you wrote, fix every finding, then type-check (`npx tsc --noEmit`).

## Setup in a new project

```bash
npm install @tattva/ui
```

In the main CSS file, after Tailwind:

```css
@import "tailwindcss";
@import "@tattva/ui/tokens.css";
@source "../node_modules/@tattva/ui/dist";
```

Then `import { Composer, Message, ApprovalPrompt } from "@tattva/ui";`. The npm package holds the free parts. Pro parts come with a Pro licence (see below).

## Pro parts

Some parts are Pro. When `get_component` says **Code: locked**, do not write your own version of that part. Offer the free alternative it names, or tell the user the part comes with Tattva Pro. Pro buyers can set `TATTVA_LICENSE_KEY` and `TATTVA_API` in their shell before starting Claude Code; the server then unlocks the code.

## Rules

- Tokens only: `var(--surface)`, `var(--fg)` or the Tailwind classes that map to them. No hex, no `rgb()`, no Tailwind palette colours.
- Lime marks AI and nothing else, and only as a fill; text on lime is dark.
- Amber means "a person has to act" and nothing else.
- Sizes come from the type scale (`text-small`, `text-body`, `text-lead`…) with a `leading-*`. Never `text-xs` or `text-sm`.
- Every control has an accessible name. A destructive button says what it does ("Delete project Atlas").
- Status is never colour alone: add an icon and a word.
- Ask before anything that costs money, sends, deletes, shares or changes access, with the exact amount, person or item (`ApprovalPrompt`, `PermissionPrompt`).
- Show where answers come from (`CitationMarker`, `SourceList`) and say how sure they are only from real signals (`ConfidenceIndicator`).
- Import from the package root (`@tattva/ui`) or the kit's index (`./tattva`), never deep paths.
