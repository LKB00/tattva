---
description: Switch or explain Tattva's colour themes, corners and dark mode
argument-hint: [theme name, e.g. teal, or empty to list them]
---

Help with Tattva's look: $ARGUMENTS

Call the tattva MCP server's `get_themes`. If no theme was named, list the themes with one line each and how to switch. If one was named, show how to apply it: set `data-palette="<id>"` on the `<html>` element (the default, lime, needs no attribute), `data-shape="round|soft|sharp"` for corners, and the `dark` class or `data-theme="dark"` for dark mode. Use `get_tokens` if the user needs exact values. Remind them that lime marks AI and amber marks "a person has to act" in every theme.
