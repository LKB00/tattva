import{j as t}from"./iframe-D-pZXX8_.js";import{ci as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=d.get("typing-indicator"),_={title:"Conversation/TypingIndicator",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Default",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:'The default label is "Assistant is thinking".'},source:{code:"<TypingIndicator />"}}}},r={name:"Where the reply will appear",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Placed at the start of the coming reply, under the person's message, so nothing jumps when text arrives."},source:{code:`<div className="w-full max-w-md space-y-4">
  <Message role="user">Can you check my order?</Message>
  <TypingIndicator label="The assistant is writing" />
</div>`}}}},O=["Default","WhereTheReplyWillAppear"];var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default label is \\"Assistant is thinking\\"."
      },
      source: {
        code: "<TypingIndicator />"
      }
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Where the reply will appear",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placed at the start of the coming reply, under the person's message, so nothing jumps when text arrives."
      },
      source: {
        code: "<div className=\\"w-full max-w-md space-y-4\\">\\n  <Message role=\\"user\\">Can you check my order?</Message>\\n  <TypingIndicator label=\\"The assistant is writing\\" />\\n</div>"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as Default,r as WhereTheReplyWillAppear,O as __namedExportsOrder,_ as default};
