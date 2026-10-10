import{j as s}from"./iframe-J6_2PHET.js";import{b as p}from"./registry-DJg46al6.js";import{A as m}from"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=p.get("agent-status-icon"),q={title:"Assistants/AgentStatusIcon",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"All six states",render:()=>s.jsx(s.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each state has its own shape. The icon has a name for screen readers, so it works alone in a crowded row."},source:{code:`<div className="flex gap-4">
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
