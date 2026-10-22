import{j as o}from"./iframe-C8v_uZy_.js";import{d,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=c.get("agent-session-list"),q={title:"Assistants/AgentSessionList",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Tasks grouped by need",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Groups with no tasks are left out. Peek works on any row that has something to show."},source:{code:"<AgentSessionList sessions={sessions} />"}}}},s={name:"Reply from Peek",render:()=>o.jsx(o.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Open Peek on a task that is waiting, type a reply and send it."},source:{code:"<AgentSessionList sessions={waiting} onReply={(id, text) => send(id, text)} />"}}}},v=["TasksGroupedByNeed","ReplyFromPeek"];var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
