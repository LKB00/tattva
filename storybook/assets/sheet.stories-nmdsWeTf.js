import{j as e}from"./iframe-J6_2PHET.js";import{b9 as g,b as S}from"./registry-DJg46al6.js";import{a as i}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=S.get("sheet"),H={title:"Navigation and overlays/Sheet",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Bottom sheet with a case summary",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Opens from the bottom edge. Drag the handle down, press Escape, tap the scrim or use the Close handle to dismiss it."},source:i("Sheet")}}},o={name:"Side sheet on the right",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Full height, sliding in from the right. Use size to choose the width."},source:i("Sheet")}}},s={name:"Not dismissible, with a footer",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Escape, the scrim and dragging do nothing, and there is no Close control. Only the footer buttons close it."},source:i("Sheet")}}},J=["BottomSheetWithACaseSummary","SideSheetOnTheRight","NotDismissibleWithAFooter"];var n,a,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Bottom sheet with a case summary",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Opens from the bottom edge. Drag the handle down, press Escape, tap the scrim or use the Close handle to dismiss it."
      },
      source: proSource("Sheet")
    }
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Side sheet on the right",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Full height, sliding in from the right. Use size to choose the width."
      },
      source: proSource("Sheet")
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,l,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Not dismissible, with a footer",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Escape, the scrim and dragging do nothing, and there is no Close control. Only the footer buttons close it."
      },
      source: proSource("Sheet")
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{r as BottomSheetWithACaseSummary,s as NotDismissibleWithAFooter,o as SideSheetOnTheRight,J as __namedExportsOrder,H as default};
