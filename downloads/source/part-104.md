## tattva/pages/WorkflowPage.tsx

```tsx
import { useState } from "react";
import { Button } from "../atoms/Button";
import { AppShell } from "../templates/AppShell";
import { ThreadTemplate } from "../templates/ThreadTemplate";
import { AIDisclosure } from "../atoms/AIDisclosure";
import { Badge } from "../atoms/Badge";
import { ContextPill } from "../molecules/ContextPill";
import { Checklist } from "../organisms/Checklist";
import { ApprovalPrompt } from "../organisms/ApprovalPrompt";
import { StepTimeline } from "../organisms/StepTimeline";
import { Composer } from "../organisms/Composer";
import { Rail } from "./Rail";

/** A running workflow is a thread: heading, checklist, and gates that need a person. */
export function WorkflowPage() {
  const [decision, setDecision] = useState("");
  return (
    <AppShell rail={<Rail activeId="3" />} className="h-180 max-h-dvh">
      <ThreadTemplate header="Request missing documents" actions={<Button size="sm" variant="secondary">Share</Button>}
        composer={<Composer onAttach={() => {}} placeholder="Ask a follow-up…" onSend={() => {}} tools={<ContextPill onClear={() => {}}>5 people</ContextPill>} />}
        footnote={<AIDisclosure />}>
        <section className="space-y-3">
          <h2 className="text-title-lg leading-10">Ask for the missing documents</h2>
          <p className="text-body leading-5 text-fg-muted">3 of 5 done. Here is where things stand:</p>
        </section>
        <Checklist doneSummary="Received from Atlas, Birch and Cedar" items={[
          { id: "1", title: <span className="font-medium">Dana Whitfield</span>, badge: <Badge tone="accent">Form A</Badge>, status: "No reply in 5 days, due in 2", attention: true },
          { id: "2", title: <span className="font-medium">Owen Park</span>, badge: <Badge tone="accent">Form A</Badge>, status: "Reminder sent yesterday" },
        ]} />
        <ApprovalPrompt risk="medium" action="Send a second reminder to Dana Whitfield"
          detail={<>An email from <b>team@example.com</b> with the subject “Documents due Friday” will be sent now.</>}
          onApprove={() => setDecision("Approved")} onDeny={() => setDecision("Denied")} />
        {decision && <p role="status" className="text-body leading-5 text-fg-muted">Decision: {decision}</p>}
        <StepTimeline steps={[
          { id: "a", title: "Find missing documents", detail: "2 people", state: "done" },
          { id: "b", title: "Send reminders", detail: "Waiting for approval", state: "active" },
          { id: "c", title: "Confirm receipt", state: "todo" },
        ]} />
      </ThreadTemplate>
    </AppShell>
  );
}
```

## tattva/templates/AppShell.tsx

```tsx
import { useContext, useState, type ReactNode } from "react";
import { Button } from "../atoms/Button";
import { Sheet } from "../organisms/Sheet";
import { EmbeddedContext } from "../lib/embedded";
import { cn } from "../lib/cn";

export interface AppShellProps {
  /** Left rail: conversation list, navigation, user card. Below the md breakpoint it moves into a side sheet opened from a Menu button. */
  rail?: ReactNode;
  children: ReactNode;
  /** Fix the shell to a height (for previews). By default it fills its container. */
  className?: string;
  /** Name of the button that opens the rail on a phone. */
  menuLabel?: string;
}

/** Two-column frame: a narrow rail and one main room. The rail never competes with the main column. */
export function AppShell({ rail, children, className, menuLabel = "Menu" }: AppShellProps) {
  const [menu, setMenu] = useState(false);
  // Inside a documentation preview the landmarks become plain containers so the host page keeps one main.
  const embedded = useContext(EmbeddedContext);
  const Rail = embedded ? "div" : "aside";
  const Main = embedded ? "div" : "main";
  return (
    <div className={cn("flex h-full min-h-0 w-full bg-bg text-fg", className)}>
      {rail && <Rail aria-label={embedded ? undefined : "Sidebar"} className="hidden w-68 shrink-0 flex-col gap-4 overflow-y-auto p-5 md:flex">{rail}</Rail>}
      <Main className="flex min-w-0 flex-1 flex-col">
        {rail && (
          <div className="flex shrink-0 items-center px-4 pt-3 md:hidden">
            <Button variant="secondary" size="sm" aria-haspopup="dialog" onClick={() => setMenu(true)}>{menuLabel}</Button>
          </div>
        )}
        {children}
      </Main>
      {rail && <Sheet open={menu} onClose={() => setMenu(false)} title={menuLabel} side="left" size="sm"><div className="flex flex-col gap-4 pb-4">{rail}</div></Sheet>}
    </div>
  );
}
```

## tattva/templates/HomeTemplate.tsx

```tsx
import type { ReactNode } from "react";
import { PageBar } from "./PageBar";

export interface HomeTemplateProps {
  /** The greeting. Use HeroHeading. */
  heading: ReactNode;
  /** The tray that answers the headline (Tray with its Composer as footer). */
  children: ReactNode;
  /** Quiet line under the tray, e.g. AIDisclosure. */
  footnote?: ReactNode;
  /** Title bar text. */
  header?: ReactNode;
  actions?: ReactNode;
}

/** Empty-thread landing: one greeting, one tray, vertically centered. Nothing else competes. */
export function HomeTemplate({ heading, children, footnote, header = "New chat", actions }: HomeTemplateProps) {
  return (
    <>
      <PageBar title={header} actions={actions} />
      <div className="flex min-h-0 flex-1 flex-col items-center justify-start overflow-y-auto px-4 py-8 md:justify-center md:py-10">
        <div className="w-full max-w-3xl space-y-8">
          {heading}
          {children}
          {footnote}
        </div>
      </div>
    </>
  );
}
```

## tattva/templates/PageBar.tsx

```tsx
import type { ReactNode } from "react";

export interface PageBarProps {
  /** Page title, one line. */
  title?: ReactNode;
  /** Quiet controls on the right, such as Share. */
  actions?: ReactNode;
}

/** The top bar every template shares, so pages differ in their body and never in their frame. */
export function PageBar({ title, actions }: PageBarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-line px-4 sm:px-6">
      {/* A bar with no title has no heading at all, rather than an empty one. */}
      {title ? <h1 className="font-sans! truncate text-body leading-5 font-medium text-fg">{title}</h1> : <div />}
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </header>
  );
}
```

## tattva/templates/SplitCanvasTemplate.tsx

```tsx
import type { ReactNode } from "react";
import { PageBar } from "./PageBar";

export interface SplitCanvasTemplateProps {
  /** Left: the conversation or controls. */
  primary: ReactNode;
  /** Right: the artifact that outlives a single message (CanvasPanel). Stacks under primary on narrow screens. */
  canvas: ReactNode;
  /** Accessible names for the two regions. */
  primaryLabel?: string;
  canvasLabel?: string;
  /** Title bar text and controls, shared with the other templates. */
  header?: ReactNode;
  actions?: ReactNode;
}

export function SplitCanvasTemplate({ primary, canvas, primaryLabel = "Conversation", canvasLabel = "Canvas", header, actions }: SplitCanvasTemplateProps) {
  return (
    <>
    <PageBar title={header} actions={actions} />
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 overflow-y-auto px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:overflow-hidden">
      <section aria-label={primaryLabel} className="min-h-0 space-y-6 overflow-y-auto">{primary}</section>
      <section aria-label={canvasLabel} className="min-h-90 lg:min-h-0">{canvas}</section>
    </div>
    </>
  );
}
```

## tattva/templates/ThreadTemplate.tsx

```tsx
import type { ReactNode } from "react";
import { PageBar } from "./PageBar";

export interface ThreadTemplateProps {
  /** Optional title row above the thread. */
  header?: ReactNode;
  /** Controls on the right of the title bar. */
  actions?: ReactNode;
  /** The conversation or workflow body. Scrolls. */
  children: ReactNode;
  /** The composer. Stays pinned to the bottom. */
  composer: ReactNode;
  footnote?: ReactNode;
}

/** Scrolling thread with a pinned composer. Thread and composer share one reading width. */
export function ThreadTemplate({ header, actions, children, composer, footnote }: ThreadTemplateProps) {
  return (
    <>
      <PageBar title={header} actions={actions} />
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto w-full max-w-3xl space-y-8">{children}</div>
      </div>
      <div className="shrink-0 px-4 pb-[max(1rem,var(--safe-bottom))] sm:px-6">
        <div className="mx-auto w-full max-w-3xl space-y-2">{composer}{footnote}</div>
      </div>
    </>
  );
}
```
