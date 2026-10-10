# GlancePanel
The case at a glance: the deadline, the facts, the rule and the steps, kept in view beside a chat. GlanceSheet is the phone version.
Status: stable. Page: https://lkb00.github.io/tattva/#component-glance-panel
GlancePanel keeps what a worried person keeps coming back to in one place. The headline comes first, usually a Countdown. Then come the facts under What I know, the rule with its citation, and the whole journey under Where it's at, with Done, Now and Next marked in words as well as shapes. GlanceSheet puts the same panel in a bottom Sheet for phones, opened from a button in the page header.
## When to use it

Answers the three worries that repeat in a long chat: how long is left, is the case right, and what happens next. It reads from the same data as the conversation, so the two never disagree.

## Use it for

- A case file beside a chat on a wide screen.
- The same case file in a bottom sheet on a phone, opened from the header.
- A short summary that people check again and again while waiting.

## Not for

- Only the deadline, with no facts or steps: use `countdown`
- A list of steps with no other facts: use `step-timeline`
- A to-do list people tick off themselves: use `checklist`
- A record of what happened, with times: use `timeline`
- A single card that wraps up a result: use `summary-card`

## Anatomy

- Title
- Headline
- What I know
- The rule
- Where it's at

## Do

- Read the panel from the same data as the chat, so they agree.
- Put the deadline first, as the headline.
- Show every step in the journey, so people see what comes next.
- Use GlanceSheet on phones and GlancePanel beside the chat on wide screens.

## Avoid

- Do not show private numbers such as card or bank details in facts.
- Do not mark a step as Now when nothing is happening.
- Do not add long text to facts. Link to the full page instead.
- Do not use the panel for things people must tick off themselves.

## On a phone

- The panel has no frame or fixed width and fills its container, with long values breaking onto the next line.
- On a phone, put it in GlanceSheet, which shows it in a bottom Sheet that opens from a button in the page header.
- Each fact label and value wrap onto two lines when they do not fit side by side.

## Accessibility: built in

- It is an aside landmark named by the title.
- Section headings are real headings at the chosen level.
- Facts are a definition list, so each label is tied to its value.
- Steps are an ordered list. Each step has the word Done, Now or Next for screen readers, and the current step has aria-current set to step.
- State is shown by a check, a number or a ring, and by words for screen readers, never colour alone.
- The ring on the current step only breathes when the person has not asked for reduced motion. With reduced motion it stays still.
- GlanceSheet is a Sheet: a native dialog that makes the page behind inert, closes on Escape and returns focus to the opener.

## Accessibility: what you need to do

- Give the panel a title that names it. It is the landmark name.
- Pass states that match the real case. The panel does not work them out.
- Keep fact values short and in plain words. Mark a fact as edited only when the person changed it.
- In GlanceSheet, set open to false when onClose is called, and give the opener button an accessible name.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title | `string` | `"Case file"` | Names the panel as a landmark and shows at the top. |
| headline | `ReactNode` |  | The first and biggest thing, usually a Countdown. |
| facts | `{ label: string; value: ReactNode; edited?: boolean }[]` |  | Shown as a labelled list under What I know. A fact with edited gets a small Edited tag. |
| rule | `{ title: string; cite?: string; href?: string }` |  | The rule the case rests on. With href the title is a link. |
| steps | `{ id: string; label: string; state: "done" \| "now" \| "next"; detail?: string }[]` |  | The whole journey, numbered, under Where it's at. Done shows a check, Now shows a ring that breathes, and all three are also written for screen readers. |
| headings | `{ facts?: string; rule?: string; steps?: string }` |  | Renames the section headings. Defaults are What I know, The rule and Where it's at. |
| hideTitle | `boolean` | `false` | Hides the visible title but keeps it as the landmark name. |
| headingLevel | `2 \| 3 \| 4` | `2` | Heading level of the section headings. |
| className | `string` |  | Classes for the panel. It has no border or background of its own, so add them here. |
| GlanceSheet open (required) | `boolean` |  | Whether the sheet is showing. Fully controlled. |
| GlanceSheet onClose (required) | `() => void` |  | Called when the sheet asks to close. Set open to false in response. |
| GlanceSheet (other props) | `GlancePanelProps` |  | title, headline, facts, rule, steps, headings, headingLevel and className go to the panel inside. The sheet uses the title as its heading. |

## States

- empty section: A section whose data is missing or empty is left out, so the panel can start with only a headline or only steps.
- step: done: The step shows a check and the words Done for screen readers.
- step: now: The step shows its number inside a ring that breathes, is set as the current step, and is bold. The ring stays still with reduced motion.
- step: next: The step shows its number in muted text.
- edited fact: A fact with edited true shows a small Edited tag before its value.
- link focus: When the rule has an href, the title is a link with a visible focus ring and an underline that goes on hover.
- sheet closed or open: GlanceSheet draws nothing while closed. When open, the page behind is inert and focus returns to the opener on close.

## Tokens

- `--surface`
- `--border`
- `--border-strong`
- `--accent`
- `--success`
- `--success-soft`
- `--success-fg`
- `--fg-muted`
- `--fg-subtle`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- A refund case: A Countdown headline, four facts with one edited, the rule cited with a link, and the journey with one step happening now.
- Steps only: Every section is optional. With only steps, the panel is a small progress view. Use headings to rename the section.
- Two columns beside a message list: On a wide screen the chat takes the main column and the panel sits on the right. ScrollEdge keeps the chat soft under the edges.
- GlanceSheet opened from a status line: On a phone the page header shows a StatusLine as a button. Pressing it opens the same panel in a bottom sheet. Focus returns to the button on close.

Source: src/organisms/GlancePanel.tsx
