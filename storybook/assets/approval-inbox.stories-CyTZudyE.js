import{j as e}from"./iframe-D-pZXX8_.js";import{i as g,b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=h.get("approval-inbox"),_={title:"Assistants/ApprovalInbox",component:g,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Four things are waiting",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press an action to handle an item. It leaves the list."},source:{code:`<ApprovalInbox
  items={[
    { id: "1", run: "Trip plan", kind: "question", urgency: "now", need: "Pick a hotel for Friday night", waited: "12 min", actionLabel: "Answer" },
    { id: "3", run: "Weekly report", kind: "failure", urgency: "soon", need: "Could not open the sales spreadsheet", waited: "1 hour", actionLabel: "Fix" },
    { id: "4", run: "Shop product pages", kind: "review", urgency: "later", need: "18 new descriptions are ready to read", waited: "Yesterday", actionLabel: "Open" },
  ]}
  onAction={(item) => openItem(item.id)}
/>`}}}},o={name:"Nothing is waiting",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"An empty inbox is good news. Say so."},source:{code:"<ApprovalInbox items={[]} />"}}}},t={name:"A single urgent item",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Only the urgent group gets the amber outline."},source:{code:'<ApprovalInbox items={[{ id: "2", run: "Invoice cleanup", kind: "approval", urgency: "now", need: "Delete 12 old invoices", waited: "3 min", actionLabel: "Review" }]} />'}}}},z=["FourThingsAreWaiting","NothingIsWaiting","ASingleUrgentItem"];var i,a,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Four things are waiting",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press an action to handle an item. It leaves the list."
      },
      source: {
        code: "<ApprovalInbox\\n  items={[\\n    { id: \\"1\\", run: \\"Trip plan\\", kind: \\"question\\", urgency: \\"now\\", need: \\"Pick a hotel for Friday night\\", waited: \\"12 min\\", actionLabel: \\"Answer\\" },\\n    { id: \\"3\\", run: \\"Weekly report\\", kind: \\"failure\\", urgency: \\"soon\\", need: \\"Could not open the sales spreadsheet\\", waited: \\"1 hour\\", actionLabel: \\"Fix\\" },\\n    { id: \\"4\\", run: \\"Shop product pages\\", kind: \\"review\\", urgency: \\"later\\", need: \\"18 new descriptions are ready to read\\", waited: \\"Yesterday\\", actionLabel: \\"Open\\" },\\n  ]}\\n  onAction={(item) => openItem(item.id)}\\n/>"
      }
    }
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Nothing is waiting",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An empty inbox is good news. Say so."
      },
      source: {
        code: "<ApprovalInbox items={[]} />"
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A single urgent item",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Only the urgent group gets the amber outline."
      },
      source: {
        code: "<ApprovalInbox items={[{ id: \\"2\\", run: \\"Invoice cleanup\\", kind: \\"approval\\", urgency: \\"now\\", need: \\"Delete 12 old invoices\\", waited: \\"3 min\\", actionLabel: \\"Review\\" }]} />"
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{t as ASingleUrgentItem,r as FourThingsAreWaiting,o as NothingIsWaiting,z as __namedExportsOrder,_ as default};
