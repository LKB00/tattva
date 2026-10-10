import{j as e}from"./iframe-J6_2PHET.js";import{ai as g,b as w}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("inline-edit"),H={title:"Forms/InlineEdit",component:g,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"A three-row fact check",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Change one value and press Done. The Edited tag appears next to its label. The rows stack in a Stack, with a small gap, and each row draws its own divider."},source:n("InlineEdit")}}},a={name:"With validation",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Clear the digits or type letters and press Done. The edit stays open and the message appears under the field with an icon and words."},source:n("InlineEdit")}}},o={name:"Custom display and edit label",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"display shows the value as large money. editLabel gives the button a longer name for screen readers."},source:n("InlineEdit")}}},J=["AThreeRowFactCheck","WithValidation","CustomDisplayAndEditLabel"];var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A three-row fact check",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change one value and press Done. The Edited tag appears next to its label. The rows stack in a Stack, with a small gap, and each row draws its own divider."
      },
      source: proSource("InlineEdit")
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With validation",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Clear the digits or type letters and press Done. The edit stays open and the message appears under the field with an icon and words."
      },
      source: proSource("InlineEdit")
    }
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,h,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Custom display and edit label",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "display shows the value as large money. editLabel gives the button a longer name for screen readers."
      },
      source: proSource("InlineEdit")
    }
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{t as AThreeRowFactCheck,o as CustomDisplayAndEditLabel,a as WithValidation,J as __namedExportsOrder,H as default};
