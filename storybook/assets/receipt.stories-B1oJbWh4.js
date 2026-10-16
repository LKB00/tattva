import{j as e}from"./iframe-DSdOWv-_.js";import{b5 as h,b as f}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=f.get("receipt"),D={title:"Asking and showing work/Receipt",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Closed",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The default is one line. The check is decorative; the title says what happened."},source:{code:`<div className="w-full max-w-md">
  <Receipt title="Confirmed the facts" meta="₹2,340">
    <p className="text-body leading-5 text-fg-muted">Order #48213, kettle, arrived damaged, paid ₹2,340.</p>
  </Receipt>
</div>`}}}},r={name:"Open",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Use defaultOpen to start open. The full card shows below the line, and the chevron turns."},source:{code:`<div className="w-full max-w-md">
  <Receipt title="Confirmed the facts" meta="Today" defaultOpen>
    <p className="text-body leading-5 text-fg-muted">Order #48213, kettle, arrived damaged, paid ₹2,340.</p>
  </Receipt>
</div>`}}}},a={name:"Inside a thread",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Settled cards become Receipts between messages, so the conversation stays short. The second one is controlled."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full max-w-md flex-col gap-3 text-body leading-5">
      <p className="self-end rounded-card bg-sunken px-4 py-2">My kettle arrived broken.</p>
      <Receipt title="Read your message" meta="8 steps">
        <p className="text-fg-muted">The agent read your message and found the order.</p>
      </Receipt>
      <Receipt title="Confirmed the facts" meta="₹2,340" open={open} onOpenChange={setOpen}>
        <p className="text-fg-muted">Order #48213, kettle, arrived damaged, paid ₹2,340.</p>
      </Receipt>
      <p className="rounded-card border border-line px-4 py-2">I have sent the request. You will hear back in two days.</p>
    </div>
  );
}`}}}},G=["Closed","Open","InsideAThread"];var s,d,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Closed",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default is one line. The check is decorative; the title says what happened."
      },
      source: {
        code: "<div className=\\"w-full max-w-md\\">\\n  <Receipt title=\\"Confirmed the facts\\" meta=\\"₹2,340\\">\\n    <p className=\\"text-body leading-5 text-fg-muted\\">Order #48213, kettle, arrived damaged, paid ₹2,340.</p>\\n  </Receipt>\\n</div>"
      }
    }
  }
}`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var p,i,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Open",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use defaultOpen to start open. The full card shows below the line, and the chevron turns."
      },
      source: {
        code: "<div className=\\"w-full max-w-md\\">\\n  <Receipt title=\\"Confirmed the facts\\" meta=\\"Today\\" defaultOpen>\\n    <p className=\\"text-body leading-5 text-fg-muted\\">Order #48213, kettle, arrived damaged, paid ₹2,340.</p>\\n  </Receipt>\\n</div>"
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Inside a thread",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Settled cards become Receipts between messages, so the conversation stays short. The second one is controlled."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div className=\\"flex w-full max-w-md flex-col gap-3 text-body leading-5\\">\\n      <p className=\\"self-end rounded-card bg-sunken px-4 py-2\\">My kettle arrived broken.</p>\\n      <Receipt title=\\"Read your message\\" meta=\\"8 steps\\">\\n        <p className=\\"text-fg-muted\\">The agent read your message and found the order.</p>\\n      </Receipt>\\n      <Receipt title=\\"Confirmed the facts\\" meta=\\"₹2,340\\" open={open} onOpenChange={setOpen}>\\n        <p className=\\"text-fg-muted\\">Order #48213, kettle, arrived damaged, paid ₹2,340.</p>\\n      </Receipt>\\n      <p className=\\"rounded-card border border-line px-4 py-2\\">I have sent the request. You will hear back in two days.</p>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{n as Closed,a as InsideAThread,r as Open,G as __namedExportsOrder,D as default};
