import{j as t}from"./iframe-DSdOWv-_.js";import{aH as p,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=c.get("message-queue"),_={title:"Conversation/MessageQueue",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A line you can reorder",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Move, send and delete change the list. Send now removes the message as if it had started."},source:{code:`<MessageQueue
  items={items}
  sendNowShortcut="Ctrl Enter"
  onSendNow={(id) => setItems((l) => l.filter((m) => m.id !== id))}
  onMove={move}
  onDelete={(id) => setItems((l) => l.filter((m) => m.id !== id))}
/>`}}}},r={name:"Nothing waiting",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"With no messages, a short note shows instead."},source:{code:"<MessageQueue items={[]} />"}}}},q=["ALineYouCanReorder","NothingWaiting"];var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A line you can reorder",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Move, send and delete change the list. Send now removes the message as if it had started."
      },
      source: {
        code: "<MessageQueue\\n  items={items}\\n  sendNowShortcut=\\"Ctrl Enter\\"\\n  onSendNow={(id) => setItems((l) => l.filter((m) => m.id !== id))}\\n  onMove={move}\\n  onDelete={(id) => setItems((l) => l.filter((m) => m.id !== id))}\\n/>"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,a,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Nothing waiting",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no messages, a short note shows instead."
      },
      source: {
        code: "<MessageQueue items={[]} />"
      }
    }
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};export{e as ALineYouCanReorder,r as NothingWaiting,q as __namedExportsOrder,_ as default};
