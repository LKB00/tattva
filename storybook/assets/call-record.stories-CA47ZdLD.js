import{j as e}from"./iframe-D-pZXX8_.js";import{C as h,b as f}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=f.get("call-record"),W={title:"Voice and audio/CallRecord",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Completed call with evidence",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The AI says the goal was met and why. Show in transcript marks the line it is based on. Switch the cost to Usage to see what was used."},source:{code:`<CallRecord
  title="Call with Hartley Home assistant"
  status="completed"
  startedAt="8 Oct, 14:02"
  duration="1:04"
  endedReason="Caller hung up after the refund"
  disclosureGiven
  consentRecorded
  outcome={{ verdict: "success", rationale: "The caller asked for a refund and the agent refunded £24.", evidenceLineIds: ["l5"] }}
  data={{ "Order": "40-2219", "Reason": "Cracked lid", "Refund": "£24" }}
  cost={cost}
  currency="GBP"
  transcript={transcript}
/>`}}}},n={name:"Needs you: no AI disclosure",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The agent never said it was an AI. That is amber, because a person must fix the greeting. The verdict is unsure, which stays neutral."},source:{code:`<CallRecord
  status="transferred"
  startedAt="8 Oct, 09:47"
  duration="3:21"
  endedReason="Transferred to Priya in returns"
  disclosureGiven={false}
  consentRecorded
  outcome={{ verdict: "unknown", rationale: "The caller was moved to a person before the problem was settled." }}
/>`}}}},s={name:"Live and failed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"A live call has no verdict yet and its cost is so far. A failed call says why in words."},source:{code:`<CallRecord status="live" startedAt="8 Oct, 15:30" duration="0:42" endedReason="" cost={{ total: 0.12, items }} />
<CallRecord status="failed" startedAt="8 Oct, 11:12" duration="0:08" endedReason="The voice service did not answer"
  outcome={{ verdict: "failure", rationale: "The call dropped before the agent spoke." }} />`}}}},Y=["CompletedCallWithEvidence","NeedsYouNoAIDisclosure","LiveAndFailed"];var a,o,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Completed call with evidence",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The AI says the goal was met and why. Show in transcript marks the line it is based on. Switch the cost to Usage to see what was used."
      },
      source: {
        code: "<CallRecord\\n  title=\\"Call with Hartley Home assistant\\"\\n  status=\\"completed\\"\\n  startedAt=\\"8 Oct, 14:02\\"\\n  duration=\\"1:04\\"\\n  endedReason=\\"Caller hung up after the refund\\"\\n  disclosureGiven\\n  consentRecorded\\n  outcome={{ verdict: \\"success\\", rationale: \\"The caller asked for a refund and the agent refunded £24.\\", evidenceLineIds: [\\"l5\\"] }}\\n  data={{ \\"Order\\": \\"40-2219\\", \\"Reason\\": \\"Cracked lid\\", \\"Refund\\": \\"£24\\" }}\\n  cost={cost}\\n  currency=\\"GBP\\"\\n  transcript={transcript}\\n/>"
      }
    }
  }
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Needs you: no AI disclosure",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The agent never said it was an AI. That is amber, because a person must fix the greeting. The verdict is unsure, which stays neutral."
      },
      source: {
        code: "<CallRecord\\n  status=\\"transferred\\"\\n  startedAt=\\"8 Oct, 09:47\\"\\n  duration=\\"3:21\\"\\n  endedReason=\\"Transferred to Priya in returns\\"\\n  disclosureGiven={false}\\n  consentRecorded\\n  outcome={{ verdict: \\"unknown\\", rationale: \\"The caller was moved to a person before the problem was settled.\\" }}\\n/>"
      }
    }
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Live and failed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A live call has no verdict yet and its cost is so far. A failed call says why in words."
      },
      source: {
        code: "<CallRecord status=\\"live\\" startedAt=\\"8 Oct, 15:30\\" duration=\\"0:42\\" endedReason=\\"\\" cost={{ total: 0.12, items }} />\\n<CallRecord status=\\"failed\\" startedAt=\\"8 Oct, 11:12\\" duration=\\"0:08\\" endedReason=\\"The voice service did not answer\\"\\n  outcome={{ verdict: \\"failure\\", rationale: \\"The call dropped before the agent spoke.\\" }} />"
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{t as CompletedCallWithEvidence,s as LiveAndFailed,n as NeedsYouNoAIDisclosure,Y as __namedExportsOrder,W as default};
