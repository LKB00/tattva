import{j as s}from"./iframe-D-pZXX8_.js";import{b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import{A as c}from"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const a=p.get("avatar"),O={title:"Controls/Avatar",component:c,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"User and assistant",render:()=>s.jsx(s.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The kind picks the look. The name only matters for a person."},source:{code:`<div className="flex items-center gap-3">
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
