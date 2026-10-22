import{j as r}from"./iframe-C8v_uZy_.js";import{b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import{C as l}from"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=c.get("confidence-indicator"),k={title:"Trust/ConfidenceIndicator",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"All levels",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Low fills one bar, medium two and high three."},source:{code:`<div className="flex flex-col items-start gap-3">
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
