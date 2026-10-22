import{j as s}from"./iframe-C8v_uZy_.js";import{bW as u,b as T}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const e=T.get("task-tree"),B={title:"Assistants/TaskTree",component:u,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},r={name:"Tasks inside tasks",render:()=>s.jsx(s.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The (+N) count includes every task inside. Close a parent task to hide what is inside."},source:{code:"<TaskTree tasks={tasks} onOpen={(id) => open(id)} />"}}}},a={name:"Dismissing a failed task",render:()=>s.jsx(s.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Failed rows have a Dismiss button and stay until you use it."},source:{code:'<TaskTree tasks={[{ id: "a", name: "Email the travel agent", status: "failed" }, { id: "b", name: "Lint", status: "done" }]} />'}}}},n={name:"Finished tasks leave on their own",render:()=>s.jsx(s.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"The finished row disappears after 4 seconds. The failed row stays."},source:{code:`<TaskTree
  tasks={rows}
  dismissAfterMs={4000}
  onDismiss={(id) => setRows((r) => r.filter((x) => x.id !== id))}
/>`}}}},G=["TasksInsideTasks","DismissingAFailedTask","FinishedTasksLeaveOnTheirOwn"];var i,t,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(k=(l=n.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};export{a as DismissingAFailedTask,n as FinishedTasksLeaveOnTheirOwn,r as TasksInsideTasks,G as __namedExportsOrder,B as default};
