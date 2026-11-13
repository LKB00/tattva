import{j as o}from"./iframe-D-pZXX8_.js";import{ac as a,b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const i=h.get("edit-scope-chip"),v={title:"Slides/EditScopeChip",component:a,tags:["autodocs"],parameters:{docs:{description:{component:i.summary+" "+i.description}}}},e={name:"In a composer",render:()=>o.jsx(o.Fragment,{children:i.examples[0].render()}),parameters:{docs:{description:{story:"The chip names what the request will change. Open it to pick this chart title, slide 3, slides 3 to 5 or the whole deck. The whole deck shows its cost beside the chip before you send."},source:{code:`const [scope, setScope] = useState<EditScope>({ kind: "slides", ids: ["3"] });

<EditScopeChip
  scope={scope}
  options={[
    { kind: "element", label: "This chart title" },
    { kind: "slides", ids: ["3"] },
    { kind: "slides", ids: ["3", "4", "5"] },
    { kind: "deck" },
  ]}
  onChange={setScope}
  deckCost="All 12 slides, about 40 credits"
/>`}}}},s={name:"Scattered slides, whole deck, single scope and locked",render:()=>o.jsx(o.Fragment,{children:i.examples[1].render()}),parameters:{docs:{description:{story:'Slides that are not side by side read as "3 slides". The whole deck carries its cost. With one scope there is no menu. While the AI edits, the chip is dashed and says why it cannot change.'},source:{code:`<EditScopeChip scope={{ kind: "slides", ids: ["2", "6", "9"] }} options={options} onChange={setScope} />
<EditScopeChip scope={{ kind: "deck" }} options={options} onChange={setScope} deckCost="All 12 slides, about 40 credits" />
<EditScopeChip scope={{ kind: "element", label: "This quote" }} options={[]} onChange={setScope} />
<EditScopeChip scope={{ kind: "slides", ids: ["3", "4", "5"] }} options={options} onChange={setScope}
  disabled disabledReason="Fixed while the AI edits these slides" />`}}}},z=["InAComposer","ScatteredSlidesWholeDeckSingleScopeAndLocked"];var t,n,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "In a composer",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The chip names what the request will change. Open it to pick this chart title, slide 3, slides 3 to 5 or the whole deck. The whole deck shows its cost beside the chip before you send."
      },
      source: {
        code: "const [scope, setScope] = useState<EditScope>({ kind: \\"slides\\", ids: [\\"3\\"] });\\n\\n<EditScopeChip\\n  scope={scope}\\n  options={[\\n    { kind: \\"element\\", label: \\"This chart title\\" },\\n    { kind: \\"slides\\", ids: [\\"3\\"] },\\n    { kind: \\"slides\\", ids: [\\"3\\", \\"4\\", \\"5\\"] },\\n    { kind: \\"deck\\" },\\n  ]}\\n  onChange={setScope}\\n  deckCost=\\"All 12 slides, about 40 credits\\"\\n/>"
      }
    }
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,p,r;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Scattered slides, whole deck, single scope and locked",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Slides that are not side by side read as \\"3 slides\\". The whole deck carries its cost. With one scope there is no menu. While the AI edits, the chip is dashed and says why it cannot change."
      },
      source: {
        code: "<EditScopeChip scope={{ kind: \\"slides\\", ids: [\\"2\\", \\"6\\", \\"9\\"] }} options={options} onChange={setScope} />\\n<EditScopeChip scope={{ kind: \\"deck\\" }} options={options} onChange={setScope} deckCost=\\"All 12 slides, about 40 credits\\" />\\n<EditScopeChip scope={{ kind: \\"element\\", label: \\"This quote\\" }} options={[]} onChange={setScope} />\\n<EditScopeChip scope={{ kind: \\"slides\\", ids: [\\"3\\", \\"4\\", \\"5\\"] }} options={options} onChange={setScope}\\n  disabled disabledReason=\\"Fixed while the AI edits these slides\\" />"
      }
    }
  }
}`,...(r=(p=s.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};export{e as InAComposer,s as ScatteredSlidesWholeDeckSingleScopeAndLocked,z as __namedExportsOrder,v as default};
