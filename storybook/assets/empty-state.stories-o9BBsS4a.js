import{j as e}from"./iframe-J6_2PHET.js";import{b as x}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import{E as w}from"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=x.get("empty-state"),Q={title:"Empty and error/EmptyState",component:w,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"First use",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A truly empty area invites the first step. The title is positive and the button does what it says."},source:n("EmptyState")}}},s={name:"No results, left-aligned",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"A filtered list is not the same as an empty one. Say the filters caused it and offer to clear them. Left-align the text in small areas."},source:n("EmptyState")}}},o={name:"Permission",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"A person has to act here, so this version adds an amber tag with an icon and words, next to a line that says why."},source:n("EmptyState")}}},a={name:"Compact, no art",render:()=>e.jsx(e.Fragment,{children:t.examples[3].render()}),parameters:{docs:{description:{story:"Crowded places such as a table or a menu skip the drawing."},source:n("EmptyState")}}},V=["FirstUse","NoResultsLeftAligned","Permission","CompactNoArt"];var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "First use",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A truly empty area invites the first step. The title is positive and the button does what it says."
      },
      source: proSource("EmptyState")
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "No results, left-aligned",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A filtered list is not the same as an empty one. Say the filters caused it and offer to clear them. Left-align the text in small areas."
      },
      source: proSource("EmptyState")
    }
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Permission",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A person has to act here, so this version adds an amber tag with an icon and words, next to a line that says why."
      },
      source: proSource("EmptyState")
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,g,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Compact, no art",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Crowded places such as a table or a menu skip the drawing."
      },
      source: proSource("EmptyState")
    }
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};export{a as CompactNoArt,r as FirstUse,s as NoResultsLeftAligned,o as Permission,V as __namedExportsOrder,Q as default};
