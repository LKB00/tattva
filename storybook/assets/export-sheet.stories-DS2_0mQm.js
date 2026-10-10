import{j as e}from"./iframe-J6_2PHET.js";import{a3 as u,b as f}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=f.get("export-sheet"),H={title:"Slides/ExportSheet",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Export with checks",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Open it, switch format and watch the checks change. PowerPoint fails the first time at slide 6, to show Try again. Go to slide 4 closes the sheet and jumps there."},source:s("ExportSheet")}}},o={name:"Every state",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Drawn inline so each state is easy to compare: checking, things to fix, nothing to fix, exporting, done and failed."},source:s("ExportSheet")}}},n={name:"A view-only link",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The link format ends with the link and Copy link instead of a file."},source:s("ExportSheet")}}},J=["ExportWithChecks","EveryState","AViewOnlyLink"];var i,a,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Export with checks",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open it, switch format and watch the checks change. PowerPoint fails the first time at slide 6, to show Try again. Go to slide 4 closes the sheet and jumps there."
      },
      source: proSource("ExportSheet")
    }
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Drawn inline so each state is easy to compare: checking, things to fix, nothing to fix, exporting, done and failed."
      },
      source: proSource("ExportSheet")
    }
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,l,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "A view-only link",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The link format ends with the link and Copy link instead of a file."
      },
      source: proSource("ExportSheet")
    }
  }
}`,...(x=(l=n.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};export{n as AViewOnlyLink,o as EveryState,t as ExportWithChecks,J as __namedExportsOrder,H as default};
