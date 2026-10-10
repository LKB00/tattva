# DatePicker
An inline month calendar for recent dates, with day buttons, quick Today and Yesterday, and the choice repeated in words.
Status: stable. Page: https://lkb00.github.io/tattva/#component-date-picker
DatePicker shows one month at a time, right in the page, not in a pop-up. It opens on the chosen day, or on today. Days outside min and max are shown but cannot be picked, so a wrong date cannot be entered. Below the grid it says the choice in words, such as the weekday, the date and how many days ago, which is easier to check than a highlighted square.
## When to use it

Pick one date that is almost always recent, with big targets for a thumb and a plain-words check of what was chosen.

## Use it for

- The date something happened or was reported, when it was in the last few weeks.
- A date that must stay inside a range, such as not in the future or not before another date.
- A form on a phone, where the browser's own date picker looks different on every device.

## Not for

- A date far in the past or future, such as a birth date, where typing is faster: use `text-field`
- A calendar that opens from a button as a floating panel: use `popover`
- A whole number, such as a day count: use `number-field`
- Choosing from a short fixed list: use `select`

## Anatomy

- Today and Yesterday buttons
- Month and year
- Previous and next month buttons
- Weekday headers
- Day grid
- Confirmation line

## Do

- Use it for dates that are almost always recent.
- Set max or min when a day is not allowed, so a wrong date cannot be picked.
- Leave the confirmation line on. It is the quickest way to check the choice.
- Keep the calendar in the page, close to the question it answers.

## Avoid

- Do not use it for dates years away. Typing is faster there.
- Do not hide days that are off. Showing them tells people the limits.
- Do not use it as a pop-up. It is built to sit in the page.
- Do not use colour alone to say which day is today or chosen. The part already adds a ring and a bold number.

## On a phone

- The calendar is seven columns of 44px days on a touch screen, so it needs about 335px of width and fits a 360px phone.
- Month arrows and day buttons are 44px, and the Today and Yesterday buttons are 44px tall.
- Days are chosen by tapping; the arrow-key moves are for keyboards only.
- The Today and Yesterday row does not wrap.

## Accessibility: built in

- The days sit in a grid with column headers and rows. Each header has an abbreviation and the full weekday name for screen readers.
- Each day is a button with a full name such as Saturday, 20 September 2026. The cell around it has aria-selected, and today has aria-current set to date.
- There is one tab stop in the grid. Arrow keys move by day and week, Home and End go to the start and end of the week, Page Up and Page Down move by month, and Shift with them moves by year. Enter or Space picks the day.
- Days outside min and max have aria-disabled, ignore clicks, and are skipped by the keyboard. A key that would land outside the range goes to the nearest allowed day, or stays put.
- The month and year and the confirmation line are polite live regions, so changes are read out without moving focus.
- Previous month and Next month are buttons with names, and are disabled when the whole month is out of range.
- Today has a ring and the chosen day has a filled shape and bold number, so neither relies on colour alone. In forced colours the chosen day uses the system highlight.
- Day buttons are 40px, and 44px on coarse pointers.

## Accessibility: what you need to do

- Pass a label that says what is being picked, such as Date it happened. It is the name of the grid.
- Say why days are off when it is not obvious, for example in a hint under the question.
- Keep value in the parent and pass it back, so the confirmation line and the selected day agree.
- Pass today and the same value for tests and docs so the result does not change from day to day.

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
| value (required) | `string \| null` |  | The chosen day as an ISO date (yyyy-mm-dd), or null when nothing is chosen. |
| onChange (required) | `(value: string) => void` |  | Called with the ISO date when a day, Today or Yesterday is picked. It is never called for a disabled day. |
| min | `string` |  | Earliest day that can be picked. Earlier days are shown but disabled. The previous month button is disabled when the whole earlier month is out of range. |
| max | `string` | `today` | Latest day that can be picked. Later days are shown but disabled. The next month button is disabled when the whole later month is out of range. |
| today | `string` | `the date on this device` | Today as an ISO date. It sets the ring on today's day, the quick buttons and the days-ago words. Set it for tests and docs. |
| label (required) | `string` |  | Accessible name of the calendar grid, such as Date it happened. |
| locale | `string` | `"en-IN"` | Locale for month names, weekday names and the confirmation line. Weeks always start on Monday. |
| className | `string` |  | Classes for the outer box. |

## States

- empty: With value null no day is selected and the line under the grid says Pick a date.
- today: Today has a ring around its number and aria-current set to date, so it is not shown by colour alone.
- selected: The chosen day is filled with the accent colour, bold, and its cell has aria-selected.
- out of range: Days before min or after max are dimmed, have aria-disabled, and cannot be picked by click or keyboard.
- month at limit: Previous month is disabled when the whole earlier month is before min, and Next month when the whole later month is after max.
- hover: A day that can be picked gets a shaded background when the pointer is over it.
- focus: The day with focus shows the global focus ring. Only one day is in the Tab order.

## Tokens

- `--surface`
- `--border`
- `--fg`
- `--fg-muted`
- `--fg-subtle`
- `--surface-hover`
- `--accent`
- `--on-accent`
- `--dur-fast`
- `--radius-control`
- `--radius-card`

## Examples

### With a range and quick buttons

Days before 15 August 2026 and after today are shown but off. Today and Yesterday sit above the grid because both are allowed.

```tsx
function Example() {
  const [d, setD] = useState<string | null>(null);
  return <DatePicker label="Date it happened" value={d} onChange={setD} today="2026-10-07" min="2026-08-15" />;
}
```

### With a chosen value

It opens on the month of the chosen day. The line under the grid says the date in words and how long ago it was.

```tsx
function Example() {
  const [d, setD] = useState<string | null>("2026-10-01");
  return <DatePicker label="Date you first complained" value={d} onChange={setD} today="2026-10-07" />;
}
```

### Inside a Field with a hint

The calendar is not a single input, so Field gives it the label and the hint. Put the ids on a wrapper and keep the grid's own label.

```tsx
function Example() {
  const [d, setD] = useState<string | null>(null);
  return (
    <div className="w-80 max-w-full">
      <Field label="When did it go wrong?" hint="Days after today are off because this has already happened.">
        {({ id, "aria-describedby": describedBy }) => (
          <div id={id} role="group" aria-describedby={describedBy}>
            <DatePicker label="Date it went wrong" value={d} onChange={setD} today="2026-10-07" />
          </div>
        )}
      </Field>
    </div>
  );
}
```

Source: src/molecules/DatePicker.tsx
