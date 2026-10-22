import{j as e}from"./iframe-C8v_uZy_.js";import{aU as h,b}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=b.get("parameter-panel"),M={title:"Creating/ParameterPanel",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},a={name:"Video settings with cost",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Length, shape and a repeat code. The cost changes when the length changes."},source:{code:`const params: ParameterSpec[] = [
  { kind: "segmented", id: "duration", label: "Duration", options: [{ value: "5", label: "5 s" }, { value: "10", label: "10 s" }] },
  { kind: "aspect", id: "ratio", label: "Shape", options: ["16:9", "9:16", "1:1", "4:3"].map((r) => ({ value: r, label: r })) },
  { kind: "seed", id: "seed", label: "Repeat code", defaultSeed: 4821 },
];
const [values, setValues] = useState({ duration: "5", ratio: "16:9", seed: null });

<ParameterPanel parameters={params} values={values} onChange={setValues}
  onGenerate={() => {}} estimateCost={(v) => Number(v.duration) * 12} />`}}}},s={name:"Style buttons, a number and a busy state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Custom cost text and button text. While busy, the button is off and shows a spinner."},source:{code:`const params: ParameterSpec[] = [
  { kind: "presets", id: "style", label: "Style", options: [{ value: "photo", label: "Photo" }, { value: "ink", label: "Ink" }, { value: "paper", label: "Paper cut" }] },
  { kind: "number", id: "count", label: "Images", min: 1, max: 4, step: 1, unit: "images" },
];
const [values, setValues] = useState({ style: "photo", count: 2 });

<ParameterPanel title="Image settings" parameters={params} values={values} onChange={setValues}
  onGenerate={() => {}} estimateCost={(v) => Number(v.count) * 4}
  formatCost={(c) => \`\${c} credits for this run\`} generateLabel="Make images" busy />`}}}},n={name:"One setting, no cost",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"With no cost given, that space stays empty. The repeat code starts fixed here, so the number shows."},source:{code:`const [values, setValues] = useState({ seed: 1234 });

<ParameterPanel title="Repeat results"
  parameters={[{ kind: "seed", id: "seed", label: "Repeat code", hint: "Similar, not identical" }]}
  values={values} onChange={setValues} onGenerate={() => {}} />`}}}},_=["VideoSettingsWithCost","StyleButtonsANumberAndABusyState","OneSettingNoCost"];var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Video settings with cost",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Length, shape and a repeat code. The cost changes when the length changes."
      },
      source: {
        code: "const params: ParameterSpec[] = [\\n  { kind: \\"segmented\\", id: \\"duration\\", label: \\"Duration\\", options: [{ value: \\"5\\", label: \\"5 s\\" }, { value: \\"10\\", label: \\"10 s\\" }] },\\n  { kind: \\"aspect\\", id: \\"ratio\\", label: \\"Shape\\", options: [\\"16:9\\", \\"9:16\\", \\"1:1\\", \\"4:3\\"].map((r) => ({ value: r, label: r })) },\\n  { kind: \\"seed\\", id: \\"seed\\", label: \\"Repeat code\\", defaultSeed: 4821 },\\n];\\nconst [values, setValues] = useState({ duration: \\"5\\", ratio: \\"16:9\\", seed: null });\\n\\n<ParameterPanel parameters={params} values={values} onChange={setValues}\\n  onGenerate={() => {}} estimateCost={(v) => Number(v.duration) * 12} />"
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Style buttons, a number and a busy state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Custom cost text and button text. While busy, the button is off and shows a spinner."
      },
      source: {
        code: "const params: ParameterSpec[] = [\\n  { kind: \\"presets\\", id: \\"style\\", label: \\"Style\\", options: [{ value: \\"photo\\", label: \\"Photo\\" }, { value: \\"ink\\", label: \\"Ink\\" }, { value: \\"paper\\", label: \\"Paper cut\\" }] },\\n  { kind: \\"number\\", id: \\"count\\", label: \\"Images\\", min: 1, max: 4, step: 1, unit: \\"images\\" },\\n];\\nconst [values, setValues] = useState({ style: \\"photo\\", count: 2 });\\n\\n<ParameterPanel title=\\"Image settings\\" parameters={params} values={values} onChange={setValues}\\n  onGenerate={() => {}} estimateCost={(v) => Number(v.count) * 4}\\n  formatCost={(c) => \`\${c} credits for this run\`} generateLabel=\\"Make images\\" busy />"
      }
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "One setting, no cost",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no cost given, that space stays empty. The repeat code starts fixed here, so the number shows."
      },
      source: {
        code: "const [values, setValues] = useState({ seed: 1234 });\\n\\n<ParameterPanel title=\\"Repeat results\\"\\n  parameters={[{ kind: \\"seed\\", id: \\"seed\\", label: \\"Repeat code\\", hint: \\"Similar, not identical\\" }]}\\n  values={values} onChange={setValues} onGenerate={() => {}} />"
      }
    }
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};export{n as OneSettingNoCost,s as StyleButtonsANumberAndABusyState,a as VideoSettingsWithCost,_ as __namedExportsOrder,M as default};
