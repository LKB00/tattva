import{j as e}from"./iframe-J6_2PHET.js";import{aJ as g,b as y}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=y.get("outline-editor"),C={title:"Slides/OutlineEditor",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},i={name:"Draft, edit and build",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Slides stream in title first, and only the one being written is read-only. Edit any title and the badge changes to Edited by you, with Update outline beside Build slides. Lock a slide to keep it when updating. Build moves to Approved, then Building."},source:s("OutlineEditor")}}},r={name:"Failed, updating and building",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"When drafting stops, what was written stays editable and the error says why, with Try again beside Build. While the AI updates, the outline is read-only under one calm working edge and locked slides say so. While building, it reads as a plain list."},source:s("OutlineEditor")}}},n={name:"Missing title and the slide limit",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:'Press Build slides: the empty title gets the error "Every slide needs a title" and focus, and nothing is built. At the limit, Add is turned off and the reason is written beside it. Remove a slide to see Undo remove.'},source:s("OutlineEditor")}}},G=["DraftEditAndBuild","FailedUpdatingAndBuilding","MissingTitleAndTheSlideLimit"];var d,o,a;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Draft, edit and build",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Slides stream in title first, and only the one being written is read-only. Edit any title and the badge changes to Edited by you, with Update outline beside Build slides. Lock a slide to keep it when updating. Build moves to Approved, then Building."
      },
      source: proSource("OutlineEditor")
    }
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Failed, updating and building",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When drafting stops, what was written stays editable and the error says why, with Try again beside Build. While the AI updates, the outline is read-only under one calm working edge and locked slides say so. While building, it reads as a plain list."
      },
      source: proSource("OutlineEditor")
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,c,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Missing title and the slide limit",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Build slides: the empty title gets the error \\"Every slide needs a title\\" and focus, and nothing is built. At the limit, Add is turned off and the reason is written beside it. Remove a slide to see Undo remove."
      },
      source: proSource("OutlineEditor")
    }
  }
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};export{i as DraftEditAndBuild,r as FailedUpdatingAndBuilding,n as MissingTitleAndTheSlideLimit,G as __namedExportsOrder,C as default};
