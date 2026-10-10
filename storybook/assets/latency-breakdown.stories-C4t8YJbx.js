import{j as e}from"./iframe-J6_2PHET.js";import{am as w,b as g}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("latency-breakdown"),D={title:"Voice and audio/LatencyBreakdown",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"One reply",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The model took most of the time, so it is named first. The reply was over the team's target."},source:n("LatencyBreakdown")}}},t={name:"A whole call with slow turns",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Stages are medians across the call. Two turns went over 800 ms; choose one to play the recording from there."},source:n("LatencyBreakdown")}}},s={name:"Speech-to-speech model, within target",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With a single speech model there is no separate speech to text or voice stage. No target line turns red."},source:n("LatencyBreakdown")}}},G=["OneReply","AWholeCallWithSlowTurns","SpeechToSpeechModelWithinTarget"];var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "One reply",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The model took most of the time, so it is named first. The reply was over the team's target."
      },
      source: proSource("LatencyBreakdown")
    }
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "A whole call with slow turns",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Stages are medians across the call. Two turns went over 800 ms; choose one to play the recording from there."
      },
      source: proSource("LatencyBreakdown")
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,h,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Speech-to-speech model, within target",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With a single speech model there is no separate speech to text or voice stage. No target line turns red."
      },
      source: proSource("LatencyBreakdown")
    }
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{t as AWholeCallWithSlowTurns,o as OneReply,s as SpeechToSpeechModelWithinTarget,G as __namedExportsOrder,D as default};
