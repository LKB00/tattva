import{j as e}from"./iframe-DSdOWv-_.js";import{ai as w,b as x}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=x.get("glance-panel"),z={title:"Asking and showing work/GlancePanel",component:w,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"A refund case",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A Countdown headline, four facts with one edited, the rule cited with a link, and the journey with one step happening now."},source:{code:`<GlancePanel
  title="Case file"
  headline={<Countdown deadline="2026-10-27" today="2026-10-07" start="2026-09-27" label="They must reply by" />}
  facts={[
    { label: "Seller", value: "Aero Home" },
    { label: "Item", value: "Aero 12 blender" },
    { label: "Paid", value: "₹2,340", edited: true },
    { label: "Bought", value: "2 September 2026" },
  ]}
  rule={{ title: "Consumer Protection Act, 2019", cite: "Section 2(9): right to be heard and to seek redressal", href: "#rule" }}
  steps={[
    { id: "told", label: "You told me", state: "done" },
    { id: "facts", label: "Facts checked", state: "done" },
    { id: "rule", label: "Rule found", state: "now", detail: "Checking the seller's return terms." },
    { id: "sent", label: "Complaint sent", state: "next" },
    { id: "reply", label: "Their reply", state: "next" },
  ]}
  className="w-full max-w-sm rounded-card border border-line bg-surface p-4"
/>`}}}},s={name:"Steps only",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Every section is optional. With only steps, the panel is a small progress view. Use headings to rename the section."},source:{code:`<GlancePanel
  title="Progress"
  headings={{ steps: "What happens next" }}
  steps={[
    { id: "a", label: "You told me", state: "done" },
    { id: "b", label: "Facts checked", state: "now" },
    { id: "c", label: "Complaint sent", state: "next" },
  ]}
  className="w-full max-w-xs rounded-card border border-line bg-surface p-4"
/>`}}}},a={name:"Two columns beside a message list",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"On a wide screen the chat takes the main column and the panel sits on the right. ScrollEdge keeps the chat soft under the edges."},source:{code:`<div className="grid w-full max-w-3xl grid-cols-[1fr_20rem] overflow-hidden rounded-card border border-line">
  <ScrollEdge label="Conversation" className="h-96">
    <ChatList />
  </ScrollEdge>
  <GlancePanel title="Case file" headline={<CaseHeadline />} facts={facts} steps={steps} scrollable
    className="overflow-y-auto border-l border-line bg-surface p-4" />
</div>`}}}},r={name:"GlanceSheet opened from a status line",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"On a phone the page header shows a StatusLine as a button. Pressing it opens the same panel in a bottom sheet. Focus returns to the button on close."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label="Open case file"
        className="flex min-h-9 w-full cursor-pointer items-center rounded-control border border-line bg-surface px-3 text-left pointer-coarse:min-h-11">
        <StatusLine items={["Case", "Aero Home", "₹2,340", "Rule found"]} current={3} />
      </button>
      <GlanceSheet open={open} onClose={() => setOpen(false)} title="Case file"
        headline={<CaseHeadline />} facts={facts} rule={rule} steps={steps} />
    </>
  );
}`}}}},D=["ARefundCase","StepsOnly","TwoColumnsBesideAMessageList","GlanceSheetOpenedFromAStatusLine"];var o,l,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A refund case",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A Countdown headline, four facts with one edited, the rule cited with a link, and the journey with one step happening now."
      },
      source: {
        code: "<GlancePanel\\n  title=\\"Case file\\"\\n  headline={<Countdown deadline=\\"2026-10-27\\" today=\\"2026-10-07\\" start=\\"2026-09-27\\" label=\\"They must reply by\\" />}\\n  facts={[\\n    { label: \\"Seller\\", value: \\"Aero Home\\" },\\n    { label: \\"Item\\", value: \\"Aero 12 blender\\" },\\n    { label: \\"Paid\\", value: \\"₹2,340\\", edited: true },\\n    { label: \\"Bought\\", value: \\"2 September 2026\\" },\\n  ]}\\n  rule={{ title: \\"Consumer Protection Act, 2019\\", cite: \\"Section 2(9): right to be heard and to seek redressal\\", href: \\"#rule\\" }}\\n  steps={[\\n    { id: \\"told\\", label: \\"You told me\\", state: \\"done\\" },\\n    { id: \\"facts\\", label: \\"Facts checked\\", state: \\"done\\" },\\n    { id: \\"rule\\", label: \\"Rule found\\", state: \\"now\\", detail: \\"Checking the seller's return terms.\\" },\\n    { id: \\"sent\\", label: \\"Complaint sent\\", state: \\"next\\" },\\n    { id: \\"reply\\", label: \\"Their reply\\", state: \\"next\\" },\\n  ]}\\n  className=\\"w-full max-w-sm rounded-card border border-line bg-surface p-4\\"\\n/>"
      }
    }
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Steps only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every section is optional. With only steps, the panel is a small progress view. Use headings to rename the section."
      },
      source: {
        code: "<GlancePanel\\n  title=\\"Progress\\"\\n  headings={{ steps: \\"What happens next\\" }}\\n  steps={[\\n    { id: \\"a\\", label: \\"You told me\\", state: \\"done\\" },\\n    { id: \\"b\\", label: \\"Facts checked\\", state: \\"now\\" },\\n    { id: \\"c\\", label: \\"Complaint sent\\", state: \\"next\\" },\\n  ]}\\n  className=\\"w-full max-w-xs rounded-card border border-line bg-surface p-4\\"\\n/>"
      }
    }
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Two columns beside a message list",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "On a wide screen the chat takes the main column and the panel sits on the right. ScrollEdge keeps the chat soft under the edges."
      },
      source: {
        code: "<div className=\\"grid w-full max-w-3xl grid-cols-[1fr_20rem] overflow-hidden rounded-card border border-line\\">\\n  <ScrollEdge label=\\"Conversation\\" className=\\"h-96\\">\\n    <ChatList />\\n  </ScrollEdge>\\n  <GlancePanel title=\\"Case file\\" headline={<CaseHeadline />} facts={facts} steps={steps} scrollable\\n    className=\\"overflow-y-auto border-l border-line bg-surface p-4\\" />\\n</div>"
      }
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "GlanceSheet opened from a status line",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "On a phone the page header shows a StatusLine as a button. Pressing it opens the same panel in a bottom sheet. Focus returns to the button on close."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <button type=\\"button\\" onClick={() => setOpen(true)} aria-label=\\"Open case file\\"\\n        className=\\"flex min-h-9 w-full cursor-pointer items-center rounded-control border border-line bg-surface px-3 text-left pointer-coarse:min-h-11\\">\\n        <StatusLine items={[\\"Case\\", \\"Aero Home\\", \\"₹2,340\\", \\"Rule found\\"]} current={3} />\\n      </button>\\n      <GlanceSheet open={open} onClose={() => setOpen(false)} title=\\"Case file\\"\\n        headline={<CaseHeadline />} facts={facts} rule={rule} steps={steps} />\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};export{t as ARefundCase,r as GlanceSheetOpenedFromAStatusLine,s as StepsOnly,a as TwoColumnsBesideAMessageList,D as __namedExportsOrder,z as default};
