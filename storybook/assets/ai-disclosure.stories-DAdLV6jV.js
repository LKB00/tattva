import{j as o}from"./iframe-D-pZXX8_.js";import{f as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=d.get("ai-disclosure"),z={title:"Trust/AIDisclosure",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Default",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The built-in message."},source:{code:"<AIDisclosure />"}}}},r={name:"Custom message",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Change the words for a specific part of your product."},source:{code:"<AIDisclosure>Answers about medication are not medical advice.</AIDisclosure>"}}}},B=["Default","CustomMessage"];var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The built-in message."
      },
      source: {
        code: "<AIDisclosure />"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,m,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Custom message",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change the words for a specific part of your product."
      },
      source: {
        code: "<AIDisclosure>Answers about medication are not medical advice.</AIDisclosure>"
      }
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{r as CustomMessage,e as Default,B as __namedExportsOrder,z as default};
