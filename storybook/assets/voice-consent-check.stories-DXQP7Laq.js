import{j as e}from"./iframe-J6_2PHET.js";import{c1 as l,b as y}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=y.get("voice-consent-check"),H={title:"Voice and audio/VoiceConsentCheck",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"The whole check",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Agree, check the mic (the first check is noisy here; Check again clears it), read three lines, then checking and verified. Timers stand in for the app."},source:n("VoiceConsentCheck")}}},t={name:"Likeness for video, every step",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:'subject="likeness" changes the copy to cover the camera. Pick any step to see it; this starts on a failed check with two tries left.'},source:n("VoiceConsentCheck")}}},s={name:"Locked out",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"After too many tries: the exact time to try again, computed by code, plus support and manual review."},source:n("VoiceConsentCheck")}}},J=["TheWholeCheck","LikenessForVideoEveryStep","LockedOut"];var c,i,a;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "The whole check",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Agree, check the mic (the first check is noisy here; Check again clears it), read three lines, then checking and verified. Timers stand in for the app."
      },
      source: proSource("VoiceConsentCheck")
    }
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Likeness for video, every step",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "subject=\\"likeness\\" changes the copy to cover the camera. Pick any step to see it; this starts on a failed check with two tries left."
      },
      source: proSource("VoiceConsentCheck")
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Locked out",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "After too many tries: the exact time to try again, computed by code, plus support and manual review."
      },
      source: proSource("VoiceConsentCheck")
    }
  }
}`,...(k=(u=s.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};export{t as LikenessForVideoEveryStep,s as LockedOut,o as TheWholeCheck,J as __namedExportsOrder,H as default};
