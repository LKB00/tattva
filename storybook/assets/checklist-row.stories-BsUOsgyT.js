import{j as s}from"./iframe-DSdOWv-_.js";import{w as a,b as n}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const e=n.get("checklist-row"),E={title:"Assistants/ChecklistRow",component:a,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"Mixed statuses",render:()=>s.jsx(s.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Only the row that needs a person gets the dot. The others stay quiet."},source:{code:`<ul className="w-full max-w-md">
  <ChecklistRow item={{ id: "1", title: "Update the brand sheet", status: "Done" }} />
  <ChecklistRow item={{ id: "2", title: "Review the contract", status: "Waiting for your sign-off", attention: true }} />
  <ChecklistRow item={{ id: "3", title: "Send the weekly note", badge: <Badge>Draft</Badge>, status: "In progress" }} />
</ul>`}}}},N=["MixedStatuses"];var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Mixed statuses",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Only the row that needs a person gets the dot. The others stay quiet."
      },
      source: {
        code: "<ul className=\\"w-full max-w-md\\">\\n  <ChecklistRow item={{ id: \\"1\\", title: \\"Update the brand sheet\\", status: \\"Done\\" }} />\\n  <ChecklistRow item={{ id: \\"2\\", title: \\"Review the contract\\", status: \\"Waiting for your sign-off\\", attention: true }} />\\n  <ChecklistRow item={{ id: \\"3\\", title: \\"Send the weekly note\\", badge: <Badge>Draft</Badge>, status: \\"In progress\\" }} />\\n</ul>"
      }
    }
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};export{t as MixedStatuses,N as __namedExportsOrder,E as default};
