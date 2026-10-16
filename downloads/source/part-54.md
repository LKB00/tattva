## tattva/organisms/CandlestickChart.tsx

```tsx
import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "../lib/cn";
import type { DataTableProps } from "../molecules/DataTable";
import { formatNumber, niceTicks, useElementWidth } from "../molecules/ChartFrame";

export interface Candle {
  /** Label for this candle, already formatted, for example "12 Mar" or "10:15". */
  t: string;
  /** Open price. */
  o: number;
  /** Highest price. */
  h: number;
  /** Lowest price. */
  l: number;
  /** Close price. */
  c: number;
  /** Volume traded. Needed for the volume strip. */
  v?: number;
}

export interface CandlestickChartProps {
  /** One entry per candle, oldest first. */
  data: Candle[];
  /** Plot height in px, including the volume strip and the x axis band. Minimum 160. */
  height?: number;
  /** Adds a thin volume strip under the prices, on the same x scale. Needs v on the candles. */
  volume?: boolean;
  /** Formats prices on the axis, in the tooltip and in the table. */
  formatValue?: (n: number) => string;
  /** Name for the chart region, for example "Daily price of Acme, last 40 days". */
  ariaLabel: string;
  /** The last candle may still change. It is drawn with a dashed outline and called provisional. */
  streaming?: boolean;
  className?: string;
}

const dirOf = (d: Candle): "up" | "down" => (d.c >= d.o ? "up" : "down");
const pctOf = (d: Candle) => (d.o !== 0 ? ((d.c - d.o) / d.o) * 100 : 0);

/** The change in words, for example "up 1.5 (1.2 percent)". Used by the tooltip, the live region and the table. */
function changeWords(d: Candle, f: (n: number) => string): string {
  return `${dirOf(d)} ${f(Math.abs(d.c - d.o))} (${Math.abs(pctOf(d)).toFixed(2)} percent)`;
}

/**
 * Candlestick chart drawn in SVG at real pixel size. Up candles (close at or above open) are hollow with an up outline.
 * Down candles are filled with the down colour. Direction is also said in words in the tooltip, the live region and the table.
 * The plot takes focus: Left and Right step through candles, Home and End jump, Escape clears.
 */
export function CandlestickChart({ data, height = 280, volume, formatValue = formatNumber, ariaLabel, streaming, className }: CandlestickChartProps) {
  const [ref, measured] = useElementWidth<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [said, setSaid] = useState("");
  const uid = useId();

  const w = measured || 640;
  const h = Math.max(160, height);
  const n = data.length;
  const showVol = !!volume && data.some((d) => typeof d.v === "number");
  const volH = showVol ? Math.min(56, Math.max(32, h * 0.18)) : 0;

  const lows = data.map((d) => d.l);
  const highs = data.map((d) => d.h);
  const dMin = n ? Math.min(...lows) : 0;
  const dMax = n ? Math.max(...highs) : 1;
  const pad = (dMax - dMin || Math.abs(dMax) || 1) * 0.06;
  const ticks = niceTicks(dMin - pad, dMax + pad);
  const lo = ticks[0];
  const hi = ticks[ticks.length - 1];
  const tickLabels = ticks.map((t) => formatValue(t));
  const left = Math.max(28, Math.max(...tickLabels.map((t) => t.length)) * 6.6 + 14);
  const right = 12;
  const pw = Math.max(40, w - left - right);

  const plotTop = 12;
  const axisBand = 28;
  const volGap = showVol ? 8 : 0;
  const priceBottom = h - axisBand - volH - volGap;
  const volTop = priceBottom + volGap;
  const volBottom = volTop + volH;
  const py = (v: number) => priceBottom - ((v - lo) / (hi - lo || 1)) * (priceBottom - plotTop);
  const slot = pw / Math.max(1, n);
  const px = (i: number) => left + (i + 0.5) * slot;
  const bodyW = Math.max(2, Math.min(14, slot * 0.6));
  const maxVol = Math.max(1, ...data.map((d) => d.v ?? 0));

  const xw = Math.max(0, ...data.map((d) => d.t.length)) * 6.4 + 14;
  const stepK = Math.max(1, Math.ceil(xw / slot));

  const readout = (i: number) => {
    const d = data[i];
    const prov = streaming && i === n - 1 ? ", provisional" : "";
    const vol = typeof d.v === "number" ? `, volume ${formatNumber(d.v)}` : "";
    return `${d.t}, open ${formatValue(d.o)}, high ${formatValue(d.h)}, low ${formatValue(d.l)}, close ${formatValue(d.c)}, ${changeWords(d, formatValue)}${vol}${prov}`;
  };

  const step = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!n) return;
    let i = active ?? n - 1;
    if (e.key === "ArrowRight") i = Math.min(n - 1, i + 1);
    else if (e.key === "ArrowLeft") i = Math.max(0, i - 1);
    else if (e.key === "Home") i = 0;
    else if (e.key === "End") i = n - 1;
    else if (e.key === "Escape") { setActive(null); setSaid(""); return; }
    else return;
    e.preventDefault();
    setActive(i);
    setSaid(readout(i));
  };

  const point = (e: PointerEvent<SVGRectElement>) => {
    const r = svgRef.current?.getBoundingClientRect();
    if (!r || !n) return;
    setActive(Math.max(0, Math.min(n - 1, Math.floor((e.clientX - r.left - left) / slot))));
  };

  const ai = active !== null && active < n ? active : -1;
  const tipRight = ai >= 0 && px(ai) > w / 2;
  const ad = ai >= 0 ? data[ai] : null;

  return (
    <div ref={ref} className={cn("relative min-w-0", className)}>
      <div ref={wrapRef} tabIndex={0} role="group" aria-roledescription="candlestick chart"
        aria-label={`${ariaLabel}. ${n} candles. Use left and right arrow keys to step through candles.`}
        onKeyDown={step} onFocus={() => { if (n) setActive((p) => p ?? n - 1); }}
        onBlur={() => { setActive(null); setSaid(""); }}
        className="relative rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]">
        <svg ref={svgRef} width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="block max-w-full touch-pan-y select-none" aria-hidden focusable="false"
          style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-small)" }}>
          <defs>
            <clipPath id={`${uid}-clip`}><rect x={left} y={0} width={pw} height={priceBottom + 2} /></clipPath>
          </defs>
          {ticks.map((t, i) => (
            <g key={t}>
              <line x1={left} x2={left + pw} y1={py(t)} y2={py(t)} stroke={i === 0 ? "var(--chart-axis)" : "var(--chart-grid)"} strokeWidth={i === 0 ? 1 : 0.5} shapeRendering="crispEdges" />
              <text x={left - 8} y={py(t)} textAnchor="end" dominantBaseline="central" fill="var(--fg-muted)" style={{ fontVariantNumeric: "tabular-nums" }}>{tickLabels[i]}</text>
            </g>
          ))}
          {showVol && <line x1={left} x2={left + pw} y1={volBottom} y2={volBottom} stroke="var(--chart-axis)" strokeWidth={1} shapeRendering="crispEdges" />}
          {data.map((d, i) => {
            if (i % stepK !== 0) return null;
            const half = (d.t.length * 6.4) / 2;
            const cx = px(i);
            const anchor = cx - half < 0 ? "start" : cx + half > w ? "end" : "middle";
            return <text key={i} x={anchor === "start" ? Math.max(0, cx - half) : cx} y={h - 10} textAnchor={anchor} fill="var(--fg-muted)">{d.t}</text>;
          })}
          {ai >= 0 && <line x1={px(ai)} x2={px(ai)} y1={plotTop} y2={showVol ? volBottom : priceBottom} stroke="var(--chart-axis)" strokeWidth={1} shapeRendering="crispEdges" />}
          <g clipPath={`url(#${uid}-clip)`}>
            {data.map((d, i) => {
              const up = dirOf(d) === "up";
              const color = up ? "var(--up)" : "var(--down)";
              const x = px(i);
              const top = py(Math.max(d.o, d.c));
              const bh = Math.max(1.5, Math.abs(py(d.o) - py(d.c)));
              const prov = streaming && i === n - 1;
              return (
                <g key={i}>
                  <line x1={x} x2={x} y1={py(d.h)} y2={py(d.l)} stroke={color} strokeWidth={1} shapeRendering="crispEdges" />
                  <rect x={x - bodyW / 2} y={top} width={bodyW} height={bh} fill={up ? "var(--surface)" : color} stroke={color}
                    strokeWidth={1.25} strokeDasharray={prov ? "2 2" : undefined} shapeRendering="crispEdges" />
                </g>
              );
            })}
          </g>
          {showVol && data.map((d, i) => {
            const vh = ((d.v ?? 0) / maxVol) * volH;
            return <rect key={i} x={px(i) - bodyW / 2} y={volBottom - vh} width={bodyW} height={vh} fill="var(--chart-axis)" fillOpacity={ai === i ? 0.9 : 0.45} stroke="none" />;
          })}
          {ad && <circle cx={px(ai)} cy={py(ad.c)} r={3.5} fill="var(--surface)" stroke="var(--fg)" strokeWidth={1.5} />}
          <rect x={left} y={0} width={pw + right} height={h - axisBand + 4} fill="transparent" onPointerMove={point} onPointerDown={point}
            onPointerLeave={(e) => { if (e.pointerType === "mouse" && document.activeElement !== wrapRef.current) setActive(null); }} />
        </svg>
        {ad && (
          <div aria-hidden className="pointer-events-none absolute z-10 min-w-40 max-w-64 rounded-overlay border border-line bg-surface px-3 py-2 text-small leading-4 shadow-md"
            style={{ top: plotTop, left: px(ai), transform: `translateX(${tipRight ? "calc(-100% - 12px)" : "12px"})` }}>
            <p className="mb-1 text-fg-muted">{ad.t}{streaming && ai === n - 1 ? ", provisional" : ""}</p>
            {([["Open", ad.o], ["High", ad.h], ["Low", ad.l], ["Close", ad.c]] as const).map(([k, v]) => (
              <p key={k} className="flex items-center justify-between gap-4 leading-5">
                <span className="text-fg-muted">{k}</span>
                <span className="font-semibold text-fg [font-variant-numeric:tabular-nums]">{formatValue(v)}</span>
              </p>
            ))}
            <p className="mt-1 flex items-center gap-2 border-t border-line pt-1 leading-5">
              <svg width={10} height={14} viewBox="0 0 10 14" aria-hidden focusable="false">
                <line x1={5} x2={5} y1={0} y2={14} stroke={dirOf(ad) === "up" ? "var(--up)" : "var(--down)"} strokeWidth={1} />
                <rect x={1.5} y={4} width={7} height={6} fill={dirOf(ad) === "up" ? "var(--surface)" : "var(--down)"} stroke={dirOf(ad) === "up" ? "var(--up)" : "var(--down)"} strokeWidth={1.25} />
              </svg>
              <span className={cn("font-medium", dirOf(ad) === "up" ? "text-up-fg" : "text-down-fg")}>{changeWords(ad, formatValue)}</span>
            </p>
            {typeof ad.v === "number" && (
              <p className="flex items-center justify-between gap-4 leading-5">
                <span className="text-fg-muted">Volume</span>
                <span className="font-semibold text-fg [font-variant-numeric:tabular-nums]">{formatNumber(ad.v)}</span>
              </p>
            )}
          </div>
        )}
      </div>
      <div className="sr-only" aria-live="polite" role="status">{said}</div>
    </div>
  );
}

/** Table data for ChartFrame's table view. The Change column says "up" or "down" in words. */
export function candlestickTable(data: Candle[], formatValue: (n: number) => string = formatNumber, caption = "Open, high, low and close for each candle"): DataTableProps {
  return {
    caption,
    columns: [
      { key: "t", header: "Time" },
      { key: "o", header: "Open", numeric: true },
      { key: "h", header: "High", numeric: true },
      { key: "l", header: "Low", numeric: true },
      { key: "c", header: "Close", numeric: true },
      { key: "chg", header: "Change", numeric: true, direction: (r) => (String(r.chg).startsWith("Up") ? "up" : "down") },
      { key: "v", header: "Volume", numeric: true },
    ],
    rows: data.map((d) => ({
      t: d.t, o: formatValue(d.o), h: formatValue(d.h), l: formatValue(d.l), c: formatValue(d.c),
      chg: `${dirOf(d) === "up" ? "Up" : "Down"} ${formatValue(Math.abs(d.c - d.o))} (${Math.abs(pctOf(d)).toFixed(2)}%)`,
      v: typeof d.v === "number" ? formatNumber(d.v) : "No data",
    })),
  };
}
```

## tattva/organisms/CanvasPanel.tsx

```tsx
import { useEffect, useRef, type ReactNode } from "react";
import { keepFocus, useAnnounceChange } from "../lib/focus";
import { RefreshIcon, XIcon } from "../lib/icons";
import { Button, IconButton } from "../atoms/Button";

/**
 * Side panel for generated artifacts (docs, code, designs) that outlive a single chat message. Version changes are
 * read out, the content can be scrolled from the keyboard, and Close returns focus to what opened the panel.
 */
export function CanvasPanel({ title, version, versions = 1, onVersionChange, onClose, onRegenerate, children, actions, versionMessage = (v, n) => `Version ${v} of ${n}`, focusAfterClose }: {
  title: string; version?: number; versions?: number; onVersionChange?: (v: number) => void; onClose?: () => void; onRegenerate?: () => void; children: ReactNode; actions?: ReactNode;
  /** What screen readers hear when the version changes. */
  versionMessage?: (version: number, versions: number) => string;
  /** Where keyboard focus goes after Close. By default the control that had focus when the panel opened. */
  focusAfterClose?: () => HTMLElement | null;
}) {
  const ref = useRef<HTMLElement>(null);
  // Remember what opened the panel, so Close can go back to it.
  const opener = useRef<HTMLElement | null>(null);
  useEffect(() => { const a = document.activeElement; if (a instanceof HTMLElement && a !== document.body && !ref.current?.contains(a)) opener.current = a; }, []);
  const said = useAnnounceChange(version, (v) => (v != null ? versionMessage(v, versions) : ""));
  return (
    <aside ref={ref} aria-label={title} className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-md">
      <header className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-line px-3 py-2">
        <h2 className="min-w-32 flex-1 truncate text-body leading-5 font-medium">{title}</h2>
        {versions > 1 && version != null && (
          <div className="flex items-center gap-1 text-small leading-4 text-fg-muted" role="group" aria-label="Version history">
            <Button size="sm" variant="ghost" disabled={version <= 1} onClick={() => onVersionChange?.(version - 1)} aria-label="Previous version">‹</Button>
            <span className="tabular-nums">v{version} of {versions}</span>
            <Button size="sm" variant="ghost" disabled={version >= versions} onClick={() => onVersionChange?.(version + 1)} aria-label="Next version">›</Button>
          </div>
        )}
        {onRegenerate && <IconButton size="sm" label="Regenerate" onClick={onRegenerate}><RefreshIcon /></IconButton>}
        {actions}
        {onClose && <IconButton size="sm" label="Close panel" onClick={() => { onClose(); keepFocus(ref.current, () => focusAfterClose?.() ?? (opener.current?.isConnected ? opener.current : null)); }}><XIcon /></IconButton>}
      </header>
      <p role="status" aria-live="polite" className="sr-only">{said}</p>
      {/* Reachable from the keyboard, so long content can be scrolled with the arrow keys. */}
      <div tabIndex={0} role="region" aria-label={`${title}, content`} className="min-h-0 flex-1 overflow-auto p-4 outline-offset-[-2px]">{children}</div>
    </aside>
  );
}
```
