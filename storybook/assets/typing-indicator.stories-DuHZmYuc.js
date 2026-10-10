import{j as t}from"./iframe-J6_2PHET.js";import{bV as d,b as c}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=c.get("typing-indicator"),R={title:"Conversation/TypingIndicator",component:d,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Default",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:'The default label is "Assistant is thinking".'},source:{code:"<TypingIndicator />"}}}},r={name:"Beside the assistant avatar",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Placed where the reply will appear, so nothing jumps when text arrives."},source:{code:`<div className="flex items-center gap-3">
  <Avatar kind="ai" />
  <TypingIndicator label="The assistant is writing" />
</div>`}}}},V=["Default","BesideTheAssistantAvatar"];var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default label is \\"Assistant is thinking\\"."
      },
      source: {
        code: "<TypingIndicator />"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var o,p,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Beside the assistant avatar",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placed where the reply will appear, so nothing jumps when text arrives."
      },
      source: {
        code: "<div className=\\"flex items-center gap-3\\">\\n  <Avatar kind=\\"ai\\" />\\n  <TypingIndicator label=\\"The assistant is writing\\" />\\n</div>"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{r as BesideTheAssistantAvatar,e as Default,V as __namedExportsOrder,R as default};
