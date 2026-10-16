import{j as r}from"./iframe-DSdOWv-_.js";import{z as c,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=l.get("citation-hover-card"),F={title:"Trust/CitationHoverCard",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Inline in a sentence",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Point at the number, tab to it, or tap it. Press Escape to close."},source:{code:`<p className="text-body leading-5">
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as InlineInASentence,t as WithoutAQuoteOrTrustLabel,G as __namedExportsOrder,F as default};
