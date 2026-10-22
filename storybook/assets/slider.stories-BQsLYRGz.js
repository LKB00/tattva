import{j as e}from"./iframe-C8v_uZy_.js";import{bw as v,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=h.get("slider"),z={title:"Forms/Slider",component:v,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Basic slider",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The value runs from 0 to 100 by default."},source:{code:`function Example() {
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
