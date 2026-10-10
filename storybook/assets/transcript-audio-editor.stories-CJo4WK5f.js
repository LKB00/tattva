import{j as e}from"./iframe-J6_2PHET.js";import{bR as w,b as g}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("transcript-audio-editor"),G={title:"Voice and audio/TranscriptAudioEditor",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Edit a podcast intro",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Play to hear it; the word being played gets a tint. Click a word, Shift-click another, then Remove or Change words. New audio takes a moment, then waits for Keep or Revert. Remove filler words cuts every marked filler at once, and Undo takes back each step."},source:s("TranscriptAudioEditor")}}},t={name:"Every state",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Removed words are struck through and hatched on the waveform. One phrase is making new audio, one is ready and waiting, one was kept and one failed with a reason. Each state is also said in words for screen readers."},source:s("TranscriptAudioEditor")}}},a={name:"No consented voice",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Removing words still works, but Change words says in one line why it is off. Select a few words to see it. The limits are said before typing."},source:s("TranscriptAudioEditor")}}},H=["EditAPodcastIntro","EveryState","NoConsentedVoice"];var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Edit a podcast intro",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Play to hear it; the word being played gets a tint. Click a word, Shift-click another, then Remove or Change words. New audio takes a moment, then waits for Keep or Revert. Remove filler words cuts every marked filler at once, and Undo takes back each step."
      },
      source: proSource("TranscriptAudioEditor")
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Removed words are struck through and hatched on the waveform. One phrase is making new audio, one is ready and waiting, one was kept and one failed with a reason. Each state is also said in words for screen readers."
      },
      source: proSource("TranscriptAudioEditor")
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,l;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "No consented voice",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Removing words still works, but Change words says in one line why it is off. Select a few words to see it. The limits are said before typing."
      },
      source: proSource("TranscriptAudioEditor")
    }
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{o as EditAPodcastIntro,t as EveryState,a as NoConsentedVoice,H as __namedExportsOrder,G as default};
