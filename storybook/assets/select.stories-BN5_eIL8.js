import{j as e}from"./iframe-DSdOWv-_.js";import{bh as h,b as v}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=v.get("select"),z={title:"Forms/Select",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"Options from data",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Pass options. An option can be disabled. Pass an aria-label when there is no visible label."},source:{code:`function Example() {
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
