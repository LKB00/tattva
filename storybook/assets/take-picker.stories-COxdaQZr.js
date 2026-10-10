import{j as e}from"./iframe-J6_2PHET.js";import{bD as y,b as g}from"./registry-DJg46al6.js";import{a as o}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=g.get("take-picker"),G={title:"Voice and audio/TakePicker",component:y,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Three song takes, pick one",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Every take is done and none is kept yet, so the amber line asks for a pick. Press Play on Take 1, then Play on Take 2: it carries on from the same moment. Make 2 more shows the making, still-making-the-end and ready states, and the cost sits beside the button."},source:o("TakePicker")}}},t={name:"Takes for one section, with a failed take",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"With section set, Play runs from a few seconds before the chorus to a few seconds after it, so the joins can be heard, and the chorus is marked as AI-made on each waveform. Take 3 failed and says why; Try again keeps its slot while it is made again."},source:o("TakePicker")}}},s={name:"Making, partly ready, and keeping several",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"While every take is still being made, each slot keeps its height and says which take it is making. Partly ready: a finished take can be played while the next is still making its end; nothing is amber yet because the person cannot act on all of them. With multiple, Keep works like a check box."},source:o("TakePicker")}}},H=["ThreeSongTakesPickOne","TakesForOneSectionWithAFailedTake","MakingPartlyReadyAndKeepingSeveral"];var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Three song takes, pick one",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every take is done and none is kept yet, so the amber line asks for a pick. Press Play on Take 1, then Play on Take 2: it carries on from the same moment. Make 2 more shows the making, still-making-the-end and ready states, and the cost sits beside the button."
      },
      source: proSource("TakePicker")
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Takes for one section, with a failed take",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With section set, Play runs from a few seconds before the chorus to a few seconds after it, so the joins can be heard, and the chorus is marked as AI-made on each waveform. Take 3 failed and says why; Try again keeps its slot while it is made again."
      },
      source: proSource("TakePicker")
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var k,h,l;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Making, partly ready, and keeping several",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While every take is still being made, each slot keeps its height and says which take it is making. Partly ready: a finished take can be played while the next is still making its end; nothing is amber yet because the person cannot act on all of them. With multiple, Keep works like a check box."
      },
      source: proSource("TakePicker")
    }
  }
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};export{s as MakingPartlyReadyAndKeepingSeveral,t as TakesForOneSectionWithAFailedTake,r as ThreeSongTakesPickOne,H as __namedExportsOrder,G as default};
