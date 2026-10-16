import{j as e}from"./iframe-DSdOWv-_.js";import{b2 as h,b}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=b.get("radio-group"),M={title:"Forms/RadioGroup",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"With descriptions",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each option has a short hint under its label."},source:{code:`function Example() {
  const [v, setV] = useState("balanced");
  return (
    <RadioGroup label="Response style" value={v} onChange={setV} options={[
      { value: "fast", label: "Fast", description: "Short answers, less checking." },
      { value: "balanced", label: "Balanced", description: "A mix of speed and care." },
      { value: "careful", label: "Careful", description: "Slower, checks its work." },
    ]} />
  );
}`}}}},a={name:"Horizontal",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Short labels can sit in a row. The row wraps on narrow screens."},source:{code:`function Example() {
  const [v, setV] = useState("week");
  return (
    <RadioGroup label="Keep history for" orientation="horizontal" value={v} onChange={setV} options={[
      { value: "day", label: "A day" },
      { value: "week", label: "A week" },
      { value: "month", label: "A month" },
    ]} />
  );
}`}}}},o={name:"Hidden legend and a disabled option",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"When nearby text already names the group, hide the legend. Screen readers still hear it."},source:{code:`function Example() {
  const [v, setV] = useState("light");
  return (
    <RadioGroup label="Theme" hideLabel orientation="horizontal" value={v} onChange={setV} options={[
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "auto", label: "Match system", disabled: true },
    ]} />
  );
}`}}}},_=["WithDescriptions","Horizontal","HiddenLegendAndADisabledOption"];var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "With descriptions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each option has a short hint under its label."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"balanced\\");\\n  return (\\n    <RadioGroup label=\\"Response style\\" value={v} onChange={setV} options={[\\n      { value: \\"fast\\", label: \\"Fast\\", description: \\"Short answers, less checking.\\" },\\n      { value: \\"balanced\\", label: \\"Balanced\\", description: \\"A mix of speed and care.\\" },\\n      { value: \\"careful\\", label: \\"Careful\\", description: \\"Slower, checks its work.\\" },\\n    ]} />\\n  );\\n}"
      }
    }
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Horizontal",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Short labels can sit in a row. The row wraps on narrow screens."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"week\\");\\n  return (\\n    <RadioGroup label=\\"Keep history for\\" orientation=\\"horizontal\\" value={v} onChange={setV} options={[\\n      { value: \\"day\\", label: \\"A day\\" },\\n      { value: \\"week\\", label: \\"A week\\" },\\n      { value: \\"month\\", label: \\"A month\\" },\\n    ]} />\\n  );\\n}"
      }
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Hidden legend and a disabled option",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When nearby text already names the group, hide the legend. Screen readers still hear it."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"light\\");\\n  return (\\n    <RadioGroup label=\\"Theme\\" hideLabel orientation=\\"horizontal\\" value={v} onChange={setV} options={[\\n      { value: \\"light\\", label: \\"Light\\" },\\n      { value: \\"dark\\", label: \\"Dark\\" },\\n      { value: \\"auto\\", label: \\"Match system\\", disabled: true },\\n    ]} />\\n  );\\n}"
      }
    }
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{o as HiddenLegendAndADisabledOption,a as Horizontal,r as WithDescriptions,_ as __namedExportsOrder,M as default};
