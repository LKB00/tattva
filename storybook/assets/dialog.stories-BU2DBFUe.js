import{j as e}from"./iframe-J6_2PHET.js";import{X as h,b as f}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=f.get("dialog"),Y={title:"Navigation and overlays/Dialog",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Confirm with a footer",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The simplest use: a title, a line of context and two buttons. The main action goes last."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Publish changes</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Publish these changes?" description="People with the link will see the new version right away."
        footer={<>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Publish</Button>
        </>}>
        <p>You can go back to the earlier version from the history list.</p>
      </Dialog>
    </>
  );
}`}}}},o={name:"Destructive with typed confirmation",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Tone destructive adds a danger icon and the word Destructive to the title. The delete button stays disabled until the person types the word. Focus starts in the field."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const close = () => { setOpen(false); setTyped(""); };
  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>Delete project</Button>
      <Dialog open={open} onClose={close} tone="destructive" size="sm" title="Delete this project?" description="All chats and files in it are removed. This cannot be undone."
        footer={<>
          <Button variant="secondary" onClick={close}>Cancel</Button>
          <Button variant="danger" disabled={typed !== "DELETE"} onClick={close}>Delete project</Button>
        </>}>
        <label htmlFor="confirm-delete" className="block text-fg">Type DELETE to confirm</label>
        <input id="confirm-delete" value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete="off"
          className="mt-1.5 h-9 w-full rounded-field border border-line-strong bg-surface px-3 text-fg pointer-coarse:min-h-11" />
      </Dialog>
    </>
  );
}`}}}},s={name:"Long content that scrolls",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"When the body is taller than the screen, only the body scrolls. The title and the footer stay in view. Try it on a narrow screen to see the bottom sheet."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Read the terms</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Terms of use" size="lg"
        footer={<Button onClick={() => setOpen(false)}>I have read this</Button>}>
        <div className="space-y-3 text-fg-muted">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i}>Section {i + 1}. This is placeholder text for a long page. The title and the buttons stay in place while this part scrolls.</p>
          ))}
        </div>
      </Dialog>
    </>
  );
}`}}}},X=["ConfirmWithAFooter","DestructiveWithTypedConfirmation","LongContentThatScrolls"];var r,a,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Confirm with a footer",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The simplest use: a title, a line of context and two buttons. The main action goes last."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Publish changes</Button>\\n      <Dialog open={open} onClose={() => setOpen(false)} title=\\"Publish these changes?\\" description=\\"People with the link will see the new version right away.\\"\\n        footer={<>\\n          <Button variant=\\"secondary\\" onClick={() => setOpen(false)}>Cancel</Button>\\n          <Button onClick={() => setOpen(false)}>Publish</Button>\\n        </>}>\\n        <p>You can go back to the earlier version from the history list.</p>\\n      </Dialog>\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Destructive with typed confirmation",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tone destructive adds a danger icon and the word Destructive to the title. The delete button stays disabled until the person types the word. Focus starts in the field."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  const [typed, setTyped] = useState(\\"\\");\\n  const close = () => { setOpen(false); setTyped(\\"\\"); };\\n  return (\\n    <>\\n      <Button variant=\\"danger\\" onClick={() => setOpen(true)}>Delete project</Button>\\n      <Dialog open={open} onClose={close} tone=\\"destructive\\" size=\\"sm\\" title=\\"Delete this project?\\" description=\\"All chats and files in it are removed. This cannot be undone.\\"\\n        footer={<>\\n          <Button variant=\\"secondary\\" onClick={close}>Cancel</Button>\\n          <Button variant=\\"danger\\" disabled={typed !== \\"DELETE\\"} onClick={close}>Delete project</Button>\\n        </>}>\\n        <label htmlFor=\\"confirm-delete\\" className=\\"block text-fg\\">Type DELETE to confirm</label>\\n        <input id=\\"confirm-delete\\" value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete=\\"off\\"\\n          className=\\"mt-1.5 h-9 w-full rounded-field border border-line-strong bg-surface px-3 text-fg pointer-coarse:min-h-11\\" />\\n      </Dialog>\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Long content that scrolls",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When the body is taller than the screen, only the body scrolls. The title and the footer stay in view. Try it on a narrow screen to see the bottom sheet."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Read the terms</Button>\\n      <Dialog open={open} onClose={() => setOpen(false)} title=\\"Terms of use\\" size=\\"lg\\"\\n        footer={<Button onClick={() => setOpen(false)}>I have read this</Button>}>\\n        <div className=\\"space-y-3 text-fg-muted\\">\\n          {Array.from({ length: 12 }, (_, i) => (\\n            <p key={i}>Section {i + 1}. This is placeholder text for a long page. The title and the buttons stay in place while this part scrolls.</p>\\n          ))}\\n        </div>\\n      </Dialog>\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};export{n as ConfirmWithAFooter,o as DestructiveWithTypedConfirmation,s as LongContentThatScrolls,X as __namedExportsOrder,Y as default};
