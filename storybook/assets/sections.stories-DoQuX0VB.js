import{j as s}from"./iframe-D-pZXX8_.js";import{bs as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=d.get("sections"),q={title:"Generated interfaces/Sections",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"While the answer streams",render:()=>s.jsx(s.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each new section opens as it arrives, then the answer settles on the first."},source:{code:`<Sections streaming={isStreaming} sections={[
  { id: "flights", title: "Flights", meta: "2 options", content: <FactList facts={flightFacts} /> },
  { id: "stay", title: "Where to stay", meta: "3 hotels", content: stayText },
  { id: "plan", title: "Day by day", meta: "2 days", content: planText },
]} />`}}}},t={name:"A finished answer",render:()=>s.jsx(s.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The first section open, the rest folded."},source:{code:"<Sections sections={sections} />"}}}},z=["WhileTheAnswerStreams","AFinishedAnswer"];var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "While the answer streams",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each new section opens as it arrives, then the answer settles on the first."
      },
      source: {
        code: "<Sections streaming={isStreaming} sections={[\\n  { id: \\"flights\\", title: \\"Flights\\", meta: \\"2 options\\", content: <FactList facts={flightFacts} /> },\\n  { id: \\"stay\\", title: \\"Where to stay\\", meta: \\"3 hotels\\", content: stayText },\\n  { id: \\"plan\\", title: \\"Day by day\\", meta: \\"2 days\\", content: planText },\\n]} />"
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A finished answer",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first section open, the rest folded."
      },
      source: {
        code: "<Sections sections={sections} />"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{t as AFinishedAnswer,e as WhileTheAnswerStreams,z as __namedExportsOrder,q as default};
