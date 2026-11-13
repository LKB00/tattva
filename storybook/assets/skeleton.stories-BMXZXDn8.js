import{j as o}from"./iframe-D-pZXX8_.js";import{bB as c,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=p.get("skeleton"),O={title:"Empty and error/Skeleton",component:c,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Text lines",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Make the lines different lengths so it looks like a paragraph."},source:{code:`<div className="flex w-72 flex-col gap-2">
  <Skeleton className="h-3 w-full" />
  <Skeleton className="h-3 w-11/12" />
  <Skeleton className="h-3 w-2/3" />
</div>`}}}},s={name:"Message row",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A round block for a picture, with two lines of text beside it."},source:{code:`<div className="flex w-72 items-start gap-3">
  <Skeleton className="size-8 rounded-full" />
  <div className="flex flex-1 flex-col gap-2">
    <Skeleton className="h-3 w-24" />
    <Skeleton className="h-3 w-full" />
  </div>
</div>`}}}},q=["TextLines","MessageRow"];var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Text lines",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Make the lines different lengths so it looks like a paragraph."
      },
      source: {
        code: "<div className=\\"flex w-72 flex-col gap-2\\">\\n  <Skeleton className=\\"h-3 w-full\\" />\\n  <Skeleton className=\\"h-3 w-11/12\\" />\\n  <Skeleton className=\\"h-3 w-2/3\\" />\\n</div>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,i,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Message row",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A round block for a picture, with two lines of text beside it."
      },
      source: {
        code: "<div className=\\"flex w-72 items-start gap-3\\">\\n  <Skeleton className=\\"size-8 rounded-full\\" />\\n  <div className=\\"flex flex-1 flex-col gap-2\\">\\n    <Skeleton className=\\"h-3 w-24\\" />\\n    <Skeleton className=\\"h-3 w-full\\" />\\n  </div>\\n</div>"
      }
    }
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{s as MessageRow,e as TextLines,q as __namedExportsOrder,O as default};
