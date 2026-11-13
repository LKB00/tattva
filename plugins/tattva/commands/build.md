---
description: Build a screen with Tattva parts, from a plain description
argument-hint: [what to build, in a sentence]
---

Build this with the Tattva design system: $ARGUMENTS

Follow the build-with-tattva skill. Use the tattva MCP server:

1. If this is a new product or the request is vague, call `start_project` and ask the user its questions one at a time, with AskUserQuestion so they can click an answer. Skip what the request already says; "defaults" ends the questions. Otherwise go straight on.
2. For a new product, call `plan_sitemap` and show the user the screens, navigation and journey; ask them to approve it or say what to change (AskUserQuestion works well). Pass the approved map to `plan_build` as `sitemap`.
3. Call `plan_build` (or `search_components` for each need) to choose the parts. Read every chosen part with `get_component` before using it.
4. Write the screens from those parts only. Tokens only, no hex, lime only for AI, amber only where a person must act.
5. Call `review_code` with `paths` on what you wrote and fix every finding. Then run `npx tsc --noEmit` if the project has TypeScript.
6. Look at it. Start the app in the background (for example `npm run dev`), call `check_screen` with its local address, fix what it reports, and open the phone and desktop screenshots it saves to see the screen yourself. If check_screen says no browser is installed, ask the user before installing one.
7. Finish with a short list: the parts used, what you checked on screen, and anything you could not do.
