import{j as e}from"./iframe-C8v_uZy_.js";import{c1 as w,b as x}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=x.get("toast"),q={title:"Navigation and overlays/Toast",component:w,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Each tone",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Neutral, success, info and danger. Every tone except neutral has an icon, and every toast has a title, so colour is never the only cue. A danger toast is announced straight away."},source:{code:`function Buttons() {
  const toast = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="secondary" onClick={() => toast.show({ title: "Copied to clipboard" })}>Neutral</Button>
      <Button variant="secondary" onClick={() => toast.show({ title: "Saved", description: "Your changes are on the server.", tone: "success" })}>Success</Button>
      <Button variant="secondary" onClick={() => toast.show({ title: "New version available", tone: "info" })}>Info</Button>
      <Button variant="secondary" onClick={() => toast.show({ title: "Could not save", description: "The error is also shown on the page.", tone: "danger" })}>Danger</Button>
    </div>
  );
}

function Example() {
  return <ToastProvider><Buttons /></ToastProvider>;
}`}}}},o={name:"With an Undo action",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Delete first, then offer Undo. The action is a real button. The toast stays for 8 seconds, the default for a toast with an action, and a thin bar along the bottom shows the time left."},source:{code:`function List() {
  const toast = useToast();
  const [items, setItems] = useState(["Weekly plan", "Meeting notes"]);
  const remove = (name: string) => {
    const at = items.indexOf(name);
    setItems((l) => l.filter((x) => x !== name));
    toast.show({
      title: \`Deleted "\${name}"\`, duration: 8000,
      action: { label: "Undo", onClick: () => setItems((l) => [...l.slice(0, at), name, ...l.slice(at)]) },
    });
  };
  return (
    <ul className="flex w-64 flex-col gap-2 text-body leading-5 text-fg">
      {items.map((n) => (
        <li key={n} className="flex items-center justify-between rounded-card border border-line px-3 py-1.5">
          {n}
          <Button size="sm" variant="ghost" onClick={() => remove(n)}>Delete</Button>
        </li>
      ))}
      {items.length === 0 && <li className="text-fg-muted">Nothing left.</li>}
    </ul>
  );
}

function Example() {
  return <ToastProvider><List /></ToastProvider>;
}`}}}},s={name:"Saving, then saved",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Show one toast while the work runs, with duration 0 so it stays. When it ends, update changes the same toast in place. Its timer starts again, here with the 6 seconds a toast with a description gets."},source:{code:`function SaveButton() {
  const toast = useToast();
  const save = () => {
    const id = toast.show({ title: "Saving", duration: 0 });
    window.setTimeout(() => {
      toast.update(id, { title: "Saved", description: "Your changes are on the server.", tone: "success", duration: undefined });
    }, 1500);
  };
  return <Button variant="secondary" onClick={save}>Save changes</Button>;
}

function Example() {
  return <ToastProvider><SaveButton /></ToastProvider>;
}`}}}},a={name:"The Toast on its own",render:()=>e.jsx(e.Fragment,{children:t.examples[3].render()}),parameters:{docs:{description:{story:"The Toast component has no timer and no region. Use it to draw a toast in a page, or to build your own host. Pass onDismiss to show the close button."},source:{code:`<div className="flex flex-col gap-3">
  <Toast tone="success" title="Saved" description="Your changes are on the server." onDismiss={() => {}} />
  <Toast tone="danger" title="Could not save" action={{ label: "Try again", onClick: () => {} }} onDismiss={() => {}} />
</div>`}}}},G=["EachTone","WithAnUndoAction","SavingThenSaved","TheToastOnItsOwn"];var r,i,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Each tone",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Neutral, success, info and danger. Every tone except neutral has an icon, and every toast has a title, so colour is never the only cue. A danger toast is announced straight away."
      },
      source: {
        code: "function Buttons() {\\n  const toast = useToast();\\n  return (\\n    <div className=\\"flex flex-wrap gap-2\\">\\n      <Button variant=\\"secondary\\" onClick={() => toast.show({ title: \\"Copied to clipboard\\" })}>Neutral</Button>\\n      <Button variant=\\"secondary\\" onClick={() => toast.show({ title: \\"Saved\\", description: \\"Your changes are on the server.\\", tone: \\"success\\" })}>Success</Button>\\n      <Button variant=\\"secondary\\" onClick={() => toast.show({ title: \\"New version available\\", tone: \\"info\\" })}>Info</Button>\\n      <Button variant=\\"secondary\\" onClick={() => toast.show({ title: \\"Could not save\\", description: \\"The error is also shown on the page.\\", tone: \\"danger\\" })}>Danger</Button>\\n    </div>\\n  );\\n}\\n\\nfunction Example() {\\n  return <ToastProvider><Buttons /></ToastProvider>;\\n}"
      }
    }
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With an Undo action",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Delete first, then offer Undo. The action is a real button. The toast stays for 8 seconds, the default for a toast with an action, and a thin bar along the bottom shows the time left."
      },
      source: {
        code: "function List() {\\n  const toast = useToast();\\n  const [items, setItems] = useState([\\"Weekly plan\\", \\"Meeting notes\\"]);\\n  const remove = (name: string) => {\\n    const at = items.indexOf(name);\\n    setItems((l) => l.filter((x) => x !== name));\\n    toast.show({\\n      title: \`Deleted \\"\${name}\\"\`, duration: 8000,\\n      action: { label: \\"Undo\\", onClick: () => setItems((l) => [...l.slice(0, at), name, ...l.slice(at)]) },\\n    });\\n  };\\n  return (\\n    <ul className=\\"flex w-64 flex-col gap-2 text-body leading-5 text-fg\\">\\n      {items.map((n) => (\\n        <li key={n} className=\\"flex items-center justify-between rounded-card border border-line px-3 py-1.5\\">\\n          {n}\\n          <Button size=\\"sm\\" variant=\\"ghost\\" onClick={() => remove(n)}>Delete</Button>\\n        </li>\\n      ))}\\n      {items.length === 0 && <li className=\\"text-fg-muted\\">Nothing left.</li>}\\n    </ul>\\n  );\\n}\\n\\nfunction Example() {\\n  return <ToastProvider><List /></ToastProvider>;\\n}"
      }
    }
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Saving, then saved",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Show one toast while the work runs, with duration 0 so it stays. When it ends, update changes the same toast in place. Its timer starts again, here with the 6 seconds a toast with a description gets."
      },
      source: {
        code: "function SaveButton() {\\n  const toast = useToast();\\n  const save = () => {\\n    const id = toast.show({ title: \\"Saving\\", duration: 0 });\\n    window.setTimeout(() => {\\n      toast.update(id, { title: \\"Saved\\", description: \\"Your changes are on the server.\\", tone: \\"success\\", duration: undefined });\\n    }, 1500);\\n  };\\n  return <Button variant=\\"secondary\\" onClick={save}>Save changes</Button>;\\n}\\n\\nfunction Example() {\\n  return <ToastProvider><SaveButton /></ToastProvider>;\\n}"
      }
    }
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,g,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "The Toast on its own",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The Toast component has no timer and no region. Use it to draw a toast in a page, or to build your own host. Pass onDismiss to show the close button."
      },
      source: {
        code: "<div className=\\"flex flex-col gap-3\\">\\n  <Toast tone=\\"success\\" title=\\"Saved\\" description=\\"Your changes are on the server.\\" onDismiss={() => {}} />\\n  <Toast tone=\\"danger\\" title=\\"Could not save\\" action={{ label: \\"Try again\\", onClick: () => {} }} onDismiss={() => {}} />\\n</div>"
      }
    }
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};export{n as EachTone,s as SavingThenSaved,a as TheToastOnItsOwn,o as WithAnUndoAction,G as __namedExportsOrder,q as default};
