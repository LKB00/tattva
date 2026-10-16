import{j as e}from"./iframe-DSdOWv-_.js";import{a1 as h,b as w}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=w.get("diff-view"),B={title:"Assistants/DiffView",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Review two files",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Decide per file, per change, or use the bottom bar. Next file jumps to a file you have not finished."},source:{code:"<DiffView files={files} />"}}}},i={name:"Review one change at a time",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The first file has two changes. Keep one and reject the other, and the file shows Partly kept."},source:{code:`// The first file in files has two changes.
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
