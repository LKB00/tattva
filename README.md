# Tattva

**The React component library for AI products.** Parts and patterns for assistants that answer, act and create, with trust built in: sources, confidence, approvals and undo.

**Website:** https://lkb00.github.io/tattva/

- 228 parts, 15 patterns, guides and seven colour themes, light and dark. Every part is free, with its code.
- Checked against WCAG 2.2 AA in every theme
- npm: [`@tattva/ui`](https://www.npmjs.com/package/@tattva/ui) (the parts) and [`@tattva/mcp`](https://www.npmjs.com/package/@tattva/mcp) (MCP server for AI coding tools). Latest release: 0.28.0.
- Files for AI tools: [`llms.txt`](https://lkb00.github.io/tattva/llms.txt), [`components.json`](https://lkb00.github.io/tattva/components.json) and a Markdown page per part

## Start

```sh
npm install @tattva/ui
```

The [Get started](https://lkb00.github.io/tattva/start/) page has the rest: the stylesheet line, the fonts and a first screen.

## Plugins

**Claude Code.** Inside Claude Code, type:

```
/plugin marketplace add LKB00/tattva
/plugin install tattva@tattva
```

It connects the Tattva MCP server, teaches Claude to build with the real parts, and adds `/tattva:build`, `/tattva:find`, `/tattva:review` and `/tattva:theme`. Already installed? Run `/plugin marketplace update tattva` to get the latest.

**Other AI tools (Cursor, Claude Desktop).** Add the MCP server: `npx -y @tattva/mcp`. Steps: https://lkb00.github.io/tattva/connect-ai/

**Figma.** Download [tattva-figma-plugin.zip](https://lkb00.github.io/tattva/downloads/tattva-figma-plugin.zip), unzip it, then in the Figma desktop app choose Plugins > Development > Import plugin from manifest. It adds every part to a file as Figma components with their variants, adds the colours, corners, sizes and text styles, and checks a design against Tattva's rules.

## What is in this repository

The `gh-pages` branch holds the built website. `main` holds this page, the Claude Code plugin marketplace (`.claude-plugin/`, `plugins/tattva/`), the [licence](LICENSE.md) and the guides for [AI agents](docs/AGENTS.md) and [governance](docs/GOVERNANCE.md).

## Questions and requests

Open an [issue](https://github.com/LKB00/tattva/issues).
