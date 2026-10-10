import{j as r}from"./iframe-J6_2PHET.js";import{bJ as d,b as l}from"./registry-DJg46al6.js";import{a as c}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=l.get("thread-template"),q={title:"Full screens and layout/ThreadTemplate",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"A conversation with a message box",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The title sits above the conversation. Messages scroll while the message box stays put."},source:c("ThreadTemplate")}}},t={name:"Empty placeholders",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"With no title, the content starts at the top. Anything can fill the conversation, not only messages."},source:c("ThreadTemplate")}}},z=["AConversationWithAMessageBox","EmptyPlaceholders"];var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A conversation with a message box",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The title sits above the conversation. Messages scroll while the message box stays put."
      },
      source: proSource("ThreadTemplate")
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Empty placeholders",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no title, the content starts at the top. Anything can fill the conversation, not only messages."
      },
      source: proSource("ThreadTemplate")
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as AConversationWithAMessageBox,t as EmptyPlaceholders,z as __namedExportsOrder,q as default};
