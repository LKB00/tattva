import{j as e}from"./iframe-DSdOWv-_.js";import{bl as h,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=g.get("sheet"),P={title:"Navigation and overlays/Sheet",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Bottom sheet with a case summary",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Opens from the bottom edge. Drag the handle down, press Escape, tap the scrim or use the Close handle to dismiss it."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open case summary</Button>
      <Sheet open={open} onClose={() => setOpen(false)} title="Case summary"
        footer={<Button onClick={() => setOpen(false)}>Done</Button>}>
        <div className="flex flex-col gap-3">
          <Countdown deadline="2026-10-27" today="2026-10-07" start="2026-09-27" label="They must reply by" />
          <p className="text-fg-muted">Flipkart, <Money value={2340} calculated /> refund requested.</p>
        </div>
      </Sheet>
    </>
  );
}`}}}},o={name:"Side sheet on the right",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Full height, sliding in from the right. Use size to choose the width."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open details</Button>
      <Sheet open={open} onClose={() => setOpen(false)} side="right" title="Order details" size="sm">
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <dt className="text-fg-muted">Item</dt><dd>Aero 12 blender</dd>
          <dt className="text-fg-muted">Bought</dt><dd><Mono>2 Sep 2026</Mono></dd>
          <dt className="text-fg-muted">Paid</dt><dd><Money value={2340} /></dd>
        </dl>
      </Sheet>
    </>
  );
}`}}}},s={name:"Not dismissible, with a footer",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Escape, the scrim and dragging do nothing, and there is no Close control. Only the footer buttons close it."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Review before sending</Button>
      <Sheet open={open} onClose={() => setOpen(false)} dismissible={false} title="Send this email?"
        footer={<>
          <Button variant="secondary" onClick={() => setOpen(false)}>Not yet</Button>
          <Button onClick={() => setOpen(false)}>Send</Button>
        </>}>
        <p>Nothing is sent until you press Send. Escape, a tap outside and dragging do not close this sheet.</p>
      </Sheet>
    </>
  );
}`}}}},U=["BottomSheetWithACaseSummary","SideSheetOnTheRight","NotDismissibleWithAFooter"];var r,a,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Bottom sheet with a case summary",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Opens from the bottom edge. Drag the handle down, press Escape, tap the scrim or use the Close handle to dismiss it."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Open case summary</Button>\\n      <Sheet open={open} onClose={() => setOpen(false)} title=\\"Case summary\\"\\n        footer={<Button onClick={() => setOpen(false)}>Done</Button>}>\\n        <div className=\\"flex flex-col gap-3\\">\\n          <Countdown deadline=\\"2026-10-27\\" today=\\"2026-10-07\\" start=\\"2026-09-27\\" label=\\"They must reply by\\" />\\n          <p className=\\"text-fg-muted\\">Flipkart, <Money value={2340} calculated /> refund requested.</p>\\n        </div>\\n      </Sheet>\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,p,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Side sheet on the right",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Full height, sliding in from the right. Use size to choose the width."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Open details</Button>\\n      <Sheet open={open} onClose={() => setOpen(false)} side=\\"right\\" title=\\"Order details\\" size=\\"sm\\">\\n        <dl className=\\"grid grid-cols-[auto_1fr] gap-x-4 gap-y-2\\">\\n          <dt className=\\"text-fg-muted\\">Item</dt><dd>Aero 12 blender</dd>\\n          <dt className=\\"text-fg-muted\\">Bought</dt><dd><Mono>2 Sep 2026</Mono></dd>\\n          <dt className=\\"text-fg-muted\\">Paid</dt><dd><Money value={2340} /></dd>\\n        </dl>\\n      </Sheet>\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Not dismissible, with a footer",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Escape, the scrim and dragging do nothing, and there is no Close control. Only the footer buttons close it."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Review before sending</Button>\\n      <Sheet open={open} onClose={() => setOpen(false)} dismissible={false} title=\\"Send this email?\\"\\n        footer={<>\\n          <Button variant=\\"secondary\\" onClick={() => setOpen(false)}>Not yet</Button>\\n          <Button onClick={() => setOpen(false)}>Send</Button>\\n        </>}>\\n        <p>Nothing is sent until you press Send. Escape, a tap outside and dragging do not close this sheet.</p>\\n      </Sheet>\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};export{n as BottomSheetWithACaseSummary,s as NotDismissibleWithAFooter,o as SideSheetOnTheRight,U as __namedExportsOrder,P as default};
