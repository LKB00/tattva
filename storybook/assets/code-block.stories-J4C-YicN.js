import{j as r}from"./iframe-D-pZXX8_.js";import{N as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=d.get("code-block"),O={title:"Conversation/CodeBlock",component:c,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"With a language",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The language is only a name shown on top."},source:{code:'<CodeBlock language="ts" code={sampleCode} />'}}}},o={name:"Default label",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"With no language, the name reads text."},source:{code:'<CodeBlock code="npm install @tattva/ui" />'}}}},R=["WithALanguage","DefaultLabel"];var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "With a language",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The language is only a name shown on top."
      },
      source: {
        code: "<CodeBlock language=\\"ts\\" code={sampleCode} />"
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Default label",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no language, the name reads text."
      },
      source: {
        code: "<CodeBlock code=\\"npm install @tattva/ui\\" />"
      }
    }
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};export{o as DefaultLabel,e as WithALanguage,R as __namedExportsOrder,O as default};
