import{j as r}from"./iframe-J6_2PHET.js";import{b as g}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import{B as S}from"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const e=g.get("budget-control"),D={title:"Assistants/BudgetControl",component:S,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Limits for a trip search",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."},source:n("BudgetControl")}}},t={name:"Plenty of room",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Nothing is close to a limit, so no warning shows."},source:n("BudgetControl")}}},s={name:"Spend in credits, stop without asking",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Use any unit. Here the choice starts on Stop."},source:n("BudgetControl")}}},G=["LimitsForATripSearch","PlentyOfRoom","SpendInCreditsStopWithoutAsking"];var i,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Limits for a trip search",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."
      },
      source: proSource("BudgetControl")
    }
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Plenty of room",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Nothing is close to a limit, so no warning shows."
      },
      source: proSource("BudgetControl")
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Spend in credits, stop without asking",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use any unit. Here the choice starts on Stop."
      },
      source: proSource("BudgetControl")
    }
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{o as LimitsForATripSearch,t as PlentyOfRoom,s as SpendInCreditsStopWithoutAsking,G as __namedExportsOrder,D as default};
