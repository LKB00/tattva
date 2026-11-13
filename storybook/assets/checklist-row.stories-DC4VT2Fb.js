import{j as s}from"./iframe-D-pZXX8_.js";import{E as a,b as n}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const e=n.get("checklist-row"),v={title:"Assistants/ChecklistRow",component:a,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"Mixed statuses",render:()=>s.jsx(s.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Only the row that needs a person gets the dot. The others stay quiet."},source:{code:`<ul className="w-full max-w-md">
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};export{t as MixedStatuses,N as __namedExportsOrder,v as default};
