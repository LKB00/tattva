import{j as e}from"./iframe-J6_2PHET.js";import{b6 as f,b as g}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=g.get("section-lane"),D={title:"Voice and audio/SectionLane",component:f,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Edit a song",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Select a section, then Regenerate, Extend after or move it. Each edit adds to the amber bar and the section after a changed one goes out of date. Generate makes them all at once; the sections then show new takes to compare."},source:a("SectionLane")}}},o={name:"Every section state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Up to date, edited and not generated, out of date, generating, new takes to compare, and did not work. The failed Outro is selected, so it offers Try again."},source:a("SectionLane")}}},n={name:"Narrow, cannot afford Generate",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"At phone width the lane scrolls sideways inside the card. generateBlocked turns Generate off and says why."},source:a("SectionLane")}}},H=["EditASong","EverySectionState","NarrowCannotAffordGenerate"];var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Edit a song",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Select a section, then Regenerate, Extend after or move it. Each edit adds to the amber bar and the section after a changed one goes out of date. Generate makes them all at once; the sections then show new takes to compare."
      },
      source: proSource("SectionLane")
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Every section state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Up to date, edited and not generated, out of date, generating, new takes to compare, and did not work. The failed Outro is selected, so it offers Try again."
      },
      source: proSource("SectionLane")
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,l,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Narrow, cannot afford Generate",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At phone width the lane scrolls sideways inside the card. generateBlocked turns Generate off and says why."
      },
      source: proSource("SectionLane")
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{r as EditASong,o as EverySectionState,n as NarrowCannotAffordGenerate,H as __namedExportsOrder,D as default};
