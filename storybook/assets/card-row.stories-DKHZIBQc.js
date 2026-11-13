import{j as o}from"./iframe-D-pZXX8_.js";import{v as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=c.get("card-row"),q={title:"Generated interfaces/CardRow",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"A row of results",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Wraps on wide screens, swipes on a phone."},source:{code:`<CardRow label="Hotels in Paris">
  <ResultCard ... />
  <ResultCard ... />
  <ResultCard ... />
</CardRow>`}}}},e={name:"Wider cards",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"minCardWidth sets how narrow a card may get before the row wraps."},source:{code:'<CardRow label="Plans" minCardWidth={72}>...</CardRow>'}}}},z=["ARowOfResults","WiderCards"];var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A row of results",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Wraps on wide screens, swipes on a phone."
      },
      source: {
        code: "<CardRow label=\\"Hotels in Paris\\">\\n  <ResultCard ... />\\n  <ResultCard ... />\\n  <ResultCard ... />\\n</CardRow>"
      }
    }
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,i,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Wider cards",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "minCardWidth sets how narrow a card may get before the row wraps."
      },
      source: {
        code: "<CardRow label=\\"Plans\\" minCardWidth={72}>...</CardRow>"
      }
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as ARowOfResults,e as WiderCards,z as __namedExportsOrder,q as default};
