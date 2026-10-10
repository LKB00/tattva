import{j as e}from"./iframe-J6_2PHET.js";import{bB as f,b as g}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("take-card"),z={title:"Video/TakeCard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"From the queue to a finished take",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Step through the life of one take. The lime edge shows only while the model works. Cancel says first that the credits come back, and the card then says so."},source:s("TakeCard")}}},o={name:"Endings: blocked, failed, rate limited, cancelled",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A policy block is a calm note, not a red error. It says whether the request or the finished video was stopped, and that nothing was charged. A failure is the only red state. Every ending names the charge."},source:s("TakeCard")}}},a={name:"A draft take with lineage and more actions",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"A low-cost draft is tagged Draft on the frame and in the words, so it is never taken for the finished clip. The lineage line says where it came from, and the overflow menu holds the next steps."},source:s("TakeCard")}}},G=["FromTheQueueToAFinishedTake","EndingsBlockedFailedRateLimitedCancelled","ADraftTakeWithLineageAndMoreActions"];var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "From the queue to a finished take",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Step through the life of one take. The lime edge shows only while the model works. Cancel says first that the credits come back, and the card then says so."
      },
      source: proSource("TakeCard")
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Endings: blocked, failed, rate limited, cancelled",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A policy block is a calm note, not a red error. It says whether the request or the finished video was stopped, and that nothing was charged. A failure is the only red state. Every ending names the charge."
      },
      source: proSource("TakeCard")
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,l,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "A draft take with lineage and more actions",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A low-cost draft is tagged Draft on the frame and in the words, so it is never taken for the finished clip. The lineage line says where it came from, and the overflow menu holds the next steps."
      },
      source: proSource("TakeCard")
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as ADraftTakeWithLineageAndMoreActions,o as EndingsBlockedFailedRateLimitedCancelled,t as FromTheQueueToAFinishedTake,G as __namedExportsOrder,z as default};
