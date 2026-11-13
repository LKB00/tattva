import{j as n}from"./iframe-D-pZXX8_.js";import{c8 as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const i=c.get("timeline"),_={title:"Numbers/Timeline",component:p,tags:["autodocs"],parameters:{docs:{description:{component:i.summary+" "+i.description}}}},e={name:"What happened, and when",render:()=>n.jsx(n.Fragment,{children:i.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Timeline events={[
  { id: "1", time: "09:40", title: "Request received", state: "done" },
  { id: "2", time: "09:41", title: "Reading 4 files", state: "current" },
  { id: "3", time: "09:44", title: "Report", state: "upcoming" },
]} />`}}}},t={name:"When something fails",render:()=>n.jsx(n.Fragment,{children:i.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:`<Timeline events={[
  { id: "1", time: "3 Oct", dateTime: "2026-10-03", title: "Update started", state: "done" },
  { id: "2", time: "4 Oct", dateTime: "2026-10-04", title: "Moving your data", state: "failed", description: "It took too long." },
]} />`}}}},N=["WhatHappenedAndWhen","WhenSomethingFails"];var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "What happened, and when",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Timeline events={[\\n  { id: \\"1\\", time: \\"09:40\\", title: \\"Request received\\", state: \\"done\\" },\\n  { id: \\"2\\", time: \\"09:41\\", title: \\"Reading 4 files\\", state: \\"current\\" },\\n  { id: \\"3\\", time: \\"09:44\\", title: \\"Report\\", state: \\"upcoming\\" },\\n]} />"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,m,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "When something fails",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Timeline events={[\\n  { id: \\"1\\", time: \\"3 Oct\\", dateTime: \\"2026-10-03\\", title: \\"Update started\\", state: \\"done\\" },\\n  { id: \\"2\\", time: \\"4 Oct\\", dateTime: \\"2026-10-04\\", title: \\"Moving your data\\", state: \\"failed\\", description: \\"It took too long.\\" },\\n]} />"
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{e as WhatHappenedAndWhen,t as WhenSomethingFails,N as __namedExportsOrder,_ as default};
