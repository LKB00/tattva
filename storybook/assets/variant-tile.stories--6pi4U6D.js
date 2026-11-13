import{j as o}from"./iframe-D-pZXX8_.js";import{ck as n,b as s}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=s.get("variant-tile"),W={title:"Creating/VariantTile",component:n,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Choose one",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Here the demo keeps track of the choice. Without VariantGrid, arrow keys do not move between tiles, so the Tab key stops on each one."},source:{code:`const [selected, setSelected] = useState("a");

<div role="radiogroup" aria-label="Generated options" className="grid w-full max-w-md grid-cols-3 gap-3">
  {variants.map((v) => (
    <VariantTile key={v.id} variant={v} selected={selected === v.id} onSelect={setSelected} />
  ))}
</div>`}}}},_=["ChooseOne"];var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Choose one",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Here the demo keeps track of the choice. Without VariantGrid, arrow keys do not move between tiles, so the Tab key stops on each one."
      },
      source: {
        code: "const [selected, setSelected] = useState(\\"a\\");\\n\\n<div role=\\"radiogroup\\" aria-label=\\"Generated options\\" className=\\"grid w-full max-w-md grid-cols-3 gap-3\\">\\n  {variants.map((v) => (\\n    <VariantTile key={v.id} variant={v} selected={selected === v.id} onSelect={setSelected} />\\n  ))}\\n</div>"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{e as ChooseOne,_ as __namedExportsOrder,W as default};
