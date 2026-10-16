import{j as t}from"./iframe-DSdOWv-_.js";import{b7 as i,b as a}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=a.get("research-run"),F={title:"Conversation/ResearchRun",component:i,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Researching a question",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Watch the phases and count move, press Stop, or wait for the report."},source:{code:`<ResearchRun
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
