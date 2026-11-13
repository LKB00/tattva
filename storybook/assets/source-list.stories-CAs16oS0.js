import{j as t}from"./iframe-D-pZXX8_.js";import{bG as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=c.get("source-list"),_={title:"Trust/SourceList",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Three sources",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The short quote is optional. Cards sit in two columns on wider screens."},source:{code:`<div className="max-w-2xl">
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
</div>`}}}},G=["ThreeSources","BesideTheReplyItSupports"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{r as BesideTheReplyItSupports,e as ThreeSources,G as __namedExportsOrder,_ as default};
