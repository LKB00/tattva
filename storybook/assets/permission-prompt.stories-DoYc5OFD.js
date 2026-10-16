import{j as e}from"./iframe-DSdOWv-_.js";import{b as T}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import{P as k}from"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=T.get("permission-prompt"),$={title:"Assistants/PermissionPrompt",component:k,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},t={name:"Saving a choice for next time",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Choose Allow always to see what the saved choice covers before you confirm."},source:{code:`<PermissionPrompt
  tool="Send an email"
  description="Send the weekly update to your team"
  target="To: team@example.com"
  ruleScope="Emails to team@example.com"
  ruleCovers={["Emails to team@example.com"]}
  ruleLifetime="Saved for this project"
/>`}}}},r={name:"A request with several parts",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"When a request has several parts, each part is listed, and a saved choice covers each one."},source:{code:`<PermissionPrompt
  tool="Book a trip"
  description="Book the flight and the hotel"
  target={["Flight to Lisbon", "Hotel in Lisbon"]}
  requestedBy="travel-helper"
  ruleScope="Bookings in Lisbon"
  ruleCovers={["Flights to Lisbon", "Hotels in Lisbon"]}
  ruleLifetime="Saved for this project"
/>`}}}},n={name:"Allow once only",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"When a saved choice cannot show everything it would allow, offer only Allow once and say why."},source:{code:`<PermissionPrompt
  tool="Change a setting"
  description="Change your payment details"
  target="Account > Payment"
  reason="This change needs your approval"
  onceOnlyReason="You cannot save this choice for next time."
/>`}}}},s={name:"Allow for this session",render:()=>e.jsx(e.Fragment,{children:o.examples[3].render()}),parameters:{docs:{description:{story:"Add sessionScope to offer a middle choice. It lasts until the session ends and saves nothing for later."},source:{code:`<PermissionPrompt
  tool="Edit files"
  description="Update the budget spreadsheet"
  target="budget-2026.xlsx"
  sessionScope="Edits to budget-2026.xlsx"
  ruleScope="Edits to spreadsheets"
/>`}}}},a={name:"Keyboard shortcuts",render:()=>e.jsx(e.Fragment,{children:o.examples[4].render()}),parameters:{docs:{description:{story:"Click inside the prompt, then press N to open the note box or Esc to deny. The line below shows what you chose."},source:{code:`<PermissionPrompt
  tool="Delete files"
  description="Clear out old downloads"
  target="Downloads/old-photos"
  onDecide={(d) => console.log(d.choice, d.note)}
/>`}}}},i={name:"After you choose",render:()=>e.jsx(e.Fragment,{children:o.examples[5].render()}),parameters:{docs:{description:{story:"The prompt shrinks to a short summary. These are the three results."},source:{code:`<PermissionPrompt tool="Send an email" description="Send the weekly update" target="To: team@example.com" ruleScope="Emails to team@example.com" state="allowed-once" />
<PermissionPrompt tool="Send an email" description="Send the weekly update" target="To: team@example.com" ruleScope="Emails to team@example.com" state="allowed-rule" />
<PermissionPrompt tool="Send an email" description="Send the weekly update" target="To: team@example.com" ruleScope="Emails to team@example.com" state="denied" />`}}}},ee=["SavingAChoiceForNextTime","ARequestWithSeveralParts","AllowOnceOnly","AllowForThisSession","KeyboardShortcuts","AfterYouChoose"];var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Saving a choice for next time",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Choose Allow always to see what the saved choice covers before you confirm."
      },
      source: {
        code: "<PermissionPrompt\\n  tool=\\"Send an email\\"\\n  description=\\"Send the weekly update to your team\\"\\n  target=\\"To: team@example.com\\"\\n  ruleScope=\\"Emails to team@example.com\\"\\n  ruleCovers={[\\"Emails to team@example.com\\"]}\\n  ruleLifetime=\\"Saved for this project\\"\\n/>"
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "A request with several parts",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When a request has several parts, each part is listed, and a saved choice covers each one."
      },
      source: {
        code: "<PermissionPrompt\\n  tool=\\"Book a trip\\"\\n  description=\\"Book the flight and the hotel\\"\\n  target={[\\"Flight to Lisbon\\", \\"Hotel in Lisbon\\"]}\\n  requestedBy=\\"travel-helper\\"\\n  ruleScope=\\"Bookings in Lisbon\\"\\n  ruleCovers={[\\"Flights to Lisbon\\", \\"Hotels in Lisbon\\"]}\\n  ruleLifetime=\\"Saved for this project\\"\\n/>"
      }
    }
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,y,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Allow once only",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When a saved choice cannot show everything it would allow, offer only Allow once and say why."
      },
      source: {
        code: "<PermissionPrompt\\n  tool=\\"Change a setting\\"\\n  description=\\"Change your payment details\\"\\n  target=\\"Account > Payment\\"\\n  reason=\\"This change needs your approval\\"\\n  onceOnlyReason=\\"You cannot save this choice for next time.\\"\\n/>"
      }
    }
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,S,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Allow for this session",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add sessionScope to offer a middle choice. It lasts until the session ends and saves nothing for later."
      },
      source: {
        code: "<PermissionPrompt\\n  tool=\\"Edit files\\"\\n  description=\\"Update the budget spreadsheet\\"\\n  target=\\"budget-2026.xlsx\\"\\n  sessionScope=\\"Edits to budget-2026.xlsx\\"\\n  ruleScope=\\"Edits to spreadsheets\\"\\n/>"
      }
    }
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,P,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Keyboard shortcuts",
  render: () => <>{doc.examples[4].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Click inside the prompt, then press N to open the note box or Esc to deny. The line below shows what you chose."
      },
      source: {
        code: "<PermissionPrompt\\n  tool=\\"Delete files\\"\\n  description=\\"Clear out old downloads\\"\\n  target=\\"Downloads/old-photos\\"\\n  onDecide={(d) => console.log(d.choice, d.note)}\\n/>"
      }
    }
  }
}`,...(v=(P=a.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var b,A,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "After you choose",
  render: () => <>{doc.examples[5].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The prompt shrinks to a short summary. These are the three results."
      },
      source: {
        code: "<PermissionPrompt tool=\\"Send an email\\" description=\\"Send the weekly update\\" target=\\"To: team@example.com\\" ruleScope=\\"Emails to team@example.com\\" state=\\"allowed-once\\" />\\n<PermissionPrompt tool=\\"Send an email\\" description=\\"Send the weekly update\\" target=\\"To: team@example.com\\" ruleScope=\\"Emails to team@example.com\\" state=\\"allowed-rule\\" />\\n<PermissionPrompt tool=\\"Send an email\\" description=\\"Send the weekly update\\" target=\\"To: team@example.com\\" ruleScope=\\"Emails to team@example.com\\" state=\\"denied\\" />"
      }
    }
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};export{r as ARequestWithSeveralParts,i as AfterYouChoose,s as AllowForThisSession,n as AllowOnceOnly,a as KeyboardShortcuts,t as SavingAChoiceForNextTime,ee as __namedExportsOrder,$ as default};
