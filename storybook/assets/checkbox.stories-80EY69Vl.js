import{j as e}from"./iframe-D-pZXX8_.js";import{D as u,b}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=b.get("checkbox"),q={title:"Forms/Checkbox",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Controlled checkbox",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Your code keeps the checked value and updates it when the box changes."},source:{code:`function Example() {
  const [on, setOn] = useState(true);
  return <Checkbox checked={on} onChange={setOn} label="Remember my choice" />;
}`}}}},s={name:"With a hint",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The hint shows under the label and is read after the name by screen readers."},source:{code:`function Example() {
  const [on, setOn] = useState(false);
  return <Checkbox checked={on} onChange={setOn} label="Share this chat" description="Anyone with the link can read it." />;
}`}}}},o={name:"Select all",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The top box shows a dash when only some items are picked. Pressing it picks all, or clears all."},source:{code:`function Example() {
  const [items, setItems] = useState({ a: true, b: false, c: false });
  const values = Object.values(items);
  const all = values.every(Boolean);
  const some = values.some(Boolean) && !all;
  const toggleAll = (v: boolean) => setItems({ a: v, b: v, c: v });
  return (
    <div className="flex flex-col gap-2">
      <Checkbox checked={all} indeterminate={some} onChange={toggleAll} label="All sources" />
      <div className="ml-8 flex flex-col gap-2">
        <Checkbox checked={items.a} onChange={(v) => setItems({ ...items, a: v })} label="Web" />
        <Checkbox checked={items.b} onChange={(v) => setItems({ ...items, b: v })} label="Files" />
        <Checkbox checked={items.c} onChange={(v) => setItems({ ...items, c: v })} label="Email" />
      </div>
    </div>
  );
}`}}}},z=["ControlledCheckbox","WithAHint","SelectAll"];var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Controlled checkbox",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your code keeps the checked value and updates it when the box changes."
      },
      source: {
        code: "function Example() {\\n  const [on, setOn] = useState(true);\\n  return <Checkbox checked={on} onChange={setOn} label=\\"Remember my choice\\" />;\\n}"
      }
    }
  }
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var l,m,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With a hint",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The hint shows under the label and is read after the name by screen readers."
      },
      source: {
        code: "function Example() {\\n  const [on, setOn] = useState(false);\\n  return <Checkbox checked={on} onChange={setOn} label=\\"Share this chat\\" description=\\"Anyone with the link can read it.\\" />;\\n}"
      }
    }
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,h,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Select all",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The top box shows a dash when only some items are picked. Pressing it picks all, or clears all."
      },
      source: {
        code: "function Example() {\\n  const [items, setItems] = useState({ a: true, b: false, c: false });\\n  const values = Object.values(items);\\n  const all = values.every(Boolean);\\n  const some = values.some(Boolean) && !all;\\n  const toggleAll = (v: boolean) => setItems({ a: v, b: v, c: v });\\n  return (\\n    <div className=\\"flex flex-col gap-2\\">\\n      <Checkbox checked={all} indeterminate={some} onChange={toggleAll} label=\\"All sources\\" />\\n      <div className=\\"ml-8 flex flex-col gap-2\\">\\n        <Checkbox checked={items.a} onChange={(v) => setItems({ ...items, a: v })} label=\\"Web\\" />\\n        <Checkbox checked={items.b} onChange={(v) => setItems({ ...items, b: v })} label=\\"Files\\" />\\n        <Checkbox checked={items.c} onChange={(v) => setItems({ ...items, c: v })} label=\\"Email\\" />\\n      </div>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};export{t as ControlledCheckbox,o as SelectAll,s as WithAHint,z as __namedExportsOrder,q as default};
