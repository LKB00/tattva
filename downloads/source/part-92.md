## tattva/organisms/SourceList.tsx

```tsx
import { cn } from "../lib/cn";
import { type Source, SourceCard } from "../molecules/SourceCard";

export function SourceList({ sources, className }: { sources: Source[]; className?: string }) {
  return (
    <section aria-label="Sources" className={cn("space-y-1.5", className)}>
      <p className="text-nano uppercase tracking-caps text-fg-muted">Sources</p>
      <ol className="grid gap-2 sm:grid-cols-2">
        {sources.map((s) => <SourceCard key={s.id} source={s} />)}
      </ol>
    </section>
  );
}
```

## tattva/organisms/Sparkline.tsx

```tsx
import { formatNumber } from "../molecules/ChartFrame";

export interface SparklineProps {
  /** Values in time order. At least two points are drawn. */
  data: number[];
  /** What the line measures, for example "p95 latency". Used in the accessible name. */
  label: string;
  /** Unit appended to values in the accessible name, for example " ms". Include the leading space if needed. */
  unit?: string;
  /** Formats values for the accessible name. */
  formatValue?: (n: number) => string;
  /** Width in px. */
  width?: number;
  /** Height in px. */
  height?: number;
  /** Mark the minimum and maximum with dots. */
  showMinMax?: boolean;
  /** Hide from assistive technology. Use when the number beside it already says everything, such as inside a StatTile. */
  decorative?: boolean;
  /** Color of the emphasized end point. Defaults to the first chart color. */
  color?: string;
  className?: string;
}

/**
 * Tiny trend line in the context color with the latest point emphasized. The accessible name states the first,
 * last, minimum and maximum values. Set decorative when a visible number carries the same information.
 */
export function Sparkline({ data, label, unit = "", formatValue = formatNumber, width = 96, height = 28, showMinMax, decorative, color = "var(--chart-1)", className }: SparklineProps) {
  const n = data.length;
  const pad = 6;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const x = (i: number) => pad + (n <= 1 ? (width - 2 * pad) / 2 : (i * (width - 2 * pad)) / (n - 1));
  const y = (v: number) => height - pad - ((v - min) / span) * (height - 2 * pad);
  const d = data.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join("");
  const iMin = data.indexOf(min);
  const iMax = data.indexOf(max);
  const f = (v: number) => `${formatValue(v)}${unit}`;
  const name = n ? `${label}: first ${f(data[0])}, last ${f(data[n - 1])}, minimum ${f(min)}, maximum ${f(max)}.` : `${label}: no data.`;
  if (!n) return null;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}
      role={decorative ? undefined : "img"} aria-label={decorative ? undefined : name} aria-hidden={decorative || undefined} focusable="false">
      {n > 1 && <path d={d} fill="none" stroke="var(--chart-axis)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />}
      {showMinMax && iMin !== n - 1 && <circle cx={x(iMin)} cy={y(min)} r={3.5} fill="var(--surface)" stroke="var(--chart-axis)" strokeWidth={1.5} />}
      {showMinMax && iMax !== n - 1 && iMax !== iMin && <circle cx={x(iMax)} cy={y(max)} r={3.5} fill="var(--surface)" stroke="var(--chart-axis)" strokeWidth={1.5} />}
      <circle cx={x(n - 1)} cy={y(data[n - 1])} r={4.5} fill={color} stroke="var(--surface)" strokeWidth={2} />
    </svg>
  );
}
```

## tattva/organisms/StarterGallery.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { keepFocus, nearestTyping, useAnnounceChange } from "../lib/focus";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";

export interface StarterIntent { id: string; label: string }
export interface StarterTemplate { id: string; title: string; description: string; category?: string }

export interface StarterGalleryProps {
  /** Heading above the statement. */
  heading?: string;
  /** One sentence on what the assistant can and cannot do. */
  statement: ReactNode;
  /** Starter intents. Three to six works best. */
  intents: StarterIntent[];
  onIntent: (id: string) => void;
  templates?: StarterTemplate[];
  onTemplate?: (id: string) => void;
  intentsLabel?: string;
  templatesLabel?: string;
  /** Slot beside the templates heading, usually a Randomize button. When the templates change, screen readers hear it. */
  randomize?: ReactNode;
  /** What screen readers hear when the templates change. */
  templatesChangedMessage?: (count: number) => string;
  /** Where keyboard focus goes after an idea or template is chosen, if the gallery goes away. By default the nearest
   * message box. */
  focusAfterChoose?: () => HTMLElement | null;
  className?: string;
}

/** First-run view. It states scope, offers starter intents next to free text, and lists templates. */
export function StarterGallery({ heading = "What would you like to make?", statement, intents, onIntent, templates = [], onTemplate, intentsLabel = "Start with", templatesLabel = "Templates", randomize, templatesChangedMessage = (n) => `New templates: ${n}`, focusAfterChoose, className }: StarterGalleryProps) {
  const ref = useRef<HTMLElement>(null);
  const choose = (f: ((id: string) => void) | undefined, id: string) => {
    const box = nearestTyping(ref.current);
    f?.(id);
    keepFocus(ref.current, () => focusAfterChoose?.() ?? box);
  };
  const said = useAnnounceChange(templates.map((t) => t.id).join("|"), () => templatesChangedMessage(templates.length));
  return (
    <section ref={ref} aria-label={heading} className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h2 className="text-title-sm leading-8">{heading}</h2>
        <p className="max-w-xl text-body leading-5 text-fg-muted">{statement}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-nano font-normal tracking-caps text-fg-muted uppercase font-sans!">{intentsLabel}</h3>
        <ul className="flex flex-wrap gap-2">
          {intents.map((i) => <li key={i.id}><Button variant="secondary" size="sm" onClick={() => choose(onIntent, i.id)}>{i.label}</Button></li>)}
        </ul>
      </div>
      <p role="status" aria-live="polite" className="sr-only">{said}</p>
      {templates.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-nano font-normal tracking-caps text-fg-muted uppercase font-sans!">{templatesLabel}</h3>
            {randomize}
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <li key={t.id}>
                <button type="button" onClick={() => choose(onTemplate, t.id)}
                  className="flex h-full w-full cursor-pointer flex-col items-start gap-1 rounded-card border border-line bg-surface p-4 text-left transition-colors hover:border-line-strong hover:bg-hover">
                  {t.category && <Badge>{t.category}</Badge>}
                  <span className="text-body leading-5 font-medium">{t.title}</span>
                  <span className="text-small leading-4 text-fg-muted">{t.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
```
