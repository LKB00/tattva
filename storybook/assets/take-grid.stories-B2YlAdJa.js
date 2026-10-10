import{j as e}from"./iframe-J6_2PHET.js";import{bC as u,b as y}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=y.get("take-grid"),D={title:"Video/TakeGrid",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Four takes arriving",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Next update to move the jobs along. The summary line changes only when a status changes, and it is the only thing spoken. Try the arrow keys, Enter, Space, and the = and - keys while a take has focus."},source:s("TakeGrid")}}},a={name:"Pick one take, grouped by prompt",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Tall 9:16 takes in small tiles, under the prompt that made them. Only finished takes can be picked; the failed take keeps its Try again."},source:s("TakeGrid")}}},o={name:"Empty and loading",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With nothing yet, an empty state says how to start. While takes are on the way, still placeholders hold their space. They do not shimmer."},source:s("TakeGrid")}}},H=["FourTakesArriving","PickOneTakeGroupedByPrompt","EmptyAndLoading"];var n,i,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Four takes arriving",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Next update to move the jobs along. The summary line changes only when a status changes, and it is the only thing spoken. Try the arrow keys, Enter, Space, and the = and - keys while a take has focus."
      },
      source: proSource("TakeGrid")
    }
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Pick one take, grouped by prompt",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tall 9:16 takes in small tiles, under the prompt that made them. Only finished takes can be picked; the failed take keeps its Try again."
      },
      source: proSource("TakeGrid")
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,l,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Empty and loading",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With nothing yet, an empty state says how to start. While takes are on the way, still placeholders hold their space. They do not shimmer."
      },
      source: proSource("TakeGrid")
    }
  }
}`,...(k=(l=o.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};export{o as EmptyAndLoading,t as FourTakesArriving,a as PickOneTakeGroupedByPrompt,H as __namedExportsOrder,D as default};
