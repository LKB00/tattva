import{j as o}from"./iframe-J6_2PHET.js";import{bE as c,b as u}from"./registry-DJg46al6.js";import{a as d}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=u.get("take-versions"),R={title:"Video/TakeVersions",component:c,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"History of one clip",render:()=>o.jsx(o.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Five versions: generated, extended, edited, re-cut by a person, and an upscale still running. Make current says nothing was deleted and offers Undo. Up and Down move between versions. On a narrow screen it turns into the pager below."},source:d("TakeVersions")}}},r={name:"One at a time, for a phone",render:()=>o.jsx(o.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The pager layout, which auto uses below 640px wide. Each step previews that version; Make current keeps the same Undo."},source:d("TakeVersions")}}},q=["HistoryOfOneClip","OneAtATimeForAPhone"];var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "History of one clip",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Five versions: generated, extended, edited, re-cut by a person, and an upscale still running. Make current says nothing was deleted and offers Undo. Up and Down move between versions. On a narrow screen it turns into the pager below."
      },
      source: proSource("TakeVersions")
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "One at a time, for a phone",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The pager layout, which auto uses below 640px wide. Each step previews that version; Make current keeps the same Undo."
      },
      source: proSource("TakeVersions")
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as HistoryOfOneClip,r as OneAtATimeForAPhone,q as __namedExportsOrder,R as default};
