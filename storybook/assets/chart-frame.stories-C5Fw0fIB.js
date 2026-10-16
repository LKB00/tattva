import{j as e}from"./iframe-DSdOWv-_.js";import{s as u,b as y}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=y.get("chart-frame"),z={title:"Numbers/ChartFrame",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"A chart with a summary and a table",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The summary says what the chart shows. View as table swaps the chart for the same numbers in a table."},source:{code:`<ChartFrame
  title="How long orders take"
  subtitle="Minutes per order, last 7 days"
  summary="The slowest orders took 82 minutes on Friday. A typical order stayed between 26 and 30 minutes all week."
  source="Source: order records."
  table={lineChartTable(DAYS, LATENCY, { xHeader: "Day", caption: "How long orders take, last 7 days", unit: "min" })}
>
  <LineChart series={LATENCY} x={DAYS} unit="minutes" ariaLabel="How long orders take" />
</ChartFrame>`}}}},a={name:"Loading, nothing to show, and a problem",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Loading shows a grey placeholder. When there is nothing to show, it says what is missing, why and what to do. A problem offers a retry."},source:{code:`<ChartFrame title="How long orders take" subtitle="Minutes per order, last 7 days" state="loading" />
<ChartFrame
  title="How long orders take"
  subtitle="Minutes per order, last 7 days"
  state="empty"
  empty={{
    what: "No orders in this time range.",
    why: "Your filters hide every shop.",
    action: <Button size="sm" variant="secondary">Clear filters</Button>,
  }}
/>
<ChartFrame title="How long orders take" subtitle="Minutes per order, last 7 days" state="error" onRetry={() => {}} />`}}}},s={name:"A tiny version in narrow spaces",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"This box is too narrow for a full chart, so it shows a tiny trend line. The table view still has every value."},source:{code:`<div className="w-55">
  <ChartFrame
    title="Slowest orders"
    subtitle="Minutes, last 7 days"
    table={lineChartTable(DAYS, [LATENCY[1]], { xHeader: "Day", caption: "Slowest orders, last 7 days", unit: "min" })}
    fallback={<Sparkline data={LATENCY[1].data as number[]} label="Slowest orders" unit=" min" />}
  >
    <LineChart series={[LATENCY[1]]} x={DAYS} />
  </ChartFrame>
</div>`}}}},P=["AChartWithASummaryAndATable","LoadingNothingToShowAndAProblem","ATinyVersionInNarrowSpaces"];var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A chart with a summary and a table",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The summary says what the chart shows. View as table swaps the chart for the same numbers in a table."
      },
      source: {
        code: "<ChartFrame\\n  title=\\"How long orders take\\"\\n  subtitle=\\"Minutes per order, last 7 days\\"\\n  summary=\\"The slowest orders took 82 minutes on Friday. A typical order stayed between 26 and 30 minutes all week.\\"\\n  source=\\"Source: order records.\\"\\n  table={lineChartTable(DAYS, LATENCY, { xHeader: \\"Day\\", caption: \\"How long orders take, last 7 days\\", unit: \\"min\\" })}\\n>\\n  <LineChart series={LATENCY} x={DAYS} unit=\\"minutes\\" ariaLabel=\\"How long orders take\\" />\\n</ChartFrame>"
      }
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Loading, nothing to show, and a problem",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Loading shows a grey placeholder. When there is nothing to show, it says what is missing, why and what to do. A problem offers a retry."
      },
      source: {
        code: "<ChartFrame title=\\"How long orders take\\" subtitle=\\"Minutes per order, last 7 days\\" state=\\"loading\\" />\\n<ChartFrame\\n  title=\\"How long orders take\\"\\n  subtitle=\\"Minutes per order, last 7 days\\"\\n  state=\\"empty\\"\\n  empty={{\\n    what: \\"No orders in this time range.\\",\\n    why: \\"Your filters hide every shop.\\",\\n    action: <Button size=\\"sm\\" variant=\\"secondary\\">Clear filters</Button>,\\n  }}\\n/>\\n<ChartFrame title=\\"How long orders take\\" subtitle=\\"Minutes per order, last 7 days\\" state=\\"error\\" onRetry={() => {}} />"
      }
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,p,c;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "A tiny version in narrow spaces",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "This box is too narrow for a full chart, so it shows a tiny trend line. The table view still has every value."
      },
      source: {
        code: "<div className=\\"w-55\\">\\n  <ChartFrame\\n    title=\\"Slowest orders\\"\\n    subtitle=\\"Minutes, last 7 days\\"\\n    table={lineChartTable(DAYS, [LATENCY[1]], { xHeader: \\"Day\\", caption: \\"Slowest orders, last 7 days\\", unit: \\"min\\" })}\\n    fallback={<Sparkline data={LATENCY[1].data as number[]} label=\\"Slowest orders\\" unit=\\" min\\" />}\\n  >\\n    <LineChart series={[LATENCY[1]]} x={DAYS} />\\n  </ChartFrame>\\n</div>"
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{t as AChartWithASummaryAndATable,s as ATinyVersionInNarrowSpaces,a as LoadingNothingToShowAndAProblem,P as __namedExportsOrder,z as default};
