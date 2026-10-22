## tattva/index.ts

```ts
// Tattva free kit: the free parts. Import everything from here: import { Button } from "./tattva";
export * from "./atoms/AIBadge";
export * from "./atoms/AIDisclosure";
export * from "./atoms/AIMark";
export * from "./atoms/AIPresence";
export * from "./atoms/AgentStatusIcon";
export * from "./atoms/ApprovedByMark";
export * from "./atoms/AttentionDot";
export * from "./atoms/Avatar";
export * from "./atoms/Badge";
export * from "./atoms/Button";
export * from "./atoms/Checkbox";
export * from "./atoms/CitationMarker";
export * from "./atoms/Cluster";
export * from "./atoms/Container";
export * from "./atoms/DataFreshness";
export * from "./atoms/EditScopeChip";
export * from "./atoms/FrameScrubber";
export * from "./atoms/GhostText";
export * from "./atoms/Grid";
export * from "./atoms/HeroHeading";
export * from "./atoms/Illustration";
export * from "./atoms/Kbd";
export * from "./atoms/Meter";
export * from "./atoms/MicButton";
export * from "./atoms/Money";
export * from "./atoms/NumberField";
export * from "./atoms/Pictogram";
export * from "./atoms/Popover";
export * from "./atoms/Price";
export * from "./atoms/PriceChange";
export * from "./atoms/Reveal";
export * from "./atoms/ScrollEdge";
export * from "./atoms/SectionLabel";
export * from "./atoms/SegmentedControl";
export * from "./atoms/Select";
export * from "./atoms/ShimmerText";
export * from "./atoms/Skeleton";
export * from "./atoms/Slider";
export * from "./atoms/Spinner";
export * from "./atoms/Stack";
export * from "./atoms/StatusLine";
export * from "./atoms/StatusTicker";
export * from "./atoms/Switch";
export * from "./atoms/TextField";
export * from "./atoms/Tooltip";
export * from "./atoms/TypingIndicator";
export * from "./atoms/Waveform";
export * from "./atoms/WorkingEdge";
export * from "./molecules/AILabel";
export * from "./molecules/AttachmentChip";
export * from "./molecules/AudioPlayer";
export * from "./molecules/AutonomyLevel";
export * from "./molecules/AvatarStack";
export * from "./molecules/BackgroundRunChip";
export * from "./molecules/Callout";
export * from "./molecules/CameraMovePicker";
export * from "./molecules/CardRow";
export * from "./molecules/ChartFrame";
export * from "./molecules/ChartRangeBrush";
export * from "./molecules/ChecklistRow";
export * from "./molecules/CitationHoverCard";
export * from "./molecules/ClaimCheck";
export * from "./molecules/ClipRangeSelector";
export * from "./molecules/CodeBlock";
export * from "./molecules/Collapsible";
export * from "./molecules/Combobox";
export * from "./molecules/ConfidenceIndicator";
export * from "./molecules/ConnectorPermission";
export * from "./molecules/ContextChip";
export * from "./molecules/ContextMeter";
export * from "./molecules/ContinueNotice";
export * from "./molecules/Countdown";
export * from "./molecules/DataTable";
export * from "./molecules/DatePicker";
export * from "./molecules/DiagramFigure";
export * from "./molecules/DiffFileRow";
export * from "./molecules/DraftPreview";
export * from "./molecules/EditableTurn";
export * from "./molecules/EmptyState";
export * from "./molecules/EnhanceCompare";
export * from "./molecules/ErrorState";
export * from "./molecules/FactList";
export * from "./molecules/FeedbackBar";
export * from "./molecules/Field";
export * from "./molecules/FileDropZone";
export * from "./molecules/FileResultCard";
export * from "./molecules/GenerationProgress";
export * from "./molecules/InlineConfirm";
export * from "./molecules/InlineEdit";
export * from "./molecules/JsonView";
export * from "./molecules/JumpToLatest";
export * from "./molecules/KeyTakeaway";
export * from "./molecules/LatencyBreakdown";
export * from "./molecules/MediaFrame";
export * from "./molecules/MemoryNotice";
export * from "./molecules/Menu";
export * from "./molecules/Message";
export * from "./molecules/MessageActions";
export * from "./molecules/ModelPicker";
export * from "./molecules/PermissionModeSwitcher";
export * from "./molecules/PrivateChatBanner";
export * from "./molecules/ProvenancePopover";
export * from "./molecules/RadioGroup";
export * from "./molecules/RateLimitNotice";
export * from "./molecules/Receipt";
export * from "./molecules/RefusalNotice";
export * from "./molecules/ResultCard";
export * from "./molecules/RevertToggle";
export * from "./molecules/SceneIllustration";
export * from "./molecules/SelectionToolbar";
export * from "./molecules/SensitiveDataGuard";
export * from "./molecules/SlideStage";
export * from "./molecules/SourceCard";
export * from "./molecules/SpeakerNotes";
export * from "./molecules/Splitter";
export * from "./molecules/StatTile";
export * from "./molecules/StreamingReveal";
export * from "./molecules/SuggestionCard";
export * from "./molecules/SuggestionChips";
export * from "./molecules/Tabs";
export * from "./molecules/TakeCard";
export * from "./molecules/TakeVersions";
export * from "./molecules/TakeoverBar";
export * from "./molecules/ThinkingBlock";
export * from "./molecules/TickerTape";
export * from "./molecules/Timeline";
export * from "./molecules/Toast";
export * from "./molecules/ToolCallCard";
export * from "./molecules/ToolChip";
export * from "./molecules/TrayRow";
export * from "./molecules/UsageMeter";
export * from "./molecules/VariantTile";
export * from "./molecules/VariationActions";
export * from "./molecules/VersionPager";
export * from "./molecules/VideoPlayer";
export * from "./molecules/VoiceCard";
export * from "./organisms/ActionDraft";
export * from "./organisms/ActionLog";
export * from "./organisms/ActivityTrace";
export * from "./organisms/AgentQuestionCard";
export * from "./organisms/AgentSessionList";
export * from "./organisms/ApprovalInbox";
export * from "./organisms/ApprovalPrompt";
export * from "./organisms/BarChart";
export * from "./organisms/BudgetControl";
export * from "./organisms/CallRecord";
export * from "./organisms/CandlestickChart";
export * from "./organisms/CanvasPanel";
export * from "./organisms/CatchUpSummary";
export * from "./organisms/ChartLegend";
export * from "./organisms/Checklist";
export * from "./organisms/CheckpointList";
export * from "./organisms/CommandPalette";
export * from "./organisms/ComparisonTable";
export * from "./organisms/Composer";
export * from "./organisms/ContextPanel";
export * from "./organisms/ConversationList";
export * from "./organisms/DeckBuildProgress";
export * from "./organisms/DeckChangeReview";
export * from "./organisms/Dialog";
export * from "./organisms/DiffView";
export * from "./organisms/DotPlot";
export * from "./organisms/ExportSheet";
export * from "./organisms/GenUIRenderer";
export * from "./organisms/GeneratedSurface";
export * from "./organisms/GlancePanel";
export * from "./organisms/Heatmap";
export * from "./organisms/LayoutAlternatives";
export * from "./organisms/LikenessConsent";
export * from "./organisms/LineChart";
export * from "./organisms/LiveCaptions";
export * from "./organisms/LiveLog";
export * from "./organisms/Markdown";
export * from "./organisms/MediaGrid";
export * from "./organisms/MemoryList";
export * from "./organisms/MessageList";
export * from "./organisms/MessageQueue";
export * from "./organisms/OptionChain";
export * from "./organisms/OrderTicket";
export * from "./organisms/OutlineEditor";
export * from "./organisms/ParameterPanel";
export * from "./organisms/PayoffChart";
export * from "./organisms/PermissionPrompt";
export * from "./organisms/PlanCard";
export * from "./organisms/ProcessDiagram";
export * from "./organisms/ProjectPanel";
export * from "./organisms/PromptBox";
export * from "./organisms/PromptIndex";
export * from "./organisms/QuestionSet";
export * from "./organisms/ResearchRun";
export * from "./organisms/ResponseCompare";
export * from "./organisms/RiskLimits";
export * from "./organisms/SandboxedFrame";
export * from "./organisms/SceneStrip";
export * from "./organisms/SectionLane";
export * from "./organisms/Sections";
export * from "./organisms/SharePanel";
export * from "./organisms/Sheet";
export * from "./organisms/ShotSettings";
export * from "./organisms/SlideRail";
export * from "./organisms/SourceList";
export * from "./organisms/Sparkline";
export * from "./organisms/StarterGallery";
export * from "./organisms/StemMixer";
export * from "./organisms/StepTimeline";
export * from "./organisms/SuggestionBar";
export * from "./organisms/SummaryCard";
export * from "./organisms/TakeGrid";
export * from "./organisms/TakePicker";
export * from "./organisms/TaskTree";
export * from "./organisms/ToolMenu";
export * from "./organisms/TranscriptAudioEditor";
export * from "./organisms/TranscriptSync";
export * from "./organisms/Tray";
export * from "./organisms/VariantGrid";
export * from "./organisms/VersionHistory";
export * from "./organisms/VoiceConsentCheck";
export * from "./organisms/VoicePanel";
export * from "./organisms/VoicePicker";
export * from "./pages/HomePage";
export * from "./pages/StudioPage";
export * from "./pages/ThreadPage";
export * from "./pages/WorkflowPage";
export * from "./templates/AppShell";
export * from "./templates/HomeTemplate";
export * from "./templates/SplitCanvasTemplate";
export * from "./templates/ThreadTemplate";
export * from "./hooks";
export * from "./lib/icons";
export { cn } from "./lib/cn";
```

## tattva/atoms/AIBadge.tsx

```tsx
import { SparkleIcon } from "../lib/icons";
import { Badge } from "./Badge";

/** Label for any content produced by AI. Use on generated images, summaries, and drafts. */
/** Set `solid` when the badge sits on an image or another busy background. */
export function AIBadge({ label = "AI-generated", solid = false }: { label?: string; solid?: boolean }) {
  return <Badge tone={solid ? "lime" : "accent"}><SparkleIcon width={10} height={10} />{label}</Badge>;
}
```

## tattva/atoms/AIDisclosure.tsx

```tsx
import type { ReactNode } from "react";

export function AIDisclosure({ children }: { children?: ReactNode }) {
  return <p className="text-center text-small leading-4 text-fg-subtle">{children ?? "AI can make mistakes. Check important information."}</p>;
}
```

## tattva/atoms/AIMark.tsx

```tsx
import type { SVGProps } from "react";

export interface AIMarkProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "title"> {
  /** Pixel size. Use 16 beside 12px text, 18 beside 14px text, 22 beside 16px text, 24 and 32 for standalone use. */
  size?: 16 | 18 | 22 | 24 | 32;
  /** Accessible name. Omit for a decorative mark that sits next to text. When set, the mark becomes an image with this name. */
  title?: string;
}

/**
 * The Tattva AI mark: a four-point shape with arms of slightly different length, so it reads as drawn
 * and does not collide with the generic sparkle other products use. It fills with currentColor.
 * The standard sparkle is ambiguous on its own, so pair the mark with text when the action is specific.
 */
export function AIMark({ size = 18, title, ...rest }: AIMarkProps) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"
      role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} focusable="false"
      {...rest}
    >
      <path d="M12.4 1.5Q14.2 9.8 21.5 11.4Q13.8 14.4 11.4 22.5Q9.6 14 2.5 12.6Q9.8 9.8 12.4 1.5Z" />
    </svg>
  );
}
```
