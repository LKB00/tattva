import{j as e}from"./iframe-J6_2PHET.js";import{V as v,b as w}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("deck-change-review"),z={title:"Slides/DeckChangeReview",component:v,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Keep or undo each slide",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:'Four slides changed by "Make it more visual". Keep or Undo each one; the header counts what is left. Done only applies once every slide has a decision, then saves one version.'},source:a("DeckChangeReview")}}},n={name:"One slide at a time on a phone",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:'layout="pager" (or auto on a narrow screen) shows one slide with Previous and Next and a Before and After switch.'},source:a("DeckChangeReview")}}},s={name:"Needs review, all reviewed, saving and saved",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Amber only while a slide still needs a decision. The toggle view shows one picture with a Before and After switch."},source:a("DeckChangeReview")}}},G=["KeepOrUndoEachSlide","OneSlideAtATimeOnAPhone","NeedsReviewAllReviewedSavingAndSaved"];var i,t,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Keep or undo each slide",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four slides changed by \\"Make it more visual\\". Keep or Undo each one; the header counts what is left. Done only applies once every slide has a decision, then saves one version."
      },
      source: proSource("DeckChangeReview")
    }
  }
}`,...(d=(t=o.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "One slide at a time on a phone",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "layout=\\"pager\\" (or auto on a narrow screen) shows one slide with Previous and Next and a Before and After switch."
      },
      source: proSource("DeckChangeReview")
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,h,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Needs review, all reviewed, saving and saved",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Amber only while a slide still needs a decision. The toggle view shows one picture with a Before and After switch."
      },
      source: proSource("DeckChangeReview")
    }
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{o as KeepOrUndoEachSlide,s as NeedsReviewAllReviewedSavingAndSaved,n as OneSlideAtATimeOnAPhone,G as __namedExportsOrder,z as default};
