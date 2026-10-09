---
description: Check code against Tattva's rules and fix what it finds
argument-hint: [file or folder, optional]
---

Review UI code against the Tattva design system rules. Target: $ARGUMENTS (if empty, use the files changed in this session or the current git diff).

For each file, call the tattva MCP server's `review_code` with its contents. Then:

1. List every finding with the file, the line and the rule, grouped by file.
2. Fix the findings that are safe to fix (hard-coded colours, missing accessible names, deep imports, lime used as text, deprecated parts) and say what you changed.
3. Leave anything that needs a product decision as a question for the user.
