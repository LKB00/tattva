import{j as t}from"./iframe-J6_2PHET.js";import{bl as d,b as l}from"./registry-DJg46al6.js";import{a as c}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=l.get("split-canvas-template"),G={title:"Full screens and layout/SplitCanvasTemplate",component:d,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"A prompt and a canvas",render:()=>t.jsx(t.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"A document on the right. On a narrow screen the two sides stack."},source:c("SplitCanvasTemplate")}}},r={name:"Empty placeholders",render:()=>t.jsx(t.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Each side has a name for screen readers. The defaults are Conversation on the left and Canvas on the right, and both can be renamed."},source:c("SplitCanvasTemplate")}}},H=["APromptAndACanvas","EmptyPlaceholders"];var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A prompt and a canvas",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A document on the right. On a narrow screen the two sides stack."
      },
      source: proSource("SplitCanvasTemplate")
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Empty placeholders",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each side has a name for screen readers. The defaults are Conversation on the left and Canvas on the right, and both can be renamed."
      },
      source: proSource("SplitCanvasTemplate")
    }
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};export{e as APromptAndACanvas,r as EmptyPlaceholders,H as __namedExportsOrder,G as default};
