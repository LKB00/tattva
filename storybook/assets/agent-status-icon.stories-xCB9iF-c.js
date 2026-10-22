import{j as s}from"./iframe-C8v_uZy_.js";import{b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import{A as m}from"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=p.get("agent-status-icon"),q={title:"Assistants/AgentStatusIcon",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"All six states",render:()=>s.jsx(s.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each state has its own shape. The icon has a name for screen readers, so it works alone in a crowded row."},source:{code:`<div className="flex gap-4">
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
