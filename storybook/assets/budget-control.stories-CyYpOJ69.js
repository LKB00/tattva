import{j as e}from"./iframe-D-pZXX8_.js";import{b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import{B as g}from"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=h.get("budget-control"),$={title:"Assistants/BudgetControl",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},s={name:"Limits for a trip search",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."},source:{code:`<BudgetControl
  limits={[
    { id: "time", label: "Time", used: 12, cap: 30, unit: "minutes" },
    { id: "spend", label: "Spend", used: 4.2, cap: 5, unit: "$" },
    { id: "steps", label: "Steps", used: 50, cap: 50, unit: "steps" },
  ]}
  onCapChange={(id, cap) => save(id, cap)}
/>`}}}},n={name:"Plenty of room",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Nothing is close to a limit, so no warning shows."},source:{code:'<BudgetControl limits={[{ id: "time", label: "Time", used: 3, cap: 30, unit: "minutes" }, { id: "steps", label: "Steps", used: 5, cap: 50, unit: "steps" }]} />'}}}},r={name:"Spend in credits, stop without asking",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Use any unit. Here the choice starts on Stop."},source:{code:'<BudgetControl defaultLimitAction="stop" limits={[{ id: "spend", label: "Spend", used: 20, cap: 100, unit: "credits" }]} />'}}}},q=["LimitsForATripSearch","PlentyOfRoom","SpendInCreditsStopWithoutAsking"];var o,i,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Limits for a trip search",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."
      },
      source: {
        code: "<BudgetControl\\n  limits={[\\n    { id: \\"time\\", label: \\"Time\\", used: 12, cap: 30, unit: \\"minutes\\" },\\n    { id: \\"spend\\", label: \\"Spend\\", used: 4.2, cap: 5, unit: \\"$\\" },\\n    { id: \\"steps\\", label: \\"Steps\\", used: 50, cap: 50, unit: \\"steps\\" },\\n  ]}\\n  onCapChange={(id, cap) => save(id, cap)}\\n/>"
      }
    }
  }
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Plenty of room",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Nothing is close to a limit, so no warning shows."
      },
      source: {
        code: "<BudgetControl limits={[{ id: \\"time\\", label: \\"Time\\", used: 3, cap: 30, unit: \\"minutes\\" }, { id: \\"steps\\", label: \\"Steps\\", used: 5, cap: 50, unit: \\"steps\\" }]} />"
      }
    }
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,u,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Spend in credits, stop without asking",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use any unit. Here the choice starts on Stop."
      },
      source: {
        code: "<BudgetControl defaultLimitAction=\\"stop\\" limits={[{ id: \\"spend\\", label: \\"Spend\\", used: 20, cap: 100, unit: \\"credits\\" }]} />"
      }
    }
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{s as LimitsForATripSearch,n as PlentyOfRoom,r as SpendInCreditsStopWithoutAsking,q as __namedExportsOrder,$ as default};
