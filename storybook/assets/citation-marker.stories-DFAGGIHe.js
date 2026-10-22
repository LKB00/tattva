import{j as t}from"./iframe-C8v_uZy_.js";import{G as c,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=d.get("citation-marker"),_={title:"Trust/CitationMarker",component:c,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In a sentence",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Markers sit right after the text they support."},source:{code:`<p className="max-w-sm text-body leading-5 text-fg">
  Revenue grew 12% year on year<CitationMarker n={1} title="Annual report" href="#annual-report" />, driven
  by subscriptions<CitationMarker n={2} title="Q3 earnings call" href="#earnings-call" />.
</p>`}}}},r={name:"Default target",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With no link given, it jumps to the matching source on the same page."},source:{code:"<CitationMarker n={3} />"}}}},G=["InASentence","DefaultTarget"];var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "In a sentence",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Markers sit right after the text they support."
      },
      source: {
        code: "<p className=\\"max-w-sm text-body leading-5 text-fg\\">\\n  Revenue grew 12% year on year<CitationMarker n={1} title=\\"Annual report\\" href=\\"#annual-report\\" />, driven\\n  by subscriptions<CitationMarker n={2} title=\\"Q3 earnings call\\" href=\\"#earnings-call\\" />.\\n</p>"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Default target",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no link given, it jumps to the matching source on the same page."
      },
      source: {
        code: "<CitationMarker n={3} />"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{r as DefaultTarget,e as InASentence,G as __namedExportsOrder,_ as default};
