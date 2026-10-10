import{j as e}from"./iframe-J6_2PHET.js";import{a7 as l,b as k}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=k.get("gen-ui-renderer"),H={title:"Generated interfaces/GenUIRenderer",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"A summary that appears piece by piece",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Pieces arrive out of order. The page shows placeholders for what is missing and fills them in. The button asks before it sends anything."},source:n("GenUIRenderer")}}},a={name:"A broken part shows as a quiet card",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"An unknown part, a part with styling, a part missing its name and a part that never arrived. Nothing crashes, and the readable text is kept."},source:n("GenUIRenderer")}}},s={name:"Pick, set and approve",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Each choice goes back to the assistant as an event. Booking the trip is marked as hard to undo, so it asks first and then shows that it is waiting."},source:n("GenUIRenderer")}}},J=["ASummaryThatAppearsPieceByPiece","ABrokenPartShowsAsAQuietCard","PickSetAndApprove"];var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A summary that appears piece by piece",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pieces arrive out of order. The page shows placeholders for what is missing and fills them in. The button asks before it sends anything."
      },
      source: proSource("GenUIRenderer")
    }
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A broken part shows as a quiet card",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An unknown part, a part with styling, a part missing its name and a part that never arrived. Nothing crashes, and the readable text is kept."
      },
      source: proSource("GenUIRenderer")
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Pick, set and approve",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each choice goes back to the assistant as an event. Booking the trip is marked as hard to undo, so it asks first and then shows that it is waiting."
      },
      source: proSource("GenUIRenderer")
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{a as ABrokenPartShowsAsAQuietCard,t as ASummaryThatAppearsPieceByPiece,s as PickSetAndApprove,J as __namedExportsOrder,H as default};
