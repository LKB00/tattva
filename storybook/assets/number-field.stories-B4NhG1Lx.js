import{j as e}from"./iframe-C8v_uZy_.js";import{aQ as y,b as N}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=N.get("number-field"),G={title:"Forms/NumberField",component:y,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Quantity with limits",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The buttons stop at 1 and 50. Type a number and press Enter or leave the box to apply it."},source:{code:`function Example() {
  const [n, setN] = useState<number | null>(2);
  return <NumberField label="Lots" value={n} onChange={setN} min={1} max={50} unit="lots" />;
}`}}}},t={name:"Decimal steps",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Step by 0.25 and always show two decimals. Shift with an arrow key moves ten steps."},source:{code:`function Example() {
  const [n, setN] = useState<number | null>(12.5);
  return <NumberField label="Price" value={n} onChange={setN} min={0} step={0.25} precision={2} unit="USD" />;
}`}}}},a={name:"In a Field with a hint and an error",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Field adds the visible label, hint and error. Here the error shows at 0."},source:{code:`function Example() {
  const [n, setN] = useState<number | null>(0);
  return (
    <div className="w-72">
      <Field label="Quantity" hint="Between 1 and 20." error={n === 0 ? "Choose at least 1." : undefined}>
        {({ id, ...a }) => <NumberField {...a} id={id} label="Quantity" value={n} onChange={setN} min={0} max={20} />}
      </Field>
    </div>
  );
}`}}}},s={name:"Disabled and invalid",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:""},source:{code:`<div className="flex flex-col items-start gap-3">
  <NumberField label="Seats" value={5} onChange={() => {}} disabled />
  <NumberField label="Seats" value={0} onChange={() => {}} invalid />
</div>`}}}},J=["QuantityWithLimits","DecimalSteps","InAFieldWithAHintAndAnError","DisabledAndInvalid"];var i,o,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Quantity with limits",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The buttons stop at 1 and 50. Type a number and press Enter or leave the box to apply it."
      },
      source: {
        code: "function Example() {\\n  const [n, setN] = useState<number | null>(2);\\n  return <NumberField label=\\"Lots\\" value={n} onChange={setN} min={1} max={50} unit=\\"lots\\" />;\\n}"
      }
    }
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Decimal steps",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Step by 0.25 and always show two decimals. Shift with an arrow key moves ten steps."
      },
      source: {
        code: "function Example() {\\n  const [n, setN] = useState<number | null>(12.5);\\n  return <NumberField label=\\"Price\\" value={n} onChange={setN} min={0} step={0.25} precision={2} unit=\\"USD\\" />;\\n}"
      }
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "In a Field with a hint and an error",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Field adds the visible label, hint and error. Here the error shows at 0."
      },
      source: {
        code: "function Example() {\\n  const [n, setN] = useState<number | null>(0);\\n  return (\\n    <div className=\\"w-72\\">\\n      <Field label=\\"Quantity\\" hint=\\"Between 1 and 20.\\" error={n === 0 ? \\"Choose at least 1.\\" : undefined}>\\n        {({ id, ...a }) => <NumberField {...a} id={id} label=\\"Quantity\\" value={n} onChange={setN} min={0} max={20} />}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Disabled and invalid",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<div className=\\"flex flex-col items-start gap-3\\">\\n  <NumberField label=\\"Seats\\" value={5} onChange={() => {}} disabled />\\n  <NumberField label=\\"Seats\\" value={0} onChange={() => {}} invalid />\\n</div>"
      }
    }
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};export{t as DecimalSteps,s as DisabledAndInvalid,a as InAFieldWithAHintAndAnError,r as QuantityWithLimits,J as __namedExportsOrder,G as default};
