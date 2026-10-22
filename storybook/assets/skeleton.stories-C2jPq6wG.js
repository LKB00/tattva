import{j as o}from"./iframe-C8v_uZy_.js";import{bt as c,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=p.get("skeleton"),q={title:"Empty and error/Skeleton",component:c,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Text lines",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Make the lines different lengths so it looks like a paragraph."},source:{code:`<div className="flex w-72 flex-col gap-2">
  <Skeleton className="h-3 w-full" />
  <Skeleton className="h-3 w-11/12" />
  <Skeleton className="h-3 w-2/3" />
</div>`}}}},s={name:"Message row",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A round block for a picture, with two lines of text beside it."},source:{code:`<div className="flex w-72 items-start gap-3">
  <Skeleton className="size-8 rounded-full" />
  <div className="flex flex-1 flex-col gap-2">
    <Skeleton className="h-3 w-24" />
    <Skeleton className="h-3 w-full" />
  </div>
</div>`}}}},B=["TextLines","MessageRow"];var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{s as MessageRow,e as TextLines,B as __namedExportsOrder,q as default};
