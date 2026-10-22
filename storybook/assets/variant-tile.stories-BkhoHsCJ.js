import{j as o}from"./iframe-C8v_uZy_.js";import{cc as n,b as s}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=s.get("variant-tile"),W={title:"Creating/VariantTile",component:n,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Choose one",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Here the demo keeps track of the choice. Without VariantGrid, arrow keys do not move between tiles, so the Tab key stops on each one."},source:{code:`const [selected, setSelected] = useState("a");

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
