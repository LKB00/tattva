import{j as e}from"./iframe-J6_2PHET.js";import{b1 as y,b as R}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=R.get("risk-limits"),U={title:"Markets and trading/RiskLimits",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},s={name:"Normal",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Two limits well below their maximum. Money uses a format function."},source:a("RiskLimits")}}},t={name:"Near the limit",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"At 80 percent or more a limit says Near the limit with an icon. The meter stays plain."},source:a("RiskLimits")}}},o={name:"Reached and paused",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"At 100 percent it says Limit reached with a lock. Paused shows in words on each limit and the kill switch is gone."},source:a("RiskLimits")}}},i={name:"Kill switch flow",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Press Stop all trading. It asks in place, and focus lands on Keep trading. Choosing Stop trading pauses."},source:a("RiskLimits")}}},V=["Normal","NearTheLimit","ReachedAndPaused","KillSwitchFlow"];var n,m,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Normal",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two limits well below their maximum. Money uses a format function."
      },
      source: proSource("RiskLimits")
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Near the limit",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 80 percent or more a limit says Near the limit with an icon. The meter stays plain."
      },
      source: proSource("RiskLimits")
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,h,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Reached and paused",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 100 percent it says Limit reached with a lock. Paused shows in words on each limit and the kill switch is gone."
      },
      source: proSource("RiskLimits")
    }
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var g,k,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Kill switch flow",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Stop all trading. It asks in place, and focus lands on Keep trading. Choosing Stop trading pauses."
      },
      source: proSource("RiskLimits")
    }
  }
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};export{i as KillSwitchFlow,t as NearTheLimit,s as Normal,o as ReachedAndPaused,V as __namedExportsOrder,U as default};
