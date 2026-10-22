import{j as t}from"./iframe-C8v_uZy_.js";import{bP as p,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=l.get("summary-card"),E={title:"Trust/SummaryCard",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"With citations and detail",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The numbers open source previews. Show more reveals the detail."},source:{code:`<SummaryCard title="Overview" status="Based on 2 sources"
  detail="Wind power grew faster than solar, and battery storage doubled."
  sources={[
    { id: 1, title: "Annual energy review 2025", url: "https://example.com", domain: "energy.example.gov", snippet: "Renewables supplied 24 percent of generation." },
    { id: 2, title: "Grid storage outlook", url: "https://example.com", domain: "journal.example.edu" },
  ]}
  onFeedback={() => {}}>
  Renewables supplied about a quarter of national generation last year.
  <CitationHoverCard n={1} title="Annual energy review 2025" domain="energy.example.gov" url="https://example.com" trust="Government" />
</SummaryCard>`}}}},r={name:"While the draft is written",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"A spinner beside the status line shows work in progress. Screen readers announce the status words."},source:{code:'<SummaryCard status="Reading the sources" generating disclaimer={null}>Writing a summary of the conversation.</SummaryCard>'}}}},H=["WithCitationsAndDetail","WhileTheDraftIsWritten"];var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "With citations and detail",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The numbers open source previews. Show more reveals the detail."
      },
      source: {
        code: "<SummaryCard title=\\"Overview\\" status=\\"Based on 2 sources\\"\\n  detail=\\"Wind power grew faster than solar, and battery storage doubled.\\"\\n  sources={[\\n    { id: 1, title: \\"Annual energy review 2025\\", url: \\"https://example.com\\", domain: \\"energy.example.gov\\", snippet: \\"Renewables supplied 24 percent of generation.\\" },\\n    { id: 2, title: \\"Grid storage outlook\\", url: \\"https://example.com\\", domain: \\"journal.example.edu\\" },\\n  ]}\\n  onFeedback={() => {}}>\\n  Renewables supplied about a quarter of national generation last year.\\n  <CitationHoverCard n={1} title=\\"Annual energy review 2025\\" domain=\\"energy.example.gov\\" url=\\"https://example.com\\" trust=\\"Government\\" />\\n</SummaryCard>"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "While the draft is written",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A spinner beside the status line shows work in progress. Screen readers announce the status words."
      },
      source: {
        code: "<SummaryCard status=\\"Reading the sources\\" generating disclaimer={null}>Writing a summary of the conversation.</SummaryCard>"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as WhileTheDraftIsWritten,e as WithCitationsAndDetail,H as __namedExportsOrder,E as default};
