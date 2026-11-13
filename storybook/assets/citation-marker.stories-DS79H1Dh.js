import{j as t}from"./iframe-D-pZXX8_.js";import{J as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=d.get("citation-marker"),_={title:"Trust/CitationMarker",component:c,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In a sentence",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Markers sit right after the text they support."},source:{code:`<p className="max-w-sm text-body leading-5 text-fg">
  Revenue grew 12% year on year<CitationMarker n={1} title="Annual report" href="#annual-report" />, driven
  by subscriptions<CitationMarker n={2} title="Q3 earnings call" href="#earnings-call" />.
</p>`}}}},r={name:"Default target",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With no link given, it jumps to the matching source on the same page."},source:{code:"<CitationMarker n={3} />"}}}},J=["InASentence","DefaultTarget"];var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{r as DefaultTarget,e as InASentence,J as __namedExportsOrder,_ as default};
