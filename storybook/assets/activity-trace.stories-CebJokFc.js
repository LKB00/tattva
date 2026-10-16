import{j as e}from"./iframe-DSdOWv-_.js";import{c as f,b as w}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=w.get("activity-trace"),G={title:"Asking and showing work/ActivityTrace",component:f,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Folded, then open",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Folded, the trace is one line. Press it to see every step. The second trace starts open."},source:{code:`const steps = [
  { id: "1", actor: "ai", title: "Read your message", detail: "You said the kettle arrived with a cracked lid." },
  { id: "2", actor: "rule", title: "Looked up the return window", detail: "Damaged items can be returned within 30 days." },
  { id: "3", actor: "calculated", title: "Worked out the refund", detail: "₹2,340 minus ₹0 shipping = ₹2,340" },
  { id: "4", actor: "check", title: "Checked the amount against the order" },
];

<div className="space-y-3">
  <ActivityTrace steps={steps} summary="Read your message · 4 steps" />
  <ActivityTrace steps={steps} summary="Read your message · 4 steps" defaultOpen />
</div>`}}}},s={name:"Streaming",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"A step arrives every 700 milliseconds. While streaming the list is open, the newest step is marked running, and each row is announced. At the end the summary changes and the person can fold it. With reduced motion on, rows appear without sliding."},source:{code:`function Example() {
  const [count, setCount] = useState(1);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (count >= liveSteps.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 700);
    return () => clearTimeout(t);
  }, [count, run]);
  const streaming = count < liveSteps.length;
  const shown = liveSteps.slice(0, count).map((s, i) => (streaming && i === count - 1 ? { ...s, status: "running" as const } : s));
  return (
    <div className="space-y-3">
      <ActivityTrace steps={shown} streaming={streaming} summary={streaming ? "Working on it…" : \`Finished · \${liveSteps.length} steps\`} />
      <Button variant="secondary" size="sm" onClick={() => { setCount(1); setRun((r) => r + 1); }}>Restart</Button>
    </div>
  );
}`}}}},r={name:"A failed step",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"A failed step shows an X, the word Failed and a detail line. Pending steps show an empty circle. The icons and words carry the meaning, not the colour."},source:{code:`<ActivityTrace defaultOpen summary="Could not finish · 3 steps" steps={[
  { id: "1", actor: "ai", title: "Read your message" },
  { id: "2", actor: "rule", title: "Looked up the return window", status: "failed", detail: "The rule sheet could not be reached. Try again." },
  { id: "3", actor: "calculated", title: "Work out the refund", status: "pending" },
]} />`}}}},a={name:"Controlled",render:()=>e.jsx(e.Fragment,{children:t.examples[3].render()}),parameters:{docs:{description:{story:"Pass open and onOpenChange when the parent needs to know, for example to fold every trace at once."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <ActivityTrace steps={steps} summary="Read your message · 4 steps" open={open} onOpenChange={setOpen} />
      <p className="text-small leading-4 text-fg-muted">The parent says it is {open ? "open" : "folded"}.</p>
    </div>
  );
}`}}}},H=["FoldedThenOpen","Streaming","AFailedStep","Controlled"];var o,i,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Folded, then open",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Folded, the trace is one line. Press it to see every step. The second trace starts open."
      },
      source: {
        code: "const steps = [\\n  { id: \\"1\\", actor: \\"ai\\", title: \\"Read your message\\", detail: \\"You said the kettle arrived with a cracked lid.\\" },\\n  { id: \\"2\\", actor: \\"rule\\", title: \\"Looked up the return window\\", detail: \\"Damaged items can be returned within 30 days.\\" },\\n  { id: \\"3\\", actor: \\"calculated\\", title: \\"Worked out the refund\\", detail: \\"₹2,340 minus ₹0 shipping = ₹2,340\\" },\\n  { id: \\"4\\", actor: \\"check\\", title: \\"Checked the amount against the order\\" },\\n];\\n\\n<div className=\\"space-y-3\\">\\n  <ActivityTrace steps={steps} summary=\\"Read your message · 4 steps\\" />\\n  <ActivityTrace steps={steps} summary=\\"Read your message · 4 steps\\" defaultOpen />\\n</div>"
      }
    }
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Streaming",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A step arrives every 700 milliseconds. While streaming the list is open, the newest step is marked running, and each row is announced. At the end the summary changes and the person can fold it. With reduced motion on, rows appear without sliding."
      },
      source: {
        code: "function Example() {\\n  const [count, setCount] = useState(1);\\n  const [run, setRun] = useState(0);\\n  useEffect(() => {\\n    if (count >= liveSteps.length) return;\\n    const t = setTimeout(() => setCount((c) => c + 1), 700);\\n    return () => clearTimeout(t);\\n  }, [count, run]);\\n  const streaming = count < liveSteps.length;\\n  const shown = liveSteps.slice(0, count).map((s, i) => (streaming && i === count - 1 ? { ...s, status: \\"running\\" as const } : s));\\n  return (\\n    <div className=\\"space-y-3\\">\\n      <ActivityTrace steps={shown} streaming={streaming} summary={streaming ? \\"Working on it…\\" : \`Finished · \${liveSteps.length} steps\`} />\\n      <Button variant=\\"secondary\\" size=\\"sm\\" onClick={() => { setCount(1); setRun((r) => r + 1); }}>Restart</Button>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,l,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "A failed step",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A failed step shows an X, the word Failed and a detail line. Pending steps show an empty circle. The icons and words carry the meaning, not the colour."
      },
      source: {
        code: "<ActivityTrace defaultOpen summary=\\"Could not finish · 3 steps\\" steps={[\\n  { id: \\"1\\", actor: \\"ai\\", title: \\"Read your message\\" },\\n  { id: \\"2\\", actor: \\"rule\\", title: \\"Looked up the return window\\", status: \\"failed\\", detail: \\"The rule sheet could not be reached. Try again.\\" },\\n  { id: \\"3\\", actor: \\"calculated\\", title: \\"Work out the refund\\", status: \\"pending\\" },\\n]} />"
      }
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Controlled",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass open and onOpenChange when the parent needs to know, for example to fold every trace at once."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div className=\\"space-y-3\\">\\n      <ActivityTrace steps={steps} summary=\\"Read your message · 4 steps\\" open={open} onOpenChange={setOpen} />\\n      <p className=\\"text-small leading-4 text-fg-muted\\">The parent says it is {open ? \\"open\\" : \\"folded\\"}.</p>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};export{r as AFailedStep,a as Controlled,n as FoldedThenOpen,s as Streaming,H as __namedExportsOrder,G as default};
