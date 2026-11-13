import{j as n}from"./iframe-D-pZXX8_.js";import{m,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=c.get("attention-dot"),C={title:"Controls/AttentionDot",component:m,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Beside text",render:()=>n.jsx(n.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The dot comes with a line saying what the person has to do."},source:{code:`<div className="flex items-center gap-2 text-body leading-5 text-fg">
  <AttentionDot label="Approval needed" />
  <span>The assistant wants to run a command on your computer</span>
</div>`}}}},t={name:"In a list row",render:()=>n.jsx(n.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A chat in a list that is waiting on you. The dot is the marker. The words say why."},source:{code:`<div className="flex w-72 items-center justify-between rounded-card border border-line bg-surface px-3 py-2 text-body leading-5 text-fg">
  <span>Quarterly report</span>
  <span className="flex items-center gap-2 text-small leading-4 text-fg-muted">
    <AttentionDot />
    Needs your input
  </span>
</div>`}}}},O=["BesideText","InAListRow"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Beside text",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The dot comes with a line saying what the person has to do."
      },
      source: {
        code: "<div className=\\"flex items-center gap-2 text-body leading-5 text-fg\\">\\n  <AttentionDot label=\\"Approval needed\\" />\\n  <span>The assistant wants to run a command on your computer</span>\\n</div>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "In a list row",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A chat in a list that is waiting on you. The dot is the marker. The words say why."
      },
      source: {
        code: "<div className=\\"flex w-72 items-center justify-between rounded-card border border-line bg-surface px-3 py-2 text-body leading-5 text-fg\\">\\n  <span>Quarterly report</span>\\n  <span className=\\"flex items-center gap-2 text-small leading-4 text-fg-muted\\">\\n    <AttentionDot />\\n    Needs your input\\n  </span>\\n</div>"
      }
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as BesideText,t as InAListRow,O as __namedExportsOrder,C as default};
