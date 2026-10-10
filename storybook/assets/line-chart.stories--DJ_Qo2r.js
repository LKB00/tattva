import{j as e}from"./iframe-J6_2PHET.js";import{ap as T,b as w}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("line-chart"),Q={title:"Numbers/LineChart",component:T,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Two lines, named at their ends",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A key shows for two or more lines. The names at the line ends repeat it. Click or tap the chart, or tab to it and use the arrow keys."},source:s("LineChart")}}},o={name:"Four lines that differ by more than color",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The third and fourth lines have a dash pattern and a square or triangle dot, so you can tell them apart without color."},source:s("LineChart")}}},a={name:"Real numbers and a forecast",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Forecast points are dotted. Here Saturday and Sunday are forecast."},source:s("LineChart")}}},n={name:"A number still coming in",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"While the latest point is still coming in, it is hollow. The pop-up and screen reader both call it not final."},source:s("LineChart")}}},U=["TwoLinesNamedAtTheirEnds","FourLinesThatDifferByMoreThanColor","RealNumbersAndAForecast","ANumberStillComingIn"];var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Two lines, named at their ends",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A key shows for two or more lines. The names at the line ends repeat it. Click or tap the chart, or tab to it and use the arrow keys."
      },
      source: proSource("LineChart")
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Four lines that differ by more than color",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The third and fourth lines have a dash pattern and a square or triangle dot, so you can tell them apart without color."
      },
      source: proSource("LineChart")
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,u,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Real numbers and a forecast",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Forecast points are dotted. Here Saturday and Sunday are forecast."
      },
      source: proSource("LineChart")
    }
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,g,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "A number still coming in",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While the latest point is still coming in, it is hollow. The pop-up and screen reader both call it not final."
      },
      source: proSource("LineChart")
    }
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};export{n as ANumberStillComingIn,o as FourLinesThatDifferByMoreThanColor,a as RealNumbersAndAForecast,t as TwoLinesNamedAtTheirEnds,U as __namedExportsOrder,Q as default};
