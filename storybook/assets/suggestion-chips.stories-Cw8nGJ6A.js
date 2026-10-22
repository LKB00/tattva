import{j as o}from"./iframe-C8v_uZy_.js";import{bO as n,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=p.get("suggestion-chips"),_={title:"Conversation/SuggestionChips",component:n,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Pick a prompt",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"It does not remember the choice. Here the demo keeps it."},source:{code:`const [picked, setPicked] = useState<string | null>(null);

<SuggestionChips
  suggestions={["Summarise this report", "Draft a reply", "List open questions"]}
  onPick={setPicked}
/>`}}}},v=["PickAPrompt"];var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{e as PickAPrompt,v as __namedExportsOrder,_ as default};
