import{j as e}from"./iframe-J6_2PHET.js";import{ad as y,b as w}from"./registry-DJg46al6.js";import{a as t}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("heatmap"),G={title:"Markets and trading/Heatmap",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Sector moves by day",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The direction scale. The up and down colours are stronger for bigger moves. Each cell prints its signed number. The cell with no data shows a dash."},source:t("Heatmap")}}},a={name:"A profit and loss calendar",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Feed it weekday rows and week columns. Put each day in the row for its weekday and the column for its week. Use null for a day with no trades."},source:t("Heatmap")}}},s={name:"Counts in one colour",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The sequential scale runs from light to dark in one hue. The number sits on a small chip so it stays readable on any shade."},source:t("Heatmap")}}},J=["SectorMovesByDay","AProfitAndLossCalendar","CountsInOneColour"];var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Sector moves by day",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The direction scale. The up and down colours are stronger for bigger moves. Each cell prints its signed number. The cell with no data shows a dash."
      },
      source: proSource("Heatmap")
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "A profit and loss calendar",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Feed it weekday rows and week columns. Put each day in the row for its weekday and the column for its week. Use null for a day with no trades."
      },
      source: proSource("Heatmap")
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Counts in one colour",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The sequential scale runs from light to dark in one hue. The number sits on a small chip so it stays readable on any shade."
      },
      source: proSource("Heatmap")
    }
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{a as AProfitAndLossCalendar,s as CountsInOneColour,o as SectorMovesByDay,J as __namedExportsOrder,G as default};
