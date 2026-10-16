import{j as o}from"./iframe-DSdOWv-_.js";import{I as m,b as i}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=i.get("collapsible"),R={title:"Controls/Collapsible",component:m,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"Closed by default",render:()=>o.jsx(o.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The heading can hold more than words, like a count or a badge."},source:{code:`<Collapsible header={<span className="text-body leading-5 font-medium">Advanced options</span>}>
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
