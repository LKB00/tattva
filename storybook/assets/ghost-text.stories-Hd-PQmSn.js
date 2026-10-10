import{j as r}from"./iframe-J6_2PHET.js";import{aa as m,b as d}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=d.get("ghost-text"),W={title:"Creating/GhostText",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Accept or dismiss",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."},source:{code:`<GhostText typed="Thanks for the update." partialHint="Ctrl + Right accepts one word"
  onAccept={() => accept()} onDismiss={() => dismiss()}>
  {" I will review the draft tomorrow morning."}
</GhostText>`}}}},t={name:"Display only",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Without buttons the hint is plain text. Use it when your editor handles every key."},source:{code:'<GhostText typed="Dear team,">{" thank you for your patience."}</GhostText>'}}}},_=["AcceptOrDismiss","DisplayOnly"];var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Accept or dismiss",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."
      },
      source: {
        code: "<GhostText typed=\\"Thanks for the update.\\" partialHint=\\"Ctrl + Right accepts one word\\"\\n  onAccept={() => accept()} onDismiss={() => dismiss()}>\\n  {\\" I will review the draft tomorrow morning.\\"}\\n</GhostText>"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,p,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Display only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Without buttons the hint is plain text. Use it when your editor handles every key."
      },
      source: {
        code: "<GhostText typed=\\"Dear team,\\">{\\" thank you for your patience.\\"}</GhostText>"
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{e as AcceptOrDismiss,t as DisplayOnly,_ as __namedExportsOrder,W as default};
