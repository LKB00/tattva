import{j as r}from"./iframe-J6_2PHET.js";import{aL as f,b as y}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const e=y.get("payoff-chart"),G={title:"Markets and trading/PayoffChart",component:f,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"A long call",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"You pay 5 for the right to buy at 100. The most you lose is what you paid. The profit has no top. The dashed line is today's price."},source:s("PayoffChart")}}},t={name:"A bull call spread",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Built from two legs. Selling the higher call caps the profit, so it says a number instead of Unlimited."},source:s("PayoffChart")}}},a={name:"An iron condor",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Four legs. Profit only between the two inner strikes, with two break-even prices and both ends capped."},source:s("PayoffChart")}}},H=["ALongCall","ABullCallSpread","AnIronCondor"];var n,i,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A long call",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "You pay 5 for the right to buy at 100. The most you lose is what you paid. The profit has no top. The dashed line is today's price."
      },
      source: proSource("PayoffChart")
    }
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A bull call spread",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Built from two legs. Selling the higher call caps the profit, so it says a number instead of Unlimited."
      },
      source: proSource("PayoffChart")
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,h,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "An iron condor",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four legs. Profit only between the two inner strikes, with two break-even prices and both ends capped."
      },
      source: proSource("PayoffChart")
    }
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{t as ABullCallSpread,o as ALongCall,a as AnIronCondor,H as __namedExportsOrder,G as default};
