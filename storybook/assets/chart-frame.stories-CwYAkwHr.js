import{j as r}from"./iframe-J6_2PHET.js";import{s as w,b as y}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const e=y.get("chart-frame"),G={title:"Numbers/ChartFrame",component:w,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},a={name:"A chart with a summary and a table",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The summary says what the chart shows. View as table swaps the chart for the same numbers in a table."},source:s("ChartFrame")}}},o={name:"Loading, nothing to show, and a problem",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Loading shows a grey placeholder. When there is nothing to show, it says what is missing, why and what to do. A problem offers a retry."},source:s("ChartFrame")}}},t={name:"A tiny version in narrow spaces",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"This box is too narrow for a full chart, so it shows a tiny trend line. The table view still has every value."},source:s("ChartFrame")}}},H=["AChartWithASummaryAndATable","LoadingNothingToShowAndAProblem","ATinyVersionInNarrowSpaces"];var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A chart with a summary and a table",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The summary says what the chart shows. View as table swaps the chart for the same numbers in a table."
      },
      source: proSource("ChartFrame")
    }
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Loading, nothing to show, and a problem",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Loading shows a grey placeholder. When there is nothing to show, it says what is missing, why and what to do. A problem offers a retry."
      },
      source: proSource("ChartFrame")
    }
  }
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A tiny version in narrow spaces",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "This box is too narrow for a full chart, so it shows a tiny trend line. The table view still has every value."
      },
      source: proSource("ChartFrame")
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as AChartWithASummaryAndATable,t as ATinyVersionInNarrowSpaces,o as LoadingNothingToShowAndAProblem,H as __namedExportsOrder,G as default};
