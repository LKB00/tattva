import{j as t}from"./iframe-J6_2PHET.js";import{a$ as d,b as c}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=c.get("reveal"),C={title:"Full screens and layout/Reveal",component:d,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"One after another",render:()=>t.jsx(t.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Each item appears just after the one before."},source:{code:`<Stack gap={2}>
  {items.map((t, i) => (
    <Reveal key={t} index={i}>{t}</Reveal>
  ))}
</Stack>`}}}},r={name:"Fade only",render:()=>t.jsx(t.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Use the fade when you do not want any movement."},source:{code:'<Reveal variant="fade">Saved</Reveal>'}}}},D=["OneAfterAnother","FadeOnly"];var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "One after another",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each item appears just after the one before."
      },
      source: {
        code: "<Stack gap={2}>\\n  {items.map((t, i) => (\\n    <Reveal key={t} index={i}>{t}</Reveal>\\n  ))}\\n</Stack>"
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Fade only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use the fade when you do not want any movement."
      },
      source: {
        code: "<Reveal variant=\\"fade\\">Saved</Reveal>"
      }
    }
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};export{r as FadeOnly,e as OneAfterAnother,D as __namedExportsOrder,C as default};
