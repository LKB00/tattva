import{j as o}from"./iframe-D-pZXX8_.js";import{O as m,b as i}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const a=i.get("collapsible"),R={title:"Controls/Collapsible",component:m,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"Closed by default",render:()=>o.jsx(o.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The heading can hold more than words, like a count or a badge."},source:{code:`<Collapsible header={<span className="text-body leading-5 font-medium">Advanced options</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">These settings apply to new chats only.</p>
</Collapsible>`}}}},t={name:"Open by default",render:()=>o.jsx(o.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Start it open when the content is the main reason people came."},source:{code:`<Collapsible defaultOpen header={<span className="text-body leading-5 font-medium">Details</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">Created on 4 March by the workspace owner.</p>
</Collapsible>`}}}},q=["ClosedByDefault","OpenByDefault"];var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Closed by default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The heading can hold more than words, like a count or a badge."
      },
      source: {
        code: "<Collapsible header={<span className=\\"text-body leading-5 font-medium\\">Advanced options</span>}>\\n  <p className=\\"mt-2 pl-6 text-body leading-5 text-fg-muted\\">These settings apply to new chats only.</p>\\n</Collapsible>"
      }
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Open by default",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start it open when the content is the main reason people came."
      },
      source: {
        code: "<Collapsible defaultOpen header={<span className=\\"text-body leading-5 font-medium\\">Details</span>}>\\n  <p className=\\"mt-2 pl-6 text-body leading-5 text-fg-muted\\">Created on 4 March by the workspace owner.</p>\\n</Collapsible>"
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{e as ClosedByDefault,t as OpenByDefault,q as __namedExportsOrder,R as default};
