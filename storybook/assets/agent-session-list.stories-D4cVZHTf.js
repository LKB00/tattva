import{j as o}from"./iframe-D-pZXX8_.js";import{d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=c.get("agent-session-list"),q={title:"Assistants/AgentSessionList",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Tasks grouped by need",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Groups with no tasks are left out. Peek works on any row that has something to show."},source:{code:"<AgentSessionList sessions={sessions} />"}}}},s={name:"Reply from Peek",render:()=>o.jsx(o.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Open Peek on a task that is waiting, type a reply and send it."},source:{code:"<AgentSessionList sessions={waiting} onReply={(id, text) => send(id, text)} />"}}}},v=["TasksGroupedByNeed","ReplyFromPeek"];var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Tasks grouped by need",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Groups with no tasks are left out. Peek works on any row that has something to show."
      },
      source: {
        code: "<AgentSessionList sessions={sessions} />"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,p,m;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Reply from Peek",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open Peek on a task that is waiting, type a reply and send it."
      },
      source: {
        code: "<AgentSessionList sessions={waiting} onReply={(id, text) => send(id, text)} />"
      }
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{s as ReplyFromPeek,e as TasksGroupedByNeed,v as __namedExportsOrder,q as default};
