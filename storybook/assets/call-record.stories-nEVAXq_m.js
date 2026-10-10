import{j as e}from"./iframe-J6_2PHET.js";import{C as w,b as y}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=y.get("call-record"),z={title:"Voice and audio/CallRecord",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},s={name:"Completed call with evidence",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The AI says the goal was met and why. Show in transcript marks the line it is based on. Switch the cost to Usage to see what was used."},source:a("CallRecord")}}},o={name:"Needs you: no AI disclosure",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The agent never said it was an AI. That is amber, because a person must fix the greeting. The verdict is unsure, which stays neutral."},source:a("CallRecord")}}},t={name:"Live and failed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"A live call has no verdict yet and its cost is so far. A failed call says why in words."},source:a("CallRecord")}}},B=["CompletedCallWithEvidence","NeedsYouNoAIDisclosure","LiveAndFailed"];var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Completed call with evidence",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The AI says the goal was met and why. Show in transcript marks the line it is based on. Switch the cost to Usage to see what was used."
      },
      source: proSource("CallRecord")
    }
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Needs you: no AI disclosure",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The agent never said it was an AI. That is amber, because a person must fix the greeting. The verdict is unsure, which stays neutral."
      },
      source: proSource("CallRecord")
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Live and failed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A live call has no verdict yet and its cost is so far. A failed call says why in words."
      },
      source: proSource("CallRecord")
    }
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{s as CompletedCallWithEvidence,t as LiveAndFailed,o as NeedsYouNoAIDisclosure,B as __namedExportsOrder,z as default};
