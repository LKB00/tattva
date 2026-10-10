import{j as s}from"./iframe-J6_2PHET.js";import{a4 as d,b as h}from"./registry-DJg46al6.js";import{a as i}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=h.get("feedback-bar"),C={title:"Trust/FeedbackBar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Interactive",render:()=>s.jsx(s.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Try thumbs down to see the reasons. The line below shows what was sent."},source:i("FeedbackBar")}}},r={name:"Reset for a new message",render:()=>s.jsx(s.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Send feedback, then choose Next message. The bar starts fresh for each new message."},source:i("FeedbackBar")}}},D=["Interactive","ResetForANewMessage"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try thumbs down to see the reasons. The line below shows what was sent."
      },
      source: proSource("FeedbackBar")
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Reset for a new message",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Send feedback, then choose Next message. The bar starts fresh for each new message."
      },
      source: proSource("FeedbackBar")
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{e as Interactive,r as ResetForANewMessage,D as __namedExportsOrder,C as default};
