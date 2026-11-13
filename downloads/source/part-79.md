## tattva/organisms/PayoffChart.tsx

```tsx
import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "../lib/cn";
import type { DataTableProps } from "../molecules/DataTable";
import { formatNumber, niceTicks, useElementWidth } from "../molecules/ChartFrame";

export interface PayoffPoint {
  /** Price of the underlying at the end. */
  spot: number;
  /** Profit (positive) or loss (negative) at that price. */
  pnl: number;
}

export interface PayoffLeg {
  kind: "call" | "put" | "stock";
  side: "buy" | "sell";
  /** Strike price for an option. For a stock leg, the price paid or received per share. */
  strike?: number;
  /** Price per unit paid (buy) or received (sell). Always positive. Defaults to 0. Not used by stock legs. */
  premium?: number;
  /** Number of units. */
  qty: number;
}

export interface PayoffChartProps {
  /** Ready-made points. Use this or legs. */
  points?: PayoffPoint[];
  /** Positions to compute the result at expiry from. Used when points is not given. */
  legs?: PayoffLeg[];
  /** Price range to draw when computing from legs. Defaults to a band around the strikes. */
  spotRange?: [number, number];
  /** Number of steps across the range when computing from legs. */
  steps?: number;
  /** Current price. Drawn as a labelled vertical marker when it is inside the range. */
  spot?: number;
  /** Formats prices and amounts. */
  formatValue?: (n: number) => string;
  /** Name for the chart region, for example "Bull call spread, result at expiry". */
  ariaLabel: string;
  /** Plot height in px. Minimum 180. */
  height?: number;
  className?: string;
}

/** Profit or loss of the legs at expiry for each price in spots. Premium is per unit and qty multiplies it. */
export function payoffAtExpiry(legs: PayoffLeg[], spots: number[]): number[] {
  return spots.map((s) => legs.reduce((sum, l) => {
    const sign = l.side === "buy" ? 1 : -1;
    const k = l.strike ?? 0;
    const prem = l.premium ?? 0;
    const intrinsic = l.kind === "call" ? Math.max(s - k, 0) : l.kind === "put" ? Math.max(k - s, 0) : s - k;
    return sum + sign * l.qty * (l.kind === "stock" ? intrinsic : intrinsic - prem);
  }, 0));
}

const clean = (n: number) => Math.round(n * 1e9) / 1e9;

/** Points from legs (with every strike included so the kinks are exact) or from the points given. */
function resolve(points: PayoffPoint[] | undefined, legs: PayoffLeg[] | undefined, range: [number, number] | undefined, steps: number): PayoffPoint[] {
  if (points && points.length) return [...points].sort((a, b) => a.spot - b.spot);
  if (!legs || !legs.length) return [];
  const ks = legs.map((l) => l.strike).filter((k): k is number => typeof k === "number");
  const kLo = ks.length ? Math.min(...ks) : 50;
  const kHi = ks.length ? Math.max(...ks) : 150;
  const span = kHi - kLo;
  const [a, b] = range ?? [Math.max(0, kLo - (span || kLo) * 0.5), kHi + (span || kLo) * 0.5];
  const n = Math.max(2, Math.floor(steps));
  const spots = Array.from({ length: n + 1 }, (_, i) => clean(a + ((b - a) * i) / n));
  ks.forEach((k) => { if (k > a && k < b) spots.push(k); });
  const sorted = [...new Set(spots)].sort((x, y) => x - y);
  const pnl = payoffAtExpiry(legs, sorted);
  return sorted.map((spot, i) => ({ spot, pnl: clean(pnl[i]) }));
}

function breakevens(p: PayoffPoint[]): number[] {
  const out: number[] = [];
  if (p.length && p[0].pnl === 0) out.push(p[0].spot);
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[i].pnl, b = p[i + 1].pnl;
    if (a * b < 0) out.push(clean(p[i].spot + ((p[i + 1].spot - p[i].spot) * -a) / (b - a)));
    else if (b === 0 && a !== 0) out.push(p[i + 1].spot);
  }
  return out;
}

const verdict = (v: number, f: (n: number) => string) => (v > 0 ? `profit ${f(v)}` : v < 0 ? `loss ${f(-v)}` : "break even");

/**
 * Profit or loss at expiry as the price moves, drawn in SVG. The profit area is tinted, loss area is tinted and hatched.
 * Break-even prices and the best and worst outcomes are labelled. "Unlimited" is only said for the right edge,
 * because a price cannot fall below zero. The plot takes focus: Left and Right step through prices.
 */
export function PayoffChart({ points, legs, spotRange, steps = 120, spot, formatValue = formatNumber, ariaLabel, height = 260, className }: PayoffChartProps) {
  const [ref, measured] = useElementWidth<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [said, setSaid] = useState("");
  const uid = useId().replace(/:/g, "");

  const pts = resolve(points, legs, spotRange, steps);
  const n = pts.length;
  const w = measured || 640;
  const h = Math.max(180, height);

  const pMin = n ? Math.min(...pts.map((p) => p.pnl)) : 0;
  const pMax = n ? Math.max(...pts.map((p) => p.pnl)) : 1;
  const pad = (Math.max(pMax, 0) - Math.min(pMin, 0) || 1) * 0.12;
  const ticks = niceTicks(Math.min(pMin, 0) - (pMin < 0 ? pad : 0), Math.max(pMax, 0) + (pMax > 0 ? pad : 0));
  const lo = ticks[0];
  const hi = ticks[ticks.length - 1];
  const tickLabels = ticks.map((t) => formatValue(t));
  const left = Math.max(32, Math.max(...tickLabels.map((t) => t.length)) * 6.6 + 14);
  const right = 16;
  const pw = Math.max(40, w - left - right);
  const plotTop = 30;
  const plotBottom = h - 30;
  const py = (v: number) => plotBottom - ((v - lo) / (hi - lo || 1)) * (plotBottom - plotTop);
  const s0 = n ? pts[0].spot : 0;
  const s1 = n ? pts[n - 1].spot : 1;
  const px = (s: number) => left + ((s - s0) / (s1 - s0 || 1)) * pw;
  const zy = py(0);

  const line = pts.map((p, i) => `${i ? "L" : "M"}${px(p.spot).toFixed(1)} ${py(p.pnl).toFixed(1)}`).join("");
  const area = n ? `${line}L${px(s1).toFixed(1)} ${zy.toFixed(1)}L${px(s0).toFixed(1)} ${zy.toFixed(1)}Z` : "";

  const eps = (pMax - pMin || 1) * 1e-6;
  const slopeR = n > 1 ? (pts[n - 1].pnl - pts[n - 2].pnl) / (pts[n - 1].spot - pts[n - 2].spot || 1) : 0;
  const profitOpen = n > 1 && slopeR > 1e-9 && pts[n - 1].pnl >= pMax - eps;
  const lossOpen = n > 1 && slopeR < -1e-9 && pts[n - 1].pnl <= pMin + eps;
  const bes = breakevens(pts);

  const mid = (target: number) => {
    const idx = pts.map((p, i) => (Math.abs(p.pnl - target) <= eps ? i : -1)).filter((i) => i >= 0);
    return idx.length ? pts[idx[Math.floor(idx.length / 2)]] : pts[0];
  };

  /** Keep a label inside the drawing: start-, middle- or end-anchored depending on how close it is to an edge. */
  const place = (x: number, text: string) => {
    const half = (text.length * 6.4) / 2;
    return x - half < 2 ? { x: 2, a: "start" as const } : x + half > w - 2 ? { x: w - 2, a: "end" as const } : { x, a: "middle" as const };
  };
  const halo = { paintOrder: "stroke" as const, stroke: "var(--surface)", strokeWidth: 3, strokeLinejoin: "round" as const };

  const readout = (i: number) => `Price ${formatValue(pts[i].spot)}, ${verdict(pts[i].pnl, formatValue)}`;
  const step = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!n) return;
    let i = active ?? Math.round((n - 1) / 2);
    if (e.key === "ArrowRight") i = Math.min(n - 1, i + 1);
    else if (e.key === "ArrowLeft") i = Math.max(0, i - 1);
    else if (e.key === "PageDown") i = Math.min(n - 1, i + 10);
    else if (e.key === "PageUp") i = Math.max(0, i - 10);
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
    const s = s0 + ((e.clientX - r.left - left) / pw) * (s1 - s0);
    let best = 0, bd = Infinity;
    pts.forEach((p, i) => { const d = Math.abs(p.spot - s); if (d < bd) { bd = d; best = i; } });
    setActive(best);
  };

  const ai = active !== null && active < n ? active : -1;
  const ap = ai >= 0 ? pts[ai] : null;
  const tipRight = ap ? px(ap.spot) > w / 2 : false;
  const xTicks = n ? niceTicks(s0, s1, 6).filter((t) => t >= s0 - 1e-9 && t <= s1 + 1e-9) : [];
  const maxText = profitOpen ? "Max profit: Unlimited" : `Max profit ${formatValue(pMax)}`;
  const minText = lossOpen ? "Max loss: Unlimited" : `Max loss ${formatValue(-pMin)}`;
  const mp = n && pMax > 0 ? mid(pMax) : null;
  const lp = n && pMin < 0 ? mid(pMin) : null;
  const spotIn = typeof spot === "number" && n > 0 && spot >= s0 && spot <= s1;
  const spotText = spotIn ? `Price now ${formatValue(spot as number)}` : "";

  return (
    <div ref={ref} className={cn("relative min-w-0", className)}>
      <div ref={wrapRef} tabIndex={0} role="group" aria-roledescription="payoff chart"
        aria-label={`${ariaLabel}. ${n} prices. Use left and right arrow keys to step through prices.`}
        onKeyDown={step} onFocus={() => { if (n) setActive((p) => p ?? Math.round((n - 1) / 2)); }}
        onBlur={() => { setActive(null); setSaid(""); }}
        className="relative rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]">
        <svg ref={svgRef} width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="block max-w-full touch-pan-y select-none" aria-hidden focusable="false"
          style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-small)" }}>
          <defs>
            <pattern id={`${uid}-hatch`} width={6} height={6} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1={0} y1={0} x2={0} y2={6} stroke="var(--down)" strokeWidth={1.25} strokeOpacity={0.55} />
            </pattern>
            <clipPath id={`${uid}-above`}><rect x={left} y={0} width={pw} height={Math.max(0, zy)} /></clipPath>
            <clipPath id={`${uid}-below`}><rect x={left} y={zy} width={pw} height={Math.max(0, h - zy)} /></clipPath>
          </defs>
          {ticks.map((t) => (
            <g key={t}>
              {t !== 0 && <line x1={left} x2={left + pw} y1={py(t)} y2={py(t)} stroke="var(--chart-grid)" strokeWidth={0.5} shapeRendering="crispEdges" />}
              <text x={left - 8} y={py(t)} textAnchor="end" dominantBaseline="central" fill="var(--fg-muted)" style={{ fontVariantNumeric: "tabular-nums" }}>{formatValue(t)}</text>
            </g>
          ))}
          {xTicks.map((t) => {
            const lab = formatValue(t);
            const p = place(px(t), lab);
            return <text key={t} x={p.x} y={h - 10} textAnchor={p.a} fill="var(--fg-muted)">{lab}</text>;
          })}
          {n > 0 && (
            <g>
              <path d={area} clipPath={`url(#${uid}-above)`} fill="var(--up-soft)" stroke="none" />
              <path d={area} clipPath={`url(#${uid}-below)`} fill="var(--down-soft)" stroke="none" />
              <path d={area} clipPath={`url(#${uid}-below)`} fill={`url(#${uid}-hatch)`} stroke="none" />
            </g>
          )}
          <line x1={left} x2={left + pw} y1={zy} y2={zy} stroke="var(--chart-axis)" strokeWidth={1} shapeRendering="crispEdges" />
          {spotIn && (
            <g>
              <line x1={px(spot as number)} x2={px(spot as number)} y1={plotTop - 6} y2={plotBottom} stroke="var(--fg-muted)" strokeWidth={1} strokeDasharray="3 3" shapeRendering="crispEdges" />
              <text x={place(px(spot as number), spotText).x} y={plotTop - 12} textAnchor={place(px(spot as number), spotText).a} fill="var(--fg)" style={{ fontWeight: 500 }}>{spotText}</text>
            </g>
          )}
          {n > 0 && <path d={line} fill="none" stroke="var(--chart-1)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />}
          {bes.map((b) => {
            const lab = `Breakeven ${formatValue(b)}`;
            const p = place(px(b), lab);
            return (
              <g key={b}>
                <circle cx={px(b)} cy={zy} r={4} fill="var(--surface)" stroke="var(--fg)" strokeWidth={1.5} />
                <text x={p.x} y={zy + 18} textAnchor={p.a} fill="var(--fg)" style={halo}>{lab}</text>
              </g>
            );
          })}
          {mp && (() => { const p = place(px(mp.spot), maxText); return <text x={p.x} y={py(mp.pnl) - 8} textAnchor={p.a} fill="var(--up-fg)" style={{ ...halo, fontWeight: 500 }}>{maxText}</text>; })()}
          {lp && (() => { const p = place(px(lp.spot), minText); return <text x={p.x} y={py(lp.pnl) + 16} textAnchor={p.a} fill="var(--down-fg)" style={{ ...halo, fontWeight: 500 }}>{minText}</text>; })()}
          {ap && (
            <g>
              <line x1={px(ap.spot)} x2={px(ap.spot)} y1={plotTop} y2={plotBottom} stroke="var(--chart-axis)" strokeWidth={1} shapeRendering="crispEdges" />
              <circle cx={px(ap.spot)} cy={py(ap.pnl)} r={4.5} fill="var(--surface)" stroke="var(--chart-1)" strokeWidth={2} />
            </g>
          )}
          <rect x={left} y={0} width={pw + right} height={h - 24} fill="transparent" onPointerMove={point} onPointerDown={point}
            onPointerLeave={(e) => { if (e.pointerType === "mouse" && document.activeElement !== wrapRef.current) setActive(null); }} />
        </svg>
        {ap && (
          <div aria-hidden className="pointer-events-none absolute z-10 min-w-36 max-w-64 rounded-overlay border border-line bg-surface px-3 py-2 text-small leading-4 shadow-md"
            style={{ top: plotTop, left: px(ap.spot), transform: `translateX(${tipRight ? "calc(-100% - 12px)" : "12px"})` }}>
            <p className="mb-1 text-fg-muted">Price {formatValue(ap.spot)}</p>
            <p className={cn("font-semibold [font-variant-numeric:tabular-nums]", ap.pnl > 0 ? "text-up-fg" : ap.pnl < 0 ? "text-down-fg" : "text-fg")}>
              {ap.pnl > 0 ? `Profit ${formatValue(ap.pnl)}` : ap.pnl < 0 ? `Loss ${formatValue(-ap.pnl)}` : "Break even"}
            </p>
          </div>
        )}
      </div>
      <div className="sr-only" aria-live="polite" role="status">{said}</div>
    </div>
  );
}

/** Table data for ChartFrame's table view. The Result column says profit, loss or break even in words. */
export function payoffTable(input: { points?: PayoffPoint[]; legs?: PayoffLeg[]; spotRange?: [number, number]; steps?: number }, formatValue: (n: number) => string = formatNumber, caption = "Profit or loss at each price"): DataTableProps {
  const pts = resolve(input.points, input.legs, input.spotRange, input.steps ?? 20);
  return {
    caption,
    columns: [
      { key: "spot", header: "Price", numeric: true },
      { key: "result", header: "Result", numeric: true, direction: (r) => (String(r.result).startsWith("Profit") ? "up" : String(r.result).startsWith("Loss") ? "down" : "flat") },
    ],
    rows: pts.map((p) => ({ spot: formatValue(p.spot), result: p.pnl > 0 ? `Profit ${formatValue(p.pnl)}` : p.pnl < 0 ? `Loss ${formatValue(-p.pnl)}` : "Break even" })),
  };
}
```
