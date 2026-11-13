import{j as t}from"./iframe-D-pZXX8_.js";import{bf as i,b as a}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=a.get("research-run"),F={title:"Conversation/ResearchRun",component:i,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Researching a question",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Watch the phases and count move, press Stop, or wait for the report."},source:{code:`<ResearchRun
  question="Which European cities cut traffic deaths the most since 2015, and how?"
  status="running"
  phases={phases}
  sourcesRead={34}
  elapsed="4 min"
  activity="Reading itf-oecd.org"
  onStop={stop}
  onOpenReport={openReport}
/>`}}}},I=["ResearchingAQuestion"];var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Researching a question",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Watch the phases and count move, press Stop, or wait for the report."
      },
      source: {
        code: "<ResearchRun\\n  question=\\"Which European cities cut traffic deaths the most since 2015, and how?\\"\\n  status=\\"running\\"\\n  phases={phases}\\n  sourcesRead={34}\\n  elapsed=\\"4 min\\"\\n  activity=\\"Reading itf-oecd.org\\"\\n  onStop={stop}\\n  onOpenReport={openReport}\\n/>"
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};export{e as ResearchingAQuestion,I as __namedExportsOrder,F as default};
