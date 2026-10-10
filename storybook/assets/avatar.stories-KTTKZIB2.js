import{j as s}from"./iframe-J6_2PHET.js";import{b as p}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import{A as c}from"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=p.get("avatar"),O={title:"Controls/Avatar",component:c,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"User and assistant",render:()=>s.jsx(s.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The kind picks the look. The name only matters for a person."},source:{code:`<div className="flex items-center gap-3">
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
