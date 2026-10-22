import{j as e}from"./iframe-C8v_uZy_.js";import{x as g,b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=u.get("chart-range-brush"),H={title:"Numbers/ChartRangeBrush",component:g,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"Wired to a LineChart",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The parent keeps the range and slices the series for the chart above. Drag the window or a handle and the chart shows only that stretch."},source:{code:`const [range, setRange] = useState<[number, number]>([30, 59]);
const [s, e] = range;

<LineChart
  x={DAYS.slice(s, e + 1)}
  series={[{ id: "cost", label: "Daily cost", data: COST.slice(s, e + 1) }]}
  formatValue={(n) => \`$\${n}\`}
  unit="dollars"
  height={200}
  ariaLabel="Daily model cost"
/>
<ChartRangeBrush
  label="Date range"
  values={COST}
  labels={DAYS}
  range={range}
  onRangeChange={setRange}
  formatCount={(n) => \`\${n} \${n === 1 ? "day" : "days"}\`}
/>`}}}},r={name:"At least a week",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"minSpan keeps the window from getting shorter than seven points. It starts on the full range, so Reset looks dimmed."},source:{code:`const [range, setRange] = useState<[number, number]>([0, DAYS.length - 1]);

<ChartRangeBrush
  label="Latency window"
  values={LATENCY}
  labels={DAYS}
  range={range}
  onRangeChange={setRange}
  minSpan={7}
  formatCount={(n) => \`\${n} days\`}
/>`}}}},t={name:"Labels made from the index",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"With no labels array, formatLabel turns each position into text. Here each point is half an hour."},source:{code:`const hourLabel = (i: number) => \`\${String(Math.floor(i / 2)).padStart(2, "0")}:\${i % 2 ? "30" : "00"}\`;
const [range, setRange] = useState<[number, number]>([18, 35]);

<ChartRangeBrush
  label="Time of day"
  values={REQUESTS}
  range={range}
  onRangeChange={setRange}
  formatLabel={hourLabel}
  formatCount={(n) => \`\${n} half hours\`}
/>`}}}},Q=["WiredToALineChart","AtLeastAWeek","LabelsMadeFromTheIndex"];var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Wired to a LineChart",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The parent keeps the range and slices the series for the chart above. Drag the window or a handle and the chart shows only that stretch."
      },
      source: {
        code: "const [range, setRange] = useState<[number, number]>([30, 59]);\\nconst [s, e] = range;\\n\\n<LineChart\\n  x={DAYS.slice(s, e + 1)}\\n  series={[{ id: \\"cost\\", label: \\"Daily cost\\", data: COST.slice(s, e + 1) }]}\\n  formatValue={(n) => \`$\${n}\`}\\n  unit=\\"dollars\\"\\n  height={200}\\n  ariaLabel=\\"Daily model cost\\"\\n/>\\n<ChartRangeBrush\\n  label=\\"Date range\\"\\n  values={COST}\\n  labels={DAYS}\\n  range={range}\\n  onRangeChange={setRange}\\n  formatCount={(n) => \`\${n} \${n === 1 ? \\"day\\" : \\"days\\"}\`}\\n/>"
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "At least a week",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "minSpan keeps the window from getting shorter than seven points. It starts on the full range, so Reset looks dimmed."
      },
      source: {
        code: "const [range, setRange] = useState<[number, number]>([0, DAYS.length - 1]);\\n\\n<ChartRangeBrush\\n  label=\\"Latency window\\"\\n  values={LATENCY}\\n  labels={DAYS}\\n  range={range}\\n  onRangeChange={setRange}\\n  minSpan={7}\\n  formatCount={(n) => \`\${n} days\`}\\n/>"
      }
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,h,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Labels made from the index",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no labels array, formatLabel turns each position into text. Here each point is half an hour."
      },
      source: {
        code: "const hourLabel = (i: number) => \`\${String(Math.floor(i / 2)).padStart(2, \\"0\\")}:\${i % 2 ? \\"30\\" : \\"00\\"}\`;\\nconst [range, setRange] = useState<[number, number]>([18, 35]);\\n\\n<ChartRangeBrush\\n  label=\\"Time of day\\"\\n  values={REQUESTS}\\n  range={range}\\n  onRangeChange={setRange}\\n  formatLabel={hourLabel}\\n  formatCount={(n) => \`\${n} half hours\`}\\n/>"
      }
    }
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};export{r as AtLeastAWeek,t as LabelsMadeFromTheIndex,a as WiredToALineChart,Q as __namedExportsOrder,H as default};
