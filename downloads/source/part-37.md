## tattva/molecules/ResultCard.tsx

```tsx
import { cn } from "../lib/cn";
import { headingTag, type HeadingLevel } from "../lib/useFocusAfter";
import { Badge, type Tone } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { formatPrice } from "../atoms/Price";
import { FactList, type Fact } from "./FactList";
import { MediaFrame } from "./MediaFrame";

export interface ResultCardPrice {
  value: number;
  /** ISO currency code, such as "EUR". */
  currency?: string;
  locale?: string;
  decimals?: number;
  /** What the price is for: "per night", "a month". */
  note?: string;
}

export interface ResultCardProps {
  /** The thing's name: a hotel, product, place or person. */
  title: string;
  /** One short line under the name: an area, a brand, a role. */
  subtitle?: string;
  /** A picture of the thing. `alt` says what it shows. */
  image?: { src: string; alt: string };
  /** Two to four facts that help choose between results. */
  facts?: Fact[];
  price?: ResultCardPrice;
  /** One short tag, such as "Free cancellation" or "Best match". */
  tag?: { label: string; tone?: Tone };
  /** The one thing to do with this result. */
  action?: { label: string; onClick: () => void };
  /** The answer is still arriving: the card is shown, but its action waits until the answer is complete. */
  streaming?: boolean;
  /** Draws placeholders while the result is loading. */
  loading?: boolean;
  /** Level of the name's heading. Defaults to 3, under an answer's own heading. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * One thing in an answer, such as a hotel, a product, a place or a person: a picture, its name, a few facts, an
 * optional price and tag, and one action. Lay several out with CardRow, all with the same fields.
 */
export function ResultCard({ title, subtitle, image, facts, price, tag, action, streaming = false, loading = false, headingLevel = 3, className }: ResultCardProps) {
  const H = headingTag(headingLevel);
  if (loading) {
    return (
      <div aria-busy="true" className={cn("flex h-full w-full flex-col gap-3 rounded-card border border-line bg-surface p-3", className)}>
        <Skeleton className="aspect-video w-full rounded-[max(2px,calc(var(--radius-card)-12px))]" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }
  return (
    <article className={cn("flex h-full w-full flex-col overflow-hidden rounded-card border border-line bg-surface", className)} aria-busy={streaming || undefined}>
      {image && (
        <div className="relative">
          <MediaFrame src={image.src} alt={image.alt} ratio="16:9" flush />
          {/* On a picture the tag sits on its corner, so the name keeps the full width. */}
          {tag && <Badge tone={tag.tone ?? "neutral"} className="absolute top-3 left-3">{tag.label}</Badge>}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <H className="m-0 font-sans! text-lead leading-6 font-semibold text-fg [overflow-wrap:anywhere]">{title}</H>
            {subtitle && <p className="m-0 mt-0.5 text-body leading-5 text-fg-muted">{subtitle}</p>}
          </div>
          {tag && !image && <Badge tone={tag.tone ?? "neutral"} className="shrink-0">{tag.label}</Badge>}
        </div>
        {facts && facts.length > 0 && <FactList facts={facts} className="-my-1.5" />}
        {(price || action) && (
          <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-1">
            {price ? (
              <p className="m-0 min-w-0">
                <span className="text-lead-lg leading-6 font-semibold text-fg tabular-nums">{formatPrice(price.value, price.currency ?? "USD", price.locale ?? "en-US", price.decimals ?? 0)}</span>
                {price.note && <span className="ml-1 text-body leading-5 text-fg-muted">{price.note}</span>}
              </p>
            ) : <span />}
            {action && (
              <Button size="sm" variant="secondary" onClick={action.onClick} disabled={streaming} aria-label={`${action.label}: ${title}`}>{action.label}</Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
```

## tattva/molecules/RevertToggle.tsx

```tsx
import { useState, type ReactNode } from "react";
import { Button } from "../atoms/Button";
import { SegmentedControl } from "../atoms/SegmentedControl";
import { cn } from "../lib/cn";

export type RevertVersion = "ai" | "user";

export interface RevertToggleProps {
  /** The original AI suggestion. */
  aiValue: ReactNode;
  /** The person's edited version. When absent, only the AI value shows and the controls are hidden. */
  userValue?: ReactNode;
  /** Controlled active version. Omit to let the toggle manage itself. */
  value?: RevertVersion;
  /** Starting version in uncontrolled mode. Defaults to "user" when an edit exists. */
  defaultValue?: RevertVersion;
  onChange?: (value: RevertVersion) => void;
  /** Called when the person chooses Revert to original. The app should drop the edit. */
  onRevert?: () => void;
  aiLabel?: string;
  userLabel?: string;
  revertLabel?: string;
  /** Accessible name for the version switch. */
  label?: string;
  className?: string;
}

/** Switches a value between the AI suggestion and the person's edit, with a way back to the original. */
export function RevertToggle({ aiValue, userValue, value, defaultValue, onChange, onRevert, aiLabel = "AI suggestion", userLabel = "Your edit", revertLabel = "Revert to original", label = "Version", className }: RevertToggleProps) {
  const hasEdit = userValue !== undefined && userValue !== null;
  const [inner, setInner] = useState<RevertVersion>(defaultValue ?? (hasEdit ? "user" : "ai"));
  const [message, setMessage] = useState("");
  const active: RevertVersion = hasEdit ? (value ?? inner) : "ai";
  const names = { ai: aiLabel, user: userLabel };
  const set = (v: RevertVersion) => { if (value === undefined) setInner(v); onChange?.(v); setMessage(`Showing ${names[v]}`); };
  return (
    <div className={cn("space-y-3", className)}>
      {hasEdit && (
        <div className="flex flex-wrap items-center gap-2">
          <SegmentedControl size="sm" label={label} value={active} onChange={set} options={[{ value: "ai", label: aiLabel }, { value: "user", label: userLabel }]} />
          <Button size="sm" variant="ghost" onClick={() => { set("ai"); onRevert?.(); }}>{revertLabel}</Button>
        </div>
      )}
      <div className="rounded-card border border-line bg-surface px-4 py-3 text-body leading-5 text-fg">{active === "ai" ? aiValue : userValue}</div>
      <span role="status" className="sr-only">{message}</span>
    </div>
  );
}
```

## tattva/molecules/SceneIllustration.tsx

```tsx
import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";
import { cn } from "../lib/cn";

/** The 35 Tattva scenes. Each is a Lottie file at `scenes/<name>.json` on the site and in the npm package. */
export const sceneNames = [
  "first-use", "no-results", "error", "permission", "offline", "rate-limit", "success", "upload", "working",
  "sources", "approval", "confidence", "refusal", "memory", "private", "undo", "sensitive",
  "plan", "takeover", "needs-you", "background",
  "variants", "voice", "video", "slides", "music",
  "chart", "generated", "first-run", "download", "connect", "lost", "whats-new", "accessible", "mobile",
] as const;
export type SceneName = (typeof sceneNames)[number];

/** A plain title for each scene, for galleries and as a fallback accessible name. */
export const sceneTitles: Record<SceneName, string> = {
  "first-use": "First message", "no-results": "Nothing found", error: "Something broke", permission: "Asking for access",
  offline: "No connection", "rate-limit": "Slow down", success: "Done", upload: "Add a file", working: "Working on it",
  sources: "Show the sources", approval: "Ask before acting", confidence: "How sure it is", refusal: "A polite no",
  memory: "What it remembers", private: "Private chat", undo: "Take it back", sensitive: "Hide private details",
  plan: "The plan", takeover: "Take over", "needs-you": "Waiting for you", background: "Working while you are away",
  variants: "Pick a version", voice: "Speak to it", video: "Take after take", slides: "Build a deck", music: "Make music",
  chart: "Read the numbers", generated: "Built as it goes", "first-run": "Get started", download: "Download",
  connect: "Connect", lost: "Page not found", "whats-new": "What is new", accessible: "Works for everyone", mobile: "On a phone",
};

export type SceneMotion = "loop" | "once" | "still";
export type SceneSize = "sm" | "md" | "lg" | "fill";

export interface SceneIllustrationProps {
  /** The scene's Lottie data. Pass this or `src`. */
  data?: object;
  /** Address of the scene's Lottie file, for example `${base}scenes/approval.json`. Used when `data` is not given. */
  src?: string;
  /** Accessible name. Leave it out when nearby words already say what the scene shows; the scene is then hidden from assistive tech. */
  label?: string;
  /** `loop` plays the entrance, then a calm loop. `once` plays the entrance and stops. `still` shows the finished picture. Reduced motion always shows the still picture. */
  motion?: SceneMotion;
  /** Width: 12rem, 18rem or 30rem. `fill` takes the width of its container. Height follows at 4:3. */
  size?: SceneSize;
  className?: string;
}

const sizes: Record<SceneSize, string> = { sm: "w-48", md: "w-72", lg: "w-120", fill: "w-full" };

/* Scenes are drawn with three key colours. The theme decides what they become, so scenes follow light and dark mode. */
const themed =
  "[&_[fill='rgb(17,17,17)']]:fill-fg [&_[stroke='rgb(17,17,17)']]:stroke-fg " +
  "[&_[fill='rgb(255,255,255)']]:fill-surface [&_[stroke='rgb(255,255,255)']]:stroke-surface " +
  "[&_[fill='rgb(200,240,74)']]:fill-lime [&_[stroke='rgb(200,240,74)']]:stroke-lime";

interface Marker { tm: number; cm: string; dr: number }

/** Where the entrance ends and the loop runs, read from the file's "intro" and "loop" markers. */
function segments(data: { markers?: Marker[]; op?: number }) {
  const intro = data.markers?.find((m) => m.cm === "intro");
  const loop = data.markers?.find((m) => m.cm === "loop");
  const end = data.op ?? 0;
  const introEnd = intro ? intro.tm + intro.dr : end;
  return { introEnd, loop: loop ? [loop.tm, loop.tm + loop.dr] as [number, number] : null };
}

/**
 * A Tattva scene: a small story told with objects and a lime shape, played from a Lottie file.
 * It plays a short entrance, then a calm loop that carries the meaning, and pauses while off screen.
 */
export function SceneIllustration({ data, src, label, motion = "loop", size = "md", className }: SceneIllustrationProps) {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let anim: AnimationItem | null = null;
    let seen: IntersectionObserver | null = null;
    let cancelled = false;
    const still = motion === "still" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      const json = (data ?? (src ? await fetch(src).then((r) => r.json()) : null)) as { markers?: Marker[]; op?: number } | null;
      if (!json || cancelled || !box.current) return;
      const lottie = (await import("lottie-web/build/player/lottie_light")).default;
      if (cancelled || !box.current) return;
      const { introEnd, loop } = segments(json);
      anim = lottie.loadAnimation({
        container: box.current, renderer: "svg", loop: false, autoplay: false,
        animationData: structuredClone(json), rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });
      anim.addEventListener("DOMLoaded", () => {
        setReady(true);
        if (still) { anim?.goToAndStop(introEnd, true); return; }
        anim?.playSegments([0, introEnd], true);
      });
      anim.addEventListener("complete", () => {
        if (motion === "loop" && loop && anim) { anim.loop = true; anim.playSegments(loop, true); }
      });
      if (!still) {
        let hidden = false;
        seen = new IntersectionObserver(([e]) => {
          if (!anim) return;
          if (!e.isIntersecting) { hidden = true; anim.pause(); } else if (hidden) { hidden = false; anim.play(); }
        });
        seen.observe(box.current);
      }
    })();

    return () => { cancelled = true; seen?.disconnect(); anim?.destroy(); };
  }, [data, src, motion]);

  return (
    <div
      ref={box}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      aria-busy={ready ? undefined : true}
      className={cn("aspect-[4/3] max-w-full shrink-0", sizes[size], themed, className)}
    />
  );
}
```
