import{j as t}from"./iframe-D-pZXX8_.js";import{bz as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=c.get("shimmer-text"),q={title:"Conversation/ShimmerText",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Status step",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One line saying what the assistant is doing."},source:{code:"<ShimmerText>Searching the web…</ShimmerText>"}}}},r={name:"With a spinner",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a small Spinner when the step takes a while."},source:{code:`<div className="flex items-center gap-2">
  <Spinner size={14} label="Reading files" />
  <ShimmerText>Reading 4 files…</ShimmerText>
</div>`}}}},B=["StatusStep","WithASpinner"];var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Status step",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One line saying what the assistant is doing."
      },
      source: {
        code: "<ShimmerText>Searching the web…</ShimmerText>"
      }
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var m,o,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With a spinner",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add a small Spinner when the step takes a while."
      },
      source: {
        code: "<div className=\\"flex items-center gap-2\\">\\n  <Spinner size={14} label=\\"Reading files\\" />\\n  <ShimmerText>Reading 4 files…</ShimmerText>\\n</div>"
      }
    }
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};export{e as StatusStep,r as WithASpinner,B as __namedExportsOrder,q as default};
