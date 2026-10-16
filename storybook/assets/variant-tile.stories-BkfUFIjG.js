import{j as o}from"./iframe-DSdOWv-_.js";import{c7 as n,b as s}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=s.get("variant-tile"),W={title:"Creating/VariantTile",component:n,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Choose one",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Here the demo keeps track of the choice. Without VariantGrid, arrow keys do not move between tiles, so the Tab key stops on each one."},source:{code:`const [selected, setSelected] = useState("a");

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
