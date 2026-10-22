---
description: Build a screen with Tattva parts, from a plain description
argument-hint: [what to build, in a sentence]
---

Build this with the Tattva design system: $ARGUMENTS

Follow the build-with-tattva skill. Use the tattva MCP server:

1. If this is a new product or the request is vague, call `start_project` and ask the user its questions one at a time, with AskUserQuestion so they can click an answer. Skip what the request already says; "defaults" ends the questions. Otherwise go straight on.
2. Call `plan_build` (or `search_components` for each need) to choose the parts. Read every chosen part with `get_component` before using it.
3. Write the screen from those parts only. Tokens only, no hex, lime only for AI, amber only where a person must act.
4. Call `review_code` on what you wrote and fix every finding. Then run `npx tsc --noEmit` if the project has TypeScript.
5. Finish with a short list: the parts used, and anything you could not do.
