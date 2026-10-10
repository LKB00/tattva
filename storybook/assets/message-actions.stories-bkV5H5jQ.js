import{j as o}from"./iframe-J6_2PHET.js";import{ay as d,b as y}from"./registry-DJg46al6.js";import{a as c}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=y.get("message-actions"),B={title:"Conversation/MessageActions",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Copy only",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Without the retry option, only Copy shows."},source:c("MessageActions")}}},r={name:"Copy and regenerate",render:()=>o.jsx(o.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:""},source:c("MessageActions")}}},D=["CopyOnly","CopyAndRegenerate"];var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Copy only",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Without the retry option, only Copy shows."
      },
      source: proSource("MessageActions")
    }
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var a,i,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Copy and regenerate",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: proSource("MessageActions")
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as CopyAndRegenerate,e as CopyOnly,D as __namedExportsOrder,B as default};
