## tattva/lib/focus.ts

```ts
import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Keeping keyboard focus and screen reader users in step when a part changes under them: a chip or card that removes
 * itself, buttons that are replaced by a result, options that arrive later. Parts use these so the app does not have to.
 */

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [contenteditable="true"], [tabindex]:not([tabindex="-1"])';
const TYPING = 'textarea:not([disabled]), input:not([disabled]):not([type]), input[type="text"]:not([disabled]), input[type="search"]:not([disabled]), [contenteditable="true"], [role="textbox"]';

const first = (root: Element | null, selector = FOCUSABLE) =>
  root instanceof HTMLElement ? (root.matches(selector) ? root : root.querySelector<HTMLElement>(selector)) : null;

/**
 * Where focus should go when `el` (a chip, a card, a row) is about to go away: the same kind of control in the next
 * item, else in the previous one, else the nearest place to type (the message box or the document), searching
 * outwards from `el`.
 */
export function focusTargetAfter(el: HTMLElement): HTMLElement | null {
  for (const sib of [el.nextElementSibling, el.previousElementSibling]) {
    const t = first(sib);
    if (t) return t;
  }
  for (let p = el.parentElement, i = 0; p && i < 8; p = p.parentElement, i++) {
    const t = [...p.querySelectorAll<HTMLElement>(TYPING)].find((x) => !el.contains(x));
    if (t) return t;
  }
  return null;
}

/** The nearest place to type outside `el`, such as the message box beside a starter gallery. */
export function nearestTyping(el: HTMLElement | null): HTMLElement | null {
  for (let p = el?.parentElement, i = 0; p && i < 8; p = p.parentElement, i++) {
    const t = [...p.querySelectorAll<HTMLElement>(TYPING)].find((x) => !el!.contains(x));
    if (t) return t;
  }
  return null;
}

const lost = () => { const a = document.activeElement; return !a || a === document.body || !a.isConnected; };

/**
 * Call from a handler that may make `el`, or the control just pressed, go away. Once the app has updated, if focus
 * fell to the page, it moves to `target()` when given, else to the first control left in `el`, else to
 * `focusTargetAfter(el)` worked out before anything changed. Focus that landed somewhere real is left alone.
 */
export function keepFocus(el: HTMLElement | null, target?: () => HTMLElement | null | undefined) {
  if (!el) return;
  const fallback = focusTargetAfter(el);
  requestAnimationFrame(() => {
    if (!lost()) return;
    const t = target?.() ?? (el.isConnected ? first(el) : null) ?? fallback;
    if (t?.isConnected) t.focus({ preventScroll: true });
  });
}

/**
 * When `key` changes (a status, the current version) and focus was last inside `root` but has fallen to the page
 * because the control it was on went away, move it to `target()`.
 */
export function useFocusReturn(key: unknown, root: RefObject<HTMLElement | null>, target: () => HTMLElement | null | undefined) {
  const inside = useRef(false);
  const pick = useRef(target);
  pick.current = target;
  useEffect(() => {
    // Focus moving anywhere in the document says whether it is inside the part. A control that is removed while
    // focused moves focus nowhere, so the last answer stands.
    const on = (e: FocusEvent) => { inside.current = !!root.current?.contains(e.target as Node); };
    document.addEventListener("focusin", on);
    return () => document.removeEventListener("focusin", on);
  }, [root]);
  useEffect(() => {
    if (!inside.current || !lost()) return;
    pick.current()?.focus({ preventScroll: true });
  }, [key]);
}

/**
 * A message for a polite live region that is set only when `value` changes after the first render, so nothing is
 * read out when the part appears. `say` returns the words, or "" to stay quiet.
 */
export function useAnnounceChange<T>(value: T, say: (now: T, before: T) => string): string {
  const before = useRef(value);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (Object.is(before.current, value)) return;
    const m = say(value, before.current);
    before.current = value;
    setMessage(m);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return message;
}
```

## tattva/lib/icons.tsx

```tsx
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true, ...p,
});

export const SendIcon = (p: P) => <svg {...base(p)}><path d="M12 19V5M5 12l7-7 7 7" /></svg>;
export const StopIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>;
export const CopyIcon = (p: P) => <svg {...base(p)}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></svg>;
export const CheckIcon = (p: P) => <svg {...base(p)}><path d="M5 12l5 5L20 7" /></svg>;
export const XIcon = (p: P) => <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>;
export const ThumbUpIcon = (p: P) => <svg {...base(p)}><path d="M7 11v9H4v-9h3zM7 11l4-7a2 2 0 0 1 2 2v4h5.5a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 17.5 20H7" /></svg>;
export const ThumbDownIcon = (p: P) => <svg {...base(p)}><path d="M17 13V4h3v9h-3zM17 13l-4 7a2 2 0 0 1-2-2v-4H5.5a2 2 0 0 1-2-2.3l1-6A2 2 0 0 1 6.5 4H17" /></svg>;
export const RefreshIcon = (p: P) => <svg {...base(p)}><path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" /></svg>;
export const SparkleIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" /></svg>;
export const ChevronIcon = (p: P) => <svg {...base(p)}><path d="M9 6l6 6-6 6" /></svg>;
export const PaperclipIcon = (p: P) => <svg {...base(p)}><path d="M21 12l-8.5 8.5a5 5 0 0 1-7-7L14 5a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 8" /></svg>;
export const AlertIcon = (p: P) => <svg {...base(p)}><path d="M12 3l10 18H2L12 3zM12 10v5M12 18h.01" /></svg>;
export const InfoIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>;
export const ToolIcon = (p: P) => <svg {...base(p)}><path d="M14.5 6.5a4 4 0 0 0-5 5L3 18l3 3 6.5-6.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" /></svg>;
export const GlobeIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
export const PlusIcon = (p: P) => <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>;
export const ImageIcon = (p: P) => <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 16l-5-5-8 9" /></svg>;
export const ShieldIcon = (p: P) => <svg {...base(p)}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>;
export const MoonIcon = (p: P) => <svg {...base(p)}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>;
export const SunIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
export const FileIcon = (p: P) => <svg {...base(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5" /></svg>;
export const SearchIcon = (p: P) => <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>;
export const UsersIcon = (p: P) => <svg {...base(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" /></svg>;

/* ---- AI product icons, added for the visual identity slice. Same grid, stroke and caps as above. ---- */
const spark = (d: string) => <path d={d} fill="currentColor" stroke="none" />;

// Actions
export const RegenerateIcon = (p: P) => <svg {...base(p)}><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" />{spark("M12 8.8l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1z")}</svg>;
export const RetryIcon = (p: P) => <svg {...base(p)}><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" /></svg>;
export const EditIcon = (p: P) => <svg {...base(p)}><path d="M4 20l.9-3.6L16.4 4.9a2 2 0 0 1 2.8 2.8L7.6 19.1 4 20zM14.5 6.8l2.7 2.7" /></svg>;
export const UndoIcon = (p: P) => <svg {...base(p)}><path d="M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" /></svg>;
export const RedoIcon = (p: P) => <svg {...base(p)}><path d="M15 14l5-5-5-5M20 9H9.5a5.5 5.5 0 0 0 0 11H13" /></svg>;
export const ShareIcon = (p: P) => <svg {...base(p)}><path d="M12 15V4M8 8l4-4 4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" /></svg>;
export const DownloadIcon = (p: P) => <svg {...base(p)}><path d="M12 4v11M8 11l4 4 4-4M5 20h14" /></svg>;
export const PinIcon = (p: P) => <svg {...base(p)}><path d="M9 4h6M10 4l-.5 6L6.5 13h11L14.5 10 14 4M12 13v7" /></svg>;
export const TagIcon = (p: P) => <svg {...base(p)}><path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7a1 1 0 0 1 .7.3l7.3 7.3a1 1 0 0 1 0 1.4l-7.7 7.7a1 1 0 0 1-1.4 0L3.8 12.9a1 1 0 0 1-.3-.7z" /><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" /></svg>;
export const BookmarkIcon = (p: P) => <svg {...base(p)}><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z" /></svg>;
export const SettingsIcon = (p: P) => <svg {...base(p)}><path d="M4 7h9M17 7h3M4 17h3M11 17h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></svg>;
export const MoreIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><circle cx="5.5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18.5" cy="12" r="1.5" /></svg>;
export const SyncIcon = (p: P) => <svg {...base(p)}><path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4" /></svg>;
export const LoopIcon = (p: P) => <svg {...base(p)}><path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3" /></svg>;

// Media and input
export const MicIcon = (p: P) => <svg {...base(p)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>;
export const MicOffIcon = (p: P) => <svg {...base(p)}><path d="M4 4l16 16M9 9v2a3 3 0 0 0 5 2M15 9V6a3 3 0 0 0-5.5-1.7M5 11a7 7 0 0 0 11 5.7M12 18v3" /></svg>;
export const CameraIcon = (p: P) => <svg {...base(p)}><path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><circle cx="12" cy="13.5" r="3.5" /></svg>;
export const EyeIcon = (p: P) => <svg {...base(p)}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>;
export const LockIcon = (p: P) => <svg {...base(p)}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>;

// Agent and context
export const MemoryIcon = (p: P) => <svg {...base(p)}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v18M12.5 8h3M12.5 12h3" /></svg>;
export const NotebookIcon = (p: P) => <svg {...base(p)}><path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13C17 4 14 4.5 12 6zM12 6v13" /></svg>;
export const PlanIcon = (p: P) => <svg {...base(p)}><path d="M3.5 6.5L5 8l3-3M11 6.5h9M3.5 12.5L5 14l3-3M11 12.5h9M5.5 19h.01M11 19h9" /></svg>;
export const CheckpointIcon = (p: P) => <svg {...base(p)}><path d="M5 21V4M5 4h11l-2 4 2 4H5" /></svg>;
export const BranchIcon = (p: P) => <svg {...base(p)}><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 7v10M18 10c0 4-3 5-7 5H6" /></svg>;
export const ContextIcon = (p: P) => <svg {...base(p)}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 6.5h8M10.5 3h3" /></svg>;
export const LayersIcon = (p: P) => <svg {...base(p)}><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3zM3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" /></svg>;
export const HistoryIcon = (p: P) => <svg {...base(p)}><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 8v4l3 2" /></svg>;
export const ThoughtIcon = (p: P) => <svg {...base(p)}><path d="M7.5 16a4 4 0 0 1-.8-7.9 5 5 0 0 1 9.6-.7A3.8 3.8 0 0 1 17 16H7.5z" /><circle cx="6.5" cy="19.2" r="1" /><circle cx="4" cy="22" r=".5" /></svg>;

// Trust and review
export const CitationIcon = (p: P) => <svg {...base(p)}><path d="M9.5 7C6.5 7.5 5 9.5 5 12.5V17h4.5v-4.5H5M19 7c-3 .5-4.5 2.5-4.5 5.5V17H19v-4.5h-4.5" /></svg>;
export const SourceIcon = (p: P) => <svg {...base(p)}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" /></svg>;
export const ApproveIcon = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></svg>;
export const NeedsReviewIcon = (p: P) => <svg {...base(p)}><path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M13 3l5 5v2M13 3v5h5" /><circle cx="16" cy="16" r="3" /><path d="M18.2 18.2L21 21" /></svg>;

// AI actions
export const AIEditIcon = (p: P) => <svg {...base(p)}><path d="M4 20l.8-3.2L14.5 7a2 2 0 0 1 2.8 2.8L7.6 19.5 4 20zM13 8.5l2.5 2.5" />{spark("M19 2.5l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z")}</svg>;
export const AISummarizeIcon = (p: P) => <svg {...base(p)}><path d="M4 5h16M4 10h10M4 15h5M4 20h5" />{spark("M17 11l1.3 3.7L22 16l-3.7 1.3L17 21l-1.3-3.7L12 16l3.7-1.3z")}</svg>;
export const AIEnhanceIcon = (p: P) => <svg {...base(p)}><path d="M4 20L14 10" />{spark("M17.5 3l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM7 4l.6 1.4L9 6l-1.4.6L7 8l-.6-1.4L5 6l1.4-.6z")}</svg>;
export const AISuggestIcon = (p: P) => <svg {...base(p)} fill="currentColor" stroke="none"><path d="M9 8l1.8 4.2L15 14l-4.2 1.8L9 20l-1.8-4.2L3 14l4.2-1.8zM18 3l1 2.3 2.3 1-2.3 1-1 2.3-1-2.3-2.3-1 2.3-1z" /></svg>;
export const RevertAIIcon = (p: P) => <svg {...base(p)}><path d="M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />{spark("M14.5 12l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z")}</svg>;
export const ArrowRightIcon = (p: P) => <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const PaletteIcon = (p: P) => <svg {...base(p)}><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.2-1-1.5-1-2.7 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z" /><circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="10" cy="7" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="7.5" r="1" fill="currentColor" stroke="none" /></svg>;
```
