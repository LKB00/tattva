import{j as t}from"./iframe-D-pZXX8_.js";import{b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import{K as c}from"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=d.get("kbd"),z={title:"Controls/Kbd",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Single keys",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Put the label next to the action it triggers."},source:{code:'<p className="flex items-center gap-2 text-body leading-5">Press <Kbd>Esc</Kbd> to close</p>'}}}},r={name:"Combination",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Use one label per key."},source:{code:'<p className="flex items-center gap-1 text-body leading-5"><Kbd>Ctrl</Kbd> + <Kbd>Enter</Kbd><span className="ml-2 text-fg-muted">Send</span></p>'}}}},A=["SingleKeys","Combination"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Single keys",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Put the label next to the action it triggers."
      },
      source: {
        code: "<p className=\\"flex items-center gap-2 text-body leading-5\\">Press <Kbd>Esc</Kbd> to close</p>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Combination",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use one label per key."
      },
      source: {
        code: "<p className=\\"flex items-center gap-1 text-body leading-5\\"><Kbd>Ctrl</Kbd> + <Kbd>Enter</Kbd><span className=\\"ml-2 text-fg-muted\\">Send</span></p>"
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{r as Combination,e as SingleKeys,A as __namedExportsOrder,z as default};
