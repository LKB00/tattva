import{j as e}from"./iframe-DSdOWv-_.js";import{a as u,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=g.get("action-log"),W={title:"Assistants/ActionLog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},t={name:"A morning of chores",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Try the filter, then press Undo on the first row. It becomes Undone and the summary updates."},source:{code:`<ActionLog
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
