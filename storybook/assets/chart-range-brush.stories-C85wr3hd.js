import{j as e}from"./iframe-J6_2PHET.js";import{u as g,b as x}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=x.get("chart-range-brush"),z={title:"Numbers/ChartRangeBrush",component:g,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Wired to a LineChart",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The parent keeps the range and slices the series for the chart above. Drag the window or a handle and the chart shows only that stretch."},source:s("ChartRangeBrush")}}},a={name:"At least a week",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"minSpan keeps the window from getting shorter than seven points. It starts on the full range, so Reset looks dimmed."},source:s("ChartRangeBrush")}}},o={name:"Labels made from the index",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With no labels array, formatLabel turns each position into text. Here each point is half an hour."},source:s("ChartRangeBrush")}}},G=["WiredToALineChart","AtLeastAWeek","LabelsMadeFromTheIndex"];var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Wired to a LineChart",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The parent keeps the range and slices the series for the chart above. Drag the window or a handle and the chart shows only that stretch."
      },
      source: proSource("ChartRangeBrush")
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,h,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "At least a week",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "minSpan keeps the window from getting shorter than seven points. It starts on the full range, so Reset looks dimmed."
      },
      source: proSource("ChartRangeBrush")
    }
  }
}`,...(c=(h=a.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Labels made from the index",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no labels array, formatLabel turns each position into text. Here each point is half an hour."
      },
      source: proSource("ChartRangeBrush")
    }
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as AtLeastAWeek,o as LabelsMadeFromTheIndex,t as WiredToALineChart,G as __namedExportsOrder,z as default};
