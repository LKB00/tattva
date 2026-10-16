import{j as t}from"./iframe-DSdOWv-_.js";import{D as c,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=d.get("citation-marker"),_={title:"Trust/CitationMarker",component:c,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In a sentence",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Markers sit right after the text they support."},source:{code:`<p className="max-w-sm text-body leading-5 text-fg">
  Revenue grew 12% year on year<CitationMarker n={1} title="Annual report" href="#annual-report" />, driven
  by subscriptions<CitationMarker n={2} title="Q3 earnings call" href="#earnings-call" />.
</p>`}}}},r={name:"Default target",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With no link given, it jumps to the matching source on the same page."},source:{code:"<CitationMarker n={3} />"}}}},O=["InASentence","DefaultTarget"];var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{r as DefaultTarget,e as InASentence,O as __namedExportsOrder,_ as default};
