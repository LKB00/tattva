import{j as s}from"./iframe-D-pZXX8_.js";import{b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import{A as m}from"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=p.get("agent-status-icon"),q={title:"Assistants/AgentStatusIcon",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"All six states",render:()=>s.jsx(s.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each state has its own shape. The icon has a name for screen readers, so it works alone in a crowded row."},source:{code:`<div className="flex gap-4">
  <AgentStatusIcon status="working" />
  <AgentStatusIcon status="needs-input" />
  <AgentStatusIcon status="idle" />
  <AgentStatusIcon status="completed" />
  <AgentStatusIcon status="failed" />
  <AgentStatusIcon status="stopped" />
</div>`}}}},e={name:"With words beside it",render:()=>s.jsx(s.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Show the text when there is room. A screen reader reads the text once and skips the icon."},source:{code:`<div className="flex flex-wrap gap-4">
  <AgentStatusIcon status="needs-input" showLabel />
  <AgentStatusIcon status="completed" showLabel />
  <AgentStatusIcon status="failed" showLabel label="Failed to start" />
</div>`}}}},z=["AllSixStates","WithWordsBesideIt"];var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "All six states",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each state has its own shape. The icon has a name for screen readers, so it works alone in a crowded row."
      },
      source: {
        code: "<div className=\\"flex gap-4\\">\\n  <AgentStatusIcon status=\\"working\\" />\\n  <AgentStatusIcon status=\\"needs-input\\" />\\n  <AgentStatusIcon status=\\"idle\\" />\\n  <AgentStatusIcon status=\\"completed\\" />\\n  <AgentStatusIcon status=\\"failed\\" />\\n  <AgentStatusIcon status=\\"stopped\\" />\\n</div>"
      }
    }
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With words beside it",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Show the text when there is room. A screen reader reads the text once and skips the icon."
      },
      source: {
        code: "<div className=\\"flex flex-wrap gap-4\\">\\n  <AgentStatusIcon status=\\"needs-input\\" showLabel />\\n  <AgentStatusIcon status=\\"completed\\" showLabel />\\n  <AgentStatusIcon status=\\"failed\\" showLabel label=\\"Failed to start\\" />\\n</div>"
      }
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{t as AllSixStates,e as WithWordsBesideIt,z as __namedExportsOrder,q as default};
