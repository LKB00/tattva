import{j as r}from"./iframe-J6_2PHET.js";import{bY as g,b as l}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=l.get("variation-actions"),G={title:"Creating/VariationActions",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Standard actions, with where it came from",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The standard list is Vary, Upscale, Remix and Extend. Extend has no strength choice."},source:s("VariationActions")}}},o={name:"Showing costs",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Each action can show a cost. Use it to say what the action will spend."},source:s("VariationActions")}}},n={name:"Your own strengths, switched off",render:()=>r.jsx(r.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Your own strength choices, starting on the second one. Disabled turns the buttons off."},source:s("VariationActions")}}},H=["StandardActionsWithWhereItCameFrom","ShowingCosts","YourOwnStrengthsSwitchedOff"];var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Standard actions, with where it came from",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The standard list is Vary, Upscale, Remix and Extend. Extend has no strength choice."
      },
      source: proSource("VariationActions")
    }
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Showing costs",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each action can show a cost. Use it to say what the action will spend."
      },
      source: proSource("VariationActions")
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,u,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Your own strengths, switched off",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your own strength choices, starting on the second one. Disabled turns the buttons off."
      },
      source: proSource("VariationActions")
    }
  }
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};export{o as ShowingCosts,e as StandardActionsWithWhereItCameFrom,n as YourOwnStrengthsSwitchedOff,H as __namedExportsOrder,G as default};
