import{j as t}from"./iframe-J6_2PHET.js";import{D as c,b as d}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=d.get("citation-marker"),_={title:"Trust/CitationMarker",component:c,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In a sentence",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Markers sit right after the text they support."},source:{code:`<p className="max-w-sm text-body leading-5 text-fg">
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
