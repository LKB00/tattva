import{j as t}from"./iframe-D-pZXX8_.js";import{aQ as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=c.get("message-queue"),_={title:"Conversation/MessageQueue",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A line you can reorder",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Move, send and delete change the list. Send now removes the message as if it had started."},source:{code:`<MessageQueue
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
