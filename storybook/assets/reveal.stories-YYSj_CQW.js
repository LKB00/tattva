import{j as t}from"./iframe-D-pZXX8_.js";import{bi as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=c.get("reveal"),D={title:"Full screens and layout/Reveal",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"One after another",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Each item appears just after the one before."},source:{code:`<Stack gap={2}>
  {items.map((t, i) => (
    <Reveal key={t} index={i}>{t}</Reveal>
  ))}
</Stack>`}}}},r={name:"Fade only",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Use the fade when you do not want any movement."},source:{code:'<Reveal variant="fade">Saved</Reveal>'}}}},G=["OneAfterAnother","FadeOnly"];var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};export{r as FadeOnly,e as OneAfterAnother,G as __namedExportsOrder,D as default};
