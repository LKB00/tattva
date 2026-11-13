import{j as t}from"./iframe-D-pZXX8_.js";import{af as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=c.get("error-state"),_={title:"Empty and error/ErrorState",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"With retry",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Say whether the person's work is safe and offer a next step."},source:{code:'<ErrorState message="We could not load your conversation. Your draft is safe." onRetry={() => {}} />'}}}},e={name:"Custom title, no retry",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Leave out Try again when trying again will not help."},source:{code:'<ErrorState title="File not supported" message="Upload a PDF or a plain text file instead." />'}}}},I=["WithRetry","CustomTitleNoRetry"];var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "With retry",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Say whether the person's work is safe and offer a next step."
      },
      source: {
        code: "<ErrorState message=\\"We could not load your conversation. Your draft is safe.\\" onRetry={() => {}} />"
      }
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,p,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Custom title, no retry",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out Try again when trying again will not help."
      },
      source: {
        code: "<ErrorState title=\\"File not supported\\" message=\\"Upload a PDF or a plain text file instead.\\" />"
      }
    }
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as CustomTitleNoRetry,r as WithRetry,I as __namedExportsOrder,_ as default};
