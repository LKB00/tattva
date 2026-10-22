import{j as s}from"./iframe-C8v_uZy_.js";import{z as a,b as n}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const e=n.get("checklist-row"),E={title:"Assistants/ChecklistRow",component:a,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"Mixed statuses",render:()=>s.jsx(s.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Only the row that needs a person gets the dot. The others stay quiet."},source:{code:`<ul className="w-full max-w-md">
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
