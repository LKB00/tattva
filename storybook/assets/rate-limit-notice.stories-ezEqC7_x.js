import{j as t}from"./iframe-D-pZXX8_.js";import{bc as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=d.get("rate-limit-notice"),z={title:"Empty and error/RateLimitNotice",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"With upgrade",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The Upgrade button is a small primary button."},source:{code:'<RateLimitNotice resetsIn="2 hours" onUpgrade={() => {}} />'}}}},r={name:"Wait only",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:'<RateLimitNotice resetsIn="45 minutes" />'}}}},A=["WithUpgrade","WaitOnly"];var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With upgrade",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The Upgrade button is a small primary button."
      },
      source: {
        code: "<RateLimitNotice resetsIn=\\"2 hours\\" onUpgrade={() => {}} />"
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Wait only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<RateLimitNotice resetsIn=\\"45 minutes\\" />"
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{r as WaitOnly,e as WithUpgrade,A as __namedExportsOrder,z as default};
