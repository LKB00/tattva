import{j as o}from"./iframe-DSdOWv-_.js";import{d,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=c.get("agent-session-list"),q={title:"Assistants/AgentSessionList",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Tasks grouped by need",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Groups with no tasks are left out. Peek works on any row that has something to show."},source:{code:"<AgentSessionList sessions={sessions} />"}}}},s={name:"Reply from Peek",render:()=>o.jsx(o.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Open Peek on a task that is waiting, type a reply and send it."},source:{code:"<AgentSessionList sessions={waiting} onReply={(id, text) => send(id, text)} />"}}}},v=["TasksGroupedByNeed","ReplyFromPeek"];var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
