import{j as e}from"./iframe-C8v_uZy_.js";import{bD as u,b as v}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=v.get("splitter"),I={title:"Navigation and overlays/Splitter",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Sidebar and main area",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Horizontal means a vertical bar between left and right panes. The first pane gets its width from the value."},source:{code:`function Example() {
  const [w, setW] = useState(160);
  return (
    <div className="flex h-40 w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg">
      <div style={{ width: w }} className="shrink-0 overflow-hidden bg-sunken p-3">Sidebar ({w}px)</div>
      <Splitter direction="horizontal" label="Resize sidebar" value={w} onChange={setW} min={96} max={300} />
      <div className="min-w-0 flex-1 p-3">Main area. Drag the bar, or focus it and press the arrow keys.</div>
    </div>
  );
}`}}}},r={name:"Top and bottom",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Vertical means a horizontal bar between top and bottom panes. The value is the height of the top pane."},source:{code:`function Example() {
  const [h, setH] = useState(90);
  return (
    <div className="flex h-56 w-full max-w-lg flex-col overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg">
      <div style={{ height: h }} className="shrink-0 overflow-hidden bg-sunken p-3">Editor ({h}px)</div>
      <Splitter direction="vertical" label="Resize editor" value={h} onChange={setH} min={48} max={160} />
      <div className="min-h-0 flex-1 p-3">Output</div>
    </div>
  );
}`}}}},a={name:"Collapse with double click or Enter",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"onToggle runs on a double click and on Enter. Here it hides the first pane and brings it back at its old size."},source:{code:`function Example() {
  const [w, setW] = useState(160);
  const [saved, setSaved] = useState(160);
  const toggle = () => {
    if (w === 0) setW(saved || 160);
    else { setSaved(w); setW(0); }
  };
  return (
    <div className="flex h-40 w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg">
      <div style={{ width: w }} className="shrink-0 overflow-hidden bg-sunken">
        <div className="w-40 p-3">Files</div>
      </div>
      <Splitter direction="horizontal" label="Resize file list" value={w} onChange={setW} onToggle={toggle} min={0} max={240} />
      <div className="min-w-0 flex-1 p-3">Double click the bar, or press Enter on it, to {w === 0 ? "show" : "hide"} the file list.</div>
    </div>
  );
}`}}}},q=["SidebarAndMainArea","TopAndBottom","CollapseWithDoubleClickOrEnter"];var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Sidebar and main area",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Horizontal means a vertical bar between left and right panes. The first pane gets its width from the value."
      },
      source: {
        code: "function Example() {\\n  const [w, setW] = useState(160);\\n  return (\\n    <div className=\\"flex h-40 w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg\\">\\n      <div style={{ width: w }} className=\\"shrink-0 overflow-hidden bg-sunken p-3\\">Sidebar ({w}px)</div>\\n      <Splitter direction=\\"horizontal\\" label=\\"Resize sidebar\\" value={w} onChange={setW} min={96} max={300} />\\n      <div className=\\"min-w-0 flex-1 p-3\\">Main area. Drag the bar, or focus it and press the arrow keys.</div>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Top and bottom",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Vertical means a horizontal bar between top and bottom panes. The value is the height of the top pane."
      },
      source: {
        code: "function Example() {\\n  const [h, setH] = useState(90);\\n  return (\\n    <div className=\\"flex h-56 w-full max-w-lg flex-col overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg\\">\\n      <div style={{ height: h }} className=\\"shrink-0 overflow-hidden bg-sunken p-3\\">Editor ({h}px)</div>\\n      <Splitter direction=\\"vertical\\" label=\\"Resize editor\\" value={h} onChange={setH} min={48} max={160} />\\n      <div className=\\"min-h-0 flex-1 p-3\\">Output</div>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Collapse with double click or Enter",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "onToggle runs on a double click and on Enter. Here it hides the first pane and brings it back at its old size."
      },
      source: {
        code: "function Example() {\\n  const [w, setW] = useState(160);\\n  const [saved, setSaved] = useState(160);\\n  const toggle = () => {\\n    if (w === 0) setW(saved || 160);\\n    else { setSaved(w); setW(0); }\\n  };\\n  return (\\n    <div className=\\"flex h-40 w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface text-body leading-5 text-fg\\">\\n      <div style={{ width: w }} className=\\"shrink-0 overflow-hidden bg-sunken\\">\\n        <div className=\\"w-40 p-3\\">Files</div>\\n      </div>\\n      <Splitter direction=\\"horizontal\\" label=\\"Resize file list\\" value={w} onChange={setW} onToggle={toggle} min={0} max={240} />\\n      <div className=\\"min-w-0 flex-1 p-3\\">Double click the bar, or press Enter on it, to {w === 0 ? \\"show\\" : \\"hide\\"} the file list.</div>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{a as CollapseWithDoubleClickOrEnter,t as SidebarAndMainArea,r as TopAndBottom,q as __namedExportsOrder,I as default};
