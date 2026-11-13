import{j as s}from"./iframe-D-pZXX8_.js";import{ai as d,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=p.get("feedback-bar"),q={title:"Trust/FeedbackBar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Interactive",render:()=>s.jsx(s.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Try thumbs down to see the reasons. The line below shows what was sent."},source:{code:"<FeedbackBar onSubmit={(rating, reason) => console.log(rating, reason)} />"}}}},r={name:"Reset for a new message",render:()=>s.jsx(s.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Send feedback, then choose Next message. The bar starts fresh for each new message."},source:{code:"<FeedbackBar resetKey={message.id} onSubmit={(rating, reason) => send(message.id, rating, reason)} />"}}}},z=["Interactive","ResetForANewMessage"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try thumbs down to see the reasons. The line below shows what was sent."
      },
      source: {
        code: "<FeedbackBar onSubmit={(rating, reason) => console.log(rating, reason)} />"
      }
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Reset for a new message",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Send feedback, then choose Next message. The bar starts fresh for each new message."
      },
      source: {
        code: "<FeedbackBar resetKey={message.id} onSubmit={(rating, reason) => send(message.id, rating, reason)} />"
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};export{e as Interactive,r as ResetForANewMessage,z as __namedExportsOrder,q as default};
