import{j as o}from"./iframe-D-pZXX8_.js";import{G as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=d.get("checkpoint-list"),W={title:"Assistants/CheckpointList",component:c,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Rewind list",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"In this demo, restoring moves the marker to the chosen step. A step with no changed files cannot use Restore work only."},source:{code:`<CheckpointList
  currentId={current}
  checkpoints={[
    { id: "c3", prompt: "Add a retry to the upload step", time: "2 min ago", files: 2 },
    { id: "c2", prompt: "Split the settings form into sections", time: "14 min ago", files: 5 },
    { id: "c1", prompt: "Set up the project", time: "1 hr ago", files: 0 },
  ]}
  onRestore={(id) => setCurrent(id)}
  limitations="Edits made by shell commands are not tracked."
/>`}}}},t={name:"Your own wording",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Change any visible label."},source:{code:`<CheckpointList
  checkpoints={[{ id: "a", prompt: "Draft the intro", time: "5 min ago", files: 1 }]}
  labels={{ rewind: "Go back", everything: "Undo all" }}
/>`}}}},_=["RewindList","YourOwnWording"];var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Rewind list",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "In this demo, restoring moves the marker to the chosen step. A step with no changed files cannot use Restore work only."
      },
      source: {
        code: "<CheckpointList\\n  currentId={current}\\n  checkpoints={[\\n    { id: \\"c3\\", prompt: \\"Add a retry to the upload step\\", time: \\"2 min ago\\", files: 2 },\\n    { id: \\"c2\\", prompt: \\"Split the settings form into sections\\", time: \\"14 min ago\\", files: 5 },\\n    { id: \\"c1\\", prompt: \\"Set up the project\\", time: \\"1 hr ago\\", files: 0 },\\n  ]}\\n  onRestore={(id) => setCurrent(id)}\\n  limitations=\\"Edits made by shell commands are not tracked.\\"\\n/>"
      }
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,p,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Your own wording",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change any visible label."
      },
      source: {
        code: "<CheckpointList\\n  checkpoints={[{ id: \\"a\\", prompt: \\"Draft the intro\\", time: \\"5 min ago\\", files: 1 }]}\\n  labels={{ rewind: \\"Go back\\", everything: \\"Undo all\\" }}\\n/>"
      }
    }
  }
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};export{e as RewindList,t as YourOwnWording,_ as __namedExportsOrder,W as default};
