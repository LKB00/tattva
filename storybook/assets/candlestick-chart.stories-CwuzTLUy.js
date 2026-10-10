import{j as e}from"./iframe-J6_2PHET.js";import{q as y,b as C}from"./registry-DJg46al6.js";import{a as o}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=C.get("candlestick-chart"),G={title:"Markets and trading/CandlestickChart",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},a={name:"Forty days with volume and a table",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The usual setup. The frame adds a title, a summary and a View as table button."},source:o("CandlestickChart")}}},t={name:"A short day",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"With few candles each one is wider and every label fits. No volume strip."},source:o("CandlestickChart")}}},s={name:"A candle that is still forming",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Press Start. The last candle updates in place and has a dashed outline. A new candle is added every few seconds."},source:o("CandlestickChart")}}},H=["FortyDaysWithVolumeAndATable","AShortDay","ACandleThatIsStillForming"];var n,d,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Forty days with volume and a table",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The usual setup. The frame adds a title, a summary and a View as table button."
      },
      source: proSource("CandlestickChart")
    }
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A short day",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With few candles each one is wider and every label fits. No volume strip."
      },
      source: proSource("CandlestickChart")
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "A candle that is still forming",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Start. The last candle updates in place and has a dashed outline. A new candle is added every few seconds."
      },
      source: proSource("CandlestickChart")
    }
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{s as ACandleThatIsStillForming,t as AShortDay,a as FortyDaysWithVolumeAndATable,H as __namedExportsOrder,G as default};
