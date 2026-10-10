import{j as e}from"./iframe-J6_2PHET.js";import{c3 as u,b as w}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("voice-picker"),H={title:"Voice and audio/VoicePicker",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"With tag filters",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Filter by tag, play samples, and choose. Starting a sample stops the one playing, and a filter that hides the playing voice stops it too."},source:s("VoicePicker")}}},t={name:"Grid, with locked and withdrawn voices",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Two columns from 640px wide. The chosen voice has been withdrawn, so its card asks the person to pick another."},source:s("VoicePicker")}}},i={name:"Loading and empty",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Placeholder rows while voices load, and a plain message when there are none."},source:s("VoicePicker")}}},J=["WithTagFilters","GridWithLockedAndWithdrawnVoices","LoadingAndEmpty"];var a,n,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "With tag filters",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Filter by tag, play samples, and choose. Starting a sample stops the one playing, and a filter that hides the playing voice stops it too."
      },
      source: proSource("VoicePicker")
    }
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Grid, with locked and withdrawn voices",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two columns from 640px wide. The chosen voice has been withdrawn, so its card asks the person to pick another."
      },
      source: proSource("VoicePicker")
    }
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,l,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Loading and empty",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placeholder rows while voices load, and a plain message when there are none."
      },
      source: proSource("VoicePicker")
    }
  }
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};export{t as GridWithLockedAndWithdrawnVoices,i as LoadingAndEmpty,o as WithTagFilters,J as __namedExportsOrder,H as default};
