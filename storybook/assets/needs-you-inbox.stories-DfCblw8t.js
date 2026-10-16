import{j as e}from"./iframe-DSdOWv-_.js";import{aM as g,b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=h.get("needs-you-inbox"),_={title:"Assistants/NeedsYouInbox",component:g,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Four things are waiting",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press an action to handle an item. It leaves the list."},source:{code:`<NeedsYouInbox
  items={[
    { id: "1", run: "Trip plan", kind: "question", urgency: "now", need: "Pick a hotel for Friday night", waited: "12 min", actionLabel: "Answer" },
    { id: "3", run: "Weekly report", kind: "failure", urgency: "soon", need: "Could not open the sales spreadsheet", waited: "1 hour", actionLabel: "Fix" },
    { id: "4", run: "Shop product pages", kind: "review", urgency: "later", need: "18 new descriptions are ready to read", waited: "Yesterday", actionLabel: "Open" },
  ]}
  onAction={(item) => openItem(item.id)}
/>`}}}},o={name:"Nothing is waiting",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"An empty inbox is good news. Say so."},source:{code:"<NeedsYouInbox items={[]} />"}}}},t={name:"A single urgent item",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Only the urgent group gets the amber outline."},source:{code:'<NeedsYouInbox items={[{ id: "2", run: "Invoice cleanup", kind: "approval", urgency: "now", need: "Delete 12 old invoices", waited: "3 min", actionLabel: "Review" }]} />'}}}},M=["FourThingsAreWaiting","NothingIsWaiting","ASingleUrgentItem"];var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Four things are waiting",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press an action to handle an item. It leaves the list."
      },
      source: {
        code: "<NeedsYouInbox\\n  items={[\\n    { id: \\"1\\", run: \\"Trip plan\\", kind: \\"question\\", urgency: \\"now\\", need: \\"Pick a hotel for Friday night\\", waited: \\"12 min\\", actionLabel: \\"Answer\\" },\\n    { id: \\"3\\", run: \\"Weekly report\\", kind: \\"failure\\", urgency: \\"soon\\", need: \\"Could not open the sales spreadsheet\\", waited: \\"1 hour\\", actionLabel: \\"Fix\\" },\\n    { id: \\"4\\", run: \\"Shop product pages\\", kind: \\"review\\", urgency: \\"later\\", need: \\"18 new descriptions are ready to read\\", waited: \\"Yesterday\\", actionLabel: \\"Open\\" },\\n  ]}\\n  onAction={(item) => openItem(item.id)}\\n/>"
      }
    }
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Nothing is waiting",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An empty inbox is good news. Say so."
      },
      source: {
        code: "<NeedsYouInbox items={[]} />"
      }
    }
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A single urgent item",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Only the urgent group gets the amber outline."
      },
      source: {
        code: "<NeedsYouInbox items={[{ id: \\"2\\", run: \\"Invoice cleanup\\", kind: \\"approval\\", urgency: \\"now\\", need: \\"Delete 12 old invoices\\", waited: \\"3 min\\", actionLabel: \\"Review\\" }]} />"
      }
    }
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{t as ASingleUrgentItem,r as FourThingsAreWaiting,o as NothingIsWaiting,M as __namedExportsOrder,_ as default};
