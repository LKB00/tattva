import{j as n}from"./iframe-D-pZXX8_.js";import{c4 as d,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=p.get("thinking-block"),q={title:"Conversation/ThinkingBlock",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Active",render:()=>n.jsx(n.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Use while the assistant is still thinking."},source:{code:"<ThinkingBlock active>Comparing the two schedules against the team calendar.</ThinkingBlock>"}}}},t={name:"Finished",render:()=>n.jsx(n.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"When done, give the time taken. It shows 0 seconds if you leave it out."},source:{code:"<ThinkingBlock seconds={8}>Comparing the two schedules against the team calendar.</ThinkingBlock>"}}}},z=["Active","Finished"];var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Active",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use while the assistant is still thinking."
      },
      source: {
        code: "<ThinkingBlock active>Comparing the two schedules against the team calendar.</ThinkingBlock>"
      }
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Finished",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When done, give the time taken. It shows 0 seconds if you leave it out."
      },
      source: {
        code: "<ThinkingBlock seconds={8}>Comparing the two schedules against the team calendar.</ThinkingBlock>"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as Active,t as Finished,z as __namedExportsOrder,q as default};
