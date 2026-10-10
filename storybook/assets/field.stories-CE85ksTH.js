import{j as e}from"./iframe-J6_2PHET.js";import{a5 as h,b}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=b.get("field"),P={title:"Forms/Field",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"With a hint and an error",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Type one or two letters to see the error appear. The message has an icon and words, not only colour."},source:{code:`function Example() {
  const [name, setName] = useState("");
  const bad = name.length > 0 && name.trim().length < 3;
  return (
    <div className="w-72">
      <Field label="Project name" hint="Shown in the sidebar." error={bad ? "Use at least 3 characters." : undefined} required>
        {(a) => <TextField {...a} value={name} onChange={(e) => setName(e.target.value)} placeholder="Q3 planning" />}
      </Field>
    </div>
  );
}`}}}},r={name:"Optional select",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Use optional to say the field can be left empty. It adds the words (optional) after the label."},source:{code:`function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72">
      <Field label="Model" optional hint="You can change this later.">
        {(a) => <Select {...a} value={v} onChange={(e) => setV(e.target.value)} options={models} placeholder="Choose a model" />}
      </Field>
    </div>
  );
}`}}}},a={name:"Around a number field",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"NumberField takes the same props, plus its own label. The error shows when the quantity is 0."},source:{code:`function Example() {
  const [n, setN] = useState<number | null>(0);
  return (
    <div className="w-72">
      <Field label="Quantity" hint="Between 1 and 20." error={n === 0 ? "Choose at least 1." : undefined}>
        {({ id, ...a }) => <NumberField {...a} id={id} label="Quantity" value={n} onChange={setN} min={0} max={20} />}
      </Field>
    </div>
  );
}`}}}},Y=["WithAHintAndAnError","OptionalSelect","AroundANumberField"];var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "With a hint and an error",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Type one or two letters to see the error appear. The message has an icon and words, not only colour."
      },
      source: {
        code: "function Example() {\\n  const [name, setName] = useState(\\"\\");\\n  const bad = name.length > 0 && name.trim().length < 3;\\n  return (\\n    <div className=\\"w-72\\">\\n      <Field label=\\"Project name\\" hint=\\"Shown in the sidebar.\\" error={bad ? \\"Use at least 3 characters.\\" : undefined} required>\\n        {(a) => <TextField {...a} value={name} onChange={(e) => setName(e.target.value)} placeholder=\\"Q3 planning\\" />}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Optional select",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use optional to say the field can be left empty. It adds the words (optional) after the label."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"\\");\\n  return (\\n    <div className=\\"w-72\\">\\n      <Field label=\\"Model\\" optional hint=\\"You can change this later.\\">\\n        {(a) => <Select {...a} value={v} onChange={(e) => setV(e.target.value)} options={models} placeholder=\\"Choose a model\\" />}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Around a number field",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "NumberField takes the same props, plus its own label. The error shows when the quantity is 0."
      },
      source: {
        code: "function Example() {\\n  const [n, setN] = useState<number | null>(0);\\n  return (\\n    <div className=\\"w-72\\">\\n      <Field label=\\"Quantity\\" hint=\\"Between 1 and 20.\\" error={n === 0 ? \\"Choose at least 1.\\" : undefined}>\\n        {({ id, ...a }) => <NumberField {...a} id={id} label=\\"Quantity\\" value={n} onChange={setN} min={0} max={20} />}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{a as AroundANumberField,r as OptionalSelect,t as WithAHintAndAnError,Y as __namedExportsOrder,P as default};
