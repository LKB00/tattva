import{j as e}from"./iframe-C8v_uZy_.js";import{a4 as h,b as w}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=w.get("diff-view"),B={title:"Assistants/DiffView",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Review two files",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Decide per file, per change, or use the bottom bar. Next file jumps to a file you have not finished."},source:{code:"<DiffView files={files} />"}}}},i={name:"Review one change at a time",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The first file has two changes. Keep one and reject the other, and the file shows Partly kept."},source:{code:`// The first file in files has two changes.
<DiffView files={files} />`}}}},o={name:"Partly reviewed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Start with one file already decided. The bottom bar shows one file left."},source:{code:'<DiffView files={files} defaultStatuses={{ a: "kept" }} defaultActiveId="b" />'}}}},G=["ReviewTwoFiles","ReviewOneChangeAtATime","PartlyReviewed"];var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Review two files",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Decide per file, per change, or use the bottom bar. Next file jumps to a file you have not finished."
      },
      source: {
        code: "<DiffView files={files} />"
      }
    }
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Review one change at a time",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first file has two changes. Keep one and reject the other, and the file shows Partly kept."
      },
      source: {
        code: "// The first file in files has two changes.\\n<DiffView files={files} />"
      }
    }
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,f,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Partly reviewed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start with one file already decided. The bottom bar shows one file left."
      },
      source: {
        code: "<DiffView files={files} defaultStatuses={{ a: \\"kept\\" }} defaultActiveId=\\"b\\" />"
      }
    }
  }
}`,...(l=(f=o.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};export{o as PartlyReviewed,i as ReviewOneChangeAtATime,t as ReviewTwoFiles,G as __namedExportsOrder,B as default};
