import{j as r}from"./iframe-D-pZXX8_.js";import{b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import{C as l}from"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=c.get("confidence-indicator"),k={title:"Trust/ConfidenceIndicator",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"All levels",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Low fills one bar, medium two and high three."},source:{code:`<div className="flex flex-col items-start gap-3">
  <ConfidenceIndicator level="low" />
  <ConfidenceIndicator level="medium" />
  <ConfidenceIndicator level="high" />
</div>`}}}},o={name:"Without the hidden explanation",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Turn off the hidden explanation for screen readers. The tooltip still shows on hover."},source:{code:'<ConfidenceIndicator level="medium" showText={false} />'}}}},q=["AllLevels","WithoutTheHiddenExplanation"];var t,i,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "All levels",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Low fills one bar, medium two and high three."
      },
      source: {
        code: "<div className=\\"flex flex-col items-start gap-3\\">\\n  <ConfidenceIndicator level=\\"low\\" />\\n  <ConfidenceIndicator level=\\"medium\\" />\\n  <ConfidenceIndicator level=\\"high\\" />\\n</div>"
      }
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var a,d,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Without the hidden explanation",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Turn off the hidden explanation for screen readers. The tooltip still shows on hover."
      },
      source: {
        code: "<ConfidenceIndicator level=\\"medium\\" showText={false} />"
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};export{e as AllLevels,o as WithoutTheHiddenExplanation,q as __namedExportsOrder,k as default};
