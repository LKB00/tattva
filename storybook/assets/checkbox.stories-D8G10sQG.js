import{j as e}from"./iframe-DSdOWv-_.js";import{v as u,b}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=b.get("checkbox"),z={title:"Forms/Checkbox",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Controlled checkbox",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Your code keeps the checked value and updates it when the box changes."},source:{code:`function Example() {
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
}`}}}},D=["ControlledCheckbox","WithAHint","SelectAll"];var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};export{t as ControlledCheckbox,o as SelectAll,s as WithAHint,D as __namedExportsOrder,z as default};
