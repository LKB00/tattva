import{j as r}from"./iframe-D-pZXX8_.js";import{bJ as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=c.get("spinner"),k={title:"Empty and error/Spinner",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Sizes",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Four sizes, from small to large."},source:{code:`<div className="flex items-center gap-4">
  <Spinner size={14} />
  <Spinner />
  <Spinner size={24} />
  <Spinner size={32} />
</div>`}}}},n={name:"Inside a button",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Place it before a button's label to show something is happening. The label should say what."},source:{code:`<Button variant="secondary" disabled leading={<Spinner size={14} label="Saving" />}>
  Saving
</Button>`}}}},q=["Sizes","InsideAButton"];var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four sizes, from small to large."
      },
      source: {
        code: "<div className=\\"flex items-center gap-4\\">\\n  <Spinner size={14} />\\n  <Spinner />\\n  <Spinner size={24} />\\n  <Spinner size={32} />\\n</div>"
      }
    }
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Inside a button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Place it before a button's label to show something is happening. The label should say what."
      },
      source: {
        code: "<Button variant=\\"secondary\\" disabled leading={<Spinner size={14} label=\\"Saving\\" />}>\\n  Saving\\n</Button>"
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{n as InsideAButton,e as Sizes,q as __namedExportsOrder,k as default};
