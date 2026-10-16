import{j as s}from"./iframe-DSdOWv-_.js";import{b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import{A as c}from"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=p.get("avatar"),O={title:"Controls/Avatar",component:c,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"User and assistant",render:()=>s.jsx(s.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The kind picks the look. The name only matters for a person."},source:{code:`<div className="flex items-center gap-3">
  <Avatar kind="user" name="Lokesh" />
  <Avatar kind="ai" />
</div>`}}}},r={name:"Sizes",render:()=>s.jsx(s.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Small and medium. The sparkle shrinks with it."},source:{code:`<div className="flex items-center gap-3">
  <Avatar kind="user" name="Mira" size="sm" />
  <Avatar kind="user" name="Mira" size="md" />
  <Avatar kind="ai" size="sm" />
  <Avatar kind="ai" size="md" />
</div>`}}}},R=["UserAndAssistant","Sizes"];var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "User and assistant",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The kind picks the look. The name only matters for a person."
      },
      source: {
        code: "<div className=\\"flex items-center gap-3\\">\\n  <Avatar kind=\\"user\\" name=\\"Lokesh\\" />\\n  <Avatar kind=\\"ai\\" />\\n</div>"
      }
    }
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var o,m,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Small and medium. The sparkle shrinks with it."
      },
      source: {
        code: "<div className=\\"flex items-center gap-3\\">\\n  <Avatar kind=\\"user\\" name=\\"Mira\\" size=\\"sm\\" />\\n  <Avatar kind=\\"user\\" name=\\"Mira\\" size=\\"md\\" />\\n  <Avatar kind=\\"ai\\" size=\\"sm\\" />\\n  <Avatar kind=\\"ai\\" size=\\"md\\" />\\n</div>"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as Sizes,e as UserAndAssistant,R as __namedExportsOrder,O as default};
