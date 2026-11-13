import{j as t}from"./iframe-D-pZXX8_.js";import{M as i,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=c.get("cluster"),I={title:"Full screens and layout/Cluster",component:i,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags that wrap",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Cluster gap={2}>
  <Badge>Draft</Badge>
  <Badge>Shared</Badge>
  <Badge>Reviewed</Badge>
</Cluster>`}}}},r={name:"Push apart",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Push the main button to the far end while the rest stay at the start."},source:{code:`<Cluster justify="between" className="w-full">
  <span>3 files</span>
  <Button size="sm">Send</Button>
</Cluster>`}}}},M=["TagsThatWrap","PushApart"];var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Tags that wrap",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Cluster gap={2}>\\n  <Badge>Draft</Badge>\\n  <Badge>Shared</Badge>\\n  <Badge>Reviewed</Badge>\\n</Cluster>"
      }
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Push apart",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Push the main button to the far end while the rest stay at the start."
      },
      source: {
        code: "<Cluster justify=\\"between\\" className=\\"w-full\\">\\n  <span>3 files</span>\\n  <Button size=\\"sm\\">Send</Button>\\n</Cluster>"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as PushApart,e as TagsThatWrap,M as __namedExportsOrder,I as default};
