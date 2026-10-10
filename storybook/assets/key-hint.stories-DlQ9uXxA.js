import{j as r}from"./iframe-J6_2PHET.js";import{b as c}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import{K as d}from"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=c.get("key-hint"),w={title:"Controls/KeyHint",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Single keys",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Put the label next to the action it triggers."},source:{code:'<p className="flex items-center gap-2 text-body leading-5">Press <KeyHint>Esc</KeyHint> to close</p>'}}}},t={name:"Combination",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Use one label per key."},source:{code:'<p className="flex items-center gap-1 text-body leading-5"><KeyHint>Ctrl</KeyHint> + <KeyHint>Enter</KeyHint><span className="ml-2 text-fg-muted">Send</span></p>'}}}},z=["SingleKeys","Combination"];var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Single keys",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Put the label next to the action it triggers."
      },
      source: {
        code: "<p className=\\"flex items-center gap-2 text-body leading-5\\">Press <KeyHint>Esc</KeyHint> to close</p>"
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Combination",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use one label per key."
      },
      source: {
        code: "<p className=\\"flex items-center gap-1 text-body leading-5\\"><KeyHint>Ctrl</KeyHint> + <KeyHint>Enter</KeyHint><span className=\\"ml-2 text-fg-muted\\">Send</span></p>"
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as Combination,e as SingleKeys,z as __namedExportsOrder,w as default};
