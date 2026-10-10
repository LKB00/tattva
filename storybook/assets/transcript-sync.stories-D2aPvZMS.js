import{j as e}from"./iframe-J6_2PHET.js";import{bS as y,b as w}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("transcript-sync"),B={title:"Voice and audio/TranscriptSync",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},s={name:"Support call with its recording",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Pass audio and the part wires in its own player. Press Play and the current line follows; press any line to jump. The assistant was cut off at 1:06, so the rest of that line is marked Not spoken."},source:n("TranscriptSync")}}},t={name:"With your own player",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Keep the time yourself when the player lives elsewhere on the screen. Pass current, and seek your player in onSeek."},source:n("TranscriptSync")}}},o={name:"Loading and empty",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"loading shows placeholder lines while the transcript is made. With no lines, it says so in words."},source:n("TranscriptSync")}}},D=["SupportCallWithItsRecording","WithYourOwnPlayer","LoadingAndEmpty"];var a,i,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Support call with its recording",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass audio and the part wires in its own player. Press Play and the current line follows; press any line to jump. The assistant was cut off at 1:06, so the rest of that line is marked Not spoken."
      },
      source: proSource("TranscriptSync")
    }
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With your own player",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Keep the time yourself when the player lives elsewhere on the screen. Pass current, and seek your player in onSeek."
      },
      source: proSource("TranscriptSync")
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Loading and empty",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "loading shows placeholder lines while the transcript is made. With no lines, it says so in words."
      },
      source: proSource("TranscriptSync")
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{o as LoadingAndEmpty,s as SupportCallWithItsRecording,t as WithYourOwnPlayer,D as __namedExportsOrder,B as default};
