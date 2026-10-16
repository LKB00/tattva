import{j as t}from"./iframe-DSdOWv-_.js";import{bt as d,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=c.get("source-list"),_={title:"Trust/SourceList",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Three sources",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The short quote is optional. Cards sit in two columns on wider screens."},source:{code:`<div className="max-w-2xl">
  <SourceList sources={[
    { id: 1, title: "Q3 2026 earnings report", url: "https://example.com/q3", domain: "investor.example.com", snippet: "Total revenue increased 12% quarter over quarter." },
    { id: 2, title: "Customer metrics update", url: "https://example.com/metrics", domain: "example.com" },
    { id: 3, title: "Market overview", url: "https://example.com/market", domain: "research.example.com", snippet: "Enterprise demand remained steady through the quarter." },
  ]} />
</div>`}}}},r={name:"Beside the reply it supports",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"The [1] and [2] in the text point to the first and second source below."},source:{code:`<div className="max-w-2xl space-y-4 text-body-lg leading-7">
  <Markdown>{"Revenue grew 12% quarter over quarter.[1] Churn held steady.[2]"}</Markdown>
  <SourceList sources={[
    { id: 1, title: "Q3 2026 earnings report", url: "https://example.com/q3", domain: "investor.example.com" },
    { id: 2, title: "Customer metrics update", url: "https://example.com/metrics", domain: "example.com" },
  ]} />
</div>`}}}},O=["ThreeSources","BesideTheReplyItSupports"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Three sources",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The short quote is optional. Cards sit in two columns on wider screens."
      },
      source: {
        code: "<div className=\\"max-w-2xl\\">\\n  <SourceList sources={[\\n    { id: 1, title: \\"Q3 2026 earnings report\\", url: \\"https://example.com/q3\\", domain: \\"investor.example.com\\", snippet: \\"Total revenue increased 12% quarter over quarter.\\" },\\n    { id: 2, title: \\"Customer metrics update\\", url: \\"https://example.com/metrics\\", domain: \\"example.com\\" },\\n    { id: 3, title: \\"Market overview\\", url: \\"https://example.com/market\\", domain: \\"research.example.com\\", snippet: \\"Enterprise demand remained steady through the quarter.\\" },\\n  ]} />\\n</div>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Beside the reply it supports",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The [1] and [2] in the text point to the first and second source below."
      },
      source: {
        code: "<div className=\\"max-w-2xl space-y-4 text-body-lg leading-7\\">\\n  <Markdown>{\\"Revenue grew 12% quarter over quarter.[1] Churn held steady.[2]\\"}</Markdown>\\n  <SourceList sources={[\\n    { id: 1, title: \\"Q3 2026 earnings report\\", url: \\"https://example.com/q3\\", domain: \\"investor.example.com\\" },\\n    { id: 2, title: \\"Customer metrics update\\", url: \\"https://example.com/metrics\\", domain: \\"example.com\\" },\\n  ]} />\\n</div>"
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{r as BesideTheReplyItSupports,e as ThreeSources,O as __namedExportsOrder,_ as default};
