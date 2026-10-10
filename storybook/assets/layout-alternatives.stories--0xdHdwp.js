import{j as e}from"./iframe-J6_2PHET.js";import{an as y,b as g}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=g.get("layout-alternatives"),z={title:"Slides/LayoutAlternatives",component:y,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Preview, apply and undo",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Hover or Tab through the layouts: the slide on the left shows each one as a preview and the deck does not change. Enter or a click applies; Undo takes it back. Switch to Shorten to fit to ask again with one more option."},source:s("LayoutAlternatives")}}},r={name:"Loading, some ready, failed and no good layouts",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Placeholders hold the space while layouts are made. A failed request keeps the slide as it is and offers Try again. When nothing is good enough the part says so and offers Edit text."},source:s("LayoutAlternatives")}}},a={name:"In a bottom sheet on a phone",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"Tap a layout to preview it on the slide, then press Apply layout. Closing the sheet drops the preview."},source:s("LayoutAlternatives")}}},D=["PreviewApplyAndUndo","LoadingSomeReadyFailedAndNoGoodLayouts","InABottomSheetOnAPhone"];var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Preview, apply and undo",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Hover or Tab through the layouts: the slide on the left shows each one as a preview and the deck does not change. Enter or a click applies; Undo takes it back. Switch to Shorten to fit to ask again with one more option."
      },
      source: proSource("LayoutAlternatives")
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Loading, some ready, failed and no good layouts",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placeholders hold the space while layouts are made. A failed request keeps the slide as it is and offers Try again. When nothing is good enough the part says so and offers Edit text."
      },
      source: proSource("LayoutAlternatives")
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,h,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "In a bottom sheet on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tap a layout to preview it on the slide, then press Apply layout. Closing the sheet drops the preview."
      },
      source: proSource("LayoutAlternatives")
    }
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{a as InABottomSheetOnAPhone,r as LoadingSomeReadyFailedAndNoGoodLayouts,t as PreviewApplyAndUndo,D as __namedExportsOrder,z as default};
