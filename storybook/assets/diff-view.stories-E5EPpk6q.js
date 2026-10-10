import{j as e}from"./iframe-J6_2PHET.js";import{Z as w,b as u}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=u.get("diff-view"),G={title:"Assistants/DiffView",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Review two files",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Decide per file, per change, or use the bottom bar. Next file jumps to a file you have not finished."},source:s("DiffView")}}},o={name:"Review one change at a time",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The first file has two changes. Keep one and reject the other, and the file shows Partly kept."},source:s("DiffView")}}},i={name:"Partly reviewed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Start with one file already decided. The bottom bar shows one file left."},source:s("DiffView")}}},H=["ReviewTwoFiles","ReviewOneChangeAtATime","PartlyReviewed"];var a,n,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Review two files",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Decide per file, per change, or use the bottom bar. Next file jumps to a file you have not finished."
      },
      source: proSource("DiffView")
    }
  }
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Review one change at a time",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first file has two changes. Keep one and reject the other, and the file shows Partly kept."
      },
      source: proSource("DiffView")
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var f,l,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Partly reviewed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start with one file already decided. The bottom bar shows one file left."
      },
      source: proSource("DiffView")
    }
  }
}`,...(h=(l=i.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{i as PartlyReviewed,o as ReviewOneChangeAtATime,t as ReviewTwoFiles,H as __namedExportsOrder,G as default};
