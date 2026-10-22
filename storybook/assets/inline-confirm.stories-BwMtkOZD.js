import{j as n}from"./iframe-C8v_uZy_.js";import{as as m,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=l.get("inline-confirm"),Q={title:"Asking and showing work/InlineConfirm",component:m,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Delete a chat",render:()=>n.jsx(n.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Each row has its own control. The confirm button uses the danger colour."},source:{code:`function Example() {
  const [chats, setChats] = useState(["Trip to Lisbon", "Quarterly report", "Gift ideas"]);
  return (
    <ul className="w-80 divide-y divide-line rounded-card border border-line bg-surface">
      {chats.map((c) => (
        <li key={c} className="flex items-center justify-between gap-3 px-3 py-2">
          <span className="min-w-0 truncate text-body text-fg">{c}</span>
          <InlineConfirm tone="danger" question="Delete this chat?" onConfirm={() => setChats((l) => l.filter((x) => x !== c))}>Delete</InlineConfirm>
        </li>
      ))}
      {chats.length === 0 && <li className="px-3 py-2 text-body text-fg-muted">No chats left.</li>}
    </ul>
  );
}`}}}},t={name:"Discard a draft",render:()=>n.jsx(n.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Custom labels and a longer timeout. The default tone draws the confirm button in the accent colour."},source:{code:`function Example() {
  const [draft, setDraft] = useState("Thanks for the update. I will look at the numbers tomorrow.");
  return (
    <div className="flex w-80 flex-col gap-2">
      <p className="rounded-card border border-line bg-surface p-3 text-body text-fg">{draft || "Draft discarded."}</p>
      <InlineConfirm confirmLabel="Discard" cancelLabel="Keep editing" question="Discard this draft?" timeout={10000} onConfirm={() => setDraft("")}>Discard draft</InlineConfirm>
    </div>
  );
}`}}}},_=["DeleteAChat","DiscardADraft"];var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Delete a chat",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each row has its own control. The confirm button uses the danger colour."
      },
      source: {
        code: "function Example() {\\n  const [chats, setChats] = useState([\\"Trip to Lisbon\\", \\"Quarterly report\\", \\"Gift ideas\\"]);\\n  return (\\n    <ul className=\\"w-80 divide-y divide-line rounded-card border border-line bg-surface\\">\\n      {chats.map((c) => (\\n        <li key={c} className=\\"flex items-center justify-between gap-3 px-3 py-2\\">\\n          <span className=\\"min-w-0 truncate text-body text-fg\\">{c}</span>\\n          <InlineConfirm tone=\\"danger\\" question=\\"Delete this chat?\\" onConfirm={() => setChats((l) => l.filter((x) => x !== c))}>Delete</InlineConfirm>\\n        </li>\\n      ))}\\n      {chats.length === 0 && <li className=\\"px-3 py-2 text-body text-fg-muted\\">No chats left.</li>}\\n    </ul>\\n  );\\n}"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Discard a draft",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Custom labels and a longer timeout. The default tone draws the confirm button in the accent colour."
      },
      source: {
        code: "function Example() {\\n  const [draft, setDraft] = useState(\\"Thanks for the update. I will look at the numbers tomorrow.\\");\\n  return (\\n    <div className=\\"flex w-80 flex-col gap-2\\">\\n      <p className=\\"rounded-card border border-line bg-surface p-3 text-body text-fg\\">{draft || \\"Draft discarded.\\"}</p>\\n      <InlineConfirm confirmLabel=\\"Discard\\" cancelLabel=\\"Keep editing\\" question=\\"Discard this draft?\\" timeout={10000} onConfirm={() => setDraft(\\"\\")}>Discard draft</InlineConfirm>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{e as DeleteAChat,t as DiscardADraft,_ as __namedExportsOrder,Q as default};
