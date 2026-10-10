import{j as e}from"./iframe-J6_2PHET.js";import{bj as f,b}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=b.get("speaker-notes"),J={title:"Slides/SpeakerNotes",component:f,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Draft, keep, then edit",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:'Draft notes with AI, then Keep. Type in the box: the label becomes "Edited by you" with a button to put the AI draft back. Drafting again now asks first.'},source:a("SpeakerNotes")}}},o={name:"Every state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Empty, drafting, a draft to review next to the person's own notes, kept, edited and failed."},source:a("SpeakerNotes")}}},s={name:"Folded, on a phone",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Collapsible notes under the slide, with image credits at the bottom."},source:a("SpeakerNotes")}}},L=["DraftKeepThenEdit","EveryState","FoldedOnAPhone"];var n,p,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Draft, keep, then edit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Draft notes with AI, then Keep. Type in the box: the label becomes \\"Edited by you\\" with a button to put the AI draft back. Drafting again now asks first."
      },
      source: proSource("SpeakerNotes")
    }
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,m,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Empty, drafting, a draft to review next to the person's own notes, kept, edited and failed."
      },
      source: proSource("SpeakerNotes")
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,l,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Folded, on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Collapsible notes under the slide, with image credits at the bottom."
      },
      source: proSource("SpeakerNotes")
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{r as DraftKeepThenEdit,o as EveryState,s as FoldedOnAPhone,L as __namedExportsOrder,J as default};
