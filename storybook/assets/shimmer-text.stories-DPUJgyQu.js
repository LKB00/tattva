import{j as t}from"./iframe-C8v_uZy_.js";import{br as d,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=c.get("shimmer-text"),q={title:"Conversation/ShimmerText",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Status step",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One line saying what the assistant is doing."},source:{code:"<ShimmerText>Searching the web…</ShimmerText>"}}}},r={name:"With a spinner",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a small Spinner when the step takes a while."},source:{code:`<div className="flex items-center gap-2">
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
