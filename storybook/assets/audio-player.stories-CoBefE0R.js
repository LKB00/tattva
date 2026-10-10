import{j as e}from"./iframe-J6_2PHET.js";import{m as y,b as f}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=f.get("audio-player"),q={title:"Voice and audio/AudioPlayer",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},a={name:"Call recording",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"No file is needed for a preview: the player simulates playback from duration. Press Play, then try the arrow keys on the waveform, or Space and K anywhere in the player."},source:n("AudioPlayer")}}},o={name:"Made by AI",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"aiGenerated adds the AI label beside the title; the player itself stays neutral. The second clip is still being made: it can play now and the end is drawn dashed."},source:n("AudioPlayer")}}},t={name:"Loading, buffering, error, unavailable and compact",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Pass state for what the app knows and the player cannot see. Buffering shows a spinner after a short wait once playing. The compact rows are for lists of takes; starting one pauses the other."},source:n("AudioPlayer")}}},z=["CallRecording","MadeByAI","LoadingBufferingErrorUnavailableAndCompact"];var s,i,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Call recording",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No file is needed for a preview: the player simulates playback from duration. Press Play, then try the arrow keys on the waveform, or Space and K anywhere in the player."
      },
      source: proSource("AudioPlayer")
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Made by AI",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "aiGenerated adds the AI label beside the title; the player itself stays neutral. The second clip is still being made: it can play now and the end is drawn dashed."
      },
      source: proSource("AudioPlayer")
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Loading, buffering, error, unavailable and compact",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass state for what the app knows and the player cannot see. Buffering shows a spinner after a short wait once playing. The compact rows are for lists of takes; starting one pauses the other."
      },
      source: proSource("AudioPlayer")
    }
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{a as CallRecording,t as LoadingBufferingErrorUnavailableAndCompact,o as MadeByAI,z as __namedExportsOrder,q as default};
