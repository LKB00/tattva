import{j as r}from"./iframe-DSdOWv-_.js";import{b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import{C as l}from"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=c.get("confidence-indicator"),k={title:"Trust/ConfidenceIndicator",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"All levels",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Low fills one bar, medium two and high three."},source:{code:`<div className="flex flex-col items-start gap-3">
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
