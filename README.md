# Tattva

**The React component library for AI products.** Parts and patterns for assistants that answer, act and create, with trust built in: sources, confidence, approvals and undo.

**Website:** https://lkb00.github.io/tattva/

- 211 parts, 15 patterns, guides and seven colour themes, light and dark
- Checked against WCAG 2.2 AA in every theme
- npm: [`@tattva/ui`](https://www.npmjs.com/package/@tattva/ui) (free parts) and [`@tattva/mcp`](https://www.npmjs.com/package/@tattva/mcp) (MCP server for AI coding tools)
- Files for AI tools: [`llms.txt`](https://lkb00.github.io/tattva/llms.txt), [`components.json`](https://lkb00.github.io/tattva/components.json) and a Markdown page per part

## Plugins

**Claude Code.** Inside Claude Code, type:

```
/plugin marketplace add LKB00/tattva
/plugin install tattva@tattva
```

It connects the Tattva MCP server, teaches Claude to build with the real parts, and adds `/tattva:build`, `/tattva:find`, `/tattva:review` and `/tattva:theme`.

**Figma.** Download [tattva-figma-plugin.zip](https://lkb00.github.io/tattva/downloads/tattva-figma-plugin.zip), unzip it, then in the Figma desktop app choose Plugins > Development > Import plugin from manifest. It adds Tattva's parts to a file as Figma components with their variants (the free parts; every part comes with Pro), adds the colours, corners, sizes and text styles, and checks a design against Tattva's rules.

## Plans

The docs, tokens and free parts are free. **Pro** unlocks every part. See [pricing](https://lkb00.github.io/tattva/pricing) and the [licence](LICENSE.md).

## What is in this repository

The `gh-pages` branch holds the built website. `main` holds this page, the Claude Code plugin marketplace (`.claude-plugin/`, `plugins/tattva/`) and a few docs. The source of the paid parts is kept private and delivered to buyers.

## Questions and requests

Open an [issue](https://github.com/LKB00/tattva/issues).
