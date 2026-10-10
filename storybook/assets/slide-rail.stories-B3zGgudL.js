import{j as e}from"./iframe-J6_2PHET.js";import{bd as w,b as g}from"./registry-DJg46al6.js";import{a as i}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("slide-rail"),J={title:"Slides/SlideRail",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"A deck being built",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every state at once. Slide 5 is being written, slide 6 failed and can be tried again on its own, slide 3 needs review, and slide 4 was built before its outline changed. Try Shift with an arrow to choose several slides, Alt with an arrow to move one, and Delete then Undo."},source:i("SlideRail")}}},n={name:"Sideways strip for phones",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:'orientation="auto" does this by itself below 600px. Left and Right move between slides. Actions sit in the bar under the strip, so nothing depends on drag or hover.'},source:i("SlideRail")}}},t={name:"Read only, for reviewers",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Pass only onCurrentChange and the rail is a plain list to move around in: no selection, no reorder and no actions."},source:i("SlideRail")}}},K=["ADeckBeingBuilt","SidewaysStripForPhones","ReadOnlyForReviewers"];var s,a,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A deck being built",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every state at once. Slide 5 is being written, slide 6 failed and can be tried again on its own, slide 3 needs review, and slide 4 was built before its outline changed. Try Shift with an arrow to choose several slides, Alt with an arrow to move one, and Delete then Undo."
      },
      source: proSource("SlideRail")
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Sideways strip for phones",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "orientation=\\"auto\\" does this by itself below 600px. Left and Right move between slides. Actions sit in the bar under the strip, so nothing depends on drag or hover."
      },
      source: proSource("SlideRail")
    }
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,h,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Read only, for reviewers",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass only onCurrentChange and the rail is a plain list to move around in: no selection, no reorder and no actions."
      },
      source: proSource("SlideRail")
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{o as ADeckBeingBuilt,t as ReadOnlyForReviewers,n as SidewaysStripForPhones,K as __namedExportsOrder,J as default};
