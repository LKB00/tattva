import{j as e}from"./iframe-DSdOWv-_.js";import{aZ as i,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=p.get("project-panel"),Z={title:"Conversation/ProjectPanel",component:i,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"A support project",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Show all the instructions, or remove a file: focus moves to the next."},source:{code:`<ProjectPanel
  name="Customer support"
  description="Replies to customers of the Acme store."
  chatCount={24}
  instructions={instructions}
  files={files}
  onEditInstructions={edit}
  onAddFiles={add}
  onRemoveFile={remove}
  capacity={{ used: 41800, total: 200000 }}
/>`}}}},k=["ASupportProject"];var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};export{o as ASupportProject,k as __namedExportsOrder,Z as default};
