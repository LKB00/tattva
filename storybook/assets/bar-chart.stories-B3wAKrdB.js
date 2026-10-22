import{j as e}from"./iframe-C8v_uZy_.js";import{p as S,b as f}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const a=f.get("bar-chart"),q={title:"Numbers/BarChart",component:S,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},r={name:"One bar stands out",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"One bar is the point, so it gets the main color and the rest are grey. Numbers sit at the ends of the bars."},source:{code:`<div className="w-full">
  <BarChart
    highlight="North shop"
    measure="Sales"
    data={[{ label: "North shop", value: 4200 }, { label: "East shop", value: 2900 }, { label: "West shop", value: 1700 }, { label: "Online", value: 900 }, { label: "Other", value: 400 }]}
    formatValue={(n) => "$" + n.toLocaleString("en-US")}
    unit="dollars"
    ariaLabel="Sales by shop"
  />
</div>`}}}},t={name:"Upright bars",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Use upright bars for a short list with short names. Names that do not fit are cut short. The full name is in the pop-up and table."},source:{code:`<div className="w-full max-w-lg">
  <BarChart
    orientation="vertical"
    measure="Refunds"
    data={[{ label: "Late", value: 42 }, { label: "Wrong item", value: 118 }, { label: "Damaged", value: 23 }, { label: "Missing", value: 9 }, { label: "Other", value: 14 }]}
    unit="errors"
    ariaLabel="Errors by status code"
  />
</div>`}}}},s={name:"Stacked bars",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"Parts follow the key from left to right. The total sits at the end of each bar. Each part's number is in the pop-up and table."},source:{code:`<div className="w-full">
  <BarChart
    series={[{ id: "in", label: "Walk-in" }, { id: "out", label: "Online" }, { id: "cache", label: "Phone" }]}
    data={[
      { label: "North shop", values: [12, 4, 8] },
      { label: "East shop", values: [9, 3, 5] },
      { label: "West shop", values: [6, 2, 1] },
      { label: "Online", values: [3, 1, 0] },
    ]}
    unit="hundred orders"
    ariaLabel="Orders by shop and type"
  />
</div>`}}}},n={name:"With a table view",render:()=>e.jsx(e.Fragment,{children:a.examples[3].render()}),parameters:{docs:{description:{story:"A helper builds the table data for ChartFrame."},source:{code:`<div className="w-full">
  <ChartFrame
    title="Sales by shop"
    subtitle="US dollars, last 7 days"
    summary="The North shop made 4,200 of 10,100 dollars, the biggest share of sales."
    table={barChartTable(SPEND, { labelHeader: "Shop", caption: "Sales by shop", measure: "Sales", formatValue: (n) => "$" + n.toLocaleString("en-US") })}
  >
    <BarChart highlight="North shop" measure="Sales" data={SPEND} formatValue={(n) => "$" + n.toLocaleString("en-US")} unit="dollars" ariaLabel="Sales by shop" />
  </ChartFrame>
</div>`}}}},z=["OneBarStandsOut","UprightBars","StackedBars","WithATableView"];var o,l,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "One bar stands out",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One bar is the point, so it gets the main color and the rest are grey. Numbers sit at the ends of the bars."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <BarChart\\n    highlight=\\"North shop\\"\\n    measure=\\"Sales\\"\\n    data={[{ label: \\"North shop\\", value: 4200 }, { label: \\"East shop\\", value: 2900 }, { label: \\"West shop\\", value: 1700 }, { label: \\"Online\\", value: 900 }, { label: \\"Other\\", value: 400 }]}\\n    formatValue={(n) => \\"$\\" + n.toLocaleString(\\"en-US\\")}\\n    unit=\\"dollars\\"\\n    ariaLabel=\\"Sales by shop\\"\\n  />\\n</div>"
      }
    }
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,h,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Upright bars",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use upright bars for a short list with short names. Names that do not fit are cut short. The full name is in the pop-up and table."
      },
      source: {
        code: "<div className=\\"w-full max-w-lg\\">\\n  <BarChart\\n    orientation=\\"vertical\\"\\n    measure=\\"Refunds\\"\\n    data={[{ label: \\"Late\\", value: 42 }, { label: \\"Wrong item\\", value: 118 }, { label: \\"Damaged\\", value: 23 }, { label: \\"Missing\\", value: 9 }, { label: \\"Other\\", value: 14 }]}\\n    unit=\\"errors\\"\\n    ariaLabel=\\"Errors by status code\\"\\n  />\\n</div>"
      }
    }
  }
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,c,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Stacked bars",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Parts follow the key from left to right. The total sits at the end of each bar. Each part's number is in the pop-up and table."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <BarChart\\n    series={[{ id: \\"in\\", label: \\"Walk-in\\" }, { id: \\"out\\", label: \\"Online\\" }, { id: \\"cache\\", label: \\"Phone\\" }]}\\n    data={[\\n      { label: \\"North shop\\", values: [12, 4, 8] },\\n      { label: \\"East shop\\", values: [9, 3, 5] },\\n      { label: \\"West shop\\", values: [6, 2, 1] },\\n      { label: \\"Online\\", values: [3, 1, 0] },\\n    ]}\\n    unit=\\"hundred orders\\"\\n    ariaLabel=\\"Orders by shop and type\\"\\n  />\\n</div>"
      }
    }
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,g,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With a table view",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A helper builds the table data for ChartFrame."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <ChartFrame\\n    title=\\"Sales by shop\\"\\n    subtitle=\\"US dollars, last 7 days\\"\\n    summary=\\"The North shop made 4,200 of 10,100 dollars, the biggest share of sales.\\"\\n    table={barChartTable(SPEND, { labelHeader: \\"Shop\\", caption: \\"Sales by shop\\", measure: \\"Sales\\", formatValue: (n) => \\"$\\" + n.toLocaleString(\\"en-US\\") })}\\n  >\\n    <BarChart highlight=\\"North shop\\" measure=\\"Sales\\" data={SPEND} formatValue={(n) => \\"$\\" + n.toLocaleString(\\"en-US\\")} unit=\\"dollars\\" ariaLabel=\\"Sales by shop\\" />\\n  </ChartFrame>\\n</div>"
      }
    }
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};export{r as OneBarStandsOut,s as StackedBars,t as UprightBars,n as WithATableView,z as __namedExportsOrder,q as default};
