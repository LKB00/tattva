import{j as e}from"./iframe-J6_2PHET.js";import{aK as g,b as y}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=y.get("parameter-panel"),D={title:"Creating/ParameterPanel",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Video settings with cost",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Length, shape and a repeat code. The cost changes when the length changes."},source:n("ParameterPanel")}}},s={name:"Style buttons, a number and a busy state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Custom cost text and button text. While busy, the button is off and shows a spinner."},source:n("ParameterPanel")}}},o={name:"One setting, no cost",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"With no cost given, that space stays empty. The repeat code starts fixed here, so the number shows."},source:n("ParameterPanel")}}},G=["VideoSettingsWithCost","StyleButtonsANumberAndABusyState","OneSettingNoCost"];var a,m,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Video settings with cost",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Length, shape and a repeat code. The cost changes when the length changes."
      },
      source: proSource("ParameterPanel")
    }
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Style buttons, a number and a busy state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Custom cost text and button text. While busy, the button is off and shows a spinner."
      },
      source: proSource("ParameterPanel")
    }
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,u,l;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "One setting, no cost",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no cost given, that space stays empty. The repeat code starts fixed here, so the number shows."
      },
      source: proSource("ParameterPanel")
    }
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{o as OneSettingNoCost,s as StyleButtonsANumberAndABusyState,r as VideoSettingsWithCost,G as __namedExportsOrder,D as default};
