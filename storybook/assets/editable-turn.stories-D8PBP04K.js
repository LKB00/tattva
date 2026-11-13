import{j as r}from"./iframe-D-pZXX8_.js";import{ad as i,b as a}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=a.get("editable-turn"),F={title:"Conversation/EditableTurn",component:i,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Edit and send again",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Edit, change the question, and Send. Then use the pager to go back."},source:{code:`<EditableTurn
  versions={versions}
  current={current}
  onChangeVersion={setCurrent}
  onResend={(text) => sendEdit(text)}
  onCopy={copy}
/>`}}}},I=["EditAndSendAgain"];var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Edit and send again",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Edit, change the question, and Send. Then use the pager to go back."
      },
      source: {
        code: "<EditableTurn\\n  versions={versions}\\n  current={current}\\n  onChangeVersion={setCurrent}\\n  onResend={(text) => sendEdit(text)}\\n  onCopy={copy}\\n/>"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};export{e as EditAndSendAgain,I as __namedExportsOrder,F as default};
