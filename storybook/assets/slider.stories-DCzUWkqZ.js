import{j as e}from"./iframe-D-pZXX8_.js";import{bE as v,b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=h.get("slider"),z={title:"Forms/Slider",component:v,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Basic slider",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The value runs from 0 to 100 by default."},source:{code:`function Example() {
  const [v, setV] = useState(40);
  return <div className="w-72"><Slider value={v} onChange={setV} label="Volume" /></div>;
}`}}}},r={name:"Percent with a readout",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"formatValue adds the unit to the visible text and to what screen readers say."},source:{code:`function Example() {
  const [v, setV] = useState(60);
  return (
    <div className="w-72">
      <Slider value={v} onChange={setV} label="Creativity" showValue step={5} formatValue={(n) => \`\${n}%\`} />
    </div>
  );
}`}}}},a={name:"Custom range and step",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Set min, max and step. The thumb snaps to each step."},source:{code:`function Example() {
  const [v, setV] = useState(2048);
  return (
    <div className="w-72">
      <Slider value={v} onChange={setV} label="Reply length" min={256} max={4096} step={256} showValue formatValue={(n) => \`\${n} tokens\`} />
    </div>
  );
}`}}}},D=["BasicSlider","PercentWithAReadout","CustomRangeAndStep"];var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Basic slider",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The value runs from 0 to 100 by default."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(40);\\n  return <div className=\\"w-72\\"><Slider value={v} onChange={setV} label=\\"Volume\\" /></div>;\\n}"
      }
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Percent with a readout",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "formatValue adds the unit to the visible text and to what screen readers say."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(60);\\n  return (\\n    <div className=\\"w-72\\">\\n      <Slider value={v} onChange={setV} label=\\"Creativity\\" showValue step={5} formatValue={(n) => \`\${n}%\`} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom range and step",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set min, max and step. The thumb snaps to each step."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(2048);\\n  return (\\n    <div className=\\"w-72\\">\\n      <Slider value={v} onChange={setV} label=\\"Reply length\\" min={256} max={4096} step={256} showValue formatValue={(n) => \`\${n} tokens\`} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{t as BasicSlider,a as CustomRangeAndStep,r as PercentWithAReadout,D as __namedExportsOrder,z as default};
