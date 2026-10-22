import{j as s}from"./iframe-C8v_uZy_.js";import{b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import{A as c}from"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const a=p.get("avatar"),O={title:"Controls/Avatar",component:c,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"User and assistant",render:()=>s.jsx(s.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The kind picks the look. The name only matters for a person."},source:{code:`<div className="flex items-center gap-3">
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
