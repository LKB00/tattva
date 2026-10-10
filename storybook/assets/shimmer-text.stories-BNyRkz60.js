import{j as t}from"./iframe-J6_2PHET.js";import{ba as d,b as c}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=c.get("shimmer-text"),q={title:"Conversation/ShimmerText",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Status step",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One line saying what the assistant is doing."},source:{code:"<ShimmerText>Searching the web…</ShimmerText>"}}}},r={name:"With a spinner",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a small Spinner when the step takes a while."},source:{code:`<div className="flex items-center gap-2">
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
