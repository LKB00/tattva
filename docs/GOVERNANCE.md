# How Sandstone is run

This page says what Sandstone is for, who decides, how a part is born and retired, and what an AI must do when the system has no answer. People and AI tools read it. If a rule here and a rule elsewhere disagree, this page wins.

## What Sandstone is, and is not

**Is:** a design system for products where an AI model talks to people, works for them, or builds screens for them. Chat, agents, trust, approvals, generated screens, and the data views around them.

**Is not:**
- A general-purpose UI kit. It has no date picker, calendar, rich-text editor or file manager. Use native elements or another library for those, and style them with Sandstone tokens.
- A brand. It ships six colour themes; your brand colour is not one of them. Change the greys and the AI colour through a theme, nothing else.
- A set of marketing page templates.
- A place for one-off screens. If one product needs it and nobody else will, it stays in that product.

When a request falls outside this, say so. Do not stretch a part to cover it.

## Source of truth

- **Code is the source of truth.** There is no separate design file. The documentation, `components.json`, Markdown pages, tokens, themes and the MCP server are all generated from the code and the doc entries at build time. Do not edit generated files by hand.
- **Tokens decide values.** A colour, size or timing lives in `src/tokens/tokens.css` once. Components reference it; they never copy it.
- **Drift is a bug.** If the site, a doc entry and the code disagree, the code is right and the doc entry is fixed in the same change.

## Who decides

| Decision | Who | How |
|---|---|---|
| Add or remove a part, change a token role, change a principle | Owner (`@LKB00`) | Pull request; owner approval required (see `.github/CODEOWNERS`) |
| Bug fix, wording fix, a missing example or state | Any contributor | Pull request; owner review |
| Deprecate or retire a part | Owner | Pull request that sets `lifecycle` (below) and adds a changelog line |
| Bend a rule in one product | The product team | Write down why in that product; do not change Sandstone |
| Add a Pro part | Owner | Pull request that also updates `src/site/pricing.ts` |

When the owner role has more than one person, split `.github/CODEOWNERS` by area (tokens, AI parts, data views, site).

## Adding a part

1. Ask whether it is needed. If an existing part with a prop does the job, add the prop.
2. Follow [CONTRIBUTING.md](CONTRIBUTING.md). A part is not done until it has a purpose, a "not for, use X instead", accessibility notes, every prop described, and its states (`npm run check:docs` enforces this).
3. Start it as **experimental** if it comes from design reasoning and not from products people use. It becomes **stable** when real products or published guidance back it up.

## Lifecycle

Every part has one stage, shown on its page, in `components.json` and through the MCP server.

| Stage | Meaning | What AI tools do |
|---|---|---|
| Experimental | Based on design reasoning. Details may change. | Use it, and tell the person it may change. |
| Stable | Backed by shipped products or published guidance. Changes are listed in what's new. | Use it. |
| Deprecated | Still works, will be removed. | Never choose it for new work. `plan_build` swaps in the replacement; `review_code` warns. |
| Retired | Removed from the system. | `review_code` reports an error. |

To deprecate a part, add this to its doc entry and add a line to the changelog:

```ts
lifecycle: { stage: "deprecated", since: "0.6", removeIn: "0.8", replacedBy: "other-part", note: "Why, and how to move over." },
```

`replacedBy` and `note` are required. `npm run check:docs` fails without them, and fails if a stable part still points readers at a deprecated one. Give at least one release between deprecated and retired.

## When the system has no answer

An AI tool (or a person) building with Sandstone must **stop and say so** instead of inventing. In particular:

- No part fits the request → say which need is uncovered and ask. Do not build a lookalike from raw HTML, and do not rename a part to stretch it.
- A prop you want does not exist → say so. Do not pass it anyway.
- A colour you want is not a token → use the nearest token and say which. Do not write a hex value.
- Two parts could both fit → read the "not for" lines on each; if still unclear, ask.
- A rule here conflicts with what the person asked → say which rule, and let the person decide.

## Keeping it honest

- `npm run check:docs`: every part documents its states and lifecycle; no stale pointers; version numbers agree.
- `npm run check:readiness`: a fixed set of tasks an AI agent would get, run through the MCP server (find the right part, plan a build, catch known mistakes, refuse to guess). It must stay at or above 90%.
- `npm run check:a11y`, `check:keyboard`, `check:mobile`, `check:interactions`: the browser audits.

All of these run on every pull request. A change that makes the system vaguer fails here, not in production.

## What is measured

The success measure is: **where would an AI have to guess?** Every failed readiness task is a place where it would have. Add the failing prompt to `scripts/check-readiness.mjs` when you find a new one in the wild, then fix the docs or the part, not the test.

## Roadmap

Direction, in order. Move an item only by editing this list in a pull request.

1. Real-agent trial: run the MCP server inside Claude Code and Cursor on three small builds, record where it guessed.
2. Hosted MCP for Pro and Team licence holders.
