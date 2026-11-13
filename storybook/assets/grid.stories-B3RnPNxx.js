import{j as r}from"./iframe-D-pZXX8_.js";import{as as C,b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const e=h.get("grid"),H={title:"Full screens and layout/Grid",component:C,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},a={name:"Cards that rearrange",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"One column on phones, two on tablets, three on large screens."},source:{code:`<Grid cols={{ base: 1, md: 2, lg: 3 }} className="w-full">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Grid>`}}}},n={name:"Fits as many as it can",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Each item has a minimum width. The number per row follows the space available."},source:{code:`<Grid min="9rem" className="w-full">
  <Card>A</Card><Card>B</Card><Card>C</Card><Card>D</Card>
</Grid>`}}}},s={name:"Items that span columns",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"An item can take up more than one column."},source:{code:`<Grid className="w-full">
  <div className="col-span-4 md:col-span-3 lg:col-span-4">Rail</div>
  <div className="col-span-4 md:col-span-5 lg:col-span-8">Content</div>
</Grid>`}}}},J=["CardsThatRearrange","FitsAsManyAsItCan","ItemsThatSpanColumns"];var o,t,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Cards that rearrange",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One column on phones, two on tablets, three on large screens."
      },
      source: {
        code: "<Grid cols={{ base: 1, md: 2, lg: 3 }} className=\\"w-full\\">\\n  <Card>One</Card>\\n  <Card>Two</Card>\\n  <Card>Three</Card>\\n</Grid>"
      }
    }
  }
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var m,c,i;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Fits as many as it can",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each item has a minimum width. The number per row follows the space available."
      },
      source: {
        code: "<Grid min=\\"9rem\\" className=\\"w-full\\">\\n  <Card>A</Card><Card>B</Card><Card>C</Card><Card>D</Card>\\n</Grid>"
      }
    }
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Items that span columns",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An item can take up more than one column."
      },
      source: {
        code: "<Grid className=\\"w-full\\">\\n  <div className=\\"col-span-4 md:col-span-3 lg:col-span-4\\">Rail</div>\\n  <div className=\\"col-span-4 md:col-span-5 lg:col-span-8\\">Content</div>\\n</Grid>"
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as CardsThatRearrange,n as FitsAsManyAsItCan,s as ItemsThatSpanColumns,J as __namedExportsOrder,H as default};
