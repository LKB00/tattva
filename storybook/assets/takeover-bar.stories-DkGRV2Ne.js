import{j as e}from"./iframe-J6_2PHET.js";import{b as T}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import{T as k}from"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=T.get("takeover-bar"),z={title:"Assistants/TakeoverBar",component:k,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Take over, then give it back",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Take over to pause the assistant. Resume or Hand back lets it continue. The second button shows the watch state."},source:a("TakeoverBar")}}},o={name:"You have control",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The assistant is paused and not doing anything. This is the state to show after a person takes over."},source:a("TakeoverBar")}}},s={name:"A step you need to watch",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Use this for sensitive pages such as payment. It is the only state in amber, because you have to act."},source:a("TakeoverBar")}}},D=["TakeOverThenGiveItBack","YouHaveControl","AStepYouNeedToWatch"];var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Take over, then give it back",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Take over to pause the assistant. Resume or Hand back lets it continue. The second button shows the watch state."
      },
      source: proSource("TakeoverBar")
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "You have control",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The assistant is paused and not doing anything. This is the state to show after a person takes over."
      },
      source: proSource("TakeoverBar")
    }
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,h,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "A step you need to watch",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use this for sensitive pages such as payment. It is the only state in amber, because you have to act."
      },
      source: proSource("TakeoverBar")
    }
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};export{s as AStepYouNeedToWatch,t as TakeOverThenGiveItBack,o as YouHaveControl,D as __namedExportsOrder,z as default};
