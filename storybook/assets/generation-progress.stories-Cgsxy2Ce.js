import{j as e}from"./iframe-J6_2PHET.js";import{a9 as T,b as k}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=k.get("generation-progress"),re={title:"Creating/GenerationProgress",component:T,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},s={name:"Try each state",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Switch the state to see each one. The percent bar shows only while making it, with a percent."},source:n("GenerationProgress")}}},o={name:"Progress not known",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Leave out the percent when progress is not known."},source:n("GenerationProgress")}}},t={name:"Waiting in line",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Shows your place in line and no bar."},source:n("GenerationProgress")}}},a={name:"Failed",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Failed shows the message in words and offers Retry."},source:n("GenerationProgress")}}},i={name:"Audio: listen before it is finished",render:()=>e.jsx(e.Fragment,{children:r.examples[4].render()}),parameters:{docs:{description:{story:"Streaming means the start can be played while the rest is still being made. Listen now never plays on its own; the person presses it. The credits note sits next to Cancel."},source:n("GenerationProgress")}}},c={name:"Audio: queued and cancelled",render:()=>e.jsx(e.Fragment,{children:r.examples[5].render()}),parameters:{docs:{description:{story:"previewShape audio swaps the 16:9 block for a flat waveform with a label. After Cancel the note says what happened to the credits, and Start again is offered."},source:n("GenerationProgress")}}},ne=["TryEachState","ProgressNotKnown","WaitingInLine","Failed","AudioListenBeforeItIsFinished","AudioQueuedAndCancelled"];var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Try each state",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Switch the state to see each one. The percent bar shows only while making it, with a percent."
      },
      source: proSource("GenerationProgress")
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,h,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Progress not known",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out the percent when progress is not known."
      },
      source: proSource("GenerationProgress")
    }
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,w,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Waiting in line",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Shows your place in line and no bar."
      },
      source: proSource("GenerationProgress")
    }
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var f,S,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Failed",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Failed shows the message in words and offers Retry."
      },
      source: proSource("GenerationProgress")
    }
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var P,b,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Audio: listen before it is finished",
  render: () => <>{doc.examples[4].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Streaming means the start can be played while the rest is still being made. Listen now never plays on its own; the person presses it. The credits note sits next to Cancel."
      },
      source: proSource("GenerationProgress")
    }
  }
}`,...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var G,A,v;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Audio: queued and cancelled",
  render: () => <>{doc.examples[5].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "previewShape audio swaps the 16:9 block for a flat waveform with a label. After Cancel the note says what happened to the credits, and Start again is offered."
      },
      source: proSource("GenerationProgress")
    }
  }
}`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};export{i as AudioListenBeforeItIsFinished,c as AudioQueuedAndCancelled,a as Failed,o as ProgressNotKnown,s as TryEachState,t as WaitingInLine,ne as __namedExportsOrder,re as default};
