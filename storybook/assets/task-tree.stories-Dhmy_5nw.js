import{j as e}from"./iframe-J6_2PHET.js";import{bF as h,b as k}from"./registry-DJg46al6.js";import{a as t}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=k.get("task-tree"),J={title:"Assistants/TaskTree",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Tasks inside tasks",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The (+N) count includes every task inside. Close a parent task to hide what is inside."},source:t("TaskTree")}}},a={name:"Dismissing a failed task",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Failed rows have a Dismiss button and stay until you use it."},source:t("TaskTree")}}},o={name:"Finished tasks leave on their own",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"The finished row disappears after 4 seconds. The failed row stays."},source:t("TaskTree")}}},K=["TasksInsideTasks","DismissingAFailedTask","FinishedTasksLeaveOnTheirOwn"];var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Tasks inside tasks",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The (+N) count includes every task inside. Close a parent task to hide what is inside."
      },
      source: proSource("TaskTree")
    }
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Dismissing a failed task",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Failed rows have a Dismiss button and stay until you use it."
      },
      source: proSource("TaskTree")
    }
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,T,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Finished tasks leave on their own",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The finished row disappears after 4 seconds. The failed row stays."
      },
      source: proSource("TaskTree")
    }
  }
}`,...(l=(T=o.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};export{a as DismissingAFailedTask,o as FinishedTasksLeaveOnTheirOwn,r as TasksInsideTasks,K as __namedExportsOrder,J as default};
