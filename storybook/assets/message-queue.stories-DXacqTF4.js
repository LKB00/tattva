import{j as t}from"./iframe-C8v_uZy_.js";import{aL as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=c.get("message-queue"),_={title:"Conversation/MessageQueue",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A line you can reorder",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Move, send and delete change the list. Send now removes the message as if it had started."},source:{code:`<MessageQueue
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
