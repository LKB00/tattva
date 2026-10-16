import{j as t}from"./iframe-DSdOWv-_.js";import{G as i,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=c.get("cluster"),G={title:"Full screens and layout/Cluster",component:i,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags that wrap",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Cluster gap={2}>
  <Badge>Draft</Badge>
  <Badge>Shared</Badge>
  <Badge>Reviewed</Badge>
</Cluster>`}}}},r={name:"Push apart",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Push the main button to the far end while the rest stay at the start."},source:{code:`<Cluster justify="between" className="w-full">
  <span>3 files</span>
  <Button size="sm">Send</Button>
</Cluster>`}}}},I=["TagsThatWrap","PushApart"];var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as PushApart,e as TagsThatWrap,I as __namedExportsOrder,G as default};
