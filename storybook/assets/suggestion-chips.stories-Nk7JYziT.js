import{j as o}from"./iframe-DSdOWv-_.js";import{bJ as n,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=p.get("suggestion-chips"),v={title:"Conversation/SuggestionChips",component:n,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Pick a prompt",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"It does not remember the choice. Here the demo keeps it."},source:{code:`const [picked, setPicked] = useState<string | null>(null);

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
