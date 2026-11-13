import{j as e}from"./iframe-D-pZXX8_.js";import{bt as h,b as v}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=v.get("select"),z={title:"Forms/Select",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"Options from data",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Pass options. An option can be disabled. Pass an aria-label when there is no visible label."},source:{code:`function Example() {
  const [v, setV] = useState("balanced");
  return (
    <div className="w-60">
      <Select aria-label="Model" value={v} onChange={(e) => setV(e.target.value)} options={models} />
    </div>
  );
}`}}}},o={name:"In a Field with a placeholder",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"While nothing is picked, the placeholder shows. Field adds the label and hint."},source:{code:`function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72">
      <Field label="Model" optional hint="You can change this later.">
        {(a) => <Select {...a} value={v} onChange={(e) => setV(e.target.value)} options={models} placeholder="Choose a model" />}
      </Field>
    </div>
  );
}`}}}},t={name:"Children, invalid and disabled",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Write <option> elements yourself if you need groups. Invalid and disabled are shown here."},source:{code:`<div className="flex w-60 flex-col gap-3">
  <Select aria-label="Region" invalid defaultValue="eu">
    <optgroup label="Europe"><option value="eu">Frankfurt</option></optgroup>
    <optgroup label="Asia"><option value="in">Mumbai</option></optgroup>
  </Select>
  <Select aria-label="Plan" disabled options={models} defaultValue="fast" />
</div>`}}}},B=["OptionsFromData","InAFieldWithAPlaceholder","ChildrenInvalidAndDisabled"];var r,s,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Options from data",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass options. An option can be disabled. Pass an aria-label when there is no visible label."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"balanced\\");\\n  return (\\n    <div className=\\"w-60\\">\\n      <Select aria-label=\\"Model\\" value={v} onChange={(e) => setV(e.target.value)} options={models} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "In a Field with a placeholder",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While nothing is picked, the placeholder shows. Field adds the label and hint."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"\\");\\n  return (\\n    <div className=\\"w-72\\">\\n      <Field label=\\"Model\\" optional hint=\\"You can change this later.\\">\\n        {(a) => <Select {...a} value={v} onChange={(e) => setV(e.target.value)} options={models} placeholder=\\"Choose a model\\" />}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Children, invalid and disabled",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Write <option> elements yourself if you need groups. Invalid and disabled are shown here."
      },
      source: {
        code: "<div className=\\"flex w-60 flex-col gap-3\\">\\n  <Select aria-label=\\"Region\\" invalid defaultValue=\\"eu\\">\\n    <optgroup label=\\"Europe\\"><option value=\\"eu\\">Frankfurt</option></optgroup>\\n    <optgroup label=\\"Asia\\"><option value=\\"in\\">Mumbai</option></optgroup>\\n  </Select>\\n  <Select aria-label=\\"Plan\\" disabled options={models} defaultValue=\\"fast\\" />\\n</div>"
      }
    }
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{t as ChildrenInvalidAndDisabled,o as InAFieldWithAPlaceholder,a as OptionsFromData,B as __namedExportsOrder,z as default};
