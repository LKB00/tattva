import{j as r}from"./iframe-J6_2PHET.js";import{o as B,b as S}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const e=S.get("bar-chart"),L={title:"Numbers/BarChart",component:B,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"One bar stands out",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"One bar is the point, so it gets the main color and the rest are grey. Numbers sit at the ends of the bars."},source:n("BarChart")}}},a={name:"Upright bars",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Use upright bars for a short list with short names. Names that do not fit are cut short. The full name is in the pop-up and table."},source:n("BarChart")}}},s={name:"Stacked bars",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Parts follow the key from left to right. The total sits at the end of each bar. Each part's number is in the pop-up and table."},source:n("BarChart")}}},o={name:"With a table view",render:()=>r.jsx(r.Fragment,{children:e.examples[3].render()}),parameters:{docs:{description:{story:"A helper builds the table data for ChartFrame."},source:n("BarChart")}}},M=["OneBarStandsOut","UprightBars","StackedBars","WithATableView"];var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "One bar stands out",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One bar is the point, so it gets the main color and the rest are grey. Numbers sit at the ends of the bars."
      },
      source: proSource("BarChart")
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Upright bars",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use upright bars for a short list with short names. Names that do not fit are cut short. The full name is in the pop-up and table."
      },
      source: proSource("BarChart")
    }
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,l,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Stacked bars",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Parts follow the key from left to right. The total sits at the end of each bar. Each part's number is in the pop-up and table."
      },
      source: proSource("BarChart")
    }
  }
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var g,f,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With a table view",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A helper builds the table data for ChartFrame."
      },
      source: proSource("BarChart")
    }
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};export{t as OneBarStandsOut,s as StackedBars,a as UprightBars,o as WithATableView,M as __namedExportsOrder,L as default};
