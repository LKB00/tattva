import{j as e}from"./iframe-D-pZXX8_.js";import{b6 as i,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=p.get("project-panel"),k={title:"Conversation/ProjectPanel",component:i,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"A support project",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Show all the instructions, or remove a file: focus moves to the next."},source:{code:`<ProjectPanel
  name="Customer support"
  description="Replies to customers of the Acme store."
  chatCount={24}
  instructions={instructions}
  files={files}
  onEditInstructions={edit}
  onAddFiles={add}
  onRemoveFile={remove}
  capacity={{ used: 41800, total: 200000 }}
/>`}}}},q=["ASupportProject"];var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "A support project",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Show all the instructions, or remove a file: focus moves to the next."
      },
      source: {
        code: "<ProjectPanel\\n  name=\\"Customer support\\"\\n  description=\\"Replies to customers of the Acme store.\\"\\n  chatCount={24}\\n  instructions={instructions}\\n  files={files}\\n  onEditInstructions={edit}\\n  onAddFiles={add}\\n  onRemoveFile={remove}\\n  capacity={{ used: 41800, total: 200000 }}\\n/>"
      }
    }
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};export{o as ASupportProject,q as __namedExportsOrder,k as default};
