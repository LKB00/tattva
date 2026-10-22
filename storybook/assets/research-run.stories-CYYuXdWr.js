import{j as t}from"./iframe-C8v_uZy_.js";import{b9 as i,b as a}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=a.get("research-run"),F={title:"Conversation/ResearchRun",component:i,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Researching a question",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Watch the phases and count move, press Stop, or wait for the report."},source:{code:`<ResearchRun
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
