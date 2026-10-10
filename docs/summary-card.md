# SummaryCard
An AI-written overview with its sources, a warning to double-check, and a way to give feedback.
Status: stable. Page: https://lkb00.github.io/tattva/#component-summary-card
SummaryCard holds an AI-written overview. The top has an AI label, a title and a status line. Below are the summary, optional extra detail, the list of sources, a note to double-check, and a way to give feedback. Put citation numbers inside the summary so each fact links to its source.
## When to use it

Holds an AI-written overview together with what people need to judge it: an AI label, what it is based on, its sources, a note to double-check and a way to give feedback.

## Use it for

- A summary of a long thread, document or set of search results.
- An overview at the top of results, with sources and citations.
- A summary still being written, with a status line and a spinner.

## Not for

- The closing point of a single answer: use `key-takeaway`
- A normal assistant reply in a chat: use `message`
- A list of sources on its own: use `source-list`

## Anatomy

- AI label
- Title
- Status line
- Summary
- Show more button
- Extra detail
- Sources
- Note to double-check
- Feedback

## Do

- Say in the status line what the summary is based on.
- Put the note to double-check under the content, and make it specific for sensitive topics.
- Put citations in the text, so each fact can be checked.
- Keep the first view short. Put the depth behind Show more.

## Avoid

- Do not make screen readers read the summary as it appears. Update the status line instead.
- Do not remove the AI label.
- Do not leave out sources when the summary states facts.

## On a phone

- The card fills the width with 20px padding. The title row wraps, and the status moves to its own line if it does not fit.
- The Show more button, the feedback buttons and the reasons keep their size and have a 44px tap area on touch screens.
- Sources stack in one column below 640px wide. Citation markers inside the text follow the Citation hover card rules.

## Accessibility: built in

- The card is a section named by its title, and the AI label is written in words.
- The status line is announced when it changes. The summary text is not.
- Show more is a button that tells screen readers whether the detail is open. The detail is hidden when closed.
- Sources are a named, numbered list of links.

## Accessibility: what you need to do

- Report progress by changing the status line, not the summary. Do not make screen readers read the summary as it arrives.
- Put citation numbers inside the summary, so each fact can be checked by keyboard.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| title | `string` | `"Overview"` | Heading and accessible name of the section. |
| aiLabel | `string` |  | Replaces the text of the AI label. |
| status | `ReactNode` |  | Status line in the header. It is a polite status region. |
| generating | `boolean` |  | Shows a spinner beside the status. |
| children (required) | `ReactNode` |  | The summary. |
| detail | `ReactNode` |  | Expandable detail. Omit to hide the control. |
| expandLabel / collapseLabel | `string` | `"Show more" / "Show less"` | Text of the expand control. |
| defaultExpanded / expanded / onExpandedChange | `boolean / boolean / (v: boolean) => void` | `false` | Uncontrolled or controlled expansion. |
| sources | `Source[]` |  | Source cards shown in a numbered list. |
| disclaimer | `ReactNode` | `"AI responses may include mistakes. Check important information."` | Disclaimer line. Pass null to remove it. |
| onFeedback | `(rating, reason?) => void` |  | Shows the feedback row when provided. |
| className | `string` |  | Extra classes on the section. |

## States

- status: Set with the status prop.
- streaming: Set with the generating prop.

## Tokens

- `--surface`
- `--border`
- `--lime`
- `--fg-muted`
- `--fg-subtle`
- `--radius-control`
- `--radius-card`

## Examples

This is a Pro part. Its code comes with Pro and Team: https://lkb00.github.io/tattva/#pricing

- With citations and detail: The numbers open source previews. Show more reveals the detail.
- While the draft is written: A spinner beside the status line shows work in progress. Screen readers announce the status words.

Source: src/organisms/SummaryCard.tsx
