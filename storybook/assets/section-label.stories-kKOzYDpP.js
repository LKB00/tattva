import{j as t}from"./iframe-DSdOWv-_.js";import{bf as p,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=d.get("section-label"),_={title:"Controls/SectionLabel",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Label only",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A plain group name above a list."},source:{code:`<div className="w-64">
  <SectionLabel>Today</SectionLabel>
</div>`}}}},o={name:"With an action",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a button or link at the end of the row."},source:{code:`<div className="w-64">
  <SectionLabel action={<Button variant="ghost" size="sm">Clear</Button>}>Recent chats</SectionLabel>
</div>`}}}},I=["LabelOnly","WithAnAction"];var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Label only",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A plain group name above a list."
      },
      source: {
        code: "<div className=\\"w-64\\">\\n  <SectionLabel>Today</SectionLabel>\\n</div>"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "With an action",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add a button or link at the end of the row."
      },
      source: {
        code: "<div className=\\"w-64\\">\\n  <SectionLabel action={<Button variant=\\"ghost\\" size=\\"sm\\">Clear</Button>}>Recent chats</SectionLabel>\\n</div>"
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as LabelOnly,o as WithAnAction,I as __namedExportsOrder,_ as default};
