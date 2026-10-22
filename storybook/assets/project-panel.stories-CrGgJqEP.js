import{j as e}from"./iframe-C8v_uZy_.js";import{b0 as i,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=p.get("project-panel"),k={title:"Conversation/ProjectPanel",component:i,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"A support project",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Show all the instructions, or remove a file: focus moves to the next."},source:{code:`<ProjectPanel
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
