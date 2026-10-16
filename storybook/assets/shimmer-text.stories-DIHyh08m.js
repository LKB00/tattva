import{j as t}from"./iframe-DSdOWv-_.js";import{bm as d,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=c.get("shimmer-text"),q={title:"Conversation/ShimmerText",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Status step",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One line saying what the assistant is doing."},source:{code:"<ShimmerText>Searching the web…</ShimmerText>"}}}},r={name:"With a spinner",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a small Spinner when the step takes a while."},source:{code:`<div className="flex items-center gap-2">
  <Spinner size={14} label="Reading files" />
  <ShimmerText>Reading 4 files…</ShimmerText>
</div>`}}}},B=["StatusStep","WithASpinner"];var s,i,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var a,o,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
