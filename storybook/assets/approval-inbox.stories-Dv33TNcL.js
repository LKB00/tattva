import{j as e}from"./iframe-C8v_uZy_.js";import{i as g,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=h.get("approval-inbox"),_={title:"Assistants/ApprovalInbox",component:g,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Four things are waiting",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press an action to handle an item. It leaves the list."},source:{code:`<ApprovalInbox
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
