import{j as t}from"./iframe-D-pZXX8_.js";import{bv as s,b as a}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=a.get("sensitive-data-guard"),P={title:"Trust/SensitiveDataGuard",component:s,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"A card number and a phone number",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Take one out, take both out, or send anyway. Edit the message and the warning follows."},source:{code:`const findings = findSensitive(text);

<SensitiveDataGuard
  findings={findings}
  onRemove={(id) => setText(removeSensitive(text, findings.filter((f) => f.id === id)))}
  onRemoveAll={() => setText(removeSensitive(text, findings))}
  onSendAnyway={send}
/>`}}}},_=["ACardNumberAndAPhoneNumber"];var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "A card number and a phone number",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Take one out, take both out, or send anyway. Edit the message and the warning follows."
      },
      source: {
        code: "const findings = findSensitive(text);\\n\\n<SensitiveDataGuard\\n  findings={findings}\\n  onRemove={(id) => setText(removeSensitive(text, findings.filter((f) => f.id === id)))}\\n  onRemoveAll={() => setText(removeSensitive(text, findings))}\\n  onSendAnyway={send}\\n/>"
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{e as ACardNumberAndAPhoneNumber,_ as __namedExportsOrder,P as default};
