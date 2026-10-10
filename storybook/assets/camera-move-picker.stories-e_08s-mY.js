import{j as r}from"./iframe-J6_2PHET.js";import{p as d,b as h}from"./registry-DJg46al6.js";import{a as p}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=h.get("camera-move-picker"),R={title:"Video/CameraMovePicker",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Pick one move",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Every move with its name. Hover or Tab onto a tile to see the subject move once."},source:p("CameraMovePicker")}}},o={name:"Combine two, with strength and limits",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made."},source:p("CameraMovePicker")}}},V=["PickOneMove","CombineTwoWithStrengthAndLimits"];var i,n,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Pick one move",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every move with its name. Hover or Tab onto a tile to see the subject move once."
      },
      source: proSource("CameraMovePicker")
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var m,s,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Combine two, with strength and limits",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made."
      },
      source: proSource("CameraMovePicker")
    }
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};export{o as CombineTwoWithStrengthAndLimits,e as PickOneMove,V as __namedExportsOrder,R as default};
