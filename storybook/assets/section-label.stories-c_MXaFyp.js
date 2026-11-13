import{j as t}from"./iframe-D-pZXX8_.js";import{bq as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=d.get("section-label"),_={title:"Controls/SectionLabel",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Label only",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A plain group name above a list."},source:{code:`<div className="w-64">
  <SectionLabel>Today</SectionLabel>
</div>`}}}},o={name:"With an action",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a button or link at the end of the row."},source:{code:`<div className="w-64">
  <SectionLabel action={<Button variant="ghost" size="sm">Clear</Button>}>Recent chats</SectionLabel>
</div>`}}}},q=["LabelOnly","WithAnAction"];var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as LabelOnly,o as WithAnAction,q as __namedExportsOrder,_ as default};
