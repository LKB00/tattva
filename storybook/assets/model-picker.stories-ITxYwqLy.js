import{j as e}from"./iframe-J6_2PHET.js";import{aD as k,b as g}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("model-picker"),B={title:"Conversation/ModelPicker",component:k,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Modes with thinking time",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"An Auto option, two fixed options and a Standard or Extended switch."},source:s("ModelPicker")}}},t={name:"Auto picks for you",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Auto is picked and Thinking answered. The button says so and the list repeats it."},source:s("ModelPicker")}}},n={name:"Usage limit reached",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Thinking is turned off, the reason is shown and the replacement is named. Fast can still be picked."},source:s("ModelPicker")}}},G=["ModesWithThinkingTime","AutoPicksForYou","UsageLimitReached"];var i,a,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Modes with thinking time",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An Auto option, two fixed options and a Standard or Extended switch."
      },
      source: proSource("ModelPicker")
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Auto picks for you",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Auto is picked and Thinking answered. The button says so and the list repeats it."
      },
      source: proSource("ModelPicker")
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Usage limit reached",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Thinking is turned off, the reason is shown and the replacement is named. Fast can still be picked."
      },
      source: proSource("ModelPicker")
    }
  }
}`,...(l=(h=n.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};export{t as AutoPicksForYou,o as ModesWithThinkingTime,n as UsageLimitReached,G as __namedExportsOrder,B as default};
