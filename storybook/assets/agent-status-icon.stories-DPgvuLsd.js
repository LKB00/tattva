import{j as s}from"./iframe-DSdOWv-_.js";import{b as p}from"./registry-DcbxQlzK.js";import{A as m}from"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=p.get("agent-status-icon"),q={title:"Assistants/AgentStatusIcon",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"All six states",render:()=>s.jsx(s.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each state has its own shape. The icon has a name for screen readers, so it works alone in a crowded row."},source:{code:`<div className="flex gap-4">
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
