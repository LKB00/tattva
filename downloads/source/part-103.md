## tattva/organisms/genui/spec.ts

```ts
/**
 * Generated UI spec: a flat list of nodes, so a model can write it a piece at a time and patch it later.
 * Inspired by the flat-list design of A2UI. It has no dependencies and holds no styling: the host owns look and feel.
 */

export interface SpecNode {
  /** Stable id. Other nodes point at it from `children`. The renderer uses it as the React key. */
  id: string;
  /** Name of a catalog component, such as "StatTile". */
  type: string;
  /** Content and options. Never styles. */
  props?: Record<string, unknown>;
  /** Ids of child nodes, in order. A child may arrive after its parent. */
  children?: string[];
}

/** One piece of a stream. Any field may be missing. */
export interface SpecChunk {
  /** Id of the node to render first. */
  root?: string;
  /** New nodes, or new versions of nodes already sent. */
  nodes?: SpecNode[];
  /** Set on the last chunk. Until then missing children are treated as still on their way. */
  done?: boolean;
}

export interface SpecState {
  root: string | null;
  nodes: Record<string, SpecNode>;
  /** Ids in the order they first arrived. */
  order: string[];
  done: boolean;
}

export const emptySpec = (): SpecState => ({ root: null, nodes: {}, order: [], done: false });

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

/** Reads one node from unknown input. Returns null when it has no usable id or type. */
export function toNode(v: unknown): SpecNode | null {
  if (!isRecord(v)) return null;
  if (typeof v.id !== "string" || !v.id || typeof v.type !== "string" || !v.type) return null;
  if (["__proto__", "constructor", "prototype"].includes(v.id)) return null;
  const node: SpecNode = { id: v.id, type: v.type };
  if (isRecord(v.props)) node.props = v.props;
  if (Array.isArray(v.children)) node.children = v.children.filter((c): c is string => typeof c === "string");
  return node;
}

/**
 * Merges one streamed chunk into the state. It never mutates and never throws.
 * Nodes may arrive in any order. A node sent again keeps its old props unless the new ones replace them,
 * and its children list is replaced when the new node has one. Bad entries are skipped.
 * Accepts a chunk, a single node, or a list of nodes.
 */
export function applyChunk(state: SpecState, chunk: SpecChunk | SpecNode | SpecNode[] | null | undefined): SpecState {
  if (!chunk) return state;
  const c: SpecChunk = Array.isArray(chunk) ? { nodes: chunk } : "type" in (chunk as object) && "id" in (chunk as object) ? { nodes: [chunk as SpecNode] } : (chunk as SpecChunk);
  const nodes = { ...state.nodes };
  const order = state.order.slice();
  for (const raw of Array.isArray(c.nodes) ? c.nodes : []) {
    const n = toNode(raw);
    if (!n) continue;
    const prev = nodes[n.id];
    if (!prev) order.push(n.id);
    nodes[n.id] = prev ? { id: n.id, type: n.type, props: { ...prev.props, ...n.props }, children: n.children ?? prev.children } : n;
  }
  return {
    root: typeof c.root === "string" && c.root ? c.root : state.root,
    nodes,
    order,
    done: c.done === true ? true : state.done,
  };
}

/** Reads one line of newline-delimited JSON. Returns null for blank or broken lines, so a stream can carry on. */
export function parseChunkLine(line: string): SpecChunk | SpecNode | SpecNode[] | null {
  const t = line.trim();
  if (!t) return null;
  try {
    const v: unknown = JSON.parse(t);
    return Array.isArray(v) || isRecord(v) ? (v as SpecChunk) : null;
  } catch {
    return null;
  }
}

/** Builds a finished state from a complete spec in one step. */
export function specFrom(root: string, nodes: SpecNode[]): SpecState {
  return applyChunk(emptySpec(), { root, nodes, done: true });
}

/** The state as a plain `{ root, nodes }` object, in arrival order. This is what "View spec" shows. */
export function specToJSON(state: SpecState): { root: string | null; nodes: SpecNode[] } {
  return { root: state.root, nodes: state.order.map((id) => state.nodes[id]).filter(Boolean) };
}

/** Ids that some node points at but that have not arrived yet. */
export function missingIds(state: SpecState): string[] {
  const out = new Set<string>();
  if (state.root && !state.nodes[state.root]) out.add(state.root);
  for (const n of Object.values(state.nodes)) for (const c of n.children ?? []) if (!state.nodes[c]) out.add(c);
  return [...out];
}
```

## tattva/pages/HomePage.tsx

```tsx
import { AppShell } from "../templates/AppShell";
import { HomeTemplate } from "../templates/HomeTemplate";
import { HeroHeading } from "../atoms/HeroHeading";
import { AIDisclosure } from "../atoms/AIDisclosure";
import { TrayRow } from "../molecules/TrayRow";
import { ContextPill } from "../molecules/ContextPill";
import { Tray } from "../organisms/Tray";
import { Composer } from "../organisms/Composer";
import { UsersIcon } from "../lib/icons";
import { Rail } from "./Rail";

/** Landing: the headline answers itself in the tray below it. */
export function HomePage() {
  return (
    <AppShell rail={<Rail />} className="h-180 max-h-dvh">
      <HomeTemplate
        heading={<HeroHeading text="3 tasks need you today. Where should we start?" />}
        footnote={<AIDisclosure />}
      >
        <Tray label="Needs you" action="4 running →" footer={
          <Composer onAttach={() => {}} placeholder="Give me a task or ask a question…" onSend={() => {}}
            tools={<ContextPill icon={<UsersIcon width={14} height={14} />} onClick={() => {}}>All projects</ContextPill>} />
        }>
          <TrayRow attention title="Quarterly report" detail="Approval pending for 6 days" trailing="Open →" />
          <TrayRow attention title="Customer survey" detail="Missing 2 answers, due in 2 days" trailing="Open →" />
          <TrayRow attention title="Launch plan" detail="Needs a decision by Friday" trailing="Open →" />
        </Tray>
      </HomeTemplate>
    </AppShell>
  );
}
```

## tattva/pages/Rail.tsx

```tsx
import { useState } from "react";
import { ConversationList } from "../organisms/ConversationList";
import { Avatar } from "../atoms/Avatar";

const items = [
  { id: "1", title: "Why sales grew last quarter", group: "Today" },
  { id: "2", title: "Welcome email draft", group: "Today" },
  { id: "3", title: "Request missing documents", group: "Workflows" },
  { id: "4", title: "Spreadsheet help", group: "Yesterday" },
];

/** Shared rail for the example pages: conversation list plus a user card. */
export function Rail({ activeId = "1" }: { activeId?: string }) {
  const [active, setActive] = useState(activeId);
  return (
    <>
      <div className="flex items-center gap-2 px-1"><Avatar kind="ai" size="sm" /><span className="font-serif text-body-lg">Tattva</span></div>
      <ConversationList items={items} activeId={active} onSelect={setActive} onNew={() => {}} />
      <div className="mt-auto flex items-center gap-2.5 rounded-card bg-sunken p-3">
        <Avatar kind="user" name="Maya Okafor" />
        <div className="min-w-0"><p className="truncate text-small leading-4 font-medium">Maya Okafor</p><p className="truncate text-micro text-fg-subtle">Product team</p></div>
      </div>
    </>
  );
}
```

## tattva/pages/StudioPage.tsx

```tsx
import { useState } from "react";
import { Button } from "../atoms/Button";
import { Rail } from "./Rail";
import { AppShell } from "../templates/AppShell";
import { SplitCanvasTemplate } from "../templates/SplitCanvasTemplate";
import { PromptBox } from "../organisms/PromptBox";
import { VariantGrid } from "../organisms/VariantGrid";
import { CanvasPanel } from "../organisms/CanvasPanel";
import { Markdown } from "../organisms/Markdown";
import { AIBadge } from "../atoms/AIBadge";

// Documented exception to the no-hex rule: sample picture tones that stand in for user images. See scripts/check-docs.mjs.
const tones = ["#24282c", "#c2ef72", "#c97b4a", "#919395"];
const DRAFT = ["# Launch announcement", "", "We are introducing **Tattva**, a clearer way to build with AI.", "", "- Answers that appear without the page jumping", "- Sources you can check", "- Your approval before anything that cannot be undone"];

/** Generative studio: prompt and variants on the left, the chosen artifact with version history on the right. */
export function StudioPage() {
  const [busy, setBusy] = useState(false);
  const [sel, setSel] = useState("a");
  const [version, setVersion] = useState(2);
  return (
    <AppShell rail={<Rail activeId="2" />} className="h-180 max-h-dvh">
      <SplitCanvasTemplate header="Welcome email draft" actions={<Button size="sm" variant="secondary">Share</Button>} primaryLabel="Make options" canvasLabel="Draft"
        primary={<>
          <PromptBox busy={busy} examples={["Launch announcement", "Release notes"]} onGenerate={() => { setBusy(true); setTimeout(() => setBusy(false), 1800); }} />
          <VariantGrid selectedId={sel} onSelect={setSel} loadingCount={busy ? 2 : 0}
            variants={["a", "b", "c", "d"].slice(0, busy ? 2 : 4).map((id, i) => ({ id, label: `Option ${id.toUpperCase()}`, node: <div className="size-full" style={{ background: `linear-gradient(135deg, ${tones[i]}, color-mix(in srgb, ${tones[i]} 35%, #f7f6f0))` }} /> }))} />
        </>}
        canvas={
          <CanvasPanel title="Launch announcement.md" version={version} versions={3} onVersionChange={setVersion} onRegenerate={() => {}} onClose={() => {}} actions={<AIBadge />}>
            <div className="space-y-4 text-body-lg leading-7"><Markdown>{DRAFT.join("\n")}</Markdown></div>
            <p className="mt-6 text-small leading-4 text-fg-subtle">Viewing version {version} of 3.</p>
          </CanvasPanel>
        } />
    </AppShell>
  );
}
```

## tattva/pages/ThreadPage.tsx

```tsx
import { useState } from "react";
import { Button } from "../atoms/Button";
import { AppShell } from "../templates/AppShell";
import { ThreadTemplate } from "../templates/ThreadTemplate";
import { AIDisclosure } from "../atoms/AIDisclosure";
import { TypingIndicator } from "../atoms/TypingIndicator";
import { Message } from "../molecules/Message";
import { MessageActions } from "../molecules/MessageActions";
import { ThinkingBlock } from "../molecules/ThinkingBlock";
import { ToolCallCard } from "../molecules/ToolCallCard";
import { FeedbackBar } from "../molecules/FeedbackBar";
import { ConfidenceIndicator } from "../molecules/ConfidenceIndicator";
import { SuggestionChips } from "../molecules/SuggestionChips";
import { Composer } from "../organisms/Composer";
import { Markdown } from "../organisms/Markdown";
import { MessageList } from "../organisms/MessageList";
import { SourceList } from "../organisms/SourceList";
import { useStreamingText } from "../hooks/useStreamingText";
import { Rail } from "./Rail";

const REPLY = `Sales grew **12%** over the last quarter, mostly from big business customers.[1] About 2.1% of customers left, the same as before.[2]

| Customers | Growth |
|---|---|
| Big business | +18% |
| Individuals | +4% |

Two things to watch next quarter:
- Many big customers renew in November
- Fewer individuals signed up in the last two weeks`;

/** A full research answer: reasoning, tool use, cited prose, sources, confidence and feedback. */
export function ThreadPage() {
  const { text, streaming, start, stop } = useStreamingText(REPLY, { speed: 22 });
  const [asked, setAsked] = useState<string[]>([]);
  return (
    <AppShell rail={<Rail />} className="h-180 max-h-dvh">
      <ThreadTemplate header="Why sales grew last quarter" actions={<Button size="sm" variant="secondary">Share</Button>}
        composer={<Composer onAttach={() => {}} generating={streaming} onStop={stop} onSend={(t) => { setAsked([...asked, t]); start(); }} />}
        footnote={<AIDisclosure />}>
        <MessageList>
          <Message role="user">What made sales grow last quarter?</Message>
          <Message role="assistant" streaming={streaming}
            footer={!streaming && (
              <div className="space-y-4">
                <ConfidenceIndicator level="high" />
                <SourceList sources={[
                  { id: 1, title: "Q3 2026 earnings report", url: "https://example.com/q3", domain: "investor.example.com", snippet: "Total sales rose 12% from the quarter before." },
                  { id: 2, title: "Customer numbers update", url: "https://example.com/metrics", domain: "example.com" },
                ]} />
                <MessageActions text={REPLY} onRegenerate={start} />
                <FeedbackBar onSubmit={() => {}} />
              </div>
            )}>
            <ThinkingBlock seconds={4}>Read the earnings report first, then checked the customer numbers against it.</ThinkingBlock>
            <ToolCallCard name="Searched the web" status="success" summary='Looked up "q3 sales growth"' durationMs={1400} input={{ query: "q3 sales growth" }} output="5 results" />
            {text ? <Markdown>{text}</Markdown> : <TypingIndicator />}
          </Message>
          {asked.map((q, i) => <Message key={i} role="user">{q}</Message>)}
        </MessageList>
        {!streaming && <SuggestionChips suggestions={["Break it down by region", "Compare with Q2", "Draft a summary email"]} onPick={(s) => setAsked([...asked, s])} />}
      </ThreadTemplate>
    </AppShell>
  );
}
```
