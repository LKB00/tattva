import{j as r}from"./iframe-D-pZXX8_.js";import{aq as m,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=d.get("ghost-text"),W={title:"Creating/GhostText",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Accept or dismiss",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."},source:{code:`<GhostText typed="Thanks for the update." partialHint="Ctrl + Right accepts one word"
  onAccept={() => accept()} onDismiss={() => dismiss()}>
  {" I will review the draft tomorrow morning."}
</GhostText>`}}}},t={name:"Display only",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Without buttons the hint is plain text. Use it when your editor handles every key."},source:{code:'<GhostText typed="Dear team,">{" thank you for your patience."}</GhostText>'}}}},_=["AcceptOrDismiss","DisplayOnly"];var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Accept or dismiss",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."
      },
      source: {
        code: "<GhostText typed=\\"Thanks for the update.\\" partialHint=\\"Ctrl + Right accepts one word\\"\\n  onAccept={() => accept()} onDismiss={() => dismiss()}>\\n  {\\" I will review the draft tomorrow morning.\\"}\\n</GhostText>"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,p,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Display only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Without buttons the hint is plain text. Use it when your editor handles every key."
      },
      source: {
        code: "<GhostText typed=\\"Dear team,\\">{\\" thank you for your patience.\\"}</GhostText>"
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{e as AcceptOrDismiss,t as DisplayOnly,_ as __namedExportsOrder,W as default};
