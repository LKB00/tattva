import{j as e}from"./iframe-J6_2PHET.js";import{b as u}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import{P as v}from"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=u.get("plan-card"),L={title:"Assistants/PlanCard",component:v,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},a={name:"Awaiting approval",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:'The starting state. Approve and Revise work, and the "nothing has changed" label shows.'},source:n("PlanCard")}}},t={name:"Editable steps",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Each step gets Edit and Remove buttons. They go away once the plan is approved or revised."},source:n("PlanCard")}}},o={name:"Draft and approved",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:'A draft keeps the buttons off while the plan is being written. An approved plan hides the "nothing has changed" label.'},source:n("PlanCard")}}},M=["AwaitingApproval","EditableSteps","DraftAndApproved"];var s,p,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Awaiting approval",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The starting state. Approve and Revise work, and the \\"nothing has changed\\" label shows."
      },
      source: proSource("PlanCard")
    }
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Editable steps",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each step gets Edit and Remove buttons. They go away once the plan is approved or revised."
      },
      source: proSource("PlanCard")
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Draft and approved",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A draft keeps the buttons off while the plan is being written. An approved plan hides the \\"nothing has changed\\" label."
      },
      source: proSource("PlanCard")
    }
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};export{a as AwaitingApproval,o as DraftAndApproved,t as EditableSteps,M as __namedExportsOrder,L as default};
