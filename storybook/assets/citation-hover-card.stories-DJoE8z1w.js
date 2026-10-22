import{j as r}from"./iframe-C8v_uZy_.js";import{F as c,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=l.get("citation-hover-card"),k={title:"Trust/CitationHoverCard",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Inline in a sentence",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Point at the number, tab to it, or tap it. Press Escape to close."},source:{code:`<p className="text-body leading-5">
  Renewables supplied about a quarter of generation last year.
  <CitationHoverCard n={1} title="Annual energy review 2025" domain="energy.example.gov"
    url="https://example.com" snippet="Renewables supplied 24 percent of national generation, up from 21 percent the year before."
    trust="Government" />
</p>`}}}},t={name:"Without a quote or trust label",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Only what you have. The site icon falls back to the first letter of the website."},source:{code:`<p className="text-body leading-5">
  The report was updated in March.
  <CitationHoverCard n={2} title="Changelog" domain="docs.example.com" url="https://example.com" />
</p>`}}}},G=["InlineInASentence","WithoutAQuoteOrTrustLabel"];var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Inline in a sentence",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Point at the number, tab to it, or tap it. Press Escape to close."
      },
      source: {
        code: "<p className=\\"text-body leading-5\\">\\n  Renewables supplied about a quarter of generation last year.\\n  <CitationHoverCard n={1} title=\\"Annual energy review 2025\\" domain=\\"energy.example.gov\\"\\n    url=\\"https://example.com\\" snippet=\\"Renewables supplied 24 percent of national generation, up from 21 percent the year before.\\"\\n    trust=\\"Government\\" />\\n</p>"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Without a quote or trust label",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Only what you have. The site icon falls back to the first letter of the website."
      },
      source: {
        code: "<p className=\\"text-body leading-5\\">\\n  The report was updated in March.\\n  <CitationHoverCard n={2} title=\\"Changelog\\" domain=\\"docs.example.com\\" url=\\"https://example.com\\" />\\n</p>"
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as InlineInASentence,t as WithoutAQuoteOrTrustLabel,G as __namedExportsOrder,k as default};
