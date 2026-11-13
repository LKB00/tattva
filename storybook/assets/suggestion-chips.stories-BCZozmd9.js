import{j as o}from"./iframe-D-pZXX8_.js";import{bW as n,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=p.get("suggestion-chips"),v={title:"Conversation/SuggestionChips",component:n,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Pick a prompt",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"It does not remember the choice. Here the demo keeps it."},source:{code:`const [picked, setPicked] = useState<string | null>(null);

<SuggestionChips
  suggestions={["Summarise this report", "Draft a reply", "List open questions"]}
  onPick={setPicked}
/>`}}}},F=["PickAPrompt"];var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Pick a prompt",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "It does not remember the choice. Here the demo keeps it."
      },
      source: {
        code: "const [picked, setPicked] = useState<string | null>(null);\\n\\n<SuggestionChips\\n  suggestions={[\\"Summarise this report\\", \\"Draft a reply\\", \\"List open questions\\"]}\\n  onPick={setPicked}\\n/>"
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{e as PickAPrompt,F as __namedExportsOrder,v as default};
