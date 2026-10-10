import{j as e}from"./iframe-J6_2PHET.js";import{bb as l,b as S}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=S.get("shot-settings"),z={title:"Video/ShotSettings",component:l,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Settings with cost and a camera move",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Switch to Reel Lite: 8 s, 10 s, 21:9 and some camera moves become unavailable with the reason written out, and the chosen 8 s is marked instead of being changed."},source:n("ShotSettings")}}},o={name:"When Generate has to wait",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"A chosen length the model cannot make, not enough credits, and generating. Each says in words what to do."},source:n("ShotSettings")}}},s={name:"Without a balance",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Leave out balance when credits are shown elsewhere. maxOutputs limits the takes per press."},source:n("ShotSettings")}}},D=["SettingsWithCostAndACameraMove","WhenGenerateHasToWait","WithoutABalance"];var a,i,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Settings with cost and a camera move",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Switch to Reel Lite: 8 s, 10 s, 21:9 and some camera moves become unavailable with the reason written out, and the chosen 8 s is marked instead of being changed."
      },
      source: proSource("ShotSettings")
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "When Generate has to wait",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A chosen length the model cannot make, not enough credits, and generating. Each says in words what to do."
      },
      source: proSource("ShotSettings")
    }
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Without a balance",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out balance when credits are shown elsewhere. maxOutputs limits the takes per press."
      },
      source: proSource("ShotSettings")
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{r as SettingsWithCostAndACameraMove,o as WhenGenerateHasToWait,s as WithoutABalance,D as __namedExportsOrder,z as default};
