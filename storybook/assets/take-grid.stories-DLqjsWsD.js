import{j as e}from"./iframe-C8v_uZy_.js";import{bT as y,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=h.get("take-grid"),N={title:"Video/TakeGrid",component:y,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"Four takes arriving",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Next update to move the jobs along. The summary line changes only when a status changes, and it is the only thing spoken. Try the arrow keys, Enter, Space, and the = and - keys while a take has focus."},source:{code:`const [value, setValue] = useState<string[]>([]);
const [density, setDensity] = useState<TakeGridDensity>("comfortable");

<TakeGrid
  label="Harbour opening takes"
  takes={takes}               // TakeCard props, kept up to date from your job service
  mode="select"
  value={value}
  onChange={setValue}
  ratio="16:9"
  density={density}
  onDensityChange={setDensity}
  showDensityControl
  onOpen={openInPlayer}
/>`}}}},t={name:"Pick one take, grouped by prompt",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Tall 9:16 takes in small tiles, under the prompt that made them. Only finished takes can be picked; the failed take keeps its Try again."},source:{code:`<TakeGrid
  label="Bakery story takes"
  takes={takes}               // each with request: "Close-up of bread coming out of a wood oven..."
  mode="pick"
  value={value}
  onChange={setValue}
  ratio="9:16"
  groupBy="request"
  density="compact"
  onOpen={openInPlayer}
/>`}}}},o={name:"Empty and loading",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"With nothing yet, an empty state says how to start. While takes are on the way, still placeholders hold their space. They do not shimmer."},source:{code:`<TakeGrid label="Takes" takes={[]} value={[]} onChange={setValue} />

<TakeGrid label="Takes on the way" takes={[]} value={[]} onChange={setValue} loadingCount={2} />`}}}},_=["FourTakesArriving","PickOneTakeGroupedByPrompt","EmptyAndLoading"];var r,s,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Four takes arriving",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Next update to move the jobs along. The summary line changes only when a status changes, and it is the only thing spoken. Try the arrow keys, Enter, Space, and the = and - keys while a take has focus."
      },
      source: {
        code: "const [value, setValue] = useState<string[]>([]);\\nconst [density, setDensity] = useState<TakeGridDensity>(\\"comfortable\\");\\n\\n<TakeGrid\\n  label=\\"Harbour opening takes\\"\\n  takes={takes}               // TakeCard props, kept up to date from your job service\\n  mode=\\"select\\"\\n  value={value}\\n  onChange={setValue}\\n  ratio=\\"16:9\\"\\n  density={density}\\n  onDensityChange={setDensity}\\n  showDensityControl\\n  onOpen={openInPlayer}\\n/>"
      }
    }
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Pick one take, grouped by prompt",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tall 9:16 takes in small tiles, under the prompt that made them. Only finished takes can be picked; the failed take keeps its Try again."
      },
      source: {
        code: "<TakeGrid\\n  label=\\"Bakery story takes\\"\\n  takes={takes}               // each with request: \\"Close-up of bread coming out of a wood oven...\\"\\n  mode=\\"pick\\"\\n  value={value}\\n  onChange={setValue}\\n  ratio=\\"9:16\\"\\n  groupBy=\\"request\\"\\n  density=\\"compact\\"\\n  onOpen={openInPlayer}\\n/>"
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Empty and loading",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With nothing yet, an empty state says how to start. While takes are on the way, still placeholders hold their space. They do not shimmer."
      },
      source: {
        code: "<TakeGrid label=\\"Takes\\" takes={[]} value={[]} onChange={setValue} />\\n\\n<TakeGrid label=\\"Takes on the way\\" takes={[]} value={[]} onChange={setValue} loadingCount={2} />"
      }
    }
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};export{o as EmptyAndLoading,a as FourTakesArriving,t as PickOneTakeGroupedByPrompt,_ as __namedExportsOrder,N as default};
