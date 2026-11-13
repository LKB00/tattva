import{j as s}from"./iframe-D-pZXX8_.js";import{c2 as u,b as T}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const e=T.get("task-tree"),G={title:"Assistants/TaskTree",component:u,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},r={name:"Tasks inside tasks",render:()=>s.jsx(s.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The (+N) count includes every task inside. Close a parent task to hide what is inside."},source:{code:"<TaskTree tasks={tasks} onOpen={(id) => open(id)} />"}}}},a={name:"Dismissing a failed task",render:()=>s.jsx(s.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Failed rows have a Dismiss button and stay until you use it."},source:{code:'<TaskTree tasks={[{ id: "a", name: "Email the travel agent", status: "failed" }, { id: "b", name: "Lint", status: "done" }]} />'}}}},n={name:"Finished tasks leave on their own",render:()=>s.jsx(s.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"The finished row disappears after 4 seconds. The failed row stays."},source:{code:`<TaskTree
  tasks={rows}
  dismissAfterMs={4000}
  onDismiss={(id) => setRows((r) => r.filter((x) => x.id !== id))}
/>`}}}},H=["TasksInsideTasks","DismissingAFailedTask","FinishedTasksLeaveOnTheirOwn"];var i,t,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Tasks inside tasks",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The (+N) count includes every task inside. Close a parent task to hide what is inside."
      },
      source: {
        code: "<TaskTree tasks={tasks} onOpen={(id) => open(id)} />"
      }
    }
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Dismissing a failed task",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Failed rows have a Dismiss button and stay until you use it."
      },
      source: {
        code: "<TaskTree tasks={[{ id: \\"a\\", name: \\"Email the travel agent\\", status: \\"failed\\" }, { id: \\"b\\", name: \\"Lint\\", status: \\"done\\" }]} />"
      }
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,k;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Finished tasks leave on their own",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The finished row disappears after 4 seconds. The failed row stays."
      },
      source: {
        code: "<TaskTree\\n  tasks={rows}\\n  dismissAfterMs={4000}\\n  onDismiss={(id) => setRows((r) => r.filter((x) => x.id !== id))}\\n/>"
      }
    }
  }
}`,...(k=(l=n.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};export{a as DismissingAFailedTask,n as FinishedTasksLeaveOnTheirOwn,r as TasksInsideTasks,H as __namedExportsOrder,G as default};
