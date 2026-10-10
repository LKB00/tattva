import{j as e}from"./iframe-J6_2PHET.js";import{U as h,b as g}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("deck-build-progress"),H={title:"Slides/DeckBuildProgress",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"A live build",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Eight slides build one by one. Slide 5 fails and the rest carry on, so the job ends Partly ready. Try Stop part way: it keeps the ready slides and offers to build the rest."},source:n("DeckBuildProgress")}}},t={name:"Every state",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Queued, building, partly ready, failed, stopped and ready. Each one is written in words; the colour only repeats it."},source:n("DeckBuildProgress")}}},s={name:"Compact, on a phone",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"One line, the bar and Stop. The slide list opens on request."},source:n("DeckBuildProgress")}}},J=["ALiveBuild","EveryState","CompactOnAPhone"];var a,i,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A live build",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Eight slides build one by one. Slide 5 fails and the rest carry on, so the job ends Partly ready. Try Stop part way: it keeps the ready slides and offers to build the rest."
      },
      source: proSource("DeckBuildProgress")
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Queued, building, partly ready, failed, stopped and ready. Each one is written in words; the colour only repeats it."
      },
      source: proSource("DeckBuildProgress")
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,u,y;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Compact, on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One line, the bar and Stop. The slide list opens on request."
      },
      source: proSource("DeckBuildProgress")
    }
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{o as ALiveBuild,s as CompactOnAPhone,t as EveryState,J as __namedExportsOrder,H as default};
