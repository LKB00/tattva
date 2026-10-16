import{j as e}from"./iframe-DSdOWv-_.js";import{a2 as d,b as w}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=w.get("dot-plot"),R={title:"Numbers/DotPlot",component:d,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"Happy customers, with a range",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The caption says what is measured, how sure we are and how many customers. The text column gives the numbers."},source:{code:`<div className="w-full">
  <DotPlot
    caption="Dots show the share of happy customers. Lines show the range we are 95% sure it falls in. 200 customers per shop."
    measure="Happy customers"
    intervalLabel="95% range"
    data={[
      { label: "North shop", estimate: 0.925, low: 0.881, high: 0.954, n: 200 },
      { label: "East shop", estimate: 0.87, low: 0.82, high: 0.91, n: 200 },
      { label: "West shop", estimate: 0.81, low: 0.75, high: 0.86, n: 200 },
    ]}
    formatValue={(n) => Math.round(n * 1000) / 10 + "%"}
    unit="percent"
    ariaLabel="Happy customers by shop"
  />
</div>`}}}},a={name:"Different group sizes and a goal line",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Each row prints how many customers were asked, so a wide range from a small group makes sense. The line marks the current shop."},source:{code:`<div className="w-full">
  <DotPlot
    showN
    caption="Dots show the share of happy customers. Lines show the range we are 95% sure it falls in. Customers asked are listed per row."
    measure="Happy customers"
    intervalLabel="95% range"
    reference={{ value: 0.87, label: "Current shop" }}
    data={[
      { label: "North shop", estimate: 0.925, low: 0.881, high: 0.954, n: 200 },
      { label: "East shop", estimate: 0.87, low: 0.82, high: 0.91, n: 200 },
      { label: "West shop", estimate: 0.81, low: 0.75, high: 0.86, n: 60 },
      { label: "Online", estimate: 0.79, low: 0.7, high: 0.86, n: 40 },
    ]}
    formatValue={(n) => Math.round(n * 1000) / 10 + "%"}
    unit="percent"
    ariaLabel="Happy customers by shop"
  />
</div>`}}}},t={name:"With a table view",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"A helper lists the best guess, both ends of the range and the group size."},source:{code:`<div className="w-full">
  <ChartFrame
    title="Happy customers"
    subtitle="Share of 200 customers per shop who were happy, latest survey"
    summary="92.5% of North shop customers were happy. We are 95% sure the true figure is between 88.1% and 95.4%."
    table={dotPlotTable(EVAL200, { labelHeader: "Shop", caption: "Happy customers by shop", measure: "Happy customers", intervalLabel: "95% range", formatValue: (n) => Math.round(n * 1000) / 10 + "%" })}
  >
    <DotPlot caption="Dots show the share of happy customers. Lines show the range we are 95% sure it falls in. 200 customers per shop." measure="Happy customers" intervalLabel="95% range" data={EVAL200} formatValue={(n) => Math.round(n * 1000) / 10 + "%"} unit="percent" />
  </ChartFrame>
</div>`}}}},_=["HappyCustomersWithARange","DifferentGroupSizesAndAGoalLine","WithATableView"];var n,o,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Happy customers, with a range",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The caption says what is measured, how sure we are and how many customers. The text column gives the numbers."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <DotPlot\\n    caption=\\"Dots show the share of happy customers. Lines show the range we are 95% sure it falls in. 200 customers per shop.\\"\\n    measure=\\"Happy customers\\"\\n    intervalLabel=\\"95% range\\"\\n    data={[\\n      { label: \\"North shop\\", estimate: 0.925, low: 0.881, high: 0.954, n: 200 },\\n      { label: \\"East shop\\", estimate: 0.87, low: 0.82, high: 0.91, n: 200 },\\n      { label: \\"West shop\\", estimate: 0.81, low: 0.75, high: 0.86, n: 200 },\\n    ]}\\n    formatValue={(n) => Math.round(n * 1000) / 10 + \\"%\\"}\\n    unit=\\"percent\\"\\n    ariaLabel=\\"Happy customers by shop\\"\\n  />\\n</div>"
      }
    }
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Different group sizes and a goal line",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each row prints how many customers were asked, so a wide range from a small group makes sense. The line marks the current shop."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <DotPlot\\n    showN\\n    caption=\\"Dots show the share of happy customers. Lines show the range we are 95% sure it falls in. Customers asked are listed per row.\\"\\n    measure=\\"Happy customers\\"\\n    intervalLabel=\\"95% range\\"\\n    reference={{ value: 0.87, label: \\"Current shop\\" }}\\n    data={[\\n      { label: \\"North shop\\", estimate: 0.925, low: 0.881, high: 0.954, n: 200 },\\n      { label: \\"East shop\\", estimate: 0.87, low: 0.82, high: 0.91, n: 200 },\\n      { label: \\"West shop\\", estimate: 0.81, low: 0.75, high: 0.86, n: 60 },\\n      { label: \\"Online\\", estimate: 0.79, low: 0.7, high: 0.86, n: 40 },\\n    ]}\\n    formatValue={(n) => Math.round(n * 1000) / 10 + \\"%\\"}\\n    unit=\\"percent\\"\\n    ariaLabel=\\"Happy customers by shop\\"\\n  />\\n</div>"
      }
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,u,c;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With a table view",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A helper lists the best guess, both ends of the range and the group size."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <ChartFrame\\n    title=\\"Happy customers\\"\\n    subtitle=\\"Share of 200 customers per shop who were happy, latest survey\\"\\n    summary=\\"92.5% of North shop customers were happy. We are 95% sure the true figure is between 88.1% and 95.4%.\\"\\n    table={dotPlotTable(EVAL200, { labelHeader: \\"Shop\\", caption: \\"Happy customers by shop\\", measure: \\"Happy customers\\", intervalLabel: \\"95% range\\", formatValue: (n) => Math.round(n * 1000) / 10 + \\"%\\" })}\\n  >\\n    <DotPlot caption=\\"Dots show the share of happy customers. Lines show the range we are 95% sure it falls in. 200 customers per shop.\\" measure=\\"Happy customers\\" intervalLabel=\\"95% range\\" data={EVAL200} formatValue={(n) => Math.round(n * 1000) / 10 + \\"%\\"} unit=\\"percent\\" />\\n  </ChartFrame>\\n</div>"
      }
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};export{a as DifferentGroupSizesAndAGoalLine,r as HappyCustomersWithARange,t as WithATableView,_ as __namedExportsOrder,R as default};
