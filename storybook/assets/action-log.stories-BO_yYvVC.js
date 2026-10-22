import{j as e}from"./iframe-C8v_uZy_.js";import{a as u,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=g.get("action-log"),W={title:"Assistants/ActionLog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},t={name:"A morning of chores",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Try the filter, then press Undo on the first row. It becomes Undone and the summary updates."},source:{code:`<ActionLog
  items={[
    { id: "1", action: "Moved 12 receipts to the Taxes folder", actor: "Home helper", status: "done", time: "10:42", approvedBy: "you", undoMinutes: 8 },
    { id: "2", action: "Sent the invoice to Dana", actor: "Home helper", status: "done", time: "10:40", approvedBy: "rule", notUndoableReason: "The email was already sent." },
    { id: "3", action: "Renamed 40 photos from the trip", actor: "Photo helper", status: "done", time: "10:31", approvedBy: "check", undoMinutes: 0 },
    { id: "4", action: "Booked the hotel in Lisbon", actor: "Travel helper", status: "failed", time: "10:12", approvedBy: "you" },
    { id: "5", action: "Paid the electricity bill", actor: "Home helper", status: "waiting", time: "10:45" },
  ]}
  onUndo={(id) => console.log("undo", id)}
/>`}}}},n={name:"Starting on failed actions",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Open the log filtered to what went wrong."},source:{code:'<ActionLog items={items} defaultFilter="failed" />'}}}},r={name:"Nothing to show",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"When the filter matches no rows, the log says so in words."},source:{code:"<ActionLog items={[]} />"}}}},_=["AMorningOfChores","StartingOnFailedActions","NothingToShow"];var s,i,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A morning of chores",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try the filter, then press Undo on the first row. It becomes Undone and the summary updates."
      },
      source: {
        code: "<ActionLog\\n  items={[\\n    { id: \\"1\\", action: \\"Moved 12 receipts to the Taxes folder\\", actor: \\"Home helper\\", status: \\"done\\", time: \\"10:42\\", approvedBy: \\"you\\", undoMinutes: 8 },\\n    { id: \\"2\\", action: \\"Sent the invoice to Dana\\", actor: \\"Home helper\\", status: \\"done\\", time: \\"10:40\\", approvedBy: \\"rule\\", notUndoableReason: \\"The email was already sent.\\" },\\n    { id: \\"3\\", action: \\"Renamed 40 photos from the trip\\", actor: \\"Photo helper\\", status: \\"done\\", time: \\"10:31\\", approvedBy: \\"check\\", undoMinutes: 0 },\\n    { id: \\"4\\", action: \\"Booked the hotel in Lisbon\\", actor: \\"Travel helper\\", status: \\"failed\\", time: \\"10:12\\", approvedBy: \\"you\\" },\\n    { id: \\"5\\", action: \\"Paid the electricity bill\\", actor: \\"Home helper\\", status: \\"waiting\\", time: \\"10:45\\" },\\n  ]}\\n  onUndo={(id) => console.log(\\"undo\\", id)}\\n/>"
      }
    }
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Starting on failed actions",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open the log filtered to what went wrong."
      },
      source: {
        code: "<ActionLog items={items} defaultFilter=\\"failed\\" />"
      }
    }
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Nothing to show",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When the filter matches no rows, the log says so in words."
      },
      source: {
        code: "<ActionLog items={[]} />"
      }
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{t as AMorningOfChores,r as NothingToShow,n as StartingOnFailedActions,_ as __namedExportsOrder,W as default};
